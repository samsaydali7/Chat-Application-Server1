var express = require('express');
var socket = require('socket.io');
var fs = require('fs');

var FH = require("./filesHandling");
var API = require("./API");

var transmitionInit = require('./transmission');
var relationsInit = require("./relations");
var usersModule = require("./usersModule");
var blockingInit = require("./blocking");
var replications = require("./replications");

var remote = require("./remote-server/index");
var remoteListner = remote.listner;
remoteServersDataListnerInit();

//files

var messages = require('./files/messages.json');
var sentNotes = require('./files/sentNotes.json');
var readNotes = require('./files/readNotes.json');




var app = express();

var port = 80;

app.use(express.static('./public'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.254:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var server = app.listen(port, function () {
    console.log('App lestening on port ' + port);
});
API(app);
var io = socket(server);

var sockets = {};//mine!

io.on('connection', (socket) => {
    var username = socket.handshake.query.username;
    if (username)
        connectionInit(socket, sockets, true, username);
    else
        connectionInit(socket, sockets, false, null);
});


function initSocket(socket, username) {

    //retrive messgaes when offline
    getMessages(socket, username);

    //retrive sentNotes when offline
    getSentNotes(socket, username);

    //retrive readNotes when offline
    getReadNotes(socket, username);

    //retrive contact notes when offline
    getContactNotes(socket, username);

    transmitionInit(socket, sockets);
    relationsInit(socket, sockets);
    blockingInit(socket,sockets);

    usersModule.init(socket, sockets);
    usersModule.setOnline(username, sockets);



    socket.on('disconnect', function () {
        //disconnection(sockets, username);
        console.log(username + ' got disconnect!');
        delete sockets[username];
        usersModule.setOffline(username, sockets);
        remote.sendInActiveUser(username);
    });
}

function connectionInit(socket, sockets, bool, username) {
    if (bool) {
        console.log('Connection made with id = ' + socket.id);
        console.log(username);
        sockets[username] = socket;
        initSocket(socket, username);
        remote.sendActiveUser(username);

    }
    socket.on('c#LogIn', (data) => {
        console.log(data.username);
        username = data.username;
        sockets[username] = socket;
        console.log('Connection made with id = ' + socket.id);
        console.log(username);
        initSocket(socket, username);
        remote.sendActiveUser(username);

    });
}

function getMessages(socket, username) {
    var userMessages = [];
    userMessages = FH.getMessages(username);
    socket.emit('messages', userMessages);
}
function getSentNotes(socket, username) {
    var userSentNotes = [];
    userSentNotes = FH.getSentNotes(username);
    if (userSentNotes !== []) {
        socket.emit('sentNotes', userSentNotes);
    }
}
function getReadNotes(socket, username) {
    var userReadNotes = [];
    userReadNotes = FH.getReadNotes(username);
    if (userReadNotes !== []) {
        socket.emit('readNotes', userReadNotes);
    }
}
function getContactNotes(socket, username) {
    var contactsNotes = [];
    let userContactNotes = FH.getContactNotes(username);
    if (userContactNotes !== []) {
        socket.emit('contactNotes', userContactNotes);
    }
}

function remoteServersDataListnerInit() {
    remoteListner.on("messages", (data) => {
        if (sockets.hasOwnProperty(data.username)) {
            sockets[data.username].emit("messages", data.userMessages);
        }
    });
    remoteListner.on("readNotes", (data) => {
        if (sockets.hasOwnProperty(data.username)) {
            sockets[data.username].emit("readNotes", data.userReadNotes);
        }
    });
    remoteListner.on("blockedMessages", (data) => {
        if (sockets.hasOwnProperty(data.username)) {
            sockets[data.username].emit("messages", data.blockedMessages);
        }
    });
    remoteListner.on("contactNotes", (data) => {
        if (sockets.hasOwnProperty(data.username)) {
            sockets[data.username].emit("contactNotes", data.userContactNotes);
        }
    });

    //relations
    remoteListner.on("contactNote", (data) => {
        if (sockets.hasOwnProperty(data.username)) {
            sockets[data.username].emit("acceptContact", data.contactNote);
        }
    });
    remoteListner.on("addContact", (data) => {
        if (sockets.hasOwnProperty(data.username)) {
            sockets[data.username].emit("addContact2", data.request);
        }
    });
    remoteListner.on("deleteContact", (data) => {
        if (sockets.hasOwnProperty(data.deletedContact)) {
            sockets[data.deletedContact].emit("deleteContact", data);
        }
    });

    //user module
    remoteListner.on("status", (data) => {
        if (sockets.hasOwnProperty(data.username)) {
            sockets[data.username].emit("status", data.status);
        }
    });
    remoteListner.on("profileImage",(data)=>{
        if (sockets.hasOwnProperty(data.username)) {
            sockets[data.username].emit("profileImage", data.profileImage);
        }
    });
}
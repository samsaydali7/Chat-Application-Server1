const WebSocket = require('ws');

const FH = require('../filesHandling');

// other servers should use this server's ip and this port to connect in remote-server module.
var port = 8080;
const wss = new WebSocket.Server({ port: port }, () => {
    console.log("Listening for servers on port " + port);
});

var activeUsers = {};


wss.on('connection', function connection(ws) {
    WSListenToMessages(ws);

    let data = {
        greet: "Connected with server " + port
    }
    sendData(types.GREET, data, ws);
});

function WSListenToMessages(ws) {
    ws.on('message', function incoming(message) {
        message = JSON.parse(message);
        switch (message.type) {
            case "GREET":
                console.log('received: %s', message.greet);
                break;
            case "ACTIVE_USER":
                onActiveUser(message, ws);
                break;
            case "INACTIVE_USER":
                onDisconnect(message, ws);
                break;
            case "UN_BLOCK_CONTACT":
                onUnBlockContact(message);
        }
    });
}

function sendData(type, data, ws) {
    data.type = type;
    ws.send(JSON.stringify(data));
}

function onActiveUser(message, ws) {
    var username = message.username;
    console.log(`${username} is online`);
    activeUsers[username] = ws;

    //get data from this server witch belongs to this client
    getMessages(username);
    getReadNotes(username);
    getContactNotes(username);
}
function onDisconnect(message, ws) {
    var username = message.username;
    console.log(`${message.username} is ofline`);
    delete activeUsers[username];
}

function onUnBlockContact(message, ws) {
    let data = {
        username: message.username,
        unBlockedContact: message.unBlockedContact
    };
    getBlockedMessages(data);
}

function hasUser(username) {
    return activeUsers.hasOwnProperty(username);
}

function sendMessage(data, type, username) {
    sendData(type, data, getWSByusername(username));
}
function getWSByusername(username) {
    if (hasUser(username)) {
        return activeUsers[username];
    }
}

var types = {
    MESSAGE: "MESSAGE", //>
    READ_NOTE: "READ_NOTE", //>
    CONTACT_NOTE: "CONTACT_NOTE", /* -----------------  */
    CONTACT_NOTES: "CONTACT_NOTES", //>
    ADD_CONTACT : "ADD_CONTACT",
    DELETE_CONTACT: "DELETE_CONTACT",
    SENT_NOTE: "SENT_NOTE", //?
    GREET: "GREET", //>
    MESSAGES: "MESSAGES", //>
    READ_NOTES: "READ_NOTES", //>
    SENT_NOTES: "SENT_NOTES", //>
    BLOCKED_MESSAGES: "BLOCKED_MESSAGES", //>
    STATUS: "STATUS",/* -----------------  */
    PROFILE_IAMGE: "PROFILE_IMAGE"/* -----------------  */
}

module.exports = {
    hasUser: hasUser,
    types: types,
    sendMessage: sendMessage
}

function getMessages(username) {
    var userMessages = [];
    userMessages = FH.getMessages(username);
    if (userMessages !== []) {
        let data = {
            userMessages: userMessages,
            username: username
        };
        sendMessage(data, types.MESSAGES, username);
    }
}
function getReadNotes(username) {
    var userReadNotes = [];
    userReadNotes = FH.getReadNotes(username);
    if (userReadNotes !== []) {
        let data = {
            userReadNotes: userReadNotes,
            username: username
        };
        sendMessage(data, types.READ_NOTES, username);
    }
}
function getBlockedMessages(data) {
    var blockedMessages = [];
    blockedMessages = FH.getBlockedMessages(data);
    if (blockedMessages !== []) {
        let ddata = {
            blockedMessages: blockedMessages,
            username: data.username
        };
        sendMessage(ddata, types.BLOCKED_MESSAGES, data.username);
    }
}
function getContactNotes(username) {
    var userContactNotes = [];
    userContactNotes = FH.getBlockedMessages(username);
    if (userContactNotes !== []) {
        let data = {
            userContactNotes: userContactNotes,
            username: username
        };
        sendMessage(data, types.CONTACT_NOTES, username);
    }
}
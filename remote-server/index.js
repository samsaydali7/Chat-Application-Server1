
const WebSocket = require('ws');
const EventEmmiter = require('events').EventEmitter;

var listner = new EventEmmiter();

var servers = [
    /*{
      host: "192.168.1.254",
      port: 8081
    }*/
];


function connectToServer(server) {
    const ws = new WebSocket(`ws://${server.host}:${server.port}/`);
    ws.on('open', function open() {
        WSListenToMessages(ws);
        listner.on("ACTIVE_USER", (data) => {
            sendData("ACTIVE_USER", data, ws);
        });
        listner.on("INACTIVE_USER", (data) => {
            sendData("INACTIVE_USER", data, ws);
        });
        listner.on("UN_BLOCK_CONTACT", (data) => {
            sendData("UN_BLOCK_CONTACT", data, ws);
        });
    });
    ws.on('error', (ws, err) => {
        console.log(`server ${server.host}:${server.port} is down!`);
        connectToServer(server);
    });
}
servers.forEach(server => {
    connectToServer(server);
})


function sendData(type, data, ws) {
    data.type = type;
    ws.send(JSON.stringify(data));
}

function WSListenToMessages(ws) {
    ws.on('message', function incoming(message) {
        message = JSON.parse(message);
        switch (message.type) {
            case types.GREET:
                console.log('received: %s', message.greet);
                break;
            case types.READ_NOTE:
                listner.emit("read", message);
                break;
            case types.MESSAGE:
                listner.emit("chat", message);
                break;
            case types.SENT_NOTE:
                listner.emit("sent", message);
                break;
            case types.CONTACT_NOTE:
                listner.emit("contactNote",message);
                break;
            case types.CONTACT_NOTES:
                listner.emit("contactNotes",message);
                break;
            case types.ADD_CONTACT:
                listner.emit("addContact",message);
                break;
            case types.DELETE_CONTACT:
                listner.emit("deleteContact",message);
                break;
            case types.MESSAGES:
                listner.emit("messages", message);
                break;
            case types.READ_NOTES:
                listner.emit("readNotes", message);
                break;
            case types.SENT_NOTES:
                break;
            case types.BLOCKED_MESSAGES:
                listner.emit("blockedMessages",message);
                break;
            case types.STATUS:
                listner.emit("status", message);
                break;
            case types.PROFILE_IAMGE:
                listner.emit("profileImage", message);
                break;
        }
    });
}

function sendActiveUser(username) {
    let data = {
        username: username
    };
    listner.emit("ACTIVE_USER", data);
}
function sendInActiveUser(username) {
    let data = {
        username: username
    };
    listner.emit("INACTIVE_USER", data);
}
function sendUnblockContact(data) {
    listner.emit("UN_BLOCK_CONTACT", data);
}

module.exports = {
    sendActiveUser: sendActiveUser,
    sendInActiveUser: sendInActiveUser,
    sendUnblockContact: sendUnblockContact,
    listner: listner
}

var types = {
    MESSAGE: "MESSAGE",
    READ_NOTE: "READ_NOTE",
    CONTACT_NOTE: "CONTACT_NOTE",
    CONTACT_NOTES: "CONTACT_NOTES",
    ADD_CONTACT : "ADD_CONTACT",
    DELETE_CONTACT: "DELETE_CONTACT",
    SENT_NOTE: "SENT_NOTE",
    GREET: "GREET",
    MESSAGES: "MESSAGES",
    READ_NOTES: "READ_NOTES",
    SENT_NOTES: "SENT_NOTES",
    BLOCKED_MESSAGES: "BLOCKED_MESSAGES",
    STATUS: "STATUS",
    PROFILE_IAMGE: "PROFILE_IMAGE"
}
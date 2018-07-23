
var FH = require("./filesHandling");
var request = require("request");

var remote = require("./remote-server/index");
var remoteListner = remote.listner;

var otherServers = require('./server-interface/index');

var replication = require("./replications");

function sendMessage(data, sockets) {

    if (!data.hasOwnProperty('date')) {
        data.date = new Date();
    }
    var send = !(isBlocked(data.reciver,data.sender));

    if(send){ //if not blocked
        if (sockets.hasOwnProperty(data.reciver)) {
            sockets[data.reciver].emit('chat', data);
        } else if (otherServers.hasUser(data.reciver)) {
            data.mType = data.type;
            otherServers.sendMessage(data, otherServers.types.MESSAGE, data.reciver);
        }
        else {
            FH.storeMessages(data);
        }
    } 
    else { // if blocked
        FH.sotreBlockedMessages(data);
    }

    sendSentNote(data, sockets);
}

function sendReadNote(data, sockets) {
    if (sockets.hasOwnProperty(data.sender)) {
        sockets[data.sender].emit('read', data);
    }
    else if (otherServers.hasUser(data.sender)) {
        data.mType = data.type;
        otherServers.sendMessage(data, otherServers.types.READ_NOTE, data.sender);
    }
    else {
        FH.storeReadNote(data);
    }
    /*
  data = {
      sender,
      reciver,
      message,
      date,
      type
  }
  */
}

function sendSentNote(data, sockets) {
    if (sockets.hasOwnProperty(data.sender)) {
        sockets[data.sender].emit('sent', data);
    }
    else {
        FH.storeSentNote(data);
    }
}

function sendTyping(data, sockets) {
    if (sockets.hasOwnProperty(data.reciver)) {
        sockets[data.reciver].emit('typing', data);
    }
    /*
    data = {
        sender,
        reciver only , no need for message!,
    }
    */
}
function handleOtherServerData(data) {
    if(data.type == otherServers.types.MESSAGE || data.type == otherServers.types.READ_NOTE){
        delete data.type;
        data.type = data.mType;
        delete data.mType;
        return data;
    }else 
        return false;

}

module.exports = (socket, sockets) => {

    socket.on('chat', data => sendMessage(data, sockets));
    // when reciver emits that he read a message => the sender recives same data including reciver and message!
    socket.on('read', data => sendReadNote(data, sockets));
    // when a sender emits that he is typing to reciver => the reciver recives that notfication
    socket.on('typing', data => sendTyping(data, sockets));

    remoteListner.on('chat', (data) => {
        data = handleOtherServerData(data);
        if(data){
            sendMessage(data, sockets);
        }
    });
    remoteListner.on('read', (data) => {
        data = handleOtherServerData(data);
        sendReadNote(data, sockets);
    });

}

function isBlocked(username, blockedContact) {
    var users = replication.getUsers();
    var bool = false;
    if (users.hasOwnProperty(username)) {
        var user = users[username];
        let arr = Array.from(user['blockedContacts']);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === blockedContact) {
                bool = true;
                break;
            }
        }
    }
    return bool;
}


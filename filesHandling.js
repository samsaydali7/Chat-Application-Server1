
var fs = require('fs');

//files
var messages = require('./files/messages.json');
var sentNotes = require('./files/sentNotes.json');
var readNotes = require('./files/readNotes.json');
var contactsNotes = require("./files/contactsNotes.json");
var blockedMessages = require('./files/blockedMessages.json');


function storeMessages(data) {
    var sender = data.sender;
    var reciver = data.reciver;
    var message = data.message;
    var type = data.type

    var date = data.date;
    var messageInfo = {
        message: message,
        sender: sender,
        date: date,
        type: type
    }
    if (!messages[reciver])
        messages[reciver] = [];

    messages[reciver].push(messageInfo);
    fs.writeFileSync('./files/messages.json', JSON.stringify(messages));
    //res.json(messages);
}

function getMessages(username) {
    var messes = messages[username];
    if (!messes) {
        messages[username] = [];
        fs.writeFileSync('./files/messages.json', JSON.stringify(messages));
        return [];
    }
    else {
        messages[username] = [];
        fs.writeFileSync('./files/messages.json', JSON.stringify(messages));
        return messes;
    }
}

function storeSentNote(data) {
    var sender = data.sender;
    var reciver = data.reciver;
    var message = data.message;

    var date = data.date;
    var messageInfo = {
        message: message,
        sender: sender,
        reciver:reciver,
        date: date,
    }
    if (!sentNotes[sender])
        sentNotes[sender] = [];

    sentNotes[sender].push(messageInfo);
    fs.writeFileSync('./files/sentNotes.json', JSON.stringify(sentNotes));
}

function getSentNotes(username) {
    var notes = sentNotes[username];
    if (!notes) {
        sentNotes[username] = [];
        fs.writeFileSync('./files/sentNotes.json', JSON.stringify(sentNotes));
        return [];
    }
    else {
        sentNotes[username] = [];
        fs.writeFileSync('./files/sentNotes.json', JSON.stringify(sentNotes));
        return notes;
    }
}

function storeReadNote(data) {
    var sender = data.sender;
    var reciver = data.reciver;
    var message = data.message;

    var date = data.date;
    var messageInfo = {
        message: message,
        sender: sender,
        reciver: reciver,
        date: date,
    }
    if (!readNotes[sender])
        readNotes[sender] = [];

    readNotes[sender].push(messageInfo);
    fs.writeFileSync('./files/readNotes.json', JSON.stringify(readNotes));
}

function getReadNotes(username) {
    var notes = readNotes[username];
    if (!notes) {
        readNotes[username] = [];
        fs.writeFileSync('./files/readNotes.json', JSON.stringify(readNotes));
        return [];
    }
    else {
        readNotes[username] = [];
        fs.writeFileSync('./files/readNotes.json', JSON.stringify(readNotes));
        return notes;
    }
}
function storeContactNote(data) {
    if (contactsNotes.hasOwnProperty(data.username)) {
        contactsNotes[data.username].push(data.addedContact);
    }
    else {
        contactsNotes[data.username] = [];
        contactsNotes[data.username].push(data.addedContact);
        fs.writeFileSync('./files/contactsNotes.json', JSON.stringify(contactsNotes));
    }
}

function getContactNotes(username) {
    let notes = [];
    if (contactsNotes.hasOwnProperty(username)) {
        notes = contactsNotes[username];
        contactsNotes[username] = [];
        fs.writeFileSync('./files/contactsNotes.json', JSON.stringify(contactsNotes));
    }
    return notes;
}
function sotreBlockedMessages(data) {
    var sender = data.sender;
    var reciver = data.reciver;
    var message = data.message;
    var type = data.type
    var date = data.date;
    var messageInfo = {
        message: message,
        sender: sender,
        date: date,
        type: type
    }
    if (!blockedMessages[reciver])
        blockedMessages[reciver] = {};
    if (!blockedMessages[reciver][sender]) {
        blockedMessages[reciver][sender] = [];
    }

    blockedMessages[reciver][sender].push(messageInfo);
    fs.writeFileSync('./files/blockedMessages.json', JSON.stringify(blockedMessages));
}

function getBlockedMessages(data) {
    var username = data.username;
    var unblockedContact = data.unBlockedContact;
    if(!blockedMessages[username]){
        return [];
    }
    if (!blockedMessages[username][unblockedContact]) {
        return [];
    }
    let messages = blockedMessages[username][unblockedContact];
    blockedMessages[username][unblockedContact] = [];
    fs.writeFileSync('./files/blockedMessages.json', JSON.stringify(blockedMessages));
    messages.forEach(message => {
        message.reciver = data.username;
    });
    return messages;
}

module.exports = {
    storeMessages:storeMessages,
    getMessages:getMessages,
    storeReadNote:storeReadNote,
    getReadNotes:getReadNotes,
    storeSentNote:storeSentNote,
    getSentNotes:getSentNotes,
    storeContactNote:storeContactNote,
    getContactNotes:getContactNotes,
    sotreBlockedMessages:sotreBlockedMessages,
    getBlockedMessages:getBlockedMessages
}

var fs = require('fs');
var request = require("request");
var FH = require("./filesHandling");
var replications = require("./replications");
var otherServers = require('./server-interface/index');
var enc = require('./encryption');

function addContact(data, sockets) {
    let bool = replications.addContact(data);
    if (bool) {
        let form = {
            username: data.username,
            addedContact: data.addedContact
        };
        request.post("http://localhost:443/addContact", (err, resp, body) => {
            body = JSON.parse(body);
            if (body.bool) {
                if (sockets.hasOwnProperty(data.addedContact))
                    sockets[data.addedContact].emit("addContact2", body.data);
                else if (otherServers.hasUser(data.addedContact)) {
                    let ddata = {
                        username: data.addedContact,
                        request: body.data
                    }
                    otherServers.sendMessage(ddata, otherServers.types.ADD_CONTACT, data.addedContact);
                }
            }
        }).form(form);
    }

    /*
        data = {
            username,
            addedContact
        }
    */
}
function acceptContact(data, sockets) {
    console.log(data);
    var ok = replications.acceptContact(data);
    console.log(ok);
    if (ok) {

        let form = {
            username: data.username,
            addedContact: data.addedContact
        };

        request.post("http://localhost:443/acceptContact", (err, resp, body) => {
            bool = JSON.stringify(body);
            if (bool) {
                let users = replications.getUsers();
                let UsersProfileImages = replications.getUsersProfileImages();
                if (sockets[data.addedContact]) {
                    let AKNData = {
                        fullname: users[data.username].fullname,
                        username: data.username,
                        yearOfBirth: users[data.username].yearOfBirth,
                        profileImage: UsersProfileImages[data.username],
                        status: users[data.username].status,
                        lastSeen: users[data.username].lastSeen,
                        publicKey: JSON.parse(enc.decrypt(users[data.username].publicKey))
                    };
                    sockets[data.addedContact].emit('acceptContactAKN', AKNData);
                }
                let contactNote = {
                    fullname: users[data.addedContact].fullname,
                    username: data.addedContact,
                    yearOfBirth: users[data.addedContact].yearOfBirth,
                    profileImage: UsersProfileImages[data.addedContact],
                    status: users[data.addedContact].status,
                    lastSeen: users[data.addedContact].lastSeen,
                    publicKey: JSON.parse(enc.decrypt(users[data.addedContact].publicKey))
                };
                if (sockets[data.username]) {
                    sockets[data.username].emit('acceptContact', contactNote);
                }
                else if (otherServers.hasUser(data.username)) {
                    let ddata = {
                        username: data.username,
                        contactNote: contactNote
                    }
                    otherServers.sendMessage(ddata, otherServers.types.CONTACT_NOTE, data.username);
                }
                else {
                    FH.storeContactNote(contactNote);
                }
            }

        }).form(form);
    }


    /*
       data = {
          username,
          addedContact
        }
    */
}
function deleteContact(data, sockets) {
    var ok = replications.deleteContact(data);
    if (ok) {
        let form = {
            username: data.username,
            deletedContact: data.deletedContact
        };
        request.post("http://localhost:443/deleteContact", (err, resp, body) => {
            bool = JSON.parse(body);
            if (bool) {
                if (sockets[data.username]) {
                    sockets[data.username].emit('deleteContactAKN', data);
                }
                if (sockets[data.deletedContact]) {
                    sockets[data.deletedContact].emit('deleteContact', data);
                }
                else if (otherServers.hasUser(data.deletedContact)) {
                    otherServers.sendMessage(data, otherServers.types.DELETE_CONTACT, data.deletedContact);
                }
            }

        }).form(form);
    }
    /*
       data = {
          username,
          deletedContact
        }
    */

}
function declineContact(data, sockets) {
    var ok = replications.declineContact(data);
    if (ok) {
        let form = {
            username: data.username,
            addedContact: data.addedContact
        };
        request.post("http://localhost:443/declineContact", (err, resp, body) => {
            if (sockets.hasOwnProperty(data.addedContact)) {
                sockets[data.addedContact].emit("declineContactAKM",data);
            }
        }).form(form);
    }
}
function addContactByPIN(data, sockets) {
    let form = {
        pin: data.pin,
        username: data.username
    };
    request.post("http://localhost:443/userByPin", (err, resp, body) => {
        var body = JSON.parse(body);
        console.log(body);
        if (body.bool) {
            addContact(body.data, sockets);
        }
    }).form(form);
    /*
        data = {
            username,
            pin
        }
    */
}

module.exports = (socket, sockets) => {
    socket.on('addContact2', data => addContact(data, sockets));
    socket.on('acceptContact', data => acceptContact(data, sockets));
    socket.on('deleteContact', data => deleteContact(data, sockets));
    socket.on('declineContact', data => declineContact(data, sockets));
    socket.on("addContactByPIN", data => addContactByPIN(data, sockets));
}
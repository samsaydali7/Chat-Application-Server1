const request = require('request');


//files
var defaults = {};
var users = {};
var usersByPIN = {};
var usersProfileImages = {};
var usersEmails = {};

var interval = 1000;

//sync files every one minute!
request.get("http://localhost:443/defaults", (err, res, body) => {
    if (err) {
        console.log('Users main server is down!');
    }
    else {
        defaults = JSON.parse(body);
    }
});
var usersLoop = setInterval(() => {
    request.get("http://localhost:443/users", (err, res, body) => {
        if (err) {
            console.log('Users main server is down!');
        }
        else {
            users = JSON.parse(body);
        }

    });
}, interval);
var usersByPINLoop = setInterval(() => {
    request.get("http://localhost:443/usersByPIN", (err, res, body) => {
        if (err) {
            console.log('Users main server is down!');
        }
        else {
            usersByPIN = JSON.parse(body);
        }

    });
}, interval);
var usersProfileImages = setInterval(() => {
    request.get("http://localhost:443/usersProfileImages", (err, res, body) => {
        if (err) {
            console.log('Users main server is down!');
        }
        else {
            usersProfileImages = JSON.parse(body);
        }

    });
}, interval);

var usersEmailsLoop = setInterval(() => {
    request.get("http://localhost:443/usersEmails", (err, res, body) => {
        if (err) {
            console.log('Users main server is down!');
        }
        else {
            usersEmails = JSON.parse(body);
        }

    });
}, interval);



module.exports = {
    getUsers: getUsers,
    getUsersProfileImages: getUsersProfileImages,
    addContact: addContact,
    acceptContact: acceptContact,
    deleteContact: deleteContact,
    declineContact: declineContact,
    blockContact: blockContact,
    unBlockContact: unBlockContact,
    getContacts: getContacts,
    getUsersEmails:getUsersEmails,
}

function getUsers() {
    return users;
}

function getUsersProfileImages() {
    return usersProfileImages;
}
function getUsersEmails(){
    return usersEmails;
}
function addContact(data) {
    var username = data.username;
    var addedContact = data.addedContact;

    let cdata = {};
    var bool;

    if (users.hasOwnProperty(username)) {
        var user = users[username];
        bool = true;
        let arr = Array.from(user['contacts']);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === addedContact) {
                bool = false;
            }
        }
        arr = Array.from(users[addedContact].contactsRequests);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].username === username) {
                bool = false;
            }
        }
        if (bool) {
            cdata = {
                username: username,
                fullname: users[username].fullname,
                profileImage: usersProfileImages[username]
            };
            users[addedContact].contactsRequests.push(cdata);
        }
    }
    return bool;
}
function acceptContact(data) {

    var username = data.username;
    var addedContact = data.addedContact
    users[username].contacts.push(addedContact);
    users[addedContact].contacts.push(username);
    var index = -1;
    var bool = false;
    var arr = Array.from(users[addedContact].contactsRequests);
    for (i = 0; i < arr.length; i++) {
        if (arr[i].username == username) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        users[addedContact].contactsRequests.splice(index, 1);
        bool = true;
    }
    return bool;
}
function deleteContact(data) {

    let username = data.username;
    let deletedContact = data.deletedContact;
    var index = -1;
    var index2 = -1;
    var bool = false;
    index = (Array.from(users[username].contacts)).indexOf(deletedContact);
    index2 = (Array.from(users[deletedContact].contacts)).indexOf(username);
    if (index2 > -1) {
        users[deletedContact].contacts.splice(index2, 1);
    }
    if (index > -1) {
        users[username].contacts.splice(index, 1);
        bool = true;
    }
    return bool;
}
function declineContact(data) {
    let username = data.username;
    let addedContact = data.addedContact;
    var index = -1, arr;
    arr = Array.from(users[addedContact].contactsRequests);
    var bool = false;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].username == username) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        users[addedContact].contactsRequests.splice(index, 1);
        bool = true;
    }
    return bool;
}

function blockContact(data) {
    var username = data.username;
    var blockedContact = data.blockedContact;

    var bool = true;
    if (users.hasOwnProperty(username)) {
        var user = users[username];
        let arr = user['blockedContacts'];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === blockedContact) {
                bool = false;
                break;
            }
        }
        if (bool) {
            user['blockedContacts'].push(blockedContact);
        }
    }
    return bool;
}

function unBlockContact(data) {
    var username = data.username;
    var unBlockedContact = data.unBlockedContact;
    var blockedArray = Array.from(users[username].blockedContacts);
    var i =  -1 
    i = blockedArray.indexOf(unBlockedContact);
    var found = false;
    if (i>-1) {
        blockedArray.splice(i, 1);
        users[username].blockedContacts = blockedArray;
        found = true;
    }
    return found;
}

function getContacts(username) {
    return users[username].contacts;
}
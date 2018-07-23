const request = require("request");
var enc = require('./encryption');
const bodyParser = require('body-parser');
const replications = require('./replications');

function login(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var form = {
        username: username,
        password: password
    };
    function cb(err, resp, body) {
        res.end(body);
    }
    request.post("http://localhost:443/login", (err, resp, body) => {
        cb(err, resp, body);
    }).form(form);
}
function loginLocal(req, res) {
    //get local users file 
    var users = replications.getUsers();
    var usersProfileImage = replications.getUsersProfileImages();

    var username, password;

    if (req.body.username) {
        username = req.body.username;
        password = req.body.password;
    }
    else {
        username = req.query.username;
        password = req.query.password;
    }
    username = ((new String(username)).toLowerCase());

    var bool = false;

    if (users.hasOwnProperty(username)) {
        if (enc.decrypt(users[username].pass) === password) {
            bool = true;
        }
        if (bool) {
            var contacts = [];
            var blockedContacts = [];
            if (users[username].contacts.length > 0) {
                users[username].contacts.forEach(contact => {
                    contact = contact.toString();

                    var obj = {
                        fullname: users[contact].fullname,
                        username: contact,
                        yearOfBirth: users[contact].yearOfBirth,
                        profileImage: usersProfileImage[contact],
                        status: users[contact].status,
                        lastSeen: users[contact].lastSeen,
                        publicKey: JSON.parse(enc.decrypt(users[contact].publicKey))
                    }
                    contacts.push(obj);
                });
            }
            //
            if (users[username].blockedContacts.length > 0) {
                users[username].blockedContacts.forEach(contact => {
                    contact = contact.toString();

                    var obj = {
                        fullname: users[contact].fullname,
                        username: contact,
                        yearOfBirth: users[contact].yearOfBirth,
                        profileImage: usersProfileImage[contact]
                    }
                    blockedContacts.push(obj.username);
                });
            }
            var contactsRequests = [];
            if (users[username].hasOwnProperty('contactsRequests')) {
                contactsRequests = users[username].contactsRequests;
            }
            res.json({
                ok: bool,
                username: username,
                email: users[username].email,
                fullname: users[username].fullname,
                yearOfBirth: users[username].yearOfBirth,
                profileImage: usersProfileImage[username],
                contactsRequests: contactsRequests,
                pin: users[username].pin,
                privacy: users[username].privacy,
                message: "Logged In!",
                contacts: contacts,
                blockedContacts: blockedContacts,
                privateKey: JSON.parse(enc.decrypt(users[username].privateKey))
            });
        }
        else {
            res.json({
                ok: bool,
                message: "Username or Password Entered Wrong!"
            });
        }
    }

    else {
        res.json({
            ok: bool,
            message: "Username or Password Entered Wrong!"
        });
    }



}
function searchLocal(req, res) {
    //get local users file 
    var users = replications.getUsers();
    var usersProfileImage = replications.getUsersProfileImages();


    var pattern;
    var user;

    if (req.body.username) {
        pattern = "^" + req.body.username;
        user = req.body.user;
    }
    else {
        pattern = "^" + req.query.username;
        user = req.query.user;
    }

    pattern = new RegExp(pattern, 'i');
    var keys = Object.keys(users);
    keys = takeOfContactsFromResault(keys, user);
    keys = takeOfPrivateUsersFromResault(keys);
    var resUsers = [];
    for (var i = 0; i < keys.length; i++) {
        if (pattern.test(keys[i])) {
            let resp = {
                username: keys[i],
                fullname: users[keys[i]].fullname,
                profileImage: usersProfileImage[keys[i]]
            }
            resUsers.push(resp);
        }
    }
    res.json(resUsers);
}
function signup(req, res) {
    var username, password, email, fullname, yearOfBirth;
    if (req.body.username) {
        username = req.body.username;
        password = req.body.password;
        email = req.body.email;
        fullname = req.body.fullname;
        yearOfBirth = req.body.yearOfBirth;
    } else {
        username = req.query.username;
        password = req.query.password;
        email = req.query.email;
        fullname = req.query.fullname;
        yearOfBirth = req.query.yearOfBirth;
    }

    var form = {
        username: username,
        password: password,
        email: email,
        fullname: fullname,
        yearOfBirth: yearOfBirth,
    };
    function cb(err, resp, body) {
        res.end(body);
    }
    request.post("http://localhost:443/signup", (err, resp, body) => {
        cb(err, resp, body);
    }).form(form);
}
function search(req, res) {
    var username = req.body.username;
    var user = req.body.user;
    var form = {
        username: username,
        user: user
    };
    request.post("http://localhost:443/search2", (err, resp, body) => {
        res.end(body);
    }).form(form);
}

function search1(req, res) {
    var username = req.body.username;
    var form = {
        username: username
    };
    request.post("http://localhost:443/search", (err, resp, body) => {
        res.end(body);
    }).form(form);
}

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.post('/login', (req, res) => {
        loginLocal(req, res);
    });
    app.post('/signup', (req, res) => {
        signup(req, res);
    });
    app.post('/search2', (req, res) => {
        searchLocal(req, res);
    });
    app.post('/search', (req, res) => {
        search1(req, res);
    });

    app.get('*', function (req, res) {
        res.redirect('/');
    });
}


function takeOfContactsFromResault(keys, user) {
    //get local users file 
    var users = replications.getUsers();
    var usersProfileImage = replications.getUsersProfileImages();
    var indexOfUser = keys.indexOf(user);
    keys.splice(indexOfUser, 1);
    console.log(user);
    var contactsList = users[user].contacts;
    for (var i = 0; i < contactsList.length; i++) {
        var indexOfUser = keys.indexOf(contactsList[i]);
        keys.splice(indexOfUser, 1);
    }
    return keys;
}
function takeOfPrivateUsersFromResault(keys) {
    //get local users file 
    var users = replications.getUsers();
    var usersProfileImage = replications.getUsersProfileImages();
    var newKeys = [];
    for (i = 0; i < keys.length; i++) {
        if (users[keys[i]].privacy == "public") {
            newKeys.push(keys[i]);
        }
    }
    return newKeys;
}
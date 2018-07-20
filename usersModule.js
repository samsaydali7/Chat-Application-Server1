const request = require('request');
var otherServers = require('./server-interface/index');
var replications = require("./replications");

function setOnline(username, sockets) {
    var form = {
        username: username
    };
    request.post("http://localhost:443/setOnline", (err, resp, body) => {
        emitStatus(username, sockets);
    }).form(form);
}
function setOffline(username, sockets) {
    var form = {
        username: username
    };
    request.post("http://localhost:443/setOffline", (err, resp, body) => {
        emitStatus(username, sockets);
    }).form(form);
}
function emitStatus(username, sockets) {
    let form = {
        username: username
    };
    request.post("http://localhost:443/getStatus", (err, resp, body) => {
        let status = JSON.parse(body);
        request.post("http://localhost:443/getContacts", (err, resp, body) => {
            let contacts = Array.from(JSON.parse(body));
            for (i = 0; i < contacts.length; i++) {
                if (sockets[contacts[i]]) {
                    sockets[contacts[i]].emit('status', status);
                } else if (otherServers.hasUser(contacts[i])) {
                    let ddata = {
                        username: contacts[i],
                        status: status
                    }
                    otherServers.sendMessage(ddata, otherServers.types.STATUS, contacts[i]);
                }
            }
        }).form(form);
    }).form(form);
}
function profileImageUpload(data, sockets) {
    /* data={
             username,
             profileImage ...base64
    } */
    let form = {
        username: data.username,
        profileImage: data.profileImage
    };
    request.post("http://localhost:443/profileImageUpload", (err, resp, body) => {

        if (sockets.hasOwnProperty(data.username)) {
            sockets[data.username].emit("userProfileImage", data);
        }

        var contacts = Array.from(replications.getContacts(data.username));
        contacts.forEach((contact) => {
            if (sockets.hasOwnProperty(contact)) {
                sockets[contact].emit('profileImage', data);
            }
            else if (otherServers.hasUser(contact)) {
                let ddate = {
                    username: contact,
                    profileImage: data
                }
                otherServers.sendMessage(ddate, otherServers.types.PROFILE_IAMGE, contact);

            }
        });


    }).form(form);
}

// new functions 
function setPrivacy(data,sockets){
    var form = {
        username:data.username,
        privacy :data.privacy
    };
    request.post("http://localhost:443/setPrivacy",(err,resp,body)=>{
        if(sockets[data.username]){
            sockets[data.username].emit('setPrivacyAKN',JSON.parse(body));
        }
    }).form(form);
}
function setPassword(data,sockets){
    var form = {
        username: data.username,
        oldPassword: data.oldPassword,
        newPassword: data.newPassword
    };
    request.post("http://localhost:443/setPassword",(err,resp,body)=>{
        if(sockets[data.username]){
            sockets[data.username].emit('setPasswordAKN',JSON.parse(body));
        }
    }).form(form);
}
function resetPIN(data,sockets){
    var form = {
        username:data.username,
    };
    request.post("http://localhost:443/resetPIN",(err,resp,body)=>{
        if(sockets[data.username]){
            sockets[data.username].emit('resetPINAKN',JSON.parse(body));
        }
    }).form(form);
}


module.exports = {
    setOnline: setOnline,
    setOffline: setOffline,
    emitStatus: emitStatus,
    init: (socket, sockets) => {
        socket.on('profileImage', data => profileImageUpload(data, sockets));
        socket.on('setPrivacy', data => setPrivacy(data,sockets));
        socket.on('setPassword', data => setPassword(data,sockets));
        socket.on('resetPIN', data => resetPIN(data,sockets));
    }
}

var request = require("request");
var FH = require("./filesHandling");
var replication = require("./replications");

var remote = require("./remote-server/index");


function blockContact(data,sockets) {
    var ok = replication.blockContact(data);
    if (ok) {
        let form = {
            username: data.username,
            blockedContact: data.blockedContact
        };
        request.post("http://localhost:443/blockContact", (err, resp, body) => {
            if(JSON.parse(body)){
                if(sockets.hasOwnProperty(data.username)){
                    sockets[data.username].emit('blockContactAKM',data);
                }
            }
        }).form(form);
    }
    /*
        data = {
            username,
            blockedContact
        }
    */
}
function unblockContact(data, sockets) {
    var ok = replication.unBlockContact(data);
    if (ok) {
        let form = {
            username: data.username,
            unBlockedContact: data.unBlockedContact
        };
        request.post("http://localhost:443/unblockContact", (err, resp, body) => {
            if(JSON.parse(body)){
                if(sockets.hasOwnProperty(data.username)){
                    sockets[data.username].emit('unBlockContactAKM',data);
                    let messages = FH.getBlockedMessages(data);
                    sockets[data.username].emit('messages', messages);
                    remote.sendUnblockContact(data);
                }
            }
        }).form(form);

    }

    /*
        data = {
            username,
            unBlockedContact
        }
    */
}

module.exports = (socket,sockets) => {
    socket.on('blockContact', data => blockContact(data,sockets));
    socket.on('unblock', data => unblockContact(data, sockets));
}
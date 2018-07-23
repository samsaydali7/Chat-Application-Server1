// Query DOM
var message = document.getElementById('message'),
    sender = document.getElementById('sender'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    reciver = document.getElementById('reciver'),
    login = document.getElementById('login'),
    feedback = document.getElementById('feedback'),
    add = document.getElementById('add'),
    acceptButton = document.getElementById('accept'),
    deleteButton = document.getElementById('deleteB'),
    acceptedContact = document.getElementById("acceptedContact"),
    deletedContact = document.getElementById("deletedContact"),
    addedUser = document.getElementById('addedUser'),
    block = document.getElementById('block'),
    blockedUser = document.getElementById('blockedUser'),
    unblock = document.getElementById('unblock'),
    unblockedContact = document.getElementById('unblockedContact'),
    sendImage = document.getElementById('sendImage'),
    imageReciver = document.getElementById('imageReciver'),
    imgTest = document.getElementById('imgTest'),
    upload = document.getElementById('upload');

var lastImage = "";
var profileImageString = "";

var socket;
login.addEventListener('click',()=>{
    var user = sender.value;
    socket = io.connect(`http://localhost:80/?username=${user}`);
    socket.on('chat', (data) => {
        switch(data.type){
            case 'text':{
                output.innerHTML += '<p><strong>' + data.sender + ': </strong>' + data.message + '</p>';
                break;
            }
            case 'image':{
                var newImage = document.createElement('img');
                newImage.src = data.message;
                newImage.classList.add('imgMessage');
                output.innerHTML += '<p><strong>' + data.sender + ': </strong><br>' + newImage.outerHTML + '<br>';
                break; 
            }
        }
        socket.emit('read',data);
    });
    
    socket.on('typing', function (data) {
        //feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
    });
    
    socket.on('messages',(messages)=>{
        messages.forEach(messageInfo => {
            switch(messageInfo.type){
                case 'text':{
                    output.innerHTML += '<p><strong>' + messageInfo.sender + ': </strong>' + messageInfo.message + '</p>';
                    break;
                }
                case 'image':{
                    var newImage = document.createElement('img');
                    newImage.src = messageInfo.message;
                    newImage.classList.add('imgMessage');
                    output.innerHTML += '<p><strong>' + messageInfo.sender + ': </strong><br>' + newImage.outerHTML + '<br>';
                    break; 
                }
            }
            socket.emit('read',{
                sender:messageInfo.sender,
                reciver:sender.value,
                message:messageInfo.message
            });
        });
    });
    socket.on('sent',(data)=>{
        feedback.innerHTML += '<p><em> message with date ' + data.date + ' is sent to server! ...</em></p>';
    })
    socket.on('read',(data)=>{
        feedback.innerHTML += '<p><em>' + data.reciver + ' has read message with date ' + data.date + ' ...</em></p>';
    });
    socket.on('readNotes',(notes)=>{
        notes.forEach(note=>{
            feedback.innerHTML += '<p><em>' + note.reciver + ' has read message ' + note.message + ' ...</em></p>';
        })
    });
    socket.on('sentNotes',(notes)=>{
        notes.forEach(note=>{
            feedback.innerHTML += '<p><em>' + note.message + ' is sent to server! ...</em></p>';
        })
    });
    socket.on('status',(data)=>{
        feedback.innerHTML += `<p><em> ${data.username} is ${data.status} and lastSeen on ${data.lastSeen} ...</em></p>`;
    });
    socket.on('profileImage',(data)=>{
        feedback.innerHTML += `<p><em> ${data.username} changed profile image ...</em></p>`;
    });
    socket.on('addContact2',(data)=>{
        feedback.innerHTML += `<p><em> ${data.username} aka ${data.fullname} sent you add request ...</em></p>`;
    });
    socket.on("acceptContact",(data)=>{
        feedback.innerHTML += `<p><em> ${data.addedContact} accepted your request ...</em></p>`;
    });
    socket.on("deleteContact",(data)=>{
        feedback.innerHTML += `<p><em> ${data.username} deleted you ...</em></p>`;
    });
});

btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        sender: sender.value,
        reciver: reciver.value,
        type:'text'
    });
    output.innerHTML += '<p><strong>' + sender.value + ': </strong>' + message.value + '</p>';
    message.value = "";
});
message.addEventListener('keypress', () => {
    socket.emit('typing', sender.value)
});

add.addEventListener('click',()=>{
    let data = {
        username: sender.value,
        addedContact: addedUser.value
    };
    console.log(data);
    socket.emit('addContact2',data);
});
acceptButton.addEventListener('click',()=>{
    let data = {
        username: acceptedContact.value,
        addedContact: sender.value
    };
    socket.emit('acceptContact',data);
});
deleteButton.addEventListener('click',()=>{
    let data = {
        username: sender.value,
        deletedContact: deletedContact.value
    };
    socket.emit('deleteContact',data);
});

block.addEventListener('click',()=>{
    let data = {
        username: sender.value,
        blockedContact: blockedUser.value 
    }
    socket.emit('blockContact',data);
}); 
unblock.addEventListener('click',()=>{
    let data = {
        username: sender.value,
        unBlockedContact: unblockedContact.value
    };
    socket.emit('unblock',data);
});
sendImage.addEventListener('click',()=>{
    if(lastImage !==""){
        let data = {
            message: lastImage,
            sender: sender.value,
            reciver: imageReciver.value,
            type:"image"
        }
        var newImage = document.createElement('img');
        newImage.src = lastImage;
        newImage.classList.add('imgMessage');
        output.innerHTML += '<p><strong>' + data.sender + ': </strong><br>' + newImage.outerHTML + '<br>';
        socket.emit('chat',data);
        imgTest.innerHTML = "";
        lastImage = "";
    }
});
upload.addEventListener('click',()=>{
    if(profileImageString !==""){
        let data = {
            profileImage: profileImageString,
            username: sender.value
        }
        socket.emit('profileImage',data);
        document.getElementById("imgTestProfile").innerHTML = "";
        profileImageString = "";
    }
})


function encodeImageFileAsURL() {

    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];

      var fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
        console.log(srcData);
        lastImage = srcData;
        var newImage = document.createElement('img');
        newImage.src = srcData;

        document.getElementById("imgTest").innerHTML = newImage.outerHTML;
        //alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
      }
      fileReader.readAsDataURL(fileToLoad);
    }
}

function profileImageUpload(){
    var filesSelected = document.getElementById("profileImage").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];

      var fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
        console.log(srcData);
        profileImageString = srcData;

        var newImage = document.createElement('img');
        newImage.src = srcData;
        document.getElementById("imgTestProfile").innerHTML = newImage.outerHTML;
      }
      fileReader.readAsDataURL(fileToLoad);
    }
}
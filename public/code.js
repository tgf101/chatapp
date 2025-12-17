(function(){

const app = document.querySelector(".app"); 
const socket = io(); // Connects the client to the socket.io server

let uname; // this is used to store the user's username 

// ------ Join chat --------

app.querySelector(".join-screen #join-user").addEventListener("click",function(){ // When the join button is clicked it runs
    let username = app.querySelector(".join-screen #username").value; // Gets the user's username when join chat screen
    if(username.length == 0){ // Stops the user from joining the chat if username field is empty
        return;
    } 
    socket.emit("newuser", username); // send data from client to the server and displays a new user has joined with username
    uname = username; // this stores the username in a global variable   
    app.querySelector(".join-screen").classList.remove("active"); // Hides the join screen when clicked join button 
    app.querySelector(".chat-screen").classList.add("active"); // Displays the chat screen 
}); 

// -------- Send Message --------

app.querySelector(".chat-screen #send-message").addEventListener("click", function(){
    let message = app.querySelector(".chat-screen #message-input").value; // Gets the message entered by the user
    if(message.length == 0){ // Doesnt allow sending empty messages  
        return;
    }
    renderMessage("my",{
        username:uname,
        text:message
    }); // This code displays your own message sent in chat window immediately 
    socket.emit("chat",{
        username:uname,
        text:message
    }); // This code sends the message to the server so other uses receive your message 
    app.querySelector(".chat-screen #message-input").value = ""; // this leaves the message input box empty after message has been sent in chat
});

// -------- Exit chat --------

app.querySelector(".chat-screen #exit-chat").addEventListener("click",function(){
    socket.emit("exituser", uname); // Notifies the server that the user has left the chat
    window.location.href = window.location.href; // this properly returns the URL of the current page
}); 

// -------- Server updates --------

socket.on("update",function(update){ // This listens for any updated messages from the server such as when user joins or leaves 
    renderMessage("update",update); // This shows the serves update in the chat window 
}); 

// -------- Recieved messages -------- 

socket.on("chat",function(message){ // Listens for chat messages sent by other users 
    renderMessage("other",message); // Shows the message from the other user
});

    function renderMessage(type, message){ // This enables messages to be displayed in chat window
        let messageContainer = app.querySelector(".chat-screen .messages"); // Allows users to select the message container 
        if(type == "my"){ // Displays your own messages
            let el = document.createElement("div");
            el.setAttribute("class","message my-message");
            el.innerHTML = `
                <div>
                    <div class="name">You</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
            messageContainer.appendChild(el);
        }else if(type == "other"){ // Displayes message from other users
            let el = document.createElement("div");
            el.setAttribute("class","message other-message");
            el.innerHTML = `
                <div>
                    <div class="name">${message.username}</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
            messageContainer.appendChild(el);
        }else if(type == "update"){ // This is the systems update messages for when users join and leave conversations
            let el = document.createElement("div");
            el.setAttribute("class","update");
            el.innerText = message;
            messageContainer.appendChild(el);
        }
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight; // Automatically scrolls the chat to the latest message

    }

})(); 
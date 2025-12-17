const express = require("express"); // Imports express framework to create a web server  
const path = require("path"); // Imports a path module to work with file and directory paths 

const app = express(); // Creates an express app
const server = require("http").createServer(app); // Creates HTTP server using the express app

const io = require("socket.io")(server); // Initiliases socket.io which connects to the HTTP server

app.use(express.static(path.join(__dirname+"/public"))); // The static files (HTML, CSS, JS) from the public directory 

io.on("connection", function(socket){ // Listens for new client connections
    socket.on("newuser", function(username){ // triggered when a new user enters chat 
        socket.broadcast.emit("update", username + " joined the conversation"); // Sends a server update message to all the users except the sender
    });
    socket.on("exituser", function(username){ // Triggered when a user exits the chat
        socket.broadcast.emit("update", username + " left the conversation"); // Broadcasts a message to notify other users that someone left 
    });
    socket.on("chat", function(message){ // Triggered when a user send a message 
        socket.broadcast.emit("chat", message); // Broadcasts the message to all the connected users except the sender 
    });
});

server.listen(3000); // Starts the server and listens for connections on port 3000
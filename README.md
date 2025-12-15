# Chat App
Chatify is a real time chat app for mobile devices where multiple users can send simple text messages to each other. Designed for mobile users which allows users to joined a group chat room, send text messages to each other, and exit the conversation. This application was developed using, HTML, CSS, JavaScript, Node.js, Express, Socket.io and used agile as my development strategy. 

# Contributers
For this assignment I am going to be working alone. 

# primary target audience 

The primary audience for this chat app is ages above 16 and above. However any curse words and inappropiate words being sent will be monitered and will be sensored using hashtags. 

# Game rules and user specfications 

users should be able to enter their username 

users should then be able to join a chat room

users can send and recieve messages in real time

users can exit the chat


# system requirements

The chat app should allow real-time communication using WebSockets

Username based (Requires no login)

user authentication (login with email) should be able to store their accounts (using sql)

This app should work for mobile devices


# High-level functional specifications

users should be able to send and recieve messages in real time 

Mobile friendly 

users should be able to join chat after entering their username

# High-level non-functional specifications

messages should be delivered in < 1 second 

esponsive layout for mobile users

minimal loading time

# User profiles

user 1: Wants to chat with friends through a simple, easy to user interface

user 2: Wants to talk in conversations with multiple people

# Mockups
<img width="237" height="441" alt="image" src="https://github.com/user-attachments/assets/56bd210a-8016-4870-afc8-0b3f5c2cdda4" />
<img width="237" height="441" alt="image" src="https://github.com/user-attachments/assets/4cf98903-698c-473c-bde0-da6230b4f3ec" />
<img width="237" height="441" alt="image" src="https://github.com/user-attachments/assets/64084a67-dc32-4b6a-b517-5f149af6cbe4" />



# Risk assessment 

working alone - high impact 

using new software - high impact 

real time messaging issues - high impact 

limited time as solo developer - high impact

github commits - low-medium impact 

# UI design decisions
Input details page to join chat, username input in first page, join button to join chat
<img width="270" height="200" alt="image" src="https://github.com/user-attachments/assets/b7c2c479-d9bc-4965-b40a-c093f771a288" />

The Chat Screen has a header with the chat application name with an exit button on the top right corner
Able to scroll through chats in the messaging area
A fixed message input at the bottom as well as the send button

# Storyboard 

User opens the application through the website 
User enters their username
User joins the chat room
user sends messages
others can receive the messages in real time
user exits the chat and it proceeds back to join screen

# Software development strategy

Agile approach was used as i considered the goals and users needs when developing the application.

I used phase 2 the design stage user interface (UI) which has the apps functionalities such as creating visual elemements and the layouts. This includes the screen layout, icons, buttons, and navigation. 

User expereince (UX) design was used to provide a smooth and seamless user experience ensuring that the app has no issues when scrolling and minimal loading time. 

Phase 3 deployment was used as i developed the software in small parts or cycles known as sprints. i ensured the server ran correctly, users could connect to the chat through socket.io, and making it accessible through mobile. 

Phase 4 is testing which i carried out making sure every function worked correctly, making sure that users were able to join the chat when inputting their username, and making sure that messages were able to be sent through real time. 




# Pseudocode


IF user clicks Join
  SEND username to server
  SWITCH to chat screen
END IF

IF message sent
  DISPLAY message locally
  BROADCAST message to other users
END IF
 


# Test plan 



<img width="523" height="644" alt="image" src="https://github.com/user-attachments/assets/1e817fd9-93f4-4c64-a7db-9c40379ad564" />



















# Socket.io - Real-time messaging 
I used socket.io for real-time communication between connected users. This allows users to send anbd recieve messages instantly. 

Code that was used was:
io.on ("connection", function (socket){
socket.on("newuser", function(username){
socket.broadcast.emit("update", username + " joined the conversation");
)
This code means that when a user join the chat it comes up on the chat page that the user (users username) has joined the conversation.

socket.on("newuser", function(username){
socket.broadcast.emit("update", username + " left the conversation");
)
This code means that when a user leaves the chat it comes up on the chat page that the user (users username) has left the conversation.

socket.on("chat", function(message){
        socket.broadcast.emit("chat", message);
    });
Socket.io (2024)




















# References 

w3schools (2024) Node.js Express.js Available at: https://www.w3schools.com/nodejs/nodejs_express.asp [Accessed: 15 December 2025].











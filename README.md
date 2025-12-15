# Chat App
A real time chat app for mobile devices where multiple users can send simple text messages to each other. 

# Contributers
I am working alone for this assignment 

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
<img width="237" height="441" alt="image" src="https://github.com/user-attachments/assets/571a5cde-5eeb-4b77-9f05-266d562f3771" />
<img width="237" height="441" alt="image" src="https://github.com/user-attachments/assets/a0f7dcc0-d44c-4e1c-9229-cf467bf07154" />
<img width="237" height="441" alt="image" src="https://github.com/user-attachments/assets/5d96dbc7-f27e-4602-b9cd-66e6bc09b1da" />


# Risk assessment 

working alone - high impact 

using new software - high impact 

real time messaging issues - high impact 

limited time as solo developer - high impact

github commits - low-medium impact 

# UI design decisions
Input details page to join chat, username input in first page, join button to join chat
<img width="270" height="200" alt="image" src="https://github.com/user-attachments/assets/b7c2c479-d9bc-4965-b40a-c093f771a288" />




# Software development strategy

Agile

# Test plan 






















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











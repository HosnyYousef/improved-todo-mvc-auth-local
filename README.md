# Introduction

A Simple ToDo App built using the MVC Architecture. We have also implemented "authorization" so folx can sign up, customize & personalize the app.

---

# Objectives

- This is a 100Devs group project with the goal of understanding how MVC concept and logins are added. We have taken the original project from https://github.com/100devs/todo-mvc-auth-local and improved upon it.

---

# Who is this for? 

- People who want to make todo lists while they learn about Node.js and MVC architecture!

---

# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator,
twilio,

---

# Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

# Things to add

 To enable SMS notifications, you will need to provide a Twilio account (https://www.twilio.com/). If you choose not to use this feature, you don't need to add the variables starting with 'TWILIO_' to your .env file.

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: your database URI
  - TWILIO_ACCOUNT_SID:  Found on your Twilio dashboard
  - TWILIO_AUTH_TOKEN:    Found on your Twilio dashboard  
  - TWILIO_PHONE_NUMBER: phone number assigned to your Twilio account
  -
 ---
 
 Have fun testing and improving it! 😎



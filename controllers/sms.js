//Module sends SMS messages using Twilio
require('dotenv').config({path: './config/.env'}) //For testing--remove if not needed
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

//TODO: replace MY_PHONE_NUMBER with user.phone
module.exports = {
    sendSMS: (msg) => {    
        client.messages
        .create({
            body:` ${msg}`,
            from: `${process.env.TWILIO_PHONE_NUMBER}`,
            to: `${process.env.MY_PHONE_NUMBER}`
        })
        .then(message => console.log(message.sid));
    }
}


//sendSMS('Hello world!')

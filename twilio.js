require('dotenv').config();


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Order sent',
    to: '+14036078620',  // Text this number
    from: '+14049483759' // From a valid Twilio number
})
.then((message) => console.log(message.sid))
.catch((error) => console.log(error));
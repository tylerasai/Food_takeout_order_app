require('dotenv').config();

const sendMsg = (to, body)=> {

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    
    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);
    
    return client.messages.create({
        body: body,
        to: to,  // Text this number
        from: '+14049483759' // From a valid Twilio number
    })

    

    // .then((message) => console.log(message.sid))
    // .catch((error) => console.log(error));
};

module.exports = { sendMsg };


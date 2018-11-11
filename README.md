## Description
Send SMS with node.js and Nexmo API.
Useful for
  * sms verifications
  * sms code generations etc.


# Steps

1. npm init --> create package.json
                set app.js (or whatever) as entry point
2. npm install --save express ejs nexmo body-parser socket.io --> install required packages
                --> socket.io --> to send a response (a message) to user, once sms sent
                --> ejs --> embedded js (for templating, generate HTML with JS)
3. npm install -g nodemon --> continously watching for changes and restarting server (install globally)
4. bring required modules to app.js

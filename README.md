## Description
Send SMS with node.js and Nexmo API.
Useful for
  * sms verifications
  * sms code generations etc.


## Steps

1. npm init --> create package.json <br>
                set app.js (or whatever) as entry point
2. npm install --save express ejs nexmo body-parser socket.io --> install required packages <br>
                --> socket.io --> to send a response (a message) to user, once sms sent <br>
                --> ejs --> embedded js (for templating, generate HTML with JS)
3. npm install -g nodemon --> continously watching for changes and restarting server (install globally)
4. bring required modules to app.js
5. Start server <br>
    --> to run the app --> node app or nodemon

6. Create route <br>
   * all html files resides in a folder named "views"
7. Create UI in index.html
8. Add js folder --> this is where all client side coding goes
   * In app.js public folder defined as a Staic.
   * Create public folder --> inside that, js folder --> main.js

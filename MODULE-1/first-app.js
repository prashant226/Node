// console.log('hello from node.js');
//fs===> FILE SYSTEM

const fs = require('fs');
fs.writeFileSync('hello.txt', 'hello from node.js');

//JS in The Server

//USERS==> Client(Browser)(JS in the Browser)===(request)===> SERVER==> response in HTML
/**DataBase
 * Auth
 * input Validation
 * business Logic
 */

/**Run Server : Create server and listen to incoming requests */
/**Business Logic : Handle Requests , validate Input ,connect to Database */
/**Return Responses (HTML, JSON) */
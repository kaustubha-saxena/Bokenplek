const username = process.env.USER;
const password = process.env.PASSWORD;

 const connectionStr= `mongodb+srv://${username}:${password}@cluster0.bdbwg0z.mongodb.net/Bookenplek?retryWrites=true&w=majority&appName=Cluster0`  
module.exports = { connectionStr };
const http =require("http");
const app =require("./app");
const mongoose =require("mongoose");




const port =process.env.PORT || 3000;
const server=http.createServer(app);



// app.use()














server.listen(port);
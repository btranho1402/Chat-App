const { disconnect } = require("mongoose");
const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:5173/" });
let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("new connection", socket.id);
  
  //listen to the connection
  socket.on("addNewUser", (userId) => {
    !onlineUsers.some((user) => user.userId === userId) &&
    onlineUsers.push({
        userId,
        socketId: socket.id,
    });
    console.log("onlineUsers", onlineUsers);

    io.emit("getOnlineUsers", onlineUsers);
  });
    socket.on("disconnect", () => {
        onlineUsers = onlineUsers.filter(user => user.socketId !== socket.id)
        io.emit("getOnlineUsers", onlineUsers);
    })
});

io.listen(3000);

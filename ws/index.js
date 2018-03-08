const io = require('socket.io')(process.env.PORT || 3000, {
  path: '/',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
})

io.on('connection', (socket) => {
  socket.on('change', (payload) => {
    console.log(payload)
    socket.broadcast.emit('change', payload)
  })
})

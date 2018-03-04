const io = require('socket.io-client')

export default {
  socket: null,
  start() {
    this.socket = io('ws://localhost:3000')

    this.socket.on('connect', () => {
      this.socket.emit('change', { tool: 'pen', prop: 'color', value: '#999' })
    })
  }
}
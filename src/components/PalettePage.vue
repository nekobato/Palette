<template>
  <div class="palette">
    <div class="group-title">PenWidth</div>
    <div class="button-group">
      <button @click="changePenWidth(1)">1</button>
      <button @click="changePenWidth(2)">2</button>
      <button @click="changePenWidth(3)">3</button>
      <button @click="changePenWidth(4)">4</button>
      <button @click="changePenWidth(5)">5</button>
    </div>
    <div class="group-title">PenColor</div>
    <div class="button-group">
      <button class="color-button" @click="changePenColor('#000')" style="background: #000"></button>
      <button class="color-button" @click="changePenColor('#f00')" style="background: #f00"></button>
      <button class="color-button" @click="changePenColor('#0f0')" style="background: #0f0"></button>
      <button class="color-button" @click="changePenColor('#00f')" style="background: #00f"></button>
      <button class="color-button" @click="changePenColor('#fff')" style="background: #fff"></button>
    </div>
  </div>
</template>

<script>
import ws from "@/lib/websocket"

export default {
  name: 'Palette',
  methods: {
    changePenWidth(width) {
      ws.socket.emit('change', {
        sender: 'palette',
        tool: 'pen',
        prop: 'width',
        value: width
      })
    },
    changePenColor(color) {
      ws.socket.emit('change', {
        sender: 'palette',
        tool: 'pen',
        prop: 'color',
        value: color
      })
    }
  },
  mounted() {
    ws.start()
  }
}
</script>

<style scoped>
.group-title {
  margin: 16px auto 0;
}
button {
  margin: 0 0 0 4px;
  width: 48px;
  height: 48px;
  border: 1px solid #ddd;
  background: #ddd;
  color: #444;
  cursor: pointer;
}
</style>

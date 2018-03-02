<template>
  <div id="app">
    <canvas />
  </div>
</template>

<script>
import canvas from '@/lib/canvas'

export default {
  name: 'app',
  components: {
  },
  methods: {
    changePenColor(color) {
      canvas.changePenColor(color)
    },
    changePenWidth(width) {
      canvas.changePenWidth(width)
    },
    changePenStyle(style) {
      canvas.changePenStyle(style)
    }
  },
  mounted () {
    canvas.start()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

canvas {
  width: 800px;
  height: 450px;
  border: 1px solid #ddd;
}
</style>

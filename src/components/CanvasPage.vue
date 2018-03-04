<template>
  <div class="contents">
    <canvas />
  </div>
</template>

<script>
import canvas from "@/lib/canvas"
import ws from "@/lib/websocket"

export default {
  name: "Canvas",
  computed: {
    penColor: {
      get() {
        return canvas.strokeColor
      },
      set(color) {
        canvas.changePenColor(color)
      }
    },
    penWidth: {
      get() {
        return canvas.strokeWidth
      },
      set(width) {
        canvas.changePenWidth(width)
      }
    },
    penStyle: {
      get() {
        return canvas.dashArray
      },
      set(style) {
        canvas.changePenStyle(style)
      }
    }
  },
  methods: {},
  mounted() {
    ws.start()
    canvas.start()

    ws.socket.on('change', (payload) => {
      switch (payload.prop) {
        case 'width':
          this.penWidth = payload.value
          break;
        case 'color':
          this.penColor = payload.value
          break;
        case 'style':
          this.penStyle = payload.value
          break;
        default:
          break;
      }
    })
  }
}
</script>

<style scoped>
.contents {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>

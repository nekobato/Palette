<template>
  <div class="contents">
    <canvas />
  </div>
</template>

<script>
import canvas from "@/lib/canvas"

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
    canvas.start()
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

import paper from 'paper'

export default {
  paperScope: null,
  dottedLineTool: null,
  dottedLinePath: paper.Path,
  strokeColor: '#3080ff',
  strokeWidth: 2,
  dashArray: null,
  start() {
    // copied from https://github.com/adamhalasz/paint/tree/master/src/client
    const canvas = document.querySelector('canvas')
    // canvas.width = window.innerWidth - 300
    // canvas.height = window.innerHeight - 84

    this.paperScope = new paper.PaperScope()
    this.paperScope.setup(canvas)

    // Dotted Line Tool
    this.dottedLineTool = new this.paperScope.Tool()

    this.dottedLineTool.onMouseDown = (event) => {
      new this.paperScope.Layer().activate()
      this.dottedLinePath = new this.paperScope.Path()
      this.dottedLinePath.strokeColor = this.strokeColor
      this.dottedLinePath.strokeWidth = this.strokeWidth
      this.dottedLinePath.dashArray = this.dashArray
      this.dottedLinePath.strokeCap = 'round'
      this.dottedLinePath.strokeJoin = 'round'
      this.dottedLinePath.add(event.point)
    }

    this.dottedLineTool.onMouseDrag = (event) => {
      this.dottedLinePath.add(event.point)
    }

    this.dottedLineTool.onMouseUp = () => {
      this.dottedLinePath.smooth()
      this.dottedLinePath.simplify()
      // this.socket.emit('draw', {
      //     boardId: params['id'],
      //     canvas: paperScope.project.exportJSON()
      // })
    }
  },
  changePenColor(color) {
    this.dottedLinePath.strokeColor = color
    this.strokeColor = color
  },
  changePenWidth(width) {
    this.dottedLinePath.strokeWidth = width
    this.strokeWidth = width
  },
  changePenStyle(dashStyle) {
    this.dottedLinePath.dashArray = dashStyle
    this.dashArray = dashStyle
  }
}

import paper from 'paper'

// copied from https://github.com/adamhalasz/paint/tree/master/src/client
const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth - 300
canvas.height = window.innerHeight - 84

var paperScope = new paper.PaperScope()
paperScope.setup(canvas)
//console.log('#paper.project', paper.project)

// Dotted Line Tool
var dottedLinePath = paper.Path
var dottedLineTool = new paperScope.Tool()

dottedLineTool.onMouseDown = (event) => {
    new paperScope.Layer().activate()
    dottedLinePath = new paperScope.Path()
    dottedLinePath.strokeColor = '#3080ff'
    dottedLinePath.strokeWidth = 2
    // dottedLinePath.dashArray = [5, 8]
    dottedLinePath.strokeCap = 'round'
    dottedLinePath.strokeJoin = 'round'
    dottedLinePath.add(event.point)
}

dottedLineTool.onMouseDrag = (event) => {
    dottedLinePath.add(event.point)
}

dottedLineTool.onMouseUp = () => {
    dottedLinePath.smooth()
    dottedLinePath.simplify()
    this.socket.emit('draw', {
        boardId: params['id'],
        canvas: paperScope.project.exportJSON()
    })
}

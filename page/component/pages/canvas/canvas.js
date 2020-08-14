Page({
  data: {
    actionList: [
      'arc',
      'beginPath',
      'bezierCurveTo',
      'clearRect',
      'clip',
      'closePath',
      'createCircularGradient',
      'createLinearGradient',
      'draw',
      'drawImage',
      'fill',
      'fillRect',
      'fillText',
      'lineTo',
      'moveTo',
      'quadraticCurveTo',
      'rect',
      'restore',
      'rotate',
      'scale',
      'setFontSize',
      'setGlobalAlpha',
      'setLineCap',
      'setLineDash',
      'setLineJoin',
      'setLineWidth',
      'setMiterLimit',
      'setTextAlign',
      'setTextBaseline',
      'stroke',
      'strokeRect',
      'translate',
      'addColorStop',
    ],
    canvasId: 'canvasId1',
    isDisableScroll: true,
    xCoordinate: '',
    yCoordinate: ''
  },
  onReady() {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    }
  },
  onShareAppMessage() {
    return {
      title: 'canvas',
      path: 'page/component/pages/canvas/canvas'
    }
  },

  onTouchStart(elem) {
    console.log(`@onTouchStart`, elem)
    this.setData({
      xCoordinate: elem.touches[0].x,
      yCoordinate: elem.touches[0].y
    })
  },
  onTouchMove(elem) {
    console.log(`@onTouchMove`, elem)
    this.setData({
      xCoordinate: elem.touches[0].x,
      yCoordinate: elem.touches[0].y
    })
  },
  onTouchEnd(elem) {
    console.log(`@onTouchEnd`, elem)
  },
  onLongTap(elem) {
    console.log(`@onLongTap`, elem)
  },
  onTouchCancel(elem) {
    console.log(`@onTouchCancel`, elem)
  },
  onTouchError(elem) {
    console.log(`@onTouchError`, elem)
  },

  clearContext() {
    qa.createSelectorQuery().select('.canvas').context(function (res) {
      console.log(res)
      res.context.clearRect(0, 0, 400, 400)
      // 节点对应的 Context 对象。如：选中的节点是 <video> 组件，那么此处即返回 VideoContext 对象
    }).exec()
  },
  drawCanvas(event) {
    const action = event.currentTarget.dataset.action
    this[action]()
  },
  drawBall() {
    const p = this.position
    p.x += p.vx
    p.y += p.vy
    if (p.x >= 300) {
      p.vx = -2
    }
    if (p.x <= 7) {
      p.vx = 2
    }
    if (p.y >= 300) {
      p.vy = -2
    }
    if (p.y <= 7) {
      p.vy = 2
    }

    const context = qa.createCanvasContext(this.data.canvasId)

    function ball(x, y) {
      context.beginPath(0)
      context.arc(x, y, 5, 0, Math.PI * 2)
      context.fillStyle = '#1aad19'
      // context.setFillStyle('#1aad19')
      context.setStrokeStyle('rgba(1,1,1,0)')
      context.fill()
      context.stroke()
    }

    ball(p.x, 150)
    ball(150, p.y)
    ball(300 - p.x, 150)
    ball(150, 300 - p.y)
    ball(p.x, p.y)
    ball(300 - p.x, 300 - p.y)
    ball(p.x, 300 - p.y)
    ball(300 - p.x, p.y)
    console.log(context, 1)
    context.draw()
    console.log(context, 2)
  },

  arc() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.arc(100, 75, 50, 0, 2 * Math.PI)
    ctx.setFillStyle('#EEEEEE')
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(40, 75)
    ctx.lineTo(160, 75)
    ctx.moveTo(100, 15)
    ctx.lineTo(100, 135)
    ctx.setStrokeStyle('#AAAAAA')
    ctx.stroke()

    ctx.setFontSize(12)
    ctx.setFillStyle('black')
    ctx.fillText('0', 165, 78)
    ctx.fillText('0.5*PI', 83, 145)
    ctx.fillText('1*PI', 15, 78)
    ctx.fillText('1.5*PI', 83, 10)

    // Draw points
    ctx.beginPath()
    ctx.arc(100, 75, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('lightgreen')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(100, 25, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(150, 75, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('red')
    ctx.fill()

    // Draw arc
    ctx.beginPath()
    ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
    ctx.setStrokeStyle('#333333')
    ctx.stroke()

    console.log('canvas: before ctx.draw')
    ctx.draw()
  },
  createPattern() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    const pattern = ctx.createPattern('https://statres.quickapp.cn/quickapp/show/img/191211/5df0a4784298a.png', 'repeat-x')
    ctx.fillStyle = pattern
    ctx.fillRect(0, 0, 300, 150)
    ctx.draw()
  },
  beginPath() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    // begin path
    ctx.rect(10, 10, 100, 30)
    ctx.setFillStyle('yellow')
    ctx.fill()

    // begin another path
    ctx.beginPath()
    ctx.rect(10, 40, 100, 30)

    // only fill this rect, not in current path
    ctx.setFillStyle('blue')
    ctx.fillRect(10, 70, 100, 30)

    ctx.rect(10, 100, 100, 30)

    // it will fill current path
    ctx.setFillStyle('red')
    ctx.fill()
    ctx.draw()
  },
  bezierCurveTo() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    // Draw points
    ctx.beginPath()
    ctx.arc(20, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('red')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(200, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('lightgreen')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(20, 100, 2, 0, 2 * Math.PI)
    ctx.arc(200, 100, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()

    ctx.setFillStyle('black')
    ctx.setFontSize(12)

    // Draw guides
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.lineTo(20, 100)
    ctx.lineTo(150, 75)

    ctx.moveTo(200, 20)
    ctx.lineTo(200, 100)
    ctx.lineTo(70, 75)
    ctx.setStrokeStyle('#AAAAAA')
    ctx.stroke()

    // Draw quadratic curve
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
    ctx.setStrokeStyle('black')
    ctx.stroke()

    ctx.draw()
  },
  clearRect() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.setFillStyle('red')
    ctx.fillRect(0, 0, 150, 200)
    ctx.setFillStyle('blue')
    ctx.fillRect(150, 0, 150, 200)
    ctx.clearRect(10, 10, 150, 75)
    ctx.draw()
  },
  clip() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    qa.downloadFile({
      url: 'https://seeklogo.com/images/V/vivo-mobile-phones-logo-6C28635F1B-seeklogo.com.png',
      success(res) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(50, 50, 25, 0, 2 * Math.PI)
        ctx.clip()
        ctx.drawImage(res.tempFilePath, 25, 25)
        ctx.restore()
        ctx.draw()
      }
    })
  },
  closePath() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    // begin path
    ctx.rect(10, 10, 100, 30)
    ctx.closePath()

    // begin another path
    ctx.beginPath()
    ctx.rect(10, 40, 100, 30)

    // only fill this rect, not in current path
    ctx.setFillStyle('blue')
    ctx.fillRect(10, 70, 100, 30)

    ctx.rect(10, 100, 100, 30)

    // it will fill current path
    ctx.setFillStyle('red')
    ctx.fill()
    ctx.draw()
  },
  createCircularGradient() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    // Create circular gradient
    const grd = ctx.createCircularGradient(75, 50, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'white')

    // Fill with gradient
    ctx.setFillStyle(grd)
    ctx.fillRect(10, 10, 150, 80)
    ctx.draw()
  },
  createLinearGradient() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    // Create linear gradient
    const grd = ctx.createLinearGradient(0, 0, 200, 0)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'white')

    // Fill with gradient
    ctx.setFillStyle(grd)
    ctx.fillRect(10, 10, 150, 80)
    ctx.draw()
  },
  draw() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 100)
    ctx.draw()
    ctx.fillRect(50, 50, 150, 100)
    ctx.draw(true)
  },
  drawImage() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    qa.chooseImage({
      success(res) {
        ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
        ctx.draw()
      }
    })
  },
  fill() {// begin path
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.rect(10, 10, 100, 30)
    ctx.setFillStyle('yellow')
    ctx.fill()

    // begin another path
    ctx.beginPath()
    ctx.rect(10, 40, 100, 30)

    // only fill this rect, not in current path
    ctx.setFillStyle('blue')
    ctx.fillRect(10, 70, 100, 30)

    ctx.rect(10, 100, 100, 30)

    // it will fill current path
    ctx.setFillStyle('red')
    ctx.fill()
    ctx.draw()
  },
  fillRect() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 75)
    ctx.draw()
  },
  fillText() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    ctx.setFontSize(20)
    ctx.fillText('Hello', 20, 20)
    ctx.fillText('MINA', 100, 100)

    ctx.draw()
  },
  lineTo() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.moveTo(10, 10)
    ctx.rect(10, 10, 100, 50)
    ctx.lineTo(110, 60)
    ctx.stroke()
    ctx.draw()
  },
  moveTo() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.moveTo(10, 10)
    ctx.lineTo(100, 10)

    ctx.moveTo(10, 50)
    ctx.lineTo(100, 50)
    ctx.stroke()
    ctx.draw()
  },
  quadraticCurveTo() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    // Draw points
    ctx.beginPath()
    ctx.arc(20, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('red')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(200, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('lightgreen')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(20, 100, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()

    ctx.setFillStyle('black')
    ctx.setFontSize(12)

    // Draw guides
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.lineTo(20, 100)
    ctx.lineTo(200, 20)
    ctx.setStrokeStyle('#AAAAAA')
    ctx.stroke()

    // Draw quadratic curve
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.quadraticCurveTo(20, 100, 200, 20)
    ctx.setStrokeStyle('black')
    ctx.stroke()

    ctx.draw()
  },
  rect() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.rect(10, 10, 150, 75)
    ctx.setFillStyle('red')
    ctx.fill()
    ctx.draw()
  },
  restore() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    // save the default fill style
    ctx.save()
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 100)

    // restore to the previous saved state
    ctx.restore()
    ctx.fillRect(50, 50, 150, 100)

    ctx.draw()
  },
  rotate() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    ctx.strokeRect(100, 10, 150, 100)
    ctx.rotate(20 * Math.PI / 180)
    ctx.strokeRect(100, 10, 150, 100)
    ctx.rotate(20 * Math.PI / 180)
    ctx.strokeRect(100, 10, 150, 100)

    ctx.draw()
  },
  scale() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    ctx.strokeRect(10, 10, 25, 15)
    ctx.scale(2, 2)
    ctx.strokeRect(10, 10, 25, 15)
    ctx.scale(2, 2)
    ctx.strokeRect(10, 10, 25, 15)

    ctx.draw()
  },
  setFontSize() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    ctx.setFontSize(20)
    ctx.fillText('20', 20, 20)
    ctx.setFontSize(30)
    ctx.fillText('30', 40, 40)
    ctx.setFontSize(40)
    ctx.fillText('40', 60, 60)
    ctx.setFontSize(50)
    ctx.fillText('50', 90, 90)

    ctx.draw()
  },
  setGlobalAlpha() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 100)
    ctx.setGlobalAlpha(0.2)
    ctx.setFillStyle('blue')
    ctx.fillRect(50, 50, 150, 100)
    ctx.setFillStyle('yellow')
    ctx.fillRect(100, 100, 150, 100)

    ctx.draw()
  },
  setLineCap() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.beginPath()
    ctx.moveTo(10, 10)
    ctx.lineTo(150, 10)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineCap('butt')
    ctx.setLineWidth(10)
    ctx.moveTo(10, 30)
    ctx.lineTo(150, 30)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineCap('round')
    ctx.setLineWidth(10)
    ctx.moveTo(10, 50)
    ctx.lineTo(150, 50)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineCap('square')
    ctx.setLineWidth(10)
    ctx.moveTo(10, 70)
    ctx.lineTo(150, 70)
    ctx.stroke()

    ctx.draw()
  },
  setLineDash() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    ctx.setLineDash([10, 20], 5)

    ctx.beginPath()
    ctx.moveTo(0, 100)
    ctx.lineTo(400, 100)
    ctx.stroke()

    ctx.draw()
  },
  setLineJoin() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.beginPath()
    ctx.moveTo(10, 10)
    ctx.lineTo(100, 50)
    ctx.lineTo(10, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineJoin('bevel')
    ctx.setLineWidth(10)
    ctx.moveTo(50, 10)
    ctx.lineTo(140, 50)
    ctx.lineTo(50, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineJoin('round')
    ctx.setLineWidth(10)
    ctx.moveTo(90, 10)
    ctx.lineTo(180, 50)
    ctx.lineTo(90, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineJoin('miter')
    ctx.setLineWidth(10)
    ctx.moveTo(130, 10)
    ctx.lineTo(220, 50)
    ctx.lineTo(130, 90)
    ctx.stroke()

    ctx.draw()
  },
  setLineWidth() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.beginPath()
    ctx.moveTo(10, 10)
    ctx.lineTo(150, 10)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineWidth(5)
    ctx.moveTo(10, 30)
    ctx.lineTo(150, 30)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineWidth(10)
    ctx.moveTo(10, 50)
    ctx.lineTo(150, 50)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineWidth(15)
    ctx.moveTo(10, 70)
    ctx.lineTo(150, 70)
    ctx.stroke()

    ctx.draw()
  },
  setMiterLimit() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.beginPath()
    ctx.setLineWidth(10)
    ctx.setLineJoin('miter')
    ctx.setMiterLimit(1)
    ctx.moveTo(10, 10)
    ctx.lineTo(100, 50)
    ctx.lineTo(10, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineWidth(10)
    ctx.setLineJoin('miter')
    ctx.setMiterLimit(2)
    ctx.moveTo(50, 10)
    ctx.lineTo(140, 50)
    ctx.lineTo(50, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineWidth(10)
    ctx.setLineJoin('miter')
    ctx.setMiterLimit(3)
    ctx.moveTo(90, 10)
    ctx.lineTo(180, 50)
    ctx.lineTo(90, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineWidth(10)
    ctx.setLineJoin('miter')
    ctx.setMiterLimit(4)
    ctx.moveTo(130, 10)
    ctx.lineTo(220, 50)
    ctx.lineTo(130, 90)
    ctx.stroke()

    ctx.draw()
  },
  setShadow() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.setFillStyle('red')
    ctx.setShadow(10, 50, 50, 'blue')
    ctx.fillRect(10, 10, 150, 75)
    ctx.draw()
  },
  setTextAlign() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    ctx.setStrokeStyle('red')
    ctx.moveTo(150, 20)
    ctx.lineTo(150, 170)
    ctx.stroke()

    ctx.setFontSize(15)
    ctx.setTextAlign('left')
    ctx.fillText('textAlign=left', 150, 60)

    ctx.setTextAlign('center')
    ctx.fillText('textAlign=center', 150, 80)

    ctx.setTextAlign('right')
    ctx.fillText('textAlign=right', 150, 100)

    ctx.draw()
  },
  setTextBaseline() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    ctx.setStrokeStyle('red')
    ctx.moveTo(5, 75)
    ctx.lineTo(295, 75)
    ctx.stroke()

    ctx.setFontSize(20)

    ctx.setTextBaseline('top')
    ctx.fillText('top', 5, 75)

    ctx.setTextBaseline('middle')
    ctx.fillText('middle', 50, 75)

    ctx.setTextBaseline('bottom')
    ctx.fillText('bottom', 120, 75)

    ctx.setTextBaseline('normal')
    ctx.fillText('normal', 200, 75)

    ctx.draw()
  },
  stroke() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    // begin path
    ctx.rect(10, 10, 100, 30)
    ctx.setStrokeStyle('yellow')
    ctx.stroke()

    // begin another path
    ctx.beginPath()
    ctx.rect(10, 40, 100, 30)

    // only stoke this rect, not in current path
    ctx.setStrokeStyle('blue')
    ctx.strokeRect(10, 70, 100, 30)

    ctx.rect(10, 100, 100, 30)

    // it will stroke current path
    ctx.setStrokeStyle('red')
    ctx.stroke()
    ctx.draw()
  },
  strokeRect() {
    const ctx = qa.createCanvasContext(this.data.canvasId)
    ctx.setStrokeStyle('red')
    ctx.strokeRect(10, 10, 150, 75)
    ctx.draw()
  },
  translate() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    ctx.strokeRect(10, 10, 150, 100)
    ctx.translate(20, 20)
    ctx.strokeRect(10, 10, 150, 100)
    ctx.translate(20, 20)
    ctx.strokeRect(10, 10, 150, 100)

    ctx.draw()
  },
  addColorStop() {
    const ctx = qa.createCanvasContext(this.data.canvasId)

    // Create circular gradient
    const grd = ctx.createLinearGradient(30, 10, 120, 10)
    grd.addColorStop(0, 'red')
    grd.addColorStop(0.16, 'orange')
    grd.addColorStop(0.33, 'yellow')
    grd.addColorStop(0.5, 'green')
    grd.addColorStop(0.66, 'cyan')
    grd.addColorStop(0.83, 'blue')
    grd.addColorStop(1, 'purple')

    // Fill with gradient
    ctx.setFillStyle(grd)
    ctx.fillRect(10, 10, 150, 80)
    ctx.draw()
  },
  onUnload() {
    clearInterval(this.interval)
  },
  onDrawBallClick() {
    qa.navigateTo({
      url: '/page/component/pages/canvas/draw-ball/index',
    })
  }
})

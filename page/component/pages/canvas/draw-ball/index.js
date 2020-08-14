Page({
  data: {
    isDisableScroll: true,
    mContext: ''
  },
  onTouchMove(elem) {
    const touches = elem.touches
    console.log(`@onTouchMove`, elem)
    this.mContext = qa.createCanvasContext("canvas")
    this.mContext.beginPath();
    this.mContext.arc(touches[0].pageX, touches[0].pageY, 4, 0, 2 * Math.PI, false);
    this.mContext.setFillStyle('#1aad19')
    this.mContext.setStrokeStyle('rgba(1,1,1,0)')
    this.mContext.fill()
    this.mContext.stroke()
    this.mContext.draw()
  },
  onReady: function () {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    }
    this.drawBall()
    this.interval = setInterval(this.drawBall, 17)
  },
  drawBall: function () {
    var p = this.position
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

    var context = qa.createCanvasContext("canvas")

    function ball(x, y) {
      context.beginPath(0)
      context.arc(x, y, 5, 0, Math.PI * 2)
      context.setFillStyle('#1aad19')
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

    context.draw()
  },
  onUnload: function () {
    clearInterval(this.interval)
  }
})

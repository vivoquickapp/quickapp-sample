// miniprogram/page/API/pages/custom-navigationbar/custom-navigationbar.js

Page({
  data: {
    width: 0,
    height: 0, 
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },

  onLoad: function (options) {
    var rect = qa.getMenuButtonBoundingClientRect() || {}
    this.setData({
      width: rect.width,
      height: rect.height,
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom
    })
  }

})
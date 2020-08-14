function showModal(title, content) {
  qa.showModal({
    title,
    content,
    showCancel: false
  })
}

function showSuccess(title) {
  qa.showToast({
    title,
    icon: 'success',
    duration: 1000
  })
}


Page({
  data: {
    connected: false
  },

  onUnload() {
    this.closeSocket()
  },

  toggle() {
    this.data.connected ? this.closeSocket() : this.openSocket()
  },

  openSocket() {
    qa.showLoading()
    qa.onSocketOpen(() => {
      qa.hideLoading()
      showSuccess('socket 已连接')
      this.setData({
        connected: true
      })
    })

    qa.onSocketClose(() => {
      qa.hideLoading()
      console.log('socket 已断开')
      this.setData({
        connected: false
      })
    })

    qa.onSocketError(error => {
      qa.hideLoading()
      showModal('发生错误', JSON.stringify(error))
      console.error('socket error:', error)
    })

    // 监听服务器推送消息
    qa.onSocketMessage(message => {
      showSuccess('收到 socket 消息')
      console.log('socket message:', message)
    })

    // 打开 socket 
    qa.connectSocket({
      url: 'wss://echo.websocket.org',
    })
  },

  closeSocket() {
    qa.closeSocket({
      success: () => {
        showSuccess('Socket已断开')
        this.setData({socketStatus: 'closed'})
      }
    })
  },

  sendMessage() {
    if (this.data.connected) {
      qa.sendSocketMessage({
        data: 'Hello~!'
      })
    }
  },
})

Page({
  data: {
    result: ''
  },
  base64ToArrayBuffer() {
    const base64 = 'CxYh'
    const arrayBuffer = qa.base64ToArrayBuffer(base64)
    this.setData({
      result: qa.arrayBufferToBase64(arrayBuffer)
    })
  }
})

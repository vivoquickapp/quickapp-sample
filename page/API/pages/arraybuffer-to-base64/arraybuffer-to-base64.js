Page({
  data: {
    result: ''
  },
  arrayBufferToBase64() {
    const arrayBuffer = new Uint8Array([11, 22, 33])
    const base64 = qa.arrayBufferToBase64(arrayBuffer)
    this.setData({
      result: base64
    })
  }
})

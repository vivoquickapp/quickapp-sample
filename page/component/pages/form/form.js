Page({
  data: {
    formData: ''
  },

  formSubmit(e) {
    this.setData({formData: JSON.stringify(e.detail.value)})
  },

  formReset(e) {
    this.setData({
      formData: ''
    })
  }
})

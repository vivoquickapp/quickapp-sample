Page({
  data: {
  },
  openModal() {
    qa.showModal({
      title: '弹窗标题',
      content: '弹窗内容，尽量控制在三行内',
      showCancel: false,
      confirmText: '确定',
    })
  },
  openModalNoTitle() {
    qa.showModal({
      content: '弹窗内容，尽量控制在三行内',
      confirmText: '确定',
      cancelText: '取消'
    })
  }
})

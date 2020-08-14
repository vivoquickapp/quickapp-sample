Page({
  data: {},
  binderror(e) {
    qa.showToast({
      icon: 'none',
      title: `载入页面失败：${e.detail.src}`,
    })
    console.log('载入页面失败，访问网址为：' + e.detail.src)
  },
  bindload(e) {
    qa.showToast({
      icon: 'none',
      title: '成功载入网页',
    })
    console.log('载入页面成功，访问网址为：' + e.detail.src)
  }
})

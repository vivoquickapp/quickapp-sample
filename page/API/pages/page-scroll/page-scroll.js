Page({
  scrollToTop() {
    qa.pageScrollTo({
      scrollTop: 0,
      duration: 350
    })
  },

  scrollToBottom() {
    qa.pageScrollTo({
      scrollTop: 2000,
      duration: 350
    })
  }
})

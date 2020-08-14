App({
  onLaunch(opts) {
    console.info('App Launch', opts)
  },
  onShow(opts) {
    console.info('App Show', opts)
  },
  onHide() {
    console.info('App Hide')
  },
  onError(e) {
    console.log('App onError: ', e)
    qa.showModal({
      title: 'App onError',
      content: e.message || e
    })
  },
  globalData: {
    name: 'globalData',
    hasLogin: false
  }
})

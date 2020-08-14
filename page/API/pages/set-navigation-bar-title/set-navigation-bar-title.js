Page({
  setNaivgationBarTitle(e) {
    const title = e.detail.value.title
    console.log(title)
    qa.setNavigationBarTitle({
      title,
      success() {
        console.log('setNavigationBarTitle success')
      },
      fail(err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    })

    return false
  }
})

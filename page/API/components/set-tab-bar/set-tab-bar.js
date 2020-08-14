const defaultTabBarStyle = {
  color: '#7A7E83',
  selectedColor: '#3cc51f',
  backgroundColor: '#ffffff',
  borderStyle: "black",
}

const defaultItemName = '接口'

Component({
  data: {
    hasSetTabBarBadge: false,
    hasShownTabBarRedDot: false,
    hasCustomedStyle: false,
    hasCustomedItem: false,
    hasHiddenTabBar: false,
    tabBarInfo: "",
    tabBarInfoInput: "",
    color: "",
    backgroundColor: "",
    borderStyle: "",
    selectedColor: ""
  },

  attached() {
    qa.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },

  detached() {
    this.removeTabBarBadge()
    this.hideTabBarRedDot()
    this.showTabBar()
    this.removeCustomStyle()
    this.removeCustomItem()
  },

  methods: {
    navigateBack() {
      this.triggerEvent('unmount')
    },

    setTabBarBadge() {
      if (this.data.hasSetTabBarBadge) {
        this.removeTabBarBadge()
        return
      }
      this.setData({
        hasSetTabBarBadge: true
      })
      qa.setTabBarBadge({
        index: 1,
        text: '1'
      })
    },
    onChangeTabBarColor(e) {
      this.setData({
        color: e.detail.value || defaultTabBarStyle.color
      })
    },
    onChangeTabBarBackgroundColor(e) {
      this.setData({
        backgroundColor: e.detail.value || defaultTabBarStyle.backgroundColor
      })
    },
    onChangeTabBarBorderStyle(e) {
      this.setData({
        borderStyle: e.detail.value || defaultTabBarStyle.borderStyle
      })
    },
    onChangeTabBarSelectedColor(e) {
      this.setData({
        selectedColor: e.detail.value || defaultTabBarStyle.selectedColor
      })
    },
    onChangeTabBarInfo(e) {
      this.setData({
        tabBarInfo: e.detail.value
      })
    },
    removeTabBarBadge() {
      this.setData({
        hasSetTabBarBadge: false
      })
      qa.removeTabBarBadge({
        index: 1
      })
    },

    showTabBarRedDot() {
      if (this.data.hasShownTabBarRedDot) {
        this.hideTabBarRedDot()
        return
      }
      this.setData({
        hasShownTabBarRedDot: true
      })
      qa.showTabBarRedDot({
        index: 1
      })
    },

    hideTabBarRedDot() {
      this.setData({
        hasShownTabBarRedDot: false
      })
      qa.hideTabBarRedDot({
        index: 1
      })
    },

    showTabBar() {
      this.setData({ hasHiddenTabBar: false })
      qa.showTabBar()
    },

    hideTabBar() {
      if (this.data.hasHiddenTabBar) {
        this.showTabBar()
        return
      }
      this.setData({ hasHiddenTabBar: true })
      qa.hideTabBar()
    },

    customStyle() {
      if (this.data.hasCustomedStyle) {
        this.removeCustomStyle()
        return
      }
      this.setData({ hasCustomedStyle: true })
      qa.setTabBarStyle({
        color: this.data.color,
        backgroundColor: this.data.backgroundColor,
        borderStyle: this.data.borderStyle,
        selectedColor: this.data.selectedColor
      })
    },

    removeCustomStyle() {
      this.setData({ hasCustomedStyle: false })
      qa.setTabBarStyle(defaultTabBarStyle)
    },

    customItem() {
      if (this.data.hasCustomedItem) {
        this.removeCustomItem()
        return
      }
      this.setData({ hasCustomedItem: true })
      qa.setTabBarItem({
        index: 2,
        text: this.data.tabBarInfo
      })
    },

    removeCustomItem() {
      this.setData({ hasCustomedItem: false })
      qa.setTabBarItem({
        index: 2,
        text: defaultItemName
      })
    }
  }
})

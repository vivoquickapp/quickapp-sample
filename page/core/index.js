Page({
  data: {
    list: [
      {
        id: 'syntax',
        name: '语法',
        open: false,
        pages: [
          {
            zh: 'xml 语法',
            url: 'xml/main'
          },
          {
            zh: 'qjs 语法',
            url: 'qjs/main'
          },
          {
            zh: 'qjs 事件回调',
            url: 'qjs-event/qjs'
          },
        ]
      },
      {
        id: 'api',
        name: '框架接口',
        open: false,
        pages: [
          {
            zh: 'App onError',
            url: 'app-on-error/main'
          },
          {
            zh: 'lifeCycle',
            url: 'life-cycle/main?a=1&b=2'
          },
          {
            zh: 'setData',
            url: 'set-data/main'
          },
          {
            zh: 'getApp',
            url: 'get-app/main'
          },
          {
            zh: 'getCurrentPages',
            url: 'get-current-pages/main'
          },
          {
            zh: 'qa.env',
            url: 'qa-env/main'
          },
        ]
      },
      {
        id: 'page',
        name: '自定义组件',
        open: false,
        pages: [
          {
            zh: '基础',
            url: 'custom-component-basic/main'
          },
          {
            zh: '扩展',
            url: 'custom-component-extend/main'
          },
          {
            zh: '使用 Component 构造页面',
            url: 'custom-component-page/main'
          }
        ]
      },
      {
        id: 'navigate',
        name: '路由',
        url: 'navigate/main'
      },
      {
        id: 'event',
        name: '事件回调',
        url: 'event/main'
      },
      {
        id: 'app-event',
        name: '应用级事件',
        url: 'event-api/main'
      }
    ]
  },
  toggleSection(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          qa.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  }
})

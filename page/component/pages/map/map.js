const markersData = [
  {
    id: 1,
    latitude: 23.099994,
    longitude: 113.32452,
    title: 'T.I.T 创意园1',
    iconPath: '/image/location.png',
    width: 50,
    height: 50,
    zIndex: 1
  },
  {
    id: 2,
    latitude: 23.099997,
    longitude: 113.32460,
    title: 'T.I.T 创意园2',
    iconPath: '/image/placeholder.png',
    zIndex: 2
  }
]

const polylineData =[
  {
    points: [
      {
        id: 1,
        latitude: 23.099994,
        longitude: 113.32452,
        title: 'T.I.T 创意园1'
      },
      {
        id: 2,
        latitude: 23.099503,
        longitude: 113.325842,
        title: 'T.I.T 创意园2'
      },
      {
        id: 3,
        latitude: 23.098635,
        longitude: 113.32488,
        title: 'T.I.T 创意园3'
      },
    ],
    color: '#000'
  }
]

const polygonsData = [
  {
    points: [
      {
        id: 1,
        latitude: 23.099994,
        longitude: 113.32452,
        title: 'T.I.T 创意园1'
      },
      {
        id: 2,
        latitude: 23.099503,
        longitude: 113.325842,
        title: 'T.I.T 创意园2'
      },
      {
        id: 3,
        latitude: 23.098635,
        longitude: 113.32288,
        title: 'T.I.T 创意园3'
      }
    ],
    strokeColor: '#0f0',
    strokeWidth: 2,
    fillColor: '#f00'
  },
  {
    points: [
      {
        id: 1,
        latitude: 23.099994,
        longitude: 113.32452,
        title: 'T.I.T 创意园'
      },
      {
        id: 2,
        latitude: 23.00229,
        longitude: 113.3345211,
        title: 'T.I.T 创意园2'
      },
      {
        id: 3,
        latitude: 23.20129,
        longitude: 114.3345211,
        title: 'T.I.T 创意园3'
      }
    ],
    strokeColor: '#4287f5',
    strokeWidth: 2,
    fillColor: '#4287f5',
    zIndex: 2
  }
]

const circlesData = [
  {
    latitude: 23.101276,
    longitude: 113.323795,
    radius: 10
  },
  {
    latitude: 23.101276,
    longitude: 113.323795,
    radius: 20
  },
  {
    latitude: 23.099994,
    longitude: 113.32452,
    radius: 100,
    fillColor: '#32CD3266'
  }
]

const controlsData=[
  {
    id: 1,
    position: {
      left: 0,
      top: 0
    },
    iconPath: '/image/pin.png',
    clickable: false
  }
]

const includePointsData = [
  {
    longitude: 113.3245211,
    latitude: 23.10229
  }, 
  {
    longitude: 113.324520,
    latitude: 23.21229
  }
]

Page({
  data: {
    latitude: 23.099994,
    longitude: 113.32452,
    includePoints: [],
    scale: 18,
    currentLongitude: 'undefined',
    currentLatitude: 'undefined',
    southwest: 'undefined',
    northeast: 'undefined',
    rotate: 'undefined',
    skew: 'undefined',
    markers: [],
    markersAnchor: {
      x: '',
      y: ''
    },
    polyline: [],
    polygons: [],
    circles: [],
    controls: [],
    includePoints: [],
    covers: [
      {
        latitude: 23.099994,
        longitude: 113.34452,
        iconPath: '/image/location.png'
      },
      {
        latitude: 23.099994,
        longitude: 113.30452,
        iconPath: '/image/location.png'
      }
    ],
    subKey: 'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',
    enableIncludeView: false,
    showLocation: false,
    showCompass: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolygon: false
  },
  onReady(e) {
    this.mapCtx = qa.createMapContext('map-1')
    // 使用 qa.createMapContext 获取 map 上下文
  },
  toggleIncludeView() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [
        {
          latitude: 23.10229,
          longitude: 113.3345211
        },
        {
          latitude: 23.00229,
          longitude: 113.3345211
        }
      ],
      success(value) {
        console.log(value)
      }
    })
  },
  jumpToCurrent() {
    this.mapCtx.moveToLocation()
  },
  getCenterLocation() {
    let that = this
    this.mapCtx.getCenterLocation({
      success(res) {
        that.setData({
          currentLongitude: res.longitude,
          currentLatitude: res.latitude,
        })
      }
    })
  },
  getRegion() {
    let that = this
    this.mapCtx.getRegion({
      success(res) {
        that.setData({
          southwest: res.southwest,
          northeast: res.northeast,
        })
      }
    })
  },

  setLatitude(e) {
    const value = e.detail.value !== undefined ? e.detail.value : e.currentTarget.dataset.value
    if (!/^(\d+)|(\d*\.\d+)$/.exec(value)) {
      return
    }
    this.setData({
      latitude: Number(value)
    })
  },
  setLongitude(e) {
    const value = e.detail.value !== undefined ? e.detail.value : e.currentTarget.dataset.value
    if (!/^(\d+)|(\d*\.\d+)$/.exec(value)) {
      return
    }
    this.setData({
      longitude: Number(value)
    })
  },
  resetPosition() {
    this.setData({
      latitude: 23.099994,
      longitude: 113.32452
    })
  },

  getScale() {
    let that = this
    this.mapCtx.getScale({
      success(value) {
        that.setData({
          scale: value.scale
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  setScale(e) {
    const value = e.detail.value !== undefined ? e.detail.value : e.currentTarget.dataset.value
    if (!/^(\d+)|(\d*\.\d+)$/.exec(value)) {
      return
    }
    this.setData({
      scale: Number(value)
    })
  },

  /* markers begin */
  translateMarker() {
    this.mapCtx.translateMarker({
      markerId: 1,
      rotate: 40,
      duration: 2000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  toggleMarkers() {
    const markers = this.data.markers.length ? [] : markersData
    this.setData({
      markers
    })
  },
  setMarkers(e) {
    const name = e.currentTarget.dataset.name
    const type = e.currentTarget.dataset.type
    const value = e.detail.value !== undefined ? e.detail.value : e.currentTarget.dataset.value
    const val = /^(\d+)|(\d*\.\d+)$/.exec(value) ? Number(value) : value
    let markers
    if (type === 'all') {
      markers = this.data.markers.map((marker, index) => {
        return {...marker, [`${name}`]: val}
      })
    } else {
      markers = this.data.markers.map((marker, index) => {
        if (index === Number(type)) {
          return {...marker, [`${name}`]: val}
        }
        return marker
      })
    }
    this.setData({
      markers
    })
  },
  updateMarkersAnchor(e) {
    const name = e.currentTarget.dataset.name
    this.setData({
      markersAnchor: {
        ...this.data.markersAnchor,
        [name]: e.detail.value
      }
    })
  },
  setMarkersAnchor() {
    if (isNaN(this.data.markersAnchor.x) || isNaN(this.data.markersAnchor.y)) {
      qa.showToast({
        title: '锚点的x值、y值必须为数字',
        icon: 'none'
      });
      return
    }
    const x = this.data.markersAnchor.x === '' ? '' : Number(this.data.markersAnchor.x)
    const y = this.data.markersAnchor.y === '' ? '' : Number(this.data.markersAnchor.y)
    let markers = this.data.markers.map((marker, index) => {
      return {
        ...marker,
        anchor: {x, y}
      }
    })
    this.setData({
      markers
    })
  },
  toggleCallout() {
    if (!this.data.markers.length) {
      return
    }
    let markers = this.data.markers.map((marker, index) => {
      let dealMarker = {...marker}
      if (index === 0) {
        if (dealMarker.hasOwnProperty('callout')) {
          delete dealMarker.callout
        } else {
          dealMarker.callout = {
            content: '气泡文本展示\n看这里'
          }
        }
      }
      return dealMarker
    })
    this.setData({
      markers
    })
  },
  setCallout(e) {
    const type = e.currentTarget.dataset.type // 如果没有type,遍历列表进行处理；如果有type，只对列表[type]进行处理
    const name = e.currentTarget.dataset.name
    const value = e.detail.value !== undefined ? e.detail.value : e.currentTarget.dataset.value
    const val = /^(\d+)|(\d*\.\d+)$/.exec(value) ? Number(value) : value
    let markers
    if (type !== undefined) {
      markers = this.data.markers.map((marker, index) => {
        if (Number(type) === index) {
          let callout = {...marker.callout, [name]: val}
          return {...marker, callout}
        }
        return {...marker}
      })
    } else {
      markers = this.data.markers.map((marker, index) => {
        let callout = {...marker.callout, [name]: val}
        return {...marker, callout}
      })
    }
    this.setData({
      markers
    })
  },
  toggleLabel() {
    if (!this.data.markers.length) {
      return
    }
    let markers = this.data.markers.map((marker, index) => {
      let dealMarker = {...marker}
      if (index === 0) {
        if (dealMarker.hasOwnProperty('label')) {
          delete dealMarker.label
        } else {
          dealMarker.label = {
            content: '标签文本展示\n看这里'
          }
        }
      }
      return dealMarker
    })
    this.setData({
      markers
    })
  },
  setLabel(e) {
    const type = e.currentTarget.dataset.type // 如果没有type,遍历列表进行处理；如果有type，只对列表[type]进行处理
    const name = e.currentTarget.dataset.name
    const value = e.detail.value !== undefined ? e.detail.value : e.currentTarget.dataset.value
    const val = /^(\d+)|(\d*\.\d+)$/.exec(value) ? Number(value) : value
    let markers
    if (type !== undefined) {
      markers = this.data.markers.map((marker, index) => {
        if (Number(type) === index) {
          let label = {...marker.label, [name]: val}
          return {...marker, label}
        }
        return {...marker}
      })
    } else {
      markers = this.data.markers.map((marker, index) => {
        let label = {...marker.label, [name]: val}
        return {...marker, label}
      })
    }
    this.setData({
      markers
    })
  },
  /* markers end */

  togglePolyline() {
    const polyline = this.data.polyline.length ? [] : polylineData
    this.setData({
      polyline
    })
  },
  togglePolygons() {
    const polygons = this.data.polygons.length ? [] : polygonsData
    this.setData({
      polygons
    })
  },
  toggleCircles() {
    const circles = this.data.circles.length ? [] : circlesData
    this.setData({
      circles
    })
  },
  toggleControls() {
    const controls = this.data.controls.length ? [] : controlsData
    this.setData({
      controls
    })
  },
  setControlsPosition(e) {
    const name = e.currentTarget.dataset.name
    const value = e.detail.value !== undefined ? e.detail.value : e.currentTarget.dataset.value
    const val = /^(\d+)|(\d*\.\d+)$/.exec(value) ? Number(value) : value // 对数字字符串进行处理
    const controls = this.data.controls.map((control, index) => {
      if (index === 0) {
        const position = {...this.data.controls[0].position, [name]: val}
        return {...control, position}
      }
      return {...control}
    })
    this.setData({
      controls
    })
  },
  setListProperty(e) {
    const property = e.currentTarget.dataset.property // 设置的 map 属性（数组类型的属性）: polyline, polygons, circles, controls
    const type = e.currentTarget.dataset.type // 如果没有type,遍历列表进行处理；如果有type，只对列表[type]进行处理
    const name = e.currentTarget.dataset.name
    const value = e.detail.value !== undefined ? e.detail.value : e.currentTarget.dataset.value
    const val = /^(\d+)|(\d*\.\d+)$/.exec(value) ? Number(value) : value // 对数字字符串进行处理
    let list
    if (type !== undefined) {
      list = this.data[property].map((item, index) => {
        if (Number(type) === index) {
          return {...item, [name]: val}
        }
        return {...item}
      })
    } else {
      list = this.data[property].map((item) => {
        return {...item, [name]: val}
      })
    }
    this.setData({
      [property]: list
    })
  },

  toggleIncludePoints() {
    const includePoints = this.data.includePoints.length ? [] : includePointsData
    this.setData({
      includePoints
    })
  },
  toggleShowLocation() {
    this.setData({
      showLocation: !this.data.showLocation
    })
  },
  toggleShowCompass() {
    this.setData({
      showCompass: !this.data.showCompass
    })
  },
  toggleOverlooking() {
    this.setData({
      enableOverlooking: !this.data.enableOverlooking
    })
  },
  toggleScroll() {
    this.setData({
      enableScroll: !this.data.enableScroll
    })
  },
  toggleZoom() {
    this.setData({
      enableZoom: !this.data.enableZoom
    })
  },
  toggleRotate() {
    this.setData({
      enableRotate: !this.data.enableRotate
    })
  },

  // 事件处理
  mapTap() {
    qa.showToast({
      title: 'map tap',
      icon: 'none',
    });
  },
  markerTap() {
    qa.showToast({
      title: 'marker tap',
      icon: 'none',
    });
  },
  controlTap() {
    qa.showToast({
      title: 'control tap',
      icon: 'none',
    });
  },
  calloutTap() {
    qa.showToast({
      title: 'callout tap',
      icon: 'none',
    });
  },
  mapUpdate() {
    qa.showToast({
      title: 'map updated',
      icon: 'none',
    });
  },
  regionChange() {
    qa.showToast({
      title: 'region change',
      icon: 'none',
    });
  },
  poiTap() {
    qa.showToast({
      title: 'poi tap',
      icon: 'none',
    });
  }
})

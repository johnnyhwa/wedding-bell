export default {
  pages: [
    'pages/map/index',
    'pages/index/index',
    'pages/message/index',
  ],
  tabBar: {
    borderStyle: 'white',
    backgroundColor: '#f6f6f6',
    selectedColor: '#4e72b8',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '关于',
        iconPath: './img/西蓝花.png',
        selectedIconPath: './img/西蓝花.png'
      },
      {
        pagePath: 'pages/map/index',
        text: '晤面',
        iconPath: './img/map.png',
        selectedIconPath: './img/map.png'
      },
      {
        pagePath: 'pages/message/index',
        text: '恭賀',
        iconPath: './img/草莓.png',
        selectedIconPath: './img/草莓.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}

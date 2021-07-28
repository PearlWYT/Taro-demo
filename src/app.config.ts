export default {
  pages: [
    'pages/index/index',
    'pages/comp/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    list:[{
      text:'首页',
      pagePath:'pages/index/index',
      selectedIconPath: "./assets/images/tab-home-current.png",
      iconPath: "./assets/images/tab-home.png"
    },{
      text:'组件',
      pagePath:'pages/comp/index',
      selectedIconPath: "./assets/images/tab-cate-current.png",
      iconPath: "./assets/images/tab-cate.png"
    }]
  }
}

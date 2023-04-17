// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // 登录
    wx.login({
      success:function(e){
        //请求成功后获取你的code值
        var code=e.code;
        wx.request({
          //请求后台
          url: 'https://kcapi.itliujia.cn/api/base/wxLogin',
          //传code、nickName、log
          data: {
            code:code
          },
          header:{
            'content-type':'application/x-www-form-urlencoded'
          },
          success: function(arr){
            //判断后台请求成功后
            console.log(arr.data.data);
            console.log(arr); 
          getApp().globalData.openid = arr.data.data[0].openid
          getApp().globalData.uid = arr.data.data[0].uid
          getApp().globalData.name = arr.data.data[0].name
          getApp().globalData.phone = arr.data.data[0].phone
          getApp().globalData.nianji = arr.data.data[0].nianji
          getApp().globalData.xueyuan = arr.data.data[0].xueyuan
          getApp().globalData.zhuanye = arr.data.data[0].zhuanye
          getApp().globalData.type = arr.data.data[0].type
          getApp().globalData.x = arr.data.data[0].x
          getApp().globalData.avatarUrl = arr.data.data[0].avatarUrl
          if(getApp().globalData.uid==''){
            getApp().globalData.c=1
          }
          else{
            getApp().globalData.c=2
          }
          if(getApp().globalData.type=='学生'){
            getApp().globalData.t=1
          }
          if(getApp().globalData.type=='教师'){
            getApp().globalData.t=2
          }


          console.log('c'+getApp().globalData.c)
          }
        })
        
      }
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },

  SetColor: function(t) {
    var a = wx.getStorageSync("StyleColor");
    t.setData({
        StyleColor: a || "#016F94",
        NavBarHeight: wx.getSystemInfoSync().statusBarHeight,
        MenuSize: wx.getMenuButtonBoundingClientRect(),
        lang_en: this.globalData.lang_en
    });
},
  globalData: {
    src: "https://kcapi.itliujia.cn/api/",
    baseurl:"https://kcapi.itliujia.cn/",
    imgsrc: "https://kcapi.itliujia.cn/upload/2022/",
    url: "https://hntc.itliujia.cn/",
    NavBarHeight: wx.getSystemInfoSync().statusBarHeight,
    BarHeight:(wx.getSystemInfoSync().statusBarHeight)*2,
    avatarUrl:'',
    openid:'',
    uid:'',
    phone:'',
    name:'',
    xueyuan:'',
    nianji:'',
    zhuanye:'',
    type:'',
    t:'',
    c:''
  }
})

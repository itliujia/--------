Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    source:{author:'河南开封科技传媒学院'},
    type:'职能部门',
    navbarTitle: [
      "职能部门",
      "二级学院",
      "其他"
    ]
  },

  /**
   * 点击导航栏
   */
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    var that=this
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    })
    var type = event.currentTarget.dataset.type;
    wx.request({
      url: getApp().globalData.src+'/phone/getphoneList?type='+type,
      data: {},
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        that.setData({
          re: res.data.data,
          type:type
        });
    
      }
    })

  },
  onShow: function () {
    var that=this
    getApp().SetColor(this)
    wx.request({
      url: getApp().globalData.src+'/phone/getphoneList?type='+this.data.type,
      data: {},
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        that.setData({
          re: res.data.data,
        })
    
      }
    })
    
  },
  call:function(e){
    let phone = e.currentTarget.dataset.phone
    if(phone == ''){
      app.msg("电话号码为空，无法拨打")
      return
    }
    wx.makePhoneCall({
      phoneNumber: phone
    })
  },

onShareAppMessage: function (e) {
    return {
        title: "『 在科传 』 科传黄页",
        path: "/pages/tool/phone/phone",
        success: function (e) {},
        fail: function (e) {}
    };
},
onShareTimeline: function() {
    return {
        title: "『 在科传 』 科传黄页",
        path: "/pages/tool/phone/phone",
      success: function (e) {},
      fail: function (e) {}
    }
},

  copy:function(e){
    let phone = e.currentTarget.dataset.phone
    wx.setClipboardData({
      data: phone
    })
  }
})
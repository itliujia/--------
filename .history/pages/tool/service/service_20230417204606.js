// pages/tool/service/service.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nav2: { title: "校园WIFI", id: "wx6484e0d1df739328" },
    nav3: { title: "校园一卡通", id: "wx081d27880a575cb3" },
    openid: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    getApp().SetColor(this), console.log(this.data.StyleColor);
    this.setData({
      ["nav1.Color"]: this.data.StyleColor,
      ["nav2.Color"]: this.data.StyleColor,
      ["nav3.Color"]: this.data.StyleColor,
    });
    console.log(getApp().globalData.openid);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  baoxiu: function () {
    if (getApp().globalData.openid == "") {
      setTimeout(() => {
        wx.showToast({
          title: "请先授权登录",
          icon: "error",
        });
        setTimeout(() => {
          wx.hideToast();
        }, 5000);
      }, 0);
    } else {
      if (getApp().globalData.sno == "") {
        setTimeout(() => {
          wx.showToast({
            title: "请先身份认证",
            icon: "error",
          });
          setTimeout(() => {
            wx.hideToast();
          }, 2000);
        }, 0);
      } else {
        wx.navigateTo({
          url: "/pages/tool/service/baoxiu",
        });
      }
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    return {
      title: "『 在科传 』 科传服务",
      path: "/pages/tool/service/service",
      success: function (e) {},
      fail: function (e) {},
    };
  },
  onShareTimeline: function () {
    return {
      title: "『 在科传 』 科传服务",
      path: "/pages/tool/service/service",
      success: function (e) {},
      fail: function (e) {},
    };
  },
});

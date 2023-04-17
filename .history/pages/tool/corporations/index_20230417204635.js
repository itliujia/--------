Page({
  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    source: { author: "河南开封科技传媒学院" },
    type: "学生组织",
    navbarTitle: ["学生组织", "学生社团"],
  },

  /**
   * 点击导航栏
   */
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex;
    var that = this;
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex,
    });
    var type = event.currentTarget.dataset.type;
    wx.request({
      url: getApp().globalData.src + "/corporation/getCList?type=" + type,
      data: {},
      dataType: "json",
      header: {
        "content-type": "application/json",
      },
      success(res) {
        that.setData({
          re: res.data.data,
          type: type,
        });
      },
    });
  },
  onShow: function () {
    var that = this;
    getApp().SetColor(this);
    wx.request({
      url:
        getApp().globalData.src +
        "/corporation/getCList?type=" +
        this.data.type,
      data: {},
      dataType: "json",
      header: {
        "content-type": "application/json",
      },
      success(res) {
        that.setData({
          re: res.data.data,
        });
      },
    });
  },

  onShareAppMessage: function (e) {
    return {
      title: "『 在科传 』 社团组织",
      path: "/pages/tool/corporation/detail",
      success: function (e) {},
      fail: function (e) {},
    };
  },
  onShareTimeline: function () {
    return {
      title: "『 在科传 』 社团组织",
      path: "/pages/tool/corporation/detail",
      success: function (e) {},
      fail: function (e) {},
    };
  },
  detail: function (event) {
    var corporation = event.currentTarget.dataset.corporation;
    wx.navigateTo({
      url: "detail?id=" + corporation,
    });
  },
});

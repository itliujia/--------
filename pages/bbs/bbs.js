// pages/bbs/bbs.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    TypeList: ["通知", "寻物", "闲置", "杂谈", "其他"],
    TypeIndex: 0,
    type: "通知",
  },

  onPullDownRefresh: function () {
    console.log("下拉刷新");
    that.onLoad();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var n = this;
    wx.request({
      url:
        getApp().globalData.src +
        "Bbsconcent/getbbsList?type=" +
        this.data.type,
      success: function (e) {
        n.setData({
          ree: e.data,
          re: e.data.data,
        }),
          console.log(e.data);
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    getApp().SetColor(this);
    this.getTabBar().setData({
      selected: 1,
      StyleColor: this.data.StyleColor,
    });
  },

  ChangeType: function (t) {
    var _this = this;
    var index = t.currentTarget.dataset.idx;
    _this.setData({
      TypeIndex: t.currentTarget.dataset.idx,
      type: this.data.TypeList[index],
    });

    var n = this;
    wx.request({
      url:
        getApp().globalData.src +
        "Bbsconcent/getbbsList?type=" +
        this.data.type,
      success: function (e) {
        n.setData({
          ree: e.data,
          re: e.data.data,
        }),
          console.log(e.data);
      },
    });
  },
  ViewImage: function (t) {
    wx.previewImage({
      current: getApp().globalData.imgsrc + t.target.dataset.current,
      urls: [getApp().globalData.imgsrc + t.target.dataset.current],
    });
  },
  bbsadd: function () {
    var c = getApp().globalData.c;
    switch (c) {
      case 1:
        wx.showModal({
          title: "身份未认证",
          content: "请完成身份认证",
          showCancel: !1,
          success(res) {
            if (res.confirm) {
              wx.navigateTo({
                url: "/pages/my/login",
              });
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
        break;
      case 2:
        wx.navigateTo({
          url: "/pages/bbs/bbsadd",
        });
        break;
      default:
        console.log("Unknown value of c: " + c);
        break;
    }
  },
  ViewPage: function (event) {
    var c = getApp().globalData.c;
    var cid = event.currentTarget.dataset.cid;
    wx.navigateTo({
      url: "/pages/bbs/bbsdetail?cid=" + cid,
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

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

  onShareAppMessage: function (e) {
    return {
      title: "科传新鲜事，快来逛一逛！",
      path: "/pages/bbs/bbs",
      imageUrl: "../../img/share.png",
      success: function (e) {},
      fail: function (e) {},
    };
  },
  onShareTimeline: function () {
    return {
      title: "科传新鲜事，快来逛一逛！",
      path: "/pages/bbs/bbs",
      success: function (e) {},
      fail: function (e) {},
    };
  },
});

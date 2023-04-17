Page({
  data: {},
  onLoad: function (o) {
    getApp().SetColor(this);
    var t = this;
    wx.request({
      url: getApp().globalData.url + "color.php",
      success: function (o) {
        console.log(o.data),
          t.setData({
            ColorList: o.data,
          });
      },
    });
  },
  TapColor: function (o) {
    var t = o.currentTarget.dataset.color;
    this.SaveColor(t);
  },
  SaveColor: function (o) {
    var t =
        "【在科传换色口令】复制这条信息后进入“在科传”小程序点击“我的”页面中“更换配色”，马上更换配色。￥" +
        o +
        "#￥",
      a = this;
    wx.showModal({
      title: "在科传换色口令",
      content: t,
      confirmText: "应用配色",
      cancelText: "复制口令",
      confirmColor: o,
      success: function (e) {
        e.confirm
          ? (a.setData({
              NowColor: o,
            }),
            wx.setStorageSync("StyleColor", o),
            wx.navigateBack({
              delta: 1,
            }))
          : wx.setClipboardData({
              data: t,
            });
      },
    });
  },
  MakeColorString: function (o) {
    o.detail.value.color.match("#[0-9a-fA-F]{6}")
      ? this.SaveColor(o.detail.value.color)
      : wx.showModal({
          content: "请检查颜色代码是否正确，如#FFFFFF",
          showCancel: !1,
          confirmText: "知道了",
        });
  },
});

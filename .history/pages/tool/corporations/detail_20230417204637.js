Page({
  data: {
    id: "",
    title: "",
    source: { author: "河南开封科技传媒学院新闻网" },
  },
  onLoad: function (options) {
    var n = this;
    getApp().SetColor(this);
    console.log(options);
    var id = options.id;
    wx.request({
      url: getApp().globalData.src + "/corporation/getCdetail?id=" + id,
      success: function (e) {
        n.setData({
          re: e.data.data,
          id: id,
          title: e.data.data[0].corporation_name,
        }),
          console.log(e.data);
      },
    });
  },
  onShareAppMessage: function (options) {
    console.log(this.data);

    return {
      title: this.data.title,
      path: "/pages/tool/corporation/detail?id=" + this.data.id,
    };
  },
  onShareTimeline: function () {
    return {
      title: this.data.title,
      path: "/pages/tool/news/detail?url=" + this.data.id,
      success: function (e) {},
      fail: function (e) {},
    };
  },
});

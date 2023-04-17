Page({
  data: {
    ShowSearch: !1,
    now_tab: "jiaoxuelou",
    tab: [
      {
        id: "jiaoxuelou",
        title: "学习",
      },
      {
        id: "sushe",
        title: "休息",
      },
      {
        id: "shitang",
        title: "吃饭",
      },
      {
        id: "yundong",
        title: "运动",
      },
      {
        id: "xiaomen",
        title: "校门",
      },
      {
        id: "chaoshi",
        title: "杂类",
      },
    ],
  },
  onLoad: function () {
    getApp().SetColor(this), console.log(wx.getSystemInfoSync());
    var t = {
      currentTarget: {
        dataset: {
          id: "jiaoxuelou",
        },
      },
    };
    console.log(t), this.ShowPOI(t);
  },
  ShowPOI: function (t) {
    var a = this,
      e = t.currentTarget.dataset.id;
    wx.showLoading({
      title: "加载中...",
    }),
      wx.request({
        url: getApp().globalData.src + "map/getMaplist",
        data: {
          type: e,
        },
        success: function (t) {
          if ((console.log(t.data), t.data && "1" == t.data.msg)) {
            for (
              var o = t.data.data, i = [], n = [], l = 0;
              l < o.length;
              l++
            ) {
              var d = {
                id: o[l].id,
                // iconPath: "../../img/search.png",
                latitude: o[l].latitude,
                longitude: o[l].longitude,
                width: 1,
                height: 1,
                callout: {
                  content: o[l].title,
                  color: "#ffffff",
                  fontSize: 14,
                  borderRadius: 5,
                  bgColor: a.data.StyleColor,
                  padding: 5,
                  display: "ALWAYS",
                },
              };
              i.push(d),
                n.push({
                  latitude: o[l].latitude,
                  longitude: o[l].longitude,
                });
            }
            (a.mapCtx = wx.createMapContext("CampusMap")),
              a.mapCtx.includePoints({
                padding: [10, 10, 10, 10],
                points: n,
              });
          } else
            wx.showModal({
              title: "数据无效",
              content: "数据无效，请重试。",
              showCancel: !1,
            });
          console.log(i),
            a.setData({
              now_tab: e,
              map_markers: i,
            }),
            wx.hideLoading();
        },
        fail: function (t) {
          wx.showModal({
            title: "请求失败",
            content: "请检查网络，请重试。",
            showCancel: !1,
          }),
            wx.hideLoading();
        },
      });
  },

  onShareAppMessage: function (e) {
    return {
      title: "科传校园导览，快来看看你在科传哪里！",
      imageUrl: "../../img/share.png",
      path: "/pages/map/map",
      success: function (e) {},
      fail: function (e) {},
    };
  },
  onShareTimeline: function () {
    return {
      title: "科传校园导览，快来看看你在科传哪里！",
      path: "/pages/map/map",
      success: function (e) {},
      fail: function (e) {},
    };
  },

  ViewPoi: function (t) {
    wx.navigateTo({
      url: "ViewPoi?id=" + t.markerId,
    });
  },
  return: function () {
    wx.navigateBack({});
  },
});

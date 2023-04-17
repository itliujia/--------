Page({
  data: {},
  onLoad: function (a) {
    var t = this;
    getApp().SetColor(this),
      wx.showLoading({
        title: "加载中...",
      }),
      wx.request({
        url: getApp().globalData.src + "map/getMapinfo",
        data: {
          id: a.id,
        },
        success: function (a) {
          if ((console.log(a.data), "1" == a.data.msg)) {
            var o = a.data.data;
            console.log(o),
              console.log(o[0].latitude),
              t.setData({
                SatImg:
                  "http://apis.map.qq.com/ws/staticmap/v2/?center=" +
                  o[0].latitude +
                  "," +
                  o[0].longitude +
                  "&zoom=17&size=270*480&maptype=satellite&key=UBHBZ-G7PKO-H4VWE-SRWOE-SS6NO-YOBSD",
                poi: o[0],
              }),
              wx.hideLoading();
          }
        },
      });
  },
  bindcallouttap: function (a) {
    var t = this;
    let plugin = requirePlugin("routePlan");
    let key = "UBHBZ-G7PKO-H4VWE-SRWOE-SS6NO-YOBSD"; //使用在腾讯位置服务申请的key
    let referer = "在科传"; //调用插件的app的名称
    let endPoint = JSON.stringify({
      //终点
      name: t.data.poi.title,
      latitude: parseFloat(t.data.poi.latitude),
      longitude: parseFloat(t.data.poi.longitude),
    });
    console.log(endPoint);
    wx.navigateTo({
      url:
        "plugin://routePlan/index?key=" +
        key +
        "&referer=" +
        referer +
        "&endPoint=" +
        endPoint,
    });
  },
});

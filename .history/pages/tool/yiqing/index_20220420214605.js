
Page({
    data: {
        isIphoneX: wx.getSystemInfoSync().model.indexOf("iPhone X") > -1,
        gameList: [],
        bannerList: [],
        source:{author:'国家政务服务平台、河南疾控中心'}
    },
    onShow(){
      this.getTabBar().setData({
        selected: 2,
        StyleColor: this.data.StyleColor
    })
    },
    onLoad: function(t) {
        var a = this;
        getApp().SetColor(this), 
        wx.request({
            url: getApp().globalData.url + "gamelist.php",
            success: function(t) {
                console.log(t.data), a.setData({
                    gameList: t.data
                });
            }
        });
        wx.request({
          url: "https://kcapi.itliujia.cn/covn.php",
          success: function(t) {
              console.log(t)
              a.setData({
                covn:t.data.data
              })
          }
      });



    },
    gameTap: function(t) {
        var a = t.currentTarget.dataset, e = a.appid, n = a.name;
        wx.reportAnalytics("game_click", {
            game_appid: e,
            game_name: n
        });
    },
    shareBtnTap: function(t) {
        wx.reportAnalytics("index_share_btn_click", {});
    },
    onShareAppMessage: function (e) {
        return {
            title: "『 在科传 』 疫情防控",
            path: "/pages/tool/yiqing/index",
            success: function (e) {},
            fail: function (e) {}
        };
    },
    onShareTimeline: function() {
        return {
            title: "『 在科传 』 疫情防控",
            path: "/pages/tool/yiqing/index",
          success: function (e) {},
          fail: function (e) {}
        }
    },
    
});
var e = getApp().globalData.lang_en;

Component({
    data: {
        selected: 0,
        list: [ {
            selectedIconPath: "../img/icon/kebiao_.png",
            iconPath: "../img/icon/kebiao.png",
            pagePath: "../kebiao/kebiao",
            text: e ? "Schedule" : "课程表"
        }, {
            selectedIconPath: "../img/icon/news_.png",
            iconPath: "../img/icon/news.png",
            pagePath: "../bbs/bbs",
            text: e ? "News" : "社区"
        }, {
            selectedIconPath: "../img/icon/app_.png",
            iconPath: "../img/icon/app.png",
            pagePath: "../tool/tool",
            text: e ? "Tools" : "百宝箱"
        }, {
            selectedIconPath: "../img/icon/my_.png",
            iconPath: "../img/icon/my.png",
            pagePath: "../my/my",
            text: e ? "Me" : "我的"
        } ]
    },
    attached: function() {},
    methods: {
        switchTab: function(e) {
            var t = this.data.list[e.currentTarget.dataset.index].pagePath;
            wx.switchTab({
                url: t
            });
        },
        enterPublish: function() {
            wx.switchTab({
                url: "../home/home",
            });
        }
    }
});
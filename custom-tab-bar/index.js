var e = getApp().globalData.lang_en;

Component({
    data: {
        selected: 0,
        list: [ {
            selectedIconPath: "../img/icon/kebiao_.png",
            iconPath: "../img/icon/kebiao.png",
            pagePath: "/pages/kebiao/kebiao",
            text: e ? "Schedule" : "课程表"
        }, {
            selectedIconPath: "../img/icon/news_.png",
            iconPath: "../img/icon/news.png",
            pagePath: "/pages/bbs/bbs",
            text: e ? "News" : "新鲜事"
        }, {
            selectedIconPath: "../img/icon/app_.png",
            iconPath: "../img/icon/app.png",
            pagePath: "/pages/tool/yiqing/index",
            text: e ? "Tools" : "疫情防控"
        }, {
            selectedIconPath: "../img/icon/my_.png",
            iconPath: "../img/icon/my.png",
            pagePath: "/pages/my/my",
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
                url: "/pages/home/home",
            });
        }
    }
});
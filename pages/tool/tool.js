getApp();

Page({
    data: {

        bannerList: [ {
            img: "http://wsfile.dahe.cn/image/jpeg/20211019/1634614705426437.jpg",
            title: "河南开封科技传媒学院"
        } ],
        app_s: {
            new: [ {
                url: "../freshman/index",
                en: "freshman",
                cn: "新生必看",
                color:'254,119,67,0.1',
                cn_: "freshman"
            }, {
                url: "../../new/pages/enrollment",
                en: "enrollment",
                cn: "招生信息",
                color:'174,255,198,0.2',
                cn_: "enrollment"
            }, {
                url: "../tool/recruitenroll/luqu",
                en: "recruitenroll",
                cn: "录取查询",
                color:'15,180,215,0.2',
                cn_: "recruitenroll"
            } , {
                url: "../map/map",
                en: "map",
                cn: "科传导览",
                color:'249,208,147,0.2',
                cn_: "map"
            } 
        ],
            learn: [ {
                url: "../tool/library/index",
                en: "lib",
                cn: "图书馆",
                color:"25,179,146,0.1",
                cn_: "lib"
            }, {
                url: "../tool/grade/list",
                en: "grade",
                cn: "成绩管理",
                color:"249,220,180,0.2",
                cn_: "Score"
            }, {
                url: "../freeroom/freeroom",
                en: "freeroom",
                cn: "空教室",
                color:"82,193,224,0.2",
                cn_: "freeroom"
            } , {
                url: "../tool/time/index",
                en: "timetable",
                cn: "校历作息",
                color:"69,185,176,0.1",
                cn_: "timetable"
            } 
        ],
            live: [ 
               
            {
                url: "../tool/news/index",
                en: "kcnews",
                cn: "科传资讯",
                color:"255,244,244",
                cn_: "kcnews"
            }, 
            {
                url: "../tool/service/service",
                en: "service",
                cn: "科传服务",
                color:"238,106,28,0.1",
                cn_: "service"
            }, 
             {
                url: "../tool/phone/phone",
                en: "phone",
                cn: "科传黄页",
                color:"255,212,82,0.2",
                cn_: "phone"
            }, 
            {
                url: "../tool/corporations/index",
                en: "corporation",
                cn: "组织社团",
                color:"51,153,204,0.1",
                cn_: "corporation"
            },  
            {
                url: "../tool/media/media",
                en: "media",
                cn: "影约科传",
                color:"159,219,173,0.2",
                cn_: "media"
            },
        
        
        ],
            go: [ {
                url: "../report/report",
                en: "report",
                cn: "大学报告",
                color:"24,144,255,0.1",
                cn_: "report"
            }, {
                url: "../jiuye/index",
                en: "jiuye",
                cn: "就业信息",
                color:"88,168,80,0.1",
                cn_: "jiuye"
            }, {
                url: "../biye/biye",
                en: "biye",
                cn: "毕业ing",
                color:"71,71,255,0.1",
                cn_: "biye"
            } , {
                url: "../kechuan/kachuan",
                en: "kechuan",
                cn: "祝福科传",
                color:"242,193,130,0.2",
                cn_: "kechuan"
            } 
        ],
        },
        angle: 0
    },
    
    onShow: function() {
        var n = this;
        getApp().SetColor(this), 
        this.getTabBar().setData({
            selected: 2,
            StyleColor: this.data.StyleColor
        }), 
        wx.request({
          url: getApp().globalData.src+"/banner/getbannerList?type=功能大厅",
          success: function (e) {
              n.setData({
                  bannerList: e.data.data
              }), 
              console.log(e.data);
          }
      });




    },
    onShareAppMessage: function (e) {
        return {
            title: "『 在科传 』 百宝箱",
            path: "/pages/tool/tool",
            success: function (e) {},
            fail: function (e) {}
        };
    },
    onShareTimeline: function() {
        return {
          title: "『 在科传 』 百宝箱",
          path: "/pages/tool/tool",
          success: function (e) {},
          fail: function (e) {}
        }
    },
    
    
});
getApp();

Page({
    data: {

        bannerList: [ {
            img: "http://wsfile.dahe.cn/image/jpeg/20211019/1634614705426437.jpg",
            title: "河南开封科技传媒学院"
        } ],
        app_s: {
            new: [ 
            // {
            //     url: "../../new/pages/enrollment",
            //     en: "enrollment",
            //     up:'up',
            //     cn: "招生信息",
            //     color:'174,255,198,0.2',
            //     cn_: "enrollment"
            // }, 
            {
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
            },
            {
              url: "/pages/tool/time/xl",
              en: "timetable",
              cn: "科传校历",
              color:"69,185,176,0.1",
              cn_: "timetable"
          } ,
          {
              url: "/pages/tool/time/time",
              en: "time",
              cn: "科传作息",
              color:"540,196,138,0.1",
              cn_: "time"
          } 
        ],
            learn: [ {
                url: "../tool/library/index",
                en: "lib",
                cn: "馆藏查询",
                color:"25,179,146,0.1",
                cn_: "lib"
            }, {
                url: "../tool/grade/list",
                en: "grade",
                cn: "成绩管理",
                color:"249,220,180,0.2",
                cn_: "Score"
            },
            //  {
            //     url: "../freeroom/freeroom",
            //     en: "freeroom",
            //     up:'up',
            //     cn: "空教室",
            //     color:"82,193,224,0.2",
            //     cn_: "freeroom"
            // } ,
          //   {
          //       url: "/pages/kebiao/kebiao",
          //       en: "seat",
          //       cn: "座位预约",
          //       color:"95,103,235,0.1",
          //       cn_: "seat"
          //   } ,
          //   {
          //     url: "/pages/tool/time/xl",
          //     en: "lecture",
          //     cn: "科传讲座",
          //     color:"69,185,176,0.1",
          //     cn_: "lecture"
          // } 
            
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
            // {
            //     url: "",
            //     en: "Wifi",
            //     up:'up',
            //     cn: "校园WIFI",
            //     color:"159,219,173,0.2",
            //     cn_: "Wifi"
            // },
        ],
            go: [ {
                url: "../report/report",
                up:'up',
                en: "report",
                cn: "大学报告",
                color:"24,144,255,0.1",
                cn_: "report"
            }, {
                url: "../jiuye/index",
                en: "jiuye",
                up:'up',
                cn: "就业信息",
                color:"88,168,80,0.1",
                cn_: "jiuye"
            }, {
                url: "../biye/biye",
                en: "biye",
                up:'up',
                cn: "毕业ing",
                color:"71,71,255,0.1",
                cn_: "biye"
            } , {
                url: "../kechuan/kachuan",
                en: "kechuan",
                up:'up',
                cn: "祝福科传",
                color:"242,193,130,0.2",
                cn_: "kechuan"
            } 
        ],
        },
        angle: 0
    },
    baoxiu: function () {

          if(getApp().globalData.c==1){
            wx.showModal({
                title: "身份未认证",
                content: "请完成身份认证",
                showCancel: !1,
                success (res) {
                  if (res.confirm) {
                    wx.navigateTo({
                      url: '/pages/my/login',
                    })
                    
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
            })
          }
          else{
            wx.navigateTo({
              url: '/pages/tool/service/baoxiu',
            })
          }
    
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
            title: "科传百宝箱，快来试一试！",
            path: "/pages/tool/tool",
            imageUrl: '../../img/share.png',   
            success: function (e) {},
            fail: function (e) {}
        };
    },
    onShareTimeline: function() {
        return {
            title: "科传百宝箱，快来试一试！",
          path: "/pages/tool/tool",
          success: function (e) {},
          fail: function (e) {}
        }
    },
    up:function(){
        wx.showModal({
            title: "未上线",
            content: "当前模块暂未上线，敬请期待",
            showCancel: !1,
        })
    }
    
});
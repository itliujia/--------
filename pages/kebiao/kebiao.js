//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    navbarActiveIndex: '',
    type: '',
    showModalStatus: false,
    
    now_week: 1,
    zhou_num: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周', '第8周', '第9周', '第10周', '第11周', '第12周', '第13周', '第14周', '第15周', '第16周', '第17周', '第18周', '第19周', '第20周'],
    navbarTitle: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
we:function(){
  wx.navigateTo({
    url: '/pages/kebiao/ll',
  })
},
  onShow: function () {
    var n = this
    getApp().SetColor(this)
    this.getTabBar().setData({
      selected: 0,
      StyleColor: this.data.StyleColor,
  })
    var today = new Date();
    var currentDate = today.getDay(); //获取存储当前日期
    var weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    var dateTimeNow = new Date();
    var year = dateTimeNow.getFullYear();
    var dateTime = new Date(year, "1", "22", "0", "0", "0");
    var adjustd;
    if (dateTime.getDay() == 0) {
      adjustd = 1;
    } else {
      adjustd = 8 - dateTime.getDay();
    }
    dateTime = dateTime.setDate(dateTime.getDate() + adjustd); //获取元旦后第一个周一0点的时间
    dateTime = new Date(dateTime);
    dateTimeNow = dateTimeNow.setDate(dateTimeNow.getDate());
    //毫秒，所以要多除1000
    var sweek = parseInt((dateTimeNow - dateTime) / 1000 / (86400 * 7)) + 2;
    console.log('@' + sweek);
    this.setData({
      now_week: sweek,
    });
    if (weekday[currentDate] == '周一') {
      var navbarActiveIndex = 0;
    }
    if (weekday[currentDate] == '周二') {
      var navbarActiveIndex = 1;
    }
    if (weekday[currentDate] == '周三') {
      var navbarActiveIndex = 2;
    }
    if (weekday[currentDate] == '周四') {
      var navbarActiveIndex = 3;
    }
    if (weekday[currentDate] == '周五') {
      var navbarActiveIndex = 4;
    }
    if (weekday[currentDate] == '周六') {
      var navbarActiveIndex = 5;
    }
    if (weekday[currentDate] == '周日') {
      var navbarActiveIndex = 6;
    }
    this.setData({
      type: weekday[currentDate],
      navbarActiveIndex
    });
    
    wx.request({
      url: getApp().globalData.src + 'timetable/getList?className='+getApp().globalData.nianji+getApp().globalData.zhuanye+'&weeknum='+ this.data.now_week + '&week=' + this.data.type,
      success: function (e) {
        n.setData({
            ree: e.data,
            banji:getApp().globalData.nianji+getApp().globalData.zhuanye,
            re: e.data.data
          }),
          console.log(e.data);
      }
    })
  },
  select: function (e) {
    var week = parseInt(e.detail.value) + 1;
    this.selectWeek(week)
  },
  selectWeek: function (week) {
    var n = this
    this.setData({
      now_week: week,
    });
    wx.request({
      url: getApp().globalData.src + 'timetable/getList?className='+getApp().globalData.nianji+getApp().globalData.zhuanye+'&weeknum='+ this.data.now_week + '&week=' + this.data.type,
      success: function (e) {
        n.setData({
            ree: e.data,
            re: e.data.data,
          }),
          console.log(e.data);
      }
    })
    console.log(this.data.now_week)
  },
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    var n = this
    var type = event.currentTarget.dataset.type;
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex,
      type: type
    })

    wx.request({
      url: getApp().globalData.src + 'timetable/getList?className='+getApp().globalData.nianji+getApp().globalData.zhuanye+'&weeknum='+ this.data.now_week + '&week=' + this.data.type,
      success: function (e) {
        n.setData({
            ree: e.data,
            re: e.data.data
          }),
          console.log(e.data);
      }
    })

  },
  Clear: function(a) {
    // this.setData({
    //     scores: ""
    // }), 
    // wx.removeStorageSync("StuScore"), 
    console.log(2)
    this.onShow();
},
  listDisplay: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
},

  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
        duration: 1,  //动画时长
        timingFunction: "linear", //线性
        delay: 0  //0则不延迟
    });

    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;

    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停
    animation.translateY(240).step();

    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
        animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
        // 执行第二组动画：Y轴不偏移，停
        animation.translateY(0).step()
        // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
        this.setData({
            animationData: animation
        })

        //关闭抽屉
        if (currentStatu == "close") {
            this.setData(
                {
                    showModalStatus: false
                }
            );
        }
    }.bind(this), 1)

    // 显示抽屉
    if (currentStatu == "open") {
        this.setData(
            {
                showModalStatus: true
            }
        );
    }
}




})
// pages/my/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userSelect: true,
    stuInfoForm: false,
    teaInfoForm: false,
    userType: "",
    at: 1,

    xueyuan: [
      "党政办公室",
      "纪检监察室",
      "党委组织统战部",
      "党委宣传部",
      "校友会",
      "工会",
      "团委",
      "教务处",
      "科研处",
      "人事处",
      "财务处",
      "学生处",
      "招生就业处",
      "保卫处",
      "设备与信息化处",
      "基建处",
      "后勤服务管理中心",
      "图书馆",
      "院史展览馆",
      "经济学院",
      "商学院",
      "人文学院",
      "理工学院",
      "医学院",
      "艺术学院",
      "传媒学院",
      "体育学院",
    ],
    nianji: ["2018级", "2019级", "2020级", "2021级"],
    zhuanye: [
      "经济学",
      "经济统计学",
      "国际经济与贸易",
      "金融学",
      "金融学（专升本）",
      "金融学专业(金融统计方向)",
      "统计学",
      "数学与应用数学专业",
      "会计学",
      "会计学（专升本）",
      "审计学",
      "财务管理",
      "人力资源管理",
      "旅游管理",
      "旅游管理（专升本）",
      "行政管理专业",
      "应用心理学",
      "法学",
      "学前教育",
      "学前教育（专升本）",
      "英语",
      "汉语言文学",
      "英语（专升本）",
      "汉语言文学（专升本）",
      "商务英语",
      "人文地理与城乡规划",
      "环境科学",
      "电子信息科学与技术",
      "通信工程",
      "计算机科学与技术",
      "土木工程",
      "应用化学",
      "生物工程",
      "数据科学与大数据技术",
      "软件工程",
      "计算机科学与技术（专升本）",
      "网络工程",
      "护理学（含专升本）",
      "护理学",
      "药学",
      "临床医学（专升本）",
      "环境设计",
      "环境设计（专升本）",
      "视觉传达设计",
      "动画",
      "动画（专升本）",
      "书法学",
      "播音与主持艺术",
      "播音与主持艺术专业（专升本）",
      "广播电视编导",
      "广告学",
      "新闻学",
      "网络与新媒体",
      "体育教育",
    ],
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          avatarUrl: res.userInfo.avatarUrl,
          at: 2,
          hasUserInfo: true,
        });
        console.log(this.data.avatarUrl);
      },
    });
  },

  bindPickerChangeXueyuan: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindPickerChangeNianji: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      i: e.detail.value,
    });
  },
  bindPickerChangeZhuanye: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      j: e.detail.value,
    });
  },

  addStuInfo: function (a) {
    var e = a.detail.value,
      o = new Date().valueOf();
    var n = this;
    var openid = getApp().globalData.openid;
    "" == e.uid ||
    "" == e.name ||
    "" == e.phone ||
    e.nianji == null ||
    e.zhuanye == null
      ? wx.showModal({
          title: "信息不全",
          content: "请填写完整信息",
          showCancel: !1,
        })
      : wx.request({
          url:
            getApp().globalData.src +
            "base/stuLogin?x=0&openid=" +
            openid +
            "&avatarUrl=" +
            this.data.avatarUrl,
          data: e,
          success: function (t) {
            getApp().onLaunch();
            wx.showModal({
              title: "认证成功",
              content: "身份认证成功",
              showCancel: !1,
              success(res) {
                if (res.confirm) {
                  wx.switchTab({
                    url: "/pages/my/my",
                  });
                } else if (res.cancel) {
                  console.log("用户点击取消");
                }
              },
            });
          },
        });
  },
  addTeaInfo: function (a) {
    var e = a.detail.value,
      o = new Date().valueOf();
    var n = this;
    var openid = getApp().globalData.openid;
    "" == e.uid || "" == e.name || "" == e.phone || e.xueyuan == null
      ? wx.showModal({
          title: "信息不全",
          content: "请填写完整信息",
          showCancel: !1,
        })
      : wx.request({
          url:
            getApp().globalData.src +
            "base/teaLogin?x=0&openid=" +
            openid +
            "&avatarUrl=" +
            this.data.avatarUrl,
          data: e,
          success: function (t) {
            getApp().onLaunch();

            setTimeout(() => {
              wx.showModal({
                title: "认证成功",
                content: "身份认证成功",
                showCancel: !1,
                success(res) {
                  if (res.confirm) {
                    wx.switchTab({
                      url: "/pages/my/my",
                    });
                  } else if (res.cancel) {
                    console.log("用户点击取消");
                  }
                },
              });
            }, 1000);
          },
        });
  },

  userSelectTea: function () {
    var _this = this;

    if (this.data.avatarUrl == undefined) {
      wx.showModal({
        title: "头像未获取",
        content: "先请获取头像",
        showCancel: !1,
      });
    } else {
      _this.setData({
        userSelect: false,
        userType: "教师",
        teaInfoForm: true,
      });
    }
  },
  userSelectStu: function () {
    var _this = this;

    if (this.data.avatarUrl == undefined) {
      wx.showModal({
        title: "头像未获取",
        content: "先请获取头像",
        showCancel: !1,
      });
    } else {
      _this.setData({
        userSelect: false,
        userType: "学生",
        stuInfoForm: true,
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    getApp().SetColor(this);
    console.log("qqq" + this.data.avatarUrl);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
});

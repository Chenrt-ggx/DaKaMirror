webpackJsonp([730], {
  QuVK: function (t, s, i) {
    "use strict";
    Object.defineProperty(s, "__esModule", {
      value: !0,
    });
    var e = i("Dd8w"),
      a = i.n(e),
      n = i("woOf"),
      o = i.n(n),
      c = i("mvHQ"),
      r = i.n(c),
      l = {
        sfzs: "",
        bzxyy: "",
        bzxyy_other: "",
        brsfzc: "",
        tw: "",
        sfcxzz: "",
        zdjg: "",
        zdjg_other: "",
        sfgl: "",
        gldd: "",
        gldd_other: "",
        glyy: "",
        glyy_other: "",
        gl_start: "",
        gl_end: "",
        sfmqjc: "",
        sfzc_14: "",
        sfqw_14: "",
        sfqw_14_remark: "",
        sfzgfx: "",
        sfzgfx_remark: "",
        sfjc_14: "",
        sfjc_14_remark: "",
        sfjcqz_14: "",
        sfjcqz_14_remark: "",
        sfgtjz_14: "",
        sfgtjz_14_remark: "",
        szsqqz: "",
        sfyqk: "",
        szdd: "",
        area: "",
        city: "",
        province: "",
        address: "",
        geo_api_info: "",
        gwdz: "",
        is_move: 0,
        move_reason: "",
        move_remark: "",
      },
      f = {
        data: function () {
          return {
            msg: "",
            icontip: "",
            show: !1,
            img: "",
            dec: "",
            showctrl: !1,
            nodataimg: "暂无信息",
            nodataurl: "/site/static/images/nodata.png",
            nonetworkimg: !1,
            nonetworktext: "",
            date: "",
            setting: {},
            hasFlag: !1,
            xgh: "",
            info: l,
            uinfo: {
              realname: "",
              role: {},
            },
            ajaxLock: !1,
            readonly: !1,
            Allprovice: allProvinces,
            Allcity: [],
            Allarea: [],
            group_id: "",
            myarea: "",
            ontime: !1,
          };
        },
        watch: {
          "info.area": function (t) {
            $.isEmptyObject(this.oldInfo)
              ? (this.info.is_move = 0)
              : [
                  "北京市",
                  "上海市",
                  "重庆市",
                  "天津市",
                  "中国香港",
                  "中国澳门",
                  "中国台湾",
                  "港澳台或国外",
                ].indexOf(this.info.province) > -1
              ? this.info.province != this.oldInfo.province
                ? (this.info.is_move = 1)
                : (this.info.is_move = 0)
              : this.info.province + this.info.city !=
                this.oldInfo.province + this.oldInfo.city
              ? (this.info.is_move = 1)
              : (this.info.is_move = 0);
          },
        },
        methods: {
          changesfzs: function (t) {
            1 == t
              ? ((this.info.sfzs = 1),
                (this.info.bzxyy = ""),
                (this.info.bzxyy_other = ""),
                this.ontime ||
                  ((this.msg = "未到打卡时间"), (this.icontip = "desc")))
              : (this.info.sfzs = "0");
          },
          btnhide: function () {
            (this.msg = ""), (this.icontip = "");
          },
          blurhandler: function () {
            if (
              window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
            ) {
              var t, s;
              s = setInterval(function () {
                (t =
                  document.documentElement.scrollTop ||
                  document.body.scrollTop),
                  (t -= 1),
                  window.scrollTo(0, t),
                  clearInterval(s);
              }, 100);
            }
          },
          isNullStr: function (t) {
            if ("" == t) return !0;
            return new RegExp("^[ ]+$").test(t);
          },
          setSfzgn: function (t) {
            if (2 == t)
              (this.info.area = "港澳台或国外"),
                (this.info.city = "港澳台或国外"),
                (this.info.province = "港澳台或国外");
            else {
              var s = $.isEmptyObject(this.oldInfo);
              (this.info.area = ""),
                (this.info.city = s ? "" : this.oldInfo.city),
                (this.info.province = s ? "" : this.oldInfo.province);
            }
            this.info.szdd = t;
          },
          handleChangeCity: function (t) {
            for (var s, i = 0; i < this.Allprovice.length; i++)
              this.info.province == this.Allprovice[i].name && (s = i);
            void 0 != s && (this.Allcity = this.Allprovice[s].city),
              console.log(this.Allcity),
              (this.info.city = ""),
              (this.myarea = "");
          },
          handleChangeArea: function (t) {
            for (var s, i = 0; i < this.Allcity.length; i++)
              this.info.city == this.Allcity[i].name && (s = i);
            void 0 != s && (this.Allarea = this.Allcity[s].districtAndCounty),
              (this.info.area = this.info.province + " " + this.info.city),
              (this.myarea = "");
          },
          changearea: function () {
            this.info.area =
              this.info.province + " " + this.info.city + " " + this.myarea;
          },
          locatComplete: function (t) {
            this.waploading("hide"),
              (this.info.geo_api_info = r()(t)),
              (this.info.address = t.formattedAddress),
              (this.info.province = t.addressComponent.province),
              (this.info.city = t.addressComponent.city),
              "" == $.trim(t.addressComponent.city) &&
              ["北京市", "上海市", "重庆市", "天津市"].indexOf(
                t.addressComponent.province
              ) > -1
                ? (this.info.city = t.addressComponent.province)
                : "" === $.trim(t.addressComponent.city)
                ? (this.info.city = t.addressComponent.district)
                : (this.info.city = t.addressComponent.city),
              "" === $.trim(t.addressComponent.city)
                ? (this.info.area =
                    t.addressComponent.province +
                    " " +
                    t.addressComponent.district)
                : (this.info.area =
                    t.addressComponent.province +
                    " " +
                    t.addressComponent.city +
                    " " +
                    t.addressComponent.district),
              console.log(t, "dingwei "),
              console.log(this.info.area, "this.info.area", this.info);
          },
          locatError: function (t) {
            this.waploading("hide"),
              (this.info.geo_api_info = r()(t)),
              (this.info.address = ""),
              (this.info.area = ""),
              (this.info.province = ""),
              (this.info.city = ""),
              this.appFetch(
                {
                  url: "ncovSaveError",
                  method: "POST",
                  data: {
                    error: r()(t),
                  },
                },
                function (t) {},
                "locationErr"
              ),
              this.wapalert("获取位置信息失败");
          },
          getLocation: function (t) {
            var s = this,
              i = new AMap.Map("iCenter");
            i.plugin("AMap.Geolocation", function () {
              var e = new AMap.Geolocation({
                enableHighAccuracy: !0,
                timeout: 6e4,
                maximumAge: 0,
                convert: !0,
                showButton: !0,
                buttonPosition: "LB",
                buttonOffset: new AMap.Pixel(10, 20),
                panToLocation: !1,
                zoomToAccuracy: !1,
              });
              i.addControl(e),
                !t && s.waploading("show", "获取地理位置中..."),
                e.getCurrentPosition(),
                AMap.event.addListener(e, "complete", s.locatComplete),
                AMap.event.addListener(e, "error", s.locatError);
            });
          },
          confirm: function () {
            var t,
              s = this;
            return (
              this.blurhandler(),
              this.xgh || 1 != this.hasFlag
                ? !!this.valid(this.info) &&
                  ((t = this.xgh
                    ? "请确认信息是否全部正确？"
                    : "每天只能填报一次，请确认信息是否全部正确？"),
                  void this.wapconfirm(t, "确认", "再看看", function () {
                    s.save();
                  }))
                : (this.wapalert("每天只能填报一次，你已提交过"), !1)
            );
          },
          save: function () {
            window.location.href =
              "https://www.bilibili.com/video/BV1GJ411x7h7";
          },
          valid: function (t) {
            return "" == t.sfzs
              ? (this.wapalert("请选择今日是否在校住宿", !1, function () {
                  $("[name=sfzs]").focus(),
                    $("[name=sfzs]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.sfzs && "" == t.bzxyy
              ? (this.wapalert("请选择不在校原因", !1, function () {
                  $("[name=bzxyy]").focus(),
                    $("[name=bzxyy]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.sfzs &&
                "6" == t.bzxyy &&
                this.isNullStr(t.bzxyy_other) &&
                (this.isNullStr(t.area) ||
                  this.isNullStr(t.province) ||
                  this.isNullStr(t.city))
              ? (this.wapalert("请填写其他原因", !1, function () {
                  $("[name=bzxyy_other]").focus(),
                    $("[name=bzxyy_other]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "" == t.brsfzc
              ? (this.wapalert("请选择今日本人情况是否正常", !1, function () {
                  $("[name=brsfzc]").focus(),
                    $("[name=brsfzc]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc && "" == t.tw
              ? (this.wapalert("请选择体温范围", !1, function () {
                  $("[name=tw]").focus(),
                    $("[name=tw]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc && "" == t.sfcxzz
              ? (this.wapalert(
                  "请选择是否出现乏力、干咳、呼吸困难等症状",
                  !1,
                  function () {
                    $("[name=sfcxzz]").focus(),
                      $("[name=sfcxzz]").get(0).scrollIntoView(!1);
                  }
                ),
                !1)
              : "0" == t.brsfzc && "1" == t.sfcxzz && "" == t.zdjg
              ? (this.wapalert("请选择诊断结果", !1, function () {
                  $("[name=zdjg]").focus(),
                    $("[name=zdjg]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc &&
                "1" == t.sfcxzz &&
                "3" == t.zdjg &&
                this.isNullStr(t.zdjg_other)
              ? (this.wapalert("请填写诊断结果", !1, function () {
                  $("[name=zdjg_other]").focus(),
                    $("[name=zdjg_other]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc && "" == t.sfgl
              ? (this.wapalert("请选择今日是否处于隔离期", !1, function () {
                  $("[name=sfgl]").focus(),
                    $("[name=sfgl]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc && "1" == t.sfgl && "" == t.gldd
              ? (this.wapalert("请选择隔离地点", !1, function () {
                  $("[name=gldd]").focus(),
                    $("[name=gldd]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc &&
                "1" == t.sfgl &&
                "6" == t.gldd &&
                this.isNullStr(t.gldd_other)
              ? (this.wapalert("请填写隔离地点", !1, function () {
                  $("[name=glyy_other]").focus(),
                    $("[name=glyy_other]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc && "1" == t.sfgl && "" == t.glyy
              ? (this.wapalert("请选择隔离原因", !1, function () {
                  $("[name=glyy]").focus(),
                    $("[name=glyy]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc &&
                "1" == t.sfgl &&
                "3" == t.glyy &&
                this.isNullStr(t.glyy_other)
              ? (this.wapalert("请填写隔离原因", !1, function () {
                  $("[name=glyy_other]").focus(),
                    $("[name=glyy_other]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc && "1" == t.sfgl && "" == t.gl_start
              ? (this.wapalert("请选择隔离开始时间", !1, function () {
                  $("[name=gl_start]").focus(),
                    $("[name=gl_start]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc && "1" == t.sfgl && "" == t.gl_end
              ? (this.wapalert("请选择拟解除隔离时间", !1, function () {
                  $("[name=gl_end]").focus(),
                    $("[name=gl_end]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.brsfzc && "1" == t.sfgl && "" == t.sfmqjc
              ? (this.wapalert(
                  "请选择是否为相关部门认定的密切接触者/次级密切接触者",
                  !1,
                  function () {
                    $("[name=sfmqjc]").focus(),
                      $("[name=sfmqjc]").get(0).scrollIntoView(!1);
                  }
                ),
                !1)
              : "" == t.sfzc_14
              ? (this.wapalert(
                  "请选择近7日内，所接触环境和人员是否一切正常",
                  !1,
                  function () {
                    $("[name=sfzc_14]").focus(),
                      $("[name=sfzc_14]").get(0).scrollIntoView(!1);
                  }
                ),
                !1)
              : "0" == t.sfzc_14 && "" == t.sfqw_14
              ? (this.wapalert(
                  "请选择7日内是否到过曾前往且目前不在中高风险地区",
                  !1,
                  function () {
                    $("[name=sfqw_14]").focus(),
                      $("[name=sfqw_14]").get(0).scrollIntoView(!1);
                  }
                ),
                !1)
              : "0" == t.sfzc_14 &&
                "1" == t.sfqw_14 &&
                this.isNullStr(t.sfqw_14_remark)
              ? (this.wapalert("请填写时间、地点、原因、行程", !1, function () {
                  $("[name=sfqw_14_remark]").focus(),
                    $("[name=sfqw_14_remark]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.sfzc_14 && "" == t.sfzgfx
              ? (this.wapalert("请选择今日是否在中高风险地区", !1, function () {
                  $("[name=sfzgfx]").focus(),
                    $("[name=sfzgfx]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.sfzc_14 &&
                "1" == t.sfzgfx &&
                this.isNullStr(t.sfzgfx_remark)
              ? (this.wapalert("请填写原因，地点", !1, function () {
                  $("[name=sfzgfx_remark]").focus(),
                    $("[name=sfzgfx_remark]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.sfzc_14 && "" == t.sfjc_14
              ? (this.wapalert(
                  "请选择7日内是否接触过无症状感染/疑似/确诊人群",
                  !1,
                  function () {
                    $("[name=sfjc_14]").focus(),
                      $("[name=sfjc_14]").get(0).scrollIntoView(!1);
                  }
                ),
                !1)
              : "0" == t.sfzc_14 &&
                "1" == t.sfjc_14 &&
                this.isNullStr(t.sfjc_14_remark)
              ? (this.wapalert(
                  "请填写接触类型、时间、地点、原因、行程",
                  !1,
                  function () {
                    $("[name=sfjc_14_remark]").focus(),
                      $("[name=sfjc_14_remark]").get(0).scrollIntoView(!1);
                  }
                ),
                !1)
              : "0" == t.sfzc_14 && "" == t.sfjcqz_14
              ? (this.wapalert(
                  "请选择7日内是否接触过确诊病例/无症状感染者的密接人员",
                  !1,
                  function () {
                    $("[name=sfjcqz_14]").focus(),
                      $("[name=sfjcqz_14]").get(0).scrollIntoView(!1);
                  }
                ),
                !1)
              : "0" == t.sfzc_14 &&
                "1" == t.sfjcqz_14 &&
                this.isNullStr(t.sfjcqz_14_remark)
              ? (this.wapalert("请填写时间、地点、原因、行程", !1, function () {
                  $("[name=sfjcqz_14_remark]").focus(),
                    $("[name=sfjcqz_14_remark]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "0" == t.sfzc_14 && "" == t.sfgtjz_14
              ? (this.wapalert(
                  "请选择7日内，是否有共同居住人由境外或国内中高风险地区返回",
                  !1,
                  function () {
                    $("[name=sfgtjz_14]").focus(),
                      $("[name=sfgtjz_14]").get(0).scrollIntoView(!1);
                  }
                ),
                !1)
              : "0" == t.sfzc_14 &&
                "1" == t.sfgtjz_14 &&
                this.isNullStr(t.sfgtjz_14_remark)
              ? (this.wapalert(
                  "请填写入境（离开国内中高风险地区）时间，出发地点",
                  !1,
                  function () {
                    $("[name=sfgtjz_14_remark]").focus(),
                      $("[name=sfgtjz_14_remark]").get(0).scrollIntoView(!1);
                  }
                ),
                !1)
              : "0" == t.sfzc_14 && "" == t.szsqqz
              ? (this.wapalert(
                  "请选择今日所在社区是否有确诊病例",
                  !1,
                  function () {
                    $("[name=szsqqz]").focus(),
                      $("[name=szsqqz]").get(0).scrollIntoView(!1);
                  }
                ),
                !1)
              : "" == t.szdd
              ? (this.wapalert("请选择所在地点", !1, function () {
                  $("[name=szdd]").focus(),
                    $("[name=szdd]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "1" == t.szdd && "" == t.area
              ? (this.wapalert("请点击获取地理位置", !1, function () {
                  $("[name=area]").focus(),
                    $("[name=area]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "2" == t.szdd && this.isNullStr(t.gwdz)
              ? (this.wapalert("请填写港澳台或国外所在地址", !1, function () {
                  $("[name=gwdz]").focus(),
                    $("[name=gwdz]").get(0).scrollIntoView(!1);
                }),
                !1)
              : "1" != t.is_move ||
                "" != t.move_reason ||
                (this.wapalert(
                  "请选择点与上次不在同一城市原因",
                  !1,
                  function () {
                    $("[name=move_reason]").focus(),
                      $("[name=move_reason]").get(0).scrollIntoView(!1);
                  }
                ),
                !1);
          },
          getInfo: function () {
            var i = this;
            (i.hasFlag = false),
              (i.setting = {
                name: "",
                desc:
                  "温馨提示：<br>\n1、少外出、不聚集， 戴口罩、勤洗手，开窗通风，发热就诊<br>\n2、每日填报信息仅用于疫情防控工作<br>\n                            ",
                area: "",
                title: "北航师生报平安系统",
              }),
              (i.date = moment().format("YYYY-MM-DD")),
              (i.ontime = true),
              i.$set(i.info, "realname", "李田所"),
              i.$set(i.info, "number", "19190810"),
              (document.title = i.setting.title),
              (i.show = !0),
              (i.img = ""),
              i.$nextTick(function () {});
          },
          initSelect: function () {
            var t = this;
            $("#szgj").select2({
              language: "zh-CN",
              width: "100%",
            }),
              t.info.gwszdd && $("#szgj").val(t.info.gwszdd).select2(),
              $("#szgj").on("select2:open", function (t) {
                $(".select2-search__field").attr(
                  "placeholder",
                  "输入国家(Please select country of current residence)"
                );
              }),
              $("#szgj").on("select2:select", function (s) {
                t.info.gwszdd = $(s.currentTarget).val();
              });
          },
        },
        mounted: function () {
          (this.img = "/site/static/images/load.gif"),
            (this.dec = "加载中"),
            this.$route.query.xgh &&
              ((this.xgh = this.$route.query.xgh),
              (this.group_id = this.$route.query.group_id
                ? this.$route.query.group_id
                : "")),
            this.getInfo(this.xgh);
        },
      },
      _ = i("UjTL"),
      v = i("fwLW"),
      h = i("Gs6B"),
      p = a()(
        {
          name: "buaaStudentNcov",
          components: {
            network: _.a,
            pophint: v.default,
            hint: h.a,
          },
        },
        f
      ),
      m = {
        render: function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i(
            "div",
            {
              staticClass: "buaaStudentNcov",
            },
            [
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.show,
                      expression: "show",
                    },
                  ],
                  staticClass: "buaaStudentNcov-bg",
                },
                [
                  i(
                    "div",
                    [
                      i(
                        "div",
                        {
                          staticClass: "header",
                        },
                        [
                          t._m(0),
                          t._v(" "),
                          i(
                            "div",
                            {
                              staticClass: "header-bottom",
                            },
                            [
                              i("em", [t._v(t._s(t.date))]),
                              t._v(" "),
                              i("em", [t._v(t._s(t.uinfo.realname))]),
                              t._v(" "),
                              i("em", [t._v(t._s(t.uinfo.role.number))]),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      i(
                        "div",
                        {
                          staticClass: "warp",
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass: "warp-list",
                              class: {
                                "warp-list-margin": "0" == t.info.sfzs,
                              },
                              attrs: {
                                name: "sfzs",
                              },
                            },
                            [
                              t._m(1),
                              t._v(" "),
                              i(
                                "div",
                                {
                                  staticClass:
                                    "warp-list-choose warp-list-choose-flex",
                                },
                                [
                                  i(
                                    "div",
                                    {
                                      on: {
                                        click: function (s) {
                                          return t.changesfzs(1);
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "span",
                                        {
                                          staticClass: "choose-wapper",
                                          class: {
                                            active: 1 == t.info.sfzs,
                                          },
                                        },
                                        [i("i")]
                                      ),
                                      t._v(" "),
                                      t._m(2),
                                    ]
                                  ),
                                  t._v(" "),
                                  i(
                                    "div",
                                    {
                                      on: {
                                        click: function (s) {
                                          return t.changesfzs(2);
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "span",
                                        {
                                          staticClass: "choose-wapper",
                                          class: {
                                            active: "0" == t.info.sfzs,
                                          },
                                        },
                                        [i("i")]
                                      ),
                                      t._v(" "),
                                      t._m(3),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          "0" == t.info.sfzs
                            ? i(
                                "div",
                                {
                                  staticClass: "warp-list two-warp-list",
                                  class: {
                                    "warp-list-margin": 6 == t.info.bzxyy,
                                  },
                                  attrs: {
                                    name: "bzxyy",
                                  },
                                },
                                [
                                  t._m(4),
                                  t._v(" "),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "warp-list-choose two-warp-list-choose",
                                    },
                                    [
                                      i(
                                        "div",
                                        {
                                          on: {
                                            click: function (s) {
                                              t.info.bzxyy = 1;
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "span",
                                            {
                                              staticClass: "choose-wapper",
                                              class: {
                                                active: 1 == t.info.bzxyy,
                                              },
                                            },
                                            [i("i")]
                                          ),
                                          t._v(" "),
                                          t._m(5),
                                        ]
                                      ),
                                      t._v(" "),
                                      i(
                                        "div",
                                        {
                                          on: {
                                            click: function (s) {
                                              t.info.bzxyy = 2;
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "span",
                                            {
                                              staticClass: "choose-wapper",
                                              class: {
                                                active: 2 == t.info.bzxyy,
                                              },
                                            },
                                            [i("i")]
                                          ),
                                          t._v(" "),
                                          t._m(6),
                                        ]
                                      ),
                                      t._v(" "),
                                      i(
                                        "div",
                                        {
                                          on: {
                                            click: function (s) {
                                              t.info.bzxyy = 3;
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "span",
                                            {
                                              staticClass: "choose-wapper",
                                              class: {
                                                active: 3 == t.info.bzxyy,
                                              },
                                            },
                                            [i("i")]
                                          ),
                                          t._v(" "),
                                          t._m(7),
                                        ]
                                      ),
                                      t._v(" "),
                                      i(
                                        "div",
                                        {
                                          on: {
                                            click: function (s) {
                                              t.info.bzxyy = 4;
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "span",
                                            {
                                              staticClass: "choose-wapper",
                                              class: {
                                                active: 4 == t.info.bzxyy,
                                              },
                                            },
                                            [i("i")]
                                          ),
                                          t._v(" "),
                                          t._m(8),
                                        ]
                                      ),
                                      t._v(" "),
                                      i(
                                        "div",
                                        {
                                          on: {
                                            click: function (s) {
                                              t.info.bzxyy = 5;
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "span",
                                            {
                                              staticClass: "choose-wapper",
                                              class: {
                                                active: 5 == t.info.bzxyy,
                                              },
                                            },
                                            [i("i")]
                                          ),
                                          t._v(" "),
                                          t._m(9),
                                        ]
                                      ),
                                      t._v(" "),
                                      i(
                                        "div",
                                        {
                                          staticClass: "mt",
                                          on: {
                                            click: function (s) {
                                              t.info.bzxyy = 6;
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "span",
                                            {
                                              staticClass: "choose-wapper",
                                              class: {
                                                active: 6 == t.info.bzxyy,
                                              },
                                            },
                                            [i("i")]
                                          ),
                                          t._v(" "),
                                          t._m(10),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  6 == t.info.bzxyy
                                    ? i(
                                        "div",
                                        {
                                          staticClass:
                                            "warp-list two-warp-list three-wrap-list",
                                          attrs: {
                                            name: "bzxyy_other",
                                          },
                                        },
                                        [
                                          t._m(11),
                                          t._v(" "),
                                          i(
                                            "div",
                                            {
                                              staticClass: "title-input",
                                            },
                                            [
                                              i("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.info.bzxyy_other,
                                                    expression:
                                                      "info.bzxyy_other",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value: t.info.bzxyy_other,
                                                },
                                                on: {
                                                  input: function (s) {
                                                    s.target.composing ||
                                                      t.$set(
                                                        t.info,
                                                        "bzxyy_other",
                                                        s.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]
                              )
                            : t._e(),
                        ]
                      ),
                      t._v(" "),
                      i(
                        "div",
                        {
                          staticClass: "warp",
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass: "warp-list",
                              class: {
                                "warp-list-margin": "0" == t.info.brsfzc,
                              },
                              attrs: {
                                name: "brsfzc",
                              },
                            },
                            [
                              t._m(12),
                              t._v(" "),
                              i(
                                "div",
                                {
                                  staticClass: "warp-list-choose",
                                },
                                [
                                  i(
                                    "div",
                                    {
                                      on: {
                                        click: function (s) {
                                          (t.info.brsfzc = 1),
                                            (t.info.tw = ""),
                                            (t.info.sfcxzz = ""),
                                            t.info.zdjg,
                                            (t.info.zdjg_other = ""),
                                            (t.info.sfgl = ""),
                                            (t.info.gldd = ""),
                                            (t.info.gldd_other = ""),
                                            (t.info.glyy = ""),
                                            (t.info.glyy_other = ""),
                                            (t.info.gl_start = ""),
                                            t.info.gl_end,
                                            (t.info.sfmqjc = "");
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "span",
                                        {
                                          staticClass: "choose-wapper",
                                          class: {
                                            active: 1 == t.info.brsfzc,
                                          },
                                        },
                                        [i("i")]
                                      ),
                                      t._v(" "),
                                      t._m(13),
                                    ]
                                  ),
                                  t._v(" "),
                                  i(
                                    "div",
                                    {
                                      on: {
                                        click: function (s) {
                                          t.info.brsfzc = "0";
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "span",
                                        {
                                          staticClass: "choose-wapper",
                                          class: {
                                            active: "0" == t.info.brsfzc,
                                          },
                                        },
                                        [i("i")]
                                      ),
                                      t._v(" "),
                                      t._m(14),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          "0" == t.info.brsfzc
                            ? [
                                i(
                                  "div",
                                  {
                                    staticClass: "warp-list two-warp-list",
                                    attrs: {
                                      name: "tw",
                                    },
                                  },
                                  [
                                    t._m(15),
                                    t._v(" "),
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "warp-list-choose two-warp-list-choose",
                                      },
                                      [
                                        i(
                                          "div",
                                          {
                                            on: {
                                              click: function (s) {
                                                t.info.tw = 1;
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              "span",
                                              {
                                                staticClass: "choose-wapper",
                                                class: {
                                                  active: 1 == t.info.tw,
                                                },
                                              },
                                              [i("i")]
                                            ),
                                            t._v(" "),
                                            t._m(16),
                                          ]
                                        ),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            on: {
                                              click: function (s) {
                                                t.info.tw = 2;
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              "span",
                                              {
                                                staticClass: "choose-wapper",
                                                class: {
                                                  active: 2 == t.info.tw,
                                                },
                                              },
                                              [i("i")]
                                            ),
                                            t._v(" "),
                                            t._m(17),
                                          ]
                                        ),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            on: {
                                              click: function (s) {
                                                t.info.tw = 3;
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              "span",
                                              {
                                                staticClass: "choose-wapper",
                                                class: {
                                                  active: 3 == t.info.tw,
                                                },
                                              },
                                              [i("i")]
                                            ),
                                            t._v(" "),
                                            t._m(18),
                                          ]
                                        ),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            on: {
                                              click: function (s) {
                                                t.info.tw = 4;
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              "span",
                                              {
                                                staticClass: "choose-wapper",
                                                class: {
                                                  active: 4 == t.info.tw,
                                                },
                                              },
                                              [i("i")]
                                            ),
                                            t._v(" "),
                                            t._m(19),
                                          ]
                                        ),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            on: {
                                              click: function (s) {
                                                t.info.tw = 5;
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              "span",
                                              {
                                                staticClass: "choose-wapper",
                                                class: {
                                                  active: 5 == t.info.tw,
                                                },
                                              },
                                              [i("i")]
                                            ),
                                            t._v(" "),
                                            t._m(20),
                                          ]
                                        ),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass: "mt",
                                            on: {
                                              click: function (s) {
                                                t.info.tw = 6;
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              "span",
                                              {
                                                staticClass: "choose-wapper",
                                                class: {
                                                  active: 6 == t.info.tw,
                                                },
                                              },
                                              [i("i")]
                                            ),
                                            t._v(" "),
                                            t._m(21),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "warp-list warp-list-margin",
                                        attrs: {
                                          name: "sfcxzz",
                                        },
                                      },
                                      [
                                        t._m(22),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "warp-list-choose warp-list-choose-flex",
                                          },
                                          [
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfcxzz = 1;
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        1 == t.info.sfcxzz,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(23),
                                              ]
                                            ),
                                            t._v(" "),
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfcxzz = "0";
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        "0" == t.info.sfcxzz,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(24),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        "1" == t.info.sfcxzz
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list warp-list-margin-top",
                                                class: {
                                                  "warp-list-margin":
                                                    3 == t.info.zdjg,
                                                },
                                                attrs: {
                                                  name: "zdjg",
                                                },
                                              },
                                              [
                                                t._m(25),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "warp-list-choose two-warp-list-choose",
                                                  },
                                                  [
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.zdjg = 1;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                1 ==
                                                                t.info.zdjg,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(26),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.zdjg = 2;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                2 ==
                                                                t.info.zdjg,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(27),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.zdjg = 3;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                3 ==
                                                                t.info.zdjg,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(28),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                3 == t.info.zdjg
                                                  ? i(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "warp-list two-warp-list three-wrap-list",
                                                        attrs: {
                                                          name: "zdjg_other",
                                                        },
                                                      },
                                                      [
                                                        t._m(29),
                                                        t._v(" "),
                                                        i(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "title-input",
                                                          },
                                                          [
                                                            i("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    t.info
                                                                      .zdjg_other,
                                                                  expression:
                                                                    "info.zdjg_other",
                                                                },
                                                              ],
                                                              attrs: {
                                                                type: "text",
                                                              },
                                                              domProps: {
                                                                value:
                                                                  t.info
                                                                    .zdjg_other,
                                                              },
                                                              on: {
                                                                input: function (
                                                                  s
                                                                ) {
                                                                  s.target
                                                                    .composing ||
                                                                    t.$set(
                                                                      t.info,
                                                                      "zdjg_other",
                                                                      s.target
                                                                        .value
                                                                    );
                                                                },
                                                              },
                                                            }),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t._v(" "),
                                    i(
                                      "div",
                                      {
                                        staticClass: "warp-list",
                                        class: {
                                          "warp-list-margin":
                                            "0" == t.info.sfcxzz,
                                        },
                                        attrs: {
                                          name: "sfgl",
                                        },
                                      },
                                      [
                                        t._m(30),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "warp-list-choose warp-list-choose-flex",
                                          },
                                          [
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfgl = 1;
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active: 1 == t.info.sfgl,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(31),
                                              ]
                                            ),
                                            t._v(" "),
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfgl = "0";
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        "0" == t.info.sfgl,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(32),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        "1" == t.info.sfgl
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list warp-list-margin-top",
                                                class: {
                                                  "warp-list-margin":
                                                    6 == t.info.gldd,
                                                },
                                                attrs: {
                                                  name: "gldd",
                                                },
                                              },
                                              [
                                                t._m(33),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "warp-list-choose two-warp-list-choose",
                                                  },
                                                  [
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.gldd = 1;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                1 ==
                                                                t.info.gldd,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(34),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.gldd = 2;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                2 ==
                                                                t.info.gldd,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(35),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.gldd = 3;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                3 ==
                                                                t.info.gldd,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(36),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.gldd = 4;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                4 ==
                                                                t.info.gldd,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(37),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.gldd = 5;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                5 ==
                                                                t.info.gldd,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(38),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.gldd = 6;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                6 ==
                                                                t.info.gldd,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(39),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                6 == t.info.gldd
                                                  ? i(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "warp-list two-warp-list three-wrap-list",
                                                        attrs: {
                                                          name: "gldd_other",
                                                        },
                                                      },
                                                      [
                                                        t._m(40),
                                                        t._v(" "),
                                                        i(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "title-input",
                                                          },
                                                          [
                                                            i("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    t.info
                                                                      .gldd_other,
                                                                  expression:
                                                                    "info.gldd_other",
                                                                },
                                                              ],
                                                              attrs: {
                                                                type: "text",
                                                              },
                                                              domProps: {
                                                                value:
                                                                  t.info
                                                                    .gldd_other,
                                                              },
                                                              on: {
                                                                input: function (
                                                                  s
                                                                ) {
                                                                  s.target
                                                                    .composing ||
                                                                    t.$set(
                                                                      t.info,
                                                                      "gldd_other",
                                                                      s.target
                                                                        .value
                                                                    );
                                                                },
                                                              },
                                                            }),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        "1" == t.info.sfgl
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list",
                                                class: {
                                                  "warp-list-margin":
                                                    3 == t.info.glyy,
                                                },
                                                attrs: {
                                                  name: "glyy",
                                                },
                                              },
                                              [
                                                t._m(41),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "warp-list-choose two-warp-list-choose",
                                                  },
                                                  [
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.glyy = 1;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                1 ==
                                                                t.info.glyy,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(42),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.glyy = 2;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                2 ==
                                                                t.info.glyy,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(43),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.glyy = 3;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                3 ==
                                                                t.info.glyy,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(44),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                3 == t.info.glyy
                                                  ? i(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "warp-list two-warp-list three-wrap-list",
                                                        attrs: {
                                                          name: "glyy_other",
                                                        },
                                                      },
                                                      [
                                                        t._m(45),
                                                        t._v(" "),
                                                        i(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "title-input",
                                                          },
                                                          [
                                                            i("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    t.info
                                                                      .glyy_other,
                                                                  expression:
                                                                    "info.glyy_other",
                                                                },
                                                              ],
                                                              attrs: {
                                                                type: "text",
                                                              },
                                                              domProps: {
                                                                value:
                                                                  t.info
                                                                    .glyy_other,
                                                              },
                                                              on: {
                                                                input: function (
                                                                  s
                                                                ) {
                                                                  s.target
                                                                    .composing ||
                                                                    t.$set(
                                                                      t.info,
                                                                      "glyy_other",
                                                                      s.target
                                                                        .value
                                                                    );
                                                                },
                                                              },
                                                            }),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        "1" == t.info.sfgl
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list warp-list-margin",
                                                attrs: {
                                                  name: "gl_start",
                                                },
                                              },
                                              [
                                                t._m(46),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "title-input title-input-mergin-left",
                                                  },
                                                  [
                                                    i("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.info.gl_start,
                                                          expression:
                                                            "info.gl_start",
                                                        },
                                                      ],
                                                      attrs: {
                                                        type: "date",
                                                      },
                                                      domProps: {
                                                        value: t.info.gl_start,
                                                      },
                                                      on: {
                                                        input: function (s) {
                                                          s.target.composing ||
                                                            t.$set(
                                                              t.info,
                                                              "gl_start",
                                                              s.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        "1" == t.info.sfgl
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list warp-list-margin",
                                                attrs: {
                                                  name: "gl_end",
                                                },
                                              },
                                              [
                                                t._m(47),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "title-input title-input-mergin-left",
                                                  },
                                                  [
                                                    i("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: t.info.gl_end,
                                                          expression:
                                                            "info.gl_end",
                                                        },
                                                      ],
                                                      attrs: {
                                                        type: "date",
                                                      },
                                                      domProps: {
                                                        value: t.info.gl_end,
                                                      },
                                                      on: {
                                                        input: function (s) {
                                                          s.target.composing ||
                                                            t.$set(
                                                              t.info,
                                                              "gl_end",
                                                              s.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        "1" == t.info.sfgl
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list",
                                                attrs: {
                                                  name: "sfmqjc",
                                                },
                                              },
                                              [
                                                t._m(48),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "warp-list-choose two-warp-list-choose",
                                                  },
                                                  [
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.sfmqjc = 1;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                1 ==
                                                                t.info.sfmqjc,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(49),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function (s) {
                                                            t.info.sfmqjc = 2;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                2 ==
                                                                t.info.sfmqjc,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(50),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    i(
                                                      "div",
                                                      {
                                                        staticStyle: {
                                                          "margin-bottom": "0",
                                                        },
                                                        on: {
                                                          click: function (s) {
                                                            t.info.sfmqjc = 3;
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "choose-wapper",
                                                            class: {
                                                              active:
                                                                3 ==
                                                                t.info.sfmqjc,
                                                            },
                                                          },
                                                          [i("i")]
                                                        ),
                                                        t._v(" "),
                                                        t._m(51),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            : t._e(),
                        ],
                        2
                      ),
                      t._v(" "),
                      i(
                        "div",
                        {
                          staticClass: "warp",
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass: "warp-list",
                              class: {
                                "warp-list-margin": "0" == t.info.sfzc_14,
                              },
                              attrs: {
                                name: "sfzc_14",
                              },
                            },
                            [
                              t._m(52),
                              t._v(" "),
                              i(
                                "div",
                                {
                                  staticClass: "warp-list-choose",
                                },
                                [
                                  i(
                                    "div",
                                    {
                                      on: {
                                        click: function (s) {
                                          (t.info.sfzc_14 = 1),
                                            (t.info.sfqw_14 = ""),
                                            (t.info.sfqw_14_remark = ""),
                                            (t.info.sfzgfx = ""),
                                            (t.info.sfzgfx_remark = ""),
                                            (t.info.sfjc_14 = ""),
                                            (t.info.sfjc_14_remark = ""),
                                            (t.info.sfjcqz_14 = ""),
                                            (t.info.sfjcqz_14_remark = ""),
                                            (t.info.sfgtjz_14 = ""),
                                            (t.info.sfgtjz_14_remark = ""),
                                            (t.info.szsqqz = ""),
                                            (t.info.sfyqk = "");
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "span",
                                        {
                                          staticClass: "choose-wapper",
                                          class: {
                                            active: 1 == t.info.sfzc_14,
                                          },
                                        },
                                        [i("i")]
                                      ),
                                      t._v(" "),
                                      t._m(53),
                                    ]
                                  ),
                                  t._v(" "),
                                  i(
                                    "div",
                                    {
                                      on: {
                                        click: function (s) {
                                          t.info.sfzc_14 = "0";
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "span",
                                        {
                                          staticClass: "choose-wapper",
                                          class: {
                                            active: "0" == t.info.sfzc_14,
                                          },
                                        },
                                        [i("i")]
                                      ),
                                      t._v(" "),
                                      t._m(54),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          "0" == t.info.sfzc_14
                            ? [
                                i(
                                  "div",
                                  {
                                    staticClass:
                                      "warp-list two-warp-list warp-list-margin-top",
                                  },
                                  [
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "warp-list warp-list-margin-top",
                                        class: {
                                          "warp-list-margin":
                                            1 == t.info.sfqw_14,
                                        },
                                        attrs: {
                                          name: "sfqw_14",
                                        },
                                      },
                                      [
                                        t._m(55),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "warp-list-choose two-warp-list-choose warp-list-choose-flex",
                                          },
                                          [
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfqw_14 = 1;
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        1 == t.info.sfqw_14,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(56),
                                              ]
                                            ),
                                            t._v(" "),
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfqw_14 = "0";
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        "0" == t.info.sfqw_14,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(57),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        "1" == t.info.sfqw_14
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list",
                                                attrs: {
                                                  name: "sfqw_14_remark",
                                                },
                                              },
                                              [
                                                t._m(58),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "title-input title-input-mergin-left",
                                                  },
                                                  [
                                                    i("textarea", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.info
                                                              .sfqw_14_remark,
                                                          expression:
                                                            "info.sfqw_14_remark",
                                                        },
                                                      ],
                                                      attrs: {
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.info.sfqw_14_remark,
                                                      },
                                                      on: {
                                                        input: function (s) {
                                                          s.target.composing ||
                                                            t.$set(
                                                              t.info,
                                                              "sfqw_14_remark",
                                                              s.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t._v(" "),
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "warp-list warp-list-margin-top warp-list-margin",
                                        attrs: {
                                          name: "sfzgfx",
                                        },
                                      },
                                      [
                                        t._m(59),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "warp-list-choose two-warp-list-choose warp-list-choose-flex",
                                          },
                                          [
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfzgfx = 1;
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        1 == t.info.sfzgfx,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(60),
                                              ]
                                            ),
                                            t._v(" "),
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfzgfx = "0";
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        "0" == t.info.sfzgfx,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(61),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        "1" == t.info.sfzgfx
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list",
                                                attrs: {
                                                  name: "sfzgfx_remark",
                                                },
                                              },
                                              [
                                                t._m(62),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "title-input title-input-mergin-left",
                                                  },
                                                  [
                                                    i("textarea", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.info
                                                              .sfzgfx_remark,
                                                          expression:
                                                            "info.sfzgfx_remark",
                                                        },
                                                      ],
                                                      attrs: {
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.info.sfzgfx_remark,
                                                      },
                                                      on: {
                                                        input: function (s) {
                                                          s.target.composing ||
                                                            t.$set(
                                                              t.info,
                                                              "sfzgfx_remark",
                                                              s.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t._v(" "),
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "warp-list warp-list-margin-top warp-list-margin",
                                        attrs: {
                                          name: "sfjc_14",
                                        },
                                      },
                                      [
                                        t._m(63),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "warp-list-choose two-warp-list-choose warp-list-choose-flex",
                                          },
                                          [
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfjc_14 = 1;
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        1 == t.info.sfjc_14,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(64),
                                              ]
                                            ),
                                            t._v(" "),
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfjc_14 = "0";
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        "0" == t.info.sfjc_14,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(65),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        "1" == t.info.sfjc_14
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list",
                                                attrs: {
                                                  name: "sfjc_14_remark",
                                                },
                                              },
                                              [
                                                t._m(66),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "title-input title-input-mergin-left",
                                                  },
                                                  [
                                                    i("textarea", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.info
                                                              .sfjc_14_remark,
                                                          expression:
                                                            "info.sfjc_14_remark",
                                                        },
                                                      ],
                                                      attrs: {
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.info.sfjc_14_remark,
                                                      },
                                                      on: {
                                                        input: function (s) {
                                                          s.target.composing ||
                                                            t.$set(
                                                              t.info,
                                                              "sfjc_14_remark",
                                                              s.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t._v(" "),
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "warp-list warp-list-margin-top warp-list-margin",
                                        attrs: {
                                          name: "sfjcqz_14",
                                        },
                                      },
                                      [
                                        t._m(67),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "warp-list-choose two-warp-list-choose warp-list-choose-flex",
                                          },
                                          [
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfjcqz_14 = 1;
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        1 == t.info.sfjcqz_14,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(68),
                                              ]
                                            ),
                                            t._v(" "),
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfjcqz_14 = "0";
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        "0" == t.info.sfjcqz_14,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(69),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        "1" == t.info.sfjcqz_14
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list",
                                                attrs: {
                                                  name: "sfjcqz_14_remark",
                                                },
                                              },
                                              [
                                                t._m(70),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "title-input title-input-mergin-left",
                                                  },
                                                  [
                                                    i("textarea", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.info
                                                              .sfjcqz_14_remark,
                                                          expression:
                                                            "info.sfjcqz_14_remark",
                                                        },
                                                      ],
                                                      attrs: {
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.info
                                                            .sfjcqz_14_remark,
                                                      },
                                                      on: {
                                                        input: function (s) {
                                                          s.target.composing ||
                                                            t.$set(
                                                              t.info,
                                                              "sfjcqz_14_remark",
                                                              s.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t._v(" "),
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "warp-list warp-list-margin-top ",
                                        attrs: {
                                          name: "sfgtjz_14",
                                        },
                                      },
                                      [
                                        t._m(71),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "warp-list-choose two-warp-list-choose warp-list-choose-flex",
                                          },
                                          [
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.sfgtjz_14 = 1;
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        1 == t.info.sfgtjz_14,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(72),
                                              ]
                                            ),
                                            t._v(" "),
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    (t.info.sfgtjz_14 = "0"),
                                                      (t.info.sfgtjz_14_remark =
                                                        "");
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        "0" == t.info.sfgtjz_14,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(73),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        "1" == t.info.sfgtjz_14
                                          ? i(
                                              "div",
                                              {
                                                staticClass:
                                                  "warp-list two-warp-list",
                                                attrs: {
                                                  name: "sfgtjz_14_remark",
                                                },
                                              },
                                              [
                                                t._m(74),
                                                t._v(" "),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "title-input title-input-mergin-left",
                                                  },
                                                  [
                                                    i("textarea", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.info
                                                              .sfgtjz_14_remark,
                                                          expression:
                                                            "info.sfgtjz_14_remark",
                                                        },
                                                      ],
                                                      attrs: {
                                                        type: "text",
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.info
                                                            .sfgtjz_14_remark,
                                                      },
                                                      on: {
                                                        input: function (s) {
                                                          s.target.composing ||
                                                            t.$set(
                                                              t.info,
                                                              "sfgtjz_14_remark",
                                                              s.target.value
                                                            );
                                                        },
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t._v(" "),
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "warp-list warp-list-margin-top warp-list-margin",
                                        attrs: {
                                          name: "szsqqz",
                                        },
                                      },
                                      [
                                        t._m(75),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "warp-list-choose two-warp-list-choose warp-list-choose-flex",
                                          },
                                          [
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.szsqqz = 1;
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        1 == t.info.szsqqz,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(76),
                                              ]
                                            ),
                                            t._v(" "),
                                            i(
                                              "div",
                                              {
                                                on: {
                                                  click: function (s) {
                                                    t.info.szsqqz = "0";
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "choose-wapper",
                                                    class: {
                                                      active:
                                                        "0" == t.info.szsqqz,
                                                    },
                                                  },
                                                  [i("i")]
                                                ),
                                                t._v(" "),
                                                t._m(77),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    i(
                                      "div",
                                      {
                                        staticClass: "warp-list ",
                                        attrs: {
                                          name: "sfyqk",
                                        },
                                      },
                                      [
                                        t._m(78),
                                        t._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "title-input title-input-mergin-left",
                                          },
                                          [
                                            i("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.info.sfyqk,
                                                  expression: "info.sfyqk",
                                                },
                                              ],
                                              attrs: {
                                                type: "text",
                                              },
                                              domProps: {
                                                value: t.info.sfyqk,
                                              },
                                              on: {
                                                input: function (s) {
                                                  s.target.composing ||
                                                    t.$set(
                                                      t.info,
                                                      "sfyqk",
                                                      s.target.value
                                                    );
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            : t._e(),
                        ],
                        2
                      ),
                      t._v(" "),
                      i(
                        "div",
                        {
                          staticClass: "warp",
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass: "warp-list",
                              attrs: {
                                name: "szdd",
                              },
                            },
                            [
                              t._m(79),
                              t._v(" "),
                              i(
                                "div",
                                {
                                  staticClass: "warp-list-choose",
                                },
                                [
                                  i(
                                    "div",
                                    {
                                      on: {
                                        click: function (s) {
                                          return t.setSfzgn(1);
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "span",
                                        {
                                          staticClass: "choose-wapper",
                                          class: {
                                            active: 1 == t.info.szdd,
                                          },
                                        },
                                        [i("i")]
                                      ),
                                      t._v(" "),
                                      t._m(80),
                                    ]
                                  ),
                                  t._v(" "),
                                  1 == t.info.szdd
                                    ? i(
                                        "div",
                                        {
                                          staticClass:
                                            "warp-list two-warp-list warp-list-margin ",
                                          staticStyle: {
                                            display: "block",
                                          },
                                          attrs: {
                                            name: "area",
                                          },
                                        },
                                        [
                                          i(
                                            "div",
                                            {
                                              staticClass: "warp-list-title",
                                            },
                                            [
                                              i("i", {
                                                staticClass: "icon iconfont",
                                              }),
                                              t._v(" "),
                                              t.xgh
                                                ? i(
                                                    "div",
                                                    {
                                                      staticStyle: {
                                                        display: "block",
                                                        "align-items": "center",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                      所在地址 "
                                                      ),
                                                      i("span", [
                                                        t._v(
                                                          "Detailed location "
                                                        ),
                                                      ]),
                                                    ]
                                                  )
                                                : i(
                                                    "div",
                                                    {
                                                      staticStyle: {
                                                        display: "block",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                      所在地址（请打开手机位置功能，并允许微信访问位置信息） "
                                                      ),
                                                      i("span", [
                                                        t._v(
                                                          'Detailed location (Please turn on “Location" services on your phone, and allow WeChat to access the location information in the permissions settings) '
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.xgh
                                            ? i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "hcqbtn-wrap title-input title-input-mergin-left",
                                                },
                                                [
                                                  i(
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            t.info.province,
                                                          expression:
                                                            "info.province",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "hcqbtn hcqbtn-danger",
                                                      attrs: {
                                                        id: "myprovice",
                                                      },
                                                      on: {
                                                        change: [
                                                          function (s) {
                                                            var i = Array.prototype.filter
                                                              .call(
                                                                s.target
                                                                  .options,
                                                                function (t) {
                                                                  return t.selected;
                                                                }
                                                              )
                                                              .map(function (
                                                                t
                                                              ) {
                                                                return "_value" in
                                                                  t
                                                                  ? t._value
                                                                  : t.value;
                                                              });
                                                            t.$set(
                                                              t.info,
                                                              "province",
                                                              s.target.multiple
                                                                ? i
                                                                : i[0]
                                                            );
                                                          },
                                                          function (s) {
                                                            return t.handleChangeCity(
                                                              t.info.provice
                                                            );
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    [
                                                      i(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "",
                                                          },
                                                        },
                                                        [t._v("请选择")]
                                                      ),
                                                      t._v(" "),
                                                      t._l(
                                                        t.Allprovice,
                                                        function (s) {
                                                          return i(
                                                            "option",
                                                            {
                                                              domProps: {
                                                                value: s.name,
                                                              },
                                                            },
                                                            [t._v(t._s(s.name))]
                                                          );
                                                        }
                                                      ),
                                                    ],
                                                    2
                                                  ),
                                                  t._v(" "),
                                                  i(
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: t.info.city,
                                                          expression:
                                                            "info.city",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "hcqbtn hcqbtn-warning",
                                                      attrs: {
                                                        id: "mycity",
                                                      },
                                                      on: {
                                                        change: [
                                                          function (s) {
                                                            var i = Array.prototype.filter
                                                              .call(
                                                                s.target
                                                                  .options,
                                                                function (t) {
                                                                  return t.selected;
                                                                }
                                                              )
                                                              .map(function (
                                                                t
                                                              ) {
                                                                return "_value" in
                                                                  t
                                                                  ? t._value
                                                                  : t.value;
                                                              });
                                                            t.$set(
                                                              t.info,
                                                              "city",
                                                              s.target.multiple
                                                                ? i
                                                                : i[0]
                                                            );
                                                          },
                                                          function (s) {
                                                            return t.handleChangeArea(
                                                              t.info.city
                                                            );
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    [
                                                      i(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "",
                                                          },
                                                        },
                                                        [t._v("请选择")]
                                                      ),
                                                      t._v(" "),
                                                      t._l(
                                                        t.Allcity,
                                                        function (s) {
                                                          return i(
                                                            "option",
                                                            {
                                                              domProps: {
                                                                value: s.name,
                                                              },
                                                            },
                                                            [t._v(t._s(s.name))]
                                                          );
                                                        }
                                                      ),
                                                    ],
                                                    2
                                                  ),
                                                  t._v(" "),
                                                  t.Allarea.length > 0
                                                    ? i(
                                                        "select",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value: t.myarea,
                                                              expression:
                                                                "myarea",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "hcqbtn hcqbtn-primary",
                                                          attrs: {
                                                            id: "myarea",
                                                          },
                                                          on: {
                                                            change: [
                                                              function (s) {
                                                                var i = Array.prototype.filter
                                                                  .call(
                                                                    s.target
                                                                      .options,
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      return t.selected;
                                                                    }
                                                                  )
                                                                  .map(
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      return "_value" in
                                                                        t
                                                                        ? t._value
                                                                        : t.value;
                                                                    }
                                                                  );
                                                                t.myarea = s
                                                                  .target
                                                                  .multiple
                                                                  ? i
                                                                  : i[0];
                                                              },
                                                              function (s) {
                                                                return t.changearea(
                                                                  t.myarea
                                                                );
                                                              },
                                                            ],
                                                          },
                                                        },
                                                        [
                                                          i(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value: "",
                                                              },
                                                            },
                                                            [t._v("请选择")]
                                                          ),
                                                          t._v(" "),
                                                          t._l(
                                                            t.Allarea,
                                                            function (s) {
                                                              return i(
                                                                "option",
                                                                {
                                                                  domProps: {
                                                                    value: s,
                                                                  },
                                                                },
                                                                [t._v(t._s(s))]
                                                              );
                                                            }
                                                          ),
                                                        ],
                                                        2
                                                      )
                                                    : t._e(),
                                                ]
                                              )
                                            : i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "title-input title-input-mergin-left",
                                                },
                                                [
                                                  i("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: t.info.area,
                                                        expression: "info.area",
                                                      },
                                                    ],
                                                    attrs: {
                                                      type: "text",
                                                      readonly: "",
                                                      placeholder:
                                                        "点击获取位置",
                                                    },
                                                    domProps: {
                                                      value: t.info.area,
                                                    },
                                                    on: {
                                                      click: function (s) {
                                                        return t.getLocation();
                                                      },
                                                      input: function (s) {
                                                        s.target.composing ||
                                                          t.$set(
                                                            t.info,
                                                            "area",
                                                            s.target.value
                                                          );
                                                      },
                                                    },
                                                  }),
                                                ]
                                              ),
                                        ]
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  i(
                                    "div",
                                    {
                                      on: {
                                        click: function (s) {
                                          return t.setSfzgn(2);
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "span",
                                        {
                                          staticClass: "choose-wapper",
                                          class: {
                                            active: 2 == t.info.szdd,
                                          },
                                        },
                                        [i("i")]
                                      ),
                                      t._v(" "),
                                      t._m(81),
                                    ]
                                  ),
                                  t._v(" "),
                                  2 == t.info.szdd
                                    ? i(
                                        "div",
                                        {
                                          staticClass:
                                            "warp-list two-warp-list warp-list-margin-top",
                                          staticStyle: {
                                            display: "block",
                                          },
                                          attrs: {
                                            name: "gwdz",
                                          },
                                        },
                                        [
                                          t._m(82),
                                          t._v(" "),
                                          i(
                                            "div",
                                            {
                                              staticClass:
                                                "title-input title-input-mergin-left",
                                            },
                                            [
                                              i("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.info.gwdz,
                                                    expression: "info.gwdz",
                                                  },
                                                ],
                                                attrs: {
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value: t.info.gwdz,
                                                },
                                                on: {
                                                  input: function (s) {
                                                    s.target.composing ||
                                                      t.$set(
                                                        t.info,
                                                        "gwdz",
                                                        s.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          1 == t.info.is_move
                            ? i(
                                "div",
                                {
                                  staticClass: "ismoved-warp",
                                },
                                [
                                  i(
                                    "div",
                                    {
                                      staticClass: "warp-list",
                                      attrs: {
                                        name: "ismoveddesc",
                                      },
                                    },
                                    [
                                      t._m(83),
                                      t._v(" "),
                                      i(
                                        "div",
                                        {
                                          staticClass: "warp-list-choose",
                                        },
                                        [
                                          i(
                                            "div",
                                            {
                                              on: {
                                                click: function (s) {
                                                  t.info.move_reason = 1;
                                                },
                                              },
                                            },
                                            [
                                              i(
                                                "span",
                                                {
                                                  staticClass: "choose-wapper",
                                                  class: {
                                                    active:
                                                      1 == t.info.move_reason,
                                                  },
                                                },
                                                [i("i")]
                                              ),
                                              t._v(" "),
                                              t._m(84),
                                            ]
                                          ),
                                          t._v(" "),
                                          i(
                                            "div",
                                            {
                                              on: {
                                                click: function (s) {
                                                  t.info.move_reason = 2;
                                                },
                                              },
                                            },
                                            [
                                              i(
                                                "span",
                                                {
                                                  staticClass: "choose-wapper",
                                                  class: {
                                                    active:
                                                      2 == t.info.move_reason,
                                                  },
                                                },
                                                [i("i")]
                                              ),
                                              t._v(" "),
                                              t._m(85),
                                            ]
                                          ),
                                          t._v(" "),
                                          i(
                                            "div",
                                            {
                                              on: {
                                                click: function (s) {
                                                  t.info.move_reason = "3";
                                                },
                                              },
                                            },
                                            [
                                              i(
                                                "span",
                                                {
                                                  staticClass: "choose-wapper",
                                                  class: {
                                                    active:
                                                      3 == t.info.move_reason,
                                                  },
                                                },
                                                [i("i")]
                                              ),
                                              t._v(" "),
                                              t._m(86),
                                            ]
                                          ),
                                          t._v(" "),
                                          i(
                                            "div",
                                            {
                                              on: {
                                                click: function (s) {
                                                  t.info.move_reason = 4;
                                                },
                                              },
                                            },
                                            [
                                              i(
                                                "span",
                                                {
                                                  staticClass: "choose-wapper",
                                                  class: {
                                                    active:
                                                      4 == t.info.move_reason,
                                                  },
                                                },
                                                [i("i")]
                                              ),
                                              t._v(" "),
                                              t._m(87),
                                            ]
                                          ),
                                          t._v(" "),
                                          4 == t.info.move_reason
                                            ? i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "title-input warp-list-margin-top",
                                                },
                                                [
                                                  i("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          t.info.move_remark,
                                                        expression:
                                                          "info.move_remark",
                                                      },
                                                    ],
                                                    attrs: {
                                                      type: "text",
                                                    },
                                                    domProps: {
                                                      value: t.info.move_remark,
                                                    },
                                                    on: {
                                                      input: function (s) {
                                                        s.target.composing ||
                                                          t.$set(
                                                            t.info,
                                                            "move_remark",
                                                            s.target.value
                                                          );
                                                      },
                                                    },
                                                  }),
                                                ]
                                              )
                                            : t._e(),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : t._e(),
                        ]
                      ),
                      t._v(" "),
                      t.ontime || 1 != t.info.sfzs
                        ? [
                            i(
                              "div",
                              {
                                staticClass: "sub-info",
                              },
                              [
                                1 != t.hasFlag || t.xgh
                                  ? i(
                                      "a",
                                      {
                                        on: {
                                          click: function (s) {
                                            return t.confirm();
                                          },
                                        },
                                      },
                                      [t._v("提交")]
                                    )
                                  : i(
                                      "a",
                                      {
                                        staticStyle: {
                                          background: "#d0d0d0",
                                        },
                                      },
                                      [t._v("您已提交过信息")]
                                    ),
                              ]
                            ),
                          ]
                        : [t._m(88)],
                    ],
                    2
                  ),
                ]
              ),
              t._v(" "),
              i("pophint", {
                attrs: {
                  img: t.img,
                  dec: t.dec,
                  appkey: "ncov",
                },
              }),
              t._v(" "),
              t.nonetworkimg
                ? i("network", {
                    attrs: {
                      nonetworkimg: t.nonetworkimg,
                      nonetworktext: t.nonetworktext,
                    },
                  })
                : t._e(),
              t._v(" "),
              i("hint", {
                attrs: {
                  msg: t.msg,
                  icontip: t.icontip,
                },
                on: {
                  clkmsg: t.btnhide,
                },
              }),
            ],
            1
          );
        },
        staticRenderFns: [
          function () {
            var t = this,
              s = t.$createElement,
              i = t._self._c || s;
            return i(
              "div",
              {
                staticClass: "header-top",
              },
              [
                i("span", [t._v("今日日期"), i("i", [t._v("(Date)")])]),
                t._v(" "),
                i("span", [t._v("姓名"), i("i", [t._v("(Name)")])]),
                t._v(" "),
                i("span", [
                  t._v("学工号"),
                  i("i", [t._v("(Student/Teacher ID)")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("1.今日是否在校住宿？"),
                  s("span", [this._v("Are you living on campus today?")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("是 "), s("em", [this._v("(Yes)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("\n                        不在校原因 "),
                  s("span", [this._v("Reason for living off campus")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("临时出校 "),
                s("em", [this._v("(Leaving the university temporarily)")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("寒/暑假返乡 "),
                s("em", [this._v("(Returning home for vacation)")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("在境外科研学习 "),
                s("em", [this._v("(Studying or researching abroad)")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("在境内校外出差、实习 "),
                s("em", [
                  this._v(
                    "(Travelling for business or doing an internship in China)"
                  ),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("病假、事假或休学中 "),
                s("em", [
                  this._v(
                    "(Leaving for illness, personal affairs, or suspension of schooling)"
                  ),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("其它 "), s("em", [this._v("(Others)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [this._v("请填写 "), s("span")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("2.今日本人情况是否正常？"),
                  s("span", [this._v("Are you in good health today?")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("是 (本人健康且未处于隔离期）"),
                s("em", [
                  this._v("Yes (I am in good health and not in quarantine)"),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("体温范围 "),
                  s("span", [this._v("Your body temperature range")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("正常 (37.2℃及以下)  "),
                s("em", [this._v("Normal (37.2℃ or below 37.2℃)")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("37.3℃-38℃ "), s("em")]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("38.1℃-38.5℃ "), s("em")]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("38.6℃-39℃ "), s("em")]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("39.1℃-40℃ "), s("em")]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("40.1℃以上 "), s("em", [this._v("(Above 40.1℃)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("是否出现乏力、干咳、呼吸困难等症状？"),
                  s("span", [
                    this._v(
                      "Do you have any symptoms such as fatigue, dry coughs and shortness of breath today?"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("是 "), s("em", [this._v("(Yes)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("诊断结果 "),
                  s("span", [this._v("Diagnosis result")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("疑似感染 "),
                s("em", [this._v("(Suspected infection)")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("确诊感染 "),
                s("em", [this._v("(Confirmed infection)")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("其他 "), s("em", [this._v("(Others)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [this._v("填写诊断结果 "), s("span")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("今日是否处于隔离期？"),
                  s("span", [this._v("Are you in quarantine today?")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("是 "), s("em", [this._v("(Yes)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v("隔离地点 "),
                s("span", [this._v("Place of quarantine")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("学校集中隔离点 "),
                s("em", [
                  this._v(
                    "(Centralized quarantine site at Beihang University)"
                  ),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("居家隔离 "), s("em", [this._v("(Home quarantine)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("北京市疾控中心指定地点 "),
                s("em", [
                  this._v(
                    "(Quarantine sites designated by Beijing Center for Disease Prevention and Control)"
                  ),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("京外政府指定隔离地点 "),
                s("em", [
                  this._v(
                    "(Quarantine sites designated by the local government of places other than Beijing）"
                  ),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("国外政府指定隔离地点 "),
                s("em", [
                  this._v("(Foreign sites designated by the government)"),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("其它，填写具体地点，精确到门牌号  "),
                s("em", [
                  this._v(
                    "Others (Please fill in the precise location accurate to your room number)"
                  ),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v("请填写 "),
                s("span"),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("隔离原因 "),
                  s("span", [this._v("Reason for quarantine")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("发热隔离 "), s("em", [this._v("(Fever)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("入境隔离 "), s("em", [this._v("(Inbound passenger)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("其他 "), s("em", [this._v("(Others)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [this._v("请填写 "), s("span")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("隔离开始时间 "),
                  s("span", [this._v("Start date of quarantine")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("拟解除隔离时间 "),
                  s("span", [this._v("Proposed end date of quarantine")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("是否为相关部门认定的密切接触者/次级密切接触者？"),
                  s("span", [
                    this._v(
                      "Are you a close contact or secondary close contact identified by relevant authorities?"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("密接接触者 "), s("em", [this._v("(Close contact)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("次级密切接触者 "),
                s("em", [this._v("(Secondary close contact)")]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(None of the above)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("3.近7日内，所接触环境和人员是否一切正常？"),
                  s("span", [
                    this._v(
                      "Have you lived in a virus-free environment in the past 7 days?"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v(
                  "是（未接触风险地区和人员，无入境共居人员，社区无确 诊）"
                ),
                s("em", [
                  this._v(
                    "Yes (No exposure to any risk areas or infected people, no cohabitants coming from other countries, and no confirmed cases in my community)"
                  ),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                  7日内是否到过曾前往且目前不在中高风险地区？ "
                  ),
                  s("span", [
                    this._v(
                      "Have you ever traveled to a medium- or high-risk area in the past 7 days?"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("是 "), s("em", [this._v("(Yes)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                      填写时间、地点、原因、行程 "
                  ),
                  s("span", [
                    this._v(
                      "Please fill in the time, place, reason and travelling route"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                  今日是否在中高风险地区？ "
                  ),
                  s("span", [
                    this._v("Are you in a medium- or high-risk area today?"),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("是 "), s("em", [this._v("(Yes)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                      原因，地点 "
                  ),
                  s("span", [this._v("Please fill in the reason and place")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                  7日内是否接触过无症状感染/疑似/确诊人群？ "
                  ),
                  s("span", [
                    this._v(
                      "Have you been in contact with asymptomatic, suspected or infected people in the past 7 days?"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("是 "), s("em", [this._v("(Yes)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                      填写接触类型、时间、地点、原因、行程 "
                  ),
                  s("span", [
                    this._v(
                      "Please fill in the type of people you contacted with, time, place, reason and travelling route"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                  7日内是否接触过确诊病例/无症状感染者的密接人员? "
                  ),
                  s("span", [
                    this._v(
                      "Have you ever been exposed to someone who had been in close contact with infected or asymptomatic people in the past 7 days?"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("是 "), s("em", [this._v("(Yes)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                      填写时间、地点、原因、行程 "
                  ),
                  s("span", [
                    this._v(
                      "Please fill in the time, place, reason and travelling route"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                  7日内，是否有共同居住人由境外或国内中高风险地区返回？ "
                  ),
                  s("span", [
                    this._v(
                      "Do you live with someone who has returned from overseas or medium- or high- risk areas in China in the past 7 days?"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("是 "), s("em", [this._v("(Yes)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                      填写入境（离开国内中高风险地区）时间，出发地点 "
                  ),
                  s("span", [
                    this._v(
                      "Please fill in the time of arrival in China or departure from medium- or high- risk areas, and the place of departure"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                  今日所在社区是否有确诊病例？ "
                  ),
                  s("span", [
                    this._v(
                      "Are there any confirmed cases in your residence community today?"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("是 "), s("em", [this._v("(Yes)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("否 "), s("em", [this._v("(No)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                  staticStyle: {
                    opacity: "0",
                  },
                }),
                this._v(" "),
                s("div", [
                  this._v(
                    "\n                                  是否其它与疫情相关、值得注意的情况？ "
                  ),
                  s("span", [
                    this._v(
                      "Any situation related to the pandemic that should be noted? "
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("4.所在地点 "),
                  s("span", [this._v("Your location")]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("国内 "), s("em", [this._v("(Chinese mainland)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [
                this._v("港澳台或国外 "),
                s("em", [
                  this._v("(Hong Kong, Macao, Taiwan or foreign countries)"),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s(
                  "div",
                  {
                    staticStyle: {
                      "align-items": "center",
                    },
                  },
                  [
                    this._v("所在地址 "),
                    s("span", [this._v("Detailed location")]),
                  ]
                ),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "warp-list-title",
              },
              [
                s("em", {
                  staticClass: "iocn iconfont icon-form_iconzhuyi",
                }),
                this._v(" "),
                s("i", {
                  staticClass: "icon iconfont",
                }),
                this._v(" "),
                s("div", [
                  this._v("当前地点与上次不在同一城市，原因如下:"),
                  s("span", [
                    this._v(
                      "The reason why your current city is different from the one you were in last time:"
                    ),
                  ]),
                ]),
              ]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("外出探亲 "), s("em", [this._v("(Visiting relatives)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("旅游 "), s("em", [this._v("(Traveling)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("回家 "), s("em", [this._v("(Homecoming)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "span",
              {
                staticClass: "warp-list-choose-desc",
              },
              [this._v("其他 "), s("em", [this._v("(Others)")])]
            );
          },
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s(
              "div",
              {
                staticClass: "sub-info",
              },
              [
                s(
                  "a",
                  {
                    staticStyle: {
                      background: "#d0d0d0",
                    },
                  },
                  [this._v("未到填报时间")]
                ),
              ]
            );
          },
        ],
      },
      d = i("VU/8")(p, m, !1, null, null, null);
    s.default = d.exports;
  },
});

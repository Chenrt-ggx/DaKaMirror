webpackJsonp(
  [776],
  {
    "+pgi": function (e, a, t) {
      "use strict";
      var s = t("2X9z"),
        n = t.n(s),
        o = t("+TD8"),
        c = t.n(o),
        i = t("1ZIF"),
        l = t.n(i),
        p = t("aMwW"),
        u = t.n(p),
        m = t("orbS"),
        d = t.n(m),
        r = t("nu7/"),
        f = t.n(r),
        h = t("OSLW"),
        y = t.n(h),
        j = t("V1RD"),
        w = t.n(j),
        b = t("y7os"),
        v = t.n(b),
        g = t("ARSI"),
        x = t.n(g),
        k = t("6oiW"),
        I = t.n(k),
        L = t("q4le"),
        P = t.n(L),
        S = t("LR6y"),
        C = t.n(S),
        z = t("Mezo"),
        A = t.n(z),
        D = t("vqwl"),
        T = t.n(D),
        q = t("STLj"),
        U = t.n(q),
        B = t("e0Bm"),
        R = t.n(B),
        E = t("s3ue"),
        M = t.n(E),
        N = t("L6k1"),
        _ = t.n(N),
        F = t("EKTV"),
        O = t.n(F),
        G = t("qubY"),
        H = t.n(G),
        W = t("4ZDJ"),
        V = t.n(W),
        J = t("tLa+"),
        Q = t.n(J),
        K = t("fDPO"),
        Z = t.n(K),
        $ = t("RDoK"),
        X = t.n($),
        Y = t("HJMx"),
        ee = t.n(Y),
        ae = t("91Nw"),
        te = t.n(ae),
        se = t("ajQY"),
        ne = t.n(se),
        oe = t("SXzR"),
        ce = t.n(oe),
        ie = t("LaeV"),
        le = t.n(ie),
        pe = t("NoPp"),
        ue = t.n(pe),
        me = t("mWcH"),
        de = t.n(me),
        re = t("cgIP"),
        fe = t.n(re),
        he = t("7+uW");
      he.default.use(fe.a),
        he.default.use(de.a),
        he.default.use(ue.a),
        he.default.use(le.a),
        he.default.use(ce.a),
        he.default.use(ne.a),
        he.default.use(te.a),
        he.default.use(ee.a),
        he.default.use(X.a),
        he.default.use(Z.a),
        he.default.use(Q.a),
        he.default.use(V.a),
        he.default.use(H.a),
        he.default.use(O.a),
        he.default.use(_.a),
        he.default.use(M.a),
        he.default.use(R.a),
        he.default.use(U.a),
        he.default.use(T.a),
        he.default.use(A.a),
        he.default.use(C.a),
        he.default.use(P.a),
        he.default.use(I.a),
        he.default.use(x.a),
        he.default.use(v.a),
        he.default.use(w.a),
        he.default.use(y.a),
        he.default.use(f.a),
        he.default.use(d.a),
        he.default.use(u.a),
        he.default.use(l.a),
        (he.default.prototype.$MessageBox = c.a),
        (he.default.prototype.$message = n.a);
    },
    0: function (e, a, t) {
      t("j1ja"), (e.exports = t("NHnr"));
    },
    1: function (e, a) {},
    "5W1q": function (e, a) {},
    "6DE0": function (e, a) {},
    "8XEK": function (e, a) {},
    AQny: function (e, a) {
      e.exports = {
        message: { hello: "hello", about: "about", welcome: "Welcome" },
        nav: {
          sure: "OK",
          cancel: "Cancel",
          Check: "Check tickets",
          btnend: "Ended",
          Detail: "Successful reservation, waiting for votes",
          nostate: "Activities not started, Please subscribe",
          notick: "Tickets have been snatched up, Please subscribe",
          ctrl: "unsubscribe",
          Ticket: "Ticket grabbing",
          Order: "order",
          enroll: "enroll",
          Code: "Redeem Code",
          TicketTime: "Ticket snatching time",
          OrderTime: "Reservation Time",
          introduced: "Activity Introduction",
          poll: "Number of remaining votes",
          numbers: "page",
          quantity: "Number of Balanced Tickets",
          Rules: "Redeem Rules",
          Checked: "Checked tickets",
          name: "Name",
          xgh: "CNU ID No.",
          ctrlticket: "Ticket Cancellation",
          PreActivity: "Pre activity",
          seeInformation: "See information",
          infoAcquisition: "Information acquisition",
        },
      };
    },
    Aj9o: function (e, a, t) {
      "use strict";
      var s = {
        getApi: function (e) {
          var a = appConfig.apis[e];
          return void 0 == a
            ? e
            : a.indexOf("mock") < 0
            ? appConfig.apiBaseUrl + a
            : a;
        },
      };
      a.a = s;
    },
    ApOr: function (e, a) {},
    F1lC: function (e, a) {},
    GO9e: function (e, a) {},
    I35r: function (e, a, t) {
      var s = {
        "./DIN-Medium.otf": "ksOr",
        "./public": "6DE0",
        "./public.css": "6DE0",
        "./select2.min": "x+fA",
        "./select2.min.css": "x+fA",
        "./swiper.min": "GO9e",
        "./swiper.min.css": "GO9e",
        "./swiper1.min": "usz6",
        "./swiper1.min.css": "usz6",
        "./switchery.min": "Nut2",
        "./switchery.min.css": "Nut2",
        "./system": "8XEK",
        "./system.css": "8XEK",
        "./webuploader": "pOml",
        "./webuploader.css": "pOml",
      };
      function n(e) {
        return t(o(e));
      }
      function o(e) {
        var a = s[e];
        if (!(a + 1)) throw new Error("Cannot find module '" + e + "'.");
        return a;
      }
      (n.keys = function () {
        return Object.keys(s);
      }),
        (n.resolve = o),
        (e.exports = n),
        (n.id = "I35r");
    },
    IVJ5: function (e, a, t) {
      "use strict";
      t.d(a, "a", function () {
        return d;
      });
      var s = t("mvHQ"),
        n = t.n(s),
        o = t("Dd8w"),
        c = t.n(o),
        i = t("7+uW"),
        l = t("mtWM"),
        p = t.n(l),
        u = t("Aj9o"),
        m = t("mw3O"),
        d = function (e, a, t, s) {
          var o =
            arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          arguments[5];
          if (void 0 === e) return console.error("必须传递参数"), !1;
          e.url.toLocaleLowerCase().indexOf("http") < 0 &&
            (e.url = u.a.getApi(e.url)),
            (e.withCredentials = !0);
          var l = void 0;
          return (
            (l = o
              ? {
                  "Content-Type": "application/json",
                  "X-Requested-With": "XMLHttpRequest",
                }
              : {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "X-Requested-With": "XMLHttpRequest",
                }),
            e.headers ? (e.headers = c()({}, l, e.headers)) : (e.headers = l),
            "get" == e.method.toLowerCase() &&
              ((e.params = e.data), delete e.data),
            o || (e.data && (e.data = m.stringify(e.data))),
            p()(e)
              .then(function (t) {
                var o = document.getElementsByTagName("body")[0];
                o.firstElementChild.style.display = "none";
                var c = t.data;
                setTimeout(function () {
                  $(".frame-loader").length && $(".frame-loader").remove();
                });
                try {
                  if (
                    ((o.firstElementChild.style.display = "block"),
                    10013 == c.e)
                  )
                    if (
                      ((i.default.prototype.appkeyIslogin = 1),
                      $(".g-pop").length && $(".g-pop").hide(),
                      "scuInfo" == s)
                    )
                      a(c);
                    else if (1 == s)
                      console.log("请求地址", e.url),
                        console.log("返回数据", c),
                        (window.location.href = c.d.login_url);
                    else {
                      (d = document.createElement("div")).setAttribute(
                        "class",
                        "fram-alert"
                      );
                      var l = document.createElement("div"),
                        p = document.createElement("p"),
                        u = document.createElement("span");
                      u.innerHTML = c.m;
                      var m = document.createElement("a");
                      (m.innerHTML = "确定"),
                        (d.style.width = document.body.clientWidth + "px"),
                        document.body.appendChild(d),
                        d.appendChild(l),
                        l.appendChild(p),
                        p.appendChild(u),
                        l.appendChild(m),
                        (m.onclick = function () {
                          document.body.removeChild(d),
                            (window.location.href = c.d.login_url);
                        });
                    }
                  else if (
                    (console.log("成功2", c),
                    void 0 == c.d && "locationErr" == s)
                  ) {
                    (document.body.innerHTML = ""),
                      (d = document.createElement("div")).setAttribute(
                        "class",
                        "glable-nodata"
                      );
                    p = document.createElement("p");
                    (f = document.createElement("img")).setAttribute(
                      "src",
                      "/site/static/images/xitongcuowu.png"
                    ),
                      (p.innerHTML = c || "数据异常"),
                      document.body.appendChild(d),
                      d.appendChild(f),
                      d.appendChild(p);
                  } else a(c);
                } catch (t) {
                  if (
                    (console.log(t, "err--" + e.url),
                    $.ajax({
                      type: "post",
                      url: "/api/log/save-web-log",
                      data: {
                        err_message: t.message,
                        return_data: n()(c),
                        vue_data: n()(
                          i.default.prototype.$this.$children[0]._data
                        ),
                      },
                      dataType: "json",
                      success: function (e) {},
                      err: function () {},
                    }),
                    "setConfig" == s)
                  )
                    a(c);
                  else if (1 == s) {
                    (document.body.innerHTML = ""),
                      (d = document.createElement("div")).setAttribute(
                        "class",
                        "glable-nodata"
                      );
                    p = document.createElement("p");
                    (f = document.createElement("img")).setAttribute(
                      "src",
                      "/site/static/images/xitongcuowu.png"
                    ),
                      (p.innerHTML = "系统异常"),
                      document.body.appendChild(d),
                      d.appendChild(f),
                      d.appendChild(p);
                  } else {
                    var d;
                    $(".g-pop").length && $(".g-pop").hide(),
                      (document.body.innerHTML = ""),
                      (d = document.createElement("div")).setAttribute(
                        "class",
                        "file-pop"
                      );
                    var r = document.createElement("div");
                    r.setAttribute("class", "file-pop-div");
                    var f;
                    p = document.createElement("p");
                    (f = document.createElement("img")).setAttribute(
                      "src",
                      "/site/static/images/cha.png"
                    ),
                      (p.innerHTML = "系统异常"),
                      document.body.appendChild(d),
                      r.appendChild(f),
                      r.appendChild(p),
                      d.appendChild(r),
                      setTimeout(function () {
                        document.body.removeChild(d);
                      }, 1500);
                  }
                }
              })
              .catch(function (a) {
                console.log(6666, a, e), t && t(a);
              })
          );
        };
      i.default.prototype.appFetch = d;
    },
    MgEz: function (e, a) {},
    NHnr: function (e, a, t) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      t("tvR6");
      var s = t("qBF2"),
        n = t.n(s),
        o = t("7+uW"),
        c = (t("+pgi"), t("fZuY")),
        i = t.n(c);
      if (
        ((i.a.port = location.port),
        (i.a.domainName = location.hostname),
        (i.a.baseUrl =
          location.protocol +
          "//" +
          location.hostname +
          ("80" == location.port ? "" : ":" + location.port) +
          i.a.routeBasePath),
        console.log(i.a.baseUrl),
        -1 !== location.href.indexOf("test.office.rlstech.cn") ||
          -1 !== location.href.indexOf("localhost"))
      )
        i.a.apiBaseUrl = "/api";
      else {
        var l =
          i.a.onlineDebug && "test." == location.hostname.substr(0, 5)
            ? location.hostname.slice(5)
            : location.hostname;
        "saas.moe.edu.cn" == location.hostname
          ? (i.a.apiBaseUrl =
              location.protocol +
              "//" +
              l +
              ("80" == location.port || "8883" == location.port
                ? ""
                : ":/eai" + location.port))
          : (i.a.apiBaseUrl =
              location.protocol +
              "//" +
              l +
              ("80" == location.port || "8883" == location.port
                ? ""
                : ":" + location.port));
      }
      for (var p in ((i.a.upFileUrl =
        i.a.apiBaseUrl + "/site/attach?file=all/"),
      (i.a.uploadUrl = i.a.apiBaseUrl),
      (i.a.staticBaseUrl = i.a.baseUrl),
      (i.a.staticUrl = i.a.baseUrl + "static/"),
      i.a.webList))
        location.hostname == p &&
          ((i.a.id = i.a.webList[p].id),
          (i.a.imgUrl = location.protocol + "//" + i.a.webList[p].imgUrl),
          (i.a.uploadImg = location.protocol + "//" + i.a.webList[p].uploadImg),
          (i.a.uploadImgBase =
            location.protocol + "//" + i.a.webList[p].uploadImgBase),
          (i.a.baseurl = location.protocol + "//" + i.a.webList[p].baseurl));
      (i.a.staticCssUrl = i.a.staticUrl),
        (window.appConfig = i.a),
        (o.default.prototype.appConfig = i.a);
      t("j1ja");
      var u = t("xTUE"),
        m = t.n(u),
        d = t("qJdI"),
        r = t.n(d),
        f = t("Au9i"),
        h = t("wvfG"),
        y = t.n(h),
        j = (t("d8/S"), t("TXmL")),
        w = (t("z8sE"), t("AQny"), t("ZpxJ"), t("hKoQ")),
        b = t.n(w),
        v = {
          name: "Preview",
          computed: {
            preview: function () {
              return window.LOGIC_EVENT_BUS.LOGIC_PREVIEW;
            },
          },
          methods: {
            leave: function (e) {
              this.preview.show &&
                0 !== e.target.className.indexOf("lg-preview-nav-arrow") &&
                this.close();
            },
            close: function () {
              this.preview.show = !1;
            },
            preAction: function () {
              this.preview.loading = !0;
              var e = this.preview.list.indexOf(this.preview.current);
              if (0 !== e) {
                e--, (this.preview.current = this.preview.list[e]);
                var a = new window.Image();
                (a.src = this.preview.current.src),
                  (a.onload = function () {
                    setTimeout(function () {
                      LOGIC_EVENT_BUS.LOGIC_PREVIEW.loading = !1;
                    }, 500);
                  });
              } else this.preview.loading = !1;
            },
            nextAction: function () {
              this.preview.loading = !0;
              var e = this.preview.list.indexOf(this.preview.current);
              if (e !== this.preview.list.length - 1) {
                e++, (this.preview.current = this.preview.list[e]);
                var a = new window.Image();
                (a.src = this.preview.current.src),
                  (a.onload = function () {
                    setTimeout(function () {
                      LOGIC_EVENT_BUS.LOGIC_PREVIEW.loading = !1;
                    }, 500);
                  });
              } else this.preview.loading = !1;
            },
          },
        },
        g = {
          render: function () {
            var e = this,
              a = e.$createElement,
              t = e._self._c || a;
            return t("transition", { attrs: { name: "fade" } }, [
              t(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.preview.show,
                      expression: "preview.show",
                    },
                  ],
                  staticClass: "lg-preview-wrapper",
                  on: {
                    click: e.leave,
                    touchmove: function (e) {
                      e.preventDefault();
                    },
                  },
                },
                [
                  t(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.preview.loading,
                          expression: "preview.loading",
                        },
                      ],
                      staticClass: "lg-preview-loading",
                    },
                    [t("div")]
                  ),
                  e._v(" "),
                  e.preview.current.src
                    ? t("img", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !e.preview.loading,
                            expression: "!preview.loading",
                          },
                        ],
                        staticClass: "lg-preview-img",
                        attrs: {
                          src: e.preview.current.src,
                          alt: e.preview.current.title,
                        },
                      })
                    : e._e(),
                  e._v(" "),
                  e.preview.isTitleEnable && e.preview.current.title
                    ? t(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.preview.loading,
                              expression: "!preview.loading",
                            },
                          ],
                          staticClass: "lg-preview-title",
                        },
                        [
                          e._v(
                            "\n            " +
                              e._s(e.preview.current.title) +
                              "\n        "
                          ),
                        ]
                      )
                    : e._e(),
                  e._v(" "),
                  e.preview.isHorizontalNavEnable
                    ? t(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.preview.loading,
                              expression: "!preview.loading",
                            },
                          ],
                          staticClass: "lg-preview-nav-left",
                        },
                        [
                          t("span", {
                            staticClass: "lg-preview-nav-arrow",
                            on: {
                              click: function (a) {
                                return a.stopPropagation(), e.preAction(a);
                              },
                            },
                          }),
                        ]
                      )
                    : e._e(),
                  e._v(" "),
                  e.preview.isHorizontalNavEnable
                    ? t(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.preview.loading,
                              expression: "!preview.loading",
                            },
                          ],
                          staticClass: "lg-preview-nav-right",
                        },
                        [
                          t("span", {
                            staticClass: "lg-preview-nav-arrow",
                            on: {
                              click: function (a) {
                                return a.stopPropagation(), e.nextAction(a);
                              },
                            },
                          }),
                        ]
                      )
                    : e._e(),
                ]
              ),
            ]);
          },
          staticRenderFns: [],
        };
      var x = t("VU/8")(
          v,
          g,
          !1,
          function (e) {
            t("ApOr");
          },
          "data-v-60de88e4",
          null
        ).exports,
        k = {
          install: function (e, a) {
            var t = new e({
              data: function () {
                return {
                  LOGIC_PREVIEW: {
                    isTitleEnable: !0,
                    isHorizontalNavEnable: !0,
                    show: !1,
                    loading: !0,
                    current: { title: "", src: "" },
                    list: [],
                  },
                };
              },
            });
            (window.LOGIC_EVENT_BUS = t), e.component("lg-preview", x);
            var s = function (e) {
              e.forEach(function (e, a) {
                e.index = a + 1;
              });
            };
            e.directive("preview", {
              bind: function (e, a) {
                var n = { title: e.alt || "", el: e, index: 0, src: a.value };
                t.LOGIC_PREVIEW.list.push(n),
                  s(t.LOGIC_PREVIEW.list),
                  e.addEventListener("click", function (a) {
                    a.stopPropagation(),
                      (t.LOGIC_PREVIEW.isTitleEnable =
                        "false" != e.getAttribute("preview-title-enable")),
                      (t.LOGIC_PREVIEW.isHorizontalNavEnable =
                        "false" != e.getAttribute("preview-nav-enable")),
                      (t.LOGIC_PREVIEW.show = !0),
                      (t.LOGIC_PREVIEW.loading = !0),
                      (t.LOGIC_PREVIEW.current = n),
                      (function (e, a) {
                        var s = new window.Image();
                        (s.src = e),
                          (s.onload = function () {
                            (a.naturalHeight = s.naturalHeight),
                              (a.naturalWidth = s.naturalWidth),
                              setTimeout(function () {
                                t.LOGIC_PREVIEW.loading = !1;
                              }, 500);
                          }),
                          (s.error = function (e) {
                            console.error(e);
                          });
                      })(n.src, n);
                  });
              },
              update: function (e, a) {
                var s = t.LOGIC_PREVIEW.list.find(function (a) {
                  return a.el === e;
                });
                s && ((s.src = a.value), (s.title = e.alt));
              },
              unbind: function (e) {
                e &&
                  t.LOGIC_PREVIEW.list.forEach(function (a, s) {
                    e === a.el && t.LOGIC_PREVIEW.list.splice(s, 1);
                  }),
                  s(t.LOGIC_PREVIEW.list);
              },
            });
          },
        },
        I = t("ibnl"),
        L = t.n(I),
        P =
          (t("tOCg"),
          {
            name: "uploadUrl",
            props: { upprogress: { type: String, default: "" } },
            data: function () {
              return { showno: !1 };
            },
            watch: {
              upprogress: {
                handler: function (e) {
                  "" != e &&
                    ((this.showno = !0), "100%" == e && (this.showno = !1));
                },
                immediate: !0,
              },
            },
          }),
        S = {
          render: function () {
            var e = this.$createElement,
              a = this._self._c || e;
            return this.showno
              ? a("div", { staticClass: "upload-press" }, [
                  a("div", {
                    domProps: { innerHTML: this._s(this.upprogress) },
                  }),
                  this._v(" "),
                  a("p", [this._v("上传中...")]),
                ])
              : this._e();
          },
          staticRenderFns: [],
        };
      var C = t("VU/8")(
          P,
          S,
          !1,
          function (e) {
            t("MgEz");
          },
          "data-v-3b17d232",
          null
        ).exports,
        z = t("AXdl"),
        A = t("7S1C"),
        D = t.n(A),
        T = t("7t+N"),
        q = t.n(T),
        U = (t("IVJ5"), t("5W1q"), t("SsU1")),
        B = {
          pieceConfig: {
            webIndexLink: {
              default: "/site/index",
              xidian:
                "/site/outlink?outlink=" +
                encodeURIComponent(
                  "http://ehall.xidian.edu.cn/new/index_xd.html#/home"
                ),
            },
            webServiceLink: {
              default: "/service/index",
              xidian:
                "/site/outlink?outlink=" +
                encodeURIComponent(
                  "http://ehall.xidian.edu.cn/new/index_xd.html#/search"
                ),
            },
            addSreviceShow: { default: !0, xidian: !1, cufe: !1 },
            moveTips: { default: !1, cufe: !0 },
          },
          getConfig: function (e) {
            return (
              void 0 !== !this.pieceConfig[e] &&
              (void 0 !== this.pieceConfig[e][U.a.getWebId()]
                ? this.pieceConfig[e][U.a.getWebId()]
                : this.pieceConfig[e].default)
            );
          },
        };
      o.default.prototype.pieceHelper = B;
      var R = t("fZjL"),
        E = t.n(R),
        M = t("mvHQ"),
        N = t.n(M),
        _ = function (e) {
          (this.config = { DbName: "BrowerDb", expires: 0 }), this.initDb(e);
        };
      (_.prototype.initDb = function (e) {
        for (var a in e)
          this.config[a] = void 0 !== this.config[a] ? e[a] : this.config[a];
        this.config.DbTime = this.config.DbName + "_time";
      }),
        (_.prototype.getKey = function (e) {
          return this.config.DbName + "_" + e;
        }),
        (_.prototype.setLItem = function (e, a, t) {
          if (
            (this.clearOverData(),
            (t = void 0 === t ? this.config.expires : t),
            this.removeLItem(e),
            t)
          ) {
            var s =
                null != localStorage.getItem(this.config.DbName)
                  ? JSON.parse(localStorage.getItem(this.config.DbName))
                  : {},
              n =
                null != localStorage.getItem(this.config.DbTime)
                  ? JSON.parse(localStorage.getItem(this.config.DbTime))
                  : {};
            (s[e] = a),
              (n[e] = this.getSelfTime(t)),
              localStorage.setItem(this.config.DbName, N()(s)),
              localStorage.setItem(this.config.DbTime, N()(n));
          } else localStorage.setItem(this.getKey(e), N()(a));
        }),
        (_.prototype.getLItem = function (e) {
          this.clearOverData();
          var a =
              null != localStorage.getItem(this.config.DbName)
                ? JSON.parse(localStorage.getItem(this.config.DbName))
                : {},
            t = JSON.parse(localStorage.getItem(this.getKey(e)));
          return null !== t ? t : void 0 !== a[e] ? a[e] : null;
        }),
        (_.prototype.removeLItem = function (e) {
          this.clearOverData();
          var a =
              null != localStorage.getItem(this.config.DbName)
                ? JSON.parse(localStorage.getItem(this.config.DbName))
                : {},
            t =
              null != localStorage.getItem(this.config.DbTime)
                ? JSON.parse(localStorage.getItem(this.config.DbTime))
                : {},
            s = {},
            n = {};
          if (void 0 !== a[e]) {
            for (var o in a) e !== o && ((s[e] = a[e]), (n[e] = t[e]));
            localStorage.setItem(this.config.DbName, N()(s)),
              localStorage.setItem(this.config.DbTime, N()(n));
          }
          localStorage.removeItem(this.getKey(e));
        }),
        (_.prototype.clearLAll = function () {
          localStorage.removeItem(this.config.DbName),
            localStorage.removeItem(this.config.DbTime);
        }),
        (_.prototype.clearOverData = function () {
          var e =
              null != localStorage.getItem(this.config.DbName)
                ? JSON.parse(localStorage.getItem(this.config.DbName))
                : {},
            a =
              null != localStorage.getItem(this.config.DbTime)
                ? JSON.parse(localStorage.getItem(this.config.DbTime))
                : {},
            t = this.getSelfTime(0),
            s = {},
            n = {};
          for (var o in a)
            a[o] > t && void 0 !== e[o] && ((s[o] = e[o]), (n[o] = a[o]));
          localStorage.setItem(this.config.DbName, N()(s)),
            localStorage.setItem(this.config.DbTime, N()(n));
        }),
        (_.prototype.getSelfTime = function (e) {
          var a = new Date();
          return a.setTime(a.getTime() + parseInt(e)), a.getTime();
        }),
        (_.prototype.setSItem = function (e, a) {
          sessionStorage.setItem(this.getKey(e), N()(a));
        }),
        (_.prototype.getSItem = function (e) {
          return JSON.parse(sessionStorage.getItem(this.getKey(e)));
        }),
        (_.prototype.removeSItem = function (e) {
          sessionStorage.removeItem(this.getKey(e));
        });
      var F = new _({ DbName: "officeDb", expires: 0 }),
        O =
          (t("Aj9o"),
          t("5A82"),
          {
            authKey: "authControl_key",
            usernameKey: "username_key",
            validationKey: "validation_key",
            checkLogin: function () {
              return -1 !== document.cookie.search("eai-sess");
            },
            pcTologin: function () {
              var e = void 0,
                a = appConfig.webList;
              (e =
                a[appConfig.domainName] &&
                a[appConfig.domainName].login.length > 0
                  ? appConfig.apiBaseUrl +
                    a[appConfig.domainName].login +
                    "?redirect_url=" +
                    U.a.getCurrUrl()
                  : appConfig.baseUrl +
                    "site/login?redirect_url=" +
                    U.a.getCurrUrl()),
                (window.location.href = e);
            },
            wxCorpToLogin: function () {
              var e =
                appConfig.apiBaseUrl +
                "/api/corp/index?redirectUrl=" +
                U.a.getCurrUrl();
              window.location.href = e;
            },
            toLogin: function () {
              var e = U.a.isWeixin(),
                a = appConfig.webList;
              e.isPhone
                ? e.isWeixin
                  ? this.wxCorpToLogin()
                  : a[appConfig.domainName]
                  ? this.pcTologin()
                  : (window.location.href =
                      appConfig.baseUrl + "m_site/m_login")
                : this.pcTologin();
            },
            getControl: function (e) {
              if (!this.checkLogin())
                return F.getLItem(this.authKey) && this.delControl(), !1;
              var a = this;
              U.a.appFetch({ method: "get", url: "getAllAuth" }, function (t) {
                U.a.appFetch(
                  { method: "get", url: "getUserName" },
                  function (s) {
                    0 == s.e &&
                      (F.setLItem(a.usernameKey, { name: s.d.name }),
                      F.setLItem(a.validationKey, 1),
                      F.setLItem(a.authKey, 0 == t.e ? t.d : {}),
                      e && e());
                  }
                );
              });
            },
            loginOut: function () {
              var e = appConfig.webList,
                a = this;
              U.a.appFetch({ method: "get", url: "logout" }, function (t) {
                0 == t.e &&
                  (a.delControl(),
                  e[appConfig.domainName] && e[appConfig.domainName].logout
                    ? (window.location.href =
                        appConfig.apiBaseUrl + e[appConfig.domainName].logout)
                    : (window.location.href =
                        appConfig.baseUrl + "site/login"));
              });
            },
            delControl: function () {
              F.removeLItem(this.validationKey),
                F.removeLItem(this.authKey),
                F.removeLItem(this.usernameKey);
            },
            queryControl: function (e, a) {
              var t = F.getLItem(this.authKey);
              try {
                t = t || {};
              } catch (e) {
                t = {};
              }
              var s = t[e];
              return (
                !!(s && s.module && s.module.length) &&
                ("" == a || s.module.includes(a))
              );
            },
            isAdmin: function () {
              var e = F.getLItem(this.authKey);
              return null != e && 0 != E()(e).length;
            },
          });
      o.default.prototype.authH || (o.default.prototype.authH = O);
      var G = t("Gu7T"),
        H = t.n(G),
        W = t("Dd8w"),
        V = t.n(W),
        J = t("/ocq"),
        Q = t("NC6I"),
        K = t.n(Q);
      t("UjTL");
      window.$ = window.jQuery = q.a;
      var Z = {
        popCtrl: function (e, a) {
          if (e)
            var t = setInterval(function () {
              if ($(".g-pop").get(0) && "none" == $(".g-pop").css("display")) {
                console.log("加载中消失"), clearInterval(t);
                var a = setInterval(function () {
                  "progress_loading" == $("body>div").attr("id") ||
                    "block" != $("body>div").css("display") ||
                    $(".g-network")[0] ||
                    $(".glable-nodata")[0] ||
                    1 == o.default.prototype.appkeyIslogin ||
                    (console.log("底层节点显示"), clearInterval(a));
                });
              }
            });
        },
      };
      t("ZR8W");
      o.default.use(J.a);
      var X = o.default.prototype.appConfig,
        Y = function (e) {
          (this.Router = null),
            (this.template = e.template ? e.template : null),
            (this.cssInfo = e.cssInfo ? e.cssInfo : null),
            (this.publicCss = e.publicCss ? e.publicCss : []),
            (this.styleCss = e.styleCss ? e.styleCss : {}),
            (this.publicJs = e.publicJs ? e.publicJs : []),
            (this.needLogins = e.needLogins ? e.needLogins : []),
            (this.scrollConfig = e.scrollConfig ? e.scrollConfig : null);
        };
      (Y.prototype.checkConfig = function () {
        return !(!this.template || !this.checkTemplate());
      }),
        (Y.prototype.checkTemplate = function () {
          var e = 0;
          for (var a in this.template) {
            var t = this.template[a];
            for (var s in t) {
              var n = t[s];
              if (!n.comLoad || "function" != typeof n.comLoad)
                return (
                  console.error(
                    a + "模块， " + s + "页面，comLoad函数设置错误！"
                  ),
                  !1
                );
              if (!n.metaInfo || !n.metaInfo.title)
                return (
                  console.error(a + "模块， " + s + "页面，metainfo设置错误！"),
                  !1
                );
              e++;
            }
          }
          return !!e;
        }),
        (Y.prototype.getBaseRouter = function (e) {
          if (this.Router) return this.Router;
          this.Router = new J.a({
            fallback: !1,
            mode: "history",
            routes: e,
            base: X.routeBasePath,
            scrollBehavior: function (e, a, t) {
              return { x: 0, y: 0 };
            },
          });
          var a = this;
          return (
            this.Router.afterEach(function (e, t) {
              a.progressEnd(), Z.popCtrl(e.meta.appkey);
            }),
            this.loadFrameCss(this.Router),
            this.cssLoad(this.Router),
            this.loadMetaInfo(this.Router),
            this.loadOtherSource(this.Router),
            this.Router
          );
        }),
        (Y.prototype.loadRouter = function () {
          if (!this.checkConfig()) return !1;
          var e = [],
            a = this.template,
            t = null;
          for (var s in a) {
            var n = a[s];
            for (var o in n) {
              var c = {
                name: s + o,
                path: "/" + s + "/" + o,
                component: n[o].comLoad,
                caseSensitive: !0,
                meta: n[o].metaInfo,
              };
              e.push(c);
            }
          }
          return (
            ((t = V()({}, e[0])).path = "*"), e.push(t), this.getBaseRouter(e)
          );
        }),
        (Y.prototype.getRequire = function (e) {
          return function (a, t) {
            return e("./" + a, t);
          };
        }),
        (Y.prototype.frameCss = { require: t("I35r"), css: ["system"] }),
        (Y.prototype.loadFrameCss = function (e) {
          var a = this.getRequire(this.frameCss.require),
            t = this;
          e.beforeEach(function (e, s, n) {
            t.frameCss.css.forEach(function (e) {
              a(e);
            }),
              t.progressStart(),
              n();
          });
        }),
        (Y.prototype.cssLoad = function (e) {
          var a = this.cssInfo,
            t = this.getRequire(a.require);
          if (!a.require || "function" != typeof a.require) return !1;
          e.beforeEach(function (e, s, n) {
            try {
              var o = a.publicCss;
              for (var c in o) t(o[c]);
              var i = a.cssMaps;
              for (var c in i)
                -1 !== ("," + i[c].join() + ",").indexOf("," + e.name + ",") &&
                  t(c);
            } catch (e) {}
            n();
          });
        }),
        (Y.prototype.loadMetaInfo = function (e) {
          e.beforeEach(function (e, a, t) {
            e.meta.title && (document.title = e.meta.title),
              e.meta.desc && (document.desc = e.meta.desc),
              t();
          });
        }),
        (Y.prototype.sourceArrs = {}),
        (Y.prototype.loadAllNum = 0),
        (Y.prototype.sourceCallBack = null),
        (Y.prototype.loadOtherSource = function (e) {
          var a = this;
          e.beforeEach(function (t, s, n) {
            a.clearSource(), console.log(t, t.matched[0].path);
            var o =
              "*" == t.matched[0].path ? e.options.routes[0].path : t.path;
            console.log(o), (o = [(o = o.split("/"))[1], o[2]]);
            var c = a.publicCss ? a.publicCss : [],
              i = a.publicJs ? a.publicJs : [],
              l = a.template[o[0]][o[1]].css ? a.template[o[0]][o[1]].css : [],
              p = a.template[o[0]][o[1]].js ? a.template[o[0]][o[1]].js : [],
              u = {
                css: [].concat(H()(c), H()(a.getStyleCss()), H()(l)),
                js: [].concat(H()(i), H()(p)),
              };
            u.css.length || u.js.length
              ? ((a.sourceArrs = u), a.registerSource(t, n))
              : n();
          });
        }),
        (Y.prototype.getStyleCss = function (e) {
          var a = this.styleCss;
          if (!a.path || !a.baseName.length) return [];
          var t = [],
            s = U.a.getClientType() ? "m." : "",
            n = U.a.getClientType() ? "mstyle" : "style";
          return (
            a.baseName.forEach(function (e) {
              t.push(a.path + s + U.a.getWebStyle(n) + "." + e);
            }),
            t
          );
        }),
        (Y.prototype.registerSource = function (e, a) {
          (this.sourceCallBack = a), this.loadCssSource(), this.loadJsSource();
        }),
        (Y.prototype.clearSource = function () {
          (this.sourceArrs = []),
            (this.loadAllNum = 0),
            (this.sourceCallBack = null);
        }),
        (Y.prototype.unescapeHTML = function (e) {
          return (e = "" + e)
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&amp;/g, "&")
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'");
        }),
        (Y.prototype.loadCssSource = function () {
          var e = this;
          this.sourceArrs.css.forEach(function (a) {
            var t = /^(http|https):\/\//.test(a)
                ? e.unescapeHTML(a)
                : X.staticCssUrl + a,
              s = K()(t);
            if ((e.loadAllNum++, $('[data-id="' + s + '"]').length))
              setTimeout(function () {
                e.loadSourceSuccess();
              }, 200);
            else {
              var n =
                '<link data-id="' +
                s +
                '" href="' +
                t +
                "?v=" +
                X.sourceV +
                '" rel="stylesheet" type="text/css"/>';
              $("head").append(n),
                $('[data-id="' + s + '"]').on("load", function () {
                  e.loadSourceSuccess();
                });
            }
          });
        }),
        (Y.prototype.loadJsSource = function () {
          var e = this;
          this.sourceArrs.js.forEach(function (a) {
            var t = /^(http|https):\/\//.test(a) ? a : X.staticUrl + a,
              s = K()(t);
            if ((e.loadAllNum++, $('[data-id="' + s + '"]').length))
              setTimeout(function () {
                e.loadSourceSuccess();
              }, 200);
            else {
              var n = document.createElement("script");
              (n.src =
                -1 === t.indexOf(X.staticUrl) ? t : t + "?v=" + X.sourceV),
                n.setAttribute("data-id", s),
                (n.type = "text/javascript"),
                (n.async = !1),
                (n.onload = function () {
                  e.loadSourceSuccess();
                }),
                document.getElementsByTagName("body")[0].appendChild(n);
            }
          });
        }),
        (Y.prototype.loadSourceSuccess = function () {
          this.loadAllNum--, !this.loadAllNum && this.sourceCallBack();
        }),
        (Y.prototype.beforeEnterModule = function (e) {}),
        (Y.prototype.progressSelector = "progress_loading"),
        (Y.prototype.progressStart = function () {
          if (!$("#" + this.progressSelector).length) {
            var e = '<div id="' + this.progressSelector + '"><div></div></div>';
            $("body").append(e);
          }
          this.clearProgress(),
            $("#" + this.progressSelector).show(),
            (this.progressNum = 0),
            this.progressChange(98, 3e3);
        }),
        (Y.prototype.progressEnd = function () {
          $(".frame-loader").length && $(".frame-loader").remove(),
            $(".page-load").length && $(".page-load").remove(),
            this.progressChange(100, 300);
        }),
        (Y.prototype.progressClearBar = null),
        (Y.prototype.progressNum = 0),
        (Y.prototype.progressChange = function (e, a) {
          var t = (e - this.progressNum) / (a / 20),
            s = this;
          clearInterval(s.progressClearBar),
            (s.progressClearBar = setInterval(function () {
              if (
                ($("#" + s.progressSelector)
                  .find("div")
                  .width(s.progressNum + "%"),
                s.progressNum >= e)
              )
                return (
                  clearInterval(s.progressClearBar),
                  s.progressNum >= 100 &&
                    ($("#" + s.progressSelector).hide(),
                    $(".page-load").length && $(".page-load").remove(),
                    s.clearProgress()),
                  !1
                );
              s.progressNum += t;
            }, 20));
        }),
        (Y.prototype.clearProgress = function () {
          $("#" + this.progressSelector)
            .find("div")
            .width("0%");
        });
      var ee,
        ae,
        te,
        se,
        ne,
        oe,
        ce,
        ie,
        le = Y,
        pe = "一卡通交易记录";
      "scu" == i.a.id && (pe = "校园卡明细"),
        "zh" ==
        (null === window.localStorage.getItem("language")
          ? "zh"
          : window.localStorage.getItem("language"))
          ? ((ae = function (e) {
              return Promise.all([t.e(0), t.e(15)])
                .then(
                  function () {
                    var a = [t("LK50")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (ee = "身份认证"))
          : ((ae = function (e) {
              return Promise.all([t.e(0), t.e(15)])
                .then(
                  function () {
                    var a = [t("LK50")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (ee = "Authentication")),
        (te =
          "zju" == i.a.id
            ? function (e) {
                return Promise.all([t.e(0), t.e(3)])
                  .then(
                    function () {
                      var a = [t("s/1J")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }
            : "zlappfudan" == i.a.id
            ? function (e) {
                return Promise.all([t.e(0), t.e(13)])
                  .then(
                    function () {
                      var a = [t("MucL")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }
            : "buaa" == i.a.id
            ? function (e) {
                return Promise.all([t.e(0), t.e(7)])
                  .then(
                    function () {
                      var a = [t("JwUd")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }
            : "bnu2" == i.a.id
            ? function (e) {
                return Promise.all([t.e(0), t.e(12)])
                  .then(
                    function () {
                      var a = [t("jRcL")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }
            : "bjtu" == i.a.id
            ? function (e) {
                return Promise.all([t.e(0), t.e(74)])
                  .then(
                    function () {
                      var a = [t("nVUK")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }
            : function (e) {
                return Promise.all([t.e(0), t.e(73)])
                  .then(
                    function () {
                      var a = [t("q6z2")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }),
        (se =
          "nju" == i.a.id
            ? function (e) {
                return Promise.all([t.e(0), t.e(287)])
                  .then(
                    function () {
                      var a = [t("xIO1")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }
            : function (e) {
                return Promise.all([t.e(0), t.e(288)])
                  .then(
                    function () {
                      var a = [t("Aak3")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }),
        (ne =
          "upc" == i.a.id
            ? function (e) {
                return Promise.all([t.e(0), t.e(715)])
                  .then(
                    function () {
                      var a = [t("RmHY")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }
            : function (e) {
                return Promise.all([t.e(0), t.e(286)])
                  .then(
                    function () {
                      var a = [t("W2zG")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }),
        (oe =
          "bjtu" == i.a.id
            ? function (e) {
                return Promise.all([t.e(0), t.e(72)])
                  .then(
                    function () {
                      var a = [t("aGdD")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }
            : function (e) {
                return Promise.all([t.e(0), t.e(71)])
                  .then(
                    function () {
                      var a = [t("rmld")];
                      e.apply(null, a);
                    }.bind(this)
                  )
                  .catch(t.oe);
              }),
        "buu" == i.a.id
          ? ((ce = function (e) {
              return Promise.all([t.e(0), t.e(541)])
                .then(
                  function () {
                    var a = [t("9KIH")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (ie = [
              "js/city.js",
              "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
            ]))
          : "nacta" == i.a.id
          ? ((ce = function (e) {
              return Promise.all([t.e(0), t.e(537)])
                .then(
                  function () {
                    var a = [t("G+dG")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (ie = [
              "js/city.js",
              "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
            ]))
          : "buaa" == i.a.id
          ? ((ce = function (e) {
              return Promise.all([t.e(0), t.e(542)])
                .then(
                  function () {
                    var a = [t("cGmn")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (ie = [
              "js/city.js",
              "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
            ]))
          : ((ce = function (e) {
              return Promise.all([t.e(0), t.e(534)])
                .then(
                  function () {
                    var a = [t("3v4J")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (ie = [
              "js/city.js",
              "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
            ]));
      var ue,
        me,
        de,
        re = window.navigator.userAgent.toLowerCase();
      "micromessenger" == re.match(/MicroMessenger/i) &&
      "wxwork" == re.match(/wxwork/i)
        ? /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
          ? ((ue = function (e) {
              return Promise.all([t.e(0), t.e(21)])
                .then(
                  function () {
                    var a = [t("fGCB")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (me = [
              "/css/style/common/wcalendar.css",
              "/css/style/common/iosselect.css",
              "/css/style/common/mescroll.min.css",
            ]),
            (de = [
              "/js/wcalendar.js",
              "/js/timeselect.js",
              "/js/mescroll.min.js",
            ]))
          : ((ue = function (e) {
              return Promise.all([t.e(0), t.e(22)])
                .then(
                  function () {
                    var a = [t("l9uu")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (me = []),
            (de = []))
        : ((ue = function (e) {
            return Promise.all([t.e(0), t.e(21)])
              .then(
                function () {
                  var a = [t("fGCB")];
                  e.apply(null, a);
                }.bind(this)
              )
              .catch(t.oe);
          }),
          (me = [
            "/css/style/common/wcalendar.css",
            "/css/style/common/iosselect.css",
            "/css/style/common/mescroll.min.css",
          ]),
          (de = [
            "/js/wcalendar.js",
            "/js/timeselect.js",
            "/js/mescroll.min.js",
          ]));
      var fe = "一卡通余额";
      "gscass" == i.a.id && (fe = "一卡通查询");
      var he,
        ye,
        je,
        we,
        be = "疫情防控通";
      switch (
        ("csu" == i.a.id
          ? (be = "健康打卡")
          : "bjut" == i.a.id && (be = "我们在一起"),
        "buaa" == i.a.id
          ? ((he = function (e) {
              return Promise.all([t.e(0), t.e(650)])
                .then(
                  function () {
                    var a = [t("exO1")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (ye = "通行码"))
          : "pku" == i.a.id
          ? ((he = function (e) {
              return Promise.all([t.e(0), t.e(647)])
                .then(
                  function () {
                    var a = [t("iHnM")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (ye = "加载中"))
          : "zlappfudan" == i.a.id
          ? ((he = function (e) {
              return Promise.all([t.e(0), t.e(649)])
                .then(
                  function () {
                    var a = [t("TE9e")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (ye = "加载中"))
          : ((he = function (e) {
              return Promise.all([t.e(0), t.e(4)])
                .then(
                  function () {
                    var a = [t("k8zy")];
                    e.apply(null, a);
                  }.bind(this)
                )
                .catch(t.oe);
            }),
            (ye = "加载中")),
        i.a.id)
      ) {
        case "tongji":
          je = function (e) {
            return Promise.all([t.e(0), t.e(345)])
              .then(
                function () {
                  var a = [t("pXZQ")];
                  e.apply(null, a);
                }.bind(this)
              )
              .catch(t.oe);
          };
          break;
        default:
          je = function (e) {
            return Promise.all([t.e(0), t.e(303)])
              .then(
                function () {
                  var a = [t("t6jm")];
                  e.apply(null, a);
                }.bind(this)
              )
              .catch(t.oe);
          };
      }
      switch (i.a.id) {
        case "snnump":
          we = function (e) {
            return Promise.all([t.e(0), t.e(402)])
              .then(
                function () {
                  var a = [t("W0sd")];
                  e.apply(null, a);
                }.bind(this)
              )
              .catch(t.oe);
          };
          break;
        default:
          we = function (e) {
            return Promise.all([t.e(0), t.e(404)])
              .then(
                function () {
                  var a = [t("dvHJ")];
                  e.apply(null, a);
                }.bind(this)
              )
              .catch(t.oe);
          };
      }
      var ve,
        ge,
        xe,
        ke,
        Ie,
        Le,
        Pe,
        Se,
        Ce,
        ze =
          ((ve = navigator.userAgent.toLowerCase()),
          (ge = "ipad" == ve.match(/ipad/i)),
          (xe = "iphone os" == ve.match(/iphone os/i)),
          (ke = "midp" == ve.match(/midp/i)),
          (Ie = "rv:1.2.3.4" == ve.match(/rv:1.2.3.4/i)),
          (Le = "ucweb" == ve.match(/ucweb/i)),
          (Pe = "android" == ve.match(/android/i)),
          (Se = "windows ce" == ve.match(/windows ce/i)),
          (Ce = "windows mobile" == ve.match(/windows mobile/i)),
          ge || xe || ke || Ie || Le || Pe || Se || Ce
            ? {
                guideIndexCom: function (e) {
                  return Promise.all([t.e(0), t.e(584)])
                    .then(
                      function () {
                        var a = [t("w5U1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                guideDetailCom: function (e) {
                  return Promise.all([t.e(0), t.e(278)])
                    .then(
                      function () {
                        var a = [t("R3AK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                fudanclassRoomQueryCom: function (e) {
                  return Promise.all([t.e(0), t.e(252)])
                    .then(
                      function () {
                        var a = [t("t0zf")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                freeClassroomV3index: function (e) {
                  return Promise.all([t.e(0), t.e(622)])
                    .then(
                      function () {
                        var a = [t("991u")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                schoolMapModel: function (e) {
                  return Promise.all([t.e(0), t.e(2)])
                    .then(
                      function () {
                        var a = [t("JHYv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                qrcodeLoginModel: function (e) {
                  return Promise.all([t.e(0), t.e(441)])
                    .then(
                      function () {
                        var a = [t("DEEA")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/jqcloud.min.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/swiper.min.js",
                  "/js/jqcloud.js",
                  "/js/mescroll.min.js",
                ],
                statisticsCsu: function (e) {
                  return Promise.all([t.e(0), t.e(367)])
                    .then(
                      function () {
                        var a = [t("2joq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                queryCsu: function (e) {
                  return Promise.all([t.e(0), t.e(369)])
                    .then(
                      function () {
                        var a = [t("JIfB")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                listCsu: function (e) {
                  return Promise.all([t.e(0), t.e(370)])
                    .then(
                      function () {
                        var a = [t("7rDR")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                universalForm: function (e) {
                  return Promise.all([t.e(0), t.e(266)])
                    .then(
                      function () {
                        var a = [t("n6W/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                officeTelhomePage: function (e) {
                  return Promise.all([t.e(0), t.e(28)])
                    .then(
                      function () {
                        var a = [t("jEsO")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                personalAgendaIndex: function (e) {
                  return Promise.all([t.e(0), t.e(63)])
                    .then(
                      function () {
                        var a = [t("htpv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                lostAndFoundIndex: function (e) {
                  return Promise.all([t.e(0), t.e(139)])
                    .then(
                      function () {
                        var a = [t("Egpx")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                fleaMartketIndex: function (e) {
                  return Promise.all([t.e(0), t.e(638)])
                    .then(
                      function () {
                        var a = [t("KndT")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                scoreIndex: function (e) {
                  return Promise.all([t.e(0), t.e(396)])
                    .then(
                      function () {
                        var a = [t("GqiS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                onecardSoluIndex: function (e) {
                  return Promise.all([t.e(0), t.e(492)])
                    .then(
                      function () {
                        var a = [t("V23l")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                onecardSoluReportLoss: function (e) {
                  return Promise.all([t.e(0), t.e(271)])
                    .then(
                      function () {
                        var a = [t("gEp+")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                onecardSoluCardFlowing: function (e) {
                  return Promise.all([t.e(0), t.e(494)])
                    .then(
                      function () {
                        var a = [t("d/sW")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                networkDevice: function (e) {
                  return Promise.all([t.e(0), t.e(525)])
                    .then(
                      function () {
                        var a = [t("QhHi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                drcomNetclient: function (e) {
                  return Promise.all([t.e(0), t.e(671)])
                    .then(
                      function () {
                        var a = [t("gIHq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                ouchnScoreQuery: function (e) {
                  return Promise.all([t.e(0), t.e(11)])
                    .then(
                      function () {
                        var a = [t("4Mwu")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                fudanScheduleSubscribe: function (e) {
                  return Promise.all([t.e(0), t.e(610)])
                    .then(
                      function () {
                        var a = [t("zN5c")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                fudanScheduleMatterList: function (e) {
                  return Promise.all([t.e(0), t.e(42)])
                    .then(
                      function () {
                        var a = [t("BIWN")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                fudanSchedulePersonalSchedule: function (e) {
                  return Promise.all([t.e(0), t.e(82)])
                    .then(
                      function () {
                        var a = [t("jSVB")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
              }
            : {
                guideIndexCom: function (e) {
                  return Promise.all([t.e(0), t.e(583)])
                    .then(
                      function () {
                        var a = [t("1ccU")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                guideDetailCom: function (e) {
                  return Promise.all([t.e(0), t.e(277)])
                    .then(
                      function () {
                        var a = [t("MN/e")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                fudanclassRoomQueryCom: function (e) {
                  return Promise.all([t.e(0), t.e(8)])
                    .then(
                      function () {
                        var a = [t("LHWP")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                freeClassroomV3index: function (e) {
                  return Promise.all([t.e(0), t.e(621)])
                    .then(
                      function () {
                        var a = [t("KFW9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                schoolMapModel: function (e) {
                  return Promise.all([t.e(0), t.e(66)])
                    .then(
                      function () {
                        var a = [t("EwhO")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                qrcodeLoginModel: function (e) {
                  return Promise.all([t.e(0), t.e(440)])
                    .then(
                      function () {
                        var a = [t("kexN")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/swiper.min.js",
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/jqPaginator.js",
                ],
                statisticsCsu: function (e) {
                  return Promise.all([t.e(0), t.e(366)])
                    .then(
                      function () {
                        var a = [t("sa0o")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                queryCsu: function (e) {
                  return Promise.all([t.e(0), t.e(233)])
                    .then(
                      function () {
                        var a = [t("7RFD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                listCsu: function (e) {
                  return Promise.all([t.e(0), t.e(154)])
                    .then(
                      function () {
                        var a = [t("gRb4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                universalForm: function (e) {
                  return Promise.all([t.e(0), t.e(65)])
                    .then(
                      function () {
                        var a = [t("AUoO")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                officeTelhomePage: function (e) {
                  return Promise.all([t.e(0), t.e(29)])
                    .then(
                      function () {
                        var a = [t("8US4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                personalAgendaIndex: function (e) {
                  return Promise.all([t.e(0), t.e(16)])
                    .then(
                      function () {
                        var a = [t("PxNv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                lostAndFoundIndex: function (e) {
                  return Promise.all([t.e(0), t.e(10)])
                    .then(
                      function () {
                        var a = [t("xfUR")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                fleaMartketIndex: function (e) {
                  return Promise.all([t.e(0), t.e(17)])
                    .then(
                      function () {
                        var a = [t("vFZ/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                scoreIndex: function (e) {
                  return Promise.all([t.e(0), t.e(395)])
                    .then(
                      function () {
                        var a = [t("AQd4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                onecardSoluIndex: function (e) {
                  return Promise.all([t.e(0), t.e(490)])
                    .then(
                      function () {
                        var a = [t("H97p")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                onecardSoluReportLoss: function (e) {
                  return Promise.all([t.e(0), t.e(272)])
                    .then(
                      function () {
                        var a = [t("VnM3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                onecardSoluCardFlowing: function (e) {
                  return Promise.all([t.e(0), t.e(491)])
                    .then(
                      function () {
                        var a = [t("IGiz")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                networkDevice: function (e) {
                  return Promise.all([t.e(0), t.e(523)])
                    .then(
                      function () {
                        var a = [t("d2o6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                drcomNetclient: function (e) {
                  return Promise.all([t.e(0), t.e(668)])
                    .then(
                      function () {
                        var a = [t("4MYM")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                ouchnScoreQuery: function (e) {
                  return Promise.all([t.e(0), t.e(228)])
                    .then(
                      function () {
                        var a = [t("NUZJ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                fudanScheduleSubscribe: function (e) {
                  return Promise.all([t.e(0), t.e(146)])
                    .then(
                      function () {
                        var a = [t("vuh2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                fudanScheduleMatterList: function (e) {
                  return Promise.all([t.e(0), t.e(164)])
                    .then(
                      function () {
                        var a = [t("Uum0")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                fudanSchedulePersonalSchedule: function (e) {
                  return Promise.all([t.e(0), t.e(53)])
                    .then(
                      function () {
                        var a = [t("pSnf")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
              }),
        Ae = new le({
          template: {
            noPagedata: {
              index: {
                comLoad: function (e) {
                  t.e(517)
                    .then(
                      function () {
                        var a = [t("FAoA")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "页面不存在 " },
              },
            },
            hkhtml: {
              index: {
                comLoad: function (e) {
                  t.e(215)
                    .then(
                      function () {
                        var a = [t("BjQm")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "滑块验证码" },
              },
            },
            newsInterruption: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(522)])
                    .then(
                      function () {
                        var a = [t("iREi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消息设置" },
                css: ["/css/switchery.min.css"],
                js: ["/js/switchery.min.js"],
              },
              indexV2: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(521)])
                    .then(
                      function () {
                        var a = [t("fnQl")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消息免打扰设置" },
                css: ["/css/switchery.min.css"],
                js: ["/js/switchery.min.js"],
              },
            },
            greetingCard: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(87)])
                    .then(
                      function () {
                        var a = [t("mBkX")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "新春祝福", appkey: "greetingcard" },
                js: ["/js/jweixin-1.3.2.js"],
              },
            },
            xidianMinigramLogin: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(311)])
                    .then(
                      function () {
                        var a = [t("sdHb")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西安电子科技大学" },
                js: ["/js/jweixin-1.3.2.js"],
              },
            },
            localStoragepage: {
              index: {
                comLoad: function (e) {
                  t.e(209)
                    .then(
                      function () {
                        var a = [t("vK+U")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "获取存储信息" },
              },
            },
            applicationlist: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(140)])
                    .then(
                      function () {
                        var a = [t("YJLq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "应用列表" },
                js: [
                  "https://res.wx.qq.com/open/js/jweixin-1.2.0.js",
                  "/js/jssdk.js",
                ],
              },
            },
            sso: { index: { comLoad: ae, metaInfo: { title: ee } } },
            publicsso: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(328)])
                    .then(
                      function () {
                        var a = [t("i4Ze")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "身份认证" },
              },
              helpIndex: {
                comLoad: function (e) {
                  t.e(210)
                    .then(
                      function () {
                        var a = [t("iC2u")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "关注指南" },
              },
              helpIndexmsg: {
                comLoad: function (e) {
                  t.e(194)
                    .then(
                      function () {
                        var a = [t("//wM")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "关注指南" },
              },
              helpQt: {
                comLoad: function (e) {
                  t.e(130)
                    .then(
                      function () {
                        var a = [t("3Cyl")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "常见问题" },
              },
              helpdetail: {
                comLoad: function (e) {
                  t.e(190)
                    .then(
                      function () {
                        var a = [t("M6Xr")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "常见问题" },
              },
            },
            material: {
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(232)])
                    .then(
                      function () {
                        var a = [t("cHES")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "文章" },
              },
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(135)])
                    .then(
                      function () {
                        var a = [t("Cvqm")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " " },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/swiper.min.js", "/js/mescroll.min.js"],
              },
              blankdetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(200)])
                    .then(
                      function () {
                        var a = [t("cV3U")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " " },
              },
            },
            materialHnu: {
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(142)])
                    .then(
                      function () {
                        var a = [t("pDbz")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " " },
              },
            },
            networkApp: {
              balance: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(531)])
                    .then(
                      function () {
                        var a = [t("QmuP")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "余额查询", appkey: "sam" },
              },
              history: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(530)])
                    .then(
                      function () {
                        var a = [t("rsqQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "历史记录查询", appkey: "sam" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/iosselect.js", "/js/mescroll.min.js"],
              },
              setPass: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(529)])
                    .then(
                      function () {
                        var a = [t("k+Tr")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "修改密码", appkey: "sam" },
              },
              terminalSearch: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(528)])
                    .then(
                      function () {
                        var a = [t("pEMj")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网络在线终端查询", appkey: "sam" },
              },
            },
            center: {
              login: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(716)])
                    .then(
                      function () {
                        var a = [t("3T+S")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中" },
              },
              personal: { comLoad: se, metaInfo: { title: "个人中心" } },
              edit: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(717)])
                    .then(
                      function () {
                        var a = [t("hQJk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "编辑信息" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
              switch: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(712)])
                    .then(
                      function () {
                        var a = [t("PW+W")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "切换账号" },
              },
              qrcode: {
                comLoad: ne,
                metaInfo: { title: "个人二维码" },
                js: ["/js/qrcode.js", "/js/normal_socket.js"],
              },
              qrcodeBuaa: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(285)])
                    .then(
                      function () {
                        var a = [t("EM9l")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "个人二维码" },
                js: ["/js/qrcode.js", "/js/normal_socket.js"],
              },
              sweepCode: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(714)])
                    .then(
                      function () {
                        var a = [t("6vSs")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码结果" },
              },
              sweepCodeBjtu: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(713)])
                    .then(
                      function () {
                        var a = [t("qEXB")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码结果" },
              },
              sweepCodeBuaa: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(284)])
                    .then(
                      function () {
                        var a = [t("7TlZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "签到结果" },
              },
              sweepCodeRls: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(283)])
                    .then(
                      function () {
                        var a = [t("fM5a")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "签到结果" },
              },
              wxpay: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(157)])
                    .then(
                      function () {
                        var a = [t("knCQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "微信支付" },
              },
            },
            document: {
              backlog: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(163)])
                    .then(
                      function () {
                        var a = [t("WTwR")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "待办公文", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
              },
              complete: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(196)])
                    .then(
                      function () {
                        var a = [t("0QPR")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "已办公文", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
              },
              flow: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(195)])
                    .then(
                      function () {
                        var a = [t("JK9y")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "流转公文", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
              },
              user: {
                comLoad: function (e) {
                  t.e(129)
                    .then(
                      function () {
                        var a = [t("Zs8v")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "公文转流", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
              },
              flowpage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(137)])
                    .then(
                      function () {
                        var a = [t("Eobx")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "公文转流", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
              },
              waitpage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(185)])
                    .then(
                      function () {
                        var a = [t("S1+k")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "公文转流", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
              },
              sendpage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(165)])
                    .then(
                      function () {
                        var a = [t("uWGY")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "公文转流", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
              },
              officialpage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(243)])
                    .then(
                      function () {
                        var a = [t("hiuh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "公文转流", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
                js: ["/js/document.js"],
              },
              redpage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(263)])
                    .then(
                      function () {
                        var a = [t("ziba")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "公文转流", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
              },
              flowlog: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(182)])
                    .then(
                      function () {
                        var a = [t("8kDS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "公文转流日志", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
              },
              choosecompany: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(32)])
                    .then(
                      function () {
                        var a = [t("hFVG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "提交至主管部门", appkey: "a_tju" },
                css: ["/css/style/common/reset.css"],
              },
            },
            notice: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(40)])
                    .then(
                      function () {
                        var a = [t("CQZj")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告" },
                css: ["/css/style/common/reset.css"],
              },
              noticepage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(221)])
                    .then(
                      function () {
                        var a = [t("Ai23")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告" },
                css: ["/css/style/common/reset.css"],
              },
              noticetippage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(128)])
                    .then(
                      function () {
                        var a = [t("smqG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告" },
                css: ["/css/style/common/reset.css"],
              },
            },
            message: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(59)])
                    .then(
                      function () {
                        var a = [t("0C5b")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消息处理" },
                css: ["/css/style/common/reset.css"],
              },
              message: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(251)])
                    .then(
                      function () {
                        var a = [t("CT6E")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消息处理" },
                css: ["/css/style/common/reset.css"],
              },
            },
            commonForm: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(704)])
                    .then(
                      function () {
                        var a = [t("W+vT")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "列表", appkey: "location" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            payment: {
              gopay: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(467)])
                    .then(
                      function () {
                        var a = [t("nsqt")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "支付", appkey: "pay" },
                js: ["https://res.wx.qq.com/open/js/jweixin-1.3.2.js"],
              },
              result: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(465)])
                    .then(
                      function () {
                        var a = [t("8o2t")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "支付结果", appkey: "pay" },
              },
              hjqtxyresult: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(181)])
                    .then(
                      function () {
                        var a = [t("FghS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "支付结果", appkey: "pay" },
                js: ["https://res.wx.qq.com/open/js/jweixin-1.3.2.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(470)])
                    .then(
                      function () {
                        var a = [t("UT3M")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "支付详情", appkey: "pay" },
              },
              alipay: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(471)])
                    .then(
                      function () {
                        var a = [t("kS97")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "支付宝", appkey: "pay" },
              },
              errpage: {
                comLoad: function (e) {
                  t.e(468)
                    .then(
                      function () {
                        var a = [t("J8Ph")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "支付", appkey: "pay" },
              },
              payRecord: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(466)])
                    .then(
                      function () {
                        var a = [t("VKMQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "支付账单", appkey: "pay" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/echarts.min.js",
                  "/js/wcalendar.js",
                  "/js/timeselect.js",
                ],
              },
              detailPay: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(469)])
                    .then(
                      function () {
                        var a = [t("CPb2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "待支付", appkey: "pay" },
              },
              wxpay: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(219)])
                    .then(
                      function () {
                        var a = [t("7UyM")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "微信支付", appkey: "pay" },
                js: [
                  "https://res.wx.qq.com/open/js/jweixin-1.3.2.js",
                  "/js/jssdk.js",
                ],
              },
              walletpay: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(464)])
                    .then(
                      function () {
                        var a = [t("1XLh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "微信卡钱包支付", appkey: "pay" },
              },
            },
            composition: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(702)])
                    .then(
                      function () {
                        var a = [t("Oz5K")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "应用聚合（身份识别）" },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              all: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(703)])
                    .then(
                      function () {
                        var a = [t("RQ7h")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "应用聚合（身份识别）" },
              },
            },
            ticket: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(357)])
                    .then(
                      function () {
                        var a = [t("OSDR")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "活动抢票", appkey: "ticket" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(358)])
                    .then(
                      function () {
                        var a = [t("RL9n")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ticket" },
              },
              success: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(174)])
                    .then(
                      function () {
                        var a = [t("fiC0")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ticket" },
              },
              check: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(359)])
                    .then(
                      function () {
                        var a = [t("NIj6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "活动抢票", appkey: "ticket" },
                js: ["/js/jweixin-1.4.0.js"],
              },
            },
            seat: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(391)])
                    .then(
                      function () {
                        var a = [t("2rbW")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "活动抢座", appkey: "features" },
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(392)])
                    .then(
                      function () {
                        var a = [t("etXr")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "活动抢座", appkey: "features" },
              },
              chooseSeat: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(268)])
                    .then(
                      function () {
                        var a = [t("dqfC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "在线选座", appkey: "features" },
                css: [
                  "/css/seat/jquery.seat-charts.css",
                  "/css/seat/style.css",
                  "/css/style/common/swiper.min.css",
                ],
                js: [
                  "/js/swiper.min.js",
                  "/js/seat/jquery.seat-charts.js",
                  "/js/seat/iscroll-zoom.js",
                ],
              },
              chooseSeatxinxi: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(393)])
                    .then(
                      function () {
                        var a = [t("X3R/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "选座信息", appkey: "features" },
              },
              chooseSeatcheck: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(394)])
                    .then(
                      function () {
                        var a = [t("3ygg")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "验票", appkey: "features" },
                js: ["/js/jweixin-1.4.0.js"],
              },
            },
            activity: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(764)])
                    .then(
                      function () {
                        var a = [t("dBKd")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "活动首页", appkey: "action" },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              hall: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(765)])
                    .then(
                      function () {
                        var a = [t("3Nah")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "活动大厅", appkey: "action" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              manage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(763)])
                    .then(
                      function () {
                        var a = [t("lnwS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "我管理的", appkey: "action" },
              },
              activemanage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(774)])
                    .then(
                      function () {
                        var a = [t("sbpq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "活动管理", appkey: "action" },
              },
              activemanageSing: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(773)])
                    .then(
                      function () {
                        var a = [t("72rP")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "签到人员列表", appkey: "action" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              activityfile: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(769)])
                    .then(
                      function () {
                        var a = [t("aw4x")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "文件管理", appkey: "action" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              activitycomment: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(771)])
                    .then(
                      function () {
                        var a = [t("/Xub")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "评论管理", appkey: "action" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              activityphoto: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(768)])
                    .then(
                      function () {
                        var a = [t("dxhk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "照片墙管理", appkey: "action" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              activitydetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(770)])
                    .then(
                      function () {
                        var a = [t("vmnD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "活动详情", appkey: "action" },
              },
              activitycode: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(772)])
                    .then(
                      function () {
                        var a = [t("hB9Z")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "活动签到", appkey: "action" },
              },
              activityphotochild: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(767)])
                    .then(
                      function () {
                        var a = [t("ZeuU")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "照片墙", appkey: "action" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/mescroll.min.js",
                ],
              },
              addnew: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(766)])
                    .then(
                      function () {
                        var a = [t("yMdy")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "创建新活动", appkey: "action" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/wcalendar.js",
                  "/js/timeselect.js",
                ],
              },
            },
            news: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(34)])
                    .then(
                      function () {
                        var a = [t("wPvO")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "news" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/swiper.min.js", "/js/mescroll.min.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(230)])
                    .then(
                      function () {
                        var a = [t("KDlf")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "news" },
                css: ["/css/style/common/swiper.min.css"],
                js: [],
              },
            },
            tjuNotice: {
              tjuNoticeIndex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(352)])
                    .then(
                      function () {
                        var a = [t("JByV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中...", appkey: "tjunotice" },
              },
              tjuNoticeNew: {
                comLoad: function (e) {
                  t.e(351)
                    .then(
                      function () {
                        var a = [t("VbcN")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "新闻详情", appkey: "tjunotice" },
              },
              tjuNoticeTongzhi: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(350)])
                    .then(
                      function () {
                        var a = [t("IqaA")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中...", appkey: "tjunotice" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            tjuNews: {
              tjuNewsIndex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(354)])
                    .then(
                      function () {
                        var a = [t("esfS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "办公消息", appkey: "tjumessage" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              tjuNewsDetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(355)])
                    .then(
                      function () {
                        var a = [t("8iJj")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中...", appkey: "tjumessage" },
              },
              tjuNewsNotice: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(353)])
                    .then(
                      function () {
                        var a = [t("ZWPJ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "会议通知", appkey: "tjumessage" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            tjuOfficial: {
              officiallist: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(249)])
                    .then(
                      function () {
                        var a = [t("uBPX")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校发公文", appkey: "tjubumf" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              officialhot: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(346)])
                    .then(
                      function () {
                        var a = [t("3P9J")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中...", appkey: "tjubumf" },
              },
              officialIndex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(349)])
                    .then(
                      function () {
                        var a = [t("zceX")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "公文详情" },
              },
              officialIndextwo: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(347)])
                    .then(
                      function () {
                        var a = [t("cVAD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消息处理" },
              },
              officialIndexthree: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(348)])
                    .then(
                      function () {
                        var a = [t("I3pt")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消息处理" },
              },
            },
            tjuStatistics: {
              index: {
                comLoad: function (e) {
                  t.e(44)
                    .then(
                      function () {
                        var a = [t("+o04")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "数据统计" },
                js: ["/js/echarts.min.js"],
              },
            },
            epideState: {
              instructor: {
                comLoad: te,
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              leader: {
                comLoad: oe,
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              leaderBjtu: {
                comLoad: oe,
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              leaderBuu: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(245)])
                    .then(
                      function () {
                        var a = [t("rMA5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              leadertw: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(660)])
                    .then(
                      function () {
                        var a = [t("V+m3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              studenew: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(659)])
                    .then(
                      function () {
                        var a = [t("6D97")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(67)])
                    .then(
                      function () {
                        var a = [t("5vCj")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              epideTypenew: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(100)])
                    .then(
                      function () {
                        var a = [t("f5DQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(661)])
                    .then(
                      function () {
                        var a = [t("+lvu")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            epideBase: {
              fenji: {
                comLoad: te,
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              fenjiBjtu: {
                comLoad: te,
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              fenjiBuu: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(101)])
                    .then(
                      function () {
                        var a = [t("TPvk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              bnutw: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(12)])
                    .then(
                      function () {
                        var a = [t("jRcL")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              manager: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(662)])
                    .then(
                      function () {
                        var a = [t("u9BD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(98)])
                    .then(
                      function () {
                        var a = [t("844r")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              typeList: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(106)])
                    .then(
                      function () {
                        var a = [t("WdBG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(663)])
                    .then(
                      function () {
                        var a = [t("j0Jt")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            epideBaseucas: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(115)])
                    .then(
                      function () {
                        var a = [t("QCzq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              leader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(240)])
                    .then(
                      function () {
                        var a = [t("0y1Q")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              manager: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(666)])
                    .then(
                      function () {
                        var a = [t("lVa2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(211)])
                    .then(
                      function () {
                        var a = [t("bhx0")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              typeList: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(90)])
                    .then(
                      function () {
                        var a = [t("buPM")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(667)])
                    .then(
                      function () {
                        var a = [t("xjvp")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            epidemade: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(70)])
                    .then(
                      function () {
                        var a = [t("y/7n")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              fenjiBjtu: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(69)])
                    .then(
                      function () {
                        var a = [t("6W6g")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              fenjiBuu: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(204)])
                    .then(
                      function () {
                        var a = [t("vOpB")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              bnutw: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(167)])
                    .then(
                      function () {
                        var a = [t("V7kz")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              manager: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(644)])
                    .then(
                      function () {
                        var a = [t("Ia32")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(206)])
                    .then(
                      function () {
                        var a = [t("DCI4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              typeList: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(119)])
                    .then(
                      function () {
                        var a = [t("OzTN")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(645)])
                    .then(
                      function () {
                        var a = [t("JhRq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            epideCaustu: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(187)])
                    .then(
                      function () {
                        var a = [t("NbU0")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              leader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(255)])
                    .then(
                      function () {
                        var a = [t("8vNJ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(168)])
                    .then(
                      function () {
                        var a = [t("+UYP")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              typeList: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(223)])
                    .then(
                      function () {
                        var a = [t("tn3i")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(665)])
                    .then(
                      function () {
                        var a = [t("3Jq/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            pkuRun: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(457)])
                    .then(
                      function () {
                        var a = [t("0Wt8")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "五四青春长跑", appkey: "pkuwusi" },
              },
              auth: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(102)])
                    .then(
                      function () {
                        var a = [t("JZGE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "五四青春长跑", appkey: "pkuwusi" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js", "/js/citygat.js"],
              },
              noauth: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(239)])
                    .then(
                      function () {
                        var a = [t("xAnn")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "五四青春长跑", appkey: "pkuwusi" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js", "/js/citygat.js"],
              },
              state: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(125)])
                    .then(
                      function () {
                        var a = [t("hMxJ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "五四青春长跑", appkey: "pkuwusi" },
              },
              map: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(456)])
                    .then(
                      function () {
                        var a = [t("6JwQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "五四青春长跑", appkey: "pkuwusi" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/echarts.min.js", "/js/china.js", "/js/wcalendar.js"],
              },
            },
            epidehealth: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(264)])
                    .then(
                      function () {
                        var a = [t("ciy5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "健康码", appkey: "healthcode" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js", "/js/jweixin-1.4.0.js"],
              },
              qrcode: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(646)])
                    .then(
                      function () {
                        var a = [t("HoNH")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "健康码", appkey: "healthcode" },
                js: ["/js/qrcode.js", "/js/normal_socket.js"],
              },
              masterqrcode: {
                comLoad: he,
                metaInfo: { title: ye, appkey: "healthcode" },
                js: ["/js/qrcode.js", "/js/normal_socket.js"],
              },
              masterqrcode2: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(4)])
                    .then(
                      function () {
                        var a = [t("k8zy")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: ye, appkey: "healthcode" },
                js: ["/js/qrcode.js", "/js/normal_socket.js"],
              },
              masteripqrcode: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(648)])
                    .then(
                      function () {
                        var a = [t("Ddlv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: ye, appkey: "healthcode" },
                js: ["/js/qrcode.js", "/js/normal_socket.js"],
              },
              pkuhealthStart: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(173)])
                    .then(
                      function () {
                        var a = [t("1Q/p")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "今日楼宇出入情况统计", appkey: "" },
              },
              buaaCustom: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(651)])
                    .then(
                      function () {
                        var a = [t("p0y/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "" },
                js: ["/js/qrcode.js", "/js/normal_socket.js"],
              },
            },
            qrcodesign: {
              masterqrcode: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(437)])
                    .then(
                      function () {
                        var a = [t("TOjT")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "四川大学扫码定位系统",
                  appkey: "healthcode",
                },
              },
            },
            qrcodebuild: {
              masterqrcode: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(439)])
                    .then(
                      function () {
                        var a = [t("hH1Y")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码结果", appkey: "studyroom" },
              },
            },
            checkpoint: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(706)])
                    .then(
                      function () {
                        var a = [t("e//J")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "人数统计", appkey: "healthcode" },
              },
            },
            loanaid: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(566)])
                    .then(
                      function () {
                        var a = [t("9Ff+")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "奖惩助贷", appkey: "jczd" },
              },
            },
            qrcodeclass: {
              surplus: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(438)])
                    .then(
                      function () {
                        var a = [t("nPZ3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "自修教室余量查询", appkey: "studyroom" },
              },
            },
            epideStatebuaa: {
              instructor: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(7)])
                    .then(
                      function () {
                        var a = [t("JwUd")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              leader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(655)])
                    .then(
                      function () {
                        var a = [t("IvLD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(186)])
                    .then(
                      function () {
                        var a = [t("gU65")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(656)])
                    .then(
                      function () {
                        var a = [t("rq8O")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            epideStatebuaaStu: {
              instructor: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(172)])
                    .then(
                      function () {
                        var a = [t("BynI")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              leader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(657)])
                    .then(
                      function () {
                        var a = [t("FZj7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(242)])
                    .then(
                      function () {
                        var a = [t("TmK0")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(658)])
                    .then(
                      function () {
                        var a = [t("1fac")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            epideZju: {
              instruZju: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(3)])
                    .then(
                      function () {
                        var a = [t("s/1J")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              leaderZju: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(188)])
                    .then(
                      function () {
                        var a = [t("sswh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epitypeZju: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(216)])
                    .then(
                      function () {
                        var a = [t("w5c7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              detailsZju: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(653)])
                    .then(
                      function () {
                        var a = [t("HOql")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            epideZjuStu: {
              instruZju: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(224)])
                    .then(
                      function () {
                        var a = [t("cdxN")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              leaderZju: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(160)])
                    .then(
                      function () {
                        var a = [t("EQ+s")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epitypeZju: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(93)])
                    .then(
                      function () {
                        var a = [t("CzFf")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              detailsZju: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(654)])
                    .then(
                      function () {
                        var a = [t("ya/a")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            fudanEpideState: {
              instructor: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(13)])
                    .then(
                      function () {
                        var a = [t("MucL")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              leader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(247)])
                    .then(
                      function () {
                        var a = [t("sB5/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(262)])
                    .then(
                      function () {
                        var a = [t("XWIr")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(612)])
                    .then(
                      function () {
                        var a = [t("AsEb")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            epidemic: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(104)])
                    .then(
                      function () {
                        var a = [t("gzDC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              leader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(257)])
                    .then(
                      function () {
                        var a = [t("FhvK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(68)])
                    .then(
                      function () {
                        var a = [t("SLvg")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(643)])
                    .then(
                      function () {
                        var a = [t("u2Dr")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            epideXisu: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(9)])
                    .then(
                      function () {
                        var a = [t("/GAf")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(5)])
                    .then(
                      function () {
                        var a = [t("fsjS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(18)])
                    .then(
                      function () {
                        var a = [t("/Hko")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
              leader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(6)])
                    .then(
                      function () {
                        var a = [t("ZJS/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
            },
            epidecau: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(109)])
                    .then(
                      function () {
                        var a = [t("Id6V")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(149)])
                    .then(
                      function () {
                        var a = [t("tW2H")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(652)])
                    .then(
                      function () {
                        var a = [t("Lk4G")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
              leader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(124)])
                    .then(
                      function () {
                        var a = [t("XpSS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
            },
            epideAll: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(9)])
                    .then(
                      function () {
                        var a = [t("/GAf")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(5)])
                    .then(
                      function () {
                        var a = [t("fsjS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(18)])
                    .then(
                      function () {
                        var a = [t("/Hko")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
              leader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(6)])
                    .then(
                      function () {
                        var a = [t("ZJS/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
            },
            dailyReport: {
              reportAll: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(27)])
                    .then(
                      function () {
                        var a = [t("J0UE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "上报", appkey: "ncov" },
              },
              statistics: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(171)])
                    .then(
                      function () {
                        var a = [t("OA5c")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/echarts.min.js", "/js/china.js", "/js/wcalendar.js"],
              },
              applyAdmin: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(41)])
                    .then(
                      function () {
                        var a = [t("N+Yh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "申请管理员", appkey: "ncov" },
                js: [],
              },
            },
            video: {
              list: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(192)])
                    .then(
                      function () {
                        var a = [t("2WoN")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园视频", appkey: "video" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/swiper.min.js", "/js/mescroll.min.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(324)])
                    .then(
                      function () {
                        var a = [t("fqbS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园视频", appkey: "video" },
              },
            },
            photowall: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(460)])
                    .then(
                      function () {
                        var a = [t("0XQm")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "照片墙", appkey: "photo" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/mescroll.min.js",
                  "/js/modernizr.custom.js",
                  "/js/masonry.pkgd.min.js",
                  "/js/imagesloaded.js",
                  "/js/classie.js",
                  "/js/AnimOnScroll.js",
                ],
              },
              myPhotos: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(459)])
                    .then(
                      function () {
                        var a = [t("v1lG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "照片墙", appkey: "photo" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/mescroll.min.js",
                  "/js/modernizr.custom.js",
                  "/js/masonry.pkgd.min.js",
                  "/js/imagesloaded.js",
                  "/js/classie.js",
                  "/js/AnimOnScroll.js",
                ],
              },
              uploadPhoto: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(458)])
                    .then(
                      function () {
                        var a = [t("BvU9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "照片墙", appkey: "photo" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
            },
            photoCollection: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(25)])
                    .then(
                      function () {
                        var a = [t("SxJF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "照片采集", appkey: "reviewpic" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
            },
            score: {
              index: {
                comLoad: ze.scoreIndex,
                metaInfo: { title: "成绩查询", appkey: "score" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
            },
            evaStat: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(641)])
                    .then(
                      function () {
                        var a = [t("OeAF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "评教统计", appkey: "cnuevaluate" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
            },
            recharge: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(436)])
                    .then(
                      function () {
                        var a = [t("//az")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通充值", appkey: "chargecard" },
              },
            },
            personalAgenda: {
              index: {
                comLoad: ze.personalAgendaIndex,
                metaInfo: { title: "个人日程", appkey: "datebook" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              pcindex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(16)])
                    .then(
                      function () {
                        var a = [t("PxNv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "个人日程", appkey: "datebook" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              list: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(462)])
                    .then(
                      function () {
                        var a = [t("fity")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "个人日程", appkey: "datebook" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              add: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(463)])
                    .then(
                      function () {
                        var a = [t("eIh2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "个人日程", appkey: "datebook" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            agendaManage: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(64)])
                    .then(
                      function () {
                        var a = [t("Gl2D")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "日程管理", appkey: "schedule" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            universalForm: {
              index: {
                comLoad: ze.universalForm,
                metaInfo: { title: "加载中", appkey: "excel" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            form: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(630)])
                    .then(
                      function () {
                        var a = [t("u6dm")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "万能表单", appkey: "form" },
              },
              formtemplat: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(38)])
                    .then(
                      function () {
                        var a = [t("37SF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "form" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(633)])
                    .then(
                      function () {
                        var a = [t("8gzi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "form" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
              detail2: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(632)])
                    .then(
                      function () {
                        var a = [t("k0GP")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "form" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
              detail3: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(631)])
                    .then(
                      function () {
                        var a = [t("OhWY")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "form" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
            },
            formMuc: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(634)])
                    .then(
                      function () {
                        var a = [t("DPJE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "万能表单", appkey: "form" },
              },
              formtemplat: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(39)])
                    .then(
                      function () {
                        var a = [t("KbqC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "form" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(637)])
                    .then(
                      function () {
                        var a = [t("brcC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
              detail2: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(636)])
                    .then(
                      function () {
                        var a = [t("OeaX")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
              detail3: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(635)])
                    .then(
                      function () {
                        var a = [t("1+P0")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
            },
            formruc: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(626)])
                    .then(
                      function () {
                        var a = [t("LwBJ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "万能表单", appkey: "formruc" },
              },
              formtemplat: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(37)])
                    .then(
                      function () {
                        var a = [t("DpnC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "formruc" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
              formpage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(265)])
                    .then(
                      function () {
                        var a = [t("NOJi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "捐赠证书" },
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(629)])
                    .then(
                      function () {
                        var a = [t("TJam")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
              detail2: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(628)])
                    .then(
                      function () {
                        var a = [t("w1Z4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
              detail3: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(627)])
                    .then(
                      function () {
                        var a = [t("s161")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                ],
              },
            },
            freeclassroom: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(620)])
                    .then(
                      function () {
                        var a = [t("0ymV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "空闲教室", appkey: "classroom" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
            },
            lottery: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(565)])
                    .then(
                      function () {
                        var a = [t("Q4er")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "lottery" },
              },
            },
            commonFile: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(705)])
                    .then(
                      function () {
                        var a = [t("ZAO8")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "file" },
              },
            },
            examManage: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(640)])
                    .then(
                      function () {
                        var a = [t("GjkF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "考试安排", appkey: "exam" },
              },
            },
            fudanexamManage: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(607)])
                    .then(
                      function () {
                        var a = [t("M61D")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "考试安排", appkey: "fudanexam" },
              },
            },
            smlogin: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(372)])
                    .then(
                      function () {
                        var a = [t("pU7t")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码登录" },
              },
              success: {
                comLoad: function (e) {
                  t.e(371)
                    .then(
                      function () {
                        var a = [t("F6lG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码登录" },
              },
              cancel: {
                comLoad: function (e) {
                  t.e(373)
                    .then(
                      function () {
                        var a = [t("gPy8")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码登录" },
              },
            },
            smloginV2: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(375)])
                    .then(
                      function () {
                        var a = [t("Z+qB")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码登录" },
              },
              success: {
                comLoad: function (e) {
                  t.e(374)
                    .then(
                      function () {
                        var a = [t("zjjG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码登录" },
              },
              cancel: {
                comLoad: function (e) {
                  t.e(376)
                    .then(
                      function () {
                        var a = [t("L40u")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码登录" },
              },
            },
            meeting: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(260)])
                    .then(
                      function () {
                        var a = [t("nUFK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "会议记录", appkey: "meeting" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/wcalendar.js", "/js/mescroll.min.js"],
              },
            },
            academic: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(143)])
                    .then(
                      function () {
                        var a = [t("6iTx")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "学术讲座", appkey: "lecture" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/wcalendar.js", "/js/mescroll.min.js"],
              },
            },
            topic: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(151)])
                    .then(
                      function () {
                        var a = [t("NWWz")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "topic" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/mescroll.min.js",
                ],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(344)])
                    .then(
                      function () {
                        var a = [t("Ztx4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "话题", appkey: "topic" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/mescroll.min.js",
                ],
              },
              postMsg: {
                comLoad: function (e) {
                  t.e(0)
                    .then(
                      function () {
                        var a = [t("DRQu")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "话题" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
            },
            welcome: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(313)])
                    .then(
                      function () {
                        var a = [t("BJPe")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "迎新环节办理查询", appkey: "signin" },
              },
            },
            leave: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(572)])
                    .then(
                      function () {
                        var a = [t("ePNC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "离校环节办理查询", appkey: "signout" },
              },
            },
            welcomeData: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(314)])
                    .then(
                      function () {
                        var a = [t("Kabl")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "迎新数据统计", appkey: "signinstat" },
                js: ["/js/echarts.min.js"],
              },
            },
            backschool: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(743)])
                    .then(
                      function () {
                        var a = [t("8Z5L")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "返校数据统计", appkey: "signbackstat" },
                js: ["/js/echarts.min.js"],
              },
            },
            leaveData: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(574)])
                    .then(
                      function () {
                        var a = [t("2wm9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "离校数据统计", appkey: "signoutstat" },
                js: ["/js/echarts.min.js", "/js/timeselect.js"],
                css: ["/css/style/common/iosselect.css"],
              },
            },
            leaveDatabuaa: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(573)])
                    .then(
                      function () {
                        var a = [t("nsYH")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "离校数据统计", appkey: "buaaleave" },
                js: ["/js/echarts.min.js", "/js/timeselect.js"],
                css: ["/css/style/common/iosselect.css"],
              },
            },
            cost: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(701)])
                    .then(
                      function () {
                        var a = [t("l77y")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "学生缴费查询", appkey: "payment" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
            },
            microStation: {
              temindex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(78)])
                    .then(
                      function () {
                        var a = [t("Z8lg")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "微站", appkey: "microsite" },
              },
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(556)])
                    .then(
                      function () {
                        var a = [t("cYdz")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "微站", appkey: "microsite" },
              },
              list: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(555)])
                    .then(
                      function () {
                        var a = [t("SQGV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "微站", appkey: "microsite" },
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(557)])
                    .then(
                      function () {
                        var a = [t("qC4p")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "微站", appkey: "microsite" },
              },
            },
            matrix: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(563)])
                    .then(
                      function () {
                        var a = [t("1KNo")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "matrix" },
              },
            },
            project: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(91)])
                    .then(
                      function () {
                        var a = [t("XGg5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "科研项目", appkey: "scienceproject" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            personalproject: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(236)])
                    .then(
                      function () {
                        var a = [t("UESN")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "个人科研项目", appkey: "personsciproject" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            paper: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(475)])
                    .then(
                      function () {
                        var a = [t("Lc6u")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "科研论文", appkey: "science" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            personalpaper: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(461)])
                    .then(
                      function () {
                        var a = [t("3R3+")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "个人科研论文", appkey: "personsci" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            paperWork: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(476)])
                    .then(
                      function () {
                        var a = [t("gSeB")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "科研著作", appkey: "researchpapers" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            schedule: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(401)])
                    .then(
                      function () {
                        var a = [t("1XJr")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "课表", appkey: "timetable" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
            },
            teaschedule: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(361)])
                    .then(
                      function () {
                        var a = [t("bPIB")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "教师课表", appkey: "jskb" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
            },
            weekschedule: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(315)])
                    .then(
                      function () {
                        var a = [t("VsvO")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "课表", appkey: "timetable" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
              fudanindex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(316)])
                    .then(
                      function () {
                        var a = [t("ReVa")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "学生课表", appkey: "fudankb" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
            },
            teaweekschedule: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(360)])
                    .then(
                      function () {
                        var a = [t("KM8L")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "教师课表", appkey: "jskb" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
            },
            learningProcess: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(80)])
                    .then(
                      function () {
                        var a = [t("abTK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "学习进度", appkey: "xxjd" },
                js: ["/js/echarts.min.js"],
              },
            },
            cnulearningProcess: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(83)])
                    .then(
                      function () {
                        var a = [t("lZuG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "学习进度", appkey: "cnuxxjd" },
                js: ["/js/echarts.min.js"],
              },
            },
            network: {
              change: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(526)])
                    .then(
                      function () {
                        var a = [t("VGgZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "修改密码", appkey: "password" },
              },
              ccmuchange: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(527)])
                    .then(
                      function () {
                        var a = [t("pgY+")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "修改密码", appkey: "password" },
              },
              nochange: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(524)])
                    .then(
                      function () {
                        var a = [t("4of3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "修改密码", appkey: "passwd" },
              },
              device: {
                comLoad: ze.networkDevice,
                metaInfo: { title: "网络在线终端查询", appkey: "netclient" },
              },
              history: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(24)])
                    .then(
                      function () {
                        var a = [t("FB/o")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网费历史记录", appkey: "feehis" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/iosselect.js", "/js/mescroll.min.js"],
              },
              result: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(23)])
                    .then(
                      function () {
                        var a = [t("eBUQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网络查询", appkey: "netfees" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            culrSetpass: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(680)])
                    .then(
                      function () {
                        var a = [t("nQIt")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "修改密码", appkey: "passwd" },
              },
            },
            library: {
              mine: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(568)])
                    .then(
                      function () {
                        var a = [t("Gj+t")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "我的图书馆", appkey: "library" },
              },
              history: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(79)])
                    .then(
                      function () {
                        var a = [t("bJi+")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "图书借阅查询", appkey: "borrow" },
              },
              collection: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(569)])
                    .then(
                      function () {
                        var a = [t("cMJZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "馆藏图书", appkey: "book" },
              },
              order: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(567)])
                    .then(
                      function () {
                        var a = [t("NNI5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "馆藏图书查询（预约）" },
              },
            },
            found: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(624)])
                    .then(
                      function () {
                        var a = [t("8z/7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通招领", appkey: "cardlost" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(625)])
                    .then(
                      function () {
                        var a = [t("SdoZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通招领", appkey: "cardlost" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
              publish: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(623)])
                    .then(
                      function () {
                        var a = [t("/4g1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通招领", appkey: "cardlost" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/timeselect.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/wcalendar.js",
                  "https://res.wx.qq.com/open/js/jweixin-1.2.0.js",
                  "/js/jssdk.js",
                ],
              },
            },
            runTeam: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(417)])
                    .then(
                      function () {
                        var a = [t("zXjI")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通跑团", appkey: "buptpt" },
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(420)])
                    .then(
                      function () {
                        var a = [t("RDWc")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通跑团", appkey: "buptpt" },
              },
              edit: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(419)])
                    .then(
                      function () {
                        var a = [t("tcDk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通跑团", appkey: "buptpt" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                ],
              },
              census: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(422)])
                    .then(
                      function () {
                        var a = [t("OKEw")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通跑团", appkey: "buptpt" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/switchery.min.css",
                ],
                js: ["/js/timeselect.js", "/js/switchery.min.js"],
              },
              countDetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(421)])
                    .then(
                      function () {
                        var a = [t("kjVm")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通跑团", appkey: "buptpt" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
              task: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(414)])
                    .then(
                      function () {
                        var a = [t("SR89")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通跑团", appkey: "buptpt" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/switchery.min.css",
                ],
                js: ["/js/switchery.min.js", "/js/timeselect.js"],
              },
              information: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(416)])
                    .then(
                      function () {
                        var a = [t("Nbno")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通跑团", appkey: "buptpt" },
              },
              group: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(418)])
                    .then(
                      function () {
                        var a = [t("8SlT")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通跑团", appkey: "buptpt" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/switchery.min.css",
                ],
                js: ["/js/timeselect.js", "/js/switchery.min.js"],
              },
              record: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(415)])
                    .then(
                      function () {
                        var a = [t("hRDh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通跑团", appkey: "buptpt" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/switchery.min.css",
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/timeselect.js",
                  "/js/switchery.min.js",
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
            },
            runTeamstu: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(408)])
                    .then(
                      function () {
                        var a = [t("q2/B")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通学生跑团", appkey: "buptstpt" },
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(411)])
                    .then(
                      function () {
                        var a = [t("Cu77")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通学生跑团", appkey: "buptstpt" },
              },
              edit: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(410)])
                    .then(
                      function () {
                        var a = [t("imrk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通学生跑团", appkey: "buptstpt" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                ],
              },
              census: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(413)])
                    .then(
                      function () {
                        var a = [t("h1Pu")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通学生跑团", appkey: "buptstpt" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/switchery.min.css",
                ],
                js: ["/js/timeselect.js", "/js/switchery.min.js"],
              },
              countDetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(412)])
                    .then(
                      function () {
                        var a = [t("+yvF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通学生跑团", appkey: "buptstpt" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
              task: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(405)])
                    .then(
                      function () {
                        var a = [t("VyAA")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通学生跑团", appkey: "buptstpt" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/switchery.min.css",
                ],
                js: ["/js/switchery.min.js", "/js/timeselect.js"],
              },
              information: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(407)])
                    .then(
                      function () {
                        var a = [t("wvWv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通学生跑团", appkey: "buptstpt" },
              },
              group: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(409)])
                    .then(
                      function () {
                        var a = [t("tp+t")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通学生跑团", appkey: "buptstpt" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/switchery.min.css",
                ],
                js: ["/js/timeselect.js", "/js/switchery.min.js"],
              },
              record: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(406)])
                    .then(
                      function () {
                        var a = [t("w6hy")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "不普通学生跑团", appkey: "buptstpt" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/switchery.min.css",
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/timeselect.js",
                  "/js/switchery.min.js",
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
            },
            ipass: {
              balance: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(576)])
                    .then(
                      function () {
                        var a = [t("AxJP")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通余额", appkey: "ecard" },
              },
              loss: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(575)])
                    .then(
                      function () {
                        var a = [t("qsZL")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通挂失", appkey: "ecard" },
              },
            },
            ipasscd: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(577)])
                    .then(
                      function () {
                        var a = [t("Vrh1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通余额", appkey: "uestcye" },
                js: ["/js/echarts.min.js"],
              },
            },
            schoolAtlas: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(400)])
                    .then(
                      function () {
                        var a = [t("pVLP")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园图集", appkey: "album" },
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(270)])
                    .then(
                      function () {
                        var a = [t("Nms6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园图集", appkey: "album" },
                css: [
                  "/css/switchery.min.css",
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/switchery.min.js",
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
              detail2: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(269)])
                    .then(
                      function () {
                        var a = [t("EmvG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园图集", appkey: "album" },
                css: [
                  "/css/switchery.min.css",
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/switchery.min.js",
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
            },
            pay: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(472)])
                    .then(
                      function () {
                        var a = [t("Kk87")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "缴费大厅", appkey: "paymenthall" },
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(158)])
                    .then(
                      function () {
                        var a = [t("92wS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "缴费大厅", appkey: "paymenthall" },
              },
            },
            vote: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(321)])
                    .then(
                      function () {
                        var a = [t("iJM5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "vote" },
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(97)])
                    .then(
                      function () {
                        var a = [t("HIuS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "vote" },
              },
              buptdetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(322)])
                    .then(
                      function () {
                        var a = [t("5jLZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "vote" },
              },
              result: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(318)])
                    .then(
                      function () {
                        var a = [t("ke09")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "vote" },
              },
              myResult: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(319)])
                    .then(
                      function () {
                        var a = [t("goW5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "vote" },
              },
              msg: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(320)])
                    .then(
                      function () {
                        var a = [t("WHF6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "提交信息", appkey: "vote" },
              },
            },
            mapGuide: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(178)])
                    .then(
                      function () {
                        var a = [t("UGmD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "地图导览", appkey: "map_guide" },
                css: ["/css/style/common/swiper.min.css"],
                js: [
                  "https://webapi.amap.com/maps?v=1.4.12&key=b5996b3e6fd879659e8aba7afbb29620&plugin=AMap.ToolBar,AMap.Driving,AMap.Autocomplete",
                  "https://webapi.amap.com/ui/1.0/main.js?v=1.0.11",
                  "/js/swiper.min.js",
                ],
              },
              fudan: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(92)])
                    .then(
                      function () {
                        var a = [t("0xgw")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "地图导览", appkey: "map_guide" },
                css: ["/css/style/common/swiper.min.css"],
                js: [
                  "https://webapi.amap.com/maps?v=1.4.12&key=b5996b3e6fd879659e8aba7afbb29620&plugin=AMap.ToolBar,AMap.Driving,AMap.Autocomplete,AMap.ControlBar",
                  "https://webapi.amap.com/ui/1.0/main.js?v=1.0.11",
                  "/js/swiper.min.js",
                ],
              },
            },
            idCard: {
              history: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(250)])
                    .then(
                      function () {
                        var a = [t("Brc4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: pe, appkey: "cardhis" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/wcalendar.js", "/js/mescroll.min.js"],
              },
              historyUestc: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(193)])
                    .then(
                      function () {
                        var a = [t("qerG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "电子卡交易记录", appkey: "cardhis" },
              },
            },
            lostAndFound: {
              pcindex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(10)])
                    .then(
                      function () {
                        var a = [t("xfUR")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "失物招领", appkey: "lost" },
                css: [
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/swiper.min.css",
                ],
                js: ["/js/mescroll.min.js", "/js/swiper.min.js"],
              },
              pcdetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(275)])
                    .then(
                      function () {
                        var a = [t("Vd6P")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "失物招领", appkey: "lost" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
              pcpublish: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(274)])
                    .then(
                      function () {
                        var a = [t("Uy1x")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "失物招领", appkey: "lost" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                ],
              },
              index: {
                comLoad: ze.lostAndFoundIndex,
                metaInfo: { title: "失物招领", appkey: "lost" },
                css: [
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/swiper.min.css",
                ],
                js: ["/js/mescroll.min.js", "/js/swiper.min.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(276)])
                    .then(
                      function () {
                        var a = [t("rH8a")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "失物招领", appkey: "lost" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
              publish: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(273)])
                    .then(
                      function () {
                        var a = [t("SauC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "失物招领", appkey: "lost" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                ],
              },
            },
            fleaMartket: {
              index: {
                comLoad: ze.fleaMartketIndex,
                metaInfo: { title: "跳蚤市场", appkey: "fleamarket" },
                css: [
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: [
                  "/js/mescroll.min.js",
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                ],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(282)])
                    .then(
                      function () {
                        var a = [t("3gaM")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "跳蚤市场", appkey: "fleamarket" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
              pcindex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(17)])
                    .then(
                      function () {
                        var a = [t("vFZ/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "跳蚤市场", appkey: "fleamarket" },
                css: [
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: [
                  "/js/mescroll.min.js",
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                ],
              },
              pcdetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(281)])
                    .then(
                      function () {
                        var a = [t("m39I")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "跳蚤市场", appkey: "fleamarket" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
              pcpublish: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(280)])
                    .then(
                      function () {
                        var a = [t("CCyg")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "跳蚤市场", appkey: "fleamarket" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/iosselect.js",
                  "/js/wcalendar.js",
                ],
              },
              publish: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(279)])
                    .then(
                      function () {
                        var a = [t("sno7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "跳蚤市场", appkey: "fleamarket" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/iosselect.js",
                  "/js/wcalendar.js",
                ],
              },
            },
            answer: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(754)])
                    .then(
                      function () {
                        var a = [t("EiY1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "answer" },
                js: ["/js/echarts.min.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(214)])
                    .then(
                      function () {
                        var a = [t("TVXt")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "answer" },
              },
              history: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(753)])
                    .then(
                      function () {
                        var a = [t("iQzF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "answer" },
              },
              mes: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(752)])
                    .then(
                      function () {
                        var a = [t("vPHZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "提交信息", appkey: "answer" },
              },
            },
            repair: {
              login: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(430)])
                    .then(
                      function () {
                        var a = [t("t5S7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "维修人员登录", appkey: "repair" },
              },
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(433)])
                    .then(
                      function () {
                        var a = [t("AdVS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "repair" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                ],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(434)])
                    .then(
                      function () {
                        var a = [t("fCD3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "repair" },
              },
              back: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(435)])
                    .then(
                      function () {
                        var a = [t("Rd7L")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "repair" },
              },
              repairman: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(432)])
                    .then(
                      function () {
                        var a = [t("7QWE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "repair" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/timeselect.js",
                  "/js/wcalendar.js",
                ],
              },
              mandetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(431)])
                    .then(
                      function () {
                        var a = [t("5JG0")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "repair" },
              },
              sendorder: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(429)])
                    .then(
                      function () {
                        var a = [t("Qavx")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "派单员", appkey: "repair" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              orderdetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(428)])
                    .then(
                      function () {
                        var a = [t("TZOK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "派单详情", appkey: "repair" },
              },
            },
            file: {
              index: {
                comLoad: function (e) {
                  t.e(639)
                    .then(
                      function () {
                        var a = [t("9te5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "常用文件", appkey: "file" },
              },
            },
            virtualCard: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(323)])
                    .then(
                      function () {
                        var a = [t("J4/z")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "微信校园卡统计" },
                js: ["/js/echarts.min.js"],
              },
            },
            dataStatistics: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(678)])
                    .then(
                      function () {
                        var a = [t("G6op")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "数据统计" },
                js: ["/js/echarts.min.js"],
              },
            },
            upcdataStatistics: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(331)])
                    .then(
                      function () {
                        var a = [t("2kuk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "数据统计", appkey: "upcdatastat" },
                js: ["/js/echarts.min.js"],
              },
            },
            schoolMap: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(398)])
                    .then(
                      function () {
                        var a = [t("d5xc")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园地图", appkey: "map" },
              },
              map: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(397)])
                    .then(
                      function () {
                        var a = [t("XACw")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园地图", appkey: "map" },
              },
              model: {
                comLoad: ze.schoolMapModel,
                metaInfo: { title: "校园地图", appkey: "map_guide" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/photoswipe.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "https://webapi.amap.com/maps?v=1.4.12&key=b5996b3e6fd879659e8aba7afbb29620&plugin=AMap.ToolBar,AMap.Driving,AMap.Autocomplete,AMap.ControlBar",
                  "https://webapi.amap.com/ui/1.0/main.js?v=1.0.11",
                  "/js/swiper.min.js",
                  "https://res.wx.qq.com/open/js/jweixin-1.3.2.js",
                  "/js/common.js",
                ],
              },
              iphone: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(2)])
                    .then(
                      function () {
                        var a = [t("JHYv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园地图", appkey: "map_guide" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/photoswipe.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "https://webapi.amap.com/maps?v=1.4.12&key=b5996b3e6fd879659e8aba7afbb29620&plugin=AMap.ToolBar,AMap.Driving,AMap.Autocomplete,AMap.ControlBar",
                  "https://webapi.amap.com/ui/1.0/main.js?v=1.0.11",
                  "/js/swiper.min.js",
                  "https://res.wx.qq.com/open/js/jweixin-1.3.2.js",
                  "/js/common.js",
                ],
              },
            },
            asset: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(746)])
                    .then(
                      function () {
                        var a = [t("8RUl")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "资产首页", appkey: "asset" },
                js: ["/js/echarts.min.js"],
              },
              list: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(745)])
                    .then(
                      function () {
                        var a = [t("17Ss")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "资产列表", appkey: "asset" },
              },
              search: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(744)])
                    .then(
                      function () {
                        var a = [t("0MP4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "资产服务", appkey: "asset" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            guide: {
              index: {
                comLoad: ze.guideIndexCom,
                metaInfo: { title: "加载中", appkey: "guide" },
                css: ze.css,
                js: ze.js,
              },
              detail: {
                comLoad: ze.guideDetailCom,
                metaInfo: { title: "加载中", appkey: "guide" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/swiper.min.js",
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                ],
              },
            },
            shuttleBus: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(380)])
                    .then(
                      function () {
                        var a = [t("/PI3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "regularbus" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/swiper.min.css",
                ],
                js: ["/js/timeselect.js", "/js/swiper.min.js"],
              },
              fudanIndex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(381)])
                    .then(
                      function () {
                        var a = [t("xuTF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校车时刻表", appkey: "fudanbus" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/swiper.min.css",
                ],
                js: ["/js/timeselect.js", "/js/swiper.min.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(382)])
                    .then(
                      function () {
                        var a = [t("+rpF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "班车详情", appkey: "regularbus" },
                css: ["https://cache.amap.com/lbs/static/main1119.css"],
                js: [
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Geocoder",
                ],
              },
            },
            fudan: {
              bulu: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(609)])
                    .then(
                      function () {
                        var a = [t("OQC8")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "学生信息核准及补录" },
              },
            },
            myLittlePurse: {
              myLittlePurseindex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(550)])
                    .then(
                      function () {
                        var a = [t("kXIL")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "微信卡钱包充值", appkey: "pay" },
              },
              myLittlePurserecord: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(549)])
                    .then(
                      function () {
                        var a = [t("Njg2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "交易记录", appkey: "pay" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              myLittlePurserecordDetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(548)])
                    .then(
                      function () {
                        var a = [t("1OWY")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "交易记录", appkey: "pay" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            buceaElectric: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(723)])
                    .then(
                      function () {
                        var a = [t("OCQn")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "电费缴纳", appkey: "bucearecharge" },
              },
              indexx: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(722)])
                    .then(
                      function () {
                        var a = [t("UfY2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "电费缴纳", appkey: "bucearecharge" },
              },
              buceaRecord: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(208)])
                    .then(
                      function () {
                        var a = [t("+s2H")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "电费缴纳", appkey: "bucearecharge" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: ["/js/timeselect.js", "/js/wcalendar.js"],
              },
            },
            buceaMessage: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(721)])
                    .then(
                      function () {
                        var a = [t("PvU2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消息", appkey: "buceamessage" },
              },
            },
            xidianmembershipFees: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(293)])
                    .then(
                      function () {
                        var a = [t("QWjc")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "党费查询", appkey: "xddf" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/timeselect.js", "/js/mescroll.min.js"],
              },
              year: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(292)])
                    .then(
                      function () {
                        var a = [t("bRsW")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "党费查询", appkey: "xddf" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            fudanGeneralEnglish: {
              fudanGeneralEnglish: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(155)])
                    .then(
                      function () {
                        var a = [t("ShWI")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "公共英语课上机考",
                  appkey: "fudancomputer",
                },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
            },
            upcApproval: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(339)])
                    .then(
                      function () {
                        var a = [t("3IRh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "国际（港澳台）综合管理系统",
                  appkey: "upcprocess",
                },
              },
              upcdetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(333)])
                    .then(
                      function () {
                        var a = [t("1WVc")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "国际（港澳台）综合管理系统",
                  appkey: "upcprocess",
                },
              },
              upcTypeOne: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(337)])
                    .then(
                      function () {
                        var a = [t("bFE1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "国际（港澳台）综合管理系统",
                  appkey: "upcprocess",
                },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js", "/js/xml2json.min.js"],
              },
              userdetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(332)])
                    .then(
                      function () {
                        var a = [t("jdii")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "团组信息详情", appkey: "upcprocess" },
              },
              upcTypeTwo: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(335)])
                    .then(
                      function () {
                        var a = [t("C6nY")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "国际（港澳台）综合管理系统",
                  appkey: "upcprocess",
                },
              },
              trialUserdetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(338)])
                    .then(
                      function () {
                        var a = [t("+RLh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "政审人员详细信息", appkey: "upcprocess" },
              },
              upcTypeThree: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(336)])
                    .then(
                      function () {
                        var a = [t("RB+F")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "国际（港澳台）综合管理系统",
                  appkey: "upcprocess",
                },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js", "/js/xml2json.min.js"],
              },
              upcUserProc: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(334)])
                    .then(
                      function () {
                        var a = [t("ackq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "国际（港澳台）综合管理系统-申报状态查询",
                  appkey: "upcprocess",
                },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            carLicense: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(719)])
                    .then(
                      function () {
                        var a = [t("oxwo")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "车证申请" },
              },
              lookpage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(718)])
                    .then(
                      function () {
                        var a = [t("1ApO")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "车证申请" },
              },
              savepage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(26)])
                    .then(
                      function () {
                        var a = [t("HG1F")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "车证申请" },
              },
            },
            generalApp: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(599)])
                    .then(
                      function () {
                        var a = [t("fYh9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "appointment" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              history: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(600)])
                    .then(
                      function () {
                        var a = [t("aIV6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "记录", appkey: "appointment" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(234)])
                    .then(
                      function () {
                        var a = [t("2jM9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "appointment" },
              },
              detailsmuc: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(134)])
                    .then(
                      function () {
                        var a = [t("7nH9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "appointment" },
              },
              appointAdmin: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(602)])
                    .then(
                      function () {
                        var a = [t("5baK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "我的管理", appkey: "appointment" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
              AdminDetails: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(81)])
                    .then(
                      function () {
                        var a = [t("1KXc")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "appointment" },
                css: ["/css/style/common/iosselect.css"],
                js: ["js/timeselect.js"],
              },
              myAppointment: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(597)])
                    .then(
                      function () {
                        var a = [t("hZ+y")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "我的预约", appkey: "appointment" },
              },
              space: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(594)])
                    .then(
                      function () {
                        var a = [t("4wQm")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "appointment" },
              },
              approval: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(601)])
                    .then(
                      function () {
                        var a = [t("0jo4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "审批", appkey: "appointment" },
              },
              appoint: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(603)])
                    .then(
                      function () {
                        var a = [t("Zv8/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "预约", appkey: "appointment" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              message: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(598)])
                    .then(
                      function () {
                        var a = [t("DDDo")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "提交信息", appkey: "appointment" },
              },
              signmanage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(595)])
                    .then(
                      function () {
                        var a = [t("DdlV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "appointment" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/iosselect.js",
                  "/js/mescroll.min.js",
                  "/js/jweixin-1.4.0.js",
                ],
              },
              signlog: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(596)])
                    .then(
                      function () {
                        var a = [t("JhOk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "appointment" },
              },
            },
            partyCloud: {
              index: {
                comLoad: function (e) {
                  t.e(473)
                    .then(
                      function () {
                        var a = [t("h6y6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "党建云平台" },
              },
              meeting: {
                comLoad: function (e) {
                  t.e(75)
                    .then(
                      function () {
                        var a = [t("k6TZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "党代会" },
              },
              duesQuery: {
                comLoad: function (e) {
                  t.e(474)
                    .then(
                      function () {
                        var a = [t("tLy2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "党费查询" },
              },
            },
            agenda: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(55)])
                    .then(
                      function () {
                        var a = [t("kbNq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "我的日程", appkey: "myschedule" },
              },
              addAgenda: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(762)])
                    .then(
                      function () {
                        var a = [t("XiwN")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "添加日程", appkey: "myschedule" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              addClass: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(757)])
                    .then(
                      function () {
                        var a = [t("m7fH")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "创建分类", appkey: "myschedule" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              classManage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(760)])
                    .then(
                      function () {
                        var a = [t("fCR5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "分组管理", appkey: "myschedule" },
              },
              classManageDetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(759)])
                    .then(
                      function () {
                        var a = [t("+uVe")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "分组详情", appkey: "myschedule" },
              },
              createGroup: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(758)])
                    .then(
                      function () {
                        var a = [t("DU1q")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "创建分组", appkey: "myschedule" },
              },
              agendaRemind: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(756)])
                    .then(
                      function () {
                        var a = [t("1cSp")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "日程提醒", appkey: "myschedule" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              classDetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(761)])
                    .then(
                      function () {
                        var a = [t("NcJa")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "分类详情", appkey: "myschedule" },
              },
            },
            bnuCertification: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(737)])
                    .then(
                      function () {
                        var a = [t("t5bh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "二次认证", appkey: "a_bnu" },
              },
            },
            schoolHistory: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(399)])
                    .then(
                      function () {
                        var a = [t("LTVa")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校史", appkey: "history" },
              },
            },
            onecardSolu: {
              index: {
                comLoad: ze.onecardSoluIndex,
                metaInfo: { title: fe, appkey: "datalook" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              reportLoss: {
                comLoad: ze.onecardSoluReportLoss,
                metaInfo: { title: "一卡通挂失", appkey: "datalook" },
              },
              cardFlowing: {
                comLoad: ze.onecardSoluCardFlowing,
                metaInfo: { title: "一卡通交易记录", appkey: "datalook" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/echarts.min.js",
                  "/js/timeselect.js",
                  "/js/mescroll.min.js",
                ],
              },
              cardFlowingRuc: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(493)])
                    .then(
                      function () {
                        var a = [t("FNoi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通交易记录", appkey: "datalook" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/echarts.min.js",
                  "/js/timeselect.js",
                  "/js/mescroll.min.js",
                ],
              },
            },
            salaryDetails: {
              index: {
                comLoad: we,
                metaInfo: { title: "工资查询", appkey: "gzv1" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/echarts.min.js", "/js/timeselect.js"],
              },
              indexV2: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(403)])
                    .then(
                      function () {
                        var a = [t("cHy0")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "工资查询", appkey: "gzv1" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/echarts.min.js", "/js/timeselect.js"],
              },
            },
            wageEnquiry: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(317)])
                    .then(
                      function () {
                        var a = [t("LGym")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "工资查询", appkey: "cfaugz" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/echarts.min.js", "/js/timeselect.js"],
              },
            },
            rssSubscription: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(427)])
                    .then(
                      function () {
                        var a = [t("Wqyn")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "RSS站点消息", appkey: "rss" },
              },
              rssinfo: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(426)])
                    .then(
                      function () {
                        var a = [t("OZcK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "rss" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            classRoomQuery: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(156)])
                    .then(
                      function () {
                        var a = [t("NZzu")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "空闲教室查询", appkey: "buaafreeclass" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/jweixin-1.3.2.js", "/js/timeselect.js"],
              },
            },
            shenLan: {
              flowMsg: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(386)])
                    .then(
                      function () {
                        var a = [t("Jbe/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "账户信息", appkey: "srun" },
              },
              inDetails: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(385)])
                    .then(
                      function () {
                        var a = [t("o8/l")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "上网明细", appkey: "srun" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              inDetailsSearch: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(384)])
                    .then(
                      function () {
                        var a = [t("P15U")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "上网明细", appkey: "srun" },
                css: [
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/mescroll.min.js", "/js/timeselect.js"],
              },
              changePwd: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(388)])
                    .then(
                      function () {
                        var a = [t("cwzk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "修改密码", appkey: "srun" },
              },
              changeNoPwd: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(267)])
                    .then(
                      function () {
                        var a = [t("T/5w")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "修改密码", appkey: "srun" },
              },
              actiAccount: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(389)])
                    .then(
                      function () {
                        var a = [t("8sie")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "激活账户", appkey: "srun" },
              },
              onEquipment: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(383)])
                    .then(
                      function () {
                        var a = [t("zX5N")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "在线设备", appkey: "srun" },
              },
              chargeRecord: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(387)])
                    .then(
                      function () {
                        var a = [t("dJM2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "充值记录", appkey: "srun" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              accountInformation: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(390)])
                    .then(
                      function () {
                        var a = [t("/ZKB")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "srun" },
              },
            },
            applicationSquare: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(747)])
                    .then(
                      function () {
                        var a = [t("icjE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "appsquare" },
              },
            },
            hotissue: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(579)])
                    .then(
                      function () {
                        var a = [t("gjDC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "热点问题", appkey: "hotissue" },
              },
              list: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(578)])
                    .then(
                      function () {
                        var a = [t("MJe3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "热点问题", appkey: "hotissue" },
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(580)])
                    .then(
                      function () {
                        var a = [t("3deA")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "热点问题", appkey: "hotissue" },
              },
            },
            drcom: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(672)])
                    .then(
                      function () {
                        var a = [t("PSCO")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "上网认证", appkey: "drcom" },
              },
              password: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(669)])
                    .then(
                      function () {
                        var a = [t("RMc3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "修改密码", appkey: "drcom" },
              },
              netclient: {
                comLoad: ze.drcomNetclient,
                metaInfo: { title: "网络在线终端查询", appkey: "drcom" },
              },
              networkAuth: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(670)])
                    .then(
                      function () {
                        var a = [t("Gd/y")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "上网认证", appkey: "drcom" },
              },
            },
            officeTel: {
              homePage: {
                comLoad: ze.officeTelhomePage,
                metaInfo: { title: "加载中", appkey: "phonebook" },
              },
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(107)])
                    .then(
                      function () {
                        var a = [t("5a5v")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "phonebook" },
              },
              elsetem: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(495)])
                    .then(
                      function () {
                        var a = [t("VlGs")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "phonebook" },
              },
            },
            polymerization: {
              polymerizationHomepage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(448)])
                    .then(
                      function () {
                        var a = [t("J9FW")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "四川大学微服务", appkey: "mashupapp" },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              polymerizationInfor: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(447)])
                    .then(
                      function () {
                        var a = [t("Teef")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "四川大学微服务", appkey: "mashupapp" },
              },
              towma: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(443)])
                    .then(
                      function () {
                        var a = [t("CiOq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "四川大学微服务" },
                js: ["/js/qrcode.js", "/js/normal_socket.js"],
              },
              polymerizationSearch: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(444)])
                    .then(
                      function () {
                        var a = [t("+3pw")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "四川大学微服务", appkey: "mashupapp" },
              },
              polymerizationApplication: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(449)])
                    .then(
                      function () {
                        var a = [t("cwWr")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "四川大学微服务", appkey: "mashupapp" },
              },
              polymerizationLogin: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(446)])
                    .then(
                      function () {
                        var a = [t("7bZe")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "四川大学微服务" },
              },
              polymerizationPayment: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(445)])
                    .then(
                      function () {
                        var a = [t("MHCK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "四川大学微服务", appkey: "mashupapp" },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              bindPh: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(451)])
                    .then(
                      function () {
                        var a = [t("/3OC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "绑定手机号" },
              },
              untyingPh: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(442)])
                    .then(
                      function () {
                        var a = [t("Bd0L")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "更换手机号" },
              },
              modifyPass: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(450)])
                    .then(
                      function () {
                        var a = [t("pg7X")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "重置密码" },
              },
            },
            paperApply: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(248)])
                    .then(
                      function () {
                        var a = [t("HXDS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "自考照片上传", appkey: "fudanexam" },
                js: ["/js/echarts.min.js"],
              },
              examine: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(477)])
                    .then(
                      function () {
                        var a = [t("uoj2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "自考信息录入", appkey: "fudanexam" },
              },
            },
            announcementRelease: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(95)])
                    .then(
                      function () {
                        var a = [t("Tyj6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告发布", appkey: "noticepush" },
                css: [
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: ["/js/mescroll.min.js", "/js/wcalendar.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(755)])
                    .then(
                      function () {
                        var a = [t("tEXC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告发布", appkey: "noticepush" },
              },
            },
            netFeeRecharge: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(532)])
                    .then(
                      function () {
                        var a = [t("GHVr")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网费充值", appkey: "chargefee" },
              },
            },
            courseQuery: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(700)])
                    .then(
                      function () {
                        var a = [t("X3S7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "课程查询", appkey: "kccx" },
              },
            },
            courseFdu: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(114)])
                    .then(
                      function () {
                        var a = [t("9+ZS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "课程预约", appkey: "fudanorder" },
                css: [
                  "/css/style/common/calendarcom.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/timeselect.js"],
              },
              mine: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(133)])
                    .then(
                      function () {
                        var a = [t("nfQS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "我的课程", appkey: "fudanorder" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              sign: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(122)])
                    .then(
                      function () {
                        var a = [t("sgBD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "课程签到", appkey: "fudanorder" },
              },
              teacher: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(261)])
                    .then(
                      function () {
                        var a = [t("Gk1s")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "教师课程", appkey: "fudanorder" },
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(132)])
                    .then(
                      function () {
                        var a = [t("oZwh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "fudanorder" },
              },
            },
            graduateSchedule: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(593)])
                    .then(
                      function () {
                        var a = [t("+o8s")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "研究生课表", appkey: "yjskb" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
              weekSchedule: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(592)])
                    .then(
                      function () {
                        var a = [t("W47Q")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "研究生课表(周视图)", appkey: "yjskb" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
            },
            graduateTeaSchedule: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(590)])
                    .then(
                      function () {
                        var a = [t("eLk3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "研究生教师课表", appkey: "yjsjskb" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
              weekSchedule: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(589)])
                    .then(
                      function () {
                        var a = [t("nfx5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "研究生教师课表(周视图)",
                  appkey: "yjsjskb",
                },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
            },
            graduateScore: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(591)])
                    .then(
                      function () {
                        var a = [t("0fKA")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "研究生成绩查询", appkey: "yjscj" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/iosselect.js"],
              },
            },
            boda: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(734)])
                    .then(
                      function () {
                        var a = [t("VMQw")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "bdcom" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js", "/js/wcalendar.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(735)])
                    .then(
                      function () {
                        var a = [t("z95W")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "bdcom" },
              },
              lists: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(732)])
                    .then(
                      function () {
                        var a = [t("vHZt")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "bdcom" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js", "/js/wcalendar.js"],
              },
              listDetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(733)])
                    .then(
                      function () {
                        var a = [t("g+nx")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "bdcom" },
              },
            },
            microService: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(561)])
                    .then(
                      function () {
                        var a = [t("knzH")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "移动校园", appkey: "rucapp" },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              list: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(560)])
                    .then(
                      function () {
                        var a = [t("HNUR")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "移动校园", appkey: "rucapp" },
              },
              edit: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(562)])
                    .then(
                      function () {
                        var a = [t("7eBQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                js: ["/js/Sortable.min.js", "/js/vuedraggable.umd.min.js"],
                metaInfo: { title: "移动校园", appkey: "rucapp" },
              },
              search: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(558)])
                    .then(
                      function () {
                        var a = [t("IZJL")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "移动校园", appkey: "rucapp" },
              },
              news: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(559)])
                    .then(
                      function () {
                        var a = [t("b67u")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "移动校园", appkey: "rucapp" },
              },
            },
            xidianGuard: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(312)])
                    .then(
                      function () {
                        var a = [t("r04L")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "门禁权限查询", appkey: "xdguard" },
                css: [
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/mescroll.min.js", "/js/timeselect.js"],
              },
            },
            cappClassRoom: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(225)])
                    .then(
                      function () {
                        var a = [t("GjU+")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "空闲教室查询", appkey: "xidianfreeclass" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            epidemicsMap: {
              index: {
                comLoad: function (e) {
                  t.e(642)
                    .then(
                      function () {
                        var a = [t("Tfqg")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情地图" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/echarts.min.js", "/js/china.js"],
              },
            },
            ncov: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(538)])
                    .then(
                      function () {
                        var a = [t("tml7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: [],
                js: ["https://webapi.amap.com/loader.js", "js/city.js"],
              },
              dailys: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(145)])
                    .then(
                      function () {
                        var a = [t("YQ9L")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: [],
                js: ["https://webapi.amap.com/loader.js", "js/city.js"],
              },
              daily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(1)])
                    .then(
                      function () {
                        var a = [t("/JnE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: ["/css/select2.min.css"],
                js: [
                  "/js/shqxlist.js",
                  "js/country.js",
                  "/js/jweixin_fudan.js",
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
              fudanIndex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(86)])
                    .then(
                      function () {
                        var a = [t("gBDV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: [],
                js: [
                  "js/city.js",
                  "/js/jweixin_fudan.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
              fudanDaily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(144)])
                    .then(
                      function () {
                        var a = [t("oM7A")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: ["/css/select2.min.css"],
                js: [
                  "js/country.js",
                  "/js/jweixin_fudan.js",
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
              fudanDailyV2: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(218)])
                    .then(
                      function () {
                        var a = [t("PFN5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: ["/css/select2.min.css"],
                js: [
                  "js/country.js",
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/loader.js",
                ],
              },
              TfudanDaily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(1)])
                    .then(
                      function () {
                        var a = [t("/JnE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: ["/css/select2.min.css"],
                js: [
                  "/js/shqxlist.js",
                  "js/country.js",
                  "/js/jweixin_fudan.js",
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
              TfudanDailyV2: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(544)])
                    .then(
                      function () {
                        var a = [t("04F5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: ["/css/select2.min.css"],
                js: [
                  "js/country.js",
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/loader.js",
                ],
              },
              PingAnfudanRecord: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(51)])
                    .then(
                      function () {
                        var a = [t("t1yr")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                js: ["/js/jweixin_fudan.js"],
              },
              StudentfudanRecord: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(50)])
                    .then(
                      function () {
                        var a = [t("uMok")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                js: ["/js/jweixin_fudan.js"],
              },
              dailyup: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(539)])
                    .then(
                      function () {
                        var a = [t("x3nZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: [],
                js: [
                  "js/city.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
              xisudailyup: {
                comLoad: ce,
                metaInfo: { title: "加载中", appkey: "xisuncov" },
                css: [],
                js: ie,
              },
              nactadailyuptest: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(536)])
                    .then(
                      function () {
                        var a = [t("NCzi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "国戏测试版本", appkey: "" },
                css: [],
                js: ["https://webapi.amap.com/loader.js", "js/city.js"],
              },
              caudailyup: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(540)])
                    .then(
                      function () {
                        var a = [t("phz2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "cauncov" },
                css: [],
                js: [
                  "js/city.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
              bjutdailyup: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(543)])
                    .then(
                      function () {
                        var a = [t("IBu3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "xisuncov" },
                css: [],
                js: [],
              },
              xidiandailyup: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(535)])
                    .then(
                      function () {
                        var a = [t("COpJ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "xisuncov" },
                css: [],
                js: [
                  "js/city.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
            },
            ncovfudan: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(152)])
                    .then(
                      function () {
                        var a = [t("C8lk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                js: ["/js/jweixin_fudan.js", "js/city.js"],
              },
              daily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(1)])
                    .then(
                      function () {
                        var a = [t("/JnE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: ["/css/select2.min.css"],
                js: [
                  "/js/shqxlist.js",
                  "js/country.js",
                  "js/city.js",
                  "/js/jweixin_fudan.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
            },
            positiontest: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(47)])
                    .then(
                      function () {
                        var a = [t("MUaD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "位置测试" },
                js: [
                  "js/city.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
            },
            uestcService: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(342)])
                    .then(
                      function () {
                        var a = [t("GbFR")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网上服务大厅", appkey: "uestcapp" },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              list: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(341)])
                    .then(
                      function () {
                        var a = [t("5DT0")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网上服务大厅", appkey: "uestcapp" },
              },
              edit: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(343)])
                    .then(
                      function () {
                        var a = [t("JbyJ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网上服务大厅", appkey: "uestcapp" },
                js: [
                  "https://cdn.jsdelivr.net/npm/sortablejs@1.10.1/Sortable.min.js",
                  "/js/vuedraggable.umd.min.js",
                ],
              },
              search: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(340)])
                    .then(
                      function () {
                        var a = [t("DbV6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网上服务大厅", appkey: "uestcapp" },
              },
            },
            electronicSign: {
              index: {
                comLoad: function (e) {
                  t.e(45)
                    .then(
                      function () {
                        var a = [t("/L+1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "电子签证" },
              },
            },
            csuindex: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(683)])
                    .then(
                      function () {
                        var a = [t("8I57")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中南大学", appkey: "csureport" },
              },
              data: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(120)])
                    .then(
                      function () {
                        var a = [t("xTyH")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中南大学", appkey: "csureport" },
                js: ["/js/echarts.min.js"],
              },
              list: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(682)])
                    .then(
                      function () {
                        var a = [t("B2Cv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中南大学", appkey: "csureport" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            pkupage: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(454)])
                    .then(
                      function () {
                        var a = [t("gfA6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "五四青春长跑", appkey: "pkuwusi" },
                js: [
                  "https://res.wx.qq.com/open/js/jweixin-1.2.0.js",
                  "/js/jssdk.js",
                ],
              },
              form: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(455)])
                    .then(
                      function () {
                        var a = [t("iuJF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "五四青春长跑", appkey: "pkuwusi" },
                js: [
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                  "https://res.wx.qq.com/open/js/jweixin-1.2.0.js",
                  "/js/jssdk.js",
                ],
              },
              page: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(453)])
                    .then(
                      function () {
                        var a = [t("ngnd")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "五四青春长跑", appkey: "pkuwusi" },
                js: [
                  "https://res.wx.qq.com/open/js/jweixin-1.2.0.js",
                  "/js/jssdk.js",
                ],
              },
            },
            createdCode: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(256)])
                    .then(
                      function () {
                        var a = [t("uu6P")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "生成二维码", appkey: "healthcode" },
                js: [],
              },
            },
            createdCodeone: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(123)])
                    .then(
                      function () {
                        var a = [t("Lg+Y")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "生成二维码", appkey: "rucfile" },
                css: ["/css/style/print.min.css"],
                js: ["/js/print.min.js"],
              },
            },
            createdCodes: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(254)])
                    .then(
                      function () {
                        var a = [t("2ehJ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "生成二维码", appkey: "studyroom" },
                js: [],
              },
            },
            createdCoderuc: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(108)])
                    .then(
                      function () {
                        var a = [t("BoaT")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "生成二维码", appkey: "rucfile" },
                js: [],
              },
            },
            buaaleaveSchool: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(729)])
                    .then(
                      function () {
                        var a = [t("DdoL")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "离校流程查询", appkey: "buaaleave" },
                js: [],
              },
              sign: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(728)])
                    .then(
                      function () {
                        var a = [t("MPAK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "导师签字", appkey: "buaaleave" },
                js: [],
              },
            },
            bjtucanteen: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(741)])
                    .then(
                      function () {
                        var a = [t("2Jld")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "食堂就餐指数", appkey: "bjtucanteen" },
                js: ["/js/echarts.min.js"],
              },
            },
            upcele: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(330)])
                    .then(
                      function () {
                        var a = [t("a0jO")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "石大电子卡", appkey: "upcecard" },
                js: [],
              },
              verification: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(329)])
                    .then(
                      function () {
                        var a = [t("6TwH")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "石大电子卡" },
                js: ["https://res.wx.qq.com/open/js/jweixin-1.3.2.js"],
              },
            },
            oucncov: {
              domesticbase: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(203)])
                    .then(
                      function () {
                        var a = [t("7MGX")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: [],
                js: [],
              },
              domesticdaily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(201)])
                    .then(
                      function () {
                        var a = [t("h9zn")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: [],
                js: [
                  "js/country.js",
                  "js/city.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                  "https://hm.baidu.com/hm.js?48b682d4885d22a90111e46b972e3268",
                ],
              },
              abroaddaily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(116)])
                    .then(
                      function () {
                        var a = [t("l6h4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: ["/css/select2.min.css"],
                js: [
                  "js/country.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
              studyabroadbase: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(213)])
                    .then(
                      function () {
                        var a = [t("JXv9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: [],
                js: [],
              },
              studyabroaddaily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(220)])
                    .then(
                      function () {
                        var a = [t("JKcZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: [],
                js: [
                  "js/city.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
              continuebase: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(244)])
                    .then(
                      function () {
                        var a = [t("uHz7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: [],
                js: [],
              },
              continuedaily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(183)])
                    .then(
                      function () {
                        var a = [t("FxoQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: ["/css/select2.min.css"],
                js: [
                  "js/country.js",
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
            },
            ccmuncov: {
              daily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(169)])
                    .then(
                      function () {
                        var a = [t("rO9j")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                js: [
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
            },
            newForm: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(33)])
                    .then(
                      function () {
                        var a = [t("Pb4e")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "forms" },
                css: [
                  "/css/style/common/editor.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                ],
                js: [
                  "/js/timeselect.js",
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/form_city.js",
                ],
              },
            },
            tempData: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(175)])
                    .then(
                      function () {
                        var a = [t("ygj7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "tempData" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
            },
            signpoject: {
              signindex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(378)])
                    .then(
                      function () {
                        var a = [t("o+5R")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "signed" },
                css: [],
                js: [
                  "https://api.map.baidu.com/api?v=3.0&type=webgl&ak=0hYGiH3Ob5ZhV0eWzrGVXCD3bEdBCi6L&callback=onBMapCallback",
                ],
              },
              signend: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(110)])
                    .then(
                      function () {
                        var a = [t("Jfch")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "signed" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/iosselect.js",
                  "/js/mescroll.min.js",
                  "/js/jweixin-1.4.0.js",
                ],
              },
              signlist: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(377)])
                    .then(
                      function () {
                        var a = [t("Nb+u")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "签到列表", appkey: "signed" },
              },
              createsign: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(379)])
                    .then(
                      function () {
                        var a = [t("Syk9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "创建签到", appkey: "signed" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/timeselect.js",
                  "/js/mescroll.min.js",
                  "https://api.map.baidu.com/getscript?v=2.0&ak=0hYGiH3Ob5ZhV0eWzrGVXCD3bEdBCi6L&services=&t=20200327103013&s=1",
                ],
              },
            },
            diploma: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(19)])
                    .then(
                      function () {
                        var a = [t("KO3y")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "夜大公证申请", appkey: "fudantranscripts" },
                css: [],
                js: [],
              },
              form: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(20)])
                    .then(
                      function () {
                        var a = [t("t6Oc")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "夜大公证申请", appkey: "fudantranscripts" },
                css: [],
                js: [],
              },
            },
            fudanscore: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(19)])
                    .then(
                      function () {
                        var a = [t("KO3y")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "自考公证件申请", appkey: "fudanapply" },
                css: [],
                js: [],
              },
              form: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(20)])
                    .then(
                      function () {
                        var a = [t("t6Oc")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "自考公证件申请", appkey: "fudanapply" },
                css: [],
                js: [],
              },
            },
            nwafubudget: {
              pojectLeaderindex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(503)])
                    .then(
                      function () {
                        var a = [t("Uf/p")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
              },
              pojectLeaderjd: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(502)])
                    .then(
                      function () {
                        var a = [t("gXLu")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
              },
              unitLeader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(500)])
                    .then(
                      function () {
                        var a = [t("CKeM")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
                js: ["/js/echarts.min.js"],
              },
              unitLeaderdepart: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(499)])
                    .then(
                      function () {
                        var a = [t("/tMN")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
              },
              unitLeaderdepartcategory: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(498)])
                    .then(
                      function () {
                        var a = [t("zN7G")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
              },
              unitLeaderspecial: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(496)])
                    .then(
                      function () {
                        var a = [t("53mD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
              },
              unitLeaderproject: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(497)])
                    .then(
                      function () {
                        var a = [t("FwGh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
              },
              schoolLeader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(153)])
                    .then(
                      function () {
                        var a = [t("5+68")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
                js: ["/js/echarts.min.js"],
              },
              setauth: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(501)])
                    .then(
                      function () {
                        var a = [t("eIju")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
              },
              authlist: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(505)])
                    .then(
                      function () {
                        var a = [t("2fSC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
              },
              chooseauthuser: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(504)])
                    .then(
                      function () {
                        var a = [t("FPbd")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西北农林科技大学", appkey: "nwafucwzx" },
              },
            },
            graduation: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(586)])
                    .then(
                      function () {
                        var a = [t("RFiH")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "毕业生画像", appkey: "xisubyhx" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/animate.min.css",
                ],
                js: ["/js/swiper.min.js", "/js/swiper.animate1.0.3.min.js"],
              },
            },
            leaveshoolsq: {
              index: {
                comLoad: function (e) {
                  t.e(571)
                    .then(
                      function () {
                        var a = [t("icvY")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "中国人民大学2021届毕业生离校服务平台",
                  appkey: "",
                },
                css: ["/css/style/common/bootstrap.min.css"],
              },
              en: {
                comLoad: function (e) {
                  t.e(570)
                    .then(
                      function () {
                        var a = [t("ONVa")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "" },
                css: ["/css/style/common/bootstrap.min.css"],
              },
            },
            xdwebReport: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(199)])
                    .then(
                      function () {
                        var a = [t("8g69")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "西电纪委办监察处网站举报平台",
                  appkey: "a_xidian",
                },
              },
            },
            pkuxwlogin: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(452)])
                    .then(
                      function () {
                        var a = [t("dimi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "登录", appkey: "a_pku" },
              },
            },
            bjutxwlogin: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(738)])
                    .then(
                      function () {
                        var a = [t("YCaY")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "登录", appkey: "a_bjut" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            bpixwlogin: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(731)])
                    .then(
                      function () {
                        var a = [t("o/zf")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "登录", appkey: "a_bpi" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            rucoffcir: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(117)])
                    .then(
                      function () {
                        var a = [t("UKri")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中国人民大学公文流转", appkey: "rucfile" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/mescroll.min.js",
                  "/js/modernizr.custom.js",
                  "/js/masonry.pkgd.min.js",
                  "/js/imagesloaded.js",
                  "/js/classie.js",
                  "/js/AnimOnScroll.js",
                ],
              },
              handle: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(423)])
                    .then(
                      function () {
                        var a = [t("vNww")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中国人民大学公文流转", appkey: "rucfile" },
              },
              already: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(424)])
                    .then(
                      function () {
                        var a = [t("Vi7q")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中国人民大学公文流转", appkey: "rucfile" },
              },
              document: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(76)])
                    .then(
                      function () {
                        var a = [t("fT4p")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中国人民大学公文流转", appkey: "rucfile" },
              },
              affairs: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(77)])
                    .then(
                      function () {
                        var a = [t("7dPy")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中国人民大学公文流转", appkey: "rucfile" },
              },
            },
            credentuestc: {
              list: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(698)])
                    .then(
                      function () {
                        var a = [t("ao8c")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "护照列表", appkey: "uestcpricard" },
              },
              manager: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(697)])
                    .then(
                      function () {
                        var a = [t("a/B8")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "护照管理", appkey: "uestcpricard" },
                js: ["/js/jweixin-1.4.0.js"],
              },
            },
            nuaachangepay: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(513)])
                    .then(
                      function () {
                        var a = [t("IXVk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通", appkey: "nuaacard" },
                js: [
                  "https://res.wx.qq.com/open/js/jweixin-1.3.2.js",
                  "/js/getAppFun.js",
                ],
              },
              others: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(166)])
                    .then(
                      function () {
                        var a = [t("zV5H")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通", appkey: "nuaacard" },
                js: ["https://res.wx.qq.com/open/js/jweixin-1.3.2.js"],
              },
              consumption: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(226)])
                    .then(
                      function () {
                        var a = [t("IQDs")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消费查询", appkey: "nuaacard" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/wcalendar.js", "/js/mescroll.min.js"],
              },
            },
            queryUInfo: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(112)])
                    .then(
                      function () {
                        var a = [t("4nDs")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "用户信息查询", appkey: "upcsearchinfo" },
              },
            },
            freshData: {
              index: {
                comLoad: function (e) {
                  t.e(619)
                    .then(
                      function () {
                        var a = [t("gDKk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "新生大数据", appkey: "" },
                js: ["/js/echarts.min.js"],
              },
              indexCulr: {
                comLoad: function (e) {
                  t.e(618)
                    .then(
                      function () {
                        var a = [t("pzZz")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "新生大数据", appkey: "" },
                js: ["/js/echarts.min.js"],
              },
            },
            mucApply: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(553)])
                    .then(
                      function () {
                        var a = [t("ZLoE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中央民族大学", appkey: "mucapp" },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              mine: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(552)])
                    .then(
                      function () {
                        var a = [t("RTTp")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中央民族大学", appkey: "mucapp" },
              },
              schedule: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(61)])
                    .then(
                      function () {
                        var a = [t("PA2z")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中央民族大学", appkey: "mucapp" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              apply: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(554)])
                    .then(
                      function () {
                        var a = [t("ZK+q")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中央民族大学", appkey: "mucapp" },
              },
            },
            xisuApply: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(290)])
                    .then(
                      function () {
                        var a = [t("KMkq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "西安外国语大学移动校园",
                  appkey: "xisuapps",
                },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              mine: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(289)])
                    .then(
                      function () {
                        var a = [t("KXDt")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "西安外国语大学移动校园",
                  appkey: "xisuapps",
                },
              },
              schedule: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(60)])
                    .then(
                      function () {
                        var a = [t("g2ny")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "西安外国语大学移动校园",
                  appkey: "xisuapps",
                },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              apply: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(291)])
                    .then(
                      function () {
                        var a = [t("mxAi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "西安外国语大学移动校园",
                  appkey: "xisuapps",
                },
              },
            },
            dossierBuaa: {
              check: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(677)])
                    .then(
                      function () {
                        var a = [t("Zmy/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "学生成绩校对", appkey: "buaasearch" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
              mine: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(675)])
                    .then(
                      function () {
                        var a = [t("0WkV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "我的申请", appkey: "buaasearch" },
                css: [
                  "/css/style/common/default-skin.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/wcalendar.js",
                  "/js/timeselect.js",
                ],
              },
              query: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(674)])
                    .then(
                      function () {
                        var a = [t("KZgi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "档案查询", appkey: "buaasearch" },
              },
              submit: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(673)])
                    .then(
                      function () {
                        var a = [t("MUBL")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "申请填表", appkey: "buaasearch" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js", "/js/GVerify.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(676)])
                    .then(
                      function () {
                        var a = [t("Yqql")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "详情", appkey: "buaasearch" },
              },
            },
            cpuOApaschange: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(699)])
                    .then(
                      function () {
                        var a = [t("0Mj3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "OA密码修改", appkey: "cupoapass" },
              },
            },
            cupWypaschange: {
              passwordSet: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(679)])
                    .then(
                      function () {
                        var a = [t("bPvq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "修改密码", appkey: "cupoapass" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            cnuNews: {
              index: {
                comLoad: ue,
                metaInfo: { title: "新闻中心", appkey: "cnucenter" },
                css: me,
                js: de,
              },
              newsPc: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(22)])
                    .then(
                      function () {
                        var a = [t("l9uu")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "新闻中心", appkey: "cnucenter" },
              },
            },
            timeTableQuery: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(356)])
                    .then(
                      function () {
                        var a = [t("cn4Y")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "选课查询", appkey: "xkjg" },
              },
            },
            fudanElectric: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(616)])
                    .then(
                      function () {
                        var a = [t("Gy36")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "购电", appkey: "fudanelec" },
              },
              recharge: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(614)])
                    .then(
                      function () {
                        var a = [t("wCG2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "充值", appkey: "fudanelec" },
              },
              rechargeRecode: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(613)])
                    .then(
                      function () {
                        var a = [t("iMQa")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "充值记录", appkey: "fudanelec" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              pay: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(615)])
                    .then(
                      function () {
                        var a = [t("pbX+")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "待支付", appkey: "fudanelec" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              eleRecoed: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(617)])
                    .then(
                      function () {
                        var a = [t("i6FH")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "用电记录", appkey: "fudanelec" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            nactaClock: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(547)])
                    .then(
                      function () {
                        var a = [t("gVoe")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "个人打卡记录查询", appkey: "nactalist" },
                css: [
                  "/css/style/common/default-skin.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/wcalendar.js",
                  "/js/timeselect.js",
                ],
              },
            },
            graduationbupt: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(585)])
                    .then(
                      function () {
                        var a = [t("1ldP")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "学生成长印记", appkey: "buptstudent" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/animate.min.css",
                ],
                js: ["/js/swiper.min.js", "/js/swiper.animate1.0.3.min.js"],
              },
            },
            graduationUcas: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(587)])
                    .then(
                      function () {
                        var a = [t("VFI1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园记忆", appkey: "ucasbyhx" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/animate.min.css",
                ],
                js: ["/js/swiper.min.js", "/js/swiper.animate1.0.3.min.js"],
              },
            },
            graduationCup: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(588)])
                    .then(
                      function () {
                        var a = [t("Zwzw")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园记忆", appkey: "cupbyhx" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/animate.min.css",
                ],
                js: ["/js/swiper.min.js", "/js/swiper.animate1.0.3.min.js"],
              },
            },
            userlocalhost: {
              index: {
                comLoad: function (e) {
                  t.e(327)
                    .then(
                      function () {
                        var a = [t("M9PH")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "线上页面使用本地接口的页面", appkey: "" },
              },
            },
            nuaaElectric: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(516)])
                    .then(
                      function () {
                        var a = [t("F4zV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "电费充值", appkey: "" },
              },
              indexTa: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(515)])
                    .then(
                      function () {
                        var a = [t("py6n")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "电费充值", appkey: "" },
              },
            },
            nuaawfcz: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(231)])
                    .then(
                      function () {
                        var a = [t("oE7L")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网费充值", appkey: "nuaanet" },
              },
            },
            testGeolocation: {
              index: {
                comLoad: function (e) {
                  t.e(191)
                    .then(
                      function () {
                        var a = [t("iFXK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "高德百度地图切换定位", appkey: "" },
                css: [],
                js: ["https://webapi.amap.com/loader.js"],
              },
            },
            mucMeals: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(551)])
                    .then(
                      function () {
                        var a = [t("M/Xi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "教工就餐次数", appkey: "mucjccs" },
                css: [
                  "/css/style/common/default-skin.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/wcalendar.js",
                  "/js/timeselect.js",
                ],
              },
            },
            fudanclassRoomQuery: {
              index: {
                comLoad: ze.fudanclassRoomQueryCom,
                metaInfo: { title: "空闲教室查询", appkey: "fudanzlfreeclass" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/jweixin-1.3.2.js",
                  "/js/timeselect.js",
                  "/js/mescroll.min.js",
                ],
              },
              pcindex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(8)])
                    .then(
                      function () {
                        var a = [t("LHWP")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "空闲教室查询", appkey: "" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/jweixin-1.3.2.js", "/js/timeselect.js"],
              },
            },
            freeClassroomV3: {
              index: {
                comLoad: ze.freeClassroomV3index,
                metaInfo: { title: "空闲教室查询", appkey: "fudanzlfreeclass" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/jweixin-1.3.2.js",
                  "/js/timeselect.js",
                  "/js/mescroll.min.js",
                ],
              },
            },
            cfauVisitor: {
              pcindex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(709)])
                    .then(
                      function () {
                        var a = [t("mHof")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "访客申请", appkey: "cfauvisiter" },
              },
              login: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(710)])
                    .then(
                      function () {
                        var a = [t("GEPY")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "访客申请", appkey: "cfauvisiter" },
              },
              record: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(707)])
                    .then(
                      function () {
                        var a = [t("uaTy")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "访客申请", appkey: "cfauvisiter" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              apply: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(711)])
                    .then(
                      function () {
                        var a = [t("GtCo")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "访客申请", appkey: "cfauvisiter" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
              qrcode: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(708)])
                    .then(
                      function () {
                        var a = [t("qKG5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "访客申请", appkey: "cfauvisiter" },
              },
            },
            fudanannualBill: {
              index1: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(608)])
                    .then(
                      function () {
                        var a = [t("wCY4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "年度报告单", appkey: "fudanzlndzd" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/animate.min.css",
                ],
                js: [
                  "https://res.wx.qq.com/open/js/jweixin-1.3.2.js",
                  "/js/swiper.min.js",
                  "/js/swiper.animate1.0.3.min.js",
                  "/js/jssdk.js",
                ],
              },
            },
            buuCode: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(184)])
                    .then(
                      function () {
                        var a = [t("znbe")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码统计", appkey: "buucodestat" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(238)])
                    .then(
                      function () {
                        var a = [t("7bzX")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码统计", appkey: "buucodestat" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            njulib: {
              record: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(518)])
                    .then(
                      function () {
                        var a = [t("9FbL")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "缴费记录", appkey: "njulib" },
              },
            },
            hnuannualBill: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(581)])
                    .then(
                      function () {
                        var a = [t("h1ZD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园生活年度报告", appkey: "hnundbg" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/animate.min.css",
                ],
                js: [
                  "https://res.wx.qq.com/open/js/jweixin-1.3.2.js",
                  "/js/swiper.min.js",
                  "/js/swiper.animate1.0.3.min.js",
                  "/js/jssdk.js",
                ],
              },
            },
            bjtuTravel: {
              qrcode: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(742)])
                    .then(
                      function () {
                        var a = [t("dnQ4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "动态码", appkey: "healthcode" },
                js: ["/js/qrcode.js", "/js/normal_socket.js"],
              },
            },
            buptfxList: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(127)])
                    .then(
                      function () {
                        var a = [t("DFXz")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "今日中高风险名单列表", appkey: "ncov" },
                js: [],
              },
            },
            epideHitszu: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(111)])
                    .then(
                      function () {
                        var a = [t("8Yzu")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "hitncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(113)])
                    .then(
                      function () {
                        var a = [t("VSQp")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "hitncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(664)])
                    .then(
                      function () {
                        var a = [t("80Vx")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "hitncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            buaaStudentNcov: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(730)])
                    .then(
                      function () {
                        var a = [t("QuVK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "buaaxsncov" },
                js: [
                  "js/country.js",
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
            },
            zjuStudentNcov: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(162)])
                    .then(
                      function () {
                        var a = [t("CVAM")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "每日上报", appkey: "zjuncovxs" },
                css: ["/css/select2.min.css"],
                js: [
                  "js/country.js",
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                  "https://hm.baidu.com/hm.js?48b682d4885d22a90111e46b972e3268",
                ],
              },
              basepage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(147)])
                    .then(
                      function () {
                        var a = [t("2IaW")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "基础信息填报", appkey: "zjuncovxs" },
                css: [],
                js: ["js/city.js"],
              },
            },
            returnQrcodeNcepu: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(229)])
                    .then(
                      function () {
                        var a = [t("ms89")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "返校人员展示", appkey: "healthcode" },
                js: ["/js/echarts.min.js"],
              },
            },
            epideCardBjtu: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(198)])
                    .then(
                      function () {
                        var a = [t("kUuy")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "打卡统计", appkey: "bjtubk" },
                css: [
                  "/css/style/common/default-skin.css",
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/wcalendar.js",
                  "/js/timeselect.js",
                ],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(205)])
                    .then(
                      function () {
                        var a = [t("igr/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "打卡统计", appkey: "bjtubk" },
              },
            },
            netFeeRechargeCnu: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(533)])
                    .then(
                      function () {
                        var a = [t("UcyI")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网费充值", appkey: "chargefee" },
              },
            },
            qrcodeLogin: {
              index: {
                comLoad: ze.qrcodeLoginModel,
                metaInfo: { title: "扫码登录", appkey: " " },
                js: [
                  "https://wxapp.bucm.edu.cn/js/mxsocket.js",
                  "https://wxapp.bucm.edu.cn/js/qrcode.js",
                ],
              },
            },
            hjqtxyrecharge: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(582)])
                    .then(
                      function () {
                        var a = [t("AwHx")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "一卡通充值", appkey: " " },
                js: ["https://res.wx.qq.com/open/js/jweixin-1.3.2.js"],
              },
            },
            applicationHnu: {
              home: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(750)])
                    .then(
                      function () {
                        var a = [t("0NUK")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "湖南大学", appkey: "hnuapp" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/swiper.min.css",
                ],
                js: ["/js/swiper.min.js", "/js/mescroll.min.js"],
              },
              service: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(748)])
                    .then(
                      function () {
                        var a = [t("4BdQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "湖南大学", appkey: "hnuapp" },
              },
              apps: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(751)])
                    .then(
                      function () {
                        var a = [t("1d1G")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "湖南大学", appkey: "hnuapp" },
              },
              mine: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(749)])
                    .then(
                      function () {
                        var a = [t("PEJT")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "湖南大学", appkey: "hnuapp" },
              },
            },
            ucassnews: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(35)])
                    .then(
                      function () {
                        var a = [t("+cGF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告", appkey: "news" },
                css: [
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/swiper.min.js", "/js/mescroll.min.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(94)])
                    .then(
                      function () {
                        var a = [t("FwzJ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "news" },
                css: ["/css/style/common/swiper.min.css"],
                js: [],
              },
            },
            buuPunch: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(720)])
                    .then(
                      function () {
                        var a = [t("/JME")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "打卡率", appkey: "" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            rucTrafficQuery: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(425)])
                    .then(
                      function () {
                        var a = [t("Ub58")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "流量查询", appkey: "rucsrun" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/echarts.min.js",
                  "/js/wcalendar.js",
                  "/js/timeselect.js",
                  "/js/mescroll.min.js",
                ],
              },
            },
            freshCulr: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(136)])
                    .then(
                      function () {
                        var a = [t("8/VV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "首页", appkey: "appsquare" },
              },
              manage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(177)])
                    .then(
                      function () {
                        var a = [t("8SQx")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "新生服务", appkey: "appsquare" },
              },
              place: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(62)])
                    .then(
                      function () {
                        var a = [t("U89L")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校园导览", appkey: "appsquare" },
                js: [
                  "https://webapi.amap.com/maps?v=1.4.12&key=b5996b3e6fd879659e8aba7afbb29620&plugin=AMap.ToolBar,AMap.Driving,AMap.Autocomplete,AMap.ControlBar",
                  "https://webapi.amap.com/ui/1.0/main.js?v=1.0.11",
                ],
              },
              user: {
                comLoad: function (e) {
                  t.e(141)
                    .then(
                      function () {
                        var a = [t("4YRU")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "我的", appkey: "appsquare" },
              },
            },
            luquCulr: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(564)])
                    .then(
                      function () {
                        var a = [t("Wga1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: {
                  title: "中国劳动关系学院录取查询",
                  appkey: "excel",
                },
              },
            },
            nuaaSubscribe: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(514)])
                    .then(
                      function () {
                        var a = [t("wxnj")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "订阅", appkey: "nuaaapp" },
              },
            },
            bnupersonalAgenda: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(736)])
                    .then(
                      function () {
                        var a = [t("WGnM")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "个人日程", appkey: "datebook" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            vaccinationXidian: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(222)])
                    .then(
                      function () {
                        var a = [t("lKKk")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫苗接种统计", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              manager: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(325)])
                    .then(
                      function () {
                        var a = [t("abB6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫苗接种统计", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(227)])
                    .then(
                      function () {
                        var a = [t("kV5o")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(326)])
                    .then(
                      function () {
                        var a = [t("RxC9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            nucleicXidian: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(121)])
                    .then(
                      function () {
                        var a = [t("uF3S")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "核酸检测统计", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              manager: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(511)])
                    .then(
                      function () {
                        var a = [t("xd/u")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "核酸检测统计", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(235)])
                    .then(
                      function () {
                        var a = [t("1bb2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "核酸检测统计", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(512)])
                    .then(
                      function () {
                        var a = [t("6MbT")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "核酸检测统计", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            buaapage: {
              classQuery: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(726)])
                    .then(
                      function () {
                        var a = [t("I2OI")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "北京航空航天大学", appkey: "buaaqxkb" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/timeselect.js", "/js/mescroll.min.js"],
              },
              achievement: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(727)])
                    .then(
                      function () {
                        var a = [t("5YGQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "北京航空航天大学", appkey: "buaaxscj" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/timeselect.js", "/js/mescroll.min.js"],
              },
              teacherworkQuery: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(724)])
                    .then(
                      function () {
                        var a = [t("7+R7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "北京航空航天大学", appkey: "buaajsgzl" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: ["/js/timeselect.js", "/js/mescroll.min.js"],
              },
              curriculumEvaluation: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(725)])
                    .then(
                      function () {
                        var a = [t("FA3S")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "北京航空航天大学", appkey: "buaapj" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            studentStatusCsu: {
              register: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(368)])
                    .then(
                      function () {
                        var a = [t("EL1T")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中南大学", appkey: "csuxjzc" },
              },
              statistics: {
                comLoad: ze.statisticsCsu,
                metaInfo: { title: "中南大学", appkey: "csuxjzc" },
                js: ["/js/echarts.min.js"],
              },
              query: {
                comLoad: ze.queryCsu,
                metaInfo: { title: "中南大学", appkey: "csuxjzc" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/select2.min.css",
                ],
                js: [
                  "/js/timeselect.js",
                  "/js/echarts.min.js",
                  "js/select2.min.js",
                ],
              },
              list: {
                comLoad: ze.listCsu,
                metaInfo: { title: "中南大学", appkey: "csuxjzc" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            fudanMicroservice: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(611)])
                    .then(
                      function () {
                        var a = [t("SWe8")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "复旦信息办", appkey: "appsquare" },
              },
            },
            xidianPage: {
              home: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(31)])
                    .then(
                      function () {
                        var a = [t("0pCF")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西安电子科技大学", appkey: "xidianapp" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/swiper.min.css",
                ],
                js: [
                  "/js/timeselect.js",
                  "/js/swiper.min.js",
                  "/js/md5_2.10.0.js",
                ],
              },
              home2: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(30)])
                    .then(
                      function () {
                        var a = [t("zd38")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西安电子科技大学", appkey: "xidianapp" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/swiper.min.css",
                ],
                js: [
                  "/js/timeselect.js",
                  "/js/swiper.min.js",
                  "/js/md5_2.10.0.js",
                ],
              },
              zixun: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(294)])
                    .then(
                      function () {
                        var a = [t("aVJ2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "资讯", appkey: "xidiannews" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              map: {
                comLoad: function (e) {
                  t.e(305)
                    .then(
                      function () {
                        var a = [t("9yUh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "服务", appkey: "" },
                css: [],
                js: [],
              },
              txl: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(297)])
                    .then(
                      function () {
                        var a = [t("SkI3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通讯录", appkey: "xidianbook" },
                css: [],
                js: [],
              },
              mine: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(304)])
                    .then(
                      function () {
                        var a = [t("aGRC")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "我的", appkey: "xidianapp" },
                css: [],
                js: ["/js/md5_2.10.0.js"],
              },
              txldetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(296)])
                    .then(
                      function () {
                        var a = [t("IEI7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "xidianbook" },
                css: [],
                js: [],
              },
              allApplications: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(310)])
                    .then(
                      function () {
                        var a = [t("V2wT")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "应用", appkey: "xidianapp" },
                js: [
                  "/js/md5_2.10.0.js",
                  "https://res.wx.qq.com/open/js/jweixin-1.3.2.js",
                  "/js/jssdk.js",
                ],
              },
              allApplicationstab: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(308)])
                    .then(
                      function () {
                        var a = [t("pAxQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "服务", appkey: "xidianapp" },
                js: ["/js/md5_2.10.0.js"],
              },
              notice: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(302)])
                    .then(
                      function () {
                        var a = [t("/jeG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告", appkey: "xidiannews" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              allApplicationsdetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(309)])
                    .then(
                      function () {
                        var a = [t("bQi5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "西安电子科技大学", appkey: "xidiannews" },
              },
              publicList: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(300)])
                    .then(
                      function () {
                        var a = [t("WnC7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "公众号列表", appkey: "xidiannews" },
              },
              homeSearch: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(307)])
                    .then(
                      function () {
                        var a = [t("UsVv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "xidianapp" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              homeSearchmore: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(306)])
                    .then(
                      function () {
                        var a = [t("wvi1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "xidianapp" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              subscribe: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(298)])
                    .then(
                      function () {
                        var a = [t("JHD8")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "订阅管理", appkey: "xidiannews" },
              },
              subjectService: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(299)])
                    .then(
                      function () {
                        var a = [t("/i/e")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "专题服务", appkey: "xidianapp" },
              },
              newsPage: {
                comLoad: je,
                metaInfo: { title: "消息中心", appkey: "xidiannews" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              dbpage: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(14)])
                    .then(
                      function () {
                        var a = [t("Mtb3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "xidianapp" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/timeselect.js",
                  "/js/swiper.min.js",
                  "/js/mescroll.min.js",
                ],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(217)])
                    .then(
                      function () {
                        var a = [t("8PZf")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "xidianapp" },
              },
              xyDistribution: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(295)])
                    .then(
                      function () {
                        var a = [t("lIXL")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "校友分布", appkey: "" },
                js: ["/js/echarts.min.js", "/js/china.js"],
              },
              oneform: {
                comLoad: function (e) {
                  t.e(170)
                    .then(
                      function () {
                        var a = [t("ofLX")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "" },
              },
              taskCenter: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(14)])
                    .then(
                      function () {
                        var a = [t("Mtb3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "任务中心", appkey: "xidianapp" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/swiper.min.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/timeselect.js",
                  "/js/swiper.min.js",
                  "/js/mescroll.min.js",
                ],
              },
              processTracking: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(301)])
                    .then(
                      function () {
                        var a = [t("Wz+5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "流程跟踪", appkey: "xidianapp" },
              },
            },
            suppages: {
              home: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(364)])
                    .then(
                      function () {
                        var a = [t("/rBG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "东南大学", appkey: " " },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              search: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(362)])
                    .then(
                      function () {
                        var a = [t("b1Wv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "东南大学", appkey: " " },
              },
              more: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(363)])
                    .then(
                      function () {
                        var a = [t("ILo9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "东南大学", appkey: " " },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              compile: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(365)])
                    .then(
                      function () {
                        var a = [t("pY8r")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "东南大学", appkey: " " },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
            },
            nudtServer: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(509)])
                    .then(
                      function () {
                        var a = [t("2yrJ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "国防科大信息化", appkey: "appsquare" },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
              app: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(510)])
                    .then(
                      function () {
                        var a = [t("7cWv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "国防科大信息化", appkey: "appsquare" },
              },
              search: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(506)])
                    .then(
                      function () {
                        var a = [t("grEn")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "国防科大信息化", appkey: "appsquare" },
              },
              mine: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(508)])
                    .then(
                      function () {
                        var a = [t("bq4r")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "国防科大信息化", appkey: "appsquare" },
              },
              more: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(507)])
                    .then(
                      function () {
                        var a = [t("zlJY")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "国防科大信息化", appkey: "appsquare" },
              },
            },
            njauServer: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(519)])
                    .then(
                      function () {
                        var a = [t("8RWb")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "智慧南农", appkey: "njauhomepage" },
                css: ["/css/style/common/swiper.min.css"],
                js: ["/js/swiper.min.js"],
              },
            },
            csuPage: {
              zixun: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(685)])
                    .then(
                      function () {
                        var a = [t("0Lu9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "资讯", appkey: "csunews" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              zixundetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(684)])
                    .then(
                      function () {
                        var a = [t("R9Sz")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "中南大学", appkey: "csunews" },
              },
              txl: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(687)])
                    .then(
                      function () {
                        var a = [t("edMZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通讯录", appkey: "csubook" },
                css: [],
                js: [],
              },
              txldetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(686)])
                    .then(
                      function () {
                        var a = [t("T5F3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "csubook" },
                css: [],
                js: [],
              },
              homeSearchmore: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(689)])
                    .then(
                      function () {
                        var a = [t("HD9j")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "csuapp" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              subscribe: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(688)])
                    .then(
                      function () {
                        var a = [t("4mfh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "订阅管理", appkey: "csunews" },
              },
              cjtxl: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(693)])
                    .then(
                      function () {
                        var a = [t("9N/3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通讯录", appkey: "" },
                css: [
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/mescroll.min.js", "/js/timeselect.js"],
              },
              csuInformation: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(692)])
                    .then(
                      function () {
                        var a = [t("wGiE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消息中心", appkey: "csuapp" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              feedback: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(691)])
                    .then(
                      function () {
                        var a = [t("v1TV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "用户反馈", appkey: "csuapp" },
              },
              feedbackHistory: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(690)])
                    .then(
                      function () {
                        var a = [t("iFye")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "反馈记录", appkey: "csuapp" },
                css: [
                  "/css/style/common/photoswipe.css",
                  "/css/style/common/default-skin.css",
                  "/css/style/common/mescroll.min.css",
                ],
                js: [
                  "/js/photoswipe.min.js",
                  "/js/photoswipe-ui-default.min.js",
                  "/js/common.js",
                  "/js/mescroll.min.js",
                  "/js/modernizr.custom.js",
                  "/js/masonry.pkgd.min.js",
                  "/js/imagesloaded.js",
                  "/js/classie.js",
                  "/js/AnimOnScroll.js",
                ],
              },
            },
            csuH5: {
              csuHome: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(36)])
                    .then(
                      function () {
                        var a = [t("8fw0")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "首页", appkey: "csuapp" },
                js: ["/js/swiper.min.js", "/js/md5_2.10.0.js"],
                css: ["/css/style/common/swiper.min.css"],
              },
              csuSearch: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(694)])
                    .then(
                      function () {
                        var a = [t("GKwR")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "搜索", appkey: "csuapp" },
              },
              csuChildren: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(695)])
                    .then(
                      function () {
                        var a = [t("bNNV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "更多服务", appkey: "csuapp" },
                js: ["/js/md5_2.10.0.js"],
              },
            },
            fudanncov: {
              fudanIndex: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(150)])
                    .then(
                      function () {
                        var a = [t("SMQm")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: [],
                js: [
                  "js/city.js",
                  "/js/jweixin_fudan.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
              fudanDaily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(126)])
                    .then(
                      function () {
                        var a = [t("VHIu")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: ["/css/select2.min.css"],
                js: [
                  "js/country.js",
                  "/js/jweixin_fudan.js",
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                  "/js/md5_2.10.0.js",
                ],
              },
              TfudanDaily: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(58)])
                    .then(
                      function () {
                        var a = [t("m09W")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                css: ["/css/select2.min.css"],
                js: [
                  "js/country.js",
                  "/js/jweixin_fudan.js",
                  "js/city.js",
                  "js/select2.min.js",
                  "https://webapi.amap.com/maps?v=1.4.15&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving",
                ],
              },
              PingAnfudanRecord: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(56)])
                    .then(
                      function () {
                        var a = [t("DYtS")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                js: ["/js/jweixin_fudan.js"],
              },
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(99)])
                    .then(
                      function () {
                        var a = [t("nPs9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "加载中", appkey: "ncov" },
                js: ["/js/jweixin_fudan.js", "js/city.js"],
              },
              instructor: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(202)])
                    .then(
                      function () {
                        var a = [t("uFlT")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/iosselect.css",
                ],
                js: [
                  "/js/wcalendar.js",
                  "/js/mescroll.min.js",
                  "/js/timeselect.js",
                ],
              },
              leader: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(197)])
                    .then(
                      function () {
                        var a = [t("Flza")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(246)])
                    .then(
                      function () {
                        var a = [t("FOI3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(606)])
                    .then(
                      function () {
                        var a = [t("dsIo")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控通", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
              manager: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(605)])
                    .then(
                      function () {
                        var a = [t("BF1J")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
              managerepideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(176)])
                    .then(
                      function () {
                        var a = [t("m+J+")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              typeList: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(105)])
                    .then(
                      function () {
                        var a = [t("PnKv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              managerdetails: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(604)])
                    .then(
                      function () {
                        var a = [t("Fwbj")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: be, appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            nactaNetFeeRecharge: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(546)])
                    .then(
                      function () {
                        var a = [t("dWmI")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网费充值", appkey: " " },
                css: [],
                js: [],
              },
              list: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(545)])
                    .then(
                      function () {
                        var a = [t("PlvV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "网费充值", appkey: " " },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            ouchnApp: {
              login: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(486)])
                    .then(
                      function () {
                        var a = [t("CSz2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "录取查询", appkey: "ouchnproj" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/ouchnApp/common.js", "/js/timeselect.js"],
              },
              policy: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(161)])
                    .then(
                      function () {
                        var a = [t("bnSY")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "ouchnproj" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/ouchnApp/common.js", "/js/mescroll.min.js"],
              },
              policyDetails: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(253)])
                    .then(
                      function () {
                        var a = [t("GAsT")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "ouchnproj" },
                js: ["/js/ouchnApp/common.js"],
              },
              elegantDemeanor: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(259)])
                    .then(
                      function () {
                        var a = [t("cIB3")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "ouchnproj" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/ouchnApp/common.js", "/js/mescroll.min.js"],
              },
              trainingProgram: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(179)])
                    .then(
                      function () {
                        var a = [t("It2V")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "培养方案", appkey: "ouchnproj" },
                js: ["/js/ouchnApp/common.js"],
              },
              myStudentStatus: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(54)])
                    .then(
                      function () {
                        var a = [t("hC38")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "学籍信息", appkey: "ouchnproj" },
                js: ["/js/ouchnApp/common.js"],
              },
              outstandingGraduates: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(485)])
                    .then(
                      function () {
                        var a = [t("ONfO")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "ouchnproj" },
                js: ["/js/ouchnApp/common.js"],
              },
              outstandingGraduatesDetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(484)])
                    .then(
                      function () {
                        var a = [t("s/u1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "ouchnproj" },
                js: ["/js/ouchnApp/common.js"],
              },
              enrollmentMajor: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(488)])
                    .then(
                      function () {
                        var a = [t("ubz5")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "招生专业", appkey: "ouchnproj" },
                js: ["/js/ouchnApp/common.js"],
              },
              exemptionForm: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(487)])
                    .then(
                      function () {
                        var a = [t("nmHs")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "免修免考表", appkey: "ouchnproj" },
                js: ["/js/ouchnApp/common.js"],
              },
              xjydRecord: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(482)])
                    .then(
                      function () {
                        var a = [t("QlLQ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "学籍异动申请记录", appkey: "ouchnproj" },
                js: ["/js/ouchnApp/common.js"],
              },
              courseSelection: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(489)])
                    .then(
                      function () {
                        var a = [t("sGTp")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "选课信息", appkey: "ouchnproj" },
                js: ["/js/ouchnApp/common.js"],
              },
              teachingPoint: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(483)])
                    .then(
                      function () {
                        var a = [t("cdFh")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "教学点查询", appkey: "ouchnproj" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/ouchnApp/common.js", "/js/mescroll.min.js"],
              },
              ouchnAppdetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(159)])
                    .then(
                      function () {
                        var a = [t("X3e7")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              scoreQueryApp: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(11)])
                    .then(
                      function () {
                        var a = [t("4Mwu")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "成绩查询", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              admissionTicket: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(207)])
                    .then(
                      function () {
                        var a = [t("Vh3K")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "准考证下载", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
            },
            ouchnPc: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(46)])
                    .then(
                      function () {
                        var a = [t("+kUp")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "首页", appkey: "" },
                css: [
                  "https://at.alicdn.com/t/font_3209422_yv1l8wf8xfb.css",
                  "/css/style/common/swiper.min.css",
                ],
                js: ["/js/swiper.min.js"],
              },
              historyCourse: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(480)])
                    .then(
                      function () {
                        var a = [t("IJKG")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "历史教学课程", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              myCourse: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(479)])
                    .then(
                      function () {
                        var a = [t("iUKZ")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "我学过的课程", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              certificate: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(138)])
                    .then(
                      function () {
                        var a = [t("EnBq")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "证书下载", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              notice: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(88)])
                    .then(
                      function () {
                        var a = [t("iJWd")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              newsInformation: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(258)])
                    .then(
                      function () {
                        var a = [t("pPj1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "新闻资讯", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              detail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(481)])
                    .then(
                      function () {
                        var a = [t("GsFX")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: " ", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              personalInformation: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(49)])
                    .then(
                      function () {
                        var a = [t("D5hE")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "个人信息", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              paymentOorder: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(48)])
                    .then(
                      function () {
                        var a = [t("/wgx")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "缴费订单", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              publicNotice: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(89)])
                    .then(
                      function () {
                        var a = [t("1pwW")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告发布", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              pubNoticeDetail: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(478)])
                    .then(
                      function () {
                        var a = [t("XJe/")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告详情", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              noticeAdministration: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(52)])
                    .then(
                      function () {
                        var a = [t("3h3I")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "通知公告管理", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              historyStudy: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(103)])
                    .then(
                      function () {
                        var a = [t("r2m1")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "历史研修课程", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              historyProject: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(131)])
                    .then(
                      function () {
                        var a = [t("8Nqv")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "历史学习项目", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
              scoreQuery: {
                comLoad: ze.ouchnScoreQuery,
                metaInfo: { title: "成绩查询", appkey: "ouchnapp" },
                js: ["/js/ouchnApp/common.js"],
              },
            },
            ncepusignpoject: {
              signend: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(96)])
                    .then(
                      function () {
                        var a = [t("ET+Z")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码人员名单", appkey: "healthcode" },
                css: [
                  "/css/style/common/iosselect.css",
                  "/css/style/common/mescroll.min.css",
                  "/css/style/common/wcalendar.css",
                ],
                js: [
                  "/js/iosselect.js",
                  "/js/mescroll.min.js",
                  "/js/jweixin-1.4.0.js",
                  "/js/wcalendar.js",
                ],
              },
              signendStatistics: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(241)])
                    .then(
                      function () {
                        var a = [t("T2RU")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "扫码统计名单", appkey: "healthcode" },
                css: ["/css/style/common/wcalendar.css"],
                js: ["/js/wcalendar.js"],
              },
            },
            bjutPage: {
              bjutInformation: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(740)])
                    .then(
                      function () {
                        var a = [t("mWaV")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消息", appkey: "bjutapp" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              collect: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(739)])
                    .then(
                      function () {
                        var a = [t("dc9e")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "收藏管理", appkey: "bjutapp" },
              },
            },
            bjutSearch: {
              bjutSearch: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(85)])
                    .then(
                      function () {
                        var a = [t("KJbD")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "搜索", appkey: "bjutapp" },
                js: ["/js/getAppFun.js"],
              },
              bjutSearchChildren: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(84)])
                    .then(
                      function () {
                        var a = [t("aiAn")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "搜索", appkey: "bjutapp" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js", "/js/getAppFun.js"],
              },
            },
            cupwriteOff: {
              index: {
                comLoad: function (e) {
                  t.e(237)
                    .then(
                      function () {
                        var a = [t("Zzm2")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "首页", appkey: "writeoff" },
              },
              scanning: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(148)])
                    .then(
                      function () {
                        var a = [t("Fqhi")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "核销系统", appkey: "writeoff" },
                js: ["/js/jweixin-1.4.0.js"],
              },
              voucherCode: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(57)])
                    .then(
                      function () {
                        var a = [t("261t")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "核销系统", appkey: "writeoff" },
              },
              cupList: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(212)])
                    .then(
                      function () {
                        var a = [t("Bij8")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "核销系统", appkey: "writeoff" },
              },
            },
            fudanSchedule: {
              PersonalSchedule: {
                comLoad: ze.fudanSchedulePersonalSchedule,
                metaInfo: { title: "日程", appkey: "scheduleapp" },
                js: ["/js/campusappCommon.js"],
              },
              matterList: {
                comLoad: ze.fudanScheduleMatterList,
                metaInfo: { title: "事项", appkey: "scheduleapp" },
                js: ["/js/campusappCommon.js"],
              },
              subscribe: {
                comLoad: ze.fudanScheduleSubscribe,
                metaInfo: { title: "订阅", appkey: "scheduleapp" },
                js: ["/js/campusappCommon.js"],
              },
              addItem: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(43)])
                    .then(
                      function () {
                        var a = [t("I/Rl")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "新建事项", appkey: "scheduleapp" },
              },
            },
            csuEpidemicSituation: {
              fenji: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(180)])
                    .then(
                      function () {
                        var a = [t("USf9")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "位置统计", appkey: "ncov" },
                meta: { keepAlive: !0 },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
              epideType: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(118)])
                    .then(
                      function () {
                        var a = [t("WGca")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "位置统计", appkey: "ncov" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
              details: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(696)])
                    .then(
                      function () {
                        var a = [t("NQVn")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "位置统计", appkey: "ncov" },
                css: [
                  "/css/style/common/wcalendar.css",
                  "/css/style/common/iosselect.css",
                ],
                js: ["/js/wcalendar.js", "/js/timeselect.js"],
              },
            },
            newsPage: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(520)])
                    .then(
                      function () {
                        var a = [t("VQV6")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "消息中心", appkey: "msg" },
                css: ["/css/style/common/mescroll.min.css"],
                js: ["/js/mescroll.min.js"],
              },
            },
            cugbxwlogin: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(681)])
                    .then(
                      function () {
                        var a = [t("9kz4")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "登录", appkey: "a_cugb" },
                css: ["/css/style/common/iosselect.css"],
                js: ["/js/timeselect.js"],
              },
            },
            buaaPassCard: {
              index: {
                comLoad: function (e) {
                  Promise.all([t.e(0), t.e(189)])
                    .then(
                      function () {
                        var a = [t("O3Gr")];
                        e.apply(null, a);
                      }.bind(this)
                    )
                    .catch(t.oe);
                },
                metaInfo: { title: "疫情防控个人信息", appkey: "buaaxsncov" },
              },
            },
          },
          styleCss: { path: "css/style/", baseName: ["main.css"] },
          cssInfo: { require: t("I35r"), publicCss: ["public"], cssMaps: {} },
          needLogins: [],
        });
      (Ae.init = function () {
        var e = this.loadRouter();
        return this.beforeEnterModule(e), e;
      }),
        (Ae.beforeEnterModule = function (e) {
          e.beforeEach(function (e, a, t) {
            if (
              (console.log("页面的字体大小", $("html").css("font-size")),
              (c = navigator.userAgent.toLowerCase()),
              (i = "ipad" == c.match(/ipad/i)),
              (l = "iphone os" == c.match(/iphone os/i)),
              (p = "midp" == c.match(/midp/i)),
              (u = "rv:1.2.3.4" == c.match(/rv:1.2.3.4/i)),
              (m = "ucweb" == c.match(/ucweb/i)),
              (d = "android" == c.match(/android/i)),
              (r = "windows ce" == c.match(/windows ce/i)),
              (f = "windows mobile" == c.match(/windows mobile/i)),
              console.log(
                "页面宽高",
                window.screen.width,
                window.screen.height
              ),
              i || l || p || u || m || d || r || f
                ? (console.log("移动端"), 0)
                : (console.log("pc端"), 1))
            ) {
              var s = e.fullPath.split("/")[1];
              if (
                ![
                  "guide",
                  "leaveshoolsq",
                  "upcportal",
                  "fudanclassRoomQuery",
                  "universalForm",
                  "officeTel",
                  "personalAgenda",
                  "lostAndFound",
                  "fleaMartket",
                  "score",
                  "schoolMap",
                  "ouchnApp",
                  "ouchnPc",
                  "elementPage",
                  "freeClassroomV3",
                ].includes(s)
              ) {
                var n = window.screen.width,
                  o = window.screen.height;
                if (n > 1024) document.body.style.width = (10 * o) / 16 + "px";
              }
            }
            var c, i, l, p, u, m, d, r, f;
            (void 0 !== window.entryUrl && "" !== window.entryUrl) ||
              (window.entryUrl = location.href.split("#")[0]),
              localStorage.removeItem("isLogin"),
              t();
          });
        });
      var De,
        Te = Ae,
        qe = t("sbrb"),
        Ue = t.n(qe),
        Be = t("NYxO"),
        Re = t("bOdI"),
        Ee = t.n(Re),
        Me = {
          namespaced: !0,
          state: function () {
            return {
              allplugin: {},
              matterLoading: 0,
              isPrintMake: !1,
              repeatPrintInfo: {},
              tablePageInfo: {},
              printStyle: {},
              formLoaded: {},
              warningErrors: [],
              childTable: {},
              childDataSource: {},
              childNoCanSource: {},
              childNoCanSourceKeys: {},
              repeatOperationAlert: {},
              appkeyIslogin: 0,
              selectData: {
                tableid: "",
                start: { id: "", row: 0, col: 0 },
                end: { id: "", row: 0, col: 0 },
                selectIds: [],
              },
              refreshRTable: {},
              formStatus: {},
            };
          },
          getters: {},
          mutations:
            ((De = {}),
            Ee()(De, "SET_ALLPLUGINS", function (e, a) {
              var t = a.id ? a.id : "0";
              o.default.set(e.allplugin, t, a.allplugin);
            }),
            Ee()(De, "ADD_STARTLOADING", function (e) {
              e.matterLoading++;
            }),
            Ee()(De, "REDUCE_STARTLOADING", function (e) {
              e.matterLoading--;
            }),
            Ee()(De, "SET_ALLPRINTMAKE", function (e, a) {
              var t = a.fid ? a.fid : 0;
              o.default.set(e.repeatPrintInfo, t, a.data);
            }),
            Ee()(De, "SET_PRINTMAKE", function (e, a) {
              var t = a.fid ? a.fid : 0,
                s = a.tid ? a.tid : 0,
                n = a.trid ? a.trid : 0;
              e.repeatPrintInfo[t] || o.default.set(e.repeatPrintInfo, t, {}),
                e.repeatPrintInfo[t][s] ||
                  o.default.set(e.repeatPrintInfo[t], s, {}),
                o.default.set(e.repeatPrintInfo[t][s], n, a.data);
            }),
            Ee()(De, "DEL_PRINTMAKE", function (e, a) {
              var t = a.fid ? a.fid : 0,
                s = a.tid ? a.tid : 0,
                n = a.trid ? a.trid : 0;
              if (!e.repeatPrintInfo[t] || !e.repeatPrintInfo[t][s]) return !1;
              o.default.delete(e.repeatPrintInfo[t][s], n);
            }),
            Ee()(De, "SET_PRIMARYUID", function (e, a) {
              e.primaryUid = a.uid;
            }),
            Ee()(De, "SET_STARTERDEPARID", function (e, a) {
              e.starterDepartId = a.starterDepartId;
            }),
            Ee()(De, "SET_ISPRINTMAKE", function (e, a) {
              e.isPrintMake = a.isPrintMake;
            }),
            Ee()(De, "SET_TABLEPAGEINFO", function (e, a) {
              var t = a.fid ? a.fid : "0";
              o.default.set(e.tablePageInfo, t, a.data);
            }),
            Ee()(De, "SET_PRINTSTYLE", function (e, a) {
              var t = a.fid ? a.fid : "0";
              o.default.set(e.printStyle, t, a.data);
            }),
            Ee()(De, "SET_FORMLOADED", function (e, a) {
              var t = a.fid ? a.fid : "0";
              o.default.set(e.formLoaded, t, a.status);
            }),
            Ee()(De, "ADD_WARNING", function (e, a) {
              e.warningErrors.push(a);
            }),
            Ee()(De, "CLEAR_WARNING", function (e, a) {
              e.warningErrors = [];
            }),
            Ee()(De, "SET_CHILDTABLE", function (e, a) {
              e.childTable = a;
            }),
            Ee()(De, "CHILDDATASOURCE", function (e, a) {
              o.default.set(e.childDataSource, a.fid, a.params);
            }),
            Ee()(De, "CHILDNOCANSOURCE", function (e, a) {
              o.default.set(e.childNoCanSource, a.fid, a.ids);
            }),
            Ee()(De, "CHILDNOCANSOURCEKEYS", function (e, a) {
              o.default.set(e.childNoCanSourceKeys, a.fid, a.keys);
            }),
            Ee()(De, "REPEAT_OPERATIONALERT", function (e, a) {
              e.repeatOperationAlert = a;
            }),
            Ee()(De, "SET_SELECTTD", function (e, a) {
              var t = {};
              for (var s in e.selectData) t[s] = a[s] ? a[s] : e.selectData[s];
              e.selectData = t;
            }),
            Ee()(De, "REFRESH_RTABLE", function (e, a) {
              o.default.set(e.refreshRTable, a.fid, a.params);
            }),
            Ee()(De, "SET_FORMSTATUS", function (e, a) {
              o.default.set(e.formStatus, a.fid, a);
            }),
            De),
          actions: {
            toReduceStartLoading: function (e) {
              setTimeout(function () {
                e.state.matterLoading > 0 && e.commit("REDUCE_STARTLOADING");
              }, 300);
            },
            initFormStatus: function (e, a) {
              var t = {
                fid: a.fid,
                status: 1,
                initSourceList: [],
                usedSourceList: [],
              };
              for (var s in a.plugins) {
                var n = a.plugins[s];
                1 == n.classtype &&
                  "dDataSource" == n.type &&
                  n.attr.data.runStatus.includes(1) &&
                  t.initSourceList.push(n.key);
              }
              (t.status = t.initSourceList.length ? 1 : 2),
                e.commit("SET_FORMSTATUS", t);
            },
            formSourceRun: function (e, a) {
              var t = e.state.formStatus[a.fid];
              if (2 == t.status) return !1;
              t.usedSourceList.includes(a.sourceKey) ||
                t.usedSourceList.push(a.sourceKey),
                t.usedSourceList.sort().join("_") ==
                  t.initSourceList.sort().join("_") && (t.status = 2),
                e.commit("SET_FORMSTATUS", t);
            },
            onlySetFormStatus: function (e, a) {
              var t = e.state.formStatus[a.fid];
              (t.status = a.status), e.commit("SET_FORMSTATUS", t);
            },
          },
        };
      o.default.use(Be.a);
      var Ne = new Be.a.Store({
        modules: {
          form: Me,
          csuPage: {
            namespaced: !0,
            state: function () {
              return { isActive: !1 };
            },
            getters: {
              getIsActive: function (e) {
                return e.isActive;
              },
            },
            mutations: {
              setIsActive: function (e, a) {
                e.isActive = a;
              },
            },
            actions: {},
          },
        },
      });
      var _e = Ne,
        Fe = this;
      o.default.use(n.a),
        o.default.use(r.a),
        o.default.component(f.Switch.name, f.Switch),
        o.default.component(f.DatetimePicker.name, f.DatetimePicker),
        o.default.component(f.Radio.name, f.Radio),
        o.default.use(y.a),
        t("hKoQ").polyfill(),
        b.a.polyfill(),
        o.default.use(k),
        o.default.use(L.a),
        o.default.use(m.a).use(j.a),
        (o.default.prototype.filterDesc = function (e) {
          return e.replace(/<(?!\/?br\/?.+?>|\/?img.+?>)[^<>]*>/g, "");
        });
      var Oe = new j.a({
        locale: window.localStorage.getItem("language")
          ? window.localStorage.getItem("language")
          : "zh",
        messages: { zh: t("z8sE"), en: t("AQny"), tw: t("ZpxJ") },
      });
      o.default.component(C),
        o.default.use(z.a),
        o.default.use(D.a),
        (window.Vue = o.default),
        (window.$ = window.jQuery = q.a),
        (window.commonHelper = U.a),
        (o.default.prototype.EXIF = Ue.a);
      var Ge = Te.init();
      (o.default.prototype.appRouter = Ge),
        (o.default.config.errorHandler = function (e, a, t) {
          console.log(5555, e);
        });
      o.default.directive("focus", {
        inserted: function (e, a, t) {
          e.focus();
        },
      }),
        (o.default.prototype.$throw = function (e) {
          return (function (e, a) {
            console.error("抛出全局异常"), console.error(a), console.error(e);
          })(e, Fe);
        });
      new o.default({
        router: Ge,
        i18n: Oe,
        template:
          "<keep-alive include='xidianPage_zixun,xidianPage_notice,xidianPage_taskCenter,bodaIndex,csu_query,csupc_query,vaccinationXidianFenji,applicationHnuHome,buuCodeFenji,epidemicSchoolcau,intructorPagebasemade,epidemicSchoolxs,intructorPagebase,newsList,ucassnewsList,guideIndexCon,intructorPage,intructorPagebuaa,instruZjupage,intructorPagefudan,bnutwPage,intructorbasestude,epidemicSchool,instructorcau,schoolLeader,csuPage_zixun'><router-view></router-view></keep-alive>",
        store: _e,
        created: function () {
          o.default.prototype.$this = this;
        },
      }).$mount("#app");
      "classList" in document.documentElement ||
        Object.defineProperty(HTMLElement.prototype, "classList", {
          get: function () {
            var e = this;
            function a(a) {
              return function (t) {
                var s = e.className.split(/\s+/g),
                  n = s.indexOf(t);
                a(s, n, t), (e.className = s.join(" "));
              };
            }
            return {
              add: a(function (e, a, t) {
                ~a || e.push(t);
              }),
              remove: a(function (e, a) {
                ~a && e.splice(a, 1);
              }),
              toggle: a(function (e, a, t) {
                ~a ? e.splice(a, 1) : e.push(t);
              }),
              contains: function (a) {
                return !!~e.className.split(/\s+/g).indexOf(a);
              },
              item: function (a) {
                return e.className.split(/\s+/g)[a] || null;
              },
            };
          },
        });
    },
    Nut2: function (e, a) {},
    SsU1: function (e, a, t) {
      "use strict";
      var s = t("Dd8w"),
        n = t.n(s),
        o = t("pFYg"),
        c = t.n(o),
        i = t("mvHQ"),
        l = t.n(i),
        p = t("7+uW"),
        u = t("IVJ5"),
        m = t("fZuY"),
        d = t.n(m),
        r = {
          getStrTime: function (e, a) {
            var t = a ? new Date(a) : new Date(),
              s = {};
            for (var n in ((s.Y = t.getFullYear()),
            (s.m = t.getMonth() + 1),
            (s.d = t.getDate()),
            (s.H = t.getHours()),
            (s.i = t.getMinutes()),
            (s.s = t.getSeconds()),
            (s.m = s.m >= 10 ? s.m : "0" + s.m),
            (s.d = s.d >= 10 ? s.d : "0" + s.d),
            (s.H = s.H >= 10 ? s.H : "0" + s.H),
            (s.i = s.i >= 10 ? s.i : "0" + s.i),
            (s.s = s.s >= 10 ? s.s : "0" + s.s),
            s))
              e = e.replace(n, s[n]);
            return e;
          },
          firstUppercase: function (e) {
            return (
              !!e && (e = e.toString()).substr(0, 1).toUpperCase() + e.substr(1)
            );
          },
          copyObj: function (e) {
            return JSON.parse(l()(e));
          },
          copyObjFor: function (e) {
            return (function e(a) {
              if ("object" != (void 0 === a ? "undefined" : c()(a))) return a;
              var t = {};
              if (
                (Array.isArray(a) ? (t = []) : null === a && (t = null),
                null !== t)
              )
                for (var s in a) t[s] = e(a[s]);
              return t;
            })(e);
          },
          getStyle: function (e, a) {
            e = this.copyObj(e);
            for (var t in (e = n()({}, e, a)))
              NaN !== Number(e[t]) && isFinite(e[t]) && (e[t] = e[t] + "px");
            return e;
          },
          fireEvent: function (e, a) {
            if (document.createEventObject) {
              var t = document.createEventObject();
              return e.fireEvent("on" + a, t);
            }
            return (
              (t = document.createEvent("HTMLEvents")).initEvent(a, !0, !0),
              !e.dispatchEvent(t)
            );
          },
          isWeixin: function () {
            var e = navigator.userAgent,
              a = e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
              t = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
              s = a || t;
            return {
              isWeixin:
                "micromessenger" ==
                  (e = e.toLowerCase()).match(/MicroMessenger/i) ||
                "_sq_" == e.match(/_SQ_/i),
              isPhone: s,
            };
          },
          getCurrUrl: function () {
            var e = window.location.href;
            return (
              ["<", ">", ",", "$", "\\(", "\\)", "%"].forEach(function (a) {
                e = e.replace(a, "");
              }),
              encodeURIComponent(e)
            );
          },
          getCookie: function (e) {
            var a,
              t = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (a = document.cookie.match(t)) ? unescape(a[2]) : null;
          },
          setBpmnProperties: function (e, a) {
            "INPUT" === e[0].tagName || "SELECT" === e[0].tagName
              ? e.val(a)
              : e.text(a),
              this.fireEvent(e[0], "input"),
              this.fireEvent(e[0], "change");
          },
          getSpendTime: function (e, a) {
            if (((e = e.replace(/\-/g, "/")), null != a)) {
              a = a.replace(/\-/g, "/");
              var t = new Date(a).getTime() - new Date(e).getTime();
            } else t = new Date().getTime() - new Date(e).getTime();
            var s = parseInt(t / 1e3 / 60 / 60 / 24),
              n = parseInt((t / 1e3 / 60 / 60) % 24),
              o = parseInt((t / 1e3 / 60) % 60);
            parseInt((t / 1e3) % 60);
            return {
              time: s + "天" + n + "小时" + o + "分钟",
              d: s,
              h: n,
              m: o,
            };
          },
          query: function (e) {
            var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
              t = window.location.search.substr(1).match(a);
            return null != t ? unescape(t[2]) : null;
          },
          setVueData: function (e, a) {
            for (var t in a) e[t] = a[t];
          },
          getWebId: function () {
            var e = "default";
            return (
              d.a.webList[d.a.domainName] &&
                d.a.webList[d.a.domainName] &&
                (e = d.a.webList[d.a.domainName].id
                  ? d.a.webList[d.a.domainName].id
                  : e),
              e
            );
          },
          getWebStyle: function (e) {
            e = e || "style";
            var a = "default";
            return (
              d.a.webList[d.a.domainName] &&
                d.a.webList[d.a.domainName] &&
                (a = d.a.webList[d.a.domainName][e]
                  ? d.a.webList[d.a.domainName][e]
                  : a),
              a
            );
          },
          getClientType: function () {
            return (
              "m_" ==
              location.pathname.replace(d.a.routeBasePath, "").substr(0, 2)
            );
          },
          mergeObj: function (e, a) {
            return (e = e || {}), (a = a || {}), n()({}, e, a);
          },
          ChangeTime: function (e) {
            var a = new Date(e),
              t = a.getFullYear(),
              s = a.getMonth() + 1,
              n = a.getDate(),
              o = a.getHours(),
              c = a.getMinutes();
            return (
              s < 10 && (s = "0" + s),
              n < 10 && (n = "0" + n),
              o < 10 && (o = "0" + o),
              c < 10 && (c = "0" + c),
              {
                year: t,
                month: s,
                day: n,
                hour: o,
                min: c,
                fullTime: t + "-" + s + "-" + n + "  " + o + ":" + c,
                noTime: t + "-" + s + "-" + n,
              }
            );
          },
          wapconfirm: function (e, a, t, s, n) {
            (e = e || "您将提交以下信息，是否确认？"),
              (a = a || "确&nbsp;&nbsp;定"),
              (t = t || "取&nbsp;&nbsp;消");
            $("#wapcf").length <= 0 &&
              $("body").append(
                '<div id="wapcf"><div class="wapcf-inner"><div class="wapcf-title"></div><div class="wapcf-btn-box"><div class="wapcf-btn wapcf-btn-qx" onclick="$(\'#wapcf\').hide();"></div><div class="wapcf-btn wapcf-btn-ok"></div></div></div></div>'
              ),
              $(".wapcf-title").html(e),
              $(".wapcf-btn-ok")
                .html(a)
                .off("click")
                .on("click", function () {
                  $("#wapcf").hide(), s();
                }),
              $(".wapcf-btn-qx")
                .html(t)
                .off("click")
                .on("click", function () {
                  $("#wapcf").hide(), n && n();
                }),
              $("#wapcf").show();
          },
          wapalert: function (e, a, t) {
            (e = e || "操作成功!"),
              (a = a || "确定"),
              $("#wapat").length <= 0 &&
                $("body").append(
                  '<div id="wapat"><div class="wapat-inner"><div class="wapat-title"></div><div class="wapat-btn-box"><div class="wapat-btn wapat-btn-ok"></div></div></div></div>'
                ),
              $(".wapat-title").html(e),
              $(".wapat-btn-ok")
                .html(a)
                .off("click")
                .on("click", function () {
                  $("#wapat").hide(), t && t();
                }),
              $("#wapat").show();
          },
          waploading: function (e, a) {
            "" == $.trim(e) && (e = "show"),
              "" == $.trim(a) && (a = "正在加载中..."),
              "show" == e
                ? 0 == $(".page-loading-container").length
                  ? $("body").append(
                      [
                        '<div class="page-loading-container">',
                        '<div><div class="loadEffect">',
                        "<span></span>",
                        "<span></span>",
                        "<span></span>",
                        "<span></span>",
                        "<span></span>",
                        "<span></span>",
                        "<span></span>",
                        "<span></span>",
                        '</div><span id="loading_text">' + a + "</span></div>",
                        "</div>",
                      ].join("")
                    )
                  : ($("#loading_text").html(a),
                    $(".page-loading-container").show())
                : $(".page-loading-container").hide();
          },
          hideHint: function (e, a, t) {
            console.log(e, a, t, this, p.default);
          },
          isphone: function (e, a, t) {
            var s = navigator.userAgent.toLowerCase(),
              n = "ipad" == s.match(/ipad/i),
              o = "iphone os" == s.match(/iphone os/i),
              c = "midp" == s.match(/midp/i),
              i = "rv:1.2.3.4" == s.match(/rv:1.2.3.4/i),
              l = "ucweb" == s.match(/ucweb/i),
              p = "android" == s.match(/android/i),
              u = "windows ce" == s.match(/windows ce/i),
              m = "windows mobile" == s.match(/windows mobile/i);
            return (
              console.log(
                "页面宽高",
                window.screen.width,
                window.screen.height
              ),
              n || o || c || i || l || p || u || m
                ? (console.log("移动端"), !0)
                : (console.log("pc端"), !1)
            );
          },
        };
      (r.appFetch = u.a),
        (p.default.prototype.waploading = r.waploading),
        (p.default.prototype.wapalert = r.wapalert),
        (p.default.prototype.wapconfirm = r.wapconfirm),
        (p.default.prototype.hideHint = r.hideHint),
        (p.default.prototype.isphone = r.isphone),
        p.default.prototype.appCommonH || (p.default.prototype.appCommonH = r),
        (a.a = r);
    },
    UjTL: function (e, a, t) {
      "use strict";
      var s = {
          name: "network",
          props: {
            nonetworkimg: { type: String, default: "" },
            nonetworktext: { type: String, default: "网络错误" },
          },
          watch: {},
          created: function () {
            "加载中" == document.title && (document.title = "");
          },
          data: function () {
            return {
              base: {},
              ctrl: !1,
              yijianfankui: "",
              optionCtrl: !1,
              isctrl: 0,
            };
          },
          methods: {
            goback: function () {
              window.history.go(-1);
            },
            popAjax: function () {
              this.optionCtrl = !0;
            },
            close: function () {
              this.optionCtrl = !1;
            },
            sub: function () {
              this.optionCtrl = !1;
            },
          },
          mounted: function () {
            (this.isctrl = 1),
              "moe" == appConfig.id &&
                (this.nonetworkimg = "/eai" + this.nonetworkimg);
          },
        },
        n = {
          render: function () {
            var e = this,
              a = e.$createElement,
              t = e._self._c || a;
            return t(
              "section",
              { staticClass: "g-network", class: { pctbalert: !e.isphone() } },
              [
                t("div", { staticClass: "pop" }, [
                  t("img", { attrs: { src: e.nonetworkimg } }),
                  e._v(" "),
                  t("p", { domProps: { innerHTML: e._s(e.nonetworktext) } }),
                  e._v(" "),
                  t("div", [
                    t(
                      "span",
                      {
                        on: {
                          click: function (a) {
                            return e.goback();
                          },
                        },
                      },
                      [e._v("返回")]
                    ),
                  ]),
                ]),
                e._v(" "),
                t(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.optionCtrl,
                        expression: "optionCtrl",
                      },
                    ],
                    staticClass: "net-workpop",
                  },
                  [
                    t("h3", [
                      e._v("意见反馈"),
                      t("i", {
                        staticClass: "icon iconfont icon-chahao",
                        on: {
                          click: function (a) {
                            return e.close();
                          },
                        },
                      }),
                    ]),
                    e._v(" "),
                    t("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.yijianfankui,
                          expression: "yijianfankui",
                        },
                      ],
                      attrs: {
                        name: "",
                        rows: "",
                        cols: "",
                        placeholder: "输入你的意见",
                      },
                      domProps: { value: e.yijianfankui },
                      on: {
                        input: function (a) {
                          a.target.composing ||
                            (e.yijianfankui = a.target.value);
                        },
                      },
                    }),
                    e._v(" "),
                    t(
                      "a",
                      {
                        staticClass: "btn",
                        attrs: { href: "javascript:;" },
                        on: {
                          click: function (a) {
                            return e.sub();
                          },
                        },
                      },
                      [e._v("提交")]
                    ),
                  ]
                ),
              ]
            );
          },
          staticRenderFns: [],
        };
      var o = t("VU/8")(
        s,
        n,
        !1,
        function (e) {
          t("F1lC");
        },
        "data-v-2cce54f5",
        null
      );
      a.a = o.exports;
    },
    ZpxJ: function (e, a) {
      e.exports = {
        message: { hello: "妳好", about: "關於", welcome: "歡迎" },
        nav: {
          content: "內容管理",
          userManage: "用戶管理",
          Statist: "統計分析",
          seting: "綜合設置",
          new: "新增和啟動",
          active: "活躍分析",
          time: "時段分析",
          retention: "用戶留存",
          loss: "用戶流失",
          use: "使用",
          Retain: "留存",
        },
      };
    },
    "d8/S": function (e, a) {},
    fZuY: function (e, a) {
      var t = {
        id: "",
        port: "8080",
        domainName: "localhost",
        onlineDebug: !1,
        apiBaseUrl: "",
        upFileUrl: "",
        staticBaseUrl: "/site/",
        staticUrl: "/static/",
        staticCssUrl: "",
        routeBasePath: "/site/",
        domain: "localhost",
        template: "default",
        amapUrl:
          "https://webapi.amap.com/maps?v=1.4.12&key=b5996b3e6fd879659e8aba7afbb29620&plugin=AMap.ToolBar,AMap.Driving,AMap.Autocomplete",
        sourceV: new Date().getTime(),
        imgUrl: "",
        uploadImg: "",
        uploadImgBase: "",
        baseurl: "",
        username: "",
        password: "",
        qRcode: "",
        apis: {
          ssoInt: "/uc/wap/sso/init",
          loginUrl: "/uc/wap/sso/check",
          bindUrl: "/uc/wap/sso/bind",
          checkUrl: "/uc/wap/sso/check-status",
          actionGetCode: "/uc/wap/sso/sms-code",
          popcheck: "/a_ccmu/api/change-pass/change-pass",
          helpIndex: "/api/qrcode/index",
          getinfo: "/uc/wap/login/get-info",
          wfwCenter: "/mashupapp/wap/real/user",
          login: "/uc/wap/login/check",
          userinfo: "/uc/wap/user/get-info",
          userinfoUpc: "/uc/wap/upc-user/get-info",
          getAccount: "/uc/wap/user/get-accounts",
          switch: "/uc/wap/user/switch",
          qrcode: "/uc/wap/user/get-qrcode",
          getEdit: "/uc/wap/user/get-edit",
          getSmsCode: "/uc/wap/user/sms-code",
          getEmailCode: "/uc/wap/user/email-code",
          editMobile: "/uc/wap/user/edit-mobile",
          editEmail: "/uc/wap/user/edit-email",
          saveInfo: "/uc/wap/user/save-info",
          sweepcodeCon: "/wap/equipment/result",
          sweepcodeConBjtu: "/healthcode/wap/bjtu/result",
          sweepcodeConBuaa: "/buaaqrcode/wap/checkin/result",
          commonForm: "/base/wap/activity/new-get-list",
          comFormsearch: "/base/wap/activity/search",
          sweepcodeConBuaa: "/buaaqrcode/wap/checkin/result",
          greetingSearch: "/greetingcard/wap/default/index",
          greetingSave: "/greetingcard/wap/default/save",
          greetingConfig: "/greetingcard/wap/default/config",
          cubefudaoyuan: "/ncov/wap/datacube/fudaoyuan",
          cubedetail: "/ncov/wap/datacube/detail",
          cuberemind: "/ncov/wap/datacube/remind",
          cubecommit: "/ncov/wap/datacube/commit",
          cubestudent: "/ncov/wap/datacube-base/manager",
          cubestudentNews: "/ncov/wap/datacube/student-new",
          cubestudentnew: "/ncov/wap/datacube/xueshengchu-new",
          cubefudaolist: "/ncov/wap/datacube/fudaoyuan-list",
          cubefudaolistNew: "/ncov/wap/datacube/fudaoyuannew-list",
          cubefudaotype: "/ncov/wap/datacube/fudaoyuan-type",
          cubeGroups: "/ncov/wap/datacube/groups",
          cubeGroupsnew: "/ncov/wap/datacube/groups-new",
          cubeexport: "/ncov/wap/datacube/export-ulist",
          deldaily: "/ncov/wap/default/del-daily",
          delstat: "/ncov/wap/default/del-stat",
          getdiff: "/ncov/wap/bjut/diff",
          getdiffbase: "/ncov/wap/datacube-base/diff",
          getdifflist: "/ncov/wap/bjut/diff-lists",
          getdifflistbase: "/ncov/wap/datacube-base/diff-lists",
          ucasexport: "/ncov/wap/ucas/export",
          fudancubestudent: "/ncov/wap/fudan-datacube/leader",
          fudaninstructort: "/ncov/wap/fudan-datacube/fenji",
          fudaninstructortList: "/ncov/wap/fudan-datacube/ulists",
          fudaninstructortDetail: "/ncov/wap/fudan-datacube/detail",
          fudaninstructortExport: "/ncov/wap/fudan-datacube/export",
          fudanAddMattar: "/scheduleapp/wap/default/add-mattar",
          fudanScheduleList: "/scheduleapp/wap/default/schedule-list",
          fudanAddScheduleList: "/scheduleapp/wap/default/save-schedule",
          fudanDepartmentList: "/scheduleapp/wap/default/departs-list",
          fudanUserCheck: "/scheduleapp/wap/default/user-check",
          fudanDeleteSchedule: "/scheduleapp/wap/default/del-schedule",
          fudanGetScheduleMattar: "/scheduleapp/wap/default/index",
          fudanSubscribeList: "/scheduleapp/wap/default/subscription-list",
          fudanSubscribe: "/scheduleapp/wap/default/subscription-up",
          fudanMattarDetails: "/scheduleapp/wap/default/get-mattars",
          fudanDeleteMattar: "/scheduleapp/wap/default/del-mattar",
          fudanSubscribeExport: "/scheduleapp/wap/default/export",
          fudanMonthWeekDay: "/scheduleapp/wap/default/mattars",
          fudanGetScheduleEssentialInformation:
            "/scheduleapp/wap/default/get-info",
          jczdIndex: "/jczd/wap/default/index",
          openFenji: "/ncov/wap/open-datacube/fenji",
          openManager: "/ncov/wap/open-datacube/manager",
          openRemind: "/ncov/wap/open-datacube/remind",
          openUlists: "/ncov/wap/open-datacube/ulists",
          openExport: "/ncov/wap/open-datacube/export",
          openDetails: "/ncov/wap/open-datacube/detail",
          openCommit: "/ncov/wap/open-datacube/commit",
          xdopenFenji: "/ncov/wap/xidian-open-datacube/fenji",
          xdopenRemind: "/ncov/wap/xidian-open-datacube/remind",
          xdopenUlists: "/ncov/wap/xidian-open-datacube/ulists",
          xdopenExport: "/ncov/wap/xidian-open-datacube/export",
          xdopenDetails: "/ncov/wap/xidian-open-datacube/detail",
          xsopenFenji: "/xisuncov/wap/open-datacube/fenji",
          xsopenRemind: "/xisuncov/wap/open-datacube/remind",
          xsopenUlists: "/xisuncov/wap/open-datacube/ulists",
          xsopenExport: "/xisuncov/wap/open-datacube/export",
          xsopenDetails: "/xisuncov/wap/open-datacube/detail",
          xsopenCommit: "/xisuncov/wap/open-datacube/commit",
          xsopenManager: "/xisuncov/wap/open-datacube/manager",
          xsopenManagerdelstat: "/xisuncov/wap/open-datacube/del-stat",
          xsopenFenjiszu: "/xisuncov/wap/szu/fenji",
          xsopenRemindszu: "/xisuncov/wap/szu/remind",
          xsopenUlistsszu: "/xisuncov/wap/szu/ulists",
          xsopenExportszu: "/xisuncov/wap/szu/export",
          xsopenDetailsszu: "/xisuncov/wap/szu/detail",
          xsopenCommitszu: "/xisuncov/wap/szu/commit",
          xsopenFenjibuaa: "/xisuncov/wap/buaa/fenji",
          xsopenRemindbuaa: "/xisuncov/wap/buaa/remind",
          xsopenUlistsbuaa: "/xisuncov/wap/buaa/ulists",
          xsopenExportbuaa: "/xisuncov/wap/buaa/export",
          xsopenDetailsbuaa: "/xisuncov/wap/buaa/detail",
          xsopenCommitbuaa: "/xisuncov/wap/buaa/commit",
          buaaPassCardAll: "/buaaxsncov/wap/pass-card/index",
          buaaNucleicAcidDays: "/buaaxsncov/wap/pass-card/hesuan",
          buaaBeijingDepartureRecord: "/buaaxsncov/wap/pass-card/lj",
          buaaPotentialRisk: "/buaaxsncov/wap/pass-card/qianzai",
          buaaNonClockingRecord: "/buaaxsncov/wap/pass-card/wdk",
          xsopenFenjinacta: "/xisuncov/wap/nacta/fenji",
          xsopenRemindnacta: "/xisuncov/wap/nacta/remind",
          xsopenUlistsnacta: "/xisuncov/wap/nacta/ulists",
          xsopenExportnacta: "/xisuncov/wap/nacta/export",
          xsopenDetailsnacta: "/xisuncov/wap/nacta/detail",
          xsopenCommitnacta: "/xisuncov/wap/nacta/commit",
          xsopenManagernacta: "/xisuncov/wap/nacta/manager",
          xsopenManagerdelstatnacta: "/xisuncov/wap/nacta/del-stat",
          xsopenFenjibupt: "/xisuncov/wap/bupt/fenji",
          xsopenRemindbupt: "/xisuncov/wap/bupt/remind",
          xsopenUlistsbupt: "/xisuncov/wap/bupt/ulists",
          xsopenExportbupt: "/xisuncov/wap/bupt/export",
          xsopenDetailsbupt: "/xisuncov/wap/bupt/detail",
          xsopenCommitbupt: "/xisuncov/wap/bupt/commit",
          xsopenFenjibuu: "/xisuncov/wap/buu/fenji",
          xsopenRemindbuu: "/xisuncov/wap/buu/remind",
          xsopenUlistsbuu: "/xisuncov/wap/buu/ulists",
          xsopenExportbuu: "/xisuncov/wap/buu/export",
          xsopenDetailsbuu: "/xisuncov/wap/buu/detail",
          xsopenCommitbuu: "/xisuncov/wap/buu/commit",
          xsopenManagerbuu: "/xisuncov/wap/buu/manager",
          xsopenManagerdelstatbuu: "/xisuncov/wap/buu/del-stat",
          xsopenFenjixidian: "/xisuncov/wap/xidian/fenji",
          xsopenRemindxidian: "/xisuncov/wap/xidian/remind",
          xsopenUlistsxidian: "/xisuncov/wap/xidian/ulists",
          xsopenExportxidian: "/xisuncov/wap/xidian/export",
          xsopenDetailsxidian: "/xisuncov/wap/xidian/detail",
          xsopenCommitxidian: "/xisuncov/wap/xidian/commit",
          xsopenDetailsbuu: "/xisuncov/wap/buu/detail",
          cauopenFenji: "/cauncov/wap/open-datacube/fenji",
          cauopenRemind: "/cauncov/wap/open-datacube/remind",
          cauopenUlists: "/cauncov/wap/open-datacube/ulists",
          cauopenExport: "/cauncov/wap/open-datacube/export",
          cauopenDetails: "/cauncov/wap/open-datacube/detail",
          cauopenCommit: "/cauncov/wap/open-datacube/commit",
          cauopenManager: "/cauncov/wap/open-datacube/manager",
          cauopenManagerdelstat: "/cauncov/wap/open-datacube/del-stat",
          basegroup: "/ncov/wap/datacube-base/groups",
          cubefenji: "/ncov/wap/datacube-base/fenji",
          cuberemindbase: "/ncov/wap/datacube-base/remind",
          cubecommitbase: "/ncov/wap/datacube-base/commit",
          cubeulists: "/ncov/wap/datacube-base/ulists",
          cubeuexport: "/ncov/wap/datacube-base/export",
          cubeuexportmuc: "/ncov/wap/muc/export",
          cubeuexportscu: "/ncov/wap/scu/export",
          cubeuexportouc: "/ncov/wap/ouc/export",
          cubeuexportxian: "/ncov/wap/xian/export",
          cubeuexportbnu: "/ncov/wap/bnu/export",
          cubeuexportnuaa: "/ncov/wap/nuaa/export",
          cubeuedetail: "/ncov/wap/datacube-base/detail",
          cubeuedetailmuc: "/ncov/wap/muc/detail",
          cubeuedetailnuaa: "/ncov/wap/nuaa/detail",
          cubeuedetailxian: "/ncov/wap/xian/detail",
          cubeuedetailbnu: "/ncov/wap/bnu/detail",
          cubeuemanager: "/ncov/wap/datacube-base/manager-time",
          cubeuemanagerruc: "/ncov/wap/ruc/manager-time",
          cubeuexportdiffbase: "/ncov/wap/datacube-base/diff-export",
          buctcubestudent: "/ncov/wap/buct/manager",
          buctgetdiffbase: "/ncov/wap/buct/diff",
          buctgetdifflistbase: "/ncov/wap/buct/diff-lists",
          buctbasegroup: "/ncov/wap/buct/groups",
          buctcubefenji: "/ncov/wap/buct/fenji",
          buctcuberemindbase: "/ncov/wap/buct/remind",
          buctcubecommitbase: "/ncov/wap/buct/commit",
          buctcubeulists: "/ncov/wap/buct/ulists",
          buctcubeuexport: "/ncov/wap/buct/export",
          buctcubeuedetail: "/ncov/wap/buct/detail",
          buctcubeuemanager: "/ncov/wap/buct/manager-time",
          buctcubeuexportdiffbase: "/ncov/wap/buct/diff-export",
          cubefenjiouc: "/ncov/wap/ouc/fenji",
          cubeuedetailouc: "/ncov/wap/ouc/detail",
          cubeuexportdiffouc: "/ncov/wap/ouc/diff-export",
          getdifflistouc: "/ncov/wap/ouc/diff-lists",
          cubestudentouc: "/ncov/wap/ouc/manager",
          cubemanagerouc: "/ncov/wap/ouc/manager-time",
          getdiffouc: "/ncov/wap/ouc/diff",
          cubeulistsouc: "/ncov/wap/ouc/ulists",
          basegroupouc: "/ncov/wap/ouc/groups",
          cubecommitouc: "/ncov/wap/ouc/commit",
          cuberemindouc: "/ncov/wap/ouc/remind",
          cubeuedetailscu: "/ncov/wap/scu/detail",
          cubefenjiscu: "/ncov/wap/scu/fenji",
          cubeuexportdiffscu: "/ncov/wap/scu/diff-export",
          getdifflistscu: "/ncov/wap/scu/diff-lists",
          cubemanagerscu: "/ncov/wap/scu/manager-time",
          cubestudentscu: "/ncov/wap/scu/manager",
          getdiffscu: "/ncov/wap/scu/diff",
          cubeulistsscu: "/ncov/wap/scu/ulists",
          basegroupscu: "/ncov/wap/scu/groups",
          cubecommitscu: "/ncov/wap/scu/commit",
          cuberemindscu: "/ncov/wap/scu/remind",
          xueshnegchubuaastu: "/buaaxsncov/wap/datacube-base/leader",
          cubeuedetailbuaastu: "/buaaxsncov/wap/datacube-base/detail",
          cubeuexportbuaastu: "/buaaxsncov/wap/datacube-base/export",
          cubefenjibuaastu: "/buaaxsncov/wap/datacube-base/fenji",
          cubeuexportdiffbuaastu: "/buaaxsncov/wap/datacube-base/diff-export",
          getdifflistbuaastu: "/buaaxsncov/wap/datacube-base/diff-lists",
          cubemanagerbuaastu: "/buaaxsncov/wap/datacube-base/manager-time",
          cubestudentbuaastu: "/buaaxsncov/wap/datacube-base/manager",
          getdiffbuaastu: "/buaaxsncov/wap/datacube-base/diff",
          cubeulistsbuaastu: "/buaaxsncov/wap/datacube-base/ulists",
          basegroupbuaastu: "/buaaxsncov/wap/datacube-base/groups",
          cubecommitbuaastu: "/buaaxsncov/wap/datacube-base/commit",
          cuberemindbuaastu: "/buaaxsncov/wap/datacube-base/remind",
          cubeuedetailhitsz: "/hitncov/wap/hit/detail",
          cubefenjihitsz: "/hitncov/wap/hit/fenji",
          cubeuexporthitsz: "/hitncov/wap/hit/export",
          cubestudenthitsz: "/hitncov/wap/hit/manager",
          getdiffhitsz: "/hitncov/wap/hit/diff",
          cubeulistshitsz: "/hitncov/wap/hit/ulists",
          basegrouphitsz: "/hitncov/wap/hit/groups",
          cubecommithitsz: "/hitncov/wap/hit/commit",
          cuberemindhitsz: "/hitncov/wap/hit/remind",
          cubefenjiccmu: "/ncov/wap/ccmu/fenji",
          basegroupccmu: "/ncov/wap/ccmu/groups",
          cubeulistsccmu: "/ncov/wap/ccmu/ulists",
          cubeuedetailccmu: "/ncov/wap/ccmu/detail",
          cubeuexportdiffccmu: "/ncov/wap/ccmu/diff-export",
          getdifflistccmu: "/ncov/wap/ccmu/diff-lists",
          cubestudentccmu: "/ncov/wap/ccmu/manager",
          cubemanagerccmu: "/ncov/wap/ccmu/manager-time",
          getdiffccmu: "/ncov/wap/ccmu/diff",
          cubecommitccmu: "/ncov/wap/ccmu/commit",
          cuberemindccmu: "/ncov/wap/ccmu/remind",
          cubeuexportccmu: "/ncov/wap/ccmu/export",
          basegroupupc: "/ncov/wap/upc/groups",
          cubefenjiupc: "/ncov/wap/upc/fenji",
          cubeulistsupc: "/ncov/wap/upc/ulists",
          cubeuedetailupc: "/ncov/wap/upc/detail",
          cubeuexportdiffupc: "/ncov/wap/upc/diff-export",
          getdifflistupc: "/ncov/wap/upc/diff-lists",
          cubemanagerupc: "/ncov/wap/upc/manager-time",
          cubestudentupc: "/ncov/wap/upc/manager",
          getdiffupc: "/ncov/wap/upc/diff",
          cubecommitupc: "/ncov/wap/upc/commit",
          cuberemindupc: "/ncov/wap/upc/remind",
          cubeuexportupc: "/ncov/wap/upc/export",
          cubestudentBjtu: "/ncov/wap/bjtu/manager",
          cubemanagerBjtu: "/ncov/wap/bjtu/manager-time",
          cubeulistsBjtu: "/ncov/wap/bjtu/ulists",
          cuberemindBjtu: "/ncov/wap/bjtu/remind",
          cubecommitBjtu: "/ncov/wap/bjtu/commit",
          cubefenjiBjtu: "/ncov/wap/bjtu/fenji",
          cubeuexportbjtu: "/ncov/wap/bjtu/export",
          getdiffbjtu: "/ncov/wap/bjtu/diff",
          cubeuedetailbjtu: "/ncov/wap/bjtu/detail",
          cubeuexportdiffbjtu: "/ncov/wap/bjtu/diff-export",
          getdifflistbjtu: "/ncov/wap/bjtu/diff-lists",
          caugroup: "/cauncovxs/wap/datacube-base/groups",
          caufenji: "/cauncovxs/wap/datacube-base/fenji",
          cauulists: "/cauncovxs/wap/datacube-base/ulists",
          caucommit: "/cauncovxs/wap/datacube-base/commit",
          cauremind: "/cauncovxs/wap/datacube-base/remind",
          caugetdiff: "/cauncovxs/wap/datacube-base/diff",
          cauexport: "/cauncovxs/wap/datacube-base/export",
          caudetail: "/cauncovxs/wap/datacube-base/detail",
          caudiffbase: "/cauncovxs/wap/datacube-base/diff-export",
          caudifflistbase: "/cauncovxs/wap/datacube-base/diff-lists",
          cauleader: "/cauncovxs/wap/datacube-base/manager",
          caudelstat: "/cauncovxs/wap/default/del-stat",
          caucubeuexport: "/cauncovxs/wap/datacube-base/export-ztqk-email",
          caustatexport: "/cauncovxs/wap/datacube-base/export-stat-email",
          caugroupstu: "/cauncovxs/wap/cau/groups",
          caufenjistu: "/cauncovxs/wap/cau/fenji",
          cauulistsstu: "/cauncovxs/wap/cau/ulists",
          caucommitstu: "/cauncovxs/wap/cau/commit",
          cauremindstu: "/cauncovxs/wap/cau/remind",
          caugetdiffstu: "/cauncovxs/wap/cau/diff",
          cauexportstu: "/cauncovxs/wap/cau/export",
          caudetailstu: "/cauncovxs/wap/cau/detail",
          caudiffbasestu: "/cauncovxs/wap/cau/diff-export",
          caudifflistbasestu: "/cauncovxs/wap/cau/diff-lists",
          cauleaderstu: "/cauncovxs/wap/cau/manager",
          caudelstatstu: "/cauncovxs/wap/default/del-stat",
          caucubeuexportstu: "/cauncovxs/wap/cau/export-ztqk-email",
          caustatexportstu: "/cauncovxs/wap/cau/export-stat-email",
          oucmadegroup: "/cauncovxs/wap/ouc/groups",
          oucmadefenji: "/cauncovxs/wap/ouc/fenji",
          oucmadeulists: "/cauncovxs/wap/ouc/ulists",
          oucmadecommit: "/cauncovxs/wap/ouc/commit",
          oucmaderemind: "/cauncovxs/wap/ouc/remind",
          oucmadegetdiff: "/cauncovxs/wap/ouc/diff",
          oucmadeexport: "/cauncovxs/wap/ouc/export",
          oucmadedetail: "/cauncovxs/wap/ouc/detail",
          oucmadediffbase: "/cauncovxs/wap/ouc/diff-export",
          oucmadedifflistbase: "/cauncovxs/wap/ouc/diff-lists",
          oucmadeleader: "/cauncovxs/wap/ouc/manager",
          oucmadedelstat: "/cauncovxs/wap/default/del-stat",
          oucmadecubeuexport: "/cauncovxs/wap/ouc/export-ztqk-email",
          oucmadestatexport: "/cauncovxs/wap/ouc/export-stat-email",
          basegroupruc: "/ncov/wap/ruc/groups",
          cubeuexportruc: "/ncov/wap/ruc/export",
          cubeulistsruc: "/ncov/wap/ruc/ulists",
          cubecommitruc: "/ncov/wap/ruc/commit",
          cuberemindruc: "/ncov/wap/ruc/remind",
          cubefenjiruc: "/ncov/wap/ruc/fenji",
          getdiffruc: "/ncov/wap/ruc/diff",
          cubeuedetailruc: "/ncov/wap/ruc/detail",
          getdifflistruc: "/ncov/wap/ruc/diff-lists",
          cubestudentruc: "/ncov/wap/ruc/manager",
          cubemanagerruc: "/ncov/wap/ruc/manager-time",
          cubeuexportdiffruc: "/ncov/wap/ruc/diff-export",
          cubeuexportcau: "/ncov/wap/cau/export",
          cubeulistscau: "/ncov/wap/cau/ulists",
          cubecommitcau: "/ncov/wap/cau/commit",
          cuberemindcau: "/ncov/wap/cau/remind",
          cubefenjicau: "/ncov/wap/cau/fenji",
          getdiffcau: "/ncov/wap/cau/diff",
          cubeuedetailcau: "/ncov/wap/cau/detail",
          getdifflistcau: "/ncov/wap/cau/diff-lists",
          cubestudentcau: "/ncov/wap/cau/manager",
          cubemanagercau: "/ncov/wap/cau/manager-time",
          cubeuexportdiffcau: "/ncov/wap/cau/diff-export",
          cubeuexportcsu: "/ncov/wap/csu/export",
          cubeulistscsu: "/ncov/wap/csu/ulists",
          cubecommitcsu: "/ncov/wap/csu/commit",
          cuberemindcsu: "/ncov/wap/csu/remind",
          cubefenjicsu: "/ncov/wap/csu/fenji",
          getdiffcsu: "/ncov/wap/csu/diff",
          cubeuedetailcsu: "/ncov/wap/csu/detail",
          getdifflistcsu: "/ncov/wap/csu/diff-lists",
          cubestudentcsu: "/ncov/wap/csu/manager",
          cubemanagercsu: "/ncov/wap/csu/manager-time",
          cubeuexportdiffcsu: "/ncov/wap/csu/diff-export",
          csuPermissionGroup: "/ncov/wap/csu-fk/groups",
          csuStatistics: "/ncov/wap/csu-fk/fenji",
          csuBuilding: "/ncov/wap/csu-fk/ldlists",
          csuUserList: "/ncov/wap/csu-fk/ulists",
          csuDetail: "/ncov/wap/csu-fk/detail",
          csuDownload: "/ncov/wap/csu-fk/export-download",
          csuEmailExport: "/ncov/wap/csu-fk/export",
          defaultH5FixedApp: "/csuapp/wap/default/h5-fixed-app",
          wapImagesH5: "/csuapp/wap/images/h5",
          advertH5: "/csuapp/wap/advert/h5",
          defaulth5BottomFixed: "/csuapp/wap/default/h5-bottom-fixed",
          appsMyApps: "/csuapp/wap/apps/my-apps",
          appsSearch: "/csuapp/wap/apps/search",
          newsSearch: "/csuapp/wap/news/search",
          defaultBsdtSearch: "/csuapp/wap/default/bsdt-search",
          csuOaSearch: "/csuapp/wap/default/oa-search",
          searchHistory: "/csuapp/wap/search/history",
          searchAdd: "/csuapp/wap/search/add",
          searchdel: "/csuapp/wap/search/del",
          appsApps: "/csuapp/wap/apps/apps",
          appsUpdModule: "/csuapp/wap/apps/upd-module",
          zhongNanappLog: "/api/app/log",
          cubefenjixd: "/ncov/wap/xidian/fenji",
          cuberemindbasexd: "/ncov/wap/xidian/remind",
          cubecommitbasexd: "/ncov/wap/xidian/commit",
          cubeulistsxd: "/ncov/wap/xidian/ulists",
          cubeuexportxd: "/ncov/wap/xidian/export",
          cubeuedetailxd: "/ncov/wap/xidian/detail",
          cubestudentxd: "/ncov/wap/xidian/manager",
          cubemanagerxd: "/ncov/wap/xidian/manager-time",
          cubefenjixdForm: "/ncov/wap/xidian-form/fenji",
          cuberemindbasexdForm: "/ncov/wap/xidian-form/remind",
          cubecommitbasexdForm: "/ncov/wap/xidian-form/commit",
          cubeulistsxdForm: "/ncov/wap/xidian-form/ulists",
          cubeuexportxdForm: "/ncov/wap/xidian-form/export",
          cubeuedetailxdForm: "/ncov/wap/xidian-form/detail",
          cubestudentxdForm: "/ncov/wap/xidian-form/manager",
          cubemanagerxdForm: "/ncov/wap/xidian-form/manager-time",
          nucleiccubefenjixdForm: "/ncov/wap/xidian-form-nucleic-acid/fenji",
          nucleiccuberemindbasexdForm:
            "/ncov/wap/xidian-form-nucleic-acid/remind",
          nucleiccubecommitbasexdForm:
            "/ncov/wap/xidian-form-nucleic-acid/commit",
          nucleiccubeulistsxdForm: "/ncov/wap/xidian-form-nucleic-acid/ulists",
          nucleiccubeuexportxdForm: "/ncov/wap/xidian-form-nucleic-acid/export",
          nucleiccubeuedetailxdForm:
            "/ncov/wap/xidian-form-nucleic-acid/detail",
          nucleiccubestudentxdForm:
            "/ncov/wap/xidian-form-nucleic-acid/manager",
          nucleiccubemanagerxdForm:
            "/ncov/wap/xidian-form-nucleic-acid/manager-time",
          cubefenjibuu: "/ncov/wap/buu/fenji",
          cubeulistsbuu: "/ncov/wap/buu/ulists",
          cubeuexportbuu: "/ncov/wap/buu/export-ztqk-email",
          statexportbuu: "/ncov/wap/buu/export-stat-email",
          cubecommitbuu: "/ncov/wap/buu/commit",
          cubestudentbuu: "/ncov/wap/buu/manager",
          listexportbuu: "/ncov/wap/buu/export",
          cubeuedetailbuu: "/ncov/wap/buu/detail",
          getdiffbuu: "/ncov/wap/buu/diff",
          cubeuexportdiffbuu: "/ncov/wap/buu/diff-export",
          getdifflistbuu: "/ncov/wap/buu/diff-lists",
          nuaacommit: "/ncov/wap/nuaa/commit",
          nuaafenji: "/ncov/wap/nuaa/fenji",
          nuaaulists: "/ncov/wap/nuaa/ulists",
          nuaaumanager: "/ncov/wap/nuaa/manager",
          cubeuemanagernuaa: "/ncov/wap/nuaa/manager-time",
          cubefenjiBnutw: "/ncov/wap/bnu2/fenji",
          cubeulistsbnutwo: "/ncov/wap/bnu2/ulists",
          cuberemindbasebnu: "/ncov/wap/bnu2/remind",
          cubeuexportbnutwo: "/ncov/wap/bnu2/export",
          cubestudentbnutw: "/ncov/wap/bnu2/manager",
          cubecommitbnutw: "/ncov/wap/bnu2/commit",
          cubeuexportdiff: "/ncov/wap/bjut/diff-export",
          cubeuedetailbjut: "/ncov/wap/bjut/detail",
          cubefenjibjut: "/ncov/wap/bjut/fenji",
          cubeulistsbjut: "/ncov/wap/bjut/ulists",
          cubeuexportbjut: "/ncov/wap/bjut/export",
          cubeuemanagerbjut: "/ncov/wap/bjut/manager-time",
          cubestudentbjut: "/ncov/wap/bjut/manager",
          cubecommitbjut: "/ncov/wap/bjut/commit",
          basegroupbupt: "/ncov/wap/bupt/groups",
          cubefenjibupt: "/ncov/wap/bupt/fenji",
          cuberemindbasebupt: "/ncov/wap/bupt/remind",
          cubecommitbasebupt: "/ncov/wap/bupt/commit",
          cubeulistsbupt: "/ncov/wap/bupt/ulists",
          cubeuexportbupt: "/ncov/wap/bupt/export",
          cubeuedetailbupt: "/ncov/wap/bupt/detail",
          cubeuemanagerbupt: "/ncov/wap/bupt/manager-time",
          fudaoyuanbuaa: "/ncov/wap/buaa/fudaoyuan",
          fudaoyuanbuaaList: "/ncov/wap/buaa/fudaoyuan-list",
          xueshnegchubuaa: "/ncov/wap/buaa/manager-time",
          xueshnegchubuaalea: "/ncov/wap/buaa/leader",
          buaaexport: "/ncov/wap/buaa/export",
          cubedetailbuaa: "/ncov/wap/buaa/detail",
          fudaoyZju: "/ncov/wap/zju/fenji",
          fudaoyZjulist: "/ncov/wap/zju/ulists",
          xueshengchuZju: "/ncov/wap/zju/manager-time",
          xueshengchuZjuexport: "/ncov/wap/zju/export-stat",
          zjuremind: "/ncov/wap/zju/remind",
          zjucubedetail: "/ncov/wap/zju/detail",
          zjucubeexport: "/ncov/wap/zju/export",
          cubeGroupsZjustu: "/zjuncovxs/wap/zju/groups",
          fudaoyZjustu: "/zjuncovxs/wap/zju/fenji",
          fudaoyZjuliststu: "/zjuncovxs/wap/zju/ulists",
          xueshengchuZjustu: "/zjuncovxs/wap/zju/manager-time",
          xueshengchuZjuexportstu: "/zjuncovxs/wap/zju/export-stat",
          zjuremindstu: "/zjuncovxs/wap/zju/remind",
          zjucubedetailstu: "/zjuncovxs/wap/zju/detail",
          zjucubeexportstu: "/zjuncovxs/wap/zju/export",
          saveRecently: "/ncov/wap/default/save-recently",
          compositionIndex: "",
          compositionAll: "",
          compositionAlldel: "",
          ticketList: "/ticket/wap/default/get-index",
          ticketDetail: "/ticket/wap/default/get-detail",
          ticketSubscribe: "/ticket/wap/default/subscribe",
          ticketCancel: "/ticket/wap/default/cancel-sub",
          ticketEnroll: "/ticket/wap/default/enroll",
          ticketCheck: "/ticket/wap/default/check",
          ticketStatus: "/ticket/wap/default/status",
          ticketConfig: "/ticket/wap/default/wx-config",
          ctrlticket: "/ticket/wap/default/refund",
          seatList: "/features/wap/seats/index",
          seatDetail: "/features/wap/seats/get-detail",
          seatInfo: "/features/wap/seats/get-seats",
          seatSubmit: "/features/wap/seats/save",
          seatDel: "/features/wap/seats/del",
          seatSubcribe: "/features/wap/subcribe-user/index",
          seatCancel: "/features/wap/subcribe-user/cancel",
          seatMine: "/features/wap/seats/get-my-seat",
          seatCheck: "/features/wap/seats/status",
          seatConfig: "/features/wap/seats/wx-config",
          seatYanpiao: "/features/wap/seats/check",
          tjuList: "/tjunotice/wap/client/lists",
          tjuDetail: "/tjunotice/wap/client/detail",
          tjuNewsIndex: "/tjumessage/wap/client/lists",
          tjuNewsDetail: "/tjumessage/wap/client/detail",
          tjuNewsNotice: "/tjumeeting/wap/client/lists",
          tjuNewsNoticeDetail: "/tjumeeting/wap/client/detail",
          tjuOfficiallist: "/tjubumf/wap/client/lists",
          tjuOfficialhot: "/tjubumf/wap/client/detail ",
          newsList: "/news/wap/default/get-list",
          newDetail: "/news/wap/default/get-detail",
          matrix: "/matrix/wap/default/get-index",
          projectList: "/scienceproject/wap/default/get-index",
          paperList: "/science/wap/default/get-index",
          videoList: "/video/wap/video/get-category",
          videoDetail: "/video/wap/video/get-index",
          photoList: "/photo/wap/default/search-new",
          photoPraise: "/photo/wap/default/like",
          myPhotos: "/photo/wap/default/get-user",
          removePhoto: "/photo/wap/default/del",
          uploadPhoto: "/photo/wap/default/save",
          likePhoto: "",
          scoreGetDate: "/score/wap/default/get-index",
          scoreQuery: "/score/wap/default/get-data",
          pkuRuncode: "/pkuwusi/wap/default/send-code",
          pkuRuncodecheck: "/pkuwusi/wap/default/check-code",
          pkuFormSave: "/pkuwusi/wap/form/save",
          walletRecharge: "/pay/wap/wallet/recharge",
          recharge: "/chargecard/wap/default/recharge",
          getRechargeDetail: "/chargecard/wap/default/card-info",
          getAgendaDetail: "/datebook/wap/default/index",
          editAgenda: "/datebook/wap/default/save",
          removeAgenda: "/datebook/wap/default/del",
          agendaManage: "/schedule/wap/default/search",
          universalForm: "/excel/wap/project/get-index",
          formindex: "/form/wap/default/list",
          formdetail: "/form/wap/default/get-index",
          formbtn: "/form/wap/default/save",
          formrucdetail: "/form/wap/ruc/get-index",
          formrucbtn: "/form/wap/ruc/save",
          formrucpagedata: "/form/wap/ruc/get-submit",
          commonFile: "/file/wap/default/info",
          examManage: "/exam/wap/default/info",
          getExamTermInfo: "/exam/wap/default/term-info",
          meeting: "/meeting/wap/default/get-index",
          academic: "/lecture/wap/default/get-index",
          getTopic: "/topic/wap/default/get-index",
          getMsgList: "/comment/wap/index/get-message",
          praiseTopic: "/comment/wap/index/praise",
          removeComent: "/comment/wap/index/del",
          msgDetail: "/comment/wap/index/get-detail",
          commitMsg: "/comment/wap/index/commit",
          welcome: "/signin/wap/default/get-sign-in",
          leave: "/signout/wap/default/index",
          welcomeData: "/signinstat/wap/default/get-stat-in",
          statback: "/signbackstat/wap/default/get-stat-back",
          leaveData: "/signoutstat/wap/default/get-stat-out",
          leaveDatabuaa: "/buaaleave/wap/default/get-stat-out",
          cost: "/payment/wap/default/get-index",
          microStationIndex: "/microsite/wap/default/get-index",
          microStationList: "/microsite/wap/default/get-list",
          microStationDetail: "/microsite/wap/default/get-detail",
          scheduleTime: "/timetable/wap/default/get-index",
          scheduleList: "/timetable/wap/default/get-data",
          scheduleLists: "/timetable/wap/default/get-datatmp",
          graduateScheduleTime: "/yjskb/wap/default/get-index",
          graduateScheduleList: "/yjskb/wap/default/get-data",
          graduateScheduleWeekLists: "/yjskb/wap/default/get-datatmp",
          graduateTeascheduleTime: "/yjsjskb/wap/default/get-index",
          graduateTeascheduleList: "/yjsjskb/wap/default/get-data",
          graduateTeascheduleLists: "/yjsjskb/wap/default/get-datatmp",
          graduateScore: "/yjscj/wap/default/index",
          teascheduleTime: "/jskb/wap/default/get-info",
          teascheduleList: "/jskb/wap/default/get-data",
          teascheduleLists: "/jskb/wap/default/get-datatmp",
          learningProcess: "/xxjd/wap/default/info",
          cnulearningProcess: "/cnuxxjd/wap/default/index",
          phoneget: "/phonebook/wap/default/get-index",
          phonegetdata: "/phonebook/wap/default/get-data",
          phonegetSearch: "/phonebook/wap/default/search",
          netChange: "/password/wap/default/save",
          deviceList: "/netclient/wap/default/get-index",
          deviceOff: "/netclient/wap/default/offline",
          feehis: "/feehis/wap/default/get-index",
          netFee: "/netfees/wap/default/get-index",
          nonetChange: "/passwd/wap/default/save",
          culrpassset: "/wappasswd/wap/default/save",
          myLibrary: "/library/wap/default/info",
          myBorrow: "/borrow/wap/default/info",
          collectionLibrary: "/book/wap/default/get-data",
          orderLibrary: "",
          cardList: "/cardlost/wap/default/info",
          cardMine: "/cardlost/wap/default/new-mine",
          cardEdit: "/cardlost/wap/default/save",
          cardDel: "/cardlost/wap/default/del",
          cardClose: "/cardlost/wap/default/close",
          cardDetail: "/cardlost/wap/default/particular",
          cardThank: "/cardlost/wap/default/thanks",
          cardRead: "/cardlost/wap/default/read",
          voteInfo: "/vote/wap/default/info",
          voteDetail: "/vote/wap/default/particular",
          voteResult: "/vote/wap/default/results",
          vote: "/vote/wap/default/vote",
          voteMsgDefault: "/vote/wap/default/submit",
          materClass: "/wap/material/classify",
          materIndex: "/wap/material/index",
          materPraise: "/wap/material/praise",
          samGetdata: "/sam/wap/curr/get-data",
          samGethis: "/sam/wap/his",
          samPassave: "/sam/wap/pwd/save",
          samClient: "/sam/wap/client/index",
          samOffline: "/sam/wap/client/offline",
          payIndex: "/paymenthall/wap/default/info",
          payDetail: "/paymenthall/wap/default/pay-info",
          payRecode: "/paymenthall/wap/default/history",
          payBtn: "/paymenthall/wap/default/recharge",
          fudanpayDetail: "/fudanpaymenthall/wap/default/pay-info",
          fudanpayBtn: "/fudanpaymenthall/wap/default/recharge",
          idCardHistroy: "/cardhis/wap/default/get-index",
          lostAndFound: "/lost/wap/default/info",
          lostAndFoundDetail: "/lost/wap/default/particular",
          lostAndFoundCenter: "/lost/wap/default/my",
          lostAndFoundHandle: "/lost/wap/default/save",
          lostAndFoundClose: "/lost/wap/default/close",
          lostAndFoundDel: "/lost/wap/default/del",
          lostAndFoundSearch: "/lost/wap/default/index",
          lostAndFoundEdict: "/lost/wap/default/add-new",
          fleamarket: "/fleamarket/wap/default/search",
          fleamarketDetail: "/fleamarket/wap/default/particular",
          fleamarketSetting: "/fleamarket/wap/default/filter-setting",
          fleamarketCenter: "/fleamarket/wap/default/personal",
          fleamarketStatusHandle: "/fleamarket/wap/default/status",
          fleamarketHandle: "/fleamarket/wap/default/save",
          fleamarketStatus: "/fleamarket/wap/default/status",
          repair: "/repair/wap/default/list",
          repairHandle: "/repair/wap/default/save",
          repairCancel: "/repair/wap/default/cancel",
          repairReview: "/repair/wap/default/review",
          repairBackHandle: "/repair/wap/default/re-save",
          repairDetail: "/repair/wap/default/particular",
          workerDetail: "/repair/wap/worker/detail",
          repairType: "/repair/wap/default/add",
          repairloginOut: "/repair/wap/worker/loginout",
          repairUserMes: "/repair/wap/worker/profile",
          repairMesChange: "/repair/wap/worker/change",
          repairHistory: "/repair/wap/worker/history",
          repairUnderWay: "/repair/wap/worker/index",
          repairRefuse: "/repair/wap/worker/refuse",
          repairComplete: "/repair/wap/worker/complete",
          repairmanDetail: "/repair/wap/worker/complete",
          repairlogin: "/repair/wap/worker/login-commit",
          repairCount: "/repair/wap/default/count",
          sendorderindex: "/repair/wap/issue/index",
          sendorderhistory: "/repair/wap/issue/history",
          sendorderworkers: "/repair/wap/issue/workers",
          sendorderdeal: "/repair/wap/issue/deal",
          sendorderdetail: "/repair/wap/issue/detail",
          runTeamIndex: "/buptpt/wap/default/index",
          runTeamOrder: "/buptpt/wap/default/list",
          runTeamRecord: "/buptpt/wap/record/index",
          runDetail: "/buptpt/wap/default/detail",
          runTeamCensus: "/buptpt/wap/total/index",
          record: "/buptpt/wap/record/isopen",
          countDetail: "/buptpt/wap/total/detail",
          group: "/buptpt/wap/total/team",
          information: "/buptpt/wap/total/team-detail",
          taskList: "/buptpt/wap/total/specials",
          taskCount: "/buptpt/wap/total/special-record",
          edit: "/buptpt/wap/record/save",
          runTeamIndexstu: "/buptstpt/wap/default/index",
          runTeamOrderstu: "/buptstpt/wap/default/list",
          runTeamRecordstu: "/buptstpt/wap/record/index",
          runDetailstu: "/buptstpt/wap/default/detail",
          runTeamCensusstu: "/buptstpt/wap/total/index",
          recordstu: "/buptstpt/wap/record/isopen",
          countDetailstu: "/buptstpt/wap/total/detail",
          groupstu: "/buptstpt/wap/total/team",
          informationstu: "/buptstpt/wap/total/team-detail",
          taskListstu: "/buptstpt/wap/total/specials",
          taskCountstu: "/buptstpt/wap/total/special-record",
          editstu: "/buptstpt/wap/record/save",
          assetIndex: "/asset/wap/default/info",
          assetSearch: "/asset/wap/default/lists",
          assetDetail: "/asset/wap/default/detail",
          file: "/file/wap/default/info",
          paymentDetail: "/pay/wap/pay/result",
          paymentstatus: "/pay/wap/pay/pay-status",
          paymentgopay: "/pay/wap/pay/order",
          paymentgopaybtn: "/pay/wap/order/prepay",
          paymentgopayctrl: "/pay/wap/order/cancel",
          paymentwx: "/pay/wap/order/get-result",
          paymentindex: "/pay/wap/pay/record",
          paymentcount: "/pay/wap/pay/stat",
          paymentdetailPay: "/pay/wap/pay/wait-pay",
          paymentPay: "/pay/wap/order/get-params",
          paymentwalletinfo: "/pay/wap/wallet/wallet-balance",
          paymentwallet: "/pay/wap/order/wallet-pay",
          wxAppletsPayurl: "",
          qyPayConfig: "/pay/wap/order/get-config",
          hjqtxyappResult: "/hjqtxyapp/wap/default/result",
          freeclassindex: "/classroom/wap/default/index",
          freeclass: "/classroom/wap/default/room",
          lottery: "/lottery/wap/hiteggs/index",
          lotteryaward: "/lottery/wap/hiteggs/award-new",
          shuttleBusList: "/regularbus/wap/default/index-ajax",
          shuttleDetails: "/regularbus/wap/default/details",
          applicationSquareList: "/appsquare/wap/default/index",
          applicationSquaresearchList: "/appsquare/wap/default/search",
          virtualCard: "/wap/wx-card/stats-info",
          dataStatistics: "/uc/wap/qy-datacube",
          dataStatisticsrole: "/uc/wap/qy-datacube/get-data",
          upcdataStatistics: "/upcdatastat/wap/default/index",
          upcdataStatisticsrole: "",
          mapGuideIndex: "/map_guide/wap/default/info",
          schoolMapList: "/map/wap/map/new-list",
          schoolMapListmap: "/map/wap/map/info",
          schoolAtlasList: "/album/wap/album/list",
          schoolAtlasDetail: "/album/wap/album-photo/info",
          activityindex: "/action/wap/default/index",
          activityhall: "/action/wap/default/hall",
          activitymanage: "/action/wap/default/new-mine-manage",
          activityParticipate: "/action/wap/default/new-mine-join",
          activitymanagechild: "",
          activitymanageSing: "/action/wap/checkin/get-members",
          activitymanageSingSend: "/action/wap/checkin/send",
          activitymanageSingsure: "/action/wap/checkin/confirm",
          activityfile: "/action/wap/file/get-lists",
          activitychangefile: "/action/wap/file/change",
          activityMyfile: "/action/wap/file/get-my-lists",
          activitycomment: "/comment/wap/default/get-message",
          activityupLoad: "/action/wap/file/upload",
          activityMyfileDel: "/action/wap/file/del-myfile",
          activitycommitEva: "/action/wap/default/eva",
          activityphoto: "/action/wap/file/get-lists",
          activitydetail: "/action/wap/default/new-detail",
          activitydetailSendcommont: "/comment/wap/default/commit",
          activityStatus: "/action/wap/comment/change-status",
          activityPhotoStatus: "/action/wap/file/change",
          activitysignInfo: "/action/wap/checkin/has-sign",
          activitysignBtn: "/action/wap/checkin/sign",
          activityphotochild: "/action/wap/file/get-images",
          activityMyphotochild: "/action/wap/file/new-mine-photo",
          activityphotochildremove: "/action/wap/file/del-myfile",
          activityphotochildzan: "/action/wap/file/praise",
          activityaddnew: "/action/wap/default/save",
          activitygetType: "/action/wap/default/get-types",
          photoCollection: "/reviewpic/wap/photo/index",
          validphoto: "/reviewpic/wap/photo/valid",
          savephoto: "/reviewpic/wap/photo/save",
          answer: "/answer/wap/default/info",
          answerDetail: "/answer/wap/default/submit",
          answerCommit: "/base/wap/submit/commit",
          answerReward: "/answer/wap/default/reanswer",
          answerContinue: "/answer/wap/default/continue",
          answerNext: "/answer/wap/default/next-page-new",
          answerRecord: "/answer/wap/default/record-new",
          answerRecordNext: "/answer/wap/default/next-record-new",
          buceaindex: "/bucearecharge/wap/default/get-area",
          buceadian: "/bucearecharge/wap/default/get-margin",
          bucearechargeBtn: "/bucearecharge/wap/default/payment",
          bucearechargeRecord: "/bucearecharge/wap/order/list",
          buceaindexs: "/bucearecharge/wap/default/test-get-area",
          buceaindexstext: "/bucearecharge/wap/default/get-area-data",
          buceaMessage: "/buceamessage/wap/default/index",
          buceaMessagejump: "/buceamessage/wap/default/read",
          xidianmembershipFees: "/xddf/wap/default/index",
          xidianmembershipFeesYear: "/xddf/wap/default/year",
          upcApprovalList: "/upcprocess/wap/client/todo-list",
          upcApprovalGroupList: "/upcprocess/wap/client/group-list",
          upcApprovalGroupDetail: "/upcprocess/wap/client/group-detail",
          upcApprovalReadNext: "/upcprocess/wap/client/read-next",
          upcApprovalWriteGroup: "/upcprocess/wap/client/write-group",
          upcApprovalTypeone: "",
          upcApprovalTypetwo: "",
          upcApprovalTypethree: "",
          upcApprovaluserdetail: "/upcprocess/wap/client/read-person",
          upcApprovalWritePerson: "/upcprocess/wap/client/write-person",
          upctrialUserdetail: "",
          upctrialUserProc: "/upcprocess/wap/client/read-user-proc",
          agendaIndex: "/myschedule/wap/default/schedules",
          agendaSubscribeList: "/myschedule/wap/default/subsciable-list",
          agendaCancelSub: "/myschedule/wap/default/cancel-sub",
          agendaSubscribe: "/myschedule/wap/default/subscribe",
          agendaCreate: "/myschedule/wap/default/create-schedule",
          agendaEditSchedule: "/myschedule/wap/default/edit-schedule",
          agendaDeleteSchedule: "/myschedule/wap/default/delete-schedule",
          agendaScheduleRemind: "/myschedule/wap/default/schedule-remind",
          agendaSchedule: "/myschedule/wap/default/schedule",
          agendaScheduleByCid: "/myschedule/wap/default/schedules-by-cid",
          agendaDeleteClassify: "/myschedule/wap/default/delete-classify",
          agendaEditClass: "/myschedule/wap/default/edit-classify",
          agendaCreateClass: "/myschedule/wap/default/create-classify",
          agendaClass: "/myschedule/wap/default/classify",
          agendaSetRemind: "/myschedule/wap/default/set-remind",
          agendaRemindStatus: "/myschedule/wap/default/remind-status",
          agendagroups: "/myschedule/wap/default/groups",
          agendagroup: "/myschedule/wap/default/group",
          agendadeletegroup: "/myschedule/wap/default/delete-group",
          agendagsavegroups: "/myschedule/wap/default/save-group",
          feeRecharge: "/chargefee/wap/default/recharge",
          feeRechargeCnu: "/cnuchargefee/wap/default/recharge",
          feeIndexCnu: "/cnuchargefee/wap/default/index",
          carLicenseindex: "",
          carLicenselookpage: "",
          carLicensesave: "",
          carLicensesaveBtn: "",
          mylittlepurseindex: "/pay/wap/wallet/index",
          mylittlepursedetail: "/pay/wap/wallet/record",
          fudanGeneralEnglishtab: "/fudancomputer/wap/default/tabs",
          fudanGeneralEnglish: "/fudancomputer/wap/default/index",
          fudanGeneralEnglishMakes: "/fudancomputer/wap/default/appointment",
          fudanGeneralEnglishnoMakes: "/fudancomputer/wap/default/cancel",
          waitCheck: "/ws.rs.oa/service/workflow/user_task/todo_tasks",
          completeCheck: "/ws.rs.oa/service/workflow/doc_form/search_done_list",
          docForm: "/ws.rs.oa/service/workflow/doc_form",
          docFormStatus: "/ws.rs.oa/service/workflow/status",
          fileInfo: "/ws.rs.oa/service/workflow/user_task",
          flowLog: "/ws.rs.oa/service/workflow/user_task/user_task_log",
          recodeLog: "/ws.rs.oa/service/workflow/doc_form_approval/by_doc_form",
          fileDown: "/ws.rs.oa/service/workflow/doc_form_atta/all",
          college: "/ws.rs.oa/service/common/college",
          flowList:
            "/ws.rs.oa/service/workflow/user_task/search_redirect_tasks",
          searchTodo: "/ws.rs.oa/service/workflow/user_task/search_todo_tasks",
          searchWaitdo: "/ws.rs.oa/service/workflow/doc_form/search_done_list",
          searchFlowdo:
            "/ws.rs.oa/service/workflow/user_task/search_redirect_tasks",
          getSidapi: "/a_tju/api/login/index",
          getCommmet: "/ws.rs.oa/service/workflow/doc_form_comment",
          isRead: "/ws.rs.oa/service/workflow/user_task",
          sendMaster: "/ws.rs.oa/service/workflow/role/children_roles",
          send: "/ws.rs.oa/service/workflow/submit_to_role",
          searchMaster: "/ws.rs.oa/service/workflow/role/search_children_roles",
          mccegetsta: "/fudanexam/wap/default/status",
          mccesavein: "/fudanexam/wap/default/save",
          generalHomeData: "/appointment/wap/default/index",
          generalHistory: "/appointment/wap/default/log",
          generalDeleteApp: "/appointment/wap/default/cancel",
          generalDetailApp: "/appointment/wap/default/detail",
          generalappointApp: "/appointment/wap/default/appoint",
          generalappointAppmuc: "/appointment/wap/muc/appoint",
          generalSpaceDetail: "/fieldroom/wap/default/detail",
          generalSubscribe: "/fieldroom/wap/default/subscribe",
          generalRecordDetail: "/fieldroom/wap/default/record-detail",
          generalRecordPass: "/fieldroom/wap/default/pass",
          generalRecordreject: "/fieldroom/wap/default/reject",
          generalsubmit: "/appointment/wap/default/submit",
          generalcommit: "/base/wap/submit/commit",
          getHomepage: "/mashupapp/wap/default/home",
          getHomepaged: "/mashupapp/wap/real/home",
          touristSearch: "/mashupapp/wap/default/search",
          loginSearch: "/mashupapp/wap/real/search",
          addApplication: "/mashupapp/wap/real/add-commonly",
          cancelApplication: "/mashupapp/wap/real/delete-commonly",
          payhomeDefault: "/mashupapp/wap/new-default/pay-home",
          payhomeReal: "/mashupapp/wap/new-real/pay-home",
          paysearchDefault: "/mashupapp/wap/new-default/pay-search",
          paysearchReal: "/mashupapp/wap/new-real/pay-search",
          loginUnify: "/a_scu/api/sso/check",
          loginOA: "/a_scu/api/sso/oa-check",
          getCode: "/a_scu/api/sso/send-code",
          bindGetinf: "/a_scu/api/sso/user-info",
          verifyCode: "/a_scu/api/sso/bind-mobile",
          getCodeago: "/scumobile/wap/default/send-self",
          getCodeagin: "/scumobile/wap/default/send-user",
          changeTl: "/scumobile/wap/default/change",
          getPasscode: "/scunet/wap/default/sms",
          setPass: "/scunet/wap/default/savepwd",
          evaStatGetDate: "/cnuevaluate/wap/default/terms",
          evaStat: "/cnuevaluate/wap/default/index",
          bindGetinfCertification: "/a_bnu/api/auth/code-info",
          bnuGetCode: "/a_bnu/api/auth/send-sms-code",
          bindGetinfCertificatiBtn: "/a_bnu/api/auth/authentication",
          fudanexamManage: "/fudanexam/wap/client/index",
          smlogin: "/wap/scan/commit",
          smdlScan: "/wap/scan/index",
          ipasSearch: "/remains/wap/default/index",
          ipasLoss: "/ecard/wap/default/do-loss",
          announcementRelease: "/noticepush/wap/default/get-data",
          announcementReleaseDetail: "/noticepush/wap/default/detail",
          kccx_jieci: "/kccx/wap/default/index",
          kccx_query: "/kccx/wap/default/list",
          guideClass: "/guide/wap/default/index",
          guideSearch: "/guide/wap/default/search",
          guideDetail: "/guide/wap/default/detail",
          guideKey: "/guide/wap/default/new-key",
          guideSearchPc: "/guide/wap/pc/search",
          guideIndexPc: "/guide/wap/pc/index",
          bodaIndex: "/bdcom/wap/default/index",
          bodaLists: "/bdcom/wap/default/lists",
          bodaDetail: "/bdcom/wap/default/detail",
          bodaListsDetail: "/bdcom/wap/default/owner-detail",
          healthConfig: "/healthcode/wap/default/config",
          healthInfo: "/healthcode/wap/default/get-info",
          healthSave: "/healthcode/wap/default/save",
          healthIndex: "/healthcode/wap/default/index",
          schHistory: "/history/wap/default/get-index",
          dkykt: "/datalook/wap/default/index",
          dkpwd: "/datalook/wap/default/do-loss",
          dkls: "/datalook/wap/default/history",
          dklsfields: "/datalook/wap/default/get-his-fields",
          gzcxs: "/gzv1/wap/default/get-data",
          snnugzWapDefaultGetData: "/snnugz/wap/default/get-data",
          settsaveInfors: "/wap/setting/info",
          hotissueindex: "/hotissue/wap/default/index",
          hotissuelist: "/hotissue/wap/default/list",
          hotissuedefault: "/hotissue/wap/default/detail",
          hotissuecommit: "/hotissue/wap/default/commit",
          hotissuecommitother: "/hotissue/wap/default/commit-other",
          announcementRelease: "/noticepush/wap/default/get-data",
          announcementReleaseDetail: "/noticepush/wap/default/detail",
          drcomindex: "/drcom/wap/default/get-data",
          drcomindexoffline: "/drcom/wap/client/offline",
          drcompassword: "/drcom/wap/password/save",
          drcomList: "/drcom/wap/client/get-data",
          drcomIndexs: "/drcom/wap/client/get-index",
          drcomLists: "/drcom/wap/client/get-list",
          drcomCnuUnbind: "/drcom/wap/client/unbindmac",
          drcomCnuBind: "/drcom/wap/client/bindmac",
          drcomCnuUnbindAll: "/drcom/wap/client/unbindallmac",
          personalprojectList: "/personsciproject/wap/default/list",
          personalpaperlist: "/personsci/wap/default/list",
          paperWorklist: "/researchpapers/wap/default/list",
          shenLanMsg: "/srun/wap/srun/index",
          shenLanInDetails: "/srun/wap/srun/search",
          shenLanInDetailsSearch: "/srun/wap/srun/search-v1",
          shenLanChangeOne: "/srun/wap/srun/change",
          shenLanChangeTwo: "/srun/wap/srun/changenoold",
          shenLanRule: "/srun/wap/srun/changepassnoold",
          shenLanActi: "/srun/wap/srun/show-user",
          shenLanEquipment: "/srun/wap/srun/equipment",
          shenLanOffline: "/srun/wap/srun/offline",
          shenLanPayment: "/srun/wap/srun/payment",
          shenLanStatus: "/srun/wap/srun/user-status",
          srunsrunIndex: "/srun/wap/srun/packages",
          srunsrunpackageBuy: "/srun/wap/srun/package-buy",
          srunsrunbalance: "/srun/wap/srun/balance",
          wageIndex: "/cfaugz/wap/default/index",
          rssList: "/rss/wap/rss/index",
          rssTake: "/rss/wap/rss/take",
          rssCreatetk: "/rss/wap/rss/createtk",
          rssCreatetkjump: "/rss/wap/rss/createtkjump",
          rssinfoIndex: "/rss/wap/rssinfo/index",
          rssSearch: "/rss/wap/rssinfo/search",
          buaaClassQueryIndex: "/buaafreeclass/wap/default/index",
          buaaClassQuerySearch: "/buaafreeclass/wap/default/search",
          buaaClassQueryDetail: "/buaafreeclass/wap/default/detail",
          buaaClassQueryIndexs: "/buaafreeclass/wap/default/index1",
          buaaClassQuerySearchs: "/buaafreeclass/wap/default/search1",
          buaaleaveIndex: "/buaaleave/wap/default/index",
          buaaleaveStudent: "/buaaleave/wap/default/student",
          buaaleaveSign: "/buaaleave/wap/default/sign",
          buaaleaveSelect: "/buaaleave/wap/default/batch",
          xidianClassQueryIndex: "/xidianfreeclass/wap/default/index",
          xidianClassQuerySearch: "/xidianfreeclass/wap/default/search",
          appointList: "/appointment/wap/default/list",
          appointAdd: "/appointment/wap/default/add",
          appointSave: "/appointment/wap/default/save",
          recordList: "/fieldroom/wap/default/record-list",
          unSubscribe: "/fieldroom/wap/default/un-subscribe",
          appointsignInfo: "/appointment/wap/default/sign-info",
          appointsignLog: "/appointment/wap/default/log-list",
          appointsignList: "/appointment/wap/default/sign-list",
          appointsignsupply: "/appointment/wap/default/supply",
          appointsigncheckin: "/appointment/wap/default/checkin-tea",
          xidianMinigramLogin: "/uc/wap/minigram/check",
          newsInterruptionList: "/uc/wap/user/notice-setting",
          newsInterruptionSave: "/uc/wap/user/save-notice",
          ucstypeIndex: "/uc/wap/ucs-type/index",
          ucstypeDisturb: "/uc/wap/ucs-type/no-disturb",
          microServiceIndex: "/rucapp/wap/default/index",
          microServiceMyapp: "/rucapp/wap/default/my-app",
          microServiceTypeapp: "/rucapp/wap/default/type-apps",
          microServiceSearch: "/rucapp/wap/default/search",
          microServiceSavemy: "/rucapp/wap/default/save-my",
          microServiceNotice: "/rucapp/wap/default/notice",
          xidianGuardList: "/xdguard/wap/default/index",
          saveLog: "/api/log/save-log",
          newsaveLog: "/wap/log/save-log",
          saveWebLog: "/api/log/save-web-log",
          nuaaregularbus: "/regularbus/wap/default/get-data",
          getTongjiHead: "/ncov/wap/datacube-new/tongji-head",
          getTongjiFanjing: "/ncov/wap/datacube-new/tongji-fanjing",
          getTongjiRenyuanfenbu: "/ncov/wap/datacube-new/tongji-renyuanfenbu",
          getTongjiMap: "/ncov/wap/datacube-new/tongji-map",
          getTongjiDaKa: "/ncov/wap/datacube-new/tongji-da-ka",
          getTongjiUser: "/ncov/wap/datacube-new/tongji-user",
          ncovSaveError: "/ncov/wap/default/save-geo-error",
          ncovSaveRecently: "/ncov/wap/default/save-recently",
          ncovDailyInfo: "/ncov/wap/normal/get-info",
          ncovDailyInfoindex: "/ncov/wap/default/index",
          ncovDailyInfoSave: "/ncov/wap/default/save",
          ncovfudanBaseInfo: "/ncov/wap/fudan/get-info",
          ncovfudanBaseInfoSave: "/ncov/wap/default/save",
          ncovBaseInfo: "/ncov/wap/normal/history",
          ncovBaseInfoSave: "/ncov/wap/normal/save-history",
          ncovfundanBaseInfo: "/ncov/wap/fudan/history",
          ncovfundancovBaseInfoSave: "/ncov/wap/fudan/save-history",
          ncovfudanDailyInfo: "/ncov/wap/fudan/get-info",
          ncovfudanDailyInfoSave: "/ncov/wap/fudan/save",
          ncovfudanDailyTeacherDaily: "/ncov/wap/fudan/teacher-daily",
          ncovfudanDailyTeacherDailySave: "/ncov/wap/fudan/save-teacher-daily",
          ncovfudanDailyup: "/ncov/wap/open-report/index",
          ncovfudanDailyupsetting: "/ncov/wap/open-report/get-setting",
          ncovfudanDailyupSave: "/ncov/wap/open-report/save",
          xisuncovfudanDailyup: "/xisuncov/wap/open-report/index",
          xisuncovfudanDailyupsetting: "/xisuncov/wap/open-report/get-setting",
          xisuncovfudanDailyupSave: "/xisuncov/wap/open-report/save",
          cauncovfudanDailyup: "/cauncov/wap/open-report/index",
          cauncovfudanDailyupsetting: "/cauncov/wap/open-report/get-setting",
          cauncovfudanDailyupSave: "/cauncov/wap/open-report/save",
          fudanTeacherYm: "/ncov/wap/fudan/teacher-ym",
          fudanSaveTeacherYm: "/ncov/wap/fudan/save-teacher-ym",
          ncovWapFudanStudentYm: "/ncov/wap/fudan/student-ym",
          ncovWapFudanSaveStudentYm: "/ncov/wap/fudan/save-student-ym",
          getDailySetting: "/ncov/api/default/setting",
          getDailyReport: "/ncov/api/default/daily",
          setDailyReport: "/ncov/api/default/save",
          getBaseReport: "/ncov/api/default/index",
          setBaseReport: "/ncov/api/default/save-recently",
          setConApply: "/ncov/api/manager/can-apply",
          ucassetDailyReport: "/ucasncov/api/default/save",
          ucasgetDailyReport: "/ucasncov/api/default/daily",
          ucassetBaseReport: "/ucasncov/api/default/save-recently",
          ucasgetBaseReport: "/ucasncov/api/default/index",
          hitszgetDailySetting: "/hitncov/wap/default/setting",
          hitszgetDailyReport: "/hitncov/wap/default/daily",
          hitszsetDailyReport: "/hitncov/wap/default/save",
          hitszgetBaseReport: "/hitncov/wap/default/index",
          hitszsetBaseReport: "/hitncov/wap/default/save-recently",
          hitszsetConApply: "/hitncov/wap/default/can-apply",
          getDepartTree: "/ncov/api/manager/get-depart-tree",
          getAuthGroup: "/ncov/api/manager/get-auth-group",
          applyManager: "/ncov/api/manager/apply-manager",
          getApplyInfo: "/ncov/api/manager/get-apply-info",
          getUserList: "/ncov/api/manager/user-list",
          delUser: "/ncov/api/manager/delete-user",
          cubeuedetailhit: "/ncov/wap/hit/detail",
          cubeuexporthit: "/ncov/wap/hit/export",
          cubeulistshit: "/ncov/wap/hit/ulists",
          cubefenjihit: "/ncov/wap/hit/fenji",
          cubeuemanagerhit: "/ncov/wap/hit/manager-time",
          cubeuedetailucas: "/ncov/wap/ucas/detail",
          cubeulistsucas: "/ncov/wap/ucas/ulists",
          cubefenjiucas: "/ncov/wap/ucas/fenji",
          cubeuemanagerucas: "/ncov/wap/ucas/manager-time",
          cubecommitucas: "/ncov/wap/ucas/commit",
          getdiffucas: "/ncov/wap/ucas/diff",
          cubestudentucas: "/ncov/wap/ucas/manager",
          getdifflistucas: "/ncov/wap/ucas/diff-lists",
          cubeuexportdiffucas: "/ncov/wap/ucas/diff-export",
          searchCountry: "/ncov/api/country/search",
          cubeuedetailucasTeacher: "/ucasncov/wap/ucas/detail",
          cubeulistsucasTeacher: "/ucasncov/wap/ucas/ulists",
          cubefenjiucasTeacher: "/ucasncov/wap/ucas/fenji",
          cubeuemanagerucasTeacher: "/ucasncov/wap/ucas/manager-time",
          cubecommitucasTeacher: "/ucasncov/wap/ucas/commit",
          getdiffucasTeacher: "/ucasncov/wap/ucas/diff",
          cubestudentucasTeacher: "/ucasncov/wap/ucas/manager",
          getdifflistucasTeacher: "/ucasncov/wap/ucas/diff-lists",
          cubeuexportdiffucasTeacher: "/ucasncov/wap/ucas/diff-export",
          ucasexportTeacher: "/ucasncov/wap/ucas/export",
          ucascuberemindbase: "/ucasncov/wap/datacube-base/remind",
          ucasdeldaily: "/ucasncov/wap/default/del-daily",
          saveAva: "/uc/wap/user/save-avatar",
          healthcodeGetinfo: "/healthcode/wap/default/index",
          healthcodemasterGetinfo: "/healthcode/wap/default/dindex",
          healthcodemasterGetinfoipindex: "/healthcode/wap/pku/ip-index",
          healthcodeWapCupGetJkbss: "/healthcode/wap/cup/get-jkbss",
          healthcodemasterGetinfoscu: "/healthcode/wap/nocode/index",
          buaahealthcodemasterGetinfo: "/healthcode/wap/buaa/dindex",
          healthpkuPic: "/healthcode/wap/default/pku-pic",
          pkuhealthcodemasterGetinfo: "/healthcode/wap/pku/dindex",
          pkutwhealthcode: "/healthcode/wap/pku/save-tw",
          pkuhealthcodelog: "/healthcode/wap/default/log",
          healthcodepku: "/healthcode/wap/record-stat/pku",
          uestcServiceIndex: "/uestcapp/wap/default/index",
          uestcServiceMyapp: "/uestcapp/wap/default/my-app",
          uestcServiceTypeapp: "/uestcapp/wap/default/type-apps",
          uestcServiceSearch: "/uestcapp/wap/default/search",
          uestcServiceSavemy: "/uestcapp/wap/default/save-my",
          uestcServiceNotice: "/uestcapp/wap/default/notice",
          studyRomm: "/studyroom/wap/default/room",
          studyReport: "/studyroom/wap/default/report",
          studyRoomstat: "/studyroom/wap/default/stat",
          healthcodeCount: "/healthcode/api/default/get-count",
          uestcIpassye: "/uestcye/wap/default/info",
          csubaodao: "/csureport/wap/default/report",
          csuData: "/csureport/wap/default/stat",
          csulist: "/csureport/wap/default/user-list",
          csuimportlist: "",
          csuappWapMsgList: "/csuapp/wap/msg/list",
          csuappWapMsgRead: "/csuapp/wap/msg/read",
          csuappWapFeedBackTypes: "/csuapp/wap/feed-back/types",
          csuappWapFeedBackSave: "/csuapp/wap/feed-back/save",
          csuappWapFeedBackLists: "/csuapp/wap/feed-back/lists",
          fdcourse: "/fudanorder/wap/default/index",
          fdaccess: "/fudanorder/wap/default/access",
          fdappoint: "/fudanorder/wap/default/appoint",
          fdcancel: "/fudanorder/wap/default/cancel",
          fdlog: "/fudanorder/wap/default/log",
          fdsignin: "/fudanorder/wap/default/signin",
          fdcheckin: "/fudanorder/wap/default/checkin",
          fdteacher: "/fudanorder/wap/default/teacher",
          fdtdetail: "/fudanorder/wap/default/tdetail",
          pkupageindex: "/pkuwusi/wap/cert/verify",
          pkuforminfo: "/pkuwusi/wap/cert/get-info",
          pkuformsave: "/pkuwusi/wap/cert/save",
          saveMuc: "/form/wap/default/save-muc",
          newformindex: "/forms/wap/default/get-info",
          newformsave: "/forms/wap/default/save",
          getcreatedcode: "/healthcode/api/default/index",
          getcreatedcodes: "/studyroom/api/default/index",
          getcreatedcodeone: "/rucfile/api/default/index",
          getcreatedcoderuc: "/rucfile/api/default/lists",
          bjtucanteen: "/bjtucanteen/wap/default/index",
          upcelebtn: "/upcecard/wap/check/outside-user",
          cauncovxsBase: "/cauncovxs/wap/normal/history",
          cauncovxsBaseInfoSave: "/cauncovxs/wap/normal/save-history",
          cauncovxsDailyup: "/cauncovxs/wap/normal/get-info",
          cauncovxsDailyupSave: "/cauncovxs/wap/normal/save",
          tempIndex: "/cnuaccess/wap/default/index",
          tempExport: "/cnuaccess/wap/default/export",
          signbutinfo: "/signed/wap/default/info",
          signbutindex: "/signed/wap/default/index",
          signbut: "/signed/wap/default/check",
          signbutrecord: "/signed/wap/default/record",
          signbutcheckinTea: "/signed/wap/default/checkin-tea",
          signbutdaiti: "/signed/wap/default/daiti",
          signedlists: "/signed/wap/manager/signin-lists",
          diplomaFormSubmit: "/fudantranscripts/wap/default/submit",
          diplomaRecord: "/fudantranscripts/wap/default/record",
          diplomaPay: "/fudantranscripts/wap/default/pay",
          diplomaInfo: "/fudantranscripts/wap/default/info",
          scoreFormSubmit: "/fudanapply/wap/default/submit",
          scoreRecord: "/fudanapply/wap/default/record",
          scorePay: "/fudanapply/wap/default/pay",
          scoreInfo: "/fudanapply/wap/default/info",
          nwafucwzxindex: "/nwafucwzx/wap/default/index",
          nwafucwzxdetail: "/nwafucwzx/wap/default/detail",
          nwafucwzxsjmx: "/nwafucwzx/wap/default/sjmx",
          nwafucwzxsqxx: "/nwafucwzx/wap/default/sqxx",
          nwafucwzxauth: "/nwafucwzx/wap/default/auth",
          nwafucwzxseachUser: "/nwafucwzx/wap/default/seach-user",
          nwafucwzxsaveAuth: "/nwafucwzx/wap/default/save-auth",
          nwafucwzxauthUser: "/nwafucwzx/wap/default/auth-user",
          nwafucwzxdelAuth: "/nwafucwzx/wap/default/del-auth",
          nwafucwzxdwLeader: "/nwafucwzx/wap/default/dw-leader",
          nwafucwzxdeptOrder: "/nwafucwzx/wap/default/dept-order",
          nwafucwzxxmlbOrder: "/nwafucwzx/wap/default/xmlb-order",
          nwafucwzxzxOrder: "/nwafucwzx/wap/default/zx-order",
          nwafucwzxzxXm: "/nwafucwzx/wap/default/zx-xm",
          nwafucwzxzxl: "/nwafucwzx/wap/default/zxl",
          nwafucwzxxxLeader: "/nwafucwzx/wap/default/xx-leader",
          nwafucwzxxldZxl: "/nwafucwzx/wap/default/xld-zxl",
          "graduation-index": "/xisubyhx/wap/default/index",
          "createsign-save": "/signed/wap/manager/save-signin",
          "createsign-info": "/signed/wap/manager/info",
          "chooseuser-tag": "/wap/structure/tag-list",
          "chooseuser-filter": "/wap/structure/filter-list",
          "chooseuser-depart": "/wap/structure/depart-list",
          "chooseuser-user": "/wap/structure/user-list",
          "search-depart": "/wap/structure/search-depart",
          "search-user": "/signed/wap/manager/search-user",
          "search-tag": "/wap/structure/search-tag",
          "search-filter": "/wap/structure/search-filter",
          xidianaccount: "/a_xidian/api/report/account",
          pkuxwloginyzm: "/a_pku/api/outside/send",
          pkuxwloginbtn: "/a_pku/api/outside/login",
          bjutxwloginyzm: "/a_bjut/api/outside/send",
          bjutxwloginbtn: "/a_bjut/api/outside/login",
          bjutoutsidezjlx: "/a_bjut/api/outside/zjlx",
          bpixwloginyzm: "/a_bpi/api/outside/send",
          bpixwloginbtn: "/a_bpi/api/outside/login",
          bpioutsidezjlx: "/a_bpi/api/outside/zjlx",
          rucfileinfo: "/rucfile/wap/default/info",
          rucfileaccept: "/rucfile/wap/default/accept",
          rucfilefiled: "/rucfile/wap/default/filed",
          rucfilelists: "/rucfile/wap/default/lists",
          rucfiledetail: "/rucfile/wap/default/detail",
          rucfileremark: "/rucfile/wap/default/remark",
          rucfilelealist: "/rucfile/wap/default/leader-list",
          rucfiledwlist: "/rucfile/wap/default/dw-list",
          uestcpricardAuth: "/uestcpricard/wap/default/has-auth",
          uestcpricardList: "/uestcpricard/wap/default/list",
          uestcpricardSave: "/uestcpricard/wap/default/save",
          "upcportal-news-top": "/frontend/home/news-top",
          nuaacardiInfo: "/nuaacard/wap/default/info",
          nuaacardPay: "/nuaacard/wap/default/pay",
          nuaacardhistory: "/nuaacard/wap/default/history",
          nuaacardlost: "/nuaacard/wap/default/lost",
          nuaacardunlost: "/nuaacard/wap/default/unlost",
          nuaacardmodify: "/nuaacard/wap/default/modify",
          nuaacardotherPay: "/nuaacard/wap/default/other-pay",
          upcsearchinfoSearch: "/upcsearchinfo/wap/default/search",
          upcsearchinfofaceSearch: "/upcsearchinfo/wap/default/face-search",
          mucappHome: "/mucapp/wap/default/index",
          mucappSearch: "/mucapp/wap/default/search",
          xisuappHome: "/xisuapps/wap/default/index",
          xisuappSearch: "/xisuapps/wap/default/search",
          cpuoanetChange: "/cupoapass/wap/default/index",
          cupPasswordSet: "/neteasemail/wap/cup/save",
          cupmailbox: "/neteasemail/wap/cup/get-account-list",
          defultPasswordSet: "/neteasemail/wap/default/save",
          getEMailType: "/neteasemail/wap/default/update-check",
          searchArch: "/buaasearch/wap/default/search-archive",
          queryStat: "/buaasearch/wap/default/query-status",
          setMessag: "/buaasearch/wap/default/set-message",
          getcheckpdf: "/buaasearch/wap/default/get-checked-pdf",
          revokeInfo: "/buaasearch/wap/default/revoke-info",
          getguid: "/buaasearch/wap/default/get-guid",
          uploadipg: "/buaasearch/wap/default/upload-file-jpg",
          archiveinput: "/buaasearch/wap/default/archiveinput",
          defaultpay: "/buaasearch/wap/default/pay",
          studeInfo: "/buaasearch/wap/default/student-info",
          queryInfo: "/buaasearch/wap/default/query-status-info",
          buaaqueryDepartment: "/buaasearch/wap/default/query-department",
          buaaquerySpecialty: "/buaasearch/wap/default/query-specialty",
          cnuSites: "/cnucenter/wap/default/sites",
          cnuNewsindex: "/cnucenter/wap/default/index",
          timeTableQuery: "/xkjg/wap/default/get-index",
          nactaClock: "/nactalist/wap/default/info",
          fudanelecInfo: "/fudanelec/wap/default/info",
          fudanelecHis: "/fudanelec/wap/default/his",
          fudanelecRecord: "/fudanelec/wap/default/record",
          fudanelecTopay: "/fudanelec/wap/default/topay",
          fudanelecRecharge: "/fudanelec/wap/default/recharge",
          graduationbuptIndex: "/buptstudent/wap/default/info",
          nuaanetInfo: "/nuaanet/wap/default/info",
          nuaanetRecharge: "/nuaanet/wap/default/recharge",
          mucjccs: "/mucjccs/wap/default/index",
          cfauresult: "/cfauvisiter/wap/default/result",
          cfaulogin: "/cfauvisiter/wap/default/login",
          cfauloginout: "/cfauvisiter/wap/default/logout",
          cfaulists: "/cfauvisiter/wap/default/lists",
          cfaucancel: "/cfauvisiter/wap/default/cancel",
          cfausubmit: "/cfauvisiter/wap/default/submit",
          cfauqrcode: "/cfauvisiter/wap/default/qrcode",
          fudanzlfreeclassIndex: "/fudanzlfreeclass/wap/mobile/index",
          fudanzlfreeclassDetail: "/fudanzlfreeclass/wap/mobile/detail",
          fudanzlfreeclassPcIndex: "/fudanzlfreeclass/wap/pc/index",
          fudanzlfreeclassFloor: "/fudanzlfreeclass/wap/pc/get-floor",
          fudanzlfreeclassPcDetail: "/fudanzlfreeclass/wap/pc/detail",
          freeclassv1WapDefaultIndex: "/freeclassv1/wap/default/index",
          freeclassv1WapDefaultSearch: "/freeclassv1/wap/default/search",
          freeclassv1WapDefaultDetail: "/freeclassv1/wap/default/detail",
          fudanzlndzd: "/fudanzlndzd/wap/default/index",
          fudanzlndzdsave: "/fudanzlndzd/wap/default/save",
          fudanzlndzdsaveNewyear: "/fudanzlndzd/wap/default/save-new-year-log",
          buucodestatFenji: "/buucodestat/wap/datacube-base/fenji",
          "buucodestatUlists​": "/buucodestat/wap/datacube-base/ulists",
          buucodestatGroups: "/buucodestat/wap/datacube-base/groups",
          njulibRecord: "/njulib/wap/my/charge-record",
          njulibRes: "/njulib/wap/my/get-res",
          hnundbgIndex: "/hnundbg/wap/default/index",
          hnundbgSave: "/hnundbg/wap/default/save",
          healthcodebjtu: "/healthcode/wap/bjtu/info",
          buptfxlist: "/ncov/wap/bupt/area-list",
          buptfxlistSave: "/ncov/wap/bupt/area-save",
          buptfxlistDel: "/ncov/wap/bupt/area-delete",
          buaaStudentNcovdaily: "/buaaxsncov/wap/default/get-info",
          buaaStudentNcovdailySave: "/buaaxsncov/wap/default/save",
          zjuStudentNcovdaily: "/zjuncovxs/wap/default/index",
          zjuStudentNcovdailySave: "/zjuncovxs/wap/default/save",
          zjuStudentNcovBaseInfo: "/zjuncovxs/wap/default/recently",
          zjuStudentNcovBaseInfoSave: "/zjuncovxs/wap/default/save-recently",
          healthcodeDoors: "/healthcode/api/ncepu/doors",
          healthcodeUsers: "/healthcode/api/ncepu/users",
          healthcodeStat: "/healthcode/api/ncepu/stat",
          bjtubkIndex: "/bjtubk/wap/default/index",
          bjtubkLists: "/bjtubk/wap/default/lists",
          bjtubksubmit: "/bjtubk/wap/default/submit",
          bjtubkPass: "/bjtubk/wap/default/pass",
          smloginV2: "/wap/qyhl/commit",
          smdlScanV2: "/wap/qyhl/index",
          qrcodeMobile: "/wap/qyhl/mobile",
          qrcodeQyhlpcInfo: "/wap/qyhl/info",
          fudanscheduleTime: "/fudankb/wap/default/get-index",
          fudanscheduleList: "/fudankb/wap/default/get-data",
          fudanscheduleLists: "/fudankb/wap/default/get-datatmp",
          ucassnewsList: "/ucassnews/wap/default/lists",
          ucassnewDetail: "/ucassnews/wap/default/detail",
          fudanbusList: "/fudanbus/wap/default/lists",
          fudanbusCollect: "/fudanbus/wap/default/collect",
          fudanbusRemark: "/fudanbus/wap/default/remark",
          fudanbusRead: "/fudanbus/wap/default/read",
          hnuappMyinfo: "/hnuapp/wap/default/my-info",
          hnuappTypeapps: "/hnuapp/wap/default/type-apps",
          hnuappIndex: "/hnuapp/wap/default/index",
          hnuappSearch: "/hnuapp/wap/default/search",
          hnuappNewslist: "/hnuapp/wap/default/news-list",
          fudanmapguideList: "/map_guide/wap/area/list",
          fudanmapguideClass: "/map_guide/wap/area/class",
          fudanmapguideStation: "/map_guide/wap/area/station",
          fudanmapguideSearch: "/map_guide/wap/area/search",
          fudanmapguideClick: "/map_guide/wap/area/click-times",
          buuPunchindex: "",
          rucsrunIndex: "/rucsrun/wap/default/index",
          rucsrunSearch: "/rucsrun/wap/default/search",
          uestccardhis: "/uestccardhis/wap/default/info",
          ucasbyhx: "/ucasbyhx/wap/default/index",
          cupbyhx: "/cupbyhx/wap/default/index",
          appsquareIndex: "/appsquare/wap/default/index",
          appsquareClassify: "/wap/material/classify",
          appsquareBanner: "/appsquare/wap/default/banner",
          nuaaappSubscribeList: "/nuaaapp/wap/news/subscribe-list",
          nuaaappSaveSub: "/nuaaapp/wap/news/save-sub",
          bnueditAgenda: "/datebook/wap/default/bnu-save",
          hjqtxyappOauth: "/hjqtxyapp/wap/login/oauth",
          buaaxscjGetterm: "/buaaxscj/wap/default/get-term",
          buaaxscjGetkc: "/buaaxscj/wap/default/get-kc",
          buaaxscjSearch: "/buaaxscj/wap/default/search",
          buaajsgzlgetTerm: "/buaajsgzl/wap/default/get-term",
          buaajsgzlSearch: "/buaajsgzl/wap/default/search",
          buaaSelfEvaluationSelect: "/buaajsgzl/wap/default/get-select-list",
          buaaSelfEvaluationSubmit: "/buaajsgzl/wap/default/to-submit",
          buaaxscjDetail: "/buaaxscj/wap/default/detail",
          buaaqxkbGetselect: "/buaaqxkb/wap/default/get-select",
          buaaqxkbSearch: "/buaaqxkb/wap/default/search",
          buaaqxkbDownload: "/buaaqxkb/wap/default/download",
          buaapjIndex: "/buaapj/wap/default/index",
          buaapjSave: "/buaapj/wap/default/save",
          xidianappisLogin: "/xidianapp/wap/default/is-login",
          xidianappIndex: "/xidianapp/wap/default/index",
          xidianappJsfc: "/xidianapp/wap/default/jsfc",
          xidianappAnonymous: "/xidianapp/wap/default/anonymous",
          xidianappxiaoyou: "/xidianapp/wap/default/xiaoyou",
          xidianappMineindex: "/xidianapp/wap/mine/index",
          xidianappMineCancelCollection:
            "/xidianapp/wap/mine/cancel-collection",
          xidianappApp: "/xidianapp/wap/default/app",
          xidianappCollect: "/xidianapp/wap/default/collect",
          xidianappNoDisturb: "/xidianapp/wap/default/no-disturb",
          xidianappUpdModule: "/xidianapp/wap/default/upd-module",
          xidiannewsAccouts: "/xidiannews/wap/default/accouts",
          xidiannewsSubscribe: "/xidiannews/wap/default/subscribe",
          xidiannewsUnsubscribe: "/xidiannews/wap/default/unsubscribe",
          xidiannewsTabs: "/xidiannews/wap/default/tabs",
          xidiannewsNewsList: "/xidiannews/wap/default/news-list",
          xidiannewsNewsDetail: "/xidiannews/wap/default/news-detail",
          xidiannewsClassifies: "/xidiannews/wap/default/classifies",
          xidiannewsFollow: "/xidiannews/wap/default/follow",
          xidiannewsUnfollow: "/xidiannews/wap/default/unfollow",
          xidianbookLists: "/xidianbook/wap/default/lists",
          xidianbookUsers: "/xidianbook/wap/default/users",
          xidianbookUsersone: "/xidianbook/wap/default/search-phone-book",
          xidianbookDetail: "/xidianbook/wap/default/detail",
          xidianappZtfw: "/xidianapp/wap/default/ztfw",
          xidiantzggTabs: "/xidiantzgg/wap/default/tabs",
          xidiantzggList: "/xidiantzgg/wap/default/list",
          xidiantzggDrtail: "/xidiantzgg/wap/default/detail",
          xidiannewsTopList: "/xidiannews/wap/default/top-list",
          xidiantzggTopList: "/xidiantzgg/wap/default/top-list",
          xidianappMsgIndex: "/xidianapp/wap/msg/index",
          xidianappMsgRead: "/xidianapp/wap/msg/read",
          xidianappDb: "/xidianapp/wap/default/db",
          xidianappSearch: "/xidianapp/wap/default/search",
          xidiannewsSearch: "/xidiannews/wap/default/search",
          xidiantzggSearch: "/xidiantzgg/wap/default/search",
          xidianappSearchAdd: "/xidianapp/wap/default/search-add",
          xidianappSearchHistory: "/xidianapp/wap/default/search-history",
          xidianappSearchDel: "/xidianapp/wap/default/search-del",
          xidianCsubookDep: "/csubook/wap/index/departments",
          xidianCsubookLists: "/csubook/wap/index/lists",
          aXidianXiaoyou: "/a_xidian/api/app/xiaoyou",
          xidianappTaskNums: "/xidianapp/wap/task/task-nums",
          xidianappTaskIndex: "/xidianapp/wap/task/index",
          xidianappTaskFlowLog: "/xidianapp/wap/task/task-flow-log",
          xidianappTaskBusiness: "/xidianapp/wap/task/business",
          xidianappTaskSystemNums: "/xidianapp/wap/task/system-nums",
          xidianappGetSearchRecord:
            "/xidianapp/wap/home-page/get-search-record",
          xidianappGetRomaData: "/xidianapp/wap/home-page/get-roma-data",
          xidianappGetAPP: "/xidianapp/wap/home-page/get-app",
          xidianappGetDzgg: "/xidiantzgg/wap/default/top-list",
          xidianappGetAdvertise: "/xidianapp/wap/home-page/get-advertise",
          xidianappGetNewMsg: "/xidianapp/wap/home-page/get-new-msg",
          xidianappGetCard: "/xidianapp/wap/home-page/get-card",
          xidianappSetCollect: "/xidianapp/wap/home-page/set-collect",
          xidianappGetService: "/xidianapp/wap/home-page/get-service",
          njauhomepageHome: "/njauhomepage/wap/default/home",
          njauhomepageVisited: "/njauhomepage/wap/default/visited",
          xidianappLog: "/api/app/log",
          csuxjzcInfo: "/csuxjzc/wap/default/info",
          csuxjzcCommit: "/csuxjzc/wap/default/commit",
          csuxjzcLeader: "/csuxjzc/wap/default/leader",
          "csuxjzcuser-list": "/csuxjzc/wap/default/user-list",
          csuxjzcdetail: "/csuxjzc/wap/default/detail",
          csuxjzcdata: "/csuxjzc/wap/default/data",
          csuxjzcexport: "/csuxjzc/wap/default/export",
          seuHomepageIndex: "/homepage/wap/seu/index",
          seuHomepageAll: "/homepage/wap/seu/all",
          seuHomepageSave: "/homepage/wap/seu/save",
          nudtinfoIndex: "/nudtinfo/wap/default/index",
          csunewsTabs: "/csunews/wap/default/tabs",
          csunewsNewsList: "/csunews/wap/default/news-list",
          csunewsNewsDetail: "/csunews/wap/default/news-detail",
          csunewsDrtail: "/csunews/wap/default/detail",
          csubookLists: "/csubook/wap/default/lists",
          csubookUsers: "/csubook/wap/default/users",
          csubookDetail: "/csubook/wap/default/detail",
          csubookMyDetail: "/csubook/wap/default/user-detail",
          csubookModifyDetail: "/csubook/wap/default/user-save",
          csuappSearch: "/csuapp/wap/default/search",
          csunewsSearch: "/csunews/wap/default/search",
          csutzggSearch: "/csutzgg/wap/default/search",
          csuappSearchAdd: "/csuapp/wap/default/search-add",
          csuappSearchHistory: "/csuapp/wap/default/search-history",
          csuappSearchDel: "/csuapp/wap/default/search-del",
          csunewsClassifies: "/csunews/wap/default/classifies",
          csunewsFollow: "/csunews/wap/default/follow",
          csunewsUnfollow: "/csunews/wap/default/unfollow",
          NewsncovfundancovBaseInfoSave: "/fudanncov/wap/fudan/save-history",
          NewsncovfundanBaseInfo: "/fudanncov/wap/fudan/history",
          NewsfudaninstructortDetail: "/fudanncov/wap/fudan-datacube/detail",
          NewsfudaninstructortExport: "/fudanncov/wap/fudan-datacube/export",
          NewsfudaninstructortList: "/fudanncov/wap/fudan-datacube/ulists",
          NewscubeGroups: "/fudanncov/wap/datacube/groups",
          Newsfudancubestudent: "/fudanncov/wap/fudan-datacube/leader",
          NewsncovfundancovBaseInfoSave: "/fudanncov/wap/fudan/save-history",
          NewsncovfundanBaseInfo: "/fudanncov/wap/fudan/history",
          NewsncovfudanDailyInfo: "/fudanncov/wap/fudan/get-info",
          NewsncovfudanDailyInfoSave: "/fudanncov/wap/fudan/save",
          Newscuberemind: "/fudanncov/wap/datacube/remind",
          Newsfudaninstructort: "/fudanncov/wap/fudan-datacube/fenji",
          Newsdelstat: "/fudanncov/wap/default/del-stat",
          Newsbasegroup: "/fudanncov/wap/datacube-base/groups",
          Newscubestudent: "/fudanncov/wap/datacube-base/manager",
          Newscubecommit: "/fudanncov/wap/datacube/commit",
          NewsncovfudanDailyTeacherDaily: "/fudanncov/wap/fudan/teacher-daily",
          NewsncovfudanDailyTeacherDailySave:
            "/fudanncov/wap/fudan/save-teacher-daily",
          NewsfudanTeacherYm: "/fudanncov/wap/fudan/teacher-ym",
          NewsfudanSaveTeacherYm: "/fudanncov/wap/fudan/save-teacher-ym",
          hjqtxyappChargeTime: "/hjqtxyapp/wap/default/charge-time",
          nactaNetFeeRechargeCode: "",
          nactaNetFeeRechargeSend: "",
          nactaNetFeeRechargeList: "",
          nactaNetFeeRechargePay: "",
          ouchnappTodo: "/ouchnapp/wap/todo/index-pc",
          ouchnappMsg: "/ouchnapp/wap/msg/index-pc",
          ouchnappTeacher: "/ouchnapp/wap/course/jskc-pc",
          ouchnappLearning: "/ouchnapp/wap/course/xskc-pc",
          ouchnappServices: "/ouchnapp/wap/todo/services-pc",
          ouchnappMyCourse: "/ouchnapp/wap/my-study/myyx-pc",
          ouchnappNews: "/ouchnapp/wap/news/index-pc",
          ouchnappTzgg: "/ouchnapp/wap/tzgg/tzgg-pc",
          ouchnappCredentials: "/ouchnapp/wap/credentials/index-pc",
          ouchnappCourse: "/ouchnapp/wap/course/resource-pc",
          ouchnappUserInfo: "/ouchnapp/wap/user/get-info",
          ouchnappAnswer: "/ouchnapp/wap/answer/index-pc",
          ouchnappOrder: "/ouchnapp/wap/order/index-pc",
          ouchnappWebsite: "/ouchnapp/wap/website/index",
          ouchnappLogout: "/ouchnapp/wap/login/logout",
          ouchnappSystemThroughTrain: "/ouchnapp/wap/todo/services-all-pc",
          ouchnappProject: "/ouchnapp/wap/my-study/project-pc",
          ouchnappAplication: "/ouchnapp/wap/often-sort/services-pc",
          ouchnappIdentitys: "/ouchnapp/wap/user/pc-index-modules",
          ouchnappIdentitysMyInfo: "/ouchnapp/wap/user/pc-multi-info",
          ouchnappStudentTab: "/ouchnapp/wap/course/xskc-tab-pc",
          ouchnappTeachingTab: "/ouchnapp/wap/course/jskc-tab-pc",
          ouchnappStudyTab: "/ouchnapp/wap/my-study/myyx-tab-pc",
          ouchnappProjectTab: "/ouchnapp/wap/my-study/project-tab-pc",
          ouchnappMultiIdentity: "/ouchnapp/wap/user/get-multi-info",
          policyAndRules: "/ouchnproj/wap/zszcjz/index",
          policyDetails: "/ouchnproj/wap/zszcjz/detail",
          ouchnprojLvqu: "/ouchnproj/wap/luqu/index",
          ouchnprojJiangjinIndex: "/ouchnproj/wap/jiangjin/index",
          ouchnprojJiangjinInfo: "/ouchnproj/wap/jiangjin/info",
          ouchnprojActivityInfoIndex: "/ouchnproj/wap/activity-info/index",
          ouchnprojActivityInfoDetail: "/ouchnproj/wap/activity-info/detail",
          ouchnprojZszy: "/ouchnproj/wap/zszy/index",
          ouchnprojMxmk: "/ouchnproj/wap/mxmk/index",
          ouchnprojXjyd: "/ouchnproj/wap/xjyd/index",
          ouchnprojXkxx: "/ouchnapp/wap/xkxx/index",
          ouchnprojJxd: "/ouchnproj/wap/jxd/index",
          elegantDemeanorApi: "/ouchnproj/wap/wjfc/index",
          elegantDemeanorApiDetails: "/ouchnproj/wap/wjfc/info",
          trainingProgramApi: "/ouchnapp/wap/culture/scheme-pc",
          myStudentStatusApi: "/ouchnproj/wap/xueji/index",
          ouchnappScoreQueryApp: "/ouchnapp/wap/cj/cj",
          ouchnappAdmissionTicketList: "/ouchnapp/wap/down-admission/index",
          ouchnappAdmissionTicketDownload:
            "/ouchnapp/wap/down-admission/sent-email",
          certificateApi: "/ouchnapp/wap/credentials/index-pc",
          noticeApi: "/ouchnapp/wap/tzgg/index-pc",
          newsInformationApi: "/ouchnapp/wap/news/index-pc",
          ouchnappLearnedPc: "/ouchnapp/wap/course/learned-pc",
          ouchnappNewsLists: "/ouchnapp/wap/news/lists",
          ouchnappTzggLists: "/ouchnapp/wap/tzgg/lists",
          ouchnappNewsDetail: "/ouchnapp/wap/news/detail",
          ouchnappIndexList: "/ouchnapp/wap/credentials/index-list",
          ouchnappHistoryTeaching: "/ouchnapp/wap/course/history-teaching",
          ouchnappUserPcInfo: "/ouchnapp/wap/user/pc-info",
          ouchnappPaymentOorder: "/ouchnapp/wap/order/list-pc",
          ouchnappAplicationAdd: "/ouchnapp/wap/often-sort/add-sort",
          ouchnappModifyPassword: "/ouchnapp/wap/user/up-pwd",
          ouchnappModifyInformation: "/ouchnapp/wap/user/up-pe",
          ouchnappTzggAddPc: "/ouchnapp/wap/tzgg/add-tzgg-pc",
          ouchnappTzggGrouplistPc: "/ouchnapp/wap/tzgg/tzgg-group-list",
          ouchnappTzggPcList: "/ouchnapp/wap/tzgg/tzgg-pc-list",
          ouchnappTzggDetail: "/ouchnapp/wap/tzgg/detail",
          puchnappTzggGrouplistPc: "/ouchnapp/wap/tzgg/tzgg-group-list",
          ouchnappHistoryStudy: "/ouchnapp/wap/my-study/history-study",
          ouchnappHistoryProject: "/ouchnapp/wap/my-study/his-pro",
          ncepuhealthcodeindex: "/healthcode/wap/ncepu/index",
          ncepuhealthcodetongji: "/healthcode/wap/ncepu/tongji",
          bjutappWapMsgIndex: "/bjutapp/wap/msg/index",
          bjutappWapMsgRead: "/bjutapp/wap/msg/read",
          bjutappWapCollectUpCollect: "/bjutapp/wap/collect/up-collect",
          bjutappWapCollectCollectH5: "/bjutapp/wap/collect/collect-h5",
          bjutappWapServiceServiceAll: "/bjutapp/wap/service/service-all",
          bjutappWapSearchHistory: "/bjutapp/wap/search/history",
          bjutappWapSearchDel: "/bjutapp/wap/search/del",
          bjutappWapSearchAdd: "/bjutapp/wap/search/add",
          bjutappWapAppmarketSearch: "/bjutapp/wap/appmarket/search",
          bjutappWapNewsSearch: "/bjutapp/wap/news/search",
          bjutappWapYizhanshiSearch: "/bjutapp/wap/yizhanshi/search",
          cupvoucherCode: "/writeoff/wap/index/download",
          cupAddress: "/writeoff/wap/index/write-off-address",
          cupAddplace: "/writeoff/wap/index/address",
          cupInList: "/writeoff/wap/index/list",
          cupResult: "/writeoff/wap/index/write-off-result",
          cupConfig: "/writeoff/wap/index/config",
          tongjiWapMsgIndex: "/tongji/wap/msg/index",
          tongjiWapMsgRead: "/tongji/wap/msg/read",
          msgIndex: "/uc/wap/msg/index",
          msgRead: "/uc/wap/msg/read",
          cugbxwloginyzm: "/a_cugb/api/outside/send",
          cugbxwloginbtn: "/a_cugb/api/outside/login",
          cugboutsidezjlx: "/a_cugb/api/outside/zjlx",
        },
        webList: {
          localhost: {
            id: "pku",
            style: "",
            baseurl: "eai.campusapp.com.cn",
            imgUrl: "eaiimg.campusapp.com.cn/",
            uploadImg: "eai.campusapp.com.cn/api/upload/index",
            uploadImgBase: "eai.campusapp.com.cn/api/upload/bybase64",
          },
          "eai.campusapp.com.cn": {
            id: "campusapp",
            style: "",
            baseurl: "eai.campusapp.com.cn",
            imgUrl: "eaiimg.campusapp.com.cn/",
            uploadImg: "eai.campusapp.com.cn/api/upload/index",
            uploadImgBase: "eai.campusapp.com.cn/api/upload/bybase64",
          },
          "eai1.campusapp.com.cn": {
            id: "campusapp",
            style: "",
            baseurl: "eai1.campusapp.com.cn",
            imgUrl: "imgapp.campusapp.com.cn/",
            uploadImg: "eai1.campusapp.com.cn/api/upload/index",
            uploadImgBase: "eai1.campusapp.com.cn/api/upload/bybase64",
          },
          "app.campusapp.com.cn": {
            id: "campusapp",
            style: "",
            baseurl: "app.campusapp.com.cn",
            imgUrl: "app.campusapp.com.cn/images/",
            uploadImg: "app.campusapp.com.cn/api/upload/index",
            uploadImgBase: "app.campusapp.com.cn/api/upload/bybase64",
          },
          "mcce.fudan.edu.cn": {
            id: "fudan",
            style: "",
            baseurl: "mcce.fudan.edu.cn",
            imgUrl: "mcceimg.fudan.edu.cn/",
            uploadImg: "mcce.fudan.edu.cn/api/upload/index",
            uploadImgBase: "mcce.fudan.edu.cn/api/upload/bybase64",
          },
          "app.sust.edu.cn": {
            id: "sust",
            style: "",
            baseurl: "app.sust.edu.cn",
            imgUrl: "imgapp.sust.edu.cn/",
            uploadImg: "app.sust.edu.cn/api/upload/index",
            uploadImgBase: "app.sust.edu.cn/api/upload/bybase64",
          },
          "mapp.bipt.edu.cn": {
            id: "bipt",
            style: "",
            baseurl: "mapp.bipt.edu.cn",
            imgUrl: "mstatic.bipt.edu.cn/",
            uploadImg: "mapp.bipt.edu.cn/api/upload/index",
            uploadImgBase: "mapp.bipt.edu.cn/api/upload/bybase64",
          },
          "app.bupt.edu.cn": {
            id: "bupt",
            style: "",
            baseurl: "app.bupt.edu.cn",
            imgUrl: "imgapp.bupt.edu.cn/",
            uploadImg: "app.bupt.edu.cn/api/upload/index",
            uploadImgBase: "app.bupt.edu.cn/api/upload/bybase64",
          },
          "app.upc.edu.cn": {
            id: "upc",
            style: "",
            baseurl: "app.upc.edu.cn",
            imgUrl: "imgapp.upc.edu.cn/",
            uploadImg: "app.upc.edu.cn/api/upload/index",
            uploadImgBase: "app.upc.edu.cn/api/upload/bybase64",
          },
          "vcard.bucea.edu.cn": {
            id: "bucea",
            style: "",
            baseurl: "vcard.bucea.edu.cn",
            imgUrl: "vstatic.bucea.edu.cn/",
            uploadImg: "vcard.bucea.edu.cn/api/upload/index",
            uploadImgBase: "vcard.bucea.edu.cn/api/upload/bybase64",
          },
          "xxcapp.xidian.edu.cn": {
            id: "xidian",
            style: "xidian",
            baseurl: "xxcapp.xidian.edu.cn",
            imgUrl: "imgapp.xidian.edu.cn/",
            uploadImg: "xxcapp.xidian.edu.cn/api/upload/index",
            uploadImgBase: "xxcapp.xidian.edu.cn/api/upload/bybase64",
          },
          "inc-app.tju.edu.cn": {
            id: "tju",
            style: "",
            baseurl: "inc-app.tju.edu.cn",
            imgUrl: "inc-imgapp.tju.edu.cn/",
            uploadImg: "inc-app.tju.edu.cn/api/upload/index",
            uploadImgBase: "inc-app.tju.edu.cn/api/upload/bybase64",
          },
          "m.nuaa.edu.cn": {
            id: "nuaa",
            style: "nuaa",
            baseurl: "m.nuaa.edu.cn",
            imgUrl: "m1.nuaa.edu.cn/",
            uploadImg: "m.nuaa.edu.cn/api/upload/index",
            uploadImgBase: "m.nuaa.edu.cn/api/upload/bybase64",
          },
          "app.buaa.edu.cn": {
            id: "buaa",
            style: "buaa",
            baseurl: "app.buaa.edu.cn",
            imgUrl: "imgapp.buaa.edu.cn/",
            uploadImg: "app.buaa.edu.cn/api/upload/index",
            uploadImgBase: "app.buaa.edu.cn/api/upload/bybase64",
          },
          "app.ucass.edu.cn": {
            id: "gscass",
            style: "ucass",
            baseurl: "app.ucass.edu.cn",
            imgUrl: "imgapp.ucass.edu.cn/",
            uploadImg: "app.ucass.edu.cn/api/upload/index",
            uploadImgBase: "app.ucass.edu.cn/api/upload/bybase64",
          },
          "apps.ppsuc.edu.cn": {
            id: "ppsuc",
            style: "",
            baseurl: "apps.ppsuc.edu.cn",
            imgUrl: "imgapps.ppsuc.edu.cn/",
            uploadImg: "apps.ppsuc.edu.cn/api/upload/index",
            uploadImgBase: "apps.ppsuc.edu.cn/api/upload/bybase64",
          },
          "app.nwu.edu.cn": {
            id: "nwu",
            style: "",
            baseurl: "app.nwu.edu.cn",
            imgUrl: "imgapp.nwu.edu.cn/",
            uploadImg: "app.nwu.edu.cn/api/upload/index",
            uploadImgBase: "app.nwu.edu.cn/api/upload/bybase64",
          },
          "wfw.scu.edu.cn": {
            id: "scu",
            style: "scu",
            baseurl: "wfw.scu.edu.cn",
            imgUrl: "imgwfw.scu.edu.cn/",
            uploadImg: "wfw.scu.edu.cn/api/upload/index",
            uploadImgBase: "wfw.scu.edu.cn/api/upload/bybase64",
          },
          "wx.slcupc.edu.cn": {
            id: "slcupc",
            style: "",
            baseurl: "wx.slcupc.edu.cn",
            imgUrl: "wximg.slcupc.edu.cn/",
            uploadImg: "wx.slcupc.edu.cn/api/upload/index",
            uploadImgBase: "wx.slcupc.edu.cn/api/upload/bybase64",
          },
          "wep.cau.edu.cn": {
            id: "cau",
            style: "cau",
            baseurl: "wep.cau.edu.cn",
            imgUrl: "imgwep.cau.edu.cn/",
            uploadImg: "wep.cau.edu.cn/api/upload/index",
            uploadImgBase: "wep.cau.edu.cn/api/upload/bybase64",
          },
          "m.ruc.edu.cn": {
            id: "ruc",
            style: "ruc",
            baseurl: "m.ruc.edu.cn",
            imgUrl: "img.ruc.edu.cn/",
            uploadImg: "m.ruc.edu.cn/api/upload/index",
            uploadImgBase: "m.ruc.edu.cn/api/upload/bybase64",
          },
          "x.wx.blcu.edu.cn": {
            id: "blcu",
            style: "",
            baseurl: "x.wx.blcu.edu.cn",
            imgUrl: "imgx.wx.blcu.edu.cn/",
            uploadImg: "x.wx.blcu.edu.cn/api/upload/index",
            uploadImgBase: "x.wx.blcu.edu.cn/api/upload/bybase64",
          },
          "eai.buct.edu.cn": {
            id: "buct",
            style: "",
            baseurl: "eai.buct.edu.cn",
            imgUrl: "eai.buct.edu.cn/eaiimg/",
            uploadImg: "eai.buct.edu.cn/api/upload/index",
            uploadImgBase: "eai.buct.edu.cn/api/upload/bybase64",
          },
          "app2018.cnu.edu.cn": {
            id: "cnu",
            style: "cnu",
            baseurl: "app2018.cnu.edu.cn",
            imgUrl: "imgapp2018.cnu.edu.cn/",
            uploadImg: "app2018.cnu.edu.cn/api/upload/index",
            uploadImgBase: "app2018.cnu.edu.cn/api/upload/bybase64",
          },
          "app.ucas.ac.cn": {
            id: "ucas",
            style: "",
            baseurl: "app.ucas.ac.cn",
            imgUrl: "imgapp.ucas.ac.cn/",
            uploadImg: "app.ucas.ac.cn/api/upload/index",
            uploadImgBase: "app.ucas.ac.cn/api/upload/bybase64",
          },
          "onewechat.bnu.edu.cn": {
            id: "bnu",
            style: "",
            baseurl: "onewechat.bnu.edu.cn",
            imgUrl: "imgwechat.bnu.edu.cn/",
            uploadImg: "onewechat.bnu.edu.cn/api/upload/index",
            uploadImgBase: "onewechat.bnu.edu.cn/api/upload/bybase64",
          },
          "zsfx.bnu.edu.cn": {
            id: "bnu2",
            style: "",
            baseurl: "zsfx.bnu.edu.cn",
            imgUrl: "imgzsfx.bnu.edu.cn/",
            uploadImg: "zsfx.bnu.edu.cn/api/upload/index",
            uploadImgBase: "zsfx.bnu.edu.cn/api/upload/bybase64",
          },
          "ixisu.xisu.edu.cn": {
            id: "xisu",
            style: "xisu",
            baseurl: "ixisu.xisu.edu.cn",
            imgUrl: "imgixisu.xisu.edu.cn/",
            uploadImg: "ixisu.xisu.edu.cn/api/upload/index",
            uploadImgBase: "ixisu.xisu.edu.cn/api/upload/bybase64",
          },
          "app.xpu.edu.cn": {
            id: "xpu",
            style: "",
            baseurl: "app.xpu.edu.cn",
            imgUrl: "imgapp.xpu.edu.cn/",
            uploadImg: "app.xpu.edu.cn/api/upload/index",
            uploadImgBase: "app.xpu.edu.cn/api/upload/bybase64",
          },
          "app.xaut.edu.cn": {
            id: "xaut",
            style: "",
            baseurl: "app.xaut.edu.cn",
            imgUrl: "imgapp.xaut.edu.cn/",
            uploadImg: "app.xaut.edu.cn/api/upload/index",
            uploadImgBase: "app.xaut.edu.cn/api/upload/bybase64",
          },
          "app.cfau.edu.cn": {
            id: "cfau",
            style: "",
            baseurl: "app.cfau.edu.cn",
            imgUrl: "imgapp.cfau.edu.cn/",
            uploadImg: "app.cfau.edu.cn/api/upload/index",
            uploadImgBase: "app.cfau.edu.cn/api/upload/bybase64",
          },
          "eaiapp.ccom.edu.cn": {
            id: "ccom",
            style: "",
            baseurl: "eaiapp.ccom.edu.cn",
            imgUrl: "imgapp.ccom.edu.cn/",
            uploadImg: "eaiapp.ccom.edu.cn/api/upload/index",
            uploadImgBase: "eaiapp.ccom.edu.cn/api/upload/bybase64",
          },
          "yanyuan.pku.edu.cn": {
            id: "pku",
            style: "pku",
            baseurl: "yanyuan.pku.edu.cn",
            imgUrl: "imgapp.pku.edu.cn/",
            uploadImg: "yanyuan.pku.edu.cn/api/upload/index",
            uploadImgBase: "yanyuan.pku.edu.cn/api/upload/bybase64",
          },
          "app.cupl.edu.cn": {
            id: "cupl",
            style: "",
            baseurl: "app.cupl.edu.cn",
            imgUrl: "imgapp.cupl.edu.cn/",
            uploadImg: "app.cupl.edu.cn/api/upload/index",
            uploadImgBase: "app.cupl.edu.cn/api/upload/bybase64",
          },
          "app.haust.edu.cn": {
            id: "haust",
            style: "",
            baseurl: "app.haust.edu.cn",
            imgUrl: "imgapp.haust.edu.cn/",
            uploadImg: "app.haust.edu.cn/api/upload/index",
            uploadImgBase: "app.haust.edu.cn/api/upload/bybase64",
          },
          "app.sqnu.edu.cn": {
            id: "sqnu",
            style: "",
            baseurl: "app.sqnu.edu.cn",
            imgUrl: "imgapp.sqnu.edu.cn/",
            uploadImg: "app.sqnu.edu.cn/api/upload/index",
            uploadImgBase: "app.sqnu.edu.cn/api/upload/bybase64",
          },
          "app.snnu.edu.cn": {
            id: "snnu",
            style: "snnu",
            baseurl: "app.snnu.edu.cn",
            imgUrl: "imgapp.snnu.edu.cn/",
            uploadImg: "app.snnu.edu.cn/api/upload/index",
            uploadImgBase: "app.snnu.edu.cn/api/upload/bybase64",
          },
          "mp.snnu.edu.cn": {
            id: "snnump",
            style: "snnu",
            baseurl: "mp.snnu.edu.cn",
            imgUrl: "imgmp.snnu.edu.cn/",
            uploadImg: "mp.snnu.edu.cn/api/upload/index",
            uploadImgBase: "mp.snnu.edu.cn/api/upload/bybase64",
          },
          "wxapp.nwpu.edu.cn": {
            id: "nwpu",
            style: "",
            baseurl: "wxapp.nwpu.edu.cn",
            imgUrl: "wxres.nwpu.edu.cn/",
            uploadImg: "wxapp.nwpu.edu.cn/api/upload/index",
            uploadImgBase: "wxapp.nwpu.edu.cn/api/upload/bybase64",
          },
          "app.nwafu.edu.cn": {
            id: "nwafu",
            style: "",
            baseurl: "app.nwafu.edu.cn",
            imgUrl: "imgapp.nwafu.edu.cn/",
            uploadImg: "app.nwafu.edu.cn/api/upload/index",
            uploadImgBase: "app.nwafu.edu.cn/api/upload/bybase64",
          },
          "app.cuc.edu.cn": {
            id: "cuc",
            style: "",
            baseurl: "app.cuc.edu.cn",
            imgUrl: "imgapp.cuc.edu.cn/",
            uploadImg: "app.cuc.edu.cn/api/upload/index",
            uploadImgBase: "app.cuc.edu.cn/api/upload/bybase64",
          },
          "mobile-app.cic.tsinghua.edu.cn": {
            id: "tsinghua",
            style: "",
            baseurl: "mobile-app.cic.tsinghua.edu.cn",
            imgUrl: "mobile-img.cic.tsinghua.edu.cn/",
            uploadImg: "mobile-app.cic.tsinghua.edu.cn/api/upload/index",
            uploadImgBase: "mobile-app.cic.tsinghua.edu.cn/api/upload/bybase64",
          },
          "healthreport.zju.edu.cn": {
            id: "zju",
            style: "",
            baseurl: "healthreport.zju.edu.cn",
            imgUrl: "imghealthreport.zju.edu.cn/",
            uploadImg: "healthreport.zju.edu.cn/api/upload/index",
            uploadImgBase: "healthreport.zju.edu.cn/api/upload/bybase64",
          },
          "wx2.zuel.edu.cn": {
            id: "zuel",
            style: "",
            baseurl: "wx2.zuel.edu.cn",
            imgUrl: "wx2-zy.zuel.edu.cn/",
            uploadImg: "wx2.zuel.edu.cn/api/upload/index",
            uploadImgBase: "wx2.zuel.edu.cn/api/upload/bybase64",
          },
          "app.mp.haue.edu.cn": {
            id: "haue",
            style: "",
            baseurl: "app.mp.haue.edu.cn",
            imgUrl: "imgapp.mp.haue.edu.cn/",
            uploadImg: "app.mp.haue.edu.cn/api/upload/index",
            uploadImgBase: "app.mp.haue.edu.cn/api/upload/bybase64",
          },
          "eai.create.com.cn": {
            id: "bic-edu",
            style: "",
            baseurl: "eai.create.com.cn",
            imgUrl: "eaiimg.create.com.cn/",
            uploadImg: "eai.create.com.cn/api/upload/index",
            uploadImgBase: "eai.create.com.cn/api/upload/bybase64",
          },
          "ydapp.gxtc.edu.cn": {
            id: "gxtc",
            style: "",
            baseurl: "ydapp.gxtc.edu.cn",
            imgUrl: "imgapp.gxtc.edu.cn/",
            uploadImg: "ydapp.gxtc.edu.cn/api/upload/index",
            uploadImgBase: "ydapp.gxtc.edu.cn/api/upload/bybase64",
          },
          "wx.nju.edu.cn": {
            id: "nju",
            style: "nju",
            baseurl: "wx.nju.edu.cn",
            imgUrl: "imgwx.nju.edu.cn/",
            uploadImg: "wx.nju.edu.cn/api/upload/index",
            uploadImgBase: "wx.nju.edu.cn/api/upload/bybase64",
          },
          "wx.bift.edu.cn": {
            id: "bift",
            style: "",
            baseurl: "wx.bift.edu.cn",
            imgUrl: "imgwx.bift.edu.cn/",
            uploadImg: "wx.bift.edu.cn/api/upload/index",
            uploadImgBase: "wx.bift.edu.cn/api/upload/bybase64",
          },
          "app.qdu.edu.cn": {
            id: "qdu",
            style: "",
            baseurl: "app.qdu.edu.cn",
            imgUrl: "imgapp.qdu.edu.cn/",
            uploadImg: "app.qdu.edu.cn/api/upload/index",
            uploadImgBase: "app.qdu.edu.cn/api/upload/bybase64",
          },
          "app.culr.edu.cn": {
            id: "culr",
            style: "",
            baseurl: "app.culr.edu.cn",
            imgUrl: "imgapp.culr.edu.cn/",
            uploadImg: "app.culr.edu.cn/api/upload/index",
            uploadImgBase: "app.culr.edu.cn/api/upload/bybase64",
          },
          "app.ncepu.edu.cn": {
            id: "ncepu",
            style: "",
            baseurl: "app.ncepu.edu.cn",
            imgUrl: "img.ncepu.edu.cn/",
            uploadImg: "app.ncepu.edu.cn/api/upload/index",
            uploadImgBase: "app.ncepu.edu.cn/api/upload/bybase64",
          },
          "qy.bda.edu.cn": {
            id: "bda",
            style: "",
            baseurl: "qy.bda.edu.cn",
            imgUrl: "imgqy.bda.edu.cn/",
            uploadImg: "qy.bda.edu.cn/api/upload/index",
            uploadImgBase: "qy.bda.edu.cn/api/upload/bybase64",
          },
          "pingan.ouc.edu.cn": {
            id: "ouc",
            style: "",
            baseurl: "pingan.ouc.edu.cn",
            imgUrl: "imgpingan.ouc.edu.cn/",
            uploadImg: "pingan.ouc.edu.cn/api/upload/index",
            uploadImgBase: "pingan.ouc.edu.cn/api/upload/bybase64",
          },
          "app.cumtb.edu.cn": {
            id: "cumtb",
            style: "cumtb",
            baseurl: "app.cumtb.edu.cn",
            imgUrl: "imgapp.cumtb.edu.cn/",
            uploadImg: "app.cumtb.edu.cn/api/upload/index",
            uploadImgBase: "app.cumtb.edu.cn/api/upload/bybase64",
          },
          "yiqing.hit.edu.cn": {
            id: "hit",
            style: "",
            baseurl: "yiqing.hit.edu.cn",
            imgUrl: "imgyiqing.hit.edu.cn/",
            uploadImg: "yiqing.hit.edu.cn/api/upload/index",
            uploadImgBase: "yiqing.hit.edu.cn/api/upload/bybase64",
          },
          "wxxy.csu.edu.cn": {
            id: "csu",
            style: "",
            baseurl: "wxxy.csu.edu.cn",
            imgUrl: "imgwxxy.csu.edu.cn/",
            uploadImg: "wxxy.csu.edu.cn/api/upload/index",
            uploadImgBase: "wxxy.csu.edu.cn/api/upload/bybase64",
          },
          "zlapp.fudan.edu.cn": {
            id: "zlappfudan",
            style: "",
            baseurl: "zlapp.fudan.edu.cn",
            imgUrl: "imgzlapp.fudan.edu.cn/",
            uploadImg: "zlapp.fudan.edu.cn/api/upload/index",
            uploadImgBase: "zlapp.fudan.edu.cn/api/upload/bybase64",
          },
          "zlapptest.fudan.edu.cn": {
            id: "zlapptestfudan",
            style: "",
            baseurl: "zlapptest.fudan.edu.cn",
            imgUrl: "imgzlapp.fudan.edu.cn/",
            uploadImg: "zlapptest.fudan.edu.cn/api/upload/index",
            uploadImgBase: "zlapptest.fudan.edu.cn/api/upload/bybase64",
          },
          "yqsb.shmtu.edu.cn": {
            id: "shmtu",
            style: "",
            baseurl: "yqsb.shmtu.edu.cn",
            imgUrl: "imgyqsb.shmtu.edu.cnn/",
            uploadImg: "yqsb.shmtu.edu.cn/api/upload/index",
            uploadImgBase: "yqsb.shmtu.edu.cn/api/upload/bybase64",
          },
          "app.ccmu.edu.cn": {
            id: "ccmu",
            style: "",
            baseurl: "app.ccmu.edu.cn",
            imgUrl: "imgapp.ccmu.edu.cn/",
            uploadImg: "app.ccmu.edu.cn/api/upload/index",
            uploadImgBase: "app.ccmu.edu.cn/api/upload/bybase64",
          },
          "wschool.cup.edu.cn": {
            id: "cup",
            style: "",
            baseurl: "wschool.cup.edu.cn",
            imgUrl: "wschool.cup.edu.cn/eaiimg/",
            uploadImg: "wschool.cup.edu.cn/api/upload/index",
            uploadImgBase: "wschool.cup.edu.cn/api/upload/bybase64",
          },
          "itsapp.bjut.edu.cn": {
            id: "bjut",
            style: "",
            baseurl: "itsapp.bjut.edu.cn",
            imgUrl: "imgitsapp.bjut.edu.cn/",
            uploadImg: "itsapp.bjut.edu.cn/api/upload/index",
            uploadImgBase: "itsapp.bjut.edu.cn/api/upload/bybase64",
          },
          "app1.cufe.edu.cn": {
            id: "cufe",
            style: "",
            baseurl: "app1.cufe.edu.cn",
            imgUrl: "imgapp1.cufe.edu.cn/",
            uploadImg: "app1.cufe.edu.cn/api/upload/index",
            uploadImgBase: "app1.cufe.edu.cn/api/upload/bybase64",
          },
          "wxapp.bucm.edu.cn": {
            id: "bucm",
            style: "",
            baseurl: "wxapp.bucm.edu.cn",
            imgUrl: "imgwxapp.bucm.edu.cn/",
            uploadImg: "wxapp.bucm.edu.cn/api/upload/index",
            uploadImgBase: "wxapp.bucm.edu.cn/api/upload/bybase64",
          },
          "app.xauat.edu.cn": {
            id: "xauat",
            style: "",
            baseurl: "app.xauat.edu.cn",
            imgUrl: "imgapp.xauat.edu.cn/",
            uploadImg: "app.xauat.edu.cn/api/upload/index",
            uploadImgBase: "app.xauat.edu.cn/api/upload/bybase64",
          },
          "move.muc.edu.cn": {
            id: "muc",
            style: "muc",
            baseurl: "move.muc.edu.cn",
            imgUrl: "imgmove.muc.edu.cn/",
            uploadImg: "move.muc.edu.cn/api/upload/index",
            uploadImgBase: "move.muc.edu.cn/api/upload/bybase64",
          },
          "app.uir.edu.cn": {
            id: "uir",
            style: "",
            baseurl: "app.uir.edu.cn",
            imgUrl: "imgapp.uir.edu.cn/",
            uploadImg: "app.uir.edu.cn/api/upload/index",
            uploadImgBase: "app.uir.edu.cn/api/upload/bybase64",
          },
          "yqapp.buu.edu.cn": {
            id: "buu",
            style: "",
            baseurl: "yqapp.buu.edu.cn",
            imgUrl: "yqimg.buu.edu.cn/",
            uploadImg: "yqapp.buu.edu.cn/api/upload/index",
            uploadImgBase: "yqapp.buu.edu.cn/api/upload/bybase64",
          },
          "mapp.uestc.edu.cn": {
            id: "uestc",
            style: "",
            baseurl: "mapp.uestc.edu.cn",
            imgUrl: "mimage.uestc.edu.cn/",
            uploadImg: "mapp.uestc.edu.cn/api/upload/index",
            uploadImgBase: "mapp.uestc.edu.cn/api/upload/bybase64",
          },
          "wechat.hjqtxy.net": {
            id: "hjqtxy",
            style: "",
            baseurl: "wechat.hjqtxy.net",
            imgUrl: "wechat-img.hjqtxy.net/",
            uploadImg: "wechat.hjqtxy.net/api/upload/index",
            uploadImgBase: "wechat.hjqtxy.net/api/upload/bybase64",
          },
          "newweixin.bjtu.edu.cn": {
            id: "bjtu",
            style: "",
            baseurl: "newweixin.bjtu.edu.cn",
            imgUrl: "imgnewweixin.bjtu.edu.cn/",
            uploadImg: "newweixin.bjtu.edu.cn/api/upload/index",
            uploadImgBase: "newweixin.bjtu.edu.cn/api/upload/bybase64",
          },
          "cdc.nacta.edu.cn": {
            id: "nacta",
            style: "",
            baseurl: "cdc.nacta.edu.cn",
            imgUrl: "cdc-img.nacta.edu.cn/",
            uploadImg: "cdc.nacta.edu.cn/api/upload/index",
            uploadImgBase: "cdc.nacta.edu.cn/api/upload/bybase64",
          },
          "ucpay.ncut.edu.cn": {
            id: "ncut",
            style: "",
            baseurl: "ucpay.ncut.edu.cn",
            imgUrl: "imgpay.ncut.edu.cn/",
            uploadImg: "ucpay.ncut.edu.cn/api/upload/index",
            uploadImgBase: "ucpay.ncut.edu.cn/api/upload/bybase64",
          },
          "appweb.ncut.edu.cn": {
            id: "ncut2",
            style: "",
            baseurl: "appweb.ncut.edu.cn",
            imgUrl: "imgappweb.ncut.edu.cn/",
            uploadImg: "appweb.ncut.edu.cn/api/upload/index",
            uploadImgBase: "appweb.ncut.edu.cn/api/upload/bybase64",
          },
          "app.bua.edu.cn": {
            id: "bua",
            style: "",
            baseurl: "app.bua.edu.cn",
            imgUrl: "imgapp.bua.edu.cn/",
            uploadImg: "app.bua.edu.cn/api/upload/index",
            uploadImgBase: "app.bua.edu.cn/api/upload/bybase64",
          },
          "app.njau.edu.cn": {
            id: "njau",
            style: "njau",
            baseurl: "app.njau.edu.cn",
            imgUrl: "imgapp.njau.edu.cn/",
            uploadImg: "app.njau.edu.cn/api/upload/index",
            uploadImgBase: "app.njau.edu.cn/api/upload/bybase64",
          },
          "yqapp.cueb.edu.cn": {
            id: "cueb",
            style: "",
            baseurl: "yqapp.cueb.edu.cn",
            imgUrl: "iyqapp.cueb.edu.cn/",
            uploadImg: "yqapp.cueb.edu.cn/api/upload/index",
            uploadImgBase: "yqapp.cueb.edu.cn/api/upload/bybase64",
          },
          "yqfk.bwu.edu.cn": {
            id: "bwu",
            style: "",
            baseurl: "yqfk.bwu.edu.cn",
            imgUrl: "yqfk.bwu.edu.cn/eaiimg/",
            uploadImg: "yqfk.bwu.edu.cn/api/upload/index",
            uploadImgBase: "yqfk.bwu.edu.cn/api/upload/bybase64",
          },
          "zhilinapp.szu.edu.cn": {
            id: "szu",
            style: "szu",
            baseurl: "zhilinapp.szu.edu.cn",
            imgUrl: "imgzhilinapp.szu.edu.cn/",
            uploadImg: "zhilinapp.szu.edu.cn/api/upload/index",
            uploadImgBase: "zhilinapp.szu.edu.cn/api/upload/bybase64",
          },
          "mcapp.ccmusic.edu.cn": {
            id: "ccmusic",
            style: "",
            baseurl: "mcapp.ccmusic.edu.cn",
            imgUrl: "mcimgapp.ccmusic.edu.cn/",
            uploadImg: "mcapp.ccmusic.edu.cn/api/upload/index",
            uploadImgBase: "mcapp.ccmusic.edu.cn/api/upload/bybase64",
          },
          "online.uibe.edu.cn": {
            id: "uibe",
            style: "",
            baseurl: "online.uibe.edu.cn",
            imgUrl: "imgapp.uibe.edu.cn/",
            uploadImg: "online.uibe.edu.cn/api/upload/index",
            uploadImgBase: "online.uibe.edu.cn/api/upload/bybase64",
          },
          "cipe.campusapp.com.cn": {
            id: "cipe",
            style: "",
            baseurl: "cipe.campusapp.com.cn",
            imgUrl: "imgcipe.campusapp.com.cn/",
            uploadImg: "cipe.campusapp.com.cn/api/upload/index",
            uploadImgBase: "cipe.campusapp.com.cn/api/upload/bybase64",
          },
          "qywx.bnuzh.edu.cn": {
            id: "bnuzh",
            style: "",
            baseurl: "qywx.bnuzh.edu.cn",
            imgUrl: "imgqywx.bnuzh.edu.cn/",
            uploadImg: "qywx.bnuzh.edu.cn/api/upload/index",
            uploadImgBase: "qywx.bnuzh.edu.cn/api/upload/bybase64",
          },
          "ydxy.hnu.edu.cn": {
            id: "hnu",
            style: "",
            baseurl: "ydxy.hnu.edu.cn",
            imgUrl: "imgydxy.hnu.edu.cn/",
            uploadImg: "ydxy.hnu.edu.cn/api/upload/index",
            uploadImgBase: "ydxy.hnu.edu.cn/api/upload/bybase64",
          },
          "pressuretest.fudan.edu.cn": {
            id: "zlappfudan",
            style: "",
            baseurl: "pressuretest.fudan.edu.cn",
            imgUrl: "pressuretest2.fudan.edu.cn/",
            uploadImg: "pressuretest.fudan.edu.cn/api/upload/index",
            uploadImgBase: "pressuretest.fudan.edu.cn/api/upload/bybase64",
          },
          "app.bjczy.edu.cn": {
            id: "bjczy",
            style: "",
            baseurl: "app.bjczy.edu.cn",
            imgUrl: "imgapp.bjczy.edu.cn/",
            uploadImg: "app.bjczy.edu.cn/api/upload/index",
            uploadImgBase: "app.bjczy.edu.cn/api/upload/bybase64",
          },
          "mportal.cugb.edu.cn": {
            id: "cugb",
            style: "",
            baseurl: "mportal.cugb.edu.cn",
            imgUrl: "imgmportal.cugb.edu.cn/",
            uploadImg: "mportal.cugb.edu.cn/api/upload/index",
            uploadImgBase: "mportal.cugb.edu.cn/api/upload/bybase64",
          },
          "app.seu.edu.cn": {
            id: "seu",
            style: "",
            baseurl: "app.seu.edu.cn",
            imgUrl: "imgapp.seu.edu.cn/",
            uploadImg: "app.seu.edu.cn/api/upload/index",
            uploadImgBase: "app.seu.edu.cn/api/upload/bybase64",
          },
          "app.sdfmu.edu.cn": {
            id: "sdfmu",
            style: "",
            baseurl: "app.sdfmu.edu.cn",
            imgUrl: "imgapp.sdfmu.edu.cn/",
            uploadImg: "app.sdfmu.edu.cn/api/upload/index",
            uploadImgBase: "app.sdfmu.edu.cn/api/upload/bybase64",
          },
          "yqgl.zhongxi.cn": {
            id: "zhongxi",
            style: "",
            baseurl: "yqgl.zhongxi.cn",
            imgUrl: "imgyqgl.zhongxi.cn/",
            uploadImg: "yqgl.zhongxi.cn/api/upload/index",
            uploadImgBase: "yqgl.zhongxi.cn/api/upload/bybase64",
          },
          "idk.bpi.edu.cn": {
            id: "bpi",
            style: "",
            baseurl: "idk.bpi.edu.cn",
            imgUrl: "imgidk.bpi.edu.cn/",
            uploadImg: "idk.bpi.edu.cn/api/upload/index",
            uploadImgBase: "idk.bpi.edu.cn/api/upload/bybase64",
          },
          "mip.nudt.edu.cn": {
            id: "nudt",
            style: "",
            baseurl: "mip.nudt.edu.cn",
            imgUrl: "imgmip.nudt.edu.cn/",
            uploadImg: "mip.nudt.edu.cn/api/upload/index",
            uploadImgBase: "mip.nudt.edu.cn/api/upload/bybase64",
          },
          "mip.gfkd.mtn": {
            id: "gfkd",
            style: "",
            baseurl: "mip.gfkd.mtn",
            imgUrl: "imgmip.gfkd.mtn/",
            uploadImg: "mip.gfkd.mtn/api/upload/index",
            uploadImgBase: "mip.gfkd.mtn/api/upload/bybase64",
          },
          "app.xjau.edu.cn": {
            id: "xjau",
            style: "",
            baseurl: "app.xjau.edu.cn",
            imgUrl: "imgapp.xjau.edu.cn/",
            uploadImg: "app.xjau.edu.cn/api/upload/index",
            uploadImgBase: "app.xjau.edu.cn/api/upload/bybase64",
          },
          "app.sdfmu.edu.cn": {
            id: "sdfmu",
            style: "",
            baseurl: "app.sdfmu.edu.cn",
            imgUrl: "imgapp.sdfmu.edu.cn/",
            uploadImg: "app.sdfmu.edu.cn/api/upload/index",
            uploadImgBase: "app.sdfmu.edu.cn/api/upload/bybase64",
          },
          "menhu.pt.ouchn.cn": {
            id: "ouchn",
            style: "",
            baseurl: "menhu.pt.ouchn.cn",
            imgUrl: "imagapp.pt.ouchn.cn/",
            uploadImg: "menhu.pt.ouchn.cn/api/upload/index",
            uploadImgBase: "menhu.pt.ouchn.cn/api/upload/bybase64",
          },
          "menhutest.pt.ouchn.cn": {
            id: "ouchn",
            style: "",
            baseurl: "menhutest.pt.ouchn.cn",
            imgUrl: "menhutest.pt.ouchn.cn/images/",
            uploadImg: "menhutest.pt.ouchn.cn/api/upload/index",
            uploadImgBase: "menhutest.pt.ouchn.cn/api/upload/bybase64",
          },
          "all4u.tongji.edu.cn": {
            id: "tongji",
            style: "tongji",
            baseurl: "all4u.tongji.edu.cn",
            imgUrl: "imgall4u.tongji.edu.cn/",
            uploadImg: "all4u.tongji.edu.cn/api/upload/index",
            uploadImgBase: "all4u.tongji.edu.cn/api/upload/bybase64",
          },
          "app.sdipct.edu.cn": {
            id: "sdipct",
            style: "",
            baseurl: "app.sdipct.edu.cn",
            imgUrl: "imgapp.sdipct.edu.cn/",
            uploadImg: "app.sdipct.edu.cn/api/upload/index",
            uploadImgBase: "app.sdipct.edu.cn/api/upload/bybase64",
          },
          "saas.moe.edu.cn": {
            id: "moe",
            style: "",
            baseurl: "saas.moe.edu.cn/eai",
            imgUrl: "saas.moe.edu.cn/imgeai/",
            uploadImg: "saas.moe.edu.cn/eai/api/upload/index",
            uploadImgBase: "saas.moe.edu.cn/eai/api/upload/bybase64",
          },
          "eaiapp.xxaq.moe.edu.cn": {
            id: "xxaqmoe",
            style: "",
            baseurl: "eaiapp.xxaq.moe.edu.cn",
            imgUrl: "eaiapp.xxaq.moe.edu.cn/images/",
            uploadImg: "eaiapp.xxaq.moe.edu.cn/api/upload/index",
            uploadImgBase: "eaiapp.xxaq.moe.edu.cn/api/upload/bybase64",
          },
          "m.qau.edu.cn": {
            id: "qau",
            style: "",
            baseurl: "m.qau.edu.cn",
            imgUrl: "imgm.qau.edu.cn/",
            uploadImg: "m.qau.edu.cn/api/upload/index",
            uploadImgBase: "m.qau.edu.cn/api/upload/bybase64",
          },
        },
      };
      e.exports = t;
    },
    ksOr: function (e, a, t) {
      e.exports = t.p + "static/fonts/DIN-Medium.1bbe346.otf";
    },
    pOml: function (e, a) {},
    tOCg: function (e, a) {},
    tvR6: function (e, a) {},
    usz6: function (e, a) {},
    "x+fA": function (e, a) {},
    z8sE: function (e, a) {
      e.exports = {
        message: { hello: "你好", about: "关于", welcome: "欢迎" },
        nav: {
          sure: "确定",
          cancel: "取消",
          Check: "去验票",
          btnend: "已结束",
          Detail: "预约成功，等待分票",
          nostate: "活动未开始，请订阅",
          notick: "票已抢光，请订阅",
          ctrl: "取消订阅",
          Ticket: "抢票",
          Order: "预约",
          enroll: "报名",
          Code: "兑换码",
          TicketTime: "抢票时间",
          OrderTime: "预约时间",
          introduced: "活动介绍",
          poll: "剩余票数",
          numbers: "张",
          quantity: "余票数量",
          Rules: "兑换规则",
          Checked: "已验票",
          name: "姓名",
          xgh: "学工号",
          ctrlticket: "取消票",
          PreActivity: "前置活动",
          seeInformation: "查看信息",
          infoAcquisition: "信息采集",
        },
      };
    },
  },
  [0]
);

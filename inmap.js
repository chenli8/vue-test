! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("inMap", [], e) : "object" == typeof exports ? exports.inMap = e() : t.inMap = e()
}(this, function () {
  return function (t) {
    function e(i) {
      if (n[i]) return n[i].exports;
      var r = n[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
      return t
    }, e.d = function (t, n, i) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 120)
  }([function (t, e) {
    var n = t.exports = {
      version: "2.5.1"
    };
    "number" == typeof __e && (__e = n)
  }, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0, e.default = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var i = n(50),
      r = function (t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(i);
    e.default = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i)
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    }()
  }, function (t, e, n) {
    t.exports = !n(12)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (t, e, n) {
    var i = n(1),
      r = n(0),
      o = n(42),
      a = n(9),
      s = function (t, e, n) {
        var l, u, c, h = t & s.F,
          f = t & s.G,
          d = t & s.S,
          p = t & s.P,
          y = t & s.B,
          v = t & s.W,
          m = f ? r : r[e] || (r[e] = {}),
          g = m.prototype,
          b = f ? i : d ? i[e] : (i[e] || {}).prototype;
        f && (n = e);
        for (l in n)(u = !h && b && void 0 !== b[l]) && l in m || (c = u ? b[l] : n[l], m[l] = f && "function" != typeof b[l] ? n[l] : y && u ? o(c, i) : v && b[l] == c ? function (t) {
          var e = function (e, n, i) {
            if (this instanceof t) {
              switch (arguments.length) {
                case 0:
                  return new t;
                case 1:
                  return new t(e);
                case 2:
                  return new t(e, n)
              }
              return new t(e, n, i)
            }
            return t.apply(this, arguments)
          };
          return e.prototype = t.prototype, e
        }(c) : p && "function" == typeof c ? o(Function.call, c) : c, p && ((m.virtual || (m.virtual = {}))[l] = c, t & s.R && g && !g[l] && a(g, l, c)))
      };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
  }, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e)
    }
  }, function (t, e, n) {
    var i = n(14),
      r = n(44),
      o = n(33),
      a = Object.defineProperty;
    e.f = n(4) ? Object.defineProperty : function (t, e, n) {
      if (i(t), e = o(e, !0), i(n), r) try {
        return a(t, e, n)
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (t[e] = n.value), t
    }
  }, function (t, e, n) {
    var i = n(51),
      r = n(23);
    t.exports = function (t) {
      return i(r(t))
    }
  }, function (t, e, n) {
    var i = n(7),
      r = n(18);
    t.exports = n(4) ? function (t, e, n) {
      return i.f(t, e, r(1, n))
    } : function (t, e, n) {
      return t[e] = n, t
    }
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }
  }, function (t, e, n) {
    var i = n(30)("wks"),
      r = n(19),
      o = n(1).Symbol,
      a = "function" == typeof o;
    (t.exports = function (t) {
      return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
    }).store = i
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  }, function (t, e, n) {
    t.exports = {
      default: n(64),
      __esModule: !0
    }
  }, function (t, e, n) {
    var i = n(10);
    t.exports = function (t) {
      if (!i(t)) throw TypeError(t + " is not an object!");
      return t
    }
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    e.__esModule = !0;
    var r = n(59),
      o = i(r),
      a = n(58),
      s = i(a),
      l = n(37),
      u = i(l);
    e.default = function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, u.default)(e)));
      t.prototype = (0, s.default)(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (o.default ? (0, o.default)(t, e) : t.__proto__ = e)
    }
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var i = n(37),
      r = function (t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(i);
    e.default = function (t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : (0, r.default)(e)) && "function" != typeof e ? t : e
    }
  }, function (t, e, n) {
    var i = n(48),
      r = n(24);
    t.exports = Object.keys || function (t) {
      return i(t, r)
    }
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      }
    }
  }, function (t, e) {
    var n = 0,
      i = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return "function" == typeof t
    }

    function r(t) {
      return "number" == typeof t
    }

    function o(t) {
      return "string" == typeof t
    }

    function a(t) {
      return void 0 !== t
    }

    function s(t) {
      return "object" == (void 0 === t ? "undefined" : (0, v.default)(t))
    }

    function l(t) {
      return "[object Array]" == Object.prototype.toString.call(t)
    }

    function u(t) {
      return t.replace(/[^\x00-\xff]/g, "01").length
    }

    function c(t) {
      var e = window.devicePixelRatio;
      t.canvas.width = t.canvas.width * e, t.canvas.height = t.canvas.height * e, t.canvas.style.width = t.canvas.width / e + "px", t.canvas.style.height = t.canvas.height / e + "px", t.scale(e, e)
    }

    function h(t) {
      return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function f(t, e, n, i) {
      for (var r = !1, o = 90, a = -90, s = 180, l = -180, u = 0; u < e.length; u++) e[u] > a && (a = e[u]), e[u] < o && (o = e[u]), t[u] > l && (l = t[u]), t[u] < s && (s = t[u]);
      if (!(n < o || n > a || i < s || i > l))
        for (var c = 0; c < e.length; c++) {
          var h = (c + 1) % e.length;
          e[c] < n != e[h] < n && i < (t[h] - t[c]) * (n - e[c]) / (e[h] - e[c]) + t[c] && (r = !r)
        }
      return r
    }

    function d(t, e, n) {
      for (var i = [], r = [], o = 0, a = n.length; o < a; o++) i.push(parseFloat(n[o][1])), r.push(parseFloat(n[o][0]));
      return f(i, r, t, e)
    }

    function p() {
      return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.extend = void 0;
    var y = n(37),
      v = function (t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(y);
    e.isFunction = i, e.isNumber = r, e.isString = o, e.isDefined = a, e.isObject = s, e.isArray = l, e.getBlen = u, e.setDevicePixelRatio = c, e.encodeHTML = h, e.isPolyContains = f, e.isPolyContainsPt = d, e.detectmob = p;
    e.extend = function (t, e) {
      if (t && e && "object" == (void 0 === e ? "undefined" : (0, v.default)(e))) {
        for (var n in e) t[n] = e[n];
        for (var i, r = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], o = 0; o < r.length; o++) i = r[o], Object.prototype.constructor.call(e, i) && (t[i] = e[i])
      }
      return t
    }
  }, function (t, e) {
    e.f = {}.propertyIsEnumerable
  }, function (t, e, n) {
    var i = n(5),
      r = n(0),
      o = n(12);
    t.exports = function (t, e) {
      var n = (r.Object || {})[t] || Object[t],
        a = {};
      a[t] = e(n), i(i.S + i.F * o(function () {
        n(1)
      }), "Object", a)
    }
  }, function (t, e) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t
    }
  }, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function (t, e) {
    t.exports = {}
  }, function (t, e) {
    t.exports = !0
  }, function (t, e, n) {
    var i = n(14),
      r = n(53),
      o = n(24),
      a = n(29)("IE_PROTO"),
      s = function () {},
      l = function () {
        var t, e = n(43)("iframe"),
          i = o.length;
        for (e.style.display = "none", n(72).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; i--;) delete l.prototype[o[i]];
        return l()
      };
    t.exports = Object.create || function (t, e) {
      var n;
      return null !== t ? (s.prototype = i(t), n = new s, s.prototype = null, n[a] = t) : n = l(), void 0 === e ? n : r(n, e)
    }
  }, function (t, e, n) {
    var i = n(7).f,
      r = n(6),
      o = n(11)("toStringTag");
    t.exports = function (t, e, n) {
      t && !r(t = n ? t : t.prototype, o) && i(t, o, {
        configurable: !0,
        value: e
      })
    }
  }, function (t, e, n) {
    var i = n(30)("keys"),
      r = n(19);
    t.exports = function (t) {
      return i[t] || (i[t] = r(t))
    }
  }, function (t, e, n) {
    var i = n(1),
      r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    t.exports = function (t) {
      return r[t] || (r[t] = {})
    }
  }, function (t, e) {
    var n = Math.ceil,
      i = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
  }, function (t, e, n) {
    var i = n(23);
    t.exports = function (t) {
      return Object(i(t))
    }
  }, function (t, e, n) {
    var i = n(10);
    t.exports = function (t, e) {
      if (!i(t)) return t;
      var n, r;
      if (e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
      if ("function" == typeof (n = t.valueOf) && !i(r = n.call(t))) return r;
      if (!e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function (t, e, n) {
    var i = n(1),
      r = n(0),
      o = n(26),
      a = n(35),
      s = n(7).f;
    t.exports = function (t) {
      var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
      "_" == t.charAt(0) || t in e || s(e, t, {
        value: a.f(t)
      })
    }
  }, function (t, e, n) {
    e.f = n(11)
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Parameter = void 0;
    var r = n(13),
      o = i(r),
      a = n(2),
      s = i(a),
      l = n(3),
      u = i(l),
      c = n(16),
      h = i(c),
      f = n(15),
      d = i(f),
      p = n(90),
      y = i(p),
      v = n(119),
      m = i(v),
      g = n(20),
      b = n(94),
      x = n(95),
      w = n(112);
    e.Parameter = function (t) {
      function e(t) {
        (0, s.default)(this, e);
        var n = (0, h.default)(this, (e.__proto__ || (0, o.default)(e)).call(this));
        return n.points = [], n._setOptionStyle(m.default, t), n.selectItem = [], n.overItem = null, n.workerData = [], n.tooltipDom = null, n.legendDom = null, n.tooltipTemplate = null, n.selectedExp = {
          show: !1,
          exp: null
        }, n
      }
      return (0, d.default)(e, t), (0, u.default)(e, [{
        key: "_setOptionStyle",
        value: function (t, e) {
          e = e || {};
          var n = y.default.all([t, {
            event: this.event || {}
          }, e], {
            arrayMerge: function (t, e) {
              return e.length > 0 ? e : t
            }
          });
          if (this.tooltip = n.tooltip, this.legend = n.legend, this.event = n.event, this.style = n.style, this.points = n.data || this.points, n.skin && this.map) {
            var i = "Blueness" == n.skin ? b.Blueness : b.WhiteLover;
            this.map.setMapStyle({
              styleJson: i
            })
          }
          this.compileSplitList(this.points)
        }
      }, {
        key: "setOptionStyle",
        value: function (t) {
          this._setOptionStyle(t), this.TInit(), this._dataRender()
        }
      }, {
        key: "setDrawStyle",
        value: function (t) {
          var e = this.style.normal,
            n = this.style.mouseOver,
            i = this.style.selected,
            r = {};
          r = (0, y.default)(r, e);
          for (var o = this.style.splitList, a = 0; a < o.length; a++) {
            var s = o[a];
            if (null == s.end) {
              if (t.count >= s.start) {
                r = (0, y.default)(e, s);
                break
              }
            } else if (t.count >= s.start && t.count < s.end) {
              r = (0, y.default)(e, s);
              break
            }
          }
          var l = r.size,
            u = {};
          return n && this.overItem == t && (null != n.shadowBlur && null == n.shadowColor && (u.shadowColor = this.brightness(r.backgroundColor, 50)), r = y.default.all([r, e, n, {
            size: l * n.scale,
            backgroundColor: n.backgroundColor || this.brightness(r.backgroundColor, .1)
          }, u])), i && this.selectItemContains(t) && (null != i.shadowBlur && null == i.shadowColor && (u.shadowColor = this.brightness(i.backgroundColor, .1)), r = y.default.all([r, e, i, {
            size: l * n.scale
          }, u])), r
        }
      }, {
        key: "brightness",
        value: function (t, e) {
          var n = new w.Color(t);
          return n.r += e, n.g += e, n.b += e, n.getStyle()
        }
      }, {
        key: "selectItemContains",
        value: function (t) {
          return this.findIndexSelectItem(t) > -1
        }
      }, {
        key: "findIndexSelectItem",
        value: function (t) {
          return -1
        }
      }, {
        key: "deleteSelectItem",
        value: function (t) {
          var e = this.findIndexSelectItem(t);
          e > -1 && this.selectItem.splice(e, 1)
        }
      }, {
        key: "compileTemplate",
        value: function (t) {
          t = "`" + t.replace(/\{/g, "${overItem.") + "`", this.tooltipTemplate = new Function("overItem", "return " + t)
        }
      }, {
        key: "TInit",
        value: function () {
          this.style.colors.length > 0 ? this.compileSplitList(this.points) : this.setlegend(this.legend, this.style.splitList)
        }
      }, {
        key: "getColorOpacity",
        value: function (t) {
          var e = t.split(",");
          return e.length = 3, e.join(",") + ",1)"
        }
      }, {
        key: "setWorkerData",
        value: function (t) {
          this.workerData = t, this.filterFun && (this.selectItem = this.workerData.filter(this.filterFun))
        }
      }, {
        key: "parserExp",
        value: function (t) {
          this.cancerExp(), t && (this.selectedExp.show = !0, this.selectedExp.exp = t, this.filterFun = new Function("item", "with(item){ return " + t + " }"))
        }
      }, {
        key: "cancerExp",
        value: function () {
          this.selectedExp.show = !1, this.selectedExp.exp = null, this.filterFun = null
        }
      }, {
        key: "setCenter",
        value: function () {}
      }, {
        key: "setCenterAndZoom",
        value: function () {}
      }, {
        key: "setSelectd",
        value: function (t, e) {
          if (this.points.length > 0) {
            var n = new Function("item", "with(item){ return " + t + " }"),
              i = this.points.filter(n);
            i.length > 0 && this.setCenterAndZoom(i[0].geo, t, e)
          }
        }
      }, {
        key: "cancerSelectd",
        value: function () {
          this.cancerExp(), this.selectItem = [], this._dataRender()
        }
      }, {
        key: "setTooltip",
        value: function (t) {
          var e = this.tooltip,
            n = e.show,
            i = e.customClass,
            r = e.offsets,
            o = e.formatter;
          if (null == this.tooltipDom && (this.tooltipDom = document.createElement("div"), this.tooltipDom.classList.add("tooltip"), this.tooltipDom.classList.add(i), this.map._inmapOption.toolDom.appendChild(this.tooltipDom)), !n) return void(this.tooltipDom.style.display = "none");
          if (this.overItem) {
            var a = this.overItem;
            (0, g.isFunction)(o) ? this.tooltipDom.innerHTML = o(a): (0, g.isString)(o) && (this.tooltipTemplate || this.compileTemplate(o), this.tooltipDom.innerHTML = this.tooltipTemplate(a)), this.tooltipDom.style.left = t.jb.x + r.left + "px", this.tooltipDom.style.top = t.jb.y + r.top + "px", this.tooltipDom.style.display = "block"
          } else this.tooltipDom.style.display = "none"
        }
      }, {
        key: "compileSplitList",
        value: function (t) {
          var e = this.style.colors;
          if (!(e.length <= 0)) {
            if (!Array.isArray(this.points)) return void console.error(" array is not defined <shouild be setPoints(Array)>");
            t = t.sort(function (t, e) {
              return parseFloat(t.count) - parseFloat(e.count)
            });
            for (var n = t.length / e.length, i = 0, r = [], o = 0, a = 0, s = 0; s < t.length; s++) s > n * (i + 1) && (0 == r.length && (o = t[0].count), a = t[s].count, r.push({
              start: o,
              end: a,
              backgroundColor: e[i],
              borderColor: this.style.normal.borderColor || this.getColorOpacity(e[i])
            }), i++, o = t[s].count);
            r.length > 0 && r.push({
              start: o,
              end: null,
              backgroundColor: e[i],
              borderColor: this.style.normal.borderColor || this.getColorOpacity(e[i])
            }), this.style.splitList = r, this.setlegend(this.legend, this.style.splitList)
          }
        }
      }, {
        key: "Tclear",
        value: function () {
          this.tooltipDom && (this.tooltipDom.parentNode.removeChild(this.tooltipDom), this.tooltipDom = null), this.legendDom && (this.legendDom.parentNode.removeChild(this.legendDom), this.legendDom = null)
        }
      }, {
        key: "setlegend",
        value: function (t, e) {
          if (this.map) {
            if (null == t || 0 == t.show) return void(this.legendDom && (this.legendDom.style.display = "none"));
            var n = t.data;
            if (null == this.legendDom) {
              var i = document.createElement("ul");
              i.classList.add("legend"), this.map._inmapOption.toolDom.appendChild(i), this.legendDom = i
            }
            var r = "";
            t.title && (r = "<li class='title'>" + t.title + "</li>");
            var o = this.legend.formatter,
              a = this;
            e.forEach(function (e, i) {
              var s = null,
                l = e.backgroundColor;
              s = o ? o(a.toFixed(e.start), a.toFixed(e.end)) : n ? n[i] : a.toFixed(e.start) + " ~ " + (null == e.end ? "<span class='infinity'>∞</span>" : a.toFixed(e.end)), l ? r += "\n                <li class='item'>\n                    <span class='bg' style=\"background: " + a.getColorOpacity(l) + ';"></span>\n                    <span>' + s + "</span>\n                </li>" : t.show = !1
            });
            var s = !1;
            s = !!t.show && e.length > 0, this.legendDom.style.display = s ? "block" : "none", this.legendDom.innerHTML = r
          }
        }
      }, {
        key: "toFixed",
        value: function (t) {
          return parseFloat(t).toFixed(this.legend.toFixed)
        }
      }, {
        key: "getTarget",
        value: function (t, e) {
          return {
            item: null,
            index: -1
          }
        }
      }, {
        key: "_dataRender",
        value: function () {}
      }, {
        key: "swopeData",
        value: function (t, e) {
          t > -1 && (this.workerData[t] = this.workerData[this.workerData.length - 1], this.workerData[this.workerData.length - 1] = e)
        }
      }, {
        key: "tMouseleave",
        value: function () {
          this.tooltipDom && (this.tooltipDom.style.display = "none")
        }
      }, {
        key: "tMousemove",
        value: function (t) {
          if ("onmoving" != this.eventType) {
            var e = this.getTarget(t.pixel.x, t.pixel.y),
              n = e.item;
            n != this.overItem && (this.overItem = n, n && this.swopeData(e.index, e.item), this.eventType = "mousemove", this._dataRender()), n ? this.map.setDefaultCursor("pointer") : this.map.setDefaultCursor("default"), this.setTooltip(t)
          }
        }
      }, {
        key: "triggerClick",
        value: function (t) {
          this.event.onMouseClick(this.selectItem, t)
        }
      }, {
        key: "tMouseClick",
        value: function (t) {
          if ("onmoving" != this.eventType) {
            var e = this.event,
              n = e.onMouseClick,
              i = e.multiSelect;
            if (n) {
              var r = this.getTarget(t.pixel.x, t.pixel.y);
              if (-1 != r.index) {
                var o = r.item;
                i ? this.selectItemContains(o) ? this.deleteSelectItem(o) : this.selectItem.push(r.item) : this.selectItem = [r.item], this.swopeData(r.index, o), this.triggerClick(t), this.cancerExp(), this._dataRender(), (0, g.detectmob)() && (this.overItem = o, this.setTooltip(t))
              }
            }
          }
        }
      }]), e
    }(x.CanvasOverlay)
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    e.__esModule = !0;
    var r = n(61),
      o = i(r),
      a = n(60),
      s = i(a),
      l = "function" == typeof s.default && "symbol" == typeof o.default ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : typeof t
      };
    e.default = "function" == typeof s.default && "symbol" === l(o.default) ? function (t) {
      return void 0 === t ? "undefined" : l(t)
    } : function (t) {
      return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : void 0 === t ? "undefined" : l(t)
    }
  }, function (t, e, n) {
    var i = n(21),
      r = n(18),
      o = n(8),
      a = n(33),
      s = n(6),
      l = n(44),
      u = Object.getOwnPropertyDescriptor;
    e.f = n(4) ? u : function (t, e) {
      if (t = o(t), e = a(e, !0), l) try {
        return u(t, e)
      } catch (t) {}
      if (s(t, e)) return r(!i.f.call(t, e), t[e])
    }
  }, function (t, e) {
    e.f = Object.getOwnPropertySymbols
  }, , function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1)
    }
  }, function (t, e, n) {
    var i = n(68);
    t.exports = function (t, e, n) {
      if (i(t), void 0 === e) return t;
      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n)
          };
        case 2:
          return function (n, i) {
            return t.call(e, n, i)
          };
        case 3:
          return function (n, i, r) {
            return t.call(e, n, i, r)
          }
      }
      return function () {
        return t.apply(e, arguments)
      }
    }
  }, function (t, e, n) {
    var i = n(10),
      r = n(1).document,
      o = i(r) && i(r.createElement);
    t.exports = function (t) {
      return o ? r.createElement(t) : {}
    }
  }, function (t, e, n) {
    t.exports = !n(4) && !n(12)(function () {
      return 7 != Object.defineProperty(n(43)("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (t, e, n) {
    "use strict";
    var i = n(26),
      r = n(5),
      o = n(49),
      a = n(9),
      s = n(6),
      l = n(25),
      u = n(74),
      c = n(28),
      h = n(47),
      f = n(11)("iterator"),
      d = !([].keys && "next" in [].keys()),
      p = function () {
        return this
      };
    t.exports = function (t, e, n, y, v, m, g) {
      u(n, e, y);
      var b, x, w, k = function (t) {
          if (!d && t in C) return C[t];
          switch (t) {
            case "keys":
            case "values":
              return function () {
                return new n(this, t)
              }
          }
          return function () {
            return new n(this, t)
          }
        },
        _ = e + " Iterator",
        O = "values" == v,
        M = !1,
        C = t.prototype,
        T = C[f] || C["@@iterator"] || v && C[v],
        S = T || k(v),
        P = v ? O ? k("entries") : S : void 0,
        L = "Array" == e ? C.entries || T : T;
      if (L && (w = h(L.call(new t))) !== Object.prototype && w.next && (c(w, _, !0), i || s(w, f) || a(w, f, p)), O && T && "values" !== T.name && (M = !0, S = function () {
          return T.call(this)
        }), i && !g || !d && !M && C[f] || a(C, f, S), l[e] = S, l[_] = p, v)
        if (b = {
            values: O ? S : k("values"),
            keys: m ? S : k("keys"),
            entries: P
          }, g)
          for (x in b) x in C || o(C, x, b[x]);
        else r(r.P + r.F * (d || M), e, b);
      return b
    }
  }, function (t, e, n) {
    var i = n(48),
      r = n(24).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
      return i(t, r)
    }
  }, function (t, e, n) {
    var i = n(6),
      r = n(32),
      o = n(29)("IE_PROTO"),
      a = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
      return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
  }, function (t, e, n) {
    var i = n(6),
      r = n(8),
      o = n(70)(!1),
      a = n(29)("IE_PROTO");
    t.exports = function (t, e) {
      var n, s = r(t),
        l = 0,
        u = [];
      for (n in s) n != a && i(s, n) && u.push(n);
      for (; e.length > l;) i(s, n = e[l++]) && (~o(u, n) || u.push(n));
      return u
    }
  }, function (t, e, n) {
    t.exports = n(9)
  }, function (t, e, n) {
    t.exports = {
      default: n(63),
      __esModule: !0
    }
  }, function (t, e, n) {
    var i = n(41);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == i(t) ? t.split("") : Object(t)
    }
  }, function (t, e, n) {
    var i = n(19)("meta"),
      r = n(10),
      o = n(6),
      a = n(7).f,
      s = 0,
      l = Object.isExtensible || function () {
        return !0
      },
      u = !n(12)(function () {
        return l(Object.preventExtensions({}))
      }),
      c = function (t) {
        a(t, i, {
          value: {
            i: "O" + ++s,
            w: {}
          }
        })
      },
      h = function (t, e) {
        if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!o(t, i)) {
          if (!l(t)) return "F";
          if (!e) return "E";
          c(t)
        }
        return t[i].i
      },
      f = function (t, e) {
        if (!o(t, i)) {
          if (!l(t)) return !0;
          if (!e) return !1;
          c(t)
        }
        return t[i].w
      },
      d = function (t) {
        return u && p.NEED && l(t) && !o(t, i) && c(t), t
      },
      p = t.exports = {
        KEY: i,
        NEED: !1,
        fastKey: h,
        getWeak: f,
        onFreeze: d
      }
  }, function (t, e, n) {
    var i = n(7),
      r = n(14),
      o = n(17);
    t.exports = n(4) ? Object.defineProperties : function (t, e) {
      r(t);
      for (var n, a = o(e), s = a.length, l = 0; s > l;) i.f(t, n = a[l++], e[n]);
      return t
    }
  }, function (t, e, n) {
    var i = n(8),
      r = n(46).f,
      o = {}.toString,
      a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      s = function (t) {
        try {
          return r(t)
        } catch (t) {
          return a.slice()
        }
      };
    t.exports.f = function (t) {
      return a && "[object Window]" == o.call(t) ? s(t) : r(i(t))
    }
  }, function (t, e, n) {
    "use strict";
    var i = n(1),
      r = n(6),
      o = n(4),
      a = n(5),
      s = n(49),
      l = n(52).KEY,
      u = n(12),
      c = n(30),
      h = n(28),
      f = n(19),
      d = n(11),
      p = n(35),
      y = n(34),
      v = n(71),
      m = n(73),
      g = n(14),
      b = n(8),
      x = n(33),
      w = n(18),
      k = n(27),
      _ = n(54),
      O = n(38),
      M = n(7),
      C = n(17),
      T = O.f,
      S = M.f,
      P = _.f,
      L = i.Symbol,
      D = i.JSON,
      I = D && D.stringify,
      j = d("_hidden"),
      R = d("toPrimitive"),
      z = {}.propertyIsEnumerable,
      E = c("symbol-registry"),
      A = c("symbols"),
      F = c("op-symbols"),
      B = Object.prototype,
      H = "function" == typeof L,
      W = i.QObject,
      Z = !W || !W.prototype || !W.prototype.findChild,
      G = o && u(function () {
        return 7 != k(S({}, "a", {
          get: function () {
            return S(this, "a", {
              value: 7
            }).a
          }
        })).a
      }) ? function (t, e, n) {
        var i = T(B, e);
        i && delete B[e], S(t, e, n), i && t !== B && S(B, e, i)
      } : S,
      N = function (t) {
        var e = A[t] = k(L.prototype);
        return e._k = t, e
      },
      U = H && "symbol" == typeof L.iterator ? function (t) {
        return "symbol" == typeof t
      } : function (t) {
        return t instanceof L
      },
      Y = function (t, e, n) {
        return t === B && Y(F, e, n), g(t), e = x(e, !0), g(n), r(A, e) ? (n.enumerable ? (r(t, j) && t[j][e] && (t[j][e] = !1), n = k(n, {
          enumerable: w(0, !1)
        })) : (r(t, j) || S(t, j, w(1, {})), t[j][e] = !0), G(t, e, n)) : S(t, e, n)
      },
      q = function (t, e) {
        g(t);
        for (var n, i = v(e = b(e)), r = 0, o = i.length; o > r;) Y(t, n = i[r++], e[n]);
        return t
      },
      X = function (t, e) {
        return void 0 === e ? k(t) : q(k(t), e)
      },
      V = function (t) {
        var e = z.call(this, t = x(t, !0));
        return !(this === B && r(A, t) && !r(F, t)) && (!(e || !r(this, t) || !r(A, t) || r(this, j) && this[j][t]) || e)
      },
      J = function (t, e) {
        if (t = b(t), e = x(e, !0), t !== B || !r(A, e) || r(F, e)) {
          var n = T(t, e);
          return !n || !r(A, e) || r(t, j) && t[j][e] || (n.enumerable = !0), n
        }
      },
      $ = function (t) {
        for (var e, n = P(b(t)), i = [], o = 0; n.length > o;) r(A, e = n[o++]) || e == j || e == l || i.push(e);
        return i
      },
      K = function (t) {
        for (var e, n = t === B, i = P(n ? F : b(t)), o = [], a = 0; i.length > a;) !r(A, e = i[a++]) || n && !r(B, e) || o.push(A[e]);
        return o
      };
    H || (L = function () {
      if (this instanceof L) throw TypeError("Symbol is not a constructor!");
      var t = f(arguments.length > 0 ? arguments[0] : void 0),
        e = function (n) {
          this === B && e.call(F, n), r(this, j) && r(this[j], t) && (this[j][t] = !1), G(this, t, w(1, n))
        };
      return o && Z && G(B, t, {
        configurable: !0,
        set: e
      }), N(t)
    }, s(L.prototype, "toString", function () {
      return this._k
    }), O.f = J, M.f = Y, n(46).f = _.f = $, n(21).f = V, n(39).f = K, o && !n(26) && s(B, "propertyIsEnumerable", V, !0), p.f = function (t) {
      return N(d(t))
    }), a(a.G + a.W + a.F * !H, {
      Symbol: L
    });
    for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Q.length > tt;) d(Q[tt++]);
    for (var et = C(d.store), nt = 0; et.length > nt;) y(et[nt++]);
    a(a.S + a.F * !H, "Symbol", {
      for: function (t) {
        return r(E, t += "") ? E[t] : E[t] = L(t)
      },
      keyFor: function (t) {
        if (!U(t)) throw TypeError(t + " is not a symbol!");
        for (var e in E)
          if (E[e] === t) return e
      },
      useSetter: function () {
        Z = !0
      },
      useSimple: function () {
        Z = !1
      }
    }), a(a.S + a.F * !H, "Object", {
      create: X,
      defineProperty: Y,
      defineProperties: q,
      getOwnPropertyDescriptor: J,
      getOwnPropertyNames: $,
      getOwnPropertySymbols: K
    }), D && a(a.S + a.F * (!H || u(function () {
      var t = L();
      return "[null]" != I([t]) || "{}" != I({
        a: t
      }) || "{}" != I(Object(t))
    })), "JSON", {
      stringify: function (t) {
        if (void 0 !== t && !U(t)) {
          for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
          return e = i[1], "function" == typeof e && (n = e), !n && m(e) || (e = function (t, e) {
            if (n && (e = n.call(this, t, e)), !U(e)) return e
          }), i[1] = e, I.apply(D, i)
        }
      }
    }), L.prototype[R] || n(9)(L.prototype, R, L.prototype.valueOf), h(L, "Symbol"), h(Math, "Math", !0), h(i.JSON, "JSON", !0)
  }, , function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Label = void 0;
    var r = n(2),
      o = i(r),
      a = n(3),
      s = i(a);
    e.Label = function () {
      function t(e, n, i, r, a, s) {
        (0, o.default)(this, t), this.center = {
          x: e,
          y: n
        }, this.virtualReact = {
          maxX: 0,
          maxY: 0,
          minX: 0,
          minY: 0,
          width: 0,
          height: 0
        }, this.show = !0, this.text = s, this.textReact = {
          width: 0,
          height: 0
        }, this.radius = i + 2, this.padding = 0, this.aIndex = 0, this._getRectangle(1.1 * r, a - .6)
      }
      return (0, s.default)(t, [{
        key: "getCurrentRect",
        value: function () {
          var t = null;
          switch (this.aIndex.toString()) {
            case "0":
              t = this._getRightAnchor();
              break;
            case "1":
              t = this._getBottomAnchor();
              break;
            case "2":
              t = this._getLeftAnchor();
              break;
            case "3":
              t = this._getTopAnchor();
              break;
            default:
              t = this._getCenterRectange()
          }
          return t
        }
      }, {
        key: "next",
        value: function () {
          return this.aIndex++, this.aIndex > 3 && (this.show = !1), this.getCurrentRect()
        }
      }, {
        key: "_getTrueLength",
        value: function (t) {
          for (var e = t.length, n = 0, i = 0; i < e; i++) t.charCodeAt(i) > 128 ? n += 2 : n += 1;
          return n
        }
      }, {
        key: "isAnchorMeet",
        value: function (t) {
          var e = this.getCurrentRect(),
            n = t.getCurrentRect();
          return e.minX < n.maxX && n.minX < e.maxX && e.minY < n.maxY && n.minY < e.maxY
        }
      }, {
        key: "_getCenterRectange",
        value: function () {
          return {
            minX: this.center.x - this.radius,
            maxX: this.center.x + this.radius,
            minY: this.center.y - this.radius,
            maxY: this.center.y + this.radius
          }
        }
      }, {
        key: "_getRectangle",
        value: function (t, e) {
          var n = this._getTrueLength(this.text) * e;
          this.textReact = {
            width: n + 2 * this.padding,
            height: t
          }
        }
      }, {
        key: "_getLeftAnchor",
        value: function () {
          var t = this.center.x - this.radius - this.textReact.width,
            e = this.center.y - this.textReact.height / 2,
            n = 2 * this.radius,
            i = n > this.textReact.height ? n : this.textReact.height;
          return {
            x: t,
            y: e,
            minX: t,
            maxX: this.center.x + this.radius,
            minY: this.center.y - i / 2,
            maxY: this.center.y + i / 2
          }
        }
      }, {
        key: "_getRightAnchor",
        value: function () {
          var t = this.center.x + this.radius,
            e = this.center.y - this.textReact.height / 2,
            n = 2 * this.radius,
            i = n > this.textReact.height ? n : this.textReact.height;
          return {
            x: t,
            y: e,
            minX: this.center.x - this.radius,
            maxX: this.center.x + this.radius + this.textReact.width,
            minY: this.center.y - i / 2,
            maxY: this.center.y + i / 2
          }
        }
      }, {
        key: "_getTopAnchor",
        value: function () {
          var t = this.center.x - this.textReact.width / 2,
            e = this.center.y - this.radius - this.textReact.height,
            n = 2 * this.radius,
            i = n > this.textReact.width ? n : this.textReact.width;
          return {
            x: t,
            y: e,
            minX: this.center.x - i / 2,
            maxX: this.center.x + i / 2,
            minY: this.center.y - this.radius - this.textReact.height,
            maxY: this.center.y + this.radius
          }
        }
      }, {
        key: "_getBottomAnchor",
        value: function () {
          var t = this.center.x - this.textReact.width / 2,
            e = this.center.y + this.radius,
            n = this.radius > this.textReact.width ? this.radius : this.textReact.width;
          return {
            x: t,
            y: e,
            minX: this.center.x - n / 2,
            maxX: this.center.x + n / 2,
            minY: this.center.y - this.radius,
            maxY: this.center.y + this.radius + this.textReact.height
          }
        }
      }]), t
    }()
  }, function (t, e, n) {
    t.exports = {
      default: n(62),
      __esModule: !0
    }
  }, function (t, e, n) {
    t.exports = {
      default: n(65),
      __esModule: !0
    }
  }, function (t, e, n) {
    t.exports = {
      default: n(66),
      __esModule: !0
    }
  }, function (t, e, n) {
    t.exports = {
      default: n(67),
      __esModule: !0
    }
  }, function (t, e, n) {
    n(81);
    var i = n(0).Object;
    t.exports = function (t, e) {
      return i.create(t, e)
    }
  }, function (t, e, n) {
    n(82);
    var i = n(0).Object;
    t.exports = function (t, e, n) {
      return i.defineProperty(t, e, n)
    }
  }, function (t, e, n) {
    n(83), t.exports = n(0).Object.getPrototypeOf
  }, function (t, e, n) {
    n(84), t.exports = n(0).Object.setPrototypeOf
  }, function (t, e, n) {
    n(55), n(85), n(87), n(88), t.exports = n(0).Symbol
  }, function (t, e, n) {
    n(86), n(89), t.exports = n(35).f("iterator")
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t
    }
  }, function (t, e) {
    t.exports = function () {}
  }, function (t, e, n) {
    var i = n(8),
      r = n(79),
      o = n(78);
    t.exports = function (t) {
      return function (e, n, a) {
        var s, l = i(e),
          u = r(l.length),
          c = o(a, u);
        if (t && n != n) {
          for (; u > c;)
            if ((s = l[c++]) != s) return !0
        } else
          for (; u > c; c++)
            if ((t || c in l) && l[c] === n) return t || c || 0;
        return !t && -1
      }
    }
  }, function (t, e, n) {
    var i = n(17),
      r = n(39),
      o = n(21);
    t.exports = function (t) {
      var e = i(t),
        n = r.f;
      if (n)
        for (var a, s = n(t), l = o.f, u = 0; s.length > u;) l.call(t, a = s[u++]) && e.push(a);
      return e
    }
  }, function (t, e, n) {
    var i = n(1).document;
    t.exports = i && i.documentElement
  }, function (t, e, n) {
    var i = n(41);
    t.exports = Array.isArray || function (t) {
      return "Array" == i(t)
    }
  }, function (t, e, n) {
    "use strict";
    var i = n(27),
      r = n(18),
      o = n(28),
      a = {};
    n(9)(a, n(11)("iterator"), function () {
      return this
    }), t.exports = function (t, e, n) {
      t.prototype = i(a, {
        next: r(1, n)
      }), o(t, e + " Iterator")
    }
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        value: e,
        done: !!t
      }
    }
  }, function (t, e, n) {
    var i = n(10),
      r = n(14),
      o = function (t, e) {
        if (r(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
      };
    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, i) {
        try {
          i = n(42)(Function.call, n(38).f(Object.prototype, "__proto__").set, 2), i(t, []), e = !(t instanceof Array)
        } catch (t) {
          e = !0
        }
        return function (t, n) {
          return o(t, n), e ? t.__proto__ = n : i(t, n), t
        }
      }({}, !1) : void 0),
      check: o
    }
  }, function (t, e, n) {
    var i = n(31),
      r = n(23);
    t.exports = function (t) {
      return function (e, n) {
        var o, a, s = String(r(e)),
          l = i(n),
          u = s.length;
        return l < 0 || l >= u ? t ? "" : void 0 : (o = s.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : o : t ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536)
      }
    }
  }, function (t, e, n) {
    var i = n(31),
      r = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      return t = i(t), t < 0 ? r(t + e, 0) : o(t, e)
    }
  }, function (t, e, n) {
    var i = n(31),
      r = Math.min;
    t.exports = function (t) {
      return t > 0 ? r(i(t), 9007199254740991) : 0
    }
  }, function (t, e, n) {
    "use strict";
    var i = n(69),
      r = n(75),
      o = n(25),
      a = n(8);
    t.exports = n(45)(Array, "Array", function (t, e) {
      this._t = a(t), this._i = 0, this._k = e
    }, function () {
      var t = this._t,
        e = this._k,
        n = this._i++;
      return !t || n >= t.length ? (this._t = void 0, r(1)) : "keys" == e ? r(0, n) : "values" == e ? r(0, t[n]) : r(0, [n, t[n]])
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
  }, function (t, e, n) {
    var i = n(5);
    i(i.S, "Object", {
      create: n(27)
    })
  }, function (t, e, n) {
    var i = n(5);
    i(i.S + i.F * !n(4), "Object", {
      defineProperty: n(7).f
    })
  }, function (t, e, n) {
    var i = n(32),
      r = n(47);
    n(22)("getPrototypeOf", function () {
      return function (t) {
        return r(i(t))
      }
    })
  }, function (t, e, n) {
    var i = n(5);
    i(i.S, "Object", {
      setPrototypeOf: n(76).set
    })
  }, function (t, e) {}, function (t, e, n) {
    "use strict";
    var i = n(77)(!0);
    n(45)(String, "String", function (t) {
      this._t = String(t), this._i = 0
    }, function () {
      var t, e = this._t,
        n = this._i;
      return n >= e.length ? {
        value: void 0,
        done: !0
      } : (t = i(e, n), this._i += t.length, {
        value: t,
        done: !1
      })
    })
  }, function (t, e, n) {
    n(34)("asyncIterator")
  }, function (t, e, n) {
    n(34)("observable")
  }, function (t, e, n) {
    n(80);
    for (var i = n(1), r = n(9), o = n(25), a = n(11)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
      var u = s[l],
        c = i[u],
        h = c && c.prototype;
      h && !h[a] && r(h, a, u), o[u] = o.Array
    }
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return !!t && "object" == typeof t
    }

    function r(t) {
      var e = Object.prototype.toString.call(t);
      return "[object RegExp]" === e || "[object Date]" === e || o(t)
    }

    function o(t) {
      return t.$$typeof === d
    }

    function a(t) {
      return Array.isArray(t) ? [] : {}
    }

    function s(t, e) {
      return e && !0 === e.clone && h(t) ? c(a(t), t, e) : t
    }

    function l(t, e, n) {
      var i = t.slice();
      return e.forEach(function (e, r) {
        void 0 === i[r] ? i[r] = s(e, n) : h(e) ? i[r] = c(t[r], e, n) : -1 === t.indexOf(e) && i.push(s(e, n))
      }), i
    }

    function u(t, e, n) {
      var i = {};
      return h(t) && Object.keys(t).forEach(function (e) {
        i[e] = s(t[e], n)
      }), Object.keys(e).forEach(function (r) {
        h(e[r]) && t[r] ? i[r] = c(t[r], e[r], n) : i[r] = s(e[r], n)
      }), i
    }

    function c(t, e, n) {
      var i = Array.isArray(e),
        r = Array.isArray(t),
        o = n || {
          arrayMerge: l
        };
      if (i === r) return i ? (o.arrayMerge || l)(t, e, n) : u(t, e, n);
      return s(e, n)
    }
    var h = function (t) {
        return i(t) && !r(t)
      },
      f = "function" == typeof Symbol && Symbol.for,
      d = f ? Symbol.for("react.element") : 60103;
    c.all = function (t, e) {
      if (!Array.isArray(t) || t.length < 2) throw new Error("first argument should be an array with at least two elements");
      return t.reduce(function (t, n) {
        return c(t, n, e)
      })
    };
    var p = c;
    t.exports = p
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.workerMrg = void 0;
    var r = n(2),
      o = i(r),
      a = n(3),
      s = i(a),
      l = {},
      u = function () {
        function t() {
          (0, o.default)(this, t), this.worker = null, this.workerContent = "!function(t,e){\"object\"==typeof exports&&\"object\"==typeof module?module.exports=e():\"function\"==typeof define&&define.amd?define(\"inMap\",[],e):\"object\"==typeof exports?exports.inMap=e():t.inMap=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,\"a\",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=\"\",e(e.s=123)}([function(t,e){var n=t.exports={version:\"2.5.1\"};\"number\"==typeof __e&&(__e=n)},function(t,e){var n=t.exports=\"undefined\"!=typeof window&&window.Math==Math?window:\"undefined\"!=typeof self&&self.Math==Math?self:Function(\"return this\")();\"number\"==typeof __g&&(__g=n)},function(t,e,n){\"use strict\";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}},function(t,e,n){\"use strict\";e.__esModule=!0;var r=n(50),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},\"a\",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),o=n(0),i=n(42),u=n(9),a=function(t,e,n){var c,f,s,l=t&a.F,p=t&a.G,h=t&a.S,d=t&a.P,v=t&a.B,y=t&a.W,g=p?o:o[e]||(o[e]={}),x=g.prototype,b=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(c in n)(f=!l&&b&&void 0!==b[c])&&c in g||(s=f?b[c]:n[c],g[c]=p&&\"function\"!=typeof b[c]?n[c]:v&&f?i(s,r):y&&b[c]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):d&&\"function\"==typeof s?i(Function.call,s):s,d&&((g.virtual||(g.virtual={}))[c]=s,t&a.R&&x&&!x[c]&&u(x,c,s)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(14),o=n(44),i=n(33),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if(\"get\"in n||\"set\"in n)throw TypeError(\"Accessors not supported!\");return\"value\"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(51),o=n(23);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(7),o=n(18);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return\"object\"==typeof t?null!==t:\"function\"==typeof t}},function(t,e,n){var r=n(30)(\"wks\"),o=n(19),i=n(1).Symbol,u=\"function\"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)(\"Symbol.\"+t))}).store=r},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports={default:n(64),__esModule:!0}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+\" is not an object!\");return t}},,,function(t,e,n){var r=n(48),o=n(24);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return\"Symbol(\".concat(void 0===t?\"\":t,\")_\",(++n+r).toString(36))}},function(t,e,n){\"use strict\";function r(t){return\"function\"==typeof t}function o(t){return\"number\"==typeof t}function i(t){return\"string\"==typeof t}function u(t){return void 0!==t}function a(t){return\"object\"==(void 0===t?\"undefined\":(0,y.default)(t))}function c(t){return\"[object Array]\"==Object.prototype.toString.call(t)}function f(t){return t.replace(/[^\x00-\xff]/g,\"01\").length}function s(t){var e=window.devicePixelRatio;t.canvas.width=t.canvas.width*e,t.canvas.height=t.canvas.height*e,t.canvas.style.width=t.canvas.width/e+\"px\",t.canvas.style.height=t.canvas.height/e+\"px\",t.scale(e,e)}function l(t){return String(t).replace(/&/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\").replace(/\"/g,\"&quot;\").replace(/\'/g,\"&#39;\")}function p(t,e,n,r){for(var o=!1,i=90,u=-90,a=180,c=-180,f=0;f<e.length;f++)e[f]>u&&(u=e[f]),e[f]<i&&(i=e[f]),t[f]>c&&(c=t[f]),t[f]<a&&(a=t[f]);if(!(n<i||n>u||r<a||r>c))for(var s=0;s<e.length;s++){var l=(s+1)%e.length;e[s]<n!=e[l]<n&&r<(t[l]-t[s])*(n-e[s])/(e[l]-e[s])+t[s]&&(o=!o)}return o}function h(t,e,n){for(var r=[],o=[],i=0,u=n.length;i<u;i++)r.push(parseFloat(n[i][1])),o.push(parseFloat(n[i][0]));return p(r,o,t,e)}function d(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}Object.defineProperty(e,\"__esModule\",{value:!0}),e.extend=void 0;var v=n(37),y=function(t){return t&&t.__esModule?t:{default:t}}(v);e.isFunction=r,e.isNumber=o,e.isString=i,e.isDefined=u,e.isObject=a,e.isArray=c,e.getBlen=f,e.setDevicePixelRatio=s,e.encodeHTML=l,e.isPolyContains=p,e.isPolyContainsPt=h,e.detectmob=d;e.extend=function(t,e){if(t&&e&&\"object\"==(void 0===e?\"undefined\":(0,y.default)(e))){for(var n in e)t[n]=e[n];for(var r,o=[\"constructor\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"toLocaleString\",\"toString\",\"valueOf\"],i=0;i<o.length;i++)r=o[i],Object.prototype.constructor.call(e,r)&&(t[r]=e[r])}return t}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(5),o=n(0),i=n(12);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),\"Object\",u)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError(\"Can\'t call method on  \"+t);return t}},function(t,e){t.exports=\"constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf\".split(\",\")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,n){var r=n(14),o=n(53),i=n(24),u=n(29)(\"IE_PROTO\"),a=function(){},c=function(){var t,e=n(43)(\"iframe\"),r=i.length;for(e.style.display=\"none\",n(72).appendChild(e),e.src=\"javascript:\",t=e.contentWindow.document,t.open(),t.write(\"<script>document.F=Object<\/script>\"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(7).f,o=n(6),i=n(11)(\"toStringTag\");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(30)(\"keys\"),o=n(19);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o=r[\"__core-js_shared__\"]||(r[\"__core-js_shared__\"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(23);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&\"function\"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if(\"function\"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&\"function\"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError(\"Can\'t convert object to primitive value\")}},function(t,e,n){var r=n(1),o=n(0),i=n(26),u=n(35),a=n(7).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});\"_\"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(11)},,function(t,e,n){\"use strict\";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(61),i=r(o),u=n(60),a=r(u),c=\"function\"==typeof a.default&&\"symbol\"==typeof i.default?function(t){return typeof t}:function(t){return t&&\"function\"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?\"symbol\":typeof t};e.default=\"function\"==typeof a.default&&\"symbol\"===c(i.default)?function(t){return void 0===t?\"undefined\":c(t)}:function(t){return t&&\"function\"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?\"symbol\":void 0===t?\"undefined\":c(t)}},function(t,e,n){var r=n(21),o=n(18),i=n(8),u=n(33),a=n(6),c=n(44),f=Object.getOwnPropertyDescriptor;e.f=n(4)?f:function(t,e){if(t=i(t),e=u(e,!0),c)try{return f(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){\"use strict\";(function(t){function r(t){return t&&t.__esModule?t:{default:t}}var o,i,u,a=n(59),c=r(a),f=n(124),s=r(f),l=n(130),p=r(l),h=n(128),d=r(h),v=n(13),y=r(v),g=n(127),x=r(g),b=n(126),m=r(b),_=n(125),O=r(_),w=n(129),M=r(w),P=n(58),S=r(P),j=n(50),L=r(j),T=n(37),k=r(T);!function(n,r){\"object\"==(0,k.default)(e)&&\"object\"==(0,k.default)(t)?t.exports=r():(i=[],o=r,void 0!==(u=\"function\"==typeof o?o.apply(e,i):o)&&(t.exports=u))}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||(0,L.default)(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,\"a\",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=\"\",e(e.s=47)}([function(t,e){var n=t.exports={version:\"2.5.1\"};\"number\"==typeof __e&&(__e=n)},function(t,e){var n=t.exports=\"undefined\"!=typeof window&&window.Math==Math?window:\"undefined\"!=typeof self&&self.Math==Math?self:Function(\"return this\")();\"number\"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},\"a\",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(9),o=n(34),i=n(27),u=L.default;e.f=n(2)?L.default:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if(\"get\"in n||\"set\"in n)throw TypeError(\"Accessors not supported!\");return\"value\"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(1),o=n(0),i=n(32),u=n(6),a=function t(e,n,a){var c,f,s,l=e&t.F,p=e&t.G,h=e&t.S,d=e&t.P,v=e&t.B,y=e&t.W,g=p?o:o[n]||(o[n]={}),x=g.prototype,b=p?r:h?r[n]:(r[n]||{}).prototype;p&&(a=n);for(c in a)(f=!l&&b&&void 0!==b[c])&&c in g||(s=f?b[c]:a[c],g[c]=p&&\"function\"!=typeof b[c]?a[c]:v&&f?i(s,r):y&&b[c]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):d&&\"function\"==typeof s?i(Function.call,s):s,d&&((g.virtual||(g.virtual={}))[c]=s,e&t.R&&x&&!x[c]&&u(x,c,s)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(4),o=n(12);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(67),o=n(16);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(25)(\"wks\"),o=n(13),i=n(1).Symbol,u=\"function\"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)(\"Symbol.\"+t))}).store=r},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+\" is not an object!\");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return\"object\"==(void 0===t?\"undefined\":(0,k.default)(t))?null!==t:\"function\"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return\"Symbol(\".concat(void 0===t?\"\":t,\")_\",(++n+r).toString(36))}},function(t,e,n){e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}},function(t,e,n){e.__esModule=!0;var r=n(49),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError(\"Can\'t call method on  \"+t);return t}},function(t,e){t.exports=\"constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf\".split(\",\")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,n){var r=n(9),o=n(72),i=n(17),u=n(24)(\"IE_PROTO\"),a=function(){},c=function(){var t,e=n(33)(\"iframe\"),r=i.length;for(e.style.display=\"none\",n(66).appendChild(e),e.src=\"javascript:\",t=e.contentWindow.document,t.open(),t.write(\"<script>document.F=Object<\/script>\"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=S.default||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(40),o=n(17);t.exports=M.default||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(4).f,o=n(3),i=n(8)(\"toStringTag\");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(25)(\"keys\"),o=n(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o=r[\"__core-js_shared__\"]||(r[\"__core-js_shared__\"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&\"function\"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if(\"function\"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&\"function\"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError(\"Can\'t convert object to primitive value\")}},function(t,e,n){var r=n(1),o=n(0),i=n(19),u=n(29),a=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});\"_\"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(8)},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(53),i=r(o),u=n(52),a=r(u),c=\"function\"==typeof a.default&&\"symbol\"==(0,k.default)(i.default)?function(t){return void 0===t?\"undefined\":(0,k.default)(t)}:function(t){return t&&\"function\"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?\"symbol\":void 0===t?\"undefined\":(0,k.default)(t)};e.default=\"function\"==typeof a.default&&\"symbol\"===c(i.default)?function(t){return void 0===t?\"undefined\":c(t)}:function(t){return t&&\"function\"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?\"symbol\":void 0===t?\"undefined\":c(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(62);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(2)&&!n(10)(function(){return 7!=Object.defineProperty(n(33)(\"div\"),\"a\",{get:function(){return 7}}).a})},function(t,e,n){var r=n(19),o=n(5),i=n(41),u=n(6),a=n(3),c=n(18),f=n(69),s=n(23),l=n(39),p=n(8)(\"iterator\"),h=!([].keys&&\"next\"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,y,g,x){f(n,e,v);var b,m,_,O=function(t){if(!h&&t in S)return S[t];switch(t){case\"keys\":case\"values\":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+\" Iterator\",M=\"values\"==y,P=!1,S=t.prototype,j=S[p]||S[\"@@iterator\"]||y&&S[y],L=j||O(y),T=y?M?O(\"entries\"):L:void 0,k=\"Array\"==e?S.entries||j:j;if(k&&(_=l(k.call(new t)))!==Object.prototype&&_.next&&(s(_,w,!0),r||a(_,p)||u(_,p,d)),M&&j&&\"values\"!==j.name&&(P=!0,L=function(){return j.call(this)}),r&&!x||!h&&!P&&S[p]||u(S,p,L),c[e]=L,c[w]=d,y)if(b={values:M?L:O(\"values\"),keys:g?L:O(\"keys\"),entries:T},x)for(m in b)m in S||i(S,m,b[m]);else o(o.P+o.F*(h||P),e,b);return b}},function(t,e,n){var r=n(22),o=n(12),i=n(7),u=n(27),a=n(3),c=n(34),f=O.default;e.f=n(2)?f:function(t,e){if(t=i(t),e=u(e,!0),c)try{return f(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(40),o=n(17).concat(\"length\",\"prototype\");e.f=m.default||function(t){return r(t,o)}},function(t,e){e.f=x.default},function(t,e,n){var r=n(3),o=n(42),i=n(24)(\"IE_PROTO\"),u=Object.prototype;t.exports=y.default||function(t){return t=o(t),r(t,i)?t[i]:\"function\"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(3),o=n(7),i=n(64)(!1),u=n(24)(\"IE_PROTO\");t.exports=function(t,e){var n,a=o(t),c=0,f=[];for(n in a)n!=u&&r(a,n)&&f.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){t.exports=n(6)},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,\"__esModule\",{value:!0}),e.MercatorProjection=void 0;var o=n(50),i=r(o),u=n(14),a=r(u),c=n(15),f=r(c),s=n(55),l=r(s),p=n(54),h=r(p),d=n(46),v=n(45),y=n(44);e.MercatorProjection=function(t){function e(){(0,a.default)(this,e);var t=(0,l.default)(this,(e.__proto__||(0,i.default)(e)).call(this));return t.EARTHRADIUS=6370996.81,t.MCBAND=[12890594.86,8362377.87,5591021,3481989.83,1678043.12,0],t.LLBAND=[75,60,45,30,15,0],t.MC2LL=[[1.410526172116255e-8,898305509648872e-20,-1.9939833816331,200.9824383106796,-187.2403703815547,91.6087516669843,-23.38765649603339,2.57121317296198,-.03801003308653,17337981.2],[-7.435856389565537e-9,8983055097726239e-21,-.78625201886289,96.32687599759846,-1.85204757529826,-59.36935905485877,47.40033549296737,-16.50741931063887,2.28786674699375,10260144.86],[-3.030883460898826e-8,898305509983578e-20,.30071316287616,59.74293618442277,7.357984074871,-25.38371002664745,13.45380521110908,-3.29883767235584,.32710905363475,6856817.37],[-1.981981304930552e-8,8983055099779535e-21,.03278182852591,40.31678527705744,.65659298677277,-4.44255534477492,.85341911805263,.12923347998204,-.04625736007561,4482777.06],[3.09191371068437e-9,8983055096812155e-21,6995724062e-14,23.10934304144901,-.00023663490511,-.6321817810242,-.00663494467273,.03430082397953,-.00466043876332,2555164.4],[2.890871144776878e-9,8983055095805407e-21,-3.068298e-8,7.47137025468032,-353937994e-14,-.02145144861037,-1234426596e-14,.00010322952773,-323890364e-14,826088.5]],t.LL2MC=[[-.0015702102444,111320.7020616939,0x60e374c3105a3,-0x24bb4115e2e164,0x5cc55543bb0ae8,-0x7ce070193f3784,0x5e7ca61ddf8150,-0x261a578d8b24d0,0x665d60f3742ca,82.5],[.0008277824516172526,111320.7020463578,647795574.6671607,-4082003173.641316,10774905663.51142,-15171875531.51559,12053065338.62167,-5124939663.577472,913311935.9512032,67.5],[.00337398766765,111320.7020202162,4481351.045890365,-23393751.19931662,79682215.47186455,-115964993.2797253,97236711.15602145,-43661946.33752821,8477230.501135234,52.5],[.00220636496208,111320.7020209128,51751.86112841131,3796837.749470245,992013.7397791013,-1221952.21711287,1340652.697009075,-620943.6990984312,144416.9293806241,37.5],[-.0003441963504368392,111320.7020576856,278.2353980772752,2485758.690035394,6070.750963243378,54821.18345352118,9540.606633304236,-2710.55326746645,1405.483844121726,22.5],[-.0003218135878613132,111320.7020701615,.00369383431289,823725.6402795718,.46104986909093,2351.343141331292,1.58060784298199,8.77738589078284,.37238884252424,7.45]],t}return(0,h.default)(e,t),(0,f.default)(e,[{key:\"getDistanceByMC\",value:function(t,e){if(!t||!e)return 0;var n,r,o,i;return(t=this.convertMC2LL(t))?(n=this.toRadians(t.lng),r=this.toRadians(t.lat),(e=this.convertMC2LL(e))?(o=this.toRadians(e.lng),i=this.toRadians(e.lat),this.getDistance(n,o,r,i)):0):0}},{key:\"getDistanceByLL\",value:function(t,e){if(!t||!e)return 0;t.lng=this.getLoop(t.lng,-180,180),t.lat=this.getRange(t.lat,-74,74),e.lng=this.getLoop(e.lng,-180,180),e.lat=this.getRange(e.lat,-74,74);var n,r,o,i;return n=this.toRadians(t.lng),o=this.toRadians(t.lat),r=this.toRadians(e.lng),i=this.toRadians(e.lat),this.getDistance(n,r,o,i)}},{key:\"convertMC2LL\",value:function(t){var e,n;e=new v.Point(Math.abs(t.lng),Math.abs(t.lat));for(var r=0;r<this.MCBAND.length;r++)if(e.lat>=this.MCBAND[r]){n=this.MC2LL[r];break}var o=this.convertor(t,n);return new v.Point(o.lng.toFixed(6),o.lat.toFixed(6))}},{key:\"convertLL2MC\",value:function(t){var e,n;t.lng=this.getLoop(t.lng,-180,180),t.lat=this.getRange(t.lat,-74,74),e=new v.Point(t.lng,t.lat);for(var r=0;r<this.LLBAND.length;r++)if(e.lat>=this.LLBAND[r]){n=this.LL2MC[r];break}if(!n)for(var o=this.LLBAND.length-1;o>=0;o--)if(e.lat<=-this.LLBAND[o]){n=this.LL2MC[o];break}var i=this.convertor(t,n);return new v.Point(i.lng.toFixed(2),i.lat.toFixed(2))}},{key:\"convertor\",value:function(t,e){if(t&&e){var n=e[0]+e[1]*Math.abs(t.lng),r=Math.abs(t.lat)/e[9],o=e[2]+e[3]*r+e[4]*r*r+e[5]*r*r*r+e[6]*r*r*r*r+e[7]*r*r*r*r*r+e[8]*r*r*r*r*r*r;return n*=t.lng<0?-1:1,o*=t.lat<0?-1:1,new v.Point(n,o)}}},{key:\"getDistance\",value:function(t,e,n,r){return this.EARTHRADIUS*Math.acos(Math.sin(n)*Math.sin(r)+Math.cos(n)*Math.cos(r)*Math.cos(e-t))}},{key:\"toRadians\",value:function(t){return Math.PI*t/180}},{key:\"toDegrees\",value:function(t){return 180*t/Math.PI}},{key:\"getRange\",value:function(t,e,n){return null!=e&&(t=Math.max(t,e)),null!=n&&(t=Math.min(t,n)),t}},{key:\"getLoop\",value:function(t,e,n){for(;t>n;)t-=n-e;for(;t<e;)t+=n-e;return t}},{key:\"lngLatToMercator\",value:function(t){return this.convertLL2MC(t)}},{key:\"lngLatToPoint\",value:function(t){var e=this.convertLL2MC(t);return new y.Pixel(e.lng,e.lat)}},{key:\"mercatorToLngLat\",value:function(t){return this.convertMC2LL(t)}},{key:\"pointToLngLat\",value:function(t){var e=new v.Point(t.x,t.y);return this.convertMC2LL(e)}},{key:\"pointToPixel\",value:function(t,e,n,r,o){if(t){t=this.lngLatToMercator(t,o),n=this.lngLatToMercator(n);var i=this.getZoomUnits(e),u=Math.round((t.lng-n.lng)/i+r.width/2),a=Math.round((n.lat-t.lat)/i+r.height/2);return new y.Pixel(u,a)}}},{key:\"pixelToPoint\",value:function(t,e,n,r,o){if(t){var i=this.getZoomUnits(e),u=n.lng+i*(t.x-r.width/2),a=n.lat-i*(t.y-r.height/2),c=new v.Point(u,a);return this.mercatorToLngLat(c,o)}}},{key:\"getZoomUnits\",value:function(t){return Math.pow(2,18-t)}}]),e}(d.Projection)},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,\"__esModule\",{value:!0}),e.Pixel=void 0;var o=n(14),i=r(o),u=n(15),a=r(u);e.Pixel=function(){function t(e,n){(0,i.default)(this,t),this.x=e||0,this.y=n||0}return(0,a.default)(t,[{key:\"Pixel\",value:function(t){return t&&t.x==this.x&&t.y==this.y}}]),t}()},function(t,e,n){function r(t){return\"string\"==typeof t}function o(t,e){isNaN(t)&&(t=isNaN(t)?0:t),r(t)&&(t=parseFloat(t)),isNaN(e)&&(e=isNaN(e)?0:e),r(e)&&(e=parseFloat(e)),this.lng=t,this.lat=e}Object.defineProperty(e,\"__esModule\",{value:!0}),e.isString=r,e.Point=o,o.isInRange=function(t){return t&&t.lng<=180&&t.lng>=-180&&t.lat<=74&&t.lat>=-74},o.prototype.equals=function(t){return t&&this.lat==t.lat&&this.lng==t.lng},e.default=o},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,\"__esModule\",{value:!0}),e.Projection=void 0;var o=n(14),i=r(o),u=n(15),a=r(u);e.Projection=function(){function t(){(0,i.default)(this,t)}return(0,a.default)(t,[{key:\"lngLatToPoint\",value:function(){throw\"lngLatToPoint方法未实现\"}},{key:\"pointToLngLat\",value:function(){throw\"pointToLngLat方法未实现\"}}]),t}()},function(t,e,n){function r(t){return\"[object Array]\"==Object.prototype.toString.call(t)}function o(t,e){var n=e.getZoom(),r=e.getCenter(),o=e.getSize();return f.pointToPixel(t,n,r,o)}function i(t,e){var n=t;t=r(n)?n:n.request.data,e=e||n.request.map;for(var i=[],u=0,a=t.length;u<a;u++)i.push(o(t[u],e));return i}function u(t,e){var n=e.zoom,r=e.center,o=e.size;return f.pointToPixel(t,n,r,o)}function a(t,e){var n=t;t=r(n)?n:n.request.data,e=e||n.request.map;for(var o=[],i=0,a=t.length;i<a;i++)o.push(u(t[i],e));return o}Object.defineProperty(e,\"__esModule\",{value:!0}),e.geo=void 0,e.pointToPixel=o,e.pointsToPixels=i,e.pointToPixelWorker=u,e.pointsToPixelsWoker=a;var c=n(43),f=e.geo={pointToPixel:function(t,e,n,r){return this.projection.pointToPixel(t,e,n,r)},lngLatToMercator:function(t){return this.projection.convertLL2MC(t)},projection:new c.MercatorProjection}},function(t,e,n){t.exports={default:n(56),__esModule:!0}},function(t,e,n){t.exports={default:n(57),__esModule:!0}},function(t,e,n){t.exports={default:n(58),__esModule:!0}},function(t,e,n){t.exports={default:n(59),__esModule:!0}},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){t.exports={default:n(61),__esModule:!0}},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(51),i=r(o),u=n(48),a=r(u),c=n(30),f=r(c);e.default=function(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+(void 0===e?\"undefined\":(0,f.default)(e)));t.prototype=(0,a.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){e.__esModule=!0;var r=n(30),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError(\"this hasn\'t been initialised - super() hasn\'t been called\");return!e||\"object\"!==(void 0===e?\"undefined\":(0,o.default)(e))&&\"function\"!=typeof e?t:e}},function(t,e,n){n(80);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){n(81);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(82),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){n(83),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){n(86),n(84),n(87),n(88),t.exports=n(0).Symbol},function(t,e,n){n(85),n(89),t.exports=n(29).f(\"iterator\")},function(t,e){t.exports=function(t){if(\"function\"!=typeof t)throw TypeError(t+\" is not a function!\");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(7),o=n(78),i=n(77);t.exports=function(t){return function(e,n,u){var a,c=r(e),f=o(c.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(21),o=n(38),i=n(22);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),c=i.f,f=0;a.length>f;)c.call(t,u=a[f++])&&e.push(u);return e}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(31);t.exports=Object(\"z\").propertyIsEnumerable(0)?Object:function(t){return\"String\"==r(t)?t.split(\"\"):Object(t)}},function(t,e,n){var r=n(31);t.exports=Array.isArray||function(t){return\"Array\"==r(t)}},function(t,e,n){var r=n(20),o=n(12),i=n(23),u={};n(6)(u,n(8)(\"iterator\"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+\" Iterator\")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(13)(\"meta\"),o=n(11),i=n(3),u=n(4).f,a=0,c=d.default||function(){return!0},f=!n(10)(function(){return c((0,p.default)({}))}),s=function(t){u(t,r,{value:{i:\"O\"+ ++a,w:{}}})},l=function(t,e){if(!o(t))return\"symbol\"==(void 0===t?\"undefined\":(0,k.default)(t))?t:(\"string\"==typeof t?\"S\":\"P\")+t;if(!i(t,r)){if(!c(t))return\"F\";if(!e)return\"E\";s(t)}return t[r].i},h=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},v=function(t){return f&&y.NEED&&c(t)&&!i(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:h,onFreeze:v}},function(t,e,n){var r=n(4),o=n(9),i=n(21);t.exports=n(2)?s.default:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(7),o=n(37).f,i={}.toString,u=\"object\"==(\"undefined\"==typeof window?\"undefined\":(0,k.default)(window))&&window&&m.default?(0,m.default)(window):[],a=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&\"[object Window]\"==i.call(t)?a(t):o(r(t))}},function(t,e,n){var r=n(5),o=n(0),i=n(10);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),\"Object\",u)}},function(t,e,n){var r=n(11),o=n(9),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+\": can\'t set as prototype!\")};t.exports={set:c.default||(\"__proto__\"in{}?function(t,e,r){try{r=n(32)(Function.call,n(36).f(Object.prototype,\"__proto__\").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(26),o=n(16);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),f=a.length;return c<0||c>=f?t?\"\":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(26),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(63),o=n(70),i=n(18),u=n(7);t.exports=n(35)(Array,\"Array\",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):\"keys\"==e?o(0,n):\"values\"==e?o(0,t[n]):o(0,[n,t[n]])},\"values\"),i.Arguments=i.Array,r(\"keys\"),r(\"values\"),r(\"entries\")},function(t,e,n){var r=n(5);r(r.S,\"Object\",{create:n(20)})},function(t,e,n){var r=n(5);r(r.S+r.F*!n(2),\"Object\",{defineProperty:n(4).f})},function(t,e,n){var r=n(42),o=n(39);n(74)(\"getPrototypeOf\",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(5);r(r.S,\"Object\",{setPrototypeOf:n(75).set})},function(t,e){},function(t,e,n){var r=n(76)(!0);n(35)(String,\"String\",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(1),o=n(3),i=n(2),u=n(5),a=n(41),c=n(71).KEY,f=n(10),s=n(25),l=n(23),p=n(13),h=n(8),d=n(29),v=n(28),y=n(65),g=n(68),x=n(9),b=n(7),m=n(27),_=n(12),O=n(20),w=n(73),M=n(36),P=n(4),S=n(21),j=M.f,L=P.f,T=w.f,E=r.Symbol,R=r.JSON,C=R&&R.stringify,A=h(\"_hidden\"),N=h(\"toPrimitive\"),F={}.propertyIsEnumerable,I=s(\"symbol-registry\"),q=s(\"symbols\"),D=s(\"op-symbols\"),G=Object.prototype,B=\"function\"==typeof E,H=r.QObject,W=!H||!H.prototype||!H.prototype.findChild,Y=i&&f(function(){return 7!=O(L({},\"a\",{get:function(){return L(this,\"a\",{value:7}).a}})).a})?function(t,e,n){var r=j(G,e);r&&delete G[e],L(t,e,n),r&&t!==G&&L(G,e,r)}:L,z=function(t){var e=q[t]=O(E.prototype);return e._k=t,e},X=B&&\"symbol\"==(0,k.default)(E.iterator)?function(t){return\"symbol\"==(void 0===t?\"undefined\":(0,k.default)(t))}:function(t){return t instanceof E},V=function t(e,n,r){return e===G&&t(D,n,r),x(e),n=m(n,!0),x(r),o(q,n)?(r.enumerable?(o(e,A)&&e[A][n]&&(e[A][n]=!1),r=O(r,{enumerable:_(0,!1)})):(o(e,A)||L(e,A,_(1,{})),e[A][n]=!0),Y(e,n,r)):L(e,n,r)},U=function(t,e){x(t);for(var n,r=y(e=b(e)),o=0,i=r.length;i>o;)V(t,n=r[o++],e[n]);return t},J=function(t,e){return void 0===e?O(t):U(O(t),e)},K=function(t){var e=F.call(this,t=m(t,!0));return!(this===G&&o(q,t)&&!o(D,t))&&(!(e||!o(this,t)||!o(q,t)||o(this,A)&&this[A][t])||e)},Z=function(t,e){if(t=b(t),e=m(e,!0),t!==G||!o(q,e)||o(D,e)){var n=j(t,e);return!n||!o(q,e)||o(t,A)&&t[A][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=T(b(t)),r=[],i=0;n.length>i;)o(q,e=n[i++])||e==A||e==c||r.push(e);return r},$=function(t){for(var e,n=t===G,r=T(n?D:b(t)),i=[],u=0;r.length>u;)!o(q,e=r[u++])||n&&!o(G,e)||i.push(q[e]);return i};B||(E=function(){if(this instanceof E)throw TypeError(\"Symbol is not a constructor!\");var t=p(arguments.length>0?arguments[0]:void 0),e=function e(n){this===G&&e.call(D,n),o(this,A)&&o(this[A],t)&&(this[A][t]=!1),Y(this,t,_(1,n))};return i&&W&&Y(G,t,{configurable:!0,set:e}),z(t)},a(E.prototype,\"toString\",function(){return this._k}),M.f=Z,P.f=V,n(37).f=w.f=Q,n(22).f=K,n(38).f=$,i&&!n(19)&&a(G,\"propertyIsEnumerable\",K,!0),d.f=function(t){return z(h(t))}),u(u.G+u.W+u.F*!B,{Symbol:E});for(var tt=\"hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables\".split(\",\"),et=0;tt.length>et;)h(tt[et++]);for(var nt=S(h.store),rt=0;nt.length>rt;)v(nt[rt++]);u(u.S+u.F*!B,\"Symbol\",{for:function(t){return o(I,t+=\"\")?I[t]:I[t]=E(t)},keyFor:function(t){if(!X(t))throw TypeError(t+\" is not a symbol!\");for(var e in I)if(I[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),u(u.S+u.F*!B,\"Object\",{create:J,defineProperty:V,defineProperties:U,getOwnPropertyDescriptor:Z,getOwnPropertyNames:Q,getOwnPropertySymbols:$}),R&&u(u.S+u.F*(!B||f(function(){var t=E();return\"[null]\"!=C([t])||\"{}\"!=C({a:t})||\"{}\"!=C(Object(t))})),\"JSON\",{stringify:function(t){if(void 0!==t&&!X(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],\"function\"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!X(e))return e}),r[1]=e,C.apply(R,r)}}}),E.prototype[N]||n(6)(E.prototype,N,E.prototype.valueOf),l(E,\"Symbol\"),l(Math,\"Math\",!0),l(r.JSON,\"JSON\",!0)},function(t,e,n){n(28)(\"asyncIterator\")},function(t,e,n){n(28)(\"observable\")},function(t,e,n){n(79);for(var r=n(1),o=n(6),i=n(18),u=n(8)(\"toStringTag\"),a=\"CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList\".split(\",\"),c=0;c<a.length;c++){var f=a[c],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}}])})}).call(e,n(151)(t))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(68);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(4)&&!n(12)(function(){return 7!=Object.defineProperty(n(43)(\"div\"),\"a\",{get:function(){return 7}}).a})},function(t,e,n){\"use strict\";var r=n(26),o=n(5),i=n(49),u=n(9),a=n(6),c=n(25),f=n(74),s=n(28),l=n(47),p=n(11)(\"iterator\"),h=!([].keys&&\"next\"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,y,g,x){f(n,e,v);var b,m,_,O=function(t){if(!h&&t in S)return S[t];switch(t){case\"keys\":case\"values\":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+\" Iterator\",M=\"values\"==y,P=!1,S=t.prototype,j=S[p]||S[\"@@iterator\"]||y&&S[y],L=j||O(y),T=y?M?O(\"entries\"):L:void 0,k=\"Array\"==e?S.entries||j:j;if(k&&(_=l(k.call(new t)))!==Object.prototype&&_.next&&(s(_,w,!0),r||a(_,p)||u(_,p,d)),M&&j&&\"values\"!==j.name&&(P=!0,L=function(){return j.call(this)}),r&&!x||!h&&!P&&S[p]||u(S,p,L),c[e]=L,c[w]=d,y)if(b={values:M?L:O(\"values\"),keys:g?L:O(\"keys\"),entries:T},x)for(m in b)m in S||i(S,m,b[m]);else o(o.P+o.F*(h||P),e,b);return b}},function(t,e,n){var r=n(48),o=n(24).concat(\"length\",\"prototype\");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(6),o=n(32),i=n(29)(\"IE_PROTO\"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:\"function\"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(6),o=n(8),i=n(70)(!1),u=n(29)(\"IE_PROTO\");t.exports=function(t,e){var n,a=o(t),c=0,f=[];for(n in a)n!=u&&r(a,n)&&f.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){t.exports=n(9)},function(t,e,n){t.exports={default:n(63),__esModule:!0}},function(t,e,n){var r=n(41);t.exports=Object(\"z\").propertyIsEnumerable(0)?Object:function(t){return\"String\"==r(t)?t.split(\"\"):Object(t)}},function(t,e,n){var r=n(19)(\"meta\"),o=n(10),i=n(6),u=n(7).f,a=0,c=Object.isExtensible||function(){return!0},f=!n(12)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:\"O\"+ ++a,w:{}}})},l=function(t,e){if(!o(t))return\"symbol\"==typeof t?t:(\"string\"==typeof t?\"S\":\"P\")+t;if(!i(t,r)){if(!c(t))return\"F\";if(!e)return\"E\";s(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},h=function(t){return f&&d.NEED&&c(t)&&!i(t,r)&&s(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},function(t,e,n){var r=n(7),o=n(14),i=n(17);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(8),o=n(46).f,i={}.toString,u=\"object\"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&\"[object Window]\"==i.call(t)?a(t):o(r(t))}},function(t,e,n){\"use strict\";var r=n(1),o=n(6),i=n(4),u=n(5),a=n(49),c=n(52).KEY,f=n(12),s=n(30),l=n(28),p=n(19),h=n(11),d=n(35),v=n(34),y=n(71),g=n(73),x=n(14),b=n(8),m=n(33),_=n(18),O=n(27),w=n(54),M=n(38),P=n(7),S=n(17),j=M.f,L=P.f,T=w.f,k=r.Symbol,E=r.JSON,R=E&&E.stringify,C=h(\"_hidden\"),A=h(\"toPrimitive\"),N={}.propertyIsEnumerable,F=s(\"symbol-registry\"),I=s(\"symbols\"),q=s(\"op-symbols\"),D=Object.prototype,G=\"function\"==typeof k,B=r.QObject,H=!B||!B.prototype||!B.prototype.findChild,W=i&&f(function(){return 7!=O(L({},\"a\",{get:function(){return L(this,\"a\",{value:7}).a}})).a})?function(t,e,n){var r=j(D,e);r&&delete D[e],L(t,e,n),r&&t!==D&&L(D,e,r)}:L,Y=function(t){var e=I[t]=O(k.prototype);return e._k=t,e},z=G&&\"symbol\"==typeof k.iterator?function(t){return\"symbol\"==typeof t}:function(t){return t instanceof k},X=function(t,e,n){return t===D&&X(q,e,n),x(t),e=m(e,!0),x(n),o(I,e)?(n.enumerable?(o(t,C)&&t[C][e]&&(t[C][e]=!1),n=O(n,{enumerable:_(0,!1)})):(o(t,C)||L(t,C,_(1,{})),t[C][e]=!0),W(t,e,n)):L(t,e,n)},V=function(t,e){x(t);for(var n,r=y(e=b(e)),o=0,i=r.length;i>o;)X(t,n=r[o++],e[n]);return t},U=function(t,e){return void 0===e?O(t):V(O(t),e)},J=function(t){var e=N.call(this,t=m(t,!0));return!(this===D&&o(I,t)&&!o(q,t))&&(!(e||!o(this,t)||!o(I,t)||o(this,C)&&this[C][t])||e)},K=function(t,e){if(t=b(t),e=m(e,!0),t!==D||!o(I,e)||o(q,e)){var n=j(t,e);return!n||!o(I,e)||o(t,C)&&t[C][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=T(b(t)),r=[],i=0;n.length>i;)o(I,e=n[i++])||e==C||e==c||r.push(e);return r},Q=function(t){for(var e,n=t===D,r=T(n?q:b(t)),i=[],u=0;r.length>u;)!o(I,e=r[u++])||n&&!o(D,e)||i.push(I[e]);return i};G||(k=function(){if(this instanceof k)throw TypeError(\"Symbol is not a constructor!\");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call(q,n),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),W(this,t,_(1,n))};return i&&H&&W(D,t,{configurable:!0,set:e}),Y(t)},a(k.prototype,\"toString\",function(){return this._k}),M.f=K,P.f=X,n(46).f=w.f=Z,n(21).f=J,n(39).f=Q,i&&!n(26)&&a(D,\"propertyIsEnumerable\",J,!0),d.f=function(t){return Y(h(t))}),u(u.G+u.W+u.F*!G,{Symbol:k});for(var $=\"hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables\".split(\",\"),tt=0;$.length>tt;)h($[tt++]);for(var et=S(h.store),nt=0;et.length>nt;)v(et[nt++]);u(u.S+u.F*!G,\"Symbol\",{for:function(t){return o(F,t+=\"\")?F[t]:F[t]=k(t)},keyFor:function(t){if(!z(t))throw TypeError(t+\" is not a symbol!\");for(var e in F)if(F[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),u(u.S+u.F*!G,\"Object\",{create:U,defineProperty:X,defineProperties:V,getOwnPropertyDescriptor:K,getOwnPropertyNames:Z,getOwnPropertySymbols:Q}),E&&u(u.S+u.F*(!G||f(function(){var t=k();return\"[null]\"!=R([t])||\"{}\"!=R({a:t})||\"{}\"!=R(Object(t))})),\"JSON\",{stringify:function(t){if(void 0!==t&&!z(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],\"function\"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!z(e))return e}),r[1]=e,R.apply(E,r)}}}),k.prototype[A]||n(9)(k.prototype,A,k.prototype.valueOf),l(k,\"Symbol\"),l(Math,\"Math\",!0),l(r.JSON,\"JSON\",!0)},function(t,e,n){\"use strict\";function r(t,e){isNaN(t)&&(t=isNaN(t)?0:t),(0,o.isString)(t)&&(t=parseFloat(t)),isNaN(e)&&(e=isNaN(e)?0:e),(0,o.isString)(e)&&(e=parseFloat(e)),this.lng=t,this.lat=e}Object.defineProperty(e,\"__esModule\",{value:!0}),e.Point=r;var o=n(20);r.isInRange=function(t){return t&&t.lng<=180&&t.lng>=-180&&t.lat<=74&&t.lat>=-74},r.prototype.equals=function(t){return t&&this.lat==t.lat&&this.lng==t.lng},e.default=r},function(t,e,n){\"use strict\";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,\"__esModule\",{value:!0}),e.Label=void 0;var o=n(2),i=r(o),u=n(3),a=r(u);e.Label=function(){function t(e,n,r,o,u,a){(0,i.default)(this,t),this.center={x:e,y:n},this.virtualReact={maxX:0,maxY:0,minX:0,minY:0,width:0,height:0},this.show=!0,this.text=a,this.textReact={width:0,height:0},this.radius=r+2,this.padding=0,this.aIndex=0,this._getRectangle(1.1*o,u-.6)}return(0,a.default)(t,[{key:\"getCurrentRect\",value:function(){var t=null;switch(this.aIndex.toString()){case\"0\":t=this._getRightAnchor();break;case\"1\":t=this._getBottomAnchor();break;case\"2\":t=this._getLeftAnchor();break;case\"3\":t=this._getTopAnchor();break;default:t=this._getCenterRectange()}return t}},{key:\"next\",value:function(){return this.aIndex++,this.aIndex>3&&(this.show=!1),this.getCurrentRect()}},{key:\"_getTrueLength\",value:function(t){for(var e=t.length,n=0,r=0;r<e;r++)t.charCodeAt(r)>128?n+=2:n+=1;return n}},{key:\"isAnchorMeet\",value:function(t){var e=this.getCurrentRect(),n=t.getCurrentRect();return e.minX<n.maxX&&n.minX<e.maxX&&e.minY<n.maxY&&n.minY<e.maxY}},{key:\"_getCenterRectange\",value:function(){return{minX:this.center.x-this.radius,maxX:this.center.x+this.radius,minY:this.center.y-this.radius,maxY:this.center.y+this.radius}}},{key:\"_getRectangle\",value:function(t,e){var n=this._getTrueLength(this.text)*e;this.textReact={width:n+2*this.padding,height:t}}},{key:\"_getLeftAnchor\",value:function(){var t=this.center.x-this.radius-this.textReact.width,e=this.center.y-this.textReact.height/2,n=2*this.radius,r=n>this.textReact.height?n:this.textReact.height;return{x:t,y:e,minX:t,maxX:this.center.x+this.radius,minY:this.center.y-r/2,maxY:this.center.y+r/2}}},{key:\"_getRightAnchor\",value:function(){var t=this.center.x+this.radius,e=this.center.y-this.textReact.height/2,n=2*this.radius,r=n>this.textReact.height?n:this.textReact.height;return{x:t,y:e,minX:this.center.x-this.radius,maxX:this.center.x+this.radius+this.textReact.width,minY:this.center.y-r/2,maxY:this.center.y+r/2}}},{key:\"_getTopAnchor\",value:function(){var t=this.center.x-this.textReact.width/2,e=this.center.y-this.radius-this.textReact.height,n=2*this.radius,r=n>this.textReact.width?n:this.textReact.width;return{x:t,y:e,minX:this.center.x-r/2,maxX:this.center.x+r/2,minY:this.center.y-this.radius-this.textReact.height,maxY:this.center.y+this.radius}}},{key:\"_getBottomAnchor\",value:function(){var t=this.center.x-this.textReact.width/2,e=this.center.y+this.radius,n=this.radius>this.textReact.width?this.radius:this.textReact.width;return{x:t,y:e,minX:this.center.x-n/2,maxX:this.center.x+n/2,minY:this.center.y-this.radius,maxY:this.center.y+this.radius+this.textReact.height}}}]),t}()},function(t,e,n){t.exports={default:n(62),__esModule:!0}},function(t,e,n){t.exports={default:n(65),__esModule:!0}},function(t,e,n){t.exports={default:n(66),__esModule:!0}},function(t,e,n){t.exports={default:n(67),__esModule:!0}},function(t,e,n){n(81);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){n(82);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(83),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){n(84),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){n(55),n(85),n(87),n(88),t.exports=n(0).Symbol},function(t,e,n){n(86),n(89),t.exports=n(35).f(\"iterator\")},function(t,e){t.exports=function(t){if(\"function\"!=typeof t)throw TypeError(t+\" is not a function!\");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(8),o=n(79),i=n(78);t.exports=function(t){return function(e,n,u){var a,c=r(e),f=o(c.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(17),o=n(39),i=n(21);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),c=i.f,f=0;a.length>f;)c.call(t,u=a[f++])&&e.push(u);return e}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(41);t.exports=Array.isArray||function(t){return\"Array\"==r(t)}},function(t,e,n){\"use strict\";var r=n(27),o=n(18),i=n(28),u={};n(9)(u,n(11)(\"iterator\"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+\" Iterator\")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(10),o=n(14),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+\": can\'t set as prototype!\")};t.exports={set:Object.setPrototypeOf||(\"__proto__\"in{}?function(t,e,r){try{r=n(42)(Function.call,n(38).f(Object.prototype,\"__proto__\").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(31),o=n(23);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),f=a.length;return c<0||c>=f?t?\"\":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(31),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){\"use strict\";var r=n(69),o=n(75),i=n(25),u=n(8);t.exports=n(45)(Array,\"Array\",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):\"keys\"==e?o(0,n):\"values\"==e?o(0,t[n]):o(0,[n,t[n]])},\"values\"),i.Arguments=i.Array,r(\"keys\"),r(\"values\"),r(\"entries\")},function(t,e,n){var r=n(5);r(r.S,\"Object\",{create:n(27)})},function(t,e,n){var r=n(5);r(r.S+r.F*!n(4),\"Object\",{defineProperty:n(7).f})},function(t,e,n){var r=n(32),o=n(47);n(22)(\"getPrototypeOf\",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(5);r(r.S,\"Object\",{setPrototypeOf:n(76).set})},function(t,e){},function(t,e,n){\"use strict\";var r=n(77)(!0);n(45)(String,\"String\",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(34)(\"asyncIterator\")},function(t,e,n){n(34)(\"observable\")},function(t,e,n){n(80);for(var r=n(1),o=n(9),i=n(25),u=n(11)(\"toStringTag\"),a=\"CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList\".split(\",\"),c=0;c<a.length;c++){var f=a[c],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},,,function(t,e,n){\"use strict\";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,\"__esModule\",{value:!0});var o=n(2),i=r(o),u=n(3),a=r(u),c=function(){function t(e,n){(0,i.default)(this,t),this.x=e||0,this.y=n||0}return(0,a.default)(t,[{key:\"Pixel\",value:function(t){return t&&t.x==this.x&&t.y==this.y}}]),t}();e.default=c},,,,,,,,,,,,,function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.BoundaryOverlay=void 0;var r=n(20),o=n(40),i=n(56),u=n(113),a=function(t){return t&&t.__esModule?t:{default:t}}(u);e.BoundaryOverlay={calculatePixel:function(t){for(var e=t,n=(0,r.isArray)(e)?e:e.request.data,u=e.request.map,c=0;c<n.length;c++)if(n[c].geo){for(var f=[],s=0;s<n[c].geo.length;s++){var l=(0,o.pointToPixelWorker)(new i.Point(n[c].geo[s][0],n[c].geo[s][1]),u);f.push([l.x,l.y,parseFloat(n[c].geo[s][2])])}n[c].pgeo=f;var p=(0,a.default)([f]);null==p&&console.error(n[c].name+\"围栏数据有问题！\"),n[c].bestCell=p}return{data:n,client:t}}}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var r=e.CircuitOverlay={transferCoordinate:function(t,e,n){return t.map(function(t){return[(t[0]-e.x)/n,(e.y-t[1])/n]})},calculatePixel:function(t){for(var e=t,n=e.request.data.points,o=e.request.data.zoomUnit,i=e.request.data.nwMc,u=0;u<n.length;u++){var a=n[u];a.pixels=r.transferCoordinate(a._coordinates,i,o)}return{data:n,client:t}}}},function(t,e,n){\"use strict\";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,\"__esModule\",{value:!0}),e.GriddingOverlay=void 0;var o=n(40),i=n(92),u=r(i),a=n(56),c=r(a),f=e.GriddingOverlay={toRecGrids:function(t){var e=t,n=e.request.data.points,r=e.request.data.zoomUnit,o=e.request.data.size,i=e.request.data.mapSize,u=e.request.data.mapCenter,a=e.request.data.nwMc,c=e.request.map,s=e.request.data.zoom;return f._calculatePixel(c,n,i,u,s),{data:f.recGrids(n,c,a,o,r,i),client:t}},_calculatePixel:function(t,e,n,r,i){for(var a=Math.pow(2,18-i),f=o.geo.projection.lngLatToPoint(r),s=new u.default(f.x-n.width/2*a,f.y+n.height/2*a),l=0;l<e.length;l++){if(e[l].lng&&e[l].lat&&!e[l].x&&!e[l].y){var p=o.geo.projection.lngLatToPoint(new c.default(e[l].lng,e[l].lat),t);e[l].x=p.x,e[l].y=p.y}e[l].x&&e[l].y&&(e[l].px=(e[l].x-s.x)/a,e[l].py=(s.y-e[l].y)/a)}return e},recGrids:function(t,e,n,r,o,i){var u=0,a={},c=r/o,f=parseInt(n.x/r,10)*r,s=(f-n.x)/o,l=i.width,p=parseInt(n.y/r,10)*r+r,h=(n.y-p)/o,d=i.height;if(t.length>0){for(var v=t[0],y=v.px,g=v.py,x=v.px,b=v.py,m=0;m<t.length-1;m++){var _=t[m];y>_.px&&(y=_.px),g>_.py&&(g=_.py),x<_.px&&(x=_.px),b<_.py&&(b=_.py)}s=y-2,h=g-2,l=x+2,d=b+2}for(var O=[],w=0;s+w*c<l;){var M=s+w*c;O.push(M.toFixed(2)),w++}for(var P=[],S=0;h+S*c<d;){var j=h+S*c;P.push(j.toFixed(2)),S++}for(var L=0;L<O.length;L++)for(var T=0;T<P.length;T++){var k=O[L]+\"_\"+P[T];a[k]=[]}for(var E=0;E<t.length;E++)for(var R=t[E].px,C=t[E].py,A=t[E].count,N=0;N<O.length;N++){var F=Number(O[N]);if(R>=F&&R<F+c)for(var I=0;I<P.length;I++){var q=Number(P[I]);C>=q&&C<q+c&&a[O[N]+\"_\"+P[I]].push(A)}}for(var D in a){var G=a[D],B=0;if(G.length>0){for(var H=0;H<G.length;H++)B+=G[H];a[D]=B/G.length,a[D]>u&&(u=a[D])}else a[D]=0}return{grids:a,max:u,min:0}}}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.HeatTileOverlay=e.HeatOverlay=void 0;var r=n(40);e.HeatOverlay={pointsToPixels:function(t){return t.request.data.forEach(function(e){e.pixel=(0,r.pointToPixelWorker)(e,t.request.map)}),{data:t.request.data,client:t}}},e.HeatTileOverlay={pointsToPixels:function(t){return t.request.data.forEach(function(e){e.pixelData=(0,r.pointsToPixelsWoker)(e.data,t.request.map)}),{data:t.request.data,client:t}}}},function(t,e,n){\"use strict\";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,\"__esModule\",{value:!0}),e.HoneycombOverlay=void 0;var o=n(40),i=n(92),u=r(i),a=n(56),c=r(a),f=e.HoneycombOverlay={toRecGrids:function(t){var e=t,n=e.request.data.points,r=e.request.data.zoomUnit,o=e.request.data.size,i=e.request.data.mapSize,u=e.request.data.mapCenter,a=e.request.data.nwMc,c=e.request.map,s=e.request.data.zoom;return f._calculatePixel(c,n,i,u,s),{data:f.honeycombGrid(n,c,a,o,r,i),client:t}},_calculatePixel:function(t,e,n,r,i){for(var a=Math.pow(2,18-i),f=o.geo.projection.lngLatToPoint(r),s=new u.default(f.x-n.width/2*a,f.y+n.height/2*a),l=0;l<e.length;l++){if(e[l].lng&&e[l].lat&&!e[l].x&&!e[l].y){var p=o.geo.projection.lngLatToPoint(new c.default(e[l].lng,e[l].lat),t);e[l].x=p.x,e[l].y=p.y}e[l].x&&e[l].y&&(e[l].px=(e[l].x-s.x)/a,e[l].py=(s.y-e[l].y)/a)}return e},honeycombGrid:function(t,e,n,r,o,i){var u=0,a=0,c={},f=r/o,s=f,l=3*f/4,p=2*r*3/4,h=parseInt(n.y/p+1,10)*p,d=(n.y-h)/o;d=parseInt(d,10);var v=parseInt(n.x/r,10)*r,y=(v-n.x)/o;y=parseInt(y,10);var g=parseInt(i.width+s,10),x=parseInt(i.height+l,10);if(t.length>0){for(var b=t[0],m=b.px,_=b.py,O=b.px,w=b.py,M=0;M<t.length-1;M++){var P=t[M];m>P.px&&(m=P.px),_>P.py&&(_=P.py),O<P.px&&(O=P.px),w<P.py&&(w=P.py)}y=parseInt(m-11,10),d=parseInt(_-11,10),g=parseInt(O+11,10),x=parseInt(w+11,10)}for(var S=y,j=d,L=!1;j<x;){for(;S<g;){var T=L?S-s/2:S;T=parseInt(T,10),c[T+\"|\"+j]=c[T+\"|\"+j]||{x:T,y:j,len:0},S+=s}L=!L,S=y,j+=l}for(var k in t){var E=t[k].count,R=t[k].px,C=t[k].py,A=Math.round((C-d)/l),N=A*l+d,F=Math.round((R-y)/s),I=F*s+y;if(A%2&&(I-=s/2),!(I<y||I>g||N<d||N>x)&&c[I+\"|\"+N]){c[I+\"|\"+N].len+=E;var q=c[I+\"|\"+N].len;u=u||q,a=a||q,u=Math.max(u,q),a=Math.min(a,q)}}return{grids:c,max:u,min:a}}}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.LablEvading=void 0;var r=n(57);e.LablEvading={merge:function(t){var e=t.request.data,n=e.pixels,o=e.height,i=e.borderWidth,u=e.byteWidth,a=n.map(function(t){var e=t.pixel.radius+i;return new r.Label(t.pixel.x,t.pixel.y,e,o,u,t.name)});a.sort(function(t,e){return e.x-t.x});do{for(var c=!1,f=0;f<a.length;f++)for(var s=a[f],l=0;l<a.length;l++)if(f!=l&&s.show&&s.isAnchorMeet(a[l])){s.next(),c=!0;break}}while(c);var p=[];return a.forEach(function(t){if(t.show){var e=t.getCurrentRect();p.push({text:t.text,x:e.x,y:e.y})}}),{data:p,client:t}}}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.PolymeOverlay=void 0;var r=n(40),o=e.PolymeOverlay={mergeCount:0,isMeet:function(t,e){var n=t.x-e.x,r=t.y-e.y;return!(n*n+r*r>(t.radius+e.radius)*(t.radius+e.radius))},getDots:function(t,e,n){var r=t.pixel,i=e.pixel,u=t.merges,a=e.merges;return{merges:(u||[t]).concat(a||[e]),pixel:{radius:r.radius+i.radius-n+o.mergeCount,x:Math.ceil((r.x+i.x)/2),y:Math.ceil((r.y+i.y)/2)}}},merge:function(t,e){do{for(var n=[],r=!1,i=0;i<t.length;i++){for(var u=t[i],a=0;a<t.length;a++)i!=a&&o.isMeet(u.pixel,t[a].pixel)&&(u=o.getDots(u,t[a],e),t.splice(i,1),t.splice(a-1,1),r=!0);n.push(u)}t.length>0&&n.push(t[0]),t=n}while(r);return n},mergePoint:function(t){o.mergeCount=t.request.data.mergeCount;var e=t.request.data.points,n=t.request.data.size;return e.forEach(function(e){var o=(0,r.pointToPixelWorker)(e,t.request.map);e.pixel={x:o.x,y:o.y,radius:n}}),{data:o.merge(e,n),client:t}}}},,function(t,e,n){\"use strict\";function r(t,e,n,r){this.x=t,this.y=e,this.h=n,this.d=f(t,e),this.max=this.d+this.h*Math.SQRT2}function o(t,e){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r}function i(t,e){return t.x-=e.x,t.y-=e.y,t}function u(t,e){return t.x*=e,t.y*=e,t}function a(t,e){return t.x+=e.x,t.y+=e.y,t}function c(t,e,n){var r=o(n,e);if(0===r)return o(e,t);var c=((t.x-e.x)*(n.x-e.x)+(t.y-e.y)*(n.y-e.y))/r;return c<0?o(e,t):c>1?o(n,t):o(a(u(i(n,e),c),e),t)}function f(t,e){for(var n=!1,r=1/0,o=0;o<e.length;o++)for(var i=e[o],u=0,a=i.length,f=a-1;u<a;f=u++){var s=i[u],l=i[f];s.y>t.y!=l.y>t.y&&t.x<(l.x-s.x)*(t.y-s.y)/(l.y-s.y)+s.x&&(n=!n),r=Math.min(r,c(t,s,l))}return(n?1:-1)*Math.sqrt(r)}function s(t){for(var e=0,n=0,o=0,i=t[0],u=0;u<i.length-1;++u){var a=i[u+1],c=i[u],f=.5*(a[0]*c[1]-c[0]*a[1]),s=(a[0]+c[0])/3,l=(a[1]+c[1])/3;e+=f,n+=f*s,o+=f*l}return new r(n/e,o/e)}function l(t){for(var e,n,o,i,u=0;u<t[0].length;u++){var a=t[0][u];(!u||a[0]<e)&&(e=a[0]),(!u||a[1]<n)&&(n=a[1]),(!u||a[0]>o)&&(o=a[0]),(!u||a[1]>i)&&(i=a[1])}if(e==o||n==i)return null;for(var c=o-e,f=i-n,l=Math.min(c,f),p=l/2,d=new h.default(null,function(t,e){return e.max-t.max}),v=e;v<o;v+=l)for(var y=n;y<i;y+=l)d.push(new r(v+p,y+p,p,t));for(var g=s(t);d.length;){var x=d.pop();x.d>g.d&&(g=x),x.max<=g.d||(p=x.h/2,d.push(new r(x.x-p,x.y-p,p,t)),d.push(new r(x.x+p,x.y-p,p,t)),d.push(new r(x.x-p,x.y+p,p,t)),d.push(new r(x.x+p,x.y+p,p,t)))}return g}Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=l;var p=n(114),h=function(t){return t&&t.__esModule?t:{default:t}}(p)},function(t,e,n){\"use strict\";function r(t,e){if(!(this instanceof r))return new r(t,e);if(this.data=t||[],this.length=this.data.length,this.compare=e||o,this.length>0)for(var n=this.length>>1;n>=0;n--)this._down(n)}function o(t,e){return t<e?-1:t>e?1:0}Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=r,r.prototype={push:function(t){this.data.push(t),this.length++,this._up(this.length-1)},pop:function(){if(0!==this.length){var t=this.data[0];return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this._down(0)),this.data.pop(),t}},peek:function(){return this.data[0]},_up:function(t){for(var e=this.data,n=this.compare,r=e[t];t>0;){var o=t-1>>1,i=e[o];if(n(r,i)>=0)break;e[t]=i,t=o}e[t]=r},_down:function(t){for(var e=this.data,n=this.compare,r=this.length>>1,o=e[t];t<r;){var i=1+(t<<1),u=i+1,a=e[i];if(u<this.length&&n(e[u],a)<0&&(i=u,a=e[u]),n(a,o)>=0)break;e[t]=a,t=i}e[t]=o}}},,,,,,,,,function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.boundaryOverlay=e.TDpost=void 0;var r=n(108),o=n(107),i=n(105),u=n(106),a=n(109),c=n(111),f=n(110),s={HeatOverlay:r.HeatOverlay,HeatTileOverlay:r.HeatTileOverlay,GriddingOverlay:o.GriddingOverlay,BoundaryOverlay:i.BoundaryOverlay,CircuitOverlay:u.CircuitOverlay,HoneycombOverlay:a.HoneycombOverlay,PolymeOverlay:c.PolymeOverlay,LablEvading:f.LablEvading};onmessage=function(t){var e=t.data;p(e)};var l={},p=function(t){for(var e=t.request,n=e.classPath,r=e.hashCode,o=e.msgId,i=n.split(\".\"),u=0,a=s;i[u];){if(a=a[i[u]],++u>=i.length){l[n]=r+\"_\"+o;var c=a(t);return void h(c.data,c.client)}if(!a)return void console.error(i[u-1]+\"worker \"+n+\" is not a function\")}},h=e.TDpost=function(t,e){var n=e,r=e.request,o=r.classPath,i=r.hashCode,u=r.msgId,a=s[o];a&&a!=i+\"_\"+u||(n.response={type:\"worker\",data:t},postMessage(n))};e.boundaryOverlay=i.BoundaryOverlay},function(t,e,n){t.exports={default:n(132),__esModule:!0}},function(t,e,n){t.exports={default:n(133),__esModule:!0}},function(t,e,n){t.exports={default:n(134),__esModule:!0}},function(t,e,n){t.exports={default:n(135),__esModule:!0}},function(t,e,n){t.exports={default:n(136),__esModule:!0}},function(t,e,n){t.exports={default:n(137),__esModule:!0}},function(t,e,n){t.exports={default:n(138),__esModule:!0}},,function(t,e,n){n(141);var r=n(0).Object;t.exports=function(t,e){return r.defineProperties(t,e)}},function(t,e,n){n(142);var r=n(0).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},function(t,e,n){n(143);var r=n(0).Object;t.exports=function(t){return r.getOwnPropertyNames(t)}},function(t,e,n){n(55),t.exports=n(0).Object.getOwnPropertySymbols},function(t,e,n){n(144),t.exports=n(0).Object.isExtensible},function(t,e,n){n(145),t.exports=n(0).Object.keys},function(t,e,n){n(146),t.exports=n(0).Object.preventExtensions},,,function(t,e,n){var r=n(5);r(r.S+r.F*!n(4),\"Object\",{defineProperties:n(53)})},function(t,e,n){var r=n(8),o=n(38).f;n(22)(\"getOwnPropertyDescriptor\",function(){return function(t,e){return o(r(t),e)}})},function(t,e,n){n(22)(\"getOwnPropertyNames\",function(){return n(54).f})},function(t,e,n){var r=n(10);n(22)(\"isExtensible\",function(t){return function(e){return!!r(e)&&(!t||t(e))}})},function(t,e,n){var r=n(32),o=n(17);n(22)(\"keys\",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(10),o=n(52).onFreeze;n(22)(\"preventExtensions\",function(t){return function(e){return t&&r(e)?t(o(e)):e}})},,,,,function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,\"loaded\",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,\"id\",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}])});"
        }
        return (0, s.default)(t, [{
          key: "create",
          value: function (t) {
            var e = void 0;
            e = 21 == this.workerContent.length ? t.indexOf("http") > -1 ? URL.createObjectURL(new Blob(["importScripts('" + t + "');"])) : t : URL.createObjectURL(new Blob([this.workerContent], {
              type: "application/javascript"
            })), this.worker = new Worker(e), this.worker.addEventListener("message", this.message), this.worker.onerror = function (t) {
              console.error("worker.onerror", t)
            }
          }
        }, {
          key: "message",
          value: function (t) {
            var e = t.data,
              n = e.request.hashCode,
              i = e.request.msgId,
              r = e.request.classPath;
            l[r + "_" + n] && l[r + "_" + n] == n + "_" + i ? l[n + "_" + i](e.response.data) : l[n + "_" + i] = null
          }
        }, {
          key: "postMessage",
          value: function (t, e) {
            null == this.worker && this.create("../dist/worker.js");
            var n = t.request.hashCode,
              i = t.request.msgId,
              r = t.request.classPath;
            l[n + "_" + i] = e, l[r + "_" + n] = n + "_" + i, this.worker.postMessage(t)
          }
        }]), t
      }();
    e.workerMrg = new u
  }, , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {
      tooltip: {
        show: !0,
        position: "top",
        formatter: "{count}",
        offsets: {
          top: 0,
          left: 0
        }
      },
      legend: {
        show: !0,
        title: "图例"
      },
      style: {
        colors: ["rgba(31,98,1,1)", "rgba(95,154,4,1)", "rgba(139,227,7,1)", "rgba(218,134,9,1)", "rgba(220,54,6,1)", "rgba(218,2,8,1)", "rgba(148,1,2,1)", "rgba(92,1,0,1)"],
        normal: {
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          padding: 1,
          size: 50,
          label: {
            show: !1,
            font: "12px sans-serif",
            shadowBlur: 0,
            lineWidth: 1,
            color: "rgba(75,80,86,1)"
          }
        },
        mouseOver: {
          backgroundColor: "rgba(200, 200, 200, 1)",
          scale: 1
        },
        selected: {
          backgroundColor: "rgba(184,0,0,1)",
          borderColor: "rgba(255,255,255,1)"
        }
      },
      data: []
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    e.WhiteLover = [{
      featureType: "water",
      elementType: "all",
      stylers: {
        color: "#dbe0e7"
      }
    }, {
      featureType: "land",
      elementType: "all",
      stylers: {
        color: "#f1f3f5"
      }
    }, {
      featureType: "green",
      elementType: "all",
      stylers: {
        color: "#e9ecf2"
      }
    }, {
      featureType: "manmade",
      elementType: "all",
      stylers: {
        color: "#dde1e8"
      }
    }, {
      featureType: "building",
      elementType: "all",
      stylers: {
        color: "#dde1e8"
      }
    }, {
      featureType: "boundary",
      elementType: "geometry",
      stylers: {
        color: "#d7dadf"
      }
    }, {
      featureType: "railway",
      elementType: "geometry",
      stylers: {
        hue: "#3d85c6",
        lightness: 63,
        saturation: 21,
        visibility: "on"
      }
    }, {
      featureType: "local",
      elementType: "all",
      stylers: {
        color: "#e7ebf2",
        visibility: "off"
      }
    }, {
      featureType: "local",
      elementType: "geometry.stroke",
      stylers: {
        color: "#b5bfc7",
        visibility: "off"
      }
    }, {
      featureType: "subway",
      elementType: "all",
      stylers: {
        color: "#73b1df"
      }
    }, {
      featureType: "poi",
      elementType: "all",
      stylers: {
        color: "#b5bfc7",
        visibility: "off"
      }
    }, {
      featureType: "subway",
      elementType: "all",
      stylers: {
        color: "#d9e3ea",
        visibility: "off"
      }
    }, {
      featureType: "highway",
      elementType: "labels",
      stylers: {
        color: "#c6d4df",
        visibility: "off"
      }
    }, {
      featureType: "highway",
      elementType: "geometry.stroke",
      stylers: {
        color: "#c1c9d5"
      }
    }, {
      featureType: "highway",
      elementType: "geometry.fill",
      stylers: {
        color: "#d3d8e1",
        visibility: "on"
      }
    }, {
      featureType: "arterial",
      elementType: "labels",
      stylers: {
        visibility: "on"
      }
    }, {
      featureType: "administrative",
      elementType: "labels",
      stylers: {
        visibility: "off"
      }
    }, {
      featureType: "background",
      elementType: "labels",
      stylers: {
        visibility: "off"
      }
    }, {
      featureType: "arterial",
      elementType: "geometry.fill",
      stylers: {
        color: "#e9ecf2"
      }
    }, {
      featureType: "arterial",
      elementType: "geometry.stroke",
      stylers: {
        color: "#d9dce3"
      }
    }, {
      featureType: "arterial",
      elementType: "labels.text.fill",
      stylers: {
        visibility: "off"
      }
    }], e.Blueness = [{
      featureType: "water",
      elementType: "all",
      stylers: {
        color: "#566382"
      }
    }, {
      featureType: "land",
      elementType: "all",
      stylers: {
        color: "#172137"
      }
    }, {
      featureType: "green",
      elementType: "all",
      stylers: {
        color: "#282f57"
      }
    }, {
      featureType: "manmade",
      elementType: "all",
      stylers: {
        color: "#3f4b8c"
      }
    }, {
      featureType: "building",
      elementType: "all",
      stylers: {
        color: "#3f4b8c"
      }
    }, {
      featureType: "boundary",
      elementType: "geometry",
      stylers: {
        color: "#4f6b9e"
      }
    }, {
      featureType: "railway",
      elementType: "geometry",
      stylers: {
        color: "#4f6b9e"
      }
    }, {
      featureType: "highway",
      elementType: "geometry.stroke",
      stylers: {
        color: "#202749",
        visibility: "off"
      }
    }, {
      featureType: "arterial",
      elementType: "geometry.fill",
      stylers: {
        color: "#4f6b9e",
        visibility: "off"
      }
    }, {
      featureType: "local",
      elementType: "geometry.fill",
      stylers: {
        color: "#303a6d"
      }
    }, {
      featureType: "local",
      elementType: "geometry.stroke",
      stylers: {
        color: "#2d3667",
        visibility: "off"
      }
    }, {
      featureType: "subway",
      elementType: "all",
      stylers: {
        color: "#445195",
        visibility: "off"
      }
    }, {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: {
        color: "#141831"
      }
    }, {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: {
        color: "#5564b2"
      }
    }, {
      featureType: "poi",
      elementType: "all",
      stylers: {
        color: "#141831",
        visibility: "off"
      }
    }, {
      featureType: "subway",
      elementType: "all",
      stylers: {
        visibility: "off"
      }
    }, {
      featureType: "arterial",
      elementType: "geometry.stroke",
      stylers: {
        color: "#181e3e"
      }
    }, {
      featureType: "highway",
      elementType: "geometry",
      stylers: {
        color: "#324160",
        weight: "0.9"
      }
    }, {
      featureType: "highway",
      elementType: "labels",
      stylers: {
        color: "#172137",
        visibility: "off"
      }
    }, {
      featureType: "label",
      elementType: "labels",
      stylers: {
        visibility: "off"
      }
    }, {
      featureType: "administrative",
      elementType: "geometry",
      stylers: {}
    }]
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.CanvasOverlay = void 0;
    var r = n(13),
      o = i(r),
      a = n(2),
      s = i(a),
      l = n(3),
      u = i(l),
      c = n(16),
      h = i(c),
      f = n(15),
      d = i(f),
      p = n(122),
      y = i(p),
      v = n(20),
      m = 1;
    e.CanvasOverlay = function (t) {
      function e() {
        (0, s.default)(this, e);
        var t = (0, h.default)(this, (e.__proto__ || (0, o.default)(e)).call(this));
        return t.ctx = null, t.eventType = "moveend", t.map = null, t.tOnResize = t.tOnResize.bind(t), t.tOnMoveend = t.tOnMoveend.bind(t), t.tOnZoomstart = t.tOnZoomstart.bind(t), t.tOnZoomend = t.tOnZoomend.bind(t), t.tOnMoving = t.tOnMoving.bind(t), t.tMousemove = t.tMousemove.bind(t), t.tMouseleave = t.tMouseleave.bind(t), t.tMouseClick = t.tMouseClick.bind(t), t.devicePixelRatio = window.devicePixelRatio, t.first = !0, t
      }
      return (0, d.default)(e, t), (0, u.default)(e, [{
        key: "initialize",
        value: function (t) {
          var e = this;
          return this.map = t, this.container = document.createElement("canvas"), this.ctx = this.container.getContext("2d"), this.container.style.cssText = "position:absolute;left:0;top:0;z-index:" + m++ + ";", t.getPanes().mapPane.appendChild(this.container), this.setCanvasSize(), t.addEventListener("resize", e.tOnResize), t.addEventListener("moveend", e.tOnMoveend), t.addEventListener("zoomstart", e.tOnZoomstart), t.addEventListener("zoomend", e.tOnZoomend), t.addEventListener("moving", e.tOnMoving), t.addEventListener("mousemove", e.tMousemove), this.container.addEventListener("mouseleave", e.tMouseleave), t.addEventListener("click", e.tMouseClick), this.container
        }
      }, {
        key: "tOnResize",
        value: function (t) {
          this.setCanvasSize(), this.tDraw(this, t)
        }
      }, {
        key: "tOnMoveend",
        value: function (t) {
          this.eventType = t.type, this.tDraw(this, t)
        }
      }, {
        key: "tOnZoomstart",
        value: function () {
          this.clearCanvas()
        }
      }, {
        key: "tOnZoomend",
        value: function (t) {
          this.eventType = t.type, this.tDraw(this, t)
        }
      }, {
        key: "tOnMoving",
        value: function (t) {
          this.eventType = t.type
        }
      }, {
        key: "tMouseleave",
        value: function () {}
      }, {
        key: "tMousemove",
        value: function () {}
      }, {
        key: "TInit",
        value: function () {}
      }, {
        key: "draw",
        value: function () {
          this.first && (this.first = !1, this.resize(), this.TInit())
        }
      }, {
        key: "tMouseClick",
        value: function () {}
      }, {
        key: "tDraw",
        value: function (t, e) {
          this.eventType = e.type, t.resize(), t.keysss = !0
        }
      }, {
        key: "resize",
        value: function () {}
      }, {
        key: "canvasResize",
        value: function () {
          var t = this.map,
            e = this.container,
            n = t.getCenter(),
            i = t.getSize(),
            r = t.pointToOverlayPixel(n);
          e.style.left = r.x - i.width / 2 + "px", e.style.top = r.y - i.height / 2 + "px"
        }
      }, {
        key: "clearCanvas",
        value: function () {
          var t = this.map.getSize();
          this.getContext().clearRect(0, 0, t.width, t.height)
        }
      }, {
        key: "setCanvasSize",
        value: function () {
          var t = this.map.getSize();
          this.container.width = t.width, this.container.height = t.height, (0, v.setDevicePixelRatio)(this.ctx)
        }
      }, {
        key: "getContext",
        value: function () {
          return this.ctx
        }
      }, {
        key: "setZIndex",
        value: function (t) {
          this.container.style.zIndex = t
        }
      }, {
        key: "Tclear",
        value: function () {}
      }, {
        key: "dispose",
        value: function () {
          this.map.removeEventListener("resize", this.tOnResize), this.map.removeEventListener("moveend", this.tOnMoveend), this.map.removeEventListener("zoomstart", this.tOnZoomstart), this.map.removeEventListener("zoomend", this.tOnZoomend), this.map.removeEventListener("moving", this.tOnMoving), this.map.removeEventListener("mousemove", this.tMousemove), this.container.removeEventListener("mouseleave", this.tMouseleave), this.map.removeEventListener("click", this.tMouseClick), this.Tclear(), this.map.removeOverlay(this)
        }
      }]), e
    }(y.default)
  }, function (t, e, n) {
    t.exports = {
      default: n(131),
      __esModule: !0
    }
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Map = void 0;
    var r = n(96),
      o = i(r),
      a = n(2),
      s = i(a),
      l = n(3),
      u = i(l),
      c = n(20),
      h = n(94),
      f = n(121),
      d = n(118),
      p = i(d);
    n(150);
    var y = n(90),
      v = i(y);
    e.Map = function () {
      function t(e) {
        (0, s.default)(this, t), this.map = null, this.option = v.default.all([p.default, e]), this.create()
      }
      return (0, u.default)(t, [{
        key: "create",
        value: function () {
          var t = this.option.id,
            e = (0, c.isString)(t) ? document.getElementById(t) : t,
            n = new BMap.Map(e, {
              enableMapClick: !1
            });
          if (n.enableScrollWheelZoom(), n.disableDoubleClickZoom(), n.enableKeyboard(), this.option.skin) {
            var i = "Blueness" == this.option.skin ? h.Blueness : h.WhiteLover;
            n.setMapStyle({
              styleJson: i
            })
          }
          var r = this.crtateContainer(e),
            a = {};
          (0, o.default)(a, this.option, {
            mapDom: e,
            toolDom: r
          }), n._inmapOption = a;
          var s = this.option.center;
          n.centerAndZoom(new BMap.Point(s[0], s[1]), this.option.zoom.value), n.setMinZoom(this.option.zoom.min), n.setMaxZoom(this.option.zoom.max), this.option.zoom.show && new f.MapZoom(n), this.map = n
        }
      }, {
        key: "getMap",
        value: function () {
          return this.map
        }
      }, {
        key: "crtateContainer",
        value: function (t) {
          var e = t,
            n = document.createElement("div");
          return n.classList.add("td-map-container"), e.appendChild(n), n
        }
      }, {
        key: "add",
        value: function (t) {
          this.map.addOverlay(t)
        }
      }, {
        key: "remove",
        value: function (t) {
          t.dispose()
        }
      }]), t
    }()
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.BoundaryOverlay = void 0;
    var r = n(13),
      o = i(r),
      a = n(2),
      s = i(a),
      l = n(3),
      u = i(l),
      c = n(16),
      h = i(c),
      f = n(15),
      d = i(f),
      p = n(36);
    e.BoundaryOverlay = function (t) {
      function e(t) {
        return (0, s.default)(this, e), (0, h.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, t))
      }
      return (0, d.default)(e, t), (0, u.default)(e, [{
        key: "resize",
        value: function () {
          this.drawMap()
        }
      }, {
        key: "getGeoCenter",
        value: function (t) {
          for (var e = t[0][0], n = t[0][1], i = t[0][0], r = t[0][1], o = 1; o < t.length; o++) e = Math.min(e, t[o][0]), i = Math.max(i, t[o][0]), n = Math.min(n, t[o][1]), r = Math.max(r, t[o][1]);
          return [e + (i - e) / 2, n + (r - n) / 2]
        }
      }, {
        key: "setMapCenter",
        value: function (t, e) {
          var n = this;
          this.parserExp(e), n.workerData.length > 0 && (n.selectItem = n.workerData.filter(n.filterFun), n._dataRender())
        }
      }, {
        key: "setMapCenterAndZoom",
        value: function (t, e) {
          function n() {
            a.map.removeEventListener("zoomend", n), a.map.panTo(o.center)
          }

          function i() {
            a.map.removeEventListener("moveend", i), a.parserExp(e), a.workerData.length > 0 && (a.selectItem = a.workerData.filter(a.filterFun), a._dataRender())
          }
          var r = [];
          t.forEach(function (t) {
            r.push(new BMap.Point(t[0], t[1]))
          });
          var o = this.map.getViewport(r),
            a = this,
            s = o.zoom - 1;
          this.map.addEventListener("zoomend", n), this.map.addEventListener("moveend", i), this.map.getZoom() == s ? n() : this.map.setZoom(s)
        }
      }, {
        key: "setCenterAndZoom",
        value: function (t, e, n) {
          n ? this.setMapCenterAndZoom(t, e) : this.setMapCenter(t, e)
        }
      }, {
        key: "getMaxWidth",
        value: function (t) {
          for (var e = t[0][0], n = t[0][1], i = t[0][0], r = t[0][1], o = 1; o < t.length; o++) e = Math.min(e, t[o][0]), i = Math.max(i, t[o][0]), n = Math.min(n, t[o][1]), r = Math.max(r, t[o][1]);
          return i - e
        }
      }, {
        key: "findIndexSelectItem",
        value: function (t) {
          var e = -1;
          return t && (e = this.selectItem.findIndex(function (e) {
            return e && e.name == t.name
          })), e
        }
      }, {
        key: "_dataRender",
        value: function () {
          this.clearCanvas(), this.drawLine(this.workerData)
        }
      }, {
        key: "drawMap",
        value: function () {
          var t = this;
          this.postMessage("BoundaryOverlay.calculatePixel", this.points, function (e) {
            "onmoving" != t.eventType && (t.clearCanvas(), t.canvasResize(), t.overItem = null, t.setWorkerData(e), t.drawLine(e))
          })
        }
      }, {
        key: "setPoints",
        value: function (t) {
          t && (this.cancerSelectd(), this.points = t, this.style.colors.length > 0 && this.compileSplitList(this.points), this.drawMap())
        }
      }, {
        key: "getTarget",
        value: function (t, e) {
          var n = this.workerData;
          this.ctx.beginPath();
          for (var i = 0, r = n.length; i < r; i++) {
            var o = n[i],
              a = o.pgeo;
            this.ctx.beginPath(), this.ctx.moveTo(a[0][0], a[0][1]);
            for (var s = 1; s < a.length; s++) this.ctx.lineTo(a[s][0], a[s][1]);
            if (this.ctx.closePath(), this.ctx.isPointInPath(t * this.devicePixelRatio, e * this.devicePixelRatio)) return {
              index: i,
              item: o
            }
          }
          return {
            index: -1,
            item: null
          }
        }
      }, {
        key: "drawLine",
        value: function (t) {
          this.ctx.lineCap = "round", this.ctx.lineJoin = "round", this.ctx.miterLimit = 4;
          for (var e = 0, n = t.length; e < n; e++) {
            var i = t[e],
              r = i.pgeo;
            this.ctx.beginPath(), this.ctx.moveTo(r[0][0], r[0][1]);
            for (var o = 1; o < r.length; o++) this.ctx.lineTo(r[o][0], r[o][1]);
            this.ctx.closePath();
            var a = this.setDrawStyle(i);
            this.ctx.shadowColor = a.shadowColor || "transparent", this.ctx.shadowBlur = a.shadowBlur || 10, this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.fillStyle = a.backgroundColor, this.ctx.fill(), this.ctx.strokeStyle = a.borderColor, this.ctx.lineWidth = a.borderWidth, this.ctx.stroke()
          }
          for (var s = 0, l = t.length; s < l; s++) {
            var u = t[s],
              c = u.pgeo,
              h = u.bestCell,
              f = this.setDrawStyle(u).label;
            if (h && f.show) {
              this.ctx.shadowBlur = 0, this.ctx.lineWidth = f.lineWidth, this.ctx.font = f.font, this.ctx.fillStyle = f.color;
              var d = this.ctx.measureText(u.name).width;
              this.getMaxWidth(c) > d && this.ctx.fillText(u.name, h.x - d / 2, h.y)
            }
          }
          this.ctx.closePath()
        }
      }]), e
    }(p.Parameter)
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.CircuitOverlay = void 0;
    var r = n(13),
      o = i(r),
      a = n(2),
      s = i(a),
      l = n(3),
      u = i(l),
      c = n(16),
      h = i(c),
      f = n(15),
      d = i(f),
      p = n(90),
      y = i(p),
      v = n(95),
      m = n(115),
      g = i(m);
    e.CircuitOverlay = function (t) {
      function e(t) {
        (0, s.default)(this, e);
        var n = (0, h.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, t));
        return n.points = [], n.style = {}, n._setOptionStyle(g.default, t), n._isCoordinates = !1, n
      }
      return (0, d.default)(e, t), (0, u.default)(e, [{
        key: "_setOptionStyle",
        value: function (t, e) {
          var n = y.default.all([t, e], {
            arrayMerge: function (t, e) {
              return e.length > 0 ? e : t
            }
          });
          this.points = n.data, this.style = n.style
        }
      }, {
        key: "resize",
        value: function () {
          this.drawMap()
        }
      }, {
        key: "setPoints",
        value: function (t) {
          t && (this.points = t, this.coordinates(this.points), this.drawMap())
        }
      }, {
        key: "drawMap",
        value: function () {
          var t = this,
            e = Math.pow(2, 18 - this.map.getZoom()),
            n = this.map.getMapType().getProjection(),
            i = n.lngLatToPoint(this.map.getCenter()),
            r = new BMap.Pixel(i.x - this.map.getSize().width / 2 * e, i.y + this.map.getSize().height / 2 * e),
            o = {
              points: t.points,
              nwMc: r,
              zoomUnit: e
            };
          this._isCoordinates || this.coordinates(this.points), this.postMessage("CircuitOverlay.calculatePixel", o, function (e) {
            "onmoving" != t.eventType && (t.clearCanvas(), t.canvasResize(), t.drawLine(e))
          })
        }
      }, {
        key: "coordinates",
        value: function (t) {
          this._isCoordinates = !0;
          for (var e = this.map.getMapType().getProjection(), n = 0; n < t.length; n++) {
            var i = t[n];
            i._coordinates = i.geo.map(function (t) {
              var n = e.lngLatToPoint({
                lng: t[0],
                lat: t[1]
              });
              return [n.x, n.y]
            })
          }
        }
      }, {
        key: "transferCoordinate",
        value: function (t, e, n) {
          return t.map(function (t) {
            return [(t[0] - e.x) / n, (e.y - t[1]) / n]
          })
        }
      }, {
        key: "lngLatToPoints",
        value: function (t, e, n) {
          return t.length > 0 ? this.transferCoordinate(t, e, n) : []
        }
      }, {
        key: "drawLine",
        value: function (t) {
          var e = this.style.normal;
          this.ctx.shadowBlur = 0, this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.lineCap = "butt", this.ctx.lineJoin = "miter", this.ctx.globalCompositeOperation = "lighter", this.ctx.miterLimit = 10, this.ctx.strokeStyle = e.borderColor, this.ctx.lineWidth = e.borderWidth, this.ctx.beginPath();
          for (var n = 0; n < t.length; n++) {
            var i = t[n],
              r = i.pixels;
            this.ctx.moveTo(r[0][0], r[0][1]);
            for (var o = 1; o < r.length; o++) this.ctx.lineTo(r[o][0], r[o][1]);
            this.ctx.stroke()
          }
        }
      }]), e
    }(v.CanvasOverlay)
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.DotOverlay = void 0;
    var r = n(13),
      o = i(r),
      a = n(2),
      s = i(a),
      l = n(3),
      u = i(l),
      c = n(16),
      h = i(c),
      f = n(15),
      d = i(f),
      p = n(57),
      y = n(36);
    e.DotOverlay = function (t) {
      function e(t) {
        (0, s.default)(this, e);
        var n = (0, h.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, t));
        return n.polyme = "polyme" == t.type, n
      }
      return (0, d.default)(e, t), (0, u.default)(e, [{
        key: "resize",
        value: function () {
          this.drawMap()
        }
      }, {
        key: "drawMap",
        value: function () {
          var t = this,
            e = t.polyme ? "PolymeOverlay.mergePoint" : "HeatOverlay.pointsToPixels",
            n = t.polyme ? {
              points: this.points,
              mergeCount: this.style.normal.mergeCount,
              size: this.style.normal.size
            } : this.points;
          this.postMessage(e, n, function (e) {
            "onmoving" != t.eventType && (t.setWorkerData(e), t._dataRender())
          })
        }
      }, {
        key: "setPoints",
        value: function (t) {
          t && (this.cancerSelectd(), this.points = t, this.style.colors.length > 0 && this.compileSplitList(this.points), this.drawMap())
        }
      }, {
        key: "getTarget",
        value: function (t, e) {
          for (var n = this.workerData, i = this.ctx, r = 0, o = n.length; r < o; r++) {
            var a = n[r],
              s = a.pixel,
              l = this.setDrawStyle(a);
            if (i.beginPath(), i.arc(s.x, s.y, l.size, 0, 2 * Math.PI, !0), i.lineWidth = l.lineWidth, i.isPointInPath(t * this.devicePixelRatio, e * this.devicePixelRatio)) return {
              index: r,
              item: a
            }
          }
          return {
            index: -1,
            item: null
          }
        }
      }, {
        key: "findIndexSelectItem",
        value: function (t) {
          var e = -1;
          return t && (e = this.selectItem.findIndex(function (e) {
            return e && e.lat == t.lat && e.lng == t.lng
          })), e
        }
      }, {
        key: "_dataRender",
        value: function () {
          this.clearCanvas(), this.canvasResize(), this._loopDraw(this.ctx, this.workerData), this.style.normal.label.show && this._drawLabel(this.ctx, this.workerData)
        }
      }, {
        key: "swopeData",
        value: function (t, e) {
          t > -1 && !this.style.normal.label.show && (this.workerData[t] = this.workerData[this.workerData.length - 1], this.workerData[this.workerData.length - 1] = e)
        }
      }, {
        key: "_loopDraw",
        value: function (t, e) {
          for (var n = 0, i = e.length; n < i; n++) {
            var r = e[n],
              o = r.pixel,
              a = this.polyme ? this.style.normal : this.setDrawStyle(r);
            a.shadowBlur && (t.shadowBlur = a.shadowBlur), a.shadowColor && (t.shadowColor = a.shadowColor), a.globalCompositeOperation && (t.globalCompositeOperation = a.globalCompositeOperation);
            var s = this.polyme ? o.radius : a.size;
            o.radius = s, this._drawCircle(t, o.x, o.y, s, a.backgroundColor, a.borderWidth, a.borderColor)
          }
        }
      }, {
        key: "_drawLabel",
        value: function (t, e) {
          var n = this,
            i = this.style.normal.label,
            r = parseInt(i.font);
          t.font = i.font, t.textBaseline = "top", t.fillStyle = i.color;
          var o = t.measureText("a").width,
            a = e.map(function (t) {
              var e = t.pixel.radius + n.style.normal.borderWidth;
              return new p.Label(t.pixel.x, t.pixel.y, e, r, o, t.name)
            });
          a.sort(function (t, e) {
            return e.x - t.x
          });
          do {
            for (var s = !1, l = 0; l < a.length; l++)
              for (var u = a[l], c = 0; c < a.length; c++)
                if (l != c && u.show && u.isAnchorMeet(a[c])) {
                  u.next(), s = !0;
                  break
                }
          } while (s);
          a.forEach(function (e) {
            if (e.show) {
              var n = e.getCurrentRect();
              t.beginPath(), t.fillText(e.text, n.x, n.y), t.fill()
            }
          })
        }
      }, {
        key: "_drawCircle",
        value: function (t, e, n, i, r, o, a) {
          t.beginPath(), t.fillStyle = r, t.arc(e, n, i, 0, 2 * Math.PI, !0), t.fill(), o && (t.lineWidth = o, a && (t.strokeStyle = a), t.stroke())
        }
      }]), e
    }(y.Parameter)
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.GriddingOverlay = void 0;
    var r = n(13),
      o = i(r),
      a = n(2),
      s = i(a),
      l = n(3),
      u = i(l),
      c = n(16),
      h = i(c),
      f = n(15),
      d = i(f),
      p = n(36),
      y = n(93),
      v = i(y);
    e.GriddingOverlay = function (t) {
      function e(t) {
        (0, s.default)(this, e);
        var n = (0, h.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, t));
        return n.delteOption(), n._setOptionStyle(v.default, t), n
      }
      return (0, d.default)(e, t), (0, u.default)(e, [{
        key: "delteOption",
        value: function () {
          this.style.selected = null
        }
      }, {
        key: "resize",
        value: function () {
          this.drawMap()
        }
      }, {
        key: "drawMap",
        value: function () {
          var t = this,
            e = this.style.normal,
            n = t.map.getZoom(),
            i = Math.pow(2, 18 - n),
            r = t.map.getMapType().getProjection(),
            o = r.lngLatToPoint(t.map.getCenter()),
            a = e.size * i,
            s = o.x - t.map.getSize().width / 2 * i,
            l = new BMap.Pixel(s, o.y + t.map.getSize().height / 2 * i),
            u = {
              points: t.points,
              size: a,
              nwMc: l,
              zoomUnit: i,
              mapSize: t.map.getSize(),
              mapCenter: t.map.getCenter(),
              zoom: n
            };
          this.postMessage("GriddingOverlay.toRecGrids", u, function (e) {
            if ("onmoving" != t.eventType) {
              var n = e.grids,
                r = e.max,
                o = e.min;
              t.clearCanvas(), t.canvasResize(), t.setWorkerData({
                size: a,
                zoomUnit: i,
                max: r,
                min: o,
                grids: []
              }), t.createColorSplit(n), t.drawRec(a, i, r, o, n)
            }
          })
        }
      }, {
        key: "TInit",
        value: function () {}
      }, {
        key: "setPoints",
        value: function (t) {
          t && (this.points = t, this.drawMap())
        }
      }, {
        key: "getTarget",
        value: function (t, e) {
          for (var n = this.workerData, i = n.size, r = n.zoomUnit, o = n.grids || [], a = i / r, s = this.style.normal, l = a - s.borderWidth, u = 0; u < o.length; u++) {
            var c = o[u],
              h = parseFloat(c.pixels[0]),
              f = parseFloat(c.pixels[1]);
            if (this.ctx.beginPath(), this.ctx.moveTo(h, f), this.ctx.lineTo(h + l, f), this.ctx.lineTo(h + l, f + l), this.ctx.lineTo(h, f + l), this.ctx.closePath(), this.ctx.isPointInPath(t, e)) return {
              index: u,
              item: c
            }
          }
          return {
            index: -1,
            item: null
          }
        }
      }, {
        key: "compileSplitList",
        value: function (t) {
          var e = this.style.colors;
          if (!(e.length < 0 || t.length <= 0)) {
            t = t.sort(function (t, e) {
              return parseFloat(t.count) - parseFloat(e.count)
            });
            for (var n = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], i = n.slice(0, e.length).reverse(), r = i.reduce(function (t, e) {
                return t + e
              }, 0), o = [], a = 0, s = 0, l = 0, u = t.length, c = 0; c < i.length; c++) a = 0 == o.length ? t[0].count : o[c - 1].end, c == i.length - 1 ? s = null : (l = parseInt(i[c] / r * u) + l, s = t[l].count), o.push({
              start: a,
              end: s,
              backgroundColor: e[c],
              borderColor: this.style.normal.borderColor || this.getColorOpacity(e[c])
            });
            this.style.splitList = o, this.setlegend(this.legend, this.style.splitList)
          }
        }
      }, {
        key: "createColorSplit",
        value: function (t) {
          var e = [];
          for (var n in t) {
            var i = t[n];
            i > 0 && e.push({
              name: n,
              count: i
            })
          }
          this.style.colors.length > 0 && this.compileSplitList(e)
        }
      }, {
        key: "setlegendParams",
        value: function () {}
      }, {
        key: "getColor",
        value: function (t) {
          var e = null;
          if (0 == t) e = "rgba(255,255,255,0)";
          else {
            e = this.setDrawStyle({
              count: t
            }).backgroundColor
          }
          return e
        }
      }, {
        key: "drawRec",
        value: function (t, e, n, i, r) {
          this.workerData.grids = [];
          var o = t / e,
            a = this.style.normal;
          for (var s in r) {
            var l = s.split("_"),
              u = l[0],
              c = l[1],
              h = r[s],
              f = this.getColor(h);
            this.ctx.fillStyle = f, this.ctx.fillRect(u, c, o - a.padding, o - a.padding), h > 0 && this.workerData.grids.push({
              pixels: [u, c],
              count: h
            })
          }
        }
      }]), e
    }(p.Parameter)
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.HeatOverlay = void 0;
    var r = n(13),
      o = i(r),
      a = n(2),
      s = i(a),
      l = n(3),
      u = i(l),
      c = n(16),
      h = i(c),
      f = n(15),
      d = i(f),
      p = n(36),
      y = n(116),
      v = i(y);
    e.HeatOverlay = function (t) {
      function e(t) {
        (0, s.default)(this, e);
        var n = (0, h.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, t));
        return n.delteOption(), n.gradient = {
          .25: "rgb(0,0,255)",
          .55: "rgb(0,255,0)",
          .85: "yellow",
          1: "rgb(255,0,0)"
        }, n.minValue = 0, n.maxValue = 0, n._setOptionStyle(v.default, t), n
      }
      return (0, d.default)(e, t), (0, u.default)(e, [{
        key: "resize",
        value: function () {
          this.drawMap()
        }
      }, {
        key: "delteOption",
        value: function () {
          this.tooltip = {
            show: !1
          }, this.legend = {
            show: !1
          }, this.style.mouseOver = null, this.style.selected = null, this.style.splitList = null
        }
      }, {
        key: "setPoints",
        value: function (t) {
          t && (this.points = t, this.drawMap())
        }
      }, {
        key: "getMax",
        value: function () {
          this.maxValue = 0;
          for (var t = 0, e = this.points.length; t < e; t++) this.points[t].count > this.maxValue && (this.maxValue = this.points[t].count)
        }
      }, {
        key: "drawMap",
        value: function () {
          var t = this;
          this.postMessage("HeatOverlay.pointsToPixels", this.points, function (e) {
            "onmoving" != t.eventType && (t.clearCanvas(), t.canvasResize(), t.setWorkerData(e), t._dataRender())
          })
        }
      }, {
        key: "_dataRender",
        value: function () {
          var t = this.container;
          if (0 == this.maxValue && this.getMax(), !(t.width <= 0)) {
            for (var e = this.style.normal, n = this.ctx, i = 0, r = this.workerData.length; i < r; i++) {
              var o = this.workerData[i],
                a = (o.count - this.minValue) / (this.maxValue - this.minValue);
              this.drawPoint(o.pixel.x, o.pixel.y, e.radius, a)
            }
            for (var s = this.getColorPaint(), l = n.getImageData(0, 0, t.width, t.height), u = l.data, c = 255 * e.maxOpacity, h = 255 * e.minOpacity, f = 255 * (e.maxScope > 1 ? 1 : e.maxScope), d = 255 * (e.minScope < 0 ? 0 : e.minScope), p = u.length, y = 3; y < p; y += 4) {
              var v = u[y],
                m = 4 * v;
              m && (u[y - 3] = s[m], u[y - 2] = s[m + 1], u[y - 1] = s[m + 2], u[y] > f && (u[y] = 0), u[y] < d && (u[y] = 0), u[y] > c && (u[y] = c), u[y] < h && (u[y] = h))
            }
            n.putImageData(l, 0, 0, 0, 0, t.width, t.height)
          }
        }
      }, {
        key: "drawPoint",
        value: function (t, e, n, i) {
          var r = this.ctx;
          r.globalAlpha = i, r.beginPath();
          var o = r.createRadialGradient(t, e, 0, t, e, n);
          o.addColorStop(0, "rgba(0,0,0,1)"), o.addColorStop(1, "rgba(0,0,0,0)"), r.fillStyle = o, r.arc(t, e, n, 0, 2 * Math.PI, !0), r.closePath(), r.fill()
        }
      }, {
        key: "getColorPaint",
        value: function () {
          var t = this.gradient,
            e = document.createElement("canvas"),
            n = e.getContext("2d");
          e.width = 256, e.height = 1;
          var i = n.createLinearGradient(0, 0, 256, 1);
          for (var r in t) i.addColorStop(r, t[r]);
          return n.fillStyle = i, n.fillRect(0, 0, 256, 1), n.getImageData(0, 0, 256, 1).data
        }
      }]), e
    }(p.Parameter)
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.HoneycombOverlay = void 0;
    var r = n(13),
      o = i(r),
      a = n(2),
      s = i(a),
      l = n(3),
      u = i(l),
      c = n(16),
      h = i(c),
      f = n(15),
      d = i(f),
      p = n(36),
      y = n(93),
      v = i(y);
    e.HoneycombOverlay = function (t) {
      function e(t) {
        (0, s.default)(this, e);
        var n = (0, h.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, t));
        return n.delteOption(), n._setOptionStyle(v.default, t), n
      }
      return (0, d.default)(e, t), (0, u.default)(e, [{
        key: "delteOption",
        value: function () {
          this.style.selected = null
        }
      }, {
        key: "resize",
        value: function () {
          this.drawMap()
        }
      }, {
        key: "setPoints",
        value: function (t) {
          t && (this.points = t, this.drawMap())
        }
      }, {
        key: "drawMap",
        value: function () {
          var t = this,
            e = this.style.normal,
            n = t.map.getZoom(),
            i = Math.pow(2, 18 - n),
            r = t.map.getMapType().getProjection(),
            o = r.lngLatToPoint(t.map.getCenter()),
            a = e.size * i,
            s = o.x - t.map.getSize().width / 2 * i,
            l = new BMap.Pixel(s, o.y + t.map.getSize().height / 2 * i),
            u = {
              points: t.points,
              size: a,
              nwMc: l,
              zoomUnit: i,
              mapSize: t.map.getSize(),
              mapCenter: t.map.getCenter(),
              zoom: n
            };
          this.postMessage("HoneycombOverlay.toRecGrids", u, function (e) {
            if ("onmoving" != t.eventType) {
              t.clearCanvas(), t.canvasResize();
              var n = e.grids,
                r = e.max,
                o = e.min,
                s = {
                  size: a,
                  zoomUnit: i,
                  max: r,
                  min: o,
                  grids: n,
                  margin: t.margin
                };
              t.setWorkerData(s), t.createColorSplit(n), t.drawRec(s)
            }
          })
        }
      }, {
        key: "createColorSplit",
        value: function (t) {
          var e = [];
          for (var n in t) {
            var i = t[n].len;
            i > 0 && e.push({
              name: n,
              count: i
            })
          }
          this.style.colors.length > 0 && this.compileSplitList(e)
        }
      }, {
        key: "compileSplitList",
        value: function (t) {
          var e = this.style.colors;
          if (!(e.length < 0 || t.length <= 0)) {
            t = t.sort(function (t, e) {
              return parseFloat(t.count) - parseFloat(e.count)
            });
            for (var n = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], i = n.slice(0, e.length).reverse(), r = i.reduce(function (t, e) {
                return t + e
              }, 0), o = [], a = 0, s = 0, l = 0, u = t.length, c = 0; c < i.length; c++) a = 0 == o.length ? t[0].count : o[c - 1].end, c == i.length - 1 ? s = null : (l = parseInt(i[c] / r * u) + l, s = t[l].count), o.push({
              start: a,
              end: s,
              backgroundColor: e[c],
              borderColor: this.style.normal.borderColor || this.getColorOpacity(e[c])
            });
            this.style.splitList = o, this.setlegend(this.legend, this.style.splitList)
          }
        }
      }, {
        key: "getColor",
        value: function (t) {
          var e = null;
          if (0 == t) e = "rgba(255,255,255,0)";
          else {
            e = this.setDrawStyle({
              count: t
            }).backgroundColor
          }
          return e
        }
      }, {
        key: "getTarget",
        value: function (t, e) {
          for (var n = this.workerData, i = n.size, r = n.zoomUnit, o = n.grids || [], a = i / r, s = this.style.normal, l = a - s.borderWidth, u = 0; u < o.length; u++) {
            var c = o[u],
              h = parseFloat(c.pixels[0]),
              f = parseFloat(c.pixels[1]);
            if (this.ctx.beginPath(), this.ctx.moveTo(h, f), this.ctx.lineTo(h + l, f), this.ctx.lineTo(h + l, f + l), this.ctx.lineTo(h, f + l), this.ctx.closePath(), this.ctx.isPointInPath(t, e)) return {
              index: u,
              item: c
            }
          }
          return {
            index: -1,
            item: null
          }
        }
      }, {
        key: "drawRec",
        value: function (t) {
          var e = t.size,
            n = t.zoomUnit,
            i = t.grids;
          this.workerData.grids = [];
          var r = e / n,
            o = this.style.normal;
          for (var a in i) {
            var s = i[a].x,
              l = i[a].y,
              u = i[a].len;
            if (u > 0) {
              var c = this.getColor(u);
              this.drawLine(s, l, r - o.padding, c, this.ctx)
            }
          }
        }
      }, {
        key: "drawLine",
        value: function (t, e, n, i, r) {
          r.beginPath(), r.fillStyle = i, r.moveTo(t, e - n / 2), r.lineTo(t + n / 2, e - n / 4), r.lineTo(t + n / 2, e + n / 4), r.lineTo(t, e + n / 2), r.lineTo(t - n / 2, e + n / 4), r.lineTo(t - n / 2, e - n / 4), r.fill(), r.closePath()
        }
      }]), e
    }(p.Parameter)
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.ImgOverlay = void 0;
    var r = n(96),
      o = i(r),
      a = n(13),
      s = i(a),
      l = n(2),
      u = i(l),
      c = n(3),
      h = i(c),
      f = n(16),
      d = i(f),
      p = n(15),
      y = i(p),
      v = n(36),
      m = n(117),
      g = i(m),
      b = n(20);
    e.ImgOverlay = function (t) {
      function e(t) {
        (0, u.default)(this, e);
        var n = (0, d.default)(this, (e.__proto__ || (0, s.default)(e)).call(this, t));
        return n._setOptionStyle(g.default, t), n.cacheImg = {}, n
      }
      return (0, y.default)(e, t), (0, h.default)(e, [{
        key: "resize",
        value: function () {
          this.drawMap()
        }
      }, {
        key: "drawMap",
        value: function () {
          var t = this;
          this.postMessage("HeatOverlay.pointsToPixels", this.points, function (e) {
            "onmoving" != t.eventType && (t.setWorkerData(e), t._dataRender())
          })
        }
      }, {
        key: "setPoints",
        value: function (t) {
          t && (this.cancerSelectd(), this.points = t, this.drawMap())
        }
      }, {
        key: "_isMouseOver",
        value: function (t, e, n, i, r, o) {
          return !(t < n || t > n + r || e < i || e > i + o)
        }
      }, {
        key: "getTarget",
        value: function (t, e) {
          for (var n = this.workerData, i = this.ctx, r = 0, o = n.length; r < o; r++) {
            var a = n[r],
              s = a.pixel,
              l = this.setDrawStyle(a);
            i.beginPath();
            var u = this.cacheImg[l.icon];
            if (!u) break;
            if (l.width && l.height) {
              var c = this._getDrawXY(s, l.offsets.left, l.offsets.top, l.width, l.height, 1);
              if (this._isMouseOver(t, e, c.x, c.y, l.width * l.scale, l.height * l.scale)) return {
                index: r,
                item: a
              }
            } else {
              var h = this._getDrawXY(s, l.offsets.left, l.offsets.top, l.width, l.height, l.scale);
              if (this._isMouseOver(t, e, h.x, h.y, u.width, u.height)) return {
                index: r,
                item: a
              }
            }
          }
          return {
            index: -1,
            item: null
          }
        }
      }, {
        key: "findIndexSelectItem",
        value: function (t) {
          var e = -1;
          return t && (e = this.selectItem.findIndex(function (e) {
            return e && e.lat == t.lat && e.lng == t.lng
          })), e
        }
      }, {
        key: "_dataRender",
        value: function () {
          this.clearCanvas(), this.canvasResize(), this._loopDraw(this.ctx, this.workerData)
        }
      }, {
        key: "loadImg",
        value: function (t, e) {
          var n = this;
          if ((0, b.isString)(t)) {
            var i = n.cacheImg[t];
            if (i) e(i);
            else {
              var r = new Image;
              r.src = t, r.onload = function () {
                n.cacheImg[t] = r, e(r)
              }
            }
          } else e(t)
        }
      }, {
        key: "isPercent",
        value: function (t) {
          return t.toString().indexOf("%") > -1
        }
      }, {
        key: "_getDrawXY",
        value: function (t, e, n, i, r, o) {
          var a = 0,
            s = 0,
            l = i * o,
            u = r * o,
            c = parseFloat(e),
            h = parseFloat(n);
          return a = this.isPercent(e) ? t.x + l * c / 100 : t.x + c, s = this.isPercent(n) ? t.y + u * h / 100 : t.y + h, {
            x: a,
            y: s
          }
        }
      }, {
        key: "setDrawStyle",
        value: function (t) {
          var e = this.style.normal,
            n = {};
          (0, o.default)(n, e);
          for (var i = this.style.splitList, r = 0; r < i.length; r++) {
            var a = i[r];
            if (null == a.end) {
              if (t.count >= a.start) {
                (0, o.default)(n, e, a);
                break
              }
            } else if (t.count >= a.start && t.count < a.end) {
              (0, o.default)(n, e, a);
              break
            }
          }
          return n
        }
      }, {
        key: "_loopDraw",
        value: function (t, e) {
          for (var n = this, i = 0, r = e.length; i < r; i++) ! function () {
            var t = e[i],
              r = t.pixel,
              o = n.setDrawStyle(t);
            n.loadImg(o.icon, function (t) {
              if (o.width && o.height) {
                var e = n._getDrawXY(r, o.offsets.left, o.offsets.top, o.width, o.height, o.scale);
                n._drawImage(n.ctx, t, e.x, e.y, o.width * o.scale, o.height * o.scale)
              } else {
                var i = n._getDrawXY(r, o.offsets.left, o.offsets.top, t.width, t.height, 1);
                n._drawImage(n.ctx, t, i.x, i.y, t.width, t.height)
              }
            })
          }()
        }
      }, {
        key: "_drawImage",
        value: function (t, e, n, i, r, o) {
          t.drawImage(e, n, i, r, o)
        }
      }]), e
    }(v.Parameter)
  }, , , , , , , , function (t, e, n) {
    "use strict";

    function i(t, e, n) {
      return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };
    i.prototype = {
      constructor: i,
      isColor: !0,
      r: 1,
      g: 1,
      b: 1,
      set: function (t) {
        return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
      },
      setScalar: function (t) {
        this.r = t, this.g = t, this.b = t
      },
      setHex: function (t) {
        return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
      },
      setRGB: function (t, e, n) {
        return this.r = t, this.g = e, this.b = n, this
      },
      setHSL: void 0,
      setStyle: function (t) {
        var e = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t);
        if (e) {
          var n, i = e[1],
            o = e[2];
          switch (i) {
            case "rgb":
            case "rgba":
              if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, n[5], this;
              if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, n[5], this;
              break;
            case "hsl":
            case "hsla":
              if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) {
                var a = parseFloat(n[1]) / 360,
                  s = parseInt(n[2], 10) / 100,
                  l = parseInt(n[3], 10) / 100;
                return n[5], this.setHSL(a, s, l)
              }
          }
        } else if (e = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
          var u = e[1],
            c = u.length;
          if (3 === c) return this.r = parseInt(u.charAt(0) + u.charAt(0), 16) / 255, this.g = parseInt(u.charAt(1) + u.charAt(1), 16) / 255, this.b = parseInt(u.charAt(2) + u.charAt(2), 16) / 255, this;
          if (6 === c) return this.r = parseInt(u.charAt(0) + u.charAt(1), 16) / 255, this.g = parseInt(u.charAt(2) + u.charAt(3), 16) / 255, this.b = parseInt(u.charAt(4) + u.charAt(5), 16) / 255, this
        }
        if (t && t.length > 0) {
          var u = r[t];
          void 0 !== u && this.setHex(u)
        }
        return this
      },
      clone: function () {
        return new this.constructor(this.r, this.g, this.b)
      },
      copy: function (t) {
        return this.r = t.r, this.g = t.g, this.b = t.b, this
      },
      copyGammaToLinear: function (t, e) {
        return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
      },
      copyLinearToGamma: function (t, e) {
        void 0 === e && (e = 2);
        var n = e > 0 ? 1 / e : 1;
        return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this
      },
      convertGammaToLinear: function () {
        var t = this.r,
          e = this.g,
          n = this.b;
        return this.r = t * t, this.g = e * e, this.b = n * n, this
      },
      convertLinearToGamma: function () {
        return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
      },
      getHex: function () {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
      },
      getHexString: function () {
        return ("000000" + this.getHex().toString(16)).slice(-6)
      },
      getHSL: function (t) {
        var e, n, i = t || {
            h: 0,
            s: 0,
            l: 0
          },
          r = this.r,
          o = this.g,
          a = this.b,
          s = Math.max(r, o, a),
          l = Math.min(r, o, a),
          u = (l + s) / 2;
        if (l === s) e = 0, n = 0;
        else {
          var c = s - l;
          switch (n = u <= .5 ? c / (s + l) : c / (2 - s - l), s) {
            case r:
              e = (o - a) / c + (o < a ? 6 : 0);
              break;
            case o:
              e = (a - r) / c + 2;
              break;
            case a:
              e = (r - o) / c + 4
          }
          e /= 6
        }
        return i.h = e, i.s = n, i.l = u, i
      },
      getStyle: function () {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
      },
      offsetHSL: function (t, e, n) {
        var i = this.getHSL();
        return i.h += t, i.s += e, i.l += n, this.setHSL(i.h, i.s, i.l), this
      },
      add: function (t) {
        return this.r += t.r, this.g += t.g, this.b += t.b, this
      },
      addColors: function (t, e) {
        return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
      },
      addScalar: function (t) {
        return this.r += t, this.g += t, this.b += t, this
      },
      sub: function (t) {
        return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
      },
      multiply: function (t) {
        return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
      },
      multiplyScalar: function (t) {
        return this.r *= t, this.g *= t, this.b *= t, this
      },
      lerp: function (t, e) {
        return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
      },
      equals: function (t) {
        return t.r === this.r && t.g === this.g && t.b === this.b
      },
      fromArray: function (t, e) {
        return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
      },
      toArray: function (t, e) {
        return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
      }
    };
    e.Color = i
  }, , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {
      style: {
        normal: {
          borderColor: "rgba(50, 50, 255, 0.8)",
          borderWidth: .05
        }
      },
      data: []
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {
      tooltip: {
        show: !1,
        offsets: {
          top: 0,
          left: 0
        }
      },
      legend: {
        show: !1
      },
      style: {
        normal: {
          radius: 15,
          minOpacity: 0,
          maxOpacity: .8,
          minScope: 0,
          maxScope: 1
        },
        colors: []
      },
      data: []
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {
      tooltip: {
        show: !0,
        position: "top",
        customClass: "black",
        offsets: {
          top: 0,
          left: 0
        },
        formatter: "{count}~<br/>{count}"
      },
      legend: {
        show: !1
      },
      style: {
        normal: {
          icon: null,
          width: 0,
          height: 0,
          scale: 1,
          offsets: {
            top: 0,
            left: 0
          }
        },
        mouseOver: {
          scale: 1
        },
        selected: {
          scale: 1
        },
        colors: [],
        splitList: []
      },
      data: [],
      event: {}
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {
      center: [],
      id: null,
      skin: null,
      zoom: {
        value: 5,
        show: !0,
        max: 18,
        min: 5
      }
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {
      tooltip: {
        show: !1,
        customClass: "black",
        offsets: {
          top: 0,
          left: 0
        }
      },
      legend: {
        show: !1,
        toFixed: 2
      },
      style: {
        normal: {
          borderWidth: .1,
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          scale: 1,
          label: {
            show: !1,
            color: "rgba(0,0,0,1)",
            font: "13px Arial"
          }
        },
        mouseOver: {
          scale: 1,
          label: {}
        },
        selected: {
          scale: 1,
          label: {}
        },
        colors: [],
        splitList: []
      },
      data: [],
      event: {
        multiSelect: !0,
        onMouseClick: function (t, e) {}
      }
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.ImgOverlay = e.workerMrg = e.HoneycombOverlay = e.CircuitOverlay = e.HeatOverlay = e.BoundaryOverlay = e.GriddingOverlay = e.DotOverlay = e.Map = e.utils = void 0;
    var i = n(100),
      r = n(101),
      o = n(98),
      a = n(102),
      s = n(99),
      l = n(103),
      u = n(104),
      c = n(97),
      h = n(20),
      f = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
      }(h),
      d = n(91),
      p = {
        utils: f,
        Map: c.Map,
        DotOverlay: i.DotOverlay,
        GriddingOverlay: r.GriddingOverlay,
        BoundaryOverlay: o.BoundaryOverlay,
        HeatOverlay: a.HeatOverlay,
        CircuitOverlay: s.CircuitOverlay,
        HoneycombOverlay: l.HoneycombOverlay,
        workerMrg: d.workerMrg,
        ImgOverlay: u.ImgOverlay
      };
    e.utils = f, e.Map = c.Map, e.DotOverlay = i.DotOverlay, e.GriddingOverlay = r.GriddingOverlay, e.BoundaryOverlay = o.BoundaryOverlay, e.HeatOverlay = a.HeatOverlay, e.CircuitOverlay = s.CircuitOverlay, e.HoneycombOverlay = l.HoneycombOverlay, e.workerMrg = d.workerMrg, e.ImgOverlay = u.ImgOverlay, e.default = p
  }, function (t, e, n) {
    "use strict";

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.MapZoom = void 0;
    var r = n(2),
      o = i(r),
      a = n(3),
      s = i(a);
    e.MapZoom = function () {
      function t(e) {
        (0, o.default)(this, t), this.map = e, this.dom = e._inmapOption.toolDom, this.zoom = e._inmapOption.zoom, this.createDom()
      }
      return (0, s.default)(t, [{
        key: "createDom",
        value: function () {
          var t = document.createElement("div");
          t.classList.add("scale-group"), t.innerHTML = "<a>+</a > <a>-</a >", this.dom.appendChild(t), this.event(t)
        }
      }, {
        key: "event",
        value: function (t) {
          var e = this,
            n = t.querySelectorAll("a");
          n[0].addEventListener("click", function () {
            e.map.getZoom() < e.zoom.max && e.map.zoomIn()
          }), n[1].addEventListener("click", function () {
            e.map.getZoom() > e.zoom.min && e.map.zoomOut()
          })
        }
      }]), t
    }()
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = n(91),
      r = 0,
      o = {},
      a = 0;
    Function.prototype.inherits = function (t, e) {
      var n = void 0,
        i = void 0,
        r = this.prototype,
        o = function () {};
      o.prototype = t.prototype, i = this.prototype = new o, "string" == typeof e && (i.className = e);
      for (n in r) i[n] = r[n];
      return this.prototype.constructor = r.constructor, r = o = null, i
    };
    var s = function t(e) {
      o[this.hashCode = e || t.guid()] = this
    };
    s.guid = function () {
      return "td_" + (r++).toString(36)
    }, s.prototype.dispose = function () {
      this.hashCode && (o[this.hashCode] = null);
      for (var t in this) "function" != typeof this[t] && (this[t] = null)
    }, s.prototype.getHashCode = function () {
      return this.hashCode || (o[this.hashCode = s.guid()] = this), this.hashCode
    }, s.prototype.decontrol = function () {
      o[this.hashCode] = null
    };
    var l = BMap || {};
    s.inherits(l.Overlay, "BaseClass"), s.prototype.postMessage = function (t, e, n) {
      var r = this.map,
        o = r.getCenter(),
        a = r.getSize(),
        s = this.setMsgId();
      if (!Array.isArray(this.points)) return void console.error(" array is not defined <shouild be setPoints(Array)>");
      var l = {
        type: "web",
        data: e,
        hashCode: this.hashCode,
        className: this.className,
        classPath: t,
        msgId: s,
        map: {
          center: {
            lng: o.lng,
            lat: o.lat
          },
          size: {
            width: a.width,
            height: a.height
          },
          zoom: r.getZoom(),
          margin: this.margin
        }
      };
      i.workerMrg.postMessage({
        request: l
      }, n)
    }, s.prototype.getMsgId = function () {
      return "msgId_" + a.toString(36)
    }, s.prototype.setMsgId = function () {
      return a++, "msgId_" + a.toString(36)
    }, e.default = s
  }, , , , , , , , , function (t, e, n) {
    n(140), t.exports = n(0).Object.assign
  }, , , , , , , , function (t, e, n) {
    "use strict";
    var i = n(17),
      r = n(39),
      o = n(21),
      a = n(32),
      s = n(51),
      l = Object.assign;
    t.exports = !l || n(12)(function () {
      var t = {},
        e = {},
        n = Symbol(),
        i = "abcdefghijklmnopqrst";
      return t[n] = 7, i.split("").forEach(function (t) {
        e[t] = t
      }), 7 != l({}, t)[n] || Object.keys(l({}, e)).join("") != i
    }) ? function (t, e) {
      for (var n = a(t), l = arguments.length, u = 1, c = r.f, h = o.f; l > u;)
        for (var f, d = s(arguments[u++]), p = c ? i(d).concat(c(d)) : i(d), y = p.length, v = 0; y > v;) h.call(d, f = p[v++]) && (n[f] = d[f]);
      return n
    } : l
  }, function (t, e, n) {
    var i = n(5);
    i(i.S + i.F, "Object", {
      assign: n(139)
    })
  }, , , , , , , function (t, e, n) {
    e = t.exports = n(148)(), e.push([t.i, '.td-map-container {\n  display: -webkit-box;\n  opacity: 1;\n  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;\n}\n.td-map-container .scale-group {\n  position: absolute;\n  right: 10px;\n  bottom: 35px;\n  z-index: 999999;\n  opacity: 1;\n}\n.td-map-container .scale-group a {\n  display: block;\n  width: 24px;\n  height: 24px;\n  font-size: 17px;\n  line-height: 22px;\n  text-align: center;\n  background: #fff;\n  margin-top: 5px;\n  color: #666;\n  cursor: pointer;\n}\n.td-map-container ul.legend {\n  position: absolute;\n  list-style: none;\n  opacity: 1;\n  height: auto;\n  font-size: 12px;\n  padding: 10px;\n  left: 35px;\n  bottom: 35px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.7);\n  box-shadow: rgba(8, 16, 34, 0.3) 2px 0px 7px;\n  border-radius: 5px;\n  z-index: 9999;\n}\n.td-map-container .legend li {\n  text-align: start;\n  position: relative;\n}\n.td-map-container .legend li.title {\n  min-height: auto;\n  width: auto;\n  float: none;\n  padding: 0;\n  padding-bottom: 5px;\n}\n.td-map-container .legend li.item {\n  height: 20px;\n  min-height: auto;\n  width: auto;\n  float: none;\n  padding: 0;\n}\n.td-map-container .legend li .bg {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  background: #c8c832;\n  vertical-align: sub;\n  position: relative;\n}\n.td-map-container .legend li .bg:before {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n}\n.td-map-container .legend li .infinity {\n  font-size: 18px;\n  position: absolute;\n  top: -6px;\n  padding-left: 2px;\n}\n.td-map-container .tooltip {\n  position: fixed;\n  opacity: 1;\n  display: none;\n  pointer-events: none;\n  border-style: solid;\n  white-space: nowrap;\n  z-index: 9999999;\n  transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 4px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-size: 14px;\n  font-family: sans-serif;\n  line-height: 21px;\n  padding: 5px;\n  left: 323px;\n  top: 451px;\n}\n.td-map-container .tooltip.black {\n  border-width: 0px;\n  border-color: #333333;\n  background-color: rgba(50, 50, 50, 0.7);\n  color: #ffffff;\n}\n', ""])
  }, function (t, e) {
    t.exports = function () {
      var t = [];
      return t.toString = function () {
        for (var t = [], e = 0; e < this.length; e++) {
          var n = this[e];
          n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
        }
        return t.join("")
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [
          [null, e, ""]
        ]);
        for (var i = {}, r = 0; r < this.length; r++) {
          var o = this[r][0];
          "number" == typeof o && (i[o] = !0)
        }
        for (r = 0; r < e.length; r++) {
          var a = e[r];
          "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
        }
      }, t
    }
  }, function (t, e) {
    function n(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          r = f[i.id];
        if (r) {
          r.refs++;
          for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
          for (; o < i.parts.length; o++) r.parts.push(l(i.parts[o], e))
        } else {
          for (var a = [], o = 0; o < i.parts.length; o++) a.push(l(i.parts[o], e));
          f[i.id] = {
            id: i.id,
            refs: 1,
            parts: a
          }
        }
      }
    }

    function i(t) {
      for (var e = [], n = {}, i = 0; i < t.length; i++) {
        var r = t[i],
          o = r[0],
          a = r[1],
          s = r[2],
          l = r[3],
          u = {
            css: a,
            media: s,
            sourceMap: l
          };
        n[o] ? n[o].parts.push(u) : e.push(n[o] = {
          id: o,
          parts: [u]
        })
      }
      return e
    }

    function r(t, e) {
      var n = y(),
        i = g[g.length - 1];
      if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), g.push(e);
      else {
        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(e)
      }
    }

    function o(t) {
      t.parentNode.removeChild(t);
      var e = g.indexOf(t);
      e >= 0 && g.splice(e, 1)
    }

    function a(t) {
      var e = document.createElement("style");
      return e.type = "text/css", r(t, e), e
    }

    function s(t) {
      var e = document.createElement("link");
      return e.rel = "stylesheet", r(t, e), e
    }

    function l(t, e) {
      var n, i, r;
      if (e.singleton) {
        var l = m++;
        n = v || (v = a(e)), i = u.bind(null, n, l, !1), r = u.bind(null, n, l, !0)
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(e), i = h.bind(null, n), r = function () {
        o(n), n.href && URL.revokeObjectURL(n.href)
      }) : (n = a(e), i = c.bind(null, n), r = function () {
        o(n)
      });
      return i(t),
        function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            i(t = e)
          } else r()
        }
    }

    function u(t, e, n, i) {
      var r = n ? "" : i.css;
      if (t.styleSheet) t.styleSheet.cssText = b(e, r);
      else {
        var o = document.createTextNode(r),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
      }
    }

    function c(t, e) {
      var n = e.css,
        i = e.media;
      if (i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = n;
      else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n))
      }
    }

    function h(t, e) {
      var n = e.css,
        i = e.sourceMap;
      i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
      var r = new Blob([n], {
          type: "text/css"
        }),
        o = t.href;
      t.href = URL.createObjectURL(r), o && URL.revokeObjectURL(o)
    }
    var f = {},
      d = function (t) {
        var e;
        return function () {
          return void 0 === e && (e = t.apply(this, arguments)), e
        }
      },
      p = d(function () {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
      }),
      y = d(function () {
        return document.head || document.getElementsByTagName("head")[0]
      }),
      v = null,
      m = 0,
      g = [];
    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      e = e || {}, void 0 === e.singleton && (e.singleton = p()), void 0 === e.insertAt && (e.insertAt = "bottom");
      var r = i(t);
      return n(r, e),
        function (t) {
          for (var o = [], a = 0; a < r.length; a++) {
            var s = r[a],
              l = f[s.id];
            l.refs--, o.push(l)
          }
          if (t) {
            n(i(t), e)
          }
          for (var a = 0; a < o.length; a++) {
            var l = o[a];
            if (0 === l.refs) {
              for (var u = 0; u < l.parts.length; u++) l.parts[u]();
              delete f[l.id]
            }
          }
        }
    };
    var b = function () {
      var t = [];
      return function (e, n) {
        return t[e] = n, t.filter(Boolean).join("\n")
      }
    }()
  }, function (t, e, n) {
    var i = n(147);
    "string" == typeof i && (i = [
      [t.i, i, ""]
    ]);
    n(149)(i, {});
    i.locals && (t.exports = i.locals)
  }])
});

!function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 6)
}([function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    var md5, _unused_webpack_default_export = md5;
    !function() {
        var HxOverrides = function() {};
        HxOverrides.__name__ = !0,
        HxOverrides.dateStr = function(e) {
            var t = e.getMonth() + 1
              , i = e.getDate()
              , n = e.getHours()
              , r = e.getMinutes()
              , s = e.getSeconds();
            return e.getFullYear() + "-" + (t < 10 ? "0" + t : "" + t) + "-" + (i < 10 ? "0" + i : "" + i) + " " + (n < 10 ? "0" + n : "" + n) + ":" + (r < 10 ? "0" + r : "" + r) + ":" + (s < 10 ? "0" + s : "" + s)
        }
        ,
        HxOverrides.strDate = function(e) {
            switch (e.length) {
            case 8:
                var t = e.split(":")
                  , i = new Date;
                return i.setTime(0),
                i.setUTCHours(t[0]),
                i.setUTCMinutes(t[1]),
                i.setUTCSeconds(t[2]),
                i;
            case 10:
                t = e.split("-");
                return new Date(t[0],t[1] - 1,t[2],0,0,0);
            case 19:
                var n = (t = e.split(" "))[0].split("-")
                  , r = t[1].split(":");
                return new Date(n[0],n[1] - 1,n[2],r[0],r[1],r[2]);
            default:
                throw "Invalid date format : " + e
            }
        }
        ,
        HxOverrides.cca = function(e, t) {
            var i = e.charCodeAt(t);
            if (i == i)
                return i
        }
        ,
        HxOverrides.substr = function(e, t, i) {
            return null != t && 0 != t && null != i && i < 0 ? "" : (null == i && (i = e.length),
            t < 0 ? (t = e.length + t) < 0 && (t = 0) : i < 0 && (i = e.length + i - t),
            e.substr(t, i))
        }
        ,
        HxOverrides.remove = function(e, t) {
            for (var i = 0, n = e.length; i < n; ) {
                if (e[i] == t)
                    return e.splice(i, 1),
                    !0;
                i++
            }
            return !1
        }
        ,
        HxOverrides.iter = function(e) {
            return {
                cur: 0,
                arr: e,
                hasNext: function() {
                    return this.cur < this.arr.length
                },
                next: function() {
                    return this.arr[this.cur++]
                }
            }
        }
        ;
        var IntIter = function(e, t) {
            this.min = e,
            this.max = t
        };
        IntIter.__name__ = !0,
        IntIter.prototype = {
            next: function() {
                return this.min++
            },
            hasNext: function() {
                return this.min < this.max
            },
            __class__: IntIter
        };
        var Std = function() {};
        Std.__name__ = !0,
        Std.is = function(e, t) {
            return js.Boot.__instanceof(e, t)
        }
        ,
        Std.string = function(e) {
            return js.Boot.__string_rec(e, "")
        }
        ,
        Std.int = function(e) {
            return 0 | e
        }
        ,
        Std.parseInt = function(e) {
            var t = parseInt(e, 10);
            return 0 != t || 120 != HxOverrides.cca(e, 1) && 88 != HxOverrides.cca(e, 1) || (t = parseInt(e)),
            isNaN(t) ? null : t
        }
        ,
        Std.parseFloat = function(e) {
            return parseFloat(e)
        }
        ,
        Std.random = function(e) {
            return Math.floor(Math.random() * e)
        }
        ;
        var com = com || {};
        com.wiris || (com.wiris = {}),
        com.wiris.js || (com.wiris.js = {}),
        com.wiris.js.JsPluginTools = function() {
            this.tryReady()
        }
        ,
        com.wiris.js.JsPluginTools.__name__ = !0,
        com.wiris.js.JsPluginTools.main = function() {
            var e;
            e = com.wiris.js.JsPluginTools.getInstance(),
            haxe.Timer.delay($bind(e, e.tryReady), 100)
        }
        ,
        com.wiris.js.JsPluginTools.getInstance = function() {
            return null == com.wiris.js.JsPluginTools.instance && (com.wiris.js.JsPluginTools.instance = new com.wiris.js.JsPluginTools),
            com.wiris.js.JsPluginTools.instance
        }
        ,
        com.wiris.js.JsPluginTools.bypassEncapsulation = function() {
            null == window.com && (window.com = {}),
            null == window.com.wiris && (window.com.wiris = {}),
            null == window.com.wiris.js && (window.com.wiris.js = {}),
            null == window.com.wiris.js.JsPluginTools && (window.com.wiris.js.JsPluginTools = com.wiris.js.JsPluginTools.getInstance())
        }
        ,
        com.wiris.js.JsPluginTools.prototype = {
            md5encode: function(e) {
                return haxe.Md5.encode(e)
            },
            doLoad: function() {
                this.ready = !0,
                com.wiris.js.JsPluginTools.instance = this,
                com.wiris.js.JsPluginTools.bypassEncapsulation()
            },
            tryReady: function() {
                this.ready = !1,
                js.Lib.document.readyState && (this.doLoad(),
                this.ready = !0),
                this.ready || haxe.Timer.delay($bind(this, this.tryReady), 100)
            },
            __class__: com.wiris.js.JsPluginTools
        };
        var haxe = haxe || {};
        haxe.Log = function() {}
        ,
        haxe.Log.__name__ = !0,
        haxe.Log.trace = function(e, t) {
            js.Boot.__trace(e, t)
        }
        ,
        haxe.Log.clear = function() {
            js.Boot.__clear_trace()
        }
        ,
        haxe.Md5 = function() {}
        ,
        haxe.Md5.__name__ = !0,
        haxe.Md5.encode = function(e) {
            return (new haxe.Md5).doEncode(e)
        }
        ,
        haxe.Md5.prototype = {
            doEncode: function(e) {
                for (var t = this.str2blks(e), i = 1732584193, n = -271733879, r = -1732584194, s = 271733878, o = 0; o < t.length; ) {
                    var a = i
                      , l = n
                      , c = r
                      , u = s;
                    0,
                    i = this.ff(i, n, r, s, t[o], 7, -680876936),
                    s = this.ff(s, i, n, r, t[o + 1], 12, -389564586),
                    r = this.ff(r, s, i, n, t[o + 2], 17, 606105819),
                    n = this.ff(n, r, s, i, t[o + 3], 22, -1044525330),
                    i = this.ff(i, n, r, s, t[o + 4], 7, -176418897),
                    s = this.ff(s, i, n, r, t[o + 5], 12, 1200080426),
                    r = this.ff(r, s, i, n, t[o + 6], 17, -1473231341),
                    n = this.ff(n, r, s, i, t[o + 7], 22, -45705983),
                    i = this.ff(i, n, r, s, t[o + 8], 7, 1770035416),
                    s = this.ff(s, i, n, r, t[o + 9], 12, -1958414417),
                    r = this.ff(r, s, i, n, t[o + 10], 17, -42063),
                    n = this.ff(n, r, s, i, t[o + 11], 22, -1990404162),
                    i = this.ff(i, n, r, s, t[o + 12], 7, 1804603682),
                    s = this.ff(s, i, n, r, t[o + 13], 12, -40341101),
                    r = this.ff(r, s, i, n, t[o + 14], 17, -1502002290),
                    n = this.ff(n, r, s, i, t[o + 15], 22, 1236535329),
                    i = this.gg(i, n, r, s, t[o + 1], 5, -165796510),
                    s = this.gg(s, i, n, r, t[o + 6], 9, -1069501632),
                    r = this.gg(r, s, i, n, t[o + 11], 14, 643717713),
                    n = this.gg(n, r, s, i, t[o], 20, -373897302),
                    i = this.gg(i, n, r, s, t[o + 5], 5, -701558691),
                    s = this.gg(s, i, n, r, t[o + 10], 9, 38016083),
                    r = this.gg(r, s, i, n, t[o + 15], 14, -660478335),
                    n = this.gg(n, r, s, i, t[o + 4], 20, -405537848),
                    i = this.gg(i, n, r, s, t[o + 9], 5, 568446438),
                    s = this.gg(s, i, n, r, t[o + 14], 9, -1019803690),
                    r = this.gg(r, s, i, n, t[o + 3], 14, -187363961),
                    n = this.gg(n, r, s, i, t[o + 8], 20, 1163531501),
                    i = this.gg(i, n, r, s, t[o + 13], 5, -1444681467),
                    s = this.gg(s, i, n, r, t[o + 2], 9, -51403784),
                    r = this.gg(r, s, i, n, t[o + 7], 14, 1735328473),
                    n = this.gg(n, r, s, i, t[o + 12], 20, -1926607734),
                    i = this.hh(i, n, r, s, t[o + 5], 4, -378558),
                    s = this.hh(s, i, n, r, t[o + 8], 11, -2022574463),
                    r = this.hh(r, s, i, n, t[o + 11], 16, 1839030562),
                    n = this.hh(n, r, s, i, t[o + 14], 23, -35309556),
                    i = this.hh(i, n, r, s, t[o + 1], 4, -1530992060),
                    s = this.hh(s, i, n, r, t[o + 4], 11, 1272893353),
                    r = this.hh(r, s, i, n, t[o + 7], 16, -155497632),
                    n = this.hh(n, r, s, i, t[o + 10], 23, -1094730640),
                    i = this.hh(i, n, r, s, t[o + 13], 4, 681279174),
                    s = this.hh(s, i, n, r, t[o], 11, -358537222),
                    r = this.hh(r, s, i, n, t[o + 3], 16, -722521979),
                    n = this.hh(n, r, s, i, t[o + 6], 23, 76029189),
                    i = this.hh(i, n, r, s, t[o + 9], 4, -640364487),
                    s = this.hh(s, i, n, r, t[o + 12], 11, -421815835),
                    r = this.hh(r, s, i, n, t[o + 15], 16, 530742520),
                    n = this.hh(n, r, s, i, t[o + 2], 23, -995338651),
                    i = this.ii(i, n, r, s, t[o], 6, -198630844),
                    s = this.ii(s, i, n, r, t[o + 7], 10, 1126891415),
                    r = this.ii(r, s, i, n, t[o + 14], 15, -1416354905),
                    n = this.ii(n, r, s, i, t[o + 5], 21, -57434055),
                    i = this.ii(i, n, r, s, t[o + 12], 6, 1700485571),
                    s = this.ii(s, i, n, r, t[o + 3], 10, -1894986606),
                    r = this.ii(r, s, i, n, t[o + 10], 15, -1051523),
                    n = this.ii(n, r, s, i, t[o + 1], 21, -2054922799),
                    i = this.ii(i, n, r, s, t[o + 8], 6, 1873313359),
                    s = this.ii(s, i, n, r, t[o + 15], 10, -30611744),
                    r = this.ii(r, s, i, n, t[o + 6], 15, -1560198380),
                    n = this.ii(n, r, s, i, t[o + 13], 21, 1309151649),
                    i = this.ii(i, n, r, s, t[o + 4], 6, -145523070),
                    s = this.ii(s, i, n, r, t[o + 11], 10, -1120210379),
                    r = this.ii(r, s, i, n, t[o + 2], 15, 718787259),
                    n = this.ii(n, r, s, i, t[o + 9], 21, -343485551),
                    i = this.addme(i, a),
                    n = this.addme(n, l),
                    r = this.addme(r, c),
                    s = this.addme(s, u),
                    o += 16
                }
                return this.rhex(i) + this.rhex(n) + this.rhex(r) + this.rhex(s)
            },
            ii: function(e, t, i, n, r, s, o) {
                return this.cmn(this.bitXOR(i, this.bitOR(t, ~n)), e, t, r, s, o)
            },
            hh: function(e, t, i, n, r, s, o) {
                return this.cmn(this.bitXOR(this.bitXOR(t, i), n), e, t, r, s, o)
            },
            gg: function(e, t, i, n, r, s, o) {
                return this.cmn(this.bitOR(this.bitAND(t, n), this.bitAND(i, ~n)), e, t, r, s, o)
            },
            ff: function(e, t, i, n, r, s, o) {
                return this.cmn(this.bitOR(this.bitAND(t, i), this.bitAND(~t, n)), e, t, r, s, o)
            },
            cmn: function(e, t, i, n, r, s) {
                return this.addme(this.rol(this.addme(this.addme(t, e), this.addme(n, s)), r), i)
            },
            rol: function(e, t) {
                return e << t | e >>> 32 - t
            },
            str2blks: function(e) {
                for (var t = 1 + (e.length + 8 >> 6), i = new Array, n = 0, r = 16 * t; n < r; ) {
                    i[s = n++] = 0
                }
                for (var s = 0; s < e.length; )
                    i[s >> 2] |= HxOverrides.cca(e, s) << (8 * e.length + s) % 4 * 8,
                    s++;
                i[s >> 2] |= 128 << (8 * e.length + s) % 4 * 8;
                var o = 8 * e.length
                  , a = 16 * t - 2;
                return i[a] = 255 & o,
                i[a] |= (o >>> 8 & 255) << 8,
                i[a] |= (o >>> 16 & 255) << 16,
                i[a] |= (o >>> 24 & 255) << 24,
                i
            },
            rhex: function(e) {
                for (var t = "", i = 0; i < 4; ) {
                    var n = i++;
                    t += "0123456789abcdef".charAt(e >> 8 * n + 4 & 15) + "0123456789abcdef".charAt(e >> 8 * n & 15)
                }
                return t
            },
            addme: function(e, t) {
                var i = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
            },
            bitAND: function(e, t) {
                return (e >>> 1 & t >>> 1) << 1 | 1 & e & t
            },
            bitXOR: function(e, t) {
                return (e >>> 1 ^ t >>> 1) << 1 | 1 & e ^ 1 & t
            },
            bitOR: function(e, t) {
                return (e >>> 1 | t >>> 1) << 1 | (1 & e | 1 & t)
            },
            __class__: haxe.Md5
        },
        haxe.Timer = function(e) {
            var t = this;
            this.id = window.setInterval(function() {
                t.run()
            }, e)
        }
        ,
        haxe.Timer.__name__ = !0,
        haxe.Timer.delay = function(e, t) {
            var i = new haxe.Timer(t);
            return i.run = function() {
                i.stop(),
                e()
            }
            ,
            i
        }
        ,
        haxe.Timer.measure = function(e, t) {
            var i = haxe.Timer.stamp()
              , n = e();
            return haxe.Log.trace(haxe.Timer.stamp() - i + "s", t),
            n
        }
        ,
        haxe.Timer.stamp = function() {
            return (new Date).getTime() / 1e3
        }
        ,
        haxe.Timer.prototype = {
            run: function() {},
            stop: function() {
                null != this.id && (window.clearInterval(this.id),
                this.id = null)
            },
            __class__: haxe.Timer
        };
        var js = js || {}, $_;
        function $bind(e, t) {
            var i = function e() {
                return e.method.apply(e.scope, arguments)
            };
            return i.scope = e,
            i.method = t,
            i
        }
        js.Boot = function() {}
        ,
        js.Boot.__name__ = !0,
        js.Boot.__unhtml = function(e) {
            return e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;")
        }
        ,
        js.Boot.__trace = function(e, t) {
            var i, n = null != t ? t.fileName + ":" + t.lineNumber + ": " : "";
            n += js.Boot.__string_rec(e, ""),
            "undefined" != typeof document && null != (i = document.getElementById("haxe:trace")) ? i.innerHTML += js.Boot.__unhtml(n) + "<br/>" : "undefined" != typeof console && null != console.log && console.log(n)
        }
        ,
        js.Boot.__clear_trace = function() {
            var e = document.getElementById("haxe:trace");
            null != e && (e.innerHTML = "")
        }
        ,
        js.Boot.isClass = function(e) {
            return e.__name__
        }
        ,
        js.Boot.isEnum = function(e) {
            return e.__ename__
        }
        ,
        js.Boot.getClass = function(e) {
            return e.__class__
        }
        ,
        js.Boot.__string_rec = function(e, t) {
            if (null == e)
                return "null";
            if (t.length >= 5)
                return "<...>";
            var i = _typeof(e);
            switch ("function" == i && (e.__name__ || e.__ename__) && (i = "object"),
            i) {
            case "object":
                if (e instanceof Array) {
                    if (e.__enum__) {
                        if (2 == e.length)
                            return e[0];
                        var n = e[0] + "(";
                        t += "\t";
                        for (var r = 2, s = e.length; r < s; ) {
                            n += 2 != (o = r++) ? "," + js.Boot.__string_rec(e[o], t) : js.Boot.__string_rec(e[o], t)
                        }
                        return n + ")"
                    }
                    var o, a = e.length;
                    n = "[";
                    t += "\t";
                    for (s = 0; s < a; ) {
                        var l = s++;
                        n += (l > 0 ? "," : "") + js.Boot.__string_rec(e[l], t)
                    }
                    return n += "]"
                }
                var c;
                try {
                    c = e.toString
                } catch (e) {
                    return "???"
                }
                if (null != c && c != Object.toString) {
                    var u = e.toString();
                    if ("[object Object]" != u)
                        return u
                }
                var h = null;
                n = "{\n";
                t += "\t";
                var d = null != e.hasOwnProperty;
                for (var h in e)
                    d && !e.hasOwnProperty(h) || "prototype" != h && "__class__" != h && "__super__" != h && "__interfaces__" != h && "__properties__" != h && (2 != n.length && (n += ", \n"),
                    n += t + h + " : " + js.Boot.__string_rec(e[h], t));
                return n += "\n" + (t = t.substring(1)) + "}";
            case "function":
                return "<function>";
            case "string":
                return e;
            default:
                return String(e)
            }
        }
        ,
        js.Boot.__interfLoop = function(e, t) {
            if (null == e)
                return !1;
            if (e == t)
                return !0;
            var i = e.__interfaces__;
            if (null != i)
                for (var n = 0, r = i.length; n < r; ) {
                    var s = i[n++];
                    if (s == t || js.Boot.__interfLoop(s, t))
                        return !0
                }
            return js.Boot.__interfLoop(e.__super__, t)
        }
        ,
        js.Boot.__instanceof = function(e, t) {
            try {
                if (e instanceof t)
                    return t != Array || null == e.__enum__;
                if (js.Boot.__interfLoop(e.__class__, t))
                    return !0
            } catch (e) {
                if (null == t)
                    return !1
            }
            switch (t) {
            case Int:
                return Math.ceil(e % 2147483648) === e;
            case Float:
                return "number" == typeof e;
            case Bool:
                return !0 === e || !1 === e;
            case String:
                return "string" == typeof e;
            case Dynamic:
                return !0;
            default:
                return null != e && (t == Class && null != e.__name__ || (t == Enum && null != e.__ename__ || e.__enum__ == t))
            }
        }
        ,
        js.Boot.__cast = function(e, t) {
            if (js.Boot.__instanceof(e, t))
                return e;
            throw "Cannot cast " + Std.string(e) + " to " + Std.string(t)
        }
        ,
        js.Lib = function() {}
        ,
        js.Lib.__name__ = !0,
        js.Lib.debug = function() {}
        ,
        js.Lib.alert = function(e) {
            alert(js.Boot.__string_rec(e, ""))
        }
        ,
        js.Lib.eval = function(code) {
            return eval(code)
        }
        ,
        js.Lib.setErrorHandler = function(e) {
            js.Lib.onerror = e
        }
        ,
        Array.prototype.indexOf && (HxOverrides.remove = function(e, t) {
            var i = e.indexOf(t);
            return -1 != i && (e.splice(i, 1),
            !0)
        }
        ),
        Math.__name__ = ["Math"],
        Math.NaN = Number.NaN,
        Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
        Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY,
        Math.isFinite = function(e) {
            return isFinite(e)
        }
        ,
        Math.isNaN = function(e) {
            return isNaN(e)
        }
        ,
        String.prototype.__class__ = String,
        String.__name__ = !0,
        Array.prototype.__class__ = Array,
        Array.__name__ = !0,
        Date.prototype.__class__ = Date,
        Date.__name__ = ["Date"];
        var Int = {
            __name__: ["Int"]
        }
          , Dynamic = {
            __name__: ["Dynamic"]
        }
          , Float = Number;
        Float.__name__ = ["Float"];
        var Bool = Boolean;
        Bool.__ename__ = ["Bool"];
        var Class = {
            __name__: ["Class"]
        }
          , Enum = {}
          , Void = {
            __ename__: ["Void"]
        };
        "undefined" != typeof document && (js.Lib.document = document),
        "undefined" != typeof window && (js.Lib.window = window,
        js.Lib.window.onerror = function(e, t, i) {
            var n = js.Lib.onerror;
            return null != n && n(e, [t + ":" + i])
        }
        ),
        com.wiris.js.JsPluginTools.main(),
        delete Array.prototype.__class__
    }(),
    function() {
        var HxOverrides = function() {};
        HxOverrides.__name__ = !0,
        HxOverrides.dateStr = function(e) {
            var t = e.getMonth() + 1
              , i = e.getDate()
              , n = e.getHours()
              , r = e.getMinutes()
              , s = e.getSeconds();
            return e.getFullYear() + "-" + (t < 10 ? "0" + t : "" + t) + "-" + (i < 10 ? "0" + i : "" + i) + " " + (n < 10 ? "0" + n : "" + n) + ":" + (r < 10 ? "0" + r : "" + r) + ":" + (s < 10 ? "0" + s : "" + s)
        }
        ,
        HxOverrides.strDate = function(e) {
            switch (e.length) {
            case 8:
                var t = e.split(":")
                  , i = new Date;
                return i.setTime(0),
                i.setUTCHours(t[0]),
                i.setUTCMinutes(t[1]),
                i.setUTCSeconds(t[2]),
                i;
            case 10:
                t = e.split("-");
                return new Date(t[0],t[1] - 1,t[2],0,0,0);
            case 19:
                var n = (t = e.split(" "))[0].split("-")
                  , r = t[1].split(":");
                return new Date(n[0],n[1] - 1,n[2],r[0],r[1],r[2]);
            default:
                throw "Invalid date format : " + e
            }
        }
        ,
        HxOverrides.cca = function(e, t) {
            var i = e.charCodeAt(t);
            if (i == i)
                return i
        }
        ,
        HxOverrides.substr = function(e, t, i) {
            return null != t && 0 != t && null != i && i < 0 ? "" : (null == i && (i = e.length),
            t < 0 ? (t = e.length + t) < 0 && (t = 0) : i < 0 && (i = e.length + i - t),
            e.substr(t, i))
        }
        ,
        HxOverrides.remove = function(e, t) {
            for (var i = 0, n = e.length; i < n; ) {
                if (e[i] == t)
                    return e.splice(i, 1),
                    !0;
                i++
            }
            return !1
        }
        ,
        HxOverrides.iter = function(e) {
            return {
                cur: 0,
                arr: e,
                hasNext: function() {
                    return this.cur < this.arr.length
                },
                next: function() {
                    return this.arr[this.cur++]
                }
            }
        }
        ;
        var IntIter = function(e, t) {
            this.min = e,
            this.max = t
        };
        IntIter.__name__ = !0,
        IntIter.prototype = {
            next: function() {
                return this.min++
            },
            hasNext: function() {
                return this.min < this.max
            },
            __class__: IntIter
        };
        var Std = function() {};
        Std.__name__ = !0,
        Std.is = function(e, t) {
            return js.Boot.__instanceof(e, t)
        }
        ,
        Std.string = function(e) {
            return js.Boot.__string_rec(e, "")
        }
        ,
        Std.int = function(e) {
            return 0 | e
        }
        ,
        Std.parseInt = function(e) {
            var t = parseInt(e, 10);
            return 0 != t || 120 != HxOverrides.cca(e, 1) && 88 != HxOverrides.cca(e, 1) || (t = parseInt(e)),
            isNaN(t) ? null : t
        }
        ,
        Std.parseFloat = function(e) {
            return parseFloat(e)
        }
        ,
        Std.random = function(e) {
            return Math.floor(Math.random() * e)
        }
        ;
        var com = com || {};
        com.wiris || (com.wiris = {}),
        com.wiris.js || (com.wiris.js = {}),
        com.wiris.js.JsPluginTools = function() {
            this.tryReady()
        }
        ,
        com.wiris.js.JsPluginTools.__name__ = !0,
        com.wiris.js.JsPluginTools.main = function() {
            var e;
            e = com.wiris.js.JsPluginTools.getInstance(),
            haxe.Timer.delay($bind(e, e.tryReady), 100)
        }
        ,
        com.wiris.js.JsPluginTools.getInstance = function() {
            return null == com.wiris.js.JsPluginTools.instance && (com.wiris.js.JsPluginTools.instance = new com.wiris.js.JsPluginTools),
            com.wiris.js.JsPluginTools.instance
        }
        ,
        com.wiris.js.JsPluginTools.bypassEncapsulation = function() {
            null == window.com && (window.com = {}),
            null == window.com.wiris && (window.com.wiris = {}),
            null == window.com.wiris.js && (window.com.wiris.js = {}),
            null == window.com.wiris.js.JsPluginTools && (window.com.wiris.js.JsPluginTools = com.wiris.js.JsPluginTools.getInstance())
        }
        ,
        com.wiris.js.JsPluginTools.prototype = {
            md5encode: function(e) {
                return haxe.Md5.encode(e)
            },
            doLoad: function() {
                this.ready = !0,
                com.wiris.js.JsPluginTools.instance = this,
                com.wiris.js.JsPluginTools.bypassEncapsulation()
            },
            tryReady: function() {
                this.ready = !1,
                js.Lib.document.readyState && (this.doLoad(),
                this.ready = !0),
                this.ready || haxe.Timer.delay($bind(this, this.tryReady), 100)
            },
            __class__: com.wiris.js.JsPluginTools
        };
        var haxe = haxe || {};
        haxe.Log = function() {}
        ,
        haxe.Log.__name__ = !0,
        haxe.Log.trace = function(e, t) {
            js.Boot.__trace(e, t)
        }
        ,
        haxe.Log.clear = function() {
            js.Boot.__clear_trace()
        }
        ,
        haxe.Md5 = function() {}
        ,
        haxe.Md5.__name__ = !0,
        haxe.Md5.encode = function(e) {
            return (new haxe.Md5).doEncode(e)
        }
        ,
        haxe.Md5.prototype = {
            doEncode: function(e) {
                for (var t = this.str2blks(e), i = 1732584193, n = -271733879, r = -1732584194, s = 271733878, o = 0; o < t.length; ) {
                    var a = i
                      , l = n
                      , c = r
                      , u = s;
                    0,
                    i = this.ff(i, n, r, s, t[o], 7, -680876936),
                    s = this.ff(s, i, n, r, t[o + 1], 12, -389564586),
                    r = this.ff(r, s, i, n, t[o + 2], 17, 606105819),
                    n = this.ff(n, r, s, i, t[o + 3], 22, -1044525330),
                    i = this.ff(i, n, r, s, t[o + 4], 7, -176418897),
                    s = this.ff(s, i, n, r, t[o + 5], 12, 1200080426),
                    r = this.ff(r, s, i, n, t[o + 6], 17, -1473231341),
                    n = this.ff(n, r, s, i, t[o + 7], 22, -45705983),
                    i = this.ff(i, n, r, s, t[o + 8], 7, 1770035416),
                    s = this.ff(s, i, n, r, t[o + 9], 12, -1958414417),
                    r = this.ff(r, s, i, n, t[o + 10], 17, -42063),
                    n = this.ff(n, r, s, i, t[o + 11], 22, -1990404162),
                    i = this.ff(i, n, r, s, t[o + 12], 7, 1804603682),
                    s = this.ff(s, i, n, r, t[o + 13], 12, -40341101),
                    r = this.ff(r, s, i, n, t[o + 14], 17, -1502002290),
                    n = this.ff(n, r, s, i, t[o + 15], 22, 1236535329),
                    i = this.gg(i, n, r, s, t[o + 1], 5, -165796510),
                    s = this.gg(s, i, n, r, t[o + 6], 9, -1069501632),
                    r = this.gg(r, s, i, n, t[o + 11], 14, 643717713),
                    n = this.gg(n, r, s, i, t[o], 20, -373897302),
                    i = this.gg(i, n, r, s, t[o + 5], 5, -701558691),
                    s = this.gg(s, i, n, r, t[o + 10], 9, 38016083),
                    r = this.gg(r, s, i, n, t[o + 15], 14, -660478335),
                    n = this.gg(n, r, s, i, t[o + 4], 20, -405537848),
                    i = this.gg(i, n, r, s, t[o + 9], 5, 568446438),
                    s = this.gg(s, i, n, r, t[o + 14], 9, -1019803690),
                    r = this.gg(r, s, i, n, t[o + 3], 14, -187363961),
                    n = this.gg(n, r, s, i, t[o + 8], 20, 1163531501),
                    i = this.gg(i, n, r, s, t[o + 13], 5, -1444681467),
                    s = this.gg(s, i, n, r, t[o + 2], 9, -51403784),
                    r = this.gg(r, s, i, n, t[o + 7], 14, 1735328473),
                    n = this.gg(n, r, s, i, t[o + 12], 20, -1926607734),
                    i = this.hh(i, n, r, s, t[o + 5], 4, -378558),
                    s = this.hh(s, i, n, r, t[o + 8], 11, -2022574463),
                    r = this.hh(r, s, i, n, t[o + 11], 16, 1839030562),
                    n = this.hh(n, r, s, i, t[o + 14], 23, -35309556),
                    i = this.hh(i, n, r, s, t[o + 1], 4, -1530992060),
                    s = this.hh(s, i, n, r, t[o + 4], 11, 1272893353),
                    r = this.hh(r, s, i, n, t[o + 7], 16, -155497632),
                    n = this.hh(n, r, s, i, t[o + 10], 23, -1094730640),
                    i = this.hh(i, n, r, s, t[o + 13], 4, 681279174),
                    s = this.hh(s, i, n, r, t[o], 11, -358537222),
                    r = this.hh(r, s, i, n, t[o + 3], 16, -722521979),
                    n = this.hh(n, r, s, i, t[o + 6], 23, 76029189),
                    i = this.hh(i, n, r, s, t[o + 9], 4, -640364487),
                    s = this.hh(s, i, n, r, t[o + 12], 11, -421815835),
                    r = this.hh(r, s, i, n, t[o + 15], 16, 530742520),
                    n = this.hh(n, r, s, i, t[o + 2], 23, -995338651),
                    i = this.ii(i, n, r, s, t[o], 6, -198630844),
                    s = this.ii(s, i, n, r, t[o + 7], 10, 1126891415),
                    r = this.ii(r, s, i, n, t[o + 14], 15, -1416354905),
                    n = this.ii(n, r, s, i, t[o + 5], 21, -57434055),
                    i = this.ii(i, n, r, s, t[o + 12], 6, 1700485571),
                    s = this.ii(s, i, n, r, t[o + 3], 10, -1894986606),
                    r = this.ii(r, s, i, n, t[o + 10], 15, -1051523),
                    n = this.ii(n, r, s, i, t[o + 1], 21, -2054922799),
                    i = this.ii(i, n, r, s, t[o + 8], 6, 1873313359),
                    s = this.ii(s, i, n, r, t[o + 15], 10, -30611744),
                    r = this.ii(r, s, i, n, t[o + 6], 15, -1560198380),
                    n = this.ii(n, r, s, i, t[o + 13], 21, 1309151649),
                    i = this.ii(i, n, r, s, t[o + 4], 6, -145523070),
                    s = this.ii(s, i, n, r, t[o + 11], 10, -1120210379),
                    r = this.ii(r, s, i, n, t[o + 2], 15, 718787259),
                    n = this.ii(n, r, s, i, t[o + 9], 21, -343485551),
                    i = this.addme(i, a),
                    n = this.addme(n, l),
                    r = this.addme(r, c),
                    s = this.addme(s, u),
                    o += 16
                }
                return this.rhex(i) + this.rhex(n) + this.rhex(r) + this.rhex(s)
            },
            ii: function(e, t, i, n, r, s, o) {
                return this.cmn(this.bitXOR(i, this.bitOR(t, ~n)), e, t, r, s, o)
            },
            hh: function(e, t, i, n, r, s, o) {
                return this.cmn(this.bitXOR(this.bitXOR(t, i), n), e, t, r, s, o)
            },
            gg: function(e, t, i, n, r, s, o) {
                return this.cmn(this.bitOR(this.bitAND(t, n), this.bitAND(i, ~n)), e, t, r, s, o)
            },
            ff: function(e, t, i, n, r, s, o) {
                return this.cmn(this.bitOR(this.bitAND(t, i), this.bitAND(~t, n)), e, t, r, s, o)
            },
            cmn: function(e, t, i, n, r, s) {
                return this.addme(this.rol(this.addme(this.addme(t, e), this.addme(n, s)), r), i)
            },
            rol: function(e, t) {
                return e << t | e >>> 32 - t
            },
            str2blks: function(e) {
                for (var t = 1 + (e.length + 8 >> 6), i = new Array, n = 0, r = 16 * t; n < r; ) {
                    i[s = n++] = 0
                }
                for (var s = 0; s < e.length; )
                    i[s >> 2] |= HxOverrides.cca(e, s) << (8 * e.length + s) % 4 * 8,
                    s++;
                i[s >> 2] |= 128 << (8 * e.length + s) % 4 * 8;
                var o = 8 * e.length
                  , a = 16 * t - 2;
                return i[a] = 255 & o,
                i[a] |= (o >>> 8 & 255) << 8,
                i[a] |= (o >>> 16 & 255) << 16,
                i[a] |= (o >>> 24 & 255) << 24,
                i
            },
            rhex: function(e) {
                for (var t = "", i = 0; i < 4; ) {
                    var n = i++;
                    t += "0123456789abcdef".charAt(e >> 8 * n + 4 & 15) + "0123456789abcdef".charAt(e >> 8 * n & 15)
                }
                return t
            },
            addme: function(e, t) {
                var i = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
            },
            bitAND: function(e, t) {
                return (e >>> 1 & t >>> 1) << 1 | 1 & e & t
            },
            bitXOR: function(e, t) {
                return (e >>> 1 ^ t >>> 1) << 1 | 1 & e ^ 1 & t
            },
            bitOR: function(e, t) {
                return (e >>> 1 | t >>> 1) << 1 | (1 & e | 1 & t)
            },
            __class__: haxe.Md5
        },
        haxe.Timer = function(e) {
            var t = this;
            this.id = window.setInterval(function() {
                t.run()
            }, e)
        }
        ,
        haxe.Timer.__name__ = !0,
        haxe.Timer.delay = function(e, t) {
            var i = new haxe.Timer(t);
            return i.run = function() {
                i.stop(),
                e()
            }
            ,
            i
        }
        ,
        haxe.Timer.measure = function(e, t) {
            var i = haxe.Timer.stamp()
              , n = e();
            return haxe.Log.trace(haxe.Timer.stamp() - i + "s", t),
            n
        }
        ,
        haxe.Timer.stamp = function() {
            return (new Date).getTime() / 1e3
        }
        ,
        haxe.Timer.prototype = {
            run: function() {},
            stop: function() {
                null != this.id && (window.clearInterval(this.id),
                this.id = null)
            },
            __class__: haxe.Timer
        };
        var js = js || {}, $_;
        function $bind(e, t) {
            var i = function e() {
                return e.method.apply(e.scope, arguments)
            };
            return i.scope = e,
            i.method = t,
            i
        }
        js.Boot = function() {}
        ,
        js.Boot.__name__ = !0,
        js.Boot.__unhtml = function(e) {
            return e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;")
        }
        ,
        js.Boot.__trace = function(e, t) {
            var i, n = null != t ? t.fileName + ":" + t.lineNumber + ": " : "";
            n += js.Boot.__string_rec(e, ""),
            "undefined" != typeof document && null != (i = document.getElementById("haxe:trace")) ? i.innerHTML += js.Boot.__unhtml(n) + "<br/>" : "undefined" != typeof console && null != console.log && console.log(n)
        }
        ,
        js.Boot.__clear_trace = function() {
            var e = document.getElementById("haxe:trace");
            null != e && (e.innerHTML = "")
        }
        ,
        js.Boot.isClass = function(e) {
            return e.__name__
        }
        ,
        js.Boot.isEnum = function(e) {
            return e.__ename__
        }
        ,
        js.Boot.getClass = function(e) {
            return e.__class__
        }
        ,
        js.Boot.__string_rec = function(e, t) {
            if (null == e)
                return "null";
            if (t.length >= 5)
                return "<...>";
            var i = _typeof(e);
            switch ("function" == i && (e.__name__ || e.__ename__) && (i = "object"),
            i) {
            case "object":
                if (e instanceof Array) {
                    if (e.__enum__) {
                        if (2 == e.length)
                            return e[0];
                        var n = e[0] + "(";
                        t += "\t";
                        for (var r = 2, s = e.length; r < s; ) {
                            n += 2 != (o = r++) ? "," + js.Boot.__string_rec(e[o], t) : js.Boot.__string_rec(e[o], t)
                        }
                        return n + ")"
                    }
                    var o, a = e.length;
                    n = "[";
                    t += "\t";
                    for (s = 0; s < a; ) {
                        var l = s++;
                        n += (l > 0 ? "," : "") + js.Boot.__string_rec(e[l], t)
                    }
                    return n += "]"
                }
                var c;
                try {
                    c = e.toString
                } catch (e) {
                    return "???"
                }
                if (null != c && c != Object.toString) {
                    var u = e.toString();
                    if ("[object Object]" != u)
                        return u
                }
                var h = null;
                n = "{\n";
                t += "\t";
                var d = null != e.hasOwnProperty;
                for (var h in e)
                    d && !e.hasOwnProperty(h) || "prototype" != h && "__class__" != h && "__super__" != h && "__interfaces__" != h && "__properties__" != h && (2 != n.length && (n += ", \n"),
                    n += t + h + " : " + js.Boot.__string_rec(e[h], t));
                return n += "\n" + (t = t.substring(1)) + "}";
            case "function":
                return "<function>";
            case "string":
                return e;
            default:
                return String(e)
            }
        }
        ,
        js.Boot.__interfLoop = function(e, t) {
            if (null == e)
                return !1;
            if (e == t)
                return !0;
            var i = e.__interfaces__;
            if (null != i)
                for (var n = 0, r = i.length; n < r; ) {
                    var s = i[n++];
                    if (s == t || js.Boot.__interfLoop(s, t))
                        return !0
                }
            return js.Boot.__interfLoop(e.__super__, t)
        }
        ,
        js.Boot.__instanceof = function(e, t) {
            try {
                if (e instanceof t)
                    return t != Array || null == e.__enum__;
                if (js.Boot.__interfLoop(e.__class__, t))
                    return !0
            } catch (e) {
                if (null == t)
                    return !1
            }
            switch (t) {
            case Int:
                return Math.ceil(e % 2147483648) === e;
            case Float:
                return "number" == typeof e;
            case Bool:
                return !0 === e || !1 === e;
            case String:
                return "string" == typeof e;
            case Dynamic:
                return !0;
            default:
                return null != e && (t == Class && null != e.__name__ || (t == Enum && null != e.__ename__ || e.__enum__ == t))
            }
        }
        ,
        js.Boot.__cast = function(e, t) {
            if (js.Boot.__instanceof(e, t))
                return e;
            throw "Cannot cast " + Std.string(e) + " to " + Std.string(t)
        }
        ,
        js.Lib = function() {}
        ,
        js.Lib.__name__ = !0,
        js.Lib.debug = function() {}
        ,
        js.Lib.alert = function(e) {
            alert(js.Boot.__string_rec(e, ""))
        }
        ,
        js.Lib.eval = function(code) {
            return eval(code)
        }
        ,
        js.Lib.setErrorHandler = function(e) {
            js.Lib.onerror = e
        }
        ,
        Array.prototype.indexOf && (HxOverrides.remove = function(e, t) {
            var i = e.indexOf(t);
            return -1 != i && (e.splice(i, 1),
            !0)
        }
        ),
        Math.__name__ = ["Math"],
        Math.NaN = Number.NaN,
        Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
        Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY,
        Math.isFinite = function(e) {
            return isFinite(e)
        }
        ,
        Math.isNaN = function(e) {
            return isNaN(e)
        }
        ,
        String.prototype.__class__ = String,
        String.__name__ = !0,
        Array.prototype.__class__ = Array,
        Array.__name__ = !0,
        Date.prototype.__class__ = Date,
        Date.__name__ = ["Date"];
        var Int = {
            __name__: ["Int"]
        }
          , Dynamic = {
            __name__: ["Dynamic"]
        }
          , Float = Number;
        Float.__name__ = ["Float"];
        var Bool = Boolean;
        Bool.__ename__ = ["Bool"];
        var Class = {
            __name__: ["Class"]
        }
          , Enum = {}
          , Void = {
            __ename__: ["Void"]
        };
        "undefined" != typeof document && (js.Lib.document = document),
        "undefined" != typeof window && (js.Lib.window = window,
        js.Lib.window.onerror = function(e, t, i) {
            var n = js.Lib.onerror;
            return null != n && n(e, [t + ":" + i])
        }
        ),
        com.wiris.js.JsPluginTools.main()
    }(),
    delete Array.prototype.__class__
}
, function(e, t, i) {
    var n = i(2);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, r);
    n.locals && (e.exports = n.locals)
}
, function(e, t, i) {}
, , function(e, t, i) {
    var n = {}
      , r = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)),
            t
        }
    }(function() {
        return window && document && document.all && !window.atob
    })
      , s = function(e) {
        var t = {};
        return function(e, i) {
            if ("function" == typeof e)
                return e();
            if (void 0 === t[e]) {
                var n = function(e, t) {
                    return t ? t.querySelector(e) : document.querySelector(e)
                }
                .call(this, e, i);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                    try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                t[e] = n
            }
            return t[e]
        }
    }()
      , o = null
      , a = 0
      , l = []
      , c = i(5);
    function u(e, t) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i]
              , s = n[r.id];
            if (s) {
                s.refs++;
                for (var o = 0; o < s.parts.length; o++)
                    s.parts[o](r.parts[o]);
                for (; o < r.parts.length; o++)
                    s.parts.push(p(r.parts[o], t))
            } else {
                var a = [];
                for (o = 0; o < r.parts.length; o++)
                    a.push(p(r.parts[o], t));
                n[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function h(e, t) {
        for (var i = [], n = {}, r = 0; r < e.length; r++) {
            var s = e[r]
              , o = t.base ? s[0] + t.base : s[0]
              , a = {
                css: s[1],
                media: s[2],
                sourceMap: s[3]
            };
            n[o] ? n[o].parts.push(a) : i.push(n[o] = {
                id: o,
                parts: [a]
            })
        }
        return i
    }
    function d(e, t) {
        var i = s(e.insertInto);
        if (!i)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = l[l.length - 1];
        if ("top" === e.insertAt)
            n ? n.nextSibling ? i.insertBefore(t, n.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild),
            l.push(t);
        else if ("bottom" === e.insertAt)
            i.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = s(e.insertAt.before, i);
            i.insertBefore(t, r)
        }
    }
    function f(e) {
        if (null === e.parentNode)
            return !1;
        e.parentNode.removeChild(e);
        var t = l.indexOf(e);
        t >= 0 && l.splice(t, 1)
    }
    function m(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
        void 0 === e.attrs.nonce) {
            var n = function() {
                0;
                return i.nc
            }();
            n && (e.attrs.nonce = n)
        }
        return g(t, e.attrs),
        d(e, t),
        t
    }
    function g(e, t) {
        Object.keys(t).forEach(function(i) {
            e.setAttribute(i, t[i])
        })
    }
    function p(e, t) {
        var i, n, r, s;
        if (t.transform && e.css) {
            if (!(s = t.transform(e.css)))
                return function() {}
                ;
            e.css = s
        }
        if (t.singleton) {
            var l = a++;
            i = o || (o = m(t)),
            n = b.bind(null, i, l, !1),
            r = b.bind(null, i, l, !0)
        } else
            e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function(e) {
                var t = document.createElement("link");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                e.attrs.rel = "stylesheet",
                g(t, e.attrs),
                d(e, t),
                t
            }(t),
            n = function(e, t, i) {
                var n = i.css
                  , r = i.sourceMap
                  , s = void 0 === t.convertToAbsoluteUrls && r;
                (t.convertToAbsoluteUrls || s) && (n = c(n));
                r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var o = new Blob([n],{
                    type: "text/css"
                })
                  , a = e.href;
                e.href = URL.createObjectURL(o),
                a && URL.revokeObjectURL(a)
            }
            .bind(null, i, t),
            r = function() {
                f(i),
                i.href && URL.revokeObjectURL(i.href)
            }
            ) : (i = m(t),
            n = function(e, t) {
                var i = t.css
                  , n = t.media;
                n && e.setAttribute("media", n);
                if (e.styleSheet)
                    e.styleSheet.cssText = i;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(i))
                }
            }
            .bind(null, i),
            r = function() {
                f(i)
            }
            );
        return n(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                    return;
                n(e = t)
            } else
                r()
        }
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {},
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = r()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
        var i = h(e, t);
        return u(i, t),
        function(e) {
            for (var r = [], s = 0; s < i.length; s++) {
                var o = i[s];
                (a = n[o.id]).refs--,
                r.push(a)
            }
            e && u(h(e, t), t);
            for (s = 0; s < r.length; s++) {
                var a;
                if (0 === (a = r[s]).refs) {
                    for (var l = 0; l < a.parts.length; l++)
                        a.parts[l]();
                    delete n[a.id]
                }
            }
        }
    }
    ;
    var v = function() {
        var e = [];
        return function(t, i) {
            return e[t] = i,
            e.filter(Boolean).join("\n")
        }
    }();
    function b(e, t, i, n) {
        var r = i ? "" : n.css;
        if (e.styleSheet)
            e.styleSheet.cssText = v(t, r);
        else {
            var s = document.createTextNode(r)
              , o = e.childNodes;
            o[t] && e.removeChild(o[t]),
            o.length ? e.insertBefore(s, o[t]) : e.appendChild(s)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t)
            throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e)
            return e;
        var i = t.protocol + "//" + t.host
          , n = i + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var r, s = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s) ? e : (r = 0 === s.indexOf("//") ? s : 0 === s.indexOf("/") ? i + s : n + s.replace(/^\.\//, ""),
            "url(" + JSON.stringify(r) + ")")
        })
    }
}
, function(e, t, i) {
    "use strict";
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    i.r(t);
    var r = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return function(e, t, i) {
            t && n(e.prototype, t),
            i && n(e, i)
        }(e, null, [{
            key: "safeXmlCharactersEntities",
            get: function() {
                return {
                    tagOpener: "&laquo;",
                    tagCloser: "&raquo;",
                    doubleQuote: "&uml;",
                    realDoubleQuote: "&quot;"
                }
            }
        }, {
            key: "safeBadBlackboardCharacters",
            get: function() {
                return {
                    ltElement: "«mo»<«/mo»",
                    gtElement: "«mo»>«/mo»",
                    ampElement: "«mo»&«/mo»"
                }
            }
        }, {
            key: "safeGoodBlackboardCharacters",
            get: function() {
                return {
                    ltElement: "«mo»§lt;«/mo»",
                    gtElement: "«mo»§gt;«/mo»",
                    ampElement: "«mo»§amp;«/mo»"
                }
            }
        }]),
        e
    }();
    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    r.xmlCharacters = {
        tagOpener: "<",
        tagCloser: ">",
        doubleQuote: '"',
        ampersand: "&",
        quote: "'"
    },
    r.safeXmlCharacters = {
        tagOpener: "«",
        tagCloser: "»",
        doubleQuote: "¨",
        ampersand: "§",
        quote: "`",
        realDoubleQuote: "¨"
    };
    var o = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return function(e, t, i) {
            t && s(e.prototype, t),
            i && s(e, i)
        }(e, null, [{
            key: "isMathmlInAttribute",
            value: function(e, t) {
                var i = new RegExp("^['\"][\\s]*=[\\s]*[\\w-]+([\\s]*(\"[^\"]*\"|'[^']*')[\\s]*=[\\s]*[\\w-]+[\\s]*)*[\\s]+gmi<")
                  , n = e.substring(0, t).split("").reverse().join("");
                return i.test(n)
            }
        }, {
            key: "safeXmlDecode",
            value: function(e) {
                e = (e = (e = (e = e.split(r.safeXmlCharactersEntities.tagOpener).join(r.safeXmlCharacters.tagOpener)).split(r.safeXmlCharactersEntities.tagCloser).join(r.safeXmlCharacters.tagCloser)).split(r.safeXmlCharactersEntities.doubleQuote).join(r.safeXmlCharacters.doubleQuote)).split(r.safeXmlCharactersEntities.realDoubleQuote).join(r.safeXmlCharacters.realDoubleQuote),
                "_wrs_blackboard"in window && window._wrs_blackboard && (e = (e = (e = e.split(r.safeBadBlackboardCharacters.ltElement).join(r.safeGoodBlackboardCharacters.ltElement)).split(r.safeBadBlackboardCharacters.gtElement).join(r.safeGoodBlackboardCharacters.gtElement)).split(r.safeBadBlackboardCharacters.ampElement).join(r.safeGoodBlackboardCharacters.ampElement)),
                e = (e = (e = (e = (e = e.split(r.safeXmlCharacters.tagOpener).join(r.xmlCharacters.tagOpener)).split(r.safeXmlCharacters.tagCloser).join(r.xmlCharacters.tagCloser)).split(r.safeXmlCharacters.doubleQuote).join(r.xmlCharacters.doubleQuote)).split(r.safeXmlCharacters.ampersand).join(r.xmlCharacters.ampersand)).split(r.safeXmlCharacters.quote).join(r.xmlCharacters.quote);
                for (var t = "", i = null, n = 0; n < e.length; ++n) {
                    var s = e.charAt(n);
                    null == i ? "$" == s ? i = "" : t += s : ";" == s ? (t += "&" + i + ";",
                    i = null) : s.match(/([a-zA-Z0-9#._-] | '-')/) ? i += s : (t += "$" + i,
                    i = null,
                    --n)
                }
                return t
            }
        }, {
            key: "safeXmlEncode",
            value: function(e) {
                return e = (e = (e = (e = (e = e.split(r.xmlCharacters.tagOpener).join(r.safeXmlCharacters.tagOpener)).split(r.xmlCharacters.tagCloser).join(r.safeXmlCharacters.tagCloser)).split(r.xmlCharacters.doubleQuote).join(r.safeXmlCharacters.doubleQuote)).split(r.xmlCharacters.ampersand).join(r.safeXmlCharacters.ampersand)).split(r.xmlCharacters.quote).join(r.safeXmlCharacters.quote)
            }
        }, {
            key: "mathMLEntities",
            value: function(e) {
                for (var t = "", i = 0; i < e.length; ++i) {
                    var n = e.charAt(i);
                    if (e.codePointAt(i) > 128)
                        t += "&#" + e.codePointAt(i) + ";",
                        e.codePointAt(i) > 65535 && i++;
                    else if ("&" == n) {
                        var r = e.indexOf(";", i + 1);
                        if (r >= 0) {
                            var s = document.createElement("span");
                            s.innerHTML = e.substring(i, r + 1),
                            t += "&#" + v.fixedCharCodeAt(s.innerText || s.textContent, 0) + ";",
                            i = r
                        } else
                            t += n
                    } else
                        t += n
                }
                return t
            }
        }, {
            key: "addCustomEditorClassAttribute",
            value: function(e, t) {
                var i = ""
                  , n = e.indexOf("<math");
                if (0 == n) {
                    var r = e.indexOf(">");
                    if (-1 == e.indexOf("class"))
                        return i = e.substr(n, r) + ' class="wrs_' + t + '">',
                        i += e.substr(r + 1, e.length)
                }
                return e
            }
        }, {
            key: "removeCustomEditorClassAttribute",
            value: function(e, t) {
                return -1 == e.indexOf("class") || e.indexOf("wrs_" + t) ? e : -1 !== e.indexOf('class="wrs_' + t + '"') ? e.replace('class="wrs_' + t + '"', "") : e.replace("wrs_" + t, "")
            }
        }, {
            key: "insertSemanticsMathml",
            value: function(e, t, i) {
                if ("" == t)
                    return e;
                var n = '<annotation encoding="' + i + '">'
                  , r = e.indexOf(">")
                  , s = e.indexOf("</math>")
                  , o = e.substring(e.indexOf("<"), e.indexOf(">")).indexOf("math");
                if (-1 != r && -1 != s && o) {
                    var a = e.substring(r + 1, s);
                    if (0 != a.indexOf("<mrow>"))
                        var l = "<semantics><mrow>" + a + "</mrow>" + n + t + "</annotation></semantics>";
                    else
                        l = "<semantics>" + a + n + t + "</annotation></semantics>";
                    return e.replace(a, l)
                }
                return e
            }
        }, {
            key: "removeSemanticsMathml",
            value: function(e, t) {
                var i = '<annotation encoding="' + t + '">'
                  , n = e
                  , r = e.indexOf("<semantics>");
                if (-1 != r) {
                    var s = e.indexOf(i, r + "<semantics>".length);
                    -1 != s && (n = e.substring(0, r) + e.substring(r + "<semantics>".length, s) + "</math>")
                }
                return n
            }
        }, {
            key: "containClass",
            value: function(e, t) {
                var i = e.indexOf("class");
                if (-1 == i)
                    return !1;
                var n = e.indexOf(">", i);
                return -1 != e.substring(i, n).indexOf(t)
            }
        }]),
        e
    }();
    function a(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var l = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return function(e, t, i) {
            t && a(e.prototype, t),
            i && a(e, i)
        }(e, null, [{
            key: "addConfiguration",
            value: function(t) {
                Object.assign(e.properties, t)
            }
        }, {
            key: "get",
            value: function(t) {
                return !!e.properties.hasOwnProperty("_wrs_conf_" + t) && e.properties["_wrs_conf_" + t]
            }
        }, {
            key: "set",
            value: function(t, i) {
                e.properties[t] = i
            }
        }, {
            key: "update",
            value: function(t, i) {
                if (e.get(t)) {
                    var n = Object.assign(e.get(t), i);
                    e.set(t, n)
                } else
                    e.set(t, i)
            }
        }]),
        e
    }();
    function c(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    l.properties = {};
    var u = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.cache = []
        }
        return function(e, t, i) {
            t && c(e.prototype, t),
            i && c(e, i)
        }(e, [{
            key: "populate",
            value: function(e, t) {
                this.cache[e] = t
            }
        }, {
            key: "get",
            value: function(e) {
                return !!this.cache.hasOwnProperty(e) && this.cache[e]
            }
        }]),
        e
    }();
    function h(e) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function d(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var f = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return function(e, t, i) {
            t && d(e.prototype, t),
            i && d(e, i)
        }(e, null, [{
            key: "setServicePath",
            value: function(t, i) {
                e.serVicePaths[t] = i
            }
        }, {
            key: "getServicePath",
            value: function(t) {
                return e.serVicePaths[t]
            }
        }, {
            key: "getUrl",
            value: function(e, t) {
                var i = window.location.toString().substr(0, window.location.toString().lastIndexOf("/") + 1)
                  , n = v.createHttpRequest();
                return n ? (void 0 === h(t) || void 0 === t ? n.open("GET", e, !1) : "/" == e.substr(0, 1) || "http://" == e.substr(0, 7) || "https://" == e.substr(0, 8) ? n.open("POST", e, !1) : n.open("POST", i + e, !1),
                void 0 !== t ? (n.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"),
                n.send(v.httpBuildQuery(t))) : n.send(null),
                n.responseText) : (alert(Core.getStringManager().getString("browser_no_compatible")),
                "")
            }
        }, {
            key: "getService",
            value: function(t, i, n) {
                if (!0 === n)
                    var r = e.getServicePath(t) + "?" + i
                      , s = e.getUrl(r);
                else
                    r = e.getServicePath(t),
                    s = e.getUrl(r, i);
                return s
            }
        }]),
        e
    }();
    function m(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    f.serVicePaths = {};
    var g = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return function(e, t, i) {
            t && m(e.prototype, t),
            i && m(e, i)
        }(e, null, [{
            key: "getLatexFromMathML",
            value: function(t) {
                var i = e.cache
                  , n = {
                    service: "mathml2latex",
                    mml: t
                }
                  , r = JSON.parse(f.getService("service", n))
                  , s = "";
                return "ok" == r.status && (s = r.result.text,
                t = o.insertSemanticsMathml(t, s, "LaTeX"),
                i.populate(s, t)),
                s
            }
        }, {
            key: "getMathMLFromLatex",
            value: function(t, i) {
                var n = e.cache;
                if (e.cache.get(t))
                    return e.cache.get(t);
                var r = {
                    service: "latex2mathml",
                    latex: t
                };
                i && (r.saveLatex = "");
                var s, a = JSON.parse(f.getService("service", r));
                if ("ok" == a.status) {
                    var l = a.result.text;
                    -1 == (l = l.split("\r").join("").split("\n").join(" ")).indexOf("semantics") && -1 == l.indexOf("annotation") && (s = l = o.insertSemanticsMathml(l, t, "LaTeX")),
                    n.get(t) || n.populate(t, l)
                } else
                    s = "$$" + t + "$$";
                return s
            }
        }, {
            key: "parseMathmlToLatex",
            value: function(t, i) {
                for (var n, s, a, l = "", c = i.tagOpener + "math", u = i.tagOpener + "/math" + i.tagCloser, h = i.tagOpener + "annotation encoding=" + i.doubleQuote + "LaTeX" + i.doubleQuote + i.tagCloser, d = i.tagOpener + "/annotation" + i.tagCloser, f = t.indexOf(c), m = 0; -1 != f; ) {
                    if (l += t.substring(m, f),
                    -1 == (m = t.indexOf(u, f)) ? m = t.length - 1 : m += u.length,
                    -1 != (s = (n = t.substring(f, m)).indexOf(h))) {
                        s += h.length,
                        a = n.indexOf(d);
                        var g = n.substring(s, a);
                        i == r.safeXmlCharacters && (g = o.safeXmlDecode(g)),
                        l += "$$" + g + "$$",
                        e.cache.populate(g, n)
                    } else
                        l += n;
                    f = t.indexOf(c, m)
                }
                return l += t.substring(m, t.length)
            }
        }, {
            key: "getLatexFromTextNode",
            value: function(e, t, i) {
                void 0 !== i && null != i || (i = {
                    open: "$$",
                    close: "$$"
                });
                for (var n = e; n.previousSibling && 3 == n.previousSibling.nodeType; )
                    n = n.previousSibling;
                function r(e, t, n) {
                    for (var r = e.nodeValue.indexOf(n, t); -1 == r; ) {
                        if (!(e = e.nextSibling))
                            return null;
                        r = e.nodeValue ? e.nodeValue.indexOf(i.close) : -1
                    }
                    return {
                        node: e,
                        position: r
                    }
                }
                function s(e, t, i, n) {
                    if (e == i)
                        return t <= n;
                    for (; e && e != i; )
                        e = e.nextSibling;
                    return e == i
                }
                var o, a = {
                    node: n,
                    position: 0
                }, l = i.open.length;
                do {
                    var c;
                    if (null == (c = r(a.node, a.position, i.open)) || s(e, t, c.node, c.position))
                        return null;
                    if (null == (a = r(c.node, c.position + l, i.close)))
                        return null;
                    a.position += l
                } while (s(a.node, a.position, e, t));if (c.node == a.node)
                    o = c.node.nodeValue.substring(c.position + l, a.position - l);
                else {
                    o = c.node.nodeValue.substring(c.position + l, c.node.nodeValue.length);
                    var u = c.node;
                    do {
                        (u = u.nextSibling) == a.node ? o += a.node.nodeValue.substring(0, a.position - l) : o += u.nodeValue ? u.nodeValue : ""
                    } while (u != a.node)
                }
                return {
                    latex: o,
                    startNode: c.node,
                    startPosition: c.position,
                    endNode: a.node,
                    endPosition: a.position
                }
            }
        }]),
        e
    }();
    function p(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    g.cache = new u;
    var v = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return function(e, t, i) {
            t && p(e.prototype, t),
            i && p(e, i)
        }(e, null, [{
            key: "fireEvent",
            value: function(e, t) {
                if (document.createEvent)
                    return (i = document.createEvent("HTMLEvents")).initEvent(t, !0, !0),
                    !e.dispatchEvent(i);
                var i = document.createEventObject();
                return e.fireEvent("on" + t, i)
            }
        }, {
            key: "addEvent",
            value: function(e, t, i) {
                e.addEventListener ? e.addEventListener(t, i, !0) : e.attachEvent && e.attachEvent("on" + t, i)
            }
        }, {
            key: "removeEvent",
            value: function(e, t, i) {
                e.removeEventListener ? e.removeEventListener(t, i, !0) : e.detachEvent && e.detachEvent("on" + t, i)
            }
        }, {
            key: "addElementEvents",
            value: function(t, i, n, r) {
                i && e.addEvent(t, "dblclick", function(e) {
                    var t = e || window.event
                      , n = t.srcElement ? t.srcElement : t.target;
                    i(n, t)
                }),
                n && e.addEvent(t, "mousedown", function(e) {
                    var t = e || window.event
                      , i = t.srcElement ? t.srcElement : t.target;
                    n(i, t)
                }),
                r && e.addEvent(t, "mouseup", function(e) {
                    var t = e || window.event
                      , i = t.srcElement ? t.srcElement : t.target;
                    r(i, t)
                })
            }
        }, {
            key: "addClass",
            value: function(t, i) {
                e.containsClass(t, i) || (t.className += " " + i)
            }
        }, {
            key: "containsClass",
            value: function(e, t) {
                if (null == e || !("className"in e))
                    return !1;
                for (var i = e.className.split(" "), n = i.length - 1; n >= 0; --n)
                    if (i[n] == t)
                        return !0;
                return !1
            }
        }, {
            key: "removeClass",
            value: function(e, t) {
                for (var i = "", n = e.className.split(" "), r = 0; r < n.length; r++)
                    n[r] != t && (i += n[r] + " ");
                e.className = i.trim()
            }
        }, {
            key: "convertOldXmlinitialtextAttribute",
            value: function(e) {
                var t = "value="
                  , i = e.indexOf("xmlinitialtext")
                  , n = e.indexOf(t, i)
                  , r = e.charAt(n + t.length)
                  , s = n + t.length + 1
                  , o = e.indexOf(r, s)
                  , a = e.substring(s, o)
                  , l = a.split("«").join("§lt;");
                return l = (l = (l = l.split("»").join("§gt;")).split("&").join("§")).split("¨").join("§quot;"),
                e = e.split(a).join(l)
            }
        }, {
            key: "createElement",
            value: function(t, i, n) {
                var r;
                void 0 === i && (i = {}),
                void 0 === n && (n = document);
                try {
                    var s = "<" + t;
                    for (var o in i)
                        s += " " + o + '="' + e.htmlEntities(i[o]) + '"';
                    s += ">",
                    r = n.createElement(s)
                } catch (e) {
                    for (var o in r = n.createElement(t),
                    i)
                        r.setAttribute(o, i[o])
                }
                return r
            }
        }, {
            key: "createObject",
            value: function(t, i) {
                void 0 === i && (i = document),
                t = (t = (t = (t = t.split("<applet ").join('<span wirisObject="WirisApplet" ').split("<APPLET ").join('<span wirisObject="WirisApplet" ')).split("</applet>").join("</span>").split("</APPLET>").join("</span>")).split("<param ").join('<br wirisObject="WirisParam" ').split("<PARAM ").join('<br wirisObject="WirisParam" ')).split("</param>").join("</br>").split("</PARAM>").join("</br>");
                var n = e.createElement("div", {}, i);
                return n.innerHTML = t,
                function t(n) {
                    if (n.getAttribute && "WirisParam" == n.getAttribute("wirisObject")) {
                        for (var r = {}, s = 0; s < n.attributes.length; ++s)
                            null !== n.attributes[s].nodeValue && (r[n.attributes[s].nodeName] = n.attributes[s].nodeValue);
                        var o = e.createElement("param", r, i);
                        o.NAME && (o.name = o.NAME,
                        o.value = o.VALUE),
                        o.removeAttribute("wirisObject"),
                        n.parentNode.replaceChild(o, n)
                    } else if (n.getAttribute && "WirisApplet" == n.getAttribute("wirisObject")) {
                        for (r = {},
                        s = 0; s < n.attributes.length; ++s)
                            null !== n.attributes[s].nodeValue && (r[n.attributes[s].nodeName] = n.attributes[s].nodeValue);
                        var a = e.createElement("applet", r, i);
                        for (a.removeAttribute("wirisObject"),
                        s = 0; s < n.childNodes.length; ++s)
                            t(n.childNodes[s]),
                            "param" == n.childNodes[s].nodeName.toLowerCase() && (a.appendChild(n.childNodes[s]),
                            --s);
                        n.parentNode.replaceChild(a, n)
                    } else
                        for (s = 0; s < n.childNodes.length; ++s)
                            t(n.childNodes[s])
                }(n),
                n.firstChild
            }
        }, {
            key: "createObjectCode",
            value: function(t) {
                if (void 0 !== t && null != t) {
                    if (1 == t.nodeType) {
                        for (var i = "<" + t.tagName, n = 0; n < t.attributes.length; ++n)
                            t.attributes[n].specified && (i += " " + t.attributes[n].name + '="' + e.htmlEntities(t.attributes[n].value) + '"');
                        if (t.childNodes.length > 0) {
                            i += ">";
                            for (n = 0; n < t.childNodes.length; ++n)
                                i += e.createObject(t.childNodes[n]);
                            i += "</" + t.tagName + ">"
                        } else
                            "DIV" == t.nodeName || "SCRIPT" == t.nodeName ? i += "></" + t.tagName + ">" : i += "/>";
                        return i
                    }
                    return 3 == t.nodeType ? e.htmlEntities(t.nodeValue) : ""
                }
            }
        }, {
            key: "concatenateUrl",
            value: function(e, t) {
                var i = "";
                return e.indexOf("/") != e.length && 0 != t.indexOf("/") && (i = "/"),
                (e + i + t).replace(/([^:]\/)\/+/g, "$1")
            }
        }, {
            key: "htmlEntities",
            value: function(e) {
                return e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")
            }
        }, {
            key: "htmlEntitiesDecode",
            value: function(e) {
                return e.split("&quot;").join('"').split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&")
            }
        }, {
            key: "createHttpRequest",
            value: function() {
                if ("file://" == window.location.toString().substr(0, window.location.toString().lastIndexOf("/") + 1).substr(0, 7))
                    throw Core.getStringManager().getString("exception_cross_site");
                if ("undefined" != typeof XMLHttpRequest)
                    return new XMLHttpRequest;
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (e) {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {}
                }
                return !1
            }
        }, {
            key: "httpBuildQuery",
            value: function(t) {
                var i = "";
                for (var n in t)
                    null != t[n] && (i += e.urlEncode(n) + "=" + e.urlEncode(t[n]) + "&");
                return "&" == i.substring(i.length - 1) && (i = i.substring(0, i.length - 1)),
                i
            }
        }, {
            key: "propertiesToString",
            value: function(t) {
                var i = [];
                for (var n in t)
                    t.hasOwnProperty(n) && i.push(n);
                for (var r = i.length, s = 0; s < r; s++)
                    for (var o = s + 1; o < r; o++) {
                        var a = i[s]
                          , l = i[o];
                        e.compareStrings(a, l) > 0 && (i[s] = l,
                        i[o] = a)
                    }
                var c = "";
                for (s = 0; s < r; s++) {
                    c += n = i[s],
                    c += "=";
                    var u = t[n];
                    c += u = (u = (u = (u = u.replace("\\", "\\\\")).replace("\n", "\\n")).replace("\r", "\\r")).replace("\t", "\\t"),
                    c += "\n"
                }
                return c
            }
        }, {
            key: "compareStrings",
            value: function(t, i) {
                var n, r = t.length, s = i.length, o = r > s ? s : r;
                for (n = 0; n < o; n++) {
                    var a = e.fixedCharCodeAt(t, n) - e.fixedCharCodeAt(i, n);
                    if (0 != a)
                        return a
                }
                return t.length - i.length
            }
        }, {
            key: "fixedCharCodeAt",
            value: function(e, t) {
                t = t || 0;
                var i, n, r = e.charCodeAt(t);
                if (55296 <= r && r <= 56319) {
                    if (i = r,
                    n = e.charCodeAt(t + 1),
                    isNaN(n))
                        throw Core.getStringManager().getString("exception_high_surrogate");
                    return 1024 * (i - 55296) + (n - 56320) + 65536
                }
                return !(56320 <= r && r <= 57343) && r
            }
        }, {
            key: "urlToAssArray",
            value: function(e) {
                var t;
                if ((t = e.indexOf("?")) > 0) {
                    var i = e.substring(t + 1).split("&")
                      , n = new Object;
                    for (t = 0; t < i.length; t++) {
                        var r = i[t].split("=");
                        r.length > 1 && (n[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")))
                    }
                    return n
                }
                return new Object
            }
        }, {
            key: "urlEncode",
            value: function(e) {
                return encodeURIComponent(e)
            }
        }, {
            key: "getWIRISImageOutput",
            value: function(t, i, n) {
                var r = e.createObject(t);
                if (r) {
                    if (r.className == l.get("imageClassName") || r.getAttribute(l.get("imageMathmlAttribute"))) {
                        if (!i)
                            return t;
                        var s = r.getAttribute(l.get("imageMathmlAttribute"));
                        return null == s && (s = r.getAttribute("alt")),
                        n || (s = o.safeXmlDecode(s)),
                        s
                    }
                    if (r.className == l.get("CASClassName")) {
                        var a = r.getAttribute(l.get("CASMathmlAttribute"));
                        a = o.safeXmlDecode(a);
                        var c = e.createObject(a);
                        c.setAttribute("src", r.src);
                        var u = e.createObjectCode(c);
                        return n && (u = o.safeXmlEncode(u)),
                        u
                    }
                }
                return t
            }
        }, {
            key: "getNodeLength",
            value: function(e) {
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }
                ,
                t
            }(function(e) {
                if (3 == e.nodeType)
                    return e.nodeValue.length;
                if (1 == e.nodeType) {
                    var t = {
                        IMG: 1,
                        BR: 1
                    }[e.nodeName.toUpperCase()];
                    void 0 === t && (t = 0);
                    for (var i = 0; i < e.childNodes.length; ++i)
                        t += getNodeLength(e.childNodes[i]);
                    return t
                }
                return 0
            })
        }, {
            key: "getSelectedItem",
            value: function(t, i, n) {
                var r;
                if (i ? (r = t.contentWindow).focus() : (r = window,
                t.focus()),
                document.selection && !n) {
                    if ((c = r.document.selection.createRange()).parentElement) {
                        if (c.htmlText.length > 0)
                            return 0 == c.text.length ? e.getSelectedItem(t, i, !0) : null;
                        r.document.execCommand("InsertImage", !1, "#");
                        var s, o = c.parentElement();
                        return "IMG" != o.nodeName.toUpperCase() && (c.pasteHTML('<span id="wrs_openEditorWindow_temporalObject"></span>'),
                        o = r.document.getElementById("wrs_openEditorWindow_temporalObject")),
                        o.nextSibling && 3 == o.nextSibling.nodeType ? (a = o.nextSibling,
                        s = 0) : o.previousSibling && 3 == o.previousSibling.nodeType ? s = (a = o.previousSibling).nodeValue.length : (a = r.document.createTextNode(""),
                        o.parentNode.insertBefore(a, o),
                        s = 0),
                        o.parentNode.removeChild(o),
                        {
                            node: a,
                            caretPosition: s
                        }
                    }
                    return c.length > 1 ? null : {
                        node: c.item(0)
                    }
                }
                if (r.getSelection) {
                    var a, l = r.getSelection();
                    try {
                        var c = l.getRangeAt(0)
                    } catch (e) {
                        c = r.document.createRange()
                    }
                    if (3 == (a = c.startContainer).nodeType)
                        return {
                            node: a,
                            caretPosition: c.startOffset
                        };
                    if (a != c.endContainer)
                        return null;
                    if (1 == a.nodeType) {
                        var u = c.startOffset;
                        if (a.childNodes[u])
                            return {
                                node: a.childNodes[u]
                            }
                    }
                }
                return null
            }
        }, {
            key: "getSelectedItemOnTextarea",
            value: function(e) {
                var t = document.createTextNode(e.value)
                  , i = g.getLatexFromTextNode(t, e.selectionStart);
                return null === i ? null : {
                    node: t,
                    caretPosition: e.selectionStart,
                    startPosition: i.startPosition,
                    endPosition: i.endPosition
                }
            }
        }, {
            key: "getElementsByNameFromString",
            value: function(e, t, i) {
                var n = [];
                e = e.toLowerCase();
                t = t.toLowerCase();
                for (var r = e.indexOf("<" + t + " "); -1 != r; ) {
                    var s;
                    s = i ? ">" : "</" + t + ">";
                    var o = e.indexOf(s, r);
                    -1 != o ? (o += s.length,
                    n.push({
                        start: r,
                        end: o
                    })) : o = r + 1,
                    r = e.indexOf("<" + t + " ", o)
                }
                return n
            }
        }, {
            key: "decode64",
            value: function(e) {
                var t = "+".charCodeAt(0)
                  , i = "/".charCodeAt(0)
                  , n = "0".charCodeAt(0)
                  , r = "a".charCodeAt(0)
                  , s = "A".charCodeAt(0)
                  , o = "-".charCodeAt(0)
                  , a = "_".charCodeAt(0)
                  , l = e.charCodeAt(0);
                return l === t || l === o ? 62 : l === i || l === a ? 63 : l < n ? -1 : l < n + 10 ? l - n + 26 + 26 : l < s + 26 ? l - s : l < r + 26 ? l - r + 26 : void 0
            }
        }, {
            key: "b64ToByteArray",
            value: function(t, i) {
                var n;
                if (t.length % 4 > 0)
                    throw new Error("Invalid string. Length must be a multiple of 4");
                var r = new Array;
                if (i)
                    o = i;
                else
                    var s = "=" === t.charAt(t.length - 2) ? 2 : "=" === t.charAt(t.length - 1) ? 1 : 0
                      , o = s > 0 ? t.length - 4 : t.length;
                for (var a = 0; a < o; a += 4)
                    n = e.decode64(t.charAt(a)) << 18 | e.decode64(t.charAt(a + 1)) << 12 | e.decode64(t.charAt(a + 2)) << 6 | e.decode64(t.charAt(a + 3)),
                    r.push(n >> 16 & 255),
                    r.push(n >> 8 & 255),
                    r.push(255 & n);
                return s && (2 === s ? (n = e.decode64(t.charAt(a)) << 2 | e.decode64(t.charAt(a + 1)) >> 4,
                r.push(255 & n)) : 1 === s && (n = e.decode64(t.charAt(a)) << 10 | e.decode64(t.charAt(a + 1)) << 4 | e.decode64(t.charAt(a + 2)) >> 2,
                r.push(n >> 8 & 255),
                r.push(255 & n))),
                r
            }
        }, {
            key: "readInt32",
            value: function(e) {
                if (e.length < 4)
                    return !1;
                var t = e.splice(0, 4);
                return t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3] << 0
            }
        }, {
            key: "readByte",
            value: function(e) {
                return e.shift() << 0
            }
        }, {
            key: "readBytes",
            value: function(e, t, i) {
                return e.splice(t, i)
            }
        }, {
            key: "updateTextArea",
            value: function(e, t) {
                if (e && t)
                    if (e.focus(),
                    null != e.selectionStart) {
                        var i = e.selectionEnd;
                        e.value = e.value.substring(0, e.selectionStart) + t + e.value.substring(e.selectionEnd, e.value.length),
                        e.selectionEnd = i + t.length
                    } else {
                        document.selection.createRange().text = t
                    }
            }
        }, {
            key: "updateExistingTextOnTextarea",
            value: function(e, t, i, n) {
                e.focus(),
                e.value = e.value.substring(0, i) + t + e.value.substring(n, e.value.length),
                e.selectionEnd = i + t.length
            }
        }, {
            key: "addArgument",
            value: function(e, t, i) {
                return e + (e.indexOf("?") > 0 ? "&" : "?") + t + "=" + i
            }
        }]),
        e
    }();
    function b(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var y = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.listeners = []
        }
        return function(e, t, i) {
            t && b(e.prototype, t),
            i && b(e, i)
        }(e, [{
            key: "add",
            value: function(e) {
                this.listeners.push(e)
            }
        }, {
            key: "fire",
            value: function(e, t) {
                for (var i = 0; i < this.listeners.length && !t.cancelled; ++i)
                    this.listeners[i].eventName === e && this.listeners[i].callback(t);
                return t.defaultPrevented
            }
        }], [{
            key: "newListener",
            value: function(e, t) {
                var i = {};
                return i.eventName = e,
                i.callback = t,
                i
            }
        }]),
        e
    }();
    function _(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var w = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.strings = {},
            this.stringsLoaded = !1,
            this.listeners = new y
        }
        return function(e, t, i) {
            t && _(e.prototype, t),
            i && _(e, i)
        }(e, [{
            key: "addListener",
            value: function(e) {
                this.listeners.add(e)
            }
        }, {
            key: "getString",
            value: function(e) {
                if (this.stringsLoaded)
                    return e in this.strings ? this.strings[e] : e;
                setTimeout(this.getString.bind(this, e), 100)
            }
        }, {
            key: "loadStrings",
            value: function(e) {
                this.stringsLoaded || (this.strings = e,
                this.stringsLoaded = !0,
                this.listeners.fire("onLoad", {}))
            }
        }]),
        e
    }();
    function x(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var C = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.isContentChanged = !1,
            this.waitingForChanges = !1
        }
        return function(e, t, i) {
            t && x(e.prototype, t),
            i && x(e, i)
        }(e, [{
            key: "setIsContentChanged",
            value: function(e) {
                this.isContentChanged = e
            }
        }, {
            key: "getIsContentChanged",
            value: function() {
                return this.isContentChanged
            }
        }, {
            key: "setWaitingForChanges",
            value: function(e) {
                this.waitingForChanges = e
            }
        }, {
            key: "caretPositionChanged",
            value: function(e) {}
        }, {
            key: "clipboardChanged",
            value: function(e) {}
        }, {
            key: "contentChanged",
            value: function(e) {
                !0 === this.waitingForChanges && !1 === this.isContentChanged && (this.isContentChanged = !0)
            }
        }, {
            key: "styleChanged",
            value: function(e) {}
        }, {
            key: "transformationReceived",
            value: function(e) {}
        }]),
        e
    }();
    function E(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var k = function() {
        function e(t) {
            if (function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.contentManagerAttributes = {},
            !("editorAttributes"in t))
                throw new Error("ContentManager constructor error: editorAttributes property missed.");
            if (this.editorAttributes = t.editorAttributes,
            this.customEditors = null,
            "customEditors"in t && (this.customEditors = t.customEditors),
            this.environment = {},
            !("environment"in t))
                throw new Error("ContentManager constructor error: environment property missed");
            if (this.environment = t.environment,
            this.language = "",
            !("language"in t))
                throw new Error("ContentManager constructor error: language property missed");
            this.language = t.language,
            this.editorListener = new C,
            this.editor = null,
            this.ua = navigator.userAgent.toLowerCase(),
            this.deviceProperties = {},
            this.deviceProperties.isAndroid = this.ua.indexOf("android") > -1,
            this.deviceProperties.isIOS = this.ua.indexOf("ipad") > -1 || this.ua.indexOf("iphone") > -1,
            this.toolbar = null,
            this.modalDialogInstance = null,
            this.listeners = new y,
            this.mathML = null,
            this.isNewElement = !0,
            this.integrationModel = null,
            this.isEditorLoaded = !1
        }
        return function(e, t, i) {
            t && E(e.prototype, t),
            i && E(e, i)
        }(e, [{
            key: "addListener",
            value: function(e) {
                this.listeners.add(e)
            }
        }, {
            key: "setIntegrationModel",
            value: function(e) {
                this.integrationModel = e
            }
        }, {
            key: "setModalDialogInstance",
            value: function(e) {
                this.modalDialogInstance = e
            }
        }, {
            key: "insert",
            value: function() {
                this.updateTitle(this.modalDialogInstance),
                this.insertEditor(this.modalDialogInstance)
            }
        }, {
            key: "insertEditor",
            value: function() {
                if ("com"in window && "wiris"in window.com && "jsEditor"in window.com.wiris) {
                    if (this.editor = com.wiris.jsEditor.JsEditor.newInstance(this.editorAttributes),
                    this.editor.insertInto(this.modalDialogInstance.contentContainer),
                    this.editor.focus(),
                    this.modalDialogInstance.rtl && this.editor.action("rtl"),
                    this.editor.getEditorModel().isRTL() && (this.editor.element.style.direction = "rtl"),
                    this.editor.getEditorModel().addEditorListener(this.editorListener),
                    this.modalDialogInstance.deviceProperties.isIOS) {
                        setTimeout(function() {
                            this.modalDialogInstance.hideKeyboard()
                        }, 400);
                        var t = document.getElementsByClassName("wrs_formulaDisplay")[0];
                        v.addEvent(t, "focus", this.modalDialogInstance.openedIosSoftkeyboard.bind()),
                        v.addEvent(t, "blur", this.modalDialogInstance.closedIosSoftkeyboard.bind())
                    }
                    this.listeners.fire("onLoad", {}),
                    this.isEditorLoaded = !0
                } else
                    setTimeout(e.prototype.insertEditor.bind(this, this.modalDialogInstance), 100)
            }
        }, {
            key: "init",
            value: function() {
                for (var e = window.location.search.substring(1).split("&"), t = 0; t < e.length; t++) {
                    e[t].indexOf("v=") >= 0 && (version = e[t].substring(2))
                }
                var i = document.createElement("script");
                i.type = "text/javascript";
                var n = l.get("editorUrl")
                  , r = document.createElement("a");
                r.href = n;
                // 0 == window.location.href.indexOf("https://") && "http:" == r.protocol && (r.protocol = "https:"),
                // n = "80" == r.port || "443" == r.port ? r.protocol + "//" + r.hostname + "/" + r.pathname : r.protocol + "//" + r.hostname + ":" + r.port + "/" + r.pathname;
                var s = {};
                "editor"in this.environment ? s.editor = this.environment.editor : s.editor = "unknown",
                "mode"in this.environment ? s.mode = this.environment.mode : s.mode = l.get("saveMode"),
                "version"in this.environment ? s.version = this.environment.version : s.version = l.get("version"),
                i.src = n + "?lang=" + this.language + "&stats-editor=" + s.editor + "&stats-mode=" + s.mode + "&stats-version=" + s.version,
                document.getElementsByTagName("head")[0].appendChild(i)
            }
        }, {
            key: "setInitialContent",
            value: function() {
                this.isNewElement || this.setMathML(this.mathML)
            }
        }, {
            key: "setMathML",
            value: function(e, t) {
                void 0 === t && (t = !1),
                this.editor.setMathMLWithCallback(e, function() {
                    this.editorListener.setWaitingForChanges(!0)
                }
                .bind(this)),
                setTimeout(function() {
                    this.editorListener.setIsContentChanged(!1)
                }
                .bind(this), 500),
                t || this.onFocus()
            }
        }, {
            key: "onFocus",
            value: function() {
                void 0 !== this.editor && null != this.editor && this.editor.focus()
            }
        }, {
            key: "submitAction",
            value: function() {
                var e = this.editor.getMathML();
                if (null != this.customEditors.getActiveEditor())
                    e = o.addCustomEditorClassAttribute(e, this.customEditors.getActiveEditor().toolbar);
                else
                    for (var t in this.customEditors.editors)
                        e = o.removeCustomEditorClassAttribute(e, t);
                var i = o.mathMLEntities(e);
                this.integrationModel.updateFormula(i),
                this.customEditors.disable(),
                this.integrationModel.notifyWindowClosed(),
                this.setEmptyMathML(),
                this.customEditors.disable(),
                setTimeout(function() {
                    "undefined" != typeof _wrs_currentEditor && _wrs_currentEditor && _wrs_currentEditor.focus()
                }, 100)
            }
        }, {
            key: "setEmptyMathML",
            value: function() {
                this.deviceProperties.isAndroid || this.deviceProperties.isIOS ? this.editor.getEditorModel().isRTL() ? this.setMathML('<math dir="rtl"><semantics><annotation encoding="application/json">[]</annotation></semantics></math>"', !0) : this.setMathML('<math><semantics><annotation encoding="application/json">[]</annotation></semantics></math>"', !0) : this.editor.getEditorModel().isRTL() ? this.setMathML('<math dir="rtl"/>', !0) : this.setMathML("<math/>", !0)
            }
        }, {
            key: "onOpen",
            value: function() {
                this.isNewElement ? this.setEmptyMathML() : this.setMathML(this.mathML),
                this.updateToolbar(),
                this.onFocus()
            }
        }, {
            key: "updateToolbar",
            value: function() {
                var e;
                if (this.updateTitle(this.modalDialogInstance),
                e = this.customEditors.getActiveEditor()) {
                    var t = e.toolbar ? e.toolbar : _wrs_int_wirisProperties.toolbar;
                    null != this.toolbar && this.toolbar == t || this.setToolbar(t)
                } else {
                    t = this.getToolbar();
                    null != this.toolbar && this.toolbar == t || (this.setToolbar(t),
                    this.customEditors.disable())
                }
            }
        }, {
            key: "updateTitle",
            value: function() {
                var e;
                (e = this.customEditors.getActiveEditor()) ? this.modalDialogInstance.setTitle(e.title) : this.modalDialogInstance.setTitle("MathType")
            }
        }, {
            key: "getToolbar",
            value: function() {
                var e;
                return "general" == (e = "toolbar"in this.editorAttributes ? this.editorAttributes.toolbar : "general") && (e = "undefined" == typeof _wrs_int_wirisProperties || void 0 === _wrs_int_wirisProperties.toolbar ? "general" : _wrs_int_wirisProperties.toolbar),
                e
            }
        }, {
            key: "setToolbar",
            value: function(e) {
                this.toolbar = e,
                this.editor.setParams({
                    toolbar: this.toolbar
                })
            }
        }, {
            key: "hasChanges",
            value: function() {
                return !this.editor.isFormulaEmpty() && this.editorListener.getIsContentChanged()
            }
        }]),
        e
    }();
    function M(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var O = function() {
        function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.overlayElement = t.overlayElement,
            this.callbacks = t.callbacks,
            this.overlayWrapper = this.overlayElement.appendChild(document.createElement("div")),
            this.overlayWrapper.setAttribute("class", "wrs_popupmessage_overlay_envolture"),
            this.message = this.overlayWrapper.appendChild(document.createElement("div")),
            this.message.id = "wrs_popupmessage",
            this.message.setAttribute("class", "wrs_popupmessage_panel"),
            this.message.innerHTML = t.strings.message;
            var i = this.overlayWrapper.appendChild(document.createElement("div"));
            i.setAttribute("class", "wrs_popupmessage_overlay"),
            i.addEventListener("click", this.cancelAction.bind(this)),
            this.buttonArea = this.message.appendChild(document.createElement("div")),
            this.buttonArea.setAttribute("class", "wrs_popupmessage_button_area"),
            this.buttonArea.id = "wrs_popup_button_area";
            var n = {
                class: "wrs_button_accept",
                innerHTML: t.strings.submitString,
                id: "wrs_popup_accept_button"
            };
            this.closeButton = this.createButton(n, this.closeAction.bind(this)),
            this.buttonArea.appendChild(this.closeButton);
            var r = {
                class: "wrs_button_cancel",
                innerHTML: t.strings.cancelString,
                id: "wrs_popup_cancel_button"
            };
            this.cancelButton = this.createButton(r, this.cancelAction.bind(this)),
            this.buttonArea.appendChild(this.cancelButton)
        }
        return function(e, t, i) {
            t && M(e.prototype, t),
            i && M(e, i)
        }(e, [{
            key: "createButton",
            value: function(e, t) {
                var i = {};
                return (i = document.createElement("button")).setAttribute("id", e.id),
                i.setAttribute("class", e.class),
                i.innerHTML = e.innerHTML,
                i.addEventListener("click", t),
                i
            }
        }, {
            key: "show",
            value: function() {
                "block" != this.overlayWrapper.style.display ? (document.activeElement.blur(),
                window.focus(),
                this.overlayWrapper.style.display = "block") : (this.overlayWrapper.style.display = "none",
                _wrs_modalWindow.focus())
            }
        }, {
            key: "cancelAction",
            value: function() {
                this.overlayWrapper.style.display = "none",
                void 0 !== this.callbacks.cancelCallback && this.callbacks.cancelCallback()
            }
        }, {
            key: "closeAction",
            value: function() {
                this.cancelAction(),
                void 0 !== this.callbacks.closeCallback && this.callbacks.closeCallback()
            }
        }]),
        e
    }();
    function S(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var j = function() {
        function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.attributes = t;
            var i = navigator.userAgent.toLowerCase()
              , n = i.indexOf("android") > -1
              , r = i.indexOf("ipad") > -1 || i.indexOf("iphone") > -1;
            this.iosSoftkeyboardOpened = !1,
            this.iosMeasureUnit = -1 == i.indexOf("crios") ? "%" : "vh",
            this.iosDivHeight = "100" + this.iosMeasureUnit;
            var s = window.outerWidth
              , o = window.outerHeight
              , a = s > o
              , l = s < o
              , c = !!(a && this.attributes.height > o || l && this.attributes.width > s);
            this.instanceId = document.getElementsByClassName("wrs_modal_dialogContainer").length,
            this.deviceProperties = {
                orientation: a ? "landscape" : "portait",
                isAndroid: !!n,
                isIOS: !!r,
                isMobile: c,
                isDesktop: !c && !r && !n
            },
            this.properties = {
                created: !1,
                state: "",
                previousState: "",
                position: {
                    bottom: 0,
                    right: 10
                },
                size: {
                    height: 338,
                    width: 580
                }
            };
            var u = {
                class: "wrs_modal_overlay"
            };
            u.id = this.getElementId(u.class),
            this.overlay = v.createElement("div", u),
            (u = {}).class = "wrs_modal_title_bar",
            u.id = this.getElementId(u.class),
            this.titleBar = v.createElement("div", u),
            (u = {}).class = "wrs_modal_title",
            u.id = this.getElementId(u.class),
            this.title = v.createElement("div", u),
            this.title.innerHTML = "",
            (u = {}).class = "wrs_modal_close_button",
            u.id = this.getElementId(u.class),
            u.title = V.getStringManager().getString("close"),
            this.closeDiv = v.createElement("a", u),
            this.closeDiv.setAttribute("role", "button"),
            (u = {}).class = "wrs_modal_stack_button",
            u.id = this.getElementId(u.class),
            u.title = "Exit full-screen",
            this.stackDiv = v.createElement("a", u),
            this.stackDiv.setAttribute("role", "button"),
            (u = {}).class = "wrs_modal_maximize_button",
            u.id = this.getElementId(u.class),
            u.title = V.getStringManager().getString("fullscreen"),
            this.maximizeDiv = v.createElement("a", u),
            this.maximizeDiv.setAttribute("role", "button"),
            (u = {}).class = "wrs_modal_minimize_button",
            u.id = this.getElementId(u.class),
            u.title = V.getStringManager().getString("minimise"),
            this.minimizeDiv = v.createElement("a", u),
            this.minimizeDiv.setAttribute("role", "button"),
            (u = {}).class = "wrs_modal_dialogContainer",
            u.id = this.getElementId(u.class),
            this.container = v.createElement("div", u),
            (u = {}).class = "wrs_modal_wrapper",
            u.id = this.getElementId(u.class),
            this.wrapper = v.createElement("div", u),
            (u = {}).class = "wrs_content_container",
            u.id = this.getElementId(u.class),
            this.contentContainer = v.createElement("div", u),
            (u = {}).class = "wrs_modal_controls",
            u.id = this.getElementId(u.class),
            this.controls = v.createElement("div", u),
            (u = {}).class = "wrs_modal_buttons_container",
            u.id = this.getElementId(u.class),
            this.buttonContainer = v.createElement("div", u),
            this.submitButton = this.createSubmitButton({
                id: this.getElementId("wrs_modal_button_accept"),
                class: "wrs_modal_button_accept",
                innerHTML: V.getStringManager().getString("accept")
            }, this.submitAction.bind(this)),
            this.cancelButton = this.createSubmitButton({
                id: this.getElementId("wrs_modal_button_cancel"),
                class: "wrs_modal_button_cancel",
                innerHTML: V.getStringManager().getString("cancel")
            }, this.cancelAction.bind(this)),
            this.contentManager = null;
            var h = {
                cancelString: V.getStringManager().getString("cancel"),
                submitString: V.getStringManager().getString("close"),
                message: V.getStringManager().getString("close_modal_warning")
            }
              , d = {
                closeCallback: function() {
                    this.close()
                }
                .bind(this),
                cancelCallback: function() {
                    this.focus()
                }
                .bind(this)
            }
              , f = {
                overlayElement: this.container,
                callbacks: d,
                strings: h
            };
            this.popup = new O(f),
            this.rtl = !1,
            "rtl"in this.attributes && (this.rtl = this.attributes.rtl)
        }
        return function(e, t, i) {
            t && S(e.prototype, t),
            i && S(e, i)
        }(e, [{
            key: "setContentManager",
            value: function(e) {
                this.contentManager = e
            }
        }, {
            key: "getContentManager",
            value: function() {
                return this.contentManager
            }
        }, {
            key: "submitAction",
            value: function() {
                void 0 !== this.contentManager.submitAction && this.contentManager.submitAction(),
                this.close()
            }
        }, {
            key: "cancelAction",
            value: function() {
                void 0 === this.contentManager.hasChanges ? this.close() : this.contentManager.hasChanges() ? this.showPopUpMessage() : this.close()
            }
        }, {
            key: "createSubmitButton",
            value: function(e, t) {
                function i(e, t) {
                    this.element = document.createElement("button"),
                    this.element.id = e.id,
                    this.element.className = e.class,
                    this.element.innerHTML = e.innerHTML,
                    v.addEvent(this.element, "click", t)
                }
                return i.prototype.getElement = function() {
                    return this.element
                }
                ,
                new i(e,t).getElement()
            }
        }, {
            key: "create",
            value: function() {
                this.titleBar.appendChild(this.closeDiv),
                this.titleBar.appendChild(this.stackDiv),
                this.titleBar.appendChild(this.maximizeDiv),
                this.titleBar.appendChild(this.minimizeDiv),
                this.titleBar.appendChild(this.title),
                this.deviceProperties.isDesktop && this.container.appendChild(this.titleBar),
                this.wrapper.appendChild(this.contentContainer),
                this.wrapper.appendChild(this.controls),
                this.controls.appendChild(this.buttonContainer),
                this.buttonContainer.appendChild(this.submitButton),
                this.buttonContainer.appendChild(this.cancelButton),
                this.container.appendChild(this.wrapper),
                this.recalculateScrollBar(),
                document.body.appendChild(this.container),
                document.body.appendChild(this.overlay),
                this.deviceProperties.isDesktop ? (this.createModalWindowDesktop(),
                this.createResizeButtons(),
                this.addListeners(),
                l.get("modalWindowFullScreen") && this.maximize()) : this.deviceProperties.isAndroid ? this.createModalWindowAndroid() : this.deviceProperties.isIOS && !this.deviceProperties.isMobile && this.createModalWindowIos(),
                null != this.contentManager && this.contentManager.insert(this),
                this.properties.open = !0,
                this.properties.created = !0,
                this.isRTL() && (this.container.style.right = window.innerWidth - this.scrollbarWidth - this.container.offsetWidth + "px",
                this.container.className += " wrs_modal_rtl")
            }
        }, {
            key: "createResizeButtons",
            value: function() {
                this.resizerBR = document.createElement("div"),
                this.resizerBR.className = "wrs_bottom_right_resizer",
                this.resizerBR.innerHTML = "◢",
                this.resizerTL = document.createElement("div"),
                this.resizerTL.className = "wrs_bottom_left_resizer",
                this.container.appendChild(this.resizerBR),
                this.titleBar.appendChild(this.resizerTL),
                v.addEvent(this.resizerBR, "mousedown", this.activateResizeStateBR.bind(this)),
                v.addEvent(this.resizerTL, "mousedown", this.activateResizeStateTL.bind(this))
            }
        }, {
            key: "activateResizeStateBR",
            value: function(e) {
                this.initializeResizeProperties(e, !1)
            }
        }, {
            key: "activateResizeStateTL",
            value: function(e) {
                this.initializeResizeProperties(e, !0)
            }
        }, {
            key: "initializeResizeProperties",
            value: function(e, t) {
                v.addClass(document.body, "wrs_noselect"),
                v.addClass(this.overlay, "wrs_overlay_active"),
                this.resizeDataObject = {
                    x: this.eventClient(e).X,
                    y: this.eventClient(e).Y
                },
                this.initialWidth = parseInt(this.container.style.width),
                this.initialHeight = parseInt(this.container.style.height),
                t ? this.leftScale = !0 : (this.initialRight = parseInt(this.container.style.right),
                this.initialBottom = parseInt(this.container.style.bottom)),
                this.initialRight || (this.initialRight = 0),
                this.initialBottom || (this.initialBottom = 0),
                document.body.style["user-select"] = "none"
            }
        }, {
            key: "open",
            value: function() {
                if (this.removeClass("wrs_closed"),
                (this.deviceProperties.isIOS || this.deviceProperties.isAndroid || this.deviceProperties.isMobile) && (this.restoreWebsiteScale(),
                this.blockWebsiteScroll(),
                setTimeout(function() {
                    this.hideKeyboard()
                }
                .bind(this), 400)),
                this.properties.created ? (this.properties.open || (this.properties.open = !0,
                this.deviceProperties.isAndroid || this.deviceProperties.isIOS || this.restoreState()),
                this.deviceProperties.isDesktop && l.get("modalWindowFullScreen") && this.maximize(),
                this.deviceProperties.isIOS && (this.iosSoftkeyboardOpened = !1,
                this.setContainerHeight("100" + this.iosMeasureUnit))) : this.create(),
                !1 === this.contentManager.isEditorLoaded) {
                    var e = y.newListener("onLoad", function() {
                        this.contentManager.onOpen(this)
                    }
                    .bind(this));
                    this.contentManager.addListener(e)
                } else
                    this.contentManager.onOpen(this)
            }
        }, {
            key: "close",
            value: function() {
                this.removeClass("wrs_maximized"),
                this.removeClass("wrs_minimized"),
                this.removeClass("wrs_stack"),
                this.addClass("wrs_closed"),
                this.saveModalProperties(),
                this.unblockWebsiteScroll(),
                this.properties.open = !1
            }
        }, {
            key: "restoreWebsiteScale",
            value: function() {
                var e = document.querySelector("meta[name=viewport]")
                  , t = ["initial-scale=", "minimum-scale=", "maximum-scale="]
                  , i = ["1.0", "1.0", "1.0"]
                  , n = function(e, t) {
                    var n = e.getAttribute("content");
                    if (n) {
                        for (var r = n.split(","), s = "", o = [], a = 0; a < r.length; a++) {
                            for (var l = !1, c = 0; !l && c < t.length; )
                                r[a].indexOf(t[c]) && (l = !0),
                                c++;
                            l || o.push(r[a])
                        }
                        for (var u = 0; u < t.length; u++) {
                            var h = t[u] + i[u];
                            s += 0 == u ? h : "," + h
                        }
                        for (var d = 0; d < o.length; d++)
                            s += "," + o[d];
                        e.setAttribute("content", s),
                        e.setAttribute("content", n)
                    } else
                        e.setAttribute("content", "initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"),
                        e.removeAttribute("content")
                };
                e ? n(e, t) : (e = document.createElement("meta"),
                document.getElementsByTagName("head")[0].appendChild(e),
                n(e, t),
                e.remove())
            }
        }, {
            key: "blockWebsiteScroll",
            value: function() {
                document.body.addEventListener("touchmove", this.disableTouchMove, {
                    passive: !1
                })
            }
        }, {
            key: "unblockWebsiteScroll",
            value: function() {
                document.body.removeEventListener("touchmove", this.disableTouchMove, {
                    passive: !1
                })
            }
        }, {
            key: "disableTouchMove",
            value: function(e) {
                e.preventDefault()
            }
        }, {
            key: "isIE11",
            value: function() {
                return navigator.userAgent.search("Msie/") >= 0 || navigator.userAgent.search("Trident/") >= 0 || navigator.userAgent.search("Edge/") >= 0
            }
        }, {
            key: "isRTL",
            value: function() {
                return "ar" == this.attributes.language || "he" == this.attributes.language || this.rtl
            }
        }, {
            key: "addClass",
            value: function(e) {
                v.addClass(this.overlay, e),
                v.addClass(this.titleBar, e),
                v.addClass(this.overlay, e),
                v.addClass(this.container, e),
                v.addClass(this.contentContainer, e),
                v.addClass(this.stackDiv, e),
                v.addClass(this.minimizeDiv, e),
                v.addClass(this.maximizeDiv, e),
                v.addClass(this.wrapper, e)
            }
        }, {
            key: "removeClass",
            value: function(e) {
                v.removeClass(this.overlay, e),
                v.removeClass(this.titleBar, e),
                v.removeClass(this.overlay, e),
                v.removeClass(this.container, e),
                v.removeClass(this.contentContainer, e),
                v.removeClass(this.stackDiv, e),
                v.removeClass(this.minimizeDiv, e),
                v.removeClass(this.maximizeDiv, e),
                v.removeClass(this.wrapper, e)
            }
        }, {
            key: "createModalWindowDesktop",
            value: function() {
                this.addClass("wrs_modal_desktop"),
                this.stack()
            }
        }, {
            key: "createModalWindowAndroid",
            value: function() {
                this.addClass("wrs_modal_android"),
                window.addEventListener("resize", this.orientationChangeAndroidSoftkeyboard.bind(this))
            }
        }, {
            key: "createModalWindowIos",
            value: function() {
                this.addClass("wrs_modal_ios"),
                window.addEventListener("resize", this.orientationChangeIosSoftkeyboard.bind(this))
            }
        }, {
            key: "restoreState",
            value: function() {
                "maximized" == this.properties.state ? this.maximize() : "minimized" == this.properties.state ? (this.properties.state = this.properties.previousState,
                this.properties.previousState = "",
                this.minimize()) : this.stack()
            }
        }, {
            key: "stack",
            value: function() {
                this.properties.previousState = this.properties.state,
                this.properties.state = "stack",
                this.removeClass("wrs_maximized"),
                this.minimizeDiv.title = "Minimise",
                this.removeClass("wrs_minimized"),
                this.addClass("wrs_stack"),
                this.restoreModalProperties(),
                void 0 !== this.resizerBR && void 0 !== this.resizerTL && this.setResizeButtonsVisibility(),
                this.recalculateScrollBar(),
                this.recalculatePosition(),
                this.recalculateScale(),
                this.focus()
            }
        }, {
            key: "minimize",
            value: function() {
                this.saveModalProperties(),
                "minimized" == this.properties.state && "stack" == this.properties.previousState ? this.stack() : "minimized" == this.properties.state && "maximized" == this.properties.previousState ? this.maximize() : (this.container.style.height = "30px",
                this.container.style.width = "250px",
                this.container.style.bottom = "0px",
                this.container.style.right = "10px",
                this.removeListeners(),
                this.properties.previousState = this.properties.state,
                this.properties.state = "minimized",
                this.setResizeButtonsVisibility(),
                this.minimizeDiv.title = "Maximise",
                v.containsClass(this.overlay, "wrs_stack") ? this.removeClass("wrs_stack") : this.removeClass("wrs_maximized"),
                this.addClass("wrs_minimized"))
            }
        }, {
            key: "maximize",
            value: function() {
                this.saveModalProperties(),
                "maximized" != this.properties.state && (this.properties.previousState = this.properties.state,
                this.properties.state = "maximized"),
                this.setResizeButtonsVisibility(),
                v.containsClass(this.overlay, "wrs_minimized") ? (this.minimizeDiv.title = "Minimise",
                this.removeClass("wrs_minimized")) : v.containsClass(this.overlay, "wrs_stack") && (this.container.style.left = null,
                this.container.style.top = null,
                this.removeClass("wrs_stack")),
                this.addClass("wrs_maximized"),
                this.setSize(parseInt(.8 * window.innerHeight), parseInt(.8 * window.innerWidth));
                this.container.clientHeight > 700 && (this.container.style.height = "700px"),
                this.container.clientWidth > 1200 && (this.container.style.width = "1200px"),
                this.setPosition(window.innerHeight / 2 - this.container.offsetHeight / 2, window.innerWidth / 2 - this.container.offsetWidth / 2),
                this.recalculateScale(),
                this.recalculatePosition(),
                this.recalculateSize(),
                this.focus()
            }
        }, {
            key: "setSize",
            value: function(e, t) {
                this.container.style.height = e + "px",
                this.container.style.width = t + "px",
                this.recalculateSize()
            }
        }, {
            key: "setPosition",
            value: function(e, t) {
                this.container.style.bottom = e + "px",
                this.container.style.right = t + "px"
            }
        }, {
            key: "saveModalProperties",
            value: function() {
                "stack" == this.properties.state && (this.properties.position.bottom = parseInt(this.container.style.bottom),
                this.properties.position.right = parseInt(this.container.style.right),
                this.properties.size.width = parseInt(this.container.style.width),
                this.properties.size.height = parseInt(this.container.style.height))
            }
        }, {
            key: "restoreModalProperties",
            value: function() {
                "stack" == this.properties.state && (this.setPosition(this.properties.position.bottom, this.properties.position.right),
                this.setSize(this.properties.size.height, this.properties.size.width))
            }
        }, {
            key: "recalculateSize",
            value: function() {
                this.wrapper.style.width = this.container.clientWidth - 12 + "px",
                this.wrapper.style.height = this.container.clientHeight - 38 + "px",
                this.contentContainer.style.height = parseInt(this.wrapper.offsetHeight - 50) + "px"
            }
        }, {
            key: "setResizeButtonsVisibility",
            value: function() {
                "stack" == this.properties.state ? (this.resizerTL.style.visibility = "visible",
                this.resizerBR.style.visibility = "visible") : (this.resizerTL.style.visibility = "hidden",
                this.resizerBR.style.visibility = "hidden")
            }
        }, {
            key: "addListeners",
            value: function() {
                this.maximizeDiv.addEventListener("click", this.maximize.bind(this), !0),
                this.stackDiv.addEventListener("click", this.stack.bind(this), !0),
                this.minimizeDiv.addEventListener("click", this.minimize.bind(this), !0),
                this.closeDiv.addEventListener("click", this.cancelAction.bind(this)),
                v.addEvent(window, "mousedown", this.startDrag.bind(this)),
                v.addEvent(window, "mouseup", this.stopDrag.bind(this)),
                v.addEvent(window, "mousemove", this.drag.bind(this)),
                v.addEvent(window, "resize", this.onWindowResize.bind(this)),
                v.addEvent(window, "keydown", this.onKeyDown.bind(this))
            }
        }, {
            key: "removeListeners",
            value: function() {
                v.removeEvent(window, "mousedown", this.startDrag),
                v.removeEvent(window, "mouseup", this.stopDrag),
                v.removeEvent(window, "mousemove", this.drag),
                v.removeEvent(window, "resize", this.onWindowResize),
                v.removeEvent(window, "keydown", this.onKeyDown)
            }
        }, {
            key: "eventClient",
            value: function(e) {
                if (void 0 === e.clientX && e.changedTouches) {
                    var t = {
                        X: e.changedTouches[0].clientX,
                        Y: e.changedTouches[0].clientY
                    };
                    return t
                }
                return t = {
                    X: e.clientX,
                    Y: e.clientY
                }
            }
        }, {
            key: "startDrag",
            value: function(e) {
                "minimized" != this.properties.state && e.target === this.title && (void 0 !== this.dragDataObject && null !== this.dragDataObject || (e = e || event,
                this.dragDataObject = {
                    x: this.eventClient(e).X,
                    y: this.eventClient(e).Y
                },
                this.lastDrag = {
                    x: "0px",
                    y: "0px"
                },
                "" == this.container.style.right && (this.container.style.right = "0px"),
                "" == this.container.style.bottom && (this.container.style.bottom = "0px"),
                this.isIE11(),
                v.addClass(document.body, "wrs_noselect"),
                v.addClass(this.overlay, "wrs_overlay_active"),
                this.limitWindow = this.getLimitWindow()))
            }
        }, {
            key: "drag",
            value: function(e) {
                if (this.dragDataObject) {
                    e.preventDefault(),
                    e = e || event;
                    var t = Math.min(this.eventClient(e).Y, this.limitWindow.minPointer.y);
                    t = Math.max(this.limitWindow.maxPointer.y, t);
                    var i = Math.min(this.eventClient(e).X, this.limitWindow.minPointer.x)
                      , n = (i = Math.max(this.limitWindow.maxPointer.x, i)) - this.dragDataObject.x + "px"
                      , r = t - this.dragDataObject.y + "px";
                    this.lastDrag = {
                        x: n,
                        y: r
                    },
                    this.container.style.transform = "translate3d(" + n + "," + r + ",0)"
                }
                if (this.resizeDataObject) {
                    var s;
                    i = Math.min(this.eventClient(e).X, window.innerWidth - this.scrollbarWidth - 7),
                    t = Math.min(this.eventClient(e).Y, window.innerHeight - 7);
                    i < 0 && (i = 0),
                    t < 0 && (t = 0),
                    s = this.leftScale ? -1 : 1,
                    this.container.style.width = this.initialWidth + s * (i - this.resizeDataObject.x) + "px",
                    this.container.style.height = this.initialHeight + s * (t - this.resizeDataObject.y) + "px",
                    this.leftScale || (this.resizeDataObject.x - i - this.initialWidth < -580 ? this.container.style.right = this.initialRight - (i - this.resizeDataObject.x) + "px" : (this.container.style.right = this.initialRight + this.initialWidth - 580 + "px",
                    this.container.style.width = "580px"),
                    this.resizeDataObject.y - t < this.initialHeight - 338 ? this.container.style.bottom = this.initialBottom - (t - this.resizeDataObject.y) + "px" : (this.container.style.bottom = this.initialBottom + this.initialHeight - 338 + "px",
                    this.container.style.height = "338px")),
                    this.recalculateScale(),
                    this.recalculatePosition()
                }
            }
        }, {
            key: "getLimitWindow",
            value: function() {
                var e = window.innerWidth
                  , t = window.innerHeight
                  , i = this.container.offsetHeight + parseInt(this.container.style.bottom) - (t - (this.dragDataObject.y - window.pageXOffset))
                  , n = e - this.scrollbarWidth - (this.dragDataObject.x - window.pageXOffset) - parseInt(this.container.style.right)
                  , r = t - this.container.offsetHeight + i
                  , s = this.title.offsetHeight - (this.title.offsetHeight - i);
                return {
                    minPointer: {
                        x: e - n - this.scrollbarWidth,
                        y: r
                    },
                    maxPointer: {
                        x: this.container.offsetWidth - n,
                        y: s
                    }
                }
            }
        }, {
            key: "getScrollBarWidth",
            value: function() {
                var e = document.createElement("p");
                e.style.width = "100%",
                e.style.height = "200px";
                var t = document.createElement("div");
                t.style.position = "absolute",
                t.style.top = "0px",
                t.style.left = "0px",
                t.style.visibility = "hidden",
                t.style.width = "200px",
                t.style.height = "150px",
                t.style.overflow = "hidden",
                t.appendChild(e),
                document.body.appendChild(t);
                var i = e.offsetWidth;
                t.style.overflow = "scroll";
                var n = e.offsetWidth;
                return i == n && (n = t.clientWidth),
                document.body.removeChild(t),
                i - n
            }
        }, {
            key: "stopDrag",
            value: function() {
                (this.dragDataObject || this.resizeDataObject) && (this.container.style.transform = "",
                this.dragDataObject && (this.container.style.right = parseInt(this.container.style.right) - parseInt(this.lastDrag.x) + "px",
                this.container.style.bottom = parseInt(this.container.style.bottom) - parseInt(this.lastDrag.y) + "px"),
                this.focus(),
                document.body.style["user-select"] = "",
                this.isIE11(),
                v.removeClass(document.body, "wrs_noselect"),
                v.removeClass(this.overlay, "wrs_overlay_active")),
                this.dragDataObject = null,
                this.resizeDataObject = null,
                this.initialWidth = null,
                this.leftScale = null
            }
        }, {
            key: "onWindowResize",
            value: function() {
                this.recalculateScrollBar(),
                this.recalculatePosition(),
                this.recalculateScale()
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                void 0 !== e.key && !1 === e.repeat && ("Escape" !== e.key && "Esc" !== e.key || this.properties.open && this.cancelAction(),
                "Tab" === e.key && (this.submitButton.focus(),
                e.preventDefault()))
            }
        }, {
            key: "recalculatePosition",
            value: function() {
                this.container.style.right = Math.min(parseInt(this.container.style.right), window.innerWidth - this.scrollbarWidth - this.container.offsetWidth) + "px",
                parseInt(this.container.style.right) < 0 && (this.container.style.right = "0px"),
                this.container.style.bottom = Math.min(parseInt(this.container.style.bottom), window.innerHeight - this.container.offsetHeight) + "px",
                parseInt(this.container.style.bottom) < 0 && (this.container.style.bottom = "0px")
            }
        }, {
            key: "recalculateScale",
            value: function() {
                var e = !1;
                parseInt(this.container.style.width) > 580 ? (this.container.style.width = Math.min(parseInt(this.container.style.width), window.innerWidth - this.scrollbarWidth) + "px",
                e = !0) : (this.container.style.width = "580px",
                e = !0),
                parseInt(this.container.style.height) > 338 ? (this.container.style.height = Math.min(parseInt(this.container.style.height), window.innerHeight) + "px",
                e = !0) : (this.container.style.height = "338px",
                e = !0),
                e && this.recalculateSize()
            }
        }, {
            key: "recalculateScrollBar",
            value: function() {
                this.hasScrollBar = window.innerWidth > document.documentElement.clientWidth,
                this.hasScrollBar ? this.scrollbarWidth = this.getScrollBarWidth() : this.scrollbarWidth = 0
            }
        }, {
            key: "hideKeyboard",
            value: function() {
                document.activeElement.blur()
            }
        }, {
            key: "focus",
            value: function() {
                null != this.contentManager && void 0 !== this.contentManager.onFocus && this.contentManager.onFocus()
            }
        }, {
            key: "portraitMode",
            value: function() {
                return window.innerHeight > window.innerWidth
            }
        }, {
            key: "openedIosSoftkeyboard",
            value: function() {
                this.iosSoftkeyboardOpened || null == this.iosDivHeight || this.iosDivHeight != "100" + this.iosMeasureUnit || (this.portraitMode() ? this.setContainerHeight("63" + this.iosMeasureUnit) : this.setContainerHeight("40" + this.iosMeasureUnit)),
                this.iosSoftkeyboardOpened = !0
            }
        }, {
            key: "closedIosSoftkeyboard",
            value: function() {
                this.iosSoftkeyboardOpened = !1,
                this.setContainerHeight("100" + this.iosMeasureUnit)
            }
        }, {
            key: "orientationChangeIosSoftkeyboard",
            value: function() {
                this.iosSoftkeyboardOpened ? this.portraitMode() ? this.setContainerHeight("63" + this.iosMeasureUnit) : this.setContainerHeight("40" + this.iosMeasureUnit) : this.setContainerHeight("100" + this.iosMeasureUnit)
            }
        }, {
            key: "orientationChangeAndroidSoftkeyboard",
            value: function() {
                this.setContainerHeight("100%")
            }
        }, {
            key: "setContainerHeight",
            value: function(e) {
                this.iosDivHeight = e,
                this.wrapper.style.height = e
            }
        }, {
            key: "showPopUpMessage",
            value: function() {
                "minimized" == this.properties.state && this.stack(),
                this.popup.show()
            }
        }, {
            key: "setTitle",
            value: function(e) {
                this.title.innerHTML = e
            }
        }, {
            key: "getElementId",
            value: function(e) {
                return e + "[" + this.instanceId + "]"
            }
        }]),
        e
    }();
    function I(e) {
        return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function T(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var P = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return function(e, t, i) {
            t && T(e.prototype, t),
            i && T(e, i)
        }(e, null, [{
            key: "setImgSize",
            value: function(t, i, n) {
                if (n)
                    if ("svg" == l.get("imageFormat"))
                        if ("base64" != l.get("saveMode"))
                            var r = e.getMetricsFromSvgString(i);
                        else {
                            for (var s = t.src.substr(t.src.indexOf("base64,") + 7, t.src.length), o = "", a = v.b64ToByteArray(s, s.length), c = 0; c < a.length; c++)
                                o += String.fromCharCode(a[c]);
                            r = e.getMetricsFromSvgString(o)
                        }
                    else
                        s = t.src.substr(t.src.indexOf("base64,") + 7, t.src.length),
                        a = v.b64ToByteArray(s, 88),
                        r = e.getMetricsFromBytes(a);
                else
                    r = v.urlToAssArray(i);
                var u = r.cw;
                if (u) {
                    var h = r.ch
                      , d = r.cb
                      , f = r.dpi;
                    f && (u = 96 * u / f,
                    h = 96 * h / f,
                    d = 96 * d / f),
                    t.width = u,
                    t.height = h,
                    t.style.verticalAlign = "-" + (h - d) + "px"
                }
            }
        }, {
            key: "fixAfterResize",
            value: function(t) {
                if (t.removeAttribute("style"),
                t.removeAttribute("width"),
                t.removeAttribute("height"),
                t.style.maxWidth = "none",
                -1 != t.src.indexOf("data:image"))
                    if ("svg" == l.get("imageFormat")) {
                        var i = decodeURIComponent(t.src.substring(32, t.src.length));
                        e.setImgSize(t, i, !0)
                    } else {
                        var n = t.src.substring(22, t.src.length);
                        e.setImgSize(t, n, !0)
                    }
                else
                    e.setImgSize(t, t.src)
            }
        }, {
            key: "getMetricsFromSvgString",
            value: function(e) {
                var t = e.indexOf('height="')
                  , i = e.indexOf('"', t + 8, e.length)
                  , n = e.substring(t + 8, i);
                t = e.indexOf('width="'),
                i = e.indexOf('"', t + 7, e.length);
                var r = e.substring(t + 7, i);
                t = e.indexOf('wrs:baseline="'),
                i = e.indexOf('"', t + 14, e.length);
                var s = e.substring(t + 14, i);
                if (I("undefined" != r)) {
                    var o = new Array;
                    return o.cw = r,
                    o.ch = n,
                    void 0 !== s && (o.cb = s),
                    o
                }
            }
        }, {
            key: "getMetricsFromBytes",
            value: function(e) {
                v.readBytes(e, 0, 8);
                for (; e.length >= 4; ) {
                    v.readInt32(e);
                    var t = v.readInt32(e);
                    if (1229472850 == t) {
                        var i = v.readInt32(e)
                          , n = v.readInt32(e);
                        v.readInt32(e),
                        v.readByte(e)
                    } else if (1650545477 == t)
                        var r = v.readInt32(e);
                    else if (1883789683 == t) {
                        var s = v.readInt32(e);
                        s = Math.round(s / 39.37),
                        v.readInt32(e),
                        v.readByte(e)
                    }
                    v.readInt32(e)
                }
                if (void 0 !== i) {
                    var o = new Array;
                    return o.cw = i,
                    o.ch = n,
                    o.dpi = s,
                    r && (o.cb = r),
                    o
                }
            }
        }]),
        e
    }();
    function A(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var L = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return function(e, t, i) {
            t && A(e.prototype, t),
            i && A(e, i)
        }(e, null, [{
            key: "mathMLToAccessible",
            value: function(t, i, n) {
                var r;
                if (o.containClass(t, "wrs_chemistry") && (n.mode = "chemistry"),
                e.cache.get(t))
                    r = e.cache.get[t];
                else {
                    n.service = "mathml2accessible",
                    n.lang = i;
                    var s = JSON.parse(f.getService("service", n));
                    "error" != s.status ? (r = s.result.text,
                    e.cache.populate(t, r)) : r = V.getStringManager().getString("error_convert_accessibility")
                }
                return r
            }
        }]),
        e
    }();
    L.cache = new u;
    i(0);
    function N(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var B = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return function(e, t, i) {
            t && N(e.prototype, t),
            i && N(e, i)
        }(e, null, [{
            key: "mathmlToImgObject",
            value: function(t, i, n, r) {
                var s = t.createElement("img");
                s.align = "middle",
                s.style.maxWidth = "none";
                var a = n || {};
                if (a.mml = i,
                a.lang = r,
                a.metrics = "true",
                a.centerbaseline = "false",
                "base64" == l.get("saveMode") && "default" == l.get("editMode") && (a.base64 = !0),
                s.className = l.get("imageClassName"),
                -1 != i.indexOf('class="')) {
                    var c = i.substring(i.indexOf('class="') + 'class="'.length, i.length);
                    c = (c = c.substring(0, c.indexOf('"'))).substring(4, c.length),
                    s.setAttribute("data-custom-editor", c)
                }
                if (!l.get("wirisPluginPerformance") || "xml" != l.get("saveMode") && "safeXml" != l.get("saveMode")) {
                    u = e.createImageSrc(i, a);
                    s.setAttribute(l.get("imageMathmlAttribute"), o.safeXmlEncode(i)),
                    s.src = u,
                    P.setImgSize(s, u, "base64" == l.get("saveMode") && "default" == l.get("editMode")),
                    l.get("enableAccessibility") && (s.alt = L.mathMLToAccessible(i, r, a))
                } else {
                    var u;
                    if ("warning" == (u = JSON.parse( e.createShowImageSrc(a, r)  )).status)
                        try {
                            u = JSON.parse(f.getService("showimage", a))
                        } catch (e) {
                            return
                        }
                    "png" == (u = u.result).format ? s.src = "data:image/png;base64," + u.content : s.src = "data:image/svg+xml;charset=utf8," + v.urlEncode(u.content),
                    s.setAttribute(l.get("imageMathmlAttribute"), o.safeXmlEncode(i)),
                    P.setImgSize(s, u.content, !0),
                    l.get("enableAccessibility") && (void 0 === u.alt ? s.alt = L.mathMLToAccessible(i, r, a) : s.alt = u.alt)
                }
                return void 0 !== e.observer && e.observer.observe(s),
                s.setAttribute("role", "math"),
                s
            }
        }, {
            key: "createImageSrc",
            value: function(e, t) {
                "base64" == l.get("saveMode") && "default" == l.get("editMode") && (t.base64 = !0);
                var i = f.getService("createimage", t);
                if (-1 != i.indexOf("@BASE@")) {
                    var n = V.getServiceProvider().getServicePath("createimage").split("/");
                    n.pop(),
                    i = i.split("@BASE@").join(n.join("/"))
                }
                return i
            }
        }, {
            key: "initParse",
            value: function(t, i) {
                return t = e.initParseSaveMode(t, i),
                e.initParseEditMode(t)
            }
        }, {
            key: "initParseSaveMode",
            value: function(t, i) {
                l.get("saveMode") && (t = g.parseMathmlToLatex(t, r.safeXmlCharacters),
                t = g.parseMathmlToLatex(t, r.xmlCharacters),
                t = e.parseSafeAppletsToObjects(t),
                t = e.parseMathmlToImg(t, r.safeXmlCharacters, i),
                t = e.parseMathmlToImg(t, r.xmlCharacters, i),
                "base64" == l.get("saveMode") && "image" == l.get("editMode") && (t = e.codeImgTransform(t, "base642showimage")));
                for (var n = v.getElementsByNameFromString(t, "applet", !1), s = 0, a = 0; a < n.length; ++a) {
                    var c = t.substring(n[a].start + s, n[a].end + s);
                    if (-1 != c.indexOf(' class="' + l.get("CASClassName") + '"') || -1 != c.toUpperCase().indexOf("WIRIS")) {
                        if (-1 != c.indexOf(' src="'))
                            var u = c.indexOf(' src="') + ' src="'.length
                              , h = c.indexOf('"', u)
                              , d = c.substring(u, h);
                        else {
                            if ("undefined" != typeof _wrs_conf_pluginBasePath)
                                d = _wrs_conf_pluginBasePath + "/integration/showcasimage.php?formula=noimage";
                            else
                                d = "";
                            if (-1 == c.indexOf(' class="' + l.get("CASClassName") + '"')) {
                                var f = c.indexOf(">")
                                  , m = c.substring(0, f)
                                  , p = m.split(" width=").join(' class="Wiriscas" width=');
                                c = (c = c.split(m).join(p)).split("'").join('"')
                            }
                        }
                        var b = '<img align="middle" class="' + l.get("CASClassName") + '" ' + l.get("CASMathmlAttribute") + '="' + o.safeXmlEncode(c) + '" src="' + d + '" />';
                        t = t.substring(0, n[a].start + s) + b + t.substring(n[a].end + s),
                        s += b.length - (n[a].end - n[a].start)
                    }
                }
                return t
            }
        }, {
            key: "initParseEditMode",
            value: function(e) {
                if (-1 != l.get("parseModes").indexOf("latex"))
                    for (var t = v.getElementsByNameFromString(e, "img", !0), i = 'encoding="LaTeX">', n = 0, r = 0; r < t.length; ++r) {
                        var s = e.substring(t[r].start + n, t[r].end + n);
                        if (-1 != s.indexOf(' class="' + l.get("imageClassName") + '"')) {
                            var a = " " + l.get("imageMathmlAttribute") + '="'
                              , c = s.indexOf(a);
                            if (-1 == c && (a = ' alt="',
                            c = s.indexOf(a)),
                            -1 != c) {
                                c += a.length;
                                var u = s.indexOf('"', c)
                                  , h = o.safeXmlDecode(s.substring(c, u))
                                  , d = h.indexOf(i);
                                if (-1 != d) {
                                    d += i.length;
                                    var f = h.indexOf("</annotation>", d)
                                      , m = h.substring(d, f)
                                      , g = "$$" + v.htmlEntitiesDecode(m) + "$$";
                                    e = e.substring(0, t[r].start + n) + g + e.substring(t[r].end + n),
                                    n += g.length - (t[r].end - t[r].start)
                                }
                            }
                        }
                    }
                return e
            }
        }, {
            key: "endParse",
            value: function(t) {
                return t = e.endParseEditMode(t),
                e.endParseSaveMode(t)
            }
        }, {
            key: "endParseEditMode",
            value: function(e) {
                if (-1 != l.get("parseModes").indexOf("latex")) {
                    for (var t = "", i = 0, n = e.indexOf("$$"); -1 != n; ) {
                        if (t += e.substring(i, n),
                        -1 != (i = e.indexOf("$$", n + 2))) {
                            var r = e.substring(n + 2, i);
                            r = v.htmlEntitiesDecode(r),
                            t += g.getMathMLFromLatex(r, !0),
                            i += 2
                        } else
                            t += "$$",
                            i = n + 2;
                        n = e.indexOf("$$", i)
                    }
                    e = t += e.substring(i, e.length)
                }
                return e
            }
        }, {
            key: "endParseSaveMode",
            value: function(t) {
                return l.get("saveMode") && ("safeXml" == l.get("saveMode") ? t = e.codeImgTransform(t, "img2mathml") : "xml" == l.get("saveMode") ? t = e.codeImgTransform(t, "img2mathml") : "base64" == l.get("saveMode") && "image" == l.get("editMode") && (t = e.codeImgTransform(t, "img264"))),
                t
            }
        }, {
            key: "createShowImageSrc",
            value: function(e, t) {
                var i = []
                  , n = "mml,color,centerbaseline,zoom,dpi,fontSize,fontFamily,defaultStretchy,backgroundColor,format".split(",");
                for (var r in n) {
                    var s = n[r];
                    void 0 !== e[s] && (i[s] = e[s])
                }
                var o = {};
                for (var r in e)
                    "mml" != r && (o[r] = e[r]);
                return o.formula = com.wiris.js.JsPluginTools.md5encode(v.propertiesToString(i)),
                o.lang = void 0 === t ? "en" : t,
                o.version = l.get("version"),
                f.getService("showimage", v.httpBuildQuery(o), !0)
                // return {
                //     "status": "ok",
                //     "result": {
                //     "width": "147",
                //     "height": "50",
                //     "baseline": "34",
                //     "alt": "x equals fraction numerator negative b plus-or-minus square root of b squared minus 4 a c end root over denominator 2 a end fraction",
                //     "content": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:wrs=\"http://www.wiris.com/xml/cvs-extension\" height=\"50\" width=\"147\" wrs:baseline=\"34\"><!--MathML: <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi><mo>&#xB1;</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math>--><defs><style type=\"text/css\">@font-face{font-family:'ae2ef524fbf3d9fe611d5a8e90fefdc';src:url(data:font/truetype;charset=utf-8;base64,AAEAAAAMAIAAAwBAT1MvMjv/KqIAAADMAAAATmNtYXDgWxEdAAABHAAAADRjdnQgAAAABwAAAVAAAAAEZ2x5ZoYrxVAAAAFUAAAA0WhlYWQIlgkyAAACKAAAADZoaGVhC0UKCQAAAmAAAAAkaG10eByEAIUAAAKEAAAACGxvY2EAAAVKAAACjAAAAAxtYXhwBIoEWwAAApgAAAAgbmFtZXSF9ZsAAAK4AAABrXBvc3QDogHPAAAEaAAAACBwcmVwukanGAAABIgAAAANAAAEwAGQAAUAAAgACAAAAAAACAAIAAAAAAAAAQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg8AMGe/57AAAHPgGyAAAAAAACAAEAAQAAABQAAwABAAAAFAAEACAAAAAEAAQAAQAAAGH//wAAAGH///+gAAEAAAAAAAAABwACAFUAAAMAA6sAAwAHAAAzESERJSERIVUCq/2rAgD+AAOr/FVVAwAAAwAt/3QEAwRZAAsAFwAdADsYAbAdELAD1LADELAU1LAUELAc1LAcELAJ1LAcELAOPLAJELAbPACwBhCwEdSwBhCwANSwABCwF9QwMQEiABEWEjMyEjcQJgYWAwIGIyImNTQ2MwE1BhMjEgIBs/7fFvWy07oDhYZwFgxOhVmysoUB7YwEslEEWf7f/t71/t8BM+MBp5yyLf6d/wBlyJzfsvxZjF0B5/1eAAAAAAEAAAABAAC98jIEXw889QADCAD/////0r1fff/////SvV99AAH+9QQDBkMAAAAKAAIAAQAAAAAAAQAABz7+TgAAC7gAAf/8BAMAAQAAAAAAAAAAAAAAAAAAAAIDUgBVBEwALQAAAAAAAAAoAAAA0QABAAAAAgAeAAMAAAAAAAIAgAQAAAAAAAQAADsAAAAAAAAAFQECAAAAAAAAAAEAFgAAAAAAAAAAAAIADgAWAAAAAAAAAAMANAAkAAAAAAAAAAQAFgBYAAAAAAAAAAUAFgBuAAAAAAAAAAYACwCEAAAAAAAAAAgAHACPAAEAAAAAAAEAFgAAAAEAAAAAAAIADgAWAAEAAAAAAAMANAAkAAEAAAAAAAQAFgBYAAEAAAAAAAUAFgBuAAEAAAAAAAYACwCEAAEAAAAAAAgAHACPAAMAAQQJAAEAFgAAAAMAAQQJAAIADgAWAAMAAQQJAAMANAAkAAMAAQQJAAQAFgBYAAMAAQQJAAUAFgBuAAMAAQQJAAYACwCEAAMAAQQJAAgAHACPAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBSAGUAZwB1AGwAYQByAE0AYQB0AGgAcwAgAEYAbwByACAATQBvAHIAZQAgAE0AYQB0AGgAIABGAG8AbgB0ACAAMgBNAGEAdABoACAARgBvAG4AdAAgADIAVgBlAHIAcwBpAG8AbgAgADEALgAwTWF0aF9Gb250XzIATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAAAAAMAAAAAAAADnwHPAAAAAAAAAAAAAAAAAAAAAAAAAAC5ByIAAI2FGACyAAAAAAAA)format('truetype');font-weight:normal;font-style:normal;}@font-face{font-family:'math19244194cbc38427b5aca056d4d';src:url(data:font/truetype;charset=utf-8;base64,AAEAAAAMAIAAAwBAT1MvMi7iBAIAAADMAAAATmNtYXDErB0vAAABHAAAAERjdnQgDVUNBwAAAWAAAAA6Z2x5ZguHXwYAAAGcAAABmGhlYWQMCZu1AAADNAAAADZoaGVhCGsLjwAAA2wAAAAkaG10eD6dRccAAAOQAAAAEGxvY2EAHNQvAAADoAAAABRtYXhwBTwFPgAAA7QAAAAgbmFtZaBxlY4AAAPUAAABn3Bvc3QB9wD6AAAFdAAAACBwcmVwa1uragAABZQAAAAUAAADOgGQAAUAAAQABAAAAAAABAAEAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAg1UADev96AAAD6ACWAAAAAAACAAEAAQAAABQAAwABAAAAFAAEADAAAAAIAAgAAgAAAD0AsSIS//8AAAA9ALEiEv///8T/Ud3xAAEAAAAAAAAAAAAAAVQDLACAAQAAVgAqAlgCHgEOASwCLABaAYACgACgANQAgAAAAAAAAAArAFUAgACrANUBAAErAAcAAAACAFUAAAMAA6sAAwAHAAAzESERJSERIVUCq/2rAgD+AAOr/FVVAwAAAgCAAOsC1QIVAAMABwBlGAGwCBCwBtSwBhCwBdSwCBCwAdSwARCwANSwBhCwBzywBRCwBDywARCwAjywABCwAzwAsAgQsAbUsAYQsAfUsAcQsAHUsAEQsALUsAYQsAU8sAcQsAQ8sAEQsAA8sAIQsAM8MTATITUhHQEhNYACVf2rAlUBwFXVVVUAAgCA//8CgAKrAAsADwBlGAGwEBCwD9SwDxCwADywABCwAdSwARCwBNSwBBCwBdSwARCwCjywBBCwBzywBRCwDjwAsBAQsA/UsA8QsAzUsAwQsAnUsAkQsArUsAoQsAHUsAEQsALUsAEQsAQ8sAoQsAc8MDETMzUzFTMVIxUjJwcRIRUhgNZV1dVVAdUCAP4AAdXW1lbU1QH+1VUAAQCAAVUC1QGrAAMAMBgBsAQQsQAD9rADPLECB/WwATyxBQPmALEAABMQsQAG5bEAARMQsAE8sQMF9bACPBMhFSGAAlX9qwGrVgABAAAAAQAA7Hbb7l8PPPUAAwQA/////9Q5K/X/////1Dkr9QAA/yAEgAOrAAAACgACAAEAAAAAAAEAAAPo/2oAAAu4AAD/tgSAAAEAAAAAAAAAAAAAAAAAAAAEA1IAVQNWAIADAACAA1YAgAAAAAAAAAAoAAAAsgAAAU4AAAGYAAEAAAAEAF4ABQAAAAAAAgCABAAAAAAABAAA3gAAAAAAAAAVAQIAAAAAAAAAAQASAAAAAAAAAAAAAgAOABIAAAAAAAAAAwAwACAAAAAAAAAABAASAFAAAAAAAAAABQAWAGIAAAAAAAAABgAJAHgAAAAAAAAACAAcAIEAAQAAAAAAAQASAAAAAQAAAAAAAgAOABIAAQAAAAAAAwAwACAAAQAAAAAABAASAFAAAQAAAAAABQAWAGIAAQAAAAAABgAJAHgAAQAAAAAACAAcAIEAAwABBAkAAQASAAAAAwABBAkAAgAOABIAAwABBAkAAwAwACAAAwABBAkABAASAFAAAwABBAkABQAWAGIAAwABBAkABgAJAHgAAwABBAkACAAcAIEATQBhAHQAaAAgAEYAbwBuAHQAUgBlAGcAdQBsAGEAcgBNAGEAdABoAHMAIABGAG8AcgAgAE0AbwByAGUAIABNAGEAdABoACAARgBvAG4AdABNAGEAdABoACAARgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADBNYXRoX0ZvbnQATQBhAHQAaABzACAARgBvAHIAIABNAG8AcgBlAAADAAAAAAAAAfQA+gAAAAAAAAAAAAAAAAAAAAAAAAAAuQcRAACNhRgAsgAAABUUE7EAAT8=)format('truetype');font-weight:normal;font-style:normal;}</style></defs><text font-family=\"Arial\" font-size=\"16\" font-style=\"italic\" text-anchor=\"middle\" x=\"4.5\" y=\"34\">x</text><text font-family=\"math19244194cbc38427b5aca056d4d\" font-size=\"16\" text-anchor=\"middle\" x=\"17.5\" y=\"34\">=</text><line stroke=\"#000000\" stroke-linecap=\"square\" stroke-width=\"1\" x1=\"28.5\" x2=\"143.5\" y1=\"28.5\" y2=\"28.5\"/><text font-family=\"math19244194cbc38427b5aca056d4d\" font-size=\"16\" text-anchor=\"middle\" x=\"36.5\" y=\"22\">&#x2212;</text><text font-family=\"Arial\" font-size=\"16\" font-style=\"italic\" text-anchor=\"middle\" x=\"47.5\" y=\"22\">b</text><text font-family=\"math19244194cbc38427b5aca056d4d\" font-size=\"16\" text-anchor=\"middle\" x=\"60.5\" y=\"22\">&#xB1;</text><polyline fill=\"none\" points=\"12,-20 11,-20 5,0 2,-8\" stroke=\"#000000\" stroke-linecap=\"square\" stroke-width=\"1\" transform=\"translate(67.5,24.5)\"/><polyline fill=\"none\" points=\"5,0 2,-8 0,-7\" stroke=\"#000000\" stroke-linecap=\"square\" stroke-width=\"1\" transform=\"translate(67.5,24.5)\"/><line stroke=\"#000000\" stroke-linecap=\"square\" stroke-width=\"1\" x1=\"79.5\" x2=\"141.5\" y1=\"4.5\" y2=\"4.5\"/><text font-family=\"Arial\" font-size=\"16\" font-style=\"italic\" text-anchor=\"middle\" x=\"85.5\" y=\"22\">b</text><text font-family=\"Arial\" font-size=\"12\" text-anchor=\"middle\" x=\"94.5\" y=\"15\">2</text><text font-family=\"math19244194cbc38427b5aca056d4d\" font-size=\"16\" text-anchor=\"middle\" x=\"105.5\" y=\"22\">&#x2212;</text><text font-family=\"Arial\" font-size=\"16\" text-anchor=\"middle\" x=\"117.5\" y=\"22\">4</text><text font-family=\"ae2ef524fbf3d9fe611d5a8e90fefdc\" font-size=\"16\" font-style=\"italic\" text-anchor=\"middle\" x=\"126.5\" y=\"22\">a</text><text font-family=\"Arial\" font-size=\"16\" font-style=\"italic\" text-anchor=\"middle\" x=\"135.5\" y=\"22\">c</text><text font-family=\"Arial\" font-size=\"16\" text-anchor=\"middle\" x=\"81.5\" y=\"45\">2</text><text font-family=\"ae2ef524fbf3d9fe611d5a8e90fefdc\" font-size=\"16\" font-style=\"italic\" text-anchor=\"middle\" x=\"90.5\" y=\"45\">a</text></svg>",
                //     "format": "svg"
                //     }
                // }
            }
        }, {
            key: "codeImgTransform",
            value: function(t, i) {
                for (var n = "", r = 0, s = /<img/gi, a = s.source.length; s.test(t); ) {
                    var c = s.lastIndex - a;
                    n += t.substring(r, c);
                    for (var u = c + 1; u < t.length && r <= c; ) {
                        var h = t.charAt(u);
                        if ('"' == h || "'" == h) {
                            var d = t.indexOf(h, u + 1);
                            u = -1 == d ? t.length : d
                        } else
                            ">" == h && (r = u + 1);
                        ++u
                    }
                    if (r < c)
                        return n += t.substring(c, t.length);
                    var f, m, g = t.substring(c, r), p = v.createObject(g), b = p.getAttribute(l.get("imageMathmlAttribute"));
                    if ("base642showimage" == i)
                        null == b && (b = p.getAttribute("alt")),
                        b = o.safeXmlDecode(b),
                        g = e.mathmlToImgObject(document, b, null, null),
                        n += v.createObjectCode(g);
                    else if ("img2mathml" == i)
                        l.get("saveMode") && ("safeXml" == l.get("saveMode") ? (f = !0,
                        m = !0) : "xml" == l.get("saveMode") && (f = !0,
                        m = !1)),
                        n += v.getWIRISImageOutput(g, f, m);
                    else if ("img264" == i) {
                        null == b && (b = p.getAttribute("alt")),
                        b = o.safeXmlDecode(b);
                        var y = {
                            base64: "true"
                        };
                        g = e.mathmlToImgObject(document, b, y, null),
                        P.setImgSize(g, g.src, !0),
                        n += v.createObjectCode(g)
                    }
                }
                return n += t.substring(r, t.length)
            }
        }, {
            key: "parseSafeAppletsToObjects",
            value: function(e) {
                for (var t, i = "", n = r.safeXmlCharacters.tagOpener + "APPLET", s = r.safeXmlCharacters.tagOpener + "/APPLET" + r.safeXmlCharacters.tagCloser, a = e.toUpperCase(), l = a.indexOf(n), c = 0; -1 != l; )
                    i += e.substring(c, l),
                    -1 == (c = a.indexOf(s, l)) ? c = e.length - 1 : c += s.length,
                    t = v.convertOldXmlinitialtextAttribute(e.substring(l, c)),
                    i += o.safeXmlDecode(t),
                    l = a.indexOf(n, c);
                return i += e.substring(c, e.length)
            }
        }, {
            key: "parseMathmlToImg",
            value: function(t, i, n) {
                for (var s = "", a = i.tagOpener + "math", c = i.tagOpener + "/math" + i.tagCloser, u = t.indexOf(a), h = 0; -1 != u; ) {
                    s += t.substring(h, u);
                    var d = t.indexOf(l.get("imageMathmlAttribute"));
                    if (-1 == (h = t.indexOf(c, u)) ? h = t.length - 1 : h += -1 != d ? t.indexOf("/>", u) : c.length,
                    o.isMathmlInAttribute(t, u) || -1 != d)
                        s += t.substring(u, h);
                    else {
                        var f = t.substring(u, h);
                        f = i == r.safeXmlCharacters ? o.safeXmlDecode(f) : o.mathMLEntities(f),
                        s += v.createObjectCode(e.mathmlToImgObject(document, f, null, n))
                    }
                    u = t.indexOf(a, h)
                }
                return s += t.substring(h, t.length)
            }
        }]),
        e
    }();
    if ("undefined" != typeof MutationObserver) {
        var D = new MutationObserver(function(e) {
            e.forEach(function(e) {
                e.oldValue === l.get("imageClassName") && "class" === e.attributeName && -1 == e.target.className.indexOf(l.get("imageClassName")) && (e.target.className = l.get("imageClassName"))
            })
        }
        );
        B.observer = Object.create(D),
        B.observer.Config = {
            attributes: !0,
            attributeOldValue: !0
        },
        B.observer.observe = function(e) {
            this.__proto__.observe(e, this.Config)
        }
    }
    function R(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var z = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.editors = [],
            this.activeEditor = "default"
        }
        return function(e, t, i) {
            t && R(e.prototype, t),
            i && R(e, i)
        }(e, [{
            key: "addEditor",
            value: function(e, t) {
                var i = {};
                i.name = t.name,
                i.toolbar = t.toolbar,
                i.icon = t.icon,
                i.confVariable = t.confVariable,
                i.title = t.title,
                i.tooltip = t.tooltip,
                this.editors[e] = i
            }
        }, {
            key: "add",
            value: function(e, t) {
                this.customEditors[e] = t
            }
        }, {
            key: "enable",
            value: function(e) {
                this.activeEditor = e
            }
        }, {
            key: "disable",
            value: function() {
                this.activeEditor = "default"
            }
        }, {
            key: "getActiveEditor",
            value: function() {
                return "default" != this.activeEditor ? this.editors[this.activeEditor] : null
            }
        }]),
        e
    }()
      , F = {
        _wrs_conf_imageClassName: "Wirisformula",
        _wrs_conf_CASClassName: "Wiriscas"
    };
    function W(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var H = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.cancelled = !1,
            this.defaultPrevented = !1
        }
        return function(e, t, i) {
            t && W(e.prototype, t),
            i && W(e, i)
        }(e, [{
            key: "cancel",
            value: function() {
                this.cancelled = !0
            }
        }, {
            key: "preventDefault",
            value: function() {
                this.defaultPrevented = !0
            }
        }]),
        e
    }();
    function X(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var U = function() {
        function e(t) {
            if (function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.language = "en",
            this.configurationService = "",
            !("configurationService"in t))
                throw new Error("IntegrationModel constructor error: configurationService property missed.");
            if (this.configurationService = t.configurationService,
            this.version = "version"in t ? t.version : "",
            this.target = null,
            !("target"in t))
                throw new Error("IntegrationModel constructor error: target property missed.");
            if (this.target = t.target,
            !("scriptName"in t))
                throw new Error("IntegrationModel constructor error: scriptName property missed.");
            this.scriptName = t.scriptName,
            this.callbackMethodArguments = {},
            "callbackMethodArguments"in t && (this.callbackMethodArguments = t.callbackMethodArguments),
            this.environment = {},
            "environment"in t && (this.environment = t.environment),
            this.langFolderName = "lang",
            "langFolderName"in t && (this.langFolderName = t.langFolderName),
            this.isIframe = !1,
            null != this.target && (this.isIframe = "IFRAME" === this.target.tagName.toUpperCase()),
            this.editorObject = null,
            "editorObject"in t && (this.editorObject = t.editorObject),
            this.rtl = !1,
            "rtl"in t && (this.rtl = t.rtl),
            this.temporalImageResizing = !1,
            this.core = null,
            this.listeners = new y
        }
        return function(e, t, i) {
            t && X(e.prototype, t),
            i && X(e, i)
        }(e, [{
            key: "init",
            value: function() {
                this.language = this.getLanguage();
                var e = y.newListener("onLoad", function() {
                    this.callbackFunction(this.callbackMethodArguments)
                }
                .bind(this));
                this.setCore(new V),
                this.core.addListener(e),
                this.core.language = this.language,
                this.core.jsinit(this.configurationService),
                this.core.setEnvironment(this.environment)
            }
        }, {
            key: "getPath",
            value: function() {
                for (var e = document.getElementsByTagName("script"), t = "", i = 0; i < e.length; i++) {
                    var n = e[i].src.lastIndexOf(this.scriptName);
                    n >= 0 && (t = e[i].src.substr(0, n - 1))
                }
                return t
            }
        }, {
            key: "setLanguage",
            value: function(e) {
                this.language = e
            }
        }, {
            key: "setCore",
            value: function(e) {
                this.core = e,
                e.setIntegrationModel(this)
            }
        }, {
            key: "getCore",
            value: function() {
                return this.core
            }
        }, {
            key: "setTarget",
            value: function(e) {
                this.target = e,
                this.isIframe = "IFRAME" === this.target.tagName.toUpperCase()
            }
        }, {
            key: "setEditorObject",
            value: function(e) {
                this.editorObject = e
            }
        }, {
            key: "openNewFormulaEditor",
            value: function() {
                this.core.editionProperties.isNewElement = !0,
                this.core.openModalDialog(this.target, this.isIframe)
            }
        }, {
            key: "openExistingFormulaEditor",
            value: function() {
                this.core.editionProperties.isNewElement = !1,
                this.core.openModalDialog(this.target, this.isIframe)
            }
        }, {
            key: "updateFormula",
            value: function(e) {
                this.isIframe ? this.core.updateFormula(this.target.contentWindow, this.target.contentWindow, e, null) : this.core.updateFormula(this.target, window, e, null)
            }
        }, {
            key: "getSelection",
            value: function() {
                return this.isIframe ? (this.target.contentWindow.focus(),
                this.target.contentWindow.getSelection()) : (this.target.focus(),
                window.getSelection())
            }
        }, {
            key: "addEvents",
            value: function() {
                var e = this.isIframe ? this.target.contentWindow.document : this.target;
                v.addElementEvents(e, function(e, t) {
                    this.doubleClickHandler(e, t)
                }
                .bind(this), function(e, t) {
                    this.mousedownHandler(e, t)
                }
                .bind(this), function(e, t) {
                    this.mouseupHandler(e, t)
                }
                .bind(this))
            }
        }, {
            key: "doubleClickHandler",
            value: function(e) {
                if ("img" == e.nodeName.toLowerCase()) {
                    if (this.core.getCustomEditors().disable(),
                    e.hasAttribute("data-custom-editor")) {
                        var t = e.getAttribute("data-custom-editor");
                        this.core.getCustomEditors().enable(t)
                    }
                    v.containsClass(e, l.get("imageClassName")) && (this.core.editionProperties.temporalImage = e,
                    this.core.editionProperties.isNewElement = !0,
                    this.openExistingFormulaEditor())
                }
            }
        }, {
            key: "mouseupHandler",
            value: function() {
                this.temporalImageResizing && setTimeout(function() {
                    P.fixAfterResize(this.temporalImageResizing)
                }
                .bind(this), 10)
            }
        }, {
            key: "mousedownHandler",
            value: function(e) {
                "img" == e.nodeName.toLowerCase() && v.containsClass(e, l.get("imageClassName")) && (this.temporalImageResizing = e)
            }
        }, {
            key: "getLanguage",
            value: function() {
                return this.getBrowserLanguage()
            }
        }, {
            key: "getBrowserLanguage",
            value: function() {
                return navigator.userLanguage ? navigator.userLanguage.substring(0, 2) : navigator.language ? navigator.language.substring(0, 2) : "en"
            }
        }, {
            key: "callbackFunction",
            value: function() {
                var e = y.newListener("onTargetReady", function() {
                    this.addEvents(this.target)
                }
                .bind(this));
                this.listeners.add(e)
            }
        }, {
            key: "notifyWindowClosed",
            value: function() {}
        }, {
            key: "getMathmlFromTextNode",
            value: function(e, t) {}
        }, {
            key: "fillNonLatexNode",
            value: function(e, t, i) {}
        }, {
            key: "getSelectedItem",
            value: function(e, t) {}
        }]),
        e
    }();
    function $(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    U.prototype.getMathmlFromTextNode = void 0,
    U.prototype.fillNonLatexNode = void 0,
    U.prototype.getSelectedItem = void 0;
    var V = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.language = "en",
            this.editMode = "images",
            this.modalDialog = null,
            this.customEditors = new z;
            this.customEditors.addEditor("chemistry", {
                name: "Chemistry",
                toolbar: "chemistry",
                icon: "chem.png",
                confVariable: "chemEnabled",
                title: "ChemType",
                tooltip: "Insert a chemistry formula - ChemType"
            }),
            this.environment = {},
            this.editionProperties = {
                isNewElement: !0,
                temporalImage: null,
                latexRange: null,
                range: null
            },
            this.integrationModel = null,
            this.contentManager = null,
            this.browser = function() {
                var e = navigator.userAgent;
                return e.search("Edge/") >= 0 ? "EDGE" : e.search("Chrome/") >= 0 ? "CHROME" : e.search("Trident/") >= 0 ? "IE" : e.search("Firefox/") >= 0 ? "FIREFOX" : e.search("Safari/") >= 0 ? "SAFARI" : void 0
            }(),
            this.listeners = new y
        }
        return function(e, t, i) {
            t && $(e.prototype, t),
            i && $(e, i)
        }(e, [
        {
            key: "init",
            value: function(e) {
                this.load(e)
            }
        }, {
            key: "jsinit",
            value: function(e) {
                this.jsload(e)
            }
        }, {
            key: "setIntegrationModel",
            value: function(e) {
                this.integrationModel = e
            }
        }, {
            key: "setEnvironment",
            value: function(e) {
                "editor"in e && (this.environment.editor = e.editor),
                "mode"in e && (this.environment.mode = e.mode),
                "version"in e && (this.environment.version = e.version)
            }
        }, {
            key: "getModalDialog",
            value: function() {
                return this.modalDialog
            }
        }, {
            key: "load",
            value: function(t) {
                var i = "undefined" != typeof XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                this.integrationPath = 0 == t.indexOf("/") || 0 == t.indexOf("http") ? t : v.concatenateUrl(this.integrationModel.getPath(), t),
                i.open("GET", this.integrationPath, !1),
                i.onload = function(t) {
                    var n = this;
                    if (4 === i.readyState) {
                        var r = JSON.parse(i.responseText);
                        Object.keys(r);
                        if (l.addConfiguration(r),
                        l.addConfiguration(F),
                        this.loadServicePaths(),
                        this.loadLangFile(),
                        this.loadCSS(),
                        null === e.stringManager) {
                            var s = y.newListener("onLoad", function() {
                                n.listeners.fire("onLoad", {})
                            });
                            e.stringManager.addListener(s)
                        } else
                            this.listeners.fire("onLoad", {})
                    }
                }
                .bind(this),
                i.send(null)
            }
        },{
            key: "jsload",
            value: function(t) {
                var n = this;
                if (t) {
                    var r = JSON.parse(JSON.stringify(t));
                    Object.keys(r);
                    if (l.addConfiguration(r),
                    l.addConfiguration(F),
                    this.loadServicePaths(),
                    this.loadLangFile(),
                    this.loadCSS(),
                    null === e.stringManager) {
                        var s = y.newListener("onLoad", function() {
                            n.listeners.fire("onLoad", {})
                        });
                        e.stringManager.addListener(s)
                    } else
                        this.listeners.fire("onLoad", {})
                }
            }
        }, {
            key: "loadServicePaths",
            value: function() {
                this.integrationPath = "https://anishmprasad.com/ckeditor_wiris/integration/serviceEndpoint.php";
                var e = this.integrationPath.replace("serviceEndpoint", "createimage")
                  , t = this.integrationPath.replace("serviceEndpoint", "showimage")
                  , i = (e = this.integrationPath.replace("serviceEndpoint", "createimage"),
                this.integrationPath.replace("serviceEndpoint", "getmathml"))
                  , n = this.integrationPath.replace("serviceEndpoint", "service");
                if (0 == this.integrationPath.indexOf("/")) {
                    var r = this.getServerPath();
                    t = r + t,
                    e = r + e,
                    i = r + i,
                    n = r + n
                }
                f.setServicePath("showimage", t),
                f.setServicePath("createimage", e),
                f.setServicePath("service", n),
                f.setServicePath("getmathml", i)
            }
        }, {
            key: "getServerPath",
            value: function() {
                var e = this.integrationModel.getPath()
                  , t = e.indexOf("/", e.indexOf("/") + 2);
                return e.substr(0, t)
            }
        }, {
            key: "loadLangFile",
            value: function() {
                var t = "ar,ca,cs,da,de,en,es,et,eu,fi,fr,gl,he,hr,hu,it,ja,ko,nl,no,pl,pt,pt_br,ru,sv,tr,zh,el".split(",")
                  , i = this.language;
                -1 == t.indexOf(i) && (i = i.substr(0, 2)),
                -1 == t.indexOf(i) && (i = "en");
                var n = document.createElement("script");
                n.type = "text/javascript",
                n.src = CKEDITOR.plugins.getPath("ckeditor_wiris") + this.integrationModel.langFolderName + "/strings.js",
                n.onload = function() {
                    e.getStringManager().loadStrings(wrs_strings)
                },
                document.getElementsByTagName("head")[0].appendChild(n)
            }
        }, {
            key: "loadCSS",
            value: function() {
                var e = document.createElement("link");
                e.setAttribute("rel", "stylesheet"),
                e.setAttribute("type", "text/css"),
                e.setAttribute("href", CKEDITOR.plugins.getPath("ckeditor_wiris")+"core/styles.css"),
                document.getElementsByTagName("head")[0].appendChild(e)
            }
        }, {
            key: "addListener",
            value: function(e) {
                this.listeners.add(e)
            }
        }, {
            key: "updateFormula",
            value: function(t, i, n, r) {
                var s = new H;
                for (var o in s.mathml = n,
                s.wirisProperties = {},
                r)
                    s.wirisProperties[o] = r[o];
                if (s.language = this.language,
                s.editMode = this.editMode,
                !this.listeners.fire("onBeforeFormulaInsertion", s) && !e.globalListeners.fire("onBeforeFormulaInsertion", s)) {
                    n = s.mathml,
                    r = s.wirisProperties;
                    var a = new H;
                    if (a.editMode = this.editMode,
                    a.windowTarget = i,
                    a.focusElement = t,
                    0 == n.length)
                        this.insertElementOnSelection(null, t, i);
                    else if ("latex" == this.editMode)
                        a.latex = g.getLatexFromMathML(n),
                        this.integrationModel.fillNonLatexNode && void 0 === a.latex ? this.integrationModel.fillNonLatexNode(a, i, n) : a.node = i.document.createTextNode("$$" + a.latex + "$$"),
                        this.insertElementOnSelection(a.node, t, i);
                    else if ("iframes" == this.editMode) {
                        var l = wrs_mathmlToIframeObject(i, n);
                        this.insertElementOnSelection(l, t, i)
                    } else
                        a.node = B.mathmlToImgObject(i.document, n, r, this.language),
                        this.insertElementOnSelection(a.node, t, i);
                    this.listeners.fire("onAfterFormulaInsertion", a) || e.globalListeners.fire("onAfterFormulaInsertion", a)
                }
            }
        }, {
            key: "placeCaretAfterNode",
            value: function(e) {
                this.integrationModel.getSelection();
                var t = e.ownerDocument;
                if (void 0 !== t.getSelection) {
                    var i = t.createRange();
                    i.setStartAfter(e),
                    i.collapse(!0);
                    var n = t.getSelection();
                    n.removeAllRanges(),
                    n.addRange(i),
                    t.body.focus()
                }
            }
        }, {
            key: "insertElementOnSelection",
            value: function(e, t, i) {
                if (this.editionProperties.isNewElement)
                    if ("textarea" == t.type)
                        v.updateTextArea(t, e.textContent);
                    else if (document.selection && 0 == document.getSelection) {
                        var n = i.document.selection.createRange();
                        if (i.document.execCommand("InsertImage", !1, e.src),
                        "parentElement"in n || (i.document.execCommand("delete", !1),
                        n = i.document.selection.createRange(),
                        i.document.execCommand("InsertImage", !1, e.src)),
                        "parentElement"in n) {
                            var r = n.parentElement();
                            "IMG" == r.nodeName.toUpperCase() ? r.parentNode.replaceChild(e, r) : n.pasteHTML(v.createObjectCode(e))
                        }
                    } else {
                        var s, o = this.integrationModel.getSelection();
                        this.editionProperties.range ? (s = this.editionProperties.range,
                        this.editionProperties.range = null) : s = o.getRangeAt(0),
                        s.deleteContents();
                        var a = s.startContainer
                          , l = s.startOffset;
                        3 == a.nodeType ? (a = a.splitText(l)).parentNode.insertBefore(e, a) : 1 == a.nodeType && a.insertBefore(e, a.childNodes[l]),
                        this.placeCaretAfterNode(e)
                    }
                else if (this.editionProperties.latexRange)
                    if (document.selection && 0 == document.getSelection)
                        this.editionProperties.isNewElement = !0,
                        this.editionProperties.latexRange.select(),
                        this.insertElementOnSelection(e, t, i);
                    else {
                        this.editionProperties.latexRange.startContainer;
                        this.editionProperties.latexRange.deleteContents(),
                        this.editionProperties.latexRange.insertNode(e),
                        this.placeCaretAfterNode(e)
                    }
                else if ("textarea" == t.type) {
                    var c;
                    c = void 0 !== this.integrationModel.getSelectedItem ? this.integrationModel.getSelectedItem(t, !1) : v.getSelectedItemOnTextarea(t),
                    v.updateExistingTextOnTextarea(t, e.textContent, c.startPosition, c.endPosition)
                } else
                    e || this.editionProperties.temporalImage.parentNode.removeChild(this.editionProperties.temporalImage),
                    this.editionProperties.temporalImage.parentNode.replaceChild(e, this.editionProperties.temporalImage),
                    this.placeCaretAfterNode(e)
            }
        }, {
            key: "openModalDialog",
            value: function(e, t) {
                this.editMode = "images";
                try {
                    if (t) {
                        e.contentWindow.focus();
                        var i = e.contentWindow.getSelection();
                        this.editionProperties.range = i.getRangeAt(0)
                    } else {
                        e.focus();
                        var n = getSelection();
                        this.editionProperties.range = n.getRangeAt(0)
                    }
                } catch (e) {
                    this.editionProperties.range = null
                }
                var r;
                if (void 0 === t && (t = !0),
                this.editionProperties.latexRange = null,
                e)
                    if (r = void 0 !== this.integrationModel.getSelectedItem ? this.integrationModel.getSelectedItem(e, t) : v.getSelectedItem(e, t)) {
                        if (!r.caretPosition && v.containsClass(r.node, l.get("imageClassName")))
                            this.editionProperties.temporalImage = r.node,
                            this.editionProperties.isNewElement = !1;
                        else if (3 === r.node.nodeType)
                            if (this.integrationModel.getMathmlFromTextNode) {
                                var s = this.integrationModel.getMathmlFromTextNode(r.node, r.caretPosition);
                                s && (this.editMode = "latex",
                                this.editionProperties.isNewElement = !1,
                                this.editionProperties.temporalImage = document.createElement("img"),
                                this.editionProperties.temporalImage.setAttribute(l.get("imageMathmlAttribute"), o.safeXmlEncode(s)))
                            } else {
                                var a = g.getLatexFromTextNode(r.node, r.caretPosition);
                                if (a) {
                                    var c = g.getMathMLFromLatex(a.latex);
                                    this.editMode = "latex",
                                    this.editionProperties.isNewElement = !1,
                                    this.editionProperties.temporalImage = document.createElement("img"),
                                    this.editionProperties.temporalImage.setAttribute(l.get("imageMathmlAttribute"), o.safeXmlEncode(c));
                                    var u = t ? e.contentWindow : window;
                                    if ("textarea" !== e.tagName.toLowerCase())
                                        if (document.selection) {
                                            for (var h = 0, d = a.startNode.previousSibling; d; )
                                                h += v.getNodeLength(d),
                                                d = d.previousSibling;
                                            this.editionProperties.latexRange = u.document.selection.createRange(),
                                            this.editionProperties.latexRange.moveToElementText(a.startNode.parentNode),
                                            this.editionProperties.latexRange.move("character", h + a.startPosition),
                                            this.editionProperties.latexRange.moveEnd("character", a.latex.length + 4)
                                        } else
                                            this.editionProperties.latexRange = u.document.createRange(),
                                            this.editionProperties.latexRange.setStart(a.startNode, a.startPosition),
                                            this.editionProperties.latexRange.setEnd(a.endNode, a.endPosition)
                                }
                            }
                    } else
                        "textarea" === e.tagName.toLowerCase() && (this.editMode = "latex");
                for (var f = l.get("editorAttributes").split(", "), m = {}, p = 0, b = f.length; p < b; p++) {
                    var _ = f[p].split("=")
                      , w = _[0]
                      , x = _[1];
                    m[w] = x
                }
                var C = {};
                Object.assign(C, m, l.get("editorParameters")),
                C.language = this.language,
                C.rtl = this.integrationModel.rtl;
                var E = {};
                if (E.editorAttributes = C,
                E.language = this.language,
                E.customEditors = this.customEditors,
                E.environment = this.environment,
                null == this.modalDialog) {
                    this.modalDialog = new j(C),
                    this.contentManager = new k(E);
                    var M = y.newListener("onLoad", function() {
                        if (this.contentManager.isNewElement = this.editionProperties.isNewElement,
                        null != this.editionProperties.temporalImage) {
                            var e = o.safeXmlDecode(this.editionProperties.temporalImage.getAttribute(l.get("imageMathmlAttribute")));
                            this.contentManager.mathML = e
                        }
                    }
                    .bind(this));
                    this.contentManager.addListener(M),
                    this.contentManager.init(),
                    this.modalDialog.setContentManager(this.contentManager),
                    this.contentManager.setModalDialogInstance(this.modalDialog)
                } else if (this.contentManager.isNewElement = this.editionProperties.isNewElement,
                null != this.editionProperties.temporalImage) {
                    var O = o.safeXmlDecode(this.editionProperties.temporalImage.getAttribute(l.get("imageMathmlAttribute")));
                    this.contentManager.mathML = O
                }
                this.contentManager.setIntegrationModel(this.integrationModel),
                this.modalDialog.open()
            }
        }, {
            key: "getCustomEditors",
            value: function() {
                return this.customEditors
            }
        }], [{
            key: "addGlobalListener",
            value: function(t) {
                e.globalListeners.add(t)
            }
        }, {
            key: "getServiceProvider",
            value: function() {
                return e.serviceProvider
            }
        }, {
            key: "getStringManager",
            value: function() {
                return e.stringManager
            }
        }]),
        e
    }();
    V.globalListeners = new y,
    V.stringManager = new w;
    window.wrs_addPluginListener = function(e) {
        var t, i;
        console.warn("Deprecated method"),
        i = e[t = Object.keys(e)[0]];
        var n = y.newListener(t, i);
        V.addGlobalListener(n)
    }
    ,
    window.wrs_initParse = function(e, t) {
        return console.warn("Deprecated method. Use Parser.endParse instead."),
        B.initParse(e, t)
    }
    ,
    window.wrs_endParse = function(e, t, i) {
        return console.warn("Deprecated method. Use Parser.endParse instead."),
        B.endParse(e, t, i)
    }
    ;
    function J(e) {
        return (J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function q(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function G(e, t) {
        return !t || "object" !== J(t) && "function" != typeof t ? function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }
    function Q(e, t, i) {
        return (Q = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var n = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Y(e)); )
                    ;
                return e
            }(e, t);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, t);
                return r.get ? r.get.call(i) : r.value
            }
        }
        )(e, t, i || e)
    }
    function Y(e) {
        return (Y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function K(e, t) {
        return (K = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    /*! http://mths.be/codepointat v0.1.0 by @mathias */
    String.prototype.codePointAt || function() {
        var e = function(e) {
            if (null == this)
                throw TypeError();
            var t = String(this)
              , i = t.length
              , n = e ? Number(e) : 0;
            if (n != n && (n = 0),
            !(n < 0 || n >= i)) {
                var r, s = t.charCodeAt(n);
                return s >= 55296 && s <= 56319 && i > n + 1 && (r = t.charCodeAt(n + 1)) >= 56320 && r <= 57343 ? 1024 * (s - 55296) + r - 56320 + 65536 : s
            }
        };
        Object.defineProperty ? Object.defineProperty(String.prototype, "codePointAt", {
            value: e,
            configurable: !0,
            writable: !0
        }) : String.prototype.codePointAt = e
    }(),
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(e, t) {
            if (null == e)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var i = Object(e), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (null != r)
                    for (var s in r)
                        Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s])
            }
            return i
        },
        writable: !0,
        configurable: !0
    });
    var Z = function(e) {
        function t(e) {
            var i;
            return function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            (i = G(this, Y(t).call(this, e))).integrationFolderName = "ckeditor_wiris",
            i
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && K(e, t)
        }(t, U),
        function(e, t, i) {
            t && q(e.prototype, t),
            i && q(e, i)
        }(t, [{
            key: "init",
            value: function() {
                Q(Y(t.prototype), "init", this).call(this);
                var e = this.editorObject;
                "wiriseditorparameters"in e.config && l.update("_wrs_conf_editorParameters", e.config.wiriseditorparameters)
            }
        }, {
            key: "getLanguage",
            value: function() {
                return this.editorObject.langCode
            }
        }, {
            key: "createButtonCommands",
            value: function() {
                var e = "img[align,";
                e += l.get("imageMathmlAttribute"),
                e += ",src,alt](!Wirisformula)";
                var t = this.editorObject;
                t.addCommand("ckeditor_wiris_openFormulaEditor", {
                    async: !1,
                    canUndo: !0,
                    editorFocus: !0,
                    allowedContent: e,
                    requiredContent: e,
                    exec: function(e) {
                        this.core.getCustomEditors().disable(),
                        this.openNewFormulaEditor()
                    }
                    .bind(this)
                }),
                t.addCommand("ckeditor_wiris_openFormulaEditorChemistry", {
                    async: !1,
                    canUndo: !0,
                    editorFocus: !0,
                    allowedContent: e,
                    requiredContent: e,
                    exec: function(e) {
                        this.core.getCustomEditors().enable("chemistry"),
                        this.openNewFormulaEditor()
                    }
                    .bind(this)
                })
            }
        }, {
            key: "addEditorListeners",
            value: function() {
                var e = this.editorObject;
                void 0 !== e.config.wirislistenersdisabled && e.config.wirislistenersdisabled ? (e.on("instanceReady", function(e) {
                    this.checkElement()
                }
                .bind(this)),
                e.resetDirty()) : (e.setData(B.initParse(e.getData())),
                e.on("focus", function(e) {
                    WirisPlugin.currentInstance = WirisPlugin.instances[e.editor.name]
                }),
                e.on("contentDom", function() {
                    e.on("doubleclick", function(e) {
                        ("img" == e.data.element.$.nodeName.toLowerCase() && v.containsClass(e.data.element.$, l.get("imageClassName")) || v.containsClass(e.data.element.$, l.get("CASClassName"))) && (e.data.dialog = null)
                    }
                    .bind(this))
                }
                .bind(this)),
                e.on("setData", function(e) {
                    e.data.dataValue = B.initParse(e.data.dataValue || "")
                }
                .bind(this)),
                e.on("afterSetData", function(e) {
                    void 0 !== B.observer && Array.prototype.forEach.call(document.getElementsByClassName("Wirisformula"), function(e) {
                        B.observer.observe(e)
                    })
                }
                .bind(this)),
                e.on("getData", function(e) {
                    e.data.dataValue = B.endParse(e.data.dataValue || "")
                }
                .bind(this)),
                e.on("mode", function(e) {
                    this.checkElement()
                }
                .bind(this)),
                this.checkElement())
            }
        }, {
            key: "checkElement",
            value: function() {
                var e, t = this.editorObject, i = document.getElementById("cke_contents_" + t.name) ? document.getElementById("cke_contents_" + t.name) : document.getElementById("cke_" + t.name), n = !1;
                if (!(e = t.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? t.container.$ : i.getElementsByTagName("iframe")[0])) {
                    var r;
                    for (var s in i.classList) {
                        var o = i.classList[s];
                        if (-1 != o.search("cke_\\d")) {
                            r = o;
                            break
                        }
                    }
                    r && (e = document.getElementById(r + "_contents"),
                    n = !0)
                }
                if (!e.wirisActive)
                    if (t.elementMode === CKEDITOR.ELEMENT_MODE_INLINE) {
                        if ("TEXTAREA" === e.tagName) {
                            var a = document.getElementsByClassName("cke_textarea_inline");
                            Array.prototype.forEach.call(a, function(e) {
                                this.setTarget(e),
                                this.addEvents()
                            })
                        } else
                            this.setTarget(e),
                            this.addEvents();
                        e.wirisActive = !0
                    } else
                        (e.contentWindow || n) && (this.setTarget(e),
                        this.addEvents(),
                        e.wirisActive = !0)
            }
        }, {
            key: "doubleClickHandler",
            value: function(e, t) {
                if ("img" == e.nodeName.toLowerCase() && v.containsClass(e, l.get("imageClassName"))) {
                    void 0 !== t.stopPropagation ? t.stopPropagation() : t.returnValue = !1,
                    this.core.getCustomEditors().disable();
                    var i = e.getAttribute("data-custom-editor");
                    i && this.core.getCustomEditors().enable(i),
                    this.core.editionProperties.temporalImage = e,
                    this.openExistingFormulaEditor()
                }
            }
        }, {
            key: "getCorePath",
            value: function() {
                return CKEDITOR.plugins.getPath(this.integrationFolderName)
            }
        }, {
            key: "getSelection",
            value: function() {
                return this.editorObject.editable().$.focus(),
                this.editorObject.getSelection().getNative()
            }
        }, {
            key: "callbackFunction",
            value: function() {
                Q(Y(t.prototype), "callbackFunction", this).call(this),
                this.createButtonCommands(),
                this.addEditorListeners()
            }
        }]),
        t
    }();
    CKEDITOR.plugins.add("ckeditor_wiris", {
        init: function(e) {
            e.ui.addButton("ckeditor_wiris_formulaEditor", {
                label: "Insert a math equation - MathType",
                command: "ckeditor_wiris_openFormulaEditor",
                icon: CKEDITOR.plugins.getPath("ckeditor_wiris") + "./icons/formula.png"
            }),
            e.ui.addButton("ckeditor_wiris_formulaEditorChemistry", {
                label: "Insert a chemistry formula - ChemType",
                command: "ckeditor_wiris_openFormulaEditorChemistry",
                icon: CKEDITOR.plugins.getPath("ckeditor_wiris") + "./icons/chem.png"
            }),
            e.on("instanceReady", function() {
                var t = {};
                if (t.editorObject = e,
                t.target = e.container.$,
                t.configurationService = {
                    "_wrs_conf_editorUrl": CKEDITOR.plugins.getPath("ckeditor_wiris") + "./core/editor.js",
                    "_wrs_conf_hostPlatform": "unknown",
                    "_wrs_conf_wirisPluginPerformance": true,
                    "_wrs_conf_modalWindow": true,
                    "_wrs_conf_modalWindowFullScreen": false,
                    "_wrs_conf_editorEnabled": true,
                    "_wrs_conf_CASMathmlAttribute": "alt",
                    "_wrs_conf_editorToolbar": "",
                    "_wrs_conf_saveMode": "xml",
                    "_wrs_conf_imageFormat": "svg",
                    "_wrs_conf_chemEnabled": true,
                    "_wrs_conf_versionPlatform": "unknown",
                    "_wrs_conf_CASEnabled": false,
                    "_wrs_conf_parseModes": [
                    "latex"
                    ],
                    "_wrs_conf_enableAccessibility": true,
                    "_wrs_conf_version": "4.12.0.1393",
                    "_wrs_conf_setSize": false,
                    "_wrs_conf_editMode": "default",
                    "_wrs_conf_imageMathmlAttribute": "data-mathml",
                    "_wrs_conf_editorParameters": {},
                    "_wrs_conf_editorAttributes": "width=570, height=450, scroll=no, resizable=yes",
                    "_wrs_conf_CASAttributes": "width=640, height=480, scroll=no, resizable=yes"
                },
                t.version = "7.6.1.1394",
                t.scriptName = "plugin.js",
                t.langFolderName = "languages",
                t.environment = {},
                t.environment.editor = "CKEditor4",
                "wiriscontextpath"in e.config && (t.configurationService = e.config.wiriscontextpath + t.configurationService),
                t.target) {
                    var i = new Z(t);
                    i.init(),
                    i.listeners.fire("onTargetReady", {}),
                    WirisPlugin.instances[e.name] = i,
                    WirisPlugin.currentInstance = i
                }
            })
        }
    });
    i(1);
    window.WirisPlugin = {
        Core: V,
        Parser: B,
        Image: P,
        Util: v,
        Configuration: l,
        Listeners: y,
        IntegrationModel: U,
        currentInstance: null,
        instances: {},
        CKEditorIntegration: void 0
    }
}
]);

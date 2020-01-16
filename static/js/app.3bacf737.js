(function (t) {
    function e(e) {
        for (var n, o, r = e[0], c = e[1], l = e[2], h = 0, d = []; h < r.length; h++) o = r[h], Object.prototype.hasOwnProperty.call(s, o) && s[o] && d.push(s[o][0]), s[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        u && u(e);
        while (d.length) d.shift()();
        return a.push.apply(a, l || []), i()
    }

    function i() {
        for (var t, e = 0; e < a.length; e++) {
            for (var i = a[e], n = !0, r = 1; r < i.length; r++) {
                var c = i[r];
                0 !== s[c] && (n = !1)
            }
            n && (a.splice(e--, 1), t = o(o.s = i[0]))
        }
        return t
    }

    var n = {}, s = {app: 0}, a = [];

    function o(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {i: e, l: !1, exports: {}};
        return t[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }

    o.m = t, o.c = n, o.d = function (t, e, i) {
        o.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, o.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) o.d(i, n, function (e) {
            return t[e]
        }.bind(null, n));
        return i
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [], c = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var l = 0; l < r.length; l++) e(r[l]);
    var u = c;
    a.push([0, "chunk-vendors"]), i()
})({
    0: function (t, e, i) {
        t.exports = i("56d7")
    }, "034f": function (t, e, i) {
        "use strict";
        var n = i("85ec"), s = i.n(n);
        s.a
    }, "2e27": function (t, e, i) {
        "use strict";
        var n = i("cc97"), s = i.n(n);
        s.a
    }, "56d7": function (t, e, i) {
        "use strict";
        i.r(e);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var n = i("2b0e"), s = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", [t.maskType ? i("div", {staticClass: "mask"}, [i("i")]) : t._e(), i("div", {staticClass: "title"}, [t._v("Please draw your melody")]), i("div", {
                ref: "app",
                staticClass: "appModule"
            }, [i("div", {staticClass: "lineMes"}, t._l(t.lineData, (function (e, n) {
                return i("span", {key: n}, [i("a", [t._v(t._s(e))])])
            })), 0), i("div", {attrs: {id: "app"}}, [i("MusicalNote", {
                attrs: {dotIndexList: t.dotList},
                on: {onChange: t.getAllPosition}
            }), i("div", {staticClass: "positionMes"}, [i("ul", t._l(t.dispalyList, (function (e, n) {
                return i("li", {key: n}, [i("span", [t._v(t._s(e.titleY))]), i("span", [t._v(t._s(e.titleX))])])
            })), 0)]), i("div", {staticClass: "positionBtn"}, [i("span", {
                on: {
                    click: function (e) {
                        return e.preventDefault(), t.startRecord(e)
                    }
                }
            }, [t._v(t._s(t.recorderStatus ? t.num + "s" : "")), i("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.recorderStatus,
                    expression: "!recorderStatus"
                }], staticClass: "recordIcon icon"
            })]), t.openType ? i("span", {on: {click: t.mixHas}}, [i("i", {staticClass: "saveIcon icon"})]) : i("span", {
                staticStyle: {
                    opacity: "0.5",
                    cursor: "not-allowed"
                }
            }, [i("i", {staticClass: "saveIcon icon"})]), t.openType ? i("span", {on: {click: t.handlerPlay}}, [i("i", {
                staticClass: "icon",
                class: t.playStatus
            })]) : i("span", {staticStyle: {opacity: "0.5", cursor: "not-allowed"}}, [i("i", {
                staticClass: "icon",
                class: t.playStatus
            })]), t.openType ? i("span", {on: {click: t.deleteData}}, [i("i", {staticClass: "deleteIcon icon"})]) : i("span", {
                staticStyle: {
                    opacity: "0.5",
                    cursor: "not-allowed"
                }
            }, [i("i", {staticClass: "deleteIcon icon"})]), i("audio", {
                attrs: {
                    id: "my_audio",
                    src: t.baseURL + "/static/finalversion.wav"
                }
            })])], 1)])])
        }, a = [], o = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "canvasWrap",
                staticClass: "canvasWrap",
                style: "width:" + t.width + "px"
            }, [i("canvas", {
                ref: "musicalCanvas",
                style: {background: t.backgroudColor, width: "3225px", height: this.canvasHeight + "px"}
            })])
        }, r = [], c = (i("cb29"), i("d81d"), i("a434"), i("a9e3"), {
            props: {
                backgroudColor: {type: String, default: "#333"},
                width: {type: Number, default: 1e3},
                height: {type: Number, default: 550},
                ylineColor: {type: String, default: "#ccc"},
                xlineColor: {type: String, default: "#ccc"},
                bottomLineColor: {type: String, default: "red"},
                topLineColor: {type: String, default: "#5883ea"},
                curveLineColor: {type: String, default: "#fff"},
                dotColor: {type: String, default: "#fff"},
                dotSize: {type: Number, default: 7},
                dotIndexList: {
                    type: Array, default: function () {
                        return []
                    }
                },
                lockView: {type: Boolean, default: !1}
            }, data: function () {
                return {
                    canvasWidth: 3225,
                    ctx: "",
                    xCoordinate: [],
                    yCoordinate: [],
                    spanX: 25,
                    spanY: 15,
                    leftTitle: [],
                    bottomTitle: [],
                    dotList: [],
                    offsetY: 4
                }
            }, computed: {
                canvasHeight: function () {
                    return this.height
                }
            }, watch: {
                dotIndexList: function (t) {
                    this.indexListToDotList(t)
                }
            }, mounted: function () {
                this.initCanvas(), this.indexListToDotList(this.dotIndexList)
            }, methods: {
                initCanvas: function () {
                    var t = this.$refs.musicalCanvas;
                    this.ctx = t.getContext("2d"), t.width = this.canvasWidth, t.height = this.canvasHeight, this.addlister(t), this.redraw()
                }, createTitle: function () {
                    for (var t = [], e = 1; e <= 128; e++) t.push(e);
                    for (var i = [], n = 1; n <= 35; n++) i.push(n);
                    this.bottomTitle = t, this.leftTitle = i
                }, redraw: function () {
                    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight), this.createTitle(), this.drawTitle(), this.drawCoordinateLine(), this.drawDotList()
                }, drawTitle: function () {
                    var t = this;
                    this.leftTitle.map((function (e, i) {
                        t.ctx.fillStyle = "white", t.ctx.textAlign = "center", t.ctx.fillText(i, 10, t.height - e * t.spanY - t.offsetY - 4)
                    })), this.bottomTitle.map((function (e, i) {
                        t.ctx.fillStyle = "white", t.ctx.fillText(.25 * (i + 1), t.spanX * e + t.spanX / 2, t.height - 4), t.ctx.textAlign = "center"
                    }))
                }, drawCoordinateLine: function () {
                    var t = this;
                    this.leftTitle.map((function (e, i) {
                        var n = 0, s = t.height - e * t.spanY - t.offsetY, a = t.canvasWidth,
                            o = t.height - e * t.spanY - t.offsetY;
                        t.ctx.strokeStyle = t.xlineColor, 2 == e && (t.ctx.strokeStyle = t.bottomLineColor), 18 == e && (t.ctx.strokeStyle = t.topLineColor), 17 == e && (t.ctx.strokeStyle = t.topLineColor), t.ctx.beginPath(), t.ctx.moveTo(n, s), t.ctx.lineTo(a, o), t.ctx.stroke(), t.ctx.closePath()
                    })), this.bottomTitle.map((function (e, i) {
                        var n = e * t.spanX, s = 0, a = e * t.spanX, o = t.canvasHeight;
                        t.ctx.strokeStyle = t.ylineColor, t.ctx.beginPath(), t.ctx.moveTo(n, s), t.ctx.lineTo(a, o), t.ctx.stroke(), t.ctx.closePath()
                    }))
                }, drawDotList: function () {
                    this.dotList.length;
                    for (var t in this.dotList) {
                        var e = this.dotList[t];
                        if (this.drawDot(e.x, e.y, e.type), t > 0) {
                            var i = this.dotList[t - 1], n = this.dotList[t], s = {x: i.x, y: i.y},
                                a = {x: n.x, y: n.y}, o = n.x - i.x;
                            n.y, i.y;
                            n.y < i.y ? (s = {x: i.x + o / 4, y: i.y}, a = {
                                x: n.x - o / 4,
                                y: n.y
                            }) : n.y > i.y && (s = {x: i.x + o / 4, y: i.y}, a = {
                                x: n.x - o / 4,
                                y: n.y
                            }), this.drawCurve(i.x, i.y, s.x, s.y, a.x, a.y, n.x, n.y)
                        }
                    }
                }, drawDot: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "solid";
                    this.ctx.fillStyle = this.dotColor, this.ctx.strokeStyle = this.dotColor, this.ctx.beginPath(), this.ctx.arc(t, e, this.dotSize, 0, 2 * Math.PI), "solid" === i ? this.ctx.fill() : "hollow" == i && this.ctx.stroke()
                }, addDot: function (t) {
                    if (t.offsetX && t.offsetY) {
                        var e = t.offsetX, i = t.offsetY;
                        if (e < this.spanX) return;
                        if (i > this.canvasHeight - this.spanY) return;
                        var n = this.correctDotPosition(e, i), s = !1, a = -1;
                        this.dotList.map((function (t, e) {
                            t.x == n.x && (s = !0, a = e)
                        })), s ? this.dotList[a] = n : this.dotList.push(n), this.dotList.sort((function (t, e) {
                            return t.x - e.x
                        })), this.redraw(), this.lockView && this.scrollToMid(n.x, n.y), this.dotListToIndexList()
                    }
                }, removeDot: function (t) {
                    if (t.offsetX && t.offsetY) {
                        var e = t.offsetX, i = t.offsetY;
                        if (e < this.spanX) return;
                        if (i > this.canvasHeight - this.spanY) return;
                        var n = this.correctDotPosition(e, i), s = !1, a = -1;
                        this.dotList.map((function (t, e) {
                            Math.abs(t.x - n.x) < 5 && Math.abs(t.y - n.y) < 5 && (s = !0, a = e)
                        })), s && (this.dotList.splice(a, 1), this.dotList.sort((function (t, e) {
                            return t.x - e.x
                        })), this.redraw(), this.lockView && this.scrollToMid(n.x, n.y), this.dotListToIndexList())
                    }
                }, correctDotPosition: function (t, e) {
                    var i = parseInt((this.canvasHeight - e) / this.spanY), n = i * this.spanY, s = "solid";
                    1 == i && (s = "hollow"), e = this.canvasHeight - n - this.spanY / 2 - this.dotSize / 2;
                    var a = t % this.spanX;
                    a > this.spanY / 2 ? t -= a - this.spanX / 2 : t += this.spanX / 2 - a;
                    var o = {x: t, y: e, type: s};
                    return o
                }, drawCurve: function (t, e, i, n, s, a, o, r) {
                    this.ctx.fillStyle = this.curveLineColor, this.ctx.strokeStyle = this.curveLineColor, this.ctx.beginPath(), this.ctx.moveTo(t, e), this.ctx.bezierCurveTo(i, n, s, a, o, r), this.ctx.stroke()
                }, addLine: function (t, e, i, n) {
                    this.ctx.fillStyle = this.curveLineColor, this.ctx.strokeStyle = this.curveLineColor, this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.moveTo(t, e), this.drawLine(i, n)
                }, drawLine: function (t, e) {
                    this.ctx.lineTo(t, e), this.ctx.stroke()
                }, addlister: function (t) {
                    t.addEventListener("click", this.addDot), t.addEventListener("dblclick", this.removeDot), t.addEventListener("mousemove", this.onMouseEvent)
                }, scrollToMid: function (t, e) {
                    if (this.dotList.length) {
                        var i = this.width / 2;
                        if (t > i) {
                            var n = t - i;
                            this.$refs.canvasWrap.scrollLeft = n
                        } else this.$refs.canvasWrap.scrollLeft = 0
                    }
                }, dotListToIndexList: function () {
                    var t = this, e = this.dotList.map((function (e) {
                        var i = parseInt((e.x - t.spanX) / t.spanX),
                            n = parseInt((t.canvasHeight - e.y - t.spanY) / t.spanY);
                        return {x: i, y: n}
                    }));
                    this.$emit("onChange", e), console.log("list==========", e)
                }, indexListToDotList: function (t) {
                    var e = this;
                    this.dotList = t.map((function (t) {
                        var i = t.x * e.spanX + e.spanX + e.spanX / 2,
                            n = e.canvasHeight - (t.y * e.spanY + e.spanY + e.spanY / 2 + e.offsetY - .5);
                        return {x: i, y: n, type: 0 == t.y ? "hollow" : "solid"}
                    })), this.redraw()
                }, onMouseEvent: function (t) {
                    if (t.offsetX && t.offsetY) {
                        var e = t.offsetX, i = t.offsetY;
                        if (e < this.spanX) return;
                        if (i > this.canvasHeight - this.spanY) return;
                        var n = this.correctDotPosition(e, i), s = parseInt((n.x - this.spanX) / this.spanX),
                            a = parseInt((this.canvasHeight - n.y - this.spanY) / this.spanY),
                            o = {x: s, y: a, event: t};
                        this.$emit("mouseEvent", o)
                    }
                }
            }
        }), l = c, u = (i("2e27"), i("2877")), h = Object(u["a"])(l, o, r, !1, null, "52298aa2", null), d = h.exports;
        i("c19f"), i("ace4"), i("b0c0"), i("d3b7"), i("25f0"), i("3ca3"), i("cfc3"), i("9a8c"), i("a975"), i("735e"), i("c1ac"), i("d139"), i("3a7b"), i("d5d6"), i("82f8"), i("e91f"), i("60bd"), i("5f96"), i("3280"), i("3fcc"), i("ca91"), i("25a1"), i("cd26"), i("3c5d"), i("2954"), i("649e"), i("219c"), i("170b"), i("b39a"), i("72f7"), i("ddb0"), i("2b3d");
        window.URL = window.URL || window.webkitURL, navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        var f = function (t, e) {
            e = e || {}, e.sampleBits = e.sampleBits || 16, e.sampleRate = e.sampleRate || 16e3;
            var i = new (window.webkitAudioContext || window.AudioContext), n = i.createMediaStreamSource(t),
                s = i.createScriptProcessor || i.createJavaScriptNode, a = s.apply(i, [4096, 1, 1]), o = {
                    size: 0,
                    buffer: [],
                    inputSampleRate: i.sampleRate,
                    inputSampleBits: 16,
                    outputSampleRate: e.sampleRate,
                    oututSampleBits: e.sampleBits,
                    input: function (t) {
                        this.buffer.push(new Float32Array(t)), this.size += t.length
                    },
                    compress: function () {
                        for (var t = new Float32Array(this.size), e = 0, i = 0; i < this.buffer.length; i++) t.set(this.buffer[i], e), e += this.buffer[i].length;
                        var n = parseInt(this.inputSampleRate / this.outputSampleRate), s = t.length / n,
                            a = new Float32Array(s), o = 0, r = 0;
                        while (o < s) a[o] = t[r], r += n, o++;
                        return a
                    },
                    encodeWAV: function () {
                        var t = Math.min(this.inputSampleRate, this.outputSampleRate),
                            e = Math.min(this.inputSampleBits, this.oututSampleBits), i = this.compress(),
                            n = i.length * (e / 8), s = new ArrayBuffer(44 + n), a = new DataView(s), o = 1, r = 0,
                            c = function (t) {
                                for (var e = 0; e < t.length; e++) a.setUint8(r + e, t.charCodeAt(e))
                            };
                        if (c("RIFF"), r += 4, a.setUint32(r, 36 + n, !0), r += 4, c("WAVE"), r += 4, c("fmt "), r += 4, a.setUint32(r, 16, !0), r += 4, a.setUint16(r, 1, !0), r += 2, a.setUint16(r, o, !0), r += 2, a.setUint32(r, t, !0), r += 4, a.setUint32(r, o * t * (e / 8), !0), r += 4, a.setUint16(r, o * (e / 8), !0), r += 2, a.setUint16(r, e, !0), r += 2, c("data"), r += 4, a.setUint32(r, n, !0), r += 4, 8 === e) for (var l = 0; l < i.length; l++, r++) {
                            var u = Math.max(-1, Math.min(1, i[l])), h = u < 0 ? 32768 * u : 32767 * u;
                            h = parseInt(255 / (65535 / (h + 32768))), a.setInt8(r, h, !0)
                        } else for (l = 0; l < i.length; l++, r += 2) {
                            u = Math.max(-1, Math.min(1, i[l]));
                            a.setInt16(r, u < 0 ? 32768 * u : 32767 * u, !0)
                        }
                        return new Blob([a], {type: "audio/wav"})
                    }
                };
            this.start = function () {
                n.connect(a), a.connect(i.destination)
            }, this.stop = function () {
                a.disconnect(), a.src = window.URL.createObjectURL(o.encodeWAV())
            }, this.getBlob = function () {
                return this.stop(), o.encodeWAV()
            }, this.upload = function (t, e) {
                var i = new FormData;
                i.append("audioData", this.getBlob());
                var n = new XMLHttpRequest;
                e && (n.upload.addEventListener("progress", (function (t) {
                    e("uploading", t)
                }), !1), n.addEventListener("load", (function (t) {
                    e("ok", t)
                }), !1), n.addEventListener("error", (function (t) {
                    e("error", t)
                }), !1), n.addEventListener("abort", (function (t) {
                    e("cancel", t)
                }), !1)), n.open("POST", t), n.send(i)
            }, a.onaudioprocess = function (t) {
                o.input(t.inputBuffer.getChannelData(0))
            }
        };
        f.throwError = function (t) {
            throw alert(t), new function () {
                this.toString = function () {
                    return t
                }
            }
        }, f.canRecording = null != navigator.getUserMedia, f.get = function (t, e) {
            if (t) {
                if (!navigator.getUserMedia) return void f.throwErr("当前浏览器不支持录音功能。");
                navigator.getUserMedia({audio: !0}, (function (i) {
                    var n = new f(i, e);
                    t(n)
                }), (function (t) {
                    switch (t.code || t.name) {
                        case"PERMISSION_DENIED":
                        case"PermissionDeniedError":
                            f.throwError("用户拒绝提供信息。");
                            break;
                        case"NOT_SUPPORTED_ERROR":
                        case"NotSupportedError":
                            f.throwError("浏览器不支持硬件设备。");
                            break;
                        case"MANDATORY_UNSATISFIED_ERROR":
                        case"MandatoryUnsatisfiedError":
                            f.throwError("无法发现指定的硬件设备。");
                            break;
                        default:
                            f.throwError("无法打开麦克风。异常信息:" + (t.code || t.name));
                            break
                    }
                }))
            }
        };
        var p = f, v = i("bc3a"), y = i.n(v), x = {baseURL: ""};
        y.a.defaults.baseURL = x.baseURL, y.a.defaults.headers.post["Content-Type"] = "application/json";
        var m = y.a.create();
        m.interceptors.request.use((function (t) {
            return t
        }), (function (t) {
            return Promise.reject(t)
        })), m.interceptors.response.use((function (t) {
            return t.data
        }), (function (t) {
        }));
        var g = m, w = {humming: "/humming", mix: "/mix"}, L = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g.post(w.humming, t)
        }, b = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return g.post(w.mix, t)
        }, S = (i("a4d3"), i("e01a"), i("d28b"), i("99af"), i("c975"), i("ac1f"), i("1276"), {
            positionListToYinList: function (t, e) {
                var i = [], n = !0, s = !1, a = void 0;
                try {
                    for (var o, r = t[Symbol.iterator](); !(n = (o = r.next()).done); n = !0) {
                        var c = o.value, l = c.x, u = c.y, h = "".concat(e[u], "|").concat(l + 1);
                        i.push(h)
                    }
                } catch (d) {
                    s = !0, a = d
                } finally {
                    try {
                        n || null == r.return || r.return()
                    } finally {
                        if (s) throw a
                    }
                }
                return i
            }, yinListToPosition: function (t, e) {
                var i = [], n = !0, s = !1, a = void 0;
                try {
                    for (var o, r = t[Symbol.iterator](); !(n = (o = r.next()).done); n = !0) {
                        var c = o.value, l = c.split("|"), u = e.indexOf(l[0]), h = parseInt(l[1]) - 1,
                            d = {x: h, y: u};
                        i.push(d)
                    }
                } catch (f) {
                    s = !0, a = f
                } finally {
                    try {
                        n || null == r.return || r.return()
                    } finally {
                        if (s) throw a
                    }
                }
                return i
            }, yinListToDisplayList: function (t, e) {
                var i = [], n = !0, s = !1, a = void 0;
                try {
                    for (var o, r = t[Symbol.iterator](); !(n = (o = r.next()).done); n = !0) {
                        var c = o.value, l = c.split("|"), u = {titleX: .25 * parseInt(l[1]), titleY: l[0]};
                        i.push(u)
                    }
                } catch (h) {
                    s = !0, a = h
                } finally {
                    try {
                        n || null == r.return || r.return()
                    } finally {
                        if (s) throw a
                    }
                }
                return i
            }
        }), T = {
            name: "app", components: {MusicalNote: d}, data: function () {
                return {
                    maskType: !1,
                    openType: !0,
                    baseURL: x.baseURL,
                    dotList: [],
                    lineData: ["None", "B-1", "C-2", "D-2", "E-2", "F-2", "G-2", "A-2", "B-2", "C-3", "D-3", "E-3", "F-3", "G-3", "A-3", "B-3", "C-4", "D-4", "E-4", "F-4", "G-4", "A-4", "B-4", "C-5", "D-5", "E-5", "F-5", "G-5", "A-5", "B-5", "C-6", "D-6", "E-6", "F-6", "G-6"],
                    params: {notes: []},
                    dispalyList: [],
                    backNotes: [],
                    num: 15,
                    recorderStatus: !1,
                    recorder: null,
                    playStatus: "over"
                }
            }, methods: {
                handlerPlay: function () {
                    var t = document.querySelector("#my_audio"), e = this;
                    this.playStatus = t.paused, t.paused ? (t.play(), e.playStatus = "doing", t.addEventListener("ended", (function () {
                        e.playStatus = "over"
                    }))) : (t.pause(), e.playStatus = "over")
                }, deleteData: function () {
                    this.dotList = []
                }, startRecord: function () {
                    this.openType = !1;
                    var t = this;
                    t.num = 16, p.get((function (e) {
                        t.recorder = e, t.recorder.start(), t.TimeDown()
                    }))
                }, TimeDown: function () {
                    var t = this;
                    0 != t.num ? (this.recorderStatus = !0, t.num--) : this.recorderStatus = !1, setTimeout((function () {
                        0 != t.num ? (this.recorderStatus = !0, t.TimeDown()) : t.uploadAudio()
                    }), 1e3)
                }, uploadAudio: function () {
                    var t = this, e = this;
                    this.recorderStatus = !1;
                    var i = new FormData;
                    i.append("audioData", this.recorder.getBlob()), L(i).then((function (i) {
                        e.params = i, e.mixHas(), t.openType = !0
                    }))
                }, mixHas: function () {
                    var t = this;
                    this.maskType = !0, console.log(this.params), b(this.params).then((function (e) {
                        t.dotList = S.yinListToPosition(e.notes, t.lineData), t.dispalyList = S.yinListToDisplayList(e.notes, t.lineData), t.maskType = !1
                    }))
                }, getAllPosition: function (t) {
                    this.params.notes = S.positionListToYinList(t, this.lineData), this.dispalyList = S.yinListToDisplayList(this.params.notes, this.lineData)
                }
            }, mounted: function () {
                console.log(1111111111), this.mixHas()
            }
        }, C = T, D = (i("034f"), Object(u["a"])(C, s, a, !1, null, null, null)), k = D.exports;
        n["a"].config.productionTip = !1, new n["a"]({
            render: function (t) {
                return t(k)
            }
        }).$mount("#app")
    }, "85ec": function (t, e, i) {
    }, cc97: function (t, e, i) {
    }
});
//# sourceMappingURL=app.3bacf737.js.map

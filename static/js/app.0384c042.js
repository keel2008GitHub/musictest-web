(function (t) {
    function e(e) {
        for (var s, a, r = e[0], c = e[1], l = e[2], u = 0, h = []; u < r.length; u++) a = r[u], Object.prototype.hasOwnProperty.call(o, a) && o[a] && h.push(o[a][0]), o[a] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        d && d(e);
        while (h.length) h.shift()();
        return n.push.apply(n, l || []), i()
    }

    function i() {
        for (var t, e = 0; e < n.length; e++) {
            for (var i = n[e], s = !0, r = 1; r < i.length; r++) {
                var c = i[r];
                0 !== o[c] && (s = !1)
            }
            s && (n.splice(e--, 1), t = a(a.s = i[0]))
        }
        return t
    }

    var s = {}, o = {app: 0}, n = [];

    function a(e) {
        if (s[e]) return s[e].exports;
        var i = s[e] = {i: e, l: !1, exports: {}};
        return t[e].call(i.exports, i, i.exports, a), i.l = !0, i.exports
    }

    a.m = t, a.c = s, a.d = function (t, e, i) {
        a.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, a.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, a.t = function (t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (a.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var s in t) a.d(i, s, function (e) {
            return t[e]
        }.bind(null, s));
        return i
    }, a.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [], c = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var l = 0; l < r.length; l++) e(r[l]);
    var d = c;
    n.push([0, "chunk-vendors"]), i()
})({
    0: function (t, e, i) {
        t.exports = i("56d7")
    }, 3118: function (t, e, i) {
        "use strict";
        var s = i("88d7"), o = i.n(s);
        o.a
    }, "536a": function (t, e, i) {
        "use strict";
        var s = i("d7be"), o = i.n(s);
        o.a
    }, "56d7": function (t, e, i) {
        "use strict";
        i.r(e);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var s = i("2b0e"), o = i("8c4f"), n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", [t.maskType ? i("div", {staticClass: "mask"}, [i("i")]) : t._e(), t.aboutType ? i("div", {staticClass: "aboutMask"}, [i("div", {staticClass: "aboutMes"}, [i("i", {
                staticClass: "closeIco",
                on: {click: t.closeIcoClick}
            }), i("p", [t._v("1. Draw music notes by single-click-add and double-click-remove.")]), i("p", [t._v("2. Draw music notes by humming a part of melody.")]), i("p", [t._v("3. Click Play button after all finished.")])])]) : t._e(), i("div", {staticClass: "title"}, [t._v("Please draw your melody")]), i("div", {
                ref: "app",
                staticClass: "appModule"
            }, [i("div", {staticClass: "lineMesClassical"}, t._l(t.lineData, (function (e, s) {
                return i("span", {key: s}, [i("a", [t._v(t._s(e))])])
            })), 0), i("div", {attrs: {id: "app"}}, [i("ClassicalMusicalNote", {
                attrs: {
                    moveAnType: t.moveAnType,
                    dotIndexList: t.dotList
                }, on: {onChange: t.getAllPosition}
            }), i("div", {staticClass: "positionMes"}, [i("ul", t._l(t.dispalyList, (function (e, s) {
                return i("li", {key: s}, [i("span", [t._v(t._s(e.titleY))]), i("span", [t._v(t._s(e.titleX))])])
            })), 0)]), i("div", {staticClass: "positionBtn"}, [t.recorderStatus ? i("span", [t._v(t._s(t.num + "s") + " ")]) : i("span", {
                on: {
                    click: function (e) {
                        return e.preventDefault(), t.startRecord(e)
                    }
                }
            }, [i("i", {staticClass: "recordIcon icon"})]), t.openType ? i("span", {on: {click: t.mixHas}}, [i("i", {staticClass: "saveIcon icon"})]) : i("span", {
                staticStyle: {
                    opacity: "0.5",
                    cursor: "not-allowed"
                }
            }, [i("i", {staticClass: "saveIcon icon"})]), t.playType ? i("span", {on: {click: t.handlerPlay}}, [i("i", {
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
            }, [i("i", {staticClass: "deleteIcon icon"})]), t.audioType ? i("audio", {
                attrs: {
                    id: "my_audio",
                    src: t.audio_url
                }
            }) : t._e(), t.openType ? i("span", {on: {click: t.aboutClick}}, [t._v("help")]) : i("span", {
                staticStyle: {
                    opacity: "0.5",
                    cursor: "not-allowed"
                }
            }, [t._v("help")]), t.openType ? i("span", [i("a", {
                attrs: {
                    href: t.classical_final_version_url,
                    download: ""
                }
            }, [i("i", {staticClass: "downloadIcon icon"})])]) : t._e()])], 1)])])
        }, a = [], r = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "canvasWrap",
                staticClass: "canvasWrap",
                style: "width:" + t.width + "px"
            }, [i("canvas", {
                ref: "musicalCanvas",
                style: {background: t.backgroudColor, width: "3225px", height: this.canvasHeight + "px"}
            })])
        }, c = [], l = (i("cb29"), i("d81d"), i("a434"), i("a9e3"), {
            props: {
                moveAnType: Boolean,
                backgroudColor: {type: String, default: "#FFFFFF"},
                width: {type: Number, default: 1e3},
                height: {type: Number, default: 550},
                ylineColor: {type: String, default: "#ccc"},
                xlineColor: {type: String, default: "#ccc"},
                bottomLineColor: {type: String, default: "red"},
                topLineColor: {type: String, default: "#5883ea"},
                curveLineColor: {type: String, default: "#9999FF"},
                dotColor: {type: String, default: "#9999FF"},
                dotSize: {type: Number, default: 4},
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
                    spanX: 3225 / 145,
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
                    for (var t = [], e = -16; e <= 127; e++) t.push(e), console.log(e + "\n");
                    for (var i = [], s = 1; s <= 35; s++) i.push(s);
                    this.bottomTitle = t, this.leftTitle = i
                }, redraw: function () {
                    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight), this.createTitle(), this.drawTitle(), this.drawCoordinateLine(), this.drawDotList()
                }, drawTitle: function () {
                    var t = this;
                    this.leftTitle.map((function (e, i) {
                        t.ctx.fillStyle = "#fff", t.ctx.textAlign = "center", t.ctx.fillText(i, 10, t.height - e * t.spanY - t.offsetY - 4)
                    })), this.bottomTitle.map((function (e, i) {
                        t.ctx.fillStyle = "#333333", t.ctx.fillText(.25 * e, t.spanX * (i + 1) + t.spanX / 2, t.height - 4), t.ctx.textAlign = "center"
                    }))
                }, drawCoordinateLine: function () {
                    var t = this;
                    this.leftTitle.map((function (e, i) {
                        var s = 0, o = t.height - e * t.spanY - t.offsetY, n = t.canvasWidth,
                            a = t.height - e * t.spanY - t.offsetY;
                        t.ctx.strokeStyle = t.xlineColor, 2 == e && (t.ctx.strokeStyle = t.bottomLineColor), 18 == e && (t.ctx.strokeStyle = t.topLineColor), 17 == e && (t.ctx.strokeStyle = t.topLineColor), t.ctx.beginPath(), t.ctx.moveTo(s, o), t.ctx.lineTo(n, a), t.ctx.stroke(), t.ctx.closePath()
                    })), this.bottomTitle.map((function (e, i) {
                        var s = (i + 1) * t.spanX, o = 0, n = (i + 1) * t.spanX, a = t.canvasHeight;
                        t.ctx.strokeStyle = t.ylineColor, t.ctx.beginPath(), t.ctx.moveTo(s, o), t.ctx.lineTo(n, a), t.ctx.stroke(), t.ctx.closePath()
                    }))
                }, drawDotList: function () {
                    this.dotList.length;
                    for (var t in this.dotList) {
                        var e = this.dotList[t];
                        if (this.drawDot(e.x, e.y, e.type), t > 0) {
                            var i = this.dotList[t - 1], s = this.dotList[t], o = {x: i.x, y: i.y},
                                n = {x: s.x, y: s.y}, a = s.x - i.x;
                            s.y, i.y;
                            s.y < i.y ? (o = {x: i.x + a / 4, y: i.y}, n = {
                                x: s.x - a / 4,
                                y: s.y
                            }) : s.y > i.y && (o = {x: i.x + a / 4, y: i.y}, n = {
                                x: s.x - a / 4,
                                y: s.y
                            }), this.drawCurve(i.x, i.y, o.x, o.y, n.x, n.y, s.x, s.y)
                        }
                    }
                }, drawDot: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "solid";
                    this.ctx.fillStyle = this.dotColor, this.ctx.strokeStyle = this.dotColor, this.ctx.beginPath(), this.ctx.arc(t, e, this.dotSize, 0, 2 * Math.PI), "solid" === i ? this.ctx.fill() : "hollow" == i && this.ctx.stroke()
                }, addDot: function (t) {
                    if (t.offsetX && t.offsetY) {
                        var e = t.offsetX;
                        console.log("e.offsetx = " + e);
                        var i = t.offsetY;
                        if (console.log("e.offsety = " + i), e < this.spanX) return;
                        if (i > this.canvasHeight - this.spanY) return;
                        var s = this.correctDotPosition(e, i), o = !1, n = -1;
                        this.dotList.map((function (t, e) {
                            t.x == s.x && (o = !0, n = e)
                        })), o ? this.dotList[n] = s : this.dotList.push(s), this.dotList.sort((function (t, e) {
                            return t.x - e.x
                        })), this.redraw(), this.lockView && this.scrollToMid(s.x, s.y), this.dotListToIndexList()
                    }
                }, removeDot: function (t) {
                    if (t.offsetX && t.offsetY) {
                        var e = t.offsetX, i = t.offsetY;
                        if (e < this.spanX) return;
                        if (i > this.canvasHeight - this.spanY) return;
                        var s = this.correctDotPosition(e, i), o = !1, n = -1;
                        this.dotList.map((function (t, e) {
                            Math.abs(t.x - s.x) < 5 && Math.abs(t.y - s.y) < 5 && (o = !0, n = e)
                        })), o && (this.dotList.splice(n, 1), this.dotList.sort((function (t, e) {
                            return t.x - e.x
                        })), this.redraw(), this.lockView && this.scrollToMid(s.x, s.y), this.dotListToIndexList())
                    }
                }, correctDotPosition: function (t, e) {
                    var i = parseInt((this.canvasHeight - e) / this.spanY), s = i * this.spanY, o = "solid";
                    1 == i && (o = "hollow"), e = this.canvasHeight - s - this.spanY / 2 - this.dotSize / 2;
                    var n = t % this.spanX;
                    n > this.spanY / 2 ? t -= n - this.spanX / 2 : t += this.spanX / 2 - n;
                    var a = {x: t, y: e, type: o};
                    return a
                }, drawCurve: function (t, e, i, s, o, n, a, r) {
                    this.ctx.fillStyle = this.curveLineColor, this.ctx.strokeStyle = this.curveLineColor, this.ctx.beginPath(), this.ctx.moveTo(t, e), this.ctx.bezierCurveTo(i, s, o, n, a, r), this.ctx.stroke()
                }, addLine: function (t, e, i, s) {
                    this.ctx.fillStyle = this.curveLineColor, this.ctx.strokeStyle = this.curveLineColor, this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.moveTo(t, e), this.drawLine(i, s)
                }, drawLine: function (t, e) {
                    this.ctx.lineTo(t, e), this.ctx.stroke()
                }, addlister: function (t) {
                    t.addEventListener("click", this.addDot), t.addEventListener("dblclick", this.removeDot), t.addEventListener("mousemove", this.onMouseEvent)
                }, scrollToMid: function (t, e) {
                    if (this.dotList.length) {
                        var i = this.width / 2;
                        if (t > i) {
                            var s = t - i;
                            this.$refs.canvasWrap.scrollLeft = s
                        } else this.$refs.canvasWrap.scrollLeft = 0
                    }
                }, dotListToIndexList: function () {
                    var t = this, e = this.dotList.map((function (e) {
                        console.log("the itemx is " + e.x), console.log("the itemy is " + e.y), console.log("the span x is " + t.spanX);
                        var i = parseInt((t.canvasHeight - e.y - t.spanY) / t.spanY);
                        if (e.x - 19 * t.spanX <= 0) {
                            var s = parseInt((e.x - 19 * t.spanX) / t.spanX);
                            return {x: s, y: i}
                        }
                        var o = parseInt((e.x - 18 * t.spanX) / t.spanX);
                        return {x: o, y: i}
                    }));
                    this.$emit("onChange", e), console.log("list==========", e)
                }, indexListToDotList: function (t) {
                    var e = this;
                    this.dotList = t.map((function (t) {
                        var i = t.x * e.spanX + 18 * e.spanX + e.spanX / 2,
                            s = e.canvasHeight - (t.y * e.spanY + e.spanY + e.spanY / 2 + e.offsetY - .5);
                        return {x: i, y: s, type: 0 == t.y ? "hollow" : "solid"}
                    })), this.redraw()
                }, onMouseEvent: function (t) {
                    if (t.offsetX && t.offsetY) {
                        var e = t.offsetX, i = t.offsetY;
                        if (e < this.spanX) return;
                        if (i > this.canvasHeight - this.spanY) return;
                        var s = this.correctDotPosition(e, i), o = parseInt((s.x - this.spanX) / this.spanX),
                            n = parseInt((this.canvasHeight - s.y - this.spanY) / this.spanY),
                            a = {x: o, y: n, event: t};
                        this.$emit("mouseEvent", a)
                    }
                }
            }
        }), d = l, u = (i("3118"), i("2877")), h = Object(u["a"])(d, r, c, !1, null, "0c0ae714", null), p = h.exports;
        i("c19f"), i("ace4"), i("b0c0"), i("d3b7"), i("25f0"), i("3ca3"), i("cfc3"), i("9a8c"), i("a975"), i("735e"), i("c1ac"), i("d139"), i("3a7b"), i("d5d6"), i("82f8"), i("e91f"), i("60bd"), i("5f96"), i("3280"), i("3fcc"), i("ca91"), i("25a1"), i("cd26"), i("3c5d"), i("2954"), i("649e"), i("219c"), i("170b"), i("b39a"), i("72f7"), i("ddb0"), i("2b3d");
        window.URL = window.URL || window.webkitURL, navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        var f = function (t, e) {
            e = e || {}, e.sampleBits = e.sampleBits || 16, e.sampleRate = e.sampleRate || 16e3;
            var i = new (window.webkitAudioContext || window.AudioContext), s = i.createMediaStreamSource(t),
                o = i.createScriptProcessor || i.createJavaScriptNode, n = o.apply(i, [4096, 1, 1]), a = {
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
                        var s = parseInt(this.inputSampleRate / this.outputSampleRate), o = t.length / s,
                            n = new Float32Array(o), a = 0, r = 0;
                        while (a < o) n[a] = t[r], r += s, a++;
                        return n
                    },
                    encodeWAV: function () {
                        var t = Math.min(this.inputSampleRate, this.outputSampleRate),
                            e = Math.min(this.inputSampleBits, this.oututSampleBits), i = this.compress(),
                            s = i.length * (e / 8), o = new ArrayBuffer(44 + s), n = new DataView(o), a = 1, r = 0,
                            c = function (t) {
                                for (var e = 0; e < t.length; e++) n.setUint8(r + e, t.charCodeAt(e))
                            };
                        if (c("RIFF"), r += 4, n.setUint32(r, 36 + s, !0), r += 4, c("WAVE"), r += 4, c("fmt "), r += 4, n.setUint32(r, 16, !0), r += 4, n.setUint16(r, 1, !0), r += 2, n.setUint16(r, a, !0), r += 2, n.setUint32(r, t, !0), r += 4, n.setUint32(r, a * t * (e / 8), !0), r += 4, n.setUint16(r, a * (e / 8), !0), r += 2, n.setUint16(r, e, !0), r += 2, c("data"), r += 4, n.setUint32(r, s, !0), r += 4, 8 === e) for (var l = 0; l < i.length; l++, r++) {
                            var d = Math.max(-1, Math.min(1, i[l])), u = d < 0 ? 32768 * d : 32767 * d;
                            u = parseInt(255 / (65535 / (u + 32768))), n.setInt8(r, u, !0)
                        } else for (l = 0; l < i.length; l++, r += 2) {
                            d = Math.max(-1, Math.min(1, i[l]));
                            n.setInt16(r, d < 0 ? 32768 * d : 32767 * d, !0)
                        }
                        return new Blob([n], {type: "audio/wav"})
                    }
                };
            this.start = function () {
                s.connect(n), n.connect(i.destination)
            }, this.stop = function () {
                n.disconnect(), n.src = window.URL.createObjectURL(a.encodeWAV())
            }, this.getBlob = function () {
                return this.stop(), a.encodeWAV()
            }, this.upload = function (t, e) {
                var i = new FormData;
                i.append("audioData", this.getBlob());
                var s = new XMLHttpRequest;
                e && (s.upload.addEventListener("progress", (function (t) {
                    e("uploading", t)
                }), !1), s.addEventListener("load", (function (t) {
                    e("ok", t)
                }), !1), s.addEventListener("error", (function (t) {
                    e("error", t)
                }), !1), s.addEventListener("abort", (function (t) {
                    e("cancel", t)
                }), !1)), s.open("POST", t), s.send(i)
            }, n.onaudioprocess = function (t) {
                a.input(t.inputBuffer.getChannelData(0))
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
                    var s = new f(i, e);
                    t(s)
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
        var y = f, v = i("bc3a"), m = i.n(v), x = {baseURL: "", outputDir: "dist2"};
        m.a.defaults.baseURL = x.baseURL, m.a.defaults.headers.post["Content-Type"] = "application/json";
        var g = m.a.create();
        g.interceptors.request.use((function (t) {
            return t
        }), (function (t) {
            return Promise.reject(t)
        })), g.interceptors.response.use((function (t) {
            return t.data
        }), (function (t) {
        }));
        var L = g, T = {humming: "/humming", mix: "/mix", hummingAd: "/hummingAd", mixAd: "/mixAd"}, w = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return L.post(T.humming, t)
            }, b = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return L.post(T.mix, t)
            }, C = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return L.post(T.mixAd, t)
            }, S = (i("a4d3"), i("e01a"), i("d28b"), i("99af"), i("c975"), i("ac1f"), i("1276"), {
                positionListToYinList: function (t, e) {
                    var i = [], s = !0, o = !1, n = void 0;
                    try {
                        for (var a, r = t[Symbol.iterator](); !(s = (a = r.next()).done); s = !0) {
                            var c = a.value, l = c.x, d = c.y, u = "".concat(e[d], "|").concat(l + 1);
                            i.push(u)
                        }
                    } catch (h) {
                        o = !0, n = h
                    } finally {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (o) throw n
                        }
                    }
                    return i
                }, yinListToPosition: function (t, e) {
                    var i = [], s = !0, o = !1, n = void 0;
                    try {
                        for (var a, r = t[Symbol.iterator](); !(s = (a = r.next()).done); s = !0) {
                            var c = a.value, l = c.split("|"), d = e.indexOf(l[0]), u = parseInt(l[1]) - 1,
                                h = {x: u, y: d};
                            i.push(h)
                        }
                    } catch (p) {
                        o = !0, n = p
                    } finally {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (o) throw n
                        }
                    }
                    return i
                }, yinListToDisplayList: function (t, e) {
                    var i = [], s = !0, o = !1, n = void 0;
                    try {
                        for (var a, r = t[Symbol.iterator](); !(s = (a = r.next()).done); s = !0) {
                            var c = a.value, l = c.split("|"), d = {titleX: .25 * parseInt(l[1]), titleY: l[0]};
                            i.push(d)
                        }
                    } catch (u) {
                        o = !0, n = u
                    } finally {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (o) throw n
                        }
                    }
                    return i
                }, downloadFile: function (t, e) {
                    if (t) if (window.navigator.msSaveBlob) try {
                        window.navigator.msSaveBlob(t, e)
                    } catch (o) {
                        console.log(o)
                    } else {
                        var i = window.URL.createObjectURL(new Blob([t])), s = document.createElement("a");
                        s.style.display = "none", s.href = i, s.setAttribute("download", e), document.body.appendChild(s), s.click(), document.body.removeChild(s), window.URL.revokeObjectURL(i)
                    }
                }
            }), k = {
                components: {ClassicalMusicalNote: p}, data: function () {
                    return {
                        timeType: 0,
                        moveAnType: !1,
                        playType: !1,
                        audioType: !0,
                        aboutType: !1,
                        maskType: !1,
                        openType: !0,
                        baseURL: x.baseURL,
                        audio_url: x.baseURL + "/static/finalversion.wav",
                        classical_final_version_url: x.baseURL + "/download",
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
                    closeIcoClick: function () {
                        this.aboutType = !1
                    }, aboutClick: function () {
                        this.aboutType = !0
                    }, handlerPlay: function () {
                        console.log("走着路--------------");
                        var t = document.querySelector("#my_audio");
                        t.currentTime = 0, console.log("点击当前时间", t.currentTime);
                        var e = this;
                        if (this.playStatus = t.paused, !t.paused) return e.moveAnType = !1, e.timeType = 1, e.audio_url = this.baseURL + "/static/finalversion.wav?t=" + (new Date).getTime(), void (e.playStatus = "over");
                        console.log("play has been paused."), e.timeType = 0, t.play(), e.playStatus = "doing", t.addEventListener("ended", (function () {
                            e.playStatus = "over", console.log("this.moveAnType5555555", this.moveAnType)
                        }))
                    }, deleteData: function () {
                        this.playType = !1, this.dotList = [], this.dispalyList = [], this.params = {notes: []};
                        var t = document.querySelector("#my_audio");
                        t.pause(), this.playStatus = t.paused, this.playStatus = "over", this.moveAnType = !1, t.currentTime = 0
                    }, startRecord: function () {
                        this.playType = !1, this.openType = !1;
                        var t = this;
                        t.num = 22, y.get((function (e) {
                            t.recorder = e, t.recorder.start(), t.TimeDown()
                        }))
                    }, TimeDown: function () {
                        var t = this;
                        0 != t.num ? (this.recorderStatus = !0, t.num--) : this.recorderStatus = !1, setTimeout((function () {
                            0 != t.num ? (this.recorderStatus = !0, t.TimeDown()) : t.uploadAudio()
                        }), 1e3)
                    }, uploadAudio: function () {
                        var t = this;
                        this.maskType = !0;
                        var e = this;
                        this.recorderStatus = !1;
                        var i = new FormData;
                        i.append("audioData", this.recorder.getBlob()), w(i).then((function (i) {
                            e.params = i, t.dotList = S.yinListToPosition(i.notes, t.lineData), t.dispalyList = S.yinListToDisplayList(i.notes, t.lineData), t.maskType = !1, t.audioType = !0, t.openType = !0
                        }))
                    }, mixHas: function () {
                        var t = this;
                        this.maskType = !0, this.audioType = !1, b(this.params).then((function (e) {
                            t.playType = !0, t.dotList = S.yinListToPosition(e.notes, t.lineData), t.dispalyList = S.yinListToDisplayList(e.notes, t.lineData), t.maskType = !1, t.audioType = !0, t.audio_url = t.baseURL + "/static/finalversion.wav?t=" + (new Date).getTime()
                        }))
                    }, getAllPosition: function (t) {
                        console.log("list==========", t), this.playType = !1;
                        var e = document.querySelector("#my_audio");
                        e.pause(), this.playStatus = e.paused, this.moveAnType = !1, this.playStatus = "over", this.params.notes = S.positionListToYinList(t, this.lineData), this.dispalyList = S.yinListToDisplayList(this.params.notes, this.lineData)
                    }
                }, mounted: function () {
                    console.log(1111111111)
                }
            }, _ = k, D = (i("536a"), Object(u["a"])(_, n, a, !1, null, null, null)), A = D.exports, I = function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {attrs: {align: "center"}}, [i("div", {staticClass: "menuBtn"}, [t._m(0), i("router-link", {attrs: {to: "/Advance"}}, [i("span", [i("i", {staticClass: "swipeIcon icon"}), t._v("Advanced")])]), i("router-link", {attrs: {to: "/Classical"}}, [i("span", [i("i", {staticClass: "clickIcon icon"}), t._v("Classical")])])], 1), i("router-view")], 1)
            }, Y = [function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("span", [i("a", {
                    staticClass: "aicon",
                    attrs: {href: "https://musicwai.squarespace.com", target: "_blank"}
                }, [t._v("learn more")])])
            }], M = {}, X = M, E = (i("7bd5"), Object(u["a"])(X, I, Y, !1, null, "c79ff2aa", null)), P = E.exports,
            R = function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", [t.maskType ? i("div", {staticClass: "mask"}, [i("i")]) : t._e(), t.aboutType ? i("div", {staticClass: "aboutMask"}, [i("div", {staticClass: "aboutMes"}, [i("i", {
                    staticClass: "closeIco",
                    on: {click: t.closeIcoClick}
                }), i("p", [t._v("1. Change mode by clicking on pen/eraser icon")]), i("p", [t._v("2. Swipe across the bounded area to draw/remove notes ")]), i("p", [t._v("3. Click the mixer icon to compose")]), i("p", [t._v("4. Click the play button to listen to the piece ")])])]) : t._e(), i("div", {staticClass: "title"}, [t._v("Swipe!")]), i("div", {
                    ref: "app",
                    staticClass: "appModule"
                }, [i("div", {staticClass: "lineMesAdvanced"}, t._l(t.lineData, (function (e, s) {
                    return i("span", {key: s}, [i("a", [t._v(t._s(e))])])
                })), 0), i("div", {attrs: {id: "app"}}, [i("AdvancedMusicalNote", {
                    attrs: {
                        moveAnType: t.moveAnType,
                        dotIndexList: t.dotList,
                        modeofapp: t.removing
                    }, on: {onChange: t.getAllPosition}
                }), i("div", {staticClass: "positionMes"}, [i("ul", t._l(t.dispalyList, (function (e, s) {
                    return i("li", {key: s}, [i("span", [t._v(t._s(e.titleY))]), i("span", [t._v(t._s(e.titleX))])])
                })), 0)]), i("div", {staticClass: "positionBtn"}, [t.mixType ? i("span", {on: {click: t.mixHas}}, [i("i", {staticClass: "saveIcon icon"})]) : i("span", {
                    staticStyle: {
                        opacity: "0.5",
                        cursor: "not-allowed"
                    }
                }, [i("i", {staticClass: "saveIcon icon"})]), t.playType ? i("span", {on: {click: t.handlerPlay}}, [i("i", {
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
                }, [i("i", {staticClass: "deleteIcon icon"})]), t.audioType ? i("audio", {
                    attrs: {
                        id: "my_audio",
                        src: t.audio_url
                    }
                }) : t._e(), t.openType ? i("span", {on: {click: t.aboutClick}}, [t._v("help")]) : i("span", {
                    staticStyle: {
                        opacity: "0.5",
                        cursor: "not-allowed"
                    }
                }, [t._v("help")]), t.openType ? i("span", {on: {click: t.modeChange}}, [i("i", {class: [t.removing ? "removeIcon" : "drawIcon", "icon"]})]) : i("span", {
                    staticStyle: {
                        opacity: "0.5",
                        cursor: "not-allowed"
                    }
                }, [i("i", {staticClass: "drawIcon icon"})]), t.openType ? i("span", [i("a", {attrs: {href: t.advanced_final_version_url}}, [i("i", {staticClass: "downloadIcon icon"})])]) : t._e()])], 1)])])
            }, U = [], F = function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    ref: "canvasWrap",
                    staticClass: "canvasWrap",
                    style: "width:" + t.width + "px"
                }, [i("div", {staticClass: "moveLine", class: {moveAn: t.moveAnType}}), i("canvas", {
                    ref: "musicalCanvas",
                    style: {background: t.backgroudColor, width: "975px", height: this.canvasHeight + "px"}
                })])
            }, B = [], O = {
                props: {
                    moveAnType: Boolean,
                    backgroudColor: {type: String, default: "#FFFFFF"},
                    width: {type: Number, default: 1e3},
                    height: {type: Number, default: 550},
                    ylineColor: {type: String, default: "#ccc"},
                    xlineColor: {type: String, default: "#ccc"},
                    bottomLineColor: {type: String, default: "red"},
                    topLineColor: {type: String, default: "#5883ea"},
                    curveLineColor: {type: String, default: "#9999FF"},
                    dotColor: {type: String, default: "#9999FF"},
                    dotSize: {type: Number, default: 4},
                    dotIndexList: {
                        type: Array, default: function () {
                            return []
                        }
                    },
                    modeofapp: {type: Boolean, default: !1},
                    lockView: {type: Boolean, default: !1}
                }, data: function () {
                    return {
                        canvasWidth: 975,
                        ctx: "",
                        xCoordinate: [],
                        yCoordinate: [],
                        spanX: 15,
                        spanY: 32,
                        leftTitle: [],
                        bottomTitle: [],
                        recordList: [],
                        dotList: [],
                        offsetY: 4,
                        recording: !1
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
                        for (var t = [], e = 0; e <= 64; e++) t.push(e);
                        for (var i = [], s = 1; s <= 16; s++) i.push(s);
                        this.bottomTitle = t, this.leftTitle = i
                    }, redraw: function () {
                        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight), this.createTitle(), this.drawCoordinateLine(), this.drawDotList()
                    }, drawTitle: function () {
                        var t = this;
                        this.leftTitle.map((function (e, i) {
                            t.ctx.fillStyle = "#fff", t.ctx.textAlign = "center", t.ctx.fillText(i, 10, t.height - e * t.spanY - t.offsetY - 4)
                        })), this.bottomTitle.map((function (e, i) {
                            t.ctx.fillStyle = "#333333", t.ctx.fillText(.5 * e, t.spanX * (i + 1) + t.spanX / 2, t.height - 4), t.ctx.textAlign = "center"
                        }))
                    }, drawCoordinateLine: function () {
                        var t = this;
                        this.leftTitle.map((function (e, i) {
                            var s = 15, o = t.height - e * t.spanY - t.offsetY, n = t.canvasWidth,
                                a = t.height - e * t.spanY - t.offsetY, r = !1;
                            t.ctx.lineWidth = 2, 1 == e && (r = !0, t.ctx.strokeStyle = t.bottomLineColor), 2 == e && (r = !0, t.ctx.strokeStyle = t.bottomLineColor), 10 == e && (r = !0, t.ctx.strokeStyle = t.topLineColor), 9 == e && (r = !0, t.ctx.strokeStyle = t.topLineColor), 1 == r && (t.ctx.beginPath(), t.ctx.moveTo(s, o), t.ctx.lineTo(n, a), t.ctx.stroke(), t.ctx.closePath())
                        })), this.ctx.strokeStyle = "#000000", this.ctx.beginPath(), this.ctx.moveTo(15, 4), this.ctx.lineTo(this.canvasWidth, 4), this.ctx.stroke(), this.ctx.moveTo(this.canvasWidth - 1, 4), this.ctx.lineTo(this.canvasWidth - 1, 515), this.ctx.stroke(), this.ctx.moveTo(15, 4), this.ctx.lineTo(15, 515), this.ctx.stroke(), this.ctx.closePath()
                    }, drawDotList: function () {
                        this.dotList.length;
                        for (var t in this.dotList) {
                            var e = this.dotList[t];
                            if (this.drawDot(e.x, e.y, e.type), t > 0) {
                                var i = this.dotList[t - 1], s = this.dotList[t], o = {x: i.x, y: i.y},
                                    n = {x: s.x, y: s.y}, a = s.x - i.x;
                                s.y, i.y;
                                s.y < i.y ? (o = {x: i.x + a / 4, y: i.y}, n = {
                                    x: s.x - a / 4,
                                    y: s.y
                                }) : s.y > i.y && (o = {x: i.x + a / 4, y: i.y}, n = {
                                    x: s.x - a / 4,
                                    y: s.y
                                }), this.drawCurve(i.x, i.y, o.x, o.y, n.x, n.y, s.x, s.y)
                            }
                        }
                    }, drawDot: function (t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "solid";
                        this.ctx.fillStyle = this.dotColor, this.ctx.strokeStyle = this.dotColor, this.ctx.beginPath(), this.ctx.arc(t, e, this.dotSize, 0, 2 * Math.PI), "solid" === i ? this.ctx.fill() : "hollow" == i && this.ctx.stroke()
                    }, startrecording: function (t) {
                        this.recording = !0
                    }, finishrecording: function (t) {
                        this.recording = !1
                    }, onMouseOut: function (t) {
                        this.recording = !1
                    }, addDot: function (t) {
                        if (0 == this.modeofapp && t.offsetX && t.offsetY) {
                            var e = t.offsetX;
                            console.log("e.offsetx" + e);
                            var i = t.offsetY;
                            if (e < this.spanX) return;
                            if (i > this.canvasHeight - this.spanY) return;
                            if (i < 7) return;
                            var s = this.correctDotPosition(e, i), o = !1, n = -1;
                            this.dotList.map((function (t, e) {
                                t.x == s.x && (o = !0, n = e)
                            })), o ? this.dotList[n] = s : this.dotList.push(s), this.dotList.sort((function (t, e) {
                                return t.x - e.x
                            })), this.redraw(), this.lockView && this.scrollToMid(s.x, s.y), this.dotListToIndexList()
                        }
                    }, removeDot: function (t) {
                        if (t.offsetX && t.offsetY) {
                            var e = t.offsetX, i = t.offsetY;
                            if (e < this.spanX) return;
                            if (i > this.canvasHeight - this.spanY) return;
                            var s = this.correctDotPosition(e, i), o = !1, n = -1;
                            this.dotList.map((function (t, e) {
                                Math.abs(t.x - s.x) < 5 && (o = !0, n = e)
                            })), o && (this.dotList.splice(n, 1), this.dotList.sort((function (t, e) {
                                return t.x - e.x
                            })), this.redraw(), this.lockView && this.scrollToMid(s.x, s.y), this.dotListToIndexList())
                        }
                    }, correctDotPosition: function (t, e) {
                        var i = parseInt((this.canvasHeight - e) / this.spanY), s = i * this.spanY, o = "solid";
                        1 == i && (o = "hollow"), e = this.canvasHeight - s - this.spanY / 2 - this.dotSize / 2;
                        var n = t % this.spanX;
                        n > this.spanY / 2 ? t -= n - this.spanX / 2 : t += this.spanX / 2 - n, console.log("the dot position is " + t);
                        var a = {x: t, y: e, type: o};
                        return a
                    }, drawCurve: function (t, e, i, s, o, n, a, r) {
                        this.ctx.fillStyle = this.curveLineColor, this.ctx.strokeStyle = this.curveLineColor, this.ctx.beginPath(), this.ctx.moveTo(t, e), this.ctx.bezierCurveTo(i, s, o, n, a, r), this.ctx.stroke()
                    }, addLine: function (t, e, i, s) {
                        this.ctx.fillStyle = this.curveLineColor, this.ctx.strokeStyle = this.curveLineColor, this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.moveTo(t, e), this.drawLine(i, s)
                    }, drawLine: function (t, e) {
                        this.ctx.lineTo(t, e), this.ctx.stroke()
                    }, addlister: function (t) {
                        t.addEventListener("mousedown", this.startrecording), t.addEventListener("dblclick", this.removeDot), t.addEventListener("mousemove", this.onMouseEvent), t.addEventListener("mouseup", this.finishrecording), t.addEventListener("click", this.addDot), t.addEventListener("mouseout", this.onMouseOut)
                    }, scrollToMid: function (t, e) {
                        if (this.dotList.length) {
                            var i = this.width / 2;
                            if (t > i) {
                                var s = t - i;
                                this.$refs.canvasWrap.scrollLeft = s
                            } else this.$refs.canvasWrap.scrollLeft = 0
                        }
                    }, dotListToIndexList: function () {
                        var t = this, e = this.dotList.map((function (e) {
                            var i = 2 * parseInt((e.x - t.spanX) / t.spanX) - 1,
                                s = parseInt((t.canvasHeight - e.y - t.spanY) / t.spanY);
                            return {x: i, y: s}
                        }));
                        this.$emit("onChange", e), console.log("list==========", e)
                    }, indexListToDotList: function (t) {
                        var e = this;
                        this.dotList = t.map((function (t) {
                            var i = 0;
                            i = t.x < 0 ? t.x * e.spanX + 2 * e.spanX + e.spanX / 2 : parseInt(.5 * t.x) * e.spanX + 2 * e.spanX + e.spanX / 2;
                            var s = e.canvasHeight - (t.y * e.spanY + e.spanY + e.spanY / 2 + e.offsetY - .5);
                            return {x: i, y: s, type: 0 == t.y ? "hollow" : "solid"}
                        })), this.redraw()
                    }, onMouseEvent: function (t) {
                        1 == this.recording && (1 == this.modeofapp ? this.removeDot(t) : this.addDot(t))
                    }
                }
            }, H = O, W = (i("7621"), Object(u["a"])(H, F, B, !1, null, "f41dcbc0", null)), N = W.exports, j = {
                components: {AdvancedMusicalNote: N}, data: function () {
                    return {
                        initialized: !1,
                        mixType: !1,
                        removing: !1,
                        timeType: 0,
                        moveAnType: !1,
                        playType: !1,
                        audioType: !0,
                        aboutType: !1,
                        maskType: !1,
                        openType: !0,
                        baseURL: x.baseURL,
                        audio_url: x.baseURL + "/static/finalversionAd.wav",
                        advanced_final_version_url: x.baseURL + "/downloadAd",
                        dotList: [],
                        lineData: ["None", "C-3", "D-3", "E-3", "F-3", "G-3", "A-3", "B-3", "C-4", "D-4", "E-4", "F-4", "G-4", "A-4", "B-4", "C-5"],
                        params: {notes: []},
                        dispalyList: [],
                        backNotes: [],
                        num: 15,
                        playStatus: "over"
                    }
                }, watch: {}, methods: {
                    closeIcoClick: function () {
                        this.aboutType = !1
                    }, aboutClick: function () {
                        this.aboutType = !0
                    }, modeChange: function () {
                        this.removing = !this.removing
                    }, handlerPlay: function () {
                        console.log("走着路--------------");
                        var t = document.querySelector("#my_audio");
                        t.currentTime = 0, console.log("点击当前时间", t.currentTime);
                        var e = this;
                        if (this.playStatus = t.paused, !t.paused) return e.moveAnType = !1, e.timeType = 1, e.audio_url = this.baseURL + "/static/finalversion.wav?t=" + (new Date).getTime(), void (e.playStatus = "over");
                        console.log("play has been paused."), e.timeType = 0, setTimeout((function () {
                            console.log("timeType", e.timeType), 0 == e.timeType ? e.moveAnType = !0 : e.moveAnType = !1
                        }), 2400), t.play(), e.playStatus = "doing", t.addEventListener("ended", (function () {
                            e.playStatus = "over", console.log("this.moveAnType5555555", this.moveAnType)
                        }))
                    }, deleteData: function () {
                        this.playType = !1, this.mixType = !1, this.dotList = [], this.dispalyList = [], this.params = {notes: []};
                        var t = document.querySelector("#my_audio");
                        t.pause(), this.playStatus = t.paused, this.playStatus = "over", this.moveAnType = !1, t.currentTime = 0
                    }, mixHas: function () {
                        var t = this;
                        this.initialized = !0, this.maskType = !0, this.audioType = !1, console.log("the parameter is " + this.params), C(this.params).then((function (e) {
                            t.playType = !0, t.dotList = S.yinListToPosition(e.notes, t.lineData), t.dispalyList = S.yinListToDisplayList(e.notes, t.lineData), t.maskType = !1, t.audioType = !0, t.audio_url = t.baseURL + "/static/finalversion.wav?t=" + (new Date).getTime()
                        }))
                    }, getAllPosition: function (t) {
                        0 == this.initialized && (this.playType = !1);
                        var e = document.querySelector("#my_audio");
                        e.pause(), this.playStatus = e.paused, this.moveAnType = !1, this.playStatus = "over", this.params.notes = S.positionListToYinList(t, this.lineData), console.log("param" + this.params.notes), this.params.notes.length > 0 ? this.mixType = !0 : this.mixType = !1, this.dispalyList = S.yinListToDisplayList(this.params.notes, this.lineData)
                    }
                }, mounted: function () {
                    console.log(1111111111)
                }
            }, $ = j, z = (i("6567"), Object(u["a"])($, R, U, !1, null, null, null)), V = z.exports;
        s["a"].use(o["a"]);
        var G = new o["a"]({
            routes: [{path: "/", component: A}, {path: "/Classical", component: A}, {
                path: "/Advance",
                component: V
            }]
        });
        s["a"].config.productionTip = !1, new s["a"]({
            render: function (t) {
                return t(P)
            }, router: G
        }).$mount("#app")
    }, 6567: function (t, e, i) {
        "use strict";
        var s = i("76ee"), o = i.n(s);
        o.a
    }, 7621: function (t, e, i) {
        "use strict";
        var s = i("cf68"), o = i.n(s);
        o.a
    }, "76ee": function (t, e, i) {
    }, "7bd5": function (t, e, i) {
        "use strict";
        var s = i("bd4f"), o = i.n(s);
        o.a
    }, "88d7": function (t, e, i) {
    }, bd4f: function (t, e, i) {
    }, cf68: function (t, e, i) {
    }, d7be: function (t, e, i) {
    }
});
//# sourceMappingURL=app.0384c042.js.map
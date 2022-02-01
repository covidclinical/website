! function (e, t) {
     "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("vega"), require("vega-lite")) : "function" == typeof define && define.amd ? define(["vega", "vega-lite"], t) : (e = e || self).vegaEmbed = t(e.vega, e.vegaLite)
}(this, (function (e, t) {
     "use strict";
     var r = "6.5.2";
     /*! *****************************************************************************
         Copyright (c) Microsoft Corporation. All rights reserved.
         Licensed under the Apache License, Version 2.0 (the "License"); you may not use
         this file except in compliance with the License. You may obtain a copy of the
         License at http://www.apache.org/licenses/LICENSE-2.0

         THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
         WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
         MERCHANTABLITY OR NON-INFRINGEMENT.

         See the Apache Version 2.0 License for specific language governing permissions
         and limitations under the License.
         ***************************************************************************** */
     function n(e, t, r, n) {
          return new(r || (r = Promise))((function (o, i) {
               function a(e) {
                    try {
                         l(n.next(e))
                    } catch (e) {
                         i(e)
                    }
               }

               function s(e) {
                    try {
                         l(n.throw(e))
                    } catch (e) {
                         i(e)
                    }
               }

               function l(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                         e(t)
                    }))).then(a, s)
               }
               l((n = n.apply(e, t || [])).next())
          }))
     }
     /*!
      * https://github.com/Starcounter-Jack/JSON-Patch
      * (c) 2017 Joachim Wester
      * MIT license
      */
     var o, i = (o = function (e, t) {
               return (o = Object.setPrototypeOf || {
                         __proto__: []
                    }
                    instanceof Array && function (e, t) {
                         e.__proto__ = t
                    } || function (e, t) {
                         for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    })(e, t)
          }, function (e, t) {
               function r() {
                    this.constructor = e
               }
               o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
          }),
          a = Object.prototype.hasOwnProperty;

     function s(e, t) {
          return a.call(e, t)
     }

     function l(e) {
          if (Array.isArray(e)) {
               for (var t = new Array(e.length), r = 0; r < t.length; r++) t[r] = "" + r;
               return t
          }
          if (Object.keys) return Object.keys(e);
          t = [];
          for (var n in e) s(e, n) && t.push(n);
          return t
     }

     function c(e) {
          switch (typeof e) {
               case "object":
                    return JSON.parse(JSON.stringify(e));
               case "undefined":
                    return null;
               default:
                    return e
          }
     }

     function d(e) {
          for (var t, r = 0, n = e.length; r < n;) {
               if (!((t = e.charCodeAt(r)) >= 48 && t <= 57)) return !1;
               r++
          }
          return !0
     }

     function p(e) {
          return -1 === e.indexOf("/") && -1 === e.indexOf("~") ? e : e.replace(/~/g, "~0").replace(/\//g, "~1")
     }

     function f(e) {
          return e.replace(/~1/g, "/").replace(/~0/g, "~")
     }

     function u(e, t) {
          var r = [e];
          for (var n in t) {
               var o = "object" == typeof t[n] ? JSON.stringify(t[n], null, 2) : t[n];
               void 0 !== o && r.push(n + ": " + o)
          }
          return r.join("\n")
     }
     var h = function (e) {
               function t(t, r, n, o, i) {
                    var a = this.constructor,
                         s = e.call(this, u(t, {
                              name: r,
                              index: n,
                              operation: o,
                              tree: i
                         })) || this;
                    return s.name = r, s.index = n, s.operation = o, s.tree = i, Object.setPrototypeOf(s, a.prototype), s.message = u(t, {
                         name: r,
                         index: n,
                         operation: o,
                         tree: i
                    }), s
               }
               return i(t, e), t
          }(Error),
          v = h,
          g = c,
          m = {
               add: function (e, t, r) {
                    return e[t] = this.value, {
                         newDocument: r
                    }
               },
               remove: function (e, t, r) {
                    var n = e[t];
                    return delete e[t], {
                         newDocument: r,
                         removed: n
                    }
               },
               replace: function (e, t, r) {
                    var n = e[t];
                    return e[t] = this.value, {
                         newDocument: r,
                         removed: n
                    }
               },
               move: function (e, t, r) {
                    var n = b(r, this.path);
                    n && (n = c(n));
                    var o = y(r, {
                         op: "remove",
                         path: this.from
                    }).removed;
                    return y(r, {
                         op: "add",
                         path: this.path,
                         value: o
                    }), {
                         newDocument: r,
                         removed: n
                    }
               },
               copy: function (e, t, r) {
                    var n = b(r, this.from);
                    return y(r, {
                         op: "add",
                         path: this.path,
                         value: c(n)
                    }), {
                         newDocument: r
                    }
               },
               test: function (e, t, r) {
                    return {
                         newDocument: r,
                         test: A(e[t], this.value)
                    }
               },
               _get: function (e, t, r) {
                    return this.value = e[t], {
                         newDocument: r
                    }
               }
          },
          E = {
               add: function (e, t, r) {
                    return d(t) ? e.splice(t, 0, this.value) : e[t] = this.value, {
                         newDocument: r,
                         index: t
                    }
               },
               remove: function (e, t, r) {
                    return {
                         newDocument: r,
                         removed: e.splice(t, 1)[0]
                    }
               },
               replace: function (e, t, r) {
                    var n = e[t];
                    return e[t] = this.value, {
                         newDocument: r,
                         removed: n
                    }
               },
               move: m.move,
               copy: m.copy,
               test: m.test,
               _get: m._get
          };

     function b(e, t) {
          if ("" == t) return e;
          var r = {
               op: "_get",
               path: t
          };
          return y(e, r), r.value
     }

     function y(e, t, r, n, o, i) {
          if (void 0 === r && (r = !1), void 0 === n && (n = !0), void 0 === o && (o = !0), void 0 === i && (i = 0), r && ("function" == typeof r ? r(t, 0, e, t.path) : w(t, 0)), "" === t.path) {
               var a = {
                    newDocument: e
               };
               if ("add" === t.op) return a.newDocument = t.value, a;
               if ("replace" === t.op) return a.newDocument = t.value, a.removed = e, a;
               if ("move" === t.op || "copy" === t.op) return a.newDocument = b(e, t.from), "move" === t.op && (a.removed = e), a;
               if ("test" === t.op) {
                    if (a.test = A(e, t.value), !1 === a.test) throw new v("Test operation failed", "TEST_OPERATION_FAILED", i, t, e);
                    return a.newDocument = e, a
               }
               if ("remove" === t.op) return a.removed = e, a.newDocument = null, a;
               if ("_get" === t.op) return t.value = e, a;
               if (r) throw new v("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", i, t, e);
               return a
          }
          n || (e = c(e));
          var s = (t.path || "").split("/"),
               l = e,
               p = 1,
               u = s.length,
               h = void 0,
               g = void 0,
               y = void 0;
          for (y = "function" == typeof r ? r : w;;) {
               if (g = s[p], o && "__proto__" == g) throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
               if (r && void 0 === h && (void 0 === l[g] ? h = s.slice(0, p).join("/") : p == u - 1 && (h = t.path), void 0 !== h && y(t, 0, e, h)), p++, Array.isArray(l)) {
                    if ("-" === g) g = l.length;
                    else {
                         if (r && !d(g)) throw new v("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i, t, e);
                         d(g) && (g = ~~g)
                    }
                    if (p >= u) {
                         if (r && "add" === t.op && g > l.length) throw new v("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i, t, e);
                         if (!1 === (a = E[t.op].call(t, l, g, e)).test) throw new v("Test operation failed", "TEST_OPERATION_FAILED", i, t, e);
                         return a
                    }
               } else if (g && -1 != g.indexOf("~") && (g = f(g)), p >= u) {
                    if (!1 === (a = m[t.op].call(t, l, g, e)).test) throw new v("Test operation failed", "TEST_OPERATION_FAILED", i, t, e);
                    return a
               }
               l = l[g]
          }
     }

     function O(e, t, r, n, o) {
          if (void 0 === n && (n = !0), void 0 === o && (o = !0), r && !Array.isArray(t)) throw new v("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
          n || (e = c(e));
          for (var i = new Array(t.length), a = 0, s = t.length; a < s; a++) i[a] = y(e, t[a], r, !0, o, a), e = i[a].newDocument;
          return i.newDocument = e, i
     }

     function w(e, t, r, n) {
          if ("object" != typeof e || null === e || Array.isArray(e)) throw new v("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, r);
          if (!m[e.op]) throw new v("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", t, e, r);
          if ("string" != typeof e.path) throw new v("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, r);
          if (0 !== e.path.indexOf("/") && e.path.length > 0) throw new v('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", t, e, r);
          if (("move" === e.op || "copy" === e.op) && "string" != typeof e.from) throw new v("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", t, e, r);
          if (("add" === e.op || "replace" === e.op || "test" === e.op) && void 0 === e.value) throw new v("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", t, e, r);
          if (("add" === e.op || "replace" === e.op || "test" === e.op) && function e(t) {
                    if (void 0 === t) return !0;
                    if (t)
                         if (Array.isArray(t)) {
                              for (var r = 0, n = t.length; r < n; r++)
                                   if (e(t[r])) return !0
                         } else if ("object" == typeof t) {
                         var o = l(t),
                              i = o.length;
                         for (r = 0; r < i; r++)
                              if (e(t[o[r]])) return !0
                    }
                    return !1
               }(e.value)) throw new v("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", t, e, r);
          if (r)
               if ("add" == e.op) {
                    var o = e.path.split("/").length,
                         i = n.split("/").length;
                    if (o !== i + 1 && o !== i) throw new v("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", t, e, r)
               } else if ("replace" === e.op || "remove" === e.op || "_get" === e.op) {
               if (e.path !== n) throw new v("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", t, e, r)
          } else if ("move" === e.op || "copy" === e.op) {
               var a = I([{
                    op: "_get",
                    path: e.from,
                    value: void 0
               }], r);
               if (a && "OPERATION_PATH_UNRESOLVABLE" === a.name) throw new v("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", t, e, r)
          }
     }

     function I(e, t, r) {
          try {
               if (!Array.isArray(e)) throw new v("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
               if (t) O(c(t), c(e), r || !0);
               else {
                    r = r || w;
                    for (var n = 0; n < e.length; n++) r(e[n], n, t, void 0)
               }
          } catch (e) {
               if (e instanceof v) return e;
               throw e
          }
     }

     function A(e, t) {
          if (e === t) return !0;
          if (e && t && "object" == typeof e && "object" == typeof t) {
               var r, n, o, i = Array.isArray(e),
                    a = Array.isArray(t);
               if (i && a) {
                    if ((n = e.length) != t.length) return !1;
                    for (r = n; 0 != r--;)
                         if (!A(e[r], t[r])) return !1;
                    return !0
               }
               if (i != a) return !1;
               var s = Object.keys(e);
               if ((n = s.length) !== Object.keys(t).length) return !1;
               for (r = n; 0 != r--;)
                    if (!t.hasOwnProperty(s[r])) return !1;
               for (r = n; 0 != r--;)
                    if (!A(e[o = s[r]], t[o])) return !1;
               return !0
          }
          return e != e && t != t
     }
     var N = Object.freeze({
               __proto__: null,
               JsonPatchError: v,
               deepClone: g,
               getValueByPointer: b,
               applyOperation: y,
               applyPatch: O,
               applyReducer: function (e, t, r) {
                    var n = y(e, t);
                    if (!1 === n.test) throw new v("Test operation failed", "TEST_OPERATION_FAILED", r, t, e);
                    return n.newDocument
               },
               validator: w,
               validate: I,
               _areEquals: A
          }),
          R = new WeakMap,
          $ = function (e) {
               this.observers = new Map, this.obj = e
          },
          L = function (e, t) {
               this.callback = e, this.observer = t
          };
     /*!
      * https://github.com/Starcounter-Jack/JSON-Patch
      * (c) 2017 Joachim Wester
      * MIT license
      */
     function T(e, t) {
          void 0 === t && (t = !1);
          var r = R.get(e.object);
          S(r.value, e.object, e.patches, "", t), e.patches.length && O(r.value, e.patches);
          var n = e.patches;
          return n.length > 0 && (e.patches = [], e.callback && e.callback(n)), n
     }

     function S(e, t, r, n, o) {
          if (t !== e) {
               "function" == typeof t.toJSON && (t = t.toJSON());
               for (var i = l(t), a = l(e), d = !1, f = a.length - 1; f >= 0; f--) {
                    var u = e[v = a[f]];
                    if (!s(t, v) || void 0 === t[v] && void 0 !== u && !1 === Array.isArray(t)) Array.isArray(e) === Array.isArray(t) ? (o && r.push({
                         op: "test",
                         path: n + "/" + p(v),
                         value: c(u)
                    }), r.push({
                         op: "remove",
                         path: n + "/" + p(v)
                    }), d = !0) : (o && r.push({
                         op: "test",
                         path: n,
                         value: e
                    }), r.push({
                         op: "replace",
                         path: n,
                         value: t
                    }));
                    else {
                         var h = t[v];
                         "object" == typeof u && null != u && "object" == typeof h && null != h ? S(u, h, r, n + "/" + p(v), o) : u !== h && (o && r.push({
                              op: "test",
                              path: n + "/" + p(v),
                              value: c(u)
                         }), r.push({
                              op: "replace",
                              path: n + "/" + p(v),
                              value: c(h)
                         }))
                    }
               }
               if (d || i.length != a.length)
                    for (f = 0; f < i.length; f++) {
                         var v;
                         s(e, v = i[f]) || void 0 === t[v] || r.push({
                              op: "add",
                              path: n + "/" + p(v),
                              value: c(t[v])
                         })
                    }
          }
     }
     var C = Object.freeze({
          __proto__: null,
          unobserve: function (e, t) {
               t.unobserve()
          },
          observe: function (e, t) {
               var r, n = function (e) {
                    return R.get(e)
               }(e);
               if (n) {
                    var o = function (e, t) {
                         return e.observers.get(t)
                    }(n, t);
                    r = o && o.observer
               } else n = new $(e), R.set(e, n);
               if (r) return r;
               if (r = {}, n.value = c(e), t) {
                    r.callback = t, r.next = null;
                    var i = function () {
                              T(r)
                         },
                         a = function () {
                              clearTimeout(r.next), r.next = setTimeout(i)
                         };
                    "undefined" != typeof window && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a))
               }
               return r.patches = [], r.object = e, r.unobserve = function () {
                    T(r), clearTimeout(r.next),
                         function (e, t) {
                              e.observers.delete(t.callback)
                         }(n, r), "undefined" != typeof window && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a))
               }, n.observers.set(t, new L(t, r)), r
          },
          generate: T,
          compare: function (e, t, r) {
               void 0 === r && (r = !1);
               var n = [];
               return S(e, t, n, "", r), n
          }
     });
     Object.assign({}, N, C, {
          JsonPatchError: h,
          deepClone: c,
          escapePathComponent: p,
          unescapePathComponent: f
     });
     var x = /("(?:[^\\"]|\\.)*")|[:,]/g,
          D = function (e, t) {
               var r, n, o;
               return t = t || {}, r = JSON.stringify([1], void 0, void 0 === t.indent ? 2 : t.indent).slice(2, -3), n = "" === r ? 1 / 0 : void 0 === t.maxLength ? 80 : t.maxLength, o = t.replacer,
                    function e(t, i, a) {
                         var s, l, c, d, p, f, u, h, v, g, m, E;
                         if (t && "function" == typeof t.toJSON && (t = t.toJSON()), void 0 === (m = JSON.stringify(t, o))) return m;
                         if (u = n - i.length - a, m.length <= u && (v = m.replace(x, (function (e, t) {
                                   return t || e + " "
                              }))).length <= u) return v;
                         if (null != o && (t = JSON.parse(m), o = void 0), "object" == typeof t && null !== t) {
                              if (h = i + r, c = [], l = 0, Array.isArray(t))
                                   for (g = "[", s = "]", u = t.length; l < u; l++) c.push(e(t[l], h, l === u - 1 ? 0 : 1) || "null");
                              else
                                   for (g = "{", s = "}", u = (f = Object.keys(t)).length; l < u; l++) d = f[l], p = JSON.stringify(d) + ": ", void 0 !== (E = e(t[d], h, p.length + (l === u - 1 ? 0 : 1))) && c.push(p + E);
                              if (c.length > 0) return [g, r + c.join(",\n" + h), s].join("\n" + i)
                         }
                         return m
                    }(e, "", 0)
          };

     function F(e, t) {
          return e(t = {
               exports: {}
          }, t.exports), t.exports
     }
     var _ = {
          SEMVER_SPEC_VERSION: "2.0.0",
          MAX_LENGTH: 256,
          MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
          MAX_SAFE_COMPONENT_LENGTH: 16
     };
     var P = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {},
          k = F((function (e, t) {
               const {
                    MAX_SAFE_COMPONENT_LENGTH: r
               } = _, n = (t = e.exports = {}).re = [], o = t.src = [], i = t.t = {};
               let a = 0;
               const s = (e, t, r) => {
                    const s = a++;
                    P(s, t), i[e] = s, o[s] = t, n[s] = new RegExp(t, r ? "g" : void 0)
               };
               s("NUMERICIDENTIFIER", "0|[1-9]\\d*"), s("NUMERICIDENTIFIERLOOSE", "[0-9]+"), s("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), s("MAINVERSION", `(${o[i.NUMERICIDENTIFIER]})\\.` + `(${o[i.NUMERICIDENTIFIER]})\\.` + `(${o[i.NUMERICIDENTIFIER]})`), s("MAINVERSIONLOOSE", `(${o[i.NUMERICIDENTIFIERLOOSE]})\\.` + `(${o[i.NUMERICIDENTIFIERLOOSE]})\\.` + `(${o[i.NUMERICIDENTIFIERLOOSE]})`), s("PRERELEASEIDENTIFIER", `(?:${o[i.NUMERICIDENTIFIER]}|${o[i.NONNUMERICIDENTIFIER]})`), s("PRERELEASEIDENTIFIERLOOSE", `(?:${o[i.NUMERICIDENTIFIERLOOSE]}|${o[i.NONNUMERICIDENTIFIER]})`), s("PRERELEASE", `(?:-(${o[i.PRERELEASEIDENTIFIER]}(?:\\.${o[i.PRERELEASEIDENTIFIER]})*))`), s("PRERELEASELOOSE", `(?:-?(${o[i.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[i.PRERELEASEIDENTIFIERLOOSE]})*))`), s("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), s("BUILD", `(?:\\+(${o[i.BUILDIDENTIFIER]}(?:\\.${o[i.BUILDIDENTIFIER]})*))`), s("FULLPLAIN", `v?${o[i.MAINVERSION]}${o[i.PRERELEASE]}?${o[i.BUILD]}?`), s("FULL", `^${o[i.FULLPLAIN]}$`), s("LOOSEPLAIN", `[v=\\s]*${o[i.MAINVERSIONLOOSE]}${o[i.PRERELEASELOOSE]}?${o[i.BUILD]}?`), s("LOOSE", `^${o[i.LOOSEPLAIN]}$`), s("GTLT", "((?:<|>)?=?)"), s("XRANGEIDENTIFIERLOOSE", `${o[i.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), s("XRANGEIDENTIFIER", `${o[i.NUMERICIDENTIFIER]}|x|X|\\*`), s("XRANGEPLAIN", `[v=\\s]*(${o[i.XRANGEIDENTIFIER]})` + `(?:\\.(${o[i.XRANGEIDENTIFIER]})` + `(?:\\.(${o[i.XRANGEIDENTIFIER]})` + `(?:${o[i.PRERELEASE]})?${o[i.BUILD]}?` + ")?)?"), s("XRANGEPLAINLOOSE", `[v=\\s]*(${o[i.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${o[i.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${o[i.XRANGEIDENTIFIERLOOSE]})` + `(?:${o[i.PRERELEASELOOSE]})?${o[i.BUILD]}?` + ")?)?"), s("XRANGE", `^${o[i.GTLT]}\\s*${o[i.XRANGEPLAIN]}$`), s("XRANGELOOSE", `^${o[i.GTLT]}\\s*${o[i.XRANGEPLAINLOOSE]}$`), s("COERCE", `(^|[^\\d])(\\d{1,${r}})` + `(?:\\.(\\d{1,${r}}))?` + `(?:\\.(\\d{1,${r}}))?` + "(?:$|[^\\d])"), s("COERCERTL", o[i.COERCE], !0), s("LONETILDE", "(?:~>?)"), s("TILDETRIM", `(\\s*)${o[i.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", s("TILDE", `^${o[i.LONETILDE]}${o[i.XRANGEPLAIN]}$`), s("TILDELOOSE", `^${o[i.LONETILDE]}${o[i.XRANGEPLAINLOOSE]}$`), s("LONECARET", "(?:\\^)"), s("CARETTRIM", `(\\s*)${o[i.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", s("CARET", `^${o[i.LONECARET]}${o[i.XRANGEPLAIN]}$`), s("CARETLOOSE", `^${o[i.LONECARET]}${o[i.XRANGEPLAINLOOSE]}$`), s("COMPARATORLOOSE", `^${o[i.GTLT]}\\s*(${o[i.LOOSEPLAIN]})$|^$`), s("COMPARATOR", `^${o[i.GTLT]}\\s*(${o[i.FULLPLAIN]})$|^$`), s("COMPARATORTRIM", `(\\s*)${o[i.GTLT]}\\s*(${o[i.LOOSEPLAIN]}|${o[i.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", s("HYPHENRANGE", `^\\s*(${o[i.XRANGEPLAIN]})` + "\\s+-\\s+" + `(${o[i.XRANGEPLAIN]})` + "\\s*$"), s("HYPHENRANGELOOSE", `^\\s*(${o[i.XRANGEPLAINLOOSE]})` + "\\s+-\\s+" + `(${o[i.XRANGEPLAINLOOSE]})` + "\\s*$"), s("STAR", "(<|>)?=?\\s*\\*")
          }));
     k.re, k.src, k.t, k.tildeTrimReplace, k.caretTrimReplace, k.comparatorTrimReplace;
     const j = /^[0-9]+$/,
          z = (e, t) => {
               const r = j.test(e),
                    n = j.test(t);
               return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
          };
     var M = {
          compareIdentifiers: z,
          rcompareIdentifiers: (e, t) => z(t, e)
     };
     const {
          MAX_LENGTH: B,
          MAX_SAFE_INTEGER: G
     } = _, {
          re: U,
          t: X
     } = k, {
          compareIdentifiers: V
     } = M;
     class W {
          constructor(e, t) {
               if (t && "object" == typeof t || (t = {
                         loose: !!t,
                         includePrerelease: !1
                    }), e instanceof W) {
                    if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                    e = e.version
               } else if ("string" != typeof e) throw new TypeError(`Invalid Version: ${e}`);
               if (e.length > B) throw new TypeError(`version is longer than ${B} characters`);
               P("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
               const r = e.trim().match(t.loose ? U[X.LOOSE] : U[X.FULL]);
               if (!r) throw new TypeError(`Invalid Version: ${e}`);
               if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > G || this.major < 0) throw new TypeError("Invalid major version");
               if (this.minor > G || this.minor < 0) throw new TypeError("Invalid minor version");
               if (this.patch > G || this.patch < 0) throw new TypeError("Invalid patch version");
               r[4] ? this.prerelease = r[4].split(".").map(e => {
                    if (/^[0-9]+$/.test(e)) {
                         const t = +e;
                         if (t >= 0 && t < G) return t
                    }
                    return e
               }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format()
          }
          format() {
               return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
          }
          toString() {
               return this.version
          }
          compare(e) {
               if (P("SemVer.compare", this.version, this.options, e), !(e instanceof W)) {
                    if ("string" == typeof e && e === this.version) return 0;
                    e = new W(e, this.options)
               }
               return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
          }
          compareMain(e) {
               return e instanceof W || (e = new W(e, this.options)), V(this.major, e.major) || V(this.minor, e.minor) || V(this.patch, e.patch)
          }
          comparePre(e) {
               if (e instanceof W || (e = new W(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
               if (!this.prerelease.length && e.prerelease.length) return 1;
               if (!this.prerelease.length && !e.prerelease.length) return 0;
               let t = 0;
               do {
                    const r = this.prerelease[t],
                         n = e.prerelease[t];
                    if (P("prerelease compare", t, r, n), void 0 === r && void 0 === n) return 0;
                    if (void 0 === n) return 1;
                    if (void 0 === r) return -1;
                    if (r !== n) return V(r, n)
               } while (++t)
          }
          compareBuild(e) {
               e instanceof W || (e = new W(e, this.options));
               let t = 0;
               do {
                    const r = this.build[t],
                         n = e.build[t];
                    if (P("prerelease compare", t, r, n), void 0 === r && void 0 === n) return 0;
                    if (void 0 === n) return 1;
                    if (void 0 === r) return -1;
                    if (r !== n) return V(r, n)
               } while (++t)
          }
          inc(e, t) {
               switch (e) {
                    case "premajor":
                         this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                         break;
                    case "preminor":
                         this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                         break;
                    case "prepatch":
                         this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                         break;
                    case "prerelease":
                         0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                         break;
                    case "major":
                         0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                         break;
                    case "minor":
                         0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                         break;
                    case "patch":
                         0 === this.prerelease.length && this.patch++, this.prerelease = [];
                         break;
                    case "pre":
                         if (0 === this.prerelease.length) this.prerelease = [0];
                         else {
                              let e = this.prerelease.length;
                              for (; --e >= 0;) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, e = -2); - 1 === e && this.prerelease.push(0)
                         }
                         t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                         break;
                    default:
                         throw new Error(`invalid increment argument: ${e}`)
               }
               return this.format(), this.raw = this.version, this
          }
     }
     var H = W;
     const {
          MAX_LENGTH: q
     } = _, {
          re: J,
          t: Y
     } = k;
     var Q = (e, t) => {
          if (t && "object" == typeof t || (t = {
                    loose: !!t,
                    includePrerelease: !1
               }), e instanceof H) return e;
          if ("string" != typeof e) return null;
          if (e.length > q) return null;
          if (!(t.loose ? J[Y.LOOSE] : J[Y.FULL]).test(e)) return null;
          try {
               return new H(e, t)
          } catch (e) {
               return null
          }
     };
     var Z = (e, t) => {
          const r = Q(e, t);
          return r ? r.version : null
     };
     var K = (e, t) => {
          const r = Q(e.trim().replace(/^[=v]+/, ""), t);
          return r ? r.version : null
     };
     var ee = (e, t, r, n) => {
          "string" == typeof r && (n = r, r = void 0);
          try {
               return new H(e, r).inc(t, n).version
          } catch (e) {
               return null
          }
     };
     var te = (e, t, r) => new H(e, r).compare(new H(t, r));
     var re = (e, t, r) => 0 === te(e, t, r);
     var ne = (e, t) => {
          if (re(e, t)) return null; {
               const r = Q(e),
                    n = Q(t),
                    o = r.prerelease.length || n.prerelease.length,
                    i = o ? "pre" : "",
                    a = o ? "prerelease" : "";
               for (const e in r)
                    if (("major" === e || "minor" === e || "patch" === e) && r[e] !== n[e]) return i + e;
               return a
          }
     };
     var oe = (e, t) => new H(e, t).major;
     var ie = (e, t) => new H(e, t).minor;
     var ae = (e, t) => new H(e, t).patch;
     var se = (e, t) => {
          const r = Q(e, t);
          return r && r.prerelease.length ? r.prerelease : null
     };
     var le = (e, t, r) => te(t, e, r);
     var ce = (e, t) => te(e, t, !0);
     var de = (e, t, r) => {
          const n = new H(e, r),
               o = new H(t, r);
          return n.compare(o) || n.compareBuild(o)
     };
     var pe = (e, t) => e.sort((e, r) => de(e, r, t));
     var fe = (e, t) => e.sort((e, r) => de(r, e, t));
     var ue = (e, t, r) => te(e, t, r) > 0;
     var he = (e, t, r) => te(e, t, r) < 0;
     var ve = (e, t, r) => 0 !== te(e, t, r);
     var ge = (e, t, r) => te(e, t, r) >= 0;
     var me = (e, t, r) => te(e, t, r) <= 0;
     var Ee = (e, t, r, n) => {
          switch (t) {
               case "===":
                    return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e === r;
               case "!==":
                    return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e !== r;
               case "":
               case "=":
               case "==":
                    return re(e, r, n);
               case "!=":
                    return ve(e, r, n);
               case ">":
                    return ue(e, r, n);
               case ">=":
                    return ge(e, r, n);
               case "<":
                    return he(e, r, n);
               case "<=":
                    return me(e, r, n);
               default:
                    throw new TypeError(`Invalid operator: ${t}`)
          }
     };
     const {
          re: be,
          t: ye
     } = k;
     var Oe = (e, t) => {
          if (e instanceof H) return e;
          if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
          let r = null;
          if ((t = t || {}).rtl) {
               let t;
               for (;
                    (t = be[ye.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length);) r && t.index + t[0].length === r.index + r[0].length || (r = t), be[ye.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
               be[ye.COERCERTL].lastIndex = -1
          } else r = e.match(be[ye.COERCE]);
          return null === r ? null : Q(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`, t)
     };
     class we {
          constructor(e, t) {
               if (t && "object" == typeof t || (t = {
                         loose: !!t,
                         includePrerelease: !1
                    }), e instanceof we) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new we(e.raw, t);
               if (e instanceof Ue) return this.raw = e.value, this.set = [
                    [e]
               ], this.format(), this;
               if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(e => this.parseRange(e.trim())).filter(e => e.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${e}`);
               this.format()
          }
          format() {
               return this.range = this.set.map(e => e.join(" ").trim()).join("||").trim(), this.range
          }
          toString() {
               return this.range
          }
          parseRange(e) {
               const t = this.options.loose;
               e = e.trim();
               const r = t ? Ae[Ne.HYPHENRANGELOOSE] : Ae[Ne.HYPHENRANGE];
               e = e.replace(r, ze), P("hyphen replace", e), e = e.replace(Ae[Ne.COMPARATORTRIM], Re), P("comparator trim", e, Ae[Ne.COMPARATORTRIM]), e = (e = (e = e.replace(Ae[Ne.TILDETRIM], $e)).replace(Ae[Ne.CARETTRIM], Le)).split(/\s+/).join(" ");
               const n = t ? Ae[Ne.COMPARATORLOOSE] : Ae[Ne.COMPARATOR];
               return e.split(" ").map(e => Se(e, this.options)).join(" ").split(/\s+/).filter(this.options.loose ? e => !!e.match(n) : () => !0).map(e => new Ue(e, this.options))
          }
          intersects(e, t) {
               if (!(e instanceof we)) throw new TypeError("a Range is required");
               return this.set.some(r => Te(r, t) && e.set.some(e => Te(e, t) && r.every(r => e.every(e => r.intersects(e, t)))))
          }
          test(e) {
               if (!e) return !1;
               if ("string" == typeof e) try {
                    e = new H(e, this.options)
               } catch (e) {
                    return !1
               }
               for (let t = 0; t < this.set.length; t++)
                    if (Me(this.set[t], e, this.options)) return !0;
               return !1
          }
     }
     var Ie = we;
     const {
          re: Ae,
          t: Ne,
          comparatorTrimReplace: Re,
          tildeTrimReplace: $e,
          caretTrimReplace: Le
     } = k, Te = (e, t) => {
          let r = !0;
          const n = e.slice();
          let o = n.pop();
          for (; r && n.length;) r = n.every(e => o.intersects(e, t)), o = n.pop();
          return r
     }, Se = (e, t) => (P("comp", e, t), e = Fe(e, t), P("caret", e), e = xe(e, t), P("tildes", e), e = Pe(e, t), P("xrange", e), e = je(e, t), P("stars", e), e), Ce = e => !e || "x" === e.toLowerCase() || "*" === e, xe = (e, t) => e.trim().split(/\s+/).map(e => De(e, t)).join(" "), De = (e, t) => {
          const r = t.loose ? Ae[Ne.TILDELOOSE] : Ae[Ne.TILDE];
          return e.replace(r, (t, r, n, o, i) => {
               let a;
               return P("tilde", e, t, r, n, o, i), Ce(r) ? a = "" : Ce(n) ? a = `>=${r}.0.0 <${+r+1}.0.0` : Ce(o) ? a = `>=${r}.${n}.0 <${r}.${+n+1}.0` : i ? (P("replaceTilde pr", i), a = `>=${r}.${n}.${o}-${i} <${r}.${+n+1}.0`) : a = `>=${r}.${n}.${o} <${r}.${+n+1}.0`, P("tilde return", a), a
          })
     }, Fe = (e, t) => e.trim().split(/\s+/).map(e => _e(e, t)).join(" "), _e = (e, t) => {
          P("caret", e, t);
          const r = t.loose ? Ae[Ne.CARETLOOSE] : Ae[Ne.CARET];
          return e.replace(r, (t, r, n, o, i) => {
               let a;
               return P("caret", e, t, r, n, o, i), Ce(r) ? a = "" : Ce(n) ? a = `>=${r}.0.0 <${+r+1}.0.0` : Ce(o) ? a = "0" === r ? `>=${r}.${n}.0 <${r}.${+n+1}.0` : `>=${r}.${n}.0 <${+r+1}.0.0` : i ? (P("replaceCaret pr", i), a = "0" === r ? "0" === n ? `>=${r}.${n}.${o}-${i} <${r}.${n}.${+o+1}` : `>=${r}.${n}.${o}-${i} <${r}.${+n+1}.0` : `>=${r}.${n}.${o}-${i} <${+r+1}.0.0`) : (P("no pr"), a = "0" === r ? "0" === n ? `>=${r}.${n}.${o} <${r}.${n}.${+o+1}` : `>=${r}.${n}.${o} <${r}.${+n+1}.0` : `>=${r}.${n}.${o} <${+r+1}.0.0`), P("caret return", a), a
          })
     }, Pe = (e, t) => (P("replaceXRanges", e, t), e.split(/\s+/).map(e => ke(e, t)).join(" ")), ke = (e, t) => {
          e = e.trim();
          const r = t.loose ? Ae[Ne.XRANGELOOSE] : Ae[Ne.XRANGE];
          return e.replace(r, (r, n, o, i, a, s) => {
               P("xRange", e, r, n, o, i, a, s);
               const l = Ce(o),
                    c = l || Ce(i),
                    d = c || Ce(a),
                    p = d;
               return "=" === n && p && (n = ""), s = t.includePrerelease ? "-0" : "", l ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && p ? (c && (i = 0), a = 0, ">" === n ? (n = ">=", c ? (o = +o + 1, i = 0, a = 0) : (i = +i + 1, a = 0)) : "<=" === n && (n = "<", c ? o = +o + 1 : i = +i + 1), r = `${n+o}.${i}.${a}${s}`) : c ? r = `>=${o}.0.0${s} <${+o+1}.0.0${s}` : d && (r = `>=${o}.${i}.0${s} <${o}.${+i+1}.0${s}`), P("xRange return", r), r
          })
     }, je = (e, t) => (P("replaceStars", e, t), e.trim().replace(Ae[Ne.STAR], "")), ze = (e, t, r, n, o, i, a, s, l, c, d, p, f) => `${t=Ce(r)?"":Ce(n)?`>=${r}.0.0`:Ce(o)?`>=${r}.${n}.0`:`>=${t}`} ${s=Ce(l)?"":Ce(c)?`<${+l+1}.0.0`:Ce(d)?`<${l}.${+c+1}.0`:p?`<=${l}.${c}.${d}-${p}`:`<=${s}`}`.trim(), Me = (e, t, r) => {
          for (let r = 0; r < e.length; r++)
               if (!e[r].test(t)) return !1;
          if (t.prerelease.length && !r.includePrerelease) {
               for (let r = 0; r < e.length; r++)
                    if (P(e[r].semver), e[r].semver !== Ue.ANY && e[r].semver.prerelease.length > 0) {
                         const n = e[r].semver;
                         if (n.major === t.major && n.minor === t.minor && n.patch === t.patch) return !0
                    } return !1
          }
          return !0
     }, Be = Symbol("SemVer ANY");
     class Ge {
          static get ANY() {
               return Be
          }
          constructor(e, t) {
               if (t && "object" == typeof t || (t = {
                         loose: !!t,
                         includePrerelease: !1
                    }), e instanceof Ge) {
                    if (e.loose === !!t.loose) return e;
                    e = e.value
               }
               P("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === Be ? this.value = "" : this.value = this.operator + this.semver.version, P("comp", this)
          }
          parse(e) {
               const t = this.options.loose ? Xe[Ve.COMPARATORLOOSE] : Xe[Ve.COMPARATOR],
                    r = e.match(t);
               if (!r) throw new TypeError(`Invalid comparator: ${e}`);
               this.operator = void 0 !== r[1] ? r[1] : "", "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new H(r[2], this.options.loose) : this.semver = Be
          }
          toString() {
               return this.value
          }
          test(e) {
               if (P("Comparator.test", e, this.options.loose), this.semver === Be || e === Be) return !0;
               if ("string" == typeof e) try {
                    e = new H(e, this.options)
               } catch (e) {
                    return !1
               }
               return Ee(e, this.operator, this.semver, this.options)
          }
          intersects(e, t) {
               if (!(e instanceof Ge)) throw new TypeError("a Comparator is required");
               if (t && "object" == typeof t || (t = {
                         loose: !!t,
                         includePrerelease: !1
                    }), "" === this.operator) return "" === this.value || new Ie(e.value, t).test(this.value);
               if ("" === e.operator) return "" === e.value || new Ie(this.value, t).test(e.semver);
               const r = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e.operator),
                    n = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e.operator),
                    o = this.semver.version === e.semver.version,
                    i = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e.operator),
                    a = Ee(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
                    s = Ee(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
               return r || n || o && i || a || s
          }
     }
     var Ue = Ge;
     const {
          re: Xe,
          t: Ve
     } = k;
     var We = (e, t, r) => {
          try {
               t = new Ie(t, r)
          } catch (e) {
               return !1
          }
          return t.test(e)
     };
     var He = (e, t) => new Ie(e, t).set.map(e => e.map(e => e.value).join(" ").trim().split(" "));
     var qe = (e, t, r) => {
          let n = null,
               o = null,
               i = null;
          try {
               i = new Ie(t, r)
          } catch (e) {
               return null
          }
          return e.forEach(e => {
               i.test(e) && (n && -1 !== o.compare(e) || (n = e, o = new H(n, r)))
          }), n
     };
     var Je = (e, t, r) => {
          let n = null,
               o = null,
               i = null;
          try {
               i = new Ie(t, r)
          } catch (e) {
               return null
          }
          return e.forEach(e => {
               i.test(e) && (n && 1 !== o.compare(e) || (n = e, o = new H(n, r)))
          }), n
     };
     var Ye = (e, t) => {
          e = new Ie(e, t);
          let r = new H("0.0.0");
          if (e.test(r)) return r;
          if (r = new H("0.0.0-0"), e.test(r)) return r;
          r = null;
          for (let t = 0; t < e.set.length; ++t) {
               e.set[t].forEach(e => {
                    const t = new H(e.semver.version);
                    switch (e.operator) {
                         case ">":
                              0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                         case "":
                         case ">=":
                              r && !ue(r, t) || (r = t);
                              break;
                         case "<":
                         case "<=":
                              break;
                         default:
                              throw new Error(`Unexpected operation: ${e.operator}`)
                    }
               })
          }
          return r && e.test(r) ? r : null
     };
     var Qe = (e, t) => {
          try {
               return new Ie(e, t).range || "*"
          } catch (e) {
               return null
          }
     };
     const {
          ANY: Ze
     } = Ue;
     var Ke = (e, t, r, n) => {
          let o, i, a, s, l;
          switch (e = new H(e, n), t = new Ie(t, n), r) {
               case ">":
                    o = ue, i = me, a = he, s = ">", l = ">=";
                    break;
               case "<":
                    o = he, i = ge, a = ue, s = "<", l = "<=";
                    break;
               default:
                    throw new TypeError('Must provide a hilo val of "<" or ">"')
          }
          if (We(e, t, n)) return !1;
          for (let r = 0; r < t.set.length; ++r) {
               const c = t.set[r];
               let d = null,
                    p = null;
               if (c.forEach(e => {
                         e.semver === Ze && (e = new Ue(">=0.0.0")), d = d || e, p = p || e, o(e.semver, d.semver, n) ? d = e : a(e.semver, p.semver, n) && (p = e)
                    }), d.operator === s || d.operator === l) return !1;
               if ((!p.operator || p.operator === s) && i(e, p.semver)) return !1;
               if (p.operator === l && a(e, p.semver)) return !1
          }
          return !0
     };
     var et = (e, t, r) => Ke(e, t, ">", r);
     var tt = (e, t, r) => Ke(e, t, "<", r);
     var rt, nt = (e, t, r) => (e = new Ie(e, r), t = new Ie(t, r), e.intersects(t)),
          ot = {
               re: k.re,
               src: k.src,
               tokens: k.t,
               SEMVER_SPEC_VERSION: _.SEMVER_SPEC_VERSION,
               SemVer: H,
               compareIdentifiers: M.compareIdentifiers,
               rcompareIdentifiers: M.rcompareIdentifiers,
               parse: Q,
               valid: Z,
               clean: K,
               inc: ee,
               diff: ne,
               major: oe,
               minor: ie,
               patch: ae,
               prerelease: se,
               compare: te,
               rcompare: le,
               compareLoose: ce,
               compareBuild: de,
               sort: pe,
               rsort: fe,
               gt: ue,
               lt: he,
               eq: re,
               neq: ve,
               gte: ge,
               lte: me,
               cmp: Ee,
               coerce: Oe,
               Comparator: Ue,
               Range: Ie,
               satisfies: We,
               toComparators: He,
               maxSatisfying: qe,
               minSatisfying: Je,
               minVersion: Ye,
               validRange: Qe,
               outside: Ke,
               gtr: et,
               ltr: tt,
               intersects: nt
          }.satisfies,
          it = F((function (e, t) {
               Object.defineProperty(t, "__esModule", {
                    value: !0
               }), t.default = function (e) {
                    var t = /\/schema\/([\w-]+)\/([\w\.\-]+)\.json$/g.exec(e).slice(1, 3);
                    return {
                         library: t[0],
                         version: t[1]
                    }
               }
          })),
          at = (rt = it) && rt.__esModule && Object.prototype.hasOwnProperty.call(rt, "default") ? rt.default : rt;
     const st = {
               background: "#333",
               title: {
                    color: "#fff"
               },
               style: {
                    "guide-label": {
                         fill: "#fff"
                    },
                    "guide-title": {
                         fill: "#fff"
                    }
               },
               axis: {
                    domainColor: "#fff",
                    gridColor: "#888",
                    tickColor: "#fff"
               }
          },
          lt = {
               background: "#fff",
               arc: {
                    fill: "#4572a7"
               },
               area: {
                    fill: "#4572a7"
               },
               line: {
                    stroke: "#4572a7",
                    strokeWidth: 2
               },
               path: {
                    stroke: "#4572a7"
               },
               rect: {
                    fill: "#4572a7"
               },
               shape: {
                    stroke: "#4572a7"
               },
               symbol: {
                    fill: "#4572a7",
                    strokeWidth: 1.5,
                    size: 50
               },
               axis: {
                    bandPosition: .5,
                    grid: !0,
                    gridColor: "#000000",
                    gridOpacity: 1,
                    gridWidth: .5,
                    labelPadding: 10,
                    tickSize: 5,
                    tickWidth: .5
               },
               axisBand: {
                    grid: !1,
                    tickExtra: !0
               },
               legend: {
                    labelBaseline: "middle",
                    labelFontSize: 11,
                    symbolSize: 50,
                    symbolType: "square"
               },
               range: {
                    category: ["#4572a7", "#aa4643", "#8aa453", "#71598e", "#4598ae", "#d98445", "#94aace", "#d09393", "#b9cc98", "#a99cbc"]
               }
          },
          ct = {
               arc: {
                    fill: "#30a2da"
               },
               area: {
                    fill: "#30a2da"
               },
               axis: {
                    domainColor: "#cbcbcb",
                    grid: !0,
                    gridColor: "#cbcbcb",
                    gridWidth: 1,
                    labelColor: "#999",
                    labelFontSize: 10,
                    titleColor: "#333",
                    tickColor: "#cbcbcb",
                    tickSize: 10,
                    titleFontSize: 14,
                    titlePadding: 10,
                    labelPadding: 4
               },
               axisBand: {
                    grid: !1
               },
               background: "#f0f0f0",
               group: {
                    fill: "#f0f0f0"
               },
               legend: {
                    labelColor: "#333",
                    labelFontSize: 11,
                    padding: 1,
                    symbolSize: 30,
                    symbolType: "square",
                    titleColor: "#333",
                    titleFontSize: 14,
                    titlePadding: 10
               },
               line: {
                    stroke: "#30a2da",
                    strokeWidth: 2
               },
               path: {
                    stroke: "#30a2da",
                    strokeWidth: .5
               },
               rect: {
                    fill: "#30a2da"
               },
               range: {
                    category: ["#30a2da", "#fc4f30", "#e5ae38", "#6d904f", "#8b8b8b", "#b96db8", "#ff9e27", "#56cc60", "#52d2ca", "#52689e", "#545454", "#9fe4f8"],
                    diverging: ["#cc0020", "#e77866", "#f6e7e1", "#d6e8ed", "#91bfd9", "#1d78b5"],
                    heatmap: ["#d6e8ed", "#cee0e5", "#91bfd9", "#549cc6", "#1d78b5"]
               },
               point: {
                    filled: !0,
                    shape: "circle"
               },
               shape: {
                    stroke: "#30a2da"
               },
               bar: {
                    binSpacing: 2,
                    fill: "#30a2da",
                    stroke: null
               },
               title: {
                    anchor: "start",
                    fontSize: 24,
                    fontWeight: 600,
                    offset: 20
               }
          },
          dt = {
               group: {
                    fill: "#e5e5e5"
               },
               arc: {
                    fill: "#000"
               },
               area: {
                    fill: "#000"
               },
               line: {
                    stroke: "#000"
               },
               path: {
                    stroke: "#000"
               },
               rect: {
                    fill: "#000"
               },
               shape: {
                    stroke: "#000"
               },
               symbol: {
                    fill: "#000",
                    size: 40
               },
               axis: {
                    domain: !1,
                    grid: !0,
                    gridColor: "#FFFFFF",
                    gridOpacity: 1,
                    labelColor: "#7F7F7F",
                    labelPadding: 4,
                    tickColor: "#7F7F7F",
                    tickSize: 5.67,
                    titleFontSize: 16,
                    titleFontWeight: "normal"
               },
               legend: {
                    labelBaseline: "middle",
                    labelFontSize: 11,
                    symbolSize: 40
               },
               range: {
                    category: ["#000000", "#7F7F7F", "#1A1A1A", "#999999", "#333333", "#B0B0B0", "#4D4D4D", "#C9C9C9", "#666666", "#DCDCDC"]
               }
          },
          pt = "Benton Gothic Bold, sans-serif",
          ft = {
               "category-6": ["#ec8431", "#829eb1", "#c89d29", "#3580b1", "#adc839", "#ab7fb4"],
               "fire-7": ["#fbf2c7", "#f9e39c", "#f8d36e", "#f4bb6a", "#e68a4f", "#d15a40", "#ab4232"],
               "fireandice-6": ["#e68a4f", "#f4bb6a", "#f9e39c", "#dadfe2", "#a6b7c6", "#849eae"],
               "ice-7": ["#edefee", "#dadfe2", "#c4ccd2", "#a6b7c6", "#849eae", "#607785", "#47525d"]
          },
          ut = {
               background: "#ffffff",
               title: {
                    anchor: "start",
                    color: "#000000",
                    font: pt,
                    fontSize: 22,
                    fontWeight: "normal"
               },
               arc: {
                    fill: "#82c6df"
               },
               area: {
                    fill: "#82c6df"
               },
               line: {
                    stroke: "#82c6df",
                    strokeWidth: 2
               },
               path: {
                    stroke: "#82c6df"
               },
               rect: {
                    fill: "#82c6df"
               },
               shape: {
                    stroke: "#82c6df"
               },
               symbol: {
                    fill: "#82c6df",
                    size: 30
               },
               axis: {
                    labelFont: "Benton Gothic, sans-serif",
                    labelFontSize: 11.5,
                    labelFontWeight: "normal",
                    titleFont: pt,
                    titleFontSize: 13,
                    titleFontWeight: "normal"
               },
               axisX: {
                    labelAngle: 0,
                    labelPadding: 4,
                    tickSize: 3
               },
               axisY: {
                    labelBaseline: "middle",
                    maxExtent: 45,
                    minExtent: 45,
                    tickSize: 2,
                    titleAlign: "left",
                    titleAngle: 0,
                    titleX: -45,
                    titleY: -11
               },
               legend: {
                    labelFont: "Benton Gothic, sans-serif",
                    labelFontSize: 11.5,
                    symbolType: "square",
                    titleFont: pt,
                    titleFontSize: 13,
                    titleFontWeight: "normal"
               },
               range: {
                    category: ft["category-6"],
                    diverging: ft["fireandice-6"],
                    heatmap: ft["fire-7"],
                    ordinal: ft["fire-7"],
                    ramp: ft["fire-7"]
               }
          },
          ht = {
               background: "#f9f9f9",
               arc: {
                    fill: "#ab5787"
               },
               area: {
                    fill: "#ab5787"
               },
               line: {
                    stroke: "#ab5787"
               },
               path: {
                    stroke: "#ab5787"
               },
               rect: {
                    fill: "#ab5787"
               },
               shape: {
                    stroke: "#ab5787"
               },
               symbol: {
                    fill: "#ab5787",
                    size: 30
               },
               axis: {
                    domainColor: "#979797",
                    domainWidth: .5,
                    gridWidth: .2,
                    labelColor: "#979797",
                    tickColor: "#979797",
                    tickWidth: .2,
                    titleColor: "#979797"
               },
               axisBand: {
                    grid: !1
               },
               axisX: {
                    grid: !0,
                    tickSize: 10
               },
               axisY: {
                    domain: !1,
                    grid: !0,
                    tickSize: 0
               },
               legend: {
                    labelFontSize: 11,
                    padding: 1,
                    symbolSize: 30,
                    symbolType: "square"
               },
               range: {
                    category: ["#ab5787", "#51b2e5", "#703c5c", "#168dd9", "#d190b6", "#00609f", "#d365ba", "#154866", "#666666", "#c4c4c4"]
               }
          },
          vt = {
               background: "#fff",
               arc: {
                    fill: "#3e5c69"
               },
               area: {
                    fill: "#3e5c69"
               },
               line: {
                    stroke: "#3e5c69"
               },
               path: {
                    stroke: "#3e5c69"
               },
               rect: {
                    fill: "#3e5c69"
               },
               shape: {
                    stroke: "#3e5c69"
               },
               symbol: {
                    fill: "#3e5c69"
               },
               axis: {
                    domainWidth: .5,
                    grid: !0,
                    labelPadding: 2,
                    tickSize: 5,
                    tickWidth: .5,
                    titleFontWeight: "normal"
               },
               axisBand: {
                    grid: !1
               },
               axisX: {
                    gridWidth: .2
               },
               axisY: {
                    gridDash: [3],
                    gridWidth: .4
               },
               legend: {
                    labelFontSize: 11,
                    padding: 1,
                    symbolType: "square"
               },
               range: {
                    category: ["#3e5c69", "#6793a6", "#182429", "#0570b0", "#3690c0", "#74a9cf", "#a6bddb", "#e2ddf2"]
               }
          },
          gt = {
               "main-colors": ["#1696d2", "#d2d2d2", "#000000", "#fdbf11", "#ec008b", "#55b748", "#5c5859", "#db2b27"],
               "shades-blue": ["#CFE8F3", "#A2D4EC", "#73BFE2", "#46ABDB", "#1696D2", "#12719E", "#0A4C6A", "#062635"],
               "shades-gray": ["#F5F5F5", "#ECECEC", "#E3E3E3", "#DCDBDB", "#D2D2D2", "#9D9D9D", "#696969", "#353535"],
               "shades-yellow": ["#FFF2CF", "#FCE39E", "#FDD870", "#FCCB41", "#FDBF11", "#E88E2D", "#CA5800", "#843215"],
               "shades-magenta": ["#F5CBDF", "#EB99C2", "#E46AA7", "#E54096", "#EC008B", "#AF1F6B", "#761548", "#351123"],
               "shades-green": ["#DCEDD9", "#BCDEB4", "#98CF90", "#78C26D", "#55B748", "#408941", "#2C5C2D", "#1A2E19"],
               "shades-black": ["#D5D5D4", "#ADABAC", "#848081", "#5C5859", "#332D2F", "#262223", "#1A1717", "#0E0C0D"],
               "shades-red": ["#F8D5D4", "#F1AAA9", "#E9807D", "#E25552", "#DB2B27", "#A4201D", "#6E1614", "#370B0A"],
               "one-group": ["#1696d2", "#000000"],
               "two-groups-cat-1": ["#1696d2", "#000000"],
               "two-groups-cat-2": ["#1696d2", "#fdbf11"],
               "two-groups-cat-3": ["#1696d2", "#db2b27"],
               "two-groups-seq": ["#a2d4ec", "#1696d2"],
               "three-groups-cat": ["#1696d2", "#fdbf11", "#000000"],
               "three-groups-seq": ["#a2d4ec", "#1696d2", "#0a4c6a"],
               "four-groups-cat-1": ["#000000", "#d2d2d2", "#fdbf11", "#1696d2"],
               "four-groups-cat-2": ["#1696d2", "#ec0008b", "#fdbf11", "#5c5859"],
               "four-groups-seq": ["#cfe8f3", "#73bf42", "#1696d2", "#0a4c6a"],
               "five-groups-cat-1": ["#1696d2", "#fdbf11", "#d2d2d2", "#ec008b", "#000000"],
               "five-groups-cat-2": ["#1696d2", "#0a4c6a", "#d2d2d2", "#fdbf11", "#332d2f"],
               "five-groups-seq": ["#cfe8f3", "#73bf42", "#1696d2", "#0a4c6a", "#000000"],
               "six-groups-cat-1": ["#1696d2", "#ec008b", "#fdbf11", "#000000", "#d2d2d2", "#55b748"],
               "six-groups-cat-2": ["#1696d2", "#d2d2d2", "#ec008b", "#fdbf11", "#332d2f", "#0a4c6a"],
               "six-groups-seq": ["#cfe8f3", "#a2d4ec", "#73bfe2", "#46abdb", "#1696d2", "#12719e"],
               "diverging-colors": ["#ca5800", "#fdbf11", "#fdd870", "#fff2cf", "#cfe8f3", "#73bfe2", "#1696d2", "#0a4c6a"]
          },
          mt = {
               background: "#FFFFFF",
               title: {
                    anchor: "start",
                    fontSize: 18,
                    font: "Lato"
               },
               axisX: {
                    domain: !0,
                    domainColor: "#000000",
                    domainWidth: 1,
                    grid: !1,
                    labelFontSize: 12,
                    labelFont: "Lato",
                    labelAngle: 0,
                    tickColor: "#000000",
                    tickSize: 5,
                    titleFontSize: 12,
                    titlePadding: 10,
                    titleFont: "Lato"
               },
               axisY: {
                    domain: !1,
                    domainWidth: 1,
                    grid: !0,
                    gridColor: "#DEDDDD",
                    gridWidth: 1,
                    labelFontSize: 12,
                    labelFont: "Lato",
                    labelPadding: 8,
                    ticks: !1,
                    titleFontSize: 12,
                    titlePadding: 10,
                    titleFont: "Lato",
                    titleAngle: 0,
                    titleY: -10,
                    titleX: 18
               },
               legend: {
                    labelFontSize: 12,
                    labelFont: "Lato",
                    symbolSize: 100,
                    titleFontSize: 12,
                    titlePadding: 10,
                    titleFont: "Lato",
                    orient: "right",
                    offset: 10
               },
               view: {
                    stroke: "transparent"
               },
               range: {
                    category: gt["six-groups-cat-1"],
                    diverging: gt["diverging-colors"],
                    heatmap: gt["diverging-colors"],
                    ordinal: gt["six-groups-seq"],
                    ramp: gt["shades-blue"]
               },
               area: {
                    fill: "#1696d2"
               },
               rect: {
                    fill: "#1696d2"
               },
               line: {
                    color: "#1696d2",
                    stroke: "#1696d2",
                    strokeWidth: 5
               },
               trail: {
                    color: "#1696d2",
                    stroke: "#1696d2",
                    strokeWidth: 0,
                    size: 1
               },
               path: {
                    stroke: "#1696d2",
                    strokeWidth: .5
               },
               point: {
                    filled: !0
               },
               text: {
                    font: "Lato",
                    color: "#1696d2",
                    fontSize: 11,
                    align: "center",
                    fontWeight: 400,
                    size: 11
               },
               style: {
                    bar: {
                         fill: "#1696d2",
                         stroke: null
                    }
               },
               arc: {
                    fill: "#1696d2"
               },
               shape: {
                    stroke: "#1696d2"
               },
               symbol: {
                    fill: "#1696d2",
                    size: 30
               }
          },
          Et = {
               arc: {
                    fill: "#3366CC"
               },
               area: {
                    fill: "#3366CC"
               },
               path: {
                    stroke: "#3366CC"
               },
               rect: {
                    fill: "#3366CC"
               },
               shape: {
                    stroke: "#3366CC"
               },
               symbol: {
                    stroke: "#3366CC"
               },
               circle: {
                    fill: "#3366CC"
               },
               background: "#fff",
               padding: {
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10
               },
               style: {
                    "guide-label": {
                         font: "Arial, sans-serif",
                         fontSize: 12
                    },
                    "guide-title": {
                         font: "Arial, sans-serif",
                         fontSize: 12
                    },
                    "group-title": {
                         font: "Arial, sans-serif",
                         fontSize: 12
                    }
               },
               title: {
                    font: "Arial, sans-serif",
                    fontSize: 14,
                    fontWeight: "bold",
                    dy: -3,
                    anchor: "start"
               },
               axis: {
                    gridColor: "#ccc",
                    tickColor: "#ccc",
                    domain: !1,
                    grid: !0
               },
               range: {
                    category: ["#4285F4", "#DB4437", "#F4B400", "#0F9D58", "#AB47BC", "#00ACC1", "#FF7043", "#9E9D24", "#5C6BC0", "#F06292", "#00796B", "#C2185B"],
                    heatmap: ["#c6dafc", "#5e97f6", "#2a56c6"]
               }
          },
          bt = "2.8.2";
     var yt = Object.freeze({
               __proto__: null,
               version: bt,
               dark: st,
               excel: lt,
               fivethirtyeight: ct,
               ggplot2: dt,
               latimes: ut,
               quartz: ht,
               vox: vt,
               urbaninstitute: mt,
               googlecharts: Et
          }),
          Ot = "#vg-tooltip-element {\n  visibility: hidden;\n  padding: 8px;\n  position: fixed;\n  z-index: 1000;\n  font-family: sans-serif;\n  font-size: 11px;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  /* The default theme is the light theme. */\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 1px solid #d9d9d9;\n  color: black; }\n  #vg-tooltip-element.visible {\n    visibility: visible; }\n  #vg-tooltip-element h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 13px; }\n  #vg-tooltip-element table {\n    border-spacing: 0; }\n    #vg-tooltip-element table tr {\n      border: none; }\n      #vg-tooltip-element table tr td {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        padding-top: 2px;\n        padding-bottom: 2px; }\n        #vg-tooltip-element table tr td.key {\n          color: #808080;\n          max-width: 150px;\n          text-align: right;\n          padding-right: 4px; }\n        #vg-tooltip-element table tr td.value {\n          display: block;\n          max-width: 300px;\n          max-height: 7em;\n          text-align: left; }\n  #vg-tooltip-element.dark-theme {\n    background-color: rgba(32, 32, 32, 0.9);\n    border: 1px solid #f5f5f5;\n    color: white; }\n    #vg-tooltip-element.dark-theme td.key {\n      color: #bfbfbf; }\n";
     const wt = "vg-tooltip-element",
          It = {
               offsetX: 10,
               offsetY: 10,
               id: wt,
               styleId: "vega-tooltip-style",
               theme: "light",
               disableDefaultStyle: !1,
               sanitize: function (e) {
                    return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;")
               },
               maxDepth: 2
          };

     function At(e, t, r) {
          return e.fields = t || [], e.fname = r, e
     }

     function Nt(e) {
          throw Error(e)
     }
     var Rt = Array.isArray;

     function $t(e) {
          return e === Object(e)
     }

     function Lt(e) {
          return "string" == typeof e
     }

     function Tt(e) {
          return Rt(e) ? "[" + e.map(Tt) + "]" : $t(e) || Lt(e) ? JSON.stringify(e).replace("\u2028", "\\u2028").replace("\u2029", "\\u2029") : e
     }
     var St = [];
     (function (e, t) {
          var r = function (e) {
                    var t, r, n, o = [],
                         i = null,
                         a = 0,
                         s = e.length,
                         l = "";

                    function c() {
                         o.push(l + e.substring(t, r)), l = "", t = r + 1
                    }
                    for (e += "", t = r = 0; r < s; ++r)
                         if ("\\" === (n = e[r])) l += e.substring(t, r), l += e.substring(++r, ++r), t = r;
                         else if (n === i) c(), i = null, a = -1;
                    else {
                         if (i) continue;
                         t === a && '"' === n || t === a && "'" === n ? (t = r + 1, i = n) : "." !== n || a ? "[" === n ? (r > t && c(), a = t = r + 1) : "]" === n && (a || Nt("Access path missing open bracket: " + e), a > 0 && c(), a = 0, t = r + 1) : r > t ? c() : t = r + 1
                    }
                    return a && Nt("Access path missing closing bracket: " + e), i && Nt("Access path missing closing quote: " + e), r > t && (r++, c()), o
               }(e),
               n = "return _[" + r.map(Tt).join("][") + "];";
          At(Function("_", n), [e = 1 === r.length ? r[0] : e], t || e)
     })("id"), At((function (e) {
          return e
     }), St, "identity"), At((function () {
          return 0
     }), St, "zero"), At((function () {
          return 1
     }), St, "one"), At((function () {
          return !0
     }), St, "true"), At((function () {
          return !1
     }), St, "false");
     const Ct = e => "__proto__" !== e;

     function xt(...e) {
          return e.reduce((e, t) => {
               for (var r in t)
                    if ("signals" === r) e.signals = Ft(e.signals, t.signals);
                    else {
                         var n = "legend" === r ? {
                              layout: 1
                         } : "style" === r || null;
                         Dt(e, r, t[r], n)
                    } return e
          }, {})
     }

     function Dt(e, t, r, n) {
          var o, i;
          if (Ct(t))
               if ($t(r) && !Rt(r))
                    for (o in i = $t(e[t]) ? e[t] : e[t] = {}, r) n && (!0 === n || n[o]) ? Dt(i, o, r[o]) : Ct(o) && (i[o] = r[o]);
               else e[t] = r
     }

     function Ft(e, t) {
          if (null == e) return t;
          const r = {},
               n = [];

          function o(e) {
               r[e.name] || (r[e.name] = 1, n.push(e))
          }
          return t.forEach(o), e.forEach(o), n
     }
     var _t = function (e, t) {
          var r = {};
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
               var o = 0;
               for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
          }
          return r
     };

     function Pt(e, t) {
          return JSON.stringify(e, function (e) {
               const t = [];
               return function (r, n) {
                    if ("object" != typeof n || null === n) return n;
                    const o = t.indexOf(this) + 1;
                    return t.length = o, t.length > e ? "[Object]" : t.indexOf(n) >= 0 ? "[Circular]" : (t.push(n), n)
               }
          }(t))
     }
     class kt {
          constructor(e) {
               this.options = Object.assign(Object.assign({}, It), e);
               const t = this.options.id;
               if (this.call = this.tooltipHandler.bind(this), !this.options.disableDefaultStyle && !document.getElementById(this.options.styleId)) {
                    const e = document.createElement("style");
                    e.setAttribute("id", this.options.styleId), e.innerHTML = function (e) {
                         if (!/^[A-Za-z]+[-:.\w]*$/.test(e)) throw new Error("Invalid HTML ID");
                         return Ot.toString().replace(wt, e)
                    }(t);
                    const r = document.head;
                    r.childNodes.length > 0 ? r.insertBefore(e, r.childNodes[0]) : r.appendChild(e)
               }
               //this.el = document.getElementById(t), this.el || (this.el = document.createElement("div"), this.el.setAttribute("id", t), this.el.classList.add("vg-tooltip"), document.body.appendChild(this.el))
          }
          tooltipHandler(e, t, r, n) {
               if (null == n || "" === n) return void this.el.classList.remove("visible", `${this.options.theme}-theme`);
               this.el.innerHTML = function (e, t, r) {
                    if (Rt(e)) return `[${e.map(e=>t(Lt(e)?e:Pt(e,r))).join(", ")}]`;
                    if ($t(e)) {
                         let n = "";
                         const o = e,
                              {
                                   title: i
                              } = o,
                              a = _t(o, ["title"]);
                         i && (n += `<h2>${t(i)}</h2>`);
                         const s = Object.keys(a);
                         if (s.length > 0) {
                              n += "<table>";
                              for (const e of s) {
                                   let o = a[e];
                                   void 0 !== o && ($t(o) && (o = Pt(o, r)), n += `<tr><td class="key">${t(e)}:</td><td class="value">${t(o)}</td></tr>`)
                              }
                              n += "</table>"
                         }
                         return n || "{}"
                    }
                    return t(e)
               }(n, this.options.sanitize, this.options.maxDepth), this.el.classList.add("visible", `${this.options.theme}-theme`);
               const {
                    x: o,
                    y: i
               } = function (e, t, r, n) {
                    let o = e.clientX + r;
                    o + t.width > window.innerWidth && (o = +e.clientX - r - t.width);
                    let i = e.clientY + n;
                    return i + t.height > window.innerHeight && (i = +e.clientY - n - t.height), {
                         x: o,
                         y: i
                    }
               }(t, this.el.getBoundingClientRect(), this.options.offsetX, this.options.offsetY);
               this.el.setAttribute("style", `top: ${i}px; left: ${o}px`)
          }
     }
     var jt, zt = '.vega-embed {\n  position: relative;\n  display: inline-block; }\n  .vega-embed.has-actions {\n    padding-right: 38px; }\n  .vega-embed details:not([open]) > :not(summary) {\n    display: none !important; }\n  .vega-embed summary {\n    list-style: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 6px;\n    z-index: 1000;\n    background: white;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n    color: #1b1e23;\n    border: 1px solid #aaa;\n    border-radius: 999px;\n    opacity: 0.2;\n    transition: opacity 0.4s ease-in;\n    outline: none;\n    cursor: pointer;\n    line-height: 0px; }\n    .vega-embed summary::-webkit-details-marker {\n      display: none; }\n    .vega-embed summary:active {\n      box-shadow: #aaa 0px 0px 0px 1px inset; }\n    .vega-embed summary svg {\n      width: 14px;\n      height: 14px; }\n  .vega-embed details[open] summary {\n    opacity: 0.7; }\n  .vega-embed:hover summary,\n  .vega-embed:focus summary {\n    opacity: 1 !important;\n    transition: opacity 0.2s ease; }\n  .vega-embed .vega-actions {\n    position: absolute;\n    z-index: 1001;\n    top: 35px;\n    right: -9px;\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 8px;\n    padding-top: 8px;\n    border-radius: 4px;\n    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n    border: 1px solid #d9d9d9;\n    background: white;\n    animation-duration: 0.15s;\n    animation-name: scale-in;\n    animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n    text-align: left; }\n    .vega-embed .vega-actions a {\n      padding: 8px 16px;\n      font-family: sans-serif;\n      font-size: 14px;\n      font-weight: 600;\n      white-space: nowrap;\n      color: #434a56;\n      text-decoration: none; }\n      .vega-embed .vega-actions a:hover {\n        background-color: #f7f7f9;\n        color: black; }\n    .vega-embed .vega-actions::before, .vega-embed .vega-actions::after {\n      content: "";\n      display: inline-block;\n      position: absolute; }\n    .vega-embed .vega-actions::before {\n      left: auto;\n      right: 14px;\n      top: -16px;\n      border: 8px solid #0000;\n      border-bottom-color: #d9d9d9; }\n    .vega-embed .vega-actions::after {\n      left: auto;\n      right: 15px;\n      top: -14px;\n      border: 7px solid #0000;\n      border-bottom-color: #fff; }\n\n.vega-embed-wrapper {\n  max-width: 100%;\n  overflow: scroll;\n  padding-right: 14px; }\n\n@keyframes scale-in {\n  from {\n    opacity: 0;\n    transform: scale(0.6); }\n  to {\n    opacity: 1;\n    transform: scale(1); } }\n';

     function Mt(e, ...t) {
          for (const r of t) Bt(e, r);
          return e
     }

     function Bt(t, r) {
          for (const n of Object.keys(r)) e.writeConfig(t, n, r[n], !0)
     }
     String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
          return this.substr(!t || t < 0 ? 0 : +t, e.length) === e
     });
     const Gt = e;
     let Ut = t;
     const Xt = "undefined" != typeof window ? window : void 0;
     void 0 === Ut && (null === (jt = null == Xt ? void 0 : Xt.vl) || void 0 === jt ? void 0 : jt.compile) && (Ut = Xt.vl);
     const Vt = {
               export: {
                    svg: !0,
                    png: !0
               },
               source: !0,
               compiled: !0,
               editor: !0
          },
          Wt = {
               CLICK_TO_VIEW_ACTIONS: "Click to view actions",
               COMPILED_ACTION: "View Compiled Vega",
               EDITOR_ACTION: "Open in Vega Editor",
               PNG_ACTION: "Save as PNG",
               SOURCE_ACTION: "View Source",
               SVG_ACTION: "Save as SVG"
          },
          Ht = {
               vega: "Vega",
               "vega-lite": "Vega-Lite"
          },
          qt = {
               vega: Gt.version,
               "vega-lite": Ut ? Ut.version : "not available"
          },
          Jt = {
               vega: e => e,
               "vega-lite": (e, t) => Ut.compile(e, {
                    config: t
               }).spec
          };

     function Yt(e, t, r, n) {
          const o = `<html><head>${t}</head><body><pre><code class="json">`,
               i = `</code></pre>${r}</body></html>`,
               a = window.open("");
          a.document.write(o + e + i), a.document.title = `${Ht[n]} JSON Source`
     }

     function Qt(e, t, r = {}) {
          var o, i, a;
          return n(this, void 0, void 0, (function* () {
               const s = (l = r.loader) && "load" in l ? r.loader : Gt.loader(r.loader);
               var l;
               const c = Lt(t) ? JSON.parse(yield s.load(t)) : t,
                    d = yield Zt(null !== (o = c.usermeta && c.usermeta.embedOptions) && void 0 !== o ? o : {}, s), p = yield Zt(r, s), f = Object.assign(Object.assign({}, Mt(p, d)), {
                         config: xt(null !== (i = p.config) && void 0 !== i ? i : {}, null !== (a = d.config) && void 0 !== a ? a : {})
                    });
               return yield function (e, t, r = {}, o) {
                    var i, a, s, l, c, d;
                    return n(this, void 0, void 0, (function* () {
                         const p = r.theme ? xt(yt[r.theme], null !== (i = r.config) && void 0 !== i ? i : {}) : r.config,
                              f = "boolean" == typeof r.actions ? r.actions : Mt({}, Vt, null !== (a = r.actions) && void 0 !== a ? a : {});
                         const u = Object.assign(Object.assign({}, Wt), r.i18n),
                              h = null !== (s = r.renderer) && void 0 !== s ? s : "canvas",
                              v = null !== (l = r.logLevel) && void 0 !== l ? l : Gt.Warn,
                              g = null !== (c = r.downloadFileName) && void 0 !== c ? c : "visualization";
                         if (!1 !== r.defaultStyle) {
                              const e = "vega-embed-style";
                              if (!document.getElementById(e)) {
                                   const t = document.createElement("style");
                                   t.id = e, t.innerText = void 0 === r.defaultStyle || !0 === r.defaultStyle ? zt.toString() : r.defaultStyle, document.head.appendChild(t)
                              }
                         }
                         const m = function (e, t) {
                              var r;
                              if (e.$schema) {
                                   const n = at(e.$schema);
                                   t && t !== n.library && console.warn(`The given visualization spec is written in ${Ht[n.library]}, but mode argument sets ${null!==(r=Ht[t])&&void 0!==r?r:t}.`);
                                   const o = n.library;
                                   return ot(qt[o], `^${n.version.slice(1)}`) || console.warn(`The input spec uses ${Ht[o]} ${n.version}, but the current version of ${Ht[o]} is v${qt[o]}.`), o
                              }
                              return "mark" in e || "encoding" in e || "layer" in e || "hconcat" in e || "vconcat" in e || "facet" in e || "repeat" in e ? "vega-lite" : "marks" in e || "signals" in e || "scales" in e || "axes" in e ? "vega" : null != t ? t : "vega"
                         }(t, r.mode);
                         let E = Jt[m](t, p);
                         if ("vega-lite" === m && E.$schema) {
                              const e = at(E.$schema);
                              ot(qt.vega, `^${e.version.slice(1)}`) || console.warn(`The compiled spec uses Vega ${e.version}, but current version is v${qt.vega}.`)
                         }
                         const b = "string" == typeof e ? document.querySelector(e) : e;
                         if (!b) throw Error(`${e} does not exist`);
                         b.classList.add("vega-embed"), f && b.classList.add("has-actions"), b.innerHTML = "";
                         const y = r.patch;
                         y && (E = y instanceof Function ? y(E) : O(E, y, !0, !1).newDocument), r.formatLocale && Gt.formatLocale(r.formatLocale), r.timeFormatLocale && Gt.timeFormatLocale(r.timeFormatLocale);
                         const w = Gt.parse(E, "vega-lite" === m ? {} : p),
                              I = new Gt.View(w, {
                                   loader: o,
                                   logLevel: v,
                                   renderer: h
                              });
                         if (!1 !== r.tooltip) {
                              let e;
                              e = "function" == typeof r.tooltip ? r.tooltip : new kt(!0 === r.tooltip ? {} : r.tooltip).call, I.tooltip(e)
                         }
                         let A, {
                              hover: N
                         } = r;
                         if (void 0 === N && (N = "vega" === m), N) {
                              const {
                                   hoverSet: e,
                                   updateSet: t
                              } = "boolean" == typeof N ? {} : N;
                              I.hover(e, t)
                         }
                         if (r && (null != r.width && I.width(r.width), null != r.height && I.height(r.height), null != r.padding && I.padding(r.padding)), yield I.initialize(e).runAsync(), !1 !== f) {
                              let e = b;
                              if (!1 !== r.defaultStyle) {
                                   const t = document.createElement("details");
                                   t.title = u.CLICK_TO_VIEW_ACTIONS, b.append(t), e = t;
                                   const r = document.createElement("summary");
                                   r.innerHTML = '\n<svg viewBox="0 0 16 16" fill="currentColor" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">\n  <circle r="2" cy="8" cx="2"></circle>\n  <circle r="2" cy="8" cx="8"></circle>\n  <circle r="2" cy="8" cx="14"></circle>\n</svg>', t.append(r), A = e => {
                                        t.contains(e.target) || t.removeAttribute("open")
                                   }, document.addEventListener("click", A)
                              }
                              const o = document.createElement("div");
                              if (e.append(o), o.classList.add("vega-actions"), !0 === f || !1 !== f.export)
                                   for (const e of ["svg", "png"])
                                        if (!0 === f || !0 === f.export || f.export[e]) {
                                             const t = u[`${e.toUpperCase()}_ACTION`],
                                                  i = document.createElement("a");
                                             i.text = t, i.href = "#", i.target = "_blank", i.download = `${g}.${e}`, i.addEventListener("mousedown", (function (t) {
                                                  return n(this, void 0, void 0, (function* () {
                                                       t.preventDefault();
                                                       const n = yield I.toImageURL(e, r.scaleFactor);
                                                       this.href = n
                                                  }))
                                             })), o.append(i)
                                        } if (!0 === f || !1 !== f.source) {
                                   const e = document.createElement("a");
                                   e.text = u.SOURCE_ACTION, e.href = "#", e.addEventListener("mousedown", (function (e) {
                                        var n, o;
                                        Yt(D(t), null !== (n = r.sourceHeader) && void 0 !== n ? n : "", null !== (o = r.sourceFooter) && void 0 !== o ? o : "", m), e.preventDefault()
                                   })), o.append(e)
                              }
                              if ("vega-lite" === m && (!0 === f || !1 !== f.compiled)) {
                                   const e = document.createElement("a");
                                   e.text = u.COMPILED_ACTION, e.href = "#", e.addEventListener("mousedown", (function (e) {
                                        var t, n;
                                        Yt(D(E), null !== (t = r.sourceHeader) && void 0 !== t ? t : "", null !== (n = r.sourceFooter) && void 0 !== n ? n : "", "vega"), e.preventDefault()
                                   })), o.append(e)
                              }
                              if (!0 === f || !1 !== f.editor) {
                                   const e = null !== (d = r.editorUrl) && void 0 !== d ? d : "https://vega.github.io/editor/",
                                        n = document.createElement("a");
                                   n.text = u.EDITOR_ACTION, n.href = "#", n.addEventListener("mousedown", (function (r) {
                                        ! function (e, t, r) {
                                             const n = e.open(t);
                                             let o = 40;
                                             e.addEventListener("message", (function t(r) {
                                                  r.source === n && (o = 0, e.removeEventListener("message", t, !1))
                                             }), !1), setTimeout((function e() {
                                                  o <= 0 || (n.postMessage(r, "*"), setTimeout(e, 250), o -= 1)
                                             }), 250)
                                        }(window, e, {
                                             config: p,
                                             mode: m,
                                             renderer: h,
                                             spec: D(t)
                                        }), r.preventDefault()
                                   })), o.append(n)
                              }
                         }
                         return {
                              view: I,
                              spec: t,
                              vgSpec: E,
                              finalize: function () {
                                   A && document.removeEventListener("click", A), I.finalize()
                              }
                         }
                    }))
               }(e, c, f, s)
          }))
     }

     function Zt(e, t) {
          var r;
          return n(this, void 0, void 0, (function* () {
               const n = Lt(e.config) ? JSON.parse(yield t.load(e.config)) : null !== (r = e.config) && void 0 !== r ? r : {},
                    o = Lt(e.patch) ? JSON.parse(yield t.load(e.patch)) : e.patch;
               return Object.assign(Object.assign(Object.assign({}, e), o ? {
                    patch: o
               } : {}), n ? {
                    config: n
               } : {})
          }))
     }

     function Kt(e, t = {}) {
          var r;
          return n(this, void 0, void 0, (function* () {
               const n = document.createElement("div");
               n.classList.add("vega-embed-wrapper");
               const o = document.createElement("div");
               n.appendChild(o);
               const i = !0 === t.actions || !1 === t.actions ? t.actions : Object.assign({
                         export: !0,
                         source: !1,
                         compiled: !0,
                         editor: !0
                    }, null !== (r = t.actions) && void 0 !== r ? r : {}),
                    a = yield Qt(o, e, Object.assign({
                         actions: i
                    }, null != t ? t : {}));
               return n.value = a.view, n
          }))
     }
     const er = (...t) => {
          return t.length > 1 && (e.isString(t[0]) && !((r = t[0]).startsWith("http://") || r.startsWith("https://") || r.startsWith("//")) || t[0] instanceof HTMLElement || 3 === t.length) ? Qt(t[0], t[1], t[2]) : Kt(t[0], t[1]);
          var r
     };
     return er.vegaLite = Ut, er.vl = Ut, er.container = Kt, er.embed = Qt, er.vega = Gt, er.default = Qt, er.version = r, er
}));
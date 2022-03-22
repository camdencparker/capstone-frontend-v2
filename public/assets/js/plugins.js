/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 *
 */
!(function ($) {
  "use strict";
  $.fn.meanmenu = function (e) {
    var n = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: "body",
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanMenuOpen: "<span /><span /><span />",
      meanRevealPosition: "right",
      meanRevealPositionDistance: "0",
      meanRevealColour: "",
      meanScreenWidth: "480",
      meanNavPush: "",
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: "+",
      meanContract: "-",
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: "block",
      removeElements: "",
    };
    e = $.extend(n, e);
    var a = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function () {
      var n = e.meanMenuTarget,
        t = e.meanMenuContainer,
        r = e.meanMenuClose,
        i = e.meanMenuCloseSize,
        s = e.meanMenuOpen,
        u = e.meanRevealPosition,
        m = e.meanRevealPositionDistance,
        l = e.meanRevealColour,
        o = e.meanScreenWidth,
        c = e.meanNavPush,
        v = ".meanmenu-reveal",
        h = e.meanShowChildren,
        d = e.meanExpandableChildren,
        y = e.meanExpand,
        j = e.meanContract,
        Q = e.meanRemoveAttrs,
        f = e.onePage,
        g = e.meanDisplay,
        p = e.removeElements,
        C = !1;
      (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/Blackberry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) &&
        (C = !0),
        (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) &&
          jQuery("html").css("overflow-y", "scroll");
      var w = "",
        x = function () {
          if ("center" === u) {
            var e = window.innerWidth || document.documentElement.clientWidth,
              n = e / 2 - 22 + "px";
            (w = "left:" + n + ";right:auto;"),
              C ? jQuery(".meanmenu-reveal").animate({ left: n }) : jQuery(".meanmenu-reveal").css("left", n);
          }
        },
        A = !1,
        E = !1;
      "right" === u && (w = "right:" + m + ";left:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x();
      var M = "",
        P = function () {
          M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s);
        },
        W = function () {
          jQuery(".mean-bar,.mean-push").remove(),
            jQuery(t).removeClass("mean-container"),
            jQuery(n).css("display", g),
            (A = !1),
            (E = !1),
            jQuery(p).removeClass("mean-remove");
        },
        b = function () {
          var e = "background:" + l + ";color:" + l + ";" + w;
          if (o >= a) {
            jQuery(p).addClass("mean-remove"),
              (E = !0),
              jQuery(t).addClass("mean-container"),
              jQuery(".mean-container").prepend(
                '<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                  e +
                  '">Show Navigation</a><nav class="mean-nav"></nav></div>'
              );
            var r = jQuery(n).html();
            jQuery(".mean-nav").html(r),
              Q &&
                jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                  jQuery(this).is(".mean-remove")
                    ? jQuery(this).attr("class", "mean-remove")
                    : jQuery(this).removeAttr("class"),
                    jQuery(this).removeAttr("id");
                }),
              jQuery(n).before('<div class="mean-push" />'),
              jQuery(".mean-push").css("margin-top", c),
              jQuery(n).hide(),
              jQuery(".meanmenu-reveal").show(),
              jQuery(v).html(s),
              (M = jQuery(v)),
              jQuery(".mean-nav ul").hide(),
              h
                ? d
                  ? (jQuery(".mean-nav ul ul").each(function () {
                      jQuery(this).children().length &&
                        jQuery(this, "li:first")
                          .parent()
                          .append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>");
                    }),
                    jQuery(".mean-expand").on("click", function (e) {
                      e.preventDefault(),
                        jQuery(this).hasClass("mean-clicked")
                          ? (jQuery(this).text(y),
                            jQuery(this)
                              .prev("ul")
                              .slideUp(300, function () {}))
                          : (jQuery(this).text(j),
                            jQuery(this)
                              .prev("ul")
                              .slideDown(300, function () {})),
                        jQuery(this).toggleClass("mean-clicked");
                    }))
                  : jQuery(".mean-nav ul ul").show()
                : jQuery(".mean-nav ul ul").hide(),
              jQuery(".mean-nav ul li").last().addClass("mean-last"),
              M.removeClass("meanclose"),
              jQuery(M).click(function (e) {
                e.preventDefault(),
                  A === !1
                    ? (M.css("text-align", "center"),
                      M.css("text-indent", "0"),
                      M.css("font-size", i),
                      jQuery(".mean-nav ul:first").slideDown(),
                      (A = !0))
                    : (jQuery(".mean-nav ul:first").slideUp(), (A = !1)),
                  M.toggleClass("meanclose"),
                  P(),
                  jQuery(p).addClass("mean-remove");
              }),
              f &&
                jQuery(".mean-nav ul > li > a:first-child").on("click", function () {
                  jQuery(".mean-nav ul:first").slideUp(), (A = !1), jQuery(M).toggleClass("meanclose").html(s);
                });
          } else W();
        };
      C ||
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth), a > o, W(), o >= a ? (b(), x()) : W();
        }),
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()));
        }),
        b();
    });
  };
})(jQuery);

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * https://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose))), (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 || ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""), a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if ((y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), (b.currItem = c), !b.currTemplate[d])) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")), e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || (b.preloader && c === b.preloader[0])) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class")))
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else (c = a.extend(!0, {}, c)), u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c), b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)), (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
    proto: {
      initAjax: function () {
        b.types.push(I), (H = b.st.ajax.cursor), w(h + "." + I, K), w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(), (c.finished = c.loadError = !0), b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize || ((c.imgHidden = !0), d.addClass("mfp-loading"), b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                f = "transition";
              return (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d), b.css(e), b;
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if ((clearTimeout(e), b.content.css("visibility", "hidden"), (a = b._getItemToZoom()), !a))
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
        return (
          O()
            ? (h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
        vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length)
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)),
                    f = (b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e), b.wrap.off("click" + e), (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/*!
 * The Final Countdown for jQuery v2.2.0 (https://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
  "use strict";
  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g))
      return (
        String(a).match(/^[0-9]*$/) && (a = Number(a)),
        String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
        new Date(a)
      );
    throw new Error("Couldn't cast `" + a + "` to a date object.");
  }
  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b);
  }
  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          (h = h[2]),
            i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
            null !== m &&
              ("!" === k && (m = e(l, m)),
              "" === k && m < 10 && (m = "0" + m.toString()),
              (b = b.replace(j, m.toString())));
        }
      return (b = b.replace(/%%/, "%"));
    };
  }
  function e(a, b) {
    var c = "s",
      d = "";
    return (
      a && ((a = a.replace(/(:|;|\s)/gi, "").split(/\,/)), 1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
      Math.abs(b) > 1 ? c : d
    );
  }
  var f = [],
    g = [],
    h = { precision: 100, elapse: !1, defer: !1 };
  g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    (g = new RegExp(g.join("|")));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds",
    },
    j = function (b, c, d) {
      (this.el = b),
        (this.$el = a(b)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = a.extend({}, h)),
        (this.firstTick = !0),
        (this.instanceNumber = f.length),
        f.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        d &&
          ("function" == typeof d
            ? (this.$el.on("update.countdown", d),
              this.$el.on("stoped.countdown", d),
              this.$el.on("finish.countdown", d))
            : (this.options = a.extend({}, h, d))),
        this.setFinalDate(c),
        this.options.defer === !1 && this.start();
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(),
        (this.interval = setInterval(function () {
          a.update.call(a);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval), (this.interval = null), this.dispatchEvent("stoped");
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this), (f[this.instanceNumber] = null), delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (a) {
      this.finalDate = b(a);
    },
    update: function () {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var a,
        b = new Date();
      return (
        (a = this.finalDate.getTime() - b.getTime()),
        (a = Math.ceil(a / 1e3)),
        (a = !this.options.elapse && a < 0 ? 0 : Math.abs(a)),
        this.totalSecsLeft === a || this.firstTick
          ? void (this.firstTick = !1)
          : ((this.totalSecsLeft = a),
            (this.elapsed = b >= this.finalDate),
            (this.offset = {
              seconds: this.totalSecsLeft % 60,
              minutes: Math.floor(this.totalSecsLeft / 60) % 60,
              hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
              days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToMonth: Math.floor((this.totalSecsLeft / 60 / 60 / 24) % 30.4368),
              weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
              weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
              months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
              years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
              totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
              totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
              totalMinutes: Math.floor(this.totalSecsLeft / 60),
              totalSeconds: this.totalSecsLeft,
            }),
            void (this.options.elapse || 0 !== this.totalSecsLeft
              ? this.dispatchEvent("update")
              : (this.stop(), this.dispatchEvent("finish"))))
      );
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + ".countdown");
      (c.finalDate = this.finalDate),
        (c.elapsed = this.elapsed),
        (c.offset = a.extend({}, this.offset)),
        (c.strftime = d(this.offset)),
        this.$el.trigger(c);
    },
  }),
    (a.fn.countdown = function () {
      var b = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var c = a(this).data("countdown-instance");
        if (void 0 !== c) {
          var d = f[c],
            e = b[0];
          j.prototype.hasOwnProperty(e)
            ? d[e].apply(d, b.slice(1))
            : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? (d.setFinalDate.call(d, e), d.start())
            : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e));
        } else new j(this, b[0], b[1]);
      });
    });
});

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element) throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.Context.refreshAll();
      for (var e in i) i[e].enabled = !0;
      return this;
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext || ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) && ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s];
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 && (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      ["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) && ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */ (function (e) {
  "use strict";
  e.fn.counterUp = function (t) {
    var n = e.extend({ time: 400, delay: 10 }, t);
    return this.each(function () {
      var t = e(this),
        r = n,
        i = function () {
          var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);
          i = i.replace(/,/g, "");
          var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split(".")[1] || []).length : 0;
          for (var f = n; f >= 1; f--) {
            var l = parseInt((i / n) * f);
            u && (l = parseFloat((i / n) * f).toFixed(a));
            if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            e.unshift(l);
          }
          t.data("counterup-nums", e);
          t.text("0");
          var c = function () {
            t.text(t.data("counterup-nums").shift());
            if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
            else {
              delete t.data("counterup-nums");
              t.data("counterup-nums", null);
              t.data("counterup-func", null);
            }
          };
          t.data("counterup-func", c);
          setTimeout(t.data("counterup-func"), r.delay);
        };
      t.waypoint(i, { offset: "100%", triggerOnce: !0 });
    });
  };
})(jQuery);

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!(function (l, o, e) {
  "use strict";
  (l.fn.scrollUp = function (o) {
    l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
  }),
    (l.fn.scrollUp.init = function (r) {
      var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
        f = !1;
      switch (
        ((d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", { id: p.scrollName, href: "#top" })),
        p.scrollTitle && d.attr("title", p.scrollTitle),
        d.appendTo("body"),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({ display: "none", position: "fixed", zIndex: p.zIndex }),
        p.activeOverlay &&
          l("<div/>", { id: p.scrollName + "-active" })
            .css({
              position: "absolute",
              top: p.scrollDistance + "px",
              width: "100%",
              borderTop: "1px dotted" + p.activeOverlay,
              zIndex: p.zIndex,
            })
            .appendTo("body"),
        p.animation)
      ) {
        case "fade":
          (s = "fadeIn"), (t = "fadeOut"), (c = p.animationSpeed);
          break;
        case "slide":
          (s = "slideDown"), (t = "slideUp"), (c = p.animationSpeed);
          break;
        default:
          (s = "show"), (t = "hide"), (c = 0);
      }
      (i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance),
        (n = l(o).scroll(function () {
          l(o).scrollTop() > i ? f || (d[s](c), (f = !0)) : f && (d[t](c), (f = !1));
        })),
        p.scrollTarget
          ? "number" == typeof p.scrollTarget
            ? (a = p.scrollTarget)
            : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top))
          : (a = 0),
        d.click(function (o) {
          o.preventDefault(), l("html, body").animate({ scrollTop: a }, p.scrollSpeed, p.easingType);
        });
    }),
    (l.fn.scrollUp.defaults = {
      scrollName: "scrollUp",
      scrollDistance: 300,
      scrollFrom: "top",
      scrollSpeed: 300,
      easingType: "linear",
      animation: "fade",
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: "Scroll to top",
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647,
    }),
    (l.fn.scrollUp.destroy = function (r) {
      l.removeData(e.body, "scrollUp"),
        l("#" + l.fn.scrollUp.settings.scrollName).remove(),
        l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
        l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r);
    }),
    (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1);
          (this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge) for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))),
            this.reset(a.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      (this.$stage = this.$element.find("." + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(
            a("<div/>", { class: this.settings.stageOuterClass })
          )),
          this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find(".owl-item");
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var a, b, c;
        (a = this.$element.find("img")),
          (b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d)
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", { property: { name: "settings", value: this.settings } });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return this._width - 2 * this.settings.stagePadding + this.settings.margin;
      }
    }),
    (e.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1;
          })),
        this.settings.touchDrag &&
          (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
            (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                "left" === c && b > i - f && b < i + f
                  ? (e = a)
                  : "right" === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, "<", i) &&
                    this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = "left" === c ? a + 1 : a),
                -1 === e
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition:
                this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : ""),
            })
          : c
          ? this.$stage.animate(
              { left: b + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", { property: { name: "position", value: a } });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", { property: { name: "position", value: this._current } });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1 ? (a = d) : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1;
      } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
            }, this)
          ),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items");
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger("remove", { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                }, this)
              )
              .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf("owl"))
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
            f.register({ type: e.Type.Event, name: c }),
              f.$element.on(
                c + ".owl.carousel.core",
                a.proxy(function (a) {
                  a.namespace &&
                    a.relatedTarget !== this &&
                    (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                }, f)
              );
          })),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible && this._core.invalidate("width") && this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
            if (
              b.namespace &&
              this._core.settings &&
              this._core.settings.lazyLoad &&
              ((b.property && "position" == b.property.name) || "initialized" == b.type)
            ) {
              var c = this._core.settings,
                e = (c.center && Math.ceil(c.items / 2)) || c.items,
                f = (c.center && -1 * e) || 0,
                g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                h = this._core.clones().length,
                i = a.proxy(function (a, b) {
                  this.load(b);
                }, this);
              for (c.lazyLoadEager > 0 && ((e += c.lazyLoadEager), c.loop && ((g -= c.lazyLoadEager), e++)); f++ < e; )
                this.load(h / 2 + this._core.relative(g)),
                  h && a.each(this._core.clones(this._core.relative(g)), i),
                  g++;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src") || f.attr("data-srcset");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                        }, this)
                      )
                      .attr("src", g)
                  : f.is("source")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          this._core.trigger("loaded", { element: f, url: g }, "lazy");
                        }, this)
                      )
                      .attr("srcset", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({ "background-image": 'url("' + g + '")', opacity: "1" }),
                        this._core.trigger("loaded", { element: f, url: g }, "lazy");
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoHeight && this.update();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var d = this;
      a(b).on("load", function () {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update();
            }, 250)));
        });
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
        a.each(e, function (b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" === a.property.name && this._playing && this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
          })(),
          d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (c) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a("<div/>", { class: "owl-video-tn " + j, srcType: c })
                : a("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")" })),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type
          ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
          : "vimeo" === c.type
          ? a.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : "vzaar" === c.type &&
            a.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')),
          c.attr("height", h),
          c.attr("width", g),
          "youtube" === f.type
            ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id)
            : "vimeo" === f.type
            ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
            : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
          a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()), (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
            a.namespace && (this.swapping = "translated" == a.type);
          }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
      (e.prototype._next = function (d) {
        (this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
        )),
          this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function (c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused ? ((this._time = this.read()), (this._paused = !1)) : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0), (this._paused = !0), b.clearTimeout(this._call), this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()), (this._paused = !0), b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "button",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
          "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f))
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
            this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b = this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(this._core.relative(this._core.current())),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" !== typeof Object.create &&
  (Object.create = function (d) {
    function h() {}
    h.prototype = d;
    return new h();
  });
(function (d, h, l, m) {
  var k = {
    init: function (b, a) {
      var c = this;
      c.elem = a;
      c.$elem = d(a);
      c.imageSrc = c.$elem.data("zoom-image") ? c.$elem.data("zoom-image") : c.$elem.attr("src");
      c.options = d.extend({}, d.fn.elevateZoom.options, b);
      c.options.tint && ((c.options.lensColour = "none"), (c.options.lensOpacity = "1"));
      "inner" == c.options.zoomType && (c.options.showLens = !1);
      c.$elem.parent().removeAttr("title").removeAttr("alt");
      c.zoomImage = c.imageSrc;
      c.refresh(1);
      d("#" + c.options.gallery + " a").click(function (a) {
        c.options.galleryActiveClass &&
          (d("#" + c.options.gallery + " a").removeClass(c.options.galleryActiveClass),
          d(this).addClass(c.options.galleryActiveClass));
        a.preventDefault();
        d(this).data("zoom-image")
          ? (c.zoomImagePre = d(this).data("zoom-image"))
          : (c.zoomImagePre = d(this).data("image"));
        c.swaptheimage(d(this).data("image"), c.zoomImagePre);
        return !1;
      });
    },
    refresh: function (b) {
      var a = this;
      setTimeout(function () {
        a.fetch(a.imageSrc);
      }, b || a.options.refresh);
    },
    fetch: function (b) {
      var a = this,
        c = new Image();
      c.onload = function () {
        a.largeWidth = c.width;
        a.largeHeight = c.height;
        a.startZoom();
        a.currentImage = a.imageSrc;
        a.options.onZoomedImageLoaded(a.$elem);
      };
      c.src = b;
    },
    startZoom: function () {
      var b = this;
      b.nzWidth = b.$elem.width();
      b.nzHeight = b.$elem.height();
      b.isWindowActive = !1;
      b.isLensActive = !1;
      b.isTintActive = !1;
      b.overWindow = !1;
      b.options.imageCrossfade &&
        ((b.zoomWrap = b.$elem.wrap(
          '<div style="height:' + b.nzHeight + "px;width:" + b.nzWidth + 'px;" class="zoomWrapper" />'
        )),
        b.$elem.css("position", "absolute"));
      b.zoomLock = 1;
      b.scrollingLock = !1;
      b.changeBgSize = !1;
      b.currentZoomLevel = b.options.zoomLevel;
      b.nzOffset = b.$elem.offset();
      b.widthRatio = b.largeWidth / b.currentZoomLevel / b.nzWidth;
      b.heightRatio = b.largeHeight / b.currentZoomLevel / b.nzHeight;
      "window" == b.options.zoomType &&
        (b.zoomWindowStyle =
          "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " +
          String(b.options.zoomWindowBgColour) +
          ";width: " +
          String(b.options.zoomWindowWidth) +
          "px;height: " +
          String(b.options.zoomWindowHeight) +
          "px;float: left;background-size: " +
          b.largeWidth / b.currentZoomLevel +
          "px " +
          b.largeHeight / b.currentZoomLevel +
          "px;display: none;z-index:100;border: " +
          String(b.options.borderSize) +
          "px solid " +
          b.options.borderColour +
          ";background-repeat: no-repeat;position: absolute;");
      if ("inner" == b.options.zoomType) {
        var a = b.$elem.css("border-left-width");
        b.zoomWindowStyle =
          "overflow: hidden;margin-left: " +
          String(a) +
          ";margin-top: " +
          String(a) +
          ";background-position: 0px 0px;width: " +
          String(b.nzWidth) +
          "px;height: " +
          String(b.nzHeight) +
          "px;float: left;display: none;cursor:" +
          b.options.cursor +
          ";px solid " +
          b.options.borderColour +
          ";background-repeat: no-repeat;position: absolute;";
      }
      "window" == b.options.zoomType &&
        ((lensHeight =
          b.nzHeight < b.options.zoomWindowWidth / b.widthRatio
            ? b.nzHeight
            : String(b.options.zoomWindowHeight / b.heightRatio)),
        (lensWidth = b.largeWidth < b.options.zoomWindowWidth ? b.nzWidth : b.options.zoomWindowWidth / b.widthRatio),
        (b.lensStyle =
          "background-position: 0px 0px;width: " +
          String(b.options.zoomWindowWidth / b.widthRatio) +
          "px;height: " +
          String(b.options.zoomWindowHeight / b.heightRatio) +
          "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" +
          b.options.lensOpacity +
          ";filter: alpha(opacity = " +
          100 * b.options.lensOpacity +
          "); zoom:1;width:" +
          lensWidth +
          "px;height:" +
          lensHeight +
          "px;background-color:" +
          b.options.lensColour +
          ";cursor:" +
          b.options.cursor +
          ";border: " +
          b.options.lensBorderSize +
          "px solid " +
          b.options.lensBorderColour +
          ";background-repeat: no-repeat;position: absolute;"));
      b.tintStyle =
        "display: block;position: absolute;background-color: " +
        b.options.tintColour +
        ";filter:alpha(opacity=0);opacity: 0;width: " +
        b.nzWidth +
        "px;height: " +
        b.nzHeight +
        "px;";
      b.lensRound = "";
      "lens" == b.options.zoomType &&
        (b.lensStyle =
          "background-position: 0px 0px;float: left;display: none;border: " +
          String(b.options.borderSize) +
          "px solid " +
          b.options.borderColour +
          ";width:" +
          String(b.options.lensSize) +
          "px;height:" +
          String(b.options.lensSize) +
          "px;background-repeat: no-repeat;position: absolute;");
      "round" == b.options.lensShape &&
        (b.lensRound =
          "border-top-left-radius: " +
          String(b.options.lensSize / 2 + b.options.borderSize) +
          "px;border-top-right-radius: " +
          String(b.options.lensSize / 2 + b.options.borderSize) +
          "px;border-bottom-left-radius: " +
          String(b.options.lensSize / 2 + b.options.borderSize) +
          "px;border-bottom-right-radius: " +
          String(b.options.lensSize / 2 + b.options.borderSize) +
          "px;");
      b.zoomContainer = d(
        '<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' +
          b.nzOffset.left +
          "px;top:" +
          b.nzOffset.top +
          "px;height:" +
          b.nzHeight +
          "px;width:" +
          b.nzWidth +
          'px;"></div>'
      );
      d("body").append(b.zoomContainer);
      b.options.containLensZoom && "lens" == b.options.zoomType && b.zoomContainer.css("overflow", "hidden");
      "inner" != b.options.zoomType &&
        ((b.zoomLens = d("<div class='zoomLens' style='" + b.lensStyle + b.lensRound + "'>&nbsp;</div>")
          .appendTo(b.zoomContainer)
          .click(function () {
            b.$elem.trigger("click");
          })),
        b.options.tint &&
          ((b.tintContainer = d("<div/>").addClass("tintContainer")),
          (b.zoomTint = d("<div class='zoomTint' style='" + b.tintStyle + "'></div>")),
          b.zoomLens.wrap(b.tintContainer),
          (b.zoomTintcss = b.zoomLens.after(b.zoomTint)),
          (b.zoomTintImage = d(
            '<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' +
              b.nzWidth +
              "px; height: " +
              b.nzHeight +
              'px;" src="' +
              b.imageSrc +
              '">'
          )
            .appendTo(b.zoomLens)
            .click(function () {
              b.$elem.trigger("click");
            }))));
      isNaN(b.options.zoomWindowPosition)
        ? (b.zoomWindow = d(
            "<div style='z-index:999;left:" +
              b.windowOffsetLeft +
              "px;top:" +
              b.windowOffsetTop +
              "px;" +
              b.zoomWindowStyle +
              "' class='zoomWindow'>&nbsp;</div>"
          )
            .appendTo("body")
            .click(function () {
              b.$elem.trigger("click");
            }))
        : (b.zoomWindow = d(
            "<div style='z-index:999;left:" +
              b.windowOffsetLeft +
              "px;top:" +
              b.windowOffsetTop +
              "px;" +
              b.zoomWindowStyle +
              "' class='zoomWindow'>&nbsp;</div>"
          )
            .appendTo(b.zoomContainer)
            .click(function () {
              b.$elem.trigger("click");
            }));
      b.zoomWindowContainer = d("<div/>").addClass("zoomWindowContainer").css("width", b.options.zoomWindowWidth);
      b.zoomWindow.wrap(b.zoomWindowContainer);
      "lens" == b.options.zoomType && b.zoomLens.css({ backgroundImage: "url('" + b.imageSrc + "')" });
      "window" == b.options.zoomType && b.zoomWindow.css({ backgroundImage: "url('" + b.imageSrc + "')" });
      "inner" == b.options.zoomType && b.zoomWindow.css({ backgroundImage: "url('" + b.imageSrc + "')" });
      b.$elem.bind("touchmove", function (a) {
        a.preventDefault();
        b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]);
      });
      b.zoomContainer.bind("touchmove", function (a) {
        "inner" == b.options.zoomType && b.showHideWindow("show");
        a.preventDefault();
        b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]);
      });
      b.zoomContainer.bind("touchend", function (a) {
        b.showHideWindow("hide");
        b.options.showLens && b.showHideLens("hide");
        b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide");
      });
      b.$elem.bind("touchend", function (a) {
        b.showHideWindow("hide");
        b.options.showLens && b.showHideLens("hide");
        b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide");
      });
      b.options.showLens &&
        (b.zoomLens.bind("touchmove", function (a) {
          a.preventDefault();
          b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]);
        }),
        b.zoomLens.bind("touchend", function (a) {
          b.showHideWindow("hide");
          b.options.showLens && b.showHideLens("hide");
          b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide");
        }));
      b.$elem.bind("mousemove", function (a) {
        !1 == b.overWindow && b.setElements("show");
        if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), (b.currentLoc = a);
        b.lastX = a.clientX;
        b.lastY = a.clientY;
      });
      b.zoomContainer.bind("mousemove", function (a) {
        !1 == b.overWindow && b.setElements("show");
        if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), (b.currentLoc = a);
        b.lastX = a.clientX;
        b.lastY = a.clientY;
      });
      "inner" != b.options.zoomType &&
        b.zoomLens.bind("mousemove", function (a) {
          if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), (b.currentLoc = a);
          b.lastX = a.clientX;
          b.lastY = a.clientY;
        });
      b.options.tint &&
        "inner" != b.options.zoomType &&
        b.zoomTint.bind("mousemove", function (a) {
          if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), (b.currentLoc = a);
          b.lastX = a.clientX;
          b.lastY = a.clientY;
        });
      "inner" == b.options.zoomType &&
        b.zoomWindow.bind("mousemove", function (a) {
          if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), (b.currentLoc = a);
          b.lastX = a.clientX;
          b.lastY = a.clientY;
        });
      b.zoomContainer
        .add(b.$elem)
        .mouseenter(function () {
          !1 == b.overWindow && b.setElements("show");
        })
        .mouseleave(function () {
          b.scrollLock || b.setElements("hide");
        });
      "inner" != b.options.zoomType &&
        b.zoomWindow
          .mouseenter(function () {
            b.overWindow = !0;
            b.setElements("hide");
          })
          .mouseleave(function () {
            b.overWindow = !1;
          });
      b.minZoomLevel = b.options.minZoomLevel ? b.options.minZoomLevel : 2 * b.options.scrollZoomIncrement;
      b.options.scrollZoom &&
        b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (a) {
          b.scrollLock = !0;
          clearTimeout(d.data(this, "timer"));
          d.data(
            this,
            "timer",
            setTimeout(function () {
              b.scrollLock = !1;
            }, 250)
          );
          var e = a.originalEvent.wheelDelta || -1 * a.originalEvent.detail;
          a.stopImmediatePropagation();
          a.stopPropagation();
          a.preventDefault();
          0 < e / 120
            ? b.currentZoomLevel >= b.minZoomLevel &&
              b.changeZoomLevel(b.currentZoomLevel - b.options.scrollZoomIncrement)
            : b.options.maxZoomLevel
            ? b.currentZoomLevel <= b.options.maxZoomLevel &&
              b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement)
            : b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement);
          return !1;
        });
    },
    setElements: function (b) {
      if (!this.options.zoomEnabled) return !1;
      "show" == b &&
        this.isWindowSet &&
        ("inner" == this.options.zoomType && this.showHideWindow("show"),
        "window" == this.options.zoomType && this.showHideWindow("show"),
        this.options.showLens && this.showHideLens("show"),
        this.options.tint && "inner" != this.options.zoomType && this.showHideTint("show"));
      "hide" == b &&
        ("window" == this.options.zoomType && this.showHideWindow("hide"),
        this.options.tint || this.showHideWindow("hide"),
        this.options.showLens && this.showHideLens("hide"),
        this.options.tint && this.showHideTint("hide"));
    },
    setPosition: function (b) {
      if (!this.options.zoomEnabled) return !1;
      this.nzHeight = this.$elem.height();
      this.nzWidth = this.$elem.width();
      this.nzOffset = this.$elem.offset();
      this.options.tint &&
        "inner" != this.options.zoomType &&
        (this.zoomTint.css({ top: 0 }), this.zoomTint.css({ left: 0 }));
      this.options.responsive &&
        !this.options.scrollZoom &&
        this.options.showLens &&
        ((lensHeight =
          this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
            ? this.nzHeight
            : String(this.options.zoomWindowHeight / this.heightRatio)),
        (lensWidth =
          this.largeWidth < this.options.zoomWindowWidth
            ? this.nzWidth
            : this.options.zoomWindowWidth / this.widthRatio),
        (this.widthRatio = this.largeWidth / this.nzWidth),
        (this.heightRatio = this.largeHeight / this.nzHeight),
        "lens" != this.options.zoomType &&
          ((lensHeight =
            this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
              ? this.nzHeight
              : String(this.options.zoomWindowHeight / this.heightRatio)),
          (lensWidth =
            this.options.zoomWindowWidth < this.options.zoomWindowWidth
              ? this.nzWidth
              : this.options.zoomWindowWidth / this.widthRatio),
          this.zoomLens.css("width", lensWidth),
          this.zoomLens.css("height", lensHeight),
          this.options.tint &&
            (this.zoomTintImage.css("width", this.nzWidth), this.zoomTintImage.css("height", this.nzHeight))),
        "lens" == this.options.zoomType &&
          this.zoomLens.css({
            width: String(this.options.lensSize) + "px",
            height: String(this.options.lensSize) + "px",
          }));
      this.zoomContainer.css({ top: this.nzOffset.top });
      this.zoomContainer.css({ left: this.nzOffset.left });
      this.mouseLeft = parseInt(b.pageX - this.nzOffset.left);
      this.mouseTop = parseInt(b.pageY - this.nzOffset.top);
      "window" == this.options.zoomType &&
        ((this.Etoppos = this.mouseTop < this.zoomLens.height() / 2),
        (this.Eboppos = this.mouseTop > this.nzHeight - this.zoomLens.height() / 2 - 2 * this.options.lensBorderSize),
        (this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2),
        (this.Eroppos = this.mouseLeft > this.nzWidth - this.zoomLens.width() / 2 - 2 * this.options.lensBorderSize));
      "inner" == this.options.zoomType &&
        ((this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio),
        (this.Eboppos = this.mouseTop > this.nzHeight - this.nzHeight / 2 / this.heightRatio),
        (this.Eloppos = this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio),
        (this.Eroppos =
          this.mouseLeft > this.nzWidth - this.nzWidth / 2 / this.widthRatio - 2 * this.options.lensBorderSize));
      0 >= this.mouseLeft || 0 > this.mouseTop || this.mouseLeft > this.nzWidth || this.mouseTop > this.nzHeight
        ? this.setElements("hide")
        : (this.options.showLens &&
            ((this.lensLeftPos = String(this.mouseLeft - this.zoomLens.width() / 2)),
            (this.lensTopPos = String(this.mouseTop - this.zoomLens.height() / 2))),
          this.Etoppos && (this.lensTopPos = 0),
          this.Eloppos && (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0),
          "window" == this.options.zoomType &&
            (this.Eboppos &&
              (this.lensTopPos = Math.max(this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize, 0)),
            this.Eroppos &&
              (this.lensLeftPos = this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)),
          "inner" == this.options.zoomType &&
            (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - 2 * this.options.lensBorderSize, 0)),
            this.Eroppos && (this.lensLeftPos = this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)),
          "lens" == this.options.zoomType &&
            ((this.windowLeftPos = String(
              -1 * ((b.pageX - this.nzOffset.left) * this.widthRatio - this.zoomLens.width() / 2)
            )),
            (this.windowTopPos = String(
              -1 * ((b.pageY - this.nzOffset.top) * this.heightRatio - this.zoomLens.height() / 2)
            )),
            this.zoomLens.css({ backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px" }),
            this.changeBgSize &&
              (this.nzHeight > this.nzWidth
                ? ("lens" == this.options.zoomType &&
                    this.zoomLens.css({
                      "background-size":
                        this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px",
                    }),
                  this.zoomWindow.css({
                    "background-size":
                      this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px",
                  }))
                : ("lens" == this.options.zoomType &&
                    this.zoomLens.css({
                      "background-size":
                        this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px",
                    }),
                  this.zoomWindow.css({
                    "background-size":
                      this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px",
                  })),
              (this.changeBgSize = !1)),
            this.setWindowPostition(b)),
          this.options.tint && "inner" != this.options.zoomType && this.setTintPosition(b),
          "window" == this.options.zoomType && this.setWindowPostition(b),
          "inner" == this.options.zoomType && this.setWindowPostition(b),
          this.options.showLens &&
            (this.fullwidth && "lens" != this.options.zoomType && (this.lensLeftPos = 0),
            this.zoomLens.css({ left: this.lensLeftPos + "px", top: this.lensTopPos + "px" })));
    },
    showHideWindow: function (b) {
      "show" != b ||
        this.isWindowActive ||
        (this.options.zoomWindowFadeIn
          ? this.zoomWindow.stop(!0, !0, !1).fadeIn(this.options.zoomWindowFadeIn)
          : this.zoomWindow.show(),
        (this.isWindowActive = !0));
      "hide" == b &&
        this.isWindowActive &&
        (this.options.zoomWindowFadeOut
          ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut)
          : this.zoomWindow.hide(),
        (this.isWindowActive = !1));
    },
    showHideLens: function (b) {
      "show" != b ||
        this.isLensActive ||
        (this.options.lensFadeIn
          ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn)
          : this.zoomLens.show(),
        (this.isLensActive = !0));
      "hide" == b &&
        this.isLensActive &&
        (this.options.lensFadeOut ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) : this.zoomLens.hide(),
        (this.isLensActive = !1));
    },
    showHideTint: function (b) {
      "show" != b ||
        this.isTintActive ||
        (this.options.zoomTintFadeIn
          ? this.zoomTint.css({ opacity: this.options.tintOpacity }).animate().stop(!0, !0).fadeIn("slow")
          : (this.zoomTint.css({ opacity: this.options.tintOpacity }).animate(), this.zoomTint.show()),
        (this.isTintActive = !0));
      "hide" == b &&
        this.isTintActive &&
        (this.options.zoomTintFadeOut
          ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut)
          : this.zoomTint.hide(),
        (this.isTintActive = !1));
    },
    setLensPostition: function (b) {},
    setWindowPostition: function (b) {
      var a = this;
      if (isNaN(a.options.zoomWindowPosition))
        (a.externalContainer = d("#" + a.options.zoomWindowPosition)),
          (a.externalContainerWidth = a.externalContainer.width()),
          (a.externalContainerHeight = a.externalContainer.height()),
          (a.externalContainerOffset = a.externalContainer.offset()),
          (a.windowOffsetTop = a.externalContainerOffset.top),
          (a.windowOffsetLeft = a.externalContainerOffset.left);
      else
        switch (a.options.zoomWindowPosition) {
          case 1:
            a.windowOffsetTop = a.options.zoomWindowOffety;
            a.windowOffsetLeft = +a.nzWidth;
            break;
          case 2:
            a.options.zoomWindowHeight > a.nzHeight &&
              ((a.windowOffsetTop = -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2)),
              (a.windowOffsetLeft = a.nzWidth));
            break;
          case 3:
            a.windowOffsetTop = a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
            a.windowOffsetLeft = a.nzWidth;
            break;
          case 4:
            a.windowOffsetTop = a.nzHeight;
            a.windowOffsetLeft = a.nzWidth;
            break;
          case 5:
            a.windowOffsetTop = a.nzHeight;
            a.windowOffsetLeft = a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
            break;
          case 6:
            a.options.zoomWindowHeight > a.nzHeight &&
              ((a.windowOffsetTop = a.nzHeight),
              (a.windowOffsetLeft = -1 * (a.options.zoomWindowWidth / 2 - a.nzWidth / 2 + 2 * a.options.borderSize)));
            break;
          case 7:
            a.windowOffsetTop = a.nzHeight;
            a.windowOffsetLeft = 0;
            break;
          case 8:
            a.windowOffsetTop = a.nzHeight;
            a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
            break;
          case 9:
            a.windowOffsetTop = a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
            a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
            break;
          case 10:
            a.options.zoomWindowHeight > a.nzHeight &&
              ((a.windowOffsetTop = -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2)),
              (a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize)));
            break;
          case 11:
            a.windowOffsetTop = a.options.zoomWindowOffety;
            a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
            break;
          case 12:
            a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
            a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
            break;
          case 13:
            a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
            a.windowOffsetLeft = 0;
            break;
          case 14:
            a.options.zoomWindowHeight > a.nzHeight &&
              ((a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize)),
              (a.windowOffsetLeft = -1 * (a.options.zoomWindowWidth / 2 - a.nzWidth / 2 + 2 * a.options.borderSize)));
            break;
          case 15:
            a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
            a.windowOffsetLeft = a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
            break;
          case 16:
            a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
            a.windowOffsetLeft = a.nzWidth;
            break;
          default:
            (a.windowOffsetTop = a.options.zoomWindowOffety), (a.windowOffsetLeft = a.nzWidth);
        }
      a.isWindowSet = !0;
      a.windowOffsetTop += a.options.zoomWindowOffety;
      a.windowOffsetLeft += a.options.zoomWindowOffetx;
      a.zoomWindow.css({ top: a.windowOffsetTop });
      a.zoomWindow.css({ left: a.windowOffsetLeft });
      "inner" == a.options.zoomType && (a.zoomWindow.css({ top: 0 }), a.zoomWindow.css({ left: 0 }));
      a.windowLeftPos = String(-1 * ((b.pageX - a.nzOffset.left) * a.widthRatio - a.zoomWindow.width() / 2));
      a.windowTopPos = String(-1 * ((b.pageY - a.nzOffset.top) * a.heightRatio - a.zoomWindow.height() / 2));
      a.Etoppos && (a.windowTopPos = 0);
      a.Eloppos && (a.windowLeftPos = 0);
      a.Eboppos && (a.windowTopPos = -1 * (a.largeHeight / a.currentZoomLevel - a.zoomWindow.height()));
      a.Eroppos && (a.windowLeftPos = -1 * (a.largeWidth / a.currentZoomLevel - a.zoomWindow.width()));
      a.fullheight && (a.windowTopPos = 0);
      a.fullwidth && (a.windowLeftPos = 0);
      if ("window" == a.options.zoomType || "inner" == a.options.zoomType)
        1 == a.zoomLock && (1 >= a.widthRatio && (a.windowLeftPos = 0), 1 >= a.heightRatio && (a.windowTopPos = 0)),
          a.largeHeight < a.options.zoomWindowHeight && (a.windowTopPos = 0),
          a.largeWidth < a.options.zoomWindowWidth && (a.windowLeftPos = 0),
          a.options.easing
            ? (a.xp || (a.xp = 0),
              a.yp || (a.yp = 0),
              a.loop ||
                (a.loop = setInterval(function () {
                  a.xp += (a.windowLeftPos - a.xp) / a.options.easingAmount;
                  a.yp += (a.windowTopPos - a.yp) / a.options.easingAmount;
                  a.scrollingLock
                    ? (clearInterval(a.loop),
                      (a.xp = a.windowLeftPos),
                      (a.yp = a.windowTopPos),
                      (a.xp = -1 * ((b.pageX - a.nzOffset.left) * a.widthRatio - a.zoomWindow.width() / 2)),
                      (a.yp = -1 * ((b.pageY - a.nzOffset.top) * a.heightRatio - a.zoomWindow.height() / 2)),
                      a.changeBgSize &&
                        (a.nzHeight > a.nzWidth
                          ? ("lens" == a.options.zoomType &&
                              a.zoomLens.css({
                                "background-size":
                                  a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px",
                              }),
                            a.zoomWindow.css({
                              "background-size":
                                a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px",
                            }))
                          : ("lens" != a.options.zoomType &&
                              a.zoomLens.css({
                                "background-size":
                                  a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvalueheight + "px",
                              }),
                            a.zoomWindow.css({
                              "background-size":
                                a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px",
                            })),
                        (a.changeBgSize = !1)),
                      a.zoomWindow.css({ backgroundPosition: a.windowLeftPos + "px " + a.windowTopPos + "px" }),
                      (a.scrollingLock = !1),
                      (a.loop = !1))
                    : (a.changeBgSize &&
                        (a.nzHeight > a.nzWidth
                          ? ("lens" == a.options.zoomType &&
                              a.zoomLens.css({
                                "background-size":
                                  a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px",
                              }),
                            a.zoomWindow.css({
                              "background-size":
                                a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px",
                            }))
                          : ("lens" != a.options.zoomType &&
                              a.zoomLens.css({
                                "background-size":
                                  a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px",
                              }),
                            a.zoomWindow.css({
                              "background-size":
                                a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px",
                            })),
                        (a.changeBgSize = !1)),
                      a.zoomWindow.css({ backgroundPosition: a.xp + "px " + a.yp + "px" }));
                }, 16)))
            : (a.changeBgSize &&
                (a.nzHeight > a.nzWidth
                  ? ("lens" == a.options.zoomType &&
                      a.zoomLens.css({
                        "background-size":
                          a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px",
                      }),
                    a.zoomWindow.css({
                      "background-size":
                        a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px",
                    }))
                  : ("lens" == a.options.zoomType &&
                      a.zoomLens.css({
                        "background-size":
                          a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px",
                      }),
                    a.largeHeight / a.newvaluewidth < a.options.zoomWindowHeight
                      ? a.zoomWindow.css({
                          "background-size":
                            a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px",
                        })
                      : a.zoomWindow.css({
                          "background-size":
                            a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px",
                        })),
                (a.changeBgSize = !1)),
              a.zoomWindow.css({ backgroundPosition: a.windowLeftPos + "px " + a.windowTopPos + "px" }));
    },
    setTintPosition: function (b) {
      this.nzOffset = this.$elem.offset();
      this.tintpos = String(-1 * (b.pageX - this.nzOffset.left - this.zoomLens.width() / 2));
      this.tintposy = String(-1 * (b.pageY - this.nzOffset.top - this.zoomLens.height() / 2));
      this.Etoppos && (this.tintposy = 0);
      this.Eloppos && (this.tintpos = 0);
      this.Eboppos && (this.tintposy = -1 * (this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize));
      this.Eroppos && (this.tintpos = -1 * (this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize));
      this.options.tint &&
        (this.fullheight && (this.tintposy = 0),
        this.fullwidth && (this.tintpos = 0),
        this.zoomTintImage.css({ left: this.tintpos + "px" }),
        this.zoomTintImage.css({ top: this.tintposy + "px" }));
    },
    swaptheimage: function (b, a) {
      var c = this,
        e = new Image();
      c.options.loadingIcon &&
        ((c.spinner = d(
          "<div style=\"background: url('" +
            c.options.loadingIcon +
            "') no-repeat center;height:" +
            c.nzHeight +
            "px;width:" +
            c.nzWidth +
            'px;z-index: 2000;position: absolute; background-position: center center;"></div>'
        )),
        c.$elem.after(c.spinner));
      c.options.onImageSwap(c.$elem);
      e.onload = function () {
        c.largeWidth = e.width;
        c.largeHeight = e.height;
        c.zoomImage = a;
        c.zoomWindow.css({ "background-size": c.largeWidth + "px " + c.largeHeight + "px" });
        c.zoomWindow.css({ "background-size": c.largeWidth + "px " + c.largeHeight + "px" });
        c.swapAction(b, a);
      };
      e.src = a;
    },
    swapAction: function (b, a) {
      var c = this,
        e = new Image();
      e.onload = function () {
        c.nzHeight = e.height;
        c.nzWidth = e.width;
        c.options.onImageSwapComplete(c.$elem);
        c.doneCallback();
      };
      e.src = b;
      c.currentZoomLevel = c.options.zoomLevel;
      c.options.maxZoomLevel = !1;
      "lens" == c.options.zoomType && c.zoomLens.css({ backgroundImage: "url('" + a + "')" });
      "window" == c.options.zoomType && c.zoomWindow.css({ backgroundImage: "url('" + a + "')" });
      "inner" == c.options.zoomType && c.zoomWindow.css({ backgroundImage: "url('" + a + "')" });
      c.currentImage = a;
      if (c.options.imageCrossfade) {
        var f = c.$elem,
          g = f.clone();
        c.$elem.attr("src", b);
        c.$elem.after(g);
        g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
          d(this).remove();
        });
        c.$elem.width("auto").removeAttr("width");
        c.$elem.height("auto").removeAttr("height");
        f.fadeIn(c.options.imageCrossfade);
        c.options.tint &&
          "inner" != c.options.zoomType &&
          ((f = c.zoomTintImage),
          (g = f.clone()),
          c.zoomTintImage.attr("src", a),
          c.zoomTintImage.after(g),
          g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
            d(this).remove();
          }),
          f.fadeIn(c.options.imageCrossfade),
          c.zoomTint.css({ height: c.$elem.height() }),
          c.zoomTint.css({ width: c.$elem.width() }));
        c.zoomContainer.css("height", c.$elem.height());
        c.zoomContainer.css("width", c.$elem.width());
        "inner" != c.options.zoomType ||
          c.options.constrainType ||
          (c.zoomWrap.parent().css("height", c.$elem.height()),
          c.zoomWrap.parent().css("width", c.$elem.width()),
          c.zoomWindow.css("height", c.$elem.height()),
          c.zoomWindow.css("width", c.$elem.width()));
      } else
        c.$elem.attr("src", b),
          c.options.tint &&
            (c.zoomTintImage.attr("src", a),
            c.zoomTintImage.attr("height", c.$elem.height()),
            c.zoomTintImage.css({ height: c.$elem.height() }),
            c.zoomTint.css({ height: c.$elem.height() })),
          c.zoomContainer.css("height", c.$elem.height()),
          c.zoomContainer.css("width", c.$elem.width());
      c.options.imageCrossfade &&
        (c.zoomWrap.css("height", c.$elem.height()), c.zoomWrap.css("width", c.$elem.width()));
      c.options.constrainType &&
        ("height" == c.options.constrainType &&
          (c.zoomContainer.css("height", c.options.constrainSize),
          c.zoomContainer.css("width", "auto"),
          c.options.imageCrossfade
            ? (c.zoomWrap.css("height", c.options.constrainSize),
              c.zoomWrap.css("width", "auto"),
              (c.constwidth = c.zoomWrap.width()))
            : (c.$elem.css("height", c.options.constrainSize),
              c.$elem.css("width", "auto"),
              (c.constwidth = c.$elem.width())),
          "inner" == c.options.zoomType &&
            (c.zoomWrap.parent().css("height", c.options.constrainSize),
            c.zoomWrap.parent().css("width", c.constwidth),
            c.zoomWindow.css("height", c.options.constrainSize),
            c.zoomWindow.css("width", c.constwidth)),
          c.options.tint &&
            (c.tintContainer.css("height", c.options.constrainSize),
            c.tintContainer.css("width", c.constwidth),
            c.zoomTint.css("height", c.options.constrainSize),
            c.zoomTint.css("width", c.constwidth),
            c.zoomTintImage.css("height", c.options.constrainSize),
            c.zoomTintImage.css("width", c.constwidth))),
        "width" == c.options.constrainType &&
          (c.zoomContainer.css("height", "auto"),
          c.zoomContainer.css("width", c.options.constrainSize),
          c.options.imageCrossfade
            ? (c.zoomWrap.css("height", "auto"),
              c.zoomWrap.css("width", c.options.constrainSize),
              (c.constheight = c.zoomWrap.height()))
            : (c.$elem.css("height", "auto"),
              c.$elem.css("width", c.options.constrainSize),
              (c.constheight = c.$elem.height())),
          "inner" == c.options.zoomType &&
            (c.zoomWrap.parent().css("height", c.constheight),
            c.zoomWrap.parent().css("width", c.options.constrainSize),
            c.zoomWindow.css("height", c.constheight),
            c.zoomWindow.css("width", c.options.constrainSize)),
          c.options.tint &&
            (c.tintContainer.css("height", c.constheight),
            c.tintContainer.css("width", c.options.constrainSize),
            c.zoomTint.css("height", c.constheight),
            c.zoomTint.css("width", c.options.constrainSize),
            c.zoomTintImage.css("height", c.constheight),
            c.zoomTintImage.css("width", c.options.constrainSize))));
    },
    doneCallback: function () {
      this.options.loadingIcon && this.spinner.hide();
      this.nzOffset = this.$elem.offset();
      this.nzWidth = this.$elem.width();
      this.nzHeight = this.$elem.height();
      this.currentZoomLevel = this.options.zoomLevel;
      this.widthRatio = this.largeWidth / this.nzWidth;
      this.heightRatio = this.largeHeight / this.nzHeight;
      "window" == this.options.zoomType &&
        ((lensHeight =
          this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
            ? this.nzHeight
            : String(this.options.zoomWindowHeight / this.heightRatio)),
        (lensWidth =
          this.options.zoomWindowWidth < this.options.zoomWindowWidth
            ? this.nzWidth
            : this.options.zoomWindowWidth / this.widthRatio),
        this.zoomLens && (this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight)));
    },
    getCurrentImage: function () {
      return this.zoomImage;
    },
    getGalleryList: function () {
      var b = this;
      b.gallerylist = [];
      b.options.gallery
        ? d("#" + b.options.gallery + " a").each(function () {
            var a = "";
            d(this).data("zoom-image")
              ? (a = d(this).data("zoom-image"))
              : d(this).data("image") && (a = d(this).data("image"));
            a == b.zoomImage
              ? b.gallerylist.unshift({ href: "" + a + "", title: d(this).find("img").attr("title") })
              : b.gallerylist.push({ href: "" + a + "", title: d(this).find("img").attr("title") });
          })
        : b.gallerylist.push({ href: "" + b.zoomImage + "", title: d(this).find("img").attr("title") });
      return b.gallerylist;
    },
    changeZoomLevel: function (b) {
      this.scrollingLock = !0;
      this.newvalue = parseFloat(b).toFixed(2);
      newvalue = parseFloat(b).toFixed(2);
      maxheightnewvalue = this.largeHeight / ((this.options.zoomWindowHeight / this.nzHeight) * this.nzHeight);
      maxwidthtnewvalue = this.largeWidth / ((this.options.zoomWindowWidth / this.nzWidth) * this.nzWidth);
      "inner" != this.options.zoomType &&
        (maxheightnewvalue <= newvalue
          ? ((this.heightRatio = this.largeHeight / maxheightnewvalue / this.nzHeight),
            (this.newvalueheight = maxheightnewvalue),
            (this.fullheight = !0))
          : ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
            (this.newvalueheight = newvalue),
            (this.fullheight = !1)),
        maxwidthtnewvalue <= newvalue
          ? ((this.widthRatio = this.largeWidth / maxwidthtnewvalue / this.nzWidth),
            (this.newvaluewidth = maxwidthtnewvalue),
            (this.fullwidth = !0))
          : ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
            (this.newvaluewidth = newvalue),
            (this.fullwidth = !1)),
        "lens" == this.options.zoomType &&
          (maxheightnewvalue <= newvalue
            ? ((this.fullwidth = !0), (this.newvaluewidth = maxheightnewvalue))
            : ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
              (this.newvaluewidth = newvalue),
              (this.fullwidth = !1))));
      "inner" == this.options.zoomType &&
        ((maxheightnewvalue = parseFloat(this.largeHeight / this.nzHeight).toFixed(2)),
        (maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(2)),
        newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue),
        newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue),
        maxheightnewvalue <= newvalue
          ? ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
            (this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue),
            (this.fullheight = !0))
          : ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
            (this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue),
            (this.fullheight = !1)),
        maxwidthtnewvalue <= newvalue
          ? ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
            (this.newvaluewidth = newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue),
            (this.fullwidth = !0))
          : ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
            (this.newvaluewidth = newvalue),
            (this.fullwidth = !1)));
      scrcontinue = !1;
      "inner" == this.options.zoomType &&
        (this.nzWidth > this.nzHeight &&
          (this.newvaluewidth <= maxwidthtnewvalue
            ? (scrcontinue = !0)
            : ((scrcontinue = !1), (this.fullwidth = this.fullheight = !0))),
        this.nzHeight > this.nzWidth &&
          (this.newvaluewidth <= maxwidthtnewvalue
            ? (scrcontinue = !0)
            : ((scrcontinue = !1), (this.fullwidth = this.fullheight = !0))));
      "inner" != this.options.zoomType && (scrcontinue = !0);
      scrcontinue &&
        ((this.zoomLock = 0),
        (this.changeZoom = !0),
        this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight &&
          ((this.currentZoomLevel = this.newvalueheight),
          "lens" != this.options.zoomType &&
            "inner" != this.options.zoomType &&
            ((this.changeBgSize = !0),
            this.zoomLens.css({ height: String(this.options.zoomWindowHeight / this.heightRatio) + "px" })),
          "lens" == this.options.zoomType || "inner" == this.options.zoomType) &&
          (this.changeBgSize = !0),
        this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth &&
          ("inner" != this.options.zoomType &&
            this.newvaluewidth > this.newvalueheight &&
            (this.currentZoomLevel = this.newvaluewidth),
          "lens" != this.options.zoomType &&
            "inner" != this.options.zoomType &&
            ((this.changeBgSize = !0),
            this.zoomLens.css({ width: String(this.options.zoomWindowWidth / this.widthRatio) + "px" })),
          "lens" == this.options.zoomType || "inner" == this.options.zoomType) &&
          (this.changeBgSize = !0),
        "inner" == this.options.zoomType &&
          ((this.changeBgSize = !0),
          this.nzWidth > this.nzHeight && (this.currentZoomLevel = this.newvaluewidth),
          this.nzHeight > this.nzWidth && (this.currentZoomLevel = this.newvaluewidth)));
      this.setPosition(this.currentLoc);
    },
    closeAll: function () {
      self.zoomWindow && self.zoomWindow.hide();
      self.zoomLens && self.zoomLens.hide();
      self.zoomTint && self.zoomTint.hide();
    },
    changeState: function (b) {
      "enable" == b && (this.options.zoomEnabled = !0);
      "disable" == b && (this.options.zoomEnabled = !1);
    },
  };
  d.fn.elevateZoom = function (b) {
    return this.each(function () {
      var a = Object.create(k);
      a.init(b, this);
      d.data(this, "elevateZoom", a);
    });
  };
  d.fn.elevateZoom.options = {
    zoomActivation: "hover",
    zoomEnabled: !0,
    preloading: 1,
    zoomLevel: 1,
    scrollZoom: !1,
    scrollZoomIncrement: 0.1,
    minZoomLevel: !1,
    maxZoomLevel: !1,
    easing: !1,
    easingAmount: 12,
    lensSize: 200,
    zoomWindowWidth: 400,
    zoomWindowHeight: 400,
    zoomWindowOffetx: 0,
    zoomWindowOffety: 0,
    zoomWindowPosition: 1,
    zoomWindowBgColour: "#fff",
    lensFadeIn: !1,
    lensFadeOut: !1,
    debug: !1,
    zoomWindowFadeIn: !1,
    zoomWindowFadeOut: !1,
    zoomWindowAlwaysShow: !1,
    zoomTintFadeIn: !1,
    zoomTintFadeOut: !1,
    borderSize: 4,
    showLens: !0,
    borderColour: "#888",
    lensBorderSize: 1,
    lensBorderColour: "#000",
    lensShape: "square",
    zoomType: "window",
    containLensZoom: !1,
    lensColour: "white",
    lensOpacity: 0.4,
    lenszoom: !1,
    tint: !1,
    tintColour: "#333",
    tintOpacity: 0.4,
    gallery: !1,
    galleryActiveClass: "zoomGalleryActive",
    imageCrossfade: !1,
    constrainType: !1,
    constrainSize: !1,
    loadingIcon: !1,
    cursor: "default",
    responsive: !0,
    onComplete: d.noop,
    onZoomedImageLoaded: function () {},
    onImageSwap: d.noop,
    onImageSwapComplete: d.noop,
  };
})(jQuery, window, document);

/*-----------------------------
  08. Scrollreveal.min.js
-------------------------------*/
!(function () {
  "use strict";
  function e(n) {
    return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype
      ? new e(n)
      : ((O = this),
        (O.version = "3.3.2"),
        (O.tools = new E()),
        O.isSupported()
          ? (O.tools.extend(O.defaults, n || {}),
            (O.defaults.container = t(O.defaults)),
            (O.store = { elements: {}, containers: [] }),
            (O.sequences = {}),
            (O.history = []),
            (O.uid = 0),
            (O.initialized = !1))
          : "undefined" != typeof console && null !== console,
        O);
  }
  function t(e) {
    if (e && e.container) {
      if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
      if (O.tools.isNode(e.container)) return e.container;
    }
    return O.defaults.container;
  }
  function n(e, t) {
    return "string" == typeof e
      ? Array.prototype.slice.call(t.querySelectorAll(e))
      : O.tools.isNode(e)
      ? [e]
      : O.tools.isNodeList(e)
      ? Array.prototype.slice.call(e)
      : [];
  }
  function i() {
    return ++O.uid;
  }
  function o(e, t, n) {
    t.container && (t.container = n),
      e.config ? (e.config = O.tools.extendClone(e.config, t)) : (e.config = O.tools.extendClone(O.defaults, t)),
      "top" === e.config.origin || "bottom" === e.config.origin ? (e.config.axis = "Y") : (e.config.axis = "X");
  }
  function r(e) {
    var t = window.getComputedStyle(e.domEl);
    e.styles ||
      ((e.styles = { transition: {}, transform: {}, computed: {} }),
      (e.styles.inline = e.domEl.getAttribute("style") || ""),
      (e.styles.inline += "; visibility: visible; "),
      (e.styles.computed.opacity = t.opacity),
      t.transition && "all 0s ease 0s" !== t.transition
        ? (e.styles.computed.transition = t.transition + ", ")
        : (e.styles.computed.transition = "")),
      (e.styles.transition.instant = s(e, 0)),
      (e.styles.transition.delayed = s(e, e.config.delay)),
      (e.styles.transform.initial = " -webkit-transform:"),
      (e.styles.transform.target = " -webkit-transform:"),
      a(e),
      (e.styles.transform.initial += "transform:"),
      (e.styles.transform.target += "transform:"),
      a(e);
  }
  function s(e, t) {
    var n = e.config;
    return (
      "-webkit-transition: " +
      e.styles.computed.transition +
      "-webkit-transform " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s, opacity " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s; transition: " +
      e.styles.computed.transition +
      "transform " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s, opacity " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s; "
    );
  }
  function a(e) {
    var t,
      n = e.config,
      i = e.styles.transform;
    (t =
      "top" === n.origin || "left" === n.origin
        ? /^-/.test(n.distance)
          ? n.distance.substr(1)
          : "-" + n.distance
        : n.distance),
      parseInt(n.distance) &&
        ((i.initial += " translate" + n.axis + "(" + t + ")"), (i.target += " translate" + n.axis + "(0)")),
      n.scale && ((i.initial += " scale(" + n.scale + ")"), (i.target += " scale(1)")),
      n.rotate.x && ((i.initial += " rotateX(" + n.rotate.x + "deg)"), (i.target += " rotateX(0)")),
      n.rotate.y && ((i.initial += " rotateY(" + n.rotate.y + "deg)"), (i.target += " rotateY(0)")),
      n.rotate.z && ((i.initial += " rotateZ(" + n.rotate.z + "deg)"), (i.target += " rotateZ(0)")),
      (i.initial += "; opacity: " + n.opacity + ";"),
      (i.target += "; opacity: " + e.styles.computed.opacity + ";");
  }
  function l(e) {
    var t = e.config.container;
    t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container),
      (O.store.elements[e.id] = e);
  }
  function c(e, t, n) {
    var i = { target: e, config: t, interval: n };
    O.history.push(i);
  }
  function f() {
    if (O.isSupported()) {
      y();
      for (var e = 0; e < O.store.containers.length; e++)
        O.store.containers[e].addEventListener("scroll", d), O.store.containers[e].addEventListener("resize", d);
      O.initialized ||
        (window.addEventListener("scroll", d), window.addEventListener("resize", d), (O.initialized = !0));
    }
    return O;
  }
  function d() {
    T(y);
  }
  function u() {
    var e, t, n, i;
    O.tools.forOwn(O.sequences, function (o) {
      (i = O.sequences[o]), (e = !1);
      for (var r = 0; r < i.elemIds.length; r++) (n = i.elemIds[r]), (t = O.store.elements[n]), q(t) && !e && (e = !0);
      i.active = e;
    });
  }
  function y() {
    var e, t;
    u(),
      O.tools.forOwn(O.store.elements, function (n) {
        (t = O.store.elements[n]),
          (e = w(t)),
          g(t)
            ? (t.config.beforeReveal(t.domEl),
              e
                ? t.domEl.setAttribute(
                    "style",
                    t.styles.inline + t.styles.transform.target + t.styles.transition.delayed
                  )
                : t.domEl.setAttribute(
                    "style",
                    t.styles.inline + t.styles.transform.target + t.styles.transition.instant
                  ),
              p("reveal", t, e),
              (t.revealing = !0),
              (t.seen = !0),
              t.sequence && m(t, e))
            : v(t) &&
              (t.config.beforeReset(t.domEl),
              t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant),
              p("reset", t),
              (t.revealing = !1));
      });
  }
  function m(e, t) {
    var n = 0,
      i = 0,
      o = O.sequences[e.sequence.id];
    (o.blocked = !0),
      t && "onload" === e.config.useDelay && (i = e.config.delay),
      e.sequence.timer &&
        ((n = Math.abs(e.sequence.timer.started - new Date())), window.clearTimeout(e.sequence.timer)),
      (e.sequence.timer = { started: new Date() }),
      (e.sequence.timer.clock = window.setTimeout(function () {
        (o.blocked = !1), (e.sequence.timer = null), d();
      }, Math.abs(o.interval) + i - n));
  }
  function p(e, t, n) {
    var i = 0,
      o = 0,
      r = "after";
    switch (e) {
      case "reveal":
        (o = t.config.duration), n && (o += t.config.delay), (r += "Reveal");
        break;
      case "reset":
        (o = t.config.duration), (r += "Reset");
    }
    t.timer && ((i = Math.abs(t.timer.started - new Date())), window.clearTimeout(t.timer.clock)),
      (t.timer = { started: new Date() }),
      (t.timer.clock = window.setTimeout(function () {
        t.config[r](t.domEl), (t.timer = null);
      }, o - i));
  }
  function g(e) {
    if (e.sequence) {
      var t = O.sequences[e.sequence.id];
      return t.active && !t.blocked && !e.revealing && !e.disabled;
    }
    return q(e) && !e.revealing && !e.disabled;
  }
  function w(e) {
    var t = e.config.useDelay;
    return "always" === t || ("onload" === t && !O.initialized) || ("once" === t && !e.seen);
  }
  function v(e) {
    if (e.sequence) {
      var t = O.sequences[e.sequence.id];
      return !t.active && e.config.reset && e.revealing && !e.disabled;
    }
    return !q(e) && e.config.reset && e.revealing && !e.disabled;
  }
  function b(e) {
    return { width: e.clientWidth, height: e.clientHeight };
  }
  function h(e) {
    if (e && e !== window.document.documentElement) {
      var t = x(e);
      return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top };
    }
    return { x: window.pageXOffset, y: window.pageYOffset };
  }
  function x(e) {
    var t = 0,
      n = 0,
      i = e.offsetHeight,
      o = e.offsetWidth;
    do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), (e = e.offsetParent);
    while (e);
    return { top: t, left: n, height: i, width: o };
  }
  function q(e) {
    function t() {
      var t = c + a * s,
        n = f + l * s,
        i = d - a * s,
        y = u - l * s,
        m = r.y + e.config.viewOffset.top,
        p = r.x + e.config.viewOffset.left,
        g = r.y - e.config.viewOffset.bottom + o.height,
        w = r.x - e.config.viewOffset.right + o.width;
      return t < g && i > m && n > p && y < w;
    }
    function n() {
      return "fixed" === window.getComputedStyle(e.domEl).position;
    }
    var i = x(e.domEl),
      o = b(e.config.container),
      r = h(e.config.container),
      s = e.config.viewFactor,
      a = i.height,
      l = i.width,
      c = i.top,
      f = i.left,
      d = c + a,
      u = f + l;
    return t() || n();
  }
  function E() {}
  var O, T;
  (e.prototype.defaults = {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay: 0,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 0.9,
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
    container: window.document.documentElement,
    mobile: !0,
    reset: !1,
    useDelay: "always",
    viewFactor: 0.2,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    beforeReveal: function (e) {},
    beforeReset: function (e) {},
    afterReveal: function (e) {},
    afterReset: function (e) {},
  }),
    (e.prototype.isSupported = function () {
      var e = document.documentElement.style;
      return ("WebkitTransition" in e && "WebkitTransform" in e) || ("transition" in e && "transform" in e);
    }),
    (e.prototype.reveal = function (e, s, a, d) {
      var u, y, m, p, g, w;
      if (
        (void 0 !== s && "number" == typeof s ? ((a = s), (s = {})) : (void 0 !== s && null !== s) || (s = {}),
        (u = t(s)),
        (y = n(e, u)),
        !y.length)
      )
        return O;
      a && "number" == typeof a && ((w = i()), (g = O.sequences[w] = { id: w, interval: a, elemIds: [], active: !1 }));
      for (var v = 0; v < y.length; v++)
        (p = y[v].getAttribute("data-sr-id")),
          p
            ? (m = O.store.elements[p])
            : ((m = { id: i(), domEl: y[v], seen: !1, revealing: !1 }), m.domEl.setAttribute("data-sr-id", m.id)),
          g && ((m.sequence = { id: g.id, index: g.elemIds.length }), g.elemIds.push(m.id)),
          o(m, s, u),
          r(m),
          l(m),
          (O.tools.isMobile() && !m.config.mobile) || !O.isSupported()
            ? (m.domEl.setAttribute("style", m.styles.inline), (m.disabled = !0))
            : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
      return (
        !d &&
          O.isSupported() &&
          (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), (O.initTimeout = window.setTimeout(f, 0))),
        O
      );
    }),
    (e.prototype.sync = function () {
      if (O.history.length && O.isSupported()) {
        for (var e = 0; e < O.history.length; e++) {
          var t = O.history[e];
          O.reveal(t.target, t.config, t.interval, !0);
        }
        f();
      }
      return O;
    }),
    (E.prototype.isObject = function (e) {
      return null !== e && "object" == typeof e && e.constructor === Object;
    }),
    (E.prototype.isNode = function (e) {
      return "object" == typeof window.Node
        ? e instanceof window.Node
        : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
    }),
    (E.prototype.isNodeList = function (e) {
      var t = Object.prototype.toString.call(e),
        n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
      return "object" == typeof window.NodeList
        ? e instanceof window.NodeList
        : e &&
            "object" == typeof e &&
            n.test(t) &&
            "number" == typeof e.length &&
            (0 === e.length || this.isNode(e[0]));
    }),
    (E.prototype.forOwn = function (e, t) {
      if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
      for (var n in e) e.hasOwnProperty(n) && t(n);
    }),
    (E.prototype.extend = function (e, t) {
      return (
        this.forOwn(
          t,
          function (n) {
            this.isObject(t[n])
              ? ((e[n] && this.isObject(e[n])) || (e[n] = {}), this.extend(e[n], t[n]))
              : (e[n] = t[n]);
          }.bind(this)
        ),
        e
      );
    }),
    (E.prototype.extendClone = function (e, t) {
      return this.extend(this.extend({}, e), t);
    }),
    (E.prototype.isMobile = function () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }),
    (T =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }),
    "function" == typeof define && "object" == typeof define.amd && define.amd
      ? define(function () {
          return e;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = e)
      : (window.ScrollReveal = e);
})();

/*! jQuery UI - v1.12.1 - 2016-09-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
  function e(t) {
    for (var e = t.css("visibility"); "inherit" === e; ) (t = t.parent()), (e = t.css("visibility"));
    return "hidden" !== e;
  }
  function i(t) {
    for (var e, i; t.length && t[0] !== document; ) {
      if (
        ((e = t.css("position")),
        ("absolute" === e || "relative" === e || "fixed" === e) &&
          ((i = parseInt(t.css("zIndex"), 10)), !isNaN(i) && 0 !== i))
      )
        return i;
      t = t.parent();
    }
    return 0;
  }
  function s() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      t.extend(this._defaults, this.regional[""]),
      (this.regional.en = t.extend(!0, {}, this.regional[""])),
      (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
      (this.dpDiv = n(
        t(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function n(e) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e
      .on("mouseout", i, function () {
        t(this).removeClass("ui-state-hover"),
          -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
          -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
      })
      .on("mouseover", i, o);
  }
  function o() {
    t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) ||
      (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
      t(this).addClass("ui-state-hover"),
      -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"),
      -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
  }
  function a(e, i) {
    t.extend(e, i);
    for (var s in i) null == i[s] && (e[s] = i[s]);
    return e;
  }
  function r(t) {
    return function () {
      var e = this.element.val();
      t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
    };
  }
  (t.ui = t.ui || {}), (t.ui.version = "1.12.1");
  var h = 0,
    l = Array.prototype.slice;
  (t.cleanData = (function (e) {
    return function (i) {
      var s, n, o;
      for (o = 0; null != (n = i[o]); o++)
        try {
          (s = t._data(n, "events")), s && s.remove && t(n).triggerHandler("remove");
        } catch (a) {}
      e(i);
    };
  })(t.cleanData)),
    (t.widget = function (e, i, s) {
      var n,
        o,
        a,
        r = {},
        h = e.split(".")[0];
      e = e.split(".")[1];
      var l = h + "-" + e;
      return (
        s || ((s = i), (i = t.Widget)),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        (t.expr[":"][l.toLowerCase()] = function (e) {
          return !!t.data(e, l);
        }),
        (t[h] = t[h] || {}),
        (n = t[h][e]),
        (o = t[h][e] =
          function (t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
          }),
        t.extend(o, n, { version: s.version, _proto: t.extend({}, s), _childConstructors: [] }),
        (a = new i()),
        (a.options = t.widget.extend({}, a.options)),
        t.each(s, function (e, s) {
          return t.isFunction(s)
            ? ((r[e] = (function () {
                function t() {
                  return i.prototype[e].apply(this, arguments);
                }
                function n(t) {
                  return i.prototype[e].apply(this, t);
                }
                return function () {
                  var e,
                    i = this._super,
                    o = this._superApply;
                  return (
                    (this._super = t),
                    (this._superApply = n),
                    (e = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = o),
                    e
                  );
                };
              })()),
              void 0)
            : ((r[e] = s), void 0);
        }),
        (o.prototype = t.widget.extend(a, { widgetEventPrefix: n ? a.widgetEventPrefix || e : e }, r, {
          constructor: o,
          namespace: h,
          widgetName: e,
          widgetFullName: l,
        })),
        n
          ? (t.each(n._childConstructors, function (e, i) {
              var s = i.prototype;
              t.widget(s.namespace + "." + s.widgetName, o, i._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
      );
    }),
    (t.widget.extend = function (e) {
      for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
        for (i in n[o])
          (s = n[o][i]),
            n[o].hasOwnProperty(i) &&
              void 0 !== s &&
              (e[i] = t.isPlainObject(s)
                ? t.isPlainObject(e[i])
                  ? t.widget.extend({}, e[i], s)
                  : t.widget.extend({}, s)
                : s);
      return e;
    }),
    (t.widget.bridge = function (e, i) {
      var s = i.prototype.widgetFullName || e;
      t.fn[e] = function (n) {
        var o = "string" == typeof n,
          a = l.call(arguments, 1),
          r = this;
        return (
          o
            ? this.length || "instance" !== n
              ? this.each(function () {
                  var i,
                    o = t.data(this, s);
                  return "instance" === n
                    ? ((r = o), !1)
                    : o
                    ? t.isFunction(o[n]) && "_" !== n.charAt(0)
                      ? ((i = o[n].apply(o, a)),
                        i !== o && void 0 !== i ? ((r = i && i.jquery ? r.pushStack(i.get()) : i), !1) : void 0)
                      : t.error("no such method '" + n + "' for " + e + " widget instance")
                    : t.error(
                        "cannot call methods on " +
                          e +
                          " prior to initialization; " +
                          "attempted to call method '" +
                          n +
                          "'"
                      );
                })
              : (r = void 0)
            : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))),
              this.each(function () {
                var e = t.data(this, s);
                e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
              })),
          r
        );
      };
    }),
    (t.Widget = function () {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (e, i) {
        (i = t(i || this.defaultElement || this)[0]),
          (this.element = t(i)),
          (this.uuid = h++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          (this.classesElementLookup = {}),
          i !== this &&
            (t.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === i && this.destroy();
              },
            }),
            (this.document = t(i.style ? i.ownerDocument : i.document || i)),
            (this.window = t(this.document[0].defaultView || this.document[0].parentWindow))),
          (this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e)),
          this._create(),
          this.options.disabled && this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this;
        this._destroy(),
          t.each(this.classesElementLookup, function (t, i) {
            e._removeClass(i, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: t.noop,
      widget: function () {
        return this.element;
      },
      option: function (e, i) {
        var s,
          n,
          o,
          a = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e)
          if (((a = {}), (s = e.split(".")), (e = s.shift()), s.length)) {
            for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++)
              (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
            if (((e = s.pop()), 1 === arguments.length)) return void 0 === n[e] ? null : n[e];
            n[e] = i;
          } else {
            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
            a[e] = i;
          }
        return this._setOptions(a), this;
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (e) {
        var i, s, n;
        for (i in e)
          (n = this.classesElementLookup[i]),
            e[i] !== this.options.classes[i] &&
              n &&
              n.length &&
              ((s = t(n.get())),
              this._removeClass(n, i),
              s.addClass(this._classes({ element: s, keys: i, classes: e, add: !0 })));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (e) {
        function i(i, o) {
          var a, r;
          for (r = 0; i.length > r; r++)
            (a = n.classesElementLookup[i[r]] || t()),
              (a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get())),
              (n.classesElementLookup[i[r]] = a),
              s.push(i[r]),
              o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
        var s = [],
          n = this;
        return (
          (e = t.extend({ element: this.element, classes: this.options.classes || {} }, e)),
          this._on(e.element, { remove: "_untrackClassesElement" }),
          e.keys && i(e.keys.match(/\S+/g) || [], !0),
          e.extra && i(e.extra.match(/\S+/g) || []),
          s.join(" ")
        );
      },
      _untrackClassesElement: function (e) {
        var i = this;
        t.each(i.classesElementLookup, function (s, n) {
          -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
        });
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        s = "boolean" == typeof s ? s : i;
        var n = "string" == typeof t || null === t,
          o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s };
        return o.element.toggleClass(this._classes(o), s), this;
      },
      _on: function (e, i, s) {
        var n,
          o = this;
        "boolean" != typeof e && ((s = i), (i = e), (e = !1)),
          s
            ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          t.each(s, function (s, a) {
            function r() {
              return e || (o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled"))
                ? ("string" == typeof a ? o[a] : a).apply(o, arguments)
                : void 0;
            }
            "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
            var h = s.match(/^([\w:-]*)\s*(.*)$/),
              l = h[1] + o.eventNamespace,
              c = h[2];
            c ? n.on(l, c, r) : i.on(l, r);
          });
      },
      _off: function (e, i) {
        (i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
          e.off(i).off(i),
          (this.bindings = t(this.bindings.not(e).get())),
          (this.focusable = t(this.focusable.not(e).get())),
          (this.hoverable = t(this.hoverable.not(e).get()));
      },
      _delay: function (t, e) {
        function i() {
          return ("string" == typeof t ? s[t] : t).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, e || 0);
      },
      _hoverable: function (e) {
        (this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function (e) {
              this._addClass(t(e.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (e) {
              this._removeClass(t(e.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (e) {
        (this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function (e) {
              this._addClass(t(e.currentTarget), null, "ui-state-focus");
            },
            focusout: function (e) {
              this._removeClass(t(e.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (e, i, s) {
        var n,
          o,
          a = this.options[e];
        if (
          ((s = s || {}),
          (i = t.Event(i)),
          (i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase()),
          (i.target = this.element[0]),
          (o = i.originalEvent))
        )
          for (n in o) n in i || (i[n] = o[n]);
        return (
          this.element.trigger(i, s),
          !((t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1) || i.isDefaultPrevented())
        );
      },
    }),
    t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
      t.Widget.prototype["_" + e] = function (s, n, o) {
        "string" == typeof n && (n = { effect: n });
        var a,
          r = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : e;
        (n = n || {}),
          "number" == typeof n && (n = { duration: n }),
          (a = !t.isEmptyObject(n)),
          (n.complete = o),
          n.delay && s.delay(n.delay),
          a && t.effects && t.effects.effect[r]
            ? s[e](n)
            : r !== e && s[r]
            ? s[r](n.duration, n.easing, o)
            : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i();
              });
      };
    }),
    t.widget,
    (function () {
      function e(t, e, i) {
        return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)];
      }
      function i(e, i) {
        return parseInt(t.css(e, i), 10) || 0;
      }
      function s(e) {
        var i = e[0];
        return 9 === i.nodeType
          ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } }
          : t.isWindow(i)
          ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } }
          : i.preventDefault
          ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
          : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() };
      }
      var n,
        o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        h = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        u = /%$/,
        d = t.fn.position;
      (t.position = {
        scrollbarWidth: function () {
          if (void 0 !== n) return n;
          var e,
            i,
            s = t(
              "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
            ),
            o = s.children()[0];
          return (
            t("body").append(s),
            (e = o.offsetWidth),
            s.css("overflow", "scroll"),
            (i = o.offsetWidth),
            e === i && (i = s[0].clientWidth),
            s.remove(),
            (n = e - i)
          );
        },
        getScrollInfo: function (e) {
          var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n = "scroll" === i || ("auto" === i && e.width < e.element[0].scrollWidth),
            o = "scroll" === s || ("auto" === s && e.height < e.element[0].scrollHeight);
          return { width: o ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0 };
        },
        getWithinInfo: function (e) {
          var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n;
          return {
            element: i,
            isWindow: s,
            isDocument: n,
            offset: o ? t(e).offset() : { left: 0, top: 0 },
            scrollLeft: i.scrollLeft(),
            scrollTop: i.scrollTop(),
            width: i.outerWidth(),
            height: i.outerHeight(),
          };
        },
      }),
        (t.fn.position = function (n) {
          if (!n || !n.of) return d.apply(this, arguments);
          n = t.extend({}, n);
          var u,
            p,
            f,
            g,
            m,
            _,
            v = t(n.of),
            b = t.position.getWithinInfo(n.within),
            y = t.position.getScrollInfo(b),
            w = (n.collision || "flip").split(" "),
            k = {};
          return (
            (_ = s(v)),
            v[0].preventDefault && (n.at = "left top"),
            (p = _.width),
            (f = _.height),
            (g = _.offset),
            (m = t.extend({}, g)),
            t.each(["my", "at"], function () {
              var t,
                e,
                i = (n[this] || "").split(" ");
              1 === i.length &&
                (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                (i[0] = r.test(i[0]) ? i[0] : "center"),
                (i[1] = h.test(i[1]) ? i[1] : "center"),
                (t = l.exec(i[0])),
                (e = l.exec(i[1])),
                (k[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                (n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]);
            }),
            1 === w.length && (w[1] = w[0]),
            "right" === n.at[0] ? (m.left += p) : "center" === n.at[0] && (m.left += p / 2),
            "bottom" === n.at[1] ? (m.top += f) : "center" === n.at[1] && (m.top += f / 2),
            (u = e(k.at, p, f)),
            (m.left += u[0]),
            (m.top += u[1]),
            this.each(function () {
              var s,
                r,
                h = t(this),
                l = h.outerWidth(),
                c = h.outerHeight(),
                d = i(this, "marginLeft"),
                _ = i(this, "marginTop"),
                x = l + d + i(this, "marginRight") + y.width,
                C = c + _ + i(this, "marginBottom") + y.height,
                D = t.extend({}, m),
                I = e(k.my, h.outerWidth(), h.outerHeight());
              "right" === n.my[0] ? (D.left -= l) : "center" === n.my[0] && (D.left -= l / 2),
                "bottom" === n.my[1] ? (D.top -= c) : "center" === n.my[1] && (D.top -= c / 2),
                (D.left += I[0]),
                (D.top += I[1]),
                (s = { marginLeft: d, marginTop: _ }),
                t.each(["left", "top"], function (e, i) {
                  t.ui.position[w[e]] &&
                    t.ui.position[w[e]][i](D, {
                      targetWidth: p,
                      targetHeight: f,
                      elemWidth: l,
                      elemHeight: c,
                      collisionPosition: s,
                      collisionWidth: x,
                      collisionHeight: C,
                      offset: [u[0] + I[0], u[1] + I[1]],
                      my: n.my,
                      at: n.at,
                      within: b,
                      elem: h,
                    });
                }),
                n.using &&
                  (r = function (t) {
                    var e = g.left - D.left,
                      i = e + p - l,
                      s = g.top - D.top,
                      r = s + f - c,
                      u = {
                        target: { element: v, left: g.left, top: g.top, width: p, height: f },
                        element: { element: h, left: D.left, top: D.top, width: l, height: c },
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle",
                      };
                    l > p && p > a(e + i) && (u.horizontal = "center"),
                      c > f && f > a(s + r) && (u.vertical = "middle"),
                      (u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical"),
                      n.using.call(this, t, u);
                  }),
                h.offset(t.extend(D, { using: r }));
            })
          );
        }),
        (t.ui.position = {
          fit: {
            left: function (t, e) {
              var i,
                s = e.within,
                n = s.isWindow ? s.scrollLeft : s.offset.left,
                a = s.width,
                r = t.left - e.collisionPosition.marginLeft,
                h = n - r,
                l = r + e.collisionWidth - a - n;
              e.collisionWidth > a
                ? h > 0 && 0 >= l
                  ? ((i = t.left + h + e.collisionWidth - a - n), (t.left += h - i))
                  : (t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n)
                : h > 0
                ? (t.left += h)
                : l > 0
                ? (t.left -= l)
                : (t.left = o(t.left - r, t.left));
            },
            top: function (t, e) {
              var i,
                s = e.within,
                n = s.isWindow ? s.scrollTop : s.offset.top,
                a = e.within.height,
                r = t.top - e.collisionPosition.marginTop,
                h = n - r,
                l = r + e.collisionHeight - a - n;
              e.collisionHeight > a
                ? h > 0 && 0 >= l
                  ? ((i = t.top + h + e.collisionHeight - a - n), (t.top += h - i))
                  : (t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n)
                : h > 0
                ? (t.top += h)
                : l > 0
                ? (t.top -= l)
                : (t.top = o(t.top - r, t.top));
            },
          },
          flip: {
            left: function (t, e) {
              var i,
                s,
                n = e.within,
                o = n.offset.left + n.scrollLeft,
                r = n.width,
                h = n.isWindow ? n.scrollLeft : n.offset.left,
                l = t.left - e.collisionPosition.marginLeft,
                c = l - h,
                u = l + e.collisionWidth - r - h,
                d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                f = -2 * e.offset[0];
              0 > c
                ? ((i = t.left + d + p + f + e.collisionWidth - r - o), (0 > i || a(c) > i) && (t.left += d + p + f))
                : u > 0 &&
                  ((s = t.left - e.collisionPosition.marginLeft + d + p + f - h),
                  (s > 0 || u > a(s)) && (t.left += d + p + f));
            },
            top: function (t, e) {
              var i,
                s,
                n = e.within,
                o = n.offset.top + n.scrollTop,
                r = n.height,
                h = n.isWindow ? n.scrollTop : n.offset.top,
                l = t.top - e.collisionPosition.marginTop,
                c = l - h,
                u = l + e.collisionHeight - r - h,
                d = "top" === e.my[1],
                p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                g = -2 * e.offset[1];
              0 > c
                ? ((s = t.top + p + f + g + e.collisionHeight - r - o), (0 > s || a(c) > s) && (t.top += p + f + g))
                : u > 0 &&
                  ((i = t.top - e.collisionPosition.marginTop + p + f + g - h),
                  (i > 0 || u > a(i)) && (t.top += p + f + g));
            },
          },
          flipfit: {
            left: function () {
              t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
            },
            top: function () {
              t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
            },
          },
        });
    })(),
    t.ui.position,
    t.extend(t.expr[":"], {
      data: t.expr.createPseudo
        ? t.expr.createPseudo(function (e) {
            return function (i) {
              return !!t.data(i, e);
            };
          })
        : function (e, i, s) {
            return !!t.data(e, s[3]);
          },
    }),
    t.fn.extend({
      disableSelection: (function () {
        var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
        return function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    });
  var c = "ui-effects-",
    u = "ui-effects-style",
    d = "ui-effects-animated",
    p = t;
  (t.effects = { effect: {} }),
    (function (t, e) {
      function i(t, e, i) {
        var s = u[e.type] || {};
        return null == t
          ? i || !e.def
            ? null
            : e.def
          : ((t = s.floor ? ~~t : parseFloat(t)),
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t);
      }
      function s(i) {
        var s = l(),
          n = (s._rgba = []);
        return (
          (i = i.toLowerCase()),
          f(h, function (t, o) {
            var a,
              r = o.re.exec(i),
              h = r && o.parse(r),
              l = o.space || "rgba";
            return h ? ((a = s[l](h)), (s[c[l].cache] = a[c[l].cache]), (n = s._rgba = a._rgba), !1) : e;
          }),
          n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
        );
      }
      function n(t, e, i) {
        return (
          (i = (i + 1) % 1),
          1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        );
      }
      var o,
        a =
          "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [
          {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
              return [t[1], t[2], t[3], t[4]];
            },
          },
          {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
              return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
            },
          },
          {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function (t) {
              return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
            },
          },
          {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function (t) {
              return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
            },
          },
          {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (t) {
              return [t[1], t[2] / 100, t[3] / 100, t[4]];
            },
          },
        ],
        l = (t.Color = function (e, i, s, n) {
          return new t.Color.fn.parse(e, i, s, n);
        }),
        c = {
          rgba: {
            props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } },
          },
          hsla: {
            props: {
              hue: { idx: 0, type: "degrees" },
              saturation: { idx: 1, type: "percent" },
              lightness: { idx: 2, type: "percent" },
            },
          },
        },
        u = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
        d = (l.support = {}),
        p = t("<p>")[0],
        f = t.each;
      (p.style.cssText = "background-color:rgba(1,1,1,.5)"),
        (d.rgba = p.style.backgroundColor.indexOf("rgba") > -1),
        f(c, function (t, e) {
          (e.cache = "_" + t), (e.props.alpha = { idx: 3, type: "percent", def: 1 });
        }),
        (l.fn = t.extend(l.prototype, {
          parse: function (n, a, r, h) {
            if (n === e) return (this._rgba = [null, null, null, null]), this;
            (n.jquery || n.nodeType) && ((n = t(n).css(a)), (a = e));
            var u = this,
              d = t.type(n),
              p = (this._rgba = []);
            return (
              a !== e && ((n = [n, a, r, h]), (d = "array")),
              "string" === d
                ? this.parse(s(n) || o._default)
                : "array" === d
                ? (f(c.rgba.props, function (t, e) {
                    p[e.idx] = i(n[e.idx], e);
                  }),
                  this)
                : "object" === d
                ? (n instanceof l
                    ? f(c, function (t, e) {
                        n[e.cache] && (u[e.cache] = n[e.cache].slice());
                      })
                    : f(c, function (e, s) {
                        var o = s.cache;
                        f(s.props, function (t, e) {
                          if (!u[o] && s.to) {
                            if ("alpha" === t || null == n[t]) return;
                            u[o] = s.to(u._rgba);
                          }
                          u[o][e.idx] = i(n[t], e, !0);
                        }),
                          u[o] &&
                            0 > t.inArray(null, u[o].slice(0, 3)) &&
                            ((u[o][3] = 1), s.from && (u._rgba = s.from(u[o])));
                      }),
                  this)
                : e
            );
          },
          is: function (t) {
            var i = l(t),
              s = !0,
              n = this;
            return (
              f(c, function (t, o) {
                var a,
                  r = i[o.cache];
                return (
                  r &&
                    ((a = n[o.cache] || (o.to && o.to(n._rgba)) || []),
                    f(o.props, function (t, i) {
                      return null != r[i.idx] ? (s = r[i.idx] === a[i.idx]) : e;
                    })),
                  s
                );
              }),
              s
            );
          },
          _space: function () {
            var t = [],
              e = this;
            return (
              f(c, function (i, s) {
                e[s.cache] && t.push(i);
              }),
              t.pop()
            );
          },
          transition: function (t, e) {
            var s = l(t),
              n = s._space(),
              o = c[n],
              a = 0 === this.alpha() ? l("transparent") : this,
              r = a[o.cache] || o.to(a._rgba),
              h = r.slice();
            return (
              (s = s[o.cache]),
              f(o.props, function (t, n) {
                var o = n.idx,
                  a = r[o],
                  l = s[o],
                  c = u[n.type] || {};
                null !== l &&
                  (null === a
                    ? (h[o] = l)
                    : (c.mod && (l - a > c.mod / 2 ? (a += c.mod) : a - l > c.mod / 2 && (a -= c.mod)),
                      (h[o] = i((l - a) * e + a, n))));
              }),
              this[n](h)
            );
          },
          blend: function (e) {
            if (1 === this._rgba[3]) return this;
            var i = this._rgba.slice(),
              s = i.pop(),
              n = l(e)._rgba;
            return l(
              t.map(i, function (t, e) {
                return (1 - s) * n[e] + s * t;
              })
            );
          },
          toRgbaString: function () {
            var e = "rgba(",
              i = t.map(this._rgba, function (t, e) {
                return null == t ? (e > 2 ? 1 : 0) : t;
              });
            return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
          },
          toHslaString: function () {
            var e = "hsla(",
              i = t.map(this.hsla(), function (t, e) {
                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t;
              });
            return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
          },
          toHexString: function (e) {
            var i = this._rgba.slice(),
              s = i.pop();
            return (
              e && i.push(~~(255 * s)),
              "#" +
                t
                  .map(i, function (t) {
                    return (t = (t || 0).toString(16)), 1 === t.length ? "0" + t : t;
                  })
                  .join("")
            );
          },
          toString: function () {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
          },
        })),
        (l.fn.parse.prototype = l.fn),
        (c.hsla.to = function (t) {
          if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
          var e,
            i,
            s = t[0] / 255,
            n = t[1] / 255,
            o = t[2] / 255,
            a = t[3],
            r = Math.max(s, n, o),
            h = Math.min(s, n, o),
            l = r - h,
            c = r + h,
            u = 0.5 * c;
          return (
            (e =
              h === r
                ? 0
                : s === r
                ? (60 * (n - o)) / l + 360
                : n === r
                ? (60 * (o - s)) / l + 120
                : (60 * (s - n)) / l + 240),
            (i = 0 === l ? 0 : 0.5 >= u ? l / c : l / (2 - c)),
            [Math.round(e) % 360, i, u, null == a ? 1 : a]
          );
        }),
        (c.hsla.from = function (t) {
          if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
          var e = t[0] / 360,
            i = t[1],
            s = t[2],
            o = t[3],
            a = 0.5 >= s ? s * (1 + i) : s + i - s * i,
            r = 2 * s - a;
          return [
            Math.round(255 * n(r, a, e + 1 / 3)),
            Math.round(255 * n(r, a, e)),
            Math.round(255 * n(r, a, e - 1 / 3)),
            o,
          ];
        }),
        f(c, function (s, n) {
          var o = n.props,
            a = n.cache,
            h = n.to,
            c = n.from;
          (l.fn[s] = function (s) {
            if ((h && !this[a] && (this[a] = h(this._rgba)), s === e)) return this[a].slice();
            var n,
              r = t.type(s),
              u = "array" === r || "object" === r ? s : arguments,
              d = this[a].slice();
            return (
              f(o, function (t, e) {
                var s = u["object" === r ? t : e.idx];
                null == s && (s = d[e.idx]), (d[e.idx] = i(s, e));
              }),
              c ? ((n = l(c(d))), (n[a] = d), n) : l(d)
            );
          }),
            f(o, function (e, i) {
              l.fn[e] ||
                (l.fn[e] = function (n) {
                  var o,
                    a = t.type(n),
                    h = "alpha" === e ? (this._hsla ? "hsla" : "rgba") : s,
                    l = this[h](),
                    c = l[i.idx];
                  return "undefined" === a
                    ? c
                    : ("function" === a && ((n = n.call(this, c)), (a = t.type(n))),
                      null == n && i.empty
                        ? this
                        : ("string" === a &&
                            ((o = r.exec(n)), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))),
                          (l[i.idx] = n),
                          this[h](l)));
                });
            });
        }),
        (l.hook = function (e) {
          var i = e.split(" ");
          f(i, function (e, i) {
            (t.cssHooks[i] = {
              set: function (e, n) {
                var o,
                  a,
                  r = "";
                if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                  if (((n = l(o || n)), !d.rgba && 1 !== n._rgba[3])) {
                    for (
                      a = "backgroundColor" === i ? e.parentNode : e;
                      ("" === r || "transparent" === r) && a && a.style;

                    )
                      try {
                        (r = t.css(a, "backgroundColor")), (a = a.parentNode);
                      } catch (h) {}
                    n = n.blend(r && "transparent" !== r ? r : "_default");
                  }
                  n = n.toRgbaString();
                }
                try {
                  e.style[i] = n;
                } catch (h) {}
              },
            }),
              (t.fx.step[i] = function (e) {
                e.colorInit || ((e.start = l(e.elem, i)), (e.end = l(e.end)), (e.colorInit = !0)),
                  t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
              });
          });
        }),
        l.hook(a),
        (t.cssHooks.borderColor = {
          expand: function (t) {
            var e = {};
            return (
              f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                e["border" + s + "Color"] = t;
              }),
              e
            );
          },
        }),
        (o = t.Color.names =
          {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff",
          });
    })(p),
    (function () {
      function e(e) {
        var i,
          s,
          n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
          o = {};
        if (n && n.length && n[0] && n[n[0]])
          for (s = n.length; s--; ) (i = n[s]), "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
        else for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
        return o;
      }
      function i(e, i) {
        var s,
          o,
          a = {};
        for (s in i) (o = i[s]), e[s] !== o && (n[s] || ((t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o)));
        return a;
      }
      var s = ["add", "remove", "toggle"],
        n = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1,
        };
      t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
        t.fx.step[i] = function (t) {
          (("none" !== t.end && !t.setAttr) || (1 === t.pos && !t.setAttr)) &&
            (p.style(t.elem, i, t.end), (t.setAttr = !0));
        };
      }),
        t.fn.addBack ||
          (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
          }),
        (t.effects.animateClass = function (n, o, a, r) {
          var h = t.speed(o, a, r);
          return this.queue(function () {
            var o,
              a = t(this),
              r = a.attr("class") || "",
              l = h.children ? a.find("*").addBack() : a;
            (l = l.map(function () {
              var i = t(this);
              return { el: i, start: e(this) };
            })),
              (o = function () {
                t.each(s, function (t, e) {
                  n[e] && a[e + "Class"](n[e]);
                });
              }),
              o(),
              (l = l.map(function () {
                return (this.end = e(this.el[0])), (this.diff = i(this.start, this.end)), this;
              })),
              a.attr("class", r),
              (l = l.map(function () {
                var e = this,
                  i = t.Deferred(),
                  s = t.extend({}, h, {
                    queue: !1,
                    complete: function () {
                      i.resolve(e);
                    },
                  });
                return this.el.animate(this.diff, s), i.promise();
              })),
              t.when.apply(t, l.get()).done(function () {
                o(),
                  t.each(arguments, function () {
                    var e = this.el;
                    t.each(this.diff, function (t) {
                      e.css(t, "");
                    });
                  }),
                  h.complete.call(a[0]);
              });
          });
        }),
        t.fn.extend({
          addClass: (function (e) {
            return function (i, s, n, o) {
              return s ? t.effects.animateClass.call(this, { add: i }, s, n, o) : e.apply(this, arguments);
            };
          })(t.fn.addClass),
          removeClass: (function (e) {
            return function (i, s, n, o) {
              return arguments.length > 1
                ? t.effects.animateClass.call(this, { remove: i }, s, n, o)
                : e.apply(this, arguments);
            };
          })(t.fn.removeClass),
          toggleClass: (function (e) {
            return function (i, s, n, o, a) {
              return "boolean" == typeof s || void 0 === s
                ? n
                  ? t.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, o, a)
                  : e.apply(this, arguments)
                : t.effects.animateClass.call(this, { toggle: i }, s, n, o);
            };
          })(t.fn.toggleClass),
          switchClass: function (e, i, s, n, o) {
            return t.effects.animateClass.call(this, { add: i, remove: e }, s, n, o);
          },
        });
    })(),
    (function () {
      function e(e, i, s, n) {
        return (
          t.isPlainObject(e) && ((i = e), (e = e.effect)),
          (e = { effect: e }),
          null == i && (i = {}),
          t.isFunction(i) && ((n = i), (s = null), (i = {})),
          ("number" == typeof i || t.fx.speeds[i]) && ((n = s), (s = i), (i = {})),
          t.isFunction(s) && ((n = s), (s = null)),
          i && t.extend(e, i),
          (s = s || i.duration),
          (e.duration = t.fx.off
            ? 0
            : "number" == typeof s
            ? s
            : s in t.fx.speeds
            ? t.fx.speeds[s]
            : t.fx.speeds._default),
          (e.complete = n || i.complete),
          e
        );
      }
      function i(e) {
        return !e || "number" == typeof e || t.fx.speeds[e]
          ? !0
          : "string" != typeof e || t.effects.effect[e]
          ? t.isFunction(e)
            ? !0
            : "object" != typeof e || e.effect
            ? !1
            : !0
          : !0;
      }
      function s(t, e) {
        var i = e.outerWidth(),
          s = e.outerHeight(),
          n =
            /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
          o = n.exec(t) || ["", 0, i, s, 0];
        return {
          top: parseFloat(o[1]) || 0,
          right: "auto" === o[2] ? i : parseFloat(o[2]),
          bottom: "auto" === o[3] ? s : parseFloat(o[3]),
          left: parseFloat(o[4]) || 0,
        };
      }
      t.expr &&
        t.expr.filters &&
        t.expr.filters.animated &&
        (t.expr.filters.animated = (function (e) {
          return function (i) {
            return !!t(i).data(d) || e(i);
          };
        })(t.expr.filters.animated)),
        t.uiBackCompat !== !1 &&
          t.extend(t.effects, {
            save: function (t, e) {
              for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]]);
            },
            restore: function (t, e) {
              for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && ((i = t.data(c + e[s])), t.css(e[s], i));
            },
            setMode: function (t, e) {
              return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
            },
            createWrapper: function (e) {
              if (e.parent().is(".ui-effects-wrapper")) return e.parent();
              var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float") },
                s = t("<div></div>")
                  .addClass("ui-effects-wrapper")
                  .css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                n = { width: e.width(), height: e.height() },
                o = document.activeElement;
              try {
                o.id;
              } catch (a) {
                o = document.body;
              }
              return (
                e.wrap(s),
                (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"),
                (s = e.parent()),
                "static" === e.css("position")
                  ? (s.css({ position: "relative" }), e.css({ position: "relative" }))
                  : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }),
                    t.each(["top", "left", "bottom", "right"], function (t, s) {
                      (i[s] = e.css(s)), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
                    }),
                    e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })),
                e.css(n),
                s.css(i).show()
              );
            },
            removeWrapper: function (e) {
              var i = document.activeElement;
              return (
                e.parent().is(".ui-effects-wrapper") &&
                  (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")),
                e
              );
            },
          }),
        t.extend(t.effects, {
          version: "1.12.1",
          define: function (e, i, s) {
            return s || ((s = i), (i = "effect")), (t.effects.effect[e] = s), (t.effects.effect[e].mode = i), s;
          },
          scaledDimensions: function (t, e, i) {
            if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
            var s = "horizontal" !== i ? (e || 100) / 100 : 1,
              n = "vertical" !== i ? (e || 100) / 100 : 1;
            return {
              height: t.height() * n,
              width: t.width() * s,
              outerHeight: t.outerHeight() * n,
              outerWidth: t.outerWidth() * s,
            };
          },
          clipToBox: function (t) {
            return {
              width: t.clip.right - t.clip.left,
              height: t.clip.bottom - t.clip.top,
              left: t.clip.left,
              top: t.clip.top,
            };
          },
          unshift: function (t, e, i) {
            var s = t.queue();
            e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
          },
          saveStyle: function (t) {
            t.data(u, t[0].style.cssText);
          },
          restoreStyle: function (t) {
            (t[0].style.cssText = t.data(u) || ""), t.removeData(u);
          },
          mode: function (t, e) {
            var i = t.is(":hidden");
            return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e;
          },
          getBaseline: function (t, e) {
            var i, s;
            switch (t[0]) {
              case "top":
                i = 0;
                break;
              case "middle":
                i = 0.5;
                break;
              case "bottom":
                i = 1;
                break;
              default:
                i = t[0] / e.height;
            }
            switch (t[1]) {
              case "left":
                s = 0;
                break;
              case "center":
                s = 0.5;
                break;
              case "right":
                s = 1;
                break;
              default:
                s = t[1] / e.width;
            }
            return { x: s, y: i };
          },
          createPlaceholder: function (e) {
            var i,
              s = e.css("position"),
              n = e.position();
            return (
              e
                .css({
                  marginTop: e.css("marginTop"),
                  marginBottom: e.css("marginBottom"),
                  marginLeft: e.css("marginLeft"),
                  marginRight: e.css("marginRight"),
                })
                .outerWidth(e.outerWidth())
                .outerHeight(e.outerHeight()),
              /^(static|relative)/.test(s) &&
                ((s = "absolute"),
                (i = t("<" + e[0].nodeName + ">")
                  .insertAfter(e)
                  .css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    float: e.css("float"),
                  })
                  .outerWidth(e.outerWidth())
                  .outerHeight(e.outerHeight())
                  .addClass("ui-effects-placeholder")),
                e.data(c + "placeholder", i)),
              e.css({ position: s, left: n.left, top: n.top }),
              i
            );
          },
          removePlaceholder: function (t) {
            var e = c + "placeholder",
              i = t.data(e);
            i && (i.remove(), t.removeData(e));
          },
          cleanUp: function (e) {
            t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
          },
          setTransition: function (e, i, s, n) {
            return (
              (n = n || {}),
              t.each(i, function (t, i) {
                var o = e.cssUnit(i);
                o[0] > 0 && (n[i] = o[0] * s + o[1]);
              }),
              n
            );
          },
        }),
        t.fn.extend({
          effect: function () {
            function i(e) {
              function i() {
                r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a();
              }
              function a() {
                t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e();
              }
              var r = t(this);
              (s.mode = c.shift()),
                t.uiBackCompat === !1 || o
                  ? "none" === s.mode
                    ? (r[l](), a())
                    : n.call(r[0], s, i)
                  : (r.is(":hidden") ? "hide" === l : "show" === l)
                  ? (r[l](), a())
                  : n.call(r[0], s, a);
            }
            var s = e.apply(this, arguments),
              n = t.effects.effect[s.effect],
              o = n.mode,
              a = s.queue,
              r = a || "fx",
              h = s.complete,
              l = s.mode,
              c = [],
              u = function (e) {
                var i = t(this),
                  s = t.effects.mode(i, l) || o;
                i.data(d, !0),
                  c.push(s),
                  o && ("show" === s || (s === o && "hide" === s)) && i.show(),
                  (o && "none" === s) || t.effects.saveStyle(i),
                  t.isFunction(e) && e();
              };
            return t.fx.off || !n
              ? l
                ? this[l](s.duration, h)
                : this.each(function () {
                    h && h.call(this);
                  })
              : a === !1
              ? this.each(u).each(i)
              : this.queue(r, u).queue(r, i);
          },
          show: (function (t) {
            return function (s) {
              if (i(s)) return t.apply(this, arguments);
              var n = e.apply(this, arguments);
              return (n.mode = "show"), this.effect.call(this, n);
            };
          })(t.fn.show),
          hide: (function (t) {
            return function (s) {
              if (i(s)) return t.apply(this, arguments);
              var n = e.apply(this, arguments);
              return (n.mode = "hide"), this.effect.call(this, n);
            };
          })(t.fn.hide),
          toggle: (function (t) {
            return function (s) {
              if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
              var n = e.apply(this, arguments);
              return (n.mode = "toggle"), this.effect.call(this, n);
            };
          })(t.fn.toggle),
          cssUnit: function (e) {
            var i = this.css(e),
              s = [];
            return (
              t.each(["em", "px", "%", "pt"], function (t, e) {
                i.indexOf(e) > 0 && (s = [parseFloat(i), e]);
              }),
              s
            );
          },
          cssClip: function (t) {
            return t
              ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)")
              : s(this.css("clip"), this);
          },
          transfer: function (e, i) {
            var s = t(this),
              n = t(e.to),
              o = "fixed" === n.css("position"),
              a = t("body"),
              r = o ? a.scrollTop() : 0,
              h = o ? a.scrollLeft() : 0,
              l = n.offset(),
              c = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() },
              u = s.offset(),
              d = t("<div class='ui-effects-transfer'></div>")
                .appendTo("body")
                .addClass(e.className)
                .css({
                  top: u.top - r,
                  left: u.left - h,
                  height: s.innerHeight(),
                  width: s.innerWidth(),
                  position: o ? "fixed" : "absolute",
                })
                .animate(c, e.duration, e.easing, function () {
                  d.remove(), t.isFunction(i) && i();
                });
          },
        }),
        (t.fx.step.clip = function (e) {
          e.clipInit ||
            ((e.start = t(e.elem).cssClip()),
            "string" == typeof e.end && (e.end = s(e.end, e.elem)),
            (e.clipInit = !0)),
            t(e.elem).cssClip({
              top: e.pos * (e.end.top - e.start.top) + e.start.top,
              right: e.pos * (e.end.right - e.start.right) + e.start.right,
              bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
              left: e.pos * (e.end.left - e.start.left) + e.start.left,
            });
        });
    })(),
    (function () {
      var e = {};
      t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
        e[i] = function (e) {
          return Math.pow(e, t + 2);
        };
      }),
        t.extend(e, {
          Sine: function (t) {
            return 1 - Math.cos((t * Math.PI) / 2);
          },
          Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t);
          },
          Elastic: function (t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
          },
          Back: function (t) {
            return t * t * (3 * t - 2);
          },
          Bounce: function (t) {
            for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
          },
        }),
        t.each(e, function (e, i) {
          (t.easing["easeIn" + e] = i),
            (t.easing["easeOut" + e] = function (t) {
              return 1 - i(1 - t);
            }),
            (t.easing["easeInOut" + e] = function (t) {
              return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
            });
        });
    })();
  var f = t.effects;
  t.effects.define("blind", "hide", function (e, i) {
    var s = {
        up: ["bottom", "top"],
        vertical: ["bottom", "top"],
        down: ["top", "bottom"],
        left: ["right", "left"],
        horizontal: ["right", "left"],
        right: ["left", "right"],
      },
      n = t(this),
      o = e.direction || "up",
      a = n.cssClip(),
      r = { clip: t.extend({}, a) },
      h = t.effects.createPlaceholder(n);
    (r.clip[s[o][0]] = r.clip[s[o][1]]),
      "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), (r.clip = a)),
      h && h.animate(t.effects.clipToBox(r), e.duration, e.easing),
      n.animate(r, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
  }),
    t.effects.define("bounce", function (e, i) {
      var s,
        n,
        o,
        a = t(this),
        r = e.mode,
        h = "hide" === r,
        l = "show" === r,
        c = e.direction || "up",
        u = e.distance,
        d = e.times || 5,
        p = 2 * d + (l || h ? 1 : 0),
        f = e.duration / p,
        g = e.easing,
        m = "up" === c || "down" === c ? "top" : "left",
        _ = "up" === c || "left" === c,
        v = 0,
        b = a.queue().length;
      for (
        t.effects.createPlaceholder(a),
          o = a.css(m),
          u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3),
          l &&
            ((n = { opacity: 1 }),
            (n[m] = o),
            a
              .css("opacity", 0)
              .css(m, _ ? 2 * -u : 2 * u)
              .animate(n, f, g)),
          h && (u /= Math.pow(2, d - 1)),
          n = {},
          n[m] = o;
        d > v;
        v++
      )
        (s = {}), (s[m] = (_ ? "-=" : "+=") + u), a.animate(s, f, g).animate(n, f, g), (u = h ? 2 * u : u / 2);
      h && ((s = { opacity: 0 }), (s[m] = (_ ? "-=" : "+=") + u), a.animate(s, f, g)),
        a.queue(i),
        t.effects.unshift(a, b, p + 1);
    }),
    t.effects.define("clip", "hide", function (e, i) {
      var s,
        n = {},
        o = t(this),
        a = e.direction || "vertical",
        r = "both" === a,
        h = r || "horizontal" === a,
        l = r || "vertical" === a;
      (s = o.cssClip()),
        (n.clip = {
          top: l ? (s.bottom - s.top) / 2 : s.top,
          right: h ? (s.right - s.left) / 2 : s.right,
          bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
          left: h ? (s.right - s.left) / 2 : s.left,
        }),
        t.effects.createPlaceholder(o),
        "show" === e.mode && (o.cssClip(n.clip), (n.clip = s)),
        o.animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
    }),
    t.effects.define("drop", "hide", function (e, i) {
      var s,
        n = t(this),
        o = e.mode,
        a = "show" === o,
        r = e.direction || "left",
        h = "up" === r || "down" === r ? "top" : "left",
        l = "up" === r || "left" === r ? "-=" : "+=",
        c = "+=" === l ? "-=" : "+=",
        u = { opacity: 0 };
      t.effects.createPlaceholder(n),
        (s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2),
        (u[h] = l + s),
        a && (n.css(u), (u[h] = c + s), (u.opacity = 1)),
        n.animate(u, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
    }),
    t.effects.define("explode", "hide", function (e, i) {
      function s() {
        b.push(this), b.length === u * d && n();
      }
      function n() {
        p.css({ visibility: "visible" }), t(b).remove(), i();
      }
      var o,
        a,
        r,
        h,
        l,
        c,
        u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        d = u,
        p = t(this),
        f = e.mode,
        g = "show" === f,
        m = p.show().css("visibility", "hidden").offset(),
        _ = Math.ceil(p.outerWidth() / d),
        v = Math.ceil(p.outerHeight() / u),
        b = [];
      for (o = 0; u > o; o++)
        for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++)
          (r = m.left + a * _),
            (l = a - (d - 1) / 2),
            p
              .clone()
              .appendTo("body")
              .wrap("<div></div>")
              .css({ position: "absolute", visibility: "visible", left: -a * _, top: -o * v })
              .parent()
              .addClass("ui-effects-explode")
              .css({
                position: "absolute",
                overflow: "hidden",
                width: _,
                height: v,
                left: r + (g ? l * _ : 0),
                top: h + (g ? c * v : 0),
                opacity: g ? 0 : 1,
              })
              .animate(
                { left: r + (g ? 0 : l * _), top: h + (g ? 0 : c * v), opacity: g ? 1 : 0 },
                e.duration || 500,
                e.easing,
                s
              );
    }),
    t.effects.define("fade", "toggle", function (e, i) {
      var s = "show" === e.mode;
      t(this)
        .css("opacity", s ? 0 : 1)
        .animate({ opacity: s ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
    }),
    t.effects.define("fold", "hide", function (e, i) {
      var s = t(this),
        n = e.mode,
        o = "show" === n,
        a = "hide" === n,
        r = e.size || 15,
        h = /([0-9]+)%/.exec(r),
        l = !!e.horizFirst,
        c = l ? ["right", "bottom"] : ["bottom", "right"],
        u = e.duration / 2,
        d = t.effects.createPlaceholder(s),
        p = s.cssClip(),
        f = { clip: t.extend({}, p) },
        g = { clip: t.extend({}, p) },
        m = [p[c[0]], p[c[1]]],
        _ = s.queue().length;
      h && (r = (parseInt(h[1], 10) / 100) * m[a ? 0 : 1]),
        (f.clip[c[0]] = r),
        (g.clip[c[0]] = r),
        (g.clip[c[1]] = 0),
        o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), (g.clip = p)),
        s
          .queue(function (i) {
            d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i();
          })
          .animate(f, u, e.easing)
          .animate(g, u, e.easing)
          .queue(i),
        t.effects.unshift(s, _, 4);
    }),
    t.effects.define("highlight", "show", function (e, i) {
      var s = t(this),
        n = { backgroundColor: s.css("backgroundColor") };
      "hide" === e.mode && (n.opacity = 0),
        t.effects.saveStyle(s),
        s
          .css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" })
          .animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
    }),
    t.effects.define("size", function (e, i) {
      var s,
        n,
        o,
        a = t(this),
        r = ["fontSize"],
        h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        c = e.mode,
        u = "effect" !== c,
        d = e.scale || "both",
        p = e.origin || ["middle", "center"],
        f = a.css("position"),
        g = a.position(),
        m = t.effects.scaledDimensions(a),
        _ = e.from || m,
        v = e.to || t.effects.scaledDimensions(a, 0);
      t.effects.createPlaceholder(a),
        "show" === c && ((o = _), (_ = v), (v = o)),
        (n = {
          from: { y: _.height / m.height, x: _.width / m.width },
          to: { y: v.height / m.height, x: v.width / m.width },
        }),
        ("box" === d || "both" === d) &&
          (n.from.y !== n.to.y &&
            ((_ = t.effects.setTransition(a, h, n.from.y, _)), (v = t.effects.setTransition(a, h, n.to.y, v))),
          n.from.x !== n.to.x &&
            ((_ = t.effects.setTransition(a, l, n.from.x, _)), (v = t.effects.setTransition(a, l, n.to.x, v)))),
        ("content" === d || "both" === d) &&
          n.from.y !== n.to.y &&
          ((_ = t.effects.setTransition(a, r, n.from.y, _)), (v = t.effects.setTransition(a, r, n.to.y, v))),
        p &&
          ((s = t.effects.getBaseline(p, m)),
          (_.top = (m.outerHeight - _.outerHeight) * s.y + g.top),
          (_.left = (m.outerWidth - _.outerWidth) * s.x + g.left),
          (v.top = (m.outerHeight - v.outerHeight) * s.y + g.top),
          (v.left = (m.outerWidth - v.outerWidth) * s.x + g.left)),
        a.css(_),
        ("content" === d || "both" === d) &&
          ((h = h.concat(["marginTop", "marginBottom"]).concat(r)),
          (l = l.concat(["marginLeft", "marginRight"])),
          a.find("*[width]").each(function () {
            var i = t(this),
              s = t.effects.scaledDimensions(i),
              o = {
                height: s.height * n.from.y,
                width: s.width * n.from.x,
                outerHeight: s.outerHeight * n.from.y,
                outerWidth: s.outerWidth * n.from.x,
              },
              a = {
                height: s.height * n.to.y,
                width: s.width * n.to.x,
                outerHeight: s.height * n.to.y,
                outerWidth: s.width * n.to.x,
              };
            n.from.y !== n.to.y &&
              ((o = t.effects.setTransition(i, h, n.from.y, o)), (a = t.effects.setTransition(i, h, n.to.y, a))),
              n.from.x !== n.to.x &&
                ((o = t.effects.setTransition(i, l, n.from.x, o)), (a = t.effects.setTransition(i, l, n.to.x, a))),
              u && t.effects.saveStyle(i),
              i.css(o),
              i.animate(a, e.duration, e.easing, function () {
                u && t.effects.restoreStyle(i);
              });
          })),
        a.animate(v, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function () {
            var e = a.offset();
            0 === v.opacity && a.css("opacity", _.opacity),
              u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)),
              i();
          },
        });
    }),
    t.effects.define("scale", function (e, i) {
      var s = t(this),
        n = e.mode,
        o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
        a = t.extend(
          !0,
          {
            from: t.effects.scaledDimensions(s),
            to: t.effects.scaledDimensions(s, o, e.direction || "both"),
            origin: e.origin || ["middle", "center"],
          },
          e
        );
      e.fade && ((a.from.opacity = 1), (a.to.opacity = 0)), t.effects.effect.size.call(this, a, i);
    }),
    t.effects.define("puff", "hide", function (e, i) {
      var s = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });
      t.effects.effect.scale.call(this, s, i);
    }),
    t.effects.define("pulsate", "show", function (e, i) {
      var s = t(this),
        n = e.mode,
        o = "show" === n,
        a = "hide" === n,
        r = o || a,
        h = 2 * (e.times || 5) + (r ? 1 : 0),
        l = e.duration / h,
        c = 0,
        u = 1,
        d = s.queue().length;
      for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), (c = 1)); h > u; u++)
        s.animate({ opacity: c }, l, e.easing), (c = 1 - c);
      s.animate({ opacity: c }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1);
    }),
    t.effects.define("shake", function (e, i) {
      var s = 1,
        n = t(this),
        o = e.direction || "left",
        a = e.distance || 20,
        r = e.times || 3,
        h = 2 * r + 1,
        l = Math.round(e.duration / h),
        c = "up" === o || "down" === o ? "top" : "left",
        u = "up" === o || "left" === o,
        d = {},
        p = {},
        f = {},
        g = n.queue().length;
      for (
        t.effects.createPlaceholder(n),
          d[c] = (u ? "-=" : "+=") + a,
          p[c] = (u ? "+=" : "-=") + 2 * a,
          f[c] = (u ? "-=" : "+=") + 2 * a,
          n.animate(d, l, e.easing);
        r > s;
        s++
      )
        n.animate(p, l, e.easing).animate(f, l, e.easing);
      n
        .animate(p, l, e.easing)
        .animate(d, l / 2, e.easing)
        .queue(i),
        t.effects.unshift(n, g, h + 1);
    }),
    t.effects.define("slide", "show", function (e, i) {
      var s,
        n,
        o = t(this),
        a = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
        r = e.mode,
        h = e.direction || "left",
        l = "up" === h || "down" === h ? "top" : "left",
        c = "up" === h || "left" === h,
        u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
        d = {};
      t.effects.createPlaceholder(o),
        (s = o.cssClip()),
        (n = o.position()[l]),
        (d[l] = (c ? -1 : 1) * u + n),
        (d.clip = o.cssClip()),
        (d.clip[a[h][1]] = d.clip[a[h][0]]),
        "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), (d.clip = s), (d[l] = n)),
        o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
    });
  var f;
  t.uiBackCompat !== !1 &&
    (f = t.effects.define("transfer", function (e, i) {
      t(this).transfer(e, i);
    })),
    (t.ui.focusable = function (i, s) {
      var n,
        o,
        a,
        r,
        h,
        l = i.nodeName.toLowerCase();
      return "area" === l
        ? ((n = i.parentNode),
          (o = n.name),
          i.href && o && "map" === n.nodeName.toLowerCase()
            ? ((a = t("img[usemap='#" + o + "']")), a.length > 0 && a.is(":visible"))
            : !1)
        : (/^(input|select|textarea|button|object)$/.test(l)
            ? ((r = !i.disabled), r && ((h = t(i).closest("fieldset")[0]), h && (r = !h.disabled)))
            : (r = "a" === l ? i.href || s : s),
          r && t(i).is(":visible") && e(t(i)));
    }),
    t.extend(t.expr[":"], {
      focusable: function (e) {
        return t.ui.focusable(e, null != t.attr(e, "tabindex"));
      },
    }),
    t.ui.focusable,
    (t.fn.form = function () {
      return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
    }),
    (t.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = t(this);
        setTimeout(function () {
          var i = e.data("ui-form-reset-instances");
          t.each(i, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        if (((this.form = this.element.form()), this.form.length)) {
          var t = this.form.data("ui-form-reset-instances") || [];
          t.length || this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t);
        }
      },
      _unbindFormResetHandler: function () {
        if (this.form.length) {
          var e = this.form.data("ui-form-reset-instances");
          e.splice(t.inArray(this, e), 1),
            e.length
              ? this.form.data("ui-form-reset-instances", e)
              : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
        }
      },
    }),
    "1.7" === t.fn.jquery.substring(0, 3) &&
      (t.each(["Width", "Height"], function (e, i) {
        function s(e, i, s, o) {
          return (
            t.each(n, function () {
              (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }),
            i
          );
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          o = i.toLowerCase(),
          a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight,
          };
        (t.fn["inner" + i] = function (e) {
          return void 0 === e
            ? a["inner" + i].call(this)
            : this.each(function () {
                t(this).css(o, s(this, e) + "px");
              });
        }),
          (t.fn["outer" + i] = function (e, n) {
            return "number" != typeof e
              ? a["outer" + i].call(this, e)
              : this.each(function () {
                  t(this).css(o, s(this, e, !0, n) + "px");
                });
          });
      }),
      (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
      })),
    (t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    (t.ui.escapeSelector = (function () {
      var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
      return function (e) {
        return e.replace(t, "\\$1");
      };
    })()),
    (t.fn.labels = function () {
      var e, i, s, n, o;
      return this[0].labels && this[0].labels.length
        ? this.pushStack(this[0].labels)
        : ((n = this.eq(0).parents("label")),
          (s = this.attr("id")),
          s &&
            ((e = this.eq(0).parents().last()),
            (o = e.add(e.length ? e.siblings() : this.siblings())),
            (i = "label[for='" + t.ui.escapeSelector(s) + "']"),
            (n = n.add(o.find(i).addBack(i)))),
          this.pushStack(n));
    }),
    (t.fn.scrollParent = function (e) {
      var i = this.css("position"),
        s = "absolute" === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents()
          .filter(function () {
            var e = t(this);
            return s && "static" === e.css("position")
              ? !1
              : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
          })
          .eq(0);
      return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
    }),
    t.extend(t.expr[":"], {
      tabbable: function (e) {
        var i = t.attr(e, "tabindex"),
          s = null != i;
        return (!s || i >= 0) && t.ui.focusable(e, s);
      },
    }),
    t.fn.extend({
      uniqueId: (function () {
        var t = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++t);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
        });
      },
    }),
    t.widget("ui.accordion", {
      version: "1.12.1",
      options: {
        active: 0,
        animate: {},
        classes: {
          "ui-accordion-header": "ui-corner-top",
          "ui-accordion-header-collapsed": "ui-corner-all",
          "ui-accordion-content": "ui-corner-bottom",
        },
        collapsible: !1,
        event: "click",
        header: "> li > :first-child, > :not(li):even",
        heightStyle: "auto",
        icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" },
        activate: null,
        beforeActivate: null,
      },
      hideProps: {
        borderTopWidth: "hide",
        borderBottomWidth: "hide",
        paddingTop: "hide",
        paddingBottom: "hide",
        height: "hide",
      },
      showProps: {
        borderTopWidth: "show",
        borderBottomWidth: "show",
        paddingTop: "show",
        paddingBottom: "show",
        height: "show",
      },
      _create: function () {
        var e = this.options;
        (this.prevShow = this.prevHide = t()),
          this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
          this.element.attr("role", "tablist"),
          e.collapsible || (e.active !== !1 && null != e.active) || (e.active = 0),
          this._processPanels(),
          0 > e.active && (e.active += this.headers.length),
          this._refresh();
      },
      _getCreateEventData: function () {
        return { header: this.active, panel: this.active.length ? this.active.next() : t() };
      },
      _createIcons: function () {
        var e,
          i,
          s = this.options.icons;
        s &&
          ((e = t("<span>")),
          this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header),
          e.prependTo(this.headers),
          (i = this.active.children(".ui-accordion-header-icon")),
          this._removeClass(i, s.header)
            ._addClass(i, null, s.activeHeader)
            ._addClass(this.headers, "ui-accordion-icons"));
      },
      _destroyIcons: function () {
        this._removeClass(this.headers, "ui-accordion-icons"),
          this.headers.children(".ui-accordion-header-icon").remove();
      },
      _destroy: function () {
        var t;
        this.element.removeAttr("role"),
          this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
          this._destroyIcons(),
          (t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId()),
          "content" !== this.options.heightStyle && t.css("height", "");
      },
      _setOption: function (t, e) {
        return "active" === t
          ? (this._activate(e), void 0)
          : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)),
            this._super(t, e),
            "collapsible" !== t || e || this.options.active !== !1 || this._activate(0),
            "icons" === t && (this._destroyIcons(), e && this._createIcons()),
            void 0);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr("aria-disabled", t),
          this._toggleClass(null, "ui-state-disabled", !!t),
          this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
      },
      _keydown: function (e) {
        if (!e.altKey && !e.ctrlKey) {
          var i = t.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(e.target),
            o = !1;
          switch (e.keyCode) {
            case i.RIGHT:
            case i.DOWN:
              o = this.headers[(n + 1) % s];
              break;
            case i.LEFT:
            case i.UP:
              o = this.headers[(n - 1 + s) % s];
              break;
            case i.SPACE:
            case i.ENTER:
              this._eventHandler(e);
              break;
            case i.HOME:
              o = this.headers[0];
              break;
            case i.END:
              o = this.headers[s - 1];
          }
          o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault());
        }
      },
      _panelKeyDown: function (e) {
        e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
      },
      refresh: function () {
        var e = this.options;
        this._processPanels(),
          (e.active === !1 && e.collapsible === !0) || !this.headers.length
            ? ((e.active = !1), (this.active = t()))
            : e.active === !1
            ? this._activate(0)
            : this.active.length && !t.contains(this.element[0], this.active[0])
            ? this.headers.length === this.headers.find(".ui-state-disabled").length
              ? ((e.active = !1), (this.active = t()))
              : this._activate(Math.max(0, e.active - 1))
            : (e.active = this.headers.index(this.active)),
          this._destroyIcons(),
          this._refresh();
      },
      _processPanels: function () {
        var t = this.headers,
          e = this.panels;
        (this.headers = this.element.find(this.options.header)),
          this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
          (this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide()),
          this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
          e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
      },
      _refresh: function () {
        var e,
          i = this.options,
          s = i.heightStyle,
          n = this.element.parent();
        (this.active = this._findActive(i.active)),
          this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(
            this.active,
            "ui-accordion-header-collapsed"
          ),
          this._addClass(this.active.next(), "ui-accordion-content-active"),
          this.active.next().show(),
          this.headers
            .attr("role", "tab")
            .each(function () {
              var e = t(this),
                i = e.uniqueId().attr("id"),
                s = e.next(),
                n = s.uniqueId().attr("id");
              e.attr("aria-controls", n), s.attr("aria-labelledby", i);
            })
            .next()
            .attr("role", "tabpanel"),
          this.headers
            .not(this.active)
            .attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 })
            .next()
            .attr({ "aria-hidden": "true" })
            .hide(),
          this.active.length
            ? this.active
                .attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
                .next()
                .attr({ "aria-hidden": "false" })
            : this.headers.eq(0).attr("tabIndex", 0),
          this._createIcons(),
          this._setupEvents(i.event),
          "fill" === s
            ? ((e = n.height()),
              this.element.siblings(":visible").each(function () {
                var i = t(this),
                  s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0));
              }),
              this.headers.each(function () {
                e -= t(this).outerHeight(!0);
              }),
              this.headers
                .next()
                .each(function () {
                  t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
                })
                .css("overflow", "auto"))
            : "auto" === s &&
              ((e = 0),
              this.headers
                .next()
                .each(function () {
                  var i = t(this).is(":visible");
                  i || t(this).show(), (e = Math.max(e, t(this).css("height", "").height())), i || t(this).hide();
                })
                .height(e));
      },
      _activate: function (e) {
        var i = this._findActive(e)[0];
        i !== this.active[0] &&
          ((i = i || this.active[0]), this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }));
      },
      _findActive: function (e) {
        return "number" == typeof e ? this.headers.eq(e) : t();
      },
      _setupEvents: function (e) {
        var i = { keydown: "_keydown" };
        e &&
          t.each(e.split(" "), function (t, e) {
            i[e] = "_eventHandler";
          }),
          this._off(this.headers.add(this.headers.next())),
          this._on(this.headers, i),
          this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
          this._hoverable(this.headers),
          this._focusable(this.headers);
      },
      _eventHandler: function (e) {
        var i,
          s,
          n = this.options,
          o = this.active,
          a = t(e.currentTarget),
          r = a[0] === o[0],
          h = r && n.collapsible,
          l = h ? t() : a.next(),
          c = o.next(),
          u = { oldHeader: o, oldPanel: c, newHeader: h ? t() : a, newPanel: l };
        e.preventDefault(),
          (r && !n.collapsible) ||
            this._trigger("beforeActivate", e, u) === !1 ||
            ((n.active = h ? !1 : this.headers.index(a)),
            (this.active = r ? t() : a),
            this._toggle(u),
            this._removeClass(o, "ui-accordion-header-active", "ui-state-active"),
            n.icons &&
              ((i = o.children(".ui-accordion-header-icon")),
              this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)),
            r ||
              (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(
                a,
                "ui-accordion-header-active",
                "ui-state-active"
              ),
              n.icons &&
                ((s = a.children(".ui-accordion-header-icon")),
                this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)),
              this._addClass(a.next(), "ui-accordion-content-active")));
      },
      _toggle: function (e) {
        var i = e.newPanel,
          s = this.prevShow.length ? this.prevShow : e.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0),
          (this.prevShow = i),
          (this.prevHide = s),
          this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)),
          s.attr({ "aria-hidden": "true" }),
          s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }),
          i.length && s.length
            ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
            : i.length &&
              this.headers
                .filter(function () {
                  return 0 === parseInt(t(this).attr("tabIndex"), 10);
                })
                .attr("tabIndex", -1),
          i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
      },
      _animate: function (t, e, i) {
        var s,
          n,
          o,
          a = this,
          r = 0,
          h = t.css("box-sizing"),
          l = t.length && (!e.length || t.index() < e.index()),
          c = this.options.animate || {},
          u = (l && c.down) || c,
          d = function () {
            a._toggleComplete(i);
          };
        return (
          "number" == typeof u && (o = u),
          "string" == typeof u && (n = u),
          (n = n || u.easing || c.easing),
          (o = o || u.duration || c.duration),
          e.length
            ? t.length
              ? ((s = t.show().outerHeight()),
                e.animate(this.hideProps, {
                  duration: o,
                  easing: n,
                  step: function (t, e) {
                    e.now = Math.round(t);
                  },
                }),
                t.hide().animate(this.showProps, {
                  duration: o,
                  easing: n,
                  complete: d,
                  step: function (t, i) {
                    (i.now = Math.round(t)),
                      "height" !== i.prop
                        ? "content-box" === h && (r += i.now)
                        : "content" !== a.options.heightStyle &&
                          ((i.now = Math.round(s - e.outerHeight() - r)), (r = 0));
                  },
                }),
                void 0)
              : e.animate(this.hideProps, o, n, d)
            : t.animate(this.showProps, o, n, d)
        );
      },
      _toggleComplete: function (t) {
        var e = t.oldPanel,
          i = e.prev();
        this._removeClass(e, "ui-accordion-content-active"),
          this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"),
          e.length && (e.parent()[0].className = e.parent()[0].className),
          this._trigger("activate", null, t);
      },
    }),
    (t.ui.safeActiveElement = function (t) {
      var e;
      try {
        e = t.activeElement;
      } catch (i) {
        e = t.body;
      }
      return e || (e = t.body), e.nodeName || (e = t.body), e;
    }),
    t.widget("ui.menu", {
      version: "1.12.1",
      defaultElement: "<ul>",
      delay: 300,
      options: {
        icons: { submenu: "ui-icon-caret-1-e" },
        items: "> *",
        menus: "ul",
        position: { my: "left top", at: "right top" },
        role: "menu",
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }),
          this._addClass("ui-menu", "ui-widget ui-widget-content"),
          this._on({
            "mousedown .ui-menu-item": function (t) {
              t.preventDefault();
            },
            "click .ui-menu-item": function (e) {
              var i = t(e.target),
                s = t(t.ui.safeActiveElement(this.document[0]));
              !this.mouseHandled &&
                i.not(".ui-state-disabled").length &&
                (this.select(e),
                e.isPropagationStopped() || (this.mouseHandled = !0),
                i.has(".ui-menu").length
                  ? this.expand(e)
                  : !this.element.is(":focus") &&
                    s.closest(".ui-menu").length &&
                    (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
            },
            "mouseenter .ui-menu-item": function (e) {
              if (!this.previousFilter) {
                var i = t(e.target).closest(".ui-menu-item"),
                  s = t(e.currentTarget);
                i[0] === s[0] &&
                  (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"),
                  this.focus(e, s));
              }
            },
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function (t, e) {
              var i = this.active || this.element.find(this.options.items).eq(0);
              e || this.focus(t, i);
            },
            blur: function (e) {
              this._delay(function () {
                var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                i && this.collapseAll(e);
              });
            },
            keydown: "_keydown",
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t), (this.mouseHandled = !1);
            },
          });
      },
      _destroy: function () {
        var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
          i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
        this.element
          .removeAttr("aria-activedescendant")
          .find(".ui-menu")
          .addBack()
          .removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex")
          .removeUniqueId()
          .show(),
          i.children().each(function () {
            var e = t(this);
            e.data("ui-menu-submenu-caret") && e.remove();
          });
      },
      _keydown: function (e) {
        var i,
          s,
          n,
          o,
          a = !0;
        switch (e.keyCode) {
          case t.ui.keyCode.PAGE_UP:
            this.previousPage(e);
            break;
          case t.ui.keyCode.PAGE_DOWN:
            this.nextPage(e);
            break;
          case t.ui.keyCode.HOME:
            this._move("first", "first", e);
            break;
          case t.ui.keyCode.END:
            this._move("last", "last", e);
            break;
          case t.ui.keyCode.UP:
            this.previous(e);
            break;
          case t.ui.keyCode.DOWN:
            this.next(e);
            break;
          case t.ui.keyCode.LEFT:
            this.collapse(e);
            break;
          case t.ui.keyCode.RIGHT:
            this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
            break;
          case t.ui.keyCode.ENTER:
          case t.ui.keyCode.SPACE:
            this._activate(e);
            break;
          case t.ui.keyCode.ESCAPE:
            this.collapse(e);
            break;
          default:
            (a = !1),
              (s = this.previousFilter || ""),
              (o = !1),
              (n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode)),
              clearTimeout(this.filterTimer),
              n === s ? (o = !0) : (n = s + n),
              (i = this._filterMenuItems(n)),
              (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i),
              i.length || ((n = String.fromCharCode(e.keyCode)), (i = this._filterMenuItems(n))),
              i.length
                ? (this.focus(e, i),
                  (this.previousFilter = n),
                  (this.filterTimer = this._delay(function () {
                    delete this.previousFilter;
                  }, 1e3)))
                : delete this.previousFilter;
        }
        a && e.preventDefault();
      },
      _activate: function (t) {
        this.active &&
          !this.active.is(".ui-state-disabled") &&
          (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
      },
      refresh: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this,
          r = this.options.icons.submenu,
          h = this.element.find(this.options.menus);
        this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
          (s = h
            .filter(":not(.ui-menu)")
            .hide()
            .attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" })
            .each(function () {
              var e = t(this),
                i = e.prev(),
                s = t("<span>").data("ui-menu-submenu-caret", !0);
              a._addClass(s, "ui-menu-icon", "ui-icon " + r),
                i.attr("aria-haspopup", "true").prepend(s),
                e.attr("aria-labelledby", i.attr("id"));
            })),
          this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"),
          (e = h.add(this.element)),
          (i = e.find(this.options.items)),
          i.not(".ui-menu-item").each(function () {
            var e = t(this);
            a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
          }),
          (n = i.not(".ui-menu-item, .ui-menu-divider")),
          (o = n.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() })),
          this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"),
          i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
          this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
      },
      _itemRole: function () {
        return { menu: "menuitem", listbox: "option" }[this.options.role];
      },
      _setOption: function (t, e) {
        if ("icons" === t) {
          var i = this.element.find(".ui-menu-icon");
          this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
        }
        this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      focus: function (t, e) {
        var i, s, n;
        this.blur(t, t && "focus" === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (s = this.active.children(".ui-menu-item-wrapper")),
          this._addClass(s, null, "ui-state-active"),
          this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
          (n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper")),
          this._addClass(n, null, "ui-state-active"),
          t && "keydown" === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (i = e.children(".ui-menu")),
          i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger("focus", t, { item: e });
      },
      _scrollIntoView: function (e) {
        var i, s, n, o, a, r;
        this._hasScroll() &&
          ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
          (s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
          (n = e.offset().top - this.activeMenu.offset().top - i - s),
          (o = this.activeMenu.scrollTop()),
          (a = this.activeMenu.height()),
          (r = e.outerHeight()),
          0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", t, { item: this.active }),
            (this.active = null));
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          "true" === t.attr("aria-hidden") &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t);
            }, this.delay));
      },
      _open: function (e) {
        var i = t.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
          e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
            s.length || (s = this.element),
              this._close(s),
              this.blur(e),
              this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"),
              (this.activeMenu = s);
          }, this.delay));
      },
      _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element),
          t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
      },
      _closeOnDocumentClick: function (e) {
        return !t(e.target).closest(".ui-menu").length;
      },
      _isDivider: function (t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text());
      },
      collapse: function (t) {
        var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e));
      },
      expand: function (t) {
        var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e);
          }));
      },
      next: function (t) {
        this._move("next", "first", t);
      },
      previous: function (t) {
        this._move("prev", "last", t);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      _move: function (t, e, i) {
        var s;
        this.active &&
          (s =
            "first" === t || "last" === t
              ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
              : this.active[t + "All"](".ui-menu-item").eq(0)),
          (s && s.length && this.active) || (s = this.activeMenu.find(this.options.items)[e]()),
          this.focus(i, s);
      },
      nextPage: function (e) {
        var i, s, n;
        return this.active
          ? (this.isLastItem() ||
              (this._hasScroll()
                ? ((s = this.active.offset().top),
                  (n = this.element.height()),
                  this.active.nextAll(".ui-menu-item").each(function () {
                    return (i = t(this)), 0 > i.offset().top - s - n;
                  }),
                  this.focus(e, i))
                : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())),
            void 0)
          : (this.next(e), void 0);
      },
      previousPage: function (e) {
        var i, s, n;
        return this.active
          ? (this.isFirstItem() ||
              (this._hasScroll()
                ? ((s = this.active.offset().top),
                  (n = this.element.height()),
                  this.active.prevAll(".ui-menu-item").each(function () {
                    return (i = t(this)), i.offset().top - s + n > 0;
                  }),
                  this.focus(e, i))
                : this.focus(e, this.activeMenu.find(this.options.items).first())),
            void 0)
          : (this.next(e), void 0);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight");
      },
      select: function (e) {
        this.active = this.active || t(e.target).closest(".ui-menu-item");
        var i = { item: this.active };
        this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
      },
      _filterMenuItems: function (e) {
        var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          s = RegExp("^" + i, "i");
        return this.activeMenu
          .find(this.options.items)
          .filter(".ui-menu-item")
          .filter(function () {
            return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
          });
      },
    }),
    t.widget("ui.autocomplete", {
      version: "1.12.1",
      defaultElement: "<input>",
      options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: { my: "left top", at: "left bottom", collision: "none" },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null,
      },
      requestIndex: 0,
      pending: 0,
      _create: function () {
        var e,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          o = "textarea" === n,
          a = "input" === n;
        (this.isMultiLine = o || (!a && this._isContentEditable(this.element))),
          (this.valueMethod = this.element[o || a ? "val" : "text"]),
          (this.isNewMenu = !0),
          this._addClass("ui-autocomplete-input"),
          this.element.attr("autocomplete", "off"),
          this._on(this.element, {
            keydown: function (n) {
              if (this.element.prop("readOnly")) return (e = !0), (s = !0), (i = !0), void 0;
              (e = !1), (s = !1), (i = !1);
              var o = t.ui.keyCode;
              switch (n.keyCode) {
                case o.PAGE_UP:
                  (e = !0), this._move("previousPage", n);
                  break;
                case o.PAGE_DOWN:
                  (e = !0), this._move("nextPage", n);
                  break;
                case o.UP:
                  (e = !0), this._keyEvent("previous", n);
                  break;
                case o.DOWN:
                  (e = !0), this._keyEvent("next", n);
                  break;
                case o.ENTER:
                  this.menu.active && ((e = !0), n.preventDefault(), this.menu.select(n));
                  break;
                case o.TAB:
                  this.menu.active && this.menu.select(n);
                  break;
                case o.ESCAPE:
                  this.menu.element.is(":visible") &&
                    (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                  break;
                default:
                  (i = !0), this._searchTimeout(n);
              }
            },
            keypress: function (s) {
              if (e)
                return (e = !1), (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
              if (!i) {
                var n = t.ui.keyCode;
                switch (s.keyCode) {
                  case n.PAGE_UP:
                    this._move("previousPage", s);
                    break;
                  case n.PAGE_DOWN:
                    this._move("nextPage", s);
                    break;
                  case n.UP:
                    this._keyEvent("previous", s);
                    break;
                  case n.DOWN:
                    this._keyEvent("next", s);
                }
              }
            },
            input: function (t) {
              return s ? ((s = !1), t.preventDefault(), void 0) : (this._searchTimeout(t), void 0);
            },
            focus: function () {
              (this.selectedItem = null), (this.previous = this._value());
            },
            blur: function (t) {
              return this.cancelBlur
                ? (delete this.cancelBlur, void 0)
                : (clearTimeout(this.searching), this.close(t), this._change(t), void 0);
            },
          }),
          this._initSource(),
          (this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance")),
          this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
          this._on(this.menu.element, {
            mousedown: function (e) {
              e.preventDefault(),
                (this.cancelBlur = !0),
                this._delay(function () {
                  delete this.cancelBlur,
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
                });
            },
            menufocus: function (e, i) {
              var s, n;
              return this.isNewMenu && ((this.isNewMenu = !1), e.originalEvent && /^mouse/.test(e.originalEvent.type))
                ? (this.menu.blur(),
                  this.document.one("mousemove", function () {
                    t(e.target).trigger(e.originalEvent);
                  }),
                  void 0)
                : ((n = i.item.data("ui-autocomplete-item")),
                  !1 !== this._trigger("focus", e, { item: n }) &&
                    e.originalEvent &&
                    /^key/.test(e.originalEvent.type) &&
                    this._value(n.value),
                  (s = i.item.attr("aria-label") || n.value),
                  s &&
                    t.trim(s).length &&
                    (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)),
                  void 0);
            },
            menuselect: function (e, i) {
              var s = i.item.data("ui-autocomplete-item"),
                n = this.previous;
              this.element[0] !== t.ui.safeActiveElement(this.document[0]) &&
                (this.element.trigger("focus"),
                (this.previous = n),
                this._delay(function () {
                  (this.previous = n), (this.selectedItem = s);
                })),
                !1 !== this._trigger("select", e, { item: s }) && this._value(s.value),
                (this.term = this._value()),
                this.close(e),
                (this.selectedItem = s);
            },
          }),
          (this.liveRegion = t("<div>", {
            role: "status",
            "aria-live": "assertive",
            "aria-relevant": "additions",
          }).appendTo(this.document[0].body)),
          this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr("autocomplete");
            },
          });
      },
      _destroy: function () {
        clearTimeout(this.searching),
          this.element.removeAttr("autocomplete"),
          this.menu.element.remove(),
          this.liveRegion.remove();
      },
      _setOption: function (t, e) {
        this._super(t, e),
          "source" === t && this._initSource(),
          "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
          "disabled" === t && e && this.xhr && this.xhr.abort();
      },
      _isEventTargetInWidget: function (e) {
        var i = this.menu.element[0];
        return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
      },
      _closeOnClickOutside: function (t) {
        this._isEventTargetInWidget(t) || this.close();
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return (
          e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
          (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
          e.length || (e = this.document[0].body),
          e
        );
      },
      _initSource: function () {
        var e,
          i,
          s = this;
        t.isArray(this.options.source)
          ? ((e = this.options.source),
            (this.source = function (i, s) {
              s(t.ui.autocomplete.filter(e, i.term));
            }))
          : "string" == typeof this.options.source
          ? ((i = this.options.source),
            (this.source = function (e, n) {
              s.xhr && s.xhr.abort(),
                (s.xhr = t.ajax({
                  url: i,
                  data: e,
                  dataType: "json",
                  success: function (t) {
                    n(t);
                  },
                  error: function () {
                    n([]);
                  },
                }));
            }))
          : (this.source = this.options.source);
      },
      _searchTimeout: function (t) {
        clearTimeout(this.searching),
          (this.searching = this._delay(function () {
            var e = this.term === this._value(),
              i = this.menu.element.is(":visible"),
              s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
            (!e || (e && !i && !s)) && ((this.selectedItem = null), this.search(null, t));
          }, this.options.delay));
      },
      search: function (t, e) {
        return (
          (t = null != t ? t : this._value()),
          (this.term = this._value()),
          t.length < this.options.minLength
            ? this.close(e)
            : this._trigger("search", e) !== !1
            ? this._search(t)
            : void 0
        );
      },
      _search: function (t) {
        this.pending++,
          this._addClass("ui-autocomplete-loading"),
          (this.cancelSearch = !1),
          this.source({ term: t }, this._response());
      },
      _response: function () {
        var e = ++this.requestIndex;
        return t.proxy(function (t) {
          e === this.requestIndex && this.__response(t),
            this.pending--,
            this.pending || this._removeClass("ui-autocomplete-loading");
        }, this);
      },
      __response: function (t) {
        t && (t = this._normalize(t)),
          this._trigger("response", null, { content: t }),
          !this.options.disabled && t && t.length && !this.cancelSearch
            ? (this._suggest(t), this._trigger("open"))
            : this._close();
      },
      close: function (t) {
        (this.cancelSearch = !0), this._close(t);
      },
      _close: function (t) {
        this._off(this.document, "mousedown"),
          this.menu.element.is(":visible") &&
            (this.menu.element.hide(), this.menu.blur(), (this.isNewMenu = !0), this._trigger("close", t));
      },
      _change: function (t) {
        this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem });
      },
      _normalize: function (e) {
        return e.length && e[0].label && e[0].value
          ? e
          : t.map(e, function (e) {
              return "string" == typeof e
                ? { label: e, value: e }
                : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label });
            });
      },
      _suggest: function (e) {
        var i = this.menu.element.empty();
        this._renderMenu(i, e),
          (this.isNewMenu = !0),
          this.menu.refresh(),
          i.show(),
          this._resizeMenu(),
          i.position(t.extend({ of: this.element }, this.options.position)),
          this.options.autoFocus && this.menu.next(),
          this._on(this.document, { mousedown: "_closeOnClickOutside" });
      },
      _resizeMenu: function () {
        var t = this.menu.element;
        t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
      },
      _renderMenu: function (e, i) {
        var s = this;
        t.each(i, function (t, i) {
          s._renderItemData(e, i);
        });
      },
      _renderItemData: function (t, e) {
        return this._renderItem(t, e).data("ui-autocomplete-item", e);
      },
      _renderItem: function (e, i) {
        return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
      },
      _move: function (t, e) {
        return this.menu.element.is(":visible")
          ? (this.menu.isFirstItem() && /^previous/.test(t)) || (this.menu.isLastItem() && /^next/.test(t))
            ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0)
            : (this.menu[t](e), void 0)
          : (this.search(null, e), void 0);
      },
      widget: function () {
        return this.menu.element;
      },
      _value: function () {
        return this.valueMethod.apply(this.element, arguments);
      },
      _keyEvent: function (t, e) {
        (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
      },
      _isContentEditable: function (t) {
        if (!t.length) return !1;
        var e = t.prop("contentEditable");
        return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
      },
    }),
    t.extend(t.ui.autocomplete, {
      escapeRegex: function (t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      },
      filter: function (e, i) {
        var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
        return t.grep(e, function (t) {
          return s.test(t.label || t.value || t);
        });
      },
    }),
    t.widget("ui.autocomplete", t.ui.autocomplete, {
      options: {
        messages: {
          noResults: "No search results.",
          results: function (t) {
            return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
          },
        },
      },
      __response: function (e) {
        var i;
        this._superApply(arguments),
          this.options.disabled ||
            this.cancelSearch ||
            ((i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults),
            this.liveRegion.children().hide(),
            t("<div>").text(i).appendTo(this.liveRegion));
      },
    }),
    t.ui.autocomplete;
  var g = /ui-corner-([a-z]){2,6}/g;
  t.widget("ui.controlgroup", {
    version: "1.12.1",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button: "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input",
      },
    },
    _create: function () {
      this._enhance();
    },
    _enhance: function () {
      this.element.attr("role", "toolbar"), this.refresh();
    },
    _destroy: function () {
      this._callChildMethod("destroy"),
        this.childWidgets.removeData("ui-controlgroup-data"),
        this.element.removeAttr("role"),
        this.options.items.controlgroupLabel &&
          this.element
            .find(this.options.items.controlgroupLabel)
            .find(".ui-controlgroup-label-contents")
            .contents()
            .unwrap();
    },
    _initWidgets: function () {
      var e = this,
        i = [];
      t.each(this.options.items, function (s, n) {
        var o,
          a = {};
        return n
          ? "controlgroupLabel" === s
            ? ((o = e.element.find(n)),
              o.each(function () {
                var e = t(this);
                e.children(".ui-controlgroup-label-contents").length ||
                  e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
              }),
              e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"),
              (i = i.concat(o.get())),
              void 0)
            : (t.fn[s] &&
                ((a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : { classes: {} }),
                e.element.find(n).each(function () {
                  var n = t(this),
                    o = n[s]("instance"),
                    r = t.widget.extend({}, a);
                  if ("button" !== s || !n.parent(".ui-spinner").length) {
                    o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
                    var h = n[s]("widget");
                    t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0]);
                  }
                })),
              void 0)
          : void 0;
      }),
        (this.childWidgets = t(t.unique(i))),
        this._addClass(this.childWidgets, "ui-controlgroup-item");
    },
    _callChildMethod: function (e) {
      this.childWidgets.each(function () {
        var i = t(this),
          s = i.data("ui-controlgroup-data");
        s && s[e] && s[e]();
      });
    },
    _updateCornerClass: function (t, e) {
      var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
        s = this._buildSimpleOptions(e, "label").classes.label;
      this._removeClass(t, null, i), this._addClass(t, null, s);
    },
    _buildSimpleOptions: function (t, e) {
      var i = "vertical" === this.options.direction,
        s = { classes: {} };
      return (
        (s.classes[e] = {
          middle: "",
          first: "ui-corner-" + (i ? "top" : "left"),
          last: "ui-corner-" + (i ? "bottom" : "right"),
          only: "ui-corner-all",
        }[t]),
        s
      );
    },
    _spinnerOptions: function (t) {
      var e = this._buildSimpleOptions(t, "ui-spinner");
      return (e.classes["ui-spinner-up"] = ""), (e.classes["ui-spinner-down"] = ""), e;
    },
    _buttonOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-button");
    },
    _checkboxradioOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label");
    },
    _selectmenuOptions: function (t) {
      var e = "vertical" === this.options.direction;
      return {
        width: e ? "auto" : !1,
        classes: {
          middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left"),
          },
          last: {
            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right"),
          },
          only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" },
        }[t],
      };
    },
    _resolveClassesValues: function (e, i) {
      var s = {};
      return (
        t.each(e, function (n) {
          var o = i.options.classes[n] || "";
          (o = t.trim(o.replace(g, ""))), (s[n] = (o + " " + e[n]).replace(/\s+/g, " "));
        }),
        s
      );
    },
    _setOption: function (t, e) {
      return (
        "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction),
        this._super(t, e),
        "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0)
      );
    },
    refresh: function () {
      var e,
        i = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
        "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
        this._initWidgets(),
        (e = this.childWidgets),
        this.options.onlyVisible && (e = e.filter(":visible")),
        e.length &&
          (t.each(["first", "last"], function (t, s) {
            var n = e[s]().data("ui-controlgroup-data");
            if (n && i["_" + n.widgetName + "Options"]) {
              var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
              (o.classes = i._resolveClassesValues(o.classes, n)), n.element[n.widgetName](o);
            } else i._updateCornerClass(e[s](), s);
          }),
          this._callChildMethod("refresh"));
    },
  }),
    t.widget("ui.checkboxradio", [
      t.ui.formResetMixin,
      {
        version: "1.12.1",
        options: {
          disabled: null,
          label: null,
          icon: !0,
          classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" },
        },
        _getCreateOptions: function () {
          var e,
            i,
            s = this,
            n = this._super() || {};
          return (
            this._readType(),
            (i = this.element.labels()),
            (this.label = t(i[i.length - 1])),
            this.label.length || t.error("No label found for checkboxradio widget"),
            (this.originalLabel = ""),
            this.label
              .contents()
              .not(this.element[0])
              .each(function () {
                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
              }),
            this.originalLabel && (n.label = this.originalLabel),
            (e = this.element[0].disabled),
            null != e && (n.disabled = e),
            n
          );
        },
        _create: function () {
          var t = this.element[0].checked;
          this._bindFormResetHandler(),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
            this._setOption("disabled", this.options.disabled),
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
            "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
            this.options.label && this.options.label !== this.originalLabel
              ? this._updateLabel()
              : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            t &&
              (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"),
              this.icon && this._addClass(this.icon, null, "ui-state-hover")),
            this._on({
              change: "_toggleClasses",
              focus: function () {
                this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
              },
              blur: function () {
                this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
              },
            });
        },
        _readType: function () {
          var e = this.element[0].nodeName.toLowerCase();
          (this.type = this.element[0].type),
            ("input" === e && /radio|checkbox/.test(this.type)) ||
              t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type);
        },
        _enhance: function () {
          this._updateIcon(this.element[0].checked);
        },
        widget: function () {
          return this.label;
        },
        _getRadioGroup: function () {
          var e,
            i = this.element[0].name,
            s = "input[name='" + t.ui.escapeSelector(i) + "']";
          return i
            ? ((e = this.form.length
                ? t(this.form[0].elements).filter(s)
                : t(s).filter(function () {
                    return 0 === t(this).form().length;
                  })),
              e.not(this.element))
            : t([]);
        },
        _toggleClasses: function () {
          var e = this.element[0].checked;
          this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e),
            this.options.icon &&
              "checkbox" === this.type &&
              this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(
                this.icon,
                null,
                "ui-icon-blank",
                !e
              ),
            "radio" === this.type &&
              this._getRadioGroup().each(function () {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active");
              });
        },
        _destroy: function () {
          this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function (t, e) {
          return "label" !== t || e
            ? (this._super(t, e),
              "disabled" === t
                ? (this._toggleClass(this.label, null, "ui-state-disabled", e), (this.element[0].disabled = e), void 0)
                : (this.refresh(), void 0))
            : void 0;
        },
        _updateIcon: function (e) {
          var i = "ui-icon ui-icon-background ";
          this.options.icon
            ? (this.icon ||
                ((this.icon = t("<span>")),
                (this.iconSpace = t("<span> </span>")),
                this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
              "checkbox" === this.type
                ? ((i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank"),
                  this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check"))
                : (i += "ui-icon-blank"),
              this._addClass(this.icon, "ui-checkboxradio-icon", i),
              e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
              this.icon.prependTo(this.label).after(this.iconSpace))
            : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function () {
          var t = this.label.contents().not(this.element[0]);
          this.icon && (t = t.not(this.icon[0])),
            this.iconSpace && (t = t.not(this.iconSpace[0])),
            t.remove(),
            this.label.append(this.options.label);
        },
        refresh: function () {
          var t = this.element[0].checked,
            e = this.element[0].disabled;
          this._updateIcon(t),
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
            null !== this.options.label && this._updateLabel(),
            e !== this.options.disabled && this._setOptions({ disabled: e });
        },
      },
    ]),
    t.ui.checkboxradio,
    t.widget("ui.button", {
      version: "1.12.1",
      defaultElement: "<button>",
      options: {
        classes: { "ui-button": "ui-corner-all" },
        disabled: null,
        icon: null,
        iconPosition: "beginning",
        label: null,
        showLabel: !0,
      },
      _getCreateOptions: function () {
        var t,
          e = this._super() || {};
        return (
          (this.isInput = this.element.is("input")),
          (t = this.element[0].disabled),
          null != t && (e.disabled = t),
          (this.originalLabel = this.isInput ? this.element.val() : this.element.html()),
          this.originalLabel && (e.label = this.originalLabel),
          e
        );
      },
      _create: function () {
        !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
          null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
          (this.hasTitle = !!this.element.attr("title")),
          this.options.label &&
            this.options.label !== this.originalLabel &&
            (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
          this._addClass("ui-button", "ui-widget"),
          this._setOption("disabled", this.options.disabled),
          this._enhance(),
          this.element.is("a") &&
            this._on({
              keyup: function (e) {
                e.keyCode === t.ui.keyCode.SPACE &&
                  (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
              },
            });
      },
      _enhance: function () {
        this.element.is("button") || this.element.attr("role", "button"),
          this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
      },
      _updateTooltip: function () {
        (this.title = this.element.attr("title")),
          this.options.showLabel || this.title || this.element.attr("title", this.options.label);
      },
      _updateIcon: function (e, i) {
        var s = "iconPosition" !== e,
          n = s ? this.options.iconPosition : i,
          o = "top" === n || "bottom" === n;
        this.icon
          ? s && this._removeClass(this.icon, null, this.options.icon)
          : ((this.icon = t("<span>")),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only")),
          s && this._addClass(this.icon, null, i),
          this._attachIcon(n),
          o
            ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove())
            : (this.iconSpace ||
                ((this.iconSpace = t("<span> </span>")), this._addClass(this.iconSpace, "ui-button-icon-space")),
              this._removeClass(this.icon, null, "ui-wiget-icon-block"),
              this._attachIconSpace(n));
      },
      _destroy: function () {
        this.element.removeAttr("role"),
          this.icon && this.icon.remove(),
          this.iconSpace && this.iconSpace.remove(),
          this.hasTitle || this.element.removeAttr("title");
      },
      _attachIconSpace: function (t) {
        this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
      },
      _attachIcon: function (t) {
        this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
      },
      _setOptions: function (t) {
        var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon;
        e || i || (t.showLabel = !0), this._super(t);
      },
      _setOption: function (t, e) {
        "icon" === t &&
          (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
          "iconPosition" === t && this._updateIcon(t, e),
          "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()),
          "label" === t &&
            (this.isInput
              ? this.element.val(e)
              : (this.element.html(e),
                this.icon &&
                  (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))),
          this._super(t, e),
          "disabled" === t &&
            (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e), e && this.element.blur());
      },
      refresh: function () {
        var t = this.element.is("input, button")
          ? this.element[0].disabled
          : this.element.hasClass("ui-button-disabled");
        t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip();
      },
    }),
    t.uiBackCompat !== !1 &&
      (t.widget("ui.button", t.ui.button, {
        options: { text: !0, icons: { primary: null, secondary: null } },
        _create: function () {
          this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
            this.options.icon || (!this.options.icons.primary && !this.options.icons.secondary)
              ? this.options.icon && (this.options.icons.primary = this.options.icon)
              : this.options.icons.primary
              ? (this.options.icon = this.options.icons.primary)
              : ((this.options.icon = this.options.icons.secondary), (this.options.iconPosition = "end")),
            this._super();
        },
        _setOption: function (t, e) {
          return "text" === t
            ? (this._super("showLabel", e), void 0)
            : ("showLabel" === t && (this.options.text = e),
              "icon" === t && (this.options.icons.primary = e),
              "icons" === t &&
                (e.primary
                  ? (this._super("icon", e.primary), this._super("iconPosition", "beginning"))
                  : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))),
              this._superApply(arguments),
              void 0);
        },
      }),
      (t.fn.button = (function (e) {
        return function () {
          return !this.length ||
            (this.length && "INPUT" !== this[0].tagName) ||
            (this.length &&
              "INPUT" === this[0].tagName &&
              "checkbox" !== this.attr("type") &&
              "radio" !== this.attr("type"))
            ? e.apply(this, arguments)
            : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"),
              0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments));
        };
      })(t.fn.button)),
      (t.fn.buttonset = function () {
        return (
          t.ui.controlgroup || t.error("Controlgroup widget missing"),
          "option" === arguments[0] && "items" === arguments[1] && arguments[2]
            ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]])
            : "option" === arguments[0] && "items" === arguments[1]
            ? this.controlgroup.apply(this, [arguments[0], "items.button"])
            : ("object" == typeof arguments[0] &&
                arguments[0].items &&
                (arguments[0].items = { button: arguments[0].items }),
              this.controlgroup.apply(this, arguments))
        );
      })),
    t.ui.button,
    t.extend(t.ui, { datepicker: { version: "1.12.1" } });
  var m;
  t.extend(s.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (t) {
      return a(this._defaults, t || {}), this;
    },
    _attachDatepicker: function (e, i) {
      var s, n, o;
      (s = e.nodeName.toLowerCase()),
        (n = "div" === s || "span" === s),
        e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
        (o = this._newInst(t(e), n)),
        (o.settings = t.extend({}, i || {})),
        "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
    },
    _newInst: function (e, i) {
      var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: s,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i
          ? n(
              t(
                "<div class='" +
                  this._inlineClass +
                  " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
              )
            )
          : this.dpDiv,
      };
    },
    _connectDatepicker: function (e, i) {
      var s = t(e);
      (i.append = t([])),
        (i.trigger = t([])),
        s.hasClass(this.markerClassName) ||
          (this._attachments(s, i),
          s
            .addClass(this.markerClassName)
            .on("keydown", this._doKeyDown)
            .on("keypress", this._doKeyPress)
            .on("keyup", this._doKeyUp),
          this._autoSize(i),
          t.data(e, "datepicker", i),
          i.settings.disabled && this._disableDatepicker(e));
    },
    _attachments: function (e, i) {
      var s,
        n,
        o,
        a = this._get(i, "appendText"),
        r = this._get(i, "isRTL");
      i.append && i.append.remove(),
        a &&
          ((i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>")),
          e[r ? "before" : "after"](i.append)),
        e.off("focus", this._showDatepicker),
        i.trigger && i.trigger.remove(),
        (s = this._get(i, "showOn")),
        ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker),
        ("button" === s || "both" === s) &&
          ((n = this._get(i, "buttonText")),
          (o = this._get(i, "buttonImage")),
          (i.trigger = t(
            this._get(i, "buttonImageOnly")
              ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: n, title: n })
              : t("<button type='button'></button>")
                  .addClass(this._triggerClass)
                  .html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)
          )),
          e[r ? "before" : "after"](i.trigger),
          i.trigger.on("click", function () {
            return (
              t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0]
                ? t.datepicker._hideDatepicker()
                : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0]
                ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0]))
                : t.datepicker._showDatepicker(e[0]),
              !1
            );
          }));
    },
    _autoSize: function (t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e,
          i,
          s,
          n,
          o = new Date(2009, 11, 20),
          a = this._get(t, "dateFormat");
        a.match(/[DM]/) &&
          ((e = function (t) {
            for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && ((i = t[n].length), (s = n));
            return s;
          }),
          o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))),
          o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
          t.input.attr("size", this._formatDate(t, o).length);
      }
    },
    _inlineDatepicker: function (e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) ||
        (s.addClass(this.markerClassName).append(i.dpDiv),
        t.data(e, "datepicker", i),
        this._setDate(i, this._getDefaultDate(i), !0),
        this._updateDatepicker(i),
        this._updateAlternate(i),
        i.settings.disabled && this._disableDatepicker(e),
        i.dpDiv.css("display", "block"));
    },
    _dialogDatepicker: function (e, i, s, n, o) {
      var r,
        h,
        l,
        c,
        u,
        d = this._dialogInst;
      return (
        d ||
          ((this.uuid += 1),
          (r = "dp" + this.uuid),
          (this._dialogInput = t(
            "<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"
          )),
          this._dialogInput.on("keydown", this._doKeyDown),
          t("body").append(this._dialogInput),
          (d = this._dialogInst = this._newInst(this._dialogInput, !1)),
          (d.settings = {}),
          t.data(this._dialogInput[0], "datepicker", d)),
        a(d.settings, n || {}),
        (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
        this._dialogInput.val(i),
        (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
        this._pos ||
          ((h = document.documentElement.clientWidth),
          (l = document.documentElement.clientHeight),
          (c = document.documentElement.scrollLeft || document.body.scrollLeft),
          (u = document.documentElement.scrollTop || document.body.scrollTop),
          (this._pos = [h / 2 - 100 + c, l / 2 - 150 + u])),
        this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
        (d.settings.onSelect = s),
        (this._inDialog = !0),
        this.dpDiv.addClass(this._dialogClass),
        this._showDatepicker(this._dialogInput[0]),
        t.blockUI && t.blockUI(this.dpDiv),
        t.data(this._dialogInput[0], "datepicker", d),
        this
      );
    },
    _destroyDatepicker: function (e) {
      var i,
        s = t(e),
        n = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        t.removeData(e, "datepicker"),
        "input" === i
          ? (n.append.remove(),
            n.trigger.remove(),
            s
              .removeClass(this.markerClassName)
              .off("focus", this._showDatepicker)
              .off("keydown", this._doKeyDown)
              .off("keypress", this._doKeyPress)
              .off("keyup", this._doKeyUp))
          : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(),
        m === n && (m = null));
    },
    _enableDatepicker: function (e) {
      var i,
        s,
        n = t(e),
        o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        "input" === i
          ? ((e.disabled = !1),
            o.trigger
              .filter("button")
              .each(function () {
                this.disabled = !1;
              })
              .end()
              .filter("img")
              .css({ opacity: "1.0", cursor: "" }))
          : ("div" === i || "span" === i) &&
            ((s = n.children("." + this._inlineClass)),
            s.children().removeClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
        (this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t;
        })));
    },
    _disableDatepicker: function (e) {
      var i,
        s,
        n = t(e),
        o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        "input" === i
          ? ((e.disabled = !0),
            o.trigger
              .filter("button")
              .each(function () {
                this.disabled = !0;
              })
              .end()
              .filter("img")
              .css({ opacity: "0.5", cursor: "default" }))
          : ("div" === i || "span" === i) &&
            ((s = n.children("." + this._inlineClass)),
            s.children().addClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
        (this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t;
        })),
        (this._disabledInputs[this._disabledInputs.length] = e));
    },
    _isDisabledDatepicker: function (t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
      return !1;
    },
    _getInst: function (e) {
      try {
        return t.data(e, "datepicker");
      } catch (i) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function (e, i, s) {
      var n,
        o,
        r,
        h,
        l = this._getInst(e);
      return 2 === arguments.length && "string" == typeof i
        ? "defaults" === i
          ? t.extend({}, t.datepicker._defaults)
          : l
          ? "all" === i
            ? t.extend({}, l.settings)
            : this._get(l, i)
          : null
        : ((n = i || {}),
          "string" == typeof i && ((n = {}), (n[i] = s)),
          l &&
            (this._curInst === l && this._hideDatepicker(),
            (o = this._getDateDatepicker(e, !0)),
            (r = this._getMinMaxDate(l, "min")),
            (h = this._getMinMaxDate(l, "max")),
            a(l.settings, n),
            null !== r &&
              void 0 !== n.dateFormat &&
              void 0 === n.minDate &&
              (l.settings.minDate = this._formatDate(l, r)),
            null !== h &&
              void 0 !== n.dateFormat &&
              void 0 === n.maxDate &&
              (l.settings.maxDate = this._formatDate(l, h)),
            "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
            this._attachments(t(e), l),
            this._autoSize(l),
            this._setDate(l, o),
            this._updateAlternate(l),
            this._updateDatepicker(l)),
          void 0);
    },
    _changeDatepicker: function (t, e, i) {
      this._optionDatepicker(t, e, i);
    },
    _refreshDatepicker: function (t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e);
    },
    _setDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
    },
    _getDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
    },
    _doKeyDown: function (e) {
      var i,
        s,
        n,
        o = t.datepicker._getInst(e.target),
        a = !0,
        r = o.dpDiv.is(".ui-datepicker-rtl");
      if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
        switch (e.keyCode) {
          case 9:
            t.datepicker._hideDatepicker(), (a = !1);
            break;
          case 13:
            return (
              (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv)),
              n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]),
              (i = t.datepicker._get(o, "onSelect")),
              i
                ? ((s = t.datepicker._formatDate(o)), i.apply(o.input ? o.input[0] : null, [s, o]))
                : t.datepicker._hideDatepicker(),
              !1
            );
          case 27:
            t.datepicker._hideDatepicker();
            break;
          case 33:
            t.datepicker._adjustDate(
              e.target,
              e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"),
              "M"
            );
            break;
          case 34:
            t.datepicker._adjustDate(
              e.target,
              e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"),
              "M"
            );
            break;
          case 35:
            (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), (a = e.ctrlKey || e.metaKey);
            break;
          case 36:
            (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), (a = e.ctrlKey || e.metaKey);
            break;
          case 37:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
              (a = e.ctrlKey || e.metaKey),
              e.originalEvent.altKey &&
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"),
                  "M"
                );
            break;
          case 38:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), (a = e.ctrlKey || e.metaKey);
            break;
          case 39:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
              (a = e.ctrlKey || e.metaKey),
              e.originalEvent.altKey &&
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"),
                  "M"
                );
            break;
          case 40:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), (a = e.ctrlKey || e.metaKey);
            break;
          default:
            a = !1;
        }
      else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : (a = !1);
      a && (e.preventDefault(), e.stopPropagation());
    },
    _doKeyPress: function (e) {
      var i,
        s,
        n = t.datepicker._getInst(e.target);
      return t.datepicker._get(n, "constrainInput")
        ? ((i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat"))),
          (s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode)),
          e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1)
        : void 0;
    },
    _doKeyUp: function (e) {
      var i,
        s = t.datepicker._getInst(e.target);
      if (s.input.val() !== s.lastVal)
        try {
          (i = t.datepicker.parseDate(
            t.datepicker._get(s, "dateFormat"),
            s.input ? s.input.val() : null,
            t.datepicker._getFormatConfig(s)
          )),
            i &&
              (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
        } catch (n) {}
      return !0;
    },
    _showDatepicker: function (e) {
      if (
        ((e = e.target || e),
        "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]),
        !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e)
      ) {
        var s, n, o, r, h, l, c;
        (s = t.datepicker._getInst(e)),
          t.datepicker._curInst &&
            t.datepicker._curInst !== s &&
            (t.datepicker._curInst.dpDiv.stop(!0, !0),
            s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
          (n = t.datepicker._get(s, "beforeShow")),
          (o = n ? n.apply(e, [e, s]) : {}),
          o !== !1 &&
            (a(s.settings, o),
            (s.lastVal = null),
            (t.datepicker._lastInput = e),
            t.datepicker._setDateFromField(s),
            t.datepicker._inDialog && (e.value = ""),
            t.datepicker._pos ||
              ((t.datepicker._pos = t.datepicker._findPos(e)), (t.datepicker._pos[1] += e.offsetHeight)),
            (r = !1),
            t(e)
              .parents()
              .each(function () {
                return (r |= "fixed" === t(this).css("position")), !r;
              }),
            (h = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
            (t.datepicker._pos = null),
            s.dpDiv.empty(),
            s.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }),
            t.datepicker._updateDatepicker(s),
            (h = t.datepicker._checkOffset(s, h, r)),
            s.dpDiv.css({
              position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
              display: "none",
              left: h.left + "px",
              top: h.top + "px",
            }),
            s.inline ||
              ((l = t.datepicker._get(s, "showAnim")),
              (c = t.datepicker._get(s, "duration")),
              s.dpDiv.css("z-index", i(t(e)) + 1),
              (t.datepicker._datepickerShowing = !0),
              t.effects && t.effects.effect[l]
                ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c)
                : s.dpDiv[l || "show"](l ? c : null),
              t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"),
              (t.datepicker._curInst = s)));
      }
    },
    _updateDatepicker: function (e) {
      (this.maxRows = 4), (m = e), e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
      var i,
        s = this._getNumberOfMonths(e),
        n = s[1],
        a = 17,
        r = e.dpDiv.find("." + this._dayOverClass + " a");
      r.length > 0 && o.apply(r.get(0)),
        e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
        n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"),
        e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
        e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
        e === t.datepicker._curInst &&
          t.datepicker._datepickerShowing &&
          t.datepicker._shouldFocusInput(e) &&
          e.input.trigger("focus"),
        e.yearshtml &&
          ((i = e.yearshtml),
          setTimeout(function () {
            i === e.yearshtml &&
              e.yearshtml &&
              e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
              (i = e.yearshtml = null);
          }, 0));
    },
    _shouldFocusInput: function (t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
    },
    _checkOffset: function (e, i, s) {
      var n = e.dpDiv.outerWidth(),
        o = e.dpDiv.outerHeight(),
        a = e.input ? e.input.outerWidth() : 0,
        r = e.input ? e.input.outerHeight() : 0,
        h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
        l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return (
        (i.left -= this._get(e, "isRTL") ? n - a : 0),
        (i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0),
        (i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0),
        (i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0)),
        (i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0)),
        i
      );
    },
    _findPos: function (e) {
      for (
        var i, s = this._getInst(e), n = this._get(s, "isRTL");
        e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));

      )
        e = e[n ? "previousSibling" : "nextSibling"];
      return (i = t(e).offset()), [i.left, i.top];
    },
    _hideDatepicker: function (e) {
      var i,
        s,
        n,
        o,
        a = this._curInst;
      !a ||
        (e && a !== t.data(e, "datepicker")) ||
        (this._datepickerShowing &&
          ((i = this._get(a, "showAnim")),
          (s = this._get(a, "duration")),
          (n = function () {
            t.datepicker._tidyDialog(a);
          }),
          t.effects && (t.effects.effect[i] || t.effects[i])
            ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n)
            : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n),
          i || n(),
          (this._datepickerShowing = !1),
          (o = this._get(a, "onClose")),
          o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]),
          (this._lastInput = null),
          this._inDialog &&
            (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }),
            t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
          (this._inDialog = !1)));
    },
    _tidyDialog: function (t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    },
    _checkExternalClick: function (e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
          s = t.datepicker._getInst(i[0]);
        ((i[0].id !== t.datepicker._mainDivId &&
          0 === i.parents("#" + t.datepicker._mainDivId).length &&
          !i.hasClass(t.datepicker.markerClassName) &&
          !i.closest("." + t.datepicker._triggerClass).length &&
          t.datepicker._datepickerShowing &&
          (!t.datepicker._inDialog || !t.blockUI)) ||
          (i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s)) &&
          t.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function (e, i, s) {
      var n = t(e),
        o = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) ||
        (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o));
    },
    _gotoToday: function (e) {
      var i,
        s = t(e),
        n = this._getInst(s[0]);
      this._get(n, "gotoCurrent") && n.currentDay
        ? ((n.selectedDay = n.currentDay),
          (n.drawMonth = n.selectedMonth = n.currentMonth),
          (n.drawYear = n.selectedYear = n.currentYear))
        : ((i = new Date()),
          (n.selectedDay = i.getDate()),
          (n.drawMonth = n.selectedMonth = i.getMonth()),
          (n.drawYear = n.selectedYear = i.getFullYear())),
        this._notifyChange(n),
        this._adjustDate(s);
    },
    _selectMonthYear: function (e, i, s) {
      var n = t(e),
        o = this._getInst(n[0]);
      (o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] =
        parseInt(i.options[i.selectedIndex].value, 10)),
        this._notifyChange(o),
        this._adjustDate(n);
    },
    _selectDay: function (e, i, s, n) {
      var o,
        a = t(e);
      t(n).hasClass(this._unselectableClass) ||
        this._isDisabledDatepicker(a[0]) ||
        ((o = this._getInst(a[0])),
        (o.selectedDay = o.currentDay = t("a", n).html()),
        (o.selectedMonth = o.currentMonth = i),
        (o.selectedYear = o.currentYear = s),
        this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
    },
    _clearDate: function (e) {
      var i = t(e);
      this._selectDate(i, "");
    },
    _selectDate: function (e, i) {
      var s,
        n = t(e),
        o = this._getInst(n[0]);
      (i = null != i ? i : this._formatDate(o)),
        o.input && o.input.val(i),
        this._updateAlternate(o),
        (s = this._get(o, "onSelect")),
        s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"),
        o.inline
          ? this._updateDatepicker(o)
          : (this._hideDatepicker(),
            (this._lastInput = o.input[0]),
            "object" != typeof o.input[0] && o.input.trigger("focus"),
            (this._lastInput = null));
    },
    _updateAlternate: function (e) {
      var i,
        s,
        n,
        o = this._get(e, "altField");
      o &&
        ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
        (s = this._getDate(e)),
        (n = this.formatDate(i, s, this._getFormatConfig(e))),
        t(o).val(n));
    },
    noWeekends: function (t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""];
    },
    iso8601Week: function (t) {
      var e,
        i = new Date(t.getTime());
      return (
        i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
        (e = i.getTime()),
        i.setMonth(0),
        i.setDate(1),
        Math.floor(Math.round((e - i) / 864e5) / 7) + 1
      );
    },
    parseDate: function (e, i, s) {
      if (null == e || null == i) throw "Invalid arguments";
      if (((i = "object" == typeof i ? "" + i : i + ""), "" === i)) return null;
      var n,
        o,
        a,
        r,
        h = 0,
        l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        c = "string" != typeof l ? l : (new Date().getFullYear() % 100) + parseInt(l, 10),
        u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
        d = (s ? s.dayNames : null) || this._defaults.dayNames,
        p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
        f = (s ? s.monthNames : null) || this._defaults.monthNames,
        g = -1,
        m = -1,
        _ = -1,
        v = -1,
        b = !1,
        y = function (t) {
          var i = e.length > n + 1 && e.charAt(n + 1) === t;
          return i && n++, i;
        },
        w = function (t) {
          var e = y(t),
            s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            n = "y" === t ? s : 1,
            o = RegExp("^\\d{" + n + "," + s + "}"),
            a = i.substring(h).match(o);
          if (!a) throw "Missing number at position " + h;
          return (h += a[0].length), parseInt(a[0], 10);
        },
        k = function (e, s, n) {
          var o = -1,
            a = t
              .map(y(e) ? n : s, function (t, e) {
                return [[e, t]];
              })
              .sort(function (t, e) {
                return -(t[1].length - e[1].length);
              });
          if (
            (t.each(a, function (t, e) {
              var s = e[1];
              return i.substr(h, s.length).toLowerCase() === s.toLowerCase()
                ? ((o = e[0]), (h += s.length), !1)
                : void 0;
            }),
            -1 !== o)
          )
            return o + 1;
          throw "Unknown name at position " + h;
        },
        x = function () {
          if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
          h++;
        };
      for (n = 0; e.length > n; n++)
        if (b) "'" !== e.charAt(n) || y("'") ? x() : (b = !1);
        else
          switch (e.charAt(n)) {
            case "d":
              _ = w("d");
              break;
            case "D":
              k("D", u, d);
              break;
            case "o":
              v = w("o");
              break;
            case "m":
              m = w("m");
              break;
            case "M":
              m = k("M", p, f);
              break;
            case "y":
              g = w("y");
              break;
            case "@":
              (r = new Date(w("@"))), (g = r.getFullYear()), (m = r.getMonth() + 1), (_ = r.getDate());
              break;
            case "!":
              (r = new Date((w("!") - this._ticksTo1970) / 1e4)),
                (g = r.getFullYear()),
                (m = r.getMonth() + 1),
                (_ = r.getDate());
              break;
            case "'":
              y("'") ? x() : (b = !0);
              break;
            default:
              x();
          }
      if (i.length > h && ((a = i.substr(h)), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
      if (
        (-1 === g
          ? (g = new Date().getFullYear())
          : 100 > g && (g += new Date().getFullYear() - (new Date().getFullYear() % 100) + (c >= g ? 0 : -100)),
        v > -1)
      )
        for (m = 1, _ = v; ; ) {
          if (((o = this._getDaysInMonth(g, m - 1)), o >= _)) break;
          m++, (_ -= o);
        }
      if (
        ((r = this._daylightSavingAdjust(new Date(g, m - 1, _))),
        r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _)
      )
        throw "Invalid date";
      return r;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function (t, e, i) {
      if (!e) return "";
      var s,
        n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        o = (i ? i.dayNames : null) || this._defaults.dayNames,
        a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        r = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function (e) {
          var i = t.length > s + 1 && t.charAt(s + 1) === e;
          return i && s++, i;
        },
        l = function (t, e, i) {
          var s = "" + e;
          if (h(t)) for (; i > s.length; ) s = "0" + s;
          return s;
        },
        c = function (t, e, i, s) {
          return h(t) ? s[e] : i[e];
        },
        u = "",
        d = !1;
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) "'" !== t.charAt(s) || h("'") ? (u += t.charAt(s)) : (d = !1);
          else
            switch (t.charAt(s)) {
              case "d":
                u += l("d", e.getDate(), 2);
                break;
              case "D":
                u += c("D", e.getDay(), n, o);
                break;
              case "o":
                u += l(
                  "o",
                  Math.round(
                    (new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() -
                      new Date(e.getFullYear(), 0, 0).getTime()) /
                      864e5
                  ),
                  3
                );
                break;
              case "m":
                u += l("m", e.getMonth() + 1, 2);
                break;
              case "M":
                u += c("M", e.getMonth(), a, r);
                break;
              case "y":
                u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + (e.getFullYear() % 100);
                break;
              case "@":
                u += e.getTime();
                break;
              case "!":
                u += 1e4 * e.getTime() + this._ticksTo1970;
                break;
              case "'":
                h("'") ? (u += "'") : (d = !0);
                break;
              default:
                u += t.charAt(s);
            }
      return u;
    },
    _possibleChars: function (t) {
      var e,
        i = "",
        s = !1,
        n = function (i) {
          var s = t.length > e + 1 && t.charAt(e + 1) === i;
          return s && e++, s;
        };
      for (e = 0; t.length > e; e++)
        if (s) "'" !== t.charAt(e) || n("'") ? (i += t.charAt(e)) : (s = !1);
        else
          switch (t.charAt(e)) {
            case "d":
            case "m":
            case "y":
            case "@":
              i += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              n("'") ? (i += "'") : (s = !0);
              break;
            default:
              i += t.charAt(e);
          }
      return i;
    },
    _get: function (t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
    },
    _setDateFromField: function (t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
          s = (t.lastVal = t.input ? t.input.val() : null),
          n = this._getDefaultDate(t),
          o = n,
          a = this._getFormatConfig(t);
        try {
          o = this.parseDate(i, s, a) || n;
        } catch (r) {
          s = e ? "" : s;
        }
        (t.selectedDay = o.getDate()),
          (t.drawMonth = t.selectedMonth = o.getMonth()),
          (t.drawYear = t.selectedYear = o.getFullYear()),
          (t.currentDay = s ? o.getDate() : 0),
          (t.currentMonth = s ? o.getMonth() : 0),
          (t.currentYear = s ? o.getFullYear() : 0),
          this._adjustInstDate(t);
      }
    },
    _getDefaultDate: function (t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
    },
    _determineDate: function (e, i, s) {
      var n = function (t) {
          var e = new Date();
          return e.setDate(e.getDate() + t), e;
        },
        o = function (i) {
          try {
            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
          } catch (s) {}
          for (
            var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(),
              o = n.getFullYear(),
              a = n.getMonth(),
              r = n.getDate(),
              h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
              l = h.exec(i);
            l;

          ) {
            switch (l[2] || "d") {
              case "d":
              case "D":
                r += parseInt(l[1], 10);
                break;
              case "w":
              case "W":
                r += 7 * parseInt(l[1], 10);
                break;
              case "m":
              case "M":
                (a += parseInt(l[1], 10)), (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)));
                break;
              case "y":
              case "Y":
                (o += parseInt(l[1], 10)), (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)));
            }
            l = h.exec(i);
          }
          return new Date(o, a, r);
        },
        a =
          null == i || "" === i
            ? s
            : "string" == typeof i
            ? o(i)
            : "number" == typeof i
            ? isNaN(i)
              ? s
              : n(i)
            : new Date(i.getTime());
      return (
        (a = a && "Invalid Date" == "" + a ? s : a),
        a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)),
        this._daylightSavingAdjust(a)
      );
    },
    _daylightSavingAdjust: function (t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
    },
    _setDate: function (t, e, i) {
      var s = !e,
        n = t.selectedMonth,
        o = t.selectedYear,
        a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
      (t.selectedDay = t.currentDay = a.getDate()),
        (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
        (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
        (n === t.selectedMonth && o === t.selectedYear) || i || this._notifyChange(t),
        this._adjustInstDate(t),
        t.input && t.input.val(s ? "" : this._formatDate(t));
    },
    _getDate: function (t) {
      var e =
        !t.currentYear || (t.input && "" === t.input.val())
          ? null
          : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e;
    },
    _attachHandlers: function (e) {
      var i = this._get(e, "stepMonths"),
        s = "#" + e.id.replace(/\\\\/g, "\\");
      e.dpDiv.find("[data-handler]").map(function () {
        var e = {
          prev: function () {
            t.datepicker._adjustDate(s, -i, "M");
          },
          next: function () {
            t.datepicker._adjustDate(s, +i, "M");
          },
          hide: function () {
            t.datepicker._hideDatepicker();
          },
          today: function () {
            t.datepicker._gotoToday(s);
          },
          selectDay: function () {
            return (
              t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            );
          },
          selectMonth: function () {
            return t.datepicker._selectMonthYear(s, this, "M"), !1;
          },
          selectYear: function () {
            return t.datepicker._selectMonthYear(s, this, "Y"), !1;
          },
        };
        t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
      });
    },
    _generateHTML: function (t) {
      var e,
        i,
        s,
        n,
        o,
        a,
        r,
        h,
        l,
        c,
        u,
        d,
        p,
        f,
        g,
        m,
        _,
        v,
        b,
        y,
        w,
        k,
        x,
        C,
        D,
        I,
        T,
        P,
        M,
        S,
        H,
        z,
        O,
        A,
        N,
        W,
        E,
        F,
        L,
        R = new Date(),
        B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
        Y = this._get(t, "isRTL"),
        j = this._get(t, "showButtonPanel"),
        q = this._get(t, "hideIfNoPrevNext"),
        K = this._get(t, "navigationAsDateFormat"),
        U = this._getNumberOfMonths(t),
        V = this._get(t, "showCurrentAtPos"),
        $ = this._get(t, "stepMonths"),
        X = 1 !== U[0] || 1 !== U[1],
        G = this._daylightSavingAdjust(
          t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)
        ),
        Q = this._getMinMaxDate(t, "min"),
        J = this._getMinMaxDate(t, "max"),
        Z = t.drawMonth - V,
        te = t.drawYear;
      if ((0 > Z && ((Z += 12), te--), J))
        for (
          e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())),
            e = Q && Q > e ? Q : e;
          this._daylightSavingAdjust(new Date(te, Z, 1)) > e;

        )
          Z--, 0 > Z && ((Z = 11), te--);
      for (
        t.drawMonth = Z,
          t.drawYear = te,
          i = this._get(t, "prevText"),
          i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i,
          s = this._canAdjustMonth(t, -1, te, Z)
            ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? "e" : "w") +
              "'>" +
              i +
              "</span></a>"
            : q
            ? ""
            : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? "e" : "w") +
              "'>" +
              i +
              "</span></a>",
          n = this._get(t, "nextText"),
          n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n,
          o = this._canAdjustMonth(t, 1, te, Z)
            ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
              n +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? "w" : "e") +
              "'>" +
              n +
              "</span></a>"
            : q
            ? ""
            : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
              n +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? "w" : "e") +
              "'>" +
              n +
              "</span></a>",
          a = this._get(t, "currentText"),
          r = this._get(t, "gotoCurrent") && t.currentDay ? G : B,
          a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
          h = t.inline
            ? ""
            : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
              this._get(t, "closeText") +
              "</button>",
          l = j
            ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
              (Y ? h : "") +
              (this._isInRange(t, r)
                ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                  a +
                  "</button>"
                : "") +
              (Y ? "" : h) +
              "</div>"
            : "",
          c = parseInt(this._get(t, "firstDay"), 10),
          c = isNaN(c) ? 0 : c,
          u = this._get(t, "showWeek"),
          d = this._get(t, "dayNames"),
          p = this._get(t, "dayNamesMin"),
          f = this._get(t, "monthNames"),
          g = this._get(t, "monthNamesShort"),
          m = this._get(t, "beforeShowDay"),
          _ = this._get(t, "showOtherMonths"),
          v = this._get(t, "selectOtherMonths"),
          b = this._getDefaultDate(t),
          y = "",
          k = 0;
        U[0] > k;
        k++
      ) {
        for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (((D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay))), (I = " ui-corner-all"), (T = ""), X)) {
            if (((T += "<div class='ui-datepicker-group"), U[1] > 1))
              switch (C) {
                case 0:
                  (T += " ui-datepicker-group-first"), (I = " ui-corner-" + (Y ? "right" : "left"));
                  break;
                case U[1] - 1:
                  (T += " ui-datepicker-group-last"), (I = " ui-corner-" + (Y ? "left" : "right"));
                  break;
                default:
                  (T += " ui-datepicker-group-middle"), (I = "");
              }
            T += "'>";
          }
          for (
            T +=
              "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
              I +
              "'>" +
              (/all|left/.test(I) && 0 === k ? (Y ? o : s) : "") +
              (/all|right/.test(I) && 0 === k ? (Y ? s : o) : "") +
              this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) +
              "</div><table class='ui-datepicker-calendar'><thead>" +
              "<tr>",
              P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
              w = 0;
            7 > w;
            w++
          )
            (M = (w + c) % 7),
              (P +=
                "<th scope='col'" +
                ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") +
                ">" +
                "<span title='" +
                d[M] +
                "'>" +
                p[M] +
                "</span></th>");
          for (
            T += P + "</tr></thead><tbody>",
              S = this._getDaysInMonth(te, Z),
              te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)),
              H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7,
              z = Math.ceil((H + S) / 7),
              O = X ? (this.maxRows > z ? this.maxRows : z) : z,
              this.maxRows = O,
              A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)),
              N = 0;
            O > N;
            N++
          ) {
            for (
              T += "<tr>",
                W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "",
                w = 0;
              7 > w;
              w++
            )
              (E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""]),
                (F = A.getMonth() !== Z),
                (L = (F && !v) || !E[0] || (Q && Q > A) || (J && A > J)),
                (W +=
                  "<td class='" +
                  ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                  (F ? " ui-datepicker-other-month" : "") +
                  ((A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent) ||
                  (b.getTime() === A.getTime() && b.getTime() === D.getTime())
                    ? " " + this._dayOverClass
                    : "") +
                  (L ? " " + this._unselectableClass + " ui-state-disabled" : "") +
                  (F && !_
                    ? ""
                    : " " +
                      E[1] +
                      (A.getTime() === G.getTime() ? " " + this._currentClass : "") +
                      (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) +
                  "'" +
                  ((F && !_) || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") +
                  (L
                    ? ""
                    : " data-handler='selectDay' data-event='click' data-month='" +
                      A.getMonth() +
                      "' data-year='" +
                      A.getFullYear() +
                      "'") +
                  ">" +
                  (F && !_
                    ? "&#xa0;"
                    : L
                    ? "<span class='ui-state-default'>" + A.getDate() + "</span>"
                    : "<a class='ui-state-default" +
                      (A.getTime() === B.getTime() ? " ui-state-highlight" : "") +
                      (A.getTime() === G.getTime() ? " ui-state-active" : "") +
                      (F ? " ui-priority-secondary" : "") +
                      "' href='#'>" +
                      A.getDate() +
                      "</a>") +
                  "</td>"),
                A.setDate(A.getDate() + 1),
                (A = this._daylightSavingAdjust(A));
            T += W + "</tr>";
          }
          Z++,
            Z > 11 && ((Z = 0), te++),
            (T +=
              "</tbody></table>" +
              (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")),
            (x += T);
        }
        y += x;
      }
      return (y += l), (t._keyEvent = !1), y;
    },
    _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
      var h,
        l,
        c,
        u,
        d,
        p,
        f,
        g,
        m = this._get(t, "changeMonth"),
        _ = this._get(t, "changeYear"),
        v = this._get(t, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        y = "";
      if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
      else {
        for (
          h = s && s.getFullYear() === i,
            l = n && n.getFullYear() === i,
            y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
            c = 0;
          12 > c;
          c++
        )
          (!h || c >= s.getMonth()) &&
            (!l || n.getMonth() >= c) &&
            (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
        y += "</select>";
      }
      if ((v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml))
        if (((t.yearshtml = ""), o || !_)) b += "<span class='ui-datepicker-year'>" + i + "</span>";
        else {
          for (
            u = this._get(t, "yearRange").split(":"),
              d = new Date().getFullYear(),
              p = function (t) {
                var e = t.match(/c[+\-].*/)
                  ? i + parseInt(t.substring(1), 10)
                  : t.match(/[+\-].*/)
                  ? d + parseInt(t, 10)
                  : parseInt(t, 10);
                return isNaN(e) ? d : e;
              },
              f = p(u[0]),
              g = Math.max(f, p(u[1] || "")),
              f = s ? Math.max(f, s.getFullYear()) : f,
              g = n ? Math.min(g, n.getFullYear()) : g,
              t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
            g >= f;
            f++
          )
            t.yearshtml +=
              "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
          (t.yearshtml += "</select>"), (b += t.yearshtml), (t.yearshtml = null);
        }
      return (b += this._get(t, "yearSuffix")), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), (b += "</div>");
    },
    _adjustInstDate: function (t, e, i) {
      var s = t.selectedYear + ("Y" === i ? e : 0),
        n = t.selectedMonth + ("M" === i ? e : 0),
        o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
        a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
      (t.selectedDay = a.getDate()),
        (t.drawMonth = t.selectedMonth = a.getMonth()),
        (t.drawYear = t.selectedYear = a.getFullYear()),
        ("M" === i || "Y" === i) && this._notifyChange(t);
    },
    _restrictMinMax: function (t, e) {
      var i = this._getMinMaxDate(t, "min"),
        s = this._getMinMaxDate(t, "max"),
        n = i && i > e ? i : e;
      return s && n > s ? s : n;
    },
    _notifyChange: function (t) {
      var e = this._get(t, "onChangeMonthYear");
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
    },
    _getNumberOfMonths: function (t) {
      var e = this._get(t, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
    },
    _getMinMaxDate: function (t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null);
    },
    _getDaysInMonth: function (t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    },
    _getFirstDayOfMonth: function (t, e) {
      return new Date(t, e, 1).getDay();
    },
    _canAdjustMonth: function (t, e, i, s) {
      var n = this._getNumberOfMonths(t),
        o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
      return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
    },
    _isInRange: function (t, e) {
      var i,
        s,
        n = this._getMinMaxDate(t, "min"),
        o = this._getMinMaxDate(t, "max"),
        a = null,
        r = null,
        h = this._get(t, "yearRange");
      return (
        h &&
          ((i = h.split(":")),
          (s = new Date().getFullYear()),
          (a = parseInt(i[0], 10)),
          (r = parseInt(i[1], 10)),
          i[0].match(/[+\-].*/) && (a += s),
          i[1].match(/[+\-].*/) && (r += s)),
        (!n || e.getTime() >= n.getTime()) &&
          (!o || e.getTime() <= o.getTime()) &&
          (!a || e.getFullYear() >= a) &&
          (!r || r >= e.getFullYear())
      );
    },
    _getFormatConfig: function (t) {
      var e = this._get(t, "shortYearCutoff");
      return (
        (e = "string" != typeof e ? e : (new Date().getFullYear() % 100) + parseInt(e, 10)),
        {
          shortYearCutoff: e,
          dayNamesShort: this._get(t, "dayNamesShort"),
          dayNames: this._get(t, "dayNames"),
          monthNamesShort: this._get(t, "monthNamesShort"),
          monthNames: this._get(t, "monthNames"),
        }
      );
    },
    _formatDate: function (t, e, i, s) {
      e || ((t.currentDay = t.selectedDay), (t.currentMonth = t.selectedMonth), (t.currentYear = t.selectedYear));
      var n = e
        ? "object" == typeof e
          ? e
          : this._daylightSavingAdjust(new Date(s, i, e))
        : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
    },
  }),
    (t.fn.datepicker = function (e) {
      if (!this.length) return this;
      t.datepicker.initialized ||
        (t(document).on("mousedown", t.datepicker._checkExternalClick), (t.datepicker.initialized = !0)),
        0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
      var i = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof e || ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
        ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1]
          ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
          : this.each(function () {
              "string" == typeof e
                ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i))
                : t.datepicker._attachDatepicker(this, e);
            })
        : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i));
    }),
    (t.datepicker = new s()),
    (t.datepicker.initialized = !1),
    (t.datepicker.uuid = new Date().getTime()),
    (t.datepicker.version = "1.12.1"),
    t.datepicker,
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var _ = !1;
  t(document).on("mouseup", function () {
    _ = !1;
  }),
    t.widget("ui.mouse", {
      version: "1.12.1",
      options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
      _mouseInit: function () {
        var e = this;
        this.element
          .on("mousedown." + this.widgetName, function (t) {
            return e._mouseDown(t);
          })
          .on("click." + this.widgetName, function (i) {
            return !0 === t.data(i.target, e.widgetName + ".preventClickEvent")
              ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.off("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .off("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (e) {
        if (!_) {
          (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(e), (this._mouseDownEvent = e);
          var i = this,
            s = 1 === e.which,
            n =
              "string" == typeof this.options.cancel && e.target.nodeName
                ? t(e.target).closest(this.options.cancel).length
                : !1;
          return s && !n && this._mouseCapture(e)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = this._mouseStart(e) !== !1), !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") &&
                    t.removeData(e.target, this.widgetName + ".preventClickEvent"),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                  }),
                  this.document
                    .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (_ = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
          if (!e.which)
            if (
              e.originalEvent.altKey ||
              e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(e);
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (e) {
        this.document
          .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
          .off("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
          this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (_ = !1),
          e.preventDefault();
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >=
          this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    (t.ui.plugin = {
      add: function (e, i, s) {
        var n,
          o = t.ui[e].prototype;
        for (n in s) (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([i, s[n]]);
      },
      call: function (t, e, i, s) {
        var n,
          o = t.plugins[e];
        if (o && (s || (t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)))
          for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i);
      },
    }),
    (t.ui.safeBlur = function (e) {
      e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
    }),
    t.widget("ui.draggable", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null,
      },
      _create: function () {
        "original" === this.options.helper && this._setPositionRelative(),
          this.options.addClasses && this._addClass("ui-draggable"),
          this._setHandleClassName(),
          this._mouseInit();
      },
      _setOption: function (t, e) {
        this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
      },
      _destroy: function () {
        return (this.helper || this.element).is(".ui-draggable-dragging")
          ? ((this.destroyOnClear = !0), void 0)
          : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
      },
      _mouseCapture: function (e) {
        var i = this.options;
        return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0
          ? !1
          : ((this.handle = this._getHandle(e)),
            this.handle
              ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0)
              : !1);
      },
      _blockFrames: function (e) {
        this.iframeBlocks = this.document.find(e).map(function () {
          var e = t(this);
          return t("<div>")
            .css("position", "absolute")
            .appendTo(e.parent())
            .outerWidth(e.outerWidth())
            .outerHeight(e.outerHeight())
            .offset(e.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _blurActiveElement: function (e) {
        var i = t.ui.safeActiveElement(this.document[0]),
          s = t(e.target);
        s.closest(i).length || t.ui.safeBlur(i);
      },
      _mouseStart: function (e) {
        var i = this.options;
        return (
          (this.helper = this._createHelper(e)),
          this._addClass(this.helper, "ui-draggable-dragging"),
          this._cacheHelperProportions(),
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent(!0)),
          (this.offsetParent = this.helper.offsetParent()),
          (this.hasFixedAncestor =
            this.helper.parents().filter(function () {
              return "fixed" === t(this).css("position");
            }).length > 0),
          (this.positionAbs = this.element.offset()),
          this._refreshOffsets(e),
          (this.originalPosition = this.position = this._generatePosition(e, !1)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
          this._setContainment(),
          this._trigger("start", e) === !1
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
              this._mouseDrag(e, !0),
              t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
              !0)
        );
      },
      _refreshOffsets: function (t) {
        (this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
          (this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top });
      },
      _mouseDrag: function (e, i) {
        if (
          (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(e, !0)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !i)
        ) {
          var s = this._uiHash();
          if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
          this.position = s.position;
        }
        return (
          (this.helper[0].style.left = this.position.left + "px"),
          (this.helper[0].style.top = this.position.top + "px"),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          !1
        );
      },
      _mouseStop: function (e) {
        var i = this,
          s = !1;
        return (
          t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)),
          this.dropped && ((s = this.dropped), (this.dropped = !1)),
          ("invalid" === this.options.revert && !s) ||
          ("valid" === this.options.revert && s) ||
          this.options.revert === !0 ||
          (t.isFunction(this.options.revert) && this.options.revert.call(this.element, s))
            ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", e) !== !1 && i._clear();
              })
            : this._trigger("stop", e) !== !1 && this._clear(),
          !1
        );
      },
      _mouseUp: function (e) {
        return (
          this._unblockFrames(),
          t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
          this.handleElement.is(e.target) && this.element.trigger("focus"),
          t.ui.mouse.prototype._mouseUp.call(this, e)
        );
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] }))
            : this._clear(),
          this
        );
      },
      _getHandle: function (e) {
        return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0;
      },
      _setHandleClassName: function () {
        (this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element),
          this._addClass(this.handleElement, "ui-draggable-handle");
      },
      _removeHandleClassName: function () {
        this._removeClass(this.handleElement, "ui-draggable-handle");
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper),
          n = s
            ? t(i.helper.apply(this.element[0], [e]))
            : "clone" === i.helper
            ? this.element.clone().removeAttr("id")
            : this.element;
        return (
          n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
          s && n[0] === this.element[0] && this._setPositionRelative(),
          n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"),
          n
        );
      },
      _setPositionRelative: function () {
        /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          "left" in e && (this.offset.click.left = e.left + this.margins.left),
          "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
          "top" in e && (this.offset.click.top = e.top + this.margins.top),
          "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
      },
      _isRootNode: function (t) {
        return /(html|body)/i.test(t.tagName) || t === this.document[0];
      },
      _getParentOffset: function () {
        var e = this.offsetParent.offset(),
          i = this.document[0];
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== i &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()), (e.top += this.scrollParent.scrollTop())),
          this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
          {
            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);
        return {
          top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
          left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
      },
      _setContainment: function () {
        var e,
          i,
          s,
          n = this.options,
          o = this.document[0];
        return (
          (this.relativeContainer = null),
          n.containment
            ? "window" === n.containment
              ? ((this.containment = [
                  t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                  t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                  t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left,
                  t(window).scrollTop() +
                    (t(window).height() || o.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ]),
                void 0)
              : "document" === n.containment
              ? ((this.containment = [
                  0,
                  0,
                  t(o).width() - this.helperProportions.width - this.margins.left,
                  (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
                ]),
                void 0)
              : n.containment.constructor === Array
              ? ((this.containment = n.containment), void 0)
              : ("parent" === n.containment && (n.containment = this.helper[0].parentNode),
                (i = t(n.containment)),
                (s = i[0]),
                s &&
                  ((e = /(scroll|auto)/.test(i.css("overflow"))),
                  (this.containment = [
                    (parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0),
                    (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0),
                    (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) -
                      (parseInt(i.css("borderRightWidth"), 10) || 0) -
                      (parseInt(i.css("paddingRight"), 10) || 0) -
                      this.helperProportions.width -
                      this.margins.left -
                      this.margins.right,
                    (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) -
                      (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                      (parseInt(i.css("paddingBottom"), 10) || 0) -
                      this.helperProportions.height -
                      this.margins.top -
                      this.margins.bottom,
                  ]),
                  (this.relativeContainer = i)),
                void 0)
            : ((this.containment = null), void 0)
        );
      },
      _convertPositionTo: function (t, e) {
        e || (e = this.position);
        var i = "absolute" === t ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i,
        };
      },
      _generatePosition: function (t, e) {
        var i,
          s,
          n,
          o,
          a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          h = t.pageX,
          l = t.pageY;
        return (
          (r && this.offset.scroll) ||
            (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }),
          e &&
            (this.containment &&
              (this.relativeContainer
                ? ((s = this.relativeContainer.offset()),
                  (i = [
                    this.containment[0] + s.left,
                    this.containment[1] + s.top,
                    this.containment[2] + s.left,
                    this.containment[3] + s.top,
                  ]))
                : (i = this.containment),
              t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)),
            a.grid &&
              ((n = a.grid[1]
                ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1]
                : this.originalPageY),
              (l = i
                ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3]
                  ? n
                  : n - this.offset.click.top >= i[1]
                  ? n - a.grid[1]
                  : n + a.grid[1]
                : n),
              (o = a.grid[0]
                ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0]
                : this.originalPageX),
              (h = i
                ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2]
                  ? o
                  : o - this.offset.click.left >= i[0]
                  ? o - a.grid[0]
                  : o + a.grid[0]
                : o)),
            "y" === a.axis && (h = this.originalPageX),
            "x" === a.axis && (l = this.originalPageY)),
          {
            top:
              l -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
            left:
              h -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left),
          }
        );
      },
      _clear: function () {
        this._removeClass(this.helper, "ui-draggable-dragging"),
          this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1),
          this.destroyOnClear && this.destroy();
      },
      _trigger: function (e, i, s) {
        return (
          (s = s || this._uiHash()),
          t.ui.plugin.call(this, e, [i, s, this], !0),
          /^(drag|start|stop)/.test(e) &&
            ((this.positionAbs = this._convertPositionTo("absolute")), (s.offset = this.positionAbs)),
          t.Widget.prototype._trigger.call(this, e, i, s)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
    t.ui.plugin.add("draggable", "connectToSortable", {
      start: function (e, i, s) {
        var n = t.extend({}, i, { item: s.element });
        (s.sortables = []),
          t(s.options.connectToSortable).each(function () {
            var i = t(this).sortable("instance");
            i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n));
          });
      },
      stop: function (e, i, s) {
        var n = t.extend({}, i, { item: s.element });
        (s.cancelHelperRemoval = !1),
          t.each(s.sortables, function () {
            var t = this;
            t.isOver
              ? ((t.isOver = 0),
                (s.cancelHelperRemoval = !0),
                (t.cancelHelperRemoval = !1),
                (t._storedCSS = {
                  position: t.placeholder.css("position"),
                  top: t.placeholder.css("top"),
                  left: t.placeholder.css("left"),
                }),
                t._mouseStop(e),
                (t.options.helper = t.options._helper))
              : ((t.cancelHelperRemoval = !0), t._trigger("deactivate", e, n));
          });
      },
      drag: function (e, i, s) {
        t.each(s.sortables, function () {
          var n = !1,
            o = this;
          (o.positionAbs = s.positionAbs),
            (o.helperProportions = s.helperProportions),
            (o.offset.click = s.offset.click),
            o._intersectsWith(o.containerCache) &&
              ((n = !0),
              t.each(s.sortables, function () {
                return (
                  (this.positionAbs = s.positionAbs),
                  (this.helperProportions = s.helperProportions),
                  (this.offset.click = s.offset.click),
                  this !== o &&
                    this._intersectsWith(this.containerCache) &&
                    t.contains(o.element[0], this.element[0]) &&
                    (n = !1),
                  n
                );
              })),
            n
              ? (o.isOver ||
                  ((o.isOver = 1),
                  (s._parent = i.helper.parent()),
                  (o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0)),
                  (o.options._helper = o.options.helper),
                  (o.options.helper = function () {
                    return i.helper[0];
                  }),
                  (e.target = o.currentItem[0]),
                  o._mouseCapture(e, !0),
                  o._mouseStart(e, !0, !0),
                  (o.offset.click.top = s.offset.click.top),
                  (o.offset.click.left = s.offset.click.left),
                  (o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left),
                  (o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top),
                  s._trigger("toSortable", e),
                  (s.dropped = o.element),
                  t.each(s.sortables, function () {
                    this.refreshPositions();
                  }),
                  (s.currentItem = s.element),
                  (o.fromOutside = s)),
                o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
              : o.isOver &&
                ((o.isOver = 0),
                (o.cancelHelperRemoval = !0),
                (o.options._revert = o.options.revert),
                (o.options.revert = !1),
                o._trigger("out", e, o._uiHash(o)),
                o._mouseStop(e, !0),
                (o.options.revert = o.options._revert),
                (o.options.helper = o.options._helper),
                o.placeholder && o.placeholder.remove(),
                i.helper.appendTo(s._parent),
                s._refreshOffsets(e),
                (i.position = s._generatePosition(e, !0)),
                s._trigger("fromSortable", e),
                (s.dropped = !1),
                t.each(s.sortables, function () {
                  this.refreshPositions();
                }));
        });
      },
    }),
    t.ui.plugin.add("draggable", "cursor", {
      start: function (e, i, s) {
        var n = t("body"),
          o = s.options;
        n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor);
      },
      stop: function (e, i, s) {
        var n = s.options;
        n._cursor && t("body").css("cursor", n._cursor);
      },
    }),
    t.ui.plugin.add("draggable", "opacity", {
      start: function (e, i, s) {
        var n = t(i.helper),
          o = s.options;
        n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity);
      },
      stop: function (e, i, s) {
        var n = s.options;
        n._opacity && t(i.helper).css("opacity", n._opacity);
      },
    }),
    t.ui.plugin.add("draggable", "scroll", {
      start: function (t, e, i) {
        i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
          i.scrollParentNotHidden[0] !== i.document[0] &&
            "HTML" !== i.scrollParentNotHidden[0].tagName &&
            (i.overflowOffset = i.scrollParentNotHidden.offset());
      },
      drag: function (e, i, s) {
        var n = s.options,
          o = !1,
          a = s.scrollParentNotHidden[0],
          r = s.document[0];
        a !== r && "HTML" !== a.tagName
          ? ((n.axis && "x" === n.axis) ||
              (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity
                ? (a.scrollTop = o = a.scrollTop + n.scrollSpeed)
                : e.pageY - s.overflowOffset.top < n.scrollSensitivity &&
                  (a.scrollTop = o = a.scrollTop - n.scrollSpeed)),
            (n.axis && "y" === n.axis) ||
              (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity
                ? (a.scrollLeft = o = a.scrollLeft + n.scrollSpeed)
                : e.pageX - s.overflowOffset.left < n.scrollSensitivity &&
                  (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed)))
          : ((n.axis && "x" === n.axis) ||
              (e.pageY - t(r).scrollTop() < n.scrollSensitivity
                ? (o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed))
                : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity &&
                  (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))),
            (n.axis && "y" === n.axis) ||
              (e.pageX - t(r).scrollLeft() < n.scrollSensitivity
                ? (o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed))
                : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity &&
                  (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))),
          o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e);
      },
    }),
    t.ui.plugin.add("draggable", "snap", {
      start: function (e, i, s) {
        var n = s.options;
        (s.snapElements = []),
          t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
            var e = t(this),
              i = e.offset();
            this !== s.element[0] &&
              s.snapElements.push({
                item: this,
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: i.top,
                left: i.left,
              });
          });
      },
      drag: function (e, i, s) {
        var n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d,
          p,
          f = s.options,
          g = f.snapTolerance,
          m = i.offset.left,
          _ = m + s.helperProportions.width,
          v = i.offset.top,
          b = v + s.helperProportions.height;
        for (d = s.snapElements.length - 1; d >= 0; d--)
          (h = s.snapElements[d].left - s.margins.left),
            (l = h + s.snapElements[d].width),
            (c = s.snapElements[d].top - s.margins.top),
            (u = c + s.snapElements[d].height),
            h - g > _ ||
            m > l + g ||
            c - g > b ||
            v > u + g ||
            !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item)
              ? (s.snapElements[d].snapping &&
                  s.options.snap.release &&
                  s.options.snap.release.call(
                    s.element,
                    e,
                    t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })
                  ),
                (s.snapElements[d].snapping = !1))
              : ("inner" !== f.snapMode &&
                  ((n = g >= Math.abs(c - b)),
                  (o = g >= Math.abs(u - v)),
                  (a = g >= Math.abs(h - _)),
                  (r = g >= Math.abs(l - m)),
                  n &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: c - s.helperProportions.height,
                      left: 0,
                    }).top),
                  o && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top),
                  a &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: h - s.helperProportions.width,
                    }).left),
                  r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)),
                (p = n || o || a || r),
                "outer" !== f.snapMode &&
                  ((n = g >= Math.abs(c - v)),
                  (o = g >= Math.abs(u - b)),
                  (a = g >= Math.abs(h - m)),
                  (r = g >= Math.abs(l - _)),
                  n && (i.position.top = s._convertPositionTo("relative", { top: c, left: 0 }).top),
                  o &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: u - s.helperProportions.height,
                      left: 0,
                    }).top),
                  a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left),
                  r &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: l - s.helperProportions.width,
                    }).left)),
                !s.snapElements[d].snapping &&
                  (n || o || a || r || p) &&
                  s.options.snap.snap &&
                  s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })),
                (s.snapElements[d].snapping = n || o || a || r || p));
      },
    }),
    t.ui.plugin.add("draggable", "stack", {
      start: function (e, i, s) {
        var n,
          o = s.options,
          a = t.makeArray(t(o.stack)).sort(function (e, i) {
            return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
          });
        a.length &&
          ((n = parseInt(t(a[0]).css("zIndex"), 10) || 0),
          t(a).each(function (e) {
            t(this).css("zIndex", n + e);
          }),
          this.css("zIndex", n + a.length));
      },
    }),
    t.ui.plugin.add("draggable", "zIndex", {
      start: function (e, i, s) {
        var n = t(i.helper),
          o = s.options;
        n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex);
      },
      stop: function (e, i, s) {
        var n = s.options;
        n._zIndex && t(i.helper).css("zIndex", n._zIndex);
      },
    }),
    t.ui.draggable,
    t.widget("ui.resizable", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "resize",
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: "slow",
        animateEasing: "swing",
        aspectRatio: !1,
        autoHide: !1,
        classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: "e,s,se",
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null,
      },
      _num: function (t) {
        return parseFloat(t) || 0;
      },
      _isNumber: function (t) {
        return !isNaN(parseFloat(t));
      },
      _hasScroll: function (e, i) {
        if ("hidden" === t(e).css("overflow")) return !1;
        var s = i && "left" === i ? "scrollLeft" : "scrollTop",
          n = !1;
        return e[s] > 0 ? !0 : ((e[s] = 1), (n = e[s] > 0), (e[s] = 0), n);
      },
      _create: function () {
        var e,
          i = this.options,
          s = this;
        this._addClass("ui-resizable"),
          t.extend(this, {
            _aspectRatio: !!i.aspectRatio,
            aspectRatio: i.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null,
          }),
          this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) &&
            (this.element.wrap(
              t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left"),
              })
            ),
            (this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"))),
            (this.elementIsWrapper = !0),
            (e = {
              marginTop: this.originalElement.css("marginTop"),
              marginRight: this.originalElement.css("marginRight"),
              marginBottom: this.originalElement.css("marginBottom"),
              marginLeft: this.originalElement.css("marginLeft"),
            }),
            this.element.css(e),
            this.originalElement.css("margin", 0),
            (this.originalResizeStyle = this.originalElement.css("resize")),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(
              this.originalElement.css({ position: "static", zoom: 1, display: "block" })
            ),
            this.originalElement.css(e),
            this._proportionallyResize()),
          this._setupHandles(),
          i.autoHide &&
            t(this.element)
              .on("mouseenter", function () {
                i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show());
              })
              .on("mouseleave", function () {
                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide());
              }),
          this._mouseInit();
      },
      _destroy: function () {
        this._mouseDestroy();
        var e,
          i = function (e) {
            t(e)
              .removeData("resizable")
              .removeData("ui-resizable")
              .off(".resizable")
              .find(".ui-resizable-handle")
              .remove();
          };
        return (
          this.elementIsWrapper &&
            (i(this.element),
            (e = this.element),
            this.originalElement
              .css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left"),
              })
              .insertAfter(e),
            e.remove()),
          this.originalElement.css("resize", this.originalResizeStyle),
          i(this.originalElement),
          this
        );
      },
      _setOption: function (t, e) {
        switch ((this._super(t, e), t)) {
          case "handles":
            this._removeHandles(), this._setupHandles();
            break;
          default:
        }
      },
      _setupHandles: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options,
          r = this;
        if (
          ((this.handles =
            a.handles ||
            (t(".ui-resizable-handle", this.element).length
              ? {
                  n: ".ui-resizable-n",
                  e: ".ui-resizable-e",
                  s: ".ui-resizable-s",
                  w: ".ui-resizable-w",
                  se: ".ui-resizable-se",
                  sw: ".ui-resizable-sw",
                  ne: ".ui-resizable-ne",
                  nw: ".ui-resizable-nw",
                }
              : "e,s,se")),
          (this._handles = t()),
          this.handles.constructor === String)
        )
          for (
            "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
              s = this.handles.split(","),
              this.handles = {},
              i = 0;
            s.length > i;
            i++
          )
            (e = t.trim(s[i])),
              (n = "ui-resizable-" + e),
              (o = t("<div>")),
              this._addClass(o, "ui-resizable-handle " + n),
              o.css({ zIndex: a.zIndex }),
              (this.handles[e] = ".ui-resizable-" + e),
              this.element.append(o);
        (this._renderAxis = function (e) {
          var i, s, n, o;
          e = e || this.element;
          for (i in this.handles)
            this.handles[i].constructor === String
              ? (this.handles[i] = this.element.children(this.handles[i]).first().show())
              : (this.handles[i].jquery || this.handles[i].nodeType) &&
                ((this.handles[i] = t(this.handles[i])), this._on(this.handles[i], { mousedown: r._mouseDown })),
              this.elementIsWrapper &&
                this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) &&
                ((s = t(this.handles[i], this.element)),
                (o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth()),
                (n = [
                  "padding",
                  /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left",
                ].join("")),
                e.css(n, o),
                this._proportionallyResize()),
              (this._handles = this._handles.add(this.handles[i]));
        }),
          this._renderAxis(this.element),
          (this._handles = this._handles.add(this.element.find(".ui-resizable-handle"))),
          this._handles.disableSelection(),
          this._handles.on("mouseover", function () {
            r.resizing ||
              (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
              (r.axis = o && o[1] ? o[1] : "se"));
          }),
          a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
      },
      _removeHandles: function () {
        this._handles.remove();
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n = !1;
        for (i in this.handles) (s = t(this.handles[i])[0]), (s === e.target || t.contains(s, e.target)) && (n = !0);
        return !this.options.disabled && n;
      },
      _mouseStart: function (e) {
        var i,
          s,
          n,
          o = this.options,
          a = this.element;
        return (
          (this.resizing = !0),
          this._renderProxy(),
          (i = this._num(this.helper.css("left"))),
          (s = this._num(this.helper.css("top"))),
          o.containment && ((i += t(o.containment).scrollLeft() || 0), (s += t(o.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = { left: i, top: s }),
          (this.size = this._helper
            ? { width: this.helper.width(), height: this.helper.height() }
            : { width: a.width(), height: a.height() }),
          (this.originalSize = this._helper
            ? { width: a.outerWidth(), height: a.outerHeight() }
            : { width: a.width(), height: a.height() }),
          (this.sizeDiff = { width: a.outerWidth() - a.width(), height: a.outerHeight() - a.height() }),
          (this.originalPosition = { left: i, top: s }),
          (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
          (this.aspectRatio =
            "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1),
          (n = t(".ui-resizable-" + this.axis).css("cursor")),
          t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n),
          this._addClass("ui-resizable-resizing"),
          this._propagate("start", e),
          !0
        );
      },
      _mouseDrag: function (e) {
        var i,
          s,
          n = this.originalMousePosition,
          o = this.axis,
          a = e.pageX - n.left || 0,
          r = e.pageY - n.top || 0,
          h = this._change[o];
        return (
          this._updatePrevProperties(),
          h
            ? ((i = h.apply(this, [e, a, r])),
              this._updateVirtualBoundaries(e.shiftKey),
              (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
              (i = this._respectSize(i, e)),
              this._updateCache(i),
              this._propagate("resize", e),
              (s = this._applyChanges()),
              !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
              t.isEmptyObject(s) ||
                (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()),
              !1)
            : !1
        );
      },
      _mouseStop: function (e) {
        this.resizing = !1;
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l = this.options,
          c = this;
        return (
          this._helper &&
            ((i = this._proportionallyResizeElements),
            (s = i.length && /textarea/i.test(i[0].nodeName)),
            (n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height),
            (o = s ? 0 : c.sizeDiff.width),
            (a = { width: c.helper.width() - o, height: c.helper.height() - n }),
            (r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null),
            (h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null),
            l.animate || this.element.css(t.extend(a, { top: h, left: r })),
            c.helper.height(c.size.height),
            c.helper.width(c.size.width),
            this._helper && !l.animate && this._proportionallyResize()),
          t("body").css("cursor", "auto"),
          this._removeClass("ui-resizable-resizing"),
          this._propagate("stop", e),
          this._helper && this.helper.remove(),
          !1
        );
      },
      _updatePrevProperties: function () {
        (this.prevPosition = { top: this.position.top, left: this.position.left }),
          (this.prevSize = { width: this.size.width, height: this.size.height });
      },
      _applyChanges: function () {
        var t = {};
        return (
          this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
          this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
          this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
          this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
          this.helper.css(t),
          t
        );
      },
      _updateVirtualBoundaries: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a = this.options;
        (o = {
          minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
          maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
          minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
          maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0,
        }),
          (this._aspectRatio || t) &&
            ((e = o.minHeight * this.aspectRatio),
            (s = o.minWidth / this.aspectRatio),
            (i = o.maxHeight * this.aspectRatio),
            (n = o.maxWidth / this.aspectRatio),
            e > o.minWidth && (o.minWidth = e),
            s > o.minHeight && (o.minHeight = s),
            o.maxWidth > i && (o.maxWidth = i),
            o.maxHeight > n && (o.maxHeight = n)),
          (this._vBoundaries = o);
      },
      _updateCache: function (t) {
        (this.offset = this.helper.offset()),
          this._isNumber(t.left) && (this.position.left = t.left),
          this._isNumber(t.top) && (this.position.top = t.top),
          this._isNumber(t.height) && (this.size.height = t.height),
          this._isNumber(t.width) && (this.size.width = t.width);
      },
      _updateRatio: function (t) {
        var e = this.position,
          i = this.size,
          s = this.axis;
        return (
          this._isNumber(t.height)
            ? (t.width = t.height * this.aspectRatio)
            : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
          "sw" === s && ((t.left = e.left + (i.width - t.width)), (t.top = null)),
          "nw" === s && ((t.top = e.top + (i.height - t.height)), (t.left = e.left + (i.width - t.width))),
          t
        );
      },
      _respectSize: function (t) {
        var e = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.originalPosition.top + this.originalSize.height,
          l = /sw|nw|w/.test(i),
          c = /nw|ne|n/.test(i);
        return (
          o && (t.width = e.minWidth),
          a && (t.height = e.minHeight),
          s && (t.width = e.maxWidth),
          n && (t.height = e.maxHeight),
          o && l && (t.left = r - e.minWidth),
          s && l && (t.left = r - e.maxWidth),
          a && c && (t.top = h - e.minHeight),
          n && c && (t.top = h - e.maxHeight),
          t.width || t.height || t.left || !t.top
            ? t.width || t.height || t.top || !t.left || (t.left = null)
            : (t.top = null),
          t
        );
      },
      _getPaddingPlusBorderDimensions: function (t) {
        for (
          var e = 0,
            i = [],
            s = [
              t.css("borderTopWidth"),
              t.css("borderRightWidth"),
              t.css("borderBottomWidth"),
              t.css("borderLeftWidth"),
            ],
            n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")];
          4 > e;
          e++
        )
          (i[e] = parseFloat(s[e]) || 0), (i[e] += parseFloat(n[e]) || 0);
        return { height: i[0] + i[2], width: i[1] + i[3] };
      },
      _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length)
          for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++)
            (t = this._proportionallyResizeElements[e]),
              this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
              t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0,
              });
      },
      _renderProxy: function () {
        var e = this.element,
          i = this.options;
        (this.elementOffset = e.offset()),
          this._helper
            ? ((this.helper = this.helper || t("<div style='overflow:hidden;'></div>")),
              this._addClass(this.helper, this._helper),
              this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex,
              }),
              this.helper.appendTo("body").disableSelection())
            : (this.helper = this.element);
      },
      _change: {
        e: function (t, e) {
          return { width: this.originalSize.width + e };
        },
        w: function (t, e) {
          var i = this.originalSize,
            s = this.originalPosition;
          return { left: s.left + e, width: i.width - e };
        },
        n: function (t, e, i) {
          var s = this.originalSize,
            n = this.originalPosition;
          return { top: n.top + i, height: s.height - i };
        },
        s: function (t, e, i) {
          return { height: this.originalSize.height + i };
        },
        se: function (e, i, s) {
          return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
        },
        sw: function (e, i, s) {
          return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
        },
        ne: function (e, i, s) {
          return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
        },
        nw: function (e, i, s) {
          return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
        },
      },
      _propagate: function (e, i) {
        t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui());
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition,
        };
      },
    }),
    t.ui.plugin.add("resizable", "animate", {
      stop: function (e) {
        var i = t(this).resizable("instance"),
          s = i.options,
          n = i._proportionallyResizeElements,
          o = n.length && /textarea/i.test(n[0].nodeName),
          a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
          r = o ? 0 : i.sizeDiff.width,
          h = { width: i.size.width - r, height: i.size.height - a },
          l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
          c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
        i.element.animate(t.extend(h, c && l ? { top: c, left: l } : {}), {
          duration: s.animateDuration,
          easing: s.animateEasing,
          step: function () {
            var s = {
              width: parseFloat(i.element.css("width")),
              height: parseFloat(i.element.css("height")),
              top: parseFloat(i.element.css("top")),
              left: parseFloat(i.element.css("left")),
            };
            n && n.length && t(n[0]).css({ width: s.width, height: s.height }),
              i._updateCache(s),
              i._propagate("resize", e);
          },
        });
      },
    }),
    t.ui.plugin.add("resizable", "containment", {
      start: function () {
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h = t(this).resizable("instance"),
          l = h.options,
          c = h.element,
          u = l.containment,
          d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
        d &&
          ((h.containerElement = t(d)),
          /document/.test(u) || u === document
            ? ((h.containerOffset = { left: 0, top: 0 }),
              (h.containerPosition = { left: 0, top: 0 }),
              (h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight,
              }))
            : ((e = t(d)),
              (i = []),
              t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) {
                i[t] = h._num(e.css("padding" + s));
              }),
              (h.containerOffset = e.offset()),
              (h.containerPosition = e.position()),
              (h.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }),
              (s = h.containerOffset),
              (n = h.containerSize.height),
              (o = h.containerSize.width),
              (a = h._hasScroll(d, "left") ? d.scrollWidth : o),
              (r = h._hasScroll(d) ? d.scrollHeight : n),
              (h.parentData = { element: d, left: s.left, top: s.top, width: a, height: r })));
      },
      resize: function (e) {
        var i,
          s,
          n,
          o,
          a = t(this).resizable("instance"),
          r = a.options,
          h = a.containerOffset,
          l = a.position,
          c = a._aspectRatio || e.shiftKey,
          u = { top: 0, left: 0 },
          d = a.containerElement,
          p = !0;
        d[0] !== document && /static/.test(d.css("position")) && (u = h),
          l.left < (a._helper ? h.left : 0) &&
            ((a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left)),
            c && ((a.size.height = a.size.width / a.aspectRatio), (p = !1)),
            (a.position.left = r.helper ? h.left : 0)),
          l.top < (a._helper ? h.top : 0) &&
            ((a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top)),
            c && ((a.size.width = a.size.height * a.aspectRatio), (p = !1)),
            (a.position.top = a._helper ? h.top : 0)),
          (n = a.containerElement.get(0) === a.element.parent().get(0)),
          (o = /relative|absolute/.test(a.containerElement.css("position"))),
          n && o
            ? ((a.offset.left = a.parentData.left + a.position.left),
              (a.offset.top = a.parentData.top + a.position.top))
            : ((a.offset.left = a.element.offset().left), (a.offset.top = a.element.offset().top)),
          (i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left))),
          (s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top))),
          i + a.size.width >= a.parentData.width &&
            ((a.size.width = a.parentData.width - i), c && ((a.size.height = a.size.width / a.aspectRatio), (p = !1))),
          s + a.size.height >= a.parentData.height &&
            ((a.size.height = a.parentData.height - s),
            c && ((a.size.width = a.size.height * a.aspectRatio), (p = !1))),
          p ||
            ((a.position.left = a.prevPosition.left),
            (a.position.top = a.prevPosition.top),
            (a.size.width = a.prevSize.width),
            (a.size.height = a.prevSize.height));
      },
      stop: function () {
        var e = t(this).resizable("instance"),
          i = e.options,
          s = e.containerOffset,
          n = e.containerPosition,
          o = e.containerElement,
          a = t(e.helper),
          r = a.offset(),
          h = a.outerWidth() - e.sizeDiff.width,
          l = a.outerHeight() - e.sizeDiff.height;
        e._helper &&
          !i.animate &&
          /relative/.test(o.css("position")) &&
          t(this).css({ left: r.left - n.left - s.left, width: h, height: l }),
          e._helper &&
            !i.animate &&
            /static/.test(o.css("position")) &&
            t(this).css({ left: r.left - n.left - s.left, width: h, height: l });
      },
    }),
    t.ui.plugin.add("resizable", "alsoResize", {
      start: function () {
        var e = t(this).resizable("instance"),
          i = e.options;
        t(i.alsoResize).each(function () {
          var e = t(this);
          e.data("ui-resizable-alsoresize", {
            width: parseFloat(e.width()),
            height: parseFloat(e.height()),
            left: parseFloat(e.css("left")),
            top: parseFloat(e.css("top")),
          });
        });
      },
      resize: function (e, i) {
        var s = t(this).resizable("instance"),
          n = s.options,
          o = s.originalSize,
          a = s.originalPosition,
          r = {
            height: s.size.height - o.height || 0,
            width: s.size.width - o.width || 0,
            top: s.position.top - a.top || 0,
            left: s.position.left - a.left || 0,
          };
        t(n.alsoResize).each(function () {
          var e = t(this),
            s = t(this).data("ui-resizable-alsoresize"),
            n = {},
            o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
          t.each(o, function (t, e) {
            var i = (s[e] || 0) + (r[e] || 0);
            i && i >= 0 && (n[e] = i || null);
          }),
            e.css(n);
        });
      },
      stop: function () {
        t(this).removeData("ui-resizable-alsoresize");
      },
    }),
    t.ui.plugin.add("resizable", "ghost", {
      start: function () {
        var e = t(this).resizable("instance"),
          i = e.size;
        (e.ghost = e.originalElement.clone()),
          e.ghost.css({
            opacity: 0.25,
            display: "block",
            position: "relative",
            height: i.height,
            width: i.width,
            margin: 0,
            left: 0,
            top: 0,
          }),
          e._addClass(e.ghost, "ui-resizable-ghost"),
          t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost),
          e.ghost.appendTo(e.helper);
      },
      resize: function () {
        var e = t(this).resizable("instance");
        e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width });
      },
      stop: function () {
        var e = t(this).resizable("instance");
        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
      },
    }),
    t.ui.plugin.add("resizable", "grid", {
      resize: function () {
        var e,
          i = t(this).resizable("instance"),
          s = i.options,
          n = i.size,
          o = i.originalSize,
          a = i.originalPosition,
          r = i.axis,
          h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
          l = h[0] || 1,
          c = h[1] || 1,
          u = Math.round((n.width - o.width) / l) * l,
          d = Math.round((n.height - o.height) / c) * c,
          p = o.width + u,
          f = o.height + d,
          g = s.maxWidth && p > s.maxWidth,
          m = s.maxHeight && f > s.maxHeight,
          _ = s.minWidth && s.minWidth > p,
          v = s.minHeight && s.minHeight > f;
        (s.grid = h),
          _ && (p += l),
          v && (f += c),
          g && (p -= l),
          m && (f -= c),
          /^(se|s|e)$/.test(r)
            ? ((i.size.width = p), (i.size.height = f))
            : /^(ne)$/.test(r)
            ? ((i.size.width = p), (i.size.height = f), (i.position.top = a.top - d))
            : /^(sw)$/.test(r)
            ? ((i.size.width = p), (i.size.height = f), (i.position.left = a.left - u))
            : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)),
              f - c > 0
                ? ((i.size.height = f), (i.position.top = a.top - d))
                : ((f = c - e.height), (i.size.height = f), (i.position.top = a.top + o.height - f)),
              p - l > 0
                ? ((i.size.width = p), (i.position.left = a.left - u))
                : ((p = l - e.width), (i.size.width = p), (i.position.left = a.left + o.width - p)));
      },
    }),
    t.ui.resizable,
    t.widget("ui.dialog", {
      version: "1.12.1",
      options: {
        appendTo: "body",
        autoOpen: !0,
        buttons: [],
        classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" },
        closeOnEscape: !0,
        closeText: "Close",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center",
          at: "center",
          of: window,
          collision: "fit",
          using: function (e) {
            var i = t(this).css(e).offset().top;
            0 > i && t(this).css("top", e.top - i);
          },
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null,
      },
      sizeRelatedOptions: {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0,
      },
      resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
      _create: function () {
        (this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height,
        }),
          (this.originalPosition = {
            parent: this.element.parent(),
            index: this.element.parent().children().index(this.element),
          }),
          (this.originalTitle = this.element.attr("title")),
          null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
          this.options.disabled && (this.options.disabled = !1),
          this._createWrapper(),
          this.element.show().removeAttr("title").appendTo(this.uiDialog),
          this._addClass("ui-dialog-content", "ui-widget-content"),
          this._createTitlebar(),
          this._createButtonPane(),
          this.options.draggable && t.fn.draggable && this._makeDraggable(),
          this.options.resizable && t.fn.resizable && this._makeResizable(),
          (this._isOpen = !1),
          this._trackFocus();
      },
      _init: function () {
        this.options.autoOpen && this.open();
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
      },
      _destroy: function () {
        var t,
          e = this.originalPosition;
        this._untrackInstance(),
          this._destroyOverlay(),
          this.element.removeUniqueId().css(this.originalCss).detach(),
          this.uiDialog.remove(),
          this.originalTitle && this.element.attr("title", this.originalTitle),
          (t = e.parent.children().eq(e.index)),
          t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
      },
      widget: function () {
        return this.uiDialog;
      },
      disable: t.noop,
      enable: t.noop,
      close: function (e) {
        var i = this;
        this._isOpen &&
          this._trigger("beforeClose", e) !== !1 &&
          ((this._isOpen = !1),
          (this._focusedElement = null),
          this._destroyOverlay(),
          this._untrackInstance(),
          this.opener.filter(":focusable").trigger("focus").length ||
            t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
          this._hide(this.uiDialog, this.options.hide, function () {
            i._trigger("close", e);
          }));
      },
      isOpen: function () {
        return this._isOpen;
      },
      moveToTop: function () {
        this._moveToTop();
      },
      _moveToTop: function (e, i) {
        var s = !1,
          n = this.uiDialog
            .siblings(".ui-front:visible")
            .map(function () {
              return +t(this).css("z-index");
            })
            .get(),
          o = Math.max.apply(null, n);
        return (
          o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), (s = !0)),
          s && !i && this._trigger("focus", e),
          s
        );
      },
      open: function () {
        var e = this;
        return this._isOpen
          ? (this._moveToTop() && this._focusTabbable(), void 0)
          : ((this._isOpen = !0),
            (this.opener = t(t.ui.safeActiveElement(this.document[0]))),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, function () {
              e._focusTabbable(), e._trigger("focus");
            }),
            this._makeFocusTarget(),
            this._trigger("open"),
            void 0);
      },
      _focusTabbable: function () {
        var t = this._focusedElement;
        t || (t = this.element.find("[autofocus]")),
          t.length || (t = this.element.find(":tabbable")),
          t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
          t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
          t.length || (t = this.uiDialog),
          t.eq(0).trigger("focus");
      },
      _keepFocus: function (e) {
        function i() {
          var e = t.ui.safeActiveElement(this.document[0]),
            i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
          i || this._focusTabbable();
        }
        e.preventDefault(), i.call(this), this._delay(i);
      },
      _createWrapper: function () {
        (this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo())),
          this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
          this._on(this.uiDialog, {
            keydown: function (e) {
              if (
                this.options.closeOnEscape &&
                !e.isDefaultPrevented() &&
                e.keyCode &&
                e.keyCode === t.ui.keyCode.ESCAPE
              )
                return e.preventDefault(), this.close(e), void 0;
              if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                var i = this.uiDialog.find(":tabbable"),
                  s = i.filter(":first"),
                  n = i.filter(":last");
                (e.target !== n[0] && e.target !== this.uiDialog[0]) || e.shiftKey
                  ? (e.target !== s[0] && e.target !== this.uiDialog[0]) ||
                    !e.shiftKey ||
                    (this._delay(function () {
                      n.trigger("focus");
                    }),
                    e.preventDefault())
                  : (this._delay(function () {
                      s.trigger("focus");
                    }),
                    e.preventDefault());
              }
            },
            mousedown: function (t) {
              this._moveToTop(t) && this._focusTabbable();
            },
          }),
          this.element.find("[aria-describedby]").length ||
            this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") });
      },
      _createTitlebar: function () {
        var e;
        (this.uiDialogTitlebar = t("<div>")),
          this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
          this._on(this.uiDialogTitlebar, {
            mousedown: function (e) {
              t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
            },
          }),
          (this.uiDialogTitlebarClose = t("<button type='button'></button>")
            .button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 })
            .appendTo(this.uiDialogTitlebar)),
          this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
          this._on(this.uiDialogTitlebarClose, {
            click: function (t) {
              t.preventDefault(), this.close(t);
            },
          }),
          (e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
          this._addClass(e, "ui-dialog-title"),
          this._title(e),
          this.uiDialogTitlebar.prependTo(this.uiDialog),
          this.uiDialog.attr({ "aria-labelledby": e.attr("id") });
      },
      _title: function (t) {
        this.options.title ? t.text(this.options.title) : t.html("&#160;");
      },
      _createButtonPane: function () {
        (this.uiDialogButtonPane = t("<div>")),
          this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
          (this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane)),
          this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
          this._createButtons();
      },
      _createButtons: function () {
        var e = this,
          i = this.options.buttons;
        return (
          this.uiDialogButtonPane.remove(),
          this.uiButtonSet.empty(),
          t.isEmptyObject(i) || (t.isArray(i) && !i.length)
            ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0)
            : (t.each(i, function (i, s) {
                var n, o;
                (s = t.isFunction(s) ? { click: s, text: i } : s),
                  (s = t.extend({ type: "button" }, s)),
                  (n = s.click),
                  (o = {
                    icon: s.icon,
                    iconPosition: s.iconPosition,
                    showLabel: s.showLabel,
                    icons: s.icons,
                    text: s.text,
                  }),
                  delete s.click,
                  delete s.icon,
                  delete s.iconPosition,
                  delete s.showLabel,
                  delete s.icons,
                  "boolean" == typeof s.text && delete s.text,
                  t("<button></button>", s)
                    .button(o)
                    .appendTo(e.uiButtonSet)
                    .on("click", function () {
                      n.apply(e.element[0], arguments);
                    });
              }),
              this._addClass(this.uiDialog, "ui-dialog-buttons"),
              this.uiDialogButtonPane.appendTo(this.uiDialog),
              void 0)
        );
      },
      _makeDraggable: function () {
        function e(t) {
          return { position: t.position, offset: t.offset };
        }
        var i = this,
          s = this.options;
        this.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function (s, n) {
            i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n));
          },
          drag: function (t, s) {
            i._trigger("drag", t, e(s));
          },
          stop: function (n, o) {
            var a = o.offset.left - i.document.scrollLeft(),
              r = o.offset.top - i.document.scrollTop();
            (s.position = {
              my: "left top",
              at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
              of: i.window,
            }),
              i._removeClass(t(this), "ui-dialog-dragging"),
              i._unblockFrames(),
              i._trigger("dragStop", n, e(o));
          },
        });
      },
      _makeResizable: function () {
        function e(t) {
          return {
            originalPosition: t.originalPosition,
            originalSize: t.originalSize,
            position: t.position,
            size: t.size,
          };
        }
        var i = this,
          s = this.options,
          n = s.resizable,
          o = this.uiDialog.css("position"),
          a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
        this.uiDialog
          .resizable({
            cancel: ".ui-dialog-content",
            containment: "document",
            alsoResize: this.element,
            maxWidth: s.maxWidth,
            maxHeight: s.maxHeight,
            minWidth: s.minWidth,
            minHeight: this._minHeight(),
            handles: a,
            start: function (s, n) {
              i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n));
            },
            resize: function (t, s) {
              i._trigger("resize", t, e(s));
            },
            stop: function (n, o) {
              var a = i.uiDialog.offset(),
                r = a.left - i.document.scrollLeft(),
                h = a.top - i.document.scrollTop();
              (s.height = i.uiDialog.height()),
                (s.width = i.uiDialog.width()),
                (s.position = {
                  my: "left top",
                  at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
                  of: i.window,
                }),
                i._removeClass(t(this), "ui-dialog-resizing"),
                i._unblockFrames(),
                i._trigger("resizeStop", n, e(o));
            },
          })
          .css("position", o);
      },
      _trackFocus: function () {
        this._on(this.widget(), {
          focusin: function (e) {
            this._makeFocusTarget(), (this._focusedElement = t(e.target));
          },
        });
      },
      _makeFocusTarget: function () {
        this._untrackInstance(), this._trackingInstances().unshift(this);
      },
      _untrackInstance: function () {
        var e = this._trackingInstances(),
          i = t.inArray(this, e);
        -1 !== i && e.splice(i, 1);
      },
      _trackingInstances: function () {
        var t = this.document.data("ui-dialog-instances");
        return t || ((t = []), this.document.data("ui-dialog-instances", t)), t;
      },
      _minHeight: function () {
        var t = this.options;
        return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
      },
      _position: function () {
        var t = this.uiDialog.is(":visible");
        t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
      },
      _setOptions: function (e) {
        var i = this,
          s = !1,
          n = {};
        t.each(e, function (t, e) {
          i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
        }),
          s && (this._size(), this._position()),
          this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
      },
      _setOption: function (e, i) {
        var s,
          n,
          o = this.uiDialog;
        "disabled" !== e &&
          (this._super(e, i),
          "appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
          "buttons" === e && this._createButtons(),
          "closeText" === e &&
            this.uiDialogTitlebarClose.button({
              label: t("<a>")
                .text("" + this.options.closeText)
                .html(),
            }),
          "draggable" === e &&
            ((s = o.is(":data(ui-draggable)")), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()),
          "position" === e && this._position(),
          "resizable" === e &&
            ((n = o.is(":data(ui-resizable)")),
            n && !i && o.resizable("destroy"),
            n && "string" == typeof i && o.resizable("option", "handles", i),
            n || i === !1 || this._makeResizable()),
          "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
      },
      _size: function () {
        var t,
          e,
          i,
          s = this.options;
        this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
          s.minWidth > s.width && (s.width = s.minWidth),
          (t = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight()),
          (e = Math.max(0, s.minHeight - t)),
          (i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none"),
          "auto" === s.height
            ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
            : this.element.height(Math.max(0, s.height - t)),
          this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
      },
      _blockFrames: function () {
        this.iframeBlocks = this.document.find("iframe").map(function () {
          var e = t(this);
          return t("<div>")
            .css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() })
            .appendTo(e.parent())
            .offset(e.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _allowInteraction: function (e) {
        return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length;
      },
      _createOverlay: function () {
        if (this.options.modal) {
          var e = !0;
          this._delay(function () {
            e = !1;
          }),
            this.document.data("ui-dialog-overlays") ||
              this._on(this.document, {
                focusin: function (t) {
                  e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                },
              }),
            (this.overlay = t("<div>").appendTo(this._appendTo())),
            this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
            this._on(this.overlay, { mousedown: "_keepFocus" }),
            this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
        }
      },
      _destroyOverlay: function () {
        if (this.options.modal && this.overlay) {
          var t = this.document.data("ui-dialog-overlays") - 1;
          t
            ? this.document.data("ui-dialog-overlays", t)
            : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")),
            this.overlay.remove(),
            (this.overlay = null);
        }
      },
    }),
    t.uiBackCompat !== !1 &&
      t.widget("ui.dialog", t.ui.dialog, {
        options: { dialogClass: "" },
        _createWrapper: function () {
          this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function (t, e) {
          "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
            this._superApply(arguments);
        },
      }),
    t.ui.dialog,
    t.widget("ui.droppable", {
      version: "1.12.1",
      widgetEventPrefix: "drop",
      options: {
        accept: "*",
        addClasses: !0,
        greedy: !1,
        scope: "default",
        tolerance: "intersect",
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null,
      },
      _create: function () {
        var e,
          i = this.options,
          s = i.accept;
        (this.isover = !1),
          (this.isout = !0),
          (this.accept = t.isFunction(s)
            ? s
            : function (t) {
                return t.is(s);
              }),
          (this.proportions = function () {
            return arguments.length
              ? ((e = arguments[0]), void 0)
              : e
              ? e
              : (e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight });
          }),
          this._addToManager(i.scope),
          i.addClasses && this._addClass("ui-droppable");
      },
      _addToManager: function (e) {
        (t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []), t.ui.ddmanager.droppables[e].push(this);
      },
      _splice: function (t) {
        for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
      },
      _destroy: function () {
        var e = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(e);
      },
      _setOption: function (e, i) {
        if ("accept" === e)
          this.accept = t.isFunction(i)
            ? i
            : function (t) {
                return t.is(i);
              };
        else if ("scope" === e) {
          var s = t.ui.ddmanager.droppables[this.options.scope];
          this._splice(s), this._addToManager(i);
        }
        this._super(e, i);
      },
      _activate: function (e) {
        var i = t.ui.ddmanager.current;
        this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
      },
      _deactivate: function (e) {
        var i = t.ui.ddmanager.current;
        this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i));
      },
      _over: function (e) {
        var i = t.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
      },
      _out: function (e) {
        var i = t.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
      },
      _drop: function (e, i) {
        var s = i || t.ui.ddmanager.current,
          n = !1;
        return s && (s.currentItem || s.element)[0] !== this.element[0]
          ? (this.element
              .find(":data(ui-droppable)")
              .not(".ui-draggable-dragging")
              .each(function () {
                var i = t(this).droppable("instance");
                return i.options.greedy &&
                  !i.options.disabled &&
                  i.options.scope === s.options.scope &&
                  i.accept.call(i.element[0], s.currentItem || s.element) &&
                  v(s, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e)
                  ? ((n = !0), !1)
                  : void 0;
              }),
            n
              ? !1
              : this.accept.call(this.element[0], s.currentItem || s.element)
              ? (this._removeActiveClass(),
                this._removeHoverClass(),
                this._trigger("drop", e, this.ui(s)),
                this.element)
              : !1)
          : !1;
      },
      ui: function (t) {
        return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs };
      },
      _addHoverClass: function () {
        this._addClass("ui-droppable-hover");
      },
      _removeHoverClass: function () {
        this._removeClass("ui-droppable-hover");
      },
      _addActiveClass: function () {
        this._addClass("ui-droppable-active");
      },
      _removeActiveClass: function () {
        this._removeClass("ui-droppable-active");
      },
    });
  var v = (t.ui.intersect = (function () {
    function t(t, e, i) {
      return t >= e && e + i > t;
    }
    return function (e, i, s, n) {
      if (!i.offset) return !1;
      var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
        a = (e.positionAbs || e.position.absolute).top + e.margins.top,
        r = o + e.helperProportions.width,
        h = a + e.helperProportions.height,
        l = i.offset.left,
        c = i.offset.top,
        u = l + i.proportions().width,
        d = c + i.proportions().height;
      switch (s) {
        case "fit":
          return o >= l && u >= r && a >= c && d >= h;
        case "intersect":
          return (
            o + e.helperProportions.width / 2 > l &&
            u > r - e.helperProportions.width / 2 &&
            a + e.helperProportions.height / 2 > c &&
            d > h - e.helperProportions.height / 2
          );
        case "pointer":
          return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
        case "touch":
          return (
            ((a >= c && d >= a) || (h >= c && d >= h) || (c > a && h > d)) &&
            ((o >= l && u >= o) || (r >= l && u >= r) || (l > o && r > u))
          );
        default:
          return !1;
      }
    };
  })());
  (t.ui.ddmanager = {
    current: null,
    droppables: { default: [] },
    prepareOffsets: function (e, i) {
      var s,
        n,
        o = t.ui.ddmanager.droppables[e.options.scope] || [],
        a = i ? i.type : null,
        r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
      t: for (s = 0; o.length > s; s++)
        if (!(o[s].options.disabled || (e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element)))) {
          for (n = 0; r.length > n; n++)
            if (r[n] === o[s].element[0]) {
              o[s].proportions().height = 0;
              continue t;
            }
          (o[s].visible = "none" !== o[s].element.css("display")),
            o[s].visible &&
              ("mousedown" === a && o[s]._activate.call(o[s], i),
              (o[s].offset = o[s].element.offset()),
              o[s].proportions({ width: o[s].element[0].offsetWidth, height: o[s].element[0].offsetHeight }));
        }
    },
    drop: function (e, i) {
      var s = !1;
      return (
        t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
          this.options &&
            (!this.options.disabled &&
              this.visible &&
              v(e, this, this.options.tolerance, i) &&
              (s = this._drop.call(this, i) || s),
            !this.options.disabled &&
              this.visible &&
              this.accept.call(this.element[0], e.currentItem || e.element) &&
              ((this.isout = !0), (this.isover = !1), this._deactivate.call(this, i)));
        }),
        s
      );
    },
    dragStart: function (e, i) {
      e.element.parentsUntil("body").on("scroll.droppable", function () {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      });
    },
    drag: function (e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
        t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
          if (!this.options.disabled && !this.greedyChild && this.visible) {
            var s,
              n,
              o,
              a = v(e, this, this.options.tolerance, i),
              r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
            r &&
              (this.options.greedy &&
                ((n = this.options.scope),
                (o = this.element.parents(":data(ui-droppable)").filter(function () {
                  return t(this).droppable("instance").options.scope === n;
                })),
                o.length && ((s = t(o[0]).droppable("instance")), (s.greedyChild = "isover" === r))),
              s && "isover" === r && ((s.isover = !1), (s.isout = !0), s._out.call(s, i)),
              (this[r] = !0),
              (this["isout" === r ? "isover" : "isout"] = !1),
              this["isover" === r ? "_over" : "_out"].call(this, i),
              s && "isout" === r && ((s.isout = !1), (s.isover = !0), s._over.call(s, i)));
          }
        });
    },
    dragStop: function (e, i) {
      e.element.parentsUntil("body").off("scroll.droppable"),
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
    },
  }),
    t.uiBackCompat !== !1 &&
      t.widget("ui.droppable", t.ui.droppable, {
        options: { hoverClass: !1, activeClass: !1 },
        _addActiveClass: function () {
          this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function () {
          this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function () {
          this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function () {
          this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
        },
      }),
    t.ui.droppable,
    t.widget("ui.progressbar", {
      version: "1.12.1",
      options: {
        classes: {
          "ui-progressbar": "ui-corner-all",
          "ui-progressbar-value": "ui-corner-left",
          "ui-progressbar-complete": "ui-corner-right",
        },
        max: 100,
        value: 0,
        change: null,
        complete: null,
      },
      min: 0,
      _create: function () {
        (this.oldValue = this.options.value = this._constrainedValue()),
          this.element.attr({ role: "progressbar", "aria-valuemin": this.min }),
          this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
          (this.valueDiv = t("<div>").appendTo(this.element)),
          this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
          this._refreshValue();
      },
      _destroy: function () {
        this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
      },
      value: function (t) {
        return void 0 === t
          ? this.options.value
          : ((this.options.value = this._constrainedValue(t)), this._refreshValue(), void 0);
      },
      _constrainedValue: function (t) {
        return (
          void 0 === t && (t = this.options.value),
          (this.indeterminate = t === !1),
          "number" != typeof t && (t = 0),
          this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        );
      },
      _setOptions: function (t) {
        var e = t.value;
        delete t.value, this._super(t), (this.options.value = this._constrainedValue(e)), this._refreshValue();
      },
      _setOption: function (t, e) {
        "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _percentage: function () {
        return this.indeterminate ? 100 : (100 * (this.options.value - this.min)) / (this.options.max - this.min);
      },
      _refreshValue: function () {
        var e = this.options.value,
          i = this._percentage();
        this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"),
          this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass(
            "ui-progressbar-indeterminate",
            null,
            this.indeterminate
          ),
          this.indeterminate
            ? (this.element.removeAttr("aria-valuenow"),
              this.overlayDiv ||
                ((this.overlayDiv = t("<div>").appendTo(this.valueDiv)),
                this._addClass(this.overlayDiv, "ui-progressbar-overlay")))
            : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }),
              this.overlayDiv && (this.overlayDiv.remove(), (this.overlayDiv = null))),
          this.oldValue !== e && ((this.oldValue = e), this._trigger("change")),
          e === this.options.max && this._trigger("complete");
      },
    }),
    t.widget("ui.selectable", t.ui.mouse, {
      version: "1.12.1",
      options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null,
      },
      _create: function () {
        var e = this;
        this._addClass("ui-selectable"),
          (this.dragged = !1),
          (this.refresh = function () {
            (e.elementPos = t(e.element[0]).offset()),
              (e.selectees = t(e.options.filter, e.element[0])),
              e._addClass(e.selectees, "ui-selectee"),
              e.selectees.each(function () {
                var i = t(this),
                  s = i.offset(),
                  n = { left: s.left - e.elementPos.left, top: s.top - e.elementPos.top };
                t.data(this, "selectable-item", {
                  element: this,
                  $element: i,
                  left: n.left,
                  top: n.top,
                  right: n.left + i.outerWidth(),
                  bottom: n.top + i.outerHeight(),
                  startselected: !1,
                  selected: i.hasClass("ui-selected"),
                  selecting: i.hasClass("ui-selecting"),
                  unselecting: i.hasClass("ui-unselecting"),
                });
              });
          }),
          this.refresh(),
          this._mouseInit(),
          (this.helper = t("<div>")),
          this._addClass(this.helper, "ui-selectable-helper");
      },
      _destroy: function () {
        this.selectees.removeData("selectable-item"), this._mouseDestroy();
      },
      _mouseStart: function (e) {
        var i = this,
          s = this.options;
        (this.opos = [e.pageX, e.pageY]),
          (this.elementPos = t(this.element[0]).offset()),
          this.options.disabled ||
            ((this.selectees = t(s.filter, this.element[0])),
            this._trigger("start", e),
            t(s.appendTo).append(this.helper),
            this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }),
            s.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function () {
              var s = t.data(this, "selectable-item");
              (s.startselected = !0),
                e.metaKey ||
                  e.ctrlKey ||
                  (i._removeClass(s.$element, "ui-selected"),
                  (s.selected = !1),
                  i._addClass(s.$element, "ui-unselecting"),
                  (s.unselecting = !0),
                  i._trigger("unselecting", e, { unselecting: s.element }));
            }),
            t(e.target)
              .parents()
              .addBack()
              .each(function () {
                var s,
                  n = t.data(this, "selectable-item");
                return n
                  ? ((s = (!e.metaKey && !e.ctrlKey) || !n.$element.hasClass("ui-selected")),
                    i
                      ._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")
                      ._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"),
                    (n.unselecting = !s),
                    (n.selecting = s),
                    (n.selected = s),
                    s
                      ? i._trigger("selecting", e, { selecting: n.element })
                      : i._trigger("unselecting", e, { unselecting: n.element }),
                    !1)
                  : void 0;
              }));
      },
      _mouseDrag: function (e) {
        if (((this.dragged = !0), !this.options.disabled)) {
          var i,
            s = this,
            n = this.options,
            o = this.opos[0],
            a = this.opos[1],
            r = e.pageX,
            h = e.pageY;
          return (
            o > r && ((i = r), (r = o), (o = i)),
            a > h && ((i = h), (h = a), (a = i)),
            this.helper.css({ left: o, top: a, width: r - o, height: h - a }),
            this.selectees.each(function () {
              var i = t.data(this, "selectable-item"),
                l = !1,
                c = {};
              i &&
                i.element !== s.element[0] &&
                ((c.left = i.left + s.elementPos.left),
                (c.right = i.right + s.elementPos.left),
                (c.top = i.top + s.elementPos.top),
                (c.bottom = i.bottom + s.elementPos.top),
                "touch" === n.tolerance
                  ? (l = !(c.left > r || o > c.right || c.top > h || a > c.bottom))
                  : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom),
                l
                  ? (i.selected && (s._removeClass(i.$element, "ui-selected"), (i.selected = !1)),
                    i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), (i.unselecting = !1)),
                    i.selecting ||
                      (s._addClass(i.$element, "ui-selecting"),
                      (i.selecting = !0),
                      s._trigger("selecting", e, { selecting: i.element })))
                  : (i.selecting &&
                      ((e.metaKey || e.ctrlKey) && i.startselected
                        ? (s._removeClass(i.$element, "ui-selecting"),
                          (i.selecting = !1),
                          s._addClass(i.$element, "ui-selected"),
                          (i.selected = !0))
                        : (s._removeClass(i.$element, "ui-selecting"),
                          (i.selecting = !1),
                          i.startselected && (s._addClass(i.$element, "ui-unselecting"), (i.unselecting = !0)),
                          s._trigger("unselecting", e, { unselecting: i.element }))),
                    i.selected &&
                      (e.metaKey ||
                        e.ctrlKey ||
                        i.startselected ||
                        (s._removeClass(i.$element, "ui-selected"),
                        (i.selected = !1),
                        s._addClass(i.$element, "ui-unselecting"),
                        (i.unselecting = !0),
                        s._trigger("unselecting", e, { unselecting: i.element })))));
            }),
            !1
          );
        }
      },
      _mouseStop: function (e) {
        var i = this;
        return (
          (this.dragged = !1),
          t(".ui-unselecting", this.element[0]).each(function () {
            var s = t.data(this, "selectable-item");
            i._removeClass(s.$element, "ui-unselecting"),
              (s.unselecting = !1),
              (s.startselected = !1),
              i._trigger("unselected", e, { unselected: s.element });
          }),
          t(".ui-selecting", this.element[0]).each(function () {
            var s = t.data(this, "selectable-item");
            i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"),
              (s.selecting = !1),
              (s.selected = !0),
              (s.startselected = !0),
              i._trigger("selected", e, { selected: s.element });
          }),
          this._trigger("stop", e),
          this.helper.remove(),
          !1
        );
      },
    }),
    t.widget("ui.selectmenu", [
      t.ui.formResetMixin,
      {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
          appendTo: null,
          classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" },
          disabled: null,
          icons: { button: "ui-icon-triangle-1-s" },
          position: { my: "left top", at: "left bottom", collision: "none" },
          width: !1,
          change: null,
          close: null,
          focus: null,
          open: null,
          select: null,
        },
        _create: function () {
          var e = this.element.uniqueId().attr("id");
          (this.ids = { element: e, button: e + "-button", menu: e + "-menu" }),
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            (this._rendered = !1),
            (this.menuItems = t());
        },
        _drawButton: function () {
          var e,
            i = this,
            s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
          (this.labels = this.element.labels().attr("for", this.ids.button)),
            this._on(this.labels, {
              click: function (t) {
                this.button.focus(), t.preventDefault();
              },
            }),
            this.element.hide(),
            (this.button = t("<span>", {
              tabindex: this.options.disabled ? -1 : 0,
              id: this.ids.button,
              role: "combobox",
              "aria-expanded": "false",
              "aria-autocomplete": "list",
              "aria-owns": this.ids.menu,
              "aria-haspopup": "true",
              title: this.element.attr("title"),
            }).insertAfter(this.element)),
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"),
            (e = t("<span>").appendTo(this.button)),
            this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button),
            (this.buttonItem = this._renderButtonItem(s).appendTo(this.button)),
            this.options.width !== !1 && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", function () {
              i._rendered || i._refreshMenu();
            });
        },
        _drawMenu: function () {
          var e = this;
          (this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu })),
            (this.menuWrap = t("<div>").append(this.menu)),
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
            this.menuWrap.appendTo(this._appendTo()),
            (this.menuInstance = this.menu
              .menu({
                classes: { "ui-menu": "ui-corner-bottom" },
                role: "listbox",
                select: function (t, i) {
                  t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
                },
                focus: function (t, i) {
                  var s = i.item.data("ui-selectmenu-item");
                  null != e.focusIndex &&
                    s.index !== e.focusIndex &&
                    (e._trigger("focus", t, { item: s }), e.isOpen || e._select(s, t)),
                    (e.focusIndex = s.index),
                    e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"));
                },
              })
              .menu("instance")),
            this.menuInstance._off(this.menu, "mouseleave"),
            (this.menuInstance._closeOnDocumentClick = function () {
              return !1;
            }),
            (this.menuInstance._isDivider = function () {
              return !1;
            });
        },
        refresh: function () {
          this._refreshMenu(),
            this.buttonItem.replaceWith(
              (this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}))
            ),
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function () {
          var t,
            e = this.element.find("option");
          this.menu.empty(),
            this._parseOptions(e),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            (this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper")),
            (this._rendered = !0),
            e.length &&
              ((t = this._getSelectedItem()),
              this.menuInstance.focus(null, t),
              this._setAria(t.data("ui-selectmenu-item")),
              this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function (t) {
          this.options.disabled ||
            (this._rendered
              ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
                this.menuInstance.focus(null, this._getSelectedItem()))
              : this._refreshMenu(),
            this.menuItems.length &&
              ((this.isOpen = !0),
              this._toggleAttr(),
              this._resizeMenu(),
              this._position(),
              this._on(this.document, this._documentClick),
              this._trigger("open", t)));
        },
        _position: function () {
          this.menuWrap.position(t.extend({ of: this.button }, this.options.position));
        },
        close: function (t) {
          this.isOpen &&
            ((this.isOpen = !1),
            this._toggleAttr(),
            (this.range = null),
            this._off(this.document),
            this._trigger("close", t));
        },
        widget: function () {
          return this.button;
        },
        menuWidget: function () {
          return this.menu;
        },
        _renderButtonItem: function (e) {
          var i = t("<span>");
          return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
        },
        _renderMenu: function (e, i) {
          var s = this,
            n = "";
          t.each(i, function (i, o) {
            var a;
            o.optgroup !== n &&
              ((a = t("<li>", { text: o.optgroup })),
              s._addClass(
                a,
                "ui-selectmenu-optgroup",
                "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")
              ),
              a.appendTo(e),
              (n = o.optgroup)),
              s._renderItemData(e, o);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function (e, i) {
          var s = t("<li>"),
            n = t("<div>", { title: i.element.attr("title") });
          return (
            i.disabled && this._addClass(s, null, "ui-state-disabled"),
            this._setText(n, i.label),
            s.append(n).appendTo(e)
          );
        },
        _setText: function (t, e) {
          e ? t.text(e) : t.html("&#160;");
        },
        _move: function (t, e) {
          var i,
            s,
            n = ".ui-menu-item";
          this.isOpen
            ? (i = this.menuItems.eq(this.focusIndex).parent("li"))
            : ((i = this.menuItems.eq(this.element[0].selectedIndex).parent("li")), (n += ":not(.ui-state-disabled)")),
            (s =
              "first" === t || "last" === t
                ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1)
                : i[t + "All"](n).eq(0)),
            s.length && this.menuInstance.focus(e, s);
        },
        _getSelectedItem: function () {
          return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function (t) {
          this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function () {
          var t;
          this.range &&
            (window.getSelection
              ? ((t = window.getSelection()), t.removeAllRanges(), t.addRange(this.range))
              : this.range.select(),
            this.button.focus());
        },
        _documentClick: {
          mousedown: function (e) {
            this.isOpen &&
              (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length ||
                this.close(e));
          },
        },
        _buttonEvents: {
          mousedown: function () {
            var t;
            window.getSelection
              ? ((t = window.getSelection()), t.rangeCount && (this.range = t.getRangeAt(0)))
              : (this.range = document.selection.createRange());
          },
          click: function (t) {
            this._setSelection(), this._toggle(t);
          },
          keydown: function (e) {
            var i = !0;
            switch (e.keyCode) {
              case t.ui.keyCode.TAB:
              case t.ui.keyCode.ESCAPE:
                this.close(e), (i = !1);
                break;
              case t.ui.keyCode.ENTER:
                this.isOpen && this._selectFocusedItem(e);
                break;
              case t.ui.keyCode.UP:
                e.altKey ? this._toggle(e) : this._move("prev", e);
                break;
              case t.ui.keyCode.DOWN:
                e.altKey ? this._toggle(e) : this._move("next", e);
                break;
              case t.ui.keyCode.SPACE:
                this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                break;
              case t.ui.keyCode.LEFT:
                this._move("prev", e);
                break;
              case t.ui.keyCode.RIGHT:
                this._move("next", e);
                break;
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.PAGE_UP:
                this._move("first", e);
                break;
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_DOWN:
                this._move("last", e);
                break;
              default:
                this.menu.trigger(e), (i = !1);
            }
            i && e.preventDefault();
          },
        },
        _selectFocusedItem: function (t) {
          var e = this.menuItems.eq(this.focusIndex).parent("li");
          e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function (t, e) {
          var i = this.element[0].selectedIndex;
          (this.element[0].selectedIndex = t.index),
            this.buttonItem.replaceWith((this.buttonItem = this._renderButtonItem(t))),
            this._setAria(t),
            this._trigger("select", e, { item: t }),
            t.index !== i && this._trigger("change", e, { item: t }),
            this.close(e);
        },
        _setAria: function (t) {
          var e = this.menuItems.eq(t.index).attr("id");
          this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }),
            this.menu.attr("aria-activedescendant", e);
        },
        _setOption: function (t, e) {
          if ("icons" === t) {
            var i = this.button.find("span.ui-icon");
            this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
          }
          this._super(t, e),
            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
            "width" === t && this._resizeButton();
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.menuInstance.option("disabled", t),
            this.button.attr("aria-disabled", t),
            this._toggleClass(this.button, null, "ui-state-disabled", t),
            this.element.prop("disabled", t),
            t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _toggleAttr: function () {
          this.button.attr("aria-expanded", this.isOpen),
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))
              ._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))
              ._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen),
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function () {
          var t = this.options.width;
          return t === !1
            ? (this.button.css("width", ""), void 0)
            : (null === t && ((t = this.element.show().outerWidth()), this.element.hide()),
              this.button.outerWidth(t),
              void 0);
        },
        _resizeMenu: function () {
          this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function () {
          var t = this._super();
          return (t.disabled = this.element.prop("disabled")), t;
        },
        _parseOptions: function (e) {
          var i = this,
            s = [];
          e.each(function (e, n) {
            s.push(i._parseOption(t(n), e));
          }),
            (this.items = s);
        },
        _parseOption: function (t, e) {
          var i = t.parent("optgroup");
          return {
            element: t,
            index: e,
            value: t.val(),
            label: t.text(),
            optgroup: i.attr("label") || "",
            disabled: i.prop("disabled") || t.prop("disabled"),
          };
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr("for", this.ids.element);
        },
      },
    ]),
    t.widget("ui.slider", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        classes: {
          "ui-slider": "ui-corner-all",
          "ui-slider-handle": "ui-corner-all",
          "ui-slider-range": "ui-corner-all ui-widget-header",
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
          this._refresh(),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
      },
      _createHandles: function () {
        var e,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle"),
          o = "<span tabindex='0'></span>",
          a = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            e = n.length;
          i > e;
          e++
        )
          a.push(o);
        (this.handles = n.add(t(a.join("")).appendTo(this.element))),
          this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (e) {
            t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
          });
      },
      _createRange: function () {
        var e = this.options;
        e.range
          ? (e.range === !0 &&
              (e.values
                ? e.values.length && 2 !== e.values.length
                  ? (e.values = [e.values[0], e.values[0]])
                  : t.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
                this.range.css({ left: "", bottom: "" }))
              : ((this.range = t("<div>").appendTo(this.element)), this._addClass(this.range, "ui-slider-range")),
            ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c = this,
          u = this.options;
        return u.disabled
          ? !1
          : ((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (s = this._normValueFromMouse(i)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(s - c.values(e));
              (n > i || (n === i && (e === c._lastChangedValue || c.values(e) === u.min))) &&
                ((n = i), (o = t(this)), (a = e));
            }),
            (r = this._start(e, a)),
            r === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = a),
                this._addClass(o, null, "ui-state-active"),
                o.trigger("focus"),
                (h = o.offset()),
                (l = !t(e.target).parents().addBack().is(".ui-slider-handle")),
                (this._clickOffset = l
                  ? { left: 0, top: 0 }
                  : {
                      left: e.pageX - h.left - o.width() / 2,
                      top:
                        e.pageY -
                        h.top -
                        o.height() / 2 -
                        (parseInt(o.css("borderTopWidth"), 10) || 0) -
                        (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                        (parseInt(o.css("marginTop"), 10) || 0),
                    }),
                this.handles.hasClass("ui-state-hover") || this._slide(e, a, s),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1;
      },
      _mouseStop: function (t) {
        return (
          this._removeClass(this.handles, null, "ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (t) {
        var e, i, s, n, o;
        return (
          "horizontal" === this.orientation
            ? ((e = this.elementSize.width),
              (i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)))
            : ((e = this.elementSize.height),
              (i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / e),
          s > 1 && (s = 1),
          0 > s && (s = 0),
          "vertical" === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (o = this._valueMin() + s * n),
          this._trimAlignValue(o)
        );
      },
      _uiHash: function (t, e, i) {
        var s = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() };
        return (
          this._hasMultipleValues() && ((s.value = void 0 !== e ? e : this.values(t)), (s.values = i || this.values())),
          s
        );
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length;
      },
      _start: function (t, e) {
        return this._trigger("start", t, this._uiHash(e));
      },
      _slide: function (t, e, i) {
        var s,
          n,
          o = this.value(),
          a = this.values();
        this._hasMultipleValues() &&
          ((n = this.values(e ? 0 : 1)),
          (o = this.values(e)),
          2 === this.options.values.length &&
            this.options.range === !0 &&
            (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
          (a[e] = i)),
          i !== o &&
            ((s = this._trigger("slide", t, this._uiHash(e, i, a))),
            s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
      },
      _stop: function (t, e) {
        this._trigger("stop", t, this._uiHash(e));
      },
      _change: function (t, e) {
        this._keySliding ||
          this._mouseSliding ||
          ((this._lastChangedValue = e), this._trigger("change", t, this._uiHash(e)));
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)), this._refreshValue(), this._change(null, 0), void 0)
          : this._value();
      },
      values: function (e, i) {
        var s, n, o;
        if (arguments.length > 1)
          return (
            (this.options.values[e] = this._trimAlignValue(i)), this._refreshValue(), this._change(null, e), void 0
          );
        if (!arguments.length) return this._values();
        if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
        for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1)
          (s[o] = this._trimAlignValue(n[o])), this._change(null, o);
        this._refreshValue();
      },
      _setOption: function (e, i) {
        var s,
          n = 0;
        switch (
          ("range" === e &&
            this.options.range === !0 &&
            ("min" === i
              ? ((this.options.value = this._values(0)), (this.options.values = null))
              : "max" === i &&
                ((this.options.value = this._values(this.options.values.length - 1)), (this.options.values = null))),
          t.isArray(this.options.values) && (n = this.options.values.length),
          this._super(e, i),
          e)
        ) {
          case "orientation":
            this._detectOrientation(),
              this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.options.range && this._refreshRange(i),
              this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
            break;
          case "values":
            for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0), this._calculateNewMax(), this._refreshValue(), (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i, s;
        if (arguments.length) return (e = this.options.values[t]), (e = this._trimAlignValue(e));
        if (this._hasMultipleValues()) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (this._valueMin() >= t) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
        return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i;
        (t = s + e), t > this.options.max && (t -= i), (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
      },
      _precisionOf: function (t) {
        var e = "" + t,
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshRange: function (t) {
        "vertical" === t && this.range.css({ width: "", left: "" }),
          "horizontal" === t && this.range.css({ height: "", bottom: "" });
      },
      _refreshValue: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          c = {};
        this._hasMultipleValues()
          ? this.handles.each(function (s) {
              (i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()))),
                (c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%"),
                t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate),
                h.options.range === !0 &&
                  ("horizontal" === h.orientation
                    ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate),
                      1 === s &&
                        h.range[l ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate }))
                    : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate),
                      1 === s &&
                        h.range[l ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))),
                (e = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (o = this._valueMax()),
            (i = o !== n ? 100 * ((s - n) / (o - n)) : 0),
            (c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%"),
            this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate),
            "min" === a &&
              "horizontal" === this.orientation &&
              this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate),
            "max" === a &&
              "horizontal" === this.orientation &&
              this.range.stop(1, 1)[l ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate),
            "min" === a &&
              "vertical" === this.orientation &&
              this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate),
            "max" === a &&
              "vertical" === this.orientation &&
              this.range.stop(1, 1)[l ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate));
      },
      _handleEvents: {
        keydown: function (e) {
          var i,
            s,
            n,
            o,
            a = t(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (
                (e.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  this._addClass(t(e.target), null, "ui-state-active"),
                  (i = this._start(e, a)),
                  i === !1))
              )
                return;
          }
          switch (
            ((o = this.options.step), (s = n = this._hasMultipleValues() ? this.values(a) : this.value()), e.keyCode)
          ) {
            case t.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case t.ui.keyCode.END:
              n = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case t.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              n = this._trimAlignValue(s + o);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              n = this._trimAlignValue(s - o);
          }
          this._slide(e, a, n);
        },
        keyup: function (e) {
          var i = t(e.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(e, i),
            this._change(e, i),
            this._removeClass(t(e.target), null, "ui-state-active"));
        },
      },
    }),
    t.widget("ui.sortable", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null,
      },
      _isOverAxis: function (t, e, i) {
        return t >= e && e + i > t;
      },
      _isFloating: function (t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
      },
      _create: function () {
        (this.containerCache = {}),
          this._addClass("ui-sortable"),
          this.refresh(),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          this._setHandleClassName(),
          (this.ready = !0);
      },
      _setOption: function (t, e) {
        this._super(t, e), "handle" === t && this._setHandleClassName();
      },
      _setHandleClassName: function () {
        var e = this;
        this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
          t.each(this.items, function () {
            e._addClass(
              this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item,
              "ui-sortable-handle"
            );
          });
      },
      _destroy: function () {
        this._mouseDestroy();
        for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
        return this;
      },
      _mouseCapture: function (e, i) {
        var s = null,
          n = !1,
          o = this;
        return this.reverting
          ? !1
          : this.options.disabled || "static" === this.options.type
          ? !1
          : (this._refreshItems(e),
            t(e.target)
              .parents()
              .each(function () {
                return t.data(this, o.widgetName + "-item") === o ? ((s = t(this)), !1) : void 0;
              }),
            t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)),
            s
              ? !this.options.handle ||
                i ||
                (t(this.options.handle, s)
                  .find("*")
                  .addBack()
                  .each(function () {
                    this === e.target && (n = !0);
                  }),
                n)
                ? ((this.currentItem = s), this._removeCurrentsFromItems(), !0)
                : !1
              : !1);
      },
      _mouseStart: function (e, i, s) {
        var n,
          o,
          a = this.options;
        if (
          ((this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(e)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }),
          t.extend(this.offset, {
            click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          (this.originalPosition = this._generatePosition(e)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
          (this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          a.containment && this._setContainment(),
          a.cursor &&
            "auto" !== a.cursor &&
            ((o = this.document.find("body")),
            (this.storedCursor = o.css("cursor")),
            o.css("cursor", a.cursor),
            (this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o))),
          a.opacity &&
            (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", a.opacity)),
          a.zIndex &&
            (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", a.zIndex)),
          this.scrollParent[0] !== this.document[0] &&
            "HTML" !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", e, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !s)
        )
          for (n = this.containers.length - 1; n >= 0; n--)
            this.containers[n]._trigger("activate", e, this._uiHash(this));
        return (
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
          (this.dragging = !0),
          this._addClass(this.helper, "ui-sortable-helper"),
          this._mouseDrag(e),
          !0
        );
      },
      _mouseDrag: function (e) {
        var i,
          s,
          n,
          o,
          a = this.options,
          r = !1;
        for (
          this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll &&
              (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName
                ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity
                    ? (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed)
                    : e.pageY - this.overflowOffset.top < a.scrollSensitivity &&
                      (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed),
                  this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity
                    ? (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed)
                    : e.pageX - this.overflowOffset.left < a.scrollSensitivity &&
                      (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed))
                : (e.pageY - this.document.scrollTop() < a.scrollSensitivity
                    ? (r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed))
                    : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity &&
                      (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)),
                  e.pageX - this.document.scrollLeft() < a.scrollSensitivity
                    ? (r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed))
                    : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity &&
                      (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))),
              r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo("absolute"),
            (this.options.axis && "y" === this.options.axis) || (this.helper[0].style.left = this.position.left + "px"),
            (this.options.axis && "x" === this.options.axis) || (this.helper[0].style.top = this.position.top + "px"),
            i = this.items.length - 1;
          i >= 0;
          i--
        )
          if (
            ((s = this.items[i]),
            (n = s.item[0]),
            (o = this._intersectsWithPointer(s)),
            o &&
              s.instance === this.currentContainer &&
              n !== this.currentItem[0] &&
              this.placeholder[1 === o ? "next" : "prev"]()[0] !== n &&
              !t.contains(this.placeholder[0], n) &&
              ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0))
          ) {
            if (
              ((this.direction = 1 === o ? "down" : "up"),
              "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
            )
              break;
            this._rearrange(e, s), this._trigger("change", e, this._uiHash());
            break;
          }
        return (
          this._contactContainers(e),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          this._trigger("sort", e, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (e, i) {
        if (e) {
          if ((t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert)) {
            var s = this,
              n = this.placeholder.offset(),
              o = this.options.axis,
              a = {};
            (o && "x" !== o) ||
              (a.left =
                n.left -
                this.offset.parent.left -
                this.margins.left +
                (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
              (o && "y" !== o) ||
                (a.top =
                  n.top -
                  this.offset.parent.top -
                  this.margins.top +
                  (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
              (this.reverting = !0),
              t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                s._clear(e);
              });
          } else this._clear(e, i);
          return !1;
        }
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp(new t.Event("mouseup", { target: null })),
            "original" === this.options.helper
              ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper"))
              : this.currentItem.show();
          for (var e = this.containers.length - 1; e >= 0; e--)
            this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
              this.containers[e].containerCache.over &&
                (this.containers[e]._trigger("out", null, this._uiHash(this)),
                (this.containers[e].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }),
            this.domPosition.prev
              ? t(this.domPosition.prev).after(this.currentItem)
              : t(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          s = [];
        return (
          (e = e || {}),
          t(i).each(function () {
            var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
            i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
          }),
          !s.length && e.key && s.push(e.key + "="),
          s.join("&")
        );
      },
      toArray: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          s = [];
        return (
          (e = e || {}),
          i.each(function () {
            s.push(t(e.item || this).attr(e.attribute || "id") || "");
          }),
          s
        );
      },
      _intersectsWith: function (t) {
        var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          h = r + t.height,
          l = this.offset.click.top,
          c = this.offset.click.left,
          u = "x" === this.options.axis || (s + l > r && h > s + l),
          d = "y" === this.options.axis || (e + c > o && a > e + c),
          p = u && d;
        return "pointer" === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ("pointer" !== this.options.tolerance &&
            this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"])
          ? p
          : e + this.helperProportions.width / 2 > o &&
              a > i - this.helperProportions.width / 2 &&
              s + this.helperProportions.height / 2 > r &&
              h > n - this.helperProportions.height / 2;
      },
      _intersectsWithPointer: function (t) {
        var e,
          i,
          s =
            "x" === this.options.axis ||
            this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          n =
            "y" === this.options.axis ||
            this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
          o = s && n;
        return o
          ? ((e = this._getDragVerticalDirection()),
            (i = this._getDragHorizontalDirection()),
            this.floating ? ("right" === i || "down" === e ? 2 : 1) : e && ("down" === e ? 2 : 1))
          : !1;
      },
      _intersectsWithSides: function (t) {
        var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();
        return this.floating && n
          ? ("right" === n && i) || ("left" === n && !i)
          : s && (("down" === s && e) || ("up" === s && !e));
      },
      _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== t && (t > 0 ? "down" : "up");
      },
      _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== t && (t > 0 ? "right" : "left");
      },
      refresh: function (t) {
        return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
      },
      _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
      },
      _getItemsAsjQuery: function (e) {
        function i() {
          r.push(this);
        }
        var s,
          n,
          o,
          a,
          r = [],
          h = [],
          l = this._connectWith();
        if (l && e)
          for (s = l.length - 1; s >= 0; s--)
            for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--)
              (a = t.data(o[n], this.widgetFullName)),
                a &&
                  a !== this &&
                  !a.options.disabled &&
                  h.push([
                    t.isFunction(a.options.items)
                      ? a.options.items.call(a.element)
                      : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
                    a,
                  ]);
        for (
          h.push([
            t.isFunction(this.options.items)
              ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem })
              : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
            this,
          ]),
            s = h.length - 1;
          s >= 0;
          s--
        )
          h[s][0].each(i);
        return t(r);
      },
      _removeCurrentsFromItems: function () {
        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = t.grep(this.items, function (t) {
          for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1;
          return !0;
        });
      },
      _refreshItems: function (e) {
        (this.items = []), (this.containers = [this]);
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c = this.items,
          u = [
            [
              t.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], e, { item: this.currentItem })
                : t(this.options.items, this.element),
              this,
            ],
          ],
          d = this._connectWith();
        if (d && this.ready)
          for (i = d.length - 1; i >= 0; i--)
            for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--)
              (o = t.data(n[s], this.widgetFullName)),
                o &&
                  o !== this &&
                  !o.options.disabled &&
                  (u.push([
                    t.isFunction(o.options.items)
                      ? o.options.items.call(o.element[0], e, { item: this.currentItem })
                      : t(o.options.items, o.element),
                    o,
                  ]),
                  this.containers.push(o));
        for (i = u.length - 1; i >= 0; i--)
          for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)
            (h = t(r[s])),
              h.data(this.widgetName + "-item", a),
              c.push({ item: h, instance: a, width: 0, height: 0, left: 0, top: 0 });
      },
      refreshPositions: function (e) {
        (this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1),
          this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        var i, s, n, o;
        for (i = this.items.length - 1; i >= 0; i--)
          (s = this.items[i]),
            (s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0]) ||
              ((n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item),
              e || ((s.width = n.outerWidth()), (s.height = n.outerHeight())),
              (o = n.offset()),
              (s.left = o.left),
              (s.top = o.top));
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this);
        else
          for (i = this.containers.length - 1; i >= 0; i--)
            (o = this.containers[i].element.offset()),
              (this.containers[i].containerCache.left = o.left),
              (this.containers[i].containerCache.top = o.top),
              (this.containers[i].containerCache.width = this.containers[i].element.outerWidth()),
              (this.containers[i].containerCache.height = this.containers[i].element.outerHeight());
        return this;
      },
      _createPlaceholder: function (e) {
        e = e || this;
        var i,
          s = e.options;
        (s.placeholder && s.placeholder.constructor !== String) ||
          ((i = s.placeholder),
          (s.placeholder = {
            element: function () {
              var s = e.currentItem[0].nodeName.toLowerCase(),
                n = t("<" + s + ">", e.document[0]);
              return (
                e
                  ._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)
                  ._removeClass(n, "ui-sortable-helper"),
                "tbody" === s
                  ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n))
                  : "tr" === s
                  ? e._createTrPlaceholder(e.currentItem, n)
                  : "img" === s && n.attr("src", e.currentItem.attr("src")),
                i || n.css("visibility", "hidden"),
                n
              );
            },
            update: function (t, n) {
              (!i || s.forcePlaceholderSize) &&
                (n.height() ||
                  n.height(
                    e.currentItem.innerHeight() -
                      parseInt(e.currentItem.css("paddingTop") || 0, 10) -
                      parseInt(e.currentItem.css("paddingBottom") || 0, 10)
                  ),
                n.width() ||
                  n.width(
                    e.currentItem.innerWidth() -
                      parseInt(e.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(e.currentItem.css("paddingRight") || 0, 10)
                  ));
            },
          })),
          (e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem))),
          e.currentItem.after(e.placeholder),
          s.placeholder.update(e, e.placeholder);
      },
      _createTrPlaceholder: function (e, i) {
        var s = this;
        e.children().each(function () {
          t("<td>&#160;</td>", s.document[0])
            .attr("colspan", t(this).attr("colspan") || 1)
            .appendTo(i);
        });
      },
      _contactContainers: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d = null,
          p = null;
        for (i = this.containers.length - 1; i >= 0; i--)
          if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
            if (this._intersectsWith(this.containers[i].containerCache)) {
              if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
              (d = this.containers[i]), (p = i);
            } else
              this.containers[i].containerCache.over &&
                (this.containers[i]._trigger("out", e, this._uiHash(this)),
                (this.containers[i].containerCache.over = 0));
        if (d)
          if (1 === this.containers.length)
            this.containers[p].containerCache.over ||
              (this.containers[p]._trigger("over", e, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1));
          else {
            for (
              n = 1e4,
                o = null,
                c = d.floating || this._isFloating(this.currentItem),
                a = c ? "left" : "top",
                r = c ? "width" : "height",
                u = c ? "pageX" : "pageY",
                s = this.items.length - 1;
              s >= 0;
              s--
            )
              t.contains(this.containers[p].element[0], this.items[s].item[0]) &&
                this.items[s].item[0] !== this.currentItem[0] &&
                ((h = this.items[s].item.offset()[a]),
                (l = !1),
                e[u] - h > this.items[s][r] / 2 && (l = !0),
                n > Math.abs(e[u] - h) &&
                  ((n = Math.abs(e[u] - h)), (o = this.items[s]), (this.direction = l ? "up" : "down")));
            if (!o && !this.options.dropOnEmpty) return;
            if (this.currentContainer === this.containers[p])
              return (
                this.currentContainer.containerCache.over ||
                  (this.containers[p]._trigger("over", e, this._uiHash()),
                  (this.currentContainer.containerCache.over = 1)),
                void 0
              );
            o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0),
              this._trigger("change", e, this._uiHash()),
              this.containers[p]._trigger("change", e, this._uiHash(this)),
              (this.currentContainer = this.containers[p]),
              this.options.placeholder.update(this.currentContainer, this.placeholder),
              this.containers[p]._trigger("over", e, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1);
          }
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper)
            ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
            : "clone" === i.helper
            ? this.currentItem.clone()
            : this.currentItem;
        return (
          s.parents("body").length ||
            t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
          s[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left"),
            }),
          (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
          (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
          s
        );
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          "left" in e && (this.offset.click.left = e.left + this.margins.left),
          "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
          "top" in e && (this.offset.click.top = e.top + this.margins.top),
          "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var e = this.offsetParent.offset();
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== this.document[0] &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()), (e.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === this.document[0].body ||
            (this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie)) &&
            (e = { top: 0, left: 0 }),
          {
            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
          var t = this.currentItem.position();
          return {
            top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
            left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft(),
          };
        }
        return { top: 0, left: 0 };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
          top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
      },
      _setContainment: function () {
        var e,
          i,
          s,
          n = this.options;
        "parent" === n.containment && (n.containment = this.helper[0].parentNode),
          ("document" === n.containment || "window" === n.containment) &&
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              "document" === n.containment
                ? this.document.width()
                : this.window.width() - this.helperProportions.width - this.margins.left,
              ("document" === n.containment
                ? this.document.height() || document.body.parentNode.scrollHeight
                : this.window.height() || this.document[0].body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          /^(document|window|parent)$/.test(n.containment) ||
            ((e = t(n.containment)[0]),
            (i = t(n.containment).offset()),
            (s = "hidden" !== t(e).css("overflow")),
            (this.containment = [
              i.left +
                (parseInt(t(e).css("borderLeftWidth"), 10) || 0) +
                (parseInt(t(e).css("paddingLeft"), 10) || 0) -
                this.margins.left,
              i.top +
                (parseInt(t(e).css("borderTopWidth"), 10) || 0) +
                (parseInt(t(e).css("paddingTop"), 10) || 0) -
                this.margins.top,
              i.left +
                (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                (parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
                (parseInt(t(e).css("paddingRight"), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              i.top +
                (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) -
                (parseInt(t(e).css("borderTopWidth"), 10) || 0) -
                (parseInt(t(e).css("paddingBottom"), 10) || 0) -
                this.helperProportions.height -
                this.margins.top,
            ]));
      },
      _convertPositionTo: function (e, i) {
        i || (i = this.position);
        var s = "absolute" === e ? 1 : -1,
          n =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
        return {
          top:
            i.top +
            this.offset.relative.top * s +
            this.offset.parent.top * s -
            ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
          left:
            i.left +
            this.offset.relative.left * s +
            this.offset.parent.left * s -
            ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s,
        };
      },
      _generatePosition: function (e) {
        var i,
          s,
          n = this.options,
          o = e.pageX,
          a = e.pageY,
          r =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          h = /(html|body)/i.test(r[0].tagName);
        return (
          "relative" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (e.pageX - this.offset.click.left < this.containment[0] &&
                (o = this.containment[0] + this.offset.click.left),
              e.pageY - this.offset.click.top < this.containment[1] &&
                (a = this.containment[1] + this.offset.click.top),
              e.pageX - this.offset.click.left > this.containment[2] &&
                (o = this.containment[2] + this.offset.click.left),
              e.pageY - this.offset.click.top > this.containment[3] &&
                (a = this.containment[3] + this.offset.click.top)),
            n.grid &&
              ((i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1]),
              (a = this.containment
                ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3]
                  ? i
                  : i - this.offset.click.top >= this.containment[1]
                  ? i - n.grid[1]
                  : i + n.grid[1]
                : i),
              (s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0]),
              (o = this.containment
                ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2]
                  ? s
                  : s - this.offset.click.left >= this.containment[0]
                  ? s - n.grid[0]
                  : s + n.grid[0]
                : s))),
          {
            top:
              a -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
            left:
              o -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()),
          }
        );
      },
      _rearrange: function (t, e, i, s) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(
              this.placeholder[0],
              "down" === this.direction ? e.item[0] : e.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1);
        var n = this.counter;
        this._delay(function () {
          n === this.counter && this.refreshPositions(!s);
        });
      },
      _clear: function (t, e) {
        function i(t, e, i) {
          return function (s) {
            i._trigger(t, s, e._uiHash(e));
          };
        }
        this.reverting = !1;
        var s,
          n = [];
        if (
          (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (s in this._storedCSS)
            ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
          this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
        } else this.currentItem.show();
        for (
          this.fromOutside &&
            !e &&
            n.push(function (t) {
              this._trigger("receive", t, this._uiHash(this.fromOutside));
            }),
            (!this.fromOutside &&
              this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              e ||
              n.push(function (t) {
                this._trigger("update", t, this._uiHash());
              }),
            this !== this.currentContainer &&
              (e ||
                (n.push(function (t) {
                  this._trigger("remove", t, this._uiHash());
                }),
                n.push(
                  function (t) {
                    return function (e) {
                      t._trigger("receive", e, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ),
                n.push(
                  function (t) {
                    return function (e) {
                      t._trigger("update", e, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ))),
            s = this.containers.length - 1;
          s >= 0;
          s--
        )
          e || n.push(i("deactivate", this, this.containers[s])),
            this.containers[s].containerCache.over &&
              (n.push(i("out", this, this.containers[s])), (this.containers[s].containerCache.over = 0));
        if (
          (this.storedCursor &&
            (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()),
          this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
          (this.dragging = !1),
          e || this._trigger("beforeStop", t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.cancelHelperRemoval ||
            (this.helper[0] !== this.currentItem[0] && this.helper.remove(), (this.helper = null)),
          !e)
        ) {
          for (s = 0; n.length > s; s++) n[s].call(this, t);
          this._trigger("stop", t, this._uiHash());
        }
        return (this.fromOutside = !1), !this.cancelHelperRemoval;
      },
      _trigger: function () {
        t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
      },
      _uiHash: function (e) {
        var i = e || this;
        return {
          helper: i.helper,
          placeholder: i.placeholder || t([]),
          position: i.position,
          originalPosition: i.originalPosition,
          offset: i.positionAbs,
          item: i.currentItem,
          sender: e ? e.element : null,
        };
      },
    }),
    t.widget("ui.spinner", {
      version: "1.12.1",
      defaultElement: "<input>",
      widgetEventPrefix: "spin",
      options: {
        classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" },
        culture: null,
        icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null,
      },
      _create: function () {
        this._setOption("max", this.options.max),
          this._setOption("min", this.options.min),
          this._setOption("step", this.options.step),
          "" !== this.value() && this._value(this.element.val(), !0),
          this._draw(),
          this._on(this._events),
          this._refresh(),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr("autocomplete");
            },
          });
      },
      _getCreateOptions: function () {
        var e = this._super(),
          i = this.element;
        return (
          t.each(["min", "max", "step"], function (t, s) {
            var n = i.attr(s);
            null != n && n.length && (e[s] = n);
          }),
          e
        );
      },
      _events: {
        keydown: function (t) {
          this._start(t) && this._keydown(t) && t.preventDefault();
        },
        keyup: "_stop",
        focus: function () {
          this.previous = this.element.val();
        },
        blur: function (t) {
          return this.cancelBlur
            ? (delete this.cancelBlur, void 0)
            : (this._stop(),
              this._refresh(),
              this.previous !== this.element.val() && this._trigger("change", t),
              void 0);
        },
        mousewheel: function (t, e) {
          if (e) {
            if (!this.spinning && !this._start(t)) return !1;
            this._spin((e > 0 ? 1 : -1) * this.options.step, t),
              clearTimeout(this.mousewheelTimer),
              (this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(t);
              }, 100)),
              t.preventDefault();
          }
        },
        "mousedown .ui-spinner-button": function (e) {
          function i() {
            var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
            e ||
              (this.element.trigger("focus"),
              (this.previous = s),
              this._delay(function () {
                this.previous = s;
              }));
          }
          var s;
          (s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val()),
            e.preventDefault(),
            i.call(this),
            (this.cancelBlur = !0),
            this._delay(function () {
              delete this.cancelBlur, i.call(this);
            }),
            this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
        },
        "mouseup .ui-spinner-button": "_stop",
        "mouseenter .ui-spinner-button": function (e) {
          return t(e.currentTarget).hasClass("ui-state-active")
            ? this._start(e) === !1
              ? !1
              : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0)
            : void 0;
        },
        "mouseleave .ui-spinner-button": "_stop",
      },
      _enhance: function () {
        this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
      },
      _draw: function () {
        this._enhance(),
          this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"),
          this._addClass("ui-spinner-input"),
          this.element.attr("role", "spinbutton"),
          (this.buttons = this.uiSpinner
            .children("a")
            .attr("tabIndex", -1)
            .attr("aria-hidden", !0)
            .button({ classes: { "ui-button": "" } })),
          this._removeClass(this.buttons, "ui-corner-all"),
          this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
          this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"),
          this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }),
          this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }),
          this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
            this.uiSpinner.height() > 0 &&
            this.uiSpinner.height(this.uiSpinner.height());
      },
      _keydown: function (e) {
        var i = this.options,
          s = t.ui.keyCode;
        switch (e.keyCode) {
          case s.UP:
            return this._repeat(null, 1, e), !0;
          case s.DOWN:
            return this._repeat(null, -1, e), !0;
          case s.PAGE_UP:
            return this._repeat(null, i.page, e), !0;
          case s.PAGE_DOWN:
            return this._repeat(null, -i.page, e), !0;
        }
        return !1;
      },
      _start: function (t) {
        return this.spinning || this._trigger("start", t) !== !1
          ? (this.counter || (this.counter = 1), (this.spinning = !0), !0)
          : !1;
      },
      _repeat: function (t, e, i) {
        (t = t || 500),
          clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            this._repeat(40, e, i);
          }, t)),
          this._spin(e * this.options.step, i);
      },
      _spin: function (t, e) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1),
          (i = this._adjustValue(i + t * this._increment(this.counter))),
          (this.spinning && this._trigger("spin", e, { value: i }) === !1) || (this._value(i), this.counter++);
      },
      _increment: function (e) {
        var i = this.options.incremental;
        return i ? (t.isFunction(i) ? i(e) : Math.floor((e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1)) : 1;
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
      },
      _precisionOf: function (t) {
        var e = "" + t,
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1;
      },
      _adjustValue: function (t) {
        var e,
          i,
          s = this.options;
        return (
          (e = null !== s.min ? s.min : 0),
          (i = t - e),
          (i = Math.round(i / s.step) * s.step),
          (t = e + i),
          (t = parseFloat(t.toFixed(this._precision()))),
          null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        );
      },
      _stop: function (t) {
        this.spinning &&
          (clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger("stop", t));
      },
      _setOption: function (t, e) {
        var i, s, n;
        return "culture" === t || "numberFormat" === t
          ? ((i = this._parse(this.element.val())), (this.options[t] = e), this.element.val(this._format(i)), void 0)
          : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)),
            "icons" === t &&
              ((s = this.buttons.first().find(".ui-icon")),
              this._removeClass(s, null, this.options.icons.up),
              this._addClass(s, null, e.up),
              (n = this.buttons.last().find(".ui-icon")),
              this._removeClass(n, null, this.options.icons.down),
              this._addClass(n, null, e.down)),
            this._super(t, e),
            void 0);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
          this.element.prop("disabled", !!t),
          this.buttons.button(t ? "disable" : "enable");
      },
      _setOptions: r(function (t) {
        this._super(t);
      }),
      _parse: function (t) {
        return (
          "string" == typeof t &&
            "" !== t &&
            (t =
              window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
          "" === t || isNaN(t) ? null : t
        );
      },
      _format: function (t) {
        return "" === t
          ? ""
          : window.Globalize && this.options.numberFormat
          ? Globalize.format(t, this.options.numberFormat, this.options.culture)
          : t;
      },
      _refresh: function () {
        this.element.attr({
          "aria-valuemin": this.options.min,
          "aria-valuemax": this.options.max,
          "aria-valuenow": this._parse(this.element.val()),
        });
      },
      isValid: function () {
        var t = this.value();
        return null === t ? !1 : t === this._adjustValue(t);
      },
      _value: function (t, e) {
        var i;
        "" !== t && ((i = this._parse(t)), null !== i && (e || (i = this._adjustValue(i)), (t = this._format(i)))),
          this.element.val(t),
          this._refresh();
      },
      _destroy: function () {
        this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),
          this.uiSpinner.replaceWith(this.element);
      },
      stepUp: r(function (t) {
        this._stepUp(t);
      }),
      _stepUp: function (t) {
        this._start() && (this._spin((t || 1) * this.options.step), this._stop());
      },
      stepDown: r(function (t) {
        this._stepDown(t);
      }),
      _stepDown: function (t) {
        this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
      },
      pageUp: r(function (t) {
        this._stepUp((t || 1) * this.options.page);
      }),
      pageDown: r(function (t) {
        this._stepDown((t || 1) * this.options.page);
      }),
      value: function (t) {
        return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val());
      },
      widget: function () {
        return this.uiSpinner;
      },
    }),
    t.uiBackCompat !== !1 &&
      t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function () {
          this.uiSpinner = this.element
            .attr("autocomplete", "off")
            .wrap(this._uiSpinnerHtml())
            .parent()
            .append(this._buttonHtml());
        },
        _uiSpinnerHtml: function () {
          return "<span>";
        },
        _buttonHtml: function () {
          return "<a></a><a></a>";
        },
      }),
    t.ui.spinner,
    t.widget("ui.tabs", {
      version: "1.12.1",
      delay: 300,
      options: {
        active: null,
        classes: {
          "ui-tabs": "ui-corner-all",
          "ui-tabs-nav": "ui-corner-all",
          "ui-tabs-panel": "ui-corner-bottom",
          "ui-tabs-tab": "ui-corner-top",
        },
        collapsible: !1,
        event: "click",
        heightStyle: "content",
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null,
      },
      _isLocal: (function () {
        var t = /#.*$/;
        return function (e) {
          var i, s;
          (i = e.href.replace(t, "")), (s = location.href.replace(t, ""));
          try {
            i = decodeURIComponent(i);
          } catch (n) {}
          try {
            s = decodeURIComponent(s);
          } catch (n) {}
          return e.hash.length > 1 && i === s;
        };
      })(),
      _create: function () {
        var e = this,
          i = this.options;
        (this.running = !1),
          this._addClass("ui-tabs", "ui-widget ui-widget-content"),
          this._toggleClass("ui-tabs-collapsible", null, i.collapsible),
          this._processTabs(),
          (i.active = this._initialActive()),
          t.isArray(i.disabled) &&
            (i.disabled = t
              .unique(
                i.disabled.concat(
                  t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                    return e.tabs.index(t);
                  })
                )
              )
              .sort()),
          (this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t()),
          this._refresh(),
          this.active.length && this.load(i.active);
      },
      _initialActive: function () {
        var e = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1);
        return (
          null === e &&
            (s &&
              this.tabs.each(function (i, n) {
                return t(n).attr("aria-controls") === s ? ((e = i), !1) : void 0;
              }),
            null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)),
          e !== !1 && ((e = this.tabs.index(this.tabs.eq(e))), -1 === e && (e = i ? !1 : 0)),
          !i && e === !1 && this.anchors.length && (e = 0),
          e
        );
      },
      _getCreateEventData: function () {
        return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() };
      },
      _tabKeydown: function (e) {
        var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
          s = this.tabs.index(i),
          n = !0;
        if (!this._handlePageNav(e)) {
          switch (e.keyCode) {
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
              s++;
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.LEFT:
              (n = !1), s--;
              break;
            case t.ui.keyCode.END:
              s = this.anchors.length - 1;
              break;
            case t.ui.keyCode.HOME:
              s = 0;
              break;
            case t.ui.keyCode.SPACE:
              return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
            case t.ui.keyCode.ENTER:
              return (
                e.preventDefault(),
                clearTimeout(this.activating),
                this._activate(s === this.options.active ? !1 : s),
                void 0
              );
            default:
              return;
          }
          e.preventDefault(),
            clearTimeout(this.activating),
            (s = this._focusNextTab(s, n)),
            e.ctrlKey ||
              e.metaKey ||
              (i.attr("aria-selected", "false"),
              this.tabs.eq(s).attr("aria-selected", "true"),
              (this.activating = this._delay(function () {
                this.option("active", s);
              }, this.delay)));
        }
      },
      _panelKeydown: function (e) {
        this._handlePageNav(e) ||
          (e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus")));
      },
      _handlePageNav: function (e) {
        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
          ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
          : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
          ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)
          : void 0;
      },
      _findNextTab: function (e, i) {
        function s() {
          return e > n && (e = 0), 0 > e && (e = n), e;
        }
        for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled); ) e = i ? e + 1 : e - 1;
        return e;
      },
      _focusNextTab: function (t, e) {
        return (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger("focus"), t;
      },
      _setOption: function (t, e) {
        return "active" === t
          ? (this._activate(e), void 0)
          : (this._super(t, e),
            "collapsible" === t &&
              (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)),
            "event" === t && this._setupEvents(e),
            "heightStyle" === t && this._setupHeightStyle(e),
            void 0);
      },
      _sanitizeSelector: function (t) {
        return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
      },
      refresh: function () {
        var e = this.options,
          i = this.tablist.children(":has(a[href])");
        (e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
          return i.index(t);
        })),
          this._processTabs(),
          e.active !== !1 && this.anchors.length
            ? this.active.length && !t.contains(this.tablist[0], this.active[0])
              ? this.tabs.length === e.disabled.length
                ? ((e.active = !1), (this.active = t()))
                : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1))
              : (e.active = this.tabs.index(this.active))
            : ((e.active = !1), (this.active = t())),
          this._refresh();
      },
      _refresh: function () {
        this._setOptionDisabled(this.options.disabled),
          this._setupEvents(this.options.event),
          this._setupHeightStyle(this.options.heightStyle),
          this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }),
          this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }),
          this.active.length
            ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }),
              this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
              this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" }))
            : this.tabs.eq(0).attr("tabIndex", 0);
      },
      _processTabs: function () {
        var e = this,
          i = this.tabs,
          s = this.anchors,
          n = this.panels;
        (this.tablist = this._getList().attr("role", "tablist")),
          this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
          this.tablist
            .on("mousedown" + this.eventNamespace, "> li", function (e) {
              t(this).is(".ui-state-disabled") && e.preventDefault();
            })
            .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
              t(this).closest("li").is(".ui-state-disabled") && this.blur();
            }),
          (this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 })),
          this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
          (this.anchors = this.tabs
            .map(function () {
              return t("a", this)[0];
            })
            .attr({ role: "presentation", tabIndex: -1 })),
          this._addClass(this.anchors, "ui-tabs-anchor"),
          (this.panels = t()),
          this.anchors.each(function (i, s) {
            var n,
              o,
              a,
              r = t(s).uniqueId().attr("id"),
              h = t(s).closest("li"),
              l = h.attr("aria-controls");
            e._isLocal(s)
              ? ((n = s.hash), (a = n.substring(1)), (o = e.element.find(e._sanitizeSelector(n))))
              : ((a = h.attr("aria-controls") || t({}).uniqueId()[0].id),
                (n = "#" + a),
                (o = e.element.find(n)),
                o.length || ((o = e._createPanel(a)), o.insertAfter(e.panels[i - 1] || e.tablist)),
                o.attr("aria-live", "polite")),
              o.length && (e.panels = e.panels.add(o)),
              l && h.data("ui-tabs-aria-controls", l),
              h.attr({ "aria-controls": a, "aria-labelledby": r }),
              o.attr("aria-labelledby", r);
          }),
          this.panels.attr("role", "tabpanel"),
          this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
          i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
      },
      _getList: function () {
        return this.tablist || this.element.find("ol, ul").eq(0);
      },
      _createPanel: function (e) {
        return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
      },
      _setOptionDisabled: function (e) {
        var i, s, n;
        for (
          t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : (e = !1)), n = 0;
          (s = this.tabs[n]);
          n++
        )
          (i = t(s)),
            e === !0 || -1 !== t.inArray(n, e)
              ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled"))
              : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
        (this.options.disabled = e),
          this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0);
      },
      _setupEvents: function (e) {
        var i = {};
        e &&
          t.each(e.split(" "), function (t, e) {
            i[e] = "_eventHandler";
          }),
          this._off(this.anchors.add(this.tabs).add(this.panels)),
          this._on(!0, this.anchors, {
            click: function (t) {
              t.preventDefault();
            },
          }),
          this._on(this.anchors, i),
          this._on(this.tabs, { keydown: "_tabKeydown" }),
          this._on(this.panels, { keydown: "_panelKeydown" }),
          this._focusable(this.tabs),
          this._hoverable(this.tabs);
      },
      _setupHeightStyle: function (e) {
        var i,
          s = this.element.parent();
        "fill" === e
          ? ((i = s.height()),
            (i -= this.element.outerHeight() - this.element.height()),
            this.element.siblings(":visible").each(function () {
              var e = t(this),
                s = e.css("position");
              "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
            }),
            this.element
              .children()
              .not(this.panels)
              .each(function () {
                i -= t(this).outerHeight(!0);
              }),
            this.panels
              .each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
              })
              .css("overflow", "auto"))
          : "auto" === e &&
            ((i = 0),
            this.panels
              .each(function () {
                i = Math.max(i, t(this).height("").height());
              })
              .height(i));
      },
      _eventHandler: function (e) {
        var i = this.options,
          s = this.active,
          n = t(e.currentTarget),
          o = n.closest("li"),
          a = o[0] === s[0],
          r = a && i.collapsible,
          h = r ? t() : this._getPanelForTab(o),
          l = s.length ? this._getPanelForTab(s) : t(),
          c = { oldTab: s, oldPanel: l, newTab: r ? t() : o, newPanel: h };
        e.preventDefault(),
          o.hasClass("ui-state-disabled") ||
            o.hasClass("ui-tabs-loading") ||
            this.running ||
            (a && !i.collapsible) ||
            this._trigger("beforeActivate", e, c) === !1 ||
            ((i.active = r ? !1 : this.tabs.index(o)),
            (this.active = a ? t() : o),
            this.xhr && this.xhr.abort(),
            l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."),
            h.length && this.load(this.tabs.index(o), e),
            this._toggle(e, c));
      },
      _toggle: function (e, i) {
        function s() {
          (o.running = !1), o._trigger("activate", e, i);
        }
        function n() {
          o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"),
            a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s());
        }
        var o = this,
          a = i.newPanel,
          r = i.oldPanel;
        (this.running = !0),
          r.length && this.options.hide
            ? this._hide(r, this.options.hide, function () {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n();
              })
            : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()),
          r.attr("aria-hidden", "true"),
          i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }),
          a.length && r.length
            ? i.oldTab.attr("tabIndex", -1)
            : a.length &&
              this.tabs
                .filter(function () {
                  return 0 === t(this).attr("tabIndex");
                })
                .attr("tabIndex", -1),
          a.attr("aria-hidden", "false"),
          i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
      },
      _activate: function (e) {
        var i,
          s = this._findActive(e);
        s[0] !== this.active[0] &&
          (s.length || (s = this.active),
          (i = s.find(".ui-tabs-anchor")[0]),
          this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }));
      },
      _findActive: function (e) {
        return e === !1 ? t() : this.tabs.eq(e);
      },
      _getIndex: function (e) {
        return (
          "string" == typeof e &&
            (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))),
          e
        );
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(),
          this.tablist.removeAttr("role").off(this.eventNamespace),
          this.anchors.removeAttr("role tabIndex").removeUniqueId(),
          this.tabs.add(this.panels).each(function () {
            t.data(this, "ui-tabs-destroy")
              ? t(this).remove()
              : t(this).removeAttr(
                  "role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded"
                );
          }),
          this.tabs.each(function () {
            var e = t(this),
              i = e.data("ui-tabs-aria-controls");
            i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
          }),
          this.panels.show(),
          "content" !== this.options.heightStyle && this.panels.css("height", "");
      },
      enable: function (e) {
        var i = this.options.disabled;
        i !== !1 &&
          (void 0 === e
            ? (i = !1)
            : ((e = this._getIndex(e)),
              (i = t.isArray(i)
                ? t.map(i, function (t) {
                    return t !== e ? t : null;
                  })
                : t.map(this.tabs, function (t, i) {
                    return i !== e ? i : null;
                  }))),
          this._setOptionDisabled(i));
      },
      disable: function (e) {
        var i = this.options.disabled;
        if (i !== !0) {
          if (void 0 === e) i = !0;
          else {
            if (((e = this._getIndex(e)), -1 !== t.inArray(e, i))) return;
            i = t.isArray(i) ? t.merge([e], i).sort() : [e];
          }
          this._setOptionDisabled(i);
        }
      },
      load: function (e, i) {
        e = this._getIndex(e);
        var s = this,
          n = this.tabs.eq(e),
          o = n.find(".ui-tabs-anchor"),
          a = this._getPanelForTab(n),
          r = { tab: n, panel: a },
          h = function (t, e) {
            "abort" === e && s.panels.stop(!1, !0),
              s._removeClass(n, "ui-tabs-loading"),
              a.removeAttr("aria-busy"),
              t === s.xhr && delete s.xhr;
          };
        this._isLocal(o[0]) ||
          ((this.xhr = t.ajax(this._ajaxSettings(o, i, r))),
          this.xhr &&
            "canceled" !== this.xhr.statusText &&
            (this._addClass(n, "ui-tabs-loading"),
            a.attr("aria-busy", "true"),
            this.xhr
              .done(function (t, e, n) {
                setTimeout(function () {
                  a.html(t), s._trigger("load", i, r), h(n, e);
                }, 1);
              })
              .fail(function (t, e) {
                setTimeout(function () {
                  h(t, e);
                }, 1);
              })));
      },
      _ajaxSettings: function (e, i, s) {
        var n = this;
        return {
          url: e.attr("href").replace(/#.*$/, ""),
          beforeSend: function (e, o) {
            return n._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, s));
          },
        };
      },
      _getPanelForTab: function (e) {
        var i = t(e).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + i));
      },
    }),
    t.uiBackCompat !== !1 &&
      t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function () {
          this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        },
      }),
    t.ui.tabs,
    t.widget("ui.tooltip", {
      version: "1.12.1",
      options: {
        classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" },
        content: function () {
          var e = t(this).attr("title") || "";
          return t("<a>").text(e).html();
        },
        hide: !0,
        items: "[title]:not([disabled])",
        position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" },
        show: !0,
        track: !1,
        close: null,
        open: null,
      },
      _addDescribedBy: function (e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")));
      },
      _removeDescribedBy: function (e) {
        var i = e.data("ui-tooltip-id"),
          s = (e.attr("aria-describedby") || "").split(/\s+/),
          n = t.inArray(i, s);
        -1 !== n && s.splice(n, 1),
          e.removeData("ui-tooltip-id"),
          (s = t.trim(s.join(" "))),
          s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby");
      },
      _create: function () {
        this._on({ mouseover: "open", focusin: "open" }),
          (this.tooltips = {}),
          (this.parents = {}),
          (this.liveRegion = t("<div>")
            .attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" })
            .appendTo(this.document[0].body)),
          this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
          (this.disabledTitles = t([]));
      },
      _setOption: function (e, i) {
        var s = this;
        this._super(e, i),
          "content" === e &&
            t.each(this.tooltips, function (t, e) {
              s._updateContent(e.element);
            });
      },
      _setOptionDisabled: function (t) {
        this[t ? "_disable" : "_enable"]();
      },
      _disable: function () {
        var e = this;
        t.each(this.tooltips, function (i, s) {
          var n = t.Event("blur");
          (n.target = n.currentTarget = s.element[0]), e.close(n, !0);
        }),
          (this.disabledTitles = this.disabledTitles.add(
            this.element
              .find(this.options.items)
              .addBack()
              .filter(function () {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0;
              })
          ));
      },
      _enable: function () {
        this.disabledTitles.each(function () {
          var e = t(this);
          e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
        }),
          (this.disabledTitles = t([]));
      },
      open: function (e) {
        var i = this,
          s = t(e ? e.target : this.element).closest(this.options.items);
        s.length &&
          !s.data("ui-tooltip-id") &&
          (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")),
          s.data("ui-tooltip-open", !0),
          e &&
            "mouseover" === e.type &&
            s.parents().each(function () {
              var e,
                s = t(this);
              s.data("ui-tooltip-open") && ((e = t.Event("blur")), (e.target = e.currentTarget = this), i.close(e, !0)),
                s.attr("title") &&
                  (s.uniqueId(), (i.parents[this.id] = { element: this, title: s.attr("title") }), s.attr("title", ""));
            }),
          this._registerCloseHandlers(e, s),
          this._updateContent(s, e));
      },
      _updateContent: function (t, e) {
        var i,
          s = this.options.content,
          n = this,
          o = e ? e.type : null;
        return "string" == typeof s || s.nodeType || s.jquery
          ? this._open(e, t, s)
          : ((i = s.call(t[0], function (i) {
              n._delay(function () {
                t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i));
              });
            })),
            i && this._open(e, t, i),
            void 0);
      },
      _open: function (e, i, s) {
        function n(t) {
          (l.of = t), a.is(":hidden") || a.position(l);
        }
        var o,
          a,
          r,
          h,
          l = t.extend({}, this.options.position);
        if (s) {
          if ((o = this._find(i))) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
          i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")),
            (o = this._tooltip(i)),
            (a = o.tooltip),
            this._addDescribedBy(i, a.attr("id")),
            a.find(".ui-tooltip-content").html(s),
            this.liveRegion.children().hide(),
            (h = t("<div>").html(a.find(".ui-tooltip-content").html())),
            h.removeAttr("name").find("[name]").removeAttr("name"),
            h.removeAttr("id").find("[id]").removeAttr("id"),
            h.appendTo(this.liveRegion),
            this.options.track && e && /^mouse/.test(e.type)
              ? (this._on(this.document, { mousemove: n }), n(e))
              : a.position(t.extend({ of: i }, this.options.position)),
            a.hide(),
            this._show(a, this.options.show),
            this.options.track &&
              this.options.show &&
              this.options.show.delay &&
              (r = this.delayedShow =
                setInterval(function () {
                  a.is(":visible") && (n(l.of), clearInterval(r));
                }, t.fx.interval)),
            this._trigger("open", e, { tooltip: a });
        }
      },
      _registerCloseHandlers: function (e, i) {
        var s = {
          keyup: function (e) {
            if (e.keyCode === t.ui.keyCode.ESCAPE) {
              var s = t.Event(e);
              (s.currentTarget = i[0]), this.close(s, !0);
            }
          },
        };
        i[0] !== this.element[0] &&
          (s.remove = function () {
            this._removeTooltip(this._find(i).tooltip);
          }),
          (e && "mouseover" !== e.type) || (s.mouseleave = "close"),
          (e && "focusin" !== e.type) || (s.focusout = "close"),
          this._on(!0, i, s);
      },
      close: function (e) {
        var i,
          s = this,
          n = t(e ? e.currentTarget : this.element),
          o = this._find(n);
        return o
          ? ((i = o.tooltip),
            o.closing ||
              (clearInterval(this.delayedShow),
              n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")),
              this._removeDescribedBy(n),
              (o.hiding = !0),
              i.stop(!0),
              this._hide(i, this.options.hide, function () {
                s._removeTooltip(t(this));
              }),
              n.removeData("ui-tooltip-open"),
              this._off(n, "mouseleave focusout keyup"),
              n[0] !== this.element[0] && this._off(n, "remove"),
              this._off(this.document, "mousemove"),
              e &&
                "mouseleave" === e.type &&
                t.each(this.parents, function (e, i) {
                  t(i.element).attr("title", i.title), delete s.parents[e];
                }),
              (o.closing = !0),
              this._trigger("close", e, { tooltip: i }),
              o.hiding || (o.closing = !1)),
            void 0)
          : (n.removeData("ui-tooltip-open"), void 0);
      },
      _tooltip: function (e) {
        var i = t("<div>").attr("role", "tooltip"),
          s = t("<div>").appendTo(i),
          n = i.uniqueId().attr("id");
        return (
          this._addClass(s, "ui-tooltip-content"),
          this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
          i.appendTo(this._appendTo(e)),
          (this.tooltips[n] = { element: e, tooltip: i })
        );
      },
      _find: function (t) {
        var e = t.data("ui-tooltip-id");
        return e ? this.tooltips[e] : null;
      },
      _removeTooltip: function (t) {
        t.remove(), delete this.tooltips[t.attr("id")];
      },
      _appendTo: function (t) {
        var e = t.closest(".ui-front, dialog");
        return e.length || (e = this.document[0].body), e;
      },
      _destroy: function () {
        var e = this;
        t.each(this.tooltips, function (i, s) {
          var n = t.Event("blur"),
            o = s.element;
          (n.target = n.currentTarget = o[0]),
            e.close(n, !0),
            t("#" + i).remove(),
            o.data("ui-tooltip-title") &&
              (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"));
        }),
          this.liveRegion.remove();
      },
    }),
    t.uiBackCompat !== !1 &&
      t.widget("ui.tooltip", t.ui.tooltip, {
        options: { tooltipClass: null },
        _tooltip: function () {
          var t = this._superApply(arguments);
          return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t;
        },
      }),
    t.ui.tooltip;
});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n; ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (((this.isComplete = !0), this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
          var d = h[e];
          if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))), (s.isBoxSizeOuter = r), i.removeChild(e);
      }
    }
    function s(e) {
      if ((n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType)) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0; l < h; l++) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)), (e[d] = ""), this.css(e), this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning)) return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (t = i ? t : -t), (e = o ? e : -e), "translate3d(" + t + "px, " + e + "px, 0)";
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n ? (o = this.element.querySelector(n)) : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth
              : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)), t && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), (t = o.makeArray(t));
      }),
      (c._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (this.horizontalColIndex = n ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode"), require("masonry-layout")))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), o;
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i), (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++) (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

/* Slinky js */
!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    n(1), (e.exports = n(2));
  },
  function (e, t) {
    function n(e, t) {
      var n = Object.keys(e);
      return (
        Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)),
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
        n
      );
    }
    function i(e, t, n) {
      return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
      );
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function s(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    }
    /*
     * Slinky
     * Rather sweet menus
     * @author Ali Zahid <ali.zahid@live.com>
     * @license MIT
     */ var a = (function () {
      function e(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.settings = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? n(r, !0).forEach(function (t) {
                    i(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : n(r).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
            }
            return e;
          })({}, this.options, {}, r)),
          this._init(t);
      }
      return (
        s(e, [
          {
            key: "options",
            get: function () {
              return { resize: !0, speed: 300, theme: "slinky-theme-default", title: !1 };
            },
          },
        ]),
        s(e, [
          {
            key: "_init",
            value: function (e) {
              (this.menu = jQuery(e)), (this.base = this.menu.children().first());
              var t = this.menu,
                n = this.settings;
              t.addClass("slinky-menu").addClass(n.theme),
                this._transition(n.speed),
                jQuery("a + ul", t).prev().addClass("next"),
                jQuery("li > a", t).wrapInner("<span>");
              var i = jQuery("<li>").addClass("header");
              jQuery("li > ul", t).prepend(i);
              var r = jQuery("<a>").prop("href", "#").addClass("back");
              jQuery(".header", t).prepend(r),
                n.title &&
                  jQuery("li > ul", t).each(function (e, t) {
                    var n = jQuery(t).parent().find("a").first().text();
                    if (n) {
                      var i = jQuery("<header>").addClass("title").text(n);
                      jQuery("> .header", t).append(i);
                    }
                  }),
                this._addListeners(),
                this._jumpToInitial();
            },
          },
          {
            key: "_addListeners",
            value: function () {
              var e = this,
                t = this.menu,
                n = this.settings;
              jQuery("a", t).on("click", function (i) {
                if (e._clicked + n.speed > Date.now()) return !1;
                e._clicked = Date.now();
                var r = jQuery(i.currentTarget);
                (0 === r.attr("href").indexOf("#") || r.hasClass("next") || r.hasClass("back")) && i.preventDefault(),
                  r.hasClass("next")
                    ? (t.find(".active").removeClass("active"),
                      r.next().show().addClass("active"),
                      e._move(1),
                      n.resize && e._resize(r.next()))
                    : r.hasClass("back") &&
                      (e._move(-1, function () {
                        t.find(".active").removeClass("active"),
                          r.parent().parent().hide().parentsUntil(t, "ul").first().addClass("active");
                      }),
                      n.resize && e._resize(r.parent().parent().parentsUntil(t, "ul")));
              });
            },
          },
          {
            key: "_jumpToInitial",
            value: function () {
              var e = this.menu,
                t = this.settings,
                n = e.find(".active");
              n.length > 0 && (n.removeClass("active"), this.jump(n, !1)),
                setTimeout(function () {
                  return e.height(e.outerHeight());
                }, t.speed);
            },
          },
          {
            key: "_move",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
              if (0 !== e) {
                var n = this.settings,
                  i = this.base,
                  r = Math.round(parseInt(i.get(0).style.left)) || 0;
                i.css("left", "".concat(r - 100 * e, "%")), "function" == typeof t && setTimeout(t, n.speed);
              }
            },
          },
          {
            key: "_resize",
            value: function (e) {
              this.menu.height(e.outerHeight());
            },
          },
          {
            key: "_transition",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300,
                t = this.menu,
                n = this.base;
              t.css("transition-duration", "".concat(e, "ms")), n.css("transition-duration", "".concat(e, "ms"));
            },
          },
          {
            key: "jump",
            value: function (e) {
              var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (e) {
                var n = this.menu,
                  i = this.settings,
                  r = jQuery(e),
                  s = n.find(".active"),
                  a = 0;
                s.length > 0 && (a = s.parentsUntil(n, "ul").length), n.find("ul").removeClass("active").hide();
                var o = r.parentsUntil(n, "ul");
                o.show(),
                  r.show().addClass("active"),
                  t || this._transition(0),
                  this._move(o.length - a),
                  i.resize && this._resize(r),
                  t || this._transition(i.speed);
              }
            },
          },
          {
            key: "home",
            value: function () {
              var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = this.base,
                n = this.menu,
                i = this.settings;
              e || this._transition(0);
              var r = n.find(".active"),
                s = r.parentsUntil(n, "ul");
              this._move(-s.length, function () {
                r.removeClass("active").hide(), s.not(t).hide();
              }),
                i.resize && this._resize(t),
                !1 === e && this._transition(i.speed);
            },
          },
          {
            key: "destroy",
            value: function () {
              var e = this,
                t = this.base,
                n = this.menu;
              jQuery(".header", n).remove(),
                jQuery("a", n).removeClass("next").off("click"),
                n.css({ height: "", "transition-duration": "" }),
                t.css({ left: "", "transition-duration": "" }),
                jQuery("li > a > span", n).contents().unwrap(),
                n.find(".active").removeClass("active"),
                n
                  .attr("class")
                  .split(" ")
                  .forEach(function (e) {
                    0 === e.indexOf("slinky") && n.removeClass(e);
                  });
              ["settings", "menu", "base"].forEach(function (t) {
                return delete e[t];
              });
            },
          },
        ]),
        e
      );
    })();
    jQuery.fn.slinky = function (e) {
      return new a(this, e);
    };
  },
  function (e, t, n) {},
]);

/*
 Slick Slider
 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"), (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"), (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t)
            : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t)
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"), s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"), s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll), i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
            e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
          : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)), o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (((o = document.createDocumentFragment()), (n = l.$slider.children()), l.options.rows > 1)) {
        for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])) i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""), !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing)
        : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
        t.stopImmediatePropagation();
        var o = i(this);
        setTimeout(function () {
          e.options.pauseOnFocus && ((e.focussed = o.is(":focus")), e.autoPlay());
        }, 0);
      });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
      else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow ? (s = -1.5) : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset = (n.slideCount % n.options.slidesToScroll) * n.slideWidth * -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow && ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 - (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0), (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll), (o = -1 * e.options.slidesToScroll), (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }),
              -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s });
          }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2)
            : ((o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1))),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
          r < 0 && (r = n.slideCount - 1), (t = (t = t.add(d.eq(r))).add(d.eq(l))), r--, l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(), (i.options.autoplay = !0), (i.paused = !1), (i.focussed = !1), (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i = "boolean" == typeof i ? (!0 === (e = i) ? 0 : o.slideCount - 1) : !0 === e ? --i : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"), o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
          !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length)))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 })
            : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
      }),
        t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"), (i.transformType = "transform"), (i.transitionType = "transition")),
        (i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center")
              : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad) || n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !((!0 === a.animating && !0 === a.options.waitForAnimate) || (!0 === a.options.fade && a.currentSlide === i)))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) return (o.scrolling = !1), !1;
      if (((o.interrupted = !1), (o.shouldClick = !(o.touchObject.swipeLength > 10)), void 0 === o.touchObject.curX))
        return !1;
      if (
        (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger("swipe", [o, t]));
      } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2)))),
          (r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2)))),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && ((l.swiping = !0), i.preventDefault()),
              (s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) || (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction), (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating ? ((l.swipeLeft = null), !1) : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (((t.interrupted = !0), 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow))
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
          i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
              i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode
            ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
              i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
              i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay && (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});

/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
 **/
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.StickySidebar = e());
})(this, function () {
  "use strict";
  "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  function t(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  function e(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var i = e(function (t, e) {
    (function (t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l,
        n,
        e = (function () {
          function n(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t;
          };
        })(),
        i =
          ((l = ".stickySidebar"),
          (n = {
            topSpacing: 0,
            bottomSpacing: 0,
            containerSelector: !1,
            innerWrapperSelector: ".inner-wrapper-sticky",
            stickyClass: "is-affixed",
            resizeSensor: !0,
            minWidth: !1,
          }),
          (function () {
            function c(t) {
              var e = this,
                i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
              if (
                ((function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, c),
                (this.options = c.extend(n, i)),
                (this.sidebar = "string" == typeof t ? document.querySelector(t) : t),
                void 0 === this.sidebar)
              )
                throw new Error("There is no specific sidebar element.");
              (this.sidebarInner = !1),
                (this.container = this.sidebar.parentElement),
                (this.affixedType = "STATIC"),
                (this.direction = "down"),
                (this.support = { transform: !1, transform3d: !1 }),
                (this._initialized = !1),
                (this._reStyle = !1),
                (this._breakpoint = !1),
                (this.dimensions = {
                  translateY: 0,
                  maxTranslateY: 0,
                  topSpacing: 0,
                  lastTopSpacing: 0,
                  bottomSpacing: 0,
                  lastBottomSpacing: 0,
                  sidebarHeight: 0,
                  sidebarWidth: 0,
                  containerTop: 0,
                  containerHeight: 0,
                  viewportHeight: 0,
                  viewportTop: 0,
                  lastViewportTop: 0,
                }),
                ["handleEvent"].forEach(function (t) {
                  e[t] = e[t].bind(e);
                }),
                this.initialize();
            }
            return (
              e(
                c,
                [
                  {
                    key: "initialize",
                    value: function () {
                      var i = this;
                      if (
                        (this._setSupportFeatures(),
                        this.options.innerWrapperSelector &&
                          ((this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector)),
                          null === this.sidebarInner && (this.sidebarInner = !1)),
                        !this.sidebarInner)
                      ) {
                        var t = document.createElement("div");
                        for (
                          t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t);
                          this.sidebar.firstChild != t;

                        )
                          t.appendChild(this.sidebar.firstChild);
                        this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky");
                      }
                      if (this.options.containerSelector) {
                        var e = document.querySelectorAll(this.options.containerSelector);
                        if (
                          ((e = Array.prototype.slice.call(e)).forEach(function (t, e) {
                            t.contains(i.sidebar) && (i.container = t);
                          }),
                          !e.length)
                        )
                          throw new Error("The container does not contains on the sidebar.");
                      }
                      "function" != typeof this.options.topSpacing &&
                        (this.options.topSpacing = parseInt(this.options.topSpacing) || 0),
                        "function" != typeof this.options.bottomSpacing &&
                          (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0),
                        this._widthBreakpoint(),
                        this.calcDimensions(),
                        this.stickyPosition(),
                        this.bindEvents(),
                        (this._initialized = !0);
                    },
                  },
                  {
                    key: "bindEvents",
                    value: function () {
                      window.addEventListener("resize", this, { passive: !0, capture: !1 }),
                        window.addEventListener("scroll", this, { passive: !0, capture: !1 }),
                        this.sidebar.addEventListener("update" + l, this),
                        this.options.resizeSensor &&
                          "undefined" != typeof ResizeSensor &&
                          (new ResizeSensor(this.sidebarInner, this.handleEvent),
                          new ResizeSensor(this.container, this.handleEvent));
                    },
                  },
                  {
                    key: "handleEvent",
                    value: function (t) {
                      this.updateSticky(t);
                    },
                  },
                  {
                    key: "calcDimensions",
                    value: function () {
                      if (!this._breakpoint) {
                        var t = this.dimensions;
                        (t.containerTop = c.offsetRelative(this.container).top),
                          (t.containerHeight = this.container.clientHeight),
                          (t.containerBottom = t.containerTop + t.containerHeight),
                          (t.sidebarHeight = this.sidebarInner.offsetHeight),
                          (t.sidebarWidth = this.sidebarInner.offsetWidth),
                          (t.viewportHeight = window.innerHeight),
                          (t.maxTranslateY = t.containerHeight - t.sidebarHeight),
                          this._calcDimensionsWithScroll();
                      }
                    },
                  },
                  {
                    key: "_calcDimensionsWithScroll",
                    value: function () {
                      var t = this.dimensions;
                      (t.sidebarLeft = c.offsetRelative(this.sidebar).left),
                        (t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop),
                        (t.viewportBottom = t.viewportTop + t.viewportHeight),
                        (t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft),
                        (t.topSpacing = this.options.topSpacing),
                        (t.bottomSpacing = this.options.bottomSpacing),
                        "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0),
                        "function" == typeof t.bottomSpacing &&
                          (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0),
                        "VIEWPORT-TOP" === this.affixedType
                          ? t.topSpacing < t.lastTopSpacing &&
                            ((t.translateY += t.lastTopSpacing - t.topSpacing), (this._reStyle = !0))
                          : "VIEWPORT-BOTTOM" === this.affixedType &&
                            t.bottomSpacing < t.lastBottomSpacing &&
                            ((t.translateY += t.lastBottomSpacing - t.bottomSpacing), (this._reStyle = !0)),
                        (t.lastTopSpacing = t.topSpacing),
                        (t.lastBottomSpacing = t.bottomSpacing);
                    },
                  },
                  {
                    key: "isSidebarFitsViewport",
                    value: function () {
                      var t = this.dimensions,
                        e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
                      return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight;
                    },
                  },
                  {
                    key: "observeScrollDir",
                    value: function () {
                      var t = this.dimensions;
                      if (t.lastViewportTop !== t.viewportTop) {
                        var e = "down" === this.direction ? Math.min : Math.max;
                        t.viewportTop === e(t.viewportTop, t.lastViewportTop) &&
                          (this.direction = "down" === this.direction ? "up" : "down");
                      }
                    },
                  },
                  {
                    key: "getAffixType",
                    value: function () {
                      this._calcDimensionsWithScroll();
                      var t = this.dimensions,
                        e = t.viewportTop + t.topSpacing,
                        i = this.affixedType;
                      return (
                        e <= t.containerTop || t.containerHeight <= t.sidebarHeight
                          ? ((t.translateY = 0), (i = "STATIC"))
                          : (i =
                              "up" === this.direction
                                ? this._getAffixTypeScrollingUp()
                                : this._getAffixTypeScrollingDown()),
                        (t.translateY = Math.max(0, t.translateY)),
                        (t.translateY = Math.min(t.containerHeight, t.translateY)),
                        (t.translateY = Math.round(t.translateY)),
                        (t.lastViewportTop = t.viewportTop),
                        i
                      );
                    },
                  },
                  {
                    key: "_getAffixTypeScrollingDown",
                    value: function () {
                      var t = this.dimensions,
                        e = t.sidebarHeight + t.containerTop,
                        i = t.viewportTop + t.topSpacing,
                        n = t.viewportBottom - t.bottomSpacing,
                        o = this.affixedType;
                      return (
                        this.isSidebarFitsViewport()
                          ? t.sidebarHeight + i >= t.containerBottom
                            ? ((t.translateY = t.containerBottom - e), (o = "CONTAINER-BOTTOM"))
                            : i >= t.containerTop && ((t.translateY = i - t.containerTop), (o = "VIEWPORT-TOP"))
                          : t.containerBottom <= n
                          ? ((t.translateY = t.containerBottom - e), (o = "CONTAINER-BOTTOM"))
                          : e + t.translateY <= n
                          ? ((t.translateY = n - e), (o = "VIEWPORT-BOTTOM"))
                          : t.containerTop + t.translateY <= i &&
                            0 !== t.translateY &&
                            t.maxTranslateY !== t.translateY &&
                            (o = "VIEWPORT-UNBOTTOM"),
                        o
                      );
                    },
                  },
                  {
                    key: "_getAffixTypeScrollingUp",
                    value: function () {
                      var t = this.dimensions,
                        e = t.sidebarHeight + t.containerTop,
                        i = t.viewportTop + t.topSpacing,
                        n = t.viewportBottom - t.bottomSpacing,
                        o = this.affixedType;
                      return (
                        i <= t.translateY + t.containerTop
                          ? ((t.translateY = i - t.containerTop), (o = "VIEWPORT-TOP"))
                          : t.containerBottom <= n
                          ? ((t.translateY = t.containerBottom - e), (o = "CONTAINER-BOTTOM"))
                          : this.isSidebarFitsViewport() ||
                            (t.containerTop <= i &&
                              0 !== t.translateY &&
                              t.maxTranslateY !== t.translateY &&
                              (o = "VIEWPORT-UNBOTTOM")),
                        o
                      );
                    },
                  },
                  {
                    key: "_getStyle",
                    value: function (t) {
                      if (void 0 !== t) {
                        var e = { inner: {}, outer: {} },
                          i = this.dimensions;
                        switch (t) {
                          case "VIEWPORT-TOP":
                            e.inner = {
                              position: "fixed",
                              top: i.topSpacing,
                              left: i.sidebarLeft - i.viewportLeft,
                              width: i.sidebarWidth,
                            };
                            break;
                          case "VIEWPORT-BOTTOM":
                            e.inner = {
                              position: "fixed",
                              top: "auto",
                              left: i.sidebarLeft,
                              bottom: i.bottomSpacing,
                              width: i.sidebarWidth,
                            };
                            break;
                          case "CONTAINER-BOTTOM":
                          case "VIEWPORT-UNBOTTOM":
                            var n = this._getTranslate(0, i.translateY + "px");
                            e.inner = n
                              ? { transform: n }
                              : { position: "absolute", top: i.translateY, width: i.sidebarWidth };
                        }
                        switch (t) {
                          case "VIEWPORT-TOP":
                          case "VIEWPORT-BOTTOM":
                          case "VIEWPORT-UNBOTTOM":
                          case "CONTAINER-BOTTOM":
                            e.outer = { height: i.sidebarHeight, position: "relative" };
                        }
                        return (
                          (e.outer = c.extend({ height: "", position: "" }, e.outer)),
                          (e.inner = c.extend(
                            { position: "relative", top: "", left: "", bottom: "", width: "", transform: "" },
                            e.inner
                          )),
                          e
                        );
                      }
                    },
                  },
                  {
                    key: "stickyPosition",
                    value: function (t) {
                      if (!this._breakpoint) {
                        (t = this._reStyle || t || !1), this.options.topSpacing, this.options.bottomSpacing;
                        var e = this.getAffixType(),
                          i = this._getStyle(e);
                        if ((this.affixedType != e || t) && e) {
                          var n = "affix." + e.toLowerCase().replace("viewport-", "") + l;
                          for (var o in (c.eventTrigger(this.sidebar, n),
                          "STATIC" === e
                            ? c.removeClass(this.sidebar, this.options.stickyClass)
                            : c.addClass(this.sidebar, this.options.stickyClass),
                          i.outer)) {
                            var s = "number" == typeof i.outer[o] ? "px" : "";
                            this.sidebar.style[o] = i.outer[o] + s;
                          }
                          for (var r in i.inner) {
                            var a = "number" == typeof i.inner[r] ? "px" : "";
                            this.sidebarInner.style[r] = i.inner[r] + a;
                          }
                          var p = "affixed." + e.toLowerCase().replace("viewport-", "") + l;
                          c.eventTrigger(this.sidebar, p);
                        } else this._initialized && (this.sidebarInner.style.left = i.inner.left);
                        this.affixedType = e;
                      }
                    },
                  },
                  {
                    key: "_widthBreakpoint",
                    value: function () {
                      window.innerWidth <= this.options.minWidth
                        ? ((this._breakpoint = !0),
                          (this.affixedType = "STATIC"),
                          this.sidebar.removeAttribute("style"),
                          c.removeClass(this.sidebar, this.options.stickyClass),
                          this.sidebarInner.removeAttribute("style"))
                        : (this._breakpoint = !1);
                    },
                  },
                  {
                    key: "updateSticky",
                    value: function () {
                      var t,
                        e = this,
                        i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                      this._running ||
                        ((this._running = !0),
                        (t = i.type),
                        requestAnimationFrame(function () {
                          switch (t) {
                            case "scroll":
                              e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
                              break;
                            case "resize":
                            default:
                              e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0);
                          }
                          e._running = !1;
                        }));
                    },
                  },
                  {
                    key: "_setSupportFeatures",
                    value: function () {
                      var t = this.support;
                      (t.transform = c.supportTransform()), (t.transform3d = c.supportTransform(!0));
                    },
                  },
                  {
                    key: "_getTranslate",
                    value: function () {
                      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                      return this.support.transform3d
                        ? "translate3d(" + t + ", " + e + ", " + i + ")"
                        : !!this.support.translate && "translate(" + t + ", " + e + ")";
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      window.removeEventListener("resize", this, { capture: !1 }),
                        window.removeEventListener("scroll", this, { capture: !1 }),
                        this.sidebar.classList.remove(this.options.stickyClass),
                        (this.sidebar.style.minHeight = ""),
                        this.sidebar.removeEventListener("update" + l, this);
                      var t = { inner: {}, outer: {} };
                      for (var e in ((t.inner = {
                        position: "",
                        top: "",
                        left: "",
                        bottom: "",
                        width: "",
                        transform: "",
                      }),
                      (t.outer = { height: "", position: "" }),
                      t.outer))
                        this.sidebar.style[e] = t.outer[e];
                      for (var i in t.inner) this.sidebarInner.style[i] = t.inner[i];
                      this.options.resizeSensor &&
                        "undefined" != typeof ResizeSensor &&
                        (ResizeSensor.detach(this.sidebarInner, this.handleEvent),
                        ResizeSensor.detach(this.container, this.handleEvent));
                    },
                  },
                ],
                [
                  {
                    key: "supportTransform",
                    value: function (t) {
                      var i = !1,
                        e = t ? "perspective" : "transform",
                        n = e.charAt(0).toUpperCase() + e.slice(1),
                        o = document.createElement("support").style;
                      return (
                        (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function (t, e) {
                          if (void 0 !== o[t]) return (i = t), !1;
                        }),
                        i
                      );
                    },
                  },
                  {
                    key: "eventTrigger",
                    value: function (t, e, i) {
                      try {
                        var n = new CustomEvent(e, { detail: i });
                      } catch (t) {
                        (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i);
                      }
                      t.dispatchEvent(n);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t, e) {
                      var i = {};
                      for (var n in t) void 0 !== e[n] ? (i[n] = e[n]) : (i[n] = t[n]);
                      return i;
                    },
                  },
                  {
                    key: "offsetRelative",
                    value: function (t) {
                      var e = { left: 0, top: 0 };
                      do {
                        var i = t.offsetTop,
                          n = t.offsetLeft;
                        isNaN(i) || (e.top += i),
                          isNaN(n) || (e.left += n),
                          (t = "BODY" === t.tagName ? t.parentElement : t.offsetParent);
                      } while (t);
                      return e;
                    },
                  },
                  {
                    key: "addClass",
                    value: function (t, e) {
                      c.hasClass(t, e) || (t.classList ? t.classList.add(e) : (t.className += " " + e));
                    },
                  },
                  {
                    key: "removeClass",
                    value: function (t, e) {
                      c.hasClass(t, e) &&
                        (t.classList
                          ? t.classList.remove(e)
                          : (t.className = t.className.replace(
                              new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"),
                              " "
                            )));
                    },
                  },
                  {
                    key: "hasClass",
                    value: function (t, e) {
                      return t.classList
                        ? t.classList.contains(e)
                        : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className);
                    },
                  },
                  {
                    key: "defaults",
                    get: function () {
                      return n;
                    },
                  },
                ]
              ),
              c
            );
          })());
      (t.default = i), (window.StickySidebar = i);
    })(e);
  });
  return (
    t(i),
    t(
      e(function (t, e) {
        (function (t) {
          var e,
            s = (e = t) && e.__esModule ? e : { default: e };
          !(function () {
            if ("undefined" != typeof window) {
              var n = window.$ || window.jQuery || window.Zepto,
                o = "stickySidebar";
              if (n) {
                (n.fn.stickySidebar = function (i) {
                  return this.each(function () {
                    var t = n(this),
                      e = n(this).data(o);
                    if (
                      (e || ((e = new s.default(this, "object" == typeof i && i)), t.data(o, e)), "string" == typeof i)
                    ) {
                      if (void 0 === e[i] && -1 === ["destroy", "updateSticky"].indexOf(i))
                        throw new Error('No method named "' + i + '"');
                      e[i]();
                    }
                  });
                }),
                  (n.fn.stickySidebar.Constructor = s.default);
                var t = n.fn.stickySidebar;
                n.fn.stickySidebar.noConflict = function () {
                  return (n.fn.stickySidebar = t), this;
                };
              }
            }
          })();
        })(i);
      })
    )
  );
});

/*!
 * Customized version of iScroll.js 0.0.2
 * It fixes bugs affecting its integration with fullpage.js
 */
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
!(function (t, i, e) {
  function s(e, s) {
    (this.wrapper = "string" == typeof e ? i.querySelector(e) : e),
      (this.scroller = this.wrapper.children[0]),
      (this.scrollerStyle = this.scroller.style),
      (this.options = {
        resizeScrollbars: !0,
        mouseWheelSpeed: 20,
        snapThreshold: 0.334,
        disablePointer: !h.hasPointer,
        disableTouch: h.hasPointer || !h.hasTouch,
        disableMouse: h.hasPointer || h.hasTouch,
        startX: 0,
        startY: 0,
        scrollY: !0,
        directionLockThreshold: 5,
        momentum: !0,
        bounce: !0,
        bounceTime: 600,
        bounceEasing: "",
        preventDefault: !0,
        preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/ },
        HWCompositing: !0,
        useTransition: !0,
        useTransform: !0,
        bindToWrapper: "undefined" == typeof t.onmousedown,
      });
    for (var o in s) this.options[o] = s[o];
    (this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : ""),
      (this.options.useTransition = h.hasTransition && this.options.useTransition),
      (this.options.useTransform = h.hasTransform && this.options.useTransform),
      (this.options.eventPassthrough =
        this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough),
      (this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault),
      (this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY),
      (this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX),
      (this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough),
      (this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold),
      (this.options.bounceEasing =
        "string" == typeof this.options.bounceEasing
          ? h.ease[this.options.bounceEasing] || h.ease.circular
          : this.options.bounceEasing),
      (this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling),
      this.options.tap === !0 && (this.options.tap = "tap"),
      this.options.useTransition ||
        this.options.useTransform ||
        /relative|absolute/i.test(this.scrollerStyle.position) ||
        (this.scrollerStyle.position = "relative"),
      "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
      (this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1),
      (this.x = 0),
      (this.y = 0),
      (this.directionX = 0),
      (this.directionY = 0),
      (this._events = {}),
      this._init(),
      this.refresh(),
      this.scrollTo(this.options.startX, this.options.startY),
      this.enable();
  }
  function o(t, e, s) {
    var o = i.createElement("div"),
      n = i.createElement("div");
    return (
      s === !0 &&
        ((o.style.cssText = "position:absolute;z-index:9999"),
        (n.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
      (n.className = "iScrollIndicator"),
      "h" == t
        ? (s === !0 && ((o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"), (n.style.height = "100%")),
          (o.className = "iScrollHorizontalScrollbar"))
        : (s === !0 && ((o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"), (n.style.width = "100%")),
          (o.className = "iScrollVerticalScrollbar")),
      (o.style.cssText += ";overflow:hidden"),
      e || (o.style.pointerEvents = "none"),
      o.appendChild(n),
      o
    );
  }
  function n(e, s) {
    (this.wrapper = "string" == typeof s.el ? i.querySelector(s.el) : s.el),
      (this.wrapperStyle = this.wrapper.style),
      (this.indicator = this.wrapper.children[0]),
      (this.indicatorStyle = this.indicator.style),
      (this.scroller = e),
      (this.options = {
        listenX: !0,
        listenY: !0,
        interactive: !1,
        resize: !0,
        defaultScrollbars: !1,
        shrink: !1,
        fade: !1,
        speedRatioX: 0,
        speedRatioY: 0,
      });
    for (var o in s) this.options[o] = s[o];
    if (
      ((this.sizeRatioX = 1),
      (this.sizeRatioY = 1),
      (this.maxPosX = 0),
      (this.maxPosY = 0),
      this.options.interactive &&
        (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(t, "touchend", this)),
        this.options.disablePointer ||
          (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this),
          h.addEvent(t, h.prefixPointerEvent("pointerup"), this)),
        this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(t, "mouseup", this))),
      this.options.fade)
    ) {
      this.wrapperStyle[h.style.transform] = this.scroller.translateZ;
      var n = h.style.transitionDuration;
      if (!n) return;
      this.wrapperStyle[n] = h.isBadAndroid ? "0.0001ms" : "0ms";
      var a = this;
      h.isBadAndroid &&
        r(function () {
          "0.0001ms" === a.wrapperStyle[n] && (a.wrapperStyle[n] = "0s");
        }),
        (this.wrapperStyle.opacity = "0");
    }
  }
  var r =
      t.requestAnimationFrame ||
      t.webkitRequestAnimationFrame ||
      t.mozRequestAnimationFrame ||
      t.oRequestAnimationFrame ||
      t.msRequestAnimationFrame ||
      function (i) {
        t.setTimeout(i, 1e3 / 60);
      },
    h = (function () {
      function s(t) {
        return r !== !1 && ("" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1));
      }
      var o = {},
        n = i.createElement("div").style,
        r = (function () {
          for (var t, i = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, s = i.length; e < s; e++)
            if (((t = i[e] + "ransform"), t in n)) return i[e].substr(0, i[e].length - 1);
          return !1;
        })();
      (o.getTime =
        Date.now ||
        function () {
          return new Date().getTime();
        }),
        (o.extend = function (t, i) {
          for (var e in i) t[e] = i[e];
        }),
        (o.addEvent = function (t, i, e, s) {
          t.addEventListener(i, e, !!s);
        }),
        (o.removeEvent = function (t, i, e, s) {
          t.removeEventListener(i, e, !!s);
        }),
        (o.prefixPointerEvent = function (i) {
          return t.MSPointerEvent ? "MSPointer" + i.charAt(7).toUpperCase() + i.substr(8) : i;
        }),
        (o.momentum = function (t, i, s, o, n, r) {
          var h,
            a,
            l = t - i,
            c = e.abs(l) / s;
          return (
            (r = void 0 === r ? 6e-4 : r),
            (h = t + ((c * c) / (2 * r)) * (l < 0 ? -1 : 1)),
            (a = c / r),
            h < o
              ? ((h = n ? o - (n / 2.5) * (c / 8) : o), (l = e.abs(h - t)), (a = l / c))
              : h > 0 && ((h = n ? (n / 2.5) * (c / 8) : 0), (l = e.abs(t) + h), (a = l / c)),
            { destination: e.round(h), duration: a }
          );
        });
      var h = s("transform");
      return (
        o.extend(o, {
          hasTransform: h !== !1,
          hasPerspective: s("perspective") in n,
          hasTouch: "ontouchstart" in t,
          hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
          hasTransition: s("transition") in n,
        }),
        (o.isBadAndroid = (function () {
          var i = t.navigator.appVersion;
          if (/Android/.test(i) && !/Chrome\/\d/.test(i)) {
            var e = i.match(/Safari\/(\d+.\d)/);
            return !(e && "object" == typeof e && e.length >= 2) || parseFloat(e[1]) < 535.19;
          }
          return !1;
        })()),
        o.extend((o.style = {}), {
          transform: h,
          transitionTimingFunction: s("transitionTimingFunction"),
          transitionDuration: s("transitionDuration"),
          transitionDelay: s("transitionDelay"),
          transformOrigin: s("transformOrigin"),
        }),
        (o.hasClass = function (t, i) {
          var e = new RegExp("(^|\\s)" + i + "(\\s|$)");
          return e.test(t.className);
        }),
        (o.addClass = function (t, i) {
          if (!o.hasClass(t, i)) {
            var e = t.className.split(" ");
            e.push(i), (t.className = e.join(" "));
          }
        }),
        (o.removeClass = function (t, i) {
          if (o.hasClass(t, i)) {
            var e = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
            t.className = t.className.replace(e, " ");
          }
        }),
        (o.offset = function (t) {
          for (var i = -t.offsetLeft, e = -t.offsetTop; (t = t.offsetParent); ) (i -= t.offsetLeft), (e -= t.offsetTop);
          return { left: i, top: e };
        }),
        (o.preventDefaultException = function (t, i) {
          for (var e in i) if (i[e].test(t[e])) return !0;
          return !1;
        }),
        o.extend((o.eventType = {}), {
          touchstart: 1,
          touchmove: 1,
          touchend: 1,
          mousedown: 2,
          mousemove: 2,
          mouseup: 2,
          pointerdown: 3,
          pointermove: 3,
          pointerup: 3,
          MSPointerDown: 3,
          MSPointerMove: 3,
          MSPointerUp: 3,
        }),
        o.extend((o.ease = {}), {
          quadratic: {
            style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fn: function (t) {
              return t * (2 - t);
            },
          },
          circular: {
            style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
            fn: function (t) {
              return e.sqrt(1 - --t * t);
            },
          },
          back: {
            style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            fn: function (t) {
              var i = 4;
              return (t -= 1) * t * ((i + 1) * t + i) + 1;
            },
          },
          bounce: {
            style: "",
            fn: function (t) {
              return (t /= 1) < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            },
          },
          elastic: {
            style: "",
            fn: function (t) {
              var i = 0.22,
                s = 0.4;
              return 0 === t ? 0 : 1 == t ? 1 : s * e.pow(2, -10 * t) * e.sin(((t - i / 4) * (2 * e.PI)) / i) + 1;
            },
          },
        }),
        (o.tap = function (t, e) {
          var s = i.createEvent("Event");
          s.initEvent(e, !0, !0), (s.pageX = t.pageX), (s.pageY = t.pageY), t.target.dispatchEvent(s);
        }),
        (o.click = function (e) {
          var s,
            o = e.target;
          /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) ||
            ((s = i.createEvent(t.MouseEvent ? "MouseEvents" : "Event")),
            s.initEvent("click", !0, !0),
            (s.view = e.view || t),
            (s.detail = 1),
            (s.screenX = o.screenX || 0),
            (s.screenY = o.screenY || 0),
            (s.clientX = o.clientX || 0),
            (s.clientY = o.clientY || 0),
            (s.ctrlKey = !!e.ctrlKey),
            (s.altKey = !!e.altKey),
            (s.shiftKey = !!e.shiftKey),
            (s.metaKey = !!e.metaKey),
            (s.button = 0),
            (s.relatedTarget = null),
            (s._constructed = !0),
            o.dispatchEvent(s));
        }),
        o
      );
    })();
  (s.prototype = {
    version: "5.2.0",
    _init: function () {
      this._initEvents(),
        (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
        this.options.mouseWheel && this._initWheel(),
        this.options.snap && this._initSnap(),
        this.options.keyBindings && this._initKeys();
    },
    destroy: function () {
      this._initEvents(!0), clearTimeout(this.resizeTimeout), (this.resizeTimeout = null), this._execEvent("destroy");
    },
    _transitionEnd: function (t) {
      t.target == this.scroller &&
        this.isInTransition &&
        (this._transitionTime(),
        this.resetPosition(this.options.bounceTime) || ((this.isInTransition = !1), this._execEvent("scrollEnd")));
    },
    _start: function (t) {
      if (1 != h.eventType[t.type]) {
        var i;
        if (((i = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2), 0 !== i)) return;
      }
      if (this.enabled && (!this.initiated || h.eventType[t.type] === this.initiated)) {
        !this.options.preventDefault ||
          h.isBadAndroid ||
          h.preventDefaultException(t.target, this.options.preventDefaultException) ||
          t.preventDefault();
        var s,
          o = t.touches ? t.touches[0] : t;
        (this.initiated = h.eventType[t.type]),
          (this.moved = !1),
          (this.distX = 0),
          (this.distY = 0),
          (this.directionX = 0),
          (this.directionY = 0),
          (this.directionLocked = 0),
          (this.startTime = h.getTime()),
          this.options.useTransition && this.isInTransition
            ? (this._transitionTime(),
              (this.isInTransition = !1),
              (s = this.getComputedPosition()),
              this._translate(e.round(s.x), e.round(s.y)),
              this._execEvent("scrollEnd"))
            : !this.options.useTransition &&
              this.isAnimating &&
              ((this.isAnimating = !1), this._execEvent("scrollEnd")),
          (this.startX = this.x),
          (this.startY = this.y),
          (this.absStartX = this.x),
          (this.absStartY = this.y),
          (this.pointX = o.pageX),
          (this.pointY = o.pageY),
          this._execEvent("beforeScrollStart");
      }
    },
    _move: function (t) {
      if (this.enabled && h.eventType[t.type] === this.initiated) {
        this.options.preventDefault && t.preventDefault();
        var i,
          s,
          o,
          n,
          r = t.touches ? t.touches[0] : t,
          a = r.pageX - this.pointX,
          l = r.pageY - this.pointY,
          c = h.getTime();
        if (
          ((this.pointX = r.pageX),
          (this.pointY = r.pageY),
          (this.distX += a),
          (this.distY += l),
          (o = e.abs(this.distX)),
          (n = e.abs(this.distY)),
          !(c - this.endTime > 300 && o < 10 && n < 10))
        ) {
          if (
            (this.directionLocked ||
              this.options.freeScroll ||
              (o > n + this.options.directionLockThreshold
                ? (this.directionLocked = "h")
                : n >= o + this.options.directionLockThreshold
                ? (this.directionLocked = "v")
                : (this.directionLocked = "n")),
            "h" == this.directionLocked)
          ) {
            if ("vertical" == this.options.eventPassthrough) t.preventDefault();
            else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = !1);
            l = 0;
          } else if ("v" == this.directionLocked) {
            if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
            else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = !1);
            a = 0;
          }
          (a = this.hasHorizontalScroll ? a : 0),
            (l = this.hasVerticalScroll ? l : 0),
            (i = this.x + a),
            (s = this.y + l),
            (i > 0 || i < this.maxScrollX) && (i = this.options.bounce ? this.x + a / 3 : i > 0 ? 0 : this.maxScrollX),
            (s > 0 || s < this.maxScrollY) && (s = this.options.bounce ? this.y + l / 3 : s > 0 ? 0 : this.maxScrollY),
            (this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0),
            (this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0),
            this.moved || this._execEvent("scrollStart"),
            (this.moved = !0),
            this._translate(i, s),
            c - this.startTime > 300 && ((this.startTime = c), (this.startX = this.x), (this.startY = this.y));
        }
      }
    },
    _end: function (t) {
      if (this.enabled && h.eventType[t.type] === this.initiated) {
        this.options.preventDefault &&
          !h.preventDefaultException(t.target, this.options.preventDefaultException) &&
          t.preventDefault();
        var i,
          s,
          o = (t.changedTouches ? t.changedTouches[0] : t, h.getTime() - this.startTime),
          n = e.round(this.x),
          r = e.round(this.y),
          a = e.abs(n - this.startX),
          l = e.abs(r - this.startY),
          c = 0,
          p = "";
        if (
          ((this.isInTransition = 0),
          (this.initiated = 0),
          (this.endTime = h.getTime()),
          !this.resetPosition(this.options.bounceTime))
        ) {
          if ((this.scrollTo(n, r), !this.moved))
            return (
              this.options.tap && h.tap(t, this.options.tap),
              this.options.click && h.click(t),
              void this._execEvent("scrollCancel")
            );
          if (this._events.flick && o < 200 && a < 100 && l < 100) return void this._execEvent("flick");
          if (
            (this.options.momentum &&
              o < 300 &&
              ((i = this.hasHorizontalScroll
                ? h.momentum(
                    this.x,
                    this.startX,
                    o,
                    this.maxScrollX,
                    this.options.bounce ? this.wrapperWidth : 0,
                    this.options.deceleration
                  )
                : { destination: n, duration: 0 }),
              (s = this.hasVerticalScroll
                ? h.momentum(
                    this.y,
                    this.startY,
                    o,
                    this.maxScrollY,
                    this.options.bounce ? this.wrapperHeight : 0,
                    this.options.deceleration
                  )
                : { destination: r, duration: 0 }),
              (n = i.destination),
              (r = s.destination),
              (c = e.max(i.duration, s.duration)),
              (this.isInTransition = 1)),
            this.options.snap)
          ) {
            var d = this._nearestSnap(n, r);
            (this.currentPage = d),
              (c = this.options.snapSpeed || e.max(e.max(e.min(e.abs(n - d.x), 1e3), e.min(e.abs(r - d.y), 1e3)), 300)),
              (n = d.x),
              (r = d.y),
              (this.directionX = 0),
              (this.directionY = 0),
              (p = this.options.bounceEasing);
          }
          return n != this.x || r != this.y
            ? ((n > 0 || n < this.maxScrollX || r > 0 || r < this.maxScrollY) && (p = h.ease.quadratic),
              void this.scrollTo(n, r, c, p))
            : void this._execEvent("scrollEnd");
        }
      }
    },
    _resize: function () {
      var t = this;
      clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = setTimeout(function () {
          t.refresh();
        }, this.options.resizePolling));
    },
    resetPosition: function (t) {
      var i = this.x,
        e = this.y;
      return (
        (t = t || 0),
        !this.hasHorizontalScroll || this.x > 0 ? (i = 0) : this.x < this.maxScrollX && (i = this.maxScrollX),
        !this.hasVerticalScroll || this.y > 0 ? (e = 0) : this.y < this.maxScrollY && (e = this.maxScrollY),
        (i != this.x || e != this.y) && (this.scrollTo(i, e, t, this.options.bounceEasing), !0)
      );
    },
    disable: function () {
      this.enabled = !1;
    },
    enable: function () {
      this.enabled = !0;
    },
    refresh: function () {
      this.wrapper.offsetHeight;
      (this.wrapperWidth = this.wrapper.clientWidth),
        (this.wrapperHeight = this.wrapper.clientHeight),
        (this.scrollerWidth = this.scroller.offsetWidth),
        (this.scrollerHeight = this.scroller.offsetHeight),
        (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
        (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
        (this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0),
        (this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0),
        this.hasHorizontalScroll || ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
        this.hasVerticalScroll || ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
        (this.endTime = 0),
        (this.directionX = 0),
        (this.directionY = 0),
        (this.wrapperOffset = h.offset(this.wrapper)),
        this._execEvent("refresh"),
        this.resetPosition();
    },
    on: function (t, i) {
      this._events[t] || (this._events[t] = []), this._events[t].push(i);
    },
    off: function (t, i) {
      if (this._events[t]) {
        var e = this._events[t].indexOf(i);
        e > -1 && this._events[t].splice(e, 1);
      }
    },
    _execEvent: function (t) {
      if (this._events[t]) {
        var i = 0,
          e = this._events[t].length;
        if (e) for (; i < e; i++) this._events[t][i].apply(this, [].slice.call(arguments, 1));
      }
    },
    scrollBy: function (t, i, e, s) {
      (t = this.x + t), (i = this.y + i), (e = e || 0), this.scrollTo(t, i, e, s);
    },
    scrollTo: function (t, i, e, s) {
      (s = s || h.ease.circular), (this.isInTransition = this.options.useTransition && e > 0);
      var o = this.options.useTransition && s.style;
      !e || o
        ? (o && (this._transitionTimingFunction(s.style), this._transitionTime(e)), this._translate(t, i))
        : this._animate(t, i, e, s.fn);
    },
    scrollToElement: function (t, i, s, o, n) {
      if ((t = t.nodeType ? t : this.scroller.querySelector(t))) {
        var r = h.offset(t);
        (r.left -= this.wrapperOffset.left),
          (r.top -= this.wrapperOffset.top),
          s === !0 && (s = e.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
          o === !0 && (o = e.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
          (r.left -= s || 0),
          (r.top -= o || 0),
          (r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left),
          (r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top),
          (i = void 0 === i || null === i || "auto" === i ? e.max(e.abs(this.x - r.left), e.abs(this.y - r.top)) : i),
          this.scrollTo(r.left, r.top, i, n);
      }
    },
    _transitionTime: function (t) {
      if (this.options.useTransition) {
        t = t || 0;
        var i = h.style.transitionDuration;
        if (i) {
          if (((this.scrollerStyle[i] = t + "ms"), !t && h.isBadAndroid)) {
            this.scrollerStyle[i] = "0.0001ms";
            var e = this;
            r(function () {
              "0.0001ms" === e.scrollerStyle[i] && (e.scrollerStyle[i] = "0s");
            });
          }
          if (this.indicators) for (var s = this.indicators.length; s--; ) this.indicators[s].transitionTime(t);
        }
      }
    },
    _transitionTimingFunction: function (t) {
      if (((this.scrollerStyle[h.style.transitionTimingFunction] = t), this.indicators))
        for (var i = this.indicators.length; i--; ) this.indicators[i].transitionTimingFunction(t);
    },
    _translate: function (t, i) {
      if (
        (this.options.useTransform
          ? (this.scrollerStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ)
          : ((t = e.round(t)),
            (i = e.round(i)),
            (this.scrollerStyle.left = t + "px"),
            (this.scrollerStyle.top = i + "px")),
        (this.x = t),
        (this.y = i),
        this.indicators)
      )
        for (var s = this.indicators.length; s--; ) this.indicators[s].updatePosition();
    },
    _initEvents: function (i) {
      var e = i ? h.removeEvent : h.addEvent,
        s = this.options.bindToWrapper ? this.wrapper : t;
      e(t, "orientationchange", this),
        e(t, "resize", this),
        this.options.click && e(this.wrapper, "click", this, !0),
        this.options.disableMouse ||
          (e(this.wrapper, "mousedown", this),
          e(s, "mousemove", this),
          e(s, "mousecancel", this),
          e(s, "mouseup", this)),
        h.hasPointer &&
          !this.options.disablePointer &&
          (e(this.wrapper, h.prefixPointerEvent("pointerdown"), this),
          e(s, h.prefixPointerEvent("pointermove"), this),
          e(s, h.prefixPointerEvent("pointercancel"), this),
          e(s, h.prefixPointerEvent("pointerup"), this)),
        h.hasTouch &&
          !this.options.disableTouch &&
          (e(this.wrapper, "touchstart", this),
          e(s, "touchmove", this),
          e(s, "touchcancel", this),
          e(s, "touchend", this)),
        e(this.scroller, "transitionend", this),
        e(this.scroller, "webkitTransitionEnd", this),
        e(this.scroller, "oTransitionEnd", this),
        e(this.scroller, "MSTransitionEnd", this);
    },
    getComputedPosition: function () {
      var i,
        e,
        s = t.getComputedStyle(this.scroller, null);
      return (
        this.options.useTransform
          ? ((s = s[h.style.transform].split(")")[0].split(", ")), (i = +(s[12] || s[4])), (e = +(s[13] || s[5])))
          : ((i = +s.left.replace(/[^-\d.]/g, "")), (e = +s.top.replace(/[^-\d.]/g, ""))),
        { x: i, y: e }
      );
    },
    _initIndicators: function () {
      function t(t) {
        if (h.indicators) for (var i = h.indicators.length; i--; ) t.call(h.indicators[i]);
      }
      var i,
        e = this.options.interactiveScrollbars,
        s = "string" != typeof this.options.scrollbars,
        r = [],
        h = this;
      (this.indicators = []),
        this.options.scrollbars &&
          (this.options.scrollY &&
            ((i = {
              el: o("v", e, this.options.scrollbars),
              interactive: e,
              defaultScrollbars: !0,
              customStyle: s,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenX: !1,
            }),
            this.wrapper.appendChild(i.el),
            r.push(i)),
          this.options.scrollX &&
            ((i = {
              el: o("h", e, this.options.scrollbars),
              interactive: e,
              defaultScrollbars: !0,
              customStyle: s,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenY: !1,
            }),
            this.wrapper.appendChild(i.el),
            r.push(i))),
        this.options.indicators && (r = r.concat(this.options.indicators));
      for (var a = r.length; a--; ) this.indicators.push(new n(this, r[a]));
      this.options.fadeScrollbars &&
        (this.on("scrollEnd", function () {
          t(function () {
            this.fade();
          });
        }),
        this.on("scrollCancel", function () {
          t(function () {
            this.fade();
          });
        }),
        this.on("scrollStart", function () {
          t(function () {
            this.fade(1);
          });
        }),
        this.on("beforeScrollStart", function () {
          t(function () {
            this.fade(1, !0);
          });
        })),
        this.on("refresh", function () {
          t(function () {
            this.refresh();
          });
        }),
        this.on("destroy", function () {
          t(function () {
            this.destroy();
          }),
            delete this.indicators;
        });
    },
    _initWheel: function () {
      h.addEvent(this.wrapper, "wheel", this),
        h.addEvent(this.wrapper, "mousewheel", this),
        h.addEvent(this.wrapper, "DOMMouseScroll", this),
        this.on("destroy", function () {
          clearTimeout(this.wheelTimeout),
            (this.wheelTimeout = null),
            h.removeEvent(this.wrapper, "wheel", this),
            h.removeEvent(this.wrapper, "mousewheel", this),
            h.removeEvent(this.wrapper, "DOMMouseScroll", this);
        });
    },
    _wheel: function (t) {
      if (this.enabled) {
        var i,
          s,
          o,
          n,
          r = this;
        if (
          (void 0 === this.wheelTimeout && r._execEvent("scrollStart"),
          clearTimeout(this.wheelTimeout),
          (this.wheelTimeout = setTimeout(function () {
            r.options.snap || r._execEvent("scrollEnd"), (r.wheelTimeout = void 0);
          }, 400)),
          "deltaX" in t)
        )
          1 === t.deltaMode
            ? ((i = -t.deltaX * this.options.mouseWheelSpeed), (s = -t.deltaY * this.options.mouseWheelSpeed))
            : ((i = -t.deltaX), (s = -t.deltaY));
        else if ("wheelDeltaX" in t)
          (i = (t.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
            (s = (t.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
        else if ("wheelDelta" in t) i = s = (t.wheelDelta / 120) * this.options.mouseWheelSpeed;
        else {
          if (!("detail" in t)) return;
          i = s = (-t.detail / 3) * this.options.mouseWheelSpeed;
        }
        if (
          ((i *= this.options.invertWheelDirection),
          (s *= this.options.invertWheelDirection),
          this.hasVerticalScroll || ((i = s), (s = 0)),
          this.options.snap)
        )
          return (
            (o = this.currentPage.pageX),
            (n = this.currentPage.pageY),
            i > 0 ? o-- : i < 0 && o++,
            s > 0 ? n-- : s < 0 && n++,
            void this.goToPage(o, n)
          );
        (o = this.x + e.round(this.hasHorizontalScroll ? i : 0)),
          (n = this.y + e.round(this.hasVerticalScroll ? s : 0)),
          (this.directionX = i > 0 ? -1 : i < 0 ? 1 : 0),
          (this.directionY = s > 0 ? -1 : s < 0 ? 1 : 0),
          o > 0 ? (o = 0) : o < this.maxScrollX && (o = this.maxScrollX),
          n > 0 ? (n = 0) : n < this.maxScrollY && (n = this.maxScrollY),
          this.scrollTo(o, n, 0);
      }
    },
    _initSnap: function () {
      (this.currentPage = {}),
        "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
        this.on("refresh", function () {
          var t,
            i,
            s,
            o,
            n,
            r,
            h = 0,
            a = 0,
            l = 0,
            c = this.options.snapStepX || this.wrapperWidth,
            p = this.options.snapStepY || this.wrapperHeight;
          if (
            ((this.pages = []), this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight)
          ) {
            if (this.options.snap === !0)
              for (s = e.round(c / 2), o = e.round(p / 2); l > -this.scrollerWidth; ) {
                for (this.pages[h] = [], t = 0, n = 0; n > -this.scrollerHeight; )
                  (this.pages[h][t] = {
                    x: e.max(l, this.maxScrollX),
                    y: e.max(n, this.maxScrollY),
                    width: c,
                    height: p,
                    cx: l - s,
                    cy: n - o,
                  }),
                    (n -= p),
                    t++;
                (l -= c), h++;
              }
            else
              for (r = this.options.snap, t = r.length, i = -1; h < t; h++)
                (0 === h || r[h].offsetLeft <= r[h - 1].offsetLeft) && ((a = 0), i++),
                  this.pages[a] || (this.pages[a] = []),
                  (l = e.max(-r[h].offsetLeft, this.maxScrollX)),
                  (n = e.max(-r[h].offsetTop, this.maxScrollY)),
                  (s = l - e.round(r[h].offsetWidth / 2)),
                  (o = n - e.round(r[h].offsetHeight / 2)),
                  (this.pages[a][i] = { x: l, y: n, width: r[h].offsetWidth, height: r[h].offsetHeight, cx: s, cy: o }),
                  l > this.maxScrollX && a++;
            this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
              this.options.snapThreshold % 1 === 0
                ? ((this.snapThresholdX = this.options.snapThreshold),
                  (this.snapThresholdY = this.options.snapThreshold))
                : ((this.snapThresholdX = e.round(
                    this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold
                  )),
                  (this.snapThresholdY = e.round(
                    this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold
                  )));
          }
        }),
        this.on("flick", function () {
          var t =
            this.options.snapSpeed ||
            e.max(e.max(e.min(e.abs(this.x - this.startX), 1e3), e.min(e.abs(this.y - this.startY), 1e3)), 300);
          this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t);
        });
    },
    _nearestSnap: function (t, i) {
      if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
      var s = 0,
        o = this.pages.length,
        n = 0;
      if (e.abs(t - this.absStartX) < this.snapThresholdX && e.abs(i - this.absStartY) < this.snapThresholdY)
        return this.currentPage;
      for (
        t > 0 ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
          i > 0 ? (i = 0) : i < this.maxScrollY && (i = this.maxScrollY);
        s < o;
        s++
      )
        if (t >= this.pages[s][0].cx) {
          t = this.pages[s][0].x;
          break;
        }
      for (o = this.pages[s].length; n < o; n++)
        if (i >= this.pages[0][n].cy) {
          i = this.pages[0][n].y;
          break;
        }
      return (
        s == this.currentPage.pageX &&
          ((s += this.directionX),
          s < 0 ? (s = 0) : s >= this.pages.length && (s = this.pages.length - 1),
          (t = this.pages[s][0].x)),
        n == this.currentPage.pageY &&
          ((n += this.directionY),
          n < 0 ? (n = 0) : n >= this.pages[0].length && (n = this.pages[0].length - 1),
          (i = this.pages[0][n].y)),
        { x: t, y: i, pageX: s, pageY: n }
      );
    },
    goToPage: function (t, i, s, o) {
      (o = o || this.options.bounceEasing),
        t >= this.pages.length ? (t = this.pages.length - 1) : t < 0 && (t = 0),
        i >= this.pages[t].length ? (i = this.pages[t].length - 1) : i < 0 && (i = 0);
      var n = this.pages[t][i].x,
        r = this.pages[t][i].y;
      (s =
        void 0 === s
          ? this.options.snapSpeed || e.max(e.max(e.min(e.abs(n - this.x), 1e3), e.min(e.abs(r - this.y), 1e3)), 300)
          : s),
        (this.currentPage = { x: n, y: r, pageX: t, pageY: i }),
        this.scrollTo(n, r, s, o);
    },
    next: function (t, i) {
      var e = this.currentPage.pageX,
        s = this.currentPage.pageY;
      e++, e >= this.pages.length && this.hasVerticalScroll && ((e = 0), s++), this.goToPage(e, s, t, i);
    },
    prev: function (t, i) {
      var e = this.currentPage.pageX,
        s = this.currentPage.pageY;
      e--, e < 0 && this.hasVerticalScroll && ((e = 0), s--), this.goToPage(e, s, t, i);
    },
    _initKeys: function (i) {
      var e,
        s = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };
      if ("object" == typeof this.options.keyBindings)
        for (e in this.options.keyBindings)
          "string" == typeof this.options.keyBindings[e] &&
            (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
      else this.options.keyBindings = {};
      for (e in s) this.options.keyBindings[e] = this.options.keyBindings[e] || s[e];
      h.addEvent(t, "keydown", this),
        this.on("destroy", function () {
          h.removeEvent(t, "keydown", this);
        });
    },
    _key: function (t) {
      if (this.enabled) {
        var i,
          s = this.options.snap,
          o = s ? this.currentPage.pageX : this.x,
          n = s ? this.currentPage.pageY : this.y,
          r = h.getTime(),
          a = this.keyTime || 0,
          l = 0.25;
        switch (
          (this.options.useTransition &&
            this.isInTransition &&
            ((i = this.getComputedPosition()), this._translate(e.round(i.x), e.round(i.y)), (this.isInTransition = !1)),
          (this.keyAcceleration = r - a < 200 ? e.min(this.keyAcceleration + l, 50) : 0),
          t.keyCode)
        ) {
          case this.options.keyBindings.pageUp:
            this.hasHorizontalScroll && !this.hasVerticalScroll
              ? (o += s ? 1 : this.wrapperWidth)
              : (n += s ? 1 : this.wrapperHeight);
            break;
          case this.options.keyBindings.pageDown:
            this.hasHorizontalScroll && !this.hasVerticalScroll
              ? (o -= s ? 1 : this.wrapperWidth)
              : (n -= s ? 1 : this.wrapperHeight);
            break;
          case this.options.keyBindings.end:
            (o = s ? this.pages.length - 1 : this.maxScrollX), (n = s ? this.pages[0].length - 1 : this.maxScrollY);
            break;
          case this.options.keyBindings.home:
            (o = 0), (n = 0);
            break;
          case this.options.keyBindings.left:
            o += s ? -1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.up:
            n += s ? 1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.right:
            o -= s ? -1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.down:
            n -= s ? 1 : (5 + this.keyAcceleration) >> 0;
            break;
          default:
            return;
        }
        if (s) return void this.goToPage(o, n);
        o > 0
          ? ((o = 0), (this.keyAcceleration = 0))
          : o < this.maxScrollX && ((o = this.maxScrollX), (this.keyAcceleration = 0)),
          n > 0
            ? ((n = 0), (this.keyAcceleration = 0))
            : n < this.maxScrollY && ((n = this.maxScrollY), (this.keyAcceleration = 0)),
          this.scrollTo(o, n, 0),
          (this.keyTime = r);
      }
    },
    _animate: function (t, i, e, s) {
      function o() {
        var d,
          u,
          f,
          m = h.getTime();
        return m >= p
          ? ((n.isAnimating = !1),
            n._translate(t, i),
            void (n.resetPosition(n.options.bounceTime) || n._execEvent("scrollEnd")))
          : ((m = (m - c) / e),
            (f = s(m)),
            (d = (t - a) * f + a),
            (u = (i - l) * f + l),
            n._translate(d, u),
            void (n.isAnimating && r(o)));
      }
      var n = this,
        a = this.x,
        l = this.y,
        c = h.getTime(),
        p = c + e;
      (this.isAnimating = !0), o();
    },
    handleEvent: function (t) {
      switch (t.type) {
        case "touchstart":
        case "pointerdown":
        case "MSPointerDown":
        case "mousedown":
          this._start(t);
          break;
        case "touchmove":
        case "pointermove":
        case "MSPointerMove":
        case "mousemove":
          this._move(t);
          break;
        case "touchend":
        case "pointerup":
        case "MSPointerUp":
        case "mouseup":
        case "touchcancel":
        case "pointercancel":
        case "MSPointerCancel":
        case "mousecancel":
          this._end(t);
          break;
        case "orientationchange":
        case "resize":
          this._resize();
          break;
        case "transitionend":
        case "webkitTransitionEnd":
        case "oTransitionEnd":
        case "MSTransitionEnd":
          this._transitionEnd(t);
          break;
        case "wheel":
        case "DOMMouseScroll":
        case "mousewheel":
          this._wheel(t);
          break;
        case "keydown":
          this._key(t);
          break;
        case "click":
          this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation());
      }
    },
  }),
    (n.prototype = {
      handleEvent: function (t) {
        switch (t.type) {
          case "touchstart":
          case "pointerdown":
          case "MSPointerDown":
          case "mousedown":
            this._start(t);
            break;
          case "touchmove":
          case "pointermove":
          case "MSPointerMove":
          case "mousemove":
            this._move(t);
            break;
          case "touchend":
          case "pointerup":
          case "MSPointerUp":
          case "mouseup":
          case "touchcancel":
          case "pointercancel":
          case "MSPointerCancel":
          case "mousecancel":
            this._end(t);
        }
      },
      destroy: function () {
        this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
          this.options.interactive &&
            (h.removeEvent(this.indicator, "touchstart", this),
            h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this),
            h.removeEvent(this.indicator, "mousedown", this),
            h.removeEvent(t, "touchmove", this),
            h.removeEvent(t, h.prefixPointerEvent("pointermove"), this),
            h.removeEvent(t, "mousemove", this),
            h.removeEvent(t, "touchend", this),
            h.removeEvent(t, h.prefixPointerEvent("pointerup"), this),
            h.removeEvent(t, "mouseup", this)),
          this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper);
      },
      _start: function (i) {
        var e = i.touches ? i.touches[0] : i;
        i.preventDefault(),
          i.stopPropagation(),
          this.transitionTime(),
          (this.initiated = !0),
          (this.moved = !1),
          (this.lastPointX = e.pageX),
          (this.lastPointY = e.pageY),
          (this.startTime = h.getTime()),
          this.options.disableTouch || h.addEvent(t, "touchmove", this),
          this.options.disablePointer || h.addEvent(t, h.prefixPointerEvent("pointermove"), this),
          this.options.disableMouse || h.addEvent(t, "mousemove", this),
          this.scroller._execEvent("beforeScrollStart");
      },
      _move: function (t) {
        var i,
          e,
          s,
          o,
          n = t.touches ? t.touches[0] : t;
        h.getTime();
        this.moved || this.scroller._execEvent("scrollStart"),
          (this.moved = !0),
          (i = n.pageX - this.lastPointX),
          (this.lastPointX = n.pageX),
          (e = n.pageY - this.lastPointY),
          (this.lastPointY = n.pageY),
          (s = this.x + i),
          (o = this.y + e),
          this._pos(s, o),
          t.preventDefault(),
          t.stopPropagation();
      },
      _end: function (i) {
        if (this.initiated) {
          if (
            ((this.initiated = !1),
            i.preventDefault(),
            i.stopPropagation(),
            h.removeEvent(t, "touchmove", this),
            h.removeEvent(t, h.prefixPointerEvent("pointermove"), this),
            h.removeEvent(t, "mousemove", this),
            this.scroller.options.snap)
          ) {
            var s = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
              o =
                this.options.snapSpeed ||
                e.max(e.max(e.min(e.abs(this.scroller.x - s.x), 1e3), e.min(e.abs(this.scroller.y - s.y), 1e3)), 300);
            (this.scroller.x == s.x && this.scroller.y == s.y) ||
              ((this.scroller.directionX = 0),
              (this.scroller.directionY = 0),
              (this.scroller.currentPage = s),
              this.scroller.scrollTo(s.x, s.y, o, this.scroller.options.bounceEasing));
          }
          this.moved && this.scroller._execEvent("scrollEnd");
        }
      },
      transitionTime: function (t) {
        t = t || 0;
        var i = h.style.transitionDuration;
        if (i && ((this.indicatorStyle[i] = t + "ms"), !t && h.isBadAndroid)) {
          this.indicatorStyle[i] = "0.0001ms";
          var e = this;
          r(function () {
            "0.0001ms" === e.indicatorStyle[i] && (e.indicatorStyle[i] = "0s");
          });
        }
      },
      transitionTimingFunction: function (t) {
        this.indicatorStyle[h.style.transitionTimingFunction] = t;
      },
      refresh: function () {
        this.transitionTime(),
          this.options.listenX && !this.options.listenY
            ? (this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none")
            : this.options.listenY && !this.options.listenX
            ? (this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none")
            : (this.indicatorStyle.display =
                this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none"),
          this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
            ? (h.addClass(this.wrapper, "iScrollBothScrollbars"),
              h.removeClass(this.wrapper, "iScrollLoneScrollbar"),
              this.options.defaultScrollbars &&
                this.options.customStyle &&
                (this.options.listenX ? (this.wrapper.style.right = "8px") : (this.wrapper.style.bottom = "8px")))
            : (h.removeClass(this.wrapper, "iScrollBothScrollbars"),
              h.addClass(this.wrapper, "iScrollLoneScrollbar"),
              this.options.defaultScrollbars &&
                this.options.customStyle &&
                (this.options.listenX ? (this.wrapper.style.right = "2px") : (this.wrapper.style.bottom = "2px")));
        this.wrapper.offsetHeight;
        this.options.listenX &&
          ((this.wrapperWidth = this.wrapper.clientWidth),
          this.options.resize
            ? ((this.indicatorWidth = e.max(
                e.round(
                  (this.wrapperWidth * this.wrapperWidth) / (this.scroller.scrollerWidth || this.wrapperWidth || 1)
                ),
                8
              )),
              (this.indicatorStyle.width = this.indicatorWidth + "px"))
            : (this.indicatorWidth = this.indicator.clientWidth),
          (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
          "clip" == this.options.shrink
            ? ((this.minBoundaryX = -this.indicatorWidth + 8), (this.maxBoundaryX = this.wrapperWidth - 8))
            : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
          (this.sizeRatioX =
            this.options.speedRatioX || (this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX))),
          this.options.listenY &&
            ((this.wrapperHeight = this.wrapper.clientHeight),
            this.options.resize
              ? ((this.indicatorHeight = e.max(
                  e.round(
                    (this.wrapperHeight * this.wrapperHeight) /
                      (this.scroller.scrollerHeight || this.wrapperHeight || 1)
                  ),
                  8
                )),
                (this.indicatorStyle.height = this.indicatorHeight + "px"))
              : (this.indicatorHeight = this.indicator.clientHeight),
            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
            "clip" == this.options.shrink
              ? ((this.minBoundaryY = -this.indicatorHeight + 8), (this.maxBoundaryY = this.wrapperHeight - 8))
              : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
            (this.sizeRatioY =
              this.options.speedRatioY || (this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY))),
          this.updatePosition();
      },
      updatePosition: function () {
        var t = (this.options.listenX && e.round(this.sizeRatioX * this.scroller.x)) || 0,
          i = (this.options.listenY && e.round(this.sizeRatioY * this.scroller.y)) || 0;
        this.options.ignoreBoundaries ||
          (t < this.minBoundaryX
            ? ("scale" == this.options.shrink &&
                ((this.width = e.max(this.indicatorWidth + t, 8)), (this.indicatorStyle.width = this.width + "px")),
              (t = this.minBoundaryX))
            : t > this.maxBoundaryX
            ? "scale" == this.options.shrink
              ? ((this.width = e.max(this.indicatorWidth - (t - this.maxPosX), 8)),
                (this.indicatorStyle.width = this.width + "px"),
                (t = this.maxPosX + this.indicatorWidth - this.width))
              : (t = this.maxBoundaryX)
            : "scale" == this.options.shrink &&
              this.width != this.indicatorWidth &&
              ((this.width = this.indicatorWidth), (this.indicatorStyle.width = this.width + "px")),
          i < this.minBoundaryY
            ? ("scale" == this.options.shrink &&
                ((this.height = e.max(this.indicatorHeight + 3 * i, 8)),
                (this.indicatorStyle.height = this.height + "px")),
              (i = this.minBoundaryY))
            : i > this.maxBoundaryY
            ? "scale" == this.options.shrink
              ? ((this.height = e.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8)),
                (this.indicatorStyle.height = this.height + "px"),
                (i = this.maxPosY + this.indicatorHeight - this.height))
              : (i = this.maxBoundaryY)
            : "scale" == this.options.shrink &&
              this.height != this.indicatorHeight &&
              ((this.height = this.indicatorHeight), (this.indicatorStyle.height = this.height + "px"))),
          (this.x = t),
          (this.y = i),
          this.scroller.options.useTransform
            ? (this.indicatorStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ)
            : ((this.indicatorStyle.left = t + "px"), (this.indicatorStyle.top = i + "px"));
      },
      _pos: function (t, i) {
        t < 0 ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
          i < 0 ? (i = 0) : i > this.maxPosY && (i = this.maxPosY),
          (t = this.options.listenX ? e.round(t / this.sizeRatioX) : this.scroller.x),
          (i = this.options.listenY ? e.round(i / this.sizeRatioY) : this.scroller.y),
          this.scroller.scrollTo(t, i);
      },
      fade: function (t, i) {
        if (!i || this.visible) {
          clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
          var e = t ? 250 : 500,
            s = t ? 0 : 300;
          (t = t ? "1" : "0"),
            (this.wrapperStyle[h.style.transitionDuration] = e + "ms"),
            (this.fadeTimeout = setTimeout(
              function (t) {
                (this.wrapperStyle.opacity = t), (this.visible = +t);
              }.bind(this, t),
              s
            ));
        }
      },
    }),
    (s.utils = h),
    "undefined" != typeof module && module.exports
      ? (module.exports = s)
      : "function" == typeof define && define.amd
      ? define(function () {
          return s;
        })
      : (t.IScroll = s);
})(window, document, Math) /*!

/* fullPage ScrollOverflow
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */,
  (function (t, i) {
    var e = "active",
      s = "." + e,
      o = "fp-section",
      n = "." + o,
      r = n + s,
      h = "fp-slide",
      a = "." + h,
      l = a + s,
      c = "fp-slides",
      p = "." + c,
      d = "fp-scrollable",
      u = "." + d;
    "undefined" != typeof IScroll &&
      ((IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
      (IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this),
          this.wrapper.removeEventListener("mousewheel", this),
          this.wrapper.removeEventListener("DOMMouseScroll", this);
      })),
      (t.iscrollHandler = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function (t) {
          var e = i(r).find(u);
          e.each(function () {
            var e = i(this).data("iscrollInstance");
            "undefined" != typeof e && e && (t ? e.wheelOn() : e.wheelOff());
          });
        },
        onLeave: function () {
          iscrollHandler.toggleWheel(!1);
        },
        beforeLeave: function () {
          iscrollHandler.onLeave();
        },
        afterLoad: function () {
          iscrollHandler.toggleWheel(!0);
        },
        create: function (t, e, s) {
          var o = t.find(u);
          o.height(e),
            o.each(function () {
              var t = i(this),
                e = t.data("iscrollInstance");
              e &&
                i.each(iscrollHandler.iScrollInstances, function () {
                  i(this).destroy();
                }),
                (e = new IScroll(t.get(0), s)),
                e.on("scrollEnd", function () {
                  (this.fp_isAtTop = this.y > -30), (this.fp_isAtEnd = this.y - this.maxScrollY < 30);
                }),
                iscrollHandler.iScrollInstances.push(e),
                e.wheelOff(),
                t.data("iscrollInstance", e);
            });
        },
        isScrolled: function (t, i) {
          var e = i.data("iscrollInstance");
          return (
            !e ||
            ("top" === t
              ? e.y >= 0 && !i.scrollTop()
              : "bottom" === t
              ? 0 - e.y + i.scrollTop() + 1 + i.innerHeight() >= i[0].scrollHeight
              : void 0)
          );
        },
        scrollable: function (t) {
          return t.find(p).length ? t.find(l).find(u) : t.find(u);
        },
        scrollHeight: function (t) {
          return t.find(u).children().first().get(0).scrollHeight;
        },
        remove: function (t) {
          var i = t.find(u);
          if (i.length) {
            var e = i.data("iscrollInstance");
            e && e.destroy(), i.data("iscrollInstance", null);
          }
          t.find(u).children().first().children().first().unwrap().unwrap();
        },
        update: function (t, e) {
          clearTimeout(iscrollHandler.refreshId),
            (iscrollHandler.refreshId = setTimeout(function () {
              i.each(iscrollHandler.iScrollInstances, function () {
                i(this).get(0).refresh();
              });
            }, 150)),
            t
              .find(u)
              .css("height", e + "px")
              .parent()
              .css("height", e + "px");
        },
        wrapContent: function () {
          return '<div class="' + d + '"><div class="fp-scroller"></div></div>';
        },
      });
  })(window, jQuery),
  (function (t, i, e) {
    $.fn.fp_scrolloverflow = (function () {
      function e() {
        function e() {
          $("body").hasClass(g) ? n() : o(s), $.fn.fullpage.shared.afterRenderActions();
        }
        function s(i) {
          if (!i.hasClass("fp-noscroll")) {
            i.css("overflow", "hidden");
            var e,
              s = r.options.scrollOverflowHandler,
              o = s.wrapContent(),
              n = i.closest(a),
              h = s.scrollable(i);
            h.length
              ? (e = s.scrollHeight(i))
              : ((e = i.get(0).scrollHeight), r.options.verticalCentered && (e = i.find(v).get(0).scrollHeight));
            var l = $(t).height() - parseInt(n.css("padding-bottom")) - parseInt(n.css("padding-top"));
            e > l
              ? h.length
                ? s.update(i, l)
                : (r.options.verticalCentered ? i.find(v).wrapInner(o) : i.wrapInner(o),
                  s.create(i, l, r.iscrollOptions))
              : s.remove(i),
              i.css("overflow", "");
          }
        }
        function o(t) {
          $(a).each(function () {
            var i = $(this).find(p);
            i.length
              ? i.each(function () {
                  t($(this));
                })
              : t($(this));
          });
        }
        function n() {
          var t = r.options.scrollOverflowHandler;
          o(function (i) {
            i.closest(a).hasClass(y) && t.remove(i);
          });
        }
        var r = this;
        (r.options = null),
          (r.init = function (s, o) {
            return (r.options = s), (r.iscrollOptions = o), "complete" === i.readyState && e(), $(t).on("load", e), r;
          }),
          (r.createScrollBarForAll = e);
      }
      var s = "fp-scrollable",
        o = "." + s,
        n = "active",
        r = "." + n,
        h = "fp-section",
        a = "." + h,
        l = a + r,
        c = "fp-slide",
        p = "." + c,
        d = p + r,
        u = "fp-slides",
        f = "." + u,
        m = "fp-tableCell",
        v = "." + m,
        g = "fp-responsive",
        y = "fp-auto-height-responsive";
      (IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
        (IScroll.prototype.wheelOff = function () {
          this.wrapper.removeEventListener("wheel", this),
            this.wrapper.removeEventListener("mousewheel", this),
            this.wrapper.removeEventListener("DOMMouseScroll", this);
        });
      var S = {
        refreshId: null,
        iScrollInstances: [],
        iscrollOptions: {
          scrollbars: !0,
          mouseWheel: !0,
          hideScrollbars: !1,
          fadeScrollbars: !1,
          disableMouse: !0,
          interactiveScrollbars: !0,
        },
        init: function (i) {
          var s = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
          return (
            (S.iscrollOptions.click = s),
            (S.iscrollOptions = $.extend(S.iscrollOptions, i.scrollOverflowOptions)),
            new e().init(i, S.iscrollOptions)
          );
        },
        toggleWheel: function (t) {
          var i = $(l).find(o);
          i.each(function () {
            var i = $(this).data("iscrollInstance");
            "undefined" != typeof i && i && (t ? i.wheelOn() : i.wheelOff());
          });
        },
        onLeave: function () {
          S.toggleWheel(!1);
        },
        beforeLeave: function () {
          S.onLeave();
        },
        afterLoad: function () {
          S.toggleWheel(!0);
        },
        create: function (t, i, e) {
          var s = t.find(o);
          s.height(i),
            s.each(function () {
              var t = $(this),
                i = t.data("iscrollInstance");
              i &&
                $.each(S.iScrollInstances, function () {
                  $(this).destroy();
                }),
                (i = new IScroll(t.get(0), e)),
                S.iScrollInstances.push(i),
                i.wheelOff(),
                t.data("iscrollInstance", i);
            });
        },
        isScrolled: function (t, i) {
          var e = i.data("iscrollInstance");
          return (
            !e ||
            ("top" === t
              ? e.y >= 0 && !i.scrollTop()
              : "bottom" === t
              ? 0 - e.y + i.scrollTop() + 1 + i.innerHeight() >= i[0].scrollHeight
              : void 0)
          );
        },
        scrollable: function (t) {
          return t.find(f).length ? t.find(d).find(o) : t.find(o);
        },
        scrollHeight: function (t) {
          return t.find(o).children().first().get(0).scrollHeight;
        },
        remove: function (t) {
          var i = t.find(o);
          if (i.length) {
            var e = i.data("iscrollInstance");
            e.destroy(), i.data("iscrollInstance", null);
          }
          t.find(o).children().first().children().first().unwrap().unwrap();
        },
        update: function (t, i) {
          clearTimeout(S.refreshId),
            (S.refreshId = setTimeout(function () {
              $.each(S.iScrollInstances, function () {
                $(this).get(0).refresh();
              });
            }, 150)),
            t
              .find(o)
              .css("height", i + "px")
              .parent()
              .css("height", i + "px");
        },
        wrapContent: function () {
          return '<div class="' + s + '"><div class="fp-scroller"></div></div>';
        },
      };
      return { iscrollHandler: S };
    })();
  })(window, jQuery);

/*!
 * fullPage 2.9.5
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!(function (e, n) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], function (o) {
        return n(o, e, e.document, e.Math);
      })
    : "object" == typeof exports && exports
    ? (module.exports = n(require("jquery"), e, e.document, e.Math))
    : n(jQuery, e, e.document, e.Math);
})("undefined" != typeof window ? window : this, function (e, n, o, t, i) {
  "use strict";
  var a = "fullpage-wrapper",
    l = "." + a,
    r = "fp-responsive",
    s = "fp-notransition",
    c = "fp-destroyed",
    d = "fp-enabled",
    f = "fp-viewing",
    u = "active",
    h = "." + u,
    p = "fp-completely",
    v = "." + p,
    g = ".section",
    m = "fp-section",
    w = "." + m,
    S = w + h,
    y = w + ":first",
    x = w + ":last",
    b = "fp-tableCell",
    C = "." + b,
    T = "fp-auto-height",
    k = "fp-normal-scroll",
    L = "fp-nav",
    A = "#" + L,
    O = "fp-tooltip",
    I = "." + O,
    E = "fp-show-active",
    M = ".slide",
    B = "fp-slide",
    R = "." + B,
    z = R + h,
    H = "fp-slides",
    P = "." + H,
    D = "fp-slidesContainer",
    q = "." + D,
    F = "fp-table",
    V = "fp-slidesNav",
    j = "." + V,
    Y = j + " a",
    N = "fp-controlArrow",
    U = "." + N,
    X = "fp-prev",
    W = "." + X,
    K = N + " " + X,
    _ = U + W,
    Q = "fp-next",
    G = "." + Q,
    J = N + " " + Q,
    Z = U + G,
    $ = e(n),
    ee = e(o);
  e.fn.fullpage = function (N) {
    function W(n, o) {
      n || Jn(0), oo("autoScrolling", n, o);
      var t = e(S);
      N.autoScrolling && !N.scrollBar
        ? (ao.css({ overflow: "hidden", height: "100%" }),
          Q(Bo.recordHistory, "internal"),
          go.css({ "-ms-touch-action": "none", "touch-action": "none" }),
          t.length && Jn(t.position().top))
        : (ao.css({ overflow: "visible", height: "initial" }),
          Q(!1, "internal"),
          go.css({ "-ms-touch-action": "", "touch-action": "" }),
          t.length && ao.scrollTop(t.position().top));
    }
    function Q(e, n) {
      oo("recordHistory", e, n);
    }
    function G(e, n) {
      oo("scrollingSpeed", e, n);
    }
    function ne(e, n) {
      oo("fitToSection", e, n);
    }
    function oe(e) {
      N.lockAnchors = e;
    }
    function te(e) {
      e ? (Nn(), Un()) : (Yn(), Xn());
    }
    function ie(n, o) {
      "undefined" != typeof o
        ? ((o = o.replace(/ /g, "").split(",")),
          e.each(o, function (e, o) {
            $n(n, o, "m");
          }))
        : ($n(n, "all", "m"), n ? (te(!0), Wn()) : (te(!1), Kn()));
    }
    function ae(n, o) {
      "undefined" != typeof o
        ? ((o = o.replace(/ /g, "").split(",")),
          e.each(o, function (e, o) {
            $n(n, o, "k");
          }))
        : ($n(n, "all", "k"), (N.keyboardScrolling = n));
    }
    function le() {
      var n = e(S).prev(w);
      n.length || (!N.loopTop && !N.continuousVertical) || (n = e(w).last()), n.length && Ne(n, null, !0);
    }
    function re() {
      var n = e(S).next(w);
      n.length || (!N.loopBottom && !N.continuousVertical) || (n = e(w).first()), n.length && Ne(n, null, !1);
    }
    function se(e, n) {
      G(0, "internal"), ce(e, n), G(Bo.scrollingSpeed, "internal");
    }
    function ce(e, n) {
      var o = Bn(e);
      "undefined" != typeof n ? zn(e, n) : o.length > 0 && Ne(o);
    }
    function de(e) {
      Ve("right", e);
    }
    function fe(e) {
      Ve("left", e);
    }
    function ue(n) {
      if (!go.hasClass(c)) {
        (wo = !0),
          (mo = $.height()),
          e(w).each(function () {
            var n = e(this).find(P),
              o = e(this).find(R);
            N.verticalCentered &&
              e(this)
                .find(C)
                .css("height", En(e(this)) + "px"),
              e(this).css("height", mo + "px"),
              o.length > 1 && gn(n, n.find(z));
          }),
          N.scrollOverflow && Co.createScrollBarForAll();
        var o = e(S),
          t = o.index(w);
        t && se(t + 1),
          (wo = !1),
          e.isFunction(N.afterResize) && n && N.afterResize.call(go),
          e.isFunction(N.afterReBuild) && !n && N.afterReBuild.call(go);
      }
    }
    function he(n) {
      var o = lo.hasClass(r);
      n
        ? o ||
          (W(!1, "internal"),
          ne(!1, "internal"),
          e(A).hide(),
          lo.addClass(r),
          e.isFunction(N.afterResponsive) && N.afterResponsive.call(go, n))
        : o &&
          (W(Bo.autoScrolling, "internal"),
          ne(Bo.autoScrolling, "internal"),
          e(A).show(),
          lo.removeClass(r),
          e.isFunction(N.afterResponsive) && N.afterResponsive.call(go, n));
    }
    function pe() {
      N.css3 && (N.css3 = jn()),
        (N.scrollBar = N.scrollBar || N.hybrid),
        ge(),
        me(),
        ie(!0),
        W(N.autoScrolling, "internal"),
        xn(),
        Vn(),
        "complete" === o.readyState && nn(),
        $.on("load", nn);
    }
    function ve() {
      $.on("scroll", Ie).on("hashchange", on).blur(fn).resize(yn),
        ee
          .keydown(an)
          .keyup(rn)
          .on("click touchstart", A + " a", un)
          .on("click touchstart", Y, hn)
          .on("click", I, ln),
        e(w).on("click touchstart", U, dn),
        N.normalScrollElements &&
          (ee.on("mouseenter touchstart", N.normalScrollElements, function () {
            ie(!1);
          }),
          ee.on("mouseleave touchend", N.normalScrollElements, function () {
            ie(!0);
          }));
    }
    function ge() {
      var n = go.find(N.sectionSelector);
      N.anchors.length ||
        (N.anchors = n
          .filter("[data-anchor]")
          .map(function () {
            return e(this).data("anchor").toString();
          })
          .get()),
        N.navigationTooltips.length ||
          (N.navigationTooltips = n
            .filter("[data-tooltip]")
            .map(function () {
              return e(this).data("tooltip").toString();
            })
            .get());
    }
    function me() {
      go.css({ height: "100%", position: "relative" }),
        go.addClass(a),
        e("html").addClass(d),
        (mo = $.height()),
        go.removeClass(c),
        xe(),
        e(w).each(function (n) {
          var o = e(this),
            t = o.find(R),
            i = t.length;
          Se(o, n), ye(o, n), i > 0 ? we(o, t, i) : N.verticalCentered && In(o);
        }),
        N.fixedElements && N.css3 && e(N.fixedElements).appendTo(lo),
        N.navigation && Ce(),
        Te(),
        N.scrollOverflow ? (Co = N.scrollOverflowHandler.init(N)) : Ae();
    }
    function we(n, o, t) {
      var i = 100 * t,
        a = 100 / t;
      o.wrapAll('<div class="' + D + '" />'),
        o.parent().wrap('<div class="' + H + '" />'),
        n.find(q).css("width", i + "%"),
        t > 1 && (N.controlArrows && be(n), N.slidesNavigation && Pn(n, t)),
        o.each(function (n) {
          e(this).css("width", a + "%"), N.verticalCentered && In(e(this));
        });
      var l = n.find(z);
      l.length && (0 !== e(S).index(w) || (0 === e(S).index(w) && 0 !== l.index()))
        ? Gn(l, "internal")
        : o.eq(0).addClass(u);
    }
    function Se(n, o) {
      o || 0 !== e(S).length || n.addClass(u),
        (uo = e(S)),
        n.css("height", mo + "px"),
        N.paddingTop && n.css("padding-top", N.paddingTop),
        N.paddingBottom && n.css("padding-bottom", N.paddingBottom),
        "undefined" != typeof N.sectionsColor[o] && n.css("background-color", N.sectionsColor[o]),
        "undefined" != typeof N.anchors[o] && n.attr("data-anchor", N.anchors[o]);
    }
    function ye(n, o) {
      "undefined" != typeof N.anchors[o] && n.hasClass(u) && Ln(N.anchors[o], o),
        N.menu && N.css3 && e(N.menu).closest(l).length && e(N.menu).appendTo(lo);
    }
    function xe() {
      go.find(N.sectionSelector).addClass(m), go.find(N.slideSelector).addClass(B);
    }
    function be(e) {
      e.find(P).after('<div class="' + K + '"></div><div class="' + J + '"></div>'),
        "#fff" != N.controlArrowColor &&
          (e.find(Z).css("border-color", "transparent transparent transparent " + N.controlArrowColor),
          e.find(_).css("border-color", "transparent " + N.controlArrowColor + " transparent transparent")),
        N.loopHorizontal || e.find(_).hide();
    }
    function Ce() {
      lo.append('<div id="' + L + '"><ul></ul></div>');
      var n = e(A);
      n.addClass(function () {
        return N.showActiveTooltip ? E + " " + N.navigationPosition : N.navigationPosition;
      });
      for (var o = 0; o < e(w).length; o++) {
        var t = "";
        N.anchors.length && (t = N.anchors[o]);
        var i = '<li><a href="#' + t + '"><span></span></a>',
          a = N.navigationTooltips[o];
        "undefined" != typeof a &&
          "" !== a &&
          (i += '<div class="' + O + " " + N.navigationPosition + '">' + a + "</div>"),
          (i += "</li>"),
          n.find("ul").append(i);
      }
      e(A).css("margin-top", "-" + e(A).height() / 2 + "px"), e(A).find("li").eq(e(S).index(w)).find("a").addClass(u);
    }
    function Te() {
      go.find('iframe[src*="youtube.com/embed/"]').each(function () {
        ke(e(this), "enablejsapi=1");
      });
    }
    function ke(e, n) {
      var o = e.attr("src");
      e.attr("src", o + Le(o) + n);
    }
    function Le(e) {
      return /\?/.test(e) ? "&" : "?";
    }
    function Ae() {
      var n = e(S);
      n.addClass(p),
        Ge(n),
        Je(n),
        N.scrollOverflow && N.scrollOverflowHandler.afterLoad(),
        Oe() && e.isFunction(N.afterLoad) && N.afterLoad.call(n, n.data("anchor"), n.index(w) + 1),
        e.isFunction(N.afterRender) && N.afterRender.call(go);
    }
    function Oe() {
      var e = Bn(tn().section);
      return !e.length || (e.length && e.index() === uo.index());
    }
    function Ie() {
      var n;
      if (!N.autoScrolling || N.scrollBar) {
        var t = $.scrollTop(),
          i = Be(t),
          a = 0,
          l = t + $.height() / 2,
          r = lo.height() - $.height() === t,
          s = o.querySelectorAll(w);
        if (r) a = s.length - 1;
        else if (t)
          for (var c = 0; c < s.length; ++c) {
            var d = s[c];
            d.offsetTop <= l && (a = c);
          }
        else a = 0;
        if (
          (Me(i) && (e(S).hasClass(p) || e(S).addClass(p).siblings().removeClass(p)), (n = e(s).eq(a)), !n.hasClass(u))
        ) {
          Ro = !0;
          var f,
            h,
            v = e(S),
            g = v.index(w) + 1,
            m = An(n),
            y = n.data("anchor"),
            x = n.index(w) + 1,
            b = n.find(z);
          b.length && ((h = b.data("anchor")), (f = b.index())),
            yo &&
              (n.addClass(u).siblings().removeClass(u),
              e.isFunction(N.onLeave) && N.onLeave.call(v, g, x, m),
              e.isFunction(N.afterLoad) && N.afterLoad.call(n, y, x),
              $e(v),
              Ge(n),
              Je(n),
              Ln(y, x - 1),
              N.anchors.length && (so = y),
              Dn(f, h, y, x)),
            clearTimeout(Ao),
            (Ao = setTimeout(function () {
              Ro = !1;
            }, 100));
        }
        N.fitToSection &&
          (clearTimeout(Oo),
          (Oo = setTimeout(function () {
            N.fitToSection && e(S).outerHeight() <= mo && Ee();
          }, N.fitToSectionDelay)));
      }
    }
    function Ee() {
      yo && ((wo = !0), Ne(e(S)), (wo = !1));
    }
    function Me(n) {
      var o = e(S).position().top,
        t = o + $.height();
      return "up" == n ? t >= $.scrollTop() + $.height() : o <= $.scrollTop();
    }
    function Be(e) {
      var n = e > zo ? "down" : "up";
      return (zo = e), (Vo = e), n;
    }
    function Re(n) {
      if (bo.m[n]) {
        var o = "down" === n ? re : le;
        if (N.scrollOverflow) {
          var t = N.scrollOverflowHandler.scrollable(e(S)),
            i = "down" === n ? "bottom" : "top";
          if (t.length > 0) {
            if (!N.scrollOverflowHandler.isScrolled(i, t)) return !0;
            o();
          } else o();
        } else o();
      }
    }
    function ze(e) {
      var n = e.originalEvent;
      N.autoScrolling && Pe(n) && e.preventDefault();
    }
    function He(n) {
      var o = n.originalEvent,
        i = e(o.target).closest(w);
      if (Pe(o)) {
        N.autoScrolling && n.preventDefault();
        var a = Qn(o);
        (Do = a.y),
          (qo = a.x),
          i.find(P).length && t.abs(Po - qo) > t.abs(Ho - Do)
            ? !ho &&
              t.abs(Po - qo) > ($.outerWidth() / 100) * N.touchSensitivity &&
              (Po > qo ? bo.m.right && de(i) : bo.m.left && fe(i))
            : N.autoScrolling &&
              yo &&
              t.abs(Ho - Do) > ($.height() / 100) * N.touchSensitivity &&
              (Ho > Do ? Re("down") : Do > Ho && Re("up"));
      }
    }
    function Pe(e) {
      return "undefined" == typeof e.pointerType || "mouse" != e.pointerType;
    }
    function De(e) {
      var n = e.originalEvent;
      if ((N.fitToSection && ao.stop(), Pe(n))) {
        var o = Qn(n);
        (Ho = o.y), (Po = o.x);
      }
    }
    function qe(e, n) {
      for (var o = 0, i = e.slice(t.max(e.length - n, 1)), a = 0; a < i.length; a++) o += i[a];
      return t.ceil(o / n);
    }
    function Fe(o) {
      var i = new Date().getTime(),
        a = e(v).hasClass(k);
      if (N.autoScrolling && !fo && !a) {
        o = o || n.event;
        var l = o.wheelDelta || -o.deltaY || -o.detail,
          r = t.max(-1, t.min(1, l)),
          s = "undefined" != typeof o.wheelDeltaX || "undefined" != typeof o.deltaX,
          c = t.abs(o.wheelDeltaX) < t.abs(o.wheelDelta) || t.abs(o.deltaX) < t.abs(o.deltaY) || !s;
        xo.length > 149 && xo.shift(),
          xo.push(t.abs(l)),
          N.scrollBar && (o.preventDefault ? o.preventDefault() : (o.returnValue = !1));
        var d = i - Fo;
        if (((Fo = i), d > 200 && (xo = []), yo)) {
          var f = qe(xo, 10),
            u = qe(xo, 70),
            h = f >= u;
          h && c && Re(r < 0 ? "down" : "up");
        }
        return !1;
      }
      N.fitToSection && ao.stop();
    }
    function Ve(n, o) {
      var t = "undefined" == typeof o ? e(S) : o,
        i = t.find(P),
        a = i.find(R).length;
      if (!(!i.length || ho || a < 2)) {
        var l = i.find(z),
          r = null;
        if (((r = "left" === n ? l.prev(R) : l.next(R)), !r.length)) {
          if (!N.loopHorizontal) return;
          r = "left" === n ? l.siblings(":last") : l.siblings(":first");
        }
        (ho = !0), gn(i, r, n);
      }
    }
    function je() {
      e(z).each(function () {
        Gn(e(this), "internal");
      });
    }
    function Ye(e) {
      var n = e.position(),
        o = n.top,
        t = n.top > Vo,
        i = o - mo + e.outerHeight(),
        a = N.bigSectionsDestination;
      return (
        e.outerHeight() > mo ? ((t || a) && "bottom" !== a) || (o = i) : (t || (wo && e.is(":last-child"))) && (o = i),
        (Vo = o),
        o
      );
    }
    function Ne(n, o, t) {
      if ("undefined" != typeof n) {
        var i,
          a,
          l = Ye(n),
          r = {
            element: n,
            callback: o,
            isMovementUp: t,
            dtop: l,
            yMovement: An(n),
            anchorLink: n.data("anchor"),
            sectionIndex: n.index(w),
            activeSlide: n.find(z),
            activeSection: e(S),
            leavingSection: e(S).index(w) + 1,
            localIsResizing: wo,
          };
        (r.activeSection.is(n) && !wo) ||
          (N.scrollBar && $.scrollTop() === r.dtop && !n.hasClass(T)) ||
          (r.activeSlide.length && ((i = r.activeSlide.data("anchor")), (a = r.activeSlide.index())),
          (e.isFunction(N.onLeave) &&
            !r.localIsResizing &&
            N.onLeave.call(r.activeSection, r.leavingSection, r.sectionIndex + 1, r.yMovement) === !1) ||
            (N.autoScrolling &&
              N.continuousVertical &&
              "undefined" != typeof r.isMovementUp &&
              ((!r.isMovementUp && "up" == r.yMovement) || (r.isMovementUp && "down" == r.yMovement)) &&
              (r = We(r)),
            r.localIsResizing || $e(r.activeSection),
            N.scrollOverflow && N.scrollOverflowHandler.beforeLeave(),
            n.addClass(u).siblings().removeClass(u),
            Ge(n),
            N.scrollOverflow && N.scrollOverflowHandler.onLeave(),
            (yo = !1),
            Dn(a, i, r.anchorLink, r.sectionIndex),
            Ue(r),
            (so = r.anchorLink),
            Ln(r.anchorLink, r.sectionIndex)));
      }
    }
    function Ue(n) {
      if (N.css3 && N.autoScrolling && !N.scrollBar) {
        var o = "translate3d(0px, -" + t.round(n.dtop) + "px, 0px)";
        Mn(o, !0),
          N.scrollingSpeed
            ? (clearTimeout(ko),
              (ko = setTimeout(function () {
                _e(n);
              }, N.scrollingSpeed)))
            : _e(n);
      } else {
        var i = Xe(n);
        e(i.element)
          .animate(i.options, N.scrollingSpeed, N.easing)
          .promise()
          .done(function () {
            N.scrollBar
              ? setTimeout(function () {
                  _e(n);
                }, 30)
              : _e(n);
          });
      }
    }
    function Xe(e) {
      var n = {};
      return (
        N.autoScrolling && !N.scrollBar
          ? ((n.options = { top: -e.dtop }), (n.element = l))
          : ((n.options = { scrollTop: e.dtop }), (n.element = "html, body")),
        n
      );
    }
    function We(n) {
      return (
        n.isMovementUp
          ? e(S).before(n.activeSection.nextAll(w))
          : e(S).after(n.activeSection.prevAll(w).get().reverse()),
        Jn(e(S).position().top),
        je(),
        (n.wrapAroundElements = n.activeSection),
        (n.dtop = n.element.position().top),
        (n.yMovement = An(n.element)),
        (n.leavingSection = n.activeSection.index(w) + 1),
        (n.sectionIndex = n.element.index(w)),
        n
      );
    }
    function Ke(n) {
      n.wrapAroundElements &&
        n.wrapAroundElements.length &&
        (n.isMovementUp ? e(y).before(n.wrapAroundElements) : e(x).after(n.wrapAroundElements),
        Jn(e(S).position().top),
        je());
    }
    function _e(n) {
      Ke(n),
        e.isFunction(N.afterLoad) &&
          !n.localIsResizing &&
          N.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1),
        N.scrollOverflow && N.scrollOverflowHandler.afterLoad(),
        n.localIsResizing || Je(n.element),
        n.element.addClass(p).siblings().removeClass(p),
        (yo = !0),
        e.isFunction(n.callback) && n.callback.call(this);
    }
    function Qe(e, n) {
      e.attr(n, e.data(n)).removeAttr("data-" + n);
    }
    function Ge(n) {
      if (N.lazyLoading) {
        var o,
          t = en(n);
        t.find(
          "img[data-src], img[data-srcset], source[data-src], video[data-src], audio[data-src], iframe[data-src]"
        ).each(function () {
          if (
            ((o = e(this)),
            e.each(["src", "srcset"], function (e, n) {
              var t = o.attr("data-" + n);
              "undefined" != typeof t && t && Qe(o, n);
            }),
            o.is("source"))
          ) {
            var n = o.closest("video").length ? "video" : "audio";
            o.closest(n).get(0).load();
          }
        });
      }
    }
    function Je(n) {
      var o = en(n);
      o.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play();
      }),
        o.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          n.hasAttribute("data-autoplay") && Ze(n),
            (n.onload = function () {
              n.hasAttribute("data-autoplay") && Ze(n);
            });
        });
    }
    function Ze(e) {
      e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function $e(n) {
      var o = en(n);
      o.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause();
      }),
        o.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          /youtube\.com\/embed\//.test(e(this).attr("src")) &&
            !n.hasAttribute("data-keepplaying") &&
            e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        });
    }
    function en(n) {
      var o = n.find(z);
      return o.length && (n = e(o)), n;
    }
    function nn() {
      var e = tn(),
        n = e.section,
        o = e.slide;
      n && (N.animateAnchor ? zn(n, o) : se(n, o));
    }
    function on() {
      if (!Ro && !N.lockAnchors) {
        var e = tn(),
          n = e.section,
          o = e.slide,
          t = "undefined" == typeof so,
          i = "undefined" == typeof so && "undefined" == typeof o && !ho;
        n.length && ((n && n !== so && !t) || i || (!ho && co != o)) && zn(n, o);
      }
    }
    function tn() {
      var e = n.location.hash,
        o = e.replace("#", "").split("/"),
        t = e.indexOf("#/") > -1;
      return {
        section: t ? "/" + o[1] : decodeURIComponent(o[0]),
        slide: t ? decodeURIComponent(o[2]) : decodeURIComponent(o[1]),
      };
    }
    function an(n) {
      clearTimeout(Io);
      var o = e(":focus");
      if (
        !o.is("textarea") &&
        !o.is("input") &&
        !o.is("select") &&
        "true" !== o.attr("contentEditable") &&
        "" !== o.attr("contentEditable") &&
        N.keyboardScrolling &&
        N.autoScrolling
      ) {
        var t = n.which,
          i = [40, 38, 32, 33, 34];
        e.inArray(t, i) > -1 && n.preventDefault(),
          (fo = n.ctrlKey),
          (Io = setTimeout(function () {
            pn(n);
          }, 150));
      }
    }
    function ln() {
      e(this).prev().trigger("click");
    }
    function rn(e) {
      So && (fo = e.ctrlKey);
    }
    function sn(e) {
      2 == e.which && ((jo = e.pageY), go.on("mousemove", vn));
    }
    function cn(e) {
      2 == e.which && go.off("mousemove");
    }
    function dn() {
      var n = e(this).closest(w);
      e(this).hasClass(X) ? bo.m.left && fe(n) : bo.m.right && de(n);
    }
    function fn() {
      (So = !1), (fo = !1);
    }
    function un(n) {
      n.preventDefault();
      var o = e(this).parent().index();
      Ne(e(w).eq(o));
    }
    function hn(n) {
      n.preventDefault();
      var o = e(this).closest(w).find(P),
        t = o.find(R).eq(e(this).closest("li").index());
      gn(o, t);
    }
    function pn(n) {
      var o = n.shiftKey;
      if (yo || !([37, 39].indexOf(n.which) < 0))
        switch (n.which) {
          case 38:
          case 33:
            bo.k.up && le();
            break;
          case 32:
            if (o && bo.k.up) {
              le();
              break;
            }
          case 40:
          case 34:
            bo.k.down && re();
            break;
          case 36:
            bo.k.up && ce(1);
            break;
          case 35:
            bo.k.down && ce(e(w).length);
            break;
          case 37:
            bo.k.left && fe();
            break;
          case 39:
            bo.k.right && de();
            break;
          default:
            return;
        }
    }
    function vn(e) {
      yo && (e.pageY < jo && bo.m.up ? le() : e.pageY > jo && bo.m.down && re()), (jo = e.pageY);
    }
    function gn(n, o, t) {
      var i = n.closest(w),
        a = {
          slides: n,
          destiny: o,
          direction: t,
          destinyPos: o.position(),
          slideIndex: o.index(),
          section: i,
          sectionIndex: i.index(w),
          anchorLink: i.data("anchor"),
          slidesNav: i.find(j),
          slideAnchor: Fn(o),
          prevSlide: i.find(z),
          prevSlideIndex: i.find(z).index(),
          localIsResizing: wo,
        };
      return (
        (a.xMovement = On(a.prevSlideIndex, a.slideIndex)),
        a.localIsResizing || (yo = !1),
        N.onSlideLeave &&
        !a.localIsResizing &&
        "none" !== a.xMovement &&
        e.isFunction(N.onSlideLeave) &&
        N.onSlideLeave.call(
          a.prevSlide,
          a.anchorLink,
          a.sectionIndex + 1,
          a.prevSlideIndex,
          a.direction,
          a.slideIndex
        ) === !1
          ? void (ho = !1)
          : (o.addClass(u).siblings().removeClass(u),
            a.localIsResizing || ($e(a.prevSlide), Ge(o)),
            !N.loopHorizontal &&
              N.controlArrows &&
              (i.find(_).toggle(0 !== a.slideIndex), i.find(Z).toggle(!o.is(":last-child"))),
            i.hasClass(u) && !a.localIsResizing && Dn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex),
            void wn(n, a, !0))
      );
    }
    function mn(n) {
      Sn(n.slidesNav, n.slideIndex),
        n.localIsResizing ||
          (e.isFunction(N.afterSlideLoad) &&
            N.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex),
          (yo = !0),
          Je(n.destiny)),
        (ho = !1);
    }
    function wn(e, n, o) {
      var i = n.destinyPos;
      if (N.css3) {
        var a = "translate3d(-" + t.round(i.left) + "px, 0px, 0px)";
        bn(e.find(q)).css(Zn(a)),
          (Lo = setTimeout(
            function () {
              o && mn(n);
            },
            N.scrollingSpeed,
            N.easing
          ));
      } else
        e.animate({ scrollLeft: t.round(i.left) }, N.scrollingSpeed, N.easing, function () {
          o && mn(n);
        });
    }
    function Sn(e, n) {
      e.find(h).removeClass(u), e.find("li").eq(n).find("a").addClass(u);
    }
    function yn() {
      if ((xn(), po)) {
        var n = e(o.activeElement);
        if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
          var i = $.height();
          t.abs(i - Yo) > (20 * t.max(Yo, i)) / 100 && (ue(!0), (Yo = i));
        }
      } else
        clearTimeout(To),
          (To = setTimeout(function () {
            ue(!0);
          }, 350));
    }
    function xn() {
      var e = N.responsive || N.responsiveWidth,
        n = N.responsiveHeight,
        o = e && $.outerWidth() < e,
        t = n && $.height() < n;
      e && n ? he(o || t) : e ? he(o) : n && he(t);
    }
    function bn(e) {
      var n = "all " + N.scrollingSpeed + "ms " + N.easingcss3;
      return e.removeClass(s), e.css({ "-webkit-transition": n, transition: n });
    }
    function Cn(e) {
      return e.addClass(s);
    }
    function Tn(n, o) {
      N.navigation &&
        (e(A).find(h).removeClass(u),
        n
          ? e(A)
              .find('a[href="#' + n + '"]')
              .addClass(u)
          : e(A).find("li").eq(o).find("a").addClass(u));
    }
    function kn(n) {
      N.menu &&
        (e(N.menu).find(h).removeClass(u),
        e(N.menu)
          .find('[data-menuanchor="' + n + '"]')
          .addClass(u));
    }
    function Ln(e, n) {
      kn(e), Tn(e, n);
    }
    function An(n) {
      var o = e(S).index(w),
        t = n.index(w);
      return o == t ? "none" : o > t ? "up" : "down";
    }
    function On(e, n) {
      return e == n ? "none" : e > n ? "left" : "right";
    }
    function In(e) {
      e.hasClass(F) || e.addClass(F).wrapInner('<div class="' + b + '" style="height:' + En(e) + 'px;" />');
    }
    function En(e) {
      var n = mo;
      if (N.paddingTop || N.paddingBottom) {
        var o = e;
        o.hasClass(m) || (o = e.closest(w));
        var t = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom"));
        n = mo - t;
      }
      return n;
    }
    function Mn(e, n) {
      n ? bn(go) : Cn(go),
        go.css(Zn(e)),
        setTimeout(function () {
          go.removeClass(s);
        }, 10);
    }
    function Bn(n) {
      if (!n) return [];
      var o = go.find(w + '[data-anchor="' + n + '"]');
      return o.length || (o = e(w).eq(n - 1)), o;
    }
    function Rn(e, n) {
      var o = n.find(P),
        t = o.find(R + '[data-anchor="' + e + '"]');
      return t.length || (t = o.find(R).eq(e)), t;
    }
    function zn(e, n) {
      var o = Bn(e);
      o.length &&
        ("undefined" == typeof n && (n = 0),
        e === so || o.hasClass(u)
          ? Hn(o, n)
          : Ne(o, function () {
              Hn(o, n);
            }));
    }
    function Hn(e, n) {
      if ("undefined" != typeof n) {
        var o = e.find(P),
          t = Rn(n, e);
        t.length && gn(o, t);
      }
    }
    function Pn(e, n) {
      e.append('<div class="' + V + '"><ul></ul></div>');
      var o = e.find(j);
      o.addClass(N.slidesNavPosition);
      for (var t = 0; t < n; t++) o.find("ul").append('<li><a href="#"><span></span></a></li>');
      o.css("margin-left", "-" + o.width() / 2 + "px"), o.find("li").first().find("a").addClass(u);
    }
    function Dn(e, n, o, t) {
      var i = "";
      N.anchors.length &&
        !N.lockAnchors &&
        (e
          ? ("undefined" != typeof o && (i = o), "undefined" == typeof n && (n = e), (co = n), qn(i + "/" + n))
          : "undefined" != typeof e
          ? ((co = n), qn(o))
          : qn(o)),
        Vn();
    }
    function qn(e) {
      if (N.recordHistory) location.hash = e;
      else if (po || vo) n.history.replaceState(i, i, "#" + e);
      else {
        var o = n.location.href.split("#")[0];
        n.location.replace(o + "#" + e);
      }
    }
    function Fn(e) {
      var n = e.data("anchor"),
        o = e.index();
      return "undefined" == typeof n && (n = o), n;
    }
    function Vn() {
      var n = e(S),
        o = n.find(z),
        t = Fn(n),
        i = Fn(o),
        a = String(t);
      o.length && (a = a + "-" + i), (a = a.replace("/", "-").replace("#", ""));
      var l = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
      (lo[0].className = lo[0].className.replace(l, "")), lo.addClass(f + "-" + a);
    }
    function jn() {
      var e,
        t = o.createElement("p"),
        a = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform",
        };
      o.body.insertBefore(t, null);
      for (var l in a)
        t.style[l] !== i &&
          ((t.style[l] = "translate3d(1px,1px,1px)"), (e = n.getComputedStyle(t).getPropertyValue(a[l])));
      return o.body.removeChild(t), e !== i && e.length > 0 && "none" !== e;
    }
    function Yn() {
      o.addEventListener
        ? (o.removeEventListener("mousewheel", Fe, !1),
          o.removeEventListener("wheel", Fe, !1),
          o.removeEventListener("MozMousePixelScroll", Fe, !1))
        : o.detachEvent("onmousewheel", Fe);
    }
    function Nn() {
      var e,
        t = "";
      n.addEventListener ? (e = "addEventListener") : ((e = "attachEvent"), (t = "on"));
      var a = "onwheel" in o.createElement("div") ? "wheel" : o.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
      "DOMMouseScroll" == a ? o[e](t + "MozMousePixelScroll", Fe, !1) : o[e](t + a, Fe, !1);
    }
    function Un() {
      go.on("mousedown", sn).on("mouseup", cn);
    }
    function Xn() {
      go.off("mousedown", sn).off("mouseup", cn);
    }
    function Wn() {
      (po || vo) &&
        (N.autoScrolling && lo.off(Mo.touchmove).on(Mo.touchmove, ze),
        e(l).off(Mo.touchstart).on(Mo.touchstart, De).off(Mo.touchmove).on(Mo.touchmove, He));
    }
    function Kn() {
      (po || vo) && (N.autoScrolling && lo.off(Mo.touchmove), e(l).off(Mo.touchstart).off(Mo.touchmove));
    }
    function _n() {
      var e;
      return (e = n.PointerEvent
        ? { down: "pointerdown", move: "pointermove" }
        : { down: "MSPointerDown", move: "MSPointerMove" });
    }
    function Qn(e) {
      var n = [];
      return (
        (n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY),
        (n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX),
        vo && Pe(e) && N.scrollBar && ((n.y = e.touches[0].pageY), (n.x = e.touches[0].pageX)),
        n
      );
    }
    function Gn(e, n) {
      G(0, "internal"),
        "undefined" != typeof n && (wo = !0),
        gn(e.closest(P), e),
        "undefined" != typeof n && (wo = !1),
        G(Bo.scrollingSpeed, "internal");
    }
    function Jn(e) {
      var n = t.round(e);
      if (N.css3 && N.autoScrolling && !N.scrollBar) {
        var o = "translate3d(0px, -" + n + "px, 0px)";
        Mn(o, !1);
      } else N.autoScrolling && !N.scrollBar ? go.css("top", -n) : ao.scrollTop(n);
    }
    function Zn(e) {
      return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
    }
    function $n(n, o, t) {
      "all" !== o
        ? (bo[t][o] = n)
        : e.each(Object.keys(bo[t]), function (e, o) {
            bo[t][o] = n;
          });
    }
    function eo(n) {
      W(!1, "internal"),
        ie(!1),
        ae(!1),
        go.addClass(c),
        clearTimeout(Lo),
        clearTimeout(ko),
        clearTimeout(To),
        clearTimeout(Ao),
        clearTimeout(Oo),
        $.off("scroll", Ie).off("hashchange", on).off("resize", yn),
        ee
          .off("click touchstart", A + " a")
          .off("mouseenter", A + " li")
          .off("mouseleave", A + " li")
          .off("click touchstart", Y)
          .off("mouseover", N.normalScrollElements)
          .off("mouseout", N.normalScrollElements),
        e(w).off("click touchstart", U),
        clearTimeout(Lo),
        clearTimeout(ko),
        n && no();
    }
    function no() {
      Jn(0),
        go.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
          Qe(e(this), "src");
        }),
        go.find("img[data-srcset]").each(function () {
          Qe(e(this), "srcset");
        }),
        e(A + ", " + j + ", " + U).remove(),
        e(w).css({ height: "", "background-color": "", padding: "" }),
        e(R).css({ width: "" }),
        go.css({ height: "", position: "", "-ms-touch-action": "", "touch-action": "" }),
        ao.css({ overflow: "", height: "" }),
        e("html").removeClass(d),
        lo.removeClass(r),
        e.each(lo.get(0).className.split(/\s+/), function (e, n) {
          0 === n.indexOf(f) && lo.removeClass(n);
        }),
        e(w + ", " + R).each(function () {
          N.scrollOverflowHandler && N.scrollOverflowHandler.remove(e(this)), e(this).removeClass(F + " " + u);
        }),
        Cn(go),
        go.find(C + ", " + q + ", " + P).each(function () {
          e(this).replaceWith(this.childNodes);
        }),
        go.css({ "-webkit-transition": "none", transition: "none" }),
        ao.scrollTop(0);
      var n = [m, B, D];
      e.each(n, function (n, o) {
        e("." + o).removeClass(o);
      });
    }
    function oo(e, n, o) {
      (N[e] = n), "internal" !== o && (Bo[e] = n);
    }
    function to() {
      var n = [
        "fadingEffect",
        "continuousHorizontal",
        "scrollHorizontally",
        "interlockedSlides",
        "resetSliders",
        "responsiveSlides",
        "offsetSections",
        "dragAndMove",
        "scrollOverflowReset",
        "parallax",
      ];
      return e("html").hasClass(d)
        ? void io("error", "Fullpage.js can only be initialized once and you are doing it multiple times!")
        : (N.continuousVertical &&
            (N.loopTop || N.loopBottom) &&
            ((N.continuousVertical = !1),
            io(
              "warn",
              "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          N.scrollBar &&
            N.scrollOverflow &&
            io(
              "warn",
              "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"
            ),
          !N.continuousVertical ||
            (!N.scrollBar && N.autoScrolling) ||
            ((N.continuousVertical = !1),
            io(
              "warn",
              "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          N.scrollOverflow &&
            !N.scrollOverflowHandler &&
            ((N.scrollOverflow = !1),
            io(
              "error",
              "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js."
            )),
          e.each(n, function (e, n) {
            N[n] &&
              io(
                "warn",
                "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " +
                  n
              );
          }),
          void e.each(N.anchors, function (n, o) {
            var t = ee.find("[name]").filter(function () {
                return e(this).attr("name") && e(this).attr("name").toLowerCase() == o.toLowerCase();
              }),
              i = ee.find("[id]").filter(function () {
                return e(this).attr("id") && e(this).attr("id").toLowerCase() == o.toLowerCase();
              });
            (i.length || t.length) &&
              (io(
                "error",
                "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
              ),
              i.length && io("error", '"' + o + '" is is being used by another element `id` property'),
              t.length && io("error", '"' + o + '" is is being used by another element `name` property'));
          }));
    }
    function io(e, n) {
      console && console[e] && console[e]("fullPage: " + n);
    }
    if (e("html").hasClass(d)) return void to();
    var ao = e("html, body"),
      lo = e("body"),
      ro = e.fn.fullpage;
    N = e.extend(
      {
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !1,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        dragAndMove: !1,
        offsetSections: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: null,
        scrollOverflow: !1,
        scrollOverflowReset: !1,
        scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !0,
        controlArrowColor: "#fff",
        verticalCentered: !0,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        parallax: !1,
        parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
        sectionSelector: g,
        slideSelector: M,
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        lazyLoading: !0,
      },
      N
    );
    var so,
      co,
      fo,
      uo,
      ho = !1,
      po = navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
      ),
      vo = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
      go = e(this),
      mo = $.height(),
      wo = !1,
      So = !0,
      yo = !0,
      xo = [],
      bo = {};
    (bo.m = { up: !0, down: !0, left: !0, right: !0 }), (bo.k = e.extend(!0, {}, bo.m));
    var Co,
      To,
      ko,
      Lo,
      Ao,
      Oo,
      Io,
      Eo = _n(),
      Mo = {
        touchmove: "ontouchmove" in n ? "touchmove" : Eo.move,
        touchstart: "ontouchstart" in n ? "touchstart" : Eo.down,
      },
      Bo = e.extend(!0, {}, N);
    to(),
      e.extend(e.easing, {
        easeInOutCubic: function (e, n, o, t, i) {
          return (n /= i / 2) < 1 ? (t / 2) * n * n * n + o : (t / 2) * ((n -= 2) * n * n + 2) + o;
        },
      }),
      e(this).length &&
        ((ro.version = "2.9.5"),
        (ro.setAutoScrolling = W),
        (ro.setRecordHistory = Q),
        (ro.setScrollingSpeed = G),
        (ro.setFitToSection = ne),
        (ro.setLockAnchors = oe),
        (ro.setMouseWheelScrolling = te),
        (ro.setAllowScrolling = ie),
        (ro.setKeyboardScrolling = ae),
        (ro.moveSectionUp = le),
        (ro.moveSectionDown = re),
        (ro.silentMoveTo = se),
        (ro.moveTo = ce),
        (ro.moveSlideRight = de),
        (ro.moveSlideLeft = fe),
        (ro.fitToSection = Ee),
        (ro.reBuild = ue),
        (ro.setResponsive = he),
        (ro.destroy = eo),
        (ro.shared = { afterRenderActions: Ae }),
        pe(),
        ve());
    var Ro = !1,
      zo = 0,
      Ho = 0,
      Po = 0,
      Do = 0,
      qo = 0,
      Fo = new Date().getTime(),
      Vo = 0,
      jo = 0,
      Yo = mo;
  };
});

/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */ !(function (a, b) {
  if ("function" == typeof define && define.amd) define(["module", "exports"], b);
  else if ("undefined" != typeof exports) b(module, exports);
  else {
    var c = { exports: {} };
    b(c, c.exports), (a.WOW = c.exports);
  }
})(this, function (a, b) {
  "use strict";
  function c(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
  }
  function d(a, b) {
    return b.indexOf(a) >= 0;
  }
  function e(a, b) {
    for (var c in b)
      if (null == a[c]) {
        var d = b[c];
        a[c] = d;
      }
    return a;
  }
  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
  }
  function g(a) {
    var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
      c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
      d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
      e = void 0;
    return (
      null != document.createEvent
        ? ((e = document.createEvent("CustomEvent")), e.initCustomEvent(a, b, c, d))
        : null != document.createEventObject
        ? ((e = document.createEventObject()), (e.eventType = a))
        : (e.eventName = a),
      e
    );
  }
  function h(a, b) {
    null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]();
  }
  function i(a, b, c) {
    null != a.addEventListener
      ? a.addEventListener(b, c, !1)
      : null != a.attachEvent
      ? a.attachEvent("on" + b, c)
      : (a[b] = c);
  }
  function j(a, b, c) {
    null != a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : null != a.detachEvent
      ? a.detachEvent("on" + b, c)
      : delete a[b];
  }
  function k() {
    return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
  }
  Object.defineProperty(b, "__esModule", { value: !0 });
  var l,
    m,
    n = (function () {
      function a(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          (d.enumerable = d.enumerable || !1),
            (d.configurable = !0),
            "value" in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })(),
    o =
      window.WeakMap ||
      window.MozWeakMap ||
      (function () {
        function a() {
          c(this, a), (this.keys = []), (this.values = []);
        }
        return (
          n(a, [
            {
              key: "get",
              value: function (a) {
                for (var b = 0; b < this.keys.length; b++) {
                  var c = this.keys[b];
                  if (c === a) return this.values[b];
                }
              },
            },
            {
              key: "set",
              value: function (a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                  var d = this.keys[c];
                  if (d === a) return (this.values[c] = b), this;
                }
                return this.keys.push(a), this.values.push(b), this;
              },
            },
          ]),
          a
        );
      })(),
    p =
      window.MutationObserver ||
      window.WebkitMutationObserver ||
      window.MozMutationObserver ||
      ((m = l =
        (function () {
          function a() {
            c(this, a),
              "undefined" != typeof console &&
                null !== console &&
                (console.warn("MutationObserver is not supported by your browser."),
                console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."));
          }
          return n(a, [{ key: "observe", value: function () {} }]), a;
        })()),
      (l.notSupported = !0),
      m),
    q =
      window.getComputedStyle ||
      function (a) {
        var b = /(\-([a-z]){1})/g;
        return {
          getPropertyValue: function (c) {
            "float" === c && (c = "styleFloat"),
              b.test(c) &&
                c.replace(b, function (a, b) {
                  return b.toUpperCase();
                });
            var d = a.currentStyle;
            return (null != d ? d[c] : void 0) || null;
          },
        };
      },
    r = (function () {
      function a() {
        var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        c(this, a),
          (this.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
            resetAnimation: !0,
          }),
          (this.animate = (function () {
            return "requestAnimationFrame" in window
              ? function (a) {
                  return window.requestAnimationFrame(a);
                }
              : function (a) {
                  return a();
                };
          })()),
          (this.vendors = ["moz", "webkit"]),
          (this.start = this.start.bind(this)),
          (this.resetAnimation = this.resetAnimation.bind(this)),
          (this.scrollHandler = this.scrollHandler.bind(this)),
          (this.scrollCallback = this.scrollCallback.bind(this)),
          (this.scrolled = !0),
          (this.config = e(b, this.defaults)),
          null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)),
          (this.animationNameCache = new o()),
          (this.wowEvent = g(this.config.boxClass));
      }
      return (
        n(a, [
          {
            key: "init",
            value: function () {
              (this.element = window.document.documentElement),
                d(document.readyState, ["interactive", "complete"])
                  ? this.start()
                  : i(document, "DOMContentLoaded", this.start),
                (this.finished = []);
            },
          },
          {
            key: "start",
            value: function () {
              var a = this;
              if (
                ((this.stopped = !1),
                (this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass))),
                (this.all = this.boxes.slice(0)),
                this.boxes.length)
              )
                if (this.disabled()) this.resetStyle();
                else
                  for (var b = 0; b < this.boxes.length; b++) {
                    var c = this.boxes[b];
                    this.applyStyle(c, !0);
                  }
              if (
                (this.disabled() ||
                  (i(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                  i(window, "resize", this.scrollHandler),
                  (this.interval = setInterval(this.scrollCallback, 50))),
                this.config.live)
              ) {
                var d = new p(function (b) {
                  for (var c = 0; c < b.length; c++)
                    for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                      var f = d.addedNodes[e];
                      a.doSync(f);
                    }
                });
                d.observe(document.body, { childList: !0, subtree: !0 });
              }
            },
          },
          {
            key: "stop",
            value: function () {
              (this.stopped = !0),
                j(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval);
            },
          },
          {
            key: "sync",
            value: function () {
              p.notSupported && this.doSync(this.element);
            },
          },
          {
            key: "doSync",
            value: function (a) {
              if ((("undefined" != typeof a && null !== a) || (a = this.element), 1 === a.nodeType)) {
                a = a.parentNode || a;
                for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                  var e = b[c];
                  d(e, this.all) ||
                    (this.boxes.push(e),
                    this.all.push(e),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0),
                    (this.scrolled = !0));
                }
              }
            },
          },
          {
            key: "show",
            value: function (a) {
              return (
                this.applyStyle(a),
                (a.className = a.className + " " + this.config.animateClass),
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation &&
                  (i(a, "animationend", this.resetAnimation),
                  i(a, "oanimationend", this.resetAnimation),
                  i(a, "webkitAnimationEnd", this.resetAnimation),
                  i(a, "MSAnimationEnd", this.resetAnimation)),
                a
              );
            },
          },
          {
            key: "applyStyle",
            value: function (a, b) {
              var c = this,
                d = a.getAttribute("data-wow-duration"),
                e = a.getAttribute("data-wow-delay"),
                f = a.getAttribute("data-wow-iteration");
              return this.animate(function () {
                return c.customStyle(a, b, d, e, f);
              });
            },
          },
          {
            key: "resetStyle",
            value: function () {
              for (var a = 0; a < this.boxes.length; a++) {
                var b = this.boxes[a];
                b.style.visibility = "visible";
              }
            },
          },
          {
            key: "resetAnimation",
            value: function (a) {
              if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                var b = a.target || a.srcElement;
                b.className = b.className.replace(this.config.animateClass, "").trim();
              }
            },
          },
          {
            key: "customStyle",
            value: function (a, b, c, d, e) {
              return (
                b && this.cacheAnimationName(a),
                (a.style.visibility = b ? "hidden" : "visible"),
                c && this.vendorSet(a.style, { animationDuration: c }),
                d && this.vendorSet(a.style, { animationDelay: d }),
                e && this.vendorSet(a.style, { animationIterationCount: e }),
                this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }),
                a
              );
            },
          },
          {
            key: "vendorSet",
            value: function (a, b) {
              for (var c in b)
                if (b.hasOwnProperty(c)) {
                  var d = b[c];
                  a["" + c] = d;
                  for (var e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                  }
                }
            },
          },
          {
            key: "vendorCSS",
            value: function (a, b) {
              for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                var f = this.vendors[e];
                d = d || c.getPropertyCSSValue("-" + f + "-" + b);
              }
              return d;
            },
          },
          {
            key: "animationName",
            value: function (a) {
              var b = void 0;
              try {
                b = this.vendorCSS(a, "animation-name").cssText;
              } catch (c) {
                b = q(a).getPropertyValue("animation-name");
              }
              return "none" === b ? "" : b;
            },
          },
          {
            key: "cacheAnimationName",
            value: function (a) {
              return this.animationNameCache.set(a, this.animationName(a));
            },
          },
          {
            key: "cachedAnimationName",
            value: function (a) {
              return this.animationNameCache.get(a);
            },
          },
          {
            key: "scrollHandler",
            value: function () {
              this.scrolled = !0;
            },
          },
          {
            key: "scrollCallback",
            value: function () {
              if (this.scrolled) {
                this.scrolled = !1;
                for (var a = [], b = 0; b < this.boxes.length; b++) {
                  var c = this.boxes[b];
                  if (c) {
                    if (this.isVisible(c)) {
                      this.show(c);
                      continue;
                    }
                    a.push(c);
                  }
                }
                (this.boxes = a), this.boxes.length || this.config.live || this.stop();
              }
            },
          },
          {
            key: "offsetTop",
            value: function (a) {
              for (; void 0 === a.offsetTop; ) a = a.parentNode;
              for (var b = a.offsetTop; a.offsetParent; ) (a = a.offsetParent), (b += a.offsetTop);
              return b;
            },
          },
          {
            key: "isVisible",
            value: function (a) {
              var b = a.getAttribute("data-wow-offset") || this.config.offset,
                c = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset,
                d = c + Math.min(this.element.clientHeight, k()) - b,
                e = this.offsetTop(a),
                f = e + a.clientHeight;
              return d >= e && f >= c;
            },
          },
          {
            key: "disabled",
            value: function () {
              return !this.config.mobile && f(navigator.userAgent);
            },
          },
        ]),
        a
      );
    })();
  (b["default"] = r), (a.exports = b["default"]);
});

/*! Magnific Popup - v1.1.0 - 2016-02-20* http://dimsemenov.com/plugins/magnific-popup/* Copyright (c) 2016 Dmitry Semenov; */!(function (a) { typeof define == 'function' && define.amd ? define(['jquery'], a) : a(typeof exports == 'object' ? require('jquery') : window.jQuery || window.Zepto) }((a) => {
  let b; let c; let d; let e; let f; let g; const h = 'Close'; const i = 'BeforeClose'; const j = 'AfterClose'; const k = 'BeforeAppend'; const l = 'MarkupParse'; const m = 'Open'; const n = 'Change'; const o = 'mfp'; const p = `.${o}`; const q = 'mfp-ready'; const r = 'mfp-removing'; const s = 'mfp-prevent-close'; const t = function () {}; const u = !!window.jQuery; const v = a(window); const w = function (a, c) { b.ev.on(o + a + p, c) }; const x = function (b, c, d, e) {
    let f = document.createElement('div')

    return f.className = `mfp-${b}`, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
  }; const y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }; const z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace('%title%', b.st.tClose)), g = c), b.currTemplate.closeBtn }; const A = function () { a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b) }; const B = function () {
    const a = document.createElement('p').style; const b = ['ms', 'O', 'Moz', 'Webkit']; if (void 0 !== a.transition)
      return !0; while (b.length) {
      if (`${b.pop()}Transition` in a)
        return !0
    }

    return !1
  }; t.prototype = {
    constructor: t,
    init() { const c = navigator.appVersion; b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} },
    open(c) {
      let e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; let g; const h = c.items; for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } }
      else { b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0 } if (b.isOpen)
        return void b.updateItemHTML(); b.types = [], f = '', c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = b.st.fixedContentPos === 'auto' ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x('bg').on(`click${p}`, () => { b.close() }), b.wrap = x('wrap').attr('tabindex', -1).on(`click${p}`, (a) => { b._checkIfClose(a.target) && b.close() }), b.container = x('container', b.wrap)), b.contentContainer = x('content'), b.st.preloader && (b.preloader = x('preloader', b.container, b.st.tLoading)); const i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { let j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b[`init${j}`].call(b) }y('BeforeOpen'), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, (a, b, c, d) => { c.close_replaceWith = z(d.type) }), f += ' mfp-close-btn-in') : b.wrap.append(z())), b.st.alignTop && (f += ' mfp-align-top'), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: 'hidden', overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: 'absolute' }), (b.st.fixedBgPos === !1 || b.st.fixedBgPos === 'auto' && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: 'absolute' }), b.st.enableEscapeKey && d.on(`keyup${p}`, (a) => { a.keyCode === 27 && b.close() }), v.on(`resize${p}`, () => { b.updateSize() }), b.st.closeOnContentClick || (f += ' mfp-auto-cursor'), f && b.wrap.addClass(f); const k = b.wH = v.height(); const n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { const o = b._getScrollbarSize(); o && (n.marginRight = o) }b.fixedContentPos && (b.isIE7 ? a('body, html').css('overflow', 'hidden') : n.overflow = 'hidden'); let r = b.st.mainClass

      return b.isIE7 && (r += ' mfp-ie7'), r && b._addClassToMFP(r), b.updateItemHTML(), y('BuildControls'), a('html').css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(() => { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on(`focusin${p}`, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
    },
    close() { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(() => { b._close() }, b.st.removalDelay)) : b._close()) },
    _close() { y(h); let c = `${r} ${q} `; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += `${b.st.mainClass} `), b._removeClassFromMFP(c), b.fixedContentPos) { const e = { marginRight: '' }; b.isIE7 ? a('body, html').css('overflow', '') : e.overflow = '', a('html').css(e) }d.off(`keyup${p} focusin${p}`), b.ev.off(p), b.wrap.attr('class', 'mfp-wrap').removeAttr('style'), b.bgOverlay.attr('class', 'mfp-bg'), b.container.attr('class', 'mfp-container'), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) },
    updateSize(a) {
      if (b.isIOS) { const c = document.documentElement.clientWidth / window.innerWidth; const d = window.innerHeight * c; b.wrap.css('height', d), b.wH = d }
      else { b.wH = a || v.height() }b.fixedContentPos || b.wrap.css('height', b.wH), y('Resize')
    },
    updateItemHTML() { let c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); const d = c.type; if (y('BeforeChange', [b.currItem ? b.currItem.type : '', d]), b.currItem = c, !b.currTemplate[d]) { const f = b.st[d] ? b.st[d].markup : !1; y('FirstMarkupParse', f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 }e && e !== c.type && b.container.removeClass(`mfp-${e}-holder`); const g = b[`get${d.charAt(0).toUpperCase()}${d.slice(1)}`](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y('AfterChange') },
    appendContent(a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find('.mfp-close').length || b.content.append(z()) : b.content = a : b.content = '', y(k), b.container.addClass(`mfp-${c}-holder`), b.contentContainer.append(b.content) },
    parseEl(c) {
      let d; let e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (let f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass(`mfp-${f[g]}`)) { d = f[g]; break }e.src = e.el.attr('data-mfp-src'), e.src || (e.src = e.el.attr('href')) }

      return e.type = d || b.st.type || 'inline', e.index = c, e.parsed = !0, b.items[c] = e, y('ElementParse', e), b.items[c]
    },
    addGroup(a, c) { const d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); const e = 'click.magnificPopup'; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) },
    _openClick(c, d, e) {
      const f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(c.which === 2 || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        const g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) {
          if (a.isFunction(g)) {
            if (!g.call(b))
              return !0
          }
          else if (v.width() < g) { return !0 }
        } c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
      }
    },
    updateStatus(a, d) { if (b.preloader) { c !== a && b.container.removeClass(`mfp-s-${c}`), d || a !== 'loading' || (d = b.st.tLoading); const e = { status: a, text: d }; y('UpdateStatus', e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find('a').on('click', (a) => { a.stopImmediatePropagation() }), b.container.addClass(`mfp-s-${a}`), c = a } },
    _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        const d = b.st.closeOnContentClick; const e = b.st.closeOnBgClick; if (d && e)
          return !0; if (!b.content || a(c).hasClass('mfp-close') || b.preloader && c === b.preloader[0])
          return !0; if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d)
            return !0
        }
        else if (e && a.contains(document, c)) { return !0 }

        return !1
      }
    },
    _addClassToMFP(a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) },
    _removeClassFromMFP(a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) },
    _hasScrollBar(a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) },
    _setFocus() { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() },
    _onFocusIn(c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) },
    _parseMarkup(b, c, d) {
      let e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, (c, d) => {
        if (void 0 === d || d === !1)
          return !0; if (e = c.split('_'), e.length > 1) { const f = b.find(`${p}-${e[0]}`); if (f.length > 0) { const g = e[1]; g === 'replaceWith' ? f[0] !== d[0] && f.replaceWith(d) : g === 'img' ? f.is('img') ? f.attr('src', d) : f.replaceWith(a('<img>').attr('src', d).attr('class', f.attr('class'))) : f.attr(e[1], d) } }
        else { b.find(`${p}-${c}`).html(d) }
      })
    },
    _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) { const a = document.createElement('div'); a.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;', document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) }

      return b.scrollbarSize
    },
  }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open(b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close() { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule(b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: '', preloader: !0, focus: '', closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: 'auto', fixedBgPos: 'auto', overflowY: 'auto', closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: 'Close (Esc)', tLoading: 'Loading...', autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) {
    A(); const d = a(this); if (typeof c == 'string') {
      if (c === 'open') { let e; const f = u ? d.data('magnificPopup') : d[0].magnificPopup; const g = Number.parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) }
      else { b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)) }
    }
    else { c = a.extend(!0, {}, c), u ? d.data('magnificPopup', c) : d[0].magnificPopup = c, b.addGroup(d, c) }

    return d
  }; let C; let D; let E; const F = 'inline'; const G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, {
    options: { hiddenClass: 'hide', markup: '', tNotFound: 'Content not found' },
    proto: {
      initInline() { b.types.push(F), w(`${h}.${F}`, () => { G() }) },
      getInline(c, d) {
        if (G(), c.src) {
          const e = b.st.inline; let f = a(c.src); if (f.length) { const g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = `mfp-${C}`), E = f.after(D).detach().removeClass(C)), b.updateStatus('ready') }
          else { b.updateStatus('error', e.tNotFound), f = a('<div>') }

          return c.inlineElement = f, f
        }

        return b.updateStatus('ready'), b._parseMarkup(d, {}, c), d
      },
    },
  }); let H; const I = 'ajax'; const J = function () { H && a(document.body).removeClass(H) }; const K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, {
    options: { settings: null, cursor: 'mfp-ajax-cur', tError: '<a href="%url%">The content</a> could not be loaded.' },
    proto: {
      initAjax() { b.types.push(I), H = b.st.ajax.cursor, w(`${h}.${I}`, K), w(`BeforeChange.${I}`, K) },
      getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus('loading'); const d = a.extend({ url: c.src, success(d, e, f) { const g = { data: d, xhr: f }; y('ParseAjax', g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(() => { b.wrap.addClass(q) }, 16), b.updateStatus('ready'), y('AjaxContentAdded') }, error() { J(), c.finished = c.loadError = !0, b.updateStatus('error', b.st.ajax.tError.replace('%url%', c.src)) } }, b.st.ajax.settings)

        return b.req = a.ajax(d), ''
      },
    },
  }); let L; const M = function (c) {
    if (c.data && void 0 !== c.data.title)
      return c.data.title; const d = b.st.image.titleSrc; if (d) {
      if (a.isFunction(d))
        return d.call(b, c); if (c.el)
        return c.el.attr(d) || ''
    }

    return ''
  }; a.magnificPopup.registerModule('image', {
    options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: 'mfp-zoom-out-cur', titleSrc: 'title', verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' },
    proto: {
      initImage() { const c = b.st.image; const d = '.image'; b.types.push('image'), w(m + d, () => { b.currItem.type === 'image' && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, () => { c.cursor && a(document.body).removeClass(c.cursor), v.off(`resize${p}`) }), w(`Resize${d}`, b.resizeImage), b.isLowIE && w('AfterChange', b.resizeImage) },
      resizeImage() { const a = b.currItem; if (a && a.img && b.st.image.verticalFit) { let c = 0; b.isLowIE && (c = Number.parseInt(a.img.css('padding-top'), 10) + Number.parseInt(a.img.css('padding-bottom'), 10)), a.img.css('max-height', b.wH - c) } },
      _onImageHasSize(a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y('ImageHasSize', a), a.imgHidden && (b.content && b.content.removeClass('mfp-loading'), a.imgHidden = !1)) },
      findImageSize(a) { let c = 0; const d = a.img[0]; const e = function (f) { L && clearInterval(L), L = setInterval(() => { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (c === 3 ? e(10) : c === 40 ? e(50) : c === 100 && e(500))) }, f) }; e(1) },
      getImage(c, d) {
        let e = 0; const f = function () { c && (c.img[0].complete ? (c.img.off('.mfploader'), c === b.currItem && (b._onImageHasSize(c), b.updateStatus('ready')), c.hasSize = !0, c.loaded = !0, y('ImageLoadComplete')) : (e++, e < 200 ? setTimeout(f, 100) : g())) }; var g = function () { c && (c.img.off('.mfploader'), c === b.currItem && (b._onImageHasSize(c), b.updateStatus('error', h.tError.replace('%url%', c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }; var h = b.st.image; const i = d.find('.mfp-img'); if (i.length) { let j = document.createElement('img'); j.className = 'mfp-img', c.el && c.el.find('img').length && (j.alt = c.el.find('img').attr('alt')), c.img = a(j).on('load.mfploader', f).on('error.mfploader', g), j.src = c.src, i.is('img') && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) }

        return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass('mfp-loading'), b.updateStatus('error', h.tError.replace('%url%', c.src))) : (d.removeClass('mfp-loading'), b.updateStatus('ready')), d) : (b.updateStatus('loading'), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass('mfp-loading'), b.findImageSize(c)), d)
      },
    },
  }); let N; const O = function () { return void 0 === N && (N = void 0 !== document.createElement('p').style.MozTransform), N }; a.magnificPopup.registerModule('zoom', {
    options: { enabled: !1, easing: 'ease-in-out', duration: 300, opener(a) { return a.is('img') ? a : a.find('img') } },
    proto: {
      initZoom() {
        let a; const c = b.st.zoom; const d = '.zoom'; if (c.enabled && b.supportsTransition) {
          let e; let f; const g = c.duration; const j = function (a) {
            const b = a.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'); const d = `all ${ c.duration / 1e3 }s ${ c.easing}`; const e = { 'position': 'fixed', 'zIndex': 9999, 'left': 0, 'top': 0, '-webkit-backface-visibility': 'hidden' }; const f = 'transition'

            return e[`-webkit-${f}`] = e[`-moz-${f}`] = e[`-o-${f}`] = e[f] = d, b.css(e), b
          }; const k = function () { b.content.css('visibility', 'visible') }; w(`BuildControls${d}`, () => {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css('visibility', 'hidden'), a = b._getItemToZoom(), !a)
                return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(() => { f.css(b._getOffset(!0)), e = setTimeout(() => { k(), setTimeout(() => { f.remove(), a = f = null, y('ZoomAnimationEnded') }, 16) }, g) }, 16)
            }
          }), w(i + d, () => {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a)
                  return; f = j(a)
              }f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css('visibility', 'hidden'), setTimeout(() => { f.css(b._getOffset()) }, 16)
            }
          }), w(h + d, () => { b._allowZoom() && (k(), f && f.remove(), a = null) })
        }
      },
      _allowZoom() { return b.currItem.type === 'image' },
      _getItemToZoom() { return b.currItem.hasSize ? b.currItem.img : !1 },
      _getOffset(c) {
        let d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); const e = d.offset(); const f = Number.parseInt(d.css('padding-top'), 10); const g = Number.parseInt(d.css('padding-bottom'), 10); e.top -= a(window).scrollTop() - f; const h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }

        return O() ? h['-moz-transform'] = h.transform = `translate(${e.left}px,${e.top}px)` : (h.left = e.left, h.top = e.top), h
      },
    },
  }); const P = 'iframe'; const Q = '//about:blank'; const R = function (a) { if (b.currTemplate[P]) { const c = b.currTemplate[P].find('iframe'); c.length && (a || (c[0].src = Q), b.isIE8 && c.css('display', a ? 'block' : 'none')) } }; a.magnificPopup.registerModule(P, {
    options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: 'iframe_src', patterns: { youtube: { index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1' }, vimeo: { index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1' }, gmaps: { index: '//maps.google.', src: '%id%&output=embed' } } },
    proto: {
      initIframe() { b.types.push(P), w('BeforeChange', (a, b, c) => { b !== c && (b === P ? R() : c === P && R(!0)) }), w(`${h}.${P}`, () => { R() }) },
      getIframe(c, d) {
        let e = c.src; const f = b.st.iframe; a.each(f.patterns, function () { return e.includes(this.index) ? (this.id && (e = typeof this.id == 'string' ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace('%id%', e), !1) : void 0 }); const g = {}

        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus('ready'), d
      },
    },
  }); const S = function (a) {
    const c = b.items.length

    return a > c - 1 ? a - c : a < 0 ? c + a : a
  }; const T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule('gallery', {
    options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: 'Previous (Left arrow key)', tNext: 'Next (Right arrow key)', tCounter: '%curr% of %total%' },
    proto: {
      initGallery() {
        const c = b.st.gallery; const e = '.mfp-gallery'

        return b.direction = !0, c && c.enabled ? (f += ' mfp-gallery', w(m + e, () => { c.navigateByImgClick && b.wrap.on(`click${e}`, '.mfp-img', () => { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on(`keydown${e}`, (a) => { a.keyCode === 37 ? b.prev() : a.keyCode === 39 && b.next() }) }), w(`UpdateStatus${e}`, (a, c) => { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, (a, d, e, f) => { const g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : '' }), w(`BuildControls${e}`, () => { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { const d = c.arrowMarkup; const e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, 'left')).addClass(s); const f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, 'right')).addClass(s); e.click(() => { b.prev() }), f.click(() => { b.next() }), b.container.append(e.add(f)) } }), w(n + e, () => { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(() => { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, () => { d.off(e), b.wrap.off(`click${e}`), b.arrowRight = b.arrowLeft = null })) : !1
      },
      next() { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() },
      prev() { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() },
      goTo(a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() },
      preloadNearbyImages() { let a; const c = b.st.gallery.preload; const d = Math.min(c[0], b.items.length); const e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++)b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++)b._preloadItem(b.index - a) },
      _preloadItem(c) { if (c = S(c), !b.items[c].preloaded) { let d = b.items[c]; d.parsed || (d = b.parseEl(c)), y('LazyLoad', d), d.type === 'image' && (d.img = a('<img class="mfp-img" />').on('load.mfploader', () => { d.hasSize = !0 }).on('error.mfploader', () => { d.hasSize = !0, d.loadError = !0, y('LazyLoadError', d) }).attr('src', d.src)), d.preloaded = !0 } },
    },
  }); const U = 'retina'; a.magnificPopup.registerModule(U, { options: { replaceSrc(a) { return a.src.replace(/\.\w+$/, (a) => { return `@2x${a}` }) }, ratio: 1 }, proto: { initRetina() { if (window.devicePixelRatio > 1) { const a = b.st.retina; let c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w(`ImageHasSize.${U}`, (a, b) => { b.img.css({ 'max-width': b.img[0].naturalWidth / c, 'width': '100%' }) }), w(`ElementParse.${U}`, (b, d) => { d.src = a.replaceSrc(d, c) })) } } } }), A()
}))

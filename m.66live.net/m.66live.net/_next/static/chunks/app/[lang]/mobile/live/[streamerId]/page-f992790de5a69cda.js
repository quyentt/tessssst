(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6604], { 55554: function(e, s, t) { Promise.resolve().then(t.bind(t, 35353)), Promise.resolve().then(t.bind(t, 12445)), Promise.resolve().then(t.bind(t, 28778)), Promise.resolve().then(t.bind(t, 86179)), Promise.resolve().then(t.bind(t, 2146)), Promise.resolve().then(t.bind(t, 75514)), Promise.resolve().then(t.bind(t, 94770)), Promise.resolve().then(t.bind(t, 54884)), Promise.resolve().then(t.bind(t, 20239)), Promise.resolve().then(t.bind(t, 84734)), Promise.resolve().then(t.bind(t, 28078)), Promise.resolve().then(t.bind(t, 27065)), Promise.resolve().then(t.bind(t, 85436)), Promise.resolve().then(t.bind(t, 41805)), Promise.resolve().then(t.bind(t, 92280)), Promise.resolve().then(t.bind(t, 55112)), Promise.resolve().then(t.bind(t, 98658)), Promise.resolve().then(t.bind(t, 89260)), Promise.resolve().then(t.bind(t, 44063)), Promise.resolve().then(t.bind(t, 39090)), Promise.resolve().then(t.bind(t, 6320)), Promise.resolve().then(t.bind(t, 44958)) }, 94503: function(e, s, t) { "use strict";
            t.d(s, { Z: function() { return D } }); var n = t(48103),
                l = t(77254),
                a = t(46047),
                i = t(54205),
                r = t(13082),
                c = t(63853),
                o = t(71931),
                d = t(30465),
                u = t(66484),
                x = t(70472),
                m = t(26408),
                h = t(81048),
                g = t(43646),
                N = t(32002),
                j = t(74655),
                M = e => { let s = e.match,
                        t = e.streamers,
                        M = e.records,
                        p = (0, i.useTranslations)("NORMAL"),
                        f = (0, d.Z)().formatMMDDddd,
                        I = !(o.Vm.includes(s.GameStatusID) || o.Dj.includes(s.GameTypeID)),
                        D = (0, u.x6)(s.GameDate),
                        y = f(D),
                        v = D.format("HH:mm"),
                        b = (0, u.x2)().isSame(D, "date"),
                        A = s.GameStatusID === o.XI.delayed || s.GameStatusID === o.XI.scheduled,
                        E = A || s.GameStatusID === o.XI.playing,
                        w = null == M ? void 0 : M.find(e => 1 === e.RecordTypeID),
                        T = `/events/${s.GameID}`,
                        C = s.HasSelfStream && (s.GameStatusID === o.XI.playing || s.GameStatusID === o.XI.scheduled); return (0, n.jsxs)("div", { "data-match-id": s.GameID, className: "flex h-[5.25rem] w-full rounded-lg border-2 border-transparent bg-neutral py-2 pl-4 shadow-toast transition-colors hover:border-primary", children: [(0, n.jsx)(c.Z, { wrap: !!t, wrapper: e => (0, n.jsx)(x.rU, { className: "flex flex-1", href: T, prefetch: !1, children: e }), children: (0, n.jsxs)("div", { className: "inline-grid flex-1 grid-cols-[25%_10%_1fr_1.3rem_3rem] grid-rows-1 gap-2", children: [(0, n.jsxs)("div", { className: "flex w-52 flex-col gap-1", children: [(0, n.jsxs)("div", { className: "flex items-center gap-1", children: [(0, n.jsx)(j.Z, { typeId: s.GameTypeID }), (0, n.jsx)("div", { className: "truncate whitespace-nowrap text-metal-700", title: s.LeagueName, children: s.LeagueName })] }), (0, n.jsxs)("div", { className: "flex flex-1 items-end gap-2", children: [(0, n.jsx)("div", { className: "text-2xl font-bold leading-[normal] text-metal-700", children: v }), (0, n.jsx)("span", { className: "text-sm leading-4 text-metal-400", children: b ? p("TODAY") : y })] })] }), (0, n.jsxs)("div", { className: "flex min-w-20 flex-col gap-1 flex-center", children: [(0, n.jsx)(g.Z, { className: "flex-none text-ss", showBookButton: !1, status: s.GameStatusID, gameId: s.GameID, gameName: s.LeagueName }), w && (0, n.jsx)("div", { className: "w-full whitespace-nowrap text-center text-sm leading-4 text-metal-400", children: w.Content })] }), (0, n.jsx)(N.Z, { variant: "row", className: "w-auto", type: s.GameTypeID, home: { logo: s.HomeLogo || "", name: s.HomeTeamName || "", score: I ? s.HomeTeamScore : void 0 }, away: { logo: s.AwayLogo || "", name: s.AwayTeamName || "", score: I ? s.AwayTeamScore : void 0 } }), C && (0, n.jsx)("div", { className: "flex min-w-[20px] flex-col gap-1 flex-center", children: (0, n.jsx)(a.Z, { size: "20", color: "#FCBD31", variant: "Bold" }) }), M && [o.XI.playing, o.XI.finished].includes(s.GameStatusID) && (0, n.jsx)(h.Z, { type: s.GameTypeID, records: M.filter(e => 1 !== e.RecordTypeID) })] }) }), t && (0, n.jsx)("div", { className: (0, l.Z)("ml-2 flex w-52 items-center overflow-x-auto overflow-y-hidden border-l-2 border-metal-200 pl-2 2xl:w-96", { "w-[10.75rem]": A, " 2xl:w-[26.25rem]": !A }), children: E ? (0, n.jsx)(m.Z, { className: "items-center", casters: t, wrapperClassName: "overflow-x-auto" }) : (0, n.jsx)(x.rU, { className: "size-full", href: T, prefetch: !1 }) }), A && (0, n.jsx)(r.Z, { gameId: s.GameID, gameName: s.LeagueName, wrapper: (0, n.jsx)("div", { className: "-mt-2 flex h-[5.25rem] w-9 cursor-pointer items-center justify-center rounded-r-lg shadow-[-2px_0px_6px_0px_rgba(0,0,0,0.06)]" }) })] }) },
                p = t(17073),
                f = t(82505),
                I = t(26116);

            function D(e) { let s = e.matches,
                    t = e.skeletonCount,
                    a = void 0 === t ? 4 : t,
                    i = e.isLoading,
                    r = void 0 !== i && i,
                    c = e.streamerPlacement,
                    o = e.variant,
                    d = void 0 === o ? "card" : o,
                    u = e.exceed,
                    x = void 0 !== u && u; return r || 0 !== s.length ? "row" === d ? (0, n.jsx)("div", { className: "flex flex-col gap-2", children: r ? Array.from({ length: a }).map((e, s) => (0, n.jsx)(f.Z, { streamerPlacement: c }, s)) : s.map(e => (0, n.jsx)(M, { match: e }, e.GameID)) }) : (0, n.jsx)("div", { className: (0, l.Z)("card-flex" === d ? "flex gap-2" : "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"), children: r ? Array.from({ length: a }).map((e, s) => (0, n.jsx)(f.Z, { streamerPlacement: c }, s)) : s.map(e => (0, n.jsx)(p.Z, { match: e, streamerPlacement: c, className: x ? "mobile:max-w-[335px]" : "" }, e.GameID)) }) : (0, n.jsx)(I.Z, {}) } }, 82505: function(e, s, t) { "use strict";
            t.d(s, { Z: function() { return a } }); var n = t(48103),
                l = t(88978);

            function a(e) { let s = e.streamerPlacement,
                    t = void 0 === s ? "hidden" : s; return (0, n.jsx)("div", { className: "card w-full bg-base-100", children: (0, n.jsxs)("div", { className: "card-body px-4 py-2", children: [(0, n.jsxs)("div", { className: "flex w-full items-center gap-2", children: [(0, n.jsx)("div", { className: "skeleton aspect-square w-8 rounded-full" }), (0, n.jsx)("div", { className: "skeleton h-2 w-1/2" }), (0, n.jsx)("div", { className: "invisible flex-1" }), "top" === t && (0, n.jsx)("div", { className: "avatar-group -space-x-3", children: (0, l.Z)(3, e => (0, n.jsx)("div", { className: "avatar border-2", children: (0, n.jsx)("div", { className: "skeleton w-6 rounded-full" }) }, e)) })] }), (0, n.jsxs)("div", { className: "flex h-16 items-center gap-2", children: [(0, n.jsxs)("div", { className: "flex flex-col items-start gap-1", children: [(0, n.jsx)("div", { className: "skeleton h-2 w-6" }), (0, n.jsx)("div", { className: "skeleton my-1 h-3 w-10" }), (0, n.jsx)("div", { className: "skeleton h-2 w-14" })] }), (0, n.jsx)("div", { className: "flex flex-col items-center gap-1", children: Array.from({ length: 3 }).map((e, s) => (0, n.jsx)("div", { className: "skeleton h-4 w-10" }, s)) }), (0, n.jsx)("div", { className: "flex flex-1 flex-col items-start gap-1", children: Array.from({ length: 2 }).map((e, s) => (0, n.jsxs)("div", { className: "flex w-full items-center gap-2", children: [(0, n.jsx)("div", { className: "skeleton h-8 w-8 rounded-full" }), (0, n.jsx)("div", { className: "skeleton h-2 w-20" }), (0, n.jsx)("div", { className: "flex-1" }), (0, n.jsx)("div", { className: "skeleton h-6 w-6" })] }, s)) })] }), "bottom" === t && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("hr", {}), (0, n.jsx)("div", { className: "flex gap-2", children: Array.from({ length: 4 }).map((e, s) => (0, n.jsxs)("div", { className: "flex flex-col items-center gap-2", children: [(0, n.jsx)("div", { className: "skeleton h-12 w-12" }), (0, n.jsx)("div", { className: "skeleton h-2 w-full" })] }, s)) })] })] }) }) } }, 26229: function(e, s, t) { "use strict";
            t.d(s, { Z: function() { return i } }); var n = t(48103),
                l = t(54205),
                a = t(92406);

            function i(e) { let s = e.message,
                    t = (0, l.useTranslations)(); return (0, n.jsxs)("div", { className: "flex size-full flex-col gap-4 flex-center", children: [(0, n.jsx)(a.default, { className: "h-[165px] w-[190px]", src: "/assets/no-content.svg", alt: "no content", height: 165, width: 190 }), (0, n.jsx)("span", { className: "whitespace-pre text-center text-ss text-metal-700", children: null != s ? s : t("NORMAL.NO_CONTENT") })] }) } }, 79336: function(e, s, t) { "use strict";
            t.d(s, { K: function() { return a }, a: function() { return l } }); var n = t(3965); let l = (0, n.createContext)({}),
                a = () => (0, n.useContext)(l) }, 63853: function(e, s, t) { "use strict";

            function n(e) { let s = e.wrap,
                    t = e.wrapper,
                    n = e.children; return void 0 === s || s ? t(n) : n }
            t.d(s, { Z: function() { return n } }) }, 15266: function(e, s, t) { "use strict";
            t.d(s, { Z: function() { return l } }); var n = t(48103);

            function l(e, s) { return [s].reduce((s, t) => ("" === t || (t.includes("\n") ? t.split("\n").forEach((t, l, a) => { "" !== t && (s.push(t), l < a.length - 1 && s.push((0, n.jsx)("br", {}, `${e}_br_${l}`))) }) : s.push(t)), s), []).reduce((s, t, l) => { if ("" === t) return s; if ("string" != typeof t) return s.push(t), s; let a = RegExp(/(https?:\/\/[^\s,\u3000-\u303f\uff00-\uFFef]+)/, "ig"); return a.test(t) ? t.match(a) && t.split(a).forEach(i => { "" !== i && (a.test(i) ? s.push((0, n.jsx)("a", { href: i, className: "text-blue-600 underline underline-offset-2 hover:text-blue-400", target: "_blank", referrerPolicy: "no-referrer", children: i }, `${e}_${t}_link_${l}`)) : s.push(i)) }) : s.push(t), s }, []) }
            t(3965) }, 89260: function(e, s, t) { "use strict";
            t.r(s); var n = t(48103),
                l = t(3965),
                a = t(94483),
                i = t(70650),
                r = t(4715),
                c = t(31301),
                o = t(89936),
                d = t(31207),
                u = t(50062); let x = (0, a.default)(() => Promise.all([t.e(9226), t.e(6364), t.e(9639), t.e(4299)]).then(t.bind(t, 94299)), { loadableGenerated: { webpack: () => [94299] }, ssr: !1, loading: () => (0, n.jsx)(r.Z, { className: "flex aspect-video bg-black flex-center" }) });
            s.default = () => { var e; let s = (0, l.useRef)(null),
                    t = (0, c.Y)(),
                    a = t.streamerId,
                    r = t.isKeyboardShow; return (0, u.Z)(), (0, i.Pr)({ autoLock: r }), (0, o.Z)(), (0, n.jsxs)("div", { ref: s, className: "flex h-full flex-col", style: { maxHeight: r ? `${null===(e=window.visualViewport)||void 0===e?void 0:e.height}px` : "unset" }, children: [(0, n.jsx)(x, { placement: "liveroom", streamerId: a }), (0, n.jsx)(d.Z, { tabClassName: { "h-0 overflow-y-hidden": r } })] }) } }, 44063: function(e, s, t) { "use strict";
            t.r(s), t.d(s, { default: function() { return M } }); var n = t(69632),
                l = t(48103),
                a = t(3965),
                i = t(94483),
                r = t(70650),
                c = t(4715),
                o = t(31301); let d = e => e.replace("px", ""); var u = () => { let e = (0, a.useRef)({ top: 0, right: 0, bottom: 0, left: 0 }); return (0, a.useEffect)(() => { let s = getComputedStyle(document.documentElement).getPropertyValue("--safe-area-top"),
                            t = getComputedStyle(document.documentElement).getPropertyValue("--safe-area-right"),
                            n = getComputedStyle(document.documentElement).getPropertyValue("--safe-area-bottom"),
                            l = getComputedStyle(document.documentElement).getPropertyValue("--safe-area-left");
                        e.current = { top: +d(s), right: +d(t), bottom: +d(n), left: +d(l) } }, []), e.current },
                x = t(77254),
                m = t(89936),
                h = t(31207),
                g = t(50062),
                N = t(54205); let j = (0, i.default)(() => Promise.all([t.e(9226), t.e(6364), t.e(9639), t.e(4299)]).then(t.bind(t, 94299)), { loadableGenerated: { webpack: () => [94299] }, ssr: !1, loading: () => (0, l.jsx)(c.Z, { className: "flex aspect-video bg-black flex-center" }) }); var M = () => { let e = (0, a.useRef)(null),
                    s = (0, a.useRef)(null),
                    t = (0, a.useRef)(0),
                    i = u(),
                    c = i.top,
                    d = i.bottom,
                    M = (0, o.Y)(),
                    p = M.streamerId,
                    f = M.keyboardHeight,
                    I = M.isKeyboardShow,
                    D = M.messageBlock,
                    y = I ? Math.round(2 * f) : t.current,
                    v = (0, n._)((0, a.useState)(0), 2),
                    b = v[0],
                    A = v[1];
                (0, N.useTranslations)(), (0, g.Z)(), (0, m.Z)(); let E = (0, r.Sf)(() => { requestAnimationFrame(() => { var e;
                            ((null === (e = visualViewport) || void 0 === e ? void 0 : e.offsetTop) || 0) > 0 ? window.scrollBy(0, -d) : (A(d), window.scrollTo(0, f + d - 8)) }) }, 100),
                    w = (0, a.useCallback)(e => { if (e.target) { var s, t, n; let l = (null === (s = D.current) || void 0 === s ? void 0 : s.scrollHeight) || 0,
                                a = (null === (t = D.current) || void 0 === t ? void 0 : t.clientHeight) || 0;
                            (null === (n = D.current) || void 0 === n ? void 0 : n.contains(e.target)) && l > a || e.preventDefault() } }, []); return (0, a.useEffect)(() => (I ? (E(), window.addEventListener("touchmove", w, { passive: !1 })) : (A(0), window.removeEventListener("touchmove", w)), () => { window.removeEventListener("touchmove", w) }), [I]), (0, a.useEffect)(() => { let e = e => { 0 !== window.scrollY && "passive" === e.newState && window.scroll(0, document.body.scrollHeight) }; return window.lifecycle.addEventListener("statechange", e), () => { window.lifecycle.removeEventListener("statechange", e) } }, []), (0, a.useLayoutEffect)(() => { var e;
                    t.current = (null === (e = s.current) || void 0 === e ? void 0 : e.clientHeight) || 0 }, []), (0, l.jsxs)("div", { ref: e, className: "flex h-full flex-col", children: [(0, l.jsx)("div", { className: (0, x.Z)("fixed top-0 z-40 w-full bg-black"), style: { height: `${y}px`, top: `-${Math.max(t.current-c,0)}px` } }), (0, l.jsx)("div", { className: "fixed top-0 z-50 w-full pt-safe", ref: s, style: { top: `${Math.max(f-d+b,0)}px` }, children: (0, l.jsx)(j, { placement: "liveroom", streamerId: p }) }), (0, l.jsx)(h.Z, { tabStyle: { marginTop: `${t.current-c}px` } })] }) } }, 31207: function(e, s, t) { "use strict";
            t.d(s, { Z: function() { return sZ } }); var n, l, a, i, r, c, o = t(48103),
                d = t(3965),
                u = t(50011),
                x = t(69632),
                m = t(70650); let h = (0, d.forwardRef)((e, s) => { let t = e.className,
                    n = e.onVisibilityChange,
                    l = e.children,
                    a = (0, x._)((0, d.useState)(!1), 2),
                    i = a[0],
                    r = a[1],
                    c = (0, d.useRef)(null),
                    u = (0, m.S1)({ threshold: .85 }),
                    h = u.isIntersecting,
                    g = u.ref; return (0, d.useEffect)(() => { h && r(!0), n(h) }, [h]), (0, d.useImperativeHandle)(s, () => ({ scrollIntoView() { c.current && c.current.scrollIntoView({ behavior: "smooth" }) } })), (0, o.jsx)("div", { ref: e => { g(e), c.current = e }, className: t, children: i && l }) });
            h.displayName = "VisibilityContainer"; var g = t(31301),
                N = t(68503),
                j = t(77254),
                M = t(71931),
                p = e => !!e && [M.D$.basketball, M.D$.soccer].includes(e),
                f = t(32904),
                I = t(54205),
                D = t(17347),
                y = t(97636),
                v = t(96266),
                b = t(33454),
                A = t(92674),
                E = t(1237),
                w = t(11369),
                T = t(41625),
                C = t(7833),
                z = t(44829),
                L = t(96148),
                O = t(54275),
                S = t(44216),
                k = t(7107),
                _ = t(79336); let U = (0, d.lazy)(() => Promise.all([t.e(8295), t.e(8811)]).then(t.bind(t, 48811))); var Z = e => { let s = e.disabled,
                        t = e.onToggle,
                        n = e.onEmoji,
                        l = (0, x._)((0, d.useState)(!1), 2),
                        a = l[0],
                        i = l[1],
                        r = (0, x._)((0, d.useState)(""), 2),
                        c = r[0],
                        u = r[1],
                        m = (0, d.useRef)({}),
                        h = (0, d.useRef)(),
                        g = (0, d.useRef)(); return (0, d.useEffect)(() => { var e; return null === (e = h.current) || void 0 === e ? void 0 : e.disconnect }, []), (0, o.jsxs)("div", { className: "relative", children: [(0, o.jsx)("div", { className: (0, j.Z)("size-5 cursor-pointer text-metal-400 hover:text-primary", { "text-primary": a, "cursor-not-allowed": s }), onClick: s ? void 0 : () => { t && t(!a), i(!a) }, children: s ? (0, o.jsx)(S.Z, { className: "size-full" }) : (0, o.jsx)(k.Z, { className: "size-full" }) }), (0, o.jsx)(_.a.Provider, { value: { selectedCategory: c, setSelectedCategory: u, sendEmoji: e => { n && n(e) }, getCategoryBlocks: () => m.current, setSymbolBlock: (e, s) => { m.current[e] = s }, getScrollObserver: () => h.current || null, setScrollObserver: e => { h.current = e }, setScrollBlock: e => { g.current = e }, getScrollBlock: () => g.current || null }, children: !s && a && (0, o.jsx)("div", { className: "absolute -top-2 left-24 z-[9999] flex size-64 -translate-x-full -translate-y-full flex-col rounded bg-metal-50 py-2 invisible-scrollbar", children: (0, o.jsx)(d.Suspense, { fallback: (0, o.jsx)("span", { className: "loading loading-spinner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" }), children: (0, o.jsx)(U, {}) }) }) })] }) },
                Q = t(44958),
                Y = t(81309),
                B = t(95740),
                V = t(92489),
                R = t(56682),
                G = t(19253),
                P = t(15438);

            function F() { var e, s, t, n; let l = (0, I.useTranslations)(),
                    a = (0, R.f)("desktop"),
                    i = (0, G.Z)(e => e.status === B.J0.banned || e.roomStatus === Y.I.banned),
                    r = (0, P.Z)().show,
                    c = function() { var e; let s = (0, Q.default)().invoke,
                            t = (0, x._)((0, d.useState)(!1), 2),
                            n = t[0],
                            l = t[1],
                            a = (0, x._)((0, d.useState)(), 2),
                            i = a[0],
                            r = a[1]; return { sendMessage: (e = (0, v._)(function*(e) { l(!0), yield s("SendMessage", e).catch(r), l(!1) }), function(s) { return e.apply(this, arguments) }), loading: n, error: i } }(),
                    u = c.sendMessage,
                    h = c.loading,
                    g = c.error,
                    N = (0, V.Z)(H),
                    M = (0, C.cI)({ resolver: N, defaultValues: { message: "" } }),
                    p = M.register,
                    f = M.handleSubmit,
                    D = M.reset,
                    y = M.setFocus,
                    L = M.formState,
                    S = L.isDirty,
                    k = L.isSubmitted,
                    _ = L.errors,
                    U = M.getValues,
                    F = M.setValue,
                    W = (0, m.kt)(!1),
                    J = W.value,
                    X = W.setTrue,
                    q = W.setFalse;
                (0, d.useEffect)(() => { var e;
                    (null === (e = _.message) || void 0 === e ? void 0 : e.type) === "too_big" && k && X() }, [_, k]); let K = null !== (t = null === (s = _.message) || void 0 === s ? void 0 : null === (e = s.message) || void 0 === e ? void 0 : e.toString()) && void 0 !== t ? t : i ? l("LIVE.MUTED") : `${l("LIVE.ENTER_MESSAGE")}...`,
                    $ = (n = (0, v._)(function*(e) { i || h || (yield u((0, T.Z)(e.message)).then(() => { D() }).catch(e => { r({ message: l("NORMAL.ACTION_FAIL"), type: "error" }), console.warn(e) })) }), function(e) { return n.apply(this, arguments) }); return (0, d.useEffect)(() => { k && !S && y("message") }, [S, k, y]), (0, o.jsxs)("form", { className: "flex items-center gap-3", onSubmit: f($), children: [(0, o.jsxs)("div", { className: "flex size-full items-end gap-2 rounded bg-metal-50 px-3 py-1", children: [(0, o.jsx)(z.Z, (0, A._)((0, b._)({ tabIndex: 1 }, p("message")), { className: (0, j.Z)("w-full resize-none border-none bg-transparent p-0 text-ss invisible-scrollbar ![outline:none]", { "textarea-error": _.message || g }), inputMode: "text", autoComplete: "off", maxRows: 3, disabled: i, placeholder: K, onKeyDown: e => { "Enter" !== e.key || e.shiftKey || f($)(e) } })), a && (0, o.jsx)(Z, { disabled: i, onEmoji: e => { var s; let t = null !== (s = U("message")) && void 0 !== s ? s : "";
                                y("message"), F("message", t + e, { shouldDirty: !0, shouldValidate: !0 }) } })] }), (0, o.jsx)("button", { type: "submit", tabIndex: -1, onMouseDown: e => e.preventDefault(), onPointerDown: e => e.preventDefault(), disabled: i || h, className: "btn btn-circle btn-ghost btn-sm mt-auto", children: (0, o.jsx)(E.Z, { size: 24, className: (0, j.Z)(i ? "text-metal-300" : "text-primary"), variant: "Bold" }) }), (0, o.jsx)(O.Z, { isOpen: J, onConfirm: () => Promise.resolve(), onClose: q, className: "desktop:max-w-screen-sm", children: (0, o.jsxs)("div", { className: "flex w-full items-start gap-3", children: [(0, o.jsx)(w.Z, { className: "text-error", size: 36 }), (0, o.jsx)("p", { className: "flex-1 text-metal-700", children: l("ERROR.FORM.MAX_LENGTH", { count: 150 }) })] }) })] }) } let H = e => L.z.object({ message: L.z.string({ required_error: e("ERROR.FORM.REQUIRED") }).trim().min(1, { message: e("ERROR.FORM.MIN_LENGTH", { count: 1 }) }).max(150) });

            function W() { let e = (0, I.useTranslations)(),
                    s = (0, m.O_)(),
                    t = (0, Q.default)().connecting,
                    n = (0, G.Z)(),
                    l = n.status,
                    a = n.welcomeMessagesEnabled,
                    i = n.isReady,
                    r = n.setEnableWelcomeMessages,
                    c = (0, P.Z)().show,
                    d = (0, N.ZP)().toggleSignInModal,
                    u = () => { let s = !a;
                        c({ message: s ? e("LIVE.ENABLE_WELCOME_MESSAGE") : e("LIVE.DISABLE_WELCOME_MESSAGE"), type: "info" }), r(s) }; return (0, o.jsxs)("div", { className: "flex min-h-7 w-full items-center gap-3", children: [(0, o.jsx)("div", { className: "flex-1", children: s && [B.J0.active, B.J0.banned].includes(l) ? (0, o.jsx)(F, {}) : t || !i ? (0, o.jsx)("button", { type: "button", disabled: !0, className: "btn btn-ghost btn-sm w-full rounded-md disabled:bg-metal-300 disabled:text-base-100", children: e("LIVE.CONNECTING") }) : (0, o.jsx)(y.Z, { shape: "normal", color: "primary", className: "w-full rounded-ss", onClick: () => d(!0), children: e("LIVE.LOGIN_TO_CHAT") }) }), (0, o.jsx)("button", { type: "button", disabled: t || !i, className: (0, j.Z)("btn btn-circle btn-ghost btn-sm mt-auto text-primary transition-colors disabled:text-metal-300", { "text-metal-300": !a }), onClick: () => u(), children: (0, o.jsx)(D.Z, { variant: "Bold", size: 24 }) })] }) } var J = t(76920),
                X = t(94445),
                q = t(78441),
                K = t(25193),
                $ = t(92406);
            (n = i || (i = {}))[n.Hyperlink = 1] = "Hyperlink", n[n.Text = 2] = "Text"; var ee = e => { let s = e.className,
                        t = e.type; return (0, o.jsxs)("div", { className: s, children: ["url" === t && (0, o.jsxs)("svg", { width: "20", height: "23", viewBox: "0 0 20 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, o.jsxs)("g", { clipPath: "url(#clip0_7431_85949)", children: [(0, o.jsx)("path", { d: "M17.8808 0H2.11917C0.945113 0 0 0.97281 0 2.18127V3.00906H4.23246V18.6798L8.17435 20.8399L12.1162 23L16.0581 20.8399L20 18.6798V2.18127C20 0.978852 19.0549 0 17.8808 0Z", fill: "#49526A" }), (0, o.jsx)("path", { d: "M2.11917 0C3.28735 0 4.23246 0.978852 4.23246 2.18127V3.00906H0V2.18127C0 0.978852 0.950983 0 2.11917 0Z", fill: "#9BA4BA" })] }), (0, o.jsx)("path", { d: "M11.9957 6L13.3795 8.41458L16 9.05239L14.227 11.1754L14.4605 14L11.9957 12.8793L9.53081 14L9.77297 11.1754L8 9.05239L10.6378 8.41458L11.9957 6Z", fill: "#FCBD31" }), (0, o.jsx)("defs", { children: (0, o.jsx)("clipPath", { id: "clip0_7431_85949", children: (0, o.jsx)("rect", { width: "20", height: "23", fill: "white" }) }) })] }), "text" === t && (0, o.jsxs)("svg", { width: "20", height: "23", viewBox: "0 0 20 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, o.jsxs)("g", { clipPath: "url(#clip0_7431_85958)", children: [(0, o.jsx)("path", { d: "M17.8808 0H2.11917C0.945113 0 0 0.97281 0 2.18127V3.00906H4.23246V18.6798L8.17435 20.8399L12.1162 23L16.0581 20.8399L20 18.6798V2.18127C20 0.978852 19.0549 0 17.8808 0Z", fill: "#9BC8FF" }), (0, o.jsx)("path", { d: "M2.11917 0C3.28735 0 4.23246 0.978852 4.23246 2.18127V3.00906H0V2.18127C0 0.978852 0.950983 0 2.11917 0Z", fill: "#6BABF6" })] }), (0, o.jsx)("path", { d: "M11.9957 6L13.3795 8.41458L16 9.05239L14.227 11.1754L14.4605 14L11.9957 12.8793L9.53081 14L9.77297 11.1754L8 9.05239L10.6378 8.41458L11.9957 6Z", fill: "#CF222E" }), (0, o.jsx)("defs", { children: (0, o.jsx)("clipPath", { id: "clip0_7431_85958", children: (0, o.jsx)("rect", { width: "20", height: "23", fill: "white" }) }) })] })] }) },
                es = e => { let s = e.title,
                        t = e.type,
                        n = e.content,
                        l = e.hyperlink,
                        a = e.noData,
                        r = (0, I.useTranslations)("MANAGEMENT"); return (0, o.jsxs)("div", { className: "h-full", children: [(0, o.jsx)(ee, { type: t === i.Text || a ? "text" : "url", className: "float-left mt-[-2px] px-2" }), a ? (0, o.jsx)("div", { className: "h-full text-ss text-metal-500 flex-center", children: r("ANNOUNCEMENT_NO_CONTENT") }) : (0, o.jsxs)("div", { className: "inline-flex gap-1 px-2 py-1 text-ss", children: [(0, o.jsx)("span", { children: s }), t === i.Text ? (0, o.jsx)("span", { className: "text-ss font-bold", children: n }) : (0, o.jsx)("a", { className: "link font-bold text-blue-600 ", target: "_blank", href: l, children: n })] })] }) },
                et = e => { let s = e.className; return (0, o.jsx)("div", { className: s, children: (0, o.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, o.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1325 2.87724C10.8976 3.11212 10.8976 3.49292 11.1325 3.72779C11.3673 3.96266 11.7481 3.96266 11.983 3.72779L13.6841 2.0267C13.919 1.79183 13.919 1.41103 13.6841 1.17615C13.4492 0.941282 13.0684 0.941282 12.8336 1.17615L11.1325 2.87724ZM0.182249 9.29113C-0.0583218 8.70975 -0.250778 7.41468 0.90396 6.88543L2.1068 6.40428C2.26718 6.36419 2.67214 6.1998 3.00894 5.863C3.34574 5.5262 5.75546 3.31696 6.91821 2.25444C7.15878 2.05397 7.73615 1.66504 8.12107 1.71316L8.15975 1.71796C8.63712 1.77704 9.27335 1.85579 9.62463 2.67544C9.91332 3.34904 11.3086 6.68495 11.9702 8.2687C12.1105 8.66965 12.2709 9.59184 11.7898 10.073C11.3086 10.5541 10.7072 10.6343 10.4666 10.6143L5.83565 10.8548L6.82289 13.1958C6.94318 13.5566 6.99129 14.3625 6.22147 14.6993L5.49976 15C5.11885 15.1604 4.26082 15.2526 3.8759 14.3385C3.64198 13.7829 3.34997 13.0528 3.12987 12.5025L3.12986 12.5025L3.12985 12.5025L3.12977 12.5023L3.12969 12.5021C2.98771 12.1471 2.87568 11.867 2.82852 11.757C2.32733 11.777 1.24077 11.6607 0.90396 11.0353C0.567154 10.4098 0.282483 9.61189 0.182249 9.29113ZM12.9926 6.40428C12.6605 6.40428 12.3912 6.67355 12.3912 7.00571C12.3912 7.33787 12.6605 7.60714 12.9926 7.60714H15.3983C15.7305 7.60714 15.9998 7.33787 15.9998 7.00571C15.9998 6.67355 15.7305 6.40428 15.3983 6.40428H12.9926ZM12.145 5.24046C12.0153 4.9347 12.1579 4.58163 12.4637 4.45184L14.6781 3.51186C14.9839 3.38208 15.337 3.52473 15.4667 3.83048C15.5965 4.13623 15.4539 4.48931 15.1481 4.61909L12.9337 5.55908C12.6279 5.68886 12.2748 5.54621 12.145 5.24046Z", fill: "#FCBD31" }) }) }) },
                en = t(84734),
                el = t(39855),
                ea = t(28867),
                ei = t(62740);

            function er() { return (er = (0, v._)(function*(e) { return yield ei.Z.url("/api/Live/GetAnnouncement").query((0, el.Z)({ streamerId: e }, ea.Z)).get().json(e => e.IsSuccess ? e.Data : null) })).apply(this, arguments) } var ec = e => { let s = e.streamerId,
                        t = e.className,
                        n = (0, x._)((0, d.useState)(!0), 2),
                        l = n[0],
                        a = n[1],
                        i = (0, en.useQuery)({ queryKey: ["/Live/GetAnnouncement", s], queryFn: () => (function(e) { return er.apply(this, arguments) })(s) }).data,
                        r = (0, I.useTranslations)("MANAGEMENT"),
                        c = (0, R.f)("mobile"),
                        u = (0, d.useMemo)(() => { var e; return (null == i ? void 0 : null === (e = i.AnnouncementDetails) || void 0 === e ? void 0 : e.map(e => (function(e) { let s = {}; for (let t in e) e.hasOwnProperty(t) && (s[t.charAt(0).toLowerCase() + t.slice(1)] = e[t]); return s })(e)).filter(e => "" !== e.content || "" !== e.hyperlink || "" !== e.title)) || [] }, [i]),
                        m = l && !(0 === u.length && (null == i ? void 0 : i.QRCodeUrl) === ""); return (0, o.jsx)("div", { className: (0, j.Z)((null == i ? void 0 : i.Enabled) ? t : "", { "rounded-md": null == i ? void 0 : i.Enabled }), children: (null == i ? void 0 : i.Enabled) && (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)("div", { className: "flex gap-2 px-2 py-px", onClick: () => { c && a(e => !e) }, children: [(0, o.jsx)(et, { className: "shrink-0 px-1 pb-px " }), (0, o.jsx)(K.Z, { className: " overflow-hidden", children: (0, o.jsx)("div", { className: "pl-2 text-ss", children: "" === i.Content ? r("ANNOUNCEMENT_NO_CONTENT") : i.Content }) }), c && (l ? (0, o.jsx)(X.Z, { size: "20", color: "#666", variant: "Bold" }) : (0, o.jsx)(q.Z, { size: "20", color: "#666", variant: "Bold" }))] }), m && (0, o.jsxs)("div", { className: (0, j.Z)("flex gap-2 rounded-b-md bg-[#FFEEC3] p-2", { "items-center": u.length > 1 && "" !== i.QRCodeUrl }), children: [(0, o.jsxs)("ul", { className: " flex w-full flex-col justify-around gap-1", children: [u.map(e => (0, o.jsx)("li", { className: "h-full rounded-md bg-neutral-0 ", children: (0, o.jsx)(es, (0, b._)({}, e)) }, e.sequenceId)), 0 === u.length && (0, o.jsx)("li", { className: "h-full rounded-md bg-neutral-0 ", children: (0, o.jsx)(es, { noData: !0 }) })] }), !c && "" !== i.QRCodeUrl && (0, o.jsx)("div", { className: "relative size-[60px] shrink-0 cursor-pointer ", children: (0, o.jsx)("div", { className: "absolute z-100 size-[60px] origin-right flex-center hover:scale-[2.2] hover:cursor-none", children: (0, o.jsx)($.default, { src: i.QRCodeUrl, alt: "qrcode", fill: !0, className: "aspect-video rounded-box object-contain" }) }) })] })] }) }) },
                eo = t(17831);

            function ed(e) { var s; let t = e.message,
                    n = e.roomId,
                    l = e.operation,
                    a = e.close,
                    i = (0, I.useTranslations)(),
                    c = function(e, s) { var t; let n = (0, Q.default)().invoke,
                            l = (0, x._)((0, d.useState)(!1), 2),
                            a = l[0],
                            i = l[1],
                            c = (0, G.Z)(),
                            o = c.addMutedUserId,
                            u = c.removeMutedUserId,
                            m = (t = (0, v._)(function*(e) { i(!0), yield n("Management", e).catch(console.warn), i(!1) }), function(e) { return t.apply(this, arguments) }); return { submit: t => { switch (t) {
                                    case r.Mute:
                                    case r.MuteAndPurge:
                                        return o(s.UserId), m({ Action: t, Options: { UserId: s.UserId, StreamerId: +e } });
                                    case r.Unmute:
                                        return u(s.UserId), m({ Action: 4, Options: { UserId: s.UserId, StreamerId: +e } }).catch(console.warn);
                                    case r.PurgeAll:
                                        return m({ Action: 2, Options: { UserId: s.UserId, StreamerId: +e } }).catch(console.warn);
                                    case r.Purge:
                                        return m({ Action: 2, Options: { MessageId: s.Id } }).catch(console.warn) } }, loading: a } }(n, t),
                    u = c.submit,
                    m = c.loading,
                    h = (0, d.useMemo)(() => { switch (l) {
                            case r.Mute:
                                return (0, o.jsx)(o.Fragment, { children: i.rich("LIVE.CONFIRM_MUTE", { name: () => (0, o.jsx)("span", { className: "text-warning", children: null == t ? void 0 : t.NickName }) }) });
                            case r.Unmute:
                                return (0, o.jsx)(o.Fragment, { children: i.rich("LIVE.CONFIRM_UNMUTE", { name: () => (0, o.jsx)("span", { className: "text-warning", children: null == t ? void 0 : t.NickName }) }) });
                            case r.MuteAndPurge:
                                return (0, o.jsx)(o.Fragment, { children: i.rich("LIVE.CONFIRM_DELETE_ALL_MESSAGE", { name: () => (0, o.jsx)("span", { className: "text-warning", children: null == t ? void 0 : t.NickName }) }) });
                            case r.Purge:
                                return (0, o.jsx)(o.Fragment, { children: i.rich("LIVE.SELECT_DELETE_MESSAGE", { name: () => (0, o.jsx)("span", { className: "text-warning", children: null == t ? void 0 : t.NickName }) }) });
                            default:
                                return null } }, [null == t ? void 0 : t.NickName, l]),
                    g = (s = (0, v._)(function*(e) { yield u(e), a() }), function(e) { return s.apply(this, arguments) }),
                    N = l === r.Purge ? "btn-md" : "btn-sm"; return (0, o.jsx)(eo.Z, { className: "max-w-fit", isOpen: !0, actions: (0, o.jsxs)("div", { className: "flex justify-end gap-2", children: [(0, o.jsx)("button", { type: "button", className: (0, j.Z)("btn", N), onClick: a, children: i("NORMAL.CANCEL") }), l === r.Purge ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)("button", { type: "button", disabled: m, className: (0, j.Z)("btn-primary-gradient btn max-w-24", N), onClick: () => g(r.Purge), children: i("LIVE.ONE_MESSAGE") }), (0, o.jsx)("button", { type: "button", disabled: m, className: (0, j.Z)("btn-primary-gradient btn max-w-24", N), onClick: () => g(r.PurgeAll), children: i("LIVE.ALL_MESSAGE") })] }) : (0, o.jsx)("button", { type: "button", disabled: m, className: (0, j.Z)("btn-primary-gradient btn", N), onClick: () => g(l), children: i("NORMAL.CONFIRM") })] }), children: (0, o.jsx)("h3", { className: "w-full text-metal-400", children: h }) }) }(l = r || (r = {}))[l.Select = 0] = "Select", l[l.Mute = 1] = "Mute", l[l.Purge = 2] = "Purge", l[l.MuteAndPurge = 3] = "MuteAndPurge", l[l.Unmute = 4] = "Unmute", l[l.PurgeAll = 5] = "PurgeAll", L.z.object({ Action: L.z.nativeEnum(r), Options: L.z.object({ UserId: L.z.number(), StreamerId: L.z.number() }) }).or(L.z.object({ Action: L.z.literal(r.Purge), Options: L.z.object({ MessageId: L.z.number() }) })); var eu = t(46927),
                ex = t(30762); let em = (0, d.forwardRef)((e, s) => { let t = e.roomId,
                    n = (0, I.useTranslations)(),
                    l = (0, x._)((0, d.useState)(), 2),
                    a = l[0],
                    i = l[1],
                    c = (0, x._)((0, d.useState)(r.Select), 2),
                    u = c[0],
                    h = c[1],
                    g = (0, m.kt)(!1),
                    N = g.value,
                    j = g.setTrue,
                    M = g.setFalse,
                    p = (0, P.Z)().show,
                    f = (0, G.Z)(e => e.mutedUserIds),
                    D = (0, ex.Z)(e => ({ userId: e.userId, userRole: e.userRole })),
                    y = D.userId,
                    v = D.userRole;
                (0, eu.Z)("ManagementResponse", e => { e ? p({ type: "info", message: n("NORMAL.ACTION_SUCCESS") }) : p({ type: "error", message: n("NORMAL.ACTION_FAIL") }) }); let b = (0, d.useCallback)(e => { i(e), j() }, [j]),
                    A = (0, d.useCallback)(() => { M(), h(r.Select), i(void 0) }, [M]); if ((0, d.useImperativeHandle)(s, () => ({ open: b, close: A })), !a) return null; let E = a.UserId === y,
                    w = a.UserId === t,
                    T = y === t,
                    C = v === B.i4.superAdmin,
                    z = v === B.i4.streamer; return u ? (0, o.jsx)(ed, { roomId: t, message: a, operation: u, close: A }) : (0, o.jsx)(eo.Z, { className: "max-w-fit", isOpen: N, onClose: A, actions: (0, o.jsxs)("div", { className: "grid w-full auto-rows-fr grid-cols-2 gap-2", children: [(null == f ? void 0 : f.includes(a.UserId)) ? (0, o.jsx)("button", { type: "button", className: "btn-secondary-gradient btn btn-sm self-center", onClick: () => { h(r.Unmute) }, children: n("LIVE.UNMUTE") }) : (0, o.jsx)("button", { type: "button", className: "btn-primary-gradient btn btn-sm self-center", disabled: E || w && !C || z && [B.i4.assistant, B.i4.superAdmin].includes(a.UserType), onClick: () => { h(r.Mute) }, children: n("LIVE.MUTE") }), (0, o.jsx)("button", { type: "button", className: "btn-primary-gradient btn btn-sm self-center", disabled: w && !T && !C, onClick: () => { h(r.Purge) }, children: n("LIVE.DELETE_MESSAGE") }), !(null == f ? void 0 : f.includes(a.UserId)) && (0, o.jsx)("button", { type: "button", className: "btn-red-gradient btn btn-sm col-span-2", disabled: E || w && !T && !C || z && [B.i4.assistant, B.i4.superAdmin].includes(a.UserType), onClick: () => { h(r.MuteAndPurge) }, children: n("LIVE.MUTE_AND_DELETE_ALL_MESSAGE") })] }), children: (0, o.jsx)("h3", { className: "w-full text-metal-400", children: n.rich("LIVE.SELECT_ACTION", { name: () => (0, o.jsx)("span", { className: "text-warning", children: a.NickName }) }) }) }) });
            em.displayName = "ChatMessageOperationModal"; var eh = t(34338),
                eg = t(92465),
                eN = t(81811),
                ej = t(15266);

            function eM(e) { let s = e.role,
                    t = e.isRoomOwner,
                    n = (0, I.useTranslations)(); return [B.i4.member, B.i4.guest].includes(s) ? null : (0, o.jsxs)("span", { className: (0, j.Z)("inline-flex h-5 items-center rounded-md px-1.5 text-xs leading-none text-white", { "bg-orange": s === B.i4.system, "bg-green-100": s === B.i4.streamer, "bg-violet": t, "bg-blue": s === B.i4.assistant, "bg-[#0891B2]": s === B.i4.superAdmin }), children: [s === B.i4.system && n("LIVE.ROLE_SYSTEM"), s === B.i4.streamer && n("LIVE.ROLE_STREAMER"), s === B.i4.assistant && n("LIVE.ROLE_RA"), s === B.i4.superAdmin && n("LIVE.ROLE_SA")] }) }

            function ep(e) { let s = e.message,
                    t = s.Content,
                    n = s.UserType,
                    l = s.NickName,
                    a = s.UserId,
                    i = s.Id,
                    r = e.onClick,
                    c = (0, ex.Z)(e => e.userId),
                    u = (0, G.Z)(e => e.roomId),
                    x = (0, d.useMemo)(() => (0, ej.Z)(i, t), [i, t]),
                    m = a === u && n === B.i4.streamer; return (0, o.jsxs)("div", { className: (0, j.Z)("space-x-1 text-metal-700", { "text-orange": n === B.i4.system, "text-blue": n === B.i4.assistant, "text-green-100": n === B.i4.streamer, "text-violet": m, "text-[#0891B2]": n === B.i4.superAdmin, "text-primary": n === B.i4.member && a === c }), children: [(0, o.jsx)(eM, { role: n, isRoomOwner: m }), n !== B.i4.system && (0, o.jsxs)("span", { className: (0, j.Z)("text-ss", { "text-metal-500": n === B.i4.member && a !== c }), onClick: r, children: [l, "："] }), (0, o.jsx)("p", { className: "inline break-all text-ss", children: x })] }) }

            function ef(e) { let s = e.roomId,
                    t = e.className,
                    n = (0, I.useTranslations)(),
                    l = (0, d.useRef)(0),
                    a = (0, d.useRef)(!1),
                    i = (0, x._)((0, d.useState)(!1), 2),
                    r = i[0],
                    c = i[1],
                    u = (0, d.useRef)(null),
                    m = function(e) { var s; let t = (0, I.useTranslations)(),
                            n = (0, N.ZP)().setShouldSignOut,
                            l = (0, Q.default)().invoke,
                            a = (0, ex.Z)(e => e.userRole),
                            i = (0, G.Z)(e => e.roomId),
                            r = (0, G.Z)(e => e.messages),
                            c = (0, G.Z)(),
                            o = c.setRoom,
                            d = c.addMessage,
                            u = c.removeMessage,
                            x = c.purgeMessagesByUserId,
                            m = c.removeMutedUserId,
                            h = c.addMutedUserId,
                            g = c.setUserStatus,
                            j = c.setRoomStatus; return (0, eu.Z)("Welcome", e => { G.Z.getState().welcomeMessagesEnabled && d({ Id: -Date.now(), UserType: B.i4.system, UserId: -1, Type: 0, Content: t("LIVE.WELCOME_AUDIENCE_MESSAGE", { name: e }), NickName: e }) }), (0, eu.Z)("InitializeChatRoom", s => { o(e, s), s.UserStatus === B.J0.inactive && n(!0) }), (0, eu.Z)("ReceiveMessage", e => { d(e) }), (0, eu.Z)("AllowChat", e => { g(e ? B.J0.active : B.J0.banned), l("AllowChat", e).catch(console.warn) }), (0, eu.Z)("RoomAllowChat", e => { j(e ? Y.I.active : Y.I.banned), l("RoomAllowChat", e).catch(console.warn) }), (0, eu.Z)("MemberAllowChat", (e, s) => { s ? m(e) : h(e) }, [B.i4.streamer, B.i4.assistant, B.i4.superAdmin].includes(a)), (0, eu.Z)("DeleteMessage", e => { u(e) }), (0, eu.Z)("DeleteUserMessages", e => { x(e) }), { isReady: i === e, messages: i !== e ? [] : r, lastMessageId: null === (s = (0, eh.Z)(r)) || void 0 === s ? void 0 : s.Id } }(s),
                    h = m.messages,
                    M = m.lastMessageId,
                    p = m.isReady,
                    D = (0, ex.Z)(e => e.userRole),
                    y = (0, g.Y)(),
                    v = y.isKeyboardShow,
                    b = y.currentTab,
                    A = y.messageBlock,
                    E = (0, R.f)("mobile"),
                    w = "android" === (0, J.Z)(e => e.device.current),
                    T = (0, eg.Z)(() => A.current),
                    C = T.position.y,
                    z = T.allScrolled.y,
                    L = e => { if ([B.i4.streamer, B.i4.assistant, B.i4.superAdmin].includes(D) && e.UserType !== B.i4.system) { var s;
                            null === (s = u.current) || void 0 === s || s.open(e) } },
                    O = e => { l.current && cancelIdleCallback(l.current), l.current = requestIdleCallback(() => { A.current && (A.current.scrollTop = A.current.scrollHeight, e && e()) }, { timeout: 500 }) }; return (0, d.useLayoutEffect)(() => { p && O(() => a.current = !0) }, [p]), (0, d.useLayoutEffect)(() => { z && c(!1) }, [z]), (0, d.useLayoutEffect)(() => { A.current && a.current && M && (z ? A.current.scrollTop = A.current.scrollHeight : c(!0)) }, [M]), (0, d.useLayoutEffect)(() => (w && v && O(), () => {}), [v]), (0, o.jsxs)("div", { className: "relative flex-1 overflow-hidden", children: [(0, o.jsxs)("div", { ref: A, className: (0, j.Z)("relative h-full overflow-y-auto mobile:invisible-scrollbar", t), children: [(0, o.jsx)("div", { className: "flex min-h-full snap-y snap-mandatory snap-end snap-always flex-col items-stretch justify-end gap-1.5 pb-2", onTouchStart: e => { 0 !== C && e.stopPropagation() }, children: h.map(e => (0, o.jsx)(ep, { message: e, onClick: () => L(e) }, `${e.NickName}_${e.Id}`)) }), (0, o.jsx)(em, { ref: u, roomId: s })] }), (0, o.jsxs)("button", { type: "button", className: (0, j.Z)("absolute bottom-2 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-green-0 px-4 py-2 shadow-toast", { flex: (!E || b === f.z6.ChatRoom) && r }), onClick: () => O(() => { c(!1) }), children: [(0, o.jsx)("span", { className: "text-sm text-pastel-green", children: n("LIVE.NEW_MESSAGE") }), (0, o.jsx)(eN.Z, { size: 16, variant: "Outline", className: "text-pastel-green" })] })] }) } var eI = t(54174),
                eD = () => { var e; let s = (0, g.Y)().roomInfo,
                        t = null == s ? void 0 : null === (e = s.Streamer) || void 0 === e ? void 0 : e.NickName,
                        n = null == s ? void 0 : s.Portal,
                        l = (0, I.useTranslations)(); return (0, R.f)("desktop"), (0, o.jsxs)("div", { role: "alert", className: "mx-2 flex gap-2 rounded-md bg-metal-50 px-3 py-1 text-sm text-metal-700 desktop:z-20", children: [(0, o.jsx)(eI.Z, { size: 16, variant: "Bold", className: "shrink-0 text-metal-700" }), (0, o.jsx)("span", { children: l.rich("LIVE.WELCOME_MESSAGE", { name: t, a: () => (0, o.jsx)("a", { className: "link text-home-team", target: "_blank", href: `https://${n}`, children: n }) }) })] }) };

            function ey(e) { let s = e.roomId,
                    t = (0, I.useTranslations)(),
                    n = (0, Q.default)(),
                    l = n.error,
                    a = n.reconnect,
                    i = (0, g.Y)().isKeyboardShow,
                    r = (0, J.Z)(e => e.device.current); return (0, o.jsxs)("div", { className: "relative flex size-full flex-col items-stretch desktop:overflow-hidden", children: [(0, o.jsxs)("div", { className: (0, j.Z)("overflow-hidden pt-2", { "h-0 pt-0": i && "android" === r }), children: [(0, o.jsx)(ec, { streamerId: s, className: "mx-2 mb-[6px] bg-highlight pt-1 text-sm desktop:z-20" }), (0, o.jsx)(eD, {})] }), (0, o.jsx)(ef, { roomId: s, className: "flex-1 basis-full px-6 desktop:z-0" }), (0, o.jsx)("div", { className: "inset-x-0 mt-auto w-full border-t border-metal-200 bg-base-100 px-3 pt-2 pb-safe-offset-2 desktop:rounded-b-lg", children: (0, o.jsx)(W, {}) }), !!l && (0, o.jsxs)("div", { className: "absolute inset-0 -top-4 z-20 flex flex-col gap-y-6 bg-base-100/25 backdrop-blur flex-center", children: [(0, o.jsx)("h5", { className: "text-metal-700", children: t("LIVE.TRY_RECONNECT_SLOGAN") }), (0, o.jsx)("button", { type: "button", className: "btn btn-link btn-sm text-metal-700", onClick: a, children: t("LIVE.TRY_AGAIN") })] })] }) } var ev = t(21228),
                eb = t(59453);

            function eA() { let e = (0, I.useTranslations)(),
                    s = (0, m.O_)(),
                    t = (0, eb.Z)(); return ((0, m.Pr)({ autoLock: "landscape" === t }), s && "portrait" !== t) ? (0, o.jsxs)("div", { className: "fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-neutral-950/50 text-base-100 backdrop-blur-3xl animate-in fade-in", children: [(0, o.jsx)(ev.default, { src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMTQ4IDkwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBpZD0iaW1nL3JvdGF0ZSI+CjxwYXRoIGlkPSJVbmlvbiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjQuODI0IDQzLjYyNDRWODIuMTM5N0MxMjQuODI0IDg0Ljc0NDQgMTIyLjc0NCA4Ni44NTU5IDEyMC4xNzcgODYuODU1OUg0Ni45Nzc1QzQ0LjQxMDcgODYuODU1OSA0Mi4zMjk5IDg0Ljc0NDQgNDIuMzI5OSA4Mi4xMzk3VjQzLjYyNDRDNDIuMzI5OSA0MS4wMTk4IDQ0LjQxMDcgMzguOTA4MyA0Ni45Nzc1IDM4LjkwODNIMTIwLjE3N0MxMjIuNzQ0IDM4LjkwODMgMTI0LjgyNCA0MS4wMTk4IDEyNC44MjQgNDMuNjI0NFpNMTI3LjkyMyA4Mi4xMzk3QzEyNy45MjMgODYuNDgwOCAxMjQuNDU1IDkwIDEyMC4xNzcgOTBINDYuOTc3NUM0Mi42OTk1IDkwIDM5LjIzMTUgODYuNDgwOCAzOS4yMzE1IDgyLjEzOTdWNDMuNjI0NEMzOS4yMzE1IDM5LjI4MzMgNDIuNjk5NSAzNS43NjQyIDQ2Ljk3NzUgMzUuNzY0MkgxMjAuMTc3QzEyNC40NTUgMzUuNzY0MiAxMjcuOTIzIDM5LjI4MzMgMTI3LjkyMyA0My42MjQ0VjgyLjEzOTdaTTExOC42MjggNjkuMTcwM0MxMTkuNDgzIDY5LjE3MDMgMTIwLjE3NyA2OC40NjY0IDEyMC4xNzcgNjcuNTk4MlY1OC4xNjU5QzEyMC4xNzcgNTcuMjk3NyAxMTkuNDgzIDU2LjU5MzkgMTE4LjYyOCA1Ni41OTM5QzExNy43NzIgNTYuNTkzOSAxMTcuMDc4IDU3LjI5NzcgMTE3LjA3OCA1OC4xNjU5VjY3LjU5ODJDMTE3LjA3OCA2OC40NjY0IDExNy43NzIgNjkuMTcwMyAxMTguNjI4IDY5LjE3MDNaTTUwLjA3NTkgNzAuNzQyM0M1MC4wNzU5IDcxLjYxMDYgNDkuMzgyMyA3Mi4zMTQ0IDQ4LjUyNjcgNzIuMzE0NEM0Ny42NzExIDcyLjMxNDQgNDYuOTc3NSA3MS42MTA2IDQ2Ljk3NzUgNzAuNzQyM1Y1NS4wMjE4QzQ2Ljk3NzUgNTQuMTUzNiA0Ny42NzExIDUzLjQ0OTggNDguNTI2NyA1My40NDk4QzQ5LjM4MjMgNTMuNDQ5OCA1MC4wNzU5IDU0LjE1MzYgNTAuMDc1OSA1NS4wMjE4VjcwLjc0MjNaIiBmaWxsPSIjNTc1NzU3Ii8+CjxwYXRoIGlkPSJVbmlvbl8yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg0LjkzMzEgMy4xNDQxSDQ2Ljk3NzlDNDQuNDExMSAzLjE0NDEgNDIuMzMwMyA1LjI1NTYgNDIuMzMwMyA3Ljg2MDI2VjgyLjEzOTdDNDIuMzMwMyA4NC43NDQ0IDQ0LjQxMTEgODYuODU1OSA0Ni45Nzc5IDg2Ljg1NTlIODQuOTMzMUM4Ny40OTk5IDg2Ljg1NTkgODkuNTgwNyA4NC43NDQ0IDg5LjU4MDcgODIuMTM5N1Y3Ljg2MDI2Qzg5LjU4MDcgNS4yNTU2IDg3LjQ5OTkgMy4xNDQxIDg0LjkzMzEgMy4xNDQxWk00Ni45Nzc5IDBDNDIuNjk5OSAwIDM5LjIzMTkgMy41MTkxNiAzOS4yMzE5IDcuODYwMjZWODIuMTM5N0MzOS4yMzE5IDg2LjQ4MDggNDIuNjk5OSA5MCA0Ni45Nzc5IDkwSDg0LjkzMzFDODkuMjExMSA5MCA5Mi42NzkxIDg2LjQ4MDggOTIuNjc5MSA4Mi4xMzk3VjcuODYwMjZDOTIuNjc5MSAzLjUxOTE2IDg5LjIxMTEgMCA4NC45MzMxIDBINDYuOTc3OVpNNTkuNzU4NiA5LjQzMjM2QzU5Ljc1ODYgOC41NjQxNCA2MC40NTIyIDcuODYwMyA2MS4zMDc4IDcuODYwM0g3MC42MDNDNzEuNDU4NiA3Ljg2MDMgNzIuMTUyMiA4LjU2NDE0IDcyLjE1MjIgOS40MzIzNkM3Mi4xNTIyIDEwLjMwMDYgNzEuNDU4NiAxMS4wMDQ0IDcwLjYwMyAxMS4wMDQ0SDYxLjMwNzhDNjAuNDUyMiAxMS4wMDQ0IDU5Ljc1ODYgMTAuMzAwNiA1OS43NTg2IDkuNDMyMzZaTTU4LjIwOTUgNzguOTk1N0M1Ny4zNTM5IDc4Ljk5NTcgNTYuNjYwMyA3OS42OTk1IDU2LjY2MDMgODAuNTY3N0M1Ni42NjAzIDgxLjQzNTkgNTcuMzUzOSA4Mi4xMzk4IDU4LjIwOTUgODIuMTM5OEg3My43MDE1Qzc0LjU1NzEgODIuMTM5OCA3NS4yNTA3IDgxLjQzNTkgNzUuMjUwNyA4MC41Njc3Qzc1LjI1MDcgNzkuNjk5NSA3NC41NTcxIDc4Ljk5NTcgNzMuNzAxNSA3OC45OTU3SDU4LjIwOTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBpZD0iVW5pb25fMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjkuODQzIDEyLjA4MjhDMTMwLjQ2OSAxMS40OTA0IDEzMC41MDMgMTAuNDk1NSAxMjkuOTE5IDkuODYwODRDMTI5LjMzNSA5LjIyNjE1IDEyOC4zNTQgOS4xOTE5MiAxMjcuNzI5IDkuNzg0MzlMMTIwLjM3NyAxNi43NDUzTDExOS41NDYgMTcuNTMxOUwxMjAuMDM2IDE4LjU3MjFMMTI0LjY0OCAyOC4zNzE4QzEyNS4wMTcgMjkuMTU1MyAxMjUuOTQyIDI5LjQ4NzEgMTI2LjcxNCAyOS4xMTI5QzEyNy40ODcgMjguNzM4NyAxMjcuODE0IDI3LjgwMDMgMTI3LjQ0NSAyNy4wMTY4TDEyNC4zIDIwLjMzNDlDMTMzLjE5MyAyMi4yNDYzIDEzNy45MzggMjcuMTA1NSAxNDAuMzQ2IDMyLjQzNjhDMTQyLjk4NCAzOC4yNzc1IDE0Mi44ODQgNDQuODUzMiAxNDEuOTYyIDQ5LjEwMjVDMTQxLjc3OCA0OS45NTA0IDE0Mi4zMDYgNTAuNzg5MSAxNDMuMTQyIDUwLjk3NTdDMTQzLjk3OCA1MS4xNjIyIDE0NC44MDUgNTAuNjI2IDE0NC45ODkgNDkuNzc4MUMxNDYuMDE2IDQ1LjA0NjcgMTQ2LjE1MiAzNy43NDE1IDE0My4xNjQgMzEuMTI2N0MxNDAuMjkzIDI0Ljc3MTMgMTM0LjYgMTkuMjAyIDEyNC40NzkgMTcuMTYyNEwxMjkuODQzIDEyLjA4MjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBpZD0iVW5pb25fNCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjcyNjA2IDgwLjUzNzZDOC44ODkwMSA4MC43MTg0IDguMzU1MDUgODEuNTUzNSA4LjUzMzQyIDgyLjQwMjdDOC43MTE3OSA4My4yNTE5IDkuNTM0OTUgODMuNzkzOCAxMC4zNzIgODMuNjEzTDIwLjIwNjUgODEuNDg4NUwyMS4zMTc4IDgxLjI0ODRMMjEuNDI2MSA4MC4xMDA5TDIyLjQ0NjUgNjkuMjkwM0MyMi41MjgxIDY4LjQyNiAyMS45MDM2IDY3LjY1ODEgMjEuMDUxNiA2Ny41NzUyQzIwLjE5OTcgNjcuNDkyMyAxOS40NDI5IDY4LjEyNTggMTkuMzYxMyA2OC45OTAxTDE4LjY2NTYgNzYuMzYxNUMxMi4wMTM1IDcwLjA3NTYgMTAuNDExOSA2My40MyAxMS4wNTM4IDU3LjYwMThDMTEuNzU3IDUxLjIxNjYgMTUuMTgwMyA0NS42MzI0IDE4LjEyNzQgNDIuNDcyQzE4LjcxNTUgNDEuODQxMyAxOC42ODgzIDQwLjg0NjMgMTguMDY2NSA0MC4yNDk1QzE3LjQ0NDggMzkuNjUyOCAxNi40NjQgMzkuNjgwMyAxNS44NzU4IDQwLjMxMDlDMTIuNTk0NCA0My44Mjk5IDguNzcwMDggNTAuMDIwNyA3Ljk3MzY1IDU3LjI1MjFDNy4yMDg0NSA2NC4yIDkuMjYxOCA3MS45NDkzIDE2LjkwMjIgNzguOTg3NEw5LjcyNjA2IDgwLjUzNzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo=", alt: "rotate screen", width: 150, height: 90 }), (0, o.jsx)("span", { children: e("LIVE.PLEASE_TURN_PORTRAIT") })] }) : null }
            t(80980); var eE = t(29181),
                ew = t(26229),
                eT = t(5854),
                eC = t(75852);

            function ez(e) { let s = e.className; return (0, o.jsx)("div", { className: (0, j.Z)("card w-full max-w-screen-sm bg-base-100 p-4", s), children: (0, o.jsxs)("div", { className: "grid h-full grid-cols-5 grid-rows-[auto_1fr] gap-2", children: [(0, o.jsxs)("div", { className: "col-span-full flex flex-col items-center gap-1", children: [(0, o.jsx)("h3", { className: "skeleton h-3 w-1/2" }), (0, o.jsx)("span", { className: "skeleton h-1.5 w-1/3" })] }), (0, o.jsxs)("div", { className: "flex-center col-span-2 flex flex-col gap-4", children: [(0, o.jsx)("div", { className: "skeleton size-10 rounded-full shadow-avatar ring-4 ring-base-100" }), (0, o.jsx)("span", { className: "skeleton h-1 w-12" })] }), (0, o.jsxs)("div", { className: "flex min-w-[64px] flex-col items-center justify-evenly gap-4", children: [(0, o.jsx)("span", { className: "skeleton h-4 w-8" }), (0, o.jsx)("span", { className: "skeleton h-6 w-12 rounded-full" })] }), (0, o.jsxs)("div", { className: "flex-center col-span-2 flex flex-col gap-4", children: [(0, o.jsx)("div", { className: "skeleton size-10 rounded-full shadow-avatar ring-4 ring-base-100" }), (0, o.jsx)("span", { className: "skeleton h-1 w-12" })] })] }) }) } var eL = t(38237),
                eO = e => { let s = e.gameId,
                        t = (0, eL.Z)(s),
                        n = t.data,
                        l = t.isLoading,
                        a = (0, I.useTranslations)(); return (0, o.jsxs)("div", { className: "flex flex-col items-stretch gap-2 desktop:items-center", children: [(0, o.jsx)("div", { className: "desktop:hidden", children: (0, o.jsx)(eE.Z, { isLoading: l, loadingFallback: (0, o.jsx)(ez, {}), isEmpty: !n, emptyFallback: null, children: (0, o.jsx)(eC.Z, { gameId: s }) }) }), (0, o.jsx)(eE.Z, { isEmpty: !n, loadingFallback: (0, o.jsx)(ez, {}), emptyFallback: (0, o.jsx)(ew.Z, { message: a("EVENTS.NO_GAME_RECORD") }), children: (0, o.jsx)(eT.Z, { game: n }) })] }) },
                eS = t(65210),
                ek = t(94503); let e_ = L.z.object({ GameID: L.z.number(), GameTypeID: L.z.nativeEnum(M.D$), LeagueID: L.z.number(), LeagueName: L.z.string(), GameDate: L.z.string(), EndTime: L.z.string().nullish(), GameStatusID: L.z.nativeEnum(M.XI), HomeTeamID: L.z.number(), HomeLogo: L.z.string().nullish(), HomeTeamName: L.z.string().optional(), AwayTeamID: L.z.number(), AwayLogo: L.z.string().nullish(), AwayTeamName: L.z.string().optional(), IsBooked: L.z.boolean(), IsCustomizedGame: L.z.boolean().optional(), HasSelfStream: L.z.boolean().optional() });
            L.z.object({ HomeTeamScore: L.z.number(), AwayTeamScore: L.z.number() }); var eU = t(91899);

            function eZ() { return (eZ = (0, v._)(function*(e, s) { let t = yield ei.Z.url("/api/Live/GetStreamerBooking").query({ streamerId: e, top: s }).get().json(); if (!t) return []; let n = (0, eU.mg)(L.z.array(e_.extend({ IsFollowed: L.z.boolean().optional().default(!1) }))).safeParse(t); return n.success && n.data.IsSuccess ? n.data.Data : [] })).apply(this, arguments) }

            function eQ(e) { let s = e.streamerId,
                    t = e.variant,
                    n = function(e) { let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8; return (0, en.useQuery)({ queryKey: ["/Live/GetStreamerBooking", e, s], queryFn: () => (function(e, s) { return eZ.apply(this, arguments) })(e, s) }) }(s),
                    l = n.data,
                    a = n.isPending; return (0, o.jsx)(ek.Z, { variant: void 0 === t ? "card" : t, isLoading: a, matches: null != l ? l : [] }) } var eY = t(28778),
                eB = t(86402),
                eV = t(49686),
                eR = t(79496),
                eG = e => { let s = e.text; return (0, o.jsxs)("div", { className: "relative rounded-full border-2 border-yellow-600 bg-white text-sm flex-center", children: [(0, o.jsx)("span", { className: "absolute bottom-0 left-1/2 z-10 size-0 -translate-x-4 translate-y-full border-r-[14px] border-t-[12px] border-transparent border-t-yellow-600" }), (0, o.jsx)("span", { className: "absolute bottom-0 left-1/2 z-[11] size-0 translate-x-[-15px] translate-y-full border-r-8 border-t-8 border-transparent border-t-white" }), (0, o.jsx)("span", { className: "absolute bottom-0 right-1/2 z-10 size-0 translate-x-[16px] translate-y-full border-b-[12px] border-r-[14px] border-transparent border-r-yellow-600" }), (0, o.jsx)("span", { className: "absolute bottom-0 right-1/2 z-[11] size-0 translate-x-[14px] translate-y-full border-b-8 border-r-8 border-transparent border-r-white" }), (0, o.jsx)("span", { className: "whitespace-nowrap px-2 font-noto-sans text-sm font-normal text-orange", children: s })] }) },
                eP = e => { e.className; let s = (0, I.useTranslations)(); return (0, o.jsx)("div", { className: "flex h-[22px]  items-center rounded-full border border-neutral-0 bg-orange px-2 py-px", children: (0, o.jsx)("span", { className: "whitespace-nowrap font-noto-sans text-sm font-normal text-neutral-0", children: s("LIVE.BET_EVENT.DRAW") }) }) }; let eF = (e, s) => { switch (e) {
                        case 20:
                            return (0, o.jsx)(eG, { text: s });
                        case 50:
                            return (0, o.jsx)(eP, {});
                        default:
                            return null } },
                eH = e => { switch (e) {
                        case 1:
                            return (0, o.jsx)("div", { className: "absolute left-1/4 -scale-x-100", children: (0, o.jsx)(eR.fD, {}) });
                        case 2:
                            return (0, o.jsx)("div", { className: "absolute left-[60%]", children: (0, o.jsx)(eR.fD, {}) });
                        default:
                            return null } };

            function eW(e) { let s = e.event,
                    t = e.onClick,
                    n = (0, I.useTranslations)(),
                    l = (0, x._)((0, d.useState)(!0), 2),
                    a = l[0],
                    i = l[1],
                    r = (0, x._)((0, d.useState)(!0), 2),
                    c = r[0],
                    u = r[1]; return (0, d.useEffect)(() => { 1 === s.ResultOption ? u(!1) : 2 === s.ResultOption ? i(!1) : 50 === s.State && (u(!1), i(!1)) }, [s]), (0, o.jsxs)("div", { className: "relative h-auto w-full ", children: [(0, o.jsxs)("svg", { viewBox: "0 0 288 64", width: "100%", height: "64", fill: "none", preserveAspectRatio: "none", xmlns: "http://www.w3.org/2000/svg", className: "block drop-shadow-[0_2px_3px_rgba(0,0,0,0.2)]", children: [(0, o.jsx)("mask", { id: "mask0_1_2", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "148", height: "64", children: (0, o.jsx)("path", { d: "M129.792 64H6.82783C3.06797 64 0 61.1173 0 57.6034V6.39659C0 2.88273 3.07707 0 6.82783 0H141.172C144.932 0 148 2.88273 148 6.39659L136.611 57.5949C135.938 60.8699 133.534 63.9915 129.783 63.9915L129.792 64Z", fill: a ? "url(#paint1_linear_1_2)" : "#D9D9D9" }) }), (0, o.jsxs)("g", { className: "cursor-pointer hover:opacity-80", onClick: () => { null == t || t("banker") }, children: [(0, o.jsx)("path", { d: "M129.792 64H6.82783C3.06797 64 0 61.1173 0 57.6034V6.39659C0 2.88273 3.07707 0 6.82783 0H141.172C144.932 0 148 2.88273 148 6.39659L136.611 57.5949C135.938 60.8699 133.534 63.9915 129.783 63.9915L129.792 64Z", fill: a ? "url(#paint0_linear_1_2)" : "url(#paint0_linear_1_2_gray)" }), (0, o.jsx)("g", { mask: "url(#mask0_1_2)", children: (0, o.jsx)("g", { filter: a ? "url(#filter0_d_1_2)" : "url(#filter0_d_1_2_gray)", children: (0, o.jsx)("path", { d: "M152.03 8.72727C138.251 38.9174 141.746 31.2066 126.648 64.7025C126.034 66.0661 124.778 67 123.544 67H106.004C104.762 67 103.793 66.0578 103.597 64.6942C98.5112 29.8512 99.8298 38.6942 95.2879 8.71901C95.0926 7.38843 96.1461 6 97.3461 6H109.165C110.399 6 111.369 6.90909 111.565 8.27273L117.188 46.1983C117.313 47 118.234 47.2066 118.555 46.4959L135.878 8.27273C136.492 6.90909 137.734 6 138.969 6H150.788C151.995 6 152.623 7.38017 152.023 8.71901L152.03 8.72727Z", fill: a ? "url(#paint2_linear_1_2)" : "url(#paint2_linear_1_2_gray)" }) }) })] }), (0, o.jsx)("mask", { id: "mask1_1_2", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "140", y: "0", width: "148", height: "64", children: (0, o.jsx)("path", { d: "M158.208 0H281.172C284.932 0 288 2.88311 288 6.39744V57.6026C288 61.1254 284.923 64 281.172 64H146.828C143.068 64 140 61.1169 140 57.6026L151.389 6.39744C152.062 3.12195 154.466 0 158.217 0H158.208Z", fill: c ? "url(#paint4_linear_1_2)" : "#D9D9D9" }) }), (0, o.jsxs)("g", { className: "cursor-pointer drop-shadow-button hover:opacity-80", onClick: () => { null == t || t("player") }, children: [(0, o.jsx)("path", { d: "M158.208 0H281.172C284.932 0 288 2.88311 288 6.39744V57.6026C288 61.1254 284.923 64 281.172 64H146.828C143.068 64 140 61.1169 140 57.6026L151.389 6.39744C152.062 3.12195 154.466 0 158.217 0H158.208Z", fill: c ? "url(#paint3_linear_1_2)" : "url(#paint3_linear_1_2_gray)" }), (0, o.jsx)("g", { mask: "url(#mask1_1_2)", children: (0, o.jsx)("g", { filter: c ? "url(#filter1_d_1_2)" : "url(#filter1_d_1_2_gray)", children: (0, o.jsx)("path", { d: "M140.748 66.9917C139.131 66.9917 138.053 65.4797 138.347 63.6042L139.754 54.4001C140.041 52.5246 141.58 51.0126 143.19 51.0126H175.627C176.593 51.0126 177.523 50.1037 177.691 48.9801L178.132 46.0966C178.307 44.9729 177.656 44.0641 176.69 44.0641H153.365C145.786 44.0641 140.734 36.942 142.084 28.1428L143.036 21.9213C144.38 13.1303 151.616 6 159.195 6H193.689C195.306 6 196.384 7.51199 196.09 9.39577L194.746 18.162C194.459 20.0375 192.919 21.5495 191.31 21.5495H159.755C158.789 21.5495 157.858 22.4583 157.69 23.582L157.102 27.4239C156.934 28.5476 157.578 29.4565 158.544 29.4565H181.876C189.455 29.4565 194.508 36.5868 193.157 45.3778L192.283 51.0787C190.939 59.8697 183.703 67 176.124 67H174.612L140.755 66.9917H140.748Z", fill: c ? "url(#paint5_linear_1_2)" : "url(#paint5_linear_1_2_gray)" }) }) })] }), (0, o.jsxs)("defs", { children: [(0, o.jsxs)("filter", { id: "filter0_d_1_2", x: "93.2645", y: "5", width: "60.9885", height: "65", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: [(0, o.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), (0, o.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), (0, o.jsx)("feOffset", { dy: "1" }), (0, o.jsx)("feGaussianBlur", { stdDeviation: "1" }), (0, o.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.235294 0 0 0 0 0.556863 0 0 0 0 0.776471 0 0 0 0.5 0" }), (0, o.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1_2" }), (0, o.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1_2", result: "shape" })] }), (0, o.jsxs)("filter", { id: "filter0_d_1_2_gray", x: "93.2645", y: "5", width: "60.9885", height: "65", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: [(0, o.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), (0, o.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), (0, o.jsx)("feOffset", { dy: "1" }), (0, o.jsx)("feGaussianBlur", { stdDeviation: "1" }), (0, o.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.286275 0 0 0 0 0.321569 0 0 0 0 0.415686 0 0 0 0.2 0" }), (0, o.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1_2" }), (0, o.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1_2", result: "shape" })] }), (0, o.jsxs)("filter", { id: "filter1_d_1_2", x: "137.299", y: "6", width: "59.8391", height: "63", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: [(0, o.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), (0, o.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), (0, o.jsx)("feOffset", { dy: "1" }), (0, o.jsx)("feGaussianBlur", { stdDeviation: "0.5" }), (0, o.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.89471 0 0 0 0 0.311153 0 0 0 0 0.298412 0 0 0 1 0" }), (0, o.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1_2" }), (0, o.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1_2", result: "shape" })] }), (0, o.jsxs)("filter", { id: "filter1_d_1_2_gray", x: "137.299", y: "6", width: "59.8391", height: "63", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: [(0, o.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), (0, o.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), (0, o.jsx)("feOffset", { dy: "1" }), (0, o.jsx)("feGaussianBlur", { stdDeviation: "0.5" }), (0, o.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.286275 0 0 0 0 0.321569 0 0 0 0 0.415686 0 0 0 0.2 0" }), (0, o.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1_2" }), (0, o.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1_2", result: "shape" })] }), (0, o.jsxs)("linearGradient", { id: "paint0_linear_1_2", x1: "115.445", y1: "-7.76972", x2: "14.876", y2: "88.5918", gradientUnits: "userSpaceOnUse", children: [(0, o.jsx)("stop", { stopColor: "#7AEBFC" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#2D90FC" })] }), (0, o.jsxs)("linearGradient", { id: "paint0_linear_1_2_gray", x1: "1.21309e-06", y1: "52", x2: "148", y2: "6", gradientUnits: "userSpaceOnUse", children: [(0, o.jsx)("stop", { stopColor: "#828DA9" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#E2E4EB" })] }), (0, o.jsxs)("linearGradient", { id: "paint1_linear_1_2", x1: "115.445", y1: "-7.76972", x2: "14.876", y2: "88.5918", gradientUnits: "userSpaceOnUse", children: [(0, o.jsx)("stop", { stopColor: "#7AEBFC" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#2D90FC" })] }), (0, o.jsxs)("linearGradient", { id: "paint2_linear_1_2_gray", x1: "136", y1: "6", x2: "112.5", y2: "67", gradientUnits: "userSpaceOnUse", children: [(0, o.jsx)("stop", { stopColor: "#DBDEE6" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#E2EAF8" })] }), (0, o.jsxs)("linearGradient", { id: "paint2_linear_1_2", x1: "112.639", y1: "72.9669", x2: "130.196", y2: "-0.0665257", gradientUnits: "userSpaceOnUse", children: [(0, o.jsx)("stop", { stopColor: "#B7E7FD" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#89E2FD" })] }), (0, o.jsxs)("linearGradient", { id: "paint3_linear_1_2_gray", x1: "164.5", y1: "-6", x2: "288", y2: "61", gradientUnits: "userSpaceOnUse", children: [(0, o.jsx)("stop", { stopColor: "#E2E4EB" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#828DA9" })] }), (0, o.jsxs)("linearGradient", { id: "paint3_linear_1_2", x1: "162.468", y1: "-1.93629", x2: "269.225", y2: "78.1535", gradientUnits: "userSpaceOnUse", children: [(0, o.jsx)("stop", { stopColor: "#FB725B" }), (0, o.jsx)("stop", { offset: "0.385", stopColor: "#FB6D57" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#FD0000" })] }), (0, o.jsxs)("linearGradient", { id: "paint5_linear_1_2_gray", x1: "161.938", y1: "70.214", x2: "177.735", y2: "3.29522", gradientUnits: "userSpaceOnUse", children: [(0, o.jsx)("stop", { stopColor: "#E0E3EE" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#E1E3EA" })] }), (0, o.jsxs)("linearGradient", { id: "paint4_linear_1_2", x1: "162.468", y1: "-1.93629", x2: "269.225", y2: "78.1535", gradientUnits: "userSpaceOnUse", children: [(0, o.jsx)("stop", { stopColor: "#FB725B" }), (0, o.jsx)("stop", { offset: "0.18", stopColor: "#FB6D57" }), (0, o.jsx)("stop", { offset: "0.37", stopColor: "#FB604D" }), (0, o.jsx)("stop", { offset: "0.56", stopColor: "#FB4B3C" }), (0, o.jsx)("stop", { offset: "0.76", stopColor: "#FC2D24" }), (0, o.jsx)("stop", { offset: "0.97", stopColor: "#FC0705" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#FD0000" })] }), (0, o.jsxs)("linearGradient", { id: "paint5_linear_1_2", x1: "161.938", y1: "70.214", x2: "177.735", y2: "3.29522", gradientUnits: "userSpaceOnUse", children: [(0, o.jsx)("stop", { stopColor: "#FF9B7B" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#FB715B" })] })] })] }), (0, o.jsx)("div", { className: "absolute left-1/2 top-[10%] -translate-x-1/2", children: eF(s.State, n("LIVE.BET_EVENT.PLEASE_SELECT")) }), (0, o.jsxs)("div", { className: "pointer-events-none absolute top-0 flex size-full items-center justify-between font-noto-sans text-white ", children: [(0, o.jsxs)("div", { className: "flex flex-col items-start pl-2", children: [(0, o.jsx)("div", { className: "text-base font-bold", children: s.OptionSummaries[0].OptionContent }), (0, o.jsxs)("div", { className: "text-sm font-normal leading-5", children: [n("LIVE.BET_EVENT.ODDS"), ":", s.OptionSummaries[0].Odds || "---"] })] }), (0, o.jsxs)("div", { className: "flex flex-col items-end pr-2", children: [(0, o.jsx)("div", { className: "text-base font-bold", children: s.OptionSummaries[1].OptionContent }), (0, o.jsxs)("div", { className: "text-sm font-normal leading-5", children: [n("LIVE.BET_EVENT.ODDS"), ":", s.OptionSummaries[1].Odds || "---"] })] }), eH(s.ResultOption)] })] }) } var eJ = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KICA8ZyBjbGlwLXBhdGg9J3VybCgjY2xpcDBfMTE1ODJfMTQ3NjE5KSc+CiAgICA8cGF0aAogICAgICBkPSdNOC4wNzg0MSAxNS45OTk3QzEyLjQ1MzQgMTUuOTk5NyAxNiAxMi40NzE1IDE2IDguMTE5MjNDMTYgMy43NjY5NyAxMi40NTM0IDAuMjM4NzcgOC4wNzg0MSAwLjIzODc3QzMuNzAzNDMgMC4yMzg3NyAwLjE1Njc5OSAzLjc2Njk3IDAuMTU2Nzk5IDguMTE5MjNDMC4xNTY3OTkgMTIuNDcxNSAzLjcwMzQzIDE1Ljk5OTcgOC4wNzg0MSAxNS45OTk3WicKICAgICAgZmlsbD0nI0ZEQjMxOScKICAgIC8+CiAgICA8cGF0aAogICAgICBkPSdNNy44NzAxOSAxNS42NTg2QzEyLjIxNjggMTUuNjU4NiAxNS43NDA0IDEyLjE1MzMgMTUuNzQwNCA3LjgyOTNDMTUuNzQwNCAzLjUwNTMgMTIuMjE2OCAwIDcuODcwMTkgMEMzLjUyMzYgMCAwIDMuNTA1MyAwIDcuODI5M0MwIDEyLjE1MzMgMy41MjM2IDE1LjY1ODYgNy44NzAxOSAxNS42NTg2WicKICAgICAgZmlsbD0nI0ZFRTI1MCcKICAgIC8+CiAgICA8ZyBmaWx0ZXI9J3VybCgjZmlsdGVyMF9kXzExNTgyXzE0NzYxOSknPgogICAgICA8cGF0aAogICAgICAgIGQ9J003Ljg3ODAyIDEzLjg3MDlDMTEuMjM4NyAxMy44NzA5IDEzLjk2MyAxMS4xNjA3IDEzLjk2MyA3LjgxNzU0QzEzLjk2MyA0LjQ3NDM1IDExLjIzODcgMS43NjQxNiA3Ljg3ODAyIDEuNzY0MTZDNC41MTczNyAxLjc2NDE2IDEuNzkzMDMgNC40NzQzNSAxLjc5MzAzIDcuODE3NTRDMS43OTMwMyAxMS4xNjA3IDQuNTE3MzcgMTMuODcwOSA3Ljg3ODAyIDEzLjg3MDlaJwogICAgICAgIGZpbGw9JyNGREM1MUMnCiAgICAgIC8+CiAgICA8L2c+CiAgICA8cGF0aAogICAgICBkPSdNNC4wMDg2OSAxMi40ODk1QzIuNzE4NDEgMTEuMDI0OSAyLjQxMjY4IDEwLjA1OCAyLjMwNTM3IDguNjg3MTVDMi4wNDQzNSA1LjM1Njg4IDQuNzk4NzIgMi4yNDg3MyA4LjE1NjQ1IDIuMjQ4NzNDOS43NTQ5NyAyLjI0ODczIDExLjU2NjIgMy4wMDM1MyAxMi45NDM2IDQuNDYxOTZDMTEuODQ0MiAyLjg0NTYyIDEwLjAxOTMgMS43NjQxNiA3LjkwOTY5IDEuNzY0MTZDNC41MzE4NCAxLjc2NDE2IDEuNzkzNCA0LjQ4ODM3IDEuNzkzNCA3Ljg0ODY4QzEuNzkzNCA5LjcyMzg1IDIuNjY4MTEgMTEuMzczNiA0LjAwODk3IDEyLjQ4OTVINC4wMDg2OVonCiAgICAgIGZpbGw9JyNGRkIwMDYnCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0nTTcuMjczODEgNS4zMzE2MVY0LjY5ODAzQzcuMjc5NCA0LjM1MDUxIDcuNTQ3NjkgNC4xNzY3NiA4LjA3ODM4IDQuMTc2NzZDOC42MDkwOCA0LjE3Njc2IDguODgyOTUgNC4zNTQ2OCA4Ljg4Mjk1IDQuNzEwNTRWNS4zMDY1OUM5LjI2MzAyIDUuMzc4ODcgOS41OTgwOSA1LjUxMjMxIDkuODg4NzMgNS43MDY5MkMxMC4yOTEyIDUuOTc2NTkgMTAuNDkyMSA2LjI2NTQ0IDEwLjQ5MjEgNi41NzQwM0MxMC40OTIxIDcuMDQ2NjUgMTAuMTgzMyA3LjI4MjY4IDkuNTY1OTUgNy4yODI2OEM5LjMzOTU5IDcuMjgyNjggOS4xMDM0NSA3LjE5MDk0IDguODU3OCA3LjAwNzQ1QzguNjExODcgNi44MjM5NiA4LjI2MjgzIDYuNzMyMjIgNy44MTAxIDYuNzMyMjJDNy40NTIzOSA2Ljc0MDU2IDcuMjczNTMgNi44NTAzNyA3LjI3MzUzIDcuMDYxNjZDNy4yNzM1MyA3LjE3Mjg3IDcuNTQwNDIgNy4yNzAxNyA4LjA3MzkxIDcuMzUzNTdDOC4xNDkzNyA3LjM3NTgxIDguMzE1NjUgNy40MTg5IDguNTcyNzUgNy40ODI4NUM4LjgxMDI5IDcuNTQxMjMgOS4wMDE3MiA3LjU5MTI3IDkuMTQ2NzYgNy42MzI5N0M5LjQwOTQ2IDcuNzEzNTkgOS42MDIwMSA3Ljc4NzgyIDkuNzI0OTcgNy44NTU5M0M5Ljg0NzkzIDcuOTI0MDUgOS45NDI5NSA3Ljk4Mjk5IDEwLjAxIDguMDMzMDNDMTAuMDc3MSA4LjA4MzA3IDEwLjE0NDIgOC4xNDQyMyAxMC4yMTEyIDguMjE2NTFDMTAuNDA2OSA4LjQ5MTc0IDEwLjUwNDcgOC44MTE0NSAxMC41MDQ3IDkuMTc1MzdDMTAuNTA0NyA5Ljc0ODA3IDEwLjI5MzcgMTAuMjA3OSA5Ljg3MTk3IDEwLjU1NTRDOS42MDY0OCAxMC43NzUgOS4yNzY5OSAxMC45MzA3IDguODgyOTUgMTEuMDIyNVYxMS42Mzk0QzguODgyOTUgMTEuOTk1MiA4LjYxNDY3IDEyLjE3MzEgOC4wNzgzOCAxMi4xNzMxQzcuNTQyMSAxMi4xNzMxIDcuMjc5NCAxMS45OTk0IDcuMjczODEgMTEuNjUxOVYxMS4wNDc1QzYuODkzNzUgMTAuOTY5NiA2LjU1ODY3IDEwLjgyNjUgNi4yNjgwMyAxMC42MThDNS44NjU2MSAxMC4zMjg4IDUuNjY0NjggMTAuMDE3NyA1LjY2NDY4IDkuNjg0MTJDNS42NjQ2OCA5LjE3ODQzIDUuOTczNDggOC45MjU0NCA2LjU5MDgxIDguOTI1NDRDNi44MTcxNyA4LjkyNTQ0IDcuMDUzMDQgOS4wMjQxMyA3LjI5ODk2IDkuMjIxNTJDNy41NDQ4OSA5LjQxNjEyIDcuODkzOTQgOS41MTM0MyA4LjM0NjY3IDkuNTEzNDNDOC43MDQzOCA5LjUxMzQzIDguODgzMjMgOS40MDA4MyA4Ljg4MzIzIDkuMTc1NjVDOC44ODMyMyA5LjA1NjEgOC42MTYzNSA4Ljk0NjI5IDguMDgyODUgOC44NDYyQzguMDA3NCA4LjgyMzk2IDcuODQxMTIgOC43NzgwOSA3LjU4NDAyIDguNzA4NTlDNy4zNDY0NyA4LjY0NzQzIDcuMTU1MDQgOC41OTMyMiA3LjAxIDguNTQ1OTVDNi41MTgxNSA4LjM4NzQ5IDYuMTYyMTIgOC4xNzYyIDUuOTQxMzQgNy45MTIzN0M1Ljc0ODUxIDcuNjY3NzIgNS42NTIxIDcuMzgwMjYgNS42NTIxIDcuMDQ5NDNDNS42NTIxIDYuNTE1NjUgNS44NjMwOSA2LjA4Nzc5IDYuMjg0OCA1Ljc2NTNDNi41NTAyOSA1LjU1OTU4IDYuODc5NzcgNS40MTUwMSA3LjI3MzgxIDUuMzMxNjFaJwogICAgICBmaWxsPScjRkZCMDA2JwogICAgLz4KICAgIDxwYXRoCiAgICAgIGQ9J003LjA5MzU4IDUuMDgxNjFWNC40NDgwM0M3LjA5OTE3IDQuMTAwNTEgNy4zNjc0NSAzLjkyNjc2IDcuODk4MTUgMy45MjY3NkM4LjQyODg0IDMuOTI2NzYgOC43MDI3MiA0LjEwNDY4IDguNzAyNzIgNC40NjA1NFY1LjA1NjU5QzkuMDgyNzggNS4xMjg4NyA5LjQxNzg2IDUuMjYyMzEgOS43MDg1IDUuNDU2OTJDMTAuMTEwOSA1LjcyNjU5IDEwLjMxMTkgNi4wMTU0NCAxMC4zMTE5IDYuMzI0MDNDMTAuMzExOSA2Ljc5NjY1IDEwLjAwMyA3LjAzMjY4IDkuMzg1NzIgNy4wMzI2OEM5LjE1OTM2IDcuMDMyNjggOC45MjMyMSA2Ljk0MDk0IDguNjc3NTYgNi43NTc0NUM4LjQzMTY0IDYuNTczOTYgOC4wODI1OSA2LjQ4MjIyIDcuNjI5ODYgNi40ODIyMkM3LjI3MjE1IDYuNDkwNTYgNy4wOTMzIDYuNjAwMzcgNy4wOTMzIDYuODExNjZDNy4wOTMzIDYuOTIyODcgNy4zNjAxOCA3LjAyMDE3IDcuODkzNjcgNy4xMDM1N0M3Ljk2OTEzIDcuMTI1ODEgOC4xMzU0MSA3LjE2ODkgOC4zOTI1MSA3LjIzMjg1QzguNjMwMDYgNy4yOTEyMyA4LjgyMTQ5IDcuMzQxMjcgOC45NjY1MyA3LjM4Mjk3QzkuMjI5MjIgNy40NjM1OSA5LjQyMTc3IDcuNTM3ODIgOS41NDQ3MyA3LjYwNTkzQzkuNjY3NyA3LjY3NDA1IDkuNzYyNzEgNy43MzI5OSA5LjgyOTc4IDcuNzgzMDNDOS44OTY4NSA3LjgzMzA3IDkuOTYzOTIgNy44OTQyMyAxMC4wMzEgNy45NjY1MUMxMC4yMjY2IDguMjQxNzQgMTAuMzI0NCA4LjU2MTQ1IDEwLjMyNDQgOC45MjUzN0MxMC4zMjQ0IDkuNDk4MDcgMTAuMTEzNCA5Ljk1Nzg5IDkuNjkxNzMgMTAuMzA1NEM5LjQyNjI0IDEwLjUyNSA5LjA5Njc2IDEwLjY4MDcgOC43MDI3MiAxMC43NzI1VjExLjM4OTRDOC43MDI3MiAxMS43NDUyIDguNDM0NDMgMTEuOTIzMSA3Ljg5ODE1IDExLjkyMzFDNy4zNjE4NiAxMS45MjMxIDcuMDk5MTcgMTEuNzQ5NCA3LjA5MzU4IDExLjQwMTlWMTAuNzk3NUM2LjcxMzUxIDEwLjcxOTYgNi4zNzg0NCAxMC41NzY1IDYuMDg3OCAxMC4zNjhDNS42ODUzNyAxMC4wNzg4IDUuNDg0NDQgOS43Njc3NCA1LjQ4NDQ0IDkuNDM0MTJDNS40ODQ0NCA4LjkyODQzIDUuNzkzMjQgOC42NzU0NCA2LjQxMDU3IDguNjc1NDRDNi42MzY5NCA4LjY3NTQ0IDYuODcyOCA4Ljc3NDEzIDcuMTE4NzMgOC45NzE1MkM3LjM2NDY1IDkuMTY2MTIgNy43MTM3IDkuMjYzNDMgOC4xNjY0MyA5LjI2MzQzQzguNTI0MTQgOS4yNjM0MyA4LjcwMyA5LjE1MDgzIDguNzAzIDguOTI1NjVDOC43MDMgOC44MDYxIDguNDM2MTEgOC42OTYyOSA3LjkwMjYyIDguNTk2MkM3LjgyNzE2IDguNTczOTYgNy42NjA4OCA4LjUyODA5IDcuNDAzNzggOC40NTg1OUM3LjE2NjI0IDguMzk3NDMgNi45NzQ4MSA4LjM0MzIyIDYuODI5NzcgOC4yOTU5NUM2LjMzNzkxIDguMTM3NDkgNS45ODE4OCA3LjkyNjIgNS43NjExMSA3LjY2MjM3QzUuNTY4MjggNy40MTc3MiA1LjQ3MTg2IDcuMTMwMjYgNS40NzE4NiA2Ljc5OTQzQzUuNDcxODYgNi4yNjU2NSA1LjY4Mjg2IDUuODM3NzkgNi4xMDQ1NiA1LjUxNTNDNi4zNzAwNSA1LjMwOTU4IDYuNjk5NTQgNS4xNjUwMSA3LjA5MzU4IDUuMDgxNjFaJwogICAgICBmaWxsPScjRkRFNzc1JwogICAgLz4KICA8L2c+CiAgPGRlZnM+CiAgICA8ZmlsdGVyCiAgICAgIGlkPSdmaWx0ZXIwX2RfMTE1ODJfMTQ3NjE5JwogICAgICB4PSctMy44NjY5NycKICAgICAgeT0nLTMuODk1ODQnCiAgICAgIHdpZHRoPScyMy40OScKICAgICAgaGVpZ2h0PScyMy40MjY5JwogICAgICBmaWx0ZXJVbml0cz0ndXNlclNwYWNlT25Vc2UnCiAgICAgIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9JzAnIHJlc3VsdD0nQmFja2dyb3VuZEltYWdlRml4JyAvPgogICAgICA8ZmVDb2xvck1hdHJpeAogICAgICAgIGluPSdTb3VyY2VBbHBoYScKICAgICAgICB0eXBlPSdtYXRyaXgnCiAgICAgICAgdmFsdWVzPScwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCcKICAgICAgICByZXN1bHQ9J2hhcmRBbHBoYScKICAgICAgLz4KICAgICAgPGZlT2Zmc2V0IC8+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzIuODMnIC8+CiAgICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9J21hdHJpeCcgdmFsdWVzPScwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAxIDAnIC8+CiAgICAgIDxmZUJsZW5kIG1vZGU9J25vcm1hbCcgaW4yPSdCYWNrZ3JvdW5kSW1hZ2VGaXgnIHJlc3VsdD0nZWZmZWN0MV9kcm9wU2hhZG93XzExNTgyXzE0NzYxOScgLz4KICAgICAgPGZlQmxlbmQgbW9kZT0nbm9ybWFsJyBpbj0nU291cmNlR3JhcGhpYycgaW4yPSdlZmZlY3QxX2Ryb3BTaGFkb3dfMTE1ODJfMTQ3NjE5JyByZXN1bHQ9J3NoYXBlJyAvPgogICAgPC9maWx0ZXI+CiAgICA8Y2xpcFBhdGggaWQ9J2NsaXAwXzExNTgyXzE0NzYxOSc+CiAgICAgIDxyZWN0IHdpZHRoPScxNicgaGVpZ2h0PScxNicgZmlsbD0nd2hpdGUnIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+Cg=="; let eX = (e, s) => 0 === e && 0 === s ? .5 : e / (e + s);

            function eq(e) { let s = e.banker,
                    t = e.player,
                    n = eX(s.betAmount, t.betAmount),
                    l = (0, d.useRef)(null),
                    a = (0, x._)((0, d.useState)(300), 2),
                    i = a[0],
                    r = a[1],
                    c = i * n + 5,
                    u = c - 5; return (0, d.useEffect)(() => { var e;
                    r((null === (e = l.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) || 300) }, []), (0, o.jsxs)("div", { ref: l, className: "relative mb-1 box-border h-[24px] w-full", children: [(0, o.jsxs)("svg", { version: "1.1", width: "100%", height: 25, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", className: "block h-[24px] w-full", children: [(0, o.jsxs)("defs", { children: [(0, o.jsx)("filter", { id: "drop-shadow", x: "0", y: "0", width: "100%", height: "110%", children: (0, o.jsx)("feDropShadow", { dx: "0", dy: "1", stdDeviation: "1", floodColor: "black", floodOpacity: ".3" }) }), (0, o.jsx)("filter", { id: "grayscale", x: "0", y: "0", width: "100%", height: "110%", children: (0, o.jsx)("feColorMatrix", { type: "saturate", values: "0" }) }), (0, o.jsxs)("linearGradient", { id: "left-gradient", children: [(0, o.jsx)("stop", { offset: "0", stopColor: "#2D90FC" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#7AEBFC" })] }), (0, o.jsxs)("linearGradient", { id: "right-gradient", children: [(0, o.jsx)("stop", { stopColor: "#FB725B" }), (0, o.jsx)("stop", { offset: "0.385", stopColor: "#FB6D57" }), (0, o.jsx)("stop", { offset: "1", stopColor: "#FD0000" })] }), (0, o.jsx)("clipPath", { id: "main-clip", children: (0, o.jsx)("rect", { x: "0", y: "0", width: "100%", height: 24, fill: "black", rx: 12, ry: 24 }) }), (0, o.jsx)("clipPath", { id: "left", children: (0, o.jsx)("path", { d: `M0 0 H${c} L${u} 24 L0 24Z`, clipPath: "url(#main-clip)" }) }), (0, o.jsx)("clipPath", { id: "right", children: (0, o.jsx)("path", { d: `M${c+5} 0 H${i} L${i} 24 L${u+5} 24Z`, clipPath: "url(#main-clip)" }) })] }), (0, o.jsx)("g", { filter: `url(#drop-shadow) ${s.enable?"":"url(#grayscale)"}`, children: (0, o.jsx)("rect", { x: "0", y: "0", width: "100%", height: 24, fill: "url(#left-gradient)", clipPath: "url(#left)" }) }), (0, o.jsx)("g", { filter: `url(#drop-shadow) ${t.enable?"":"url(#grayscale)"}`, children: (0, o.jsx)("rect", { x: "0", y: "0", width: "100%", height: 24, fill: "url(#right-gradient)", clipPath: "url(#right)" }) })] }), (0, o.jsxs)("div", { className: "absolute top-0 flex size-full items-center justify-between", children: [(0, o.jsxs)("div", { className: "flex items-center gap-1 px-2 text-sm text-white", children: [(0, o.jsx)(ev.default, { src: eJ, alt: "coin", width: 16, height: 16 }), (0, o.jsx)("p", { children: 0 === s.betAmount ? "---" : s.betAmount })] }), (0, o.jsxs)("div", { className: "flex items-center gap-1 px-2 text-sm text-white", children: [(0, o.jsx)(ev.default, { src: eJ, alt: "coin", width: 16, height: 16 }), (0, o.jsx)("p", { children: 0 === t.betAmount ? "---" : t.betAmount })] })] })] }) } let eK = e => { switch (e) {
                        case 20:
                            return "LIVE.BET_EVENT.STOP_AFTER";
                        case 30:
                            return "LIVE.BET_EVENT.STOPPED" } },
                e$ = e => { let s = Math.floor(e / 3600).toString().padStart(2, "0"),
                        t = Math.floor(e % 3600 / 60).toString().padStart(2, "0"),
                        n = (e % 60).toString().padStart(2, "0"); return `${s} : ${t} : ${n}` },
                e0 = e => e.reduce((e, s) => e + s.Count, 0),
                e1 = (e, s, t) => 50 !== t && (0 === s || ("banker" !== e || 2 !== s) && ("player" !== e || 1 !== s));

            function e4(e) { let s = e.className,
                    t = e.onClick,
                    n = e.event,
                    l = e.isMember,
                    a = (0, I.useTranslations)(); return (0, o.jsxs)("div", { className: (0, j.Z)("flex flex-col bg-white px-4 py-2 desktop:gap-[10px] mobile:gap-2", s, { "cursor-pointer": l && 20 === n.State }), children: [(0, o.jsx)("div", { className: "w-full text-center", children: (0, o.jsx)("span", { className: "font-noto-sans text-base font-bold text-metal-700", children: n.Subject }) }), (0, o.jsx)(eW, { event: n, onClick: e => { l && 20 === n.State && t(e) } }), (0, o.jsx)(eq, { banker: { enable: e1("banker", n.ResultOption, n.State), betAmount: n.OptionSummaries[0].TotalAmount }, player: { enable: e1("player", n.ResultOption, n.State), betAmount: n.OptionSummaries[1].TotalAmount } }), (0, o.jsxs)("div", { className: "flex w-full justify-between text-metal-400 ", children: [(0, o.jsxs)("div", { className: "flex items-center gap-1", children: [(0, o.jsx)(eV.Z, { size: 16 }), e0(n.OptionSummaries)] }), (0, o.jsx)("div", { className: "flex items-center", children: [20, 30].includes(n.State) && (0, o.jsx)("span", { children: a(eK(n.State), 20 === n.State ? { time: e$(n.RemainSeconds) } : {}) }) })] })] }) } var e2 = t(94895),
                e3 = t(17475),
                e5 = function() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        s = (0, eY.useQueryClient)(); return (0, eu.Z)("UpdateBetEvents", t => { s.setQueryData(["/Live/BetEvents", e], e => { let s = e.Data.every(e => e.Id !== t[0].Id); return (0, A._)((0, b._)({}, e), { Data: s ? [...e.Data, (0, e3.Z)(t[0])] : e.Data.map(e => e.Id === t[0].Id ? (0, e3.Z)(t[0]) : (0, e3.Z)(e)) }) }) }), (0, en.useQuery)({ queryKey: ["/Live/BetEvents", e], queryFn: () => (0, e2.Gp)(e) }) },
                e6 = t(92075),
                e9 = t(33833);

            function e8(e) { let s = (0, b._)({ li: "li", ol: "ol" }, (0, e9.a)(), e.components); return (0, e6.jsxs)("div", { className: "betGuide", children: [(0, e6.jsx)("div", { className: "text-center text-base font-bold", children: "Betting gameplay" }), (0, e6.jsx)("p", { children: "Basic instructions" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "Betting is an interactive betting activity initiated by the host, who will set a question and two options for the audience to choose from. When the host announces the results, the winning audience members will receive the corresponding prize (as shown below)." }), "\n"] }), (0, e6.jsx)("div", { className: "flex justify-center", children: (0, e6.jsx)("img", { src: e.imgUrl, alt: "Alt text", title: "title" }) }), (0, e6.jsxs)(s.ol, { start: "2", children: ["\n", (0, e6.jsx)(s.li, { children: "The host can add bonus rewards to the betting activity. When distributing the prize, the winning audience not only shares the betting amount of the losing side but also receives an additional share of the host's bonus." }), "\n", (0, e6.jsx)(s.li, { children: "Choose the answer you support, enter or select the betting amount, and then click submit to participate." }), "\n", (0, e6.jsx)(s.li, { children: "Each betting event has a minimum and maximum limit for the amount wagered. The minimum amount for betting with coins is 20, and the maximum is 1000." }), "\n", (0, e6.jsx)(s.li, { children: "The odds are calculated in real-time by the system, and the results are based on the final odds at the time of stopping. The odds during ongoing activities are only for current reference; if you guess correctly, the prize amount is calculated as the participation amount multiplied by the stopping odds." }), "\n", (0, e6.jsx)(s.li, { children: "At the end of each betting event, 10% of the total prize pool will be deducted as compensation for the platform and the host." }), "\n", (0, e6.jsx)(s.li, { children: "If there are decimals in the prize distribution, the system will truncate the decimal part. For example, if three people share 100 coins, each should receive 33.3 coins, but the system will truncate it, and each will actually receive 33 coins." }), "\n", (0, e6.jsx)(s.li, { children: "After the betting event results are settled, you can view them in the [Records]. There may be delays in prize distribution, and if you have not received it for a long time, please contact the platform customer service." }), "\n"] }), (0, e6.jsx)("div", { className: "h-4" }), (0, e6.jsx)("p", { children: "Exception handling" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "If the question is closed due to force majeure, the betting event will be considered a draw, and all users' betting amounts will be fully refunded." }), "\n", (0, e6.jsx)(s.li, { children: "If the host does not settle in a timely manner, the question will automatically be deemed a draw after 12 hours, and all users' betting amounts will be fully refunded." }), "\n", (0, e6.jsx)(s.li, { children: "Special circumstances: If at the time of settlement, either option has no bets placed, or all options are incorrect answers, the question will be considered a draw." }), "\n", (0, e6.jsx)(s.li, { children: "If the host makes an error during settlement, the user or host should promptly contact customer service to appeal and provide relevant screenshots. The official will verify the situation, and if confirmed, a review will be conducted or rewards will be redistributed." }), "\n"] }), (0, e6.jsx)("div", { className: "h-4" }), (0, e6.jsx)("p", { children: "Platform statement" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "The design of the betting system is aimed at enhancing user interaction while watching live broadcasts, and is intended solely for entertainment and communication purposes." }), "\n", (0, e6.jsx)(s.li, { children: "If any actions are found to affect fairness, the official has the right to revoke the user's eligibility to participate in the host's betting and reclaim any improperly earned amounts." }), "\n", (0, e6.jsx)(s.li, { children: "The final interpretation of this activity rests with this live broadcasting platform." }), "\n"] })] }) }

            function e7() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, b._)({}, (0, e9.a)(), e.components).wrapper; return s ? (0, e6.jsx)(s, (0, A._)((0, b._)({}, e), { children: (0, e6.jsx)(e8, (0, b._)({}, e)) })) : e8(e) }

            function se(e) { let s = (0, b._)({ li: "li", ol: "ol" }, (0, e9.a)(), e.components); return (0, e6.jsxs)("div", { className: "betGuide", children: [(0, e6.jsx)("div", { className: "text-center text-base font-bold", children: "วิธีการเล่นการเดิมพัน" }), (0, e6.jsx)("p", { children: "คำแนะนำพื้นฐาน" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "การเดิมพันเป็นกิจกรรมการเดิมพันเชิงโต้ตอบที่โฮสต์เป็นผู้เริ่มต้น โดยโฮสต์จะตั้งคำถามและตัวเลือก 2 ตัวให้ผู้ชมเลือก เมื่อโฮสต์ประกาศผล ผู้ชมที่ชนะจะได้รับรางวัลที่สอดคล้องกัน (ดังที่แสดงด้านล่าง)." }), "\n"] }), (0, e6.jsx)("div", { className: "flex justify-center", children: (0, e6.jsx)("img", { src: e.imgUrl, alt: "Alt text", title: "title" }) }), (0, e6.jsxs)(s.ol, { start: "2", children: ["\n", (0, e6.jsx)(s.li, { children: "โฮสต์สามารถเพิ่มโบนัสให้กับกิจกรรมการเดิมพันได้ ในการแจกจ่ายรางวัล ผู้ชมที่ชนะไม่เพียงแบ่งปันจำนวนเงินเดิมพันของฝ่ายที่แพ้ แต่ยังได้รับส่วนแบ่งเพิ่มเติมจากโบนัสของโฮสต์อีกด้วย." }), "\n", (0, e6.jsx)(s.li, { children: "เลือกคำตอบที่คุณสนับสนุน ป้อนหรือเลือกจำนวนเงินเดิมพัน แล้วคลิกส่งเพื่อเข้าร่วม." }), "\n", (0, e6.jsx)(s.li, { children: "ทุกกิจกรรมการเดิมพันจะมีขีดจำกัดสูงสุดและต่ำสุดสำหรับจำนวนเงินที่วางเดิมพัน จำนวนเงินเดิมพันขั้นต่ำคือ 20 และสูงสุดคือ 1000." }), "\n", (0, e6.jsx)(s.li, { children: "อัตราต่อรองจะถูกคำนวณโดยระบบแบบเรียลไทม์ และผลลัพธ์จะขึ้นอยู่กับอัตราต่อรองสุดท้ายในเวลาหยุด กิจกรรมที่กำลังดำเนินการมีอัตราต่อรองเพียงเพื่อการอ้างอิงในปัจจุบัน หากคุณเดาถูก จำนวนเงินรางวัลจะคำนวณจากจำนวนเงินที่เข้าร่วมคูณด้วยอัตราต่อรองที่หยุด." }), "\n", (0, e6.jsx)(s.li, { children: "ที่สิ้นสุดแต่ละกิจกรรมการเดิมพัน 10% ของเงินรางวัลรวมจะถูกหักเป็นค่าตอบแทนสำหรับแพลตฟอร์มและโฮสต์." }), "\n", (0, e6.jsx)(s.li, { children: "หากมีทศนิยมในการแจกจ่ายรางวัล ระบบจะตัดทศนิยมออก ตัวอย่างเช่น หากมีคนสามคนแบ่ง 100 เหรียญ แต่ละคนควรได้รับ 33.3 เหรียญ แต่ระบบจะตัดออก และแต่ละคนจะได้รับจริง 33 เหรียญ." }), "\n", (0, e6.jsx)(s.li, { children: "หลังจากผลการเดิมพันได้รับการตัดสินแล้ว คุณสามารถดูได้ใน [บันทึก] อาจมีการล่าช้าในการแจกจ่ายรางวัล หากคุณยังไม่ได้รับรางวัลในระยะเวลานาน โปรดติดต่อบริการลูกค้าของแพลตฟอร์ม." }), "\n"] }), (0, e6.jsx)("div", { className: "h-4" }), (0, e6.jsx)("p", { children: "การจัดการข้อยกเว้น" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "หากคำถามถูกปิดเนื่องจากเหตุสุดวิสัย กิจกรรมการเดิมพันจะถูกพิจารณาว่าเป็นการเสมอ และจำนวนเงินเดิมพันของผู้ใช้ทั้งหมดจะถูกคืนเต็มจำนวน." }), "\n", (0, e6.jsx)(s.li, { children: "หากโฮสต์ไม่สามารถจัดการในเวลาที่เหมาะสม คำถามจะถูกพิจารณาเป็นการเสมอโดยอัตโนมัติหลังจาก 12 ชั่วโมง และจำนวนเงินเดิมพันของผู้ใช้ทั้งหมดจะถูกคืนเต็มจำนวน." }), "\n", (0, e6.jsx)(s.li, { children: "สถานการณ์พิเศษ: หากในขณะตัดสิน ไม่มีการเดิมพันในตัวเลือกใดหรือทั้งสองตัวเลือก หรือทุกตัวเลือกเป็นคำตอบที่ไม่ถูกต้อง คำถามจะถูกพิจารณาว่าเป็นการเสมอ." }), "\n", (0, e6.jsx)(s.li, { children: "หากโฮสต์ทำผิดพลาดในระหว่างการตัดสิน ผู้ใช้หรือโฮสต์ควรติดต่อฝ่ายบริการลูกค้าโดยเร็วเพื่อยื่นอุทธรณ์และให้ภาพหน้าจอที่เกี่ยวข้อง เจ้าหน้าที่จะตรวจสอบสถานการณ์ หากได้รับการยืนยัน จะมีการตรวจสอบใหม่หรือแจกจ่ายรางวัลอีกครั้ง." }), "\n"] }), (0, e6.jsx)("div", { className: "h-4" }), (0, e6.jsx)("p", { children: "แถลงการณ์ของแพลตฟอร์ม" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "การออกแบบระบบการเดิมพันมีวัตถุประสงค์เพื่อเสริมสร้างประสบการณ์การโต้ตอบของผู้ใช้ในขณะรับชมการถ่ายทอดสด และใช้เพื่อความบันเทิงและการสื่อสารเท่านั้น." }), "\n", (0, e6.jsx)(s.li, { children: "หากพบว่ามีการกระทำใด ๆ ที่ส่งผลต่อความเป็นธรรม เจ้าหน้าที่มีสิทธิ์ที่จะเพิกถอนคุณสมบัติของผู้ใช้ในการเข้าร่วมการเดิมพันของโฮสต์และเรียกคืนจำนวนเงินที่ได้มาอย่างไม่ถูกต้อง." }), "\n", (0, e6.jsx)(s.li, { children: "สิทธิ์ในการตีความขั้นสุดท้ายของกิจกรรมนี้เป็นของแพลตฟอร์มการถ่ายทอดสดนี้แต่เพียงผู้เดียว." }), "\n"] })] }) }

            function ss() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, b._)({}, (0, e9.a)(), e.components).wrapper; return s ? (0, e6.jsx)(s, (0, A._)((0, b._)({}, e), { children: (0, e6.jsx)(se, (0, b._)({}, e)) })) : se(e) }

            function st(e) { let s = (0, b._)({ li: "li", ol: "ol" }, (0, e9.a)(), e.components); return (0, e6.jsxs)("div", { className: "betGuide", children: [(0, e6.jsx)("div", { className: "text-center text-base font-bold", children: "C\xe1ch chơi cược" }), (0, e6.jsx)("p", { children: "Hướng dẫn cơ bản" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "Cược l\xe0 một hoạt động cược tương t\xe1c được khởi xướng bởi người dẫn chương tr\xecnh, người sẽ đặt ra một c\xe2u hỏi v\xe0 hai lựa chọn cho kh\xe1n giả chọn. Khi người dẫn chương tr\xecnh c\xf4ng bố kết quả, những kh\xe1n giả chiến thắng sẽ nhận được phần thưởng tương ứng (như h\xecnh dưới đ\xe2y)." }), "\n"] }), (0, e6.jsx)("div", { className: "flex justify-center", children: (0, e6.jsx)("img", { src: e.imgUrl, alt: "Alt text", title: "title" }) }), (0, e6.jsxs)(s.ol, { start: "2", children: ["\n", (0, e6.jsx)(s.li, { children: "Người dẫn chương tr\xecnh c\xf3 thể th\xeam phần thưởng v\xe0o hoạt động cược. Khi ph\xe2n phối phần thưởng, kh\xe1n giả thắng kh\xf4ng chỉ chia sẻ số tiền cược của b\xean thua m\xe0 c\xf2n nhận th\xeam phần thưởng từ người dẫn chương tr\xecnh." }), "\n", (0, e6.jsx)(s.li, { children: "Chọn c\xe2u trả lời bạn ủng hộ, nhập hoặc chọn số tiền cược, sau đ\xf3 nhấn gửi để tham gia." }), "\n", (0, e6.jsx)(s.li, { children: "Mỗi sự kiện cược c\xf3 giới hạn số tiền cược tối thiểu v\xe0 tối đa. Số tiền cược tối thiểu bằng 20, tối đa bằng 1000." }), "\n", (0, e6.jsx)(s.li, { children: "Tỷ lệ cược được hệ thống t\xednh to\xe1n theo thời gian thực, v\xe0 kết quả dựa tr\xean tỷ lệ cược cuối c\xf9ng tại thời điểm dừng. Tỷ lệ cược trong c\xe1c hoạt động đang diễn ra chỉ mang t\xednh tham khảo hiện tại; nếu bạn đo\xe1n đ\xfang, số tiền thưởng sẽ được t\xednh l\xe0 số tiền tham gia nh\xe2n với tỷ lệ cược dừng." }), "\n", (0, e6.jsx)(s.li, { children: "Khi kết th\xfac mỗi sự kiện cược, 10% của tổng giải thưởng sẽ bị trừ đi l\xe0m th\xf9 lao cho nền tảng v\xe0 người dẫn chương tr\xecnh." }), "\n", (0, e6.jsx)(s.li, { children: "Nếu trong việc ph\xe2n phối phần thưởng c\xf3 số thập ph\xe2n, hệ thống sẽ loại bỏ phần thập ph\xe2n. V\xed dụ, nếu ba người chia sẻ 100 đồng, mỗi người sẽ nhận được 33.3 đồng, nhưng hệ thống sẽ loại bỏ phần thập ph\xe2n, v\xe0 mỗi người sẽ thực nhận 33 đồng." }), "\n", (0, e6.jsx)(s.li, { children: "Sau khi kết quả cược được quyết định, bạn c\xf3 thể xem trong [Ghi ch\xe9p]. C\xf3 thể c\xf3 sự chậm trễ trong việc ph\xe1t thưởng, nếu bạn chưa nhận được trong thời gian d\xe0i, vui l\xf2ng li\xean hệ với dịch vụ kh\xe1ch h\xe0ng của nền tảng." }), "\n"] }), (0, e6.jsx)("div", { className: "h-4" }), (0, e6.jsx)("p", { children: "Xử l\xfd ngoại lệ" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "Nếu c\xe2u hỏi bị đ\xf3ng do lực bất khả kh\xe1ng, sự kiện c\xe1 cược sẽ được coi l\xe0 h\xf2a, v\xe0 tất cả số tiền cược của người d\xf9ng sẽ được ho\xe0n lại to\xe0n bộ." }), "\n", (0, e6.jsx)(s.li, { children: "Nếu người dẫn chương tr\xecnh kh\xf4ng thanh to\xe1n kịp thời, c\xe2u hỏi sẽ tự động được coi l\xe0 h\xf2a sau 12 giờ, v\xe0 tất cả số tiền cược của người d\xf9ng sẽ được ho\xe0n lại to\xe0n bộ." }), "\n", (0, e6.jsx)(s.li, { children: "T\xecnh huống đặc biệt: Nếu tại thời điểm thanh to\xe1n, một hoặc cả hai t\xf9y chọn kh\xf4ng c\xf3 bất kỳ ai đặt cược, hoặc tất cả c\xe1c t\xf9y chọn đều l\xe0 c\xe2u trả lời sai, c\xe2u hỏi sẽ được coi l\xe0 h\xf2a." }), "\n", (0, e6.jsx)(s.li, { children: "Nếu người dẫn chương tr\xecnh mắc lỗi trong qu\xe1 tr\xecnh thanh to\xe1n, người d\xf9ng hoặc người dẫn chương tr\xecnh cần nhanh ch\xf3ng li\xean hệ với dịch vụ kh\xe1ch h\xe0ng để khiếu nại v\xe0 cung cấp ảnh chụp m\xe0n h\xecnh li\xean quan. Ban tổ chức sẽ x\xe1c minh t\xecnh huống, nếu được x\xe1c nhận, sẽ tiến h\xe0nh xem x\xe9t lại hoặc ph\xe2n ph\xe1t lại phần thưởng." }), "\n"] }), (0, e6.jsx)("div", { className: "h-4" }), (0, e6.jsx)("p", { children: "Tuy\xean bố của nền tảng" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "Mục đ\xedch thiết kế của hệ thống c\xe1 cược l\xe0 nhằm n\xe2ng cao trải nghiệm tương t\xe1c của người d\xf9ng trong khi xem c\xe1c buổi ph\xe1t trực tiếp, chỉ d\xe0nh cho mục đ\xedch giải tr\xed v\xe0 giao lưu." }), "\n", (0, e6.jsx)(s.li, { children: "Nếu c\xf3 bất kỳ h\xe0nh động n\xe0o ảnh hưởng đến t\xednh c\xf4ng bằng, ban tổ chức c\xf3 quyền thu hồi tư c\xe1ch tham gia c\xe1 cược của người d\xf9ng v\xe0 thu hồi c\xe1c khoản tiền kiếm được kh\xf4ng hợp lệ." }), "\n", (0, e6.jsx)(s.li, { children: "Quyền giải th\xedch cuối c\xf9ng của hoạt động n\xe0y thuộc về nền tảng ph\xe1t trực tiếp n\xe0y." }), "\n"] })] }) }

            function sn() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, b._)({}, (0, e9.a)(), e.components).wrapper; return s ? (0, e6.jsx)(s, (0, A._)((0, b._)({}, e), { children: (0, e6.jsx)(st, (0, b._)({}, e)) })) : st(e) }

            function sl(e) { let s = (0, b._)({ li: "li", ol: "ol" }, (0, e9.a)(), e.components); return (0, e6.jsxs)("div", { className: "betGuide", children: [(0, e6.jsx)("div", { className: "text-center text-base font-bold", children: "竞猜玩法" }), (0, e6.jsx)("p", { children: "基本说明" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "竞猜是一种由主播发起的互动竞猜活动，主播会设定问题和2个选项供观众选择。当主播公布结果后，获胜的观众将获得相对应的奖金（如下图所示）。" }), "\n"] }), (0, e6.jsx)("div", { className: "flex justify-center", children: (0, e6.jsx)("img", { src: e.imgUrl, alt: "Alt text", title: "title" }) }), (0, e6.jsxs)(s.ol, { start: "2", children: ["\n", (0, e6.jsx)(s.li, { children: "主播可以为趣猜加码奖金，奖金分配时，获胜的观众不仅会瓜分失败方的投注金额，还会额外分配到主播加码的奖金。" }), "\n", (0, e6.jsx)(s.li, { children: "选择你支持的答案，输入或选择投注金额，然后点击提交即可参与。" }), "\n", (0, e6.jsx)(s.li, { children: "每场竞猜猜的单次投注金额有上下限，金币投注的最低金额为20，最高为1000。" }), "\n", (0, e6.jsx)(s.li, { children: "赔率由系统实时计算，结果以最终停止时赔率为准。进行中的活动赔率仅作为当前参考，如猜中结果，参与金额X停止时赔率是最终返奖数额。" }), "\n", (0, e6.jsx)(s.li, { children: "每场竞猜结束时，总奖池中的10%会作为平台和主播的报酬进行扣除。" }), "\n", (0, e6.jsx)(s.li, { children: "如果奖金分配中出现小数，系统会将小数部分舍去。例如，三人分享100金币，每人应得33.3金币，系统会舍去小数，实际发放33金币。" }), "\n", (0, e6.jsx)(s.li, { children: "当该场竞猜结算结果后，可以在【记录】中查看。奖金可能存在延迟到账的情况，若长时间未收到，请联系平台客服。" }), "\n"] }), (0, e6.jsx)("div", { className: "h-4" }), (0, e6.jsx)("p", { children: "异常处理" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "若因不可抗力导致题目关闭，该场趣猜将被视为流局，所有用户的投注金额将全额退还。" }), "\n", (0, e6.jsx)(s.li, { children: "若主播未及时结算，题目将在12小时后自动判为流局，所有用户的投注金额将全数退还。" }), "\n", (0, e6.jsx)(s.li, { children: "特殊情况说明：如果结算时某个或两个选项皆没有任何人投注，或所有选项均为错误答案，题目将被判为流局。" }), "\n", (0, e6.jsx)(s.li, { children: "如主播在结算时出现错误，用户或主播需尽快联系平台客服申诉并提供相关截图。官方将进行情况核实，若确认属实，将进行重新审核或补发奖励。" }), "\n"] }), (0, e6.jsx)("div", { className: "h-4" }), (0, e6.jsx)("p", { children: "平台声明" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "竞猜系统的设计目的是为了增强用户在观看直播时的互动体验，仅用于娱乐和交流。" }), "\n", (0, e6.jsx)(s.li, { children: "若有任何行为影响公平性的行为，官方有权取消用户参与主播竞猜的资格，并收回违规所得的金额。" }), "\n", (0, e6.jsx)(s.li, { children: "本活动的最终解释权归本直播平台所有。" }), "\n"] })] }) }

            function sa() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, b._)({}, (0, e9.a)(), e.components).wrapper; return s ? (0, e6.jsx)(s, (0, A._)((0, b._)({}, e), { children: (0, e6.jsx)(sl, (0, b._)({}, e)) })) : sl(e) }

            function si(e) { let s = (0, b._)({ li: "li", ol: "ol" }, (0, e9.a)(), e.components); return (0, e6.jsxs)("div", { className: "betGuide", children: [(0, e6.jsx)("div", { className: "text-center text-base font-bold", children: "競猜玩法介紹" }), (0, e6.jsx)("p", { children: "基本說明" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "競猜是一種由主播發起的互動競猜活動，主播會設定問題和2個選項供觀眾選擇。當主播公佈結果後，獲勝的觀眾將獲得相對應的獎金（如下圖所示）。" }), "\n"] }), (0, e6.jsx)("div", { className: "flex justify-center", children: (0, e6.jsx)("img", { src: e.imgUrl, alt: "Alt text", title: "title" }) }), (0, e6.jsxs)(s.ol, { start: "2", children: ["\n", (0, e6.jsx)(s.li, { children: "主播可以為趣猜加碼獎金，獎金分配時，獲勝的觀眾不僅會瓜分失敗方的投注金額，還會額外分配到主播加碼的獎金。" }), "\n", (0, e6.jsx)(s.li, { children: "選擇你支持的答案，輸入或選擇投注金額，然後點擊提交即可參與。" }), "\n", (0, e6.jsx)(s.li, { children: "每場競猜猜的單次投注金額有上下限，金幣投注的最低金額為20，最高為1000。" }), "\n", (0, e6.jsx)(s.li, { children: "賠率由系統實時計算，結果以最終停止時賠率為準。進行中的活動賠率僅作為當前參考，如猜中結果，參與金額X停止時賠率是最終返獎數額。" }), "\n", (0, e6.jsx)(s.li, { children: "每場競猜結束時，總獎池中的10%會作為平台和主播的報酬進行扣除。" }), "\n", (0, e6.jsx)(s.li, { children: "如果獎金分配中出現小數，系統會將小數部分捨去。例如，三人分享100金幣，每人應得33.3金幣，系統會捨去小數，實際發放33金幣。" }), "\n", (0, e6.jsx)(s.li, { children: "當該場競猜結算結果後，可以在【記錄】中查看。獎金可能存在延遲到賬的情況，若長時間未收到，請聯繫平台客服。" }), "\n"] }), (0, e6.jsx)("div", { className: "h-4" }), (0, e6.jsx)("p", { children: "異常處理" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "若因不可抗力導致題目關閉，該場趣猜將被視為流局，所有用戶的投注金額將全額退還。" }), "\n", (0, e6.jsx)(s.li, { children: "若主播未及時結算，題目將在12小時後自動判為流局，所有用戶的投注金額將全數退還。" }), "\n", (0, e6.jsx)(s.li, { children: "特殊情況說明：如果結算時某個或兩個選項皆沒有任何人投注，或所有選項均為錯誤答案，題目將被判為流局。" }), "\n", (0, e6.jsx)(s.li, { children: '如主播在結算時出現錯誤，用戶或主播需盡快聯繫平台客服申訴並提供相關截圖。官方將進行情況覈實，若確認屬實，將進行重新審核或補發獎勵。"' }), "\n"] }), (0, e6.jsx)("div", { className: "h-4" }), (0, e6.jsx)("p", { children: "平台聲明" }), (0, e6.jsx)("div", { className: "h-2" }), (0, e6.jsxs)(s.ol, { children: ["\n", (0, e6.jsx)(s.li, { children: "競猜系統的設計目的是為了增強用戶在觀看直播時的互動體驗，僅用於娛樂和交流。" }), "\n", (0, e6.jsx)(s.li, { children: "若有任何行為影響公平性的行為，官方有權取消用戶參與主播競猜的資格，並收回違規所得的金額。" }), "\n", (0, e6.jsx)(s.li, { children: "本活動的最終解釋權歸本直播平台所有。" }), "\n"] })] }) }

            function sr() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, b._)({}, (0, e9.a)(), e.components).wrapper; return s ? (0, e6.jsx)(s, (0, A._)((0, b._)({}, e), { children: (0, e6.jsx)(si, (0, b._)({}, e)) })) : si(e) } var sc = t(83542);

            function so() { switch ((0, I.useLocale)()) {
                    case "en-us":
                        return (0, o.jsx)(e7, { imgUrl: (0, sc.FU)("/assets/betting-card/en-us.svg") });
                    case "vi-vn":
                        return (0, o.jsx)(sn, { imgUrl: (0, sc.FU)("/assets/betting-card/vi-vn.svg") });
                    case "th-th":
                        return (0, o.jsx)(ss, { imgUrl: (0, sc.FU)("/assets/betting-card/th-th.svg") });
                    case "zh-tw":
                        return (0, o.jsx)(sr, { imgUrl: (0, sc.FU)("/assets/betting-card/zh-tw.svg") });
                    default:
                        return (0, o.jsx)(sa, { imgUrl: (0, sc.FU)("/assets/betting-card/zh-cn.svg") }) } } var sd = e => { let s = e.isOpen,
                        t = e.close; return (0, o.jsx)(eo.Z, { isOpen: s, onClose: t, className: "overflow-y-auto p-6 mobile:h-[600px] mobile:w-80", children: (0, o.jsx)(so, {}) }) },
                su = t(77221); let sx = e => (0, en.useQuery)({ queryKey: ["BetEvent/MemberBetList", e], queryFn: () => (0, e2.pO)(e), staleTime: 0 }); var sm = t(9991); let sh = e => e > 0 ? "#CF222E" : e < 0 ? "#1CB854" : "#9BA4BA"; var sg = e => { let s = e.data,
                        t = (0, I.useTranslations)(); return (0, o.jsxs)("div", { className: "flex flex-col gap-2 overflow-hidden rounded-lg bg-neutral-0 p-4", children: [(0, o.jsxs)("div", { className: "relative flex w-full justify-between font-noto-sans text-base font-bold", children: [(0, o.jsx)("div", { className: "absolute -left-6 h-6 w-4 rounded-lg", style: { backgroundColor: sh(s.WinLose) } }), (0, o.jsx)("span", { children: s.Subject }), (0, o.jsx)("span", { style: { color: sh(s.WinLose) }, children: 0 === s.WinLose ? "---" : s.WinLose > 0 ? "+" + s.WinLose : s.WinLose })] }), (0, o.jsxs)("div", { className: "flex justify-between gap-6 rounded-lg bg-metal-10 px-4 py-2 mobile:flex-col", children: [(0, o.jsxs)("div", { className: "flex flex-1 flex-col gap-2 font-noto-sans text-ss font-normal mobile:flex-row mobile:gap-6", children: [(0, o.jsx)("span", { className: "text-metal-400 mobile:w-20", children: t("LIVE.BET_EVENT.BETTING_OPTION") }), (0, o.jsx)("span", { className: "text-metal-700", children: s.OptionContent })] }), (0, o.jsxs)("div", { className: "flex flex-1 flex-col gap-2 font-noto-sans text-ss font-normal mobile:flex-row mobile:gap-6", children: [(0, o.jsx)("span", { className: "text-metal-400 mobile:w-20", children: t("LIVE.BET_EVENT.BETTING_AMOUNT") }), (0, o.jsx)("span", { className: "text-metal-700", children: s.BetAmount })] }), (0, o.jsxs)("div", { className: "flex flex-1 flex-col gap-2 font-noto-sans text-ss font-normal mobile:flex-row mobile:gap-6", children: [(0, o.jsx)("span", { className: "text-metal-400 mobile:w-20", children: t("LIVE.BET_EVENT.BETTING_TIME") }), (0, o.jsx)("span", { className: "text-metal-700", children: (0, sm.Z)(s.DateCreated).format("YYYY/MM/DD HH:mm") })] }), (0, o.jsxs)("div", { className: "flex flex-1 flex-col gap-2 font-noto-sans text-ss font-normal mobile:flex-row mobile:gap-6", children: [(0, o.jsx)("span", { className: "text-metal-400 mobile:w-20", children: t("LIVE.BET_EVENT.STREAMER") }), (0, o.jsx)("span", { className: "text-metal-700", children: s.StreamerName })] })] })] }) },
                sN = e => { let s = e.close,
                        t = e.streamerId,
                        n = (0, I.useTranslations)(),
                        l = (0, x._)((0, d.useState)(0), 2),
                        a = l[0],
                        i = l[1],
                        r = sx(0 === a ? t : void 0),
                        c = r.data,
                        u = r.isFetching; return (0, o.jsxs)("div", { children: [(0, o.jsxs)("div", { className: "mb-2 flex w-full gap-2", children: [(0, o.jsx)("button", { onClick: s, children: (0, o.jsx)(su.Z, { size: 24 }) }), (0, o.jsxs)("div", { className: "flex flex-1 rounded-lg bg-neutral-0 px-2 py-1.5", children: [(0, o.jsx)("div", { className: (0, j.Z)("flex flex-1 items-center justify-center rounded-md px-2 py-1 text-metal-500", { "bg-metal-600 text-neutral-0": 0 === a }), onClick: () => i(0), children: (0, o.jsx)("span", { className: "cursor-pointer text-ss font-normal", children: n("LIVE.BET_EVENT.CURRENT_LIVE_ROOM") }) }), (0, o.jsx)("div", { className: (0, j.Z)("flex flex-1 items-center justify-center rounded-md px-2 py-1 text-metal-500", { "bg-metal-600 text-neutral-0": 1 === a }), onClick: () => i(1), children: (0, o.jsx)("span", { className: "cursor-pointer text-ss font-normal", children: n("LIVE.BET_EVENT.PARTICIPATED") }) })] })] }), (0, o.jsx)("div", { className: "flex w-full flex-col gap-2", children: u ? (0, o.jsx)("div", { className: "skeleton h-32 w-full" }) : (null == c ? void 0 : c.Data.length) === 0 ? (0, o.jsx)("div", { className: "mt-16", children: (0, o.jsx)(ew.Z, {}) }) : null == c ? void 0 : c.Data.map((e, s) => (0, o.jsx)(sg, { data: e }, s)) })] }) },
                sj = t(74125),
                sM = t(48621),
                sp = t(954),
                sf = (e, s, t) => (0, en.useQuery)({ queryKey: ["/Live/BetEvents", e], queryFn: () => (0, e2.Gp)(e), select: e => e.Data.find(e => e.Id === s) }, t),
                sI = t(94770);

            function sD(e) { let s = e.betEventId,
                    t = e.option,
                    n = e.amount; return ei.Z.url("/api/BetEvent/PlaceBet").post({ BetEventId: s, Option: t, Amount: n }).json() } var sy = (e, s, t) => (0, sI.useMutation)({ mutationFn: sD, onSuccess: s, onError: t }, e),
                sv = t(47895); let sb = { "deep-gray": "border-metal-700 bg-metal-700 hover:bg-metal-700", gray: "border-metal-400 bg-metal-400 hover:bg-metal-400" }; var sA = e => { var s = e.children,
                    t = e.className,
                    n = e.selected,
                    l = e.color,
                    a = e.onClick,
                    i = (0, sv._)(e, ["children", "className", "selected", "color", "onClick"]); return (0, o.jsx)(y.Z, (0, A._)((0, b._)({ shape: "normal", className: (0, j.Z)("flex flex-col rounded-lg border text-neutral-0 disabled:!bg-metal-50", sb[void 0 === l ? "gray" : l], { "!bg-neutral-0 text-metal-700 hover:border-metal-700 hover:!bg-metal-100 ": !n }, t), onClick: a }, i), { children: s })) }; let sE = ["20", "100", "500", "1000"];
            (a = c || (c = {}))[a.Banker = 0] = "Banker", a[a.Player = 1] = "Player"; let sw = e => { let s = e.t,
                    t = e.onClose,
                    n = e.streamerId,
                    l = e.betEventId,
                    a = e.queryClient,
                    i = e.initOption,
                    r = sf(n, l, a),
                    c = r.data,
                    u = r.isFetching,
                    m = r.isPending,
                    h = (0, sj.Z)(e => e.Wallets.find(e => e.Type === B.Sq.GoldCoin), a).data,
                    g = (null == h ? void 0 : h.Balance) || 0,
                    N = (0, x._)((0, d.useState)({}), 2),
                    M = N[0],
                    p = N[1],
                    f = (0, x._)((0, d.useState)(""), 2),
                    I = f[0],
                    D = f[1],
                    v = (0, d.useDeferredValue)(I),
                    b = (0, x._)((0, d.useState)(!1), 2),
                    A = b[0],
                    E = b[1],
                    w = (0, R.f)("mobile"),
                    T = (0, P.Z)(e => e.show),
                    C = (0, x._)((0, d.useState)(0), 2),
                    z = C[0],
                    L = C[1],
                    O = sy(a, e => { if (e.IsSuccess) T({ type: "info", message: s("NORMAL.ACTION_SUCCESS") }), t && t();
                        else switch (e.Message) {
                            case "1100008":
                            case "1100011":
                                T({ type: "error", message: s(`ERROR.${e.Message}`) }); break;
                            default:
                                T({ type: "error", message: `${s("NORMAL.ACTION_FAIL")} [${e.Message}]` }), E(!0) } }),
                    S = O.mutate,
                    k = O.isPending,
                    _ = (0, d.useMemo)(() => Math.floor(+v * z), [z, v]);
                (0, d.useEffect)(() => { m || p(c.OptionSummaries[i]) }, [m, i]); let U = e => { D(e), "" === e || /^\d+$/.test(e) && 1e3 >= +e && +e >= 20 ? E(!1) : E(!0) }; return ((0, d.useEffect)(() => { if (M.OptionId) { let e = M.TotalAmount * Math.abs(M.Odds - 1),
                            s = +v + M.TotalAmount;
                        0 === e || 0 === s ? L(0) : L(Math.floor(100 * (e / s + 1)) / 100) } }, [v, M.OptionId]), u) ? (0, o.jsx)("div", { className: "skeleton" }) : (0, o.jsx)(eo.Z, { isOpen: !0, onClose: w ? t : void 0, className: "p-0 font-noto-sans desktop:py-0", children: (0, o.jsxs)("div", { className: "w-[560px] flex-col gap-4 flex-center mobile:w-80", children: [!w && (0, o.jsxs)("div", { className: "flex w-full justify-between border-b-[0.5px] border-b-metal-200 px-6 py-3", children: [(0, o.jsx)("span", { className: "text-base font-bold", children: s("LIVE.BET_EVENT.BET_EVENT") }), (0, o.jsx)("button", { type: "button", onClick: t, className: "size-6 flex-center", children: (0, o.jsx)(sM.Z, { className: "size-full rotate-45 text-metal-500" }) })] }), (0, o.jsxs)("div", { className: "flex w-full flex-col gap-4 px-6 mobile:pt-6", children: [(0, o.jsx)("div", { className: "text-center", children: (0, o.jsx)("span", { className: "text-base font-bold", children: null == c ? void 0 : c.Subject }) }), (0, o.jsx)("div", { className: "flex justify-between gap-2", children: null == c ? void 0 : c.OptionSummaries.map(e => (0, o.jsx)(sA, { color: "deep-gray", className: "h-[57px] w-full flex-1", selected: M.OptionId === e.OptionId, onClick: () => p(e), children: (0, o.jsx)("div", { className: "flex-col flex-center", children: (0, o.jsx)("span", { className: "text-ss font-bold", children: e.OptionContent }) }) }, e.OptionId)) }), (0, o.jsx)("input", { value: I, placeholder: s("LIVE.BET_EVENT.PLEASE_ENTER_AMOUNT"), onChange: e => { U(e.target.value) }, className: (0, j.Z)("w-full rounded-lg border border-metal-100 px-4 py-2.5 outline-0 focus:border-metal-400", { "border-error focus:border-error": A }) }), (0, o.jsx)("div", { className: "flex w-full justify-between gap-2", children: sE.map(e => (0, o.jsx)(sA, { color: "deep-gray", className: "w-full flex-1 p-2", onClick: () => U(e), disabled: g < +e, children: e }, e)) }), (0, o.jsxs)("div", { className: "flex w-full justify-between text-ss", children: [(0, o.jsxs)("div", { children: [(0, o.jsx)("span", { children: s("LIVE.BET_EVENT.ODDS") }), " ", (0, o.jsx)("span", { className: "font-bold text-orange", children: 0 === z ? "--" : z })] }), (0, o.jsxs)("div", { children: [(0, o.jsx)("span", { children: s("LIVE.BET_EVENT.WIN_TO_EARN") }), " ", (0, o.jsx)("span", { className: "font-bold text-orange", children: isNaN(_) ? 0 : _ })] }), (0, o.jsxs)("div", { className: "flex-center", children: [(0, o.jsx)(eR.cL, { className: "size-4" }), " ", (0, o.jsx)("span", { className: "font-bold text-orange", children: g })] })] }), (0, o.jsxs)("div", { className: "mb-6 mt-4 w-full flex-col gap-2 flex-center", children: [(0, o.jsx)(y.Z, { color: "primary-gradient", shape: "gradient", className: "w-full", disabled: A || !v || k, onClick: () => { E(!1), S({ betEventId: c.Id, option: M.OptionId, amount: +v }) }, children: k ? (0, o.jsx)("span", { className: "loading loading-spinner" }) : s("LIVE.BET_EVENT.PLACE_BET") }), (0, o.jsx)("span", { className: "text-center text-sm text-metal-500", children: s("LIVE.BET_EVENT.PLACE_BET_DECLARE") })] })] })] }) }) }; var sT = { root: null, container: null, open: function(e) { this.root || (this.container = document.createDocumentFragment(), this.root = (0, sp.createRoot)(this.container), this.root.render((0, o.jsx)(sw, (0, A._)((0, b._)({}, e), { onClose: () => { this.unmount() } })))) }, unmount: function() { this.root && (this.root.unmount(), this.root = null, this.container = null) } },
                sC = t(96882),
                sz = t(70472),
                sL = t(83789),
                sO = t(15500),
                sS = e => { let s = e.data; return (0, o.jsxs)("div", { className: "relative flex h-[204px] w-[144px] items-end", children: [(0, o.jsxs)("div", { className: "avatar absolute top-0 flex h-[88px] w-full justify-center", children: [(0, o.jsx)("div", { className: "rounded-full", children: (0, o.jsx)($.default, { className: "!static max-w-[88px]", src: s.HeaderImg, alt: s.NickName, fill: !0 }) }), (0, o.jsx)("div", { className: "absolute bottom-0 left-7 flex size-6 items-center justify-center rounded-lg bg-purple-400 p-1", style: { display: "flex" }, children: (0, o.jsx)(sL.Z, { size: "14", className: "text-neutral-0", variant: "Bold" }) }), (0, o.jsx)("div", { className: "absolute bottom-0 right-7 size-6 rounded-lg bg-raspberry p-1", children: (0, o.jsx)(sC.Z, {}) })] }), (0, o.jsxs)("div", { className: "flex size-[144px] flex-col gap-2 rounded-lg bg-white pb-4 pt-10 text-center font-noto-sans", children: [(0, o.jsx)("div", { children: (0, o.jsx)("span", { className: "text-ss text-metal-700", children: s.NickName }) }), (0, o.jsxs)("div", { className: "flex items-center justify-center gap-1 text-sm font-normal text-metal-400", children: [(0, o.jsx)(eV.Z, { size: 16 }), (0, o.jsx)("span", { children: s.MemberBetCount })] }), (0, o.jsx)("div", { children: (0, o.jsx)("span", { children: (0, o.jsx)(sz.rU, { href: `/live/${s.UserId}`, children: (0, o.jsx)("button", { children: (0, o.jsx)(sO.Z, { size: 32, variant: "Bold", className: "text-purple-400" }) }) }) }) })] })] }) },
                sk = e => { let s = e.data,
                        t = e.className; return (0, o.jsx)(sz.rU, { href: `/live/${s.UserId}`, children: (0, o.jsxs)("div", { className: (0, j.Z)("flex gap-4 border-b border-metal-200 pb-4", t), children: [(0, o.jsxs)("div", { className: "avatar relative flex size-10 justify-center", children: [(0, o.jsx)("div", { className: "rounded-full", children: (0, o.jsx)($.default, { className: "rounded-full", src: s.HeaderImg, alt: s.NickName, fill: !0 }) }), (0, o.jsx)("div", { className: "absolute bottom-0 right-7 size-3.5 items-center justify-center rounded-sm bg-purple-400", style: { display: "flex " }, children: (0, o.jsx)(sL.Z, { size: "10", className: "text-neutral-0", variant: "Bold" }) }), (0, o.jsx)("div", { className: "absolute bottom-0 left-7  size-3.5 rounded-sm bg-raspberry", children: (0, o.jsx)(sC.Z, {}) })] }), (0, o.jsxs)("div", { className: "flex flex-1 justify-between", children: [(0, o.jsxs)("div", { className: "flex flex-col", children: [(0, o.jsx)("div", { children: (0, o.jsx)("span", { className: "text-ss text-metal-700", children: s.NickName }) }), (0, o.jsxs)("div", { className: "flex items-center gap-1 text-sm font-normal text-metal-400", children: [(0, o.jsx)(eV.Z, { size: 12 }), (0, o.jsx)("span", { children: s.MemberBetCount })] })] }), (0, o.jsx)("div", { className: "flex items-center", children: (0, o.jsx)("span", { children: (0, o.jsx)("button", { children: (0, o.jsx)(sO.Z, { size: 24, variant: "Bold", className: "text-purple-400" }) }) }) })] })] }) }) },
                s_ = () => { let e = (0, I.useTranslations)(),
                        s = (0, R.f)("mobile"),
                        t = (0, en.useQuery)({ queryKey: ["/Live/StreamersWithOngoingBetEvent"], queryFn: () => (0, e2.a9)() }),
                        n = t.data,
                        l = t.isFetching; return (null == n ? void 0 : n.Data.length) === 0 || l ? null : (0, o.jsxs)("div", { className: "flex flex-col gap-4", children: [(0, o.jsx)("div", { children: (0, o.jsx)("span", { className: "font-noto-sans text-ss font-bold", children: e("LIVE.BET_EVENT.ON_BETTING_STREAMER") }) }), s ? (0, o.jsx)("div", { className: "flex w-full flex-col gap-4 rounded-lg bg-neutral-0 p-4", children: null == n ? void 0 : n.Data.map((e, s, t) => (0, o.jsx)(sk, { data: e, className: s === t.length - 1 ? "border-b-0 pb-0" : "" }, e.UserId)) }) : (0, o.jsx)("div", { className: "flex h-20 w-full gap-4", children: null == n ? void 0 : n.Data.map(e => (0, o.jsx)(sS, { data: e }, e.UserId)) })] }) },
                sU = e => { let s = e.streamerId,
                        t = (0, ex.Z)(e => e.userRole),
                        n = (0, I.useTranslations)(),
                        l = (0, m.kt)(!1),
                        a = l.value,
                        i = l.setTrue,
                        r = l.setFalse,
                        u = (0, x._)((0, d.useState)(!1), 2),
                        h = u[0],
                        g = u[1],
                        N = e5(s),
                        j = N.data,
                        M = N.isFetching,
                        p = (0, eY.useQueryClient)(),
                        f = t === B.i4.member; return (0, o.jsxs)(o.Fragment, { children: [h ? (0, o.jsx)(sN, { close: () => g(!1), streamerId: s }) : (0, o.jsxs)("div", { className: "flex flex-col gap-4 px-1", children: [(0, o.jsxs)("div", { className: "flex w-full gap-2 mobile:justify-between", children: [f && (0, o.jsxs)("button", { className: "flex rounded bg-metal-100 px-2 py-1", onClick: () => g(!0), children: [(0, o.jsx)(eB.Z, { size: 20 }), (0, o.jsx)("span", { className: "font-noto-sans text-ss font-normal", children: n("LIVE.BET_EVENT.BETTING_RECORD") })] }), (0, o.jsx)("button", { className: "flex rounded bg-metal-100 px-2 py-1", onClick: () => i(), children: (0, o.jsx)("span", { className: "font-noto-sans text-ss font-normal", children: n("LIVE.BET_EVENT.BETTING_GAMEPLAY") }) })] }), (0, o.jsx)("div", { className: "grid grid-cols-2 desktop:gap-4 mobile:grid-cols-1 mobile:gap-y-4", children: M ? (0, o.jsx)("div", { className: "skeleton h-32 w-full" }) : (null == j ? void 0 : j.Data) && j.Data.length > 0 ? null == j ? void 0 : j.Data.map(e => (0, o.jsx)(e4, { className: "rounded-lg", onClick: t => { let l = "banker" === t ? c.Banker : c.Player;
                                        sT.open({ t: n, queryClient: p, streamerId: s, betEventId: e.Id, initOption: l }) }, isMember: f, event: e }, e.Id)) : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)("div", { className: "col-span-2 text-center text-gray-500", children: (0, o.jsx)("span", { className: "text-sm font-normal", children: n("LIVE.BET_EVENT.NO_BETTING_IN_ROOM") }) }), (0, o.jsx)(s_, {})] }) })] }), (0, o.jsx)(sd, { isOpen: a, close: r })] }) },
                sZ = e => { var s, t, n, l; let a = e.tabStyle,
                        i = e.tabClassName,
                        r = e.className,
                        c = (0, d.useRef)([]),
                        x = (0, g.Y)(),
                        m = x.streamerId,
                        M = x.roomInfo,
                        I = x.currentTab,
                        D = x.setCurrentTab,
                        y = p(null == M ? void 0 : null === (s = M.Game) || void 0 === s ? void 0 : s.GameTypeID),
                        v = (0, N.ZP)().isFullscreen,
                        b = e => s => { s && -1 === c.current.indexOf(s) && (c.current[e] = s) }; return (0, d.useEffect)(() => { let e = () => { if ("#bet-event" === window.location.hash) { var e;
                                null === (e = c.current[f.z6.LiveBetEvent]) || void 0 === e || e.scrollIntoView() } }; return window.addEventListener("hashchange", e), () => { window.removeEventListener("hashchange", e) } }, []), (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)("div", { className: (0, j.Z)("h-10 transition-[height] ease-out", i), style: a, children: (0, o.jsx)(u.Z, { className: "h-full min-w-[360px] justify-evenly gap-6 overflow-x-auto bg-transparent px-6 pt-2 invisible-scrollbar", tabs: y ? f.te : f.te.filter(e => e.type !== f.z6.MatchStatus), activeTab: I, onSwitchTab: e => { var s;
                                    null === (s = c.current[e]) || void 0 === s || s.scrollIntoView(), history.replaceState(null, "", `${f.ui[e]}`), window.dispatchEvent(new HashChangeEvent("hashchange")) }, tabItemClassName: "text-nowrap" }) }), (0, o.jsxs)("div", { className: (0, j.Z)("flex h-full w-screen flex-1 snap-x snap-mandatory overflow-x-scroll rounded-t-lg border-t border-metal-200 bg-neutral-0 invisible-scrollbar", r), children: [(0, o.jsx)(h, { ref: b(f.z6.ChatRoom), className: "w-screen shrink-0 snap-center snap-always overflow-y-hidden bg-neutral", onVisibilityChange: e => e && D(f.z6.ChatRoom), children: (0, o.jsx)(ey, { roomId: m }) }), y && (0, o.jsx)(h, { ref: b(f.z6.MatchStatus), className: "w-screen shrink-0 snap-center snap-always overflow-y-auto bg-metal-50 p-5", onVisibilityChange: e => e && D(f.z6.MatchStatus), children: (0, o.jsx)(eO, { gameId: null == M ? void 0 : null === (t = M.Game) || void 0 === t ? void 0 : t.GameID }) }), (0, o.jsx)(h, { ref: b(f.z6.ScheduledStreams), className: "w-screen shrink-0 snap-center snap-always overflow-y-auto bg-metal-50 p-5", onVisibilityChange: e => e && D(f.z6.ScheduledStreams), children: (0, o.jsx)(eQ, { streamerId: m }) }), (0, o.jsx)(h, { ref: b(f.z6.OtherAnchors), className: "w-screen shrink-0 snap-center snap-always overflow-y-auto bg-metal-50 p-5", onVisibilityChange: e => e && D(f.z6.OtherAnchors), children: (0, o.jsx)(eS.Z, { streamerId: m, gameId: (null == M ? void 0 : null === (n = M.Streamer) || void 0 === n ? void 0 : n.IsOnAir) ? null == M ? void 0 : null === (l = M.Game) || void 0 === l ? void 0 : l.GameID : 0 }) }), (0, o.jsx)(h, { ref: b(f.z6.LiveBetEvent), className: "w-screen shrink-0 snap-center snap-always overflow-y-auto bg-metal-50 p-5", onVisibilityChange: e => e && D(f.z6.LiveBetEvent), children: (0, o.jsx)(sU, { streamerId: m }) })] }), !v && (0, o.jsx)(eA, {})] }) } }, 39090: function(e, s, t) { "use strict";
            t.r(s), t.d(s, { default: function() { return N } }); var n = t(69632),
                l = t(48103),
                a = t(3965),
                i = t(95740),
                r = t(31301),
                c = t(56682),
                o = t(76920),
                d = t(29366),
                u = t(59453); let x = () => { let e = document.activeElement; return (null == e ? void 0 : e.matches(":focus")) && ["INPUT", "TEXTAREA"].includes(e.tagName) }; var m = t(19253),
                h = t(32904),
                g = t(36533),
                N = e => { let s = e.streamerId,
                        t = e.children,
                        N = (0, c.f)("mobile"),
                        j = (0, g.Z)(s).data,
                        M = (0, n._)((0, a.useState)(h.z6.ChatRoom), 2),
                        p = M[0],
                        f = M[1],
                        I = (0, m.Z)(e => e.status),
                        D = function() { let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 150,
                                t = (0, u.Z)(),
                                l = "landscape" === t,
                                i = (0, n._)((0, a.useState)(!1), 2),
                                r = i[0],
                                c = i[1],
                                m = (0, n._)((0, a.useState)(0), 2),
                                h = m[0],
                                g = m[1],
                                N = "android" === (0, o.Z)(e => e.device.current),
                                j = (0, n._)((0, a.useState)(() => { var e; return d.Z ? (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.height) || window.document.documentElement.clientHeight : 0 }), 2),
                                M = j[0],
                                p = j[1],
                                f = d.Z ? window.document.documentElement.clientHeight : 0,
                                I = (0, a.useCallback)(() => { var e, t, n; let l = x(),
                                        a = (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.height) || window.innerHeight,
                                        i = f - a; if (l && i >= s) { let e = document.activeElement;
                                        null === (t = window.visualViewport) || void 0 === t || t.removeEventListener("resize", I), p(() => a), g(() => i), c(() => !0), e.addEventListener("blur", D), N && (null === (n = window.visualViewport) || void 0 === n || n.addEventListener("resize", y)) } }, [s]),
                                D = (0, a.useCallback)(e => { var s, t, n;
                                    c(() => !1), g(() => 0), null === (s = e.target) || void 0 === s || s.removeEventListener("blur", D), null === (t = window.visualViewport) || void 0 === t || t.removeEventListener("resize", y), null === (n = window.visualViewport) || void 0 === n || n.addEventListener("resize", I) }, []),
                                y = (0, a.useCallback)(() => { var e; let s = x(),
                                        t = Math.round((null === (e = window.visualViewport) || void 0 === e ? void 0 : e.height) || window.innerHeight);
                                    s && t === f && document.activeElement.blur() }, []),
                                v = () => { x() ? document.activeElement.blur() : (c(() => !1), g(() => 0)) }; return (0, a.useLayoutEffect)(() => { var s, t; return window.visualViewport || console.warn("[Warn] VisualViewport API is not support!"), e ? null === (s = window.visualViewport) || void 0 === s || s.addEventListener("resize", I) : null === (t = window.visualViewport) || void 0 === t || t.removeEventListener("resize", I), () => { var e;
                                    null === (e = window.visualViewport) || void 0 === e || e.removeEventListener("resize", I) } }, [e]), (0, a.useLayoutEffect)(() => { l && v() }, [l]), { isVisible: r, resizeHeight: Math.round(M), keyboardHeight: Math.round(h), isPortrait: "portrait" === t } }(N && I === i.J0.active),
                        y = D.isVisible,
                        v = D.keyboardHeight,
                        b = (0, a.useRef)(null); return (0, l.jsx)(r.h.Provider, { value: { streamerId: s, roomInfo: j, currentTab: p, setCurrentTab: f, isKeyboardShow: y, keyboardHeight: v, messageBlock: b }, children: t }) } }, 89936: function(e, s, t) { "use strict";
            t.d(s, { Z: function() { return d } }); var n = t(3965),
                l = t(95740),
                a = t(99180),
                i = t(30762),
                r = t(68503); let c = [l.i4.member, l.i4.assistant, l.i4.streamer, l.i4.superAdmin],
                o = +((0, a.Z)("INTERVAL_SIGN_IN_TIME") || 0);

            function d() { let e = (0, i.Z)(e => e.userRole),
                    s = (0, i.Z)(e => !!e.token),
                    t = (0, r.ZP)(),
                    l = t.toggleSignInModal,
                    a = t.signInModalOpened;
                (0, n.useEffect)(() => { let t; return !(o > 0) || s && c.includes(e) || a || (t = window.setTimeout(() => { l(!0) }, 6e4 * o)), () => { t && window.clearTimeout(t) } }, [s, e, a, l]) } }, 32904: function(e, s, t) { "use strict"; var n, l;
            t.d(s, { te: function() { return a }, ui: function() { return i }, z6: function() { return n } }), (l = n || (n = {}))[l.ChatRoom = 0] = "ChatRoom", l[l.MatchStatus = 1] = "MatchStatus", l[l.ScheduledStreams = 2] = "ScheduledStreams", l[l.OtherAnchors = 3] = "OtherAnchors", l[l.LiveBetEvent = 4] = "LiveBetEvent"; let a = [{ label: "LIVE.CHAT_ROOM", type: 0 }, { label: "LIVE.LIVE_SCORE", type: 1 }, { label: "LIVE.PREVIEW", type: 2 }, { label: "LIVE.MORE_VIDEO", type: 3 }, { label: "LIVE.BET_EVENT.LIVE_BETTING", type: 4 }],
                i = { 0: "#chat-room", 1: "#match-status", 2: "#streams", 3: "#other-streamers", 4: "#bet-event" } }, 50062: function(e, s, t) { "use strict"; var n = t(46927),
                l = t(68503);
            s.Z = () => { let e = (0, l.ZP)().setShouldSignOut;
                (0, n.Z)("Logout", () => e(!0)), (0, n.Z)("DuplicatedLogin", () => e(!0)) } }, 36533: function(e, s, t) { "use strict";
            t.d(s, { Z: function() { return c } }); var n = t(84734),
                l = t(96266),
                a = t(62740);

            function i() { return (i = (0, l._)(function*(e) { return yield a.Z.url("/api/Live/GetLiveRoomInfo").query({ streamerId: e }).get().json(e => e.IsSuccess ? e.Data : null) })).apply(this, arguments) }

            function r() { return (r = (0, l._)(function*(e) { return yield a.Z.url("/api/Live/GetLiveRoomInfo").query({ gameId: e }).get().json(e => e.IsSuccess ? e.Data : null) })).apply(this, arguments) }

            function c(e) { let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = null != e ? e : 0; return (0, n.useQuery)({ queryKey: ["/Live/GetLiveRoomInfo", t, s], queryFn: () => s ? function(e) { return r.apply(this, arguments) }(t) : function(e) { return i.apply(this, arguments) }(t) }) } }, 81309: function(e, s, t) { "use strict"; var n, l, a, i;
            t.d(s, { I: function() { return l } }), (a = n || (n = {}))[a.text = 0] = "text", (i = l || (l = {}))[i.banned = 0] = "banned", i[i.active = 1] = "active" }, 31301: function(e, s, t) { "use strict";
            t.d(s, { Y: function() { return a }, h: function() { return l } }); var n = t(3965); let l = (0, n.createContext)({}),
                a = () => (0, n.useContext)(l) }, 92489: function(e, s, t) { "use strict";
            t.d(s, { Z: function() { return a } }); var n = t(31412),
                l = t(54205);

            function a(e) { let s = (0, l.useTranslations)(); return (0, n.F)(e(s)) } }, 6320: function(e, s, t) { "use strict";
            t.r(s), t.d(s, { MyMissionProvider: function() { return g }, useMyMission: function() { return N } }); var n = t(96266),
                l = t(48103),
                a = t(3965),
                i = t(94770),
                r = t(62740);

            function c() { return o.apply(this, arguments) }

            function o() { return (o = (0, n._)(function*() { let e = yield r.Z.url("/api/Member/WatchLiveConsecutive").post().json(); if (!e.IsSuccess) throw Error(e.Message); return e })).apply(this, arguments) } var d = t(74125),
                u = t(99180),
                x = t(30762),
                m = t(95740); let h = (0, a.createContext)({ isTriggerToday: !1, triggerMission: () => null });

            function g(e) { let s = e.children,
                    t = (0, a.useRef)(!1),
                    r = ~~(0, u.Z)("MISSION_DELAY") || 6e5,
                    o = (0, a.useRef)(0),
                    g = (0, d.Z)(e => e.Mission.Has10MinsMission),
                    N = g.data,
                    j = g.refetch,
                    M = (0, x.Z)(e => ({ isAuthenticated: !!e.token, role: e.userRole })),
                    p = M.isAuthenticated,
                    f = M.role,
                    I = (0, a.useRef)({ has10MinsMission: N, isAuthenticated: p, role: f }),
                    D = (0, i.useMutation)({ retry: !1, mutationKey: ["/Member/WatchLiveConsecutive"], mutationFn: c, onSuccess() { j() } }),
                    y = () => { 0 !== o.current && (window.clearTimeout(o.current), o.current = 0) },
                    v = (0, a.useCallback)(() => { t.current || (t.current = !0, o.current = window.setTimeout((0, n._)(function*() { let e = I.current,
                                s = e.isAuthenticated,
                                t = e.has10MinsMission,
                                n = e.role; if (s && t && n === m.i4.member) try { yield D.mutateAsync(), o.current = 0 } catch (e) { console.error(e) } }), r)) }, []); return (0, a.useEffect)(() => { I.current = { has10MinsMission: N, isAuthenticated: p, role: f } }, [N, p, f]), (0, a.useEffect)(() => () => { y() }, []), (0, l.jsx)(h.Provider, { value: { isTriggerToday: !!N, triggerMission: v }, children: s }) }

            function N() { return (0, a.useContext)(h) } }, 59453: function(e, s, t) { "use strict";
            t.d(s, { Z: function() { return r } }); var n = t(69632),
                l = t(3965),
                a = t(79101),
                i = t(70650);

            function r() { let e = (0, i.O_)(),
                    s = (0, n._)((0, l.useState)("portrait"), 2),
                    t = s[0],
                    r = s[1],
                    c = (0, l.useCallback)(() => { var s, n; if (!e) return; let l = null !== (n = null === (s = (0, a.getOrientation)()) || void 0 === s ? void 0 : s.type) && void 0 !== n ? n : "portrait-primary"; if (!l.includes(t)) switch (l) {
                            case "landscape-primary":
                            case "landscape-secondary":
                                r("landscape"); break;
                            case "portrait-primary":
                            case "portrait-secondary":
                                r("portrait") } }, [e, t]); return (0, i.OR)("resize", c), (0, i.OR)("orientationchange", c), (0, l.useEffect)(() => { var s; if (!e) return; let t = null === (s = window.screen) || void 0 === s ? void 0 : s.orientation; return null == t || t.addEventListener("change", c), () => { null == t || t.removeEventListener("change", c) } }, [c, e]), (0, l.useEffect)(() => { c() }, [c]), t } }, 33833: function(e, s, t) { "use strict";
            t.d(s, { a: function() { return l } }); var n = t(33454);

            function l(e) { return (0, n._)({}, e) } }, 19253: function(e, s, t) { "use strict"; var n = t(26889),
                l = t(51626),
                a = t(80497),
                i = t(81309),
                r = t(95740); let c = (0, l.Ue)()((0, a.n)(e => ({ isReady: !1, roomId: -1, status: r.J0.inactive, roomStatus: i.I.active, messages: [], mutedUserIds: [], welcomeMessagesEnabled: !0, setRoom: (s, t) => { let n = t.UserStatus,
                        l = t.Messages,
                        a = t.BannedMembers,
                        i = t.ChatRoomStatus;
                    e(e => { e.isReady = !0, e.messages = l, e.mutedUserIds = null != a ? a : [], e.roomId = s, e.status = n, e.roomStatus = i }) }, setUserStatus: s => { e({ status: s }) }, setRoomStatus: s => { e({ roomStatus: s }) }, setEnableWelcomeMessages: s => { e(e => { s || (e.messages = e.messages.filter(e => -1 !== e.UserType)), e.welcomeMessagesEnabled = s }) }, addMessage: s => { e(e => { e.messages = e.messages.concat([s]).slice(-150) }) }, removeMessage: s => { e(e => { let t = e.messages.findIndex(e => e.Id === s);
                        e.messages.splice(t, 1) }) }, setMessages: s => { e({ messages: s }) }, addMutedUserId: s => { e(e => { e.mutedUserIds.push(s) }) }, removeMutedUserId: s => { e(e => { e.mutedUserIds = (0, n.Z)(e.mutedUserIds, s) }) }, purgeMessagesByUserId: s => { e(e => { e.messages = e.messages.filter(e => e.UserId !== s) }) }, setReady: s => { e({ isReady: s }) }, reset: () => { e({ isReady: !1, roomId: -1, status: r.J0.inactive, roomStatus: i.I.active, messages: [], mutedUserIds: [], welcomeMessagesEnabled: !0 }) } })));
            s.Z = c } },
    function(e) { e.O(0, [38, 4564, 8311, 7798, 4206, 915, 497, 6148, 2008, 4734, 6379, 650, 2146, 3872, 1412, 8783, 297, 7374, 9430, 93, 8827, 7248, 9496, 7590, 7073, 1165, 5676, 6809, 1744], function() { return e(e.s = 55554) }), _N_E = e.O() }
]);
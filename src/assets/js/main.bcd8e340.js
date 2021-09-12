(window.webWeddingJsonpFunction = window.webWeddingJsonpFunction || []).push([[109], {
    2858: function(e, t, a) {
        "use strict";
        a.r(t);
        var s = a(159)
          , n = a.n(s)
          , i = a(158)
          , c = a.n(i)
          , r = a(160)
          , l = a.n(r)
          , o = a(161)
          , m = a.n(o)
          , j = a(101)
          , d = a.n(j)
          , p = a(3)
          , b = (a(6),
        a(50))
          , u = a.n(b)
          , f = a(100)
          , _ = a(81)
          , O = a.n(_)
          , x = a(106)
          , N = a(899)
          , h = a(1);
        function g(e) {
            var t = e.page
              , a = e.headerStyle
              , s = e.wedding
              , n = e.handleScroll;
            return Object(h.jsx)("div", {
                className: "hero-wrapper"
            }, Object(h.jsx)("div", {
                className: "jumbotron home-page-hero ".concat(t.header_image_url ? "has-image" : "no-image"),
                style: a
            }, "production" !== window.zola.env ? Object(h.jsx)("span", {
                role: "img",
                "aria-label": "The Wedding Website of ".concat(s.owner_first_name, " ").concat(s.owner_last_name, " and ").concat(s.partner_first_name, " ").concat(s.partner_last_name)
            }) : null, Object(h.jsx)("div", {
                className: "hero-accent-top-left"
            }), Object(h.jsx)("div", {
                className: "hero-accent-top-right"
            }), Object(h.jsx)("div", {
                className: "hero-accent-bottom-left"
            }), Object(h.jsx)("div", {
                className: "hero-accent-bottom-right"
            }), Object(h.jsx)("div", {
                className: "homepage-header-text"
            }, Object(h.jsx)("h1", null, t && t.title)), Object(h.jsx)("div", {
                className: "down-arrow"
            }, Object(h.jsx)("i", {
                className: "zolaicon-public zolaicon-public-chevron-down",
                onClick: n,
                role: "button"
            }))))
        }
        g.propTypes = {};
        var v = g;
        function w(e) {
            var t = e.wedding;
            return Object(h.jsx)("div", {
                className: "name-section-middle"
            }, Object(h.jsx)("div", {
                className: "content"
            }, Object(h.jsx)("h1", {
                className: "name-1"
            }, t.owner_first_name && Object(h.jsx)("span", {
                className: ["first-name", t.owner_first_name.length > 12 ? "name-wrap" : null].join(" ")
            }, Object(h.jsx)("span", {
                className: "first-initial"
            }, t.owner_first_name[0]), Object(h.jsx)("span", {
                className: "full-first-name"
            }, t.owner_first_name.slice(1, t.owner_first_name.length))), t.owner_last_name && Object(h.jsx)("span", {
                className: "last-name"
            }, Object(h.jsx)("span", {
                className: "last-initial"
            }, " ", t.owner_last_name[0]), Object(h.jsx)("span", {
                className: "full-last-name"
            }, t.owner_last_name.slice(1, t.owner_last_name.length)))), Object(h.jsx)("span", {
                className: "amp"
            }, "&"), Object(h.jsx)("span", {
                className: "and"
            }, "and"), Object(h.jsx)("span", {
                className: "plus"
            }, "+"), Object(h.jsx)("h1", {
                className: "name-2"
            }, t.partner_first_name && Object(h.jsx)("span", {
                className: "first-name"
            }, Object(h.jsx)("span", {
                className: "first-initial"
            }, t.partner_first_name[0]), Object(h.jsx)("span", {
                className: "full-first-name"
            }, t.partner_first_name.slice(1, t.partner_first_name.length))), t.partner_last_name && Object(h.jsx)("span", {
                className: "last-name"
            }, Object(h.jsx)("span", {
                className: "last-initial"
            }, " ", t.partner_last_name[0]), Object(h.jsx)("span", {
                className: "full-last-name"
            }, t.partner_last_name.slice(1, t.partner_last_name.length))))))
        }
        w.propTypes = {};
        var y = w;
        function T(e) {
            var t = e.wedding;
            return Object(h.jsx)("div", {
                className: "name-section-right"
            }, Object(h.jsx)("h2", {
                className: "partner-2-name"
            }, t.partner_first_name && Object(h.jsx)("span", {
                className: "first-name"
            }, Object(h.jsx)("span", {
                className: "first-initial"
            }, t.partner_first_name[0]), Object(h.jsx)("span", {
                className: "full-first-name"
            }, t.partner_first_name.slice(1, t.partner_first_name.length))), t.partner_last_name && Object(h.jsx)("span", {
                className: "last-name"
            }, Object(h.jsx)("span", {
                className: "last-initial"
            }, " ", t.partner_last_name[0]), Object(h.jsx)("span", {
                className: "full-last-name"
            }, t.partner_last_name.slice(1, t.partner_last_name.length)))))
        }
        T.propTypes = {};
        var S = T;
        function R(e) {
            var t = e.wedding;
            return Object(h.jsx)("div", {
                className: "name-section-left"
            }, Object(h.jsx)("h2", {
                className: "partner-1-name"
            }, t.owner_first_name && Object(h.jsx)("span", {
                className: "first-name"
            }, Object(h.jsx)("span", {
                className: "first-initial"
            }, t.owner_first_name[0]), Object(h.jsx)("span", {
                className: "full-first-name"
            }, t.owner_first_name.slice(1, t.owner_first_name.length))), t.owner_last_name && Object(h.jsx)("span", {
                className: "last-name"
            }, Object(h.jsx)("span", {
                className: "last-initial"
            }, " ", t.owner_last_name[0]), Object(h.jsx)("span", {
                className: "full-last-name"
            }, t.owner_last_name.slice(1, t.owner_last_name.length)))))
        }
        R.propTypes = {};
        var E = R;
        function I(e) {
            var t = e.wedding
              , a = e.topSeal;
            return Object(h.jsx)("div", {
                className: ["homepage-seal", a ? "top-seal" : "bottom-seal"].join(" ")
            }, Object(h.jsx)("div", {
                className: "seal-section"
            }, Object(h.jsx)("span", {
                className: "name-1"
            }, t.owner_first_name && Object(h.jsx)("span", {
                className: "initial-1"
            }, t.owner_first_name[0]), t.owner_last_name && Object(h.jsx)("span", {
                className: "initial-2"
            }, t.owner_last_name[0])), t.owner_first_name && t.partner_first_name && Object(h.jsx)("span", null, Object(h.jsx)("span", {
                className: "amp"
            }, "&"), Object(h.jsx)("span", {
                className: "and"
            }, "and"), Object(h.jsx)("span", {
                className: "plus"
            }, "+")), Object(h.jsx)("span", {
                className: "name-2"
            }, t.partner_first_name && Object(h.jsx)("span", {
                className: "initial-1"
            }, t.partner_first_name[0]), t.partner_last_name && Object(h.jsx)("span", {
                className: "initial-2"
            }, t.partner_last_name[0]))))
        }
        I.propTypes = {};
        var P = I;
        function Y(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, s = d()(e);
                if (t) {
                    var n = d()(this).constructor;
                    a = Reflect.construct(s, arguments, n)
                } else
                    a = s.apply(this, arguments);
                return m()(this, a)
            }
        }
        var M = function(e) {
            l()(a, e);
            var t = Y(a);
            function a() {
                return n()(this, a),
                t.apply(this, arguments)
            }
            return c()(a, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.getHomepageSectionEntities;
                    e.forPreview || t(),
                    this.handleScroll = this.handleScroll.bind(this)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this.props
                      , t = e.unloadEntities;
                    e.forPreview || t()
                }
            }, {
                key: "handleScroll",
                value: function() {
                    this.pageBody.scrollIntoView()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , a = t.homepageSections
                      , s = t.orderedIds
                      , n = t.wedding
                      , i = t.page
                      , c = t.forPreview
                      , r = t.busy
                      , l = t.formData
                      , o = i.header_image_url ? {
                        backgroundImage: "url(".concat(i.header_image_url, "?h=700)")
                    } : {}
                      , m = i.footer_image_url ? {
                        backgroundImage: "url(".concat(i.footer_image_url, "?h=700)")
                    } : {}
                      , j = i.title
                      , d = c ? u.a.utc(l.weddingDate) : n.wedding_date && u.a.utc(n.wedding_date)
                      , p = c ? l.hashtag : n.hashtag
                      , b = c ? l.city : n.city
                      , f = c ? l.stateProvince : n.state_province
                      , _ = c && s && 0 === s.length || !c && a && 0 === a.length
                      , x = !!i.header_image_url
                      , N = !!j
                      , g = O()("public-page", {
                        "offset-background-image": i.title && !i.header_image_url
                    })
                      , w = O()("page-content", {
                        "no-entities": _,
                        "has-entities": !_,
                        "has-image": x,
                        "no-image-above": !x,
                        "has-welcome-message": N,
                        "no-welcome-message": !N
                    });
                    return Object(h.jsx)("div", {
                        className: g
                    }, i && !r && (n.wedding_account_id || n.account_id) && Object(h.jsx)("div", null, (i.header_image_url || i.title) && Object(h.jsx)(v, {
                        page: i,
                        wedding: n,
                        headerStyle: o,
                        handleScroll: this.handleScroll
                    }), Object(h.jsx)("div", {
                        className: w
                    }, Object(h.jsx)("div", {
                        className: "page-accent-top-left"
                    }), Object(h.jsx)("div", {
                        className: "page-accent-top-right"
                    }), Object(h.jsx)("div", {
                        className: "page-accent-bottom-left"
                    }), Object(h.jsx)("div", {
                        className: "page-accent-bottom-right"
                    }), n.owner_first_name && n.partner_first_name && n.enable_seal ? Object(h.jsx)(P, {
                        topSeal: !0,
                        wedding: n
                    }) : null, Object(h.jsx)("div", {
                        className: "names-section",
                        ref: function(t) {
                            e.pageBody = t
                        }
                    }, Object(h.jsx)("div", {
                        className: "names-accent-top-left"
                    }), Object(h.jsx)("div", {
                        className: "names-accent-top-right"
                    }), Object(h.jsx)("div", {
                        className: "names-accent-bottom-left"
                    }), Object(h.jsx)("div", {
                        className: "names-accent-bottom-right"
                    }), Object(h.jsx)(E, {
                        wedding: n
                    }), Object(h.jsx)(y, {
                        wedding: n
                    }), Object(h.jsx)(S, {
                        wedding: n
                    })), (d || b || f) && Object(h.jsx)("div", {
                        className: "wedding-info-section"
                    }, Object(h.jsx)("div", {
                        className: "horizontal"
                    }, p && Object(h.jsx)("div", {
                        className: "hashtag"
                    }, Object(h.jsx)("h4", null, "#", p)), Object(h.jsx)("div", {
                        className: "content"
                    }, (b || f) && Object(h.jsx)("div", {
                        className: "location"
                    }, Object(h.jsx)("h4", {
                        className: "in"
                    }, "in"), Object(h.jsx)("h3", null, b && Object(h.jsx)("span", {
                        className: "city"
                    }, b), f && b && Object(h.jsx)("span", {
                        className: "comma"
                    }, ", "), f && Object(h.jsx)("span", {
                        className: "state"
                    }, f))), d && Object(h.jsx)("div", {
                        className: "date"
                    }, Object(h.jsx)("span", null, Object(h.jsx)("h4", {
                        className: "on"
                    }, "on"), Object(h.jsx)("h3", null, Object(h.jsx)("span", {
                        className: "month"
                    }, d.format("MMMM")), Object(h.jsx)("span", {
                        className: "day"
                    }, d.format("D")), Object(h.jsx)("span", {
                        className: "year"
                    }, d.format("YYYY"))))))), Object(h.jsx)("div", {
                        className: "vertical-single"
                    }, Object(h.jsx)("div", {
                        className: "name-1 hidden-xs"
                    }, Object(h.jsx)("div", {
                        className: "initials"
                    }, n.owner_first_name && Object(h.jsx)("span", {
                        className: "initial-1"
                    }, n.owner_first_name[0]), n.owner_first_name && n.owner_last_name && Object(h.jsx)("div", {
                        className: "accent"
                    }), n.owner_last_name && Object(h.jsx)("span", {
                        className: "initial-2"
                    }, n.owner_last_name[0]))), Object(h.jsx)("div", {
                        className: "info-section"
                    }, Object(h.jsx)("div", {
                        className: "content"
                    }, p && Object(h.jsx)("div", {
                        className: "hashtag"
                    }, Object(h.jsx)("h4", null, "#", p)), d && Object(h.jsx)("div", {
                        className: "date-wrapper"
                    }, Object(h.jsx)("h3", {
                        className: "date"
                    }, Object(h.jsx)("div", {
                        className: "month"
                    }, Object(h.jsx)("span", {
                        className: "numeric"
                    }, d.format("M")), Object(h.jsx)("span", {
                        className: "word"
                    }, d.format("MMMM"))), Object(h.jsx)("span", {
                        className: "day"
                    }, d.format("D")), Object(h.jsx)("div", {
                        className: "year"
                    }, Object(h.jsx)("span", {
                        className: "full"
                    }, d.format("YYYY")), Object(h.jsx)("span", {
                        className: "minimal"
                    }, d.format("YY"))))), (b || f) && Object(h.jsx)("h4", {
                        className: "location"
                    }, b && b, f && b && ", ", f && f))), Object(h.jsx)("div", {
                        className: "name-2 hidden-xs"
                    }, Object(h.jsx)("div", {
                        className: "initials"
                    }, n.partner_first_name && Object(h.jsx)("span", {
                        className: "initial-1"
                    }, n.partner_first_name[0]), n.partner_first_name && n.partner_last_name && Object(h.jsx)("div", {
                        className: "accent"
                    }), n.partner_last_name && Object(h.jsx)("span", {
                        className: "initial-2"
                    }, n.partner_last_name[0])))), Object(h.jsx)("div", {
                        className: "vertical-double"
                    }, n.owner_first_name && n.partner_first_name && Object(h.jsx)("div", {
                        className: "wedding-info-column wedding-info-left"
                    }, (b || f) && Object(h.jsx)("h4", {
                        className: "location"
                    }, b && b, f && b && ", ", f && f), Object(h.jsx)("span", {
                        className: "big-initial"
                    }, n.owner_first_name[0]), Object(h.jsx)("h4", {
                        className: "and"
                    }, "and"), Object(h.jsx)("span", {
                        className: "big-initial"
                    }, n.partner_first_name[0]), p && Object(h.jsx)("h4", {
                        className: "hashtag"
                    }, "#", p)), d && Object(h.jsx)("div", {
                        className: "wedding-info-column wedding-info-right"
                    }, Object(h.jsx)("h4", {
                        className: "day-month"
                    }, d.format("dddd")), Object(h.jsx)("span", {
                        className: "big-initial day"
                    }, d.format("M")), Object(h.jsx)("h4", null, "/"), Object(h.jsx)("span", {
                        className: "big-initial month"
                    }, d.format("D")), Object(h.jsx)("h4", null, d.format("YYYY"))))), (c && s && s.length > 0 || !c && a && a.length > 0) && Object(h.jsx)("div", {
                        className: "entity-sections homepage-sections clearfix"
                    }, c && a && s.map((function(e) {
                        return Object(h.jsx)("div", {
                            className: "entity-section homepage-section clearfix",
                            key: e
                        }, Object(h.jsx)("div", {
                            className: "entity-section-title homepage-section-title"
                        }, Object(h.jsx)("h2", {
                            className: "section-title"
                        }, a[e].title), a[e].subtitle && Object(h.jsx)("h4", {
                            className: "section-subtitle"
                        }, a[e].subtitle)), Object(h.jsx)("div", {
                            className: "entity-section-description homepage-section-description"
                        }, Object(h.jsx)("p", null, a[e].description)), Object(h.jsx)("div", {
                            className: "section-accent"
                        }))
                    }
                    )), !c && a && a.map((function(e, t) {
                        return Object(h.jsx)("div", {
                            className: "entity-section homepage-section clearfix",
                            key: t
                        }, Object(h.jsx)("div", {
                            className: "entity-section-title homepage-section-title"
                        }, Object(h.jsx)("h2", {
                            className: "section-title"
                        }, e.title), e.subtitle && Object(h.jsx)("h4", {
                            className: "section-subtitle"
                        }, e.subtitle)), Object(h.jsx)("div", {
                            className: "entity-section-description homepage-section-description-v2"
                        }, Object(h.jsx)("p", null, e.description)), Object(h.jsx)("div", {
                            className: "section-accent"
                        }))
                    }
                    ))), n.owner_first_name && n.partner_first_name && n.enable_seal && Object(h.jsx)(P, {
                        topSeal: !1,
                        wedding: n
                    })), "production" !== window.zola.env ? Object(h.jsx)("span", null, i.footer_image_url && Object(h.jsx)("div", {
                        role: "img",
                        "aria-label": "The Wedding Website of ".concat(n.owner_first_name, " ").concat(n.owner_last_name, " and ").concat(n.partner_first_name, " ").concat(n.partner_last_name),
                        className: "bottom-section",
                        style: m
                    })) : Object(h.jsx)("span", null, i.footer_image_url && Object(h.jsx)("div", {
                        className: "bottom-section",
                        style: m
                    }))))
                }
            }]),
            a
        }(p.Component);
        M.propTypes = {};
        t.default = Object(f.b)((function(e, t) {
            return {
                homepageSections: t.forPreview ? e.website.entities.byId : e.publicWebsite.entities,
                orderedIds: t.forPreview ? e.website.entities.orderedIds : null,
                wedding: t.forPreview ? Object.assign({}, e.wedding.wedding, e.wedding.account) : e.publicWebsite.wedding,
                page: t.forPreview ? t.page : e.publicWebsite.page,
                busy: e.publicWebsite.busy
            }
        }
        ), (function(e) {
            return {
                getHomepageSectionEntities: function() {
                    return e(Object(x.l)("home"))
                },
                unloadEntities: function() {
                    return e(Object(N.l)())
                }
            }
        }
        ))(M)
    },
    899: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return r
        }
        )),
        a.d(t, "m", (function() {
            return o
        }
        )),
        a.d(t, "h", (function() {
            return m
        }
        )),
        a.d(t, "j", (function() {
            return j
        }
        )),
        a.d(t, "e", (function() {
            return d
        }
        )),
        a.d(t, "f", (function() {
            return p
        }
        )),
        a.d(t, "d", (function() {
            return b
        }
        )),
        a.d(t, "l", (function() {
            return u
        }
        )),
        a.d(t, "b", (function() {
            return f
        }
        )),
        a.d(t, "k", (function() {
            return _
        }
        )),
        a.d(t, "i", (function() {
            return O
        }
        )),
        a.d(t, "g", (function() {
            return N
        }
        )),
        a.d(t, "c", (function() {
            return h
        }
        ));
        var s = a(9)
          , n = a.n(s)
          , i = a(14)
          , c = a(52)
          , r = {
            HOTEL: "Hotel",
            HOME_RENTAL: "House or Rental",
            SHUTTLE: "Shuttle",
            FLIGHT: "Flight",
            CAR_RENTAL: "Rental Car",
            TRAIN: "Train",
            NOTE: "Travel Note"
        }
          , l = {
            POI: "Recommendation",
            RSVP: "Event",
            WEDDING_PARTY: "Wedding Party Member",
            FAQ: "FAQ",
            TRAVEL: "Travel",
            HOME: "Story",
            PHOTO: "Photo",
            EVENT: "Event",
            REGISTRY: "Registry"
        };
        function o() {
            return {
                type: c.k
            }
        }
        function m(e) {
            return {
                type: c.e,
                payload: {
                    entity: e
                }
            }
        }
        function j(e) {
            return {
                type: c.j,
                payload: {
                    entity: e
                }
            }
        }
        function d() {
            return {
                type: c.b
            }
        }
        function p(e, t) {
            return {
                type: c.a,
                payload: {
                    entities: e[t],
                    mealOptions: e.meal_options
                }
            }
        }
        function b(e) {
            return {
                type: c.l,
                payload: {
                    id: e.id
                }
            }
        }
        function u() {
            return {
                type: c.c
            }
        }
        function f() {
            return {
                type: c.d
            }
        }
        function _() {
            return {
                type: c.s
            }
        }
        function O(e) {
            return {
                type: c.r,
                payload: e
            }
        }
        function x() {
            return function(e, t) {
                var a = {
                    entityIds: t().website.entities.orderedIds,
                    pageId: t().website.pages.activePage.id
                };
                return n()("/web-api/v1/cms/page/pages/list/reorder", {
                    credentials: "same-origin",
                    headers: {
                        "Content-type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(a)
                }).then((function(e) {
                    return e.json()
                }
                )).then((function(t) {
                    return e((a = t,
                    {
                        type: c.i,
                        payload: {
                            entities: a
                        }
                    }));
                    var a
                }
                )).catch()
            }
        }
        function N(e, t) {
            return function(a) {
                a({
                    type: c.h,
                    payload: {
                        oldIndex: e,
                        newIndex: t
                    }
                }),
                a(x())
            }
        }
        function h(e) {
            return function(t, a) {
                t({
                    type: c.f,
                    payload: {
                        id: e.id
                    }
                });
                var s, o = a().website.pages.activePage, m = {
                    entityId: e.id,
                    pageId: o.id
                };
                return s = "TRAVEL" === o.type ? r[e.type] : l[o.type],
                n()("/web-api/v2/cms/entity/delete", {
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(m)
                }).then((function() {
                    return t((a = e.id,
                    {
                        type: c.g,
                        payload: {
                            id: a
                        }
                    }));
                    var a
                }
                )).then((function() {
                    return t(i.toastsActions.positive({
                        headline: "".concat(s, " Removed")
                    }))
                }
                ))
            }
        }
    }
}]);
//# sourceMappingURL=109.5a7698a1.chunk.js.map

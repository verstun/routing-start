function initElems() {
    showNavMobile();
    showSubNavDesktop();
    initNewsletterSubscribeForm();
    initHomeSlider();
    filterGlossary();
    filterAsideListing();
    loadElemList();
    addFisherman();
    initMap();
    initContactForm();
    initProvincesLists();
    openLifeCycleSections();
    showAsideNav();
    showRecommendedRivers();
    initLocationsMap();
    showWeatherForecast();
    showMoonPhases();
    initMicrositeGallery();
    initFancybox();
    switchContestRulesTab();
    showRSubSectors();
    showAnswer();
    initLodgeSlider();
    toggleFilters();
    toggleHelp();
    highlightRegion();
    initRightSideMap();
    changeClientHistoryTab();
    changeDrawsTab();
    changeRegionRiver()
}

function scrollEvents() {
    stickMenu()
}

function resizeElems() {
    var n = $(window).scrollTop();
    scrollEvents(n);
    scrollEvents(n);
    setFloatingBoxesHeight()
}

function resizeForViewChange() {
    changeHomeSlidesImageFormat();
    changeBackgroundImageFormat();
    initRecommendedFliesSlider()
}

function beforeFix() {
    changeNbColsFooterNav()
}

function afterEqualize() {
    var n = $(window).height(),
        t = $(window).width();
    setPageMinHeight(n, t)
}

function startPage() {
    addDatePlaceholders();
    addLinkToBlock();
    addMobileClass();
    openOffsiteLinks();
    addCache();
    addPageEvents();
    initElems();
    resizeEverything();
    resizeForViewChange();
    $(window).resize(function() {
        resizeEverything()
    });
    $(document).on("viewchange", function() {
        resizeForViewChange()
    });
    $("img").load(function() {
        resizeEverything()
    });
    setTimeout(function() {
        resizeEverything()
    }, 1e3);
    scrollEvents();
    $(window).scroll(function() {
        scrollEvents($(window).scrollTop())
    });
    window.location.toString().indexOf("#") !== -1 && scrollToContent();
    scrollToContentFromClick()
}

function addCache() {
    $.ajaxSetup({
        cache: !0
    })
}

function openOffsiteLinks() {
    $('a[href^="http"]').each(function() {
        this.href.indexOf(window.location.host) === -1 && ($(this).attr("target", "_blank"), $(this).addClass("external-link"))
    })
}

function addLinkToBlock() {
    $(".block-link").click(function(n) {
        n.preventDefault();
        var i = $(this).find(".block-link__link"),
            t = i.length ? i.attr("href") : $(this).find("a").attr("href");
        t.indexOf("http") !== -1 && t.indexOf(window.location.host) === -1 ? window.open(t) : window.location = t
    });
    $(".block-link a").click(function(n) {
        n.stopPropagation()
    })
}

function resizeEverything() {
    var n = $(window).height(),
        t = $(window).width();
    beforeFix();
    fixHeight();
    fixWidth();
    addEqualizeData();
    resizeElems(t, n);
    equalizeElements(n, t);
    afterEqualize();
    $(".bottom-to-top").each(function() {
        wrapUp($(this))
    });
    makeTwoCols()
}

function addEqualizeData() {
    $("[data-same-height-elems]").each(function() {
        if($(this).attr("data-same-height-elems") !== "always-true") {
            var n = $(this).children("[data-same-height]"),
                t = $(this);
            n.length || (n = $(this).find("[data-same-height]"));
            $(this).attr("data-same-height-elems", "false");
            n.each(function() {
                $(this).css("display") !== "none" && ($(this).css("float") !== "none" || $(this).css("position") === "absolute") && t.attr("data-same-height-elems", "true")
            })
        }
    });
    $("[data-same-width-elems]").each(function() {
        if($(this).attr("data-same-width-elems") !== "always-true") {
            var n = $(this).children("[data-same-width]");
            n.length || (n = $(this).find("[data-same-width]"));
            n.first().css("display") === "inline-block" || n.first().css("float") !== "none" || n.first().parent().css("display") === "inline-block" || n.first().parent().css("float") !== "none" ? $(this).attr("data-same-width-elems", "true") : $(this).attr("data-same-width-elems", "false")
        }
    })
}

function equalizeElements(n, t) {
    $($("[data-same-height-elems]").get().reverse()).each(function() {
        var t = 0,
            r = !1,
            i = $(this).children("[data-same-height]");
        i.length || (i = $(this).find("[data-same-height]"));
        i.each(function() {
            if($(this).attr("data-same-height") !== "no-auto") {
                var n = this.style;
                n.removeAttribute ? n.removeAttribute("height") : n.removeProperty("height")
            }
        });
        ($(this).attr("data-same-height-elems") === "true" || $(this).attr("data-same-height-elems") === "always-true" || $(this).attr("data-same-height-elems") === !0) && (i.each(function() {
            var i = $(this).outerHeight();
            $(this).attr("data-same-height") !== "active" && ($(this).css("display") !== "none" && i > t && !r && (t = i), $(this).attr("data-same-height") === "full" && n > t && (t = n), $(this).attr("data-same-height") === "main" && (t = i, r = !0))
        }), i.css("height", t))
    });
    $($("[data-same-width-elems]").get().reverse()).each(function() {
        var n = 0,
            r = !1,
            i = $(this).children("[data-same-width]");
        i.length || (i = $(this).find("[data-same-width]"));
        i.each(function() {
            if($(this).attr("data-same-width") !== "no-auto") {
                var n = this.style;
                n.removeAttribute ? n.removeAttribute("width") : n.removeProperty("width")
            }
        });
        ($(this).attr("data-same-width-elems") === "true" || $(this).attr("data-same-width-elems") === "always-true" || $(this).attr("data-same-width-elems") === !0) && (i.each(function() {
            var i = $(this).outerWidth();
            $(this).attr("data-same-width") !== "active" && ($(this).css("display") !== "none" && i > n && !r && (n = i), $(this).attr("data-same-width") === "full" && t > n && (n = t), $(this).attr("data-same-width") === "main" && (n = i, r = !0))
        }), i.css("width", n + 1))
    })
}

function fixHeight() {
    $(".fixed-height").each(function() {
        $(this).css("height", $(this).data("height"));
        $(this).css("height", $(this).outerHeight())
    })
}

function fixWidth() {
    $(".fixed-width").each(function() {
        var n = $(this).children(),
            t = this.style,
            i = 0;
        t.removeAttribute ? t.removeAttribute("width") : t.removeProperty("width");
        n.length && n.first().css("display") !== "none" && (n.first().css("float") !== "none" || n.first().css("display") !== "block") ? n.each(function() {
            $(this).css("position") !== "absolute" && $(this).css("display") !== "none" && (i += $(this).outerWidth(!0) + 1)
        }) : i = Math.floor($(this).outerWidth() - 2);
        $(this).css("width", Math.floor(i) - 2)
    })
}

function noMaxOrZero(n, t, i) {
    return n = n + i, n <= 0 && (n = t), n >= t + 1 && (n = 1), n
}

function noMaxOrBelowZero(n, t, i) {
    return n = n + i, n < 0 && (n = t), n > t && (n = 0), n
}

function addPageEvents() {
    function n(n) {
        var i = "visible",
            r = "hidden",
            u = {
                focus: i,
                focusin: i,
                pageshow: i,
                blur: r,
                focusout: r,
                pagehide: r
            };
        n = n || window.event;
        n.type in u ? $("#page-content").attr("class", u[n.type]) : $("#page-content").attr("class", this[t] ? "hidden" : "visible")
    }
    var t = "hidden";
    t in document ? document.addEventListener("visibilitychange", n) : (t = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", n) : (t = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", n) : (t = "msHidden") in document ? document.addEventListener("msvisibilitychange", n) : "onfocusin" in document ? document.onfocusin = document.onfocusout = n : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = n;
    n({
        type: document.visibilityState == "visible" ? "focus" : "blur"
    })
}

function scrollToContent() {
    var n = /#[\w\d-]*/g.exec(window.location),
        t, i;
    n && n[0].length > 1 && (t = $(n[0]), t && (i = t.offset().top, $("html, body").animate({
        scrollTop: i - 100
    }, 300)))
}

function scrollToContentFromClick() {
    $("a").click(function(n) {
        var t = $(this).attr("href"),
            u;
        if(t && t.indexOf("#") !== -1) {
            var i = t.substring(t.indexOf("#")),
                r = i.length > 1 ? $(i) : null,
                f = parseInt($("body").css("padding-bottom")) == 1 ? 300 : 100;
            r && (n.preventDefault(), u = r.offset().top, $("html, body").animate({
                scrollTop: u - f
            }, 300))
        }
    })
}

function addMobileClass() {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? $("html").addClass("mobile") : $("html").addClass("non-mobile")
}

function makeTwoCols() {
    $(".first-part, .second-part, .third-part").children().unwrap();
    $(".first-part, .second-part, .third-part").remove();
    $(".separate").each(function() {
        var u = $(this).children().length,
            f = $(this).attr("data-col-nb") ? parseInt($(this).attr("data-col-nb")) : 2,
            t = "",
            i = "",
            e = "",
            n = 1,
            r = Math.ceil(u / 2),
            o;
        f === 2 && ($(this).children().each(function() {
            n <= r ? t += $(this).prop("outerHTML") : i += $(this).prop("outerHTML");
            n++
        }), $(this).html('<div class="first-part">' + t + '<\/div><div class="second-part">' + i + "<\/div>"));
        f === 3 && (r = Math.ceil(u / 3), o = r * 2, $(this).children().each(function() {
            n <= r ? t += $(this).prop("outerHTML") : n <= o ? i += $(this).prop("outerHTML") : e += $(this).prop("outerHTML");
            n++
        }), $(this).html('<div class="first-part">' + t + '<\/div><div class="second-part">' + i + '<\/div><div class="third-part">' + e + "<\/div>"))
    })
}

function getUrlParameter(n) {
    var t = function(n) {
        var r, t, i;
        if(n == "") return {};
        for(r = {}, t = 0; t < n.length; ++t) i = n[t].split("=", 2), r[i[0]] = i.length == 1 ? "" : decodeURIComponent(i[1].replace(/\+/g, " "));
        return r
    }(window.location.search.substr(1).split("&"));
    return t[n]
}

function updateQueryString(n, t, i) {
    var u, r, f;
    return i || (i = window.location.href), u = new RegExp("([?&])" + n + "=.*?(&|#|$)(.*)", "gi"), u.test(i) ? typeof t != "undefined" && t !== null ? i.replace(u, "$1" + n + "=" + t + "$2$3") : (r = i.split("#"), i = r[0].replace(u, "$1$3").replace(/(&|\?)$/, ""), typeof r[1] != "undefined" && r[1] !== null && (i += "#" + r[1]), i) : typeof t != "undefined" && t !== null ? (f = i.indexOf("?") !== -1 ? "&" : "?", r = i.split("#"), i = r[0] + f + n + "=" + t, typeof r[1] != "undefined" && r[1] !== null && (i += "#" + r[1]), i) : i
}

function wrapUp(n) {
    var r, u, i, t;
    if(n) {
        for(r = 0, u = n.text().replace("<br/>", "").split(" "), n.text(""), i = u.reverse(), t = 0; t < i.length; t++) i[t] += " ", n.text(n.text() + i[t]), r != n.height() && (i.splice(t, 0, "<br/>"), t++), r = n.height();
        n.html(i.reverse().join(""))
    }
}

function decodeHtmlEntity(n) {
    return n.replace(/&#(\d+);/g, function(n, t) {
        return String.fromCharCode(t)
    })
}

function getNewSrc(n) {
    return Anzeixer.isPhone() ? n.data("small") : Anzeixer.isTablet() ? n.data("medium") : n.data("large")
}

function addDatePlaceholders() {}

function setWeatherIcon(n) {
    var t = "";
    switch(n) {
        case "0":
            t = '<i class="wi wi-tornado"><\/i>';
            break;
        case "1":
            t = '<i class="wi wi-storm-showers"><\/i>';
            break;
        case "2":
            t = '<i class="wi wi-tornado"><\/i>';
            break;
        case "3":
            t = '<i class="wi wi-thunderstorm"><\/i>';
            break;
        case "4":
            t = '<i class="wi wi-thunderstorm"><\/i>';
            break;
        case "5":
            t = '<i class="wi wi-snow"><\/i>';
            break;
        case "6":
            t = '<i class="wi wi-rain-mix"><\/i>';
            break;
        case "7":
            t = '<i class="wi wi-rain-mix"><\/i>';
            break;
        case "8":
            t = '<i class="wi wi-sprinkle"><\/i>';
            break;
        case "9":
            t = '<i class="wi wi-sprinkle"><\/i>';
            break;
        case "10":
            t = '<i class="wi wi-hail"><\/i>';
            break;
        case "11":
            t = '<i class="wi wi-showers"><\/i>';
            break;
        case "12":
            t = '<i class="wi wi-showers"><\/i>';
            break;
        case "13":
            t = '<i class="wi wi-snow"><\/i>';
            break;
        case "14":
            t = '<i class="wi wi-storm-showers"><\/i>';
            break;
        case "15":
            t = '<i class="wi wi-snow"><\/i>';
            break;
        case "16":
            t = '<i class="wi wi-snow"><\/i>';
            break;
        case "17":
            t = '<i class="wi wi-hail"><\/i>';
            break;
        case "18":
            t = '<i class="wi wi-hail"><\/i>';
            break;
        case "19":
            t = '<i class="wi wi-cloudy-gusts"><\/i>';
            break;
        case "20":
            t = '<i class="wi wi-fog"><\/i>';
            break;
        case "21":
            t = '<i class="wi wi-fog"><\/i>';
            break;
        case "22":
            t = '<i class="wi wi-fog"><\/i>';
            break;
        case "23":
            t = '<i class="wi wi-cloudy-gusts"><\/i>';
            break;
        case "24":
            t = '<i class="wi wi-cloudy-windy"><\/i>';
            break;
        case "25":
            t = '<i class="wi wi-thermometer"><\/i>';
            break;
        case "26":
            t = '<i class="wi wi-cloudy"><\/i>';
            break;
        case "27":
            t = '<i class="wi wi-night-cloudy"><\/i>';
            break;
        case "28":
            t = '<i class="wi wi-day-cloudy"><\/i>';
            break;
        case "29":
            t = '<i class="wi wi-night-cloudy"><\/i>';
            break;
        case "30":
            t = '<i class="wi wi-day-cloudy"><\/i>';
            break;
        case "31":
            t = '<i class="wi wi-night-clear"><\/i>';
            break;
        case "32":
            t = '<i class="wi wi-day-sunny"><\/i>';
            break;
        case "33":
            t = '<i class="wi wi-night-clear"><\/i>';
            break;
        case "34":
            t = '<i class="wi wi-day-sunny-overcast"><\/i>';
            break;
        case "35":
            t = '<i class="wi wi-hail"><\/i>';
            break;
        case "36":
            t = '<i class="wi wi-day-sunny"><\/i>';
            break;
        case "37":
            t = '<i class="wi wi-thunderstorm"><\/i>';
            break;
        case "38":
            t = '<i class="wi wi-thunderstorm"><\/i>';
            break;
        case "39":
            t = '<i class="wi wi-thunderstorm"><\/i>';
            break;
        case "40":
            t = '<i class="wi wi-storm-showers"><\/i>';
            break;
        case "41":
            t = '<i class="wi wi-snow"><\/i>';
            break;
        case "42":
            t = '<i class="wi wi-snow"><\/i>';
            break;
        case "43":
            t = '<i class="wi wi-snow"><\/i>';
            break;
        case "44":
            t = '<i class="wi wi-cloudy"><\/i>';
            break;
        case "45":
            t = '<i class="wi wi-lightning"><\/i>';
            break;
        case "46":
            t = '<i class="wi wi-snow"><\/i>';
            break;
        case "47":
            t = '<i class="wi wi-thunderstorm"><\/i>';
            break;
        case "3200":
            t = '<i class="wi wi-cloud"><\/i>';
            break;
        default:
            t = '<i class="wi wi-cloud"><\/i>'
    }
    return t
}

function replaceAll(n, t, i) {
    return i.replace(new RegExp(n, "g"), t)
}
var Anzeixer, $jscomp;
! function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, r) {
            var f, u = this;
            u.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: n(t),
                appendDots: n(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<\/button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<\/button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(n, t) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "<\/button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
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
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            };
            u.initials = {
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
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            };
            n.extend(u, u.initials);
            u.activeBreakpoint = null;
            u.animType = null;
            u.animProp = null;
            u.breakpoints = [];
            u.breakpointSettings = [];
            u.cssTransitions = !1;
            u.hidden = "hidden";
            u.paused = !1;
            u.positionProp = null;
            u.respondTo = null;
            u.rowCount = 1;
            u.shouldClick = !0;
            u.$slider = n(t);
            u.$slidesCache = null;
            u.transformType = null;
            u.transitionType = null;
            u.visibilityChange = "visibilitychange";
            u.windowWidth = 0;
            u.windowTimer = null;
            f = n(t).data("slick") || {};
            u.options = n.extend({}, u.defaults, f, r);
            u.currentSlide = u.options.initialSlide;
            u.originalSettings = u.options;
            "undefined" != typeof document.mozHidden ? (u.hidden = "mozHidden", u.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (u.hidden = "webkitHidden", u.visibilityChange = "webkitvisibilitychange");
            u.autoPlay = n.proxy(u.autoPlay, u);
            u.autoPlayClear = n.proxy(u.autoPlayClear, u);
            u.changeSlide = n.proxy(u.changeSlide, u);
            u.clickHandler = n.proxy(u.clickHandler, u);
            u.selectHandler = n.proxy(u.selectHandler, u);
            u.setPosition = n.proxy(u.setPosition, u);
            u.swipeHandler = n.proxy(u.swipeHandler, u);
            u.dragHandler = n.proxy(u.dragHandler, u);
            u.keyHandler = n.proxy(u.keyHandler, u);
            u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
            u.instanceUid = i++;
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            u.registerBreakpoints();
            u.init(!0);
            u.checkResponsive(!0)
        }
        var i = 0;
        return t
    }();
    t.prototype.addSlide = t.prototype.slickAdd = function(t, i, r) {
        var u = this;
        if("boolean" == typeof i) r = i, i = null;
        else if(0 > i || i >= u.slideCount) return !1;
        u.unload();
        "number" == typeof i ? 0 === i && 0 === u.$slides.length ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : r === !0 ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack);
        u.$slides = u.$slideTrack.children(this.options.slide);
        u.$slideTrack.children(this.options.slide).detach();
        u.$slideTrack.append(u.$slides);
        u.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t)
        });
        u.$slidesCache = u.$slides;
        u.reinit()
    };
    t.prototype.animateHeight = function() {
        var n = this,
            t;
        1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.animate({
            height: t
        }, n.options.speed))
    };
    t.prototype.animateSlide = function(t, i) {
        var u = {},
            r = this;
        r.animateHeight();
        r.options.rtl === !0 && r.options.vertical === !1 && (t = -t);
        r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
            left: t
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: t
        }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), n({
            animStart: r.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(n) {
                n = Math.ceil(n);
                r.options.vertical === !1 ? (u[r.animType] = "translate(" + n + "px, 0px)", r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)", r.$slideTrack.css(u))
            },
            complete: function() {
                i && i.call()
            }
        })) : (r.applyTransition(), t = Math.ceil(t), u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(u), i && setTimeout(function() {
            r.disableTransition();
            i.call()
        }, r.options.speed))
    };
    t.prototype.asNavFor = function(t) {
        var r = this,
            i = r.options.asNavFor;
        i && null !== i && (i = n(i).not(r.$slider));
        null !== i && "object" == typeof i && i.each(function() {
            var i = n(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    };
    t.prototype.applyTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase;
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.autoPlay = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer);
        n.slideCount > n.options.slidesToShow && n.paused !== !0 && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
    };
    t.prototype.autoPlayClear = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer)
    };
    t.prototype.autoPlayIterator = function() {
        var n = this;
        n.options.infinite === !1 ? 1 === n.direction ? (n.currentSlide + 1 === n.slideCount - 1 && (n.direction = 0), n.slideHandler(n.currentSlide + n.options.slidesToScroll)) : (n.currentSlide - 1 == 0 && (n.direction = 1), n.slideHandler(n.currentSlide - n.options.slidesToScroll)) : n.slideHandler(n.currentSlide + n.options.slidesToScroll)
    };
    t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = n(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = n(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    };
    t.prototype.buildDots = function() {
        var i, r, t = this;
        if(t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
            for(r = '<ul class="' + t.options.dotsClass + '">', i = 0; i <= t.getDotCount(); i += 1) r += "<li>" + t.options.customPaging.call(this, t, i) + "<\/li>";
            r += "<\/ul>";
            t.$dots = n(r).appendTo(t.options.appendDots);
            t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    };
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t).data("originalStyling", n(i).attr("style") || "")
        });
        t.$slider.addClass("slick-slider");
        t.$slideTrack = 0 === t.slideCount ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent();
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        t.$slideTrack.css("opacity", 0);
        (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1);
        n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
        t.setupInfinite();
        t.buildArrows();
        t.buildDots();
        t.updateDots();
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0);
        t.options.draggable === !0 && t.$list.addClass("draggable")
    };
    t.prototype.buildRows = function() {
        var t, i, r, f, c, u, e, n = this,
            o, s, h;
        if(f = document.createDocumentFragment(), u = n.$slider.children(), n.options.rows > 1) {
            for(e = n.options.slidesPerRow * n.options.rows, c = Math.ceil(u.length / e), t = 0; c > t; t++) {
                for(o = document.createElement("div"), i = 0; i < n.options.rows; i++) {
                    for(s = document.createElement("div"), r = 0; r < n.options.slidesPerRow; r++) h = t * e + (i * n.options.slidesPerRow + r), u.get(h) && s.appendChild(u.get(h));
                    o.appendChild(s)
                }
                f.appendChild(o)
            }
            n.$slider.html(f);
            n.$slider.children().children().children().css({
                width: 100 / n.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    };
    t.prototype.checkResponsive = function(t, i) {
        var f, u, e, r = this,
            o = !1,
            s = r.$slider.width(),
            h = window.innerWidth || n(window).width();
        if("window" === r.respondTo ? e = h : "slider" === r.respondTo ? e = s : "min" === r.respondTo && (e = Math.min(h, s)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            u = null;
            for(f in r.breakpoints) r.breakpoints.hasOwnProperty(f) && (r.originalSettings.mobileFirst === !1 ? e < r.breakpoints[f] && (u = r.breakpoints[f]) : e > r.breakpoints[f] && (u = r.breakpoints[f]));
            null !== u ? null !== r.activeBreakpoint ? (u !== r.activeBreakpoint || i) && (r.activeBreakpoint = u, "unslick" === r.breakpointSettings[u] ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : (r.activeBreakpoint = u, "unslick" === r.breakpointSettings[u] ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), o = u);
            t || o === !1 || r.$slider.trigger("breakpoint", [r, o])
        }
    };
    t.prototype.changeSlide = function(t, i) {
        var f, e, o, r = this,
            u = n(t.target),
            s;
        switch(u.is("a") && t.preventDefault(), u.is("li") || (u = u.closest("li")), o = r.slideCount % r.options.slidesToScroll != 0, f = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case "previous":
                e = 0 === f ? r.options.slidesToScroll : r.options.slidesToShow - f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - e, !1, i);
                break;
            case "next":
                e = 0 === f ? r.options.slidesToScroll : f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + e, !1, i);
                break;
            case "index":
                s = 0 === t.data.index ? 0 : t.data.index || u.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(s), !1, i);
                u.children().trigger("focus");
                break;
            default:
                return
        }
    };
    t.prototype.checkNavigable = function(n) {
        var t, i, u = this,
            r;
        if(t = u.getNavigableIndexes(), i = 0, n > t[t.length - 1]) n = t[t.length - 1];
        else
            for(r in t) {
                if(n < t[r]) {
                    n = i;
                    break
                }
                i = t[r]
            }
        return n
    };
    t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (n("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).off("mouseenter.slick", n.proxy(t.setPaused, t, !0)).off("mouseleave.slick", n.proxy(t.setPaused, t, !1)));
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide));
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler);
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler);
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler);
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler);
        t.$list.off("click.slick", t.clickHandler);
        n(document).off(t.visibilityChange, t.visibility);
        t.$list.off("mouseenter.slick", n.proxy(t.setPaused, t, !0));
        t.$list.off("mouseleave.slick", n.proxy(t.setPaused, t, !1));
        t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().off("click.slick", t.selectHandler);
        n(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange);
        n(window).off("resize.slick.slick-" + t.instanceUid, t.resize);
        n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault);
        n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    };
    t.prototype.cleanUpRows = function() {
        var n, t = this;
        t.options.rows > 1 && (n = t.$slides.children().children(), n.removeAttr("style"), t.$slider.html(n))
    };
    t.prototype.clickHandler = function(n) {
        var t = this;
        t.shouldClick === !1 && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault())
    };
    t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear();
        i.touchObject = {};
        i.cleanUpEvents();
        n(".slick-cloned", i.$slider).detach();
        i.$dots && i.$dots.remove();
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove());
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove());
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            n(this).attr("style", n(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides));
        i.cleanUpRows();
        i.$slider.removeClass("slick-slider");
        i.$slider.removeClass("slick-initialized");
        i.unslicked = !0;
        t || i.$slider.trigger("destroy", [i])
    };
    t.prototype.disableTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = "";
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.fadeSlide = function(n, t) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(n).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(n).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(n), i.$slides.eq(n).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(n);
            t.call()
        }, i.options.speed))
    };
    t.prototype.fadeSlideOut = function(n) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(n).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(n), t.$slides.eq(n).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    };
    t.prototype.filterSlides = t.prototype.slickFilter = function(n) {
        var t = this;
        null !== n && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit())
    };
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var n = this;
        return n.currentSlide
    };
    t.prototype.getDotCount = function() {
        var n = this,
            t = 0,
            i = 0,
            r = 0;
        if(n.options.infinite === !0)
            for(; t < n.slideCount;) ++r, t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        else if(n.options.centerMode === !0) r = n.slideCount;
        else
            for(; t < n.slideCount;) ++r, t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return r - 1
    };
    t.prototype.getLeft = function(n) {
        var f, r, i, t = this,
            u = 0;
        return t.slideOffset = 0, r = t.$slides.first().outerHeight(!0), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, u = r * t.options.slidesToShow * -1), t.slideCount % t.options.slidesToScroll != 0 && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth * -1, u = (t.options.slidesToShow - (n - t.slideCount)) * r * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, u = t.slideCount % t.options.slidesToScroll * r * -1))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth, u = (n + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, u = 0), t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), f = t.options.vertical === !1 ? n * t.slideWidth * -1 + t.slideOffset : n * r * -1 + u, t.options.variableWidth === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow), f = t.options.rtl === !0 ? i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t.options.centerMode === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1), f = t.options.rtl === !0 ? i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, f += (t.$list.width() - i.outerWidth()) / 2)), f
    };
    t.prototype.getOption = t.prototype.slickGetOption = function(n) {
        var t = this;
        return t.options[n]
    };
    t.prototype.getNavigableIndexes = function() {
        var i, n = this,
            t = 0,
            r = 0,
            u = [];
        for(n.options.infinite === !1 ? i = n.slideCount : (t = -1 * n.options.slidesToScroll, r = -1 * n.options.slidesToScroll, i = 2 * n.slideCount); i > t;) u.push(t), t = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return u
    };
    t.prototype.getSlick = function() {
        return this
    };
    t.prototype.getSlideCount = function() {
        var u, i, r, t = this;
        return r = t.options.centerMode === !0 ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0, t.options.swipeToSlide === !0 ? (t.$slideTrack.find(".slick-slide").each(function(u, f) {
            if(f.offsetLeft - r + n(f).outerWidth() / 2 > -1 * t.swipeLeft) return(i = f, !1)
        }), u = Math.abs(n(i).attr("data-slick-index") - t.currentSlide) || 1) : t.options.slidesToScroll
    };
    t.prototype.goTo = t.prototype.slickGoTo = function(n, t) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(n)
            }
        }, t)
    };
    t.prototype.init = function(t) {
        var i = this;
        n(i.$slider).hasClass("slick-initialized") || (n(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots());
        t && i.$slider.trigger("init", [i]);
        i.options.accessibility === !0 && i.initADA()
    };
    t.prototype.initArrowEvents = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.on("click.slick", {
            message: "previous"
        }, n.changeSlide), n.$nextArrow.on("click.slick", {
            message: "next"
        }, n.changeSlide))
    };
    t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && n("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide);
        t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).on("mouseenter.slick", n.proxy(t.setPaused, t, !0)).on("mouseleave.slick", n.proxy(t.setPaused, t, !1))
    };
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents();
        t.initDotEvents();
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        n(document).on(t.visibilityChange, n.proxy(t.visibility, t));
        t.$list.on("mouseenter.slick", n.proxy(t.setPaused, t, !0));
        t.$list.on("mouseleave.slick", n.proxy(t.setPaused, t, !1));
        t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, n.proxy(t.orientationChange, t));
        n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t));
        n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault);
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    };
    t.prototype.initUI = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show();
        n.options.autoplay === !0 && n.autoPlay()
    };
    t.prototype.keyHandler = function(n) {
        var t = this;
        n.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === n.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === n.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        }))
    };
    t.prototype.lazyLoad = function() {
        function f(t) {
            n("img[data-lazy]", t).each(function() {
                var t = n(this),
                    i = n(this).attr("data-lazy"),
                    r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                };
                r.src = i
            })
        }
        var e, r, i, u, t = this;
        t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), u = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), u = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, u = i + t.options.slidesToShow, t.options.fade === !0 && (i > 0 && i--, u <= t.slideCount && u++));
        e = t.$slider.find(".slick-slide").slice(i, u);
        f(e);
        t.slideCount <= t.options.slidesToShow ? (r = t.$slider.find(".slick-slide"), f(r)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), f(r)) : 0 === t.currentSlide && (r = t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow), f(r))
    };
    t.prototype.loadSlider = function() {
        var n = this;
        n.setPosition();
        n.$slideTrack.css({
            opacity: 1
        });
        n.$slider.removeClass("slick-loading");
        n.initUI();
        "progressive" === n.options.lazyLoad && n.progressiveLazyLoad()
    };
    t.prototype.next = t.prototype.slickNext = function() {
        var n = this;
        n.changeSlide({
            data: {
                message: "next"
            }
        })
    };
    t.prototype.orientationChange = function() {
        var n = this;
        n.checkResponsive();
        n.setPosition()
    };
    t.prototype.pause = t.prototype.slickPause = function() {
        var n = this;
        n.autoPlayClear();
        n.paused = !0
    };
    t.prototype.play = t.prototype.slickPlay = function() {
        var n = this;
        n.paused = !1;
        n.autoPlay()
    };
    t.prototype.postSlide = function(n) {
        var t = this;
        t.$slider.trigger("afterChange", [t, n]);
        t.animating = !1;
        t.setPosition();
        t.swipeLeft = null;
        t.options.autoplay === !0 && t.paused === !1 && t.autoPlay();
        t.options.accessibility === !0 && t.initADA()
    };
    t.prototype.prev = t.prototype.slickPrev = function() {
        var n = this;
        n.changeSlide({
            data: {
                message: "previous"
            }
        })
    };
    t.prototype.preventDefault = function(n) {
        n.preventDefault()
    };
    t.prototype.progressiveLazyLoad = function() {
        var r, t, i = this;
        r = n("img[data-lazy]", i.$slider).length;
        r > 0 && (t = n("img[data-lazy]", i.$slider).first(), t.attr("src", null), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad();
            i.options.adaptiveHeight === !0 && i.setPosition()
        }).error(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad()
        }))
    };
    t.prototype.refresh = function(t) {
        var r, u, i = this;
        u = i.slideCount - i.options.slidesToShow;
        i.options.infinite || (i.slideCount <= i.options.slidesToShow ? i.currentSlide = 0 : i.currentSlide > u && (i.currentSlide = u));
        r = i.currentSlide;
        i.destroy(!0);
        n.extend(i, i.initials, {
            currentSlide: r
        });
        i.init();
        t || i.changeSlide({
            data: {
                message: "index",
                index: r
            }
        }, !1)
    };
    t.prototype.registerBreakpoints = function() {
        var u, f, i, t = this,
            r = t.options.responsive || null;
        if("array" === n.type(r) && r.length) {
            t.respondTo = t.options.respondTo || "window";
            for(u in r)
                if(i = t.breakpoints.length - 1, f = r[u].breakpoint, r.hasOwnProperty(u)) {
                    for(; i >= 0;) t.breakpoints[i] && t.breakpoints[i] === f && t.breakpoints.splice(i, 1), i--;
                    t.breakpoints.push(f);
                    t.breakpointSettings[f] = r[u].settings
                }
            t.breakpoints.sort(function(n, i) {
                return t.options.mobileFirst ? n - i : i - n
            })
        }
    };
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll);
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0);
        t.registerBreakpoints();
        t.setProps();
        t.setupInfinite();
        t.buildArrows();
        t.updateArrows();
        t.initArrowEvents();
        t.buildDots();
        t.updateDots();
        t.initDotEvents();
        t.checkResponsive(!1, !0);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        t.setSlideClasses(0);
        t.setPosition();
        t.$slider.trigger("reInit", [t]);
        t.options.autoplay === !0 && t.focusHandler()
    };
    t.prototype.resize = function() {
        var t = this;
        n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = n(window).width();
            t.checkResponsive();
            t.unslicked || t.setPosition()
        }, 50))
    };
    t.prototype.removeSlide = t.prototype.slickRemove = function(n, t, i) {
        var r = this;
        return "boolean" == typeof n ? (t = n, n = t === !0 ? 0 : r.slideCount - 1) : n = t === !0 ? --n : n, r.slideCount < 1 || 0 > n || n > r.slideCount - 1 ? !1 : (r.unload(), i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, void r.reinit())
    };
    t.prototype.setCSS = function(n) {
        var r, u, t = this,
            i = {};
        t.options.rtl === !0 && (n = -n);
        r = "left" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        u = "top" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        i[t.positionProp] = n;
        t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {}, t.cssTransitions === !1 ? (i[t.animType] = "translate(" + r + ", " + u + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)", t.$slideTrack.css(i)))
    };
    t.prototype.setDimensions = function() {
        var n = this,
            t;
        n.options.vertical === !1 ? n.options.centerMode === !0 && n.$list.css({
            padding: "0px " + n.options.centerPadding
        }) : (n.$list.height(n.$slides.first().outerHeight(!0) * n.options.slidesToShow), n.options.centerMode === !0 && n.$list.css({
            padding: n.options.centerPadding + " 0px"
        }));
        n.listWidth = n.$list.width();
        n.listHeight = n.$list.height();
        n.options.vertical === !1 && n.options.variableWidth === !1 ? (n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow), n.$slideTrack.width(Math.ceil(n.slideWidth * n.$slideTrack.children(".slick-slide").length))) : n.options.variableWidth === !0 ? n.$slideTrack.width(5e3 * n.slideCount) : (n.slideWidth = Math.ceil(n.listWidth), n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0) * n.$slideTrack.children(".slick-slide").length)));
        t = n.$slides.first().outerWidth(!0) - n.$slides.first().width();
        n.options.variableWidth === !1 && n.$slideTrack.children(".slick-slide").width(n.slideWidth - t)
    };
    t.prototype.setFade = function() {
        var i, t = this;
        t.$slides.each(function(r, u) {
            i = t.slideWidth * r * -1;
            t.options.rtl === !0 ? n(u).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : n(u).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        });
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    };
    t.prototype.setHeight = function() {
        var n = this,
            t;
        1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.css("height", t))
    };
    t.prototype.setOption = t.prototype.slickSetOption = function(t, i, r) {
        var f, e, u = this;
        if("responsive" === t && "array" === n.type(i))
            for(e in i)
                if("array" !== n.type(u.options.responsive)) u.options.responsive = [i[e]];
                else {
                    for(f = u.options.responsive.length - 1; f >= 0;) u.options.responsive[f].breakpoint === i[e].breakpoint && u.options.responsive.splice(f, 1), f--;
                    u.options.responsive.push(i[e])
                } else u.options[t] = i;
        r === !0 && (u.unload(), u.reinit())
    };
    t.prototype.setPosition = function() {
        var n = this;
        n.setDimensions();
        n.setHeight();
        n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
        n.$slider.trigger("setPosition", [n])
    };
    t.prototype.setProps = function() {
        var n = this,
            t = document.body.style;
        n.positionProp = n.options.vertical === !0 ? "top" : "left";
        "top" === n.positionProp ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical");
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && n.options.useCSS === !0 && (n.cssTransitions = !0);
        n.options.fade && ("number" == typeof n.options.zIndex ? n.options.zIndex < 3 && (n.options.zIndex = 3) : n.options.zIndex = n.defaults.zIndex);
        void 0 !== t.OTransform && (n.animType = "OTransform", n.transformType = "-o-transform", n.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.MozTransform && (n.animType = "MozTransform", n.transformType = "-moz-transform", n.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (n.animType = !1));
        void 0 !== t.webkitTransform && (n.animType = "webkitTransform", n.transformType = "-webkit-transform", n.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.msTransform && (n.animType = "msTransform", n.transformType = "-ms-transform", n.transitionType = "msTransition", void 0 === t.msTransform && (n.animType = !1));
        void 0 !== t.transform && n.animType !== !1 && (n.animType = "transform", n.transformType = "transform", n.transitionType = "transition");
        n.transformsEnabled = n.options.useTransform && null !== n.animType && n.animType !== !1
    };
    t.prototype.setSlideClasses = function(n) {
        var u, i, r, f, t = this;
        i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        t.$slides.eq(n).addClass("slick-current");
        t.options.centerMode === !0 ? (u = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u, n + u + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = t.options.slidesToShow + n, i.slice(r - u + 1, r + u + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === n ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= t.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (f = t.slideCount % t.options.slidesToShow, r = t.options.infinite === !0 ? t.options.slidesToShow + n : n, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active").attr("aria-hidden", "false") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" === t.options.lazyLoad && t.lazyLoad()
    };
    t.prototype.setupInfinite = function() {
        var i, r, u, t = this;
        if(t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && (r = null, t.slideCount > t.options.slidesToShow)) {
            for(u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1) r = i - 1, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
            for(i = 0; u > i; i += 1) r = i, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
            t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                n(this).attr("id", "")
            })
        }
    };
    t.prototype.setPaused = function(n) {
        var t = this;
        t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = n, n ? t.autoPlayClear() : t.autoPlay())
    };
    t.prototype.selectHandler = function(t) {
        var i = this,
            u = n(t.target).is(".slick-slide") ? n(t.target) : n(t.target).parents(".slick-slide"),
            r = parseInt(u.attr("data-slick-index"));
        return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r), void i.asNavFor(r)) : void i.slideHandler(r)
    };
    t.prototype.slideHandler = function(n, t, i) {
        var u, f, o, e, s = null,
            r = this;
        return t = t || !1, r.animating === !0 && r.options.waitForAnimate === !0 || r.options.fade === !0 && r.currentSlide === n || r.slideCount <= r.options.slidesToShow ? void 0 : (t === !1 && r.asNavFor(n), u = n, s = r.getLeft(u), e = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft, r.options.infinite === !1 && r.options.centerMode === !1 && (0 > n || n > r.getDotCount() * r.options.slidesToScroll) ? void(r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u))) : r.options.infinite === !1 && r.options.centerMode === !0 && (0 > n || n > r.slideCount - r.options.slidesToScroll) ? void(r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u))) : (r.options.autoplay === !0 && clearInterval(r.autoPlayTimer), f = 0 > u ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : u - r.slideCount : u, r.animating = !0, r.$slider.trigger("beforeChange", [r, r.currentSlide, f]), o = r.currentSlide, r.currentSlide = f, r.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), r.options.fade === !0 ? (i !== !0 ? (r.fadeSlideOut(o), r.fadeSlide(f, function() {
            r.postSlide(f)
        })) : r.postSlide(f), void r.animateHeight()) : void(i !== !0 ? r.animateSlide(s, function() {
            r.postSlide(f)
        }) : r.postSlide(f))))
    };
    t.prototype.startLoad = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide();
        n.$slider.addClass("slick-loading")
    };
    t.prototype.swipeDirection = function() {
        var i, r, u, n, t = this;
        return i = t.touchObject.startX - t.touchObject.curX, r = t.touchObject.startY - t.touchObject.curY, u = Math.atan2(r, i), n = Math.round(180 * u / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? t.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? t.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? t.options.rtl === !1 ? "right" : "left" : t.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
    };
    t.prototype.swipeEnd = function() {
        var t, n = this;
        if(n.dragging = !1, n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0, void 0 === n.touchObject.curX) return !1;
        if(n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch(n.swipeDirection()) {
            case "left":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount();
                n.slideHandler(t);
                n.currentDirection = 0;
                n.touchObject = {};
                n.$slider.trigger("swipe", [n, "left"]);
                break;
            case "right":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount();
                n.slideHandler(t);
                n.currentDirection = 1;
                n.touchObject = {};
                n.$slider.trigger("swipe", [n, "right"])
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    };
    t.prototype.swipeHandler = function(n) {
        var t = this;
        if(!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== n.type.indexOf("mouse"))) switch(t.touchObject.fingerCount = n.originalEvent && void 0 !== n.originalEvent.touches ? n.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), n.data.action) {
            case "start":
                t.swipeStart(n);
                break;
            case "move":
                t.swipeMove(n);
                break;
            case "end":
                t.swipeEnd(n)
        }
    };
    t.prototype.swipeMove = function(n) {
        var f, e, r, u, i, t = this;
        return i = void 0 !== n.originalEvent ? n.originalEvent.touches : null, !t.dragging || i && 1 !== i.length ? !1 : (f = t.getLeft(t.currentSlide), t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX, t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)))), e = t.swipeDirection(), "vertical" !== e ? (void 0 !== n.originalEvent && t.touchObject.swipeLength > 4 && n.preventDefault(), u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.options.verticalSwiping === !0 && (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1), r = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, t.options.infinite === !1 && (0 === t.currentSlide && "right" === e || t.currentSlide >= t.getDotCount() && "left" === e) && (r = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), t.swipeLeft = t.options.vertical === !1 ? f + r * u : f + r * (t.$list.height() / t.listWidth) * u, t.options.verticalSwiping === !0 && (t.swipeLeft = f + r * u), t.options.fade === !0 || t.options.touchMove === !1 ? !1 : t.animating === !0 ? (t.swipeLeft = null, !1) : void t.setCSS(t.swipeLeft)) : void 0)
    };
    t.prototype.swipeStart = function(n) {
        var i, t = this;
        return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== n.originalEvent && void 0 !== n.originalEvent.touches && (i = n.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : n.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : n.clientY, void(t.dragging = !0))
    };
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var n = this;
        null !== n.$slidesCache && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit())
    };
    t.prototype.unload = function() {
        var t = this;
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove();
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove();
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    };
    t.prototype.unslick = function(n) {
        var t = this;
        t.$slider.trigger("unslick", [t, n]);
        t.destroy()
    };
    t.prototype.updateArrows = function() {
        var t, n = this;
        t = Math.floor(n.options.slidesToShow / 2);
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && !n.options.infinite && (n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === n.currentSlide ? (n.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1 ? (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - 1 && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    };
    t.prototype.updateDots = function() {
        var n = this;
        null !== n.$dots && (n.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    };
    t.prototype.visibility = function() {
        var n = this;
        document[n.hidden] ? (n.paused = !0, n.autoPlayClear()) : n.options.autoplay === !0 && (n.paused = !1, n.autoPlay())
    };
    t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        });
        t.$slideTrack.attr("role", "listbox");
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            n(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + i
            })
        });
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
            n(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar");
        t.activateADA()
    };
    t.prototype.activateADA = function() {
        var n = this;
        n.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    };
    t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var r = n(this);
            setTimeout(function() {
                t.isPlay && (r.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
            }, 0)
        })
    };
    n.fn.slick = function() {
        for(var u, i = this, r = arguments[0], f = Array.prototype.slice.call(arguments, 1), e = i.length, n = 0; e > n; n++)
            if("object" == typeof r || "undefined" == typeof r ? i[n].slick = new t(i[n], r) : u = i[n].slick[r].apply(i[n].slick, f), "undefined" != typeof u) return u;
        return i
    }
});
try {
    (function() {
        "use strict";

        function n(n, t) {
            t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: undefined
                };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(n, t.bubbles, t.cancelable, t.detail), i
        }
        if(window.CustomEvent === undefined) {
            var t = document.createEvent("CustomEvent");
            n.prototype = t.constructor.prototype
        } else n.prototype = window.CustomEvent.prototype;
        window.CustomEvent = n;
        window.hasCustomEvents = !0
    })()
} catch(ex) {
    window.hasCustomEvents = !1;
    console !== undefined && typeof console.warn == "function" && (console.warn("Error initializing CustomEvent polyfill - Anzeixer will not raise events"), console.warn(ex))
}
Anzeixer = function() {
    "use strict";
    var n, t = function() {
            var t = n,
                i;
            try {
                n = window.getComputedStyle(document.querySelector("body"), ":after").getPropertyValue("content").replace(/["']/g, "")
            } catch(r) {
                n = "desktop"
            }
            return t !== n && window.hasCustomEvents && (i = new window.CustomEvent("viewchange", {
                detail: {
                    originalView: t,
                    currentView: n
                }
            }), document.dispatchEvent(i)), n
        },
        i = function() {
            var n = t().split("-");
            return n[0]
        };
    return window.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("resize", t, !1), typeof jQuery != "undefined" && jQuery.event.props.push("detail"), {
        getView: t,
        isDesktop: function() {
            return i() === "desktop"
        },
        isTablet: function() {
            return i() === "tablet"
        },
        isPhone: function() {
            return i() === "phone"
        }
    }
}(),
    function(n, t) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : n.moment = t()
    }(this, function() {
        "use strict";

        function i() {
            return wu.apply(null, arguments)
        }

        function us(n) {
            wu = n
        }

        function at(n) {
            return n instanceof Array || Object.prototype.toString.call(n) === "[object Array]"
        }

        function li(n) {
            return n instanceof Date || Object.prototype.toString.call(n) === "[object Date]"
        }

        function bu(n, t) {
            for(var r = [], i = 0; i < n.length; ++i) r.push(t(n[i], i));
            return r
        }

        function nt(n, t) {
            return Object.prototype.hasOwnProperty.call(n, t)
        }

        function vt(n, t) {
            for(var i in t) nt(t, i) && (n[i] = t[i]);
            return nt(t, "toString") && (n.toString = t.toString), nt(t, "valueOf") && (n.valueOf = t.valueOf), n
        }

        function gt(n, t, i, r) {
            return ue(n, t, i, r, !0).utc()
        }

        function fs() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function e(n) {
            return n._pf == null && (n._pf = fs()), n._pf
        }

        function hr(n) {
            if(n._isValid == null) {
                var t = e(n);
                n._isValid = !isNaN(n._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated;
                n._strict && (n._isValid = n._isValid && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === undefined)
            }
            return n._isValid
        }

        function ai(n) {
            var t = gt(NaN);
            return n != null ? vt(e(t), n) : e(t).userInvalidated = !0, t
        }

        function y(n) {
            return n === void 0
        }

        function lr(n, t) {
            var u, i, r;
            if(y(t._isAMomentObject) || (n._isAMomentObject = t._isAMomentObject), y(t._i) || (n._i = t._i), y(t._f) || (n._f = t._f), y(t._l) || (n._l = t._l), y(t._strict) || (n._strict = t._strict), y(t._tzm) || (n._tzm = t._tzm), y(t._isUTC) || (n._isUTC = t._isUTC), y(t._offset) || (n._offset = t._offset), y(t._pf) || (n._pf = e(t)), y(t._locale) || (n._locale = t._locale), cr.length > 0)
                for(u in cr) i = cr[u], r = t[i], y(r) || (n[i] = r);
            return n
        }

        function fi(n) {
            lr(this, n);
            this._d = new Date(n._d != null ? n._d.getTime() : NaN);
            ar === !1 && (ar = !0, i.updateOffset(this), ar = !1)
        }

        function ot(n) {
            return n instanceof fi || n != null && n._isAMomentObject != null
        }

        function p(n) {
            return n < 0 ? Math.ceil(n) : Math.floor(n)
        }

        function f(n) {
            var t = +n,
                i = 0;
            return t !== 0 && isFinite(t) && (i = p(t)), i
        }

        function ku(n, t, i) {
            for(var e = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), u = 0, r = 0; r < e; r++)(i && n[r] !== t[r] || !i && f(n[r]) !== f(t[r])) && u++;
            return u + o
        }

        function du(n) {
            i.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + n)
        }

        function b(n, t) {
            var i = !0;
            return vt(function() {
                return i && (du(n + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), t.apply(this, arguments)
            }, t)
        }

        function vr(n, t) {
            gu[n] || (du(t), gu[n] = !0)
        }

        function st(n) {
            return n instanceof Function || Object.prototype.toString.call(n) === "[object Function]"
        }

        function nf(n) {
            return Object.prototype.toString.call(n) === "[object Object]"
        }

        function es(n) {
            var t, i;
            for(i in n) t = n[i], st(t) ? this[i] = t : this["_" + i] = t;
            this._config = n;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function yr(n, t) {
            var r = vt({}, n),
                i;
            for(i in t) nt(t, i) && (nf(n[i]) && nf(t[i]) ? (r[i] = {}, vt(r[i], n[i]), vt(r[i], t[i])) : t[i] != null ? r[i] = t[i] : delete r[i]);
            return r
        }

        function pr(n) {
            n != null && this.set(n)
        }

        function tf(n) {
            return n ? n.toLowerCase().replace("_", "-") : n
        }

        function os(n) {
            for(var r = 0, i, t, f, u; r < n.length;) {
                for(u = tf(n[r]).split("-"), i = u.length, t = tf(n[r + 1]), t = t ? t.split("-") : null; i > 0;) {
                    if(f = rf(u.slice(0, i).join("-")), f) return f;
                    if(t && t.length >= i && ku(u, t, !0) >= i - 1) break;
                    i--
                }
                r++
            }
            return null
        }

        function rf(n) {
            var t = null;
            if(!l[n] && typeof module != "undefined" && module && module.exports) try {
                t = vi._abbr;
                require("./locale/" + n);
                ni(t)
            } catch(i) {}
            return l[n]
        }

        function ni(n, t) {
            var i;
            return n && (i = y(t) ? yt(n) : uf(n, t), i && (vi = i)), vi._abbr
        }

        function uf(n, t) {
            return t !== null ? (t.abbr = n, l[n] != null ? (vr("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), t = yr(l[n]._config, t)) : t.parentLocale != null && (l[t.parentLocale] != null ? t = yr(l[t.parentLocale]._config, t) : vr("parentLocaleUndefined", "specified parentLocale is not defined yet")), l[n] = new pr(t), ni(n), l[n]) : (delete l[n], null)
        }

        function ss(n, t) {
            if(t != null) {
                var i;
                l[n] != null && (t = yr(l[n]._config, t));
                i = new pr(t);
                i.parentLocale = l[n];
                l[n] = i;
                ni(n)
            } else l[n] != null && (l[n].parentLocale != null ? l[n] = l[n].parentLocale : l[n] != null && delete l[n]);
            return l[n]
        }

        function yt(n) {
            var t;
            if(n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n) return vi;
            if(!at(n)) {
                if(t = rf(n), t) return t;
                n = [n]
            }
            return os(n)
        }

        function hs() {
            return Object.keys(l)
        }

        function v(n, t) {
            var i = n.toLowerCase();
            ti[i] = ti[i + "s"] = ti[t] = n
        }

        function k(n) {
            return typeof n == "string" ? ti[n] || ti[n.toLowerCase()] : undefined
        }

        function ff(n) {
            var r = {},
                i, t;
            for(t in n) nt(n, t) && (i = k(t), i && (r[i] = n[t]));
            return r
        }

        function ii(n, t) {
            return function(r) {
                return r != null ? (ef(this, n, r), i.updateOffset(this, t), this) : yi(this, n)
            }
        }

        function yi(n, t) {
            return n.isValid() ? n._d["get" + (n._isUTC ? "UTC" : "") + t]() : NaN
        }

        function ef(n, t, i) {
            n.isValid() && n._d["set" + (n._isUTC ? "UTC" : "") + t](i)
        }

        function of(n, t) {
            var i;
            if(typeof n == "object")
                for(i in n) this.set(i, n[i]);
            else if(n = k(n), st(this[n])) return this[n](t);
            return this
        }

        function rt(n, t, i) {
            var r = "" + Math.abs(n),
                u = t - r.length,
                f = n >= 0;
            return(f ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, u)).toString().substr(1) + r
        }

        function r(n, t, i, r) {
            var u = r;
            typeof r == "string" && (u = function() {
                return this[r]()
            });
            n && (ri[n] = u);
            t && (ri[t[0]] = function() {
                return rt(u.apply(this, arguments), t[1], t[2])
            });
            i && (ri[i] = function() {
                return this.localeData().ordinal(u.apply(this, arguments), n)
            })
        }

        function cs(n) {
            return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
        }

        function ls(n) {
            for(var i = n.match(sf), t = 0, r = i.length; t < r; t++) i[t] = ri[i[t]] ? ri[i[t]] : cs(i[t]);
            return function(u) {
                var f = "";
                for(t = 0; t < r; t++) f += i[t] instanceof Function ? i[t].call(u, n) : i[t];
                return f
            }
        }

        function br(n, t) {
            return n.isValid() ? (t = hf(t, n.localeData()), wr[t] = wr[t] || ls(t), wr[t](n)) : n.localeData().invalidDate()
        }

        function hf(n, t) {
            function r(n) {
                return t.longDateFormat(n) || n
            }
            var i = 5;
            for(pi.lastIndex = 0; i >= 0 && pi.test(n);) n = n.replace(pi, r), pi.lastIndex = 0, i -= 1;
            return n
        }

        function t(n, t, i) {
            gr[n] = st(t) ? t : function(n) {
                return n && i ? i : t
            }
        }

        function vs(n, t) {
            return nt(gr, n) ? gr[n](t._strict, t._locale) : new RegExp(ys(n))
        }

        function ys(n) {
            return nr(n.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, t, i, r, u) {
                return t || i || r || u
            }))
        }

        function nr(n) {
            return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function s(n, t) {
            var i, r = t;
            for(typeof n == "string" && (n = [n]), typeof t == "number" && (r = function(n, i) {
                i[t] = f(n)
            }), i = 0; i < n.length; i++) tr[n[i]] = r
        }

        function oi(n, t) {
            s(n, function(n, i, r, u) {
                r._w = r._w || {};
                t(n, r._w, r, u)
            })
        }

        function ps(n, t, i) {
            t != null && nt(tr, n) && tr[n](t, i._a, i, n)
        }

        function nu(n, t) {
            return new Date(Date.UTC(n, t + 1, 0)).getUTCDate()
        }

        function ks(n, t) {
            return at(this._months) ? this._months[n.month()] : this._months[tu.test(t) ? "format" : "standalone"][n.month()]
        }

        function ds(n, t) {
            return at(this._monthsShort) ? this._monthsShort[n.month()] : this._monthsShort[tu.test(t) ? "format" : "standalone"][n.month()]
        }

        function gs(n, t, i) {
            var r, u, f;
            for(this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++)
                if((u = gt([2e3, r]), i && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(u, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(u, "").replace(".", "") + "$", "i")), i || this._monthsParse[r] || (f = "^" + this.months(u, "") + "|^" + this.monthsShort(u, ""), this._monthsParse[r] = new RegExp(f.replace(".", ""), "i")), i && t === "MMMM" && this._longMonthsParse[r].test(n)) || i && t === "MMM" && this._shortMonthsParse[r].test(n) || !i && this._monthsParse[r].test(n)) return r
        }

        function wf(n, t) {
            var i;
            if(!n.isValid()) return n;
            if(typeof t == "string")
                if(/^\d+$/.test(t)) t = f(t);
                else if(t = n.localeData().monthsParse(t), typeof t != "number") return n;
            return i = Math.min(n.date(), nu(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n
        }

        function bf(n) {
            return n != null ? (wf(this, n), i.updateOffset(this, !0), this) : yi(this, "Month")
        }

        function nh() {
            return nu(this.year(), this.month())
        }

        function th(n) {
            return this._monthsParseExact ? (nt(this, "_monthsRegex") || gf.call(this), n ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && n ? this._monthsShortStrictRegex : this._monthsShortRegex
        }

        function ih(n) {
            return this._monthsParseExact ? (nt(this, "_monthsRegex") || gf.call(this), n ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && n ? this._monthsStrictRegex : this._monthsRegex
        }

        function gf() {
            function f(n, t) {
                return t.length - n.length
            }
            for(var i = [], r = [], t = [], u, n = 0; n < 12; n++) u = gt([2e3, n]), i.push(this.monthsShort(u, "")), r.push(this.months(u, "")), t.push(this.months(u, "")), t.push(this.monthsShort(u, ""));
            for(i.sort(f), r.sort(f), t.sort(f), n = 0; n < 12; n++) i[n] = nr(i[n]), r[n] = nr(r[n]), t[n] = nr(t[n]);
            this._monthsRegex = new RegExp("^(" + t.join("|") + ")", "i");
            this._monthsShortRegex = this._monthsRegex;
            this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")$", "i");
            this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")$", "i")
        }

        function iu(n) {
            var i, t = n._a;
            return t && e(n).overflow === -2 && (i = t[ut] < 0 || t[ut] > 11 ? ut : t[tt] < 1 || t[tt] > nu(t[d], t[ut]) ? tt : t[a] < 0 || t[a] > 24 || t[a] === 24 && (t[g] !== 0 || t[ft] !== 0 || t[pt] !== 0) ? a : t[g] < 0 || t[g] > 59 ? g : t[ft] < 0 || t[ft] > 59 ? ft : t[pt] < 0 || t[pt] > 999 ? pt : -1, e(n)._overflowDayOfYear && (i < d || i > tt) && (i = tt), e(n)._overflowWeeks && i === -1 && (i = ws), e(n)._overflowWeekday && i === -1 && (i = bs), e(n).overflow = i), n
        }

        function ne(n) {
            var t, r, o = n._i,
                i = rh.exec(o) || uh.exec(o),
                s, f, u, h;
            if(i) {
                for(e(n).iso = !0, t = 0, r = ir.length; t < r; t++)
                    if(ir[t][1].exec(i[1])) {
                        f = ir[t][0];
                        s = ir[t][2] !== !1;
                        break
                    }
                if(f == null) {
                    n._isValid = !1;
                    return
                }
                if(i[3]) {
                    for(t = 0, r = ru.length; t < r; t++)
                        if(ru[t][1].exec(i[3])) {
                            u = (i[2] || " ") + ru[t][0];
                            break
                        }
                    if(u == null) {
                        n._isValid = !1;
                        return
                    }
                }
                if(!s && u != null) {
                    n._isValid = !1;
                    return
                }
                if(i[4])
                    if(fh.exec(i[4])) h = "Z";
                    else {
                        n._isValid = !1;
                        return
                    }
                n._f = f + (u || "") + (h || "");
                eu(n)
            } else n._isValid = !1
        }

        function oh(n) {
            var t = eh.exec(n._i);
            if(t !== null) {
                n._d = new Date(+t[1]);
                return
            }
            ne(n);
            n._isValid === !1 && (delete n._isValid, i.createFromInputFallback(n))
        }

        function sh(n, t, i, r, u, f, e) {
            var o = new Date(n, t, i, r, u, f, e);
            return n < 100 && n >= 0 && isFinite(o.getFullYear()) && o.setFullYear(n), o
        }

        function rr(n) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return n < 100 && n >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(n), t
        }

        function si(n) {
            return te(n) ? 366 : 365
        }

        function te(n) {
            return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
        }

        function hh() {
            return te(this.year())
        }

        function ur(n, t, i) {
            var r = 7 + t - i,
                u = (7 + rr(n, 0, r).getUTCDay() - t) % 7;
            return -u + r - 1
        }

        function ie(n, t, i, r, u) {
            var s = (7 + i - r) % 7,
                h = ur(n, r, u),
                f = 1 + 7 * (t - 1) + s + h,
                e, o;
            return f <= 0 ? (e = n - 1, o = si(e) + f) : f > si(n) ? (e = n + 1, o = f - si(n)) : (e = n, o = f), {
                year: e,
                dayOfYear: o
            }
        }

        function hi(n, t, i) {
            var e = ur(n.year(), t, i),
                r = Math.floor((n.dayOfYear() - e - 1) / 7) + 1,
                f, u;
            return r < 1 ? (u = n.year() - 1, f = r + wt(u, t, i)) : r > wt(n.year(), t, i) ? (f = r - wt(n.year(), t, i), u = n.year() + 1) : (u = n.year(), f = r), {
                week: f,
                year: u
            }
        }

        function wt(n, t, i) {
            var r = ur(n, t, i),
                u = ur(n + 1, t, i);
            return(si(n) - r + u) / 7
        }

        function ui(n, t, i) {
            return n != null ? n : t != null ? t : i
        }

        function ch(n) {
            var t = new Date(i.now());
            return n._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function fu(n) {
            var t, i, r = [],
                u, f;
            if(!n._d) {
                for(u = ch(n), n._w && n._a[tt] == null && n._a[ut] == null && lh(n), n._dayOfYear && (f = ui(n._a[d], u[d]), n._dayOfYear > si(f) && (e(n)._overflowDayOfYear = !0), i = rr(f, 0, n._dayOfYear), n._a[ut] = i.getUTCMonth(), n._a[tt] = i.getUTCDate()), t = 0; t < 3 && n._a[t] == null; ++t) n._a[t] = r[t] = u[t];
                for(; t < 7; t++) n._a[t] = r[t] = n._a[t] == null ? t === 2 ? 1 : 0 : n._a[t];
                n._a[a] === 24 && n._a[g] === 0 && n._a[ft] === 0 && n._a[pt] === 0 && (n._nextDay = !0, n._a[a] = 0);
                n._d = (n._useUTC ? rr : sh).apply(null, r);
                n._tzm != null && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
                n._nextDay && (n._a[a] = 24)
            }
        }

        function lh(n) {
            var t, o, u, i, r, f, c, s;
            t = n._w;
            t.GG != null || t.W != null || t.E != null ? (r = 1, f = 4, o = ui(t.GG, n._a[d], hi(h(), 1, 4).year), u = ui(t.W, 1), i = ui(t.E, 1), (i < 1 || i > 7) && (s = !0)) : (r = n._locale._week.dow, f = n._locale._week.doy, o = ui(t.gg, n._a[d], hi(h(), r, f).year), u = ui(t.w, 1), t.d != null ? (i = t.d, (i < 0 || i > 6) && (s = !0)) : t.e != null ? (i = t.e + r, (t.e < 0 || t.e > 6) && (s = !0)) : i = r);
            u < 1 || u > wt(o, r, f) ? e(n)._overflowWeeks = !0 : s != null ? e(n)._overflowWeekday = !0 : (c = ie(o, u, i, r, f), n._a[d] = c.year, n._dayOfYear = c.dayOfYear)
        }

        function eu(n) {
            if(n._f === i.ISO_8601) {
                ne(n);
                return
            }
            n._a = [];
            e(n).empty = !0;
            for(var t = "" + n._i, r, u, s, c = t.length, h = 0, o = hf(n._f, n._locale).match(sf) || [], f = 0; f < o.length; f++) u = o[f], r = (t.match(vs(u, n)) || [])[0], r && (s = t.substr(0, t.indexOf(r)), s.length > 0 && e(n).unusedInput.push(s), t = t.slice(t.indexOf(r) + r.length), h += r.length), ri[u] ? (r ? e(n).empty = !1 : e(n).unusedTokens.push(u), ps(u, r, n)) : n._strict && !r && e(n).unusedTokens.push(u);
            e(n).charsLeftOver = c - h;
            t.length > 0 && e(n).unusedInput.push(t);
            e(n).bigHour === !0 && n._a[a] <= 12 && n._a[a] > 0 && (e(n).bigHour = undefined);
            n._a[a] = ah(n._locale, n._a[a], n._meridiem);
            fu(n);
            iu(n)
        }

        function ah(n, t, i) {
            var r;
            return i == null ? t : n.meridiemHour != null ? n.meridiemHour(t, i) : n.isPM != null ? (r = n.isPM(i), r && t < 12 && (t += 12), r || t !== 12 || (t = 0), t) : t
        }

        function vh(n) {
            var t, f, u, r, i;
            if(n._f.length === 0) {
                e(n).invalidFormat = !0;
                n._d = new Date(NaN);
                return
            }
            for(r = 0; r < n._f.length; r++)(i = 0, t = lr({}, n), n._useUTC != null && (t._useUTC = n._useUTC), t._f = n._f[r], eu(t), hr(t)) && (i += e(t).charsLeftOver, i += e(t).unusedTokens.length * 10, e(t).score = i, (u == null || i < u) && (u = i, f = t));
            vt(n, f || t)
        }

        function yh(n) {
            if(!n._d) {
                var t = ff(n._i);
                n._a = bu([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(n) {
                    return n && parseInt(n, 10)
                });
                fu(n)
            }
        }

        function ph(n) {
            var t = new fi(iu(re(n)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = undefined), t
        }

        function re(n) {
            var t = n._i,
                i = n._f;
            return(n._locale = n._locale || yt(n._l), t === null || i === undefined && t === "") ? ai({
                nullInput: !0
            }) : (typeof t == "string" && (n._i = t = n._locale.preparse(t)), ot(t)) ? new fi(iu(t)) : (at(i) ? vh(n) : i ? eu(n) : li(t) ? n._d = t : wh(n), hr(n) || (n._d = null), n)
        }

        function wh(n) {
            var t = n._i;
            t === undefined ? n._d = new Date(i.now()) : li(t) ? n._d = new Date(+t) : typeof t == "string" ? oh(n) : at(t) ? (n._a = bu(t.slice(0), function(n) {
                return parseInt(n, 10)
            }), fu(n)) : typeof t == "object" ? yh(n) : typeof t == "number" ? n._d = new Date(t) : i.createFromInputFallback(n)
        }

        function ue(n, t, i, r, u) {
            var f = {};
            return typeof i == "boolean" && (r = i, i = undefined), f._isAMomentObject = !0, f._useUTC = f._isUTC = u, f._l = i, f._i = n, f._f = t, f._strict = r, ph(f)
        }

        function h(n, t, i, r) {
            return ue(n, t, i, r, !1)
        }

        function oe(n, t) {
            var r, i;
            if(t.length === 1 && at(t[0]) && (t = t[0]), !t.length) return h();
            for(r = t[0], i = 1; i < t.length; ++i)(!t[i].isValid() || t[i][n](r)) && (r = t[i]);
            return r
        }

        function bh() {
            var n = [].slice.call(arguments, 0);
            return oe("isBefore", n)
        }

        function kh() {
            var n = [].slice.call(arguments, 0);
            return oe("isAfter", n)
        }

        function fr(n) {
            var t = ff(n),
                i = t.year || 0,
                r = t.quarter || 0,
                u = t.month || 0,
                f = t.week || 0,
                e = t.day || 0,
                o = t.hour || 0,
                s = t.minute || 0,
                h = t.second || 0,
                c = t.millisecond || 0;
            this._milliseconds = +c + h * 1e3 + s * 6e4 + o * 36e5;
            this._days = +e + f * 7;
            this._months = +u + r * 3 + i * 12;
            this._data = {};
            this._locale = yt();
            this._bubble()
        }

        function ou(n) {
            return n instanceof fr
        }

        function he(n, t) {
            r(n, 0, 0, function() {
                var n = this.utcOffset(),
                    i = "+";
                return n < 0 && (n = -n, i = "-"), i + rt(~~(n / 60), 2) + t + rt(~~n % 60, 2)
            })
        }

        function su(n, t) {
            var r = (t || "").match(n) || [],
                e = r[r.length - 1] || [],
                i = (e + "").match(ce) || ["-", 0, 0],
                u = +(i[1] * 60) + f(i[2]);
            return i[0] === "+" ? u : -u
        }

        function hu(n, t) {
            var r, u;
            return t._isUTC ? (r = t.clone(), u = (ot(n) || li(n) ? +n : +h(n)) - +r, r._d.setTime(+r._d + u), i.updateOffset(r, !1), r) : h(n).local()
        }

        function cu(n) {
            return -Math.round(n._d.getTimezoneOffset() / 15) * 15
        }

        function dh(n, t) {
            var r = this._offset || 0,
                u;
            return this.isValid() ? n != null ? (typeof n == "string" ? n = su(gi, n) : Math.abs(n) < 16 && (n = n * 60), !this._isUTC && t && (u = cu(this)), this._offset = n, this._isUTC = !0, u != null && this.add(u, "m"), r !== n && (!t || this._changeInProgress ? be(this, ht(n - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : cu(this) : n != null ? this : NaN
        }

        function gh(n, t) {
            return n != null ? (typeof n != "string" && (n = -n), this.utcOffset(n, t), this) : -this.utcOffset()
        }

        function nc(n) {
            return this.utcOffset(0, n)
        }

        function tc(n) {
            return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(cu(this), "m")), this
        }

        function ic() {
            return this._tzm ? this.utcOffset(this._tzm) : typeof this._i == "string" && this.utcOffset(su(as, this._i)), this
        }

        function rc(n) {
            return this.isValid() ? (n = n ? h(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0) : !1
        }

        function uc() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function fc() {
            var n, t;
            return y(this._isDSTShifted) ? (n = {}, lr(n, this), n = re(n), n._a ? (t = n._isUTC ? gt(n._a) : h(n._a), this._isDSTShifted = this.isValid() && ku(n._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted) : this._isDSTShifted
        }

        function ec() {
            return this.isValid() ? !this._isUTC : !1
        }

        function oc() {
            return this.isValid() ? this._isUTC : !1
        }

        function le() {
            return this.isValid() ? this._isUTC && this._offset === 0 : !1
        }

        function ht(n, t) {
            var i = n,
                r = null,
                u, e, o;
            return ou(n) ? i = {
                ms: n._milliseconds,
                d: n._days,
                M: n._months
            } : typeof n == "number" ? (i = {}, t ? i[t] = n : i.milliseconds = n) : (r = ae.exec(n)) ? (u = r[1] === "-" ? -1 : 1, i = {
                y: 0,
                d: f(r[tt]) * u,
                h: f(r[a]) * u,
                m: f(r[g]) * u,
                s: f(r[ft]) * u,
                ms: f(r[pt]) * u
            }) : (r = ve.exec(n)) ? (u = r[1] === "-" ? -1 : 1, i = {
                y: bt(r[2], u),
                M: bt(r[3], u),
                w: bt(r[4], u),
                d: bt(r[5], u),
                h: bt(r[6], u),
                m: bt(r[7], u),
                s: bt(r[8], u)
            }) : i == null ? i = {} : typeof i == "object" && ("from" in i || "to" in i) && (o = sc(h(i.from), h(i.to)), i = {}, i.ms = o.milliseconds, i.M = o.months), e = new fr(i), ou(n) && nt(n, "_locale") && (e._locale = n._locale), e
        }

        function bt(n, t) {
            var i = n && parseFloat(n.replace(",", "."));
            return(isNaN(i) ? 0 : i) * t
        }

        function ye(n, t) {
            var i = {
                milliseconds: 0,
                months: 0
            };
            return i.months = t.month() - n.month() + (t.year() - n.year()) * 12, n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i
        }

        function sc(n, t) {
            var i;
            return(n.isValid() && t.isValid()) ? (t = hu(t, n), n.isBefore(t) ? i = ye(n, t) : (i = ye(t, n), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
                milliseconds: 0,
                months: 0
            }
        }

        function pe(n) {
            return n < 0 ? Math.round(-1 * n) * -1 : Math.round(n)
        }

        function we(n, t) {
            return function(i, r) {
                var u, f;
                return r === null || isNaN(+r) || (vr(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), f = i, i = r, r = f), i = typeof i == "string" ? +i : i, u = ht(i, r), be(this, u, n), this
            }
        }

        function be(n, t, r, u) {
            var o = t._milliseconds,
                f = pe(t._days),
                e = pe(t._months);
            n.isValid() && (u = u == null ? !0 : u, o && n._d.setTime(+n._d + o * r), f && ef(n, "Date", yi(n, "Date") + f * r), e && wf(n, yi(n, "Month") + e * r), u && i.updateOffset(n, f || e))
        }

        function hc(n, t) {
            var u = n || h(),
                f = hu(u, this).startOf("day"),
                i = this.diff(f, "days", !0),
                r = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse",
                e = t && (st(t[r]) ? t[r]() : t[r]);
            return this.format(e || this.localeData().calendar(r, this, h(u)))
        }

        function cc() {
            return new fi(this)
        }

        function lc(n, t) {
            var i = ot(n) ? n : h(n);
            return(this.isValid() && i.isValid()) ? (t = k(y(t) ? "millisecond" : t), t === "millisecond" ? +this > +i : +i < +this.clone().startOf(t)) : !1
        }

        function ac(n, t) {
            var i = ot(n) ? n : h(n);
            return(this.isValid() && i.isValid()) ? (t = k(y(t) ? "millisecond" : t), t === "millisecond" ? +this < +i : +this.clone().endOf(t) < +i) : !1
        }

        function vc(n, t, i) {
            return this.isAfter(n, i) && this.isBefore(t, i)
        }

        function yc(n, t) {
            var i = ot(n) ? n : h(n),
                r;
            return(this.isValid() && i.isValid()) ? (t = k(t || "millisecond"), t === "millisecond" ? +this == +i : (r = +i, +this.clone().startOf(t) <= r && r <= +this.clone().endOf(t))) : !1
        }

        function pc(n, t) {
            return this.isSame(n, t) || this.isAfter(n, t)
        }

        function wc(n, t) {
            return this.isSame(n, t) || this.isBefore(n, t)
        }

        function bc(n, t, i) {
            var f, e, u, r;
            return this.isValid() ? (f = hu(n, this), !f.isValid()) ? NaN : (e = (f.utcOffset() - this.utcOffset()) * 6e4, t = k(t), t === "year" || t === "month" || t === "quarter" ? (r = kc(this, f), t === "quarter" ? r = r / 3 : t === "year" && (r = r / 12)) : (u = this - f, r = t === "second" ? u / 1e3 : t === "minute" ? u / 6e4 : t === "hour" ? u / 36e5 : t === "day" ? (u - e) / 864e5 : t === "week" ? (u - e) / 6048e5 : u), i ? r : p(r)) : NaN
        }

        function kc(n, t) {
            var r = (t.year() - n.year()) * 12 + (t.month() - n.month()),
                i = n.clone().add(r, "months"),
                u, f;
            return t - i < 0 ? (u = n.clone().add(r - 1, "months"), f = (t - i) / (i - u)) : (u = n.clone().add(r + 1, "months"), f = (t - i) / (u - i)), -(r + f)
        }

        function dc() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function gc() {
            var n = this.clone().utc();
            return 0 < n.year() && n.year() <= 9999 ? st(Date.prototype.toISOString) ? this.toDate().toISOString() : br(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : br(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function nl(n) {
            var t = br(this, n || i.defaultFormat);
            return this.localeData().postformat(t)
        }

        function tl(n, t) {
            return this.isValid() && (ot(n) && n.isValid() || h(n).isValid()) ? ht({
                to: this,
                from: n
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function il(n) {
            return this.from(h(), n)
        }

        function rl(n, t) {
            return this.isValid() && (ot(n) && n.isValid() || h(n).isValid()) ? ht({
                from: this,
                to: n
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function ul(n) {
            return this.to(h(), n)
        }

        function ge(n) {
            var t;
            return n === undefined ? this._locale._abbr : (t = yt(n), t != null && (this._locale = t), this)
        }

        function no() {
            return this._locale
        }

        function fl(n) {
            n = k(n);
            switch(n) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return n === "week" && this.weekday(0), n === "isoWeek" && this.isoWeekday(1), n === "quarter" && this.month(Math.floor(this.month() / 3) * 3), this
        }

        function el(n) {
            return(n = k(n), n === undefined || n === "millisecond") ? this : this.startOf(n).add(1, n === "isoWeek" ? "week" : n).subtract(1, "ms")
        }

        function ol() {
            return +this._d - (this._offset || 0) * 6e4
        }

        function sl() {
            return Math.floor(+this / 1e3)
        }

        function hl() {
            return this._offset ? new Date(+this) : this._d
        }

        function cl() {
            var n = this;
            return [n.year(), n.month(), n.date(), n.hour(), n.minute(), n.second(), n.millisecond()]
        }

        function ll() {
            var n = this;
            return {
                years: n.year(),
                months: n.month(),
                date: n.date(),
                hours: n.hours(),
                minutes: n.minutes(),
                seconds: n.seconds(),
                milliseconds: n.milliseconds()
            }
        }

        function al() {
            return this.isValid() ? this.toISOString() : null
        }

        function vl() {
            return hr(this)
        }

        function yl() {
            return vt({}, e(this))
        }

        function pl() {
            return e(this).overflow
        }

        function wl() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function er(n, t) {
            r(0, [n, n.length], 0, t)
        }

        function bl(n) {
            return to.call(this, n, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function kl(n) {
            return to.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function dl() {
            return wt(this.year(), 1, 4)
        }

        function gl() {
            var n = this.localeData()._week;
            return wt(this.year(), n.dow, n.doy)
        }

        function to(n, t, i, r, u) {
            var f;
            return n == null ? hi(this, r, u).year : (f = wt(n, r, u), t > f && (t = f), na.call(this, n, t, i, r, u))
        }

        function na(n, t, i, r, u) {
            var e = ie(n, t, i, r, u),
                f = rr(e.year, 0, e.dayOfYear);
            return this.year(f.getUTCFullYear()), this.month(f.getUTCMonth()), this.date(f.getUTCDate()), this
        }

        function ta(n) {
            return n == null ? Math.ceil((this.month() + 1) / 3) : this.month((n - 1) * 3 + this.month() % 3)
        }

        function ia(n) {
            return hi(n, this._week.dow, this._week.doy).week
        }

        function ra() {
            return this._week.dow
        }

        function ua() {
            return this._week.doy
        }

        function fa(n) {
            var t = this.localeData().week(this);
            return n == null ? t : this.add((n - t) * 7, "d")
        }

        function ea(n) {
            var t = hi(this, 1, 4).week;
            return n == null ? t : this.add((n - t) * 7, "d")
        }

        function oa(n, t) {
            return typeof n != "string" ? n : isNaN(n) ? (n = t.weekdaysParse(n), typeof n == "number") ? n : null : parseInt(n, 10)
        }

        function sa(n, t) {
            return at(this._weekdays) ? this._weekdays[n.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][n.day()]
        }

        function ha(n) {
            return this._weekdaysShort[n.day()]
        }

        function ca(n) {
            return this._weekdaysMin[n.day()]
        }

        function la(n, t, i) {
            var r, u, f;
            for(this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++)
                if((u = h([2e3, 1]).day(r), i && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(u, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(u, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(u, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (f = "^" + this.weekdays(u, "") + "|^" + this.weekdaysShort(u, "") + "|^" + this.weekdaysMin(u, ""), this._weekdaysParse[r] = new RegExp(f.replace(".", ""), "i")), i && t === "dddd" && this._fullWeekdaysParse[r].test(n)) || i && t === "ddd" && this._shortWeekdaysParse[r].test(n) || i && t === "dd" && this._minWeekdaysParse[r].test(n) || !i && this._weekdaysParse[r].test(n)) return r
        }

        function aa(n) {
            if(!this.isValid()) return n != null ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return n != null ? (n = oa(n, this.localeData()), this.add(n - t, "d")) : t
        }

        function va(n) {
            if(!this.isValid()) return n != null ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return n == null ? t : this.add(n - t, "d")
        }

        function ya(n) {
            return this.isValid() ? n == null ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7) : n != null ? this : NaN
        }

        function pa(n) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return n == null ? t : this.add(n - t, "d")
        }

        function vu() {
            return this.hours() % 12 || 12
        }

        function eo(n, t) {
            r(n, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function oo(n, t) {
            return t._meridiemParse
        }

        function wa(n) {
            return(n + "").toLowerCase().charAt(0) === "p"
        }

        function ba(n, t, i) {
            return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
        }

        function ka(n, t) {
            t[pt] = f(("0." + n) * 1e3)
        }

        function da() {
            return this._isUTC ? "UTC" : ""
        }

        function ga() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function nv(n) {
            return h(n * 1e3)
        }

        function tv() {
            return h.apply(null, arguments).parseZone()
        }

        function iv(n, t, i) {
            var r = this._calendar[n];
            return st(r) ? r.call(t, i) : r
        }

        function rv(n) {
            var t = this._longDateFormat[n],
                i = this._longDateFormat[n.toUpperCase()];
            return t || !i ? t : (this._longDateFormat[n] = i.replace(/MMMM|MM|DD|dddd/g, function(n) {
                return n.slice(1)
            }), this._longDateFormat[n])
        }

        function uv() {
            return this._invalidDate
        }

        function fv(n) {
            return this._ordinal.replace("%d", n)
        }

        function ko(n) {
            return n
        }

        function ev(n, t, i, r) {
            var u = this._relativeTime[i];
            return st(u) ? u(n, t, i, r) : u.replace(/%d/i, n)
        }

        function ov(n, t) {
            var i = this._relativeTime[n > 0 ? "future" : "past"];
            return st(i) ? i(t) : i.replace(/%s/i, t)
        }

        function ns(n, t, i, r) {
            var u = yt(),
                f = gt().set(r, t);
            return u[i](f, n)
        }

        function ci(n, t, i, r, u) {
            if(typeof n == "number" && (t = n, n = undefined), n = n || "", t != null) return ns(n, t, i, u);
            for(var e = [], f = 0; f < r; f++) e[f] = ns(n, f, i, u);
            return e
        }

        function sv(n, t) {
            return ci(n, t, "months", 12, "month")
        }

        function hv(n, t) {
            return ci(n, t, "monthsShort", 12, "month")
        }

        function cv(n, t) {
            return ci(n, t, "weekdays", 7, "day")
        }

        function lv(n, t) {
            return ci(n, t, "weekdaysShort", 7, "day")
        }

        function av(n, t) {
            return ci(n, t, "weekdaysMin", 7, "day")
        }

        function vv() {
            var n = this._data;
            return this._milliseconds = it(this._milliseconds), this._days = it(this._days), this._months = it(this._months), n.milliseconds = it(n.milliseconds), n.seconds = it(n.seconds), n.minutes = it(n.minutes), n.hours = it(n.hours), n.months = it(n.months), n.years = it(n.years), this
        }

        function ts(n, t, i, r) {
            var u = ht(t, i);
            return n._milliseconds += r * u._milliseconds, n._days += r * u._days, n._months += r * u._months, n._bubble()
        }

        function yv(n, t) {
            return ts(this, n, t, 1)
        }

        function pv(n, t) {
            return ts(this, n, t, -1)
        }

        function is(n) {
            return n < 0 ? Math.floor(n) : Math.ceil(n)
        }

        function wv() {
            var r = this._milliseconds,
                n = this._days,
                t = this._months,
                i = this._data,
                u, f, e, s, o;
            return r >= 0 && n >= 0 && t >= 0 || r <= 0 && n <= 0 && t <= 0 || (r += is(pu(t) + n) * 864e5, n = 0, t = 0), i.milliseconds = r % 1e3, u = p(r / 1e3), i.seconds = u % 60, f = p(u / 60), i.minutes = f % 60, e = p(f / 60), i.hours = e % 24, n += p(e / 24), o = p(rs(n)), t += o, n -= is(pu(o)), s = p(t / 12), t %= 12, i.days = n, i.months = t, i.years = s, this
        }

        function rs(n) {
            return n * 4800 / 146097
        }

        function pu(n) {
            return n * 146097 / 4800
        }

        function bv(n) {
            var t, r, i = this._milliseconds;
            if(n = k(n), n === "month" || n === "year") return t = this._days + i / 864e5, r = this._months + rs(t), n === "month" ? r : r / 12;
            t = this._days + Math.round(pu(this._months));
            switch(n) {
                case "week":
                    return t / 7 + i / 6048e5;
                case "day":
                    return t + i / 864e5;
                case "hour":
                    return t * 24 + i / 36e5;
                case "minute":
                    return t * 1440 + i / 6e4;
                case "second":
                    return t * 86400 + i / 1e3;
                case "millisecond":
                    return Math.floor(t * 864e5) + i;
                default:
                    throw new Error("Unknown unit " + n);
            }
        }

        function kv() {
            return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + f(this._months / 12) * 31536e6
        }

        function lt(n) {
            return function() {
                return this.as(n)
            }
        }

        function ey(n) {
            return n = k(n), this[n + "s"]()
        }

        function kt(n) {
            return function() {
                return this._data[n]
            }
        }

        function yy() {
            return p(this.days() / 7)
        }

        function py(n, t, i, r, u) {
            return u.relativeTime(t || 1, !!i, n, r)
        }

        function wy(n, t, i) {
            var r = ht(n).abs(),
                h = dt(r.as("s")),
                f = dt(r.as("m")),
                e = dt(r.as("h")),
                o = dt(r.as("d")),
                s = dt(r.as("M")),
                c = dt(r.as("y")),
                u = h < et.s && ["s", h] || f <= 1 && ["m"] || f < et.m && ["mm", f] || e <= 1 && ["h"] || e < et.h && ["hh", e] || o <= 1 && ["d"] || o < et.d && ["dd", o] || s <= 1 && ["M"] || s < et.M && ["MM", s] || c <= 1 && ["y"] || ["yy", c];
            return u[2] = t, u[3] = +n > 0, u[4] = i, py.apply(null, u)
        }

        function by(n, t) {
            return et[n] === undefined ? !1 : t === undefined ? et[n] : (et[n] = t, !0)
        }

        function ky(n) {
            var t = this.localeData(),
                i = wy(this, !n, t);
            return n && (i = t.pastFuture(+this, i)), t.postformat(i)
        }

        function sr() {
            var t = or(this._milliseconds) / 1e3,
                a = or(this._days),
                i = or(this._months),
                n, e, o;
            n = p(t / 60);
            e = p(n / 60);
            t %= 60;
            n %= 60;
            o = p(i / 12);
            i %= 12;
            var s = o,
                h = i,
                c = a,
                r = e,
                u = n,
                f = t,
                l = this.asSeconds();
            return l ? (l < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (h ? h + "M" : "") + (c ? c + "D" : "") + (r || u || f ? "T" : "") + (r ? r + "H" : "") + (u ? u + "M" : "") + (f ? f + "S" : "") : "P0D"
        }
        var wu, cr = i.momentProperties = [],
            ar = !1,
            gu = {},
            l, vi, ti, tr, tu, yf, pf, kf, df, uu, fe, ee, se, ce, ae, ve, ke, de, lu, io, au, ro, uo, fo, so, ho, co, lo, ct, ao, n, yu, vo, yo, po, wo, bo, go, u, it, dt, et, or, o;
        i.suppressDeprecationWarnings = !1;
        l = {};
        ti = {};
        var sf = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            pi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            wr = {},
            ri = {};
        var cf = /\d/,
            w = /\d\d/,
            lf = /\d{3}/,
            kr = /\d{4}/,
            wi = /[+-]?\d{6}/,
            c = /\d\d?/,
            af = /\d\d\d\d?/,
            vf = /\d\d\d\d\d\d?/,
            bi = /\d{1,3}/,
            dr = /\d{1,4}/,
            ki = /[+-]?\d{1,6}/,
            di = /[+-]?\d+/,
            as = /Z|[+-]\d\d:?\d\d/gi,
            gi = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ei = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            gr = {};
        tr = {};
        var d = 0,
            ut = 1,
            tt = 2,
            a = 3,
            g = 4,
            ft = 5,
            pt = 6,
            ws = 7,
            bs = 8;
        r("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        });
        r("MMM", 0, 0, function(n) {
            return this.localeData().monthsShort(this, n)
        });
        r("MMMM", 0, 0, function(n) {
            return this.localeData().months(this, n)
        });
        v("month", "M");
        t("M", c);
        t("MM", c, w);
        t("MMM", function(n, t) {
            return t.monthsShortRegex(n)
        });
        t("MMMM", function(n, t) {
            return t.monthsRegex(n)
        });
        s(["M", "MM"], function(n, t) {
            t[ut] = f(n) - 1
        });
        s(["MMM", "MMMM"], function(n, t, i, r) {
            var u = i._locale.monthsParse(n, r, i._strict);
            u != null ? t[ut] = u : e(i).invalidMonth = n
        });
        tu = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
        yf = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
        pf = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
        kf = ei;
        df = ei;
        var rh = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            uh = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            fh = /Z|[+-]\d\d(?::?\d\d)?/,
            ir = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            ru = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            eh = /^\/?Date\((\-?\d+)/i;
        for(i.createFromInputFallback = b("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(n) {
            n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
        }), r("Y", 0, 0, function() {
            var n = this.year();
            return n <= 9999 ? "" + n : "+" + n
        }), r(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), r(0, ["YYYY", 4], 0, "year"), r(0, ["YYYYY", 5], 0, "year"), r(0, ["YYYYYY", 6, !0], 0, "year"), v("year", "y"), t("Y", di), t("YY", c, w), t("YYYY", dr, kr), t("YYYYY", ki, wi), t("YYYYYY", ki, wi), s(["YYYYY", "YYYYYY"], d), s("YYYY", function(n, t) {
            t[d] = n.length === 2 ? i.parseTwoDigitYear(n) : f(n)
        }), s("YY", function(n, t) {
            t[d] = i.parseTwoDigitYear(n)
        }), s("Y", function(n, t) {
            t[d] = parseInt(n, 10)
        }), i.parseTwoDigitYear = function(n) {
            return f(n) + (f(n) > 68 ? 1900 : 2e3)
        }, uu = ii("FullYear", !1), i.ISO_8601 = function() {}, fe = b("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var n = h.apply(null, arguments);
            return this.isValid() && n.isValid() ? n < this ? this : n : ai()
        }), ee = b("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var n = h.apply(null, arguments);
            return this.isValid() && n.isValid() ? n > this ? this : n : ai()
        }), se = function() {
            return Date.now ? Date.now() : +new Date
        }, he("Z", ":"), he("ZZ", ""), t("Z", gi), t("ZZ", gi), s(["Z", "ZZ"], function(n, t, i) {
            i._useUTC = !0;
            i._tzm = su(gi, n)
        }), ce = /([\+\-]|\d\d)/gi, i.updateOffset = function() {}, ae = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/, ve = /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/, ht.fn = fr.prototype, ke = we(1, "add"), de = we(-1, "subtract"), i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", lu = b("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(n) {
            return n === undefined ? this.localeData() : this.locale(n)
        }), r(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), r(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), er("gggg", "weekYear"), er("ggggg", "weekYear"), er("GGGG", "isoWeekYear"), er("GGGGG", "isoWeekYear"), v("weekYear", "gg"), v("isoWeekYear", "GG"), t("G", di), t("g", di), t("GG", c, w), t("gg", c, w), t("GGGG", dr, kr), t("gggg", dr, kr), t("GGGGG", ki, wi), t("ggggg", ki, wi), oi(["gggg", "ggggg", "GGGG", "GGGGG"], function(n, t, i, r) {
            t[r.substr(0, 2)] = f(n)
        }), oi(["gg", "GG"], function(n, t, r, u) {
            t[u] = i.parseTwoDigitYear(n)
        }), r("Q", 0, "Qo", "quarter"), v("quarter", "Q"), t("Q", cf), s("Q", function(n, t) {
            t[ut] = (f(n) - 1) * 3
        }), r("w", ["ww", 2], "wo", "week"), r("W", ["WW", 2], "Wo", "isoWeek"), v("week", "w"), v("isoWeek", "W"), t("w", c), t("ww", c, w), t("W", c), t("WW", c, w), oi(["w", "ww", "W", "WW"], function(n, t, i, r) {
            t[r.substr(0, 1)] = f(n)
        }), io = {
            dow: 0,
            doy: 6
        }, r("D", ["DD", 2], "Do", "date"), v("date", "D"), t("D", c), t("DD", c, w), t("Do", function(n, t) {
            return n ? t._ordinalParse : t._ordinalParseLenient
        }), s(["D", "DD"], tt), s("Do", function(n, t) {
            t[tt] = f(n.match(c)[0], 10)
        }), au = ii("Date", !0), r("d", 0, "do", "day"), r("dd", 0, 0, function(n) {
            return this.localeData().weekdaysMin(this, n)
        }), r("ddd", 0, 0, function(n) {
            return this.localeData().weekdaysShort(this, n)
        }), r("dddd", 0, 0, function(n) {
            return this.localeData().weekdays(this, n)
        }), r("e", 0, 0, "weekday"), r("E", 0, 0, "isoWeekday"), v("day", "d"), v("weekday", "e"), v("isoWeekday", "E"), t("d", c), t("e", c), t("E", c), t("dd", ei), t("ddd", ei), t("dddd", ei), oi(["dd", "ddd", "dddd"], function(n, t, i, r) {
            var u = i._locale.weekdaysParse(n, r, i._strict);
            u != null ? t.d = u : e(i).invalidWeekday = n
        }), oi(["d", "e", "E"], function(n, t, i, r) {
            t[r] = f(n)
        }), ro = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), uo = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), fo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), r("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), v("dayOfYear", "DDD"), t("DDD", bi), t("DDDD", lf), s(["DDD", "DDDD"], function(n, t, i) {
            i._dayOfYear = f(n)
        }), r("H", ["HH", 2], 0, "hour"), r("h", ["hh", 2], 0, vu), r("hmm", 0, 0, function() {
            return "" + vu.apply(this) + rt(this.minutes(), 2)
        }), r("hmmss", 0, 0, function() {
            return "" + vu.apply(this) + rt(this.minutes(), 2) + rt(this.seconds(), 2)
        }), r("Hmm", 0, 0, function() {
            return "" + this.hours() + rt(this.minutes(), 2)
        }), r("Hmmss", 0, 0, function() {
            return "" + this.hours() + rt(this.minutes(), 2) + rt(this.seconds(), 2)
        }), eo("a", !0), eo("A", !1), v("hour", "h"), t("a", oo), t("A", oo), t("H", c), t("h", c), t("HH", c, w), t("hh", c, w), t("hmm", af), t("hmmss", vf), t("Hmm", af), t("Hmmss", vf), s(["H", "HH"], a), s(["a", "A"], function(n, t, i) {
            i._isPm = i._locale.isPM(n);
            i._meridiem = n
        }), s(["h", "hh"], function(n, t, i) {
            t[a] = f(n);
            e(i).bigHour = !0
        }), s("hmm", function(n, t, i) {
            var r = n.length - 2;
            t[a] = f(n.substr(0, r));
            t[g] = f(n.substr(r));
            e(i).bigHour = !0
        }), s("hmmss", function(n, t, i) {
            var r = n.length - 4,
                u = n.length - 2;
            t[a] = f(n.substr(0, r));
            t[g] = f(n.substr(r, 2));
            t[ft] = f(n.substr(u));
            e(i).bigHour = !0
        }), s("Hmm", function(n, t) {
            var i = n.length - 2;
            t[a] = f(n.substr(0, i));
            t[g] = f(n.substr(i))
        }), s("Hmmss", function(n, t) {
            var i = n.length - 4,
                r = n.length - 2;
            t[a] = f(n.substr(0, i));
            t[g] = f(n.substr(i, 2));
            t[ft] = f(n.substr(r))
        }), so = /[ap]\.?m?\.?/i, ho = ii("Hours", !0), r("m", ["mm", 2], 0, "minute"), v("minute", "m"), t("m", c), t("mm", c, w), s(["m", "mm"], g), co = ii("Minutes", !1), r("s", ["ss", 2], 0, "second"), v("second", "s"), t("s", c), t("ss", c, w), s(["s", "ss"], ft), lo = ii("Seconds", !1), r("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), r(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), r(0, ["SSS", 3], 0, "millisecond"), r(0, ["SSSS", 4], 0, function() {
            return this.millisecond() * 10
        }), r(0, ["SSSSS", 5], 0, function() {
            return this.millisecond() * 100
        }), r(0, ["SSSSSS", 6], 0, function() {
            return this.millisecond() * 1e3
        }), r(0, ["SSSSSSS", 7], 0, function() {
            return this.millisecond() * 1e4
        }), r(0, ["SSSSSSSS", 8], 0, function() {
            return this.millisecond() * 1e5
        }), r(0, ["SSSSSSSSS", 9], 0, function() {
            return this.millisecond() * 1e6
        }), v("millisecond", "ms"), t("S", bi, cf), t("SS", bi, w), t("SSS", bi, lf), ct = "SSSS"; ct.length <= 9; ct += "S") t(ct, /\d+/);
        for(ct = "S"; ct.length <= 9; ct += "S") s(ct, ka);
        ao = ii("Milliseconds", !1);
        r("z", 0, 0, "zoneAbbr");
        r("zz", 0, 0, "zoneName");
        n = fi.prototype;
        n.add = ke;
        n.calendar = hc;
        n.clone = cc;
        n.diff = bc;
        n.endOf = el;
        n.format = nl;
        n.from = tl;
        n.fromNow = il;
        n.to = rl;
        n.toNow = ul;
        n.get = of;
        n.invalidAt = pl;
        n.isAfter = lc;
        n.isBefore = ac;
        n.isBetween = vc;
        n.isSame = yc;
        n.isSameOrAfter = pc;
        n.isSameOrBefore = wc;
        n.isValid = vl;
        n.lang = lu;
        n.locale = ge;
        n.localeData = no;
        n.max = ee;
        n.min = fe;
        n.parsingFlags = yl;
        n.set = of;
        n.startOf = fl;
        n.subtract = de;
        n.toArray = cl;
        n.toObject = ll;
        n.toDate = hl;
        n.toISOString = gc;
        n.toJSON = al;
        n.toString = dc;
        n.unix = sl;
        n.valueOf = ol;
        n.creationData = wl;
        n.year = uu;
        n.isLeapYear = hh;
        n.weekYear = bl;
        n.isoWeekYear = kl;
        n.quarter = n.quarters = ta;
        n.month = bf;
        n.daysInMonth = nh;
        n.week = n.weeks = fa;
        n.isoWeek = n.isoWeeks = ea;
        n.weeksInYear = gl;
        n.isoWeeksInYear = dl;
        n.date = au;
        n.day = n.days = aa;
        n.weekday = va;
        n.isoWeekday = ya;
        n.dayOfYear = pa;
        n.hour = n.hours = ho;
        n.minute = n.minutes = co;
        n.second = n.seconds = lo;
        n.millisecond = n.milliseconds = ao;
        n.utcOffset = dh;
        n.utc = nc;
        n.local = tc;
        n.parseZone = ic;
        n.hasAlignedHourOffset = rc;
        n.isDST = uc;
        n.isDSTShifted = fc;
        n.isLocal = ec;
        n.isUtcOffset = oc;
        n.isUtc = le;
        n.isUTC = le;
        n.zoneAbbr = da;
        n.zoneName = ga;
        n.dates = b("dates accessor is deprecated. Use date instead.", au);
        n.months = b("months accessor is deprecated. Use month instead", bf);
        n.years = b("years accessor is deprecated. Use year instead", uu);
        n.zone = b("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", gh);
        yu = n;
        vo = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        };
        yo = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        po = "Invalid date";
        wo = "%d";
        bo = /\d{1,2}/;
        go = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        };
        u = pr.prototype;
        u._calendar = vo;
        u.calendar = iv;
        u._longDateFormat = yo;
        u.longDateFormat = rv;
        u._invalidDate = po;
        u.invalidDate = uv;
        u._ordinal = wo;
        u.ordinal = fv;
        u._ordinalParse = bo;
        u.preparse = ko;
        u.postformat = ko;
        u._relativeTime = go;
        u.relativeTime = ev;
        u.pastFuture = ov;
        u.set = es;
        u.months = ks;
        u._months = yf;
        u.monthsShort = ds;
        u._monthsShort = pf;
        u.monthsParse = gs;
        u._monthsRegex = df;
        u.monthsRegex = ih;
        u._monthsShortRegex = kf;
        u.monthsShortRegex = th;
        u.week = ia;
        u._week = io;
        u.firstDayOfYear = ua;
        u.firstDayOfWeek = ra;
        u.weekdays = sa;
        u._weekdays = ro;
        u.weekdaysMin = ca;
        u._weekdaysMin = fo;
        u.weekdaysShort = ha;
        u._weekdaysShort = uo;
        u.weekdaysParse = la;
        u.isPM = wa;
        u._meridiemParse = so;
        u.meridiem = ba;
        ni("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(n) {
                var t = n % 10,
                    i = f(n % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return n + i
            }
        });
        i.lang = b("moment.lang is deprecated. Use moment.locale instead.", ni);
        i.langData = b("moment.langData is deprecated. Use moment.localeData instead.", yt);
        it = Math.abs;
        var dv = lt("ms"),
            gv = lt("s"),
            ny = lt("m"),
            ty = lt("h"),
            iy = lt("d"),
            ry = lt("w"),
            uy = lt("M"),
            fy = lt("y");
        var oy = kt("milliseconds"),
            sy = kt("seconds"),
            hy = kt("minutes"),
            cy = kt("hours"),
            ly = kt("days"),
            ay = kt("months"),
            vy = kt("years");
        return dt = Math.round, et = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, or = Math.abs, o = fr.prototype, o.abs = vv, o.add = yv, o.subtract = pv, o.as = bv, o.asMilliseconds = dv, o.asSeconds = gv, o.asMinutes = ny, o.asHours = ty, o.asDays = iy, o.asWeeks = ry, o.asMonths = uy, o.asYears = fy, o.valueOf = kv, o._bubble = wv, o.get = ey, o.milliseconds = oy, o.seconds = sy, o.minutes = hy, o.hours = cy, o.days = ly, o.weeks = yy, o.months = ay, o.years = vy, o.humanize = ky, o.toISOString = sr, o.toString = sr, o.toJSON = sr, o.locale = ge, o.localeData = no, o.toIsoString = b("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", sr), o.lang = lu, r("X", 0, 0, "unix"), r("x", 0, 0, "valueOf"), t("x", di), t("X", /[+-]?\d+(\.\d{1,3})?/), s("X", function(n, t, i) {
            i._d = new Date(parseFloat(n, 10) * 1e3)
        }), s("x", function(n, t, i) {
            i._d = new Date(f(n))
        }), i.version = "2.12.0", us(h), i.fn = yu, i.min = bh, i.max = kh, i.now = se, i.utc = gt, i.unix = nv, i.months = sv, i.isDate = li, i.locale = ni, i.invalid = ai, i.duration = ht, i.isMoment = ot, i.weekdays = cv, i.parseZone = tv, i.localeData = yt, i.isDuration = ou, i.monthsShort = hv, i.weekdaysMin = av, i.defineLocale = uf, i.updateLocale = ss, i.locales = hs, i.weekdaysShort = lv, i.normalizeUnits = k, i.relativeTimeThreshold = by, i.prototype = yu, i
    }),
    function(n) {
        n.transform = function(t) {
            var u = function(t) {
                    var i, r;
                    return n.browser.msie ? (i = n("<xml>")[0], i.loadXML(t), i) : (r = new DOMParser, r.parseFromString(t, "text/xml"))
                },
                r = function(f, o, tel, other) {
                    if(n.isFunction(f)) {
                        var arg1 = tel.html();
                        if(o.c.dataType.toUpperCase() == "JSON") try {
                            arg1 = eval("(" + tel.text() + ")")
                        } catch(ex) {
                            arg1 = {
                                error: "An error occurred while converting HTML to JSON"
                            }
                        }
                        o.c.dataType.toUpperCase() == "XML" && (arg1 = u(tel.html()));
                        try {
                            f.apply(o.c, [arg1, o.c.xslstr, o.c.xmlstr, o.c, other])
                        } catch(ex) {}
                    }
                },
                i = this;
            i.c = {
                cache: !1,
                async: !0,
                xsl: !1,
                xml: !1,
                xslstr: !1,
                xmlstr: !1,
                xslobj: !1,
                xmlobj: !1,
                xslParams: !1,
                error: !1,
                success: !1,
                complete: !1,
                island: !1,
                pass: !1,
                msg: !1,
                dataType: "html"
            };
            n.extend(i.c, t);
            t.msg && n(t.el).html(typeof t.msg == "string" ? t.msg : n(t.msg).html());
            var f = function(t) {
                    var i = t + "_" + Math.round(Math.random() * 999);
                    return n("#" + i).length === 0 ? i : f(t)
                },
                e = function(t, i) {
                    var o, u, s;
                    i.c.xsl = i.c.xsl ? i.c.xsl : "";
                    var r = location.protocol == "file:" && n.browser.msie ? "\\" : "/",
                        f = location.protocol + r + r + location.host,
                        e = location.pathname.substring(0, location.pathname.lastIndexOf(r) + 1) + i.c.xsl.substring(0, i.c.xsl.lastIndexOf("/") + 1);
                    if(t.substring(0, 1) == r) return f + t;
                    if(t.substring(0, 2) == "..") {
                        for(o = 0; t.indexOf("..") != -1;) t = t.substring(t.indexOf("..") + 3), o += 1;
                        for(u = f + e.substring(0, e.length - 1), s = 0; s < o; s++) u = u.substring(0, u.lastIndexOf(r));
                        return u + r + t
                    }
                    return f + e + t
                },
                o = function(t) {
                    var s, i, o, h, y;
                    if((t.c.xslstr || t.c.xslobj) && (t.c.xmlstr || t.c.xmlobj)) {
                        if(s = !1, i = n("<div>"), t.c.throwerror) {
                            r(t.c.error, t, i, {
                                message: "Bad XML or XSL call"
                            });
                            return
                        }
                        if(t.c.island && (t.c.island === !0 && (t.c.island = "body"), t.c.xslid = f("xsl"), n(t.c.island).append("<div id='" + t.c.xslid + "' name='" + t.c.xslid + "' style='display:none;'>" + t.c.xslstr + "<\/div>"), t.c.xmlid = f("xml"), n(t.c.island).append("<div id='" + t.c.xmlid + "' name='" + t.c.xmlid + "' style='display:none;'>" + t.c.xmlstr + "<\/div>")), t.c.xslobj = t.c.xslobj ? t.c.xslobj : u(t.c.xslstr), t.c.xmlobj = t.c.xmlobj ? t.c.xmlobj : u(t.c.xmlstr), n.browser.msie) try {
                            o = function(n, i) {
                                for(var u = i.selectNodes(n), r = 0; r < u.length; r++) u[r].setAttribute("href", e(u[r].getAttribute("href"), t))
                            };
                            o("//xsl:include", t.c.xslobj);
                            o("//xsl:import", t.c.xslobj);
                            h = function(n, t) {
                                var r, f, i, u, e;
                                for(r in n) {
                                    f = "//xsl:param[@name='" + r + "']";
                                    try {
                                        i = n[r];
                                        typeof i == "boolean" ? i = "'" + i + "'" : isNaN(parseInt(i)) && i.indexOf("'") < 0 && (i = "'" + i + "'");
                                        u = t.selectSingleNode(f);
                                        u == null && (e = t.createElement("xsl:param"), e.setAttribute("name", r), t.documentElement.insertBefore(e, t.selectSingleNode("//xsl:template")), u = t.selectSingleNode(f));
                                        u.setAttribute("select", i)
                                    } catch(o) {}
                                }
                            };
                            t.c.xslParams && (h(t.c.xslParams, t.c.xslobj), t.c.xslobj = u(t.c.xslobj.xml));
                            i.empty().html(t.c.xmlobj.transformNode(t.c.xslobj))
                        } catch(a) {
                            s = !0;
                            r(t.c.error, t, i, a)
                        } else try {
                            var l = new XSLTProcessor,
                                c = function(n, t) {
                                    for(var r = [], u = n.getElementsByTagName(t), i = 0; i < u.length; i++) u[i].parentNode == n && (r[r.length] = u[i]);
                                    return r
                                },
                                v = function(t, i) {
                                    for(var f = n.merge(n.makeArray(t.getElementsByTagName("import")), n.makeArray(t.getElementsByTagName("include"))), u, r = 0; r < f.length; r++) u = f[r], n.ajax({
                                        passData: {
                                            node: u,
                                            xObj: t,
                                            rootConfig: i
                                        },
                                        dataType: "xml",
                                        async: !1,
                                        url: e(u.getAttribute("href"), i),
                                        success: function(t) {
                                            var i, r, o, u, l;
                                            try {
                                                i = this.passData;
                                                t = v(t, i.rootConfig);
                                                var f = n.merge(c(t.getElementsByTagName("stylesheet")[0], "param"), c(t.getElementsByTagName("stylesheet")[0], "template")),
                                                    e = n.merge(c(i.xObj.getElementsByTagName("stylesheet")[0], "param"), c(i.xObj.getElementsByTagName("stylesheet")[0], "template")),
                                                    s = [],
                                                    h = [];
                                                for(r = 0; r < e.length; r++) e[r].getAttribute("name") ? s[e[r].getAttribute("name")] = !0 : h[e[r].getAttribute("match")] = !0;
                                                for(o = i.node.parentNode, u = 0; u < f.length; u++) s[f[u].getAttribute("name")] || h[f[u].getAttribute("match")] || (l = i.xObj.importNode(f[u], !0), o.insertBefore(l, i.xObj.getElementsByTagName("template")[0]));
                                                o.removeChild(i.node)
                                            } catch(a) {}
                                        }
                                    });
                                    return t
                                };
                            o = function(i, r) {
                                var f, u;
                                for(i = n.browser.mozilla && n.browser.version.substring(0, 3) == "1.9" ? "xsl:" + i : i, f = r.getElementsByTagName(i), u = 0; u < f.length; u++) f[u].setAttribute("href", e(f[u].getAttribute("href"), t))
                            };
                            n.browser.safari ? t.c.xslobj = v(t.c.xslobj, t) : (o("import", t.c.xslobj), o("include", t.c.xslobj));
                            h = function(n) {
                                for(var t in n) try {
                                    l.setParameter(null, t, n[t])
                                } catch(i) {}
                            };
                            h(t.c.xslParams);
                            y = document.implementation.createDocument("", "", null);
                            l.importStylesheet(t.c.xslobj);
                            i.empty().append(l.transformToFragment(t.c.xmlobj, y))
                        } catch(a) {
                            s = !0;
                            r(t.c.error, t, i, a)
                        }
                        return t.c.el && i.html() && n(t.c.el).html(i.html()), s || r(t.c.success, t, i), r(t.c.complete, t, i), i.html()
                    }
                },
                s = function(t, i, u) {
                    typeof i == "string" && (i = {
                        cache: !1,
                        url: i,
                        dataType: "xml",
                        async: t.c.async,
                        pass: t.c.pass
                    });
                    i.complete = function(i, f) {
                        if(f != "success") {
                            t.c.threwError || (t.c.threwError = !0, r(t.c.error, t, n("<div>" + i.responseText + "<\/div>"), {
                                message: "Error requesting file " + this.url
                            }), r(t.c.complete, t, n("<div>" + i.responseText + "<\/div>")));
                            return
                        }
                        u == "XSL" ? i.status == 200 ? t.c.xslstr = i.responseText : (t.c.xslstr = "error", t.c.throwerror = !0) : i.status == 200 ? t.c.xmlstr = i.responseText : (t.c.xmlstr = "error", t.c.throwerror = !0);
                        t.c.async && o(t)
                    };
                    n.ajax(i)
                };
            return i.c.xsl && s(i, t.xsl, "XSL"), i.c.xml && s(i, t.xml, "XML"), !i.c.async || i.c.xmlstr || i.c.xmlobj || i.c.xslstr || i.c.xslobj ? o(i) : void 0
        };
        n.fn.transform = function(t) {
            return this.each(function() {
                t = t ? t : {};
                t.el = this;
                var i = new n.transform(t)
            })
        }
    }(jQuery);
$().ready(function() {
    $("[transform]").each(function(num, el) {
        $(el).transform(eval("(" + $(el).attr("transform") + ")"))
    })
});
! function(n) {
    "use strict";

    function t(n, t) {
        return "f" === n ? Math.round(5 / 9 * (t - 32)) : Math.round(1.8 * t + 32)
    }
    n.extend({
        simpleWeather: function(i) {
            var r, u, f;
            if(i = n.extend({
                    location: "",
                    woeid: "",
                    unit: "f",
                    success: function() {},
                    error: function() {}
                }, i), r = new Date, u = "https://query.yahooapis.com/v1/public/yql?format=json&rnd=" + r.getFullYear() + r.getMonth() + r.getDay() + r.getHours() + "&diagnostics=true&callback=?&q=", "" !== i.location) f = "", f = /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/.test(i.location) ? "(" + i.location + ")" : i.location, u += 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + f + '") and u="' + i.unit + '"';
            else {
                if("" === i.woeid) return i.error("Could not retrieve weather due to an invalid location."), !1;
                u += "select * from weather.forecast where woeid=" + i.woeid + ' and u="' + i.unit + '"'
            }
            return n.getJSON(encodeURI(u), function(n) {
                var f;
                if(null !== n && null !== n.query && null !== n.query.results && "Yahoo! Weather Error" !== n.query.results.channel.description) {
                    var e, r = n.query.results.channel,
                        u = {},
                        o = "https://s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png";
                    for(u.title = r.item.title, u.temp = r.item.condition.temp, u.code = r.item.condition.code, u.todayCode = r.item.forecast[0].code, u.currently = r.item.condition.text, u.high = r.item.forecast[0].high, u.low = r.item.forecast[0].low, u.text = r.item.forecast[0].text, u.humidity = r.atmosphere.humidity, u.pressure = r.atmosphere.pressure, u.rising = r.atmosphere.rising, u.visibility = r.atmosphere.visibility, u.sunrise = r.astronomy.sunrise, u.sunset = r.astronomy.sunset, u.description = r.item.description, u.city = r.location.city, u.country = r.location.country, u.region = r.location.region, u.updated = r.item.pubDate, u.link = r.item.link, u.units = {
                        temp: r.units.temperature,
                        distance: r.units.distance,
                        pressure: r.units.pressure,
                        speed: r.units.speed
                    }, u.wind = {
                        chill: r.wind.chill,
                        direction: ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"][Math.round(r.wind.direction / 22.5)],
                        speed: r.wind.speed
                    }, u.heatindex = r.item.condition.temp < 80 && r.atmosphere.humidity < 40 ? -42.379 + 2.04901523 * r.item.condition.temp + 10.14333127 * r.atmosphere.humidity - .22475541 * r.item.condition.temp * r.atmosphere.humidity - 6.83783 * Math.pow(10, -3) * Math.pow(r.item.condition.temp, 2) - 5.481717 * Math.pow(10, -2) * Math.pow(r.atmosphere.humidity, 2) + 1.22874 * Math.pow(10, -3) * Math.pow(r.item.condition.temp, 2) * r.atmosphere.humidity + 8.5282 * Math.pow(10, -4) * r.item.condition.temp * Math.pow(r.atmosphere.humidity, 2) - 1.99 * Math.pow(10, -6) * Math.pow(r.item.condition.temp, 2) * Math.pow(r.atmosphere.humidity, 2) : r.item.condition.temp, "3200" == r.item.condition.code ? (u.thumbnail = o, u.image = o) : (u.thumbnail = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + r.item.condition.code + "ds.png", u.image = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + r.item.condition.code + "d.png"), u.alt = {
                        temp: t(i.unit, r.item.condition.temp),
                        high: t(i.unit, r.item.forecast[0].high),
                        low: t(i.unit, r.item.forecast[0].low)
                    }, u.alt.unit = "f" === i.unit ? "c" : "f", u.forecast = [], f = 0; f < r.item.forecast.length; f++) e = r.item.forecast[f], e.alt = {
                        high: t(i.unit, r.item.forecast[f].high),
                        low: t(i.unit, r.item.forecast[f].low)
                    }, "3200" == r.item.forecast[f].code ? (e.thumbnail = o, e.image = o) : (e.thumbnail = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + r.item.forecast[f].code + "ds.png", e.image = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + r.item.forecast[f].code + "d.png"), u.forecast.push(e);
                    i.success(u)
                } else i.error("There was a problem retrieving the latest weather information.")
            }), this
        }
    })
}(jQuery),
    function() {
        "use strict";

        function st(n) {
            return n.valueOf() / a - .5 + b
        }

        function e(n) {
            return new Date((n + .5 - b) * a)
        }

        function o(n) {
            return st(n) - k
        }

        function d(i, r) {
            return f(n(i) * t(s) - l(r) * n(s), t(i))
        }

        function v(i, r) {
            return p(n(r) * t(s) + t(r) * n(s) * n(i))
        }

        function g(i, r, u) {
            return f(n(i), t(i) * n(r) - l(u) * t(r))
        }

        function nt(i, r, u) {
            return p(n(r) * n(u) + t(r) * t(u) * t(i))
        }

        function tt(n, t) {
            return i * (280.16 + 360.9856235 * n) - t
        }

        function it(n) {
            return i * (357.5291 + .98560028 * n)
        }

        function rt(t) {
            var r = i * (1.9148 * n(t) + .02 * n(2 * t) + .0003 * n(3 * t)),
                f = i * 102.9372;
            return t + r + f + u
        }

        function ut(n) {
            var i = it(n),
                t = rt(i);
            return {
                dec: v(t, 0),
                ra: d(t, 0)
            }
        }

        function ht(n, t) {
            return Math.round(n - y - t / (2 * u))
        }

        function ft(n, t, i) {
            return y + (n + t) / (2 * u) + i
        }

        function et(t, i, r) {
            return k + t + .0053 * n(i) - .0069 * n(2 * r)
        }

        function ct(i, r, u) {
            return w((n(i) - n(r) * n(u)) / (t(r) * t(u)))
        }

        function lt(n, t, i, r, u, f, e) {
            var o = ct(n, i, r),
                s = ft(o, t, u);
            return et(s, f, e)
        }

        function ot(r) {
            var o = i * (218.316 + 13.176396 * r),
                u = i * (134.963 + 13.064993 * r),
                s = i * (93.272 + 13.22935 * r),
                f = o + i * 6.289 * n(u),
                e = i * 5.128 * n(s),
                h = 385001 - 20905 * t(u);
            return {
                ra: d(f, e),
                dec: v(f, e),
                dist: h
            }
        }

        function c(n, t) {
            return new Date(n.valueOf() + t * a / 24)
        }
        var u = Math.PI,
            n = Math.sin,
            t = Math.cos,
            l = Math.tan,
            p = Math.asin,
            f = Math.atan2,
            w = Math.acos,
            i = u / 180,
            a = 864e5,
            b = 2440588,
            k = 2451545,
            s = i * 23.4397,
            r = {},
            h, y;
        r.getPosition = function(n, t, r) {
            var h = i * -r,
                f = i * t,
                e = o(n),
                u = ut(e),
                s = tt(e, h) - u.ra;
            return {
                azimuth: g(s, f, u.dec),
                altitude: nt(s, f, u.dec)
            }
        };
        h = r.times = [
            [-.833, "sunrise", "sunset"],
            [-.3, "sunriseEnd", "sunsetStart"],
            [-6, "dawn", "dusk"],
            [-12, "nauticalDawn", "nauticalDusk"],
            [-18, "nightEnd", "night"],
            [6, "goldenHourEnd", "goldenHour"]
        ];
        r.addTime = function(n, t, i) {
            h.push([n, t, i])
        };
        y = .0009;
        r.getTimes = function(n, t, r) {
            for(var c = i * -r, g = i * t, nt = o(n), w = ht(nt, c), b = ft(0, c, w), l = it(b), a = rt(l), tt = v(a, 0), u = et(b, l, a), s, y, d, p = {
                solarNoon: e(u),
                nadir: e(u - .5)
            }, f = 0, k = h.length; f < k; f += 1) s = h[f], y = lt(s[0] * i, c, g, tt, w, l, a), d = u - (y - u), p[s[1]] = e(d), p[s[2]] = e(y);
            return p
        };
        r.getMoonPosition = function(n, t, r) {
            var c = i * -r,
                e = i * t,
                s = o(n),
                f = ot(s),
                h = tt(s, c) - f.ra,
                u = nt(h, e, f.dec);
            return u = u + i * .017 / l(u + i * 10.26 / (u + i * 5.1)), {
                azimuth: g(h, e, f.dec),
                altitude: u,
                distance: f.dist
            }
        };
        r.getMoonIllumination = function(i) {
            var e = o(i),
                r = ut(e),
                u = ot(e),
                s = 149598e3,
                h = w(n(r.dec) * n(u.dec) + t(r.dec) * t(u.dec) * t(r.ra - u.ra)),
                c = f(s * n(h), u.dist - s * t(h)),
                l = f(t(r.dec) * n(r.ra - u.ra), n(r.dec) * t(u.dec) - t(r.dec) * n(u.dec) * t(r.ra - u.ra));
            return {
                fraction: (1 + t(c)) / 2,
                phase: .5 + .5 * c * (l < 0 ? -1 : 1) / Math.PI,
                angle: l
            }
        };
        r.getMoonTimes = function(n, t, u, f) {
            var s = new Date(n),
                d, a, g, nt, h, l, v, y, p, tt, it, w, o, b, rt, e, k;
            for(f ? s.setUTCHours(0, 0, 0, 0) : s.setHours(0, 0, 0, 0), d = .133 * i, a = r.getMoonPosition(s, t, u).altitude - d, e = 1; e <= 24; e += 2) {
                if(g = r.getMoonPosition(c(s, e), t, u).altitude - d, nt = r.getMoonPosition(c(s, e + 1), t, u).altitude - d, v = (a + nt) / 2 - g, y = (nt - a) / 2, p = -y / (2 * v), tt = (v * p + y) * p + g, it = y * y - 4 * v * g, w = 0, it >= 0 && (rt = Math.sqrt(it) / (Math.abs(v) * 2), o = p - rt, b = p + rt, Math.abs(o) <= 1 && w++, Math.abs(b) <= 1 && w++, o < -1 && (o = b)), w === 1 ? a < 0 ? h = e + o : l = e + o : w === 2 && (h = e + (tt < 0 ? b : o), l = e + (tt < 0 ? o : b)), h && l) break;
                a = nt
            }
            return k = {}, h && (k.rise = c(s, h)), l && (k.set = c(s, l)), h || l || (k[tt > 0 ? "alwaysUp" : "alwaysDown"] = !0), k
        };
        typeof define == "function" && define.amd ? define(r) : typeof module != "undefined" ? module.exports = r : window.SunCalc = r
    }();
$jscomp = {
    scope: {},
    findInternal: function(n, t, i) {
        var f, r, u;
        for(n instanceof String && (n = String(n)), f = n.length, r = 0; r < f; r++)
            if(u = n[r], t.call(i, u, r, n)) return {
                i: r,
                v: u
            };
        return {
            i: -1,
            v: void 0
        }
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(n, t, i) {
    if(i.get || i.set) throw new TypeError("ES3 does not support getters and setters.");
    n != Array.prototype && n != Object.prototype && (n[t] = i.value)
};
$jscomp.getGlobal = function(n) {
    return "undefined" != typeof window && window === n ? n : "undefined" != typeof global && null != global ? global : n
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(n, t, i, r) {
    if(t) {
        for(i = $jscomp.global, n = n.split("."), r = 0; r < n.length - 1; r++) {
            var u = n[r];
            u in i || (i[u] = {});
            i = i[u]
        }
        n = n[n.length - 1];
        r = i[n];
        t = t(r);
        t != r && null != t && $jscomp.defineProperty(i, n, {
            configurable: !0,
            writable: !0,
            value: t
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(n) {
    return n ? n : function(n, t) {
        return $jscomp.findInternal(this, n, t).v
    }
}, "es6-impl", "es3"),
    function(n, t, i) {
        "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof exports ? module.exports = n(require("jquery")) : n(t || i)
    }(function(n) {
        var r = function(t, i, r) {
                var u = {
                        invalid: [],
                        getCaret: function() {
                            try {
                                var n, i = 0,
                                    e = t.get(0),
                                    f = document.selection,
                                    r = e.selectionStart;
                                return f && -1 === navigator.appVersion.indexOf("MSIE 10") ? (n = f.createRange(), n.moveStart("character", -u.val().length), i = n.text.length) : (r || "0" === r) && (i = r), i
                            } catch(o) {}
                        },
                        setCaret: function(n) {
                            try {
                                if(t.is(":focus")) {
                                    var i, r = t.get(0);
                                    n += 1;
                                    r.setSelectionRange ? r.setSelectionRange(n, n) : (i = r.createTextRange(), i.collapse(!0), i.moveEnd("character", n), i.moveStart("character", n), i.select())
                                }
                            } catch(u) {}
                        },
                        events: function() {
                            t.on("keydown.mask", function(n) {
                                t.data("mask-keycode", n.keyCode || n.which)
                            }).on(n.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", u.behaviour).on("paste.mask drop.mask", function() {
                                setTimeout(function() {
                                    t.keydown().keyup()
                                }, 100)
                            }).on("change.mask", function() {
                                t.data("changed", !0)
                            }).on("blur.mask", function() {
                                e === u.val() || t.data("changed") || t.trigger("change");
                                t.data("changed", !1)
                            }).on("blur.mask", function() {
                                e = u.val()
                            }).on("focus.mask", function(t) {
                                !0 === r.selectOnFocus && n(t.target).select()
                            }).on("focusout.mask", function() {
                                r.clearIfNotMatch && !o.test(u.val()) && u.val("")
                            })
                        },
                        getRegexMask: function() {
                            for(var n = [], t, e, o, r, u = 0; u < i.length; u++)(t = f.translation[i.charAt(u)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), o = t.optional, (t = t.recursive) ? (n.push(i.charAt(u)), r = {
                                digit: i.charAt(u),
                                pattern: e
                            }) : n.push(o || t ? e + "?" : e)) : n.push(i.charAt(u).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                            return n = n.join(""), r && (n = n.replace(new RegExp("(" + r.digit + "(.*" + r.digit + ")?)"), "($1)?").replace(new RegExp(r.digit, "g"), r.pattern)), new RegExp(n)
                        },
                        destroyEvents: function() {
                            t.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
                        },
                        val: function(n) {
                            var i = t.is("input") ? "val" : "text";
                            return 0 < arguments.length ? (t[i]() !== n && t[i](n), i = t) : i = t[i](), i
                        },
                        getMCharsBeforeCount: function(n, t) {
                            for(var u = 0, r = 0, e = i.length; r < e && r < n; r++) f.translation[i.charAt(r)] || (n = t ? n + 1 : n, u++);
                            return u
                        },
                        caretPos: function(n, t, r, e) {
                            return f.translation[i.charAt(Math.min(n - 1, i.length - 1))] ? Math.min(n + r - t - e, r) : u.caretPos(n + 1, t, r, e)
                        },
                        behaviour: function(i) {
                            var e;
                            if(i = i || window.event, u.invalid = [], e = t.data("mask-keycode"), -1 === n.inArray(e, f.byPassKeys)) {
                                var r = u.getCaret(),
                                    o = u.val(),
                                    s = o.length,
                                    h = u.getMasked(),
                                    c = h.length,
                                    l = u.getMCharsBeforeCount(c - 1) - u.getMCharsBeforeCount(s - 1),
                                    o = r < s && h !== o;
                                return u.val(h), o && (8 !== e && 46 !== e ? r = u.caretPos(r, s, c, l) : --r, u.setCaret(r)), u.callbacks(i)
                            }
                        },
                        getMasked: function(n, t) {
                            var c = [],
                                l = void 0 === t ? u.val() : t + "",
                                e = 0,
                                y = i.length,
                                s = 0,
                                k = l.length,
                                o = 1,
                                p = "push",
                                w = -1,
                                a, d, g;
                            for(r.reverse ? (p = "unshift", o = -1, a = 0, e = y - 1, s = k - 1, d = function() {
                                return -1 < e && -1 < s
                            }) : (a = y - 1, d = function() {
                                return e < y && s < k
                            }); d();) {
                                var b = i.charAt(e),
                                    v = l.charAt(s),
                                    h = f.translation[b];
                                h ? (v.match(h.pattern) ? (c[p](v), h.recursive && (-1 === w ? w = e : e === a && (e = w - o), a === w && (e -= o)), e += o) : v === g ? g = void 0 : h.optional ? (e += o, s -= o) : h.fallback ? (c[p](h.fallback), e += o, s -= o) : u.invalid.push({
                                    p: s,
                                    v: v,
                                    e: h.pattern
                                }), s += o) : (n || c[p](b), v === b ? s += o : g = b, e += o)
                            }
                            return l = i.charAt(a), y !== k + 1 || f.translation[l] || c.push(l), c.join("")
                        },
                        callbacks: function(n) {
                            var f = u.val(),
                                h = f !== e,
                                s = [f, n, t, r],
                                o = function(n, t, i) {
                                    "function" == typeof r[n] && t && r[n].apply(this, i)
                                };
                            o("onChange", !0 === h, s);
                            o("onKeyPress", !0 === h, s);
                            o("onComplete", f.length === i.length, s);
                            o("onInvalid", 0 < u.invalid.length, [f, n, t, u.invalid, r])
                        }
                    },
                    f, e, o;
                t = n(t);
                f = this;
                e = u.val();
                i = "function" == typeof i ? i(u.val(), void 0, t, r) : i;
                f.mask = i;
                f.options = r;
                f.remove = function() {
                    var n = u.getCaret();
                    return u.destroyEvents(), u.val(f.getCleanVal()), u.setCaret(n - u.getMCharsBeforeCount(n)), t
                };
                f.getCleanVal = function() {
                    return u.getMasked(!0)
                };
                f.getMaskedVal = function(n) {
                    return u.getMasked(!1, n)
                };
                f.init = function(e) {
                    var s, h;
                    if(e = e || !1, r = r || {}, f.clearIfNotMatch = n.jMaskGlobals.clearIfNotMatch, f.byPassKeys = n.jMaskGlobals.byPassKeys, f.translation = n.extend({}, n.jMaskGlobals.translation, r.translation), f = n.extend(!0, {}, f, r), o = u.getRegexMask(), e) u.events(), u.val(u.getMasked());
                    else {
                        for(r.placeholder && t.attr("placeholder", r.placeholder), t.data("mask") && t.attr("autocomplete", "off"), e = 0, s = !0; e < i.length; e++)
                            if(h = f.translation[i.charAt(e)], h && h.recursive) {
                                s = !1;
                                break
                            }
                        s && t.attr("maxlength", i.length);
                        u.destroyEvents();
                        u.events();
                        e = u.getCaret();
                        u.val(u.getMasked());
                        u.setCaret(e + u.getMCharsBeforeCount(e, !0))
                    }
                };
                f.init(!t.is("input"))
            },
            u, i, t;
        n.maskWatchers = {};
        u = function() {
            var t = n(this),
                u = {},
                f = t.attr("data-mask");
            return t.attr("data-mask-reverse") && (u.reverse = !0), t.attr("data-mask-clearifnotmatch") && (u.clearIfNotMatch = !0), "true" === t.attr("data-mask-selectonfocus") && (u.selectOnFocus = !0), i(t, f, u) ? t.data("mask", new r(this, f, u)) : void 0
        };
        i = function(t, i, r) {
            r = r || {};
            var u = n(t).data("mask"),
                f = JSON.stringify;
            t = n(t).val() || n(t).text();
            try {
                return "function" == typeof i && (i = i(t)), "object" != typeof u || f(u.options) !== f(r) || u.mask !== i
            } catch(e) {}
        };
        n.fn.mask = function(t, u) {
            u = u || {};
            var f = this.selector,
                e = n.jMaskGlobals,
                s = e.watchInterval,
                e = u.watchInputs || e.watchInputs,
                o = function() {
                    if(i(this, t, u)) return n(this).data("mask", new r(this, t, u))
                };
            return n(this).each(o), f && "" !== f && e && (clearInterval(n.maskWatchers[f]), n.maskWatchers[f] = setInterval(function() {
                n(document).find(f).each(o)
            }, s)), this
        };
        n.fn.masked = function(n) {
            return this.data("mask").getMaskedVal(n)
        };
        n.fn.unmask = function() {
            return clearInterval(n.maskWatchers[this.selector]), delete n.maskWatchers[this.selector], this.each(function() {
                var t = n(this).data("mask");
                t && t.remove().removeData("mask")
            })
        };
        n.fn.cleanVal = function() {
            return this.data("mask").getCleanVal()
        };
        n.applyDataMask = function(t) {
            t = t || n.jMaskGlobals.maskElements;
            (t instanceof n ? t : n(t)).filter(n.jMaskGlobals.dataMaskAttr).each(u)
        };
        t = {
            maskElements: "input,td,span,div",
            dataMaskAttr: "*[data-mask]",
            dataMask: !0,
            watchInterval: 300,
            watchInputs: !0,
            useInput: function(n) {
                var i = document.createElement("div"),
                    t;
                return n = "on" + n, t = n in i, t || (i.setAttribute(n, "return;"), t = "function" == typeof i[n]), t
            }("input"),
            watchDataMask: !1,
            byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
            translation: {
                0: {
                    pattern: /\d/
                },
                9: {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    recursive: !0
                },
                A: {
                    pattern: /[a-zA-Z0-9]/
                },
                S: {
                    pattern: /[a-zA-Z]/
                }
            }
        };
        n.jMaskGlobals = n.jMaskGlobals || {};
        t = n.jMaskGlobals = n.extend(!0, {}, t, n.jMaskGlobals);
        t.dataMask && n.applyDataMask();
        setInterval(function() {
            n.jMaskGlobals.watchDataMask && n.applyDataMask()
        }, t.watchInterval)
    }, window.jQuery, window.Zepto),
    function() {
        function ut(t) {
            function r(n, i, r, u, f, e) {
                for(; f >= 0 && f < e; f += t) {
                    var o = u ? u[f] : f;
                    r = i(r, n[o], o, n)
                }
                return r
            }
            return function(u, f, o, s) {
                f = e(f, s, 4);
                var h = !i(u) && n.keys(u),
                    l = (h || u).length,
                    c = t > 0 ? 0 : l - 1;
                return arguments.length < 3 && (o = u[h ? h[c] : c], c += t), r(u, f, o, h, c, l)
            }
        }

        function ft(n) {
            return function(i, r, f) {
                r = t(r, f);
                for(var o = u(i), e = n > 0 ? 0 : o - 1; e >= 0 && e < o; e += n)
                    if(r(i[e], e, i)) return e;
                return -1
            }
        }

        function et(t, i, f) {
            return function(e, o, s) {
                var c = 0,
                    h = u(e);
                if(typeof s == "number") t > 0 ? c = s >= 0 ? s : Math.max(s + h, c) : h = s >= 0 ? Math.min(s + 1, h) : s + h + 1;
                else if(f && s && h) return s = f(e, o), e[s] === o ? s : -1;
                if(o !== o) return s = i(r.call(e, c, h), n.isNaN), s >= 0 ? s + c : -1;
                for(s = t > 0 ? c : h - 1; s >= 0 && s < h; s += t)
                    if(e[s] === o) return s;
                return -1
            }
        }

        function ot(t, i) {
            var u = d.length,
                f = t.constructor,
                e = n.isFunction(f) && f.prototype || v,
                r = "constructor";
            for(n.has(t, r) && !n.contains(i, r) && i.push(r); u--;) r = d[u], r in t && t[r] !== e[r] && !n.contains(i, r) && i.push(r)
        }
        var a = this,
            lt = a._,
            s = Array.prototype,
            v = Object.prototype,
            at = Function.prototype,
            vt = s.push,
            r = s.slice,
            o = v.toString,
            yt = v.hasOwnProperty,
            pt = Array.isArray,
            nt = Object.keys,
            y = at.bind,
            tt = Object.create,
            p = function() {},
            n = function(t) {
                if(t instanceof n) return t;
                if(!(this instanceof n)) return new n(t);
                this._wrapped = t
            },
            e, t, h, f, b, k, d, c, ct, l;
        typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = n), exports._ = n) : a._ = n;
        n.VERSION = "1.8.3";
        e = function(n, t, i) {
            if(t === void 0) return n;
            switch(i == null ? 3 : i) {
                case 1:
                    return function(i) {
                        return n.call(t, i)
                    };
                case 2:
                    return function(i, r) {
                        return n.call(t, i, r)
                    };
                case 3:
                    return function(i, r, u) {
                        return n.call(t, i, r, u)
                    };
                case 4:
                    return function(i, r, u, f) {
                        return n.call(t, i, r, u, f)
                    }
            }
            return function() {
                return n.apply(t, arguments)
            }
        };
        t = function(t, i, r) {
            return t == null ? n.identity : n.isFunction(t) ? e(t, i, r) : n.isObject(t) ? n.matcher(t) : n.property(t)
        };
        n.iteratee = function(n, i) {
            return t(n, i, Infinity)
        };
        var w = function(n, t) {
                return function(i) {
                    var e = arguments.length,
                        r, u, f;
                    if(e < 2 || i == null) return i;
                    for(r = 1; r < e; r++) {
                        var o = arguments[r],
                            s = n(o),
                            h = s.length;
                        for(u = 0; u < h; u++) f = s[u], t && i[f] !== void 0 || (i[f] = o[f])
                    }
                    return i
                }
            },
            it = function(t) {
                if(!n.isObject(t)) return {};
                if(tt) return tt(t);
                p.prototype = t;
                var i = new p;
                return p.prototype = null, i
            },
            rt = function(n) {
                return function(t) {
                    if(t != null) return t[n]
                }
            },
            wt = Math.pow(2, 53) - 1,
            u = rt("length"),
            i = function(n) {
                var t = u(n);
                return typeof t == "number" && t >= 0 && t <= wt
            };
        n.each = n.forEach = function(t, r, u) {
            var f, o, s;
            if(r = e(r, u), i(t))
                for(f = 0, o = t.length; f < o; f++) r(t[f], f, t);
            else
                for(s = n.keys(t), f = 0, o = s.length; f < o; f++) r(t[s[f]], s[f], t);
            return t
        };
        n.map = n.collect = function(r, u, f) {
            var e, s;
            u = t(u, f);
            var o = !i(r) && n.keys(r),
                h = (o || r).length,
                c = Array(h);
            for(e = 0; e < h; e++) s = o ? o[e] : e, c[e] = u(r[s], s, r);
            return c
        };
        n.reduce = n.foldl = n.inject = ut(1);
        n.reduceRight = n.foldr = ut(-1);
        n.find = n.detect = function(t, r, u) {
            var f;
            return f = i(t) ? n.findIndex(t, r, u) : n.findKey(t, r, u), f !== void 0 && f !== -1 ? t[f] : void 0
        };
        n.filter = n.select = function(i, r, u) {
            var f = [];
            return r = t(r, u), n.each(i, function(n, t, i) {
                r(n, t, i) && f.push(n)
            }), f
        };
        n.reject = function(i, r, u) {
            return n.filter(i, n.negate(t(r)), u)
        };
        n.every = n.all = function(r, u, f) {
            var o, h, e, s;
            for(u = t(u, f), o = !i(r) && n.keys(r), h = (o || r).length, e = 0; e < h; e++)
                if(s = o ? o[e] : e, !u(r[s], s, r)) return !1;
            return !0
        };
        n.some = n.any = function(r, u, f) {
            var o, h, e, s;
            for(u = t(u, f), o = !i(r) && n.keys(r), h = (o || r).length, e = 0; e < h; e++)
                if(s = o ? o[e] : e, u(r[s], s, r)) return !0;
            return !1
        };
        n.contains = n.includes = n.include = function(t, r, u, f) {
            return i(t) || (t = n.values(t)), (typeof u != "number" || f) && (u = 0), n.indexOf(t, r, u) >= 0
        };
        n.invoke = function(t, i) {
            var u = r.call(arguments, 2),
                f = n.isFunction(i);
            return n.map(t, function(n) {
                var t = f ? i : n[i];
                return t == null ? t : t.apply(n, u)
            })
        };
        n.pluck = function(t, i) {
            return n.map(t, n.property(i))
        };
        n.where = function(t, i) {
            return n.filter(t, n.matcher(i))
        };
        n.findWhere = function(t, i) {
            return n.find(t, n.matcher(i))
        };
        n.max = function(r, u, f) {
            var e = -Infinity,
                c = -Infinity,
                h, o, s, l;
            if(u == null && r != null)
                for(r = i(r) ? r : n.values(r), s = 0, l = r.length; s < l; s++) h = r[s], h > e && (e = h);
            else u = t(u, f), n.each(r, function(n, t, i) {
                o = u(n, t, i);
                (o > c || o === -Infinity && e === -Infinity) && (e = n, c = o)
            });
            return e
        };
        n.min = function(r, u, f) {
            var e = Infinity,
                c = Infinity,
                h, o, s, l;
            if(u == null && r != null)
                for(r = i(r) ? r : n.values(r), s = 0, l = r.length; s < l; s++) h = r[s], h < e && (e = h);
            else u = t(u, f), n.each(r, function(n, t, i) {
                o = u(n, t, i);
                (o < c || o === Infinity && e === Infinity) && (e = n, c = o)
            });
            return e
        };
        n.shuffle = function(t) {
            for(var e = i(t) ? t : n.values(t), o = e.length, u = Array(o), f, r = 0; r < o; r++) f = n.random(0, r), f !== r && (u[r] = u[f]), u[f] = e[r];
            return u
        };
        n.sample = function(t, r, u) {
            return r == null || u ? (i(t) || (t = n.values(t)), t[n.random(t.length - 1)]) : n.shuffle(t).slice(0, Math.max(0, r))
        };
        n.sortBy = function(i, r, u) {
            return r = t(r, u), n.pluck(n.map(i, function(n, t, i) {
                return {
                    value: n,
                    index: t,
                    criteria: r(n, t, i)
                }
            }).sort(function(n, t) {
                var i = n.criteria,
                    r = t.criteria;
                if(i !== r) {
                    if(i > r || i === void 0) return 1;
                    if(i < r || r === void 0) return -1
                }
                return n.index - t.index
            }), "value")
        };
        h = function(i) {
            return function(r, u, f) {
                var e = {};
                return u = t(u, f), n.each(r, function(n, t) {
                    var f = u(n, t, r);
                    i(e, n, f)
                }), e
            }
        };
        n.groupBy = h(function(t, i, r) {
            n.has(t, r) ? t[r].push(i) : t[r] = [i]
        });
        n.indexBy = h(function(n, t, i) {
            n[i] = t
        });
        n.countBy = h(function(t, i, r) {
            n.has(t, r) ? t[r] ++ : t[r] = 1
        });
        n.toArray = function(t) {
            return t ? n.isArray(t) ? r.call(t) : i(t) ? n.map(t, n.identity) : n.values(t) : []
        };
        n.size = function(t) {
            return t == null ? 0 : i(t) ? t.length : n.keys(t).length
        };
        n.partition = function(i, r, u) {
            r = t(r, u);
            var f = [],
                e = [];
            return n.each(i, function(n, t, i) {
                (r(n, t, i) ? f : e).push(n)
            }), [f, e]
        };
        n.first = n.head = n.take = function(t, i, r) {
            if(t != null) return i == null || r ? t[0] : n.initial(t, t.length - i)
        };
        n.initial = function(n, t, i) {
            return r.call(n, 0, Math.max(0, n.length - (t == null || i ? 1 : t)))
        };
        n.last = function(t, i, r) {
            if(t != null) return i == null || r ? t[t.length - 1] : n.rest(t, Math.max(0, t.length - i))
        };
        n.rest = n.tail = n.drop = function(n, t, i) {
            return r.call(n, t == null || i ? 1 : t)
        };
        n.compact = function(t) {
            return n.filter(t, n.identity)
        };
        f = function(t, r, e, o) {
            for(var h = [], v = 0, s, l, a, c = o || 0, y = u(t); c < y; c++)
                if(s = t[c], i(s) && (n.isArray(s) || n.isArguments(s)))
                    for(r || (s = f(s, r, e)), l = 0, a = s.length, h.length += a; l < a;) h[v++] = s[l++];
                else e || (h[v++] = s);
            return h
        };
        n.flatten = function(n, t) {
            return f(n, t, !1)
        };
        n.without = function(t) {
            return n.difference(t, r.call(arguments, 1))
        };
        n.uniq = n.unique = function(i, r, f, e) {
            var s, c, h, a, o, l;
            for(n.isBoolean(r) || (e = f, f = r, r = !1), f != null && (f = t(f, e)), s = [], c = [], h = 0, a = u(i); h < a; h++) o = i[h], l = f ? f(o, h, i) : o, r ? (h && c === l || s.push(o), c = l) : f ? n.contains(c, l) || (c.push(l), s.push(o)) : n.contains(s, o) || s.push(o);
            return s
        };
        n.union = function() {
            return n.uniq(f(arguments, !0, !0))
        };
        n.intersection = function(t) {
            for(var e = [], o = arguments.length, f, i, r = 0, s = u(t); r < s; r++)
                if(f = t[r], !n.contains(e, f)) {
                    for(i = 1; i < o; i++)
                        if(!n.contains(arguments[i], f)) break;
                    i === o && e.push(f)
                }
            return e
        };
        n.difference = function(t) {
            var i = f(arguments, !0, !0, 1);
            return n.filter(t, function(t) {
                return !n.contains(i, t)
            })
        };
        n.zip = function() {
            return n.unzip(arguments)
        };
        n.unzip = function(t) {
            for(var r = t && n.max(t, u).length || 0, f = Array(r), i = 0; i < r; i++) f[i] = n.pluck(t, i);
            return f
        };
        n.object = function(n, t) {
            for(var r = {}, i = 0, f = u(n); i < f; i++) t ? r[n[i]] = t[i] : r[n[i][0]] = n[i][1];
            return r
        };
        n.findIndex = ft(1);
        n.findLastIndex = ft(-1);
        n.sortedIndex = function(n, i, r, f) {
            var o;
            r = t(r, f, 1);
            for(var h = r(i), e = 0, s = u(n); e < s;) o = Math.floor((e + s) / 2), r(n[o]) < h ? e = o + 1 : s = o;
            return e
        };
        n.indexOf = et(1, n.findIndex, n.sortedIndex);
        n.lastIndexOf = et(-1, n.findLastIndex);
        n.range = function(n, t, i) {
            var u, f, r;
            for(t == null && (t = n || 0, n = 0), i = i || 1, u = Math.max(Math.ceil((t - n) / i), 0), f = Array(u), r = 0; r < u; r++, n += i) f[r] = n;
            return f
        };
        b = function(t, i, r, u, f) {
            if(!(u instanceof i)) return t.apply(r, f);
            var e = it(t.prototype),
                o = t.apply(e, f);
            return n.isObject(o) ? o : e
        };
        n.bind = function(t, i) {
            if(y && t.bind === y) return y.apply(t, r.call(arguments, 1));
            if(!n.isFunction(t)) throw new TypeError("Bind must be called on a function");
            var f = r.call(arguments, 2),
                u = function() {
                    return b(t, u, i, this, f.concat(r.call(arguments)))
                };
            return u
        };
        n.partial = function(t) {
            var i = r.call(arguments, 1),
                u = function() {
                    for(var f = 0, o = i.length, e = Array(o), r = 0; r < o; r++) e[r] = i[r] === n ? arguments[f++] : i[r];
                    while(f < arguments.length) e.push(arguments[f++]);
                    return b(t, u, this, this, e)
                };
            return u
        };
        n.bindAll = function(t) {
            var i, u = arguments.length,
                r;
            if(u <= 1) throw new Error("bindAll must be passed function names");
            for(i = 1; i < u; i++) r = arguments[i], t[r] = n.bind(t[r], t);
            return t
        };
        n.memoize = function(t, i) {
            var r = function(u) {
                var f = r.cache,
                    e = "" + (i ? i.apply(this, arguments) : u);
                return n.has(f, e) || (f[e] = t.apply(this, arguments)), f[e]
            };
            return r.cache = {}, r
        };
        n.delay = function(n, t) {
            var i = r.call(arguments, 2);
            return setTimeout(function() {
                return n.apply(null, i)
            }, t)
        };
        n.defer = n.partial(n.delay, n, 1);
        n.throttle = function(t, i, r) {
            var f, e, s, u = null,
                o = 0,
                h;
            return r || (r = {}), h = function() {
                o = r.leading === !1 ? 0 : n.now();
                u = null;
                s = t.apply(f, e);
                u || (f = e = null)
            },
                function() {
                    var l = n.now(),
                        c;
                    return o || r.leading !== !1 || (o = l), c = i - (l - o), f = this, e = arguments, c <= 0 || c > i ? (u && (clearTimeout(u), u = null), o = l, s = t.apply(f, e), u || (f = e = null)) : u || r.trailing === !1 || (u = setTimeout(h, c)), s
                }
        };
        n.debounce = function(t, i, r) {
            var u, f, e, s, o, h = function() {
                var c = n.now() - s;
                c < i && c >= 0 ? u = setTimeout(h, i - c) : (u = null, r || (o = t.apply(e, f), u || (e = f = null)))
            };
            return function() {
                e = this;
                f = arguments;
                s = n.now();
                var c = r && !u;
                return u || (u = setTimeout(h, i)), c && (o = t.apply(e, f), e = f = null), o
            }
        };
        n.wrap = function(t, i) {
            return n.partial(i, t)
        };
        n.negate = function(n) {
            return function() {
                return !n.apply(this, arguments)
            }
        };
        n.compose = function() {
            var n = arguments,
                t = n.length - 1;
            return function() {
                for(var r = t, i = n[t].apply(this, arguments); r--;) i = n[r].call(this, i);
                return i
            }
        };
        n.after = function(n, t) {
            return function() {
                if(--n < 1) return t.apply(this, arguments)
            }
        };
        n.before = function(n, t) {
            var i;
            return function() {
                return --n > 0 && (i = t.apply(this, arguments)), n <= 1 && (t = null), i
            }
        };
        n.once = n.partial(n.before, 2);
        k = !{
            toString: null
        }.propertyIsEnumerable("toString");
        d = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        n.keys = function(t) {
            var i, r;
            if(!n.isObject(t)) return [];
            if(nt) return nt(t);
            i = [];
            for(r in t) n.has(t, r) && i.push(r);
            return k && ot(t, i), i
        };
        n.allKeys = function(t) {
            var i, r;
            if(!n.isObject(t)) return [];
            i = [];
            for(r in t) i.push(r);
            return k && ot(t, i), i
        };
        n.values = function(t) {
            for(var r = n.keys(t), u = r.length, f = Array(u), i = 0; i < u; i++) f[i] = t[r[i]];
            return f
        };
        n.mapObject = function(i, r, u) {
            var e;
            r = t(r, u);
            var o = n.keys(i),
                h = o.length,
                s = {},
                f;
            for(e = 0; e < h; e++) f = o[e], s[f] = r(i[f], f, i);
            return s
        };
        n.pairs = function(t) {
            for(var r = n.keys(t), u = r.length, f = Array(u), i = 0; i < u; i++) f[i] = [r[i], t[r[i]]];
            return f
        };
        n.invert = function(t) {
            for(var u = {}, r = n.keys(t), i = 0, f = r.length; i < f; i++) u[t[r[i]]] = r[i];
            return u
        };
        n.functions = n.methods = function(t) {
            var r = [],
                i;
            for(i in t) n.isFunction(t[i]) && r.push(i);
            return r.sort()
        };
        n.extend = w(n.allKeys);
        n.extendOwn = n.assign = w(n.keys);
        n.findKey = function(i, r, u) {
            var o, f, e, s;
            for(r = t(r, u), o = n.keys(i), e = 0, s = o.length; e < s; e++)
                if(f = o[e], r(i[f], f, i)) return f
        };
        n.pick = function(t, i, r) {
            var c = {},
                u = t,
                l, o, s, v, h, a;
            if(u == null) return c;
            for(n.isFunction(i) ? (o = n.allKeys(u), l = e(i, r)) : (o = f(arguments, !1, !1, 1), l = function(n, t, i) {
                return t in i
            }, u = Object(u)), s = 0, v = o.length; s < v; s++) h = o[s], a = u[h], l(a, h, u) && (c[h] = a);
            return c
        };
        n.omit = function(t, i, r) {
            if(n.isFunction(i)) i = n.negate(i);
            else {
                var u = n.map(f(arguments, !1, !1, 1), String);
                i = function(t, i) {
                    return !n.contains(u, i)
                }
            }
            return n.pick(t, i, r)
        };
        n.defaults = w(n.allKeys, !0);
        n.create = function(t, i) {
            var r = it(t);
            return i && n.extendOwn(r, i), r
        };
        n.clone = function(t) {
            return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({}, t) : t
        };
        n.tap = function(n, t) {
            return t(n), n
        };
        n.isMatch = function(t, i) {
            var e = n.keys(i),
                o = e.length,
                f, r, u;
            if(t == null) return !o;
            for(f = Object(t), r = 0; r < o; r++)
                if(u = e[r], i[u] !== f[u] || !(u in f)) return !1;
            return !0
        };
        c = function(t, i, r, u) {
            var h, a, e, s, f, v, l;
            if(t === i) return t !== 0 || 1 / t == 1 / i;
            if(t == null || i == null) return t === i;
            if(t instanceof n && (t = t._wrapped), i instanceof n && (i = i._wrapped), h = o.call(t), h !== o.call(i)) return !1;
            switch(h) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + t == "" + i;
                case "[object Number]":
                    return +t != +t ? +i != +i : +t == 0 ? 1 / +t == 1 / i : +t == +i;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +i
            }
            if(a = h === "[object Array]", !a && (typeof t != "object" || typeof i != "object" || (e = t.constructor, s = i.constructor, e !== s && !(n.isFunction(e) && e instanceof e && n.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in i))) return !1;
            for(r = r || [], u = u || [], f = r.length; f--;)
                if(r[f] === t) return u[f] === i;
            if(r.push(t), u.push(i), a) {
                if(f = t.length, f !== i.length) return !1;
                while(f--)
                    if(!c(t[f], i[f], r, u)) return !1
            } else {
                if(v = n.keys(t), f = v.length, n.keys(i).length !== f) return !1;
                while(f--)
                    if(l = v[f], !(n.has(i, l) && c(t[l], i[l], r, u))) return !1
            }
            return r.pop(), u.pop(), !0
        };
        n.isEqual = function(n, t) {
            return c(n, t)
        };
        n.isEmpty = function(t) {
            return t == null ? !0 : i(t) && (n.isArray(t) || n.isString(t) || n.isArguments(t)) ? t.length === 0 : n.keys(t).length === 0
        };
        n.isElement = function(n) {
            return !!(n && n.nodeType === 1)
        };
        n.isArray = pt || function(n) {
                return o.call(n) === "[object Array]"
            };
        n.isObject = function(n) {
            var t = typeof n;
            return t === "function" || t === "object" && !!n
        };
        n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
            n["is" + t] = function(n) {
                return o.call(n) === "[object " + t + "]"
            }
        });
        n.isArguments(arguments) || (n.isArguments = function(t) {
            return n.has(t, "callee")
        });
        typeof /./ != "function" && typeof Int8Array != "object" && (n.isFunction = function(n) {
            return typeof n == "function" || !1
        });
        n.isFinite = function(n) {
            return isFinite(n) && !isNaN(parseFloat(n))
        };
        n.isNaN = function(t) {
            return n.isNumber(t) && t !== +t
        };
        n.isBoolean = function(n) {
            return n === !0 || n === !1 || o.call(n) === "[object Boolean]"
        };
        n.isNull = function(n) {
            return n === null
        };
        n.isUndefined = function(n) {
            return n === void 0
        };
        n.has = function(n, t) {
            return n != null && yt.call(n, t)
        };
        n.noConflict = function() {
            return a._ = lt, this
        };
        n.identity = function(n) {
            return n
        };
        n.constant = function(n) {
            return function() {
                return n
            }
        };
        n.noop = function() {};
        n.property = rt;
        n.propertyOf = function(n) {
            return n == null ? function() {} : function(t) {
                return n[t]
            }
        };
        n.matcher = n.matches = function(t) {
            return t = n.extendOwn({}, t),
                function(i) {
                    return n.isMatch(i, t)
                }
        };
        n.times = function(n, t, i) {
            var u = Array(Math.max(0, n)),
                r;
            for(t = e(t, i, 1), r = 0; r < n; r++) u[r] = t(r);
            return u
        };
        n.random = function(n, t) {
            return t == null && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
        };
        n.now = Date.now || function() {
                return(new Date).getTime()
            };
        var st = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            bt = n.invert(st),
            ht = function(t) {
                var r = function(n) {
                        return t[n]
                    },
                    i = "(?:" + n.keys(t).join("|") + ")",
                    u = RegExp(i),
                    f = RegExp(i, "g");
                return function(n) {
                    return n = n == null ? "" : "" + n, u.test(n) ? n.replace(f, r) : n
                }
            };
        n.escape = ht(st);
        n.unescape = ht(bt);
        n.result = function(t, i, r) {
            var u = t == null ? void 0 : t[i];
            return u === void 0 && (u = r), n.isFunction(u) ? u.call(t) : u
        };
        ct = 0;
        n.uniqueId = function(n) {
            var t = ++ct + "";
            return n ? n + t : t
        };
        n.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var g = /(.)^/,
            kt = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            dt = /\\|'|\r|\n|\u2028|\u2029/g,
            gt = function(n) {
                return "\\" + kt[n]
            };
        n.template = function(t, i, r) {
            var o, f, h;
            !i && r && (i = r);
            i = n.defaults({}, i, n.templateSettings);
            var c = RegExp([(i.escape || g).source, (i.interpolate || g).source, (i.evaluate || g).source].join("|") + "|$", "g"),
                e = 0,
                u = "__p+='";
            t.replace(c, function(n, i, r, f, o) {
                return u += t.slice(e, o).replace(dt, gt), e = o + n.length, i ? u += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : r ? u += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : f && (u += "';\n" + f + "\n__p+='"), n
            });
            u += "';\n";
            i.variable || (u = "with(obj||{}){\n" + u + "}\n");
            u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
            try {
                o = new Function(i.variable || "obj", "_", u)
            } catch(s) {
                s.source = u;
                throw s;
            }
            return f = function(t) {
                return o.call(this, t, n)
            }, h = i.variable || "obj", f.source = "function(" + h + "){\n" + u + "}", f
        };
        n.chain = function(t) {
            var i = n(t);
            return i._chain = !0, i
        };
        l = function(t, i) {
            return t._chain ? n(i).chain() : i
        };
        n.mixin = function(t) {
            n.each(n.functions(t), function(i) {
                var r = n[i] = t[i];
                n.prototype[i] = function() {
                    var t = [this._wrapped];
                    return vt.apply(t, arguments), l(this, r.apply(n, t))
                }
            })
        };
        n.mixin(n);
        n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
            var i = s[t];
            n.prototype[t] = function() {
                var n = this._wrapped;
                return i.apply(n, arguments), (t === "shift" || t === "splice") && n.length === 0 && delete n[0], l(this, n)
            }
        });
        n.each(["concat", "join", "slice"], function(t) {
            var i = s[t];
            n.prototype[t] = function() {
                return l(this, i.apply(this._wrapped, arguments))
            }
        });
        n.prototype.value = function() {
            return this._wrapped
        };
        n.prototype.valueOf = n.prototype.toJSON = n.prototype.value;
        n.prototype.toString = function() {
            return "" + this._wrapped
        };
        typeof define == "function" && define.amd && define("underscore", [], function() {
            return n
        })
    }.call(this),
    function(n, t, i, r) {
        "use strict";
        var p = i("html"),
            e = i(n),
            o = i(t),
            u = i.fancybox = function() {
                u.open.apply(this, arguments)
            },
            y = navigator.userAgent.match(/msie/i),
            v = null,
            s = t.createTouch !== r,
            a = function(n) {
                return n && n.hasOwnProperty && n instanceof i
            },
            c = function(n) {
                return n && i.type(n) === "string"
            },
            l = function(n) {
                return c(n) && n.indexOf("%") > 0
            },
            w = function(n) {
                return n && !(n.style.overflow && n.style.overflow === "hidden") && (n.clientWidth && n.scrollWidth > n.clientWidth || n.clientHeight && n.scrollHeight > n.clientHeight)
            },
            f = function(n, t) {
                var i = parseInt(n, 10) || 0;
                return t && l(n) && (i = u.getViewport()[t] / 100 * i), Math.ceil(i)
            },
            h = function(n, t) {
                return f(n, t) + "px"
            };
        i.extend(u, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !s,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"><\/div><\/div><\/div><\/div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (y ? ' allowtransparency="true"' : "") + "><\/iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.<\/p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><\/a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><\/span><\/a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><\/span><\/a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeChange: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(n, t) {
                if(n) return(i.isPlainObject(t) || (t = {}), !1 === u.close(!0)) ? void 0 : (i.isArray(n) || (n = a(n) ? i(n).get() : [n]), i.each(n, function(f, e) {
                    var h = {},
                        s, p, l, o, v, y, w;
                    i.type(e) === "object" && (e.nodeType && (e = i(e)), a(e) ? (h = {
                        href: e.data("fancybox-href") || e.attr("href"),
                        title: e.data("fancybox-title") || e.attr("title"),
                        isDom: !0,
                        element: e
                    }, i.metadata && i.extend(!0, h, e.metadata())) : h = e);
                    s = t.href || h.href || (c(e) ? e : null);
                    p = t.title !== r ? t.title : h.title || "";
                    l = t.content || h.content;
                    o = l ? "html" : t.type || h.type;
                    !o && h.isDom && (o = e.data("fancybox-type"), o || (v = e.prop("class").match(/fancybox\.(\w+)/), o = v ? v[1] : null));
                    c(s) && (o || (u.isImage(s) ? o = "image" : u.isSWF(s) ? o = "swf" : s.charAt(0) === "#" ? o = "inline" : c(e) && (o = "html", l = e)), o === "ajax" && (y = s.split(/\s+/, 2), s = y.shift(), w = y.shift()));
                    l || (o === "inline" ? s ? l = i(c(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : h.isDom && (l = e) : o === "html" ? l = s : o || s || !h.isDom || (o = "inline", l = e));
                    i.extend(h, {
                        href: s,
                        type: o,
                        content: l,
                        title: p,
                        selector: w
                    });
                    n[f] = h
                }), u.opts = i.extend(!0, {}, u.defaults, t), t.keys !== r && (u.opts.keys = t.keys ? i.extend({}, u.defaults.keys, t.keys) : !1), u.group = n, u._start(u.opts.index))
            },
            cancel: function() {
                var n = u.coming;
                n && !1 !== u.trigger("onCancel") && (u.hideLoading(), u.ajaxLoad && u.ajaxLoad.abort(), u.ajaxLoad = null, u.imgPreload && (u.imgPreload.onload = u.imgPreload.onerror = null), n.wrap && n.wrap.stop(!0, !0).trigger("onReset").remove(), u.coming = null, u.current || u._afterZoomOut(n))
            },
            close: function(n) {
                (u.cancel(), !1 !== u.trigger("beforeClose")) && (u.unbindEvents(), u.isActive) && (u.isOpen && n !== !0 ? (u.isOpen = u.isOpened = !1, u.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), u.wrap.stop(!0, !0).removeClass("fancybox-opened"), u.transitions[u.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), u._afterZoomOut()))
            },
            play: function(n) {
                var t = function() {
                        clearTimeout(u.player.timer)
                    },
                    i = function() {
                        t();
                        u.current && u.player.isActive && (u.player.timer = setTimeout(u.next, u.current.playSpeed))
                    },
                    r = function() {
                        t();
                        o.unbind(".player");
                        u.player.isActive = !1;
                        u.trigger("onPlayEnd")
                    },
                    f = function() {
                        u.current && (u.current.loop || u.current.index < u.group.length - 1) && (u.player.isActive = !0, o.bind({
                            "onCancel.player beforeClose.player": r,
                            "onUpdate.player": i,
                            "beforeLoad.player": t
                        }), i(), u.trigger("onPlayStart"))
                    };
                n !== !0 && (u.player.isActive || n === !1) ? r() : f()
            },
            next: function(n) {
                var t = u.current;
                t && (c(n) || (n = t.direction.next), u.jumpto(t.index + 1, n, "next"))
            },
            prev: function(n) {
                var t = u.current;
                t && (c(n) || (n = t.direction.prev), u.jumpto(t.index - 1, n, "prev"))
            },
            jumpto: function(n, t, i) {
                var e = u.current;
                e && (n = f(n), u.direction = t || e.direction[n >= e.index ? "next" : "prev"], u.router = i || "jumpto", e.loop && (n < 0 && (n = e.group.length + n % e.group.length), n = n % e.group.length), e.group[n] !== r && (u.cancel(), u._start(n)))
            },
            reposition: function(n, t) {
                var f = u.current,
                    e = f ? f.wrap : null,
                    r;
                e && (r = u._getPosition(t), n && n.type === "scroll" ? (delete r.position, e.stop(!0, !0).animate(r, 200)) : (e.css(r), f.pos = i.extend({}, f.dim, r)))
            },
            update: function(n) {
                var t = n && n.type,
                    i = !t || t === "orientationchange";
                (i && (clearTimeout(v), v = null), u.isOpen && !v) && (v = setTimeout(function() {
                    var r = u.current;
                    r && !u.isClosing && (u.wrap.removeClass("fancybox-tmp"), (i || t === "load" || t === "resize" && r.autoResize) && u._setDimension(), t === "scroll" && r.canShrink || u.reposition(n), u.trigger("onUpdate"), v = null)
                }, i && !s ? 0 : 300))
            },
            toggle: function(n) {
                u.isOpen && (u.current.fitToView = i.type(n) === "boolean" ? n : !u.current.fitToView, s && (u.wrap.removeAttr("style").addClass("fancybox-tmp"), u.trigger("onUpdate")), u.update())
            },
            hideLoading: function() {
                o.unbind(".loading");
                i("#fancybox-loading").remove()
            },
            showLoading: function() {
                var t, n;
                u.hideLoading();
                t = i('<div id="fancybox-loading"><div><\/div><\/div>').click(u.cancel).appendTo("body");
                o.bind("keydown.loading", function(n) {
                    (n.which || n.keyCode) === 27 && (n.preventDefault(), u.cancel())
                });
                u.defaults.fixed || (n = u.getViewport(), t.css({
                    position: "absolute",
                    top: n.h * .5 + n.y,
                    left: n.w * .5 + n.x
                }))
            },
            getViewport: function() {
                var i = u.current && u.current.locked || !1,
                    t = {
                        x: e.scrollLeft(),
                        y: e.scrollTop()
                    };
                return i ? (t.w = i[0].clientWidth, t.h = i[0].clientHeight) : (t.w = s && n.innerWidth ? n.innerWidth : e.width(), t.h = s && n.innerHeight ? n.innerHeight : e.height()), t
            },
            unbindEvents: function() {
                u.wrap && a(u.wrap) && u.wrap.unbind(".fb");
                o.unbind(".fb");
                e.unbind(".fb")
            },
            bindEvents: function() {
                var n = u.current,
                    t;
                n && (e.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (n.autoCenter && !n.locked ? " scroll.fb" : ""), u.update), t = n.keys, t && o.bind("keydown.fb", function(f) {
                    var e = f.which || f.keyCode,
                        o = f.target || f.srcElement;
                    if(e === 27 && u.coming) return !1;
                    f.ctrlKey || f.altKey || f.shiftKey || f.metaKey || o && (o.type || i(o).is("[contenteditable]")) || i.each(t, function(t, o) {
                        return n.group.length > 1 && o[e] !== r ? (u[t](o[e]), f.preventDefault(), !1) : i.inArray(e, o) > -1 ? (u[t](), f.preventDefault(), !1) : void 0
                    })
                }), i.fn.mousewheel && n.mouseWheel && u.wrap.bind("mousewheel.fb", function(t, r, f, e) {
                    for(var h = t.target || null, o = i(h), s = !1; o.length;) {
                        if(s || o.is(".fancybox-skin") || o.is(".fancybox-wrap")) break;
                        s = w(o[0]);
                        o = i(o).parent()
                    }
                    r === 0 || s || u.group.length > 1 && !n.canShrink && (e > 0 || f > 0 ? u.prev(e > 0 ? "down" : "left") : (e < 0 || f < 0) && u.next(e < 0 ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function(n, t) {
                var f, r = t || u.coming || u.current;
                if(r) {
                    if(i.isFunction(r[n]) && (f = r[n].apply(r, Array.prototype.slice.call(arguments, 1))), f === !1) return !1;
                    r.helpers && i.each(r.helpers, function(t, f) {
                        f && u.helpers[t] && i.isFunction(u.helpers[t][n]) && u.helpers[t][n](i.extend(!0, {}, u.helpers[t].defaults, f), r)
                    });
                    o.trigger(n)
                }
            },
            isImage: function(n) {
                return c(n) && n.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(n) {
                return c(n) && n.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(n) {
                var t = {},
                    c, l, r, e, o;
                if(n = f(n), c = u.group[n] || null, !c) return !1;
                if(t = i.extend(!0, {}, u.opts, c), e = t.margin, o = t.padding, i.type(e) === "number" && (t.margin = [e, e, e, e]), i.type(o) === "number" && (t.padding = [o, o, o, o]), t.modal && i.extend(!0, t, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), t.autoSize && (t.autoWidth = t.autoHeight = !0), t.width === "auto" && (t.autoWidth = !0), t.height === "auto" && (t.autoHeight = !0), t.group = u.group, t.index = n, u.coming = t, !1 === u.trigger("beforeLoad")) {
                    u.coming = null;
                    return
                }
                if(r = t.type, l = t.href, !r) return(u.coming = null, u.current && u.router && u.router !== "jumpto") ? (u.current.index = n, u[u.router](u.direction)) : !1;
                if(u.isActive = !0, (r === "image" || r === "swf") && (t.autoHeight = t.autoWidth = !1, t.scrolling = "visible"), r === "image" && (t.aspectRatio = !0), r === "iframe" && s && (t.scrolling = "scroll"), t.wrap = i(t.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body"), i.extend(t, {
                        skin: i(".fancybox-skin", t.wrap),
                        outer: i(".fancybox-outer", t.wrap),
                        inner: i(".fancybox-inner", t.wrap)
                    }), i.each(["Top", "Right", "Bottom", "Left"], function(n, i) {
                        t.skin.css("padding" + i, h(t.padding[n]))
                    }), u.trigger("onReady"), r === "inline" || r === "html") {
                    if(!t.content || !t.content.length) return u._error("content")
                } else if(!l) return u._error("href");
                r === "image" ? u._loadImage() : r === "ajax" ? u._loadAjax() : r === "iframe" ? u._loadIframe() : u._afterLoad()
            },
            _error: function(n) {
                i.extend(u.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: n,
                    content: u.coming.tpl.error
                });
                u._afterLoad()
            },
            _loadImage: function() {
                var n = u.imgPreload = new Image;
                n.onload = function() {
                    this.onload = this.onerror = null;
                    u.coming.width = this.width / u.opts.pixelRatio;
                    u.coming.height = this.height / u.opts.pixelRatio;
                    u._afterLoad()
                };
                n.onerror = function() {
                    this.onload = this.onerror = null;
                    u._error("image")
                };
                n.src = u.coming.href;
                n.complete !== !0 && u.showLoading()
            },
            _loadAjax: function() {
                var n = u.coming;
                u.showLoading();
                u.ajaxLoad = i.ajax(i.extend({}, n.ajax, {
                    url: n.href,
                    error: function(n, t) {
                        u.coming && t !== "abort" ? u._error("ajax", n) : u.hideLoading()
                    },
                    success: function(t, i) {
                        i === "success" && (n.content = t, u._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var n = u.coming,
                    t = i(n.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : n.iframe.scrolling).attr("src", n.href);
                if(i(n.wrap).bind("onReset", function() {
                        try {
                            i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                        } catch(n) {}
                    }), n.iframe.preload) {
                    u.showLoading();
                    t.one("load", function() {
                        i(this).data("ready", 1);
                        s || i(this).bind("load.fb", u.update);
                        i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                        u._afterLoad()
                    })
                }
                n.content = t.appendTo(n.inner);
                n.iframe.preload || u._afterLoad()
            },
            _preloadImages: function() {
                for(var r = u.group, i = u.current, f = r.length, e = i.preload ? Math.min(i.preload, f - 1) : 0, n, t = 1; t <= e; t += 1) n = r[(i.index + t) % f], n.type === "image" && n.href && ((new Image).src = n.href)
            },
            _afterLoad: function() {
                var r = u.coming,
                    f = u.current,
                    e = "fancybox-placeholder",
                    t, n, c, o, s, h;
                if(u.hideLoading(), r && u.isActive !== !1) {
                    if(!1 === u.trigger("afterLoad", r, f)) {
                        r.wrap.stop(!0).trigger("onReset").remove();
                        u.coming = null;
                        return
                    }
                    f && (u.trigger("beforeChange", f), f.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    u.unbindEvents();
                    t = r;
                    n = r.content;
                    c = r.type;
                    o = r.scrolling;
                    i.extend(u, {
                        wrap: t.wrap,
                        skin: t.skin,
                        outer: t.outer,
                        inner: t.inner,
                        current: t,
                        previous: f
                    });
                    s = t.href;
                    switch(c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            t.selector ? n = i("<div>").html(n).find(t.selector) : a(n) && (n.data(e) || n.data(e, i('<div class="' + e + '"><\/div>').insertAfter(n).hide()), n = n.show().detach(), t.wrap.bind("onReset", function() {
                                i(this).find(n).length && n.hide().replaceAll(n.data(e)).data(e, !1)
                            }));
                            break;
                        case "image":
                            n = t.tpl.image.replace("{href}", s);
                            break;
                        case "swf":
                            n = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"><\/param>';
                            h = "";
                            i.each(t.swf, function(t, i) {
                                n += '<param name="' + t + '" value="' + i + '"><\/param>';
                                h += " " + t + '="' + i + '"'
                            });
                            n += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "><\/embed><\/object>"
                    }
                    a(n) && n.parent().is(t.inner) || t.inner.append(n);
                    u.trigger("beforeShow");
                    t.inner.css("overflow", o === "yes" ? "scroll" : o === "no" ? "hidden" : o);
                    u._setDimension();
                    u.reposition();
                    u.isOpen = !1;
                    u.coming = null;
                    u.bindEvents();
                    u.isOpened ? f.prevMethod && u.transitions[f.prevMethod]() : i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove();
                    u.transitions[u.isOpened ? t.nextMethod : t.openMethod]();
                    u._preloadImages()
                }
            },
            _setDimension: function() {
                var nt = u.getViewport(),
                    wt = 0,
                    vt = !1,
                    st = !1,
                    v = u.wrap,
                    k = u.skin,
                    e = u.inner,
                    r = u.current,
                    n = r.width,
                    t = r.height,
                    o = r.minWidth,
                    s = r.minHeight,
                    c = r.maxWidth,
                    a = r.maxHeight,
                    bt = r.scrolling,
                    ft = r.scrollOutside ? r.scrollbarWidth : 0,
                    et = r.margin,
                    yt = f(et[1] + et[3]),
                    pt = f(et[0] + et[2]),
                    d, ht, tt, it, p, y, ct, lt, w, g, b, rt, ot, ut, at;
                if(v.add(k).add(e).width("auto").height("auto").removeClass("fancybox-tmp"), d = f(k.outerWidth(!0) - k.width()), ht = f(k.outerHeight(!0) - k.height()), tt = yt + d, it = pt + ht, p = l(n) ? (nt.w - tt) * f(n) / 100 : n, y = l(t) ? (nt.h - it) * f(t) / 100 : t, r.type === "iframe") {
                    if(ut = r.content, r.autoHeight && ut.data("ready") === 1) try {
                        ut[0].contentWindow.document.location && (e.width(p).height(9999), at = ut.contents().find("body"), ft && at.css("overflow-x", "hidden"), y = at.outerHeight(!0))
                    } catch(kt) {}
                } else(r.autoWidth || r.autoHeight) && (e.addClass("fancybox-tmp"), r.autoWidth || e.width(p), r.autoHeight || e.height(y), r.autoWidth && (p = e.width()), r.autoHeight && (y = e.height()), e.removeClass("fancybox-tmp"));
                if(n = f(p), t = f(y), w = p / y, o = f(l(o) ? f(o, "w") - tt : o), c = f(l(c) ? f(c, "w") - tt : c), s = f(l(s) ? f(s, "h") - it : s), a = f(l(a) ? f(a, "h") - it : a), ct = c, lt = a, r.fitToView && (c = Math.min(nt.w - tt, c), a = Math.min(nt.h - it, a)), rt = nt.w - yt, ot = nt.h - pt, r.aspectRatio ? (n > c && (n = c, t = f(n / w)), t > a && (t = a, n = f(t * w)), n < o && (n = o, t = f(n / w)), t < s && (t = s, n = f(t * w))) : (n = Math.max(o, Math.min(n, c)), r.autoHeight && r.type !== "iframe" && (e.width(n), t = e.height()), t = Math.max(s, Math.min(t, a))), r.fitToView)
                    if(e.width(n).height(t), v.width(n + d), g = v.width(), b = v.height(), r.aspectRatio)
                        while((g > rt || b > ot) && n > o && t > s) {
                            if(wt++ > 19) break;
                            t = Math.max(s, Math.min(a, t - 10));
                            n = f(t * w);
                            n < o && (n = o, t = f(n / w));
                            n > c && (n = c, t = f(n / w));
                            e.width(n).height(t);
                            v.width(n + d);
                            g = v.width();
                            b = v.height()
                        } else n = Math.max(o, Math.min(n, n - (g - rt))), t = Math.max(s, Math.min(t, t - (b - ot)));
                ft && bt === "auto" && t < y && n + d + ft < rt && (n += ft);
                e.width(n).height(t);
                v.width(n + d);
                g = v.width();
                b = v.height();
                vt = (g > rt || b > ot) && n > o && t > s;
                st = r.aspectRatio ? n < ct && t < lt && n < p && t < y : (n < ct || t < lt) && (n < p || t < y);
                i.extend(r, {
                    dim: {
                        width: h(g),
                        height: h(b)
                    },
                    origWidth: p,
                    origHeight: y,
                    canShrink: vt,
                    canExpand: st,
                    wPadding: d,
                    hPadding: ht,
                    wrapSpace: b - k.outerHeight(!0),
                    skinSpace: k.height() - t
                });
                !ut && r.autoHeight && t > s && t < a && !st && e.height("auto")
            },
            _getPosition: function(n) {
                var i = u.current,
                    r = u.getViewport(),
                    f = i.margin,
                    e = u.wrap.width() + f[1] + f[3],
                    o = u.wrap.height() + f[0] + f[2],
                    t = {
                        position: "absolute",
                        top: f[0],
                        left: f[3]
                    };
                return i.autoCenter && i.fixed && !n && o <= r.h && e <= r.w ? t.position = "fixed" : i.locked || (t.top += r.y, t.left += r.x), t.top = h(Math.max(t.top, t.top + (r.h - o) * i.topRatio)), t.left = h(Math.max(t.left, t.left + (r.w - e) * i.leftRatio)), t
            },
            _afterZoomIn: function() {
                var n = u.current;
                n && (u.isOpen = u.isOpened = !0, u.wrap.css("overflow", "visible").addClass("fancybox-opened"), u.update(), (n.closeClick || n.nextClick && u.group.length > 1) && u.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), u[n.closeClick ? "close" : "next"]())
                }), n.closeBtn && i(n.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function(n) {
                    n.preventDefault();
                    u.close()
                }), n.arrows && u.group.length > 1 && ((n.loop || n.index > 0) && i(n.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev), (n.loop || n.index < u.group.length - 1) && i(n.tpl.next).appendTo(u.outer).bind("click.fb", u.next)), u.trigger("afterShow"), n.loop || n.index !== n.group.length - 1 ? u.opts.autoPlay && !u.player.isActive && (u.opts.autoPlay = !1, u.play()) : u.play(!1))
            },
            _afterZoomOut: function(n) {
                n = n || u.current;
                i(".fancybox-wrap").trigger("onReset").remove();
                i.extend(u, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                });
                u.trigger("afterClose", n)
            }
        });
        u.transitions = {
            getOrigPosition: function() {
                var n = u.current,
                    f = n.element,
                    t = n.orig,
                    i = {},
                    e = 50,
                    o = 50,
                    s = n.hPadding,
                    c = n.wPadding,
                    r = u.getViewport();
                return !t && n.isDom && f.is(":visible") && (t = f.find("img:first"), t.length || (t = f)), a(t) ? (i = t.offset(), t.is("img") && (e = t.outerWidth(), o = t.outerHeight())) : (i.top = r.y + (r.h - o) * n.topRatio, i.left = r.x + (r.w - e) * n.leftRatio), (u.wrap.css("position") === "fixed" || n.locked) && (i.top -= r.y, i.left -= r.x), {
                    top: h(i.top - s * n.topRatio),
                    left: h(i.left - c * n.leftRatio),
                    width: h(e + c),
                    height: h(o + s)
                }
            },
            step: function(n, t) {
                var r, s, e, i = t.prop,
                    o = u.current,
                    h = o.wrapSpace,
                    c = o.skinSpace;
                (i === "width" || i === "height") && (r = t.end === t.start ? 1 : (n - t.start) / (t.end - t.start), u.isClosing && (r = 1 - r), s = i === "width" ? o.wPadding : o.hPadding, e = n - s, u.skin[i](f(i === "width" ? e : e - h * r)), u.inner[i](f(i === "width" ? e : e - h * r - c * r)))
            },
            zoomIn: function() {
                var n = u.current,
                    t = n.pos,
                    r = n.openEffect,
                    f = r === "elastic",
                    e = i.extend({
                        opacity: 1
                    }, t);
                delete e.position;
                f ? (t = this.getOrigPosition(), n.openOpacity && (t.opacity = .1)) : r === "fade" && (t.opacity = .1);
                u.wrap.css(t).animate(e, {
                    duration: r === "none" ? 0 : n.openSpeed,
                    easing: n.openEasing,
                    step: f ? this.step : null,
                    complete: u._afterZoomIn
                })
            },
            zoomOut: function() {
                var n = u.current,
                    i = n.closeEffect,
                    r = i === "elastic",
                    t = {
                        opacity: .1
                    };
                r && (t = this.getOrigPosition(), n.closeOpacity && (t.opacity = .1));
                u.wrap.animate(t, {
                    duration: i === "none" ? 0 : n.closeSpeed,
                    easing: n.closeEasing,
                    step: r ? this.step : null,
                    complete: u._afterZoomOut
                })
            },
            changeIn: function() {
                var i = u.current,
                    s = i.nextEffect,
                    t = i.pos,
                    o = {
                        opacity: 1
                    },
                    r = u.direction,
                    e = 200,
                    n;
                t.opacity = .1;
                s === "elastic" && (n = r === "down" || r === "up" ? "top" : "left", r === "down" || r === "right" ? (t[n] = h(f(t[n]) - e), o[n] = "+=" + e + "px") : (t[n] = h(f(t[n]) + e), o[n] = "-=" + e + "px"));
                s === "none" ? u._afterZoomIn() : u.wrap.css(t).animate(o, {
                    duration: i.nextSpeed,
                    easing: i.nextEasing,
                    complete: u._afterZoomIn
                })
            },
            changeOut: function() {
                var n = u.previous,
                    r = n.prevEffect,
                    f = {
                        opacity: .1
                    },
                    t = u.direction;
                r === "elastic" && (f[t === "down" || t === "up" ? "top" : "left"] = (t === "up" || t === "left" ? "-" : "+") + "=200px");
                n.wrap.animate(f, {
                    duration: r === "none" ? 0 : n.prevSpeed,
                    easing: n.prevEasing,
                    complete: function() {
                        i(this).trigger("onReset").remove()
                    }
                })
            }
        };
        u.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !s,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: i("html"),
            create: function(n) {
                n = i.extend({}, this.defaults, n);
                this.overlay && this.close();
                this.overlay = i('<div class="fancybox-overlay"><\/div>').appendTo(u.coming ? u.coming.parent : n.parent);
                this.fixed = !1;
                n.fixed && u.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(n) {
                var t = this;
                n = i.extend({}, this.defaults, n);
                this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(n);
                this.fixed || (e.bind("resize.overlay", i.proxy(this.update, this)), this.update());
                n.closeClick && this.overlay.bind("click.overlay", function(n) {
                    if(i(n.target).hasClass("fancybox-overlay")) return u.isActive ? u.close() : t.close(), !1
                });
                this.overlay.css(n.css).show()
            },
            close: function() {
                var n, t;
                e.unbind("resize.overlay");
                this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), n = e.scrollTop(), t = e.scrollLeft(), this.el.removeClass("fancybox-lock"), e.scrollTop(n).scrollLeft(t));
                i(".fancybox-overlay").remove().hide();
                i.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var n = "100%",
                    i;
                this.overlay.width(n).height("100%");
                y ? (i = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > i && (n = o.width())) : o.width() > e.width() && (n = o.width());
                this.overlay.width(n).height(o.height())
            },
            onReady: function(n, t) {
                var r = this.overlay;
                i(".fancybox-overlay").stop(!0, !0);
                r || this.create(n);
                n.locked && this.fixed && t.fixed && (r || (this.margin = o.height() > e.height() ? i("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1);
                n.showEarly === !0 && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(n, t) {
                var r, u;
                t.locked && (this.margin !== !1 && (i("*").filter(function() {
                    return i(this).css("position") === "fixed" && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), r = e.scrollTop(), u = e.scrollLeft(), this.el.addClass("fancybox-lock"), e.scrollTop(r).scrollLeft(u));
                this.open(n)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(n) {
                this.overlay && !u.coming && this.overlay.fadeOut(n.speedOut, i.proxy(this.close, this))
            }
        };
        u.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(n) {
                var o = u.current,
                    r = o.title,
                    s = n.type,
                    t, e;
                if(i.isFunction(r) && (r = r.call(o.element, o)), c(r) && i.trim(r) !== "") {
                    t = i('<div class="fancybox-title fancybox-title-' + s + '-wrap">' + r + "<\/div>");
                    switch(s) {
                        case "inside":
                            e = u.skin;
                            break;
                        case "outside":
                            e = u.wrap;
                            break;
                        case "over":
                            e = u.inner;
                            break;
                        default:
                            e = u.skin;
                            t.appendTo("body");
                            y && t.width(t.width());
                            t.wrapInner('<span class="child"><\/span>');
                            u.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
                    }
                    t[n.position === "top" ? "prependTo" : "appendTo"](e)
                }
            }
        };
        i.fn.fancybox = function(n) {
            var r, f = i(this),
                t = this.selector || "",
                e = function(e) {
                    var o = i(this).blur(),
                        c = r,
                        h, s;
                    e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || o.is(".fancybox-wrap") || (h = n.groupAttr || "data-fancybox-group", s = o.attr(h), s || (h = "rel", s = o.get(0)[h]), s && s !== "" && s !== "nofollow" && (o = t.length ? i(t) : f, o = o.filter("[" + h + '="' + s + '"]'), c = o.index(this)), n.index = c, u.open(o, n) !== !1 && e.preventDefault())
                };
            return n = n || {}, r = n.index || 0, t && n.live !== !1 ? o.undelegate(t, "click.fb-start").delegate(t + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", e) : f.unbind("click.fb-start").bind("click.fb-start", e), this.filter("[data-fancybox-start=1]").trigger("click"), this
        };
        o.ready(function() {
            var t, f;
            i.scrollbarWidth === r && (i.scrollbarWidth = function() {
                var n = i('<div style="width:50px;height:50px;overflow:auto"><div/><\/div>').appendTo("body"),
                    t = n.children(),
                    r = t.innerWidth() - t.height(99).innerWidth();
                return n.remove(), r
            });
            i.support.fixedPosition === r && (i.support.fixedPosition = function() {
                var n = i('<div style="position:fixed;top:20px;"><\/div>').appendTo("body"),
                    t = n[0].offsetTop === 20 || n[0].offsetTop === 15;
                return n.remove(), t
            }());
            i.extend(u.defaults, {
                scrollbarWidth: i.scrollbarWidth(),
                fixed: i.support.fixedPosition,
                parent: i("body")
            });
            t = i(n).width();
            p.addClass("fancybox-lock-test");
            f = i(n).width();
            p.removeClass("fancybox-lock-test");
            i("<style type='text/css'>.fancybox-margin{margin-right:" + (f - t) + "px;}<\/style>").appendTo("head")
        })
    }(window, document, jQuery),
    function() {
        function w(n, t) {
            n.prototype = yi(t.prototype);
            n.prototype.constructor = n;
            n.base = t.prototype
        }

        function yi(n) {
            function t() {}
            return t.prototype = n, new t
        }

        function ei(n, t, i) {
            return i === "millisecond" ? n.setMilliseconds(n.getMilliseconds() + 1 * t) : i === "second" ? n.setSeconds(n.getSeconds() + 1 * t) : i === "minute" ? n.setMinutes(n.getMinutes() + 1 * t) : i === "hour" ? n.setHours(n.getHours() + 1 * t) : i === "day" ? n.setDate(n.getDate() + 1 * t) : i === "week" ? n.setDate(n.getDate() + 7 * t) : i === "month" ? n.setMonth(n.getMonth() + 1 * t) : i === "year" && n.setFullYear(n.getFullYear() + 1 * t), n
        }

        function pi(n, t) {
            return f[t + "Duration"] * n
        }

        function v(n, t) {
            var i = !1;
            for(n < 0 && (i = !0, n *= -1), n = "" + n, t = t ? t : 1; n.length < t;) n = "0" + n;
            return i ? "-" + n : n
        }

        function st(n) {
            if(!n) return n;
            n = n.replace(/^\s\s*/, "");
            for(var t = n.length;
                /\s/.test(n.charAt(--t)););
            return n.slice(0, t + 1)
        }

        function wi(n) {
            n.roundRect = function(n, t, i, r, u, f, e, o) {
                e && (this.fillStyle = e);
                o && (this.strokeStyle = o);
                typeof u == "undefined" && (u = 5);
                this.lineWidth = f;
                this.beginPath();
                this.moveTo(n + u, t);
                this.lineTo(n + i - u, t);
                this.quadraticCurveTo(n + i, t, n + i, t + u);
                this.lineTo(n + i, t + r - u);
                this.quadraticCurveTo(n + i, t + r, n + i - u, t + r);
                this.lineTo(n + u, t + r);
                this.quadraticCurveTo(n, t + r, n, t + r - u);
                this.lineTo(n, t + u);
                this.quadraticCurveTo(n, t, n + u, t);
                this.closePath();
                e && this.fill();
                o && f > 0 && this.stroke()
            }
        }

        function oi(n, t) {
            return n - t
        }

        function bi(n, t) {
            return n.x - t.x
        }

        function u(n) {
            var t = ((n & 16711680) >> 16).toString(16),
                i = ((n & 65280) >> 8).toString(16),
                r = ((n & 255) >> 0).toString(16);
            return t = t.length < 2 ? "0" + t : t, i = i.length < 2 ? "0" + i : i, r = r.length < 2 ? "0" + r : r, "#" + t + i + r
        }

        function ki(n, t, i) {
            return n << 16 | t << 8 | i
        }

        function di(n) {
            var i = this.length >>> 0,
                t = Number(arguments[1]) || 0;
            for(t = t < 0 ? Math.ceil(t) : Math.floor(t), t < 0 && (t += i); t < i; t++)
                if(t in this && this[t] === n) return t;
            return -1
        }

        function gi(n) {
            return n.indexOf || (n.indexOf = di), n
        }

        function yt(n, t, i) {
            var u, r, f, e, o;
            if(i = i || "normal", u = n + "_" + t + "_" + i, r = si[u], isNaN(r)) {
                try {
                    f = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + n + "; font-size:" + t + "px; font-weight:" + i + ";";
                    nt || (e = document.body, nt = document.createElement("span"), nt.innerHTML = "", o = document.createTextNode("Mpgyi"), nt.appendChild(o), e.appendChild(nt));
                    nt.style.display = "";
                    nt.setAttribute("style", f);
                    r = Math.round(nt.offsetHeight);
                    nt.style.display = "none"
                } catch(s) {
                    r = Math.ceil(t * 1.1)
                }
                r = Math.max(r, t);
                si[u] = r
            }
            return r
        }

        function y(n, t) {
            var i = [],
                r;
            if(n = n || "solid", lineDashTypeMap = {
                    solid: [],
                    shortDash: [3, 1],
                    shortDot: [1, 1],
                    shortDashDot: [3, 1, 1, 1],
                    shortDashDotDot: [3, 1, 1, 1, 1, 1],
                    dot: [1, 2],
                    dash: [4, 2],
                    dashDot: [4, 2, 1, 2],
                    longDash: [8, 2],
                    longDashDot: [8, 2, 1, 2],
                    longDashDotDot: [8, 2, 1, 2, 1, 2]
                }, i = lineDashTypeMap[n], i)
                for(r = 0; r < i.length; r++) i[r] *= t;
            else i = [];
            return i
        }

        function s(n, t, i, r) {
            if(n.addEventListener) n.addEventListener(t, i, r || !1);
            else if(n.attachEvent) n.attachEvent("on" + t, function(t) {
                t = t || window.event;
                t.preventDefault = t.preventDefault || function() {
                        t.returnValue = !1
                    };
                t.stopPropagation = t.stopPropagation || function() {
                        t.cancelBubble = !0
                    };
                i.call(n, t)
            });
            else return !1
        }

        function hi(n, t, i) {
            var r, f, u;
            for(n *= l, t *= l, r = i.getImageData(n, t, 2, 2).data, f = !0, u = 0; u < 4; u++)
                if(r[u] !== r[u + 4] | r[u] !== r[u + 8] | r[u] !== r[u + 12]) {
                    f = !1;
                    break
                }
            return f ? ki(r[0], r[1], r[2]) : 0
        }

        function nr(t, i, r) {
            var u = "",
                e = t ? t + "FontStyle" : "fontStyle",
                o = t ? t + "FontWeight" : "fontWeight",
                s = t ? t + "FontSize" : "fontSize",
                h = t ? t + "FontFamily" : "fontFamily",
                c, f;
            return u += i[e] ? i[e] + " " : r && r[e] ? r[e] + " " : "", u += i[o] ? i[o] + " " : r && r[o] ? r[o] + " " : "", u += i[s] ? i[s] + "px " : r && r[s] ? r[s] + "px " : "", c = i[h] ? i[h] + "" : r && r[h] ? r[h] + "" : "", !n && c ? (f = c.split(",")[0], f[0] !== "'" && f[0] !== '"' && (f = "'" + f + "'"), u += f) : u += c, u
        }

        function p(n, t, i) {
            return n in t ? t[n] : i[n]
        }

        function ht(t, i, r) {
            if(n && !!ci) {
                var u = t.getContext("2d");
                wt = u.webkitBackingStorePixelRatio || u.mozBackingStorePixelRatio || u.msBackingStorePixelRatio || u.oBackingStorePixelRatio || u.backingStorePixelRatio || 1;
                l = ri / wt;
                t.width = i * l;
                t.height = r * l;
                ri !== wt && (t.style.width = i + "px", t.style.height = r + "px", u.scale(l, l))
            } else t.width = i, t.height = r
        }

        function rt(t, i) {
            var r = document.createElement("canvas");
            return r.setAttribute("class", "canvasjs-chart-canvas"), ht(r, t, i), n || typeof G_vmlCanvasManager == "undefined" || G_vmlCanvasManager.initElement(r), r
        }

        function li(n, t, i) {
            var u, o, s;
            if(n && t && i) {
                var h = i + "." + (t === "jpeg" ? "jpg" : t),
                    c = "image/" + t,
                    f = n.toDataURL(c),
                    l = !1,
                    r = document.createElement("a");
                if(r.download = h, r.href = f, r.target = "_blank", typeof Blob != "undefined" && !!new Blob) {
                    var v = f.replace(/^data:[a-z/]*;base64,/, ""),
                        e = atob(v),
                        a = new ArrayBuffer(e.length),
                        y = new Uint8Array(a);
                    for(u = 0; u < e.length; u++) y[u] = e.charCodeAt(u);
                    o = new Blob([a], {
                        type: "image/" + t
                    });
                    try {
                        window.navigator.msSaveBlob(o, h);
                        l = !0
                    } catch(p) {
                        r.dataset.downloadurl = [c, r.download, r.href].join(":");
                        r.href = window.URL.createObjectURL(o)
                    }
                }
                if(!l) try {
                    event = document.createEvent("MouseEvents");
                    event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
                    r.dispatchEvent ? r.dispatchEvent(event) : r.fireEvent && r.fireEvent("onclick")
                } catch(p) {
                    s = window.open();
                    s.document.write("<img src='" + f + "'><\/img><div>Please right click on the image and save it to your device<\/div>");
                    s.document.close()
                }
            }
        }

        function b(n, t, i) {
            t.getAttribute("state") !== i && (t.setAttribute("state", i), t.setAttribute("type", "button"), t.style.position = "relative", t.style.margin = "0px 0px 0px 0px", t.style.padding = "3px 4px 0px 4px", t.style.cssFloat = "left", t.setAttribute("title", n._cultureInfo[i + "Text"]), t.innerHTML = "<img style='height:16px;' src='" + tr[i].image + "' alt='" + n._cultureInfo[i + "Text"] + "' />")
        }

        function bt() {
            for(var t = null, n = 0; n < arguments.length; n++) t = arguments[n], t.style && (t.style.display = "inline")
        }

        function d() {
            for(var n = null, t = 0; t < arguments.length; t++) n = arguments[t], n && n.style && (n.style.display = "none")
        }

        function h(n, t, i, r) {
            this._defaultsKey = n;
            this.parent = r;
            this._eventListeners = [];
            var u = {};
            i && ut[i] && ut[i][n] && (u = ut[i][n]);
            this._options = t ? t : {};
            this.setOptions(this._options, u)
        }

        function t(i, r, u) {
            var f, e, o;
            if(this._publicChartReference = u, r = r || {}, t.base.constructor.call(this, "Chart", r, r.theme ? r.theme : "theme1"), f = this, this._containerId = i, this._objectsInitialized = !1, this.ctx = null, this.overlaidCanvasCtx = null, this._indexLabels = [], this._panTimerId = 0, this._lastTouchEventType = "", this._lastTouchData = null, this.isAnimating = !1, this.renderCount = 0, this.animatedRender = !1, this.disableToolTip = !1, this.panEnabled = !1, this._defaultCursor = "default", this.plotArea = {
                    canvas: null,
                    ctx: null,
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    width: 0,
                    height: 0
                }, this._dataInRenderedOrder = [], this._container = typeof this._containerId == "string" ? document.getElementById(this._containerId) : this._containerId, !this._container) {
                window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
                return
            }
            if(this._container.innerHTML = "", e = 0, o = 0, e = this._options.width ? this.width : this._container.clientWidth > 0 ? this._container.clientWidth : this.width, o = this._options.height ? this.height : this._container.clientHeight > 0 ? this._container.clientHeight : this.height, this.width = e, this.height = o, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this._selectedColorSet = typeof tt[this.colorSet] != "undefined" ? tt[this.colorSet] : tt.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", n || (this._canvasJSContainer.style.height = "0px"), this._container.appendChild(this._canvasJSContainer), this.canvas = rt(e, o), this.canvas.style.position = "absolute", this.canvas.getContext) this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", wi(this.ctx);
            else return;
            n ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = rt(e, o), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d"));
            this.overlaidCanvas = rt(e, o);
            this.overlaidCanvas.style.position = "absolute";
            this._canvasJSContainer.appendChild(this.overlaidCanvas);
            this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d");
            this.overlaidCanvasCtx.textBaseline = "top";
            this._eventManager = new lt(this);
            s(window, "resize", function() {
                f._updateSize() && f.render()
            });
            this._toolBar = document.createElement("div");
            this._toolBar.setAttribute("class", "canvasjs-chart-toolbar");
            this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;";
            this._canvasJSContainer.appendChild(this._toolBar);
            this.bounds = {
                x1: 0,
                y1: 0,
                x2: this.width,
                y2: this.height
            };
            s(this.overlaidCanvas, "click", function(n) {
                f._mouseEventHandler(n)
            });
            s(this.overlaidCanvas, "mousemove", function(n) {
                f._mouseEventHandler(n)
            });
            s(this.overlaidCanvas, "mouseup", function(n) {
                f._mouseEventHandler(n)
            });
            s(this.overlaidCanvas, "mousedown", function(n) {
                f._mouseEventHandler(n);
                d(f._dropdownMenu)
            });
            s(this.overlaidCanvas, "mouseout", function(n) {
                f._mouseEventHandler(n)
            });
            s(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(n) {
                f._touchEventHandler(n)
            });
            s(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(n) {
                f._touchEventHandler(n)
            });
            s(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(n) {
                f._touchEventHandler(n)
            });
            s(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(n) {
                f._touchEventHandler(n)
            });
            this._creditLink || (this._creditLink = document.createElement("a"), this._creditLink.setAttribute("class", "canvasjs-chart-credit"), this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" + (this.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), this._creditLink.setAttribute("tabIndex", -1), this._creditLink.setAttribute("target", "_blank"));
            this._toolTip = new k(this, this._options.toolTip, this.theme);
            this.data = null;
            this.axisX = null;
            this.axisY = null;
            this.axisY2 = null;
            this.sessionVariables = {
                axisX: {},
                axisY: {},
                axisY2: {}
            }
        }

        function kt(n, t) {
            for(var r = [], f, e, i, o, h, s, c, u = 0; u < n.length; u++) {
                if(u == 0) {
                    r.push(n[0]);
                    continue
                }
                i = u - 1;
                f = i === 0 ? 0 : i - 1;
                e = i === n.length - 1 ? i : i + 1;
                o = {
                    x: (n[e].x - n[f].x) / t,
                    y: (n[e].y - n[f].y) / t
                };
                h = {
                    x: n[i].x + o.x / 3,
                    y: n[i].y + o.y / 3
                };
                r[r.length] = h;
                i = u;
                f = i === 0 ? 0 : i - 1;
                e = i === n.length - 1 ? i : i + 1;
                s = {
                    x: (n[e].x - n[f].x) / t,
                    y: (n[e].y - n[f].y) / t
                };
                c = {
                    x: n[i].x - s.x / 3,
                    y: n[i].y - s.y / 3
                };
                r[r.length] = c;
                r[r.length] = n[u]
            }
            return r
        }

        function ai(n, t) {
            if(n === null || typeof n == "undefined") return t;
            var i = parseFloat(n.toString()) * (n.toString().indexOf("%") >= 0 ? t / 100 : 1);
            return !isNaN(i) && i <= t && i >= 0 ? i : t
        }

        function ft(n, t, i, r, u) {
            typeof u == "undefined" && (u = 0);
            this._padding = u;
            this._x1 = n;
            this._y1 = t;
            this._x2 = i;
            this._y2 = r;
            this._topOccupied = this._padding;
            this._bottomOccupied = this._padding;
            this._leftOccupied = this._padding;
            this._rightOccupied = this._padding
        }

        function c(n, t) {
            c.base.constructor.call(this, "TextBlock", t);
            this.ctx = n;
            this._isDirty = !0;
            this._wrappedText = null;
            this._lineHeight = yt(this.fontFamily, this.fontSize, this.fontWeight)
        }

        function ct(n, t) {
            ct.base.constructor.call(this, "Title", t, n.theme);
            this.chart = n;
            this.canvas = n.canvas;
            this.ctx = this.chart.ctx;
            typeof this._options.fontSize == "undefined" && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.width = null;
            this.height = null;
            this.bounds = {
                x1: null,
                y1: null,
                x2: null,
                y2: null
            }
        }

        function gt(n, t) {
            gt.base.constructor.call(this, "Subtitle", t, n.theme);
            this.chart = n;
            this.canvas = n.canvas;
            this.ctx = this.chart.ctx;
            typeof this._options.fontSize == "undefined" && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.width = null;
            this.height = null;
            this.bounds = {
                x1: null,
                y1: null,
                x2: null,
                y2: null
            }
        }

        function ni(n, t, i) {
            ni.base.constructor.call(this, "Legend", t, i);
            this.chart = n;
            this.canvas = n.canvas;
            this.ctx = this.chart.ctx;
            this.ghostCtx = this.chart._eventManager.ghostCtx;
            this.items = [];
            this.width = 0;
            this.height = 0;
            this.orientation = null;
            this.dataSeries = [];
            this.bounds = {
                x1: null,
                y1: null,
                x2: null,
                y2: null
            };
            typeof this._options.fontSize == "undefined" && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.lineHeight = yt(this.fontFamily, this.fontSize, this.fontWeight);
            this.horizontalSpacing = this.fontSize
        }

        function ui(n, t) {
            ui.base.constructor.call(this, t);
            this.chart = n;
            this.canvas = n.canvas;
            this.ctx = this.chart.ctx
        }

        function g(n, t, i, r, u) {
            g.base.constructor.call(this, "DataSeries", t, i);
            this.chart = n;
            this.canvas = n.canvas;
            this._ctx = n.canvas.ctx;
            this.index = r;
            this.noDataPointsInPlotArea = 0;
            this.id = u;
            this.chart._eventManager.objectMap[u] = {
                id: u,
                objectType: "dataSeries",
                dataSeriesIndex: r
            };
            this.dataPointIds = [];
            this.plotUnit = [];
            this.axisX = null;
            this.axisY = null;
            this.fillOpacity === null && (this.fillOpacity = this.type.match(/area/i) ? .7 : 1);
            this.axisPlacement = this.getDefaultAxisPlacement();
            typeof this._options.indexLabelFontSize == "undefined" && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
        }

        function e(n, t, i, r) {
            if(e.base.constructor.call(this, "Axis", t, n.theme), this.chart = n, this.canvas = n.canvas, this.ctx = n.ctx, this.maxWidth = 0, this.maxHeight = 0, this.intervalStartPosition = 0, this.labels = [], this._labels = null, this.dataInfo = {
                    min: Infinity,
                    max: -Infinity,
                    viewPortMin: Infinity,
                    viewPortMax: -Infinity,
                    minDiff: Infinity
                }, i === "axisX" ? (this.sessionVariables = this.chart.sessionVariables[i], this._options.interval || (this.intervalType = null)) : this.sessionVariables = r === "left" || r === "top" ? this.chart.sessionVariables.axisY : this.chart.sessionVariables.axisY2, typeof this._options.titleFontSize == "undefined" && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize)), typeof this._options.labelFontSize == "undefined" && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize)), this.type = i, i !== "axisX" || t && typeof t.gridThickness != "undefined" || (this.gridThickness = 0), this._position = r, this.lineCoordinates = {
                    x1: null,
                    y1: null,
                    x2: null,
                    y2: null,
                    width: null
                }, this.labelAngle = (this.labelAngle % 360 + 360) % 360, this.labelAngle > 90 && this.labelAngle <= 270 ? this.labelAngle -= 180 : this.labelAngle > 180 && this.labelAngle <= 270 ? this.labelAngle -= 180 : this.labelAngle > 270 && this.labelAngle <= 360 && (this.labelAngle -= 360), this._options.stripLines && this._options.stripLines.length > 0) {
                this.stripLines = [];
                for(var u = 0; u < this._options.stripLines.length; u++) this.stripLines.push(new ti(this.chart, this._options.stripLines[u], n.theme, ++this.chart._eventManager.lastObjectId, this))
            }
            this._titleTextBlock = null;
            this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || this.sessionVariables.newViewportMinimum === null ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || this.sessionVariables.newViewportMaximum === null ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            this.minimum !== null && this.viewportMinimum !== null && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            this.maximum !== null && this.viewportMaximum !== null && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.trackChanges("viewportMinimum");
            this.trackChanges("viewportMaximum")
        }

        function ti(n, t, i, r, u) {
            ti.base.constructor.call(this, "StripLine", t, i, u);
            this.id = r;
            this.chart = n;
            this.ctx = this.chart.ctx;
            this.label = this.label;
            this._thicknessType = "pixel";
            this.startValue !== null && this.endValue !== null && (this.value = ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this.thickness = Math.max(this.endValue - this.startValue), this._thicknessType = "value")
        }

        function k(n, t, i) {
            k.base.constructor.call(this, "ToolTip", t, i);
            this.chart = n;
            this.canvas = n.canvas;
            this.ctx = this.chart.ctx;
            this.currentSeriesIndex = -1;
            this.currentDataPointIndex = -1;
            this._timerId = 0;
            this._prevX = NaN;
            this._prevY = NaN;
            this._initialize()
        }

        function lt(n) {
            var t, i;
            this.chart = n;
            this.lastObjectId = 0;
            t = this;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.ghostCanvas = rt(this.chart.width, this.chart.height);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            i = function(n) {
                t.mouseEventHandler.call(t, n)
            };
            this.mouseoveredObjectMaps = []
        }

        function at(n) {
            var t;
            n && ot[n] && (t = ot[n]);
            at.base.constructor.call(this, "CultureInfo", t)
        }

        function fi(n) {
            this.chart = n;
            this.ctx = this.chart.plotArea.ctx;
            this.animations = [];
            this.animationRequestId = null
        }
        var vt = !1,
            n = !!document.createElement("canvas").getContext,
            et = {
                Chart: {
                    width: 500,
                    height: 400,
                    zoomEnabled: !1,
                    zoomType: "x",
                    backgroundColor: "white",
                    theme: "theme1",
                    animationEnabled: !1,
                    animationDuration: 1200,
                    dataPointMaxWidth: null,
                    colorSet: "colorSet1",
                    culture: "en",
                    creditText: "CanvasJS.com",
                    interactivityEnabled: !0,
                    exportEnabled: !1,
                    exportFileName: "Chart",
                    rangeChanging: null,
                    rangeChanged: null
                },
                Title: {
                    padding: 0,
                    text: null,
                    verticalAlign: "top",
                    horizontalAlign: "center",
                    fontSize: 20,
                    fontFamily: "Calibri",
                    fontWeight: "normal",
                    fontColor: "black",
                    fontStyle: "normal",
                    borderThickness: 0,
                    borderColor: "black",
                    cornerRadius: 0,
                    backgroundColor: null,
                    margin: 5,
                    wrap: !0,
                    maxWidth: null,
                    dockInsidePlotArea: !1
                },
                Subtitle: {
                    padding: 0,
                    text: null,
                    verticalAlign: "top",
                    horizontalAlign: "center",
                    fontSize: 14,
                    fontFamily: "Calibri",
                    fontWeight: "normal",
                    fontColor: "black",
                    fontStyle: "normal",
                    borderThickness: 0,
                    borderColor: "black",
                    cornerRadius: 0,
                    backgroundColor: null,
                    margin: 2,
                    wrap: !0,
                    maxWidth: null,
                    dockInsidePlotArea: !1
                },
                Legend: {
                    name: null,
                    verticalAlign: "center",
                    horizontalAlign: "right",
                    fontSize: 14,
                    fontFamily: "calibri",
                    fontWeight: "normal",
                    fontColor: "black",
                    fontStyle: "normal",
                    cursor: null,
                    itemmouseover: null,
                    itemmouseout: null,
                    itemmousemove: null,
                    itemclick: null,
                    dockInsidePlotArea: !1,
                    reversed: !1,
                    maxWidth: null,
                    maxHeight: null,
                    itemMaxWidth: null,
                    itemWidth: null,
                    itemWrap: !0,
                    itemTextFormatter: null
                },
                ToolTip: {
                    enabled: !0,
                    shared: !1,
                    animationEnabled: !0,
                    content: null,
                    contentFormatter: null,
                    reversed: !1,
                    backgroundColor: null,
                    borderColor: null,
                    borderThickness: 2,
                    cornerRadius: 5,
                    fontSize: 14,
                    fontColor: "#000000",
                    fontFamily: "Calibri, Arial, Georgia, serif;",
                    fontWeight: "normal",
                    fontStyle: "italic"
                },
                Axis: {
                    minimum: null,
                    maximum: null,
                    viewportMinimum: null,
                    viewportMaximum: null,
                    interval: null,
                    intervalType: null,
                    title: null,
                    titleFontColor: "black",
                    titleFontSize: 20,
                    titleFontFamily: "arial",
                    titleFontWeight: "normal",
                    titleFontStyle: "normal",
                    labelAngle: 0,
                    labelFontFamily: "arial",
                    labelFontColor: "black",
                    labelFontSize: 12,
                    labelFontWeight: "normal",
                    labelFontStyle: "normal",
                    labelAutoFit: !1,
                    labelWrap: !0,
                    labelMaxWidth: null,
                    labelFormatter: null,
                    prefix: "",
                    suffix: "",
                    includeZero: !0,
                    tickLength: 5,
                    tickColor: "black",
                    tickThickness: 1,
                    lineColor: "black",
                    lineThickness: 1,
                    lineDashType: "solid",
                    gridColor: "A0A0A0",
                    gridThickness: 0,
                    gridDashType: "solid",
                    interlacedColor: null,
                    valueFormatString: null,
                    margin: 2,
                    stripLines: []
                },
                StripLine: {
                    value: null,
                    startValue: null,
                    endValue: null,
                    color: "orange",
                    opacity: null,
                    thickness: 2,
                    lineDashType: "solid",
                    label: "",
                    labelBackgroundColor: "#EEEEEE",
                    labelFontFamily: "arial",
                    labelFontColor: "orange",
                    labelFontSize: 12,
                    labelFontWeight: "normal",
                    labelFontStyle: "normal",
                    labelFormatter: null,
                    showOnTop: !1
                },
                DataSeries: {
                    name: null,
                    dataPoints: null,
                    label: "",
                    bevelEnabled: !1,
                    highlightEnabled: !0,
                    cursor: null,
                    indexLabel: "",
                    indexLabelPlacement: "auto",
                    indexLabelOrientation: "horizontal",
                    indexLabelFontColor: "black",
                    indexLabelFontSize: 12,
                    indexLabelFontStyle: "normal",
                    indexLabelFontFamily: "Arial",
                    indexLabelFontWeight: "normal",
                    indexLabelBackgroundColor: null,
                    indexLabelLineColor: null,
                    indexLabelLineThickness: 1,
                    indexLabelLineDashType: "solid",
                    indexLabelMaxWidth: null,
                    indexLabelWrap: !0,
                    indexLabelFormatter: null,
                    lineThickness: 2,
                    lineDashType: "solid",
                    color: null,
                    risingColor: "white",
                    fillOpacity: null,
                    startAngle: 0,
                    radius: null,
                    innerRadius: null,
                    type: "column",
                    xValueType: "number",
                    axisYType: "primary",
                    xValueFormatString: null,
                    yValueFormatString: null,
                    zValueFormatString: null,
                    percentFormatString: null,
                    showInLegend: null,
                    legendMarkerType: null,
                    legendMarkerColor: null,
                    legendText: null,
                    legendMarkerBorderColor: null,
                    legendMarkerBorderThickness: null,
                    markerType: "circle",
                    markerColor: null,
                    markerSize: null,
                    markerBorderColor: null,
                    markerBorderThickness: null,
                    mouseover: null,
                    mouseout: null,
                    mousemove: null,
                    click: null,
                    toolTipContent: null,
                    visible: !0
                },
                TextBlock: {
                    x: 0,
                    y: 0,
                    width: null,
                    height: null,
                    maxWidth: null,
                    maxHeight: null,
                    padding: 0,
                    angle: 0,
                    text: "",
                    horizontalAlign: "center",
                    fontSize: 12,
                    fontFamily: "calibri",
                    fontWeight: "normal",
                    fontColor: "black",
                    fontStyle: "normal",
                    borderThickness: 0,
                    borderColor: "black",
                    cornerRadius: 0,
                    backgroundColor: null,
                    textBaseline: "top"
                },
                CultureInfo: {
                    decimalSeparator: ".",
                    digitGroupSeparator: ",",
                    zoomText: "Zoom",
                    panText: "Pan",
                    resetText: "Reset",
                    menuText: "More Options",
                    saveJPGText: "Save as JPG",
                    savePNGText: "Save as PNG",
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                }
            },
            ot = {
                en: {}
            },
            tt = {
                colorSet1: ["#369EAD", "#C24642", "#7F6084", "#86B402", "#A2D1CF", "#C8B631", "#6DBCEB", "#52514E", "#4F81BC", "#A064A1", "#F79647"],
                colorSet2: ["#4F81BC", "#C0504E", "#9BBB58", "#23BFAA", "#8064A1", "#4AACC5", "#F79647", "#33558B"],
                colorSet3: ["#8CA1BC", "#36845C", "#017E82", "#8CB9D0", "#708C98", "#94838D", "#F08891", "#0366A7", "#008276", "#EE7757", "#E5BA3A", "#F2990B", "#03557B", "#782970"]
            },
            ut = {
                theme1: {
                    Chart: {
                        colorSet: "colorSet1"
                    },
                    Title: {
                        fontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                        fontSize: 33,
                        fontColor: "#3A3A3A",
                        fontWeight: "bold",
                        verticalAlign: "top",
                        margin: 5
                    },
                    Subtitle: {
                        fontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                        fontSize: 16,
                        fontColor: "#3A3A3A",
                        fontWeight: "bold",
                        verticalAlign: "top",
                        margin: 5
                    },
                    Axis: {
                        titleFontSize: 26,
                        titleFontColor: "#666666",
                        titleFontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                        labelFontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                        labelFontSize: 18,
                        labelFontColor: "grey",
                        tickColor: "#BBBBBB",
                        tickThickness: 2,
                        gridThickness: 2,
                        gridColor: "#BBBBBB",
                        lineThickness: 2,
                        lineColor: "#BBBBBB"
                    },
                    Legend: {
                        verticalAlign: "bottom",
                        horizontalAlign: "center",
                        fontFamily: n ? "monospace, sans-serif,arial black" : "calibri"
                    },
                    DataSeries: {
                        indexLabelFontColor: "grey",
                        indexLabelFontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                        indexLabelFontSize: 18,
                        indexLabelLineThickness: 1
                    }
                },
                theme2: {
                    Chart: {
                        colorSet: "colorSet2"
                    },
                    Title: {
                        fontFamily: "impact, charcoal, arial black, sans-serif",
                        fontSize: 32,
                        fontColor: "#333333",
                        verticalAlign: "top",
                        margin: 5
                    },
                    Subtitle: {
                        fontFamily: "impact, charcoal, arial black, sans-serif",
                        fontSize: 14,
                        fontColor: "#333333",
                        verticalAlign: "top",
                        margin: 5
                    },
                    Axis: {
                        titleFontSize: 22,
                        titleFontColor: "rgb(98,98,98)",
                        titleFontFamily: n ? "monospace, sans-serif,arial black" : "arial",
                        titleFontWeight: "bold",
                        labelFontFamily: n ? "monospace, Courier New, Courier" : "arial",
                        labelFontSize: 16,
                        labelFontColor: "grey",
                        labelFontWeight: "bold",
                        tickColor: "grey",
                        tickThickness: 2,
                        gridThickness: 2,
                        gridColor: "grey",
                        lineColor: "grey",
                        lineThickness: 0
                    },
                    Legend: {
                        verticalAlign: "bottom",
                        horizontalAlign: "center",
                        fontFamily: n ? "monospace, sans-serif,arial black" : "arial"
                    },
                    DataSeries: {
                        indexLabelFontColor: "grey",
                        indexLabelFontFamily: n ? "Courier New, Courier, monospace" : "arial",
                        indexLabelFontWeight: "bold",
                        indexLabelFontSize: 18,
                        indexLabelLineThickness: 1
                    }
                },
                theme3: {
                    Chart: {
                        colorSet: "colorSet1"
                    },
                    Title: {
                        fontFamily: n ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                        fontSize: 32,
                        fontColor: "#3A3A3A",
                        fontWeight: "bold",
                        verticalAlign: "top",
                        margin: 5
                    },
                    Subtitle: {
                        fontFamily: n ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                        fontSize: 16,
                        fontColor: "#3A3A3A",
                        fontWeight: "bold",
                        verticalAlign: "top",
                        margin: 5
                    },
                    Axis: {
                        titleFontSize: 22,
                        titleFontColor: "rgb(98,98,98)",
                        titleFontFamily: n ? "Verdana, Geneva, Calibri, sans-serif" : "calibri",
                        labelFontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                        labelFontSize: 18,
                        labelFontColor: "grey",
                        tickColor: "grey",
                        tickThickness: 2,
                        gridThickness: 2,
                        gridColor: "grey",
                        lineThickness: 2,
                        lineColor: "grey"
                    },
                    Legend: {
                        verticalAlign: "bottom",
                        horizontalAlign: "center",
                        fontFamily: n ? "monospace, sans-serif,arial black" : "calibri"
                    },
                    DataSeries: {
                        bevelEnabled: !0,
                        indexLabelFontColor: "grey",
                        indexLabelFontFamily: n ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri",
                        indexLabelFontSize: 18,
                        indexLabelLineColor: "lightgrey",
                        indexLabelLineThickness: 2
                    }
                }
            },
            f = {
                numberDuration: 1,
                yearDuration: 314496e5,
                monthDuration: 2592e6,
                weekDuration: 6048e5,
                dayDuration: 864e5,
                hourDuration: 36e5,
                minuteDuration: 6e4,
                secondDuration: 1e3,
                millisecondDuration: 1,
                dayOfWeekFromInt: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            si = {},
            nt = null,
            ii = function() {
                var n = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                    t = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    u = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    f = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                    e = /[^-+\dA-Z]/g;
                return function(o, s, h) {
                    var tt = h ? h.days : t,
                        it = h ? h.months : r,
                        rt = h ? h.shortDays : i,
                        ut = h ? h.shortMonths : u,
                        y = !1;
                    if(o = o && o.getTime ? o : o ? new Date(o) : new Date, isNaN(o)) throw SyntaxError("invalid date");
                    s.slice(0, 4) === "UTC:" && (s = s.slice(4), y = !0);
                    var c = y ? "getUTC" : "get",
                        k = o[c + "Date"](),
                        d = o[c + "Day"](),
                        p = o[c + "Month"](),
                        w = o[c + "FullYear"](),
                        l = o[c + "Hours"](),
                        g = o[c + "Minutes"](),
                        nt = o[c + "Seconds"](),
                        b = o[c + "Milliseconds"](),
                        a = y ? 0 : o.getTimezoneOffset();
                    return s.replace(n, function(n) {
                        switch(n) {
                            case "D":
                                return k;
                            case "DD":
                                return v(k, 2);
                            case "DDD":
                                return rt[d];
                            case "DDDD":
                                return tt[d];
                            case "M":
                                return p + 1;
                            case "MM":
                                return v(p + 1, 2);
                            case "MMM":
                                return ut[p];
                            case "MMMM":
                                return it[p];
                            case "Y":
                                return parseInt(String(w).slice(-2));
                            case "YY":
                                return v(String(w).slice(-2), 2);
                            case "YYY":
                                return v(String(w).slice(-3), 3);
                            case "YYYY":
                                return v(w, 4);
                            case "h":
                                return l % 12 || 12;
                            case "hh":
                                return v(l % 12 || 12, 2);
                            case "H":
                                return l;
                            case "HH":
                                return v(l, 2);
                            case "m":
                                return g;
                            case "mm":
                                return v(g, 2);
                            case "s":
                                return nt;
                            case "ss":
                                return v(nt, 2);
                            case "f":
                                return String(b).slice(0, 1);
                            case "ff":
                                return v(String(b).slice(0, 2), 2);
                            case "fff":
                                return v(String(b).slice(0, 3), 3);
                            case "t":
                                return l < 12 ? "a" : "p";
                            case "tt":
                                return l < 12 ? "am" : "pm";
                            case "T":
                                return l < 12 ? "A" : "P";
                            case "TT":
                                return l < 12 ? "AM" : "PM";
                            case "K":
                                return y ? "UTC" : (String(o).match(f) || [""]).pop().replace(e, "");
                            case "z":
                                return(a > 0 ? "-" : "+") + Math.floor(Math.abs(a) / 60);
                            case "zz":
                                return(a > 0 ? "-" : "+") + v(Math.floor(Math.abs(a) / 60), 2);
                            case "zzz":
                                return(a > 0 ? "-" : "+") + v(Math.floor(Math.abs(a) / 60), 2) + v(Math.abs(a) % 60, 2);
                            default:
                                return n.slice(1, n.length - 1)
                        }
                    })
                }
            }(),
            it = function(n, t, i) {
                var w, r, e, nt, s, ft;
                if(n === null) return "";
                n = Number(n);
                w = n < 0 ? !0 : !1;
                w && (n *= -1);
                var at = i ? i.decimalSeparator : ".",
                    b = i ? i.digitGroupSeparator : ",",
                    ot = "";
                t = String(t);
                var a = 1,
                    u = "",
                    y = "",
                    h = -1,
                    k = [],
                    d = [],
                    p = 0,
                    st = 0,
                    g = 0,
                    ht = !1,
                    c = 0;
                for(y = t.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|‰|./g), r = null, e = 0; y && e < y.length; e++) {
                    if(r = y[e], r === "." && h < 0) {
                        h = e;
                        continue
                    } else if(r === "%") a *= 100;
                    else if(r === "‰") {
                        a *= 1e3;
                        continue
                    } else if(r[0] === "," && r[r.length - 1] === ".") {
                        a /= Math.pow(1e3, r.length - 1);
                        h = e + r.length - 1;
                        continue
                    } else(r[0] === "E" || r[0] === "e") && r[r.length - 1] === "0" && (ht = !0);
                    h < 0 ? (k.push(r), r === "#" || r === "0" ? p++ : r === "," && g++) : (d.push(r), (r === "#" || r === "0") && st++)
                }
                ht && (nt = Math.floor(n), c = (nt === 0 ? "" : String(nt)).length - p, a /= Math.pow(10, c));
                n *= a;
                h < 0 && (h = e);
                ot = n.toFixed(st);
                var ct = ot.split("."),
                    f = (ct[0] + "").split(""),
                    tt = (ct[1] + "").split("");
                f && f[0] === "0" && f.shift();
                for(var lt = 0, it = 0, rt = 0, ut = 0, o = 0; k.length > 0;)
                    if(r = k.pop(), r === "#" || r === "0")
                        if(lt++, lt === p) {
                            if(s = f, f = [], r === "0")
                                for(ft = p - it - (s ? s.length : 0); ft > 0;) s.unshift("0"), ft--;
                            while(s.length > 0) u = s.pop() + u, o++, o % ut == 0 && rt === g && s.length > 0 && (u = b + u);
                            w && (u = "-" + u)
                        } else f.length > 0 ? (u = f.pop() + u, it++, o++) : r === "0" && (u = "0" + u, it++, o++), o % ut == 0 && rt === g && f.length > 0 && (u = b + u);
                    else(r[0] === "E" || r[0] === "e") && r[r.length - 1] === "0" && /[eE][+-]*[0]+/.test(r) ? (r = c < 0 ? r.replace("+", "").replace("-", "") : r.replace("-", ""), u += r.replace(/[0]+/, function(n) {
                        return v(c, n.length)
                    })) : r === "," ? (rt++, ut = o, o = 0, f.length > 0 && (u = b + u)) : u = r.length > 1 && (r[0] === '"' && r[r.length - 1] === '"' || r[0] === "'" && r[r.length - 1] === "'") ? r.slice(1, r.length - 1) + u : r + u;
                for(var l = "", et = !1; d.length > 0;) r = d.shift(), r === "#" || r === "0" ? tt.length > 0 && Number(tt.join("")) !== 0 ? (l += tt.shift(), et = !0) : r === "0" && (l += "0", et = !0) : r.length > 1 && (r[0] === '"' && r[r.length - 1] === '"' || r[0] === "'" && r[r.length - 1] === "'") ? l += r.slice(1, r.length - 1) : (r[0] === "E" || r[0] === "e") && r[r.length - 1] === "0" && /[eE][+-]*[0]+/.test(r) ? (r = c < 0 ? r.replace("+", "").replace("-", "") : r.replace("-", ""), l += r.replace(/[0]+/, function(n) {
                    return v(c, n.length)
                })) : l += r;
                return u + ((et ? at : "") + l)
            },
            pt = function(n) {
                var t = 0,
                    i = 0;
                return n = n || window.event, n.offsetX || n.offsetX === 0 ? (t = n.offsetX, i = n.offsetY) : n.layerX || n.layerX == 0 ? (t = n.layerX, i = n.layerY) : (t = n.pageX - n.target.offsetLeft, i = n.pageY - n.target.offsetTop), {
                    x: t,
                    y: i
                }
            },
            ci = !0,
            ri = window.devicePixelRatio || 1,
            wt = 1,
            l = ci ? ri / wt : 1,
            tr = {
                reset: {
                    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="
                },
                pan: {
                    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="
                },
                zoom: {
                    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="
                },
                menu: {
                    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"
                }
            },
            o, dt;
        h.prototype.setOptions = function(n, t) {
            var r, i;
            if(et[this._defaultsKey]) {
                r = et[this._defaultsKey];
                for(i in r) r.hasOwnProperty(i) && (this[i] = n && i in n ? n[i] : t && i in t ? t[i] : r[i])
            } else vt && window.console && console.log("defaults not set")
        };
        h.prototype.updateOption = function(n) {
            !et[this._defaultsKey] && vt && window.console && console.log("defaults not set");
            var u = et[this._defaultsKey],
                t = this._options.theme ? this._options.theme : this.chart && this.chart._options.theme ? this.chart._options.theme : "theme1",
                i = {},
                r = this[n];
            return(t && ut[t] && ut[t][this._defaultsKey] && (i = ut[t][this._defaultsKey]), n in u && (r = n in this._options ? this._options[n] : i && n in i ? i[n] : u[n]), r === this[n]) ? !1 : (this[n] = r, !0)
        };
        h.prototype.trackChanges = function(n) {
            if(!this.sessionVariables) throw "Session Variable Store not set";
            this.sessionVariables[n] = this._options[n]
        };
        h.prototype.isBeingTracked = function(n) {
            return this._options._oldOptions || (this._options._oldOptions = {}), this._options._oldOptions[n] ? !0 : !1
        };
        h.prototype.hasOptionChanged = function(n) {
            if(!this.sessionVariables) throw "Session Variable Store not set";
            return !(this.sessionVariables[n] === this._options[n])
        };
        h.prototype.addEventListener = function(n, t, i) {
            n && t && (i = i || this, this._eventListeners[n] = this._eventListeners[n] || [], this._eventListeners[n].push({
                context: i,
                eventHandler: t
            }))
        };
        h.prototype.removeEventListener = function(n, t) {
            var r, i;
            if(n && t && this._eventListeners[n])
                for(r = this._eventListeners[n], i = 0; i < r.length; i++)
                    if(r[i].eventHandler === t) {
                        r[i].splice(i, 1);
                        break
                    }
        };
        h.prototype.removeAllEventListeners = function() {
            this._eventListeners = []
        };
        h.prototype.dispatchEvent = function(n, t, i) {
            var u, r;
            if(n && this._eventListeners[n])
                for(t = t || {}, u = this._eventListeners[n], r = 0; r < u.length; r++) u[r].eventHandler.call(u[r].context, t);
            typeof this[n] == "function" && this[n].call(i || this.chart._publicChartReference, t)
        };
        w(t, h);
        t.prototype._updateOptions = function() {
            var t = this,
                i, u, f, r;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.updateOption("colorSet") && (this._selectedColorSet = typeof tt[this.colorSet] != "undefined" ? tt[this.colorSet] : tt.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this._cultureInfo = new at(this._options.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && n;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this._options.zoomEnabled ? (this._zoomButton || (d(this._zoomButton = document.createElement("button")), b(this, this._zoomButton, "pan"), this._toolBar.appendChild(this._zoomButton), s(this._zoomButton, "click", function() {
                t.zoomEnabled ? (t.zoomEnabled = !1, t.panEnabled = !0, b(t, t._zoomButton, "zoom")) : (t.zoomEnabled = !0, t.panEnabled = !1, b(t, t._zoomButton, "pan"));
                t.render()
            })), this._resetButton || (d(this._resetButton = document.createElement("button")), b(this, this._resetButton, "reset"), this._toolBar.appendChild(this._resetButton), s(this._resetButton, "click", function() {
                t._toolTip.hide();
                t.zoomEnabled || t.panEnabled ? (t.zoomEnabled = !0, t.panEnabled = !1, b(t, t._zoomButton, "pan"), t._defaultCursor = "default", t.overlaidCanvas.style.cursor = t._defaultCursor) : (t.zoomEnabled = !1, t.panEnabled = !1);
                t.sessionVariables.axisX && (t.sessionVariables.axisX.newViewportMinimum = null, t.sessionVariables.axisX.newViewportMaximum = null);
                t.sessionVariables.axisY && (t.sessionVariables.axisY.newViewportMinimum = null, t.sessionVariables.axisY.newViewportMaximum = null);
                t.sessionVariables.axisY2 && (t.sessionVariables.axisY2.newViewportMinimum = null, t.sessionVariables.axisY2.newViewportMaximum = null);
                t.resetOverlayedCanvas();
                d(t._zoomButton, t._resetButton);
                t._dispatchRangeEvent("rangeChanging", "reset");
                t.render();
                t._dispatchRangeEvent("rangeChanged", "reset")
            }), this.overlaidCanvas.style.cursor = t._defaultCursor), this.zoomEnabled || this.panEnabled || (this._zoomButton ? (t._zoomButton.getAttribute("state") === t._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), bt(t._zoomButton, t._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))) : (this.zoomEnabled = !1, this.panEnabled = !1);
            this._menuButton ? this.exportEnabled ? bt(this._menuButton) : d(this._menuButton) : this.exportEnabled && n && (this._menuButton = document.createElement("button"), b(this, this._menuButton, "menu"), this._toolBar.appendChild(this._menuButton), s(this._menuButton, "click", function() {
                if(t._dropdownMenu.style.display === "none") {
                    if(t._dropDownCloseTime && (new Date).getTime() - t._dropDownCloseTime.getTime() <= 500) return;
                    t._dropdownMenu.style.display = "block";
                    t._menuButton.blur();
                    t._dropdownMenu.focus()
                }
            }, !0));
            !this._dropdownMenu && this.exportEnabled && n && (this._dropdownMenu = document.createElement("div"), this._dropdownMenu.setAttribute("tabindex", -1), this._dropdownMenu.style.cssText = "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;", t._dropdownMenu.style.display = "none", this._toolBar.appendChild(this._dropdownMenu), s(this._dropdownMenu, "blur", function() {
                d(t._dropdownMenu);
                t._dropDownCloseTime = new Date
            }, !0), i = document.createElement("div"), i.style.cssText = "padding: 2px 15px 2px 10px", i.innerHTML = this._cultureInfo.saveJPGText, this._dropdownMenu.appendChild(i), s(i, "mouseover", function() {
                this.style.backgroundColor = "#EEEEEE"
            }, !0), s(i, "mouseout", function() {
                this.style.backgroundColor = "transparent"
            }, !0), s(i, "click", function() {
                li(t.canvas, "jpg", t.exportFileName);
                d(t._dropdownMenu)
            }, !0), i = document.createElement("div"), i.style.cssText = "padding: 2px 15px 2px 10px", i.innerHTML = this._cultureInfo.savePNGText, this._dropdownMenu.appendChild(i), s(i, "mouseover", function() {
                this.style.backgroundColor = "#EEEEEE"
            }, !0), s(i, "mouseout", function() {
                this.style.backgroundColor = "transparent"
            }, !0), s(i, "click", function() {
                li(t.canvas, "png", t.exportFileName);
                d(t._dropdownMenu)
            }, !0));
            this._toolBar.style.display !== "none" && this._zoomButton && (this.panEnabled ? b(t, t._zoomButton, "zoom") : b(t, t._zoomButton, "pan"), t._resetButton.getAttribute("state") !== t._cultureInfo.resetText && b(t, t._resetButton, "reset"));
            typeof et.Chart.creditHref == "undefined" ? (this.creditHref = "http://canvasjs.com/", this.creditText = "CanvasJS.com") : (u = this.updateOption("creditText"), f = this.updateOption("creditHref"));
            (this.renderCount === 0 || u || f) && (this._creditLink.setAttribute("href", this.creditHref), this._creditLink.innerHTML = this.creditText);
            this.creditHref && this.creditText ? this._creditLink.parentElement || this._canvasJSContainer.appendChild(this._creditLink) : this._creditLink.parentElement && this._canvasJSContainer.removeChild(this._creditLink);
            this._options.toolTip && this._toolTip._options !== this._options.toolTip && (this._toolTip._options = this._options.toolTip);
            for(r in this._toolTip._options) this._toolTip._options.hasOwnProperty(r) && this._toolTip.updateOption(r)
        };
        t.prototype._updateSize = function() {
            var n = 0,
                t = 0;
            return(this._options.width ? n = this.width : this.width = n = this._container.clientWidth > 0 ? this._container.clientWidth : this.width, this._options.height ? t = this.height : this.height = t = this._container.clientHeight > 0 ? this._container.clientHeight : this.height, this.canvas.width !== n * l || this.canvas.height !== t * l) ? (ht(this.canvas, n, t), ht(this.overlaidCanvas, n, t), ht(this._eventManager.ghostCanvas, n, t), !0) : !1
        };
        t.prototype._initialize = function() {
            var f, u, i, e, r;
            for(this._animator ? this._animator.cancelAllAnimations() : this._animator = new fi(this), this.removeAllEventListeners(), this.disableToolTip = !1, this._axes = [], this.pieDoughnutClickHandler = null, this.animationRequestId && this.cancelRequestAnimFrame.call(window, this.animationRequestId), this._updateOptions(), this.animatedRender = n && this.animationEnabled && this.renderCount === 0, this._updateSize(), this.clearCanvas(), this.ctx.beginPath(), this.axisX = null, this.axisY = null, this.axisY2 = null, this._indexLabels = [], this._dataInRenderedOrder = [], this._events = [], this._eventManager && this._eventManager.reset(), this.plotInfo = {
                axisPlacement: null,
                axisXValueType: null,
                plotTypes: []
            }, this.layoutManager = new ft(0, 0, this.width, this.height, 2), this.plotArea.layoutManager && this.plotArea.layoutManager.reset(), this.data = [], f = 0, u = 0; u < this._options.data.length; u++)
                if((f++, !this._options.data[u].type || t._supportedChartTypes.indexOf(this._options.data[u].type) >= 0) && (i = new g(this, this._options.data[u], this.theme, f - 1, ++this._eventManager.lastObjectId), i.name === null && (i.name = "DataSeries " + f), i.color === null ? this._options.data.length > 1 ? (i._colorSet = [this._selectedColorSet[i.index % this._selectedColorSet.length]], i.color = this._selectedColorSet[i.index % this._selectedColorSet.length]) : i._colorSet = i.type === "line" || i.type === "stepLine" || i.type === "spline" || i.type === "area" || i.type === "stepArea" || i.type === "splineArea" || i.type === "stackedArea" || i.type === "stackedArea100" || i.type === "rangeArea" || i.type === "rangeSplineArea" || i.type === "candlestick" || i.type === "ohlc" ? [this._selectedColorSet[0]] : this._selectedColorSet : i._colorSet = [i.color], i.markerSize === null && ((i.type === "line" || i.type === "stepLine" || i.type === "spline") && i.dataPoints && i.dataPoints.length < this.width / 16 || i.type === "scatter") && (i.markerSize = 8), (i.type === "bubble" || i.type === "scatter") && i.dataPoints && i.dataPoints.sort(bi), this.data.push(i), e = i.axisPlacement, e === "normal" ? this.plotInfo.axisPlacement === "xySwapped" ? r = 'You cannot combine "' + i.type + '" with bar chart' : this.plotInfo.axisPlacement === "none" ? r = 'You cannot combine "' + i.type + '" with pie chart' : this.plotInfo.axisPlacement === null && (this.plotInfo.axisPlacement = "normal") : e === "xySwapped" ? this.plotInfo.axisPlacement === "normal" ? r = 'You cannot combine "' + i.type + '" with line, area, column or pie chart' : this.plotInfo.axisPlacement === "none" ? r = 'You cannot combine "' + i.type + '" with pie chart' : this.plotInfo.axisPlacement === null && (this.plotInfo.axisPlacement = "xySwapped") : e == "none" && (this.plotInfo.axisPlacement === "normal" ? r = 'You cannot combine "' + i.type + '" with line, area, column or bar chart' : this.plotInfo.axisPlacement === "xySwapped" ? r = 'You cannot combine "' + i.type + '" with bar chart' : this.plotInfo.axisPlacement === null && (this.plotInfo.axisPlacement = "none")), r && window.console)) {
                    window.console.log(r);
                    return
                }
            this._objectsInitialized = !0
        };
        t._supportedChartTypes = gi(["line", "stepLine", "spline", "column", "area", "stepArea", "splineArea", "bar", "bubble", "scatter", "stackedColumn", "stackedColumn100", "stackedBar", "stackedBar100", "stackedArea", "stackedArea100", "candlestick", "ohlc", "rangeColumn", "rangeBar", "rangeArea", "rangeSplineArea", "pie", "doughnut", "funnel"]);
        t.prototype.render = function(n) {
            var f, y, s, h, o, c, w, r, p, a, t, i, v, b, k, u;
            for(n && (this._options = n), this._initialize(), f = [], r = 0; r < this.data.length; r++)(this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") && (this.data[r].axisYType && this.data[r].axisYType !== "primary" ? this.data[r].axisYType === "secondary" && (this.axisY2 || (this.plotInfo.axisPlacement === "normal" ? this._axes.push(this.axisY2 = new e(this, this._options.axisY2, "axisY", "right")) : this.plotInfo.axisPlacement === "xySwapped" && this._axes.push(this.axisY2 = new e(this, this._options.axisY2, "axisY", "top"))), this.data[r].axisY = this.axisY2) : (this.axisY || (this.plotInfo.axisPlacement === "normal" ? this._axes.push(this.axisY = new e(this, this._options.axisY, "axisY", "left")) : this.plotInfo.axisPlacement === "xySwapped" && this._axes.push(this.axisY = new e(this, this._options.axisY, "axisY", "bottom"))), this.data[r].axisY = this.axisY), this.axisX || (this.plotInfo.axisPlacement === "normal" ? this._axes.push(this.axisX = new e(this, this._options.axisX, "axisX", "bottom")) : this.plotInfo.axisPlacement === "xySwapped" && this._axes.push(this.axisX = new e(this, this._options.axisX, "axisX", "left"))), this.data[r].axisX = this.axisX);
            if(this.axisY && this.axisY2 && (this.axisY.gridThickness > 0 && typeof this.axisY2._options.gridThickness == "undefined" ? this.axisY2.gridThickness = 0 : this.axisY2.gridThickness > 0 && typeof this.axisY._options.gridThickness == "undefined" && (this.axisY.gridThickness = 0)), y = !1, this._axes.length > 0 && (this.zoomEnabled || this.panEnabled))
                for(r = 0; r < this._axes.length; r++)
                    if(this._axes[r].viewportMinimum !== null || this._axes[r].viewportMaximum !== null) {
                        y = !0;
                        break
                    }
            if(y ? bt(this._zoomButton, this._resetButton) : d(this._zoomButton, this._resetButton), this._processData(), this._options.title && (this._title = new ct(this, this._options.title), this._title.dockInsidePlotArea ? f.push(this._title) : this._title.render()), this._options.subtitles)
                for(r = 0; r < this._options.subtitles.length; r++) this.subtitles = [], s = new gt(this, this._options.subtitles[r]), this.subtitles.push(s), s.dockInsidePlotArea ? f.push(s) : s.render();
            for(this.legend = new ni(this, this._options.legend, this.theme), r = 0; r < this.data.length; r++)(this.data[r].showInLegend || this.data[r].type === "pie" || this.data[r].type === "doughnut") && this.legend.dataSeries.push(this.data[r]);
            if(this.legend.dockInsidePlotArea ? f.push(this.legend) : this.legend.render(), this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") e.setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
            else if(this.plotInfo.axisPlacement === "none") this.preparePlotArea();
            else return;
            h = 0;
            for(h in f) f.hasOwnProperty(h) && f[h].render();
            for(o = [], this.animatedRender && (c = rt(this.width, this.height), w = c.getContext("2d"), w.drawImage(this.canvas, 0, 0, this.width, this.height)), r = 0; r < this.plotInfo.plotTypes.length; r++)
                for(p = this.plotInfo.plotTypes[r], a = 0; a < p.plotUnits.length; a++) {
                    for(t = p.plotUnits[a], i = null, t.targetCanvas = null, this.animatedRender && (t.targetCanvas = rt(this.width, this.height), t.targetCanvasCtx = t.targetCanvas.getContext("2d")), t.type === "line" ? i = this.renderLine(t) : t.type === "stepLine" ? i = this.renderStepLine(t) : t.type === "spline" ? i = this.renderSpline(t) : t.type === "column" ? i = this.renderColumn(t) : t.type === "bar" ? i = this.renderBar(t) : t.type === "area" ? i = this.renderArea(t) : t.type === "stepArea" ? i = this.renderStepArea(t) : t.type === "splineArea" ? i = this.renderSplineArea(t) : t.type === "stackedColumn" ? i = this.renderStackedColumn(t) : t.type === "stackedColumn100" ? i = this.renderStackedColumn100(t) : t.type === "stackedBar" ? i = this.renderStackedBar(t) : t.type === "stackedBar100" ? i = this.renderStackedBar100(t) : t.type === "stackedArea" ? i = this.renderStackedArea(t) : t.type === "stackedArea100" ? i = this.renderStackedArea100(t) : t.type === "bubble" ? i = i = this.renderBubble(t) : t.type === "scatter" ? i = this.renderScatter(t) : t.type === "pie" ? this.renderPie(t) : t.type === "doughnut" ? this.renderPie(t) : t.type === "candlestick" ? i = this.renderCandlestick(t) : t.type === "ohlc" ? i = this.renderCandlestick(t) : t.type === "rangeColumn" ? i = this.renderRangeColumn(t) : t.type === "rangeBar" ? i = this.renderRangeBar(t) : t.type === "rangeArea" ? i = this.renderRangeArea(t) : t.type === "rangeSplineArea" && (i = this.renderRangeSplineArea(t)), v = 0; v < t.dataSeriesIndexes.length; v++) this._dataInRenderedOrder.push(this.data[t.dataSeriesIndexes[v]]);
                    this.animatedRender && i && o.push(i)
                }
            this.animatedRender && this._indexLabels.length > 0 && (b = rt(this.width, this.height), k = b.getContext("2d"), o.push(this.renderIndexLabels(k)));
            u = this;
            o.length > 0 ? (u.disableToolTip = !0, u._animator.animate(200, u.animationDuration, function(n) {
                u.ctx.clearRect(0, 0, u.width, u.height);
                u.ctx.drawImage(c, 0, 0, Math.floor(u.width * l), Math.floor(u.height * l), 0, 0, u.width, u.height);
                for(var t = 0; t < o.length; t++) i = o[t], n < 1 && typeof i.startTimePercent != "undefined" ? n >= i.startTimePercent && i.animationCallback(i.easingFunction(n - i.startTimePercent, 0, 1, 1 - i.startTimePercent), i) : i.animationCallback(i.easingFunction(n, 0, 1, 1), i);
                u.dispatchEvent("dataAnimationIterationEnd", {
                    chart: u
                })
            }, function() {
                var f, n, i, t, r;
                for(o = [], f = 0, n = 0; n < u.plotInfo.plotTypes.length; n++)
                    for(i = u.plotInfo.plotTypes[n], t = 0; t < i.plotUnits.length; t++) r = i.plotUnits[t], r.targetCanvas = null;
                c = null;
                u.disableToolTip = !1
            })) : (u._indexLabels.length > 0 && u.renderIndexLabels(), u.dispatchEvent("dataAnimationIterationEnd", {
                chart: u
            }));
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || this.panEnabled || !this._zoomButton || this._zoomButton.style.display === "none" || d(this._zoomButton, this._resetButton);
            this._toolTip._updateToolTip();
            this.renderCount++;
            vt && (u = this, setTimeout(function() {
                var n = document.getElementById("ghostCanvasCopy"),
                    t;
                n && (ht(n, u.width, u.height), t = n.getContext("2d"), t.drawImage(u._eventManager.ghostCanvas, 0, 0))
            }, 2e3))
        };
        t.prototype.attachPlotAreaEventHandlers = function() {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.zoomEnabled ? "col-resize" : "move",
                cursor: this.panEnabled ? "move" : "default",
                capture: !0,
                bounds: this.plotArea
            })
        };
        t.prototype.categoriseDataSeries = function() {
            for(var r = "", f, i, e, n, u = 0; u < this.data.length; u++)
                if((r = this.data[u], r.dataPoints && r.dataPoints.length !== 0 && r.visible) && t._supportedChartTypes.indexOf(r.type) >= 0) {
                    var i = null,
                        o = !1,
                        f = null,
                        s = !1;
                    for(n = 0; n < this.plotInfo.plotTypes.length; n++)
                        if(this.plotInfo.plotTypes[n].type === r.type) {
                            o = !0;
                            i = this.plotInfo.plotTypes[n];
                            break
                        }
                    for(o || (i = {
                        type: r.type,
                        totalDataSeries: 0,
                        plotUnits: []
                    }, this.plotInfo.plotTypes.push(i)), n = 0; n < i.plotUnits.length; n++)
                        if(i.plotUnits[n].axisYType === r.axisYType) {
                            s = !0;
                            f = i.plotUnits[n];
                            break
                        }
                    s || (f = {
                        type: r.type,
                        previousDataSeriesCount: 0,
                        index: i.plotUnits.length,
                        plotType: i,
                        axisYType: r.axisYType,
                        axisY: r.axisYType === "primary" ? this.axisY : this.axisY2,
                        axisX: this.axisX,
                        dataSeriesIndexes: [],
                        yTotals: []
                    }, i.plotUnits.push(f));
                    i.totalDataSeries++;
                    f.dataSeriesIndexes.push(u);
                    r.plotUnit = f
                }
            for(u = 0; u < this.plotInfo.plotTypes.length; u++)
                for(i = this.plotInfo.plotTypes[u], e = 0, n = 0; n < i.plotUnits.length; n++) i.plotUnits[n].previousDataSeriesCount = e, e += i.plotUnits[n].dataSeriesIndexes.length
        };
        t.prototype.assignIdToDataPoints = function() {
            for(var t, r, i, n = 0; n < this.data.length; n++)
                if(t = this.data[n], t.dataPoints)
                    for(r = t.dataPoints.length, i = 0; i < r; i++) t.dataPointIds[i] = ++this._eventManager.lastObjectId
        };
        t.prototype._processData = function() {
            var t, r, i, n;
            for(this.assignIdToDataPoints(), this.categoriseDataSeries(), t = 0; t < this.plotInfo.plotTypes.length; t++)
                for(r = this.plotInfo.plotTypes[t], i = 0; i < r.plotUnits.length; i++) n = r.plotUnits[i], n.type === "line" || n.type === "stepLine" || n.type === "spline" || n.type === "column" || n.type === "area" || n.type === "stepArea" || n.type === "splineArea" || n.type === "bar" || n.type === "bubble" || n.type === "scatter" ? this._processMultiseriesPlotUnit(n) : n.type === "stackedColumn" || n.type === "stackedBar" || n.type === "stackedArea" ? this._processStackedPlotUnit(n) : n.type === "stackedColumn100" || n.type === "stackedBar100" || n.type === "stackedArea100" ? this._processStacked100PlotUnit(n) : (n.type === "candlestick" || n.type === "ohlc" || n.type === "rangeColumn" || n.type === "rangeBar" || n.type === "rangeArea" || n.type === "rangeSplineArea") && this._processMultiYPlotUnit(n)
        };
        t.prototype._processMultiseriesPlotUnit = function(n) {
            var h, y, v, o, s;
            if(n.dataSeriesIndexes && !(n.dataSeriesIndexes.length < 1)) {
                var f = n.axisY.dataInfo,
                    e = n.axisX.dataInfo,
                    r, u, c = !1;
                for(h = 0; h < n.dataSeriesIndexes.length; h++) {
                    var i = this.data[n.dataSeriesIndexes[h]],
                        t = 0,
                        l = !1,
                        a = !1;
                    for((i.axisPlacement === "normal" || i.axisPlacement === "xySwapped") && (y = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity, v = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity), (i.dataPoints[t].x && i.dataPoints[t].x.getTime || i.xValueType === "dateTime") && (c = !0), t = 0; t < i.dataPoints.length; t++) {
                        if(typeof i.dataPoints[t].x == "undefined" && (i.dataPoints[t].x = t), i.dataPoints[t].x.getTime ? (c = !0, r = i.dataPoints[t].x.getTime()) : r = i.dataPoints[t].x, u = i.dataPoints[t].y, r < e.min && (e.min = r), r > e.max && (e.max = r), u < f.min && (f.min = u), u > f.max && (f.max = u), t > 0 && (o = r - i.dataPoints[t - 1].x, o < 0 && (o = o * -1), e.minDiff > o && o !== 0 && (e.minDiff = o), u !== null && i.dataPoints[t - 1].y !== null && (s = u - i.dataPoints[t - 1].y, s < 0 && (s = s * -1), f.minDiff > s && s !== 0 && (f.minDiff = s))), r < y && !l) continue;
                        else if(!l && (l = !0, t > 0)) {
                            t -= 2;
                            continue
                        }
                        if(r > v && !a) a = !0;
                        else if(r > v && a) continue;
                        (i.dataPoints[t].label && (n.axisX.labels[r] = i.dataPoints[t].label), r < e.viewPortMin && (e.viewPortMin = r), r > e.viewPortMax && (e.viewPortMax = r), u !== null) && (u < f.viewPortMin && (f.viewPortMin = u), u > f.viewPortMax && (f.viewPortMax = u))
                    }
                    this.plotInfo.axisXValueType = i.xValueType = c ? "dateTime" : "number"
                }
            }
        };
        t.prototype._processStackedPlotUnit = function(n) {
            var a, b, w, s, h, r;
            if(n.dataSeriesIndexes && !(n.dataSeriesIndexes.length < 1)) {
                var u = n.axisY.dataInfo,
                    e = n.axisX.dataInfo,
                    i, o, v = !1,
                    c = [],
                    l = [];
                for(a = 0; a < n.dataSeriesIndexes.length; a++) {
                    var f = this.data[n.dataSeriesIndexes[a]],
                        t = 0,
                        y = !1,
                        p = !1;
                    for((f.axisPlacement === "normal" || f.axisPlacement === "xySwapped") && (b = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity, w = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity), (f.dataPoints[t].x && f.dataPoints[t].x.getTime || f.xValueType === "dateTime") && (v = !0), t = 0; t < f.dataPoints.length; t++) {
                        if(typeof f.dataPoints[t].x == "undefined" && (f.dataPoints[t].x = t), f.dataPoints[t].x.getTime ? (v = !0, i = f.dataPoints[t].x.getTime()) : i = f.dataPoints[t].x, o = f.dataPoints[t].y, i < e.min && (e.min = i), i > e.max && (e.max = i), t > 0 && (s = i - f.dataPoints[t - 1].x, s < 0 && (s = s * -1), e.minDiff > s && s !== 0 && (e.minDiff = s), o !== null && f.dataPoints[t - 1].y !== null && (h = o - f.dataPoints[t - 1].y, h < 0 && (h = h * -1), u.minDiff > h && h !== 0 && (u.minDiff = h))), i < b && !y) continue;
                        else if(!y && (y = !0, t > 0)) {
                            t -= 2;
                            continue
                        }
                        if(i > w && !p) p = !0;
                        else if(i > w && p) continue;
                        (f.dataPoints[t].label && (n.axisX.labels[i] = f.dataPoints[t].label), i < e.viewPortMin && (e.viewPortMin = i), i > e.viewPortMax && (e.viewPortMax = i), o !== null) && (n.yTotals[i] = (n.yTotals[i] ? n.yTotals[i] : 0) + Math.abs(o), o >= 0 ? c[i] ? c[i] += o : c[i] = o : l[i] ? l[i] += o : l[i] = o)
                    }
                    this.plotInfo.axisXValueType = f.xValueType = v ? "dateTime" : "number"
                }
                for(t in c)
                    if(c.hasOwnProperty(t)) {
                        if(isNaN(t)) continue;
                        if(r = c[t], r < u.min && (u.min = r), r > u.max && (u.max = r), t < e.viewPortMin || t > e.viewPortMax) continue;
                        r < u.viewPortMin && (u.viewPortMin = r);
                        r > u.viewPortMax && (u.viewPortMax = r)
                    }
                for(t in l)
                    if(l.hasOwnProperty(t)) {
                        if(isNaN(t)) continue;
                        if(r = l[t], r < u.min && (u.min = r), r > u.max && (u.max = r), t < e.viewPortMin || t > e.viewPortMax) continue;
                        r < u.viewPortMin && (u.viewPortMin = r);
                        r > u.viewPortMax && (u.viewPortMax = r)
                    }
            }
        };
        t.prototype._processStacked100PlotUnit = function(n) {
            var a, b, w, o, s;
            if(n.dataSeriesIndexes && !(n.dataSeriesIndexes.length < 1)) {
                var u = n.axisY.dataInfo,
                    f = n.axisX.dataInfo,
                    t, e, v = !1,
                    h = !1,
                    c = !1,
                    l = [];
                for(a = 0; a < n.dataSeriesIndexes.length; a++) {
                    var r = this.data[n.dataSeriesIndexes[a]],
                        i = 0,
                        y = !1,
                        p = !1;
                    for((r.axisPlacement === "normal" || r.axisPlacement === "xySwapped") && (b = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity, w = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity), (r.dataPoints[i].x && r.dataPoints[i].x.getTime || r.xValueType === "dateTime") && (v = !0), i = 0; i < r.dataPoints.length; i++) {
                        if(typeof r.dataPoints[i].x == "undefined" && (r.dataPoints[i].x = i), r.dataPoints[i].x.getTime ? (v = !0, t = r.dataPoints[i].x.getTime()) : t = r.dataPoints[i].x, e = r.dataPoints[i].y, t < f.min && (f.min = t), t > f.max && (f.max = t), i > 0 && (o = t - r.dataPoints[i - 1].x, o < 0 && (o = o * -1), f.minDiff > o && o !== 0 && (f.minDiff = o), e !== null && r.dataPoints[i - 1].y !== null && (s = e - r.dataPoints[i - 1].y, s < 0 && (s = s * -1), u.minDiff > s && s !== 0 && (u.minDiff = s))), t < b && !y) continue;
                        else if(!y && (y = !0, i > 0)) {
                            i -= 2;
                            continue
                        }
                        if(t > w && !p) p = !0;
                        else if(t > w && p) continue;
                        (r.dataPoints[i].label && (n.axisX.labels[t] = r.dataPoints[i].label), t < f.viewPortMin && (f.viewPortMin = t), t > f.viewPortMax && (f.viewPortMax = t), e !== null) && (n.yTotals[t] = (n.yTotals[t] ? n.yTotals[t] : 0) + Math.abs(e), e >= 0 ? h = !0 : c = !0, l[t] ? l[t] += Math.abs(e) : l[t] = Math.abs(e))
                    }
                    this.plotInfo.axisXValueType = r.xValueType = v ? "dateTime" : "number"
                }
                h && !c ? (u.max = 99, u.min = 1) : h && c ? (u.max = 99, u.min = -99) : !h && c && (u.max = -1, u.min = -99);
                u.viewPortMin = u.min;
                u.viewPortMax = u.max;
                n.dataPointYSums = l
            }
        };
        t.prototype._processMultiYPlotUnit = function(n) {
            var l, w, p, o, s;
            if(n.dataSeriesIndexes && !(n.dataSeriesIndexes.length < 1)) {
                var u = n.axisY.dataInfo,
                    f = n.axisX.dataInfo,
                    r, e, h, c, a = !1;
                for(l = 0; l < n.dataSeriesIndexes.length; l++) {
                    var i = this.data[n.dataSeriesIndexes[l]],
                        t = 0,
                        v = !1,
                        y = !1;
                    for((i.axisPlacement === "normal" || i.axisPlacement === "xySwapped") && (w = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity, p = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity), (i.dataPoints[t].x && i.dataPoints[t].x.getTime || i.xValueType === "dateTime") && (a = !0), t = 0; t < i.dataPoints.length; t++) {
                        if(typeof i.dataPoints[t].x == "undefined" && (i.dataPoints[t].x = t), i.dataPoints[t].x.getTime ? (a = !0, r = i.dataPoints[t].x.getTime()) : r = i.dataPoints[t].x, e = i.dataPoints[t].y, e && e.length && (h = Math.min.apply(null, e), c = Math.max.apply(null, e)), r < f.min && (f.min = r), r > f.max && (f.max = r), h < u.min && (u.min = h), c > u.max && (u.max = c), t > 0 && (o = r - i.dataPoints[t - 1].x, o < 0 && (o = o * -1), f.minDiff > o && o !== 0 && (f.minDiff = o), e[0] !== null && i.dataPoints[t - 1].y[0] !== null && (s = e[0] - i.dataPoints[t - 1].y[0], s < 0 && (s = s * -1), u.minDiff > s && s !== 0 && (u.minDiff = s))), r < w && !v) continue;
                        else if(!v && (v = !0, t > 0)) {
                            t -= 2;
                            continue
                        }
                        if(r > p && !y) y = !0;
                        else if(r > p && y) continue;
                        (i.dataPoints[t].label && (n.axisX.labels[r] = i.dataPoints[t].label), r < f.viewPortMin && (f.viewPortMin = r), r > f.viewPortMax && (f.viewPortMax = r), e !== null) && (h < u.viewPortMin && (u.viewPortMin = h), c > u.viewPortMax && (u.viewPortMax = c))
                    }
                    this.plotInfo.axisXValueType = i.xValueType = a ? "dateTime" : "number"
                }
            }
        };
        t.prototype.getDataPointAtXY = function(n, t, i) {
            var u, e, h, o, f, s, r, c;
            for(i = i || !1, u = [], e = this._dataInRenderedOrder.length - 1; e >= 0; e--) h = this._dataInRenderedOrder[e], o = null, o = h.getDataPointAtXY(n, t, i), o && u.push(o);
            for(f = null, s = !1, r = 0; r < u.length; r++)
                if((u[r].dataSeries.type === "line" || u[r].dataSeries.type === "stepLine" || u[r].dataSeries.type === "area" || u[r].dataSeries.type === "stepArea") && (c = p("markerSize", u[r].dataPoint, u[r].dataSeries) || 8, u[r].distance <= c / 2)) {
                    s = !0;
                    break
                }
            for(r = 0; r < u.length; r++) s && u[r].dataSeries.type !== "line" && u[r].dataSeries.type !== "stepLine" && u[r].dataSeries.type !== "area" && u[r].dataSeries.type !== "stepArea" || (f ? u[r].distance <= f.distance && (f = u[r]) : f = u[r]);
            return f
        };
        t.prototype.getObjectAtXY = function(t, i, r) {
            var f, e, o, u;
            if(r = r || !1, f = null, e = this.getDataPointAtXY(t, i, r), e) f = e.dataSeries.dataPointIds[e.dataPointIndex];
            else if(n) f = hi(t, i, this._eventManager.ghostCtx);
            else
                for(o = 0; o < this.legend.items.length; o++) u = this.legend.items[o], t >= u.x1 && t <= u.x2 && i >= u.y1 && i <= u.y2 && (f = u.id);
            return f
        };
        t.prototype.getAutoFontSize = function(n, t, i) {
            t = t || this.width;
            i = i || this.height;
            var r = n / 400;
            return Math.round(Math.min(this.width, this.height) * r)
        };
        t.prototype.resetOverlayedCanvas = function() {
            this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
        };
        t.prototype.clearCanvas = function() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
        };
        t.prototype.attachEvent = function(n) {
            this._events.push(n)
        };
        t.prototype._touchEventHandler = function(n) {
            var f, e, h, o;
            if(n.changedTouches && this.interactivityEnabled) {
                var i = [],
                    u = n.changedTouches,
                    t = u ? u[0] : n,
                    r = null;
                switch(n.type) {
                    case "touchstart":
                    case "MSPointerDown":
                        i = ["mousemove", "mousedown"];
                        this._lastTouchData = pt(t);
                        this._lastTouchData.time = new Date;
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                        i = ["mousemove"];
                        break;
                    case "touchend":
                    case "MSPointerUp":
                        i = this._lastTouchEventType === "touchstart" || this._lastTouchEventType === "MSPointerDown" ? ["mouseup", "click"] : ["mouseup"];
                        break;
                    default:
                        return
                }
                if(!u || !(u.length > 1)) {
                    r = pt(t);
                    r.time = new Date;
                    try {
                        var s = r.y - this._lastTouchData.y,
                            l = r.x - this._lastTouchData.x,
                            c = r.time - this._lastTouchData.time;
                        Math.abs(s) > 15 && (!!this._lastTouchData.scroll || c < 200) && (this._lastTouchData.scroll = !0, f = window.parent || window, f && f.scrollBy && f.scrollBy(0, -s))
                    } catch(a) {}
                    if(this._lastTouchEventType = n.type, !!this._lastTouchData.scroll && this.zoomEnabled) {
                        this.isDrag && this.resetOverlayedCanvas();
                        this.isDrag = !1;
                        return
                    }
                    for(e = 0; e < i.length; e++) h = i[e], o = document.createEvent("MouseEvent"), o.initMouseEvent(h, !0, !0, window, 1, t.screenX, t.screenY, t.clientX, t.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(o), n.preventManipulation && n.preventManipulation(), n.preventDefault && n.preventDefault()
                }
            }
        };
        t.prototype._dispatchRangeEvent = function(n, t) {
            var u = {},
                i, r;
            for(u.chart = this._publicChartReference, u.type = n, u.trigger = t, i = [], this.axisX && i.push("axisX"), this.axisY && i.push("axisY"), this.axisY2 && i.push("axisY2"), r = 0; r < i.length; r++) u[i[r]] = {
                viewportMinimum: this[i[r]].sessionVariables.newViewportMinimum,
                viewportMaximum: this[i[r]].sessionVariables.newViewportMaximum
            };
            this.dispatchEvent(n, u, this._publicChartReference)
        };
        t.prototype._mouseEventHandler = function(n) {
            var r, u, i, s, h, f, e, o;
            if(this.interactivityEnabled) {
                if(this._ignoreNextEvent) {
                    this._ignoreNextEvent = !1;
                    return
                }
                if(n.preventManipulation && n.preventManipulation(), n.preventDefault && n.preventDefault(), typeof n.target == "undefined" && n.srcElement && (n.target = n.srcElement), r = pt(n), u = n.type, n || (h = window.event), n.which ? s = n.which == 3 : n.button && (s = n.button == 2), vt && window.console && (window.console.log(u + " --> x: " + r.x + "; y:" + r.y), s && window.console.log(n.which), u === "mouseup" && window.console.log("mouseup")), !s) {
                    if(t.capturedEventParam) i = t.capturedEventParam, u === "mouseup" && (t.capturedEventParam = null, i.chart.overlaidCanvas.releaseCapture ? i.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", i.chart._mouseEventHandler, !1)), i.hasOwnProperty(u) && i[u].call(i.context, r.x, r.y);
                    else if(this._events) {
                        for(f = 0; f < this._events.length; f++)
                            if(this._events[f].hasOwnProperty(u))
                                if(i = this._events[f], e = i.bounds, r.x >= e.x1 && r.x <= e.x2 && r.y >= e.y1 && r.y <= e.y2) {
                                    i[u].call(i.context, r.x, r.y);
                                    u === "mousedown" && i.capture === !0 ? (t.capturedEventParam = i, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.body.addEventListener("mouseup", this._mouseEventHandler, !1)) : u === "mouseup" && (i.chart.overlaidCanvas.releaseCapture ? i.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                    break
                                } else i = null;
                        n.target.style.cursor = i && i.cursor ? i.cursor : this._defaultCursor
                    }
                    this._toolTip && this._toolTip.enabled && (o = this.plotArea, (r.x < o.x1 || r.x > o.x2 || r.y < o.y1 || r.y > o.y2) && this._toolTip.hide());
                    this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(n)
                }
            }
        };
        t.prototype._plotAreaMouseDown = function(n, t) {
            this.isDrag = !0;
            this.dragStartPoint = this.plotInfo.axisPlacement !== "none" ? {
                x: n,
                y: t
            } : {
                x: n,
                y: t
            }
        };
        t.prototype._plotAreaMouseUp = function(n, t) {
            var h, u, s, i, r;
            if((this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") && this.isDrag) {
                var c = t - this.dragStartPoint.y,
                    l = n - this.dragStartPoint.x,
                    f = this.zoomType.indexOf("x") >= 0,
                    e = this.zoomType.indexOf("y") >= 0,
                    o = !1;
                if(this.resetOverlayedCanvas(), this.plotInfo.axisPlacement === "xySwapped" && (h = e, e = f, f = h), this.panEnabled || this.zoomEnabled) {
                    if(this.panEnabled)
                        for(u = 0, s = 0; s < this._axes.length; s++) i = this._axes[s], i.viewportMinimum < i.minimum ? (u = i.minimum - i.viewportMinimum, i.sessionVariables.newViewportMinimum = i.viewportMinimum + u, i.sessionVariables.newViewportMaximum = i.viewportMaximum + u, o = !0) : i.viewportMaximum > i.maximum && (u = i.viewportMaximum - i.maximum, i.sessionVariables.newViewportMinimum = i.viewportMinimum - u, i.sessionVariables.newViewportMaximum = i.viewportMaximum - u, o = !0);
                    else if((!f || Math.abs(l) > 2) && (!e || Math.abs(c) > 2) && this.zoomEnabled) {
                        if(!this.dragStartPoint) return;
                        r = {
                            x1: f ? this.dragStartPoint.x : this.plotArea.x1,
                            y1: e ? this.dragStartPoint.y : this.plotArea.y1,
                            x2: f ? n : this.plotArea.x2,
                            y2: e ? t : this.plotArea.y2
                        };
                        Math.abs(r.x1 - r.x2) > 2 && Math.abs(r.y1 - r.y2) > 2 && this._zoomPanToSelectedRegion(r.x1, r.y1, r.x2, r.y2) && (o = !0)
                    }
                    o && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), o && this.zoomEnabled && this._zoomButton.style.display === "none" && (bt(this._zoomButton, this._resetButton), b(this, this._zoomButton, "pan"), b(this, this._resetButton, "reset")))
                }
            }
            this.isDrag = !1
        };
        t.prototype._plotAreaMouseMove = function(n, t) {
            var h, e;
            if(this.isDrag && this.plotInfo.axisPlacement !== "none") {
                var u = 0,
                    o = 0,
                    s = null,
                    f = null,
                    i = this.zoomType.indexOf("x") >= 0,
                    r = this.zoomType.indexOf("y") >= 0,
                    c = this;
                this.plotInfo.axisPlacement === "xySwapped" && (h = r, r = i, i = h);
                u = this.dragStartPoint.x - n;
                o = this.dragStartPoint.y - t;
                Math.abs(u) > 2 && Math.abs(u) < 8 && (this.panEnabled || this.zoomEnabled) ? this._toolTip.hide() : this.panEnabled || this.zoomEnabled || this._toolTip.mouseMoveHandler(n, t);
                (!i || Math.abs(u) > 2 || !r || Math.abs(o) > 2) && (this.panEnabled || this.zoomEnabled) && (this.panEnabled ? (f = {
                    x1: i ? this.plotArea.x1 + u : this.plotArea.x1,
                    y1: r ? this.plotArea.y1 + o : this.plotArea.y1,
                    x2: i ? this.plotArea.x2 + u : this.plotArea.x2,
                    y2: r ? this.plotArea.y2 + o : this.plotArea.y2
                }, this._zoomPanToSelectedRegion(f.x1, f.y1, f.x2, f.y2, !0) && (this._dispatchRangeEvent("rangeChanging", "pan"), this.render(), this._dispatchRangeEvent("rangeChanged", "pan"), this.dragStartPoint.x = n, this.dragStartPoint.y = t)) : this.zoomEnabled && (this.resetOverlayedCanvas(), s = this.overlaidCanvasCtx.globalAlpha, this.overlaidCanvasCtx.globalAlpha = .7, this.overlaidCanvasCtx.fillStyle = "#A0ABB8", e = {
                    x1: i ? this.dragStartPoint.x : this.plotArea.x1,
                    y1: r ? this.dragStartPoint.y : this.plotArea.y1,
                    x2: i ? n - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                    y2: r ? t - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1
                }, this.overlaidCanvasCtx.fillRect(e.x1, e.y1, e.x2, e.y2), this.overlaidCanvasCtx.globalAlpha = s))
            } else this._toolTip.mouseMoveHandler(n, t)
        };
        t.prototype._zoomPanToSelectedRegion = function(n, t, i, r, u) {
            var a, p, f, e, v;
            u = u || !1;
            var w = this.zoomType.indexOf("x") >= 0,
                y = this.zoomType.indexOf("y") >= 0,
                c = !1,
                h = [],
                l = [];
            for(this.axisX && w && h.push(this.axisX), this.axisY && y && h.push(this.axisY), this.axisY2 && y && h.push(this.axisY2), a = [], f = 0; f < h.length; f++) {
                var e = h[f],
                    o = e.convertPixelToValue({
                        x: n,
                        y: t
                    }),
                    s = e.convertPixelToValue({
                        x: i,
                        y: r
                    });
                if(o > s && (p = s, s = o, o = p), isFinite(e.dataInfo.minDiff))
                    if(Math.abs(s - o) < 3 * Math.abs(e.dataInfo.minDiff) || o < e.minimum || s > e.maximum) {
                        if(!u) {
                            c = !1;
                            break
                        }
                    } else l.push(e), a.push({
                        val1: o,
                        val2: s
                    }), c = !0
            }
            if(c)
                for(f = 0; f < l.length; f++) e = l[f], v = a[f], e.setViewPortRange(v.val1, v.val2);
            return c
        };
        t.prototype.preparePlotArea = function() {
            var t = this.plotArea,
                i = this.axisY ? this.axisY : this.axisY2,
                r;
            !n && (t.x1 > 0 || t.y1 > 0) && t.ctx.translate(t.x1, t.y1);
            this.axisX && i ? (t.x1 = this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2 ? this.axisX.lineCoordinates.x1 : i.lineCoordinates.x1, t.y1 = this.axisX.lineCoordinates.y1 < i.lineCoordinates.y1 ? this.axisX.lineCoordinates.y1 : i.lineCoordinates.y1, t.x2 = this.axisX.lineCoordinates.x2 > i.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : i.lineCoordinates.x2, t.y2 = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : i.lineCoordinates.y2, t.width = t.x2 - t.x1, t.height = t.y2 - t.y1) : (r = this.layoutManager.getFreeSpace(), t.x1 = r.x1, t.x2 = r.x2, t.y1 = r.y1, t.y2 = r.y2, t.width = r.width, t.height = r.height);
            n || (t.canvas.width = t.width, t.canvas.height = t.height, t.canvas.style.left = t.x1 + "px", t.canvas.style.top = t.y1 + "px", (t.x1 > 0 || t.y1 > 0) && t.ctx.translate(-t.x1, -t.y1));
            t.layoutManager = new ft(t.x1, t.y1, t.x2, t.y2, 2)
        };
        t.prototype.getPixelCoordinatesOnPlotArea = function(n, t) {
            return {
                x: this.axisX.getPixelCoordinatesOnAxis(n).x,
                y: this.axisY.getPixelCoordinatesOnAxis(t).y
            }
        };
        t.prototype.renderIndexLabels = function(n) {
            for(var ot = n || this.plotArea.ctx, u = this.plotArea, y = 0, b = 0, w = 0, k = 0, g = 0, h = 0, e = 0, l = 0, o = 0, tt, nt = 0; nt < this._indexLabels.length; nt++) {
                var t = this._indexLabels[nt],
                    i = t.chartType.toLowerCase(),
                    a, f, ct, lt = p("indexLabelFontColor", t.dataPoint, t.dataSeries),
                    rt = p("indexLabelFontSize", t.dataPoint, t.dataSeries),
                    at = p("indexLabelFontFamily", t.dataPoint, t.dataSeries),
                    vt = p("indexLabelFontStyle", t.dataPoint, t.dataSeries),
                    yt = p("indexLabelFontWeight", t.dataPoint, t.dataSeries),
                    pt = p("indexLabelBackgroundColor", t.dataPoint, t.dataSeries),
                    st = p("indexLabelMaxWidth", t.dataPoint, t.dataSeries),
                    wt = p("indexLabelWrap", t.dataPoint, t.dataSeries),
                    ut = {
                        percent: null,
                        total: null
                    },
                    ft = null;
                if((t.dataSeries.type.indexOf("stacked") >= 0 || t.dataSeries.type === "pie" || t.dataSeries.type === "doughnut") && (ut = this.getPercentAndTotal(t.dataSeries, t.dataPoint)), (t.dataSeries.indexLabelFormatter || t.dataPoint.indexLabelFormatter) && (ft = {
                        chart: this._options,
                        dataSeries: t.dataSeries,
                        dataPoint: t.dataPoint,
                        index: t.indexKeyword,
                        total: ut.total,
                        percent: ut.percent
                    }), tt = t.dataPoint.indexLabelFormatter ? t.dataPoint.indexLabelFormatter(ft) : t.dataPoint.indexLabel ? this.replaceKeywordsWithValue(t.dataPoint.indexLabel, t.dataPoint, t.dataSeries, null, t.indexKeyword) : t.dataSeries.indexLabelFormatter ? t.dataSeries.indexLabelFormatter(ft) : t.dataSeries.indexLabel ? this.replaceKeywordsWithValue(t.dataSeries.indexLabel, t.dataPoint, t.dataSeries, null, t.indexKeyword) : null, tt !== null && tt !== "") {
                    var s = p("indexLabelPlacement", t.dataPoint, t.dataSeries),
                        et = p("indexLabelOrientation", t.dataPoint, t.dataSeries),
                        ct = 0,
                        d = t.direction,
                        it = t.dataSeries.axisX,
                        ht = t.dataSeries.axisY,
                        v = new c(ot, {
                            x: 0,
                            y: 0,
                            maxWidth: st ? st : this.width * .5,
                            maxHeight: wt ? rt * 5 : rt * 1.5,
                            angle: et === "horizontal" ? 0 : -90,
                            text: tt,
                            padding: 0,
                            backgroundColor: pt,
                            horizontalAlign: "left",
                            fontSize: rt,
                            fontFamily: at,
                            fontWeight: yt,
                            fontColor: lt,
                            fontStyle: vt,
                            textBaseline: "top"
                        }),
                        bt = v.measureText();
                    if(i.indexOf("line") >= 0 || i.indexOf("area") >= 0 || i.indexOf("bubble") >= 0 || i.indexOf("scatter") >= 0) {
                        if(t.dataPoint.x < it.viewportMinimum || t.dataPoint.x > it.viewportMaximum || t.dataPoint.y < ht.viewportMinimum || t.dataPoint.y > ht.viewportMaximum) continue
                    } else if(t.dataPoint.x < it.viewportMinimum || t.dataPoint.x > it.viewportMaximum) continue;
                    e = 2;
                    h = 2;
                    et === "horizontal" ? (l = v.width, o = v.height) : (o = v.width, l = v.height);
                    this.plotInfo.axisPlacement === "normal" ? (i.indexOf("line") >= 0 || i.indexOf("area") >= 0 ? (s = "auto", e = 4) : i.indexOf("stacked") >= 0 ? s === "auto" && (s = "inside") : (i === "bubble" || i === "scatter") && (s = "inside"), a = t.point.x - l / 2, s !== "inside" ? (b = u.y1, w = u.y2, d > 0 ? (f = t.point.y - o - e, f < b && (f = s === "auto" ? Math.max(t.point.y, b) + e : b + e)) : (f = t.point.y + e, f > w - o - e && (f = s === "auto" ? Math.min(t.point.y, w) - o - e : w - o - e))) : (b = Math.max(t.bounds.y1, u.y1), w = Math.min(t.bounds.y2, u.y2), y = i.indexOf("range") >= 0 ? d > 0 ? Math.max(t.bounds.y1, u.y1) + o / 2 + e : Math.min(t.bounds.y2, u.y2) - o / 2 - e : (Math.max(t.bounds.y1, u.y1) + Math.min(t.bounds.y2, u.y2)) / 2, d > 0 ? (f = Math.max(t.point.y, y) - o / 2, f < b && (i === "bubble" || i === "scatter") && (f = Math.max(t.point.y - o - e, u.y1 + e))) : (f = Math.min(t.point.y, y) - o / 2, f > w - o - e && (i === "bubble" || i === "scatter") && (f = Math.min(t.point.y + e, u.y2 - o - e))), f = Math.min(f, w - o))) : (i.indexOf("line") >= 0 || i.indexOf("area") >= 0 || i.indexOf("scatter") >= 0 ? (s = "auto", h = 4) : i.indexOf("stacked") >= 0 ? s === "auto" && (s = "inside") : i === "bubble" && (s = "inside"), f = t.point.y - o / 2, s !== "inside" ? (k = u.x1, g = u.x2, d < 0 ? (a = t.point.x - l - h, a < k && (a = s === "auto" ? Math.max(t.point.x, k) + h : k + h)) : (a = t.point.x + h, a > g - l - h && (a = s === "auto" ? Math.min(t.point.x, g) - l - h : g - l - h))) : (k = Math.max(t.bounds.x1, u.x1), g = Math.min(t.bounds.x2, u.x2), y = i.indexOf("range") >= 0 ? d < 0 ? Math.max(t.bounds.x1, u.x1) + l / 2 + h : Math.min(t.bounds.x2, u.x2) - l / 2 - h : (Math.max(t.bounds.x1, u.x1) + Math.min(t.bounds.x2, u.x2)) / 2, a = d < 0 ? Math.max(t.point.x, y) - l / 2 : Math.min(t.point.x, y) - l / 2, a = Math.max(a, k)));
                    et === "vertical" && (f += o);
                    v.x = a;
                    v.y = f;
                    v.render(!0)
                }
            }
            return {
                source: ot,
                dest: this.plotArea.ctx,
                animationCallback: r.fadeInAnimation,
                easingFunction: r.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: .7
            }
        };
        t.prototype.renderLine = function(t) {
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                et = t.dataSeriesIndexes.length,
                o, l, p, w, b, e, s, nt, ut, ft, tt, it, f, h, c, k, d, g, v, rt;
            if(!(et <= 0)) {
                for(o = this._eventManager.ghostCtx, i.save(), l = this.plotArea, i.beginPath(), i.rect(l.x1, l.y1, l.width, l.height), i.clip(), p = [], w = 0; w < t.dataSeriesIndexes.length; w++)
                    if(b = t.dataSeriesIndexes[w], e = this.data[b], i.lineWidth = e.lineThickness, s = e.dataPoints, i.setLineDash && i.setLineDash(y(e.lineDashType, e.lineThickness)), nt = e.id, this._eventManager.objectMap[nt] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: b
                        }, ut = u(nt), o.strokeStyle = ut, o.lineWidth = e.lineThickness > 0 ? Math.max(e.lineThickness, 4) : 0, ft = e._colorSet, tt = ft[0], i.strokeStyle = tt, it = !0, f = 0, i.beginPath(), s.length > 0) {
                        for(d = !1, f = 0; f < s.length; f++)
                            if(k = s[f].x.getTime ? s[f].x.getTime() : s[f].x, !(k < t.axisX.dataInfo.viewPortMin) && !(k > t.axisX.dataInfo.viewPortMax)) {
                                if(typeof s[f].y != "number") {
                                    f > 0 && (i.stroke(), n && o.stroke());
                                    d = !0;
                                    continue
                                }
                                h = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (k - t.axisX.conversionParameters.minimum) + .5 << 0;
                                c = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (s[f].y - t.axisY.conversionParameters.minimum) + .5 << 0;
                                g = e.dataPointIds[f];
                                this._eventManager.objectMap[g] = {
                                    id: g,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: b,
                                    dataPointIndex: f,
                                    x1: h,
                                    y1: c
                                };
                                it || d ? (i.beginPath(), i.moveTo(h, c), n && (o.beginPath(), o.moveTo(h, c)), it = !1, d = !1) : (i.lineTo(h, c), n && o.lineTo(h, c), f % 500 == 0 && (i.stroke(), i.beginPath(), i.moveTo(h, c), n && (o.stroke(), o.beginPath(), o.moveTo(h, c))));
                                (s[f].markerSize > 0 || e.markerSize > 0) && (v = e.getMarkerProperties(f, h, c, i), p.push(v), rt = u(g), n && p.push({
                                    x: h,
                                    y: c,
                                    ctx: o,
                                    type: v.type,
                                    size: v.size,
                                    color: rt,
                                    borderColor: rt,
                                    borderThickness: v.borderThickness
                                }));
                                (s[f].indexLabel || e.indexLabel || s[f].indexLabelFormatter || e.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "line",
                                    dataPoint: s[f],
                                    dataSeries: e,
                                    point: {
                                        x: h,
                                        y: c
                                    },
                                    direction: s[f].y >= 0 ? 1 : -1,
                                    color: tt
                                })
                            }
                        i.stroke();
                        n && o.stroke()
                    }
                return a.drawMarkers(p), i.restore(), i.beginPath(), n && o.beginPath(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xClipAnimation,
                    easingFunction: r.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderStepLine = function(t) {
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                ot = t.dataSeriesIndexes.length,
                o, l, p, w, b, e, s, nt, ft, et, tt, it, f, h, c, k, d, rt, g, v, ut;
            if(!(ot <= 0)) {
                for(o = this._eventManager.ghostCtx, i.save(), l = this.plotArea, i.beginPath(), i.rect(l.x1, l.y1, l.width, l.height), i.clip(), p = [], w = 0; w < t.dataSeriesIndexes.length; w++)
                    if(b = t.dataSeriesIndexes[w], e = this.data[b], i.lineWidth = e.lineThickness, s = e.dataPoints, i.setLineDash && i.setLineDash(y(e.lineDashType, e.lineThickness)), nt = e.id, this._eventManager.objectMap[nt] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: b
                        }, ft = u(nt), o.strokeStyle = ft, o.lineWidth = e.lineThickness > 0 ? Math.max(e.lineThickness, 4) : 0, et = e._colorSet, tt = et[0], i.strokeStyle = tt, it = !0, f = 0, i.beginPath(), s.length > 0) {
                        for(d = !1, f = 0; f < s.length; f++)
                            if(k = s[f].getTime ? s[f].x.getTime() : s[f].x, !(k < t.axisX.dataInfo.viewPortMin) && !(k > t.axisX.dataInfo.viewPortMax)) {
                                if(typeof s[f].y != "number") {
                                    f > 0 && (i.stroke(), n && o.stroke());
                                    d = !0;
                                    continue
                                }
                                rt = c;
                                h = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (k - t.axisX.conversionParameters.minimum) + .5 << 0;
                                c = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (s[f].y - t.axisY.conversionParameters.minimum) + .5 << 0;
                                g = e.dataPointIds[f];
                                this._eventManager.objectMap[g] = {
                                    id: g,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: b,
                                    dataPointIndex: f,
                                    x1: h,
                                    y1: c
                                };
                                it || d ? (i.beginPath(), i.moveTo(h, c), n && (o.beginPath(), o.moveTo(h, c)), it = !1, d = !1) : (i.lineTo(h, rt), n && o.lineTo(h, rt), i.lineTo(h, c), n && o.lineTo(h, c), f % 500 == 0 && (i.stroke(), i.beginPath(), i.moveTo(h, c), n && (o.stroke(), o.beginPath(), o.moveTo(h, c))));
                                (s[f].markerSize > 0 || e.markerSize > 0) && (v = e.getMarkerProperties(f, h, c, i), p.push(v), ut = u(g), n && p.push({
                                    x: h,
                                    y: c,
                                    ctx: o,
                                    type: v.type,
                                    size: v.size,
                                    color: ut,
                                    borderColor: ut,
                                    borderThickness: v.borderThickness
                                }));
                                (s[f].indexLabel || e.indexLabel || s[f].indexLabelFormatter || e.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stepLine",
                                    dataPoint: s[f],
                                    dataSeries: e,
                                    point: {
                                        x: h,
                                        y: c
                                    },
                                    direction: s[f].y >= 0 ? 1 : -1,
                                    color: tt
                                })
                            }
                        i.stroke();
                        n && o.stroke()
                    }
                return a.drawMarkers(p), i.restore(), i.beginPath(), n && o.beginPath(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xClipAnimation,
                    easingFunction: r.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderSpline = function(t) {
            function ft(t) {
                var r = kt(t, 2),
                    u;
                if(r.length > 0) {
                    for(i.beginPath(), n && s.beginPath(), i.moveTo(r[0].x, r[0].y), n && s.moveTo(r[0].x, r[0].y), u = 0; u < r.length - 3; u += 3) i.bezierCurveTo(r[u + 1].x, r[u + 1].y, r[u + 2].x, r[u + 2].y, r[u + 3].x, r[u + 3].y), n && s.bezierCurveTo(r[u + 1].x, r[u + 1].y, r[u + 2].x, r[u + 2].y, r[u + 3].x, r[u + 3].y), u > 0 && u % 3e3 == 0 && (i.stroke(), i.beginPath(), i.moveTo(r[u + 3].x, r[u + 3].y), n && (s.stroke(), s.beginPath(), s.moveTo(r[u + 3].x, r[u + 3].y)));
                    i.stroke();
                    n && s.stroke()
                }
            }
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                et = t.dataSeriesIndexes.length,
                s, l, w, b, k, e, o, nt, rt, ut, tt, g, p, it;
            if(!(et <= 0)) {
                for(s = this._eventManager.ghostCtx, i.save(), l = this.plotArea, i.beginPath(), i.rect(l.x1, l.y1, l.width, l.height), i.clip(), w = [], b = 0; b < t.dataSeriesIndexes.length; b++) {
                    k = t.dataSeriesIndexes[b];
                    e = this.data[k];
                    i.lineWidth = e.lineThickness;
                    o = e.dataPoints;
                    i.setLineDash && i.setLineDash(y(e.lineDashType, e.lineThickness));
                    nt = e.id;
                    this._eventManager.objectMap[nt] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: k
                    };
                    rt = u(nt);
                    s.strokeStyle = rt;
                    s.lineWidth = e.lineThickness > 0 ? Math.max(e.lineThickness, 4) : 0;
                    ut = e._colorSet;
                    tt = ut[0];
                    i.strokeStyle = tt;
                    var f = 0,
                        h, c, d, v = [];
                    if(i.beginPath(), o.length > 0)
                        for(f = 0; f < o.length; f++)
                            if(d = o[f].getTime ? o[f].x.getTime() : o[f].x, !(d < t.axisX.dataInfo.viewPortMin) && !(d > t.axisX.dataInfo.viewPortMax)) {
                                if(typeof o[f].y != "number") {
                                    f > 0 && (ft(v), v = []);
                                    continue
                                }
                                h = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (d - t.axisX.conversionParameters.minimum) + .5 << 0;
                                c = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (o[f].y - t.axisY.conversionParameters.minimum) + .5 << 0;
                                g = e.dataPointIds[f];
                                this._eventManager.objectMap[g] = {
                                    id: g,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: f,
                                    x1: h,
                                    y1: c
                                };
                                v[v.length] = {
                                    x: h,
                                    y: c
                                };
                                (o[f].markerSize > 0 || e.markerSize > 0) && (p = e.getMarkerProperties(f, h, c, i), w.push(p), it = u(g), n && w.push({
                                    x: h,
                                    y: c,
                                    ctx: s,
                                    type: p.type,
                                    size: p.size,
                                    color: it,
                                    borderColor: it,
                                    borderThickness: p.borderThickness
                                }));
                                (o[f].indexLabel || e.indexLabel || o[f].indexLabelFormatter || e.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "spline",
                                    dataPoint: o[f],
                                    dataSeries: e,
                                    point: {
                                        x: h,
                                        y: c
                                    },
                                    direction: o[f].y >= 0 ? 1 : -1,
                                    color: tt
                                })
                            }
                    ft(v)
                }
                return a.drawMarkers(w), i.restore(), i.beginPath(), n && s.beginPath(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xClipAnimation,
                    easingFunction: r.easing.linear,
                    animationBase: 0
                }
            }
        };
        o = function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
            var v, w, y;
            typeof a == "undefined" && (a = 1);
            e = e || 0;
            o = o || "black";
            var k = t,
                d = r,
                g = i,
                nt = u;
            v = r - t > 15 && u - i > 15 ? 8 : .35 * Math.min(r - t, u - i);
            var tt = "rgba(255, 255, 255, .4)",
                b = "rgba(255, 255, 255, 0.1)",
                p = f;
            n.beginPath();
            n.moveTo(t, i);
            n.save();
            n.fillStyle = p;
            n.globalAlpha = a;
            n.fillRect(t, i, r - t, u - i);
            n.globalAlpha = 1;
            e > 0 && (w = e % 2 == 0 ? 0 : .5, n.beginPath(), n.lineWidth = e, n.strokeStyle = o, n.moveTo(t, i), n.rect(t - w, i - w, r - t + 2 * w, u - i + 2 * w), n.stroke());
            n.restore();
            s === !0 && (n.save(), n.beginPath(), n.moveTo(t, i), n.lineTo(t + v, i + v), n.lineTo(r - v, i + v), n.lineTo(r, i), n.closePath(), y = n.createLinearGradient((r + t) / 2, g + v, (r + t) / 2, g), y.addColorStop(0, p), y.addColorStop(1, tt), n.fillStyle = y, n.fill(), n.restore());
            h === !0 && (n.save(), n.beginPath(), n.moveTo(t, u), n.lineTo(t + v, u - v), n.lineTo(r - v, u - v), n.lineTo(r, u), n.closePath(), y = n.createLinearGradient((r + t) / 2, nt - v, (r + t) / 2, nt), y.addColorStop(0, p), y.addColorStop(1, tt), n.fillStyle = y, n.fill(), n.restore());
            c === !0 && (n.save(), n.beginPath(), n.moveTo(t, i), n.lineTo(t + v, i + v), n.lineTo(t + v, u - v), n.lineTo(t, u), n.closePath(), y = n.createLinearGradient(k + v, (u + i) / 2, k, (u + i) / 2), y.addColorStop(0, p), y.addColorStop(1, b), n.fillStyle = y, n.fill(), n.restore());
            l === !0 && (n.save(), n.beginPath(), n.moveTo(r, i), n.lineTo(r - v, i + v), n.lineTo(r - v, u - v), n.lineTo(r, u), y = n.createLinearGradient(d - v, (u + i) / 2, d, (u + i) / 2), y.addColorStop(0, p), y.addColorStop(1, b), n.fillStyle = y, y.addColorStop(0, p), y.addColorStop(1, b), n.fillStyle = y, n.fill(), n.closePath(), n.restore())
        };
        t.prototype.renderColumn = function(t) {
            var v = t.targetCanvasCtx || this.plotArea.ctx,
                st = t.dataSeriesIndexes.length,
                w, tt, a, y, e, s, it, k, et, ot;
            if(!(st <= 0)) {
                var p = null,
                    h = this.plotArea,
                    i = 0,
                    rt, d, b, g = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    nt = this.dataPointMaxWidth ? this.dataPointMaxWidth : Math.min(this.width * .15, this.plotArea.width / t.plotType.totalDataSeries * .9) << 0,
                    ut = t.axisX.dataInfo.minDiff,
                    c = h.width / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(ut) / t.plotType.totalDataSeries * .9 << 0;
                for(c > nt ? c = nt : ut === Infinity ? c = nt / t.plotType.totalDataSeries * .9 : c < 1 && (c = 1), v.save(), n && this._eventManager.ghostCtx.save(), v.beginPath(), v.rect(h.x1, h.y1, h.width, h.height), v.clip(), n && (this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip()), w = 0; w < t.dataSeriesIndexes.length; w++) {
                    var ft = t.dataSeriesIndexes[w],
                        l = this.data[ft],
                        f = l.dataPoints;
                    if(f.length > 0)
                        for(tt = c > 5 && l.bevelEnabled ? !0 : !1, i = 0; i < f.length; i++)(b = f[i].getTime ? f[i].x.getTime() : f[i].x, b < t.axisX.dataInfo.viewPortMin || b > t.axisX.dataInfo.viewPortMax) || typeof f[i].y == "number" && (rt = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (b - t.axisX.conversionParameters.minimum) + .5 << 0, d = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (f[i].y - t.axisY.conversionParameters.minimum) + .5 << 0, a = rt - t.plotType.totalDataSeries * c / 2 + (t.previousDataSeriesCount + w) * c << 0, y = a + c << 0, f[i].y >= 0 ? (e = d, s = g, e > s && (it = e, e = s, s = e)) : (s = d, e = g, e > s && (it = e, e = s, s = e)), p = f[i].color ? f[i].color : l._colorSet[i % l._colorSet.length], o(v, a, e, y, s, p, 0, null, tt && f[i].y >= 0, f[i].y < 0 && tt, !1, !1, l.fillOpacity), k = l.dataPointIds[i], this._eventManager.objectMap[k] = {
                            id: k,
                            objectType: "dataPoint",
                            dataSeriesIndex: ft,
                            dataPointIndex: i,
                            x1: a,
                            y1: e,
                            x2: y,
                            y2: s
                        }, p = u(k), n && o(this._eventManager.ghostCtx, a, e, y, s, p, 0, null, !1, !1, !1, !1), (f[i].indexLabel || l.indexLabel || f[i].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                            chartType: "column",
                            dataPoint: f[i],
                            dataSeries: l,
                            point: {
                                x: a + (y - a) / 2,
                                y: f[i].y >= 0 ? e : s
                            },
                            direction: f[i].y >= 0 ? 1 : -1,
                            bounds: {
                                x1: a,
                                y1: Math.min(e, s),
                                x2: y,
                                y2: Math.max(e, s)
                            },
                            color: p
                        }))
                }
                return v.restore(), n && this._eventManager.ghostCtx.restore(), et = Math.min(g, t.axisY.boundingRect.y2), ot = {
                    source: v,
                    dest: this.plotArea.ctx,
                    animationCallback: r.yScaleAnimation,
                    easingFunction: r.easing.easeOutQuart,
                    animationBase: et
                }, ot
            }
        };
        t.prototype.renderStackedColumn = function(t) {
            var y = t.targetCanvasCtx || this.plotArea.ctx,
                ct = t.dataSeriesIndexes.length,
                k, ft, p, b, s, h, v, d, st, ht;
            if(!(ct <= 0)) {
                var w = null,
                    c = this.plotArea,
                    g = [],
                    nt = [],
                    i = 0,
                    tt, it, e, rt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    ut = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.width * .15 << 0,
                    et = t.axisX.dataInfo.minDiff,
                    l = c.width / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(et) / t.plotType.plotUnits.length * .9 << 0;
                for(l > ut ? l = ut : et === Infinity ? l = ut : l < 1 && (l = 1), y.save(), n && this._eventManager.ghostCtx.save(), y.beginPath(), y.rect(c.x1, c.y1, c.width, c.height), y.clip(), n && (this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip()), k = 0; k < t.dataSeriesIndexes.length; k++) {
                    var ot = t.dataSeriesIndexes[k],
                        a = this.data[ot],
                        f = a.dataPoints;
                    if(f.length > 0)
                        for(ft = l > 5 && a.bevelEnabled ? !0 : !1, y.strokeStyle = "#4572A7 ", i = 0; i < f.length; i++)(e = f[i].x.getTime ? f[i].x.getTime() : f[i].x, e < t.axisX.dataInfo.viewPortMin || e > t.axisX.dataInfo.viewPortMax) || typeof f[i].y == "number" && (tt = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (e - t.axisX.conversionParameters.minimum) + .5 << 0, it = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (f[i].y - t.axisY.conversionParameters.minimum), p = tt - t.plotType.plotUnits.length * l / 2 + t.index * l << 0, b = p + l << 0, f[i].y >= 0 ? (v = g[e] ? g[e] : 0, s = it - v, h = rt - v, g[e] = v + (h - s)) : (v = nt[e] ? nt[e] : 0, h = it + v, s = rt + v, nt[e] = v + (h - s)), w = f[i].color ? f[i].color : a._colorSet[i % a._colorSet.length], o(y, p, s, b, h, w, 0, null, ft && f[i].y >= 0, f[i].y < 0 && ft, !1, !1, a.fillOpacity), d = a.dataPointIds[i], this._eventManager.objectMap[d] = {
                            id: d,
                            objectType: "dataPoint",
                            dataSeriesIndex: ot,
                            dataPointIndex: i,
                            x1: p,
                            y1: s,
                            x2: b,
                            y2: h
                        }, w = u(d), n && o(this._eventManager.ghostCtx, p, s, b, h, w, 0, null, !1, !1, !1, !1), (f[i].indexLabel || a.indexLabel || f[i].indexLabelFormatter || a.indexLabelFormatter) && this._indexLabels.push({
                            chartType: "stackedColumn",
                            dataPoint: f[i],
                            dataSeries: a,
                            point: {
                                x: tt,
                                y: f[i].y >= 0 ? s : h
                            },
                            direction: f[i].y >= 0 ? 1 : -1,
                            bounds: {
                                x1: p,
                                y1: Math.min(s, h),
                                x2: b,
                                y2: Math.max(s, h)
                            },
                            color: w
                        }))
                }
                return y.restore(), n && this._eventManager.ghostCtx.restore(), st = Math.min(rt, t.axisY.boundingRect.y2), ht = {
                    source: y,
                    dest: this.plotArea.ctx,
                    animationCallback: r.yScaleAnimation,
                    easingFunction: r.easing.easeOutQuart,
                    animationBase: st
                }, ht
            }
        };
        t.prototype.renderStackedColumn100 = function(t) {
            var y = t.targetCanvasCtx || this.plotArea.ctx,
                lt = t.dataSeriesIndexes.length,
                k, ft, st, p, b, s, h, v, d, ht, ct;
            if(!(lt <= 0)) {
                var w = null,
                    c = this.plotArea,
                    g = [],
                    nt = [],
                    i = 0,
                    tt, it, e, rt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    ut = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.width * .15 << 0,
                    et = t.axisX.dataInfo.minDiff,
                    l = c.width / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(et) / t.plotType.plotUnits.length * .9 << 0;
                for(l > ut ? l = ut : et === Infinity ? l = ut : l < 1 && (l = 1), y.save(), n && this._eventManager.ghostCtx.save(), y.beginPath(), y.rect(c.x1, c.y1, c.width, c.height), y.clip(), n && (this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip()), k = 0; k < t.dataSeriesIndexes.length; k++) {
                    var ot = t.dataSeriesIndexes[k],
                        a = this.data[ot],
                        f = a.dataPoints;
                    if(f.length > 0)
                        for(ft = l > 5 && a.bevelEnabled ? !0 : !1, i = 0; i < f.length; i++)(e = f[i].x.getTime ? f[i].x.getTime() : f[i].x, e < t.axisX.dataInfo.viewPortMin || e > t.axisX.dataInfo.viewPortMax) || typeof f[i].y == "number" && (tt = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (e - t.axisX.conversionParameters.minimum) + .5 << 0, st = t.dataPointYSums[e] !== 0 ? f[i].y / t.dataPointYSums[e] * 100 : 0, it = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (st - t.axisY.conversionParameters.minimum), p = tt - t.plotType.plotUnits.length * l / 2 + t.index * l << 0, b = p + l << 0, f[i].y >= 0 ? (v = g[e] ? g[e] : 0, s = it - v, h = rt - v, g[e] = v + (h - s)) : (v = nt[e] ? nt[e] : 0, h = it + v, s = rt + v, nt[e] = v + (h - s)), w = f[i].color ? f[i].color : a._colorSet[i % a._colorSet.length], o(y, p, s, b, h, w, 0, null, ft && f[i].y >= 0, f[i].y < 0 && ft, !1, !1, a.fillOpacity), d = a.dataPointIds[i], this._eventManager.objectMap[d] = {
                            id: d,
                            objectType: "dataPoint",
                            dataSeriesIndex: ot,
                            dataPointIndex: i,
                            x1: p,
                            y1: s,
                            x2: b,
                            y2: h
                        }, w = u(d), n && o(this._eventManager.ghostCtx, p, s, b, h, w, 0, null, !1, !1, !1, !1), (f[i].indexLabel || a.indexLabel || f[i].indexLabelFormatter || a.indexLabelFormatter) && this._indexLabels.push({
                            chartType: "stackedColumn100",
                            dataPoint: f[i],
                            dataSeries: a,
                            point: {
                                x: tt,
                                y: f[i].y >= 0 ? s : h
                            },
                            direction: f[i].y >= 0 ? 1 : -1,
                            bounds: {
                                x1: p,
                                y1: Math.min(s, h),
                                x2: b,
                                y2: Math.max(s, h)
                            },
                            color: w
                        }))
                }
                return y.restore(), n && this._eventManager.ghostCtx.restore(), ht = Math.min(rt, t.axisY.boundingRect.y2), ct = {
                    source: y,
                    dest: this.plotArea.ctx,
                    animationCallback: r.yScaleAnimation,
                    easingFunction: r.easing.easeOutQuart,
                    animationBase: ht
                }, ct
            }
        };
        t.prototype.renderBar = function(t) {
            var c = t.targetCanvasCtx || this.plotArea.ctx,
                ot = t.dataSeriesIndexes.length,
                w, ut, l, y, a, v, k, ft, et;
            if(!(ot <= 0)) {
                var p = null,
                    e = this.plotArea,
                    i = 0,
                    d, tt, b, g = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    nt = this.dataPointMaxWidth ? this.dataPointMaxWidth : Math.min(this.height * .15, this.plotArea.height / t.plotType.totalDataSeries * .9) << 0,
                    it = t.axisX.dataInfo.minDiff,
                    s = e.height / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(it) / t.plotType.totalDataSeries * .9 << 0;
                for(s > nt ? s = nt : it === Infinity ? s = nt / t.plotType.totalDataSeries * .9 : s < 1 && (s = 1), c.save(), n && this._eventManager.ghostCtx.save(), c.beginPath(), c.rect(e.x1, e.y1, e.width, e.height), c.clip(), n && (this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip()), w = 0; w < t.dataSeriesIndexes.length; w++) {
                    var rt = t.dataSeriesIndexes[w],
                        h = this.data[rt],
                        f = h.dataPoints;
                    if(f.length > 0)
                        for(ut = s > 5 && h.bevelEnabled ? !0 : !1, c.strokeStyle = "#4572A7 ", i = 0; i < f.length; i++)(b = f[i].getTime ? f[i].x.getTime() : f[i].x, b < t.axisX.dataInfo.viewPortMin || b > t.axisX.dataInfo.viewPortMax) || typeof f[i].y == "number" && (tt = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (b - t.axisX.conversionParameters.minimum) + .5 << 0, d = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (f[i].y - t.axisY.conversionParameters.minimum) + .5 << 0, l = tt - t.plotType.totalDataSeries * s / 2 + (t.previousDataSeriesCount + w) * s << 0, y = l + s << 0, f[i].y >= 0 ? (a = g, v = d) : (a = d, v = g), p = f[i].color ? f[i].color : h._colorSet[i % h._colorSet.length], o(c, a, l, v, y, p, 0, null, ut, !1, !1, !1, h.fillOpacity), k = h.dataPointIds[i], this._eventManager.objectMap[k] = {
                            id: k,
                            objectType: "dataPoint",
                            dataSeriesIndex: rt,
                            dataPointIndex: i,
                            x1: a,
                            y1: l,
                            x2: v,
                            y2: y
                        }, p = u(k), n && o(this._eventManager.ghostCtx, a, l, v, y, p, 0, null, !1, !1, !1, !1), (f[i].indexLabel || h.indexLabel || f[i].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                            chartType: "bar",
                            dataPoint: f[i],
                            dataSeries: h,
                            point: {
                                x: f[i].y >= 0 ? v : a,
                                y: l + (y - l) / 2
                            },
                            direction: f[i].y >= 0 ? 1 : -1,
                            bounds: {
                                x1: Math.min(a, v),
                                y1: l,
                                x2: Math.max(a, v),
                                y2: y
                            },
                            color: p
                        }))
                }
                return c.restore(), n && this._eventManager.ghostCtx.restore(), ft = Math.max(g, t.axisX.boundingRect.x2), et = {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xScaleAnimation,
                    easingFunction: r.easing.easeOutQuart,
                    animationBase: ft
                }, et
            }
        };
        t.prototype.renderStackedBar = function(t) {
            var y = t.targetCanvasCtx || this.plotArea.ctx,
                ct = t.dataSeriesIndexes.length,
                k, ot, p, b, s, h, v, d, st, ht;
            if(!(ct <= 0)) {
                var w = null,
                    c = this.plotArea,
                    g = [],
                    nt = [],
                    i = 0,
                    tt, it, e, rt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    ut = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.height * .15 << 0,
                    ft = t.axisX.dataInfo.minDiff,
                    l = c.height / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(ft) / t.plotType.plotUnits.length * .9 << 0;
                for(l > ut ? l = ut : ft === Infinity ? l = ut : l < 1 && (l = 1), y.save(), n && this._eventManager.ghostCtx.save(), y.beginPath(), y.rect(c.x1, c.y1, c.width, c.height), y.clip(), n && (this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip()), k = 0; k < t.dataSeriesIndexes.length; k++) {
                    var et = t.dataSeriesIndexes[k],
                        a = this.data[et],
                        f = a.dataPoints;
                    if(f.length > 0)
                        for(ot = l > 5 && a.bevelEnabled ? !0 : !1, y.strokeStyle = "#4572A7 ", i = 0; i < f.length; i++)(e = f[i].x.getTime ? f[i].x.getTime() : f[i].x, e < t.axisX.dataInfo.viewPortMin || e > t.axisX.dataInfo.viewPortMax) || typeof f[i].y == "number" && (it = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (e - t.axisX.conversionParameters.minimum) + .5 << 0, tt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (f[i].y - t.axisY.conversionParameters.minimum), p = it - t.plotType.plotUnits.length * l / 2 + t.index * l << 0, b = p + l << 0, f[i].y >= 0 ? (v = g[e] ? g[e] : 0, s = rt + v, h = tt + v, g[e] = v + (h - s)) : (v = nt[e] ? nt[e] : 0, s = tt - v, h = rt - v, nt[e] = v + (h - s)), w = f[i].color ? f[i].color : a._colorSet[i % a._colorSet.length], o(y, s, p, h, b, w, 0, null, ot, !1, !1, !1, a.fillOpacity), d = a.dataPointIds[i], this._eventManager.objectMap[d] = {
                            id: d,
                            objectType: "dataPoint",
                            dataSeriesIndex: et,
                            dataPointIndex: i,
                            x1: s,
                            y1: p,
                            x2: h,
                            y2: b
                        }, w = u(d), n && o(this._eventManager.ghostCtx, s, p, h, b, w, 0, null, !1, !1, !1, !1), (f[i].indexLabel || a.indexLabel || f[i].indexLabelFormatter || a.indexLabelFormatter) && this._indexLabels.push({
                            chartType: "stackedBar",
                            dataPoint: f[i],
                            dataSeries: a,
                            point: {
                                x: f[i].y >= 0 ? h : s,
                                y: it
                            },
                            direction: f[i].y >= 0 ? 1 : -1,
                            bounds: {
                                x1: Math.min(s, h),
                                y1: p,
                                x2: Math.max(s, h),
                                y2: b
                            },
                            color: w
                        }))
                }
                return y.restore(), n && this._eventManager.ghostCtx.restore(), st = Math.max(rt, t.axisX.boundingRect.x2), ht = {
                    source: y,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xScaleAnimation,
                    easingFunction: r.easing.easeOutQuart,
                    animationBase: st
                }, ht
            }
        };
        t.prototype.renderStackedBar100 = function(t) {
            var y = t.targetCanvasCtx || this.plotArea.ctx,
                lt = t.dataSeriesIndexes.length,
                k, ot, st, p, b, s, h, v, d, ht, ct;
            if(!(lt <= 0)) {
                var w = null,
                    c = this.plotArea,
                    g = [],
                    nt = [],
                    i = 0,
                    tt, it, e, rt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    ut = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.height * .15 << 0,
                    ft = t.axisX.dataInfo.minDiff,
                    l = c.height / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(ft) / t.plotType.plotUnits.length * .9 << 0;
                for(l > ut ? l = ut : ft === Infinity ? l = ut : l < 1 && (l = 1), y.save(), n && this._eventManager.ghostCtx.save(), y.beginPath(), y.rect(c.x1, c.y1, c.width, c.height), y.clip(), n && (this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip()), k = 0; k < t.dataSeriesIndexes.length; k++) {
                    var et = t.dataSeriesIndexes[k],
                        a = this.data[et],
                        f = a.dataPoints;
                    if(f.length > 0)
                        for(ot = l > 5 && a.bevelEnabled ? !0 : !1, y.strokeStyle = "#4572A7 ", i = 0; i < f.length; i++)(e = f[i].x.getTime ? f[i].x.getTime() : f[i].x, e < t.axisX.dataInfo.viewPortMin || e > t.axisX.dataInfo.viewPortMax) || typeof f[i].y == "number" && (it = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (e - t.axisX.conversionParameters.minimum) + .5 << 0, st = t.dataPointYSums[e] !== 0 ? f[i].y / t.dataPointYSums[e] * 100 : 0, tt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (st - t.axisY.conversionParameters.minimum), p = it - t.plotType.plotUnits.length * l / 2 + t.index * l << 0, b = p + l << 0, f[i].y >= 0 ? (v = g[e] ? g[e] : 0, s = rt + v, h = tt + v, g[e] = v + (h - s)) : (v = nt[e] ? nt[e] : 0, s = tt - v, h = rt - v, nt[e] = v + (h - s)), w = f[i].color ? f[i].color : a._colorSet[i % a._colorSet.length], o(y, s, p, h, b, w, 0, null, ot, !1, !1, !1, a.fillOpacity), d = a.dataPointIds[i], this._eventManager.objectMap[d] = {
                            id: d,
                            objectType: "dataPoint",
                            dataSeriesIndex: et,
                            dataPointIndex: i,
                            x1: s,
                            y1: p,
                            x2: h,
                            y2: b
                        }, w = u(d), n && o(this._eventManager.ghostCtx, s, p, h, b, w, 0, null, !1, !1, !1, !1), (f[i].indexLabel || a.indexLabel || f[i].indexLabelFormatter || a.indexLabelFormatter) && this._indexLabels.push({
                            chartType: "stackedBar100",
                            dataPoint: f[i],
                            dataSeries: a,
                            point: {
                                x: f[i].y >= 0 ? h : s,
                                y: it
                            },
                            direction: f[i].y >= 0 ? 1 : -1,
                            bounds: {
                                x1: Math.min(s, h),
                                y1: p,
                                x2: Math.max(s, h),
                                y2: b
                            },
                            color: w
                        }))
                }
                return y.restore(), n && this._eventManager.ghostCtx.restore(), ht = Math.max(rt, t.axisX.boundingRect.x2), ct = {
                    source: y,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xScaleAnimation,
                    easingFunction: r.easing.easeOutQuart,
                    animationBase: ht
                }, ct
            }
        };
        t.prototype.renderArea = function(t) {
            function ut() {
                p && (o.lineThickness > 0 && i.stroke(), t.axisY.viewportMinimum <= 0 && t.axisY.viewportMaximum >= 0 ? v = lt : t.axisY.viewportMaximum < 0 ? v = ct.y1 : t.axisY.viewportMinimum > 0 && (v = ht.y2), i.lineTo(s, v), i.lineTo(p.x, v), i.closePath(), i.globalAlpha = o.fillOpacity, i.fill(), i.globalAlpha = 1, n && (e.lineTo(s, v), e.lineTo(p.x, v), e.closePath(), e.fill()), i.beginPath(), i.moveTo(s, c), e.beginPath(), e.moveTo(s, c), p = {
                    x: s,
                    y: c
                })
            }
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                st = t.dataSeriesIndexes.length,
                k, et, g, nt, tt, w, rt;
            if(!(st <= 0)) {
                var e = this._eventManager.ghostCtx,
                    ht = t.axisX.lineCoordinates,
                    ct = t.axisY.lineCoordinates,
                    b = [],
                    l = this.plotArea;
                for(i.save(), n && e.save(), i.beginPath(), i.rect(l.x1, l.y1, l.width, l.height), i.clip(), n && (e.beginPath(), e.rect(l.x1, l.y1, l.width, l.height), e.clip()), k = 0; k < t.dataSeriesIndexes.length; k++) {
                    var it = t.dataSeriesIndexes[k],
                        o = this.data[it],
                        h = o.dataPoints,
                        ft = o.id;
                    this._eventManager.objectMap[ft] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: it
                    };
                    et = u(ft);
                    e.fillStyle = et;
                    b = [];
                    var ot = !0,
                        f = 0,
                        s, c, d, lt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) + .5 << 0,
                        v, p = null;
                    if(h.length > 0) {
                        for(g = o._colorSet[f % o._colorSet.length], i.fillStyle = g, i.strokeStyle = g, i.lineWidth = o.lineThickness, i.setLineDash && i.setLineDash(y(o.lineDashType, o.lineThickness)), nt = !0; f < h.length; f++)
                            if(d = h[f].x.getTime ? h[f].x.getTime() : h[f].x, !(d < t.axisX.dataInfo.viewPortMin) && !(d > t.axisX.dataInfo.viewPortMax)) {
                                if(typeof h[f].y != "number") {
                                    ut();
                                    nt = !0;
                                    continue
                                }
                                s = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (d - t.axisX.conversionParameters.minimum) + .5 << 0;
                                c = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (h[f].y - t.axisY.conversionParameters.minimum) + .5 << 0;
                                ot || nt ? (i.beginPath(), i.moveTo(s, c), p = {
                                    x: s,
                                    y: c
                                }, n && (e.beginPath(), e.moveTo(s, c)), ot = !1, nt = !1) : (i.lineTo(s, c), n && e.lineTo(s, c), f % 250 == 0 && ut());
                                tt = o.dataPointIds[f];
                                this._eventManager.objectMap[tt] = {
                                    id: tt,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: it,
                                    dataPointIndex: f,
                                    x1: s,
                                    y1: c
                                };
                                h[f].markerSize !== 0 && (h[f].markerSize > 0 || o.markerSize > 0) && (w = o.getMarkerProperties(f, s, c, i), b.push(w), rt = u(tt), n && b.push({
                                    x: s,
                                    y: c,
                                    ctx: e,
                                    type: w.type,
                                    size: w.size,
                                    color: rt,
                                    borderColor: rt,
                                    borderThickness: w.borderThickness
                                }));
                                (h[f].indexLabel || o.indexLabel || h[f].indexLabelFormatter || o.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "area",
                                    dataPoint: h[f],
                                    dataSeries: o,
                                    point: {
                                        x: s,
                                        y: c
                                    },
                                    direction: h[f].y >= 0 ? 1 : -1,
                                    color: g
                                })
                            }
                        ut();
                        a.drawMarkers(b)
                    }
                }
                return i.restore(), n && this._eventManager.ghostCtx.restore(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xClipAnimation,
                    easingFunction: r.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderSplineArea = function(t) {
            function ft() {
                var r = kt(d, 2),
                    u;
                if(r.length > 0) {
                    for(i.beginPath(), i.moveTo(r[0].x, r[0].y), n && (o.beginPath(), o.moveTo(r[0].x, r[0].y)), u = 0; u < r.length - 3; u += 3) i.bezierCurveTo(r[u + 1].x, r[u + 1].y, r[u + 2].x, r[u + 2].y, r[u + 3].x, r[u + 3].y), n && o.bezierCurveTo(r[u + 1].x, r[u + 1].y, r[u + 2].x, r[u + 2].y, r[u + 3].x, r[u + 3].y);
                    e.lineThickness > 0 && i.stroke();
                    t.axisY.viewportMinimum <= 0 && t.axisY.viewportMaximum >= 0 ? c = ht : t.axisY.viewportMaximum < 0 ? c = st.y1 : t.axisY.viewportMinimum > 0 && (c = ot.y2);
                    tt = {
                        x: r[0].x,
                        y: r[0].y
                    };
                    i.lineTo(r[r.length - 1].x, c);
                    i.lineTo(tt.x, c);
                    i.closePath();
                    i.globalAlpha = e.fillOpacity;
                    i.fill();
                    i.globalAlpha = 1;
                    n && (o.lineTo(r[r.length - 1].x, c), o.lineTo(tt.x, c), o.closePath(), o.fill())
                }
            }
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                et = t.dataSeriesIndexes.length,
                b, ut, g, p, it;
            if(!(et <= 0)) {
                var o = this._eventManager.ghostCtx,
                    ot = t.axisX.lineCoordinates,
                    st = t.axisY.lineCoordinates,
                    w = [],
                    h = this.plotArea;
                for(i.save(), n && o.save(), i.beginPath(), i.rect(h.x1, h.y1, h.width, h.height), i.clip(), n && (o.beginPath(), o.rect(h.x1, h.y1, h.width, h.height), o.clip()), b = 0; b < t.dataSeriesIndexes.length; b++) {
                    var nt = t.dataSeriesIndexes[b],
                        e = this.data[nt],
                        s = e.dataPoints,
                        rt = e.id;
                    this._eventManager.objectMap[rt] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: nt
                    };
                    ut = u(rt);
                    o.fillStyle = ut;
                    w = [];
                    var f = 0,
                        l, v, k, ht = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) + .5 << 0,
                        c, tt = null,
                        d = [];
                    if(s.length > 0) {
                        for(color = e._colorSet[f % e._colorSet.length], i.fillStyle = color, i.strokeStyle = color, i.lineWidth = e.lineThickness, i.setLineDash && i.setLineDash(y(e.lineDashType, e.lineThickness)); f < s.length; f++)
                            if(k = s[f].x.getTime ? s[f].x.getTime() : s[f].x, !(k < t.axisX.dataInfo.viewPortMin) && !(k > t.axisX.dataInfo.viewPortMax)) {
                                if(typeof s[f].y != "number") {
                                    f > 0 && (ft(), d = []);
                                    continue
                                }
                                l = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (k - t.axisX.conversionParameters.minimum) + .5 << 0;
                                v = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (s[f].y - t.axisY.conversionParameters.minimum) + .5 << 0;
                                g = e.dataPointIds[f];
                                this._eventManager.objectMap[g] = {
                                    id: g,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: nt,
                                    dataPointIndex: f,
                                    x1: l,
                                    y1: v
                                };
                                d[d.length] = {
                                    x: l,
                                    y: v
                                };
                                s[f].markerSize !== 0 && (s[f].markerSize > 0 || e.markerSize > 0) && (p = e.getMarkerProperties(f, l, v, i), w.push(p), it = u(g), n && w.push({
                                    x: l,
                                    y: v,
                                    ctx: o,
                                    type: p.type,
                                    size: p.size,
                                    color: it,
                                    borderColor: it,
                                    borderThickness: p.borderThickness
                                }));
                                (s[f].indexLabel || e.indexLabel || s[f].indexLabelFormatter || e.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: s[f],
                                    dataSeries: e,
                                    point: {
                                        x: l,
                                        y: v
                                    },
                                    direction: s[f].y >= 0 ? 1 : -1,
                                    color: color
                                })
                            }
                        ft();
                        a.drawMarkers(w)
                    }
                }
                return i.restore(), n && this._eventManager.ghostCtx.restore(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xClipAnimation,
                    easingFunction: r.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderStepArea = function(t) {
            function ft() {
                p && (s.lineThickness > 0 && i.stroke(), t.axisY.viewportMinimum <= 0 && t.axisY.viewportMaximum >= 0 ? v = at : t.axisY.viewportMaximum < 0 ? v = lt.y1 : t.axisY.viewportMinimum > 0 && (v = ct.y2), i.lineTo(e, v), i.lineTo(p.x, v), i.closePath(), i.globalAlpha = s.fillOpacity, i.fill(), i.globalAlpha = 1, n && (o.lineTo(e, v), o.lineTo(p.x, v), o.closePath(), o.fill()), i.beginPath(), i.moveTo(e, h), o.beginPath(), o.moveTo(e, h), p = {
                    x: e,
                    y: h
                })
            }
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                ht = t.dataSeriesIndexes.length,
                k, ot, g, rt, nt, w, ut;
            if(!(ht <= 0)) {
                var o = this._eventManager.ghostCtx,
                    ct = t.axisX.lineCoordinates,
                    lt = t.axisY.lineCoordinates,
                    b = [],
                    l = this.plotArea;
                for(i.save(), n && o.save(), i.beginPath(), i.rect(l.x1, l.y1, l.width, l.height), i.clip(), n && (o.beginPath(), o.rect(l.x1, l.y1, l.width, l.height), o.clip()), k = 0; k < t.dataSeriesIndexes.length; k++) {
                    var tt = t.dataSeriesIndexes[k],
                        s = this.data[tt],
                        c = s.dataPoints,
                        et = s.id;
                    this._eventManager.objectMap[et] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: tt
                    };
                    ot = u(et);
                    o.fillStyle = ot;
                    b = [];
                    var st = !0,
                        f = 0,
                        e, h, d, at = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) + .5 << 0,
                        v, p = null,
                        it = !1;
                    if(c.length > 0) {
                        for(g = s._colorSet[f % s._colorSet.length], i.fillStyle = g, i.strokeStyle = g, i.lineWidth = s.lineThickness, i.setLineDash && i.setLineDash(y(s.lineDashType, s.lineThickness)); f < c.length; f++)
                            if(d = c[f].x.getTime ? c[f].x.getTime() : c[f].x, !(d < t.axisX.dataInfo.viewPortMin) && !(d > t.axisX.dataInfo.viewPortMax)) {
                                if(rt = h, typeof c[f].y != "number") {
                                    ft();
                                    it = !0;
                                    continue
                                }
                                e = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (d - t.axisX.conversionParameters.minimum) + .5 << 0;
                                h = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (c[f].y - t.axisY.conversionParameters.minimum) + .5 << 0;
                                st || it ? (i.beginPath(), i.moveTo(e, h), p = {
                                    x: e,
                                    y: h
                                }, n && (o.beginPath(), o.moveTo(e, h)), st = !1, it = !1) : (i.lineTo(e, rt), n && o.lineTo(e, rt), i.lineTo(e, h), n && o.lineTo(e, h), f % 250 == 0 && ft());
                                nt = s.dataPointIds[f];
                                this._eventManager.objectMap[nt] = {
                                    id: nt,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: tt,
                                    dataPointIndex: f,
                                    x1: e,
                                    y1: h
                                };
                                c[f].markerSize !== 0 && (c[f].markerSize > 0 || s.markerSize > 0) && (w = s.getMarkerProperties(f, e, h, i), b.push(w), ut = u(nt), n && b.push({
                                    x: e,
                                    y: h,
                                    ctx: o,
                                    type: w.type,
                                    size: w.size,
                                    color: ut,
                                    borderColor: ut,
                                    borderThickness: w.borderThickness
                                }));
                                (c[f].indexLabel || s.indexLabel || c[f].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stepArea",
                                    dataPoint: c[f],
                                    dataSeries: s,
                                    point: {
                                        x: e,
                                        y: h
                                    },
                                    direction: c[f].y >= 0 ? 1 : -1,
                                    color: g
                                })
                            }
                        ft();
                        a.drawMarkers(b)
                    }
                }
                return i.restore(), n && this._eventManager.ghostCtx.restore(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xClipAnimation,
                    easingFunction: r.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderStackedArea = function(t) {
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                lt = t.dataSeriesIndexes.length,
                v, ct, p, rt, tt, l;
            if(!(lt <= 0)) {
                var it = null,
                    ut = [],
                    w = this.plotArea,
                    ft = [],
                    d = [],
                    h = 0,
                    s, o, c, et = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    at = t.axisX.dataInfo.minDiff,
                    e = this._eventManager.ghostCtx;
                for(n && e.beginPath(), i.save(), n && e.save(), i.beginPath(), i.rect(w.x1, w.y1, w.width, w.height), i.clip(), n && (e.beginPath(), e.rect(w.x1, w.y1, w.width, w.height), e.clip()), xValuePresent = [], v = 0; v < t.dataSeriesIndexes.length; v++) {
                    var g = t.dataSeriesIndexes[v],
                        f = this.data[g],
                        b = f.dataPoints,
                        nt;
                    for(f.dataPointIndexes = [], h = 0; h < b.length; h++) nt = b[h].x.getTime ? b[h].x.getTime() : b[h].x, f.dataPointIndexes[nt] = h, xValuePresent[nt] || (d.push(nt), xValuePresent[nt] = !0);
                    d.sort(oi)
                }
                for(v = 0; v < t.dataSeriesIndexes.length; v++) {
                    var g = t.dataSeriesIndexes[v],
                        f = this.data[g],
                        b = f.dataPoints,
                        st = !0,
                        k = [],
                        ht = f.id;
                    if(this._eventManager.objectMap[ht] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: g
                        }, ct = u(ht), e.fillStyle = ct, d.length > 0) {
                        for(it = f._colorSet[0], i.fillStyle = it, i.strokeStyle = it, i.lineWidth = f.lineThickness, i.setLineDash && i.setLineDash(y(f.lineDashType, f.lineThickness)), h = 0; h < d.length; h++)
                            if((c = d[h], p = null, p = f.dataPointIndexes[c] >= 0 ? b[f.dataPointIndexes[c]] : {
                                    x: c,
                                    y: 0
                                }, !(c < t.axisX.dataInfo.viewPortMin) && !(c > t.axisX.dataInfo.viewPortMax)) && typeof p.y == "number") {
                                var s = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (c - t.axisX.conversionParameters.minimum) + .5 << 0,
                                    o = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (p.y - t.axisY.conversionParameters.minimum),
                                    ot = ft[c] ? ft[c] : 0;
                                if(o = o - ot, k.push({
                                        x: s,
                                        y: et - ot
                                    }), ft[c] = et - o, st) i.beginPath(), i.moveTo(s, o), n && (e.beginPath(), e.moveTo(s, o)), st = !1;
                                else if(i.lineTo(s, o), n && e.lineTo(s, o), h % 250 == 0) {
                                    for(f.lineThickness > 0 && i.stroke(); k.length > 0;) l = k.pop(), i.lineTo(l.x, l.y), n && e.lineTo(l.x, l.y);
                                    i.closePath();
                                    i.globalAlpha = f.fillOpacity;
                                    i.fill();
                                    i.globalAlpha = 1;
                                    i.beginPath();
                                    i.moveTo(s, o);
                                    n && (e.closePath(), e.fill(), e.beginPath(), e.moveTo(s, o));
                                    k.push({
                                        x: s,
                                        y: et - ot
                                    })
                                }
                                f.dataPointIndexes[c] >= 0 && (rt = f.dataPointIds[f.dataPointIndexes[c]], this._eventManager.objectMap[rt] = {
                                    id: rt,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: g,
                                    dataPointIndex: f.dataPointIndexes[c],
                                    x1: s,
                                    y1: o
                                });
                                f.dataPointIndexes[c] >= 0 && p.markerSize !== 0 && (p.markerSize > 0 || f.markerSize > 0) && (tt = f.getMarkerProperties(h, s, o, i), ut.push(tt), markerColor = u(rt), n && ut.push({
                                    x: s,
                                    y: o,
                                    ctx: e,
                                    type: tt.type,
                                    size: tt.size,
                                    color: markerColor,
                                    borderColor: markerColor,
                                    borderThickness: tt.borderThickness
                                }));
                                (p.indexLabel || f.indexLabel || p.indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedArea",
                                    dataPoint: p,
                                    dataSeries: f,
                                    point: {
                                        x: s,
                                        y: o
                                    },
                                    direction: b[h].y >= 0 ? 1 : -1,
                                    color: it
                                })
                            }
                        for(f.lineThickness > 0 && i.stroke(); k.length > 0;) l = k.pop(), i.lineTo(l.x, l.y), n && e.lineTo(l.x, l.y);
                        i.closePath();
                        i.globalAlpha = f.fillOpacity;
                        i.fill();
                        i.globalAlpha = 1;
                        i.beginPath();
                        i.moveTo(s, o);
                        n && (e.closePath(), e.fill(), e.beginPath(), e.moveTo(s, o))
                    }
                    delete f.dataPointIndexes
                }
                return a.drawMarkers(ut), i.restore(), n && e.restore(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xClipAnimation,
                    easingFunction: r.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderStackedArea100 = function(t) {
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                yt = t.dataSeriesIndexes.length,
                p, at, k, wt, w, vt, ut, it, l;
            if(!(yt <= 0)) {
                var rt = null,
                    v = this.plotArea,
                    ft = [],
                    et = [],
                    g = [],
                    h = 0,
                    c, o, s, ot = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    st = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.width * .15 << 0,
                    pt = t.axisX.dataInfo.minDiff,
                    d = v.width / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(pt) * .9 << 0,
                    e = this._eventManager.ghostCtx;
                for(i.save(), n && e.save(), i.beginPath(), i.rect(v.x1, v.y1, v.width, v.height), i.clip(), n && (e.beginPath(), e.rect(v.x1, v.y1, v.width, v.height), e.clip()), xValuePresent = [], p = 0; p < t.dataSeriesIndexes.length; p++) {
                    var nt = t.dataSeriesIndexes[p],
                        f = this.data[nt],
                        b = f.dataPoints,
                        tt;
                    for(f.dataPointIndexes = [], h = 0; h < b.length; h++) tt = b[h].x.getTime ? b[h].x.getTime() : b[h].x, f.dataPointIndexes[tt] = h, xValuePresent[tt] || (g.push(tt), xValuePresent[tt] = !0);
                    g.sort(oi)
                }
                for(p = 0; p < t.dataSeriesIndexes.length; p++) {
                    var nt = t.dataSeriesIndexes[p],
                        f = this.data[nt],
                        b = f.dataPoints,
                        ct = !0,
                        lt = f.id;
                    if(this._eventManager.objectMap[lt] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: nt
                        }, at = u(lt), e.fillStyle = at, b.length == 1 && (d = st), d < 1 ? d = 1 : d > st && (d = st), k = [], g.length > 0) {
                        for(rt = f._colorSet[h % f._colorSet.length], i.fillStyle = rt, i.strokeStyle = rt, i.lineWidth = f.lineThickness, i.setLineDash && i.setLineDash(y(f.lineDashType, f.lineThickness)), wt = d > 5 ? !1 : !1, h = 0; h < g.length; h++)
                            if((s = g[h], w = null, w = f.dataPointIndexes[s] >= 0 ? b[f.dataPointIndexes[s]] : {
                                    x: s,
                                    y: 0
                                }, !(s < t.axisX.dataInfo.viewPortMin) && !(s > t.axisX.dataInfo.viewPortMax)) && typeof w.y == "number") {
                                vt = t.dataPointYSums[s] !== 0 ? w.y / t.dataPointYSums[s] * 100 : 0;
                                var c = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (s - t.axisX.conversionParameters.minimum) + .5 << 0,
                                    o = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (vt - t.axisY.conversionParameters.minimum),
                                    ht = et[s] ? et[s] : 0;
                                if(o = o - ht, k.push({
                                        x: c,
                                        y: ot - ht
                                    }), et[s] = ot - o, ct) i.beginPath(), i.moveTo(c, o), n && (e.beginPath(), e.moveTo(c, o)), ct = !1;
                                else if(i.lineTo(c, o), n && e.lineTo(c, o), h % 250 == 0) {
                                    for(f.lineThickness > 0 && i.stroke(); k.length > 0;) l = k.pop(), i.lineTo(l.x, l.y), n && e.lineTo(l.x, l.y);
                                    i.closePath();
                                    i.globalAlpha = f.fillOpacity;
                                    i.fill();
                                    i.globalAlpha = 1;
                                    i.beginPath();
                                    i.moveTo(c, o);
                                    n && (e.closePath(), e.fill(), e.beginPath(), e.moveTo(c, o));
                                    k.push({
                                        x: c,
                                        y: ot - ht
                                    })
                                }
                                f.dataPointIndexes[s] >= 0 && (ut = f.dataPointIds[f.dataPointIndexes[s]], this._eventManager.objectMap[ut] = {
                                    id: ut,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: nt,
                                    dataPointIndex: f.dataPointIndexes[s],
                                    x1: c,
                                    y1: o
                                });
                                f.dataPointIndexes[s] >= 0 && w.markerSize !== 0 && (w.markerSize > 0 || f.markerSize > 0) && (it = f.getMarkerProperties(h, c, o, i), ft.push(it), markerColor = u(ut), n && ft.push({
                                    x: c,
                                    y: o,
                                    ctx: e,
                                    type: it.type,
                                    size: it.size,
                                    color: markerColor,
                                    borderColor: markerColor,
                                    borderThickness: it.borderThickness
                                }));
                                (w.indexLabel || f.indexLabel || w.indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedArea100",
                                    dataPoint: w,
                                    dataSeries: f,
                                    point: {
                                        x: c,
                                        y: o
                                    },
                                    direction: b[h].y >= 0 ? 1 : -1,
                                    color: rt
                                })
                            }
                        for(f.lineThickness > 0 && i.stroke(); k.length > 0;) l = k.pop(), i.lineTo(l.x, l.y), n && e.lineTo(l.x, l.y);
                        i.closePath();
                        i.globalAlpha = f.fillOpacity;
                        i.fill();
                        i.globalAlpha = 1;
                        i.beginPath();
                        i.moveTo(c, o);
                        n && (e.closePath(), e.fill(), e.beginPath(), e.moveTo(c, o))
                    }
                    delete f.dataPointIndexes
                }
                return a.drawMarkers(ft), i.restore(), n && e.restore(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xClipAnimation,
                    easingFunction: r.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderBubble = function(t) {
            var o = t.targetCanvasCtx || this.plotArea.ctx,
                ut = t.dataSeriesIndexes.length,
                k, w, g, it, c, i, nt, rt;
            if(!(ut <= 0)) {
                var s = this.plotArea,
                    i = 0,
                    v, y, h, ht = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    tt = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.width * .15 << 0,
                    et = t.axisX.dataInfo.minDiff,
                    b = s.width / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(et) / ut * .9 << 0;
                for(o.save(), n && this._eventManager.ghostCtx.save(), o.beginPath(), o.rect(s.x1, s.y1, s.width, s.height), o.clip(), n && (this._eventManager.ghostCtx.rect(s.x1, s.y1, s.width, s.height), this._eventManager.ghostCtx.clip()), k = -Infinity, w = Infinity, c = 0; c < t.dataSeriesIndexes.length; c++) {
                    var d = t.dataSeriesIndexes[c],
                        l = this.data[d],
                        f = l.dataPoints,
                        p = 0;
                    for(i = 0; i < f.length; i++)(h = h = f[i].getTime ? f[i].x.getTime() : f[i].x, h < t.axisX.dataInfo.viewPortMin || h > t.axisX.dataInfo.viewPortMax) || typeof f[i].z != "undefined" && (p = f[i].z, p > k && (k = p), p < w && (w = p))
                }
                for(g = Math.PI * 25, it = Math.max(Math.pow(Math.min(s.height, s.width) * .25 / 2, 2) * Math.PI, g), c = 0; c < t.dataSeriesIndexes.length; c++) {
                    var d = t.dataSeriesIndexes[c],
                        l = this.data[d],
                        f = l.dataPoints;
                    if(f.length == 1 && (b = tt), b < 1 ? b = 1 : b > tt && (b = tt), f.length > 0)
                        for(o.strokeStyle = "#4572A7 ", i = 0; i < f.length; i++)
                            if((h = h = f[i].getTime ? f[i].x.getTime() : f[i].x, !(h < t.axisX.dataInfo.viewPortMin) && !(h > t.axisX.dataInfo.viewPortMax)) && typeof f[i].y == "number") {
                                v = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (h - t.axisX.conversionParameters.minimum) + .5 << 0;
                                y = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (f[i].y - t.axisY.conversionParameters.minimum) + .5 << 0;
                                var p = f[i].z,
                                    ot = k === w ? it / 2 : g + (it - g) / (k - w) * (p - w),
                                    st = Math.max(Math.sqrt(ot / Math.PI) << 0, 1),
                                    ft = st * 2,
                                    e = l.getMarkerProperties(i, o);
                                e.size = ft;
                                o.globalAlpha = l.fillOpacity;
                                a.drawMarker(v, y, o, e.type, e.size, e.color, e.borderColor, e.borderThickness);
                                o.globalAlpha = 1;
                                nt = l.dataPointIds[i];
                                this._eventManager.objectMap[nt] = {
                                    id: nt,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: d,
                                    dataPointIndex: i,
                                    x1: v,
                                    y1: y,
                                    size: ft
                                };
                                rt = u(nt);
                                n && a.drawMarker(v, y, this._eventManager.ghostCtx, e.type, e.size, rt, rt, e.borderThickness);
                                (f[i].indexLabel || l.indexLabel || f[i].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bubble",
                                    dataPoint: f[i],
                                    dataSeries: l,
                                    point: {
                                        x: v,
                                        y: y
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: v - e.size / 2,
                                        y1: y - e.size / 2,
                                        x2: v + e.size / 2,
                                        y2: y + e.size / 2
                                    },
                                    color: null
                                })
                            }
                }
                return o.restore(), n && this._eventManager.ghostCtx.restore(), {
                    source: o,
                    dest: this.plotArea.ctx,
                    animationCallback: r.fadeInAnimation,
                    easingFunction: r.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderScatter = function(t) {
            var s = t.targetCanvasCtx || this.plotArea.ctx,
                nt = t.dataSeriesIndexes.length,
                p, f, i, w, g;
            if(!(nt <= 0)) {
                var o = this.plotArea,
                    f = 0,
                    h, c, v, rt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    b = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.width * .15 << 0,
                    it = t.axisX.dataInfo.minDiff,
                    y = o.width / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(it) / nt * .9 << 0;
                for(s.save(), n && this._eventManager.ghostCtx.save(), s.beginPath(), s.rect(o.x1, o.y1, o.width, o.height), s.clip(), n && (this._eventManager.ghostCtx.rect(o.x1, o.y1, o.width, o.height), this._eventManager.ghostCtx.clip()), p = 0; p < t.dataSeriesIndexes.length; p++) {
                    var tt = t.dataSeriesIndexes[p],
                        l = this.data[tt],
                        e = l.dataPoints;
                    if(e.length == 1 && (y = b), y < 1 ? y = 1 : y > b && (y = b), e.length > 0) {
                        s.strokeStyle = "#4572A7 ";
                        var ut = Math.pow(Math.min(o.height, o.width) * .3 / 2, 2) * Math.PI,
                            k = 0,
                            d = 0;
                        for(f = 0; f < e.length; f++)(v = v = e[f].getTime ? e[f].x.getTime() : e[f].x, v < t.axisX.dataInfo.viewPortMin || v > t.axisX.dataInfo.viewPortMax) || typeof e[f].y == "number" && ((h = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (v - t.axisX.conversionParameters.minimum) + .5 << 0, c = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (e[f].y - t.axisY.conversionParameters.minimum) + .5 << 0, i = l.getMarkerProperties(f, h, c, s), s.globalAlpha = l.fillOpacity, a.drawMarker(i.x, i.y, i.ctx, i.type, i.size, i.color, i.borderColor, i.borderThickness), s.globalAlpha = 1, Math.sqrt((k - h) * (k - h) + (d - c) * (d - c)) < Math.min(i.size, 5) && e.length > Math.min(this.plotArea.width, this.plotArea.height)) || (w = l.dataPointIds[f], this._eventManager.objectMap[w] = {
                            id: w,
                            objectType: "dataPoint",
                            dataSeriesIndex: tt,
                            dataPointIndex: f,
                            x1: h,
                            y1: c
                        }, g = u(w), n && a.drawMarker(i.x, i.y, this._eventManager.ghostCtx, i.type, i.size, g, g, i.borderThickness), (e[f].indexLabel || l.indexLabel || e[f].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                            chartType: "scatter",
                            dataPoint: e[f],
                            dataSeries: l,
                            point: {
                                x: h,
                                y: c
                            },
                            direction: 1,
                            bounds: {
                                x1: h - i.size / 2,
                                y1: c - i.size / 2,
                                x2: h + i.size / 2,
                                y2: c + i.size / 2
                            },
                            color: null
                        }), k = h, d = c))
                    }
                }
                return s.restore(), n && this._eventManager.ghostCtx.restore(), {
                    source: s,
                    dest: this.plotArea.ctx,
                    animationCallback: r.fadeInAnimation,
                    easingFunction: r.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderCandlestick = function(t) {
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                f = this._eventManager.ghostCtx,
                st = t.dataSeriesIndexes.length,
                it, ft, p, g;
            if(!(st <= 0)) {
                var y = null,
                    w = this.plotArea,
                    e = 0,
                    h, c, b, d, l, tt, ht = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    ut = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.width * .015,
                    et = t.axisX.dataInfo.minDiff,
                    k = w.width / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(et) * .7 << 0;
                for(k > ut ? k = ut : et === Infinity ? k = ut : k < 1 && (k = 1), i.save(), n && f.save(), i.beginPath(), i.rect(w.x1, w.y1, w.width, w.height), i.clip(), n && (f.rect(w.x1, w.y1, w.width, w.height), f.clip()), it = 0; it < t.dataSeriesIndexes.length; it++) {
                    var ot = t.dataSeriesIndexes[it],
                        a = this.data[ot],
                        s = a.dataPoints;
                    if(s.length > 0)
                        for(ft = k > 5 && a.bevelEnabled ? !0 : !1, e = 0; e < s.length; e++)
                            if((tt = s[e].getTime ? s[e].x.getTime() : s[e].x, !(tt < t.axisX.dataInfo.viewPortMin) && !(tt > t.axisX.dataInfo.viewPortMax)) && s[e].y !== null && s[e].y.length && typeof s[e].y[0] == "number" && typeof s[e].y[1] == "number" && typeof s[e].y[2] == "number" && typeof s[e].y[3] == "number") {
                                h = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (tt - t.axisX.conversionParameters.minimum) + .5 << 0;
                                c = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (s[e].y[0] - t.axisY.conversionParameters.minimum) + .5 << 0;
                                b = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (s[e].y[1] - t.axisY.conversionParameters.minimum) + .5 << 0;
                                d = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (s[e].y[2] - t.axisY.conversionParameters.minimum) + .5 << 0;
                                l = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (s[e].y[3] - t.axisY.conversionParameters.minimum) + .5 << 0;
                                p = h - k / 2 << 0;
                                g = p + k << 0;
                                y = s[e].color ? s[e].color : a._colorSet[0];
                                var nt = Math.round(Math.max(1, k * .15)),
                                    v = nt % 2 == 0 ? 0 : .5,
                                    rt = a.dataPointIds[e];
                                this._eventManager.objectMap[rt] = {
                                    id: rt,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: ot,
                                    dataPointIndex: e,
                                    x1: p,
                                    y1: c,
                                    x2: g,
                                    y2: b,
                                    x3: h,
                                    y3: d,
                                    x4: h,
                                    y4: l,
                                    borderThickness: nt,
                                    color: y
                                };
                                i.strokeStyle = y;
                                i.beginPath();
                                i.lineWidth = nt;
                                f.lineWidth = Math.max(nt, 4);
                                a.type === "candlestick" ? (i.moveTo(h - v, b), i.lineTo(h - v, Math.min(c, l)), i.stroke(), i.moveTo(h - v, Math.max(c, l)), i.lineTo(h - v, d), i.stroke(), o(i, p, Math.min(c, l), g, Math.max(c, l), s[e].y[0] <= s[e].y[3] ? a.risingColor : y, nt, y, ft, ft, !1, !1, a.fillOpacity), n && (y = u(rt), f.strokeStyle = y, f.moveTo(h - v, b), f.lineTo(h - v, Math.min(c, l)), f.stroke(), f.moveTo(h - v, Math.max(c, l)), f.lineTo(h - v, d), f.stroke(), o(f, p, Math.min(c, l), g, Math.max(c, l), y, 0, null, !1, !1, !1, !1))) : a.type === "ohlc" && (i.moveTo(h - v, b), i.lineTo(h - v, d), i.stroke(), i.beginPath(), i.moveTo(h, c), i.lineTo(p, c), i.stroke(), i.beginPath(), i.moveTo(h, l), i.lineTo(g, l), i.stroke(), n && (y = u(rt), f.strokeStyle = y, f.moveTo(h - v, b), f.lineTo(h - v, d), f.stroke(), f.beginPath(), f.moveTo(h, c), f.lineTo(p, c), f.stroke(), f.beginPath(), f.moveTo(h, l), f.lineTo(g, l), f.stroke()));
                                (s[e].indexLabel || a.indexLabel || s[e].indexLabelFormatter || a.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: a.type,
                                    dataPoint: s[e],
                                    dataSeries: a,
                                    point: {
                                        x: p + (g - p) / 2,
                                        y: b
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: p,
                                        y1: Math.min(b, d),
                                        x2: g,
                                        y2: Math.max(b, d)
                                    },
                                    color: y
                                })
                            }
                }
                return i.restore(), n && f.restore(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.fadeInAnimation,
                    easingFunction: r.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderRangeColumn = function(t) {
            var y = t.targetCanvasCtx || this.plotArea.ctx,
                ft = t.dataSeriesIndexes.length,
                w, g, h, v, e, s, rt, k, ut;
            if(!(ft <= 0)) {
                var p = null,
                    l = this.plotArea,
                    i = 0,
                    nt, e, s, b, et = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    d = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.width * .03,
                    tt = t.axisX.dataInfo.minDiff,
                    a = l.width / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(tt) / t.plotType.totalDataSeries * .9 << 0;
                for(a > d ? a = d : tt === Infinity ? a = d / t.plotType.totalDataSeries * .9 : a < 1 && (a = 1), y.save(), n && this._eventManager.ghostCtx.save(), y.beginPath(), y.rect(l.x1, l.y1, l.width, l.height), y.clip(), n && (this._eventManager.ghostCtx.rect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.clip()), w = 0; w < t.dataSeriesIndexes.length; w++) {
                    var it = t.dataSeriesIndexes[w],
                        c = this.data[it],
                        f = c.dataPoints;
                    if(f.length > 0)
                        for(g = a > 5 && c.bevelEnabled ? !0 : !1, i = 0; i < f.length; i++)(b = f[i].getTime ? f[i].x.getTime() : f[i].x, b < t.axisX.dataInfo.viewPortMin || b > t.axisX.dataInfo.viewPortMax) || f[i].y !== null && f[i].y.length && typeof f[i].y[0] == "number" && typeof f[i].y[1] == "number" && (nt = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (b - t.axisX.conversionParameters.minimum) + .5 << 0, e = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (f[i].y[0] - t.axisY.conversionParameters.minimum) + .5 << 0, s = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (f[i].y[1] - t.axisY.conversionParameters.minimum) + .5 << 0, h = nt - t.plotType.totalDataSeries * a / 2 + (t.previousDataSeriesCount + w) * a << 0, v = h + a << 0, p = f[i].color ? f[i].color : c._colorSet[i % c._colorSet.length], e > s && (rt = e, e = s, s = rt), k = c.dataPointIds[i], this._eventManager.objectMap[k] = {
                            id: k,
                            objectType: "dataPoint",
                            dataSeriesIndex: it,
                            dataPointIndex: i,
                            x1: h,
                            y1: e,
                            x2: v,
                            y2: s
                        }, ut = 0, o(y, h, e, v, s, p, ut, p, g, g, !1, !1, c.fillOpacity), p = u(k), n && o(this._eventManager.ghostCtx, h, e, v, s, p, 0, null, !1, !1, !1, !1), (f[i].indexLabel || c.indexLabel || f[i].indexLabelFormatter || c.indexLabelFormatter) && (this._indexLabels.push({
                            chartType: "rangeColumn",
                            dataPoint: f[i],
                            dataSeries: c,
                            indexKeyword: 0,
                            point: {
                                x: h + (v - h) / 2,
                                y: f[i].y[1] >= f[i].y[0] ? s : e
                            },
                            direction: f[i].y[1] >= f[i].y[0] ? -1 : 1,
                            bounds: {
                                x1: h,
                                y1: Math.min(e, s),
                                x2: v,
                                y2: Math.max(e, s)
                            },
                            color: p
                        }), this._indexLabels.push({
                            chartType: "rangeColumn",
                            dataPoint: f[i],
                            dataSeries: c,
                            indexKeyword: 1,
                            point: {
                                x: h + (v - h) / 2,
                                y: f[i].y[1] >= f[i].y[0] ? e : s
                            },
                            direction: f[i].y[1] >= f[i].y[0] ? 1 : -1,
                            bounds: {
                                x1: h,
                                y1: Math.min(e, s),
                                x2: v,
                                y2: Math.max(e, s)
                            },
                            color: p
                        })))
                }
                return y.restore(), n && this._eventManager.ghostCtx.restore(), {
                    source: y,
                    dest: this.plotArea.ctx,
                    animationCallback: r.fadeInAnimation,
                    easingFunction: r.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderRangeBar = function(t) {
            var v = t.targetCanvasCtx || this.plotArea.ctx,
                ut = t.dataSeriesIndexes.length,
                w, it, h, y, rt, k;
            if(!(ut <= 0)) {
                var p = null,
                    l = this.plotArea,
                    i = 0,
                    e, s, g, b, ft = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0,
                    d = this.dataPointMaxWidth ? this.dataPointMaxWidth : Math.min(this.height * .15, this.plotArea.height / t.plotType.totalDataSeries * .9) << 0,
                    nt = t.axisX.dataInfo.minDiff,
                    a = l.height / Math.abs(t.axisX.viewportMaximum - t.axisX.viewportMinimum) * Math.abs(nt) / t.plotType.totalDataSeries * .9 << 0;
                for(a > d ? a = d : nt === Infinity ? a = d / t.plotType.totalDataSeries * .9 : a < 1 && (a = 1), v.save(), n && this._eventManager.ghostCtx.save(), v.beginPath(), v.rect(l.x1, l.y1, l.width, l.height), v.clip(), n && (this._eventManager.ghostCtx.rect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.clip()), w = 0; w < t.dataSeriesIndexes.length; w++) {
                    var tt = t.dataSeriesIndexes[w],
                        c = this.data[tt],
                        f = c.dataPoints;
                    if(f.length > 0)
                        for(it = a > 5 && c.bevelEnabled ? !0 : !1, v.strokeStyle = "#4572A7 ", i = 0; i < f.length; i++)(b = f[i].getTime ? f[i].x.getTime() : f[i].x, b < t.axisX.dataInfo.viewPortMin || b > t.axisX.dataInfo.viewPortMax) || f[i].y !== null && f[i].y.length && typeof f[i].y[0] == "number" && typeof f[i].y[1] == "number" && (e = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (f[i].y[0] - t.axisY.conversionParameters.minimum) + .5 << 0, s = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (f[i].y[1] - t.axisY.conversionParameters.minimum) + .5 << 0, g = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (b - t.axisX.conversionParameters.minimum) + .5 << 0, h = g - t.plotType.totalDataSeries * a / 2 + (t.previousDataSeriesCount + w) * a << 0, y = h + a << 0, e > s && (rt = e, e = s, s = rt), p = f[i].color ? f[i].color : c._colorSet[i % c._colorSet.length], o(v, e, h, s, y, p, 0, null, it, !1, !1, !1, c.fillOpacity), k = c.dataPointIds[i], this._eventManager.objectMap[k] = {
                            id: k,
                            objectType: "dataPoint",
                            dataSeriesIndex: tt,
                            dataPointIndex: i,
                            x1: e,
                            y1: h,
                            x2: s,
                            y2: y
                        }, p = u(k), n && o(this._eventManager.ghostCtx, e, h, s, y, p, 0, null, !1, !1, !1, !1), (f[i].indexLabel || c.indexLabel || f[i].indexLabelFormatter || c.indexLabelFormatter) && (this._indexLabels.push({
                            chartType: "rangeBar",
                            dataPoint: f[i],
                            dataSeries: c,
                            indexKeyword: 0,
                            point: {
                                x: f[i].y[1] >= f[i].y[0] ? e : s,
                                y: h + (y - h) / 2
                            },
                            direction: f[i].y[1] >= f[i].y[0] ? -1 : 1,
                            bounds: {
                                x1: Math.min(e, s),
                                y1: h,
                                x2: Math.max(e, s),
                                y2: y
                            },
                            color: p
                        }), this._indexLabels.push({
                            chartType: "rangeBar",
                            dataPoint: f[i],
                            dataSeries: c,
                            indexKeyword: 1,
                            point: {
                                x: f[i].y[1] >= f[i].y[0] ? s : e,
                                y: h + (y - h) / 2
                            },
                            direction: f[i].y[1] >= f[i].y[0] ? 1 : -1,
                            bounds: {
                                x1: Math.min(e, s),
                                y1: h,
                                x2: Math.max(e, s),
                                y2: y
                            },
                            color: p
                        })))
                }
                return v.restore(), n && this._eventManager.ghostCtx.restore(), {
                    source: v,
                    dest: this.plotArea.ctx,
                    animationCallback: r.fadeInAnimation,
                    easingFunction: r.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderRangeArea = function(t) {
            function ft() {
                var n, t;
                if(ut) {
                    for(n = null, s.lineThickness > 0 && i.stroke(), t = v.length - 1; t >= 0; t--) n = v[t], i.lineTo(n.x, n.y), h.lineTo(n.x, n.y);
                    if(i.closePath(), i.globalAlpha = s.fillOpacity, i.fill(), i.globalAlpha = 1, h.fill(), s.lineThickness > 0) {
                        for(i.beginPath(), i.moveTo(n.x, n.y), t = 0; t < v.length; t++) n = v[t], i.lineTo(n.x, n.y);
                        i.stroke()
                    }
                    i.beginPath();
                    i.moveTo(o, c);
                    h.beginPath();
                    h.moveTo(o, c);
                    ut = {
                        x: o,
                        y: c
                    };
                    v = [];
                    v.push({
                        x: o,
                        y: w
                    })
                }
            }
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                ht = t.dataSeriesIndexes.length,
                nt, ot, d, it, g, l, b;
            if(!(ht <= 0)) {
                var h = this._eventManager.ghostCtx,
                    ct = t.axisX.lineCoordinates,
                    lt = t.axisY.lineCoordinates,
                    k = [],
                    p = this.plotArea;
                for(i.save(), n && h.save(), i.beginPath(), i.rect(p.x1, p.y1, p.width, p.height), i.clip(), n && (h.beginPath(), h.rect(p.x1, p.y1, p.width, p.height), h.clip()), nt = 0; nt < t.dataSeriesIndexes.length; nt++) {
                    var v = [],
                        rt = t.dataSeriesIndexes[nt],
                        s = this.data[rt],
                        e = s.dataPoints,
                        et = s.id;
                    this._eventManager.objectMap[et] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: rt
                    };
                    ot = u(et);
                    h.fillStyle = ot;
                    k = [];
                    var st = !0,
                        f = 0,
                        o, c, w, tt, at = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) + .5 << 0,
                        ut = null;
                    if(e.length > 0) {
                        for(d = s._colorSet[f % s._colorSet.length], i.fillStyle = d, i.strokeStyle = d, i.lineWidth = s.lineThickness, i.setLineDash && i.setLineDash(y(s.lineDashType, s.lineThickness)), it = !0; f < e.length; f++)
                            if(tt = e[f].x.getTime ? e[f].x.getTime() : e[f].x, !(tt < t.axisX.dataInfo.viewPortMin) && !(tt > t.axisX.dataInfo.viewPortMax)) {
                                if(e[f].y === null || !e[f].y.length || typeof e[f].y[0] != "number" || typeof e[f].y[1] != "number") {
                                    ft();
                                    it = !0;
                                    continue
                                }
                                o = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (tt - t.axisX.conversionParameters.minimum) + .5 << 0;
                                c = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (e[f].y[0] - t.axisY.conversionParameters.minimum) + .5 << 0;
                                w = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (e[f].y[1] - t.axisY.conversionParameters.minimum) + .5 << 0;
                                st || it ? (i.beginPath(), i.moveTo(o, c), ut = {
                                    x: o,
                                    y: c
                                }, v = [], v.push({
                                    x: o,
                                    y: w
                                }), n && (h.beginPath(), h.moveTo(o, c)), st = !1, it = !1) : (i.lineTo(o, c), v.push({
                                    x: o,
                                    y: w
                                }), n && h.lineTo(o, c), f % 250 == 0 && ft());
                                g = s.dataPointIds[f];
                                this._eventManager.objectMap[g] = {
                                    id: g,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: rt,
                                    dataPointIndex: f,
                                    x1: o,
                                    y1: c,
                                    y2: w
                                };
                                e[f].markerSize !== 0 && (e[f].markerSize > 0 || s.markerSize > 0) && (l = s.getMarkerProperties(f, o, w, i), k.push(l), b = u(g), n && k.push({
                                    x: o,
                                    y: w,
                                    ctx: h,
                                    type: l.type,
                                    size: l.size,
                                    color: b,
                                    borderColor: b,
                                    borderThickness: l.borderThickness
                                }), l = s.getMarkerProperties(f, o, c, i), k.push(l), b = u(g), n && k.push({
                                    x: o,
                                    y: c,
                                    ctx: h,
                                    type: l.type,
                                    size: l.size,
                                    color: b,
                                    borderColor: b,
                                    borderThickness: l.borderThickness
                                }));
                                (e[f].indexLabel || s.indexLabel || e[f].indexLabelFormatter || s.indexLabelFormatter) && (this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: e[f],
                                    dataSeries: s,
                                    indexKeyword: 0,
                                    point: {
                                        x: o,
                                        y: c
                                    },
                                    direction: e[f].y[0] <= e[f].y[1] ? -1 : 1,
                                    color: d
                                }), this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: e[f],
                                    dataSeries: s,
                                    indexKeyword: 1,
                                    point: {
                                        x: o,
                                        y: w
                                    },
                                    direction: e[f].y[0] <= e[f].y[1] ? 1 : -1,
                                    color: d
                                }))
                            }
                        ft();
                        a.drawMarkers(k)
                    }
                }
                return i.restore(), n && this._eventManager.ghostCtx.restore(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xClipAnimation,
                    easingFunction: r.easing.linear,
                    animationBase: 0
                }
            }
        };
        t.prototype.renderRangeSplineArea = function(t) {
            function ft() {
                var r = kt(tt, 2),
                    t;
                if(r.length > 0) {
                    for(i.beginPath(), i.moveTo(r[0].x, r[0].y), n && (s.beginPath(), s.moveTo(r[0].x, r[0].y)), t = 0; t < r.length - 3; t += 3) i.bezierCurveTo(r[t + 1].x, r[t + 1].y, r[t + 2].x, r[t + 2].y, r[t + 3].x, r[t + 3].y), n && s.bezierCurveTo(r[t + 1].x, r[t + 1].y, r[t + 2].x, r[t + 2].y, r[t + 3].x, r[t + 3].y);
                    for(o.lineThickness > 0 && i.stroke(), r = kt(h, 2), i.lineTo(h[h.length - 1].x, h[h.length - 1].y), t = r.length - 1; t > 2; t -= 3) i.bezierCurveTo(r[t - 1].x, r[t - 1].y, r[t - 2].x, r[t - 2].y, r[t - 3].x, r[t - 3].y), n && s.bezierCurveTo(r[t - 1].x, r[t - 1].y, r[t - 2].x, r[t - 2].y, r[t - 3].x, r[t - 3].y);
                    if(i.closePath(), i.globalAlpha = o.fillOpacity, i.fill(), i.globalAlpha = 1, o.lineThickness > 0) {
                        for(i.beginPath(), i.moveTo(h[h.length - 1].x, h[h.length - 1].y), t = r.length - 1; t > 2; t -= 3) i.bezierCurveTo(r[t - 1].x, r[t - 1].y, r[t - 2].x, r[t - 2].y, r[t - 3].x, r[t - 3].y), n && s.bezierCurveTo(r[t - 1].x, r[t - 1].y, r[t - 2].x, r[t - 2].y, r[t - 3].x, r[t - 3].y);
                        i.stroke()
                    }
                    i.beginPath();
                    n && (s.closePath(), s.fill())
                }
            }
            var i = t.targetCanvasCtx || this.plotArea.ctx,
                et = t.dataSeriesIndexes.length,
                g, ut, d, c, p;
            if(!(et <= 0)) {
                var s = this._eventManager.ghostCtx,
                    ot = t.axisX.lineCoordinates,
                    st = t.axisY.lineCoordinates,
                    w = [],
                    v = this.plotArea;
                for(i.save(), n && s.save(), i.beginPath(), i.rect(v.x1, v.y1, v.width, v.height), i.clip(), n && (s.beginPath(), s.rect(v.x1, v.y1, v.width, v.height), s.clip()), g = 0; g < t.dataSeriesIndexes.length; g++) {
                    var it = t.dataSeriesIndexes[g],
                        o = this.data[it],
                        e = o.dataPoints,
                        rt = o.id;
                    this._eventManager.objectMap[rt] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: it
                    };
                    ut = u(rt);
                    s.fillStyle = ut;
                    w = [];
                    var f = 0,
                        l, b, k, nt, ht = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) + .5 << 0,
                        tt = [],
                        h = [];
                    if(e.length > 0) {
                        for(color = o._colorSet[f % o._colorSet.length], i.fillStyle = color, i.strokeStyle = color, i.lineWidth = o.lineThickness, i.setLineDash && i.setLineDash(y(o.lineDashType, o.lineThickness)); f < e.length; f++)
                            if(nt = e[f].x.getTime ? e[f].x.getTime() : e[f].x, !(nt < t.axisX.dataInfo.viewPortMin) && !(nt > t.axisX.dataInfo.viewPortMax)) {
                                if(e[f].y === null || !e[f].y.length || typeof e[f].y[0] != "number" || typeof e[f].y[1] != "number") {
                                    f > 0 && (ft(), tt = [], h = []);
                                    continue
                                }
                                l = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (nt - t.axisX.conversionParameters.minimum) + .5 << 0;
                                b = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (e[f].y[0] - t.axisY.conversionParameters.minimum) + .5 << 0;
                                k = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (e[f].y[1] - t.axisY.conversionParameters.minimum) + .5 << 0;
                                d = o.dataPointIds[f];
                                this._eventManager.objectMap[d] = {
                                    id: d,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: it,
                                    dataPointIndex: f,
                                    x1: l,
                                    y1: b,
                                    y2: k
                                };
                                tt[tt.length] = {
                                    x: l,
                                    y: b
                                };
                                h[h.length] = {
                                    x: l,
                                    y: k
                                };
                                e[f].markerSize !== 0 && (e[f].markerSize > 0 || o.markerSize > 0) && (c = o.getMarkerProperties(f, l, b, i), w.push(c), p = u(d), n && w.push({
                                    x: l,
                                    y: b,
                                    ctx: s,
                                    type: c.type,
                                    size: c.size,
                                    color: p,
                                    borderColor: p,
                                    borderThickness: c.borderThickness
                                }), c = o.getMarkerProperties(f, l, k, i), w.push(c), p = u(d), n && w.push({
                                    x: l,
                                    y: k,
                                    ctx: s,
                                    type: c.type,
                                    size: c.size,
                                    color: p,
                                    borderColor: p,
                                    borderThickness: c.borderThickness
                                }));
                                (e[f].indexLabel || o.indexLabel || e[f].indexLabelFormatter || o.indexLabelFormatter) && (this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: e[f],
                                    dataSeries: o,
                                    indexKeyword: 0,
                                    point: {
                                        x: l,
                                        y: b
                                    },
                                    direction: e[f].y[0] <= e[f].y[1] ? -1 : 1,
                                    color: color
                                }), this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: e[f],
                                    dataSeries: o,
                                    indexKeyword: 1,
                                    point: {
                                        x: l,
                                        y: k
                                    },
                                    direction: e[f].y[0] <= e[f].y[1] ? 1 : -1,
                                    color: color
                                }))
                            }
                        ft();
                        a.drawMarkers(w)
                    }
                }
                return i.restore(), n && this._eventManager.ghostCtx.restore(), {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: r.xClipAnimation,
                    easingFunction: r.easing.linear,
                    animationBase: 0
                }
            }
        };
        dt = function(t, i, r, u, f, e, o, s, h) {
            if(typeof s == "undefined" && (s = 1), !n) {
                var c = Number((o % (2 * Math.PI)).toFixed(8)),
                    l = Number((e % (2 * Math.PI)).toFixed(8));
                l === c && (o -= .0001)
            }
            t.save();
            t.globalAlpha = s;
            f === "pie" ? (t.beginPath(), t.moveTo(i.x, i.y), t.arc(i.x, i.y, r, e, o, !1), t.fillStyle = u, t.strokeStyle = "white", t.lineWidth = 2, t.closePath(), t.fill()) : f === "doughnut" && (t.beginPath(), t.arc(i.x, i.y, r, e, o, !1), t.arc(i.x, i.y, h * r, o, e, !0), t.closePath(), t.fillStyle = u, t.strokeStyle = "white", t.lineWidth = 2, t.fill());
            t.globalAlpha = 1;
            t.restore()
        };
        t.prototype.renderPie = function(n) {
            function st() {
                var w, b, it, a, n;
                if(i && r) {
                    var y = 0,
                        p = 0,
                        k = 0,
                        g = 0;
                    for(o = 0; o < r.length; o++) {
                        var l = r[o],
                            tt = i.dataPointIds[o],
                            n = {
                                id: tt,
                                objectType: "dataPoint",
                                dataPointIndex: o,
                                dataSeriesIndex: 0
                            };
                        t.push(n);
                        w = {
                            percent: null,
                            total: null
                        };
                        b = null;
                        w = u.getPercentAndTotal(i, l);
                        (i.indexLabelFormatter || l.indexLabelFormatter) && (b = {
                            chart: u._options,
                            dataSeries: i,
                            dataPoint: l,
                            total: w.total,
                            percent: w.percent
                        });
                        it = l.indexLabelFormatter ? l.indexLabelFormatter(b) : l.indexLabel ? u.replaceKeywordsWithValue(l.indexLabel, l, i, o) : i.indexLabelFormatter ? i.indexLabelFormatter(b) : i.indexLabel ? u.replaceKeywordsWithValue(i.indexLabel, l, i, o) : l.label ? l.label : "";
                        u._eventManager.objectMap[tt] = n;
                        n.center = {
                            x: e.x,
                            y: e.y
                        };
                        n.y = l.y;
                        n.radius = s;
                        n.percentInnerRadius = nt;
                        n.indexLabelText = it;
                        n.indexLabelPlacement = i.indexLabelPlacement;
                        n.indexLabelLineColor = l.indexLabelLineColor ? l.indexLabelLineColor : i.indexLabelLineColor ? i.indexLabelLineColor : l.color ? l.color : i._colorSet[o % i._colorSet.length];
                        n.indexLabelLineThickness = l.indexLabelLineThickness ? l.indexLabelLineThickness : i.indexLabelLineThickness;
                        n.indexLabelLineDashType = l.indexLabelLineDashType ? l.indexLabelLineDashType : i.indexLabelLineDashType;
                        n.indexLabelFontColor = l.indexLabelFontColor ? l.indexLabelFontColor : i.indexLabelFontColor;
                        n.indexLabelFontStyle = l.indexLabelFontStyle ? l.indexLabelFontStyle : i.indexLabelFontStyle;
                        n.indexLabelFontWeight = l.indexLabelFontWeight ? l.indexLabelFontWeight : i.indexLabelFontWeight;
                        n.indexLabelFontSize = l.indexLabelFontSize ? l.indexLabelFontSize : i.indexLabelFontSize;
                        n.indexLabelFontFamily = l.indexLabelFontFamily ? l.indexLabelFontFamily : i.indexLabelFontFamily;
                        n.indexLabelBackgroundColor = l.indexLabelBackgroundColor ? l.indexLabelBackgroundColor : i.indexLabelBackgroundColor ? i.indexLabelBackgroundColor : null;
                        n.indexLabelMaxWidth = l.indexLabelMaxWidth ? l.indexLabelMaxWidth : i.indexLabelMaxWidth ? i.indexLabelMaxWidth : f.width * .33;
                        n.indexLabelWrap = typeof l.indexLabelWrap != "undefined" ? l.indexLabelWrap : i.indexLabelWrap;
                        n.startAngle = o === 0 ? i.startAngle ? i.startAngle / 180 * Math.PI : 0 : t[o - 1].endAngle;
                        n.startAngle = (n.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        n.endAngle = n.startAngle + 2 * Math.PI / d * Math.abs(l.y);
                        a = (n.endAngle + n.startAngle) / 2;
                        a = (a + 2 * Math.PI) % (2 * Math.PI);
                        n.midAngle = a;
                        n.midAngle > Math.PI / 2 - h && n.midAngle < Math.PI / 2 + h ? ((y === 0 || t[k].midAngle > n.midAngle) && (k = o), y++) : n.midAngle > 3 * Math.PI / 2 - h && n.midAngle < 3 * Math.PI / 2 + h && ((p === 0 || t[g].midAngle > n.midAngle) && (g = o), p++);
                        n.hemisphere = a > Math.PI / 2 && a <= 3 * Math.PI / 2 ? "left" : "right";
                        n.indexLabelTextBlock = new c(u.plotArea.ctx, {
                            fontSize: n.indexLabelFontSize,
                            fontFamily: n.indexLabelFontFamily,
                            fontColor: n.indexLabelFontColor,
                            fontStyle: n.indexLabelFontStyle,
                            fontWeight: n.indexLabelFontWeight,
                            horizontalAlign: "left",
                            backgroundColor: n.indexLabelBackgroundColor,
                            maxWidth: n.indexLabelMaxWidth,
                            maxHeight: n.indexLabelWrap ? n.indexLabelFontSize * 5 : n.indexLabelFontSize * 1.5,
                            text: n.indexLabelText,
                            padding: 0,
                            textBaseline: "top"
                        });
                        n.indexLabelTextBlock.measureText()
                    }
                    var rt = 0,
                        ut = 0,
                        v = !1;
                    for(o = 0; o < r.length; o++) n = t[(k + o) % r.length], y > 1 && n.midAngle > Math.PI / 2 - h && n.midAngle < Math.PI / 2 + h && (rt <= y / 2 && !v ? (n.hemisphere = "right", rt++) : (n.hemisphere = "left", v = !0));
                    for(v = !1, o = 0; o < r.length; o++) n = t[(g + o) % r.length], p > 1 && n.midAngle > 3 * Math.PI / 2 - h && n.midAngle < 3 * Math.PI / 2 + h && (ut <= p / 2 && !v ? (n.hemisphere = "left", ut++) : (n.hemisphere = "right", v = !0))
                }
            }

            function ht() {
                var f = u.plotArea.ctx,
                    l, o, v, n, e, h, c;
                for(f.fillStyle = "black", f.strokeStyle = "grey", l = 16, f.textBaseline = "middle", f.lineJoin = "round", o = 0, v = 0, o = 0; o < r.length; o++)(n = t[o], n.indexLabelText) && (n.indexLabelTextBlock.y -= n.indexLabelTextBlock.height / 2, e = 0, e = n.hemisphere === "left" ? i.indexLabelPlacement !== "inside" ? -(n.indexLabelTextBlock.width + a) : -n.indexLabelTextBlock.width / 2 : i.indexLabelPlacement !== "inside" ? a : -n.indexLabelTextBlock.width / 2, n.indexLabelTextBlock.x += e, n.indexLabelTextBlock.render(!0), n.indexLabelTextBlock.x -= e, n.indexLabelTextBlock.y += n.indexLabelTextBlock.height / 2, n.indexLabelPlacement !== "inside" && (h = n.center.x + s * Math.cos(n.midAngle), c = n.center.y + s * Math.sin(n.midAngle), f.strokeStyle = n.indexLabelLineColor, f.lineWidth = n.indexLabelLineThickness, f.setLineDash && f.setLineDash(y(n.indexLabelLineDashType, n.indexLabelLineThickness)), f.beginPath(), f.moveTo(h, c), f.lineTo(n.indexLabelTextBlock.x, n.indexLabelTextBlock.y), f.lineTo(n.indexLabelTextBlock.x + (n.hemisphere === "left" ? -a : a), n.indexLabelTextBlock.y), f.stroke()), f.lineJoin = "miter")
            }

            function ct(n) {
                var s = u.plotArea.ctx,
                    h, e, a;
                for(s.clearRect(f.x1, f.y1, f.width, f.height), s.fillStyle = u.backgroundColor, s.fillRect(f.x1, f.y1, f.width, f.height), h = t[0].startAngle + 2 * Math.PI * n, e = 0; e < r.length; e++) {
                    var c = e === 0 ? t[e].startAngle : o,
                        o = c + (t[e].endAngle - t[e].startAngle),
                        l = !1;
                    if(o > h && (o = h, l = !0), a = r[e].color ? r[e].color : i._colorSet[e % i._colorSet.length], o > c && dt(u.plotArea.ctx, t[e].center, t[e].radius, a, i.type, c, o, i.fillOpacity, t[e].percentInnerRadius), l) break
                }
            }

            function ut(n) {
                var c = u.plotArea.ctx,
                    o, l, a, h, w;
                for(c.clearRect(f.x1, f.y1, f.width, f.height), c.fillStyle = u.backgroundColor, c.fillRect(f.x1, f.y1, f.width, f.height), o = 0; o < r.length; o++)
                    if(l = t[o].startAngle, a = t[o].endAngle, a > l) {
                        var v = s * .07 * Math.cos(t[o].midAngle),
                            y = s * .07 * Math.sin(t[o].midAngle),
                            p = !1;
                        r[o].exploded ? (Math.abs(t[o].center.x - (e.x + v)) > 1e-9 || Math.abs(t[o].center.y - (e.y + y)) > 1e-9) && (t[o].center.x = e.x + v * n, t[o].center.y = e.y + y * n, p = !0) : (Math.abs(t[o].center.x - e.x) > 0 || Math.abs(t[o].center.y - e.y) > 0) && (t[o].center.x = e.x + v * (1 - n), t[o].center.y = e.y + y * (1 - n), p = !0);
                        p && (h = {}, h.dataSeries = i, h.dataPoint = i.dataPoints[o], h.index = o, u._toolTip.highlightObjects([h]));
                        w = r[o].color ? r[o].color : i._colorSet[o % i._colorSet.length];
                        dt(u.plotArea.ctx, t[o].center, t[o].radius, w, i.type, l, a, i.fillOpacity, t[o].percentInnerRadius)
                    }
                ht()
            }

            function lt(n, t) {
                var i = {
                        x1: n.indexLabelTextBlock.x,
                        y1: n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2,
                        x2: n.indexLabelTextBlock.x + n.indexLabelTextBlock.width,
                        y2: n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2
                    },
                    r = {
                        x1: t.indexLabelTextBlock.x,
                        y1: t.indexLabelTextBlock.y - t.indexLabelTextBlock.height / 2,
                        x2: t.indexLabelTextBlock.x + t.indexLabelTextBlock.width,
                        y2: t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2
                    };
                return i.x2 < r.x1 - a || i.x1 > r.x2 + a || i.y1 > r.y2 + a || i.y2 < r.y1 - a ? !1 : !0
            }

            function b(n, t) {
                var i = {
                        y: n.indexLabelTextBlock.y,
                        y1: n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2,
                        y2: n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2
                    },
                    r = {
                        y: t.indexLabelTextBlock.y,
                        y1: t.indexLabelTextBlock.y - t.indexLabelTextBlock.height / 2,
                        y2: t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2
                    };
                return r.y > i.y ? r.y1 - i.y2 : i.y1 - r.y2
            }

            function tt(n) {
                for(var i = null, u = 1; u < r.length; u++)
                    if(i = (n + u + t.length) % t.length, t[i].hemisphere !== t[n].hemisphere) {
                        i = null;
                        break
                    } else if(t[i].indexLabelText && i !== n && (b(t[i], t[n]) < 0 || (t[n].hemisphere === "right" ? t[i].indexLabelTextBlock.y >= t[n].indexLabelTextBlock.y : t[i].indexLabelTextBlock.y <= t[n].indexLabelTextBlock.y))) break;
                    else i = null;
                return i
            }

            function at(n) {
                for(var i = null, u = 1; u < r.length; u++)
                    if(i = (n - u + t.length) % t.length, t[i].hemisphere !== t[n].hemisphere) {
                        i = null;
                        break
                    } else if(t[i].indexLabelText && t[i].hemisphere === t[n].hemisphere && i !== n && (b(t[i], t[n]) < 0 || (t[n].hemisphere === "right" ? t[i].indexLabelTextBlock.y <= t[n].indexLabelTextBlock.y : t[i].indexLabelTextBlock.y >= t[n].indexLabelTextBlock.y))) break;
                    else i = null;
                return i
            }

            function v(n, i) {
                var u, it, et, y, a, rt, o;
                i = i || 0;
                var b = 0,
                    nt = e.y - indexLabelRadius * 1,
                    ut = e.y + indexLabelRadius * 1;
                if(n >= 0 && n < r.length) {
                    if(u = t[n], i < 0 && u.indexLabelTextBlock.y < nt || i > 0 && u.indexLabelTextBlock.y > ut) return 0;
                    var f = i,
                        ft = 0,
                        st = 0,
                        ht = 0,
                        ct = 0,
                        lt = 0;
                    f < 0 ? u.indexLabelTextBlock.y - u.indexLabelTextBlock.height / 2 > nt && u.indexLabelTextBlock.y - u.indexLabelTextBlock.height / 2 + f < nt && (f = -(nt - (u.indexLabelTextBlock.y - u.indexLabelTextBlock.height / 2 + f))) : u.indexLabelTextBlock.y + u.indexLabelTextBlock.height / 2 < nt && u.indexLabelTextBlock.y + u.indexLabelTextBlock.height / 2 + f > ut && (f = u.indexLabelTextBlock.y + u.indexLabelTextBlock.height / 2 + f - ut);
                    it = u.indexLabelTextBlock.y + f;
                    et = 0;
                    et = u.hemisphere === "right" ? e.x + Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(it - e.y, 2)) : e.x - Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(it - e.y, 2));
                    st = e.x + s * Math.cos(u.midAngle);
                    ht = e.y + s * Math.sin(u.midAngle);
                    ft = Math.sqrt(Math.pow(et - st, 2) + Math.pow(it - ht, 2));
                    lt = Math.acos(s / indexLabelRadius);
                    ct = Math.acos((indexLabelRadius * indexLabelRadius + s * s - ft * ft) / (2 * s * indexLabelRadius));
                    f = ct < lt ? it - u.indexLabelTextBlock.y : 0;
                    var vt = at(n),
                        yt = tt(n),
                        c, a, w = 0,
                        g = 0;
                    if(f < 0 ? (c = u.hemisphere === "right" ? vt : yt, b = f, c !== null && (y = -f, a = u.indexLabelTextBlock.y - u.indexLabelTextBlock.height / 2 - (t[c].indexLabelTextBlock.y + t[c].indexLabelTextBlock.height / 2), a - y < p && (w = -y, g = v(c, w, recursionCount + 1), +g.toFixed(l) > +w.toFixed(l) && (b = a > p ? -(a - p) : -(y - (g - w)))))) : f > 0 && (c = u.hemisphere === "right" ? yt : vt, b = f, c !== null && (y = f, a = t[c].indexLabelTextBlock.y - t[c].indexLabelTextBlock.height / 2 - (u.indexLabelTextBlock.y + u.indexLabelTextBlock.height / 2), a - y < p && (w = y, g = v(c, w, recursionCount + 1), +g.toFixed(l) < +w.toFixed(l) && (b = a > p ? a - p : y - (w - g))))), b) {
                        if(rt = u.indexLabelTextBlock.y + b, o = 0, o = u.hemisphere === "right" ? e.x + Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(rt - e.y, 2)) : e.x - Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(rt - e.y, 2)), u.midAngle > Math.PI / 2 - h && u.midAngle < Math.PI / 2 + h) {
                            var ot = (n - 1 + t.length) % t.length,
                                k = t[ot],
                                d = t[(n + 1 + t.length) % t.length];
                            u.hemisphere === "left" && k.hemisphere === "right" && o > k.indexLabelTextBlock.x ? o = k.indexLabelTextBlock.x - 15 : u.hemisphere === "right" && d.hemisphere === "left" && o < d.indexLabelTextBlock.x && (o = d.indexLabelTextBlock.x + 15)
                        } else if(u.midAngle > 3 * Math.PI / 2 - h && u.midAngle < 3 * Math.PI / 2 + h) {
                            var ot = (n - 1 + t.length) % t.length,
                                k = t[ot],
                                d = t[(n + 1 + t.length) % t.length];
                            u.hemisphere === "right" && k.hemisphere === "left" && o < k.indexLabelTextBlock.x ? o = k.indexLabelTextBlock.x + 15 : u.hemisphere === "left" && d.hemisphere === "right" && o > d.indexLabelTextBlock.x && (o = d.indexLabelTextBlock.x - 15)
                        }
                        u.indexLabelTextBlock.y = rt;
                        u.indexLabelTextBlock.x = o;
                        u.indexLabelAngle = Math.atan2(u.indexLabelTextBlock.y - e.y, u.indexLabelTextBlock.x - e.x)
                    }
                }
                return b
            }

            function k() {
                var ct = u.plotArea.ctx,
                    dt, it, gt, rt, h, wt, yt, ut, n, ni, ti, bt, st, w, pt, k, d, kt;
                ct.fillStyle = "grey";
                ct.strokeStyle = "grey";
                dt = 16;
                ct.font = dt + "px Arial";
                ct.textBaseline = "middle";
                for(var o = 0, at = 0, c = 0, vt = !0, at = 0; at < 10 && (at < 1 || c > 0); at++) {
                    if((i.radius || !i.radius && typeof i.innerRadius != "undefined" && i.innerRadius !== null && s - c <= g) && (vt = !1), vt && (s -= c), c = 0, i.indexLabelPlacement !== "inside") {
                        for(indexLabelRadius = s * ot, o = 0; o < r.length; o++) n = t[o], n.indexLabelTextBlock.x = e.x + indexLabelRadius * Math.cos(n.midAngle), n.indexLabelTextBlock.y = e.y + indexLabelRadius * Math.sin(n.midAngle), n.indexLabelAngle = n.midAngle, n.radius = s, n.percentInnerRadius = nt;
                        for(o = 0; o < r.length; o++)
                            if((n = t[o], rt = tt(o), rt !== null) && (it = t[o], gt = t[rt], h = 0, h = b(it, gt) - p, h < 0)) {
                                for(wt = 0, yt = 0, ut = 0; ut < r.length; ut++) ut !== o && t[ut].hemisphere === n.hemisphere && (t[ut].indexLabelTextBlock.y < n.indexLabelTextBlock.y ? wt++ : yt++);
                                var ht = h / (wt + yt || 1) * yt,
                                    y = -1 * (h - ht),
                                    ft = 0,
                                    et = 0;
                                n.hemisphere === "right" ? (ft = v(o, ht), y = -1 * (h - ft), et = v(rt, y), +et.toFixed(l) < +y.toFixed(l) && +ft.toFixed(l) <= +ht.toFixed(l) && v(o, -(y - et))) : (ft = v(rt, ht), y = -1 * (h - ft), et = v(o, y), +et.toFixed(l) < +y.toFixed(l) && +ft.toFixed(l) <= +ht.toFixed(l) && v(rt, -(y - et)))
                            }
                    } else
                        for(o = 0; o < r.length; o++) n = t[o], indexLabelRadius = i.type === "pie" ? s * .7 : s * .8, ni = e.x + indexLabelRadius * Math.cos(n.midAngle), ti = e.y + indexLabelRadius * Math.sin(n.midAngle), n.indexLabelTextBlock.x = ni, n.indexLabelTextBlock.y = ti;
                    for(o = 0; o < r.length; o++)(n = t[o], bt = n.indexLabelTextBlock.measureText(), bt.height !== 0 && bt.width !== 0) && (st = 0, w = 0, st = n.hemisphere === "right" ? (f.x2 - (n.indexLabelTextBlock.x + n.indexLabelTextBlock.width + a)) * -1 : f.x1 - (n.indexLabelTextBlock.x - n.indexLabelTextBlock.width - a), st > 0 && (!vt && n.indexLabelText && (pt = n.hemisphere === "right" ? f.x2 - n.indexLabelTextBlock.x : n.indexLabelTextBlock.x - f.x1, n.indexLabelTextBlock.maxWidth * .3 > pt ? n.indexLabelText = "" : n.indexLabelTextBlock.maxWidth = pt * .85, n.indexLabelTextBlock.maxWidth * .3 < pt && (n.indexLabelTextBlock.x -= n.hemisphere === "right" ? 2 : -2)), (Math.abs(n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 - e.y) < s || Math.abs(n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2 - e.y) < s) && (w = st / Math.abs(Math.cos(n.indexLabelAngle)), w > 9 && (w = w * .3), w > c && (c = w))), k = 0, d = 0, k = n.indexLabelAngle > 0 && n.indexLabelAngle < Math.PI ? (f.y2 - (n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2 + 5)) * -1 : f.y1 - (n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 - 5), k > 0 && (!vt && n.indexLabelText && (kt = n.indexLabelAngle > 0 && n.indexLabelAngle < Math.PI ? -1 : 1, v(o, k * kt) === 0 && v(o, 2 * kt)), Math.abs(n.indexLabelTextBlock.x - e.x) < s && (d = k / Math.abs(Math.sin(n.indexLabelAngle)), d > 9 && (d = d * .3), d > c && (c = d))));

                    function ii(n, i, u) {
                        for(var o = [], s = 0, e, f = i;; f = (f + 1 + r.length) % r.length)
                            if(o.push(t[f]), f === u) break;
                        for(o.sort(function(n, t) {
                            return n.y - t.y
                        }), f = 0; f < o.length; f++)
                            if(e = o[f], s < n * .7) s += e.indexLabelTextBlock.height, e.indexLabelTextBlock.text = "", e.indexLabelText = "", e.indexLabelTextBlock.measureText();
                            else break
                    }

                    function ri() {
                        for(var n = -1, f = -1, u = 0, o = !1, e, s, i = 0; i < r.length; i++)(o = !1, it = t[i], it.indexLabelText) && (e = tt(i), e !== null) && (s = t[e], h = 0, h = b(it, s), h < 0 && lt(it, s) ? (n < 0 && (n = i), e !== n && (f = e, u += -h), i % Math.max(r.length / 10, 3) == 0 && (o = !0)) : o = !0, o && u > 0 && n >= 0 && f >= 0 && (ii(u, n, f), n = -1, f = -1, u = 0));
                        u > 0 && ii(u, n, f)
                    }
                    ri()
                }
            }

            function it() {
                var t, n;
                if(u.plotArea.layoutManager.reset(), u._title && (u._title.dockInsidePlotArea || u._title.horizontalAlign === "center" && u._title.verticalAlign === "center") && u._title.render(), u.subtitles)
                    for(t = 0; t < u.subtitles.length; t++) n = u.subtitles[t], (n.dockInsidePlotArea || n.horizontalAlign === "center" && n.verticalAlign === "center") && n.render();
                u.legend && (u.legend.dockInsidePlotArea || u.legend.horizontalAlign === "center" && u.legend.verticalAlign === "center") && u.legend.render()
            }
            var u = this,
                ft = n.dataSeriesIndexes.length,
                o, s, g, nt;
            if(!(ft <= 0)) {
                var et = n.dataSeriesIndexes[0],
                    i = this.data[et],
                    r = i.dataPoints,
                    a = 10,
                    rt = 500,
                    f = this.plotArea,
                    t = [],
                    p = 2,
                    ot = 1.3,
                    h = 20 / 180 * Math.PI,
                    l = 6,
                    e = {
                        x: (f.x2 + f.x1) / 2,
                        y: (f.y2 + f.y1) / 2
                    },
                    d = 0,
                    w = !1;
                for(o = 0; o < r.length; o++) d += Math.abs(r[o].y), !w && typeof r[o].indexLabel != "undefined" && r[o].indexLabel !== null && r[o].indexLabel.toString().length > 0 && (w = !0), !w && typeof r[o].label != "undefined" && r[o].label !== null && r[o].label.toString().length > 0 && (w = !0);
                d !== 0 && (w = w || typeof i.indexLabel != "undefined" && i.indexLabel !== null && i.indexLabel.toString().length > 0, s = i.indexLabelPlacement !== "inside" && w ? Math.min(f.width, f.height) * .75 / 2 : Math.min(f.width, f.height) * .92 / 2, i.radius && (s = ai(i.radius, s)), g = typeof i.innerRadius != "undefined" && i.innerRadius !== null ? ai(i.innerRadius, s) : .7 * s, nt = Math.min(g / s, (s - 1) / s), this.pieDoughnutClickHandler = function(n) {
                    if(!u.isAnimating) {
                        var r = n.dataPointIndex,
                            t = n.dataPoint,
                            i = this,
                            f = i.dataPointIds[r];
                        t.exploded = t.exploded ? !1 : !0;
                        i.dataPoints.length > 1 && u._animator.animate(0, rt, function(n) {
                            ut(n);
                            it()
                        });
                        return
                    }
                }, st(), k(), k(), k(), k(), this.disableToolTip = !0, this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(n) {
                    ct(n);
                    it()
                }, function() {
                    u.disableToolTip = !1;
                    u._animator.animate(0, u.animatedRender ? rt : 0, function(n) {
                        ut(n);
                        it()
                    })
                }))
            }
        };
        t.prototype.animationRequestId = null;
        t.prototype.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
                    window.setTimeout(n, 1e3 / 60)
                }
        }();
        t.prototype.cancelRequestAnimFrame = function() {
            return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
        }();
        ft.prototype.registerSpace = function(n, t) {
            n === "top" ? this._topOccupied += t.height : n === "bottom" ? this._bottomOccupied += t.height : n === "left" ? this._leftOccupied += t.width : n === "right" && (this._rightOccupied += t.width)
        };
        ft.prototype.unRegisterSpace = function(n, t) {
            n === "top" ? this._topOccupied -= t.height : n === "bottom" ? this._bottomOccupied -= t.height : n === "left" ? this._leftOccupied -= t.width : n === "right" && (this._rightOccupied -= t.width)
        };
        ft.prototype.getFreeSpace = function() {
            return {
                x1: this._x1 + this._leftOccupied,
                y1: this._y1 + this._topOccupied,
                x2: this._x2 - this._rightOccupied,
                y2: this._y2 - this._bottomOccupied,
                width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
                height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
            }
        };
        ft.prototype.reset = function() {
            this._topOccupied = this._padding;
            this._bottomOccupied = this._padding;
            this._leftOccupied = this._padding;
            this._rightOccupied = this._padding
        };
        w(c, h);
        c.prototype.render = function(n) {
            var f, i, u;
            n && this.ctx.save();
            f = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            i = 0;
            this._isDirty && this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + i);
            this.textBaseline === "middle" && (i = -this._lineHeight / 2);
            this.ctx.font = this._getFontString();
            this.ctx.rotate(Math.PI / 180 * this.angle);
            var r = 0,
                e = this.padding,
                t = null;
            for((this.borderThickness > 0 && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, i, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor), this.ctx.fillStyle = this.fontColor, u = 0; u < this._wrappedText.lines.length; u++) t = this._wrappedText.lines[u], this.horizontalAlign === "right" ? r = this.width - t.width - this.padding : this.horizontalAlign === "left" ? r = this.padding : this.horizontalAlign === "center" && (r = (this.width - this.padding * 2) / 2 - t.width / 2 + this.padding), this.ctx.fillText(t.text, r, e), e += t.height;
            this.ctx.font = f;
            n && this.ctx.restore()
        };
        c.prototype.setText = function(n) {
            this.text = n;
            this._isDirty = !0;
            this._wrappedText = null
        };
        c.prototype.measureText = function() {
            if(this.maxWidth === null) throw "Please set maxWidth and height for TextBlock";
            return this._wrapText(this.ctx), this._isDirty = !1, {
                width: this.width,
                height: this.height
            }
        };
        c.prototype._getLineWithWidth = function(n, t, i) {
            var r, h, e;
            if(n = String(n), i = i || !1, !n) return {
                text: "",
                width: 0
            };
            var u = 0,
                o = 0,
                s = n.length - 1,
                f = Infinity;
            for(this.ctx.font = this._getFontString(); o <= s;)
                if(f = Math.floor((o + s) / 2), r = n.substr(0, f + 1), u = this.ctx.measureText(r).width, u < t) o = f + 1;
                else if(u > t) s = f - 1;
                else break;
            return u > t && r.length > 1 && (r = r.substr(0, r.length - 1), u = this.ctx.measureText(r).width), h = !0, (r.length === n.length || n[r.length] === " ") && (h = !1), h && (e = r.split(" "), e.length > 1 && e.pop(), r = e.join(" "), u = this.ctx.measureText(r).width), {
                text: r,
                width: u
            }
        };
        c.prototype._wrapText = function() {
            var t = new String(st(String(this.text))),
                u = [],
                e = this.ctx.font,
                i = 0,
                r = 0,
                n;
            for(this.ctx.font = this._getFontString(); t.length > 0;) {
                var o = this.maxWidth - this.padding * 2,
                    f = this.maxHeight - this.padding * 2,
                    n = this._getLineWithWidth(t, o, !1);
                n.height = this._lineHeight;
                u.push(n);
                r = Math.max(r, n.width);
                i += n.height;
                t = st(t.slice(n.text.length, t.length));
                f && i > f && (n = u.pop(), i -= n.height)
            }
            this._wrappedText = {
                lines: u,
                width: r,
                height: i
            };
            this.width = r + this.padding * 2;
            this.height = i + this.padding * 2;
            this.ctx.font = e
        };
        c.prototype._getFontString = function() {
            return nr("", this, null)
        };
        w(ct, h);
        ct.prototype.render = function() {
            var e, i;
            if(this.text) {
                var o = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                    n = o.layoutManager.getFreeSpace(),
                    u = n.x1,
                    f = n.y1,
                    h = 0,
                    s = 0,
                    t = 2,
                    a = this.chart._menuButton && this.chart.exportEnabled && this.verticalAlign === "top" ? 22 : 0,
                    l, r;
                this.verticalAlign === "top" || this.verticalAlign === "bottom" ? (this.maxWidth === null && (this.maxWidth = n.width - t * 2 - a * (this.horizontalAlign === "center" ? 2 : 1)), s = n.height * .5 - this.margin - t, h = 0) : this.verticalAlign === "center" && (this.horizontalAlign === "left" || this.horizontalAlign === "right" ? (this.maxWidth === null && (this.maxWidth = n.height - t * 2), s = n.width * .5 - this.margin - t) : this.horizontalAlign === "center" && (this.maxWidth === null && (this.maxWidth = n.width - t * 2), s = n.height * .5 - t * 2));
                this.wrap || (s = Math.min(s, Math.max(this.fontSize * 1.5, this.fontSize + this.padding * 2.5)));
                e = new c(this.ctx, {
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    fontWeight: this.fontWeight,
                    horizontalAlign: this.horizontalAlign,
                    verticalAlign: this.verticalAlign,
                    borderColor: this.borderColor,
                    borderThickness: this.borderThickness,
                    backgroundColor: this.backgroundColor,
                    maxWidth: this.maxWidth,
                    maxHeight: s,
                    cornerRadius: this.cornerRadius,
                    text: this.text,
                    padding: this.padding,
                    textBaseline: "top"
                });
                i = e.measureText();
                this.verticalAlign === "top" || this.verticalAlign === "bottom" ? (this.verticalAlign === "top" ? (f = n.y1 + t, r = "top") : this.verticalAlign === "bottom" && (f = n.y2 - t - i.height, r = "bottom"), this.horizontalAlign === "left" ? u = n.x1 + t : this.horizontalAlign === "center" ? u = n.x1 + n.width / 2 - i.width / 2 : this.horizontalAlign === "right" && (u = n.x2 - t - i.width - a), l = this.horizontalAlign, this.width = i.width, this.height = i.height) : this.verticalAlign === "center" && (this.horizontalAlign === "left" ? (u = n.x1 + t, f = n.y2 - t - (this.maxWidth / 2 - i.width / 2), h = -90, r = "left", this.width = i.height, this.height = i.width) : this.horizontalAlign === "right" ? (u = n.x2 - t, f = n.y1 + t + (this.maxWidth / 2 - i.width / 2), h = 90, r = "right", this.width = i.height, this.height = i.width) : this.horizontalAlign === "center" && (f = o.y1 + (o.height / 2 - i.height / 2), u = o.x1 + (o.width / 2 - i.width / 2), r = "center", this.width = i.width, this.height = i.height), l = "center");
                e.x = u;
                e.y = f;
                e.angle = h;
                e.horizontalAlign = l;
                e.render(!0);
                o.layoutManager.registerSpace(r, {
                    width: this.width + (r === "left" || r === "right" ? this.margin + t : 0),
                    height: this.height + (r === "top" || r === "bottom" ? this.margin + t : 0)
                });
                this.bounds = {
                    x1: u,
                    y1: f,
                    x2: u + this.width,
                    y2: f + this.height
                };
                this.ctx.textBaseline = "top"
            }
        };
        w(gt, h);
        gt.prototype.render = ct.prototype.render;
        w(ni, h);
        ni.prototype.render = function() {
            var lt = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                e = lt.layoutManager.getFreeSpace(),
                ft = null,
                w = 0,
                b = 0,
                h = 0,
                l = 0,
                y = [],
                k = [],
                t, p, n, it, i, r, s, nt, at;
            for(this.verticalAlign === "top" || this.verticalAlign === "bottom" ? (this.orientation = "horizontal", ft = this.verticalAlign, h = this.maxWidth !== null ? this.maxWidth : e.width * .7, l = this.maxHeight !== null ? this.maxHeight : e.height * .5) : this.verticalAlign === "center" && (this.orientation = "vertical", ft = this.horizontalAlign, h = this.maxWidth !== null ? this.maxWidth : e.width * .5, l = this.maxHeight !== null ? this.maxHeight : e.height * .7), i = 0; i < this.dataSeries.length; i++) {
                if(t = this.dataSeries[i], t.type !== "pie" && t.type !== "doughnut" && t.type !== "funnel") {
                    var et = t.legendMarkerType ? t.legendMarkerType : (t.type === "line" || t.type === "stepLine" || t.type === "spline" || t.type === "scatter" || t.type === "bubble") && t.markerType ? t.markerType : g.getDefaultLegendMarker(t.type),
                        d = t.legendText ? t.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                            chart: this.chart,
                            legend: this._options,
                            dataSeries: t,
                            dataPoint: null
                        }) : t.name,
                        ot = t.legendMarkerColor ? t.legendMarkerColor : t.markerColor ? t.markerColor : t._colorSet[0],
                        o = !t.markerSize && (t.type === "line" || t.type === "stepLine" || t.type === "spline") ? 0 : this.lineHeight * .6,
                        st = t.legendMarkerBorderColor ? t.legendMarkerBorderColor : t.markerBorderColor,
                        ht = t.legendMarkerBorderThickness ? t.legendMarkerBorderThickness : t.markerBorderThickness ? Math.max(1, Math.round(o * .2)) : 0,
                        vt = t._colorSet[0];
                    d = this.chart.replaceKeywordsWithValue(d, t.dataPoints[0], t, i);
                    n = {
                        markerType: et,
                        markerColor: ot,
                        text: d,
                        textBlock: null,
                        chartType: t.type,
                        markerSize: o,
                        lineColor: t._colorSet[0],
                        dataSeriesIndex: t.index,
                        dataPointIndex: null,
                        markerBorderColor: st,
                        markerBorderThickness: ht
                    };
                    y.push(n)
                } else
                    for(p = 0; p < t.dataPoints.length; p++) {
                        var f = t.dataPoints[p],
                            et = f.legendMarkerType ? f.legendMarkerType : t.legendMarkerType ? t.legendMarkerType : g.getDefaultLegendMarker(t.type),
                            d = f.legendText ? f.legendText : t.legendText ? t.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                chart: this.chart,
                                legend: this._options,
                                dataSeries: t,
                                dataPoint: f
                            }) : f.name ? f.name : "DataPoint: " + (p + 1),
                            ot = f.legendMarkerColor ? f.legendMarkerColor : t.legendMarkerColor ? t.legendMarkerColor : f.color ? f.color : t.color ? t.color : t._colorSet[p % t._colorSet.length],
                            o = this.lineHeight * .6,
                            st = f.legendMarkerBorderColor ? f.legendMarkerBorderColor : t.legendMarkerBorderColor ? t.legendMarkerBorderColor : f.markerBorderColor ? f.markerBorderColor : t.markerBorderColor,
                            ht = f.legendMarkerBorderThickness ? f.legendMarkerBorderThickness : t.legendMarkerBorderThickness ? t.legendMarkerBorderThickness : f.markerBorderThickness || t.markerBorderThickness ? Math.max(1, Math.round(o * .2)) : 0;
                        d = this.chart.replaceKeywordsWithValue(d, f, t, p);
                        n = {
                            markerType: et,
                            markerColor: ot,
                            text: d,
                            textBlock: null,
                            chartType: t.type,
                            markerSize: o,
                            dataSeriesIndex: i,
                            dataPointIndex: p,
                            markerBorderColor: st,
                            markerBorderThickness: ht
                        };
                        (f.showInLegend || t.showInLegend && f.showInLegend !== !1) && y.push(n)
                    }
                n = null
            }
            if(this.reversed === !0 && y.reverse(), y.length > 0) {
                var r = null,
                    ct = 0,
                    v = 0,
                    s = 0;
                for(v = this.itemWidth !== null ? this.itemMaxWidth !== null ? Math.min(this.itemWidth, this.itemMaxWidth, h) : Math.min(this.itemWidth, h) : this.itemMaxWidth !== null ? Math.min(this.itemMaxWidth, h) : h, o = o === 0 ? this.lineHeight * .6 : o, v = v - (o + this.horizontalSpacing * .1), i = 0; i < y.length; i++)(n = y[i], (n.chartType === "line" || n.chartType === "spline" || n.chartType === "stepLine") && (v = v - 2 * this.lineHeight * .1), l <= 0 || typeof l == "undefined" || v <= 0 || typeof v == "undefined") || (this.orientation === "horizontal" ? (n.textBlock = new c(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: v,
                    maxHeight: this.itemWrap ? l : this.lineHeight,
                    angle: 0,
                    text: n.text,
                    horizontalAlign: "left",
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontWeight: this.fontWeight,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    textBaseline: "top"
                }), n.textBlock.measureText(), this.itemWidth !== null && (n.textBlock.width = this.itemWidth - (o + this.horizontalSpacing * .1 + (n.chartType === "line" || n.chartType === "spline" || n.chartType === "stepLine" ? 2 * this.lineHeight * .1 : 0))), (!r || r.width + Math.round(n.textBlock.width + this.horizontalSpacing * .1 + o + (r.width === 0 ? 0 : this.horizontalSpacing) + (n.chartType === "line" || n.chartType === "spline" || n.chartType === "stepLine" ? 2 * this.lineHeight * .1 : 0)) > h) && (r = {
                    items: [],
                    width: 0
                }, k.push(r), this.height += s, s = 0), s = Math.max(s, n.textBlock.height), n.textBlock.x = r.width, n.textBlock.y = 0, r.width += Math.round(n.textBlock.width + this.horizontalSpacing * .1 + o + (r.width === 0 ? 0 : this.horizontalSpacing) + (n.chartType === "line" || n.chartType === "spline" || n.chartType === "stepLine" ? 2 * this.lineHeight * .1 : 0)), r.items.push(n), this.width = Math.max(r.width, this.width)) : (n.textBlock = new c(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: v,
                    maxHeight: this.itemWrap === !0 ? l : this.fontSize * 1.5,
                    angle: 0,
                    text: n.text,
                    horizontalAlign: "left",
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontWeight: this.fontWeight,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    textBaseline: "top"
                }), n.textBlock.measureText(), this.itemWidth !== null && (n.textBlock.width = this.itemWidth - (o + this.horizontalSpacing * .1 + (n.chartType === "line" || n.chartType === "spline" || n.chartType === "stepLine" ? 2 * this.lineHeight * .1 : 0))), this.height <= l ? (r = {
                    items: [],
                    width: 0
                }, k.push(r)) : (r = k[ct], ct = (ct + 1) % k.length), this.height += n.textBlock.height, n.textBlock.x = r.width, n.textBlock.y = 0, r.width += Math.round(n.textBlock.width + this.horizontalSpacing * .1 + o + (r.width === 0 ? 0 : this.horizontalSpacing) + (n.chartType === "line" || n.chartType === "spline" || n.chartType === "stepLine" ? 2 * this.lineHeight * .1 : 0)), r.items.push(n), this.width = Math.max(r.width, this.width)));
                this.itemWrap === !1 ? this.height = k.length * this.lineHeight : this.height += s;
                this.height = Math.min(l, this.height);
                this.width = Math.min(h, this.width)
            }
            for(this.verticalAlign === "top" ? (b = this.horizontalAlign === "left" ? e.x1 : this.horizontalAlign === "right" ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, w = e.y1) : this.verticalAlign === "center" ? (b = this.horizontalAlign === "left" ? e.x1 : this.horizontalAlign === "right" ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, w = e.y1 + e.height / 2 - this.height / 2) : this.verticalAlign === "bottom" && (b = this.horizontalAlign === "left" ? e.x1 : this.horizontalAlign === "right" ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, w = e.y2 - this.height), this.items = y, i = 0; i < this.items.length; i++) n = y[i], n.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[n.id] = {
                id: n.id,
                objectType: "legendItem",
                legendItemIndex: i,
                dataSeriesIndex: n.dataSeriesIndex,
                dataPointIndex: n.dataPointIndex
            };
            for(it = 0, i = 0; i < k.length; i++) {
                for(r = k[i], s = 0, nt = 0; nt < r.items.length; nt++) {
                    var n = r.items[nt],
                        tt = n.textBlock.x + b + (nt === 0 ? o * .2 : this.horizontalSpacing),
                        rt = w + it,
                        ut = tt;
                    this.chart.data[n.dataSeriesIndex].visible || (this.ctx.globalAlpha = .5);
                    this.ctx.save();
                    this.ctx.rect(b, w, h, l);
                    this.ctx.clip();
                    (n.chartType === "line" || n.chartType === "stepLine" || n.chartType === "spline") && (this.ctx.strokeStyle = n.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(tt - this.lineHeight * .1, rt + this.lineHeight / 2), this.ctx.lineTo(tt + this.lineHeight * .7, rt + this.lineHeight / 2), this.ctx.stroke(), ut -= this.lineHeight * .1);
                    a.drawMarker(tt + o / 2, rt + this.lineHeight / 2, this.ctx, n.markerType, n.markerSize, n.markerColor, n.markerBorderColor, n.markerBorderThickness);
                    n.textBlock.x = tt + this.horizontalSpacing * .1 + o;
                    (n.chartType === "line" || n.chartType === "stepLine" || n.chartType === "spline") && (n.textBlock.x = n.textBlock.x + this.lineHeight * .1);
                    n.textBlock.y = rt;
                    n.textBlock.render(!0);
                    this.ctx.restore();
                    s = nt > 0 ? Math.max(s, n.textBlock.height) : n.textBlock.height;
                    this.chart.data[n.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                    at = u(n.id);
                    this.ghostCtx.fillStyle = at;
                    this.ghostCtx.beginPath();
                    this.ghostCtx.fillRect(ut, n.textBlock.y, n.textBlock.x + n.textBlock.width - ut, n.textBlock.height);
                    n.x1 = this.chart._eventManager.objectMap[n.id].x1 = ut;
                    n.y1 = this.chart._eventManager.objectMap[n.id].y1 = n.textBlock.y;
                    n.x2 = this.chart._eventManager.objectMap[n.id].x2 = n.textBlock.x + n.textBlock.width;
                    n.y2 = this.chart._eventManager.objectMap[n.id].y2 = n.textBlock.y + n.textBlock.height
                }
                it = it + s
            }
            lt.layoutManager.registerSpace(ft, {
                width: this.width + 2 + 2,
                height: this.height + 5 + 5
            });
            this.bounds = {
                x1: b,
                y1: w,
                x2: b + this.width,
                y2: w + this.height
            }
        };
        w(ui, h);
        ui.prototype.render = function() {
            var n = this.chart.layoutManager.getFreeSpace();
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(n.x1, n.y1, n.x2, n.y2)
        };
        w(g, h);
        g.prototype.getDefaultAxisPlacement = function() {
            var n = this.type;
            return n === "column" || n === "line" || n === "stepLine" || n === "spline" || n === "area" || n === "stepArea" || n === "splineArea" || n === "stackedColumn" || n === "stackedLine" || n === "bubble" || n === "scatter" || n === "stackedArea" || n === "stackedColumn100" || n === "stackedLine100" || n === "stackedArea100" || n === "candlestick" || n === "ohlc" || n === "rangeColumn" || n === "rangeArea" || n === "rangeSplineArea" ? "normal" : n === "bar" || n === "stackedBar" || n === "stackedBar100" || n === "rangeBar" ? "xySwapped" : n === "pie" || n === "doughnut" || n === "funnel" ? "none" : (window.console.log("Unknown Chart Type: " + n), null)
        };
        g.getDefaultLegendMarker = function(n) {
            return n === "column" || n === "stackedColumn" || n === "stackedLine" || n === "bar" || n === "stackedBar" || n === "stackedBar100" || n === "bubble" || n === "scatter" || n === "stackedColumn100" || n === "stackedLine100" || n === "stepArea" || n === "candlestick" || n === "ohlc" || n === "rangeColumn" || n === "rangeBar" || n === "rangeArea" || n === "rangeSplineArea" ? "square" : n === "line" || n === "stepLine" || n === "spline" || n === "pie" || n === "doughnut" || n === "funnel" ? "circle" : n === "area" || n === "splineArea" || n === "stackedArea" || n === "stackedArea100" ? "triangle" : (window.console.log("Unknown Chart Type: " + n), null)
        };
        g.prototype.getDataPointAtX = function(n, t) {
            var s, h, c;
            if(!this.dataPoints || this.dataPoints.length === 0) return null;
            var i = {
                    dataPoint: null,
                    distance: Infinity,
                    index: NaN
                },
                o = null,
                r = 0,
                u = 0,
                f = 1,
                l = Infinity,
                a = 0,
                v = 0,
                y = 1e3,
                e = 0;
            for(this.chart.plotInfo.axisPlacement !== "none" && (s = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, e = s > 0 ? Math.min(Math.max((this.dataPoints.length - 1) / s * (n - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0);;) {
                if(u = f > 0 ? e + r : e - r, u >= 0 && u < this.dataPoints.length) {
                    if(o = this.dataPoints[u], h = Math.abs(o.x - n), h < i.distance && (i.dataPoint = o, i.distance = h, i.index = u), c = Math.abs(o.x - n), c <= l ? l = c : f > 0 ? a++ : v++, a > y && v > y) break
                } else if(e - r < 0 && e + r >= this.dataPoints.length) break;
                f === -1 ? (r++, f = 1) : f = -1
            }
            return t || i.dataPoint.x !== n ? t && i.dataPoint !== null ? i : null : i
        };
        g.prototype.getDataPointAtXY = function(n, t, i) {
            var et, ut, d, l, s, g, ot, tt, v, y, w;
            if(!this.dataPoints || this.dataPoints.length === 0) return null;
            i = i || !1;
            var e = [],
                b = 0,
                f = 0,
                a = 1,
                h = !1,
                nt = Infinity,
                it = 0,
                rt = 0,
                ft = 1e3,
                k = 0;
            for(this.chart.plotInfo.axisPlacement !== "none" && (et = this.chart.axisX.getXValueAt({
                x: n,
                y: t
            }), ut = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, k = ut > 0 ? Math.min(Math.max((this.dataPoints.length - 1) / ut * (et - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0);;) {
                if(f = a > 0 ? k + b : k - b, f >= 0 && f < this.dataPoints.length) {
                    var st = this.dataPointIds[f],
                        r = this.chart._eventManager.objectMap[st],
                        o = this.dataPoints[f],
                        u = null;
                    if(r) {
                        switch(this.type) {
                            case "column":
                            case "stackedColumn":
                            case "stackedColumn100":
                            case "bar":
                            case "stackedBar":
                            case "stackedBar100":
                            case "rangeColumn":
                            case "rangeBar":
                                n >= r.x1 && n <= r.x2 && t >= r.y1 && t <= r.y2 && (e.push({
                                    dataPoint: o,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(r.x1 - n), Math.abs(r.x2 - n), Math.abs(r.y1 - t), Math.abs(r.y2 - t))
                                }), h = !0);
                                break;
                            case "line":
                            case "stepLine":
                            case "spline":
                            case "area":
                            case "stepArea":
                            case "stackedArea":
                            case "stackedArea100":
                            case "splineArea":
                            case "scatter":
                                s = p("markerSize", o, this) || 4;
                                d = i ? 20 : s;
                                u = Math.sqrt(Math.pow(r.x1 - n, 2) + Math.pow(r.y1 - t, 2));
                                u <= d && e.push({
                                    dataPoint: o,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: u
                                });
                                l = Math.abs(r.x1 - n);
                                l <= nt ? nt = l : a > 0 ? it++ : rt++;
                                u <= s / 2 && (h = !0);
                                break;
                            case "rangeArea":
                            case "rangeSplineArea":
                                s = p("markerSize", o, this) || 4;
                                d = i ? 20 : s;
                                u = Math.min(Math.sqrt(Math.pow(r.x1 - n, 2) + Math.pow(r.y1 - t, 2)), Math.sqrt(Math.pow(r.x1 - n, 2) + Math.pow(r.y2 - t, 2)));
                                u <= d && e.push({
                                    dataPoint: o,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: u
                                });
                                l = Math.abs(r.x1 - n);
                                l <= nt ? nt = l : a > 0 ? it++ : rt++;
                                u <= s / 2 && (h = !0);
                                break;
                            case "bubble":
                                s = r.size;
                                u = Math.sqrt(Math.pow(r.x1 - n, 2) + Math.pow(r.y1 - t, 2));
                                u <= s / 2 && (e.push({
                                    dataPoint: o,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: u
                                }), h = !0);
                                break;
                            case "pie":
                            case "doughnut":
                                if(g = r.center, ot = this.type === "doughnut" ? r.percentInnerRadius * r.radius : 0, u = Math.sqrt(Math.pow(g.x - n, 2) + Math.pow(g.y - t, 2)), u < r.radius && u > ot) {
                                    var ht = t - g.y,
                                        ct = n - g.x,
                                        c = Math.atan2(ht, ct);
                                    c < 0 && (c += Math.PI * 2);
                                    c = Number(((c / Math.PI * 180 % 360 + 360) % 360).toFixed(12));
                                    tt = Number(((r.startAngle / Math.PI * 180 % 360 + 360) % 360).toFixed(12));
                                    v = Number(((r.endAngle / Math.PI * 180 % 360 + 360) % 360).toFixed(12));
                                    v === 0 && r.endAngle > 1 && (v = 360);
                                    tt >= v && o.y !== 0 && (v += 360, c < tt && (c += 360));
                                    c > tt && c < v && (e.push({
                                        dataPoint: o,
                                        dataPointIndex: f,
                                        dataSeries: this,
                                        distance: 0
                                    }), h = !0)
                                }
                                break;
                            case "candlestick":
                                (n >= r.x1 - r.borderThickness / 2 && n <= r.x2 + r.borderThickness / 2 && t >= r.y2 - r.borderThickness / 2 && t <= r.y3 + r.borderThickness / 2 || Math.abs(r.x2 - n + r.x1 - n) < r.borderThickness && t >= r.y1 && t <= r.y4) && (e.push({
                                    dataPoint: o,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(r.x1 - n), Math.abs(r.x2 - n), Math.abs(r.y2 - t), Math.abs(r.y3 - t))
                                }), h = !0);
                                break;
                            case "ohlc":
                                (Math.abs(r.x2 - n + r.x1 - n) < r.borderThickness && t >= r.y2 && t <= r.y3 || n >= r.x1 && n <= (r.x2 + r.x1) / 2 && t >= r.y1 - r.borderThickness / 2 && t <= r.y1 + r.borderThickness / 2 || n >= (r.x1 + r.x2) / 2 && n <= r.x2 && t >= r.y4 - r.borderThickness / 2 && t <= r.y4 + r.borderThickness / 2) && (e.push({
                                    dataPoint: o,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(r.x1 - n), Math.abs(r.x2 - n), Math.abs(r.y2 - t), Math.abs(r.y3 - t))
                                }), h = !0)
                        }
                        if(h || it > ft && rt > ft) break
                    }
                } else if(k - b < 0 && k + b >= this.dataPoints.length) break;
                a === -1 ? (b++, a = 1) : a = -1
            }
            for(y = null, w = 0; w < e.length; w++) y ? e[w].distance <= y.distance && (y = e[w]) : y = e[w];
            return y
        };
        g.prototype.getMarkerProperties = function(n, t, i, r) {
            var u = this.dataPoints,
                f = this,
                e = u[n].markerColor ? u[n].markerColor : f.markerColor ? f.markerColor : u[n].color ? u[n].color : f.color ? f.color : f._colorSet[n % f._colorSet.length],
                o = u[n].markerBorderColor ? u[n].markerBorderColor : f.markerBorderColor ? f.markerBorderColor : null,
                s = u[n].markerBorderThickness ? u[n].markerBorderThickness : f.markerBorderThickness ? f.markerBorderThickness : null,
                h = u[n].markerType ? u[n].markerType : f.markerType,
                c = u[n].markerSize ? u[n].markerSize : f.markerSize;
            return {
                x: t,
                y: i,
                ctx: r,
                type: h,
                size: c,
                color: e,
                borderColor: o,
                borderThickness: s
            }
        };
        w(e, h);
        e.prototype.createLabels = function() {
            var i, n = 0,
                e, r = 0,
                u = 0,
                o = 0,
                s, f, t;
            if(this._position === "bottom" || this._position === "top" ? (o = this.lineCoordinates.width / Math.abs(this.viewportMaximum - this.viewportMinimum) * this.interval, r = this.labelAutoFit ? typeof this._options.labelMaxWidth == "undefined" ? o * .9 >> 0 : this.labelMaxWidth : typeof this._options.labelMaxWidth == "undefined" ? this.chart.width * .7 >> 0 : this.labelMaxWidth, u = typeof this._options.labelWrap == "undefined" || this.labelWrap ? this.chart.height * .5 >> 0 : this.labelFontSize * 1.5) : (this._position === "left" || this._position === "right") && (o = this.lineCoordinates.height / Math.abs(this.viewportMaximum - this.viewportMinimum) * this.interval, r = this.labelAutoFit ? typeof this._options.labelMaxWidth == "undefined" ? this.chart.width * .3 >> 0 : this.labelMaxWidth : typeof this._options.labelMaxWidth == "undefined" ? this.chart.width * .5 >> 0 : this.labelMaxWidth, u = typeof this._options.labelWrap == "undefined" || this.labelWrap ? o * 2 >> 0 : this.labelFontSize * 1.5), this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime")
                for(e = ei(new Date(this.viewportMaximum), this.interval, this.intervalType), n = this.intervalStartPosition; n < e; ei(n, this.interval, this.intervalType)) s = n.getTime(), f = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this._options,
                    value: n,
                    label: this.labels[n] ? this.labels[n] : null
                }) : this.type === "axisX" && this.labels[s] ? this.labels[s] : ii(n, this.valueFormatString, this.chart._cultureInfo), i = new c(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: r,
                    maxHeight: u,
                    angle: this.labelAngle,
                    text: this.prefix + f + this.suffix,
                    horizontalAlign: "left",
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle"
                }), this._labels.push({
                    position: n.getTime(),
                    textBlock: i,
                    effectiveHeight: null
                });
            else {
                if(e = this.viewportMaximum, this.labels && this.labels.length) {
                    var l = Math.ceil(this.interval),
                        a = Math.ceil(this.intervalStartPosition),
                        h = !1;
                    for(n = a; n < this.viewportMaximum; n += l)
                        if(this.labels[n]) h = !0;
                        else {
                            h = !1;
                            break
                        }
                    h && (this.interval = l, this.intervalStartPosition = a)
                }
                for(n = this.intervalStartPosition; n <= e; n = parseFloat((n + this.interval).toFixed(14))) f = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this._options,
                    value: n,
                    label: this.labels[n] ? this.labels[n] : null
                }) : this.type === "axisX" && this.labels[n] ? this.labels[n] : it(n, this.valueFormatString, this.chart._cultureInfo), i = new c(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: r,
                    maxHeight: u,
                    angle: this.labelAngle,
                    text: this.prefix + f + this.suffix,
                    horizontalAlign: "left",
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: 0
                }), this._labels.push({
                    position: n,
                    textBlock: i,
                    effectiveHeight: null
                })
            }
            for(n = 0; n < this.stripLines.length; n++) t = this.stripLines[n], i = new c(this.ctx, {
                x: 0,
                y: 0,
                backgroundColor: t.labelBackgroundColor,
                maxWidth: r,
                maxHeight: u,
                angle: this.labelAngle,
                text: t.labelFormatter ? t.labelFormatter({
                    chart: this.chart,
                    axis: this,
                    stripLine: t
                }) : t.label,
                horizontalAlign: "left",
                fontSize: t.labelFontSize,
                fontFamily: t.labelFontFamily,
                fontWeight: t.labelFontWeight,
                fontColor: t._options.labelFontColor || t.color,
                fontStyle: t.labelFontStyle,
                textBaseline: "middle",
                borderThickness: 0
            }), this._labels.push({
                position: t.value,
                textBlock: i,
                effectiveHeight: null,
                stripLine: t
            })
        };
        e.prototype.createLabelsAndCalculateWidth = function() {
            var t = 0,
                u, f;
            if(this._labels = [], this._position === "left" || this._position === "right")
                for(this.createLabels(), i = 0; i < this._labels.length; i++) {
                    var e = this._labels[i].textBlock,
                        r = e.measureText(),
                        n = 0;
                    n = this.labelAngle === 0 ? r.width : r.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + r.height / 2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    t < n && (t = n);
                    this._labels[i].effectiveWidth = n
                }
            return u = this.title ? yt(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0, f = u + t + this.tickLength + 5, f
        };
        e.prototype.createLabelsAndCalculateHeight = function() {
            var r = 0,
                u, n, i, t, f;
            if(this._labels = [], n = 0, this.createLabels(), this._position === "bottom" || this._position === "top")
                for(n = 0; n < this._labels.length; n++) u = this._labels[n].textBlock, i = u.measureText(), t = 0, t = this.labelAngle === 0 ? i.height : i.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + i.height / 2 * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), r < t && (r = t), this._labels[n].effectiveHeight = t;
            return f = this.title ? yt(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0, f + r + this.tickLength + 5
        };
        e.setLayoutAndRender = function(n, t, i, r, u) {
            var e, o, f, s, p = n.chart,
                c = p.ctx,
                w, a, v, y, b, k, h;
            n.calculateAxisParameters();
            t && t.calculateAxisParameters();
            i && i.calculateAxisParameters();
            var d = t ? t.lineThickness ? t.lineThickness : 0 : 0,
                g = i ? i.lineThickness ? i.lineThickness : 0 : 0,
                nt = t ? t.gridThickness ? t.gridThickness : 0 : 0,
                tt = i ? i.gridThickness ? i.gridThickness : 0 : 0,
                l = t ? t.margin : 0,
                it = t ? t.margin : 0;
            r === "normal" ? (n.lineCoordinates = {}, w = Math.ceil(t ? t.createLabelsAndCalculateWidth() : 0), e = Math.round(u.x1 + w + l), n.lineCoordinates.x1 = e, a = Math.ceil(i ? i.createLabelsAndCalculateWidth() : 0), f = Math.round(u.x2 - a > n.chart.width - 10 ? n.chart.width - 10 : u.x2 - a), n.lineCoordinates.x2 = f, n.lineCoordinates.width = Math.abs(f - e), v = Math.ceil(n.createLabelsAndCalculateHeight()), o = Math.round(u.y2 - v - n.margin), s = Math.round(u.y2 - n.margin), n.lineCoordinates.y1 = o, n.lineCoordinates.y2 = o, n.boundingRect = {
                x1: e,
                y1: o,
                x2: f,
                y2: s,
                width: f - e,
                height: s - o
            }, t && (e = Math.round(u.x1 + t.margin), o = Math.round(u.y1 < 10 ? 10 : u.y1), f = Math.round(u.x1 + w + t.margin), s = Math.round(u.y2 - v - n.margin), t.lineCoordinates = {
                x1: f,
                y1: o,
                x2: f,
                y2: s,
                height: Math.abs(s - o)
            }, t.boundingRect = {
                x1: e,
                y1: o,
                x2: f,
                y2: s,
                width: f - e,
                height: s - o
            }), i && (e = Math.round(n.lineCoordinates.x2), o = Math.round(u.y1 < 10 ? 10 : u.y1), f = Math.round(e + a + i.margin), s = Math.round(u.y2 - v - n.margin), i.lineCoordinates = {
                x1: e,
                y1: o,
                x2: e,
                y2: s,
                height: Math.abs(s - o)
            }, i.boundingRect = {
                x1: e,
                y1: o,
                x2: f,
                y2: s,
                width: f - e,
                height: s - o
            }), n.calculateValueToPixelConversionParameters(), t && t.calculateValueToPixelConversionParameters(), i && i.calculateValueToPixelConversionParameters(), c.save(), c.rect(5, n.boundingRect.y1, n.chart.width - 10, n.boundingRect.height), c.clip(), n.renderLabelsTicksAndTitle(), c.restore(), t && t.renderLabelsTicksAndTitle(), i && i.renderLabelsTicksAndTitle(), p.preparePlotArea(), h = n.chart.plotArea, c.save(), c.rect(h.x1, h.y1, Math.abs(h.x2 - h.x1), Math.abs(h.y2 - h.y1)), c.clip(), n.renderStripLinesOfThicknessType("value"), t && t.renderStripLinesOfThicknessType("value"), i && i.renderStripLinesOfThicknessType("value"), n.renderInterlacedColors(), t && t.renderInterlacedColors(), i && i.renderInterlacedColors(), c.restore(), n.renderGrid(), t && t.renderGrid(), i && i.renderGrid(), n.renderAxisLine(), t && t.renderAxisLine(), i && i.renderAxisLine(), n.renderStripLinesOfThicknessType("pixel"), t && t.renderStripLinesOfThicknessType("pixel"), i && i.renderStripLinesOfThicknessType("pixel")) : (y = Math.ceil(n.createLabelsAndCalculateWidth()), t && (t.lineCoordinates = {}, e = Math.round(u.x1 + y + n.margin), f = Math.round(u.x2 > t.chart.width - 10 ? t.chart.width - 10 : u.x2), t.lineCoordinates.x1 = e, t.lineCoordinates.x2 = f, t.lineCoordinates.width = Math.abs(f - e)), i && (i.lineCoordinates = {}, e = Math.round(u.x1 + y + n.margin), f = Math.round(u.x2 > i.chart.width - 10 ? i.chart.width - 10 : u.x2), i.lineCoordinates.x1 = e, i.lineCoordinates.x2 = f, i.lineCoordinates.width = Math.abs(f - e)), b = Math.ceil(t ? t.createLabelsAndCalculateHeight() : 0), k = Math.ceil(i ? i.createLabelsAndCalculateHeight() : 0), t && (o = Math.round(u.y2 - b - t.margin), s = Math.round(u.y2 - l > t.chart.height - 10 ? t.chart.height - 10 : u.y2 - l), t.lineCoordinates.y1 = o, t.lineCoordinates.y2 = o, t.boundingRect = {
                x1: e,
                y1: o,
                x2: f,
                y2: s,
                width: f - e,
                height: b
            }), i && (o = Math.round(u.y1 + i.margin), s = u.y1 + i.margin + k, i.lineCoordinates.y1 = s, i.lineCoordinates.y2 = s, i.boundingRect = {
                x1: e,
                y1: o,
                x2: f,
                y2: s,
                width: f - e,
                height: k
            }), e = Math.round(u.x1 + n.margin), o = Math.round(i ? i.lineCoordinates.y2 : u.y1 < 10 ? 10 : u.y1), f = Math.round(u.x1 + y + n.margin), s = Math.round(t ? t.lineCoordinates.y1 : u.y2 - l > n.chart.height - 10 ? n.chart.height - 10 : u.y2 - l), n.lineCoordinates = {
                x1: f,
                y1: o,
                x2: f,
                y2: s,
                height: Math.abs(s - o)
            }, n.boundingRect = {
                x1: e,
                y1: o,
                x2: f,
                y2: s,
                width: f - e,
                height: s - o
            }, n.calculateValueToPixelConversionParameters(), t && t.calculateValueToPixelConversionParameters(), i && i.calculateValueToPixelConversionParameters(), t && t.renderLabelsTicksAndTitle(), i && i.renderLabelsTicksAndTitle(), n.renderLabelsTicksAndTitle(), p.preparePlotArea(), h = n.chart.plotArea, c.save(), c.rect(h.x1, h.y1, Math.abs(h.x2 - h.x1), Math.abs(h.y2 - h.y1)), c.clip(), n.renderStripLinesOfThicknessType("value"), t && t.renderStripLinesOfThicknessType("value"), i && i.renderStripLinesOfThicknessType("value"), n.renderInterlacedColors(), t && t.renderInterlacedColors(), i && i.renderInterlacedColors(), c.restore(), n.renderGrid(), t && t.renderGrid(), i && i.renderGrid(), n.renderAxisLine(), t && t.renderAxisLine(), i && i.renderAxisLine(), n.renderStripLinesOfThicknessType("pixel"), t && t.renderStripLinesOfThicknessType("pixel"), i && i.renderStripLinesOfThicknessType("pixel"))
        };
        e.prototype.renderLabelsTicksAndTitle = function() {
            var e = !1,
                s = 0,
                l = 1,
                h = 0,
                v = this.conversionParameters.pixelPerUnit * this.interval,
                o, r, u, a, t, i, n, f;
            if(this.labelAngle !== 0 && this.labelAngle !== 360 && (l = 1.2), typeof this._options.interval == "undefined") {
                if(this._position === "bottom" || this._position === "top") {
                    for(n = 0; n < this._labels.length; n++)(t = this._labels[n], t.position < this.viewportMinimum || t.stripLine) || (o = t.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + t.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle), s += o);
                    s > this.lineCoordinates.width * l && (e = !0)
                }
                if(this._position === "left" || this._position === "right") {
                    for(n = 0; n < this._labels.length; n++)(t = this._labels[n], t.position < this.viewportMinimum || t.stripLine) || (o = t.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + t.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), s += o);
                    s > this.lineCoordinates.height * l && (e = !0)
                }
            }
            if(this._position === "bottom") {
                for(n = 0, n = 0; n < this._labels.length; n++)(t = this._labels[n], t.position < this.viewportMinimum || t.position > this.viewportMaximum) || (i = this.getPixelCoordinatesOnAxis(t.position), (this.tickThickness && !this._labels[n].stripLine || this._labels[n].stripLine && this._labels[n].stripLine._thicknessType === "pixel") && (this._labels[n].stripLine ? (r = this._labels[n].stripLine, this.ctx.lineWidth = r.thickness, this.ctx.strokeStyle = r.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), u = this.ctx.lineWidth % 2 == 1 ? (i.x << 0) + .5 : i.x << 0, this.ctx.beginPath(), this.ctx.moveTo(u, i.y << 0), this.ctx.lineTo(u, i.y + this.tickLength << 0), this.ctx.stroke()), !e || h++ % 2 == 0 || this._labels[n].stripLine) && (t.textBlock.angle === 0 ? (i.x -= t.textBlock.width / 2, i.y += this.tickLength + t.textBlock.fontSize / 2) : (i.x -= this.labelAngle < 0 ? t.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, i.y += this.tickLength + Math.abs(this.labelAngle < 0 ? t.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), t.textBlock.x = i.x, t.textBlock.y = i.y, t.textBlock.render(!0));
                this.title && (this._titleTextBlock = new c(this.ctx, {
                    x: this.lineCoordinates.x1,
                    y: this.boundingRect.y2 - this.titleFontSize - 5,
                    maxWidth: this.lineCoordinates.width,
                    maxHeight: this.titleFontSize * 1.5,
                    angle: 0,
                    text: this.title,
                    horizontalAlign: "center",
                    fontSize: this.titleFontSize,
                    fontFamily: this.titleFontFamily,
                    fontWeight: this.titleFontWeight,
                    fontColor: this.titleFontColor,
                    fontStyle: this.titleFontStyle,
                    textBaseline: "top"
                }), this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.boundingRect.y2 - this._titleTextBlock.height - 3, this._titleTextBlock.render(!0))
            } else if(this._position === "top") {
                for(n = 0, n = 0; n < this._labels.length; n++)(t = this._labels[n], t.position < this.viewportMinimum || t.position > this.viewportMaximum) || (i = this.getPixelCoordinatesOnAxis(t.position), (this.tickThickness && !this._labels[n].stripLine || this._labels[n].stripLine && this._labels[n].stripLine._thicknessType === "pixel") && (this._labels[n].stripLine ? (r = this._labels[n].stripLine, this.ctx.lineWidth = r.thickness, this.ctx.strokeStyle = r.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), u = this.ctx.lineWidth % 2 == 1 ? (i.x << 0) + .5 : i.x << 0, this.ctx.beginPath(), this.ctx.moveTo(u, i.y << 0), this.ctx.lineTo(u, i.y - this.tickLength << 0), this.ctx.stroke()), !e || h++ % 2 == 0 || this._labels[n].stripLine) && (t.textBlock.angle === 0 ? (i.x -= t.textBlock.width / 2, i.y -= this.tickLength + t.textBlock.height / 2) : (i.x -= this.labelAngle > 0 ? t.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, i.y -= this.tickLength + Math.abs(this.labelAngle > 0 ? t.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5 : 5)), t.textBlock.x = i.x, t.textBlock.y = i.y, t.textBlock.render(!0));
                this.title && (this._titleTextBlock = new c(this.ctx, {
                    x: this.lineCoordinates.x1,
                    y: this.boundingRect.y1 + 1,
                    maxWidth: this.lineCoordinates.width,
                    maxHeight: this.titleFontSize * 1.5,
                    angle: 0,
                    text: this.title,
                    horizontalAlign: "center",
                    fontSize: this.titleFontSize,
                    fontFamily: this.titleFontFamily,
                    fontWeight: this.titleFontWeight,
                    fontColor: this.titleFontColor,
                    fontStyle: this.titleFontStyle,
                    textBaseline: "top"
                }), this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.render(!0))
            } else if(this._position === "left") {
                for(n = 0; n < this._labels.length; n++)(t = this._labels[n], t.position < this.viewportMinimum || t.position > this.viewportMaximum) || (i = this.getPixelCoordinatesOnAxis(t.position), (this.tickThickness && !this._labels[n].stripLine || this._labels[n].stripLine && this._labels[n].stripLine._thicknessType === "pixel") && (this._labels[n].stripLine ? (r = this._labels[n].stripLine, this.ctx.lineWidth = r.thickness, this.ctx.strokeStyle = r.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), f = this.ctx.lineWidth % 2 == 1 ? (i.y << 0) + .5 : i.y << 0, this.ctx.beginPath(), this.ctx.moveTo(i.x << 0, f), this.ctx.lineTo(i.x - this.tickLength << 0, f), this.ctx.stroke()), !e || h++ % 2 == 0 || this._labels[n].stripLine) && (t.textBlock.x = i.x - t.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5, t.textBlock.y = this.labelAngle === 0 ? i.y : i.y - t.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), t.textBlock.render(!0));
                this.title && (this._titleTextBlock = new c(this.ctx, {
                    x: this.boundingRect.x1 + 1,
                    y: this.lineCoordinates.y2,
                    maxWidth: this.lineCoordinates.height,
                    maxHeight: this.titleFontSize * 1.5,
                    angle: -90,
                    text: this.title,
                    horizontalAlign: "center",
                    fontSize: this.titleFontSize,
                    fontFamily: this.titleFontFamily,
                    fontWeight: this.titleFontWeight,
                    fontColor: this.titleFontColor,
                    fontStyle: this.titleFontStyle,
                    textBaseline: "top"
                }), a = this._titleTextBlock.measureText(), this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
            } else if(this._position === "right") {
                for(n = 0; n < this._labels.length; n++)(t = this._labels[n], t.position < this.viewportMinimum || t.position > this.viewportMaximum) || (i = this.getPixelCoordinatesOnAxis(t.position), (this.tickThickness && !this._labels[n].stripLine || this._labels[n].stripLine && this._labels[n].stripLine._thicknessType === "pixel") && (this._labels[n].stripLine ? (r = this._labels[n].stripLine, this.ctx.lineWidth = r.thickness, this.ctx.strokeStyle = r.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), f = this.ctx.lineWidth % 2 == 1 ? (i.y << 0) + .5 : i.y << 0, this.ctx.beginPath(), this.ctx.moveTo(i.x << 0, f), this.ctx.lineTo(i.x + this.tickLength << 0, f), this.ctx.stroke()), !e || h++ % 2 == 0 || this._labels[n].stripLine) && (t.textBlock.x = i.x + this.tickLength + 5, t.textBlock.y = this.labelAngle === 0 ? i.y : i.y, t.textBlock.render(!0));
                this.title && (this._titleTextBlock = new c(this.ctx, {
                    x: this.boundingRect.x2 - 1,
                    y: this.lineCoordinates.y2,
                    maxWidth: this.lineCoordinates.height,
                    maxHeight: this.titleFontSize * 1.5,
                    angle: 90,
                    text: this.title,
                    horizontalAlign: "center",
                    fontSize: this.titleFontSize,
                    fontFamily: this.titleFontFamily,
                    fontWeight: this.titleFontWeight,
                    fontColor: this.titleFontColor,
                    fontStyle: this.titleFontStyle,
                    textBaseline: "top"
                }), this._titleTextBlock.measureText(), this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
            }
        };
        e.prototype.renderInterlacedColors = function() {
            var u = this.chart.plotArea.ctx,
                t, f, i = this.chart.plotArea,
                n = 0,
                r = !0;
            if((this._position === "bottom" || this._position === "top") && this.interlacedColor)
                for(u.fillStyle = this.interlacedColor, n = 0; n < this._labels.length; n++) this._labels[n].stripLine || (r ? (t = this.getPixelCoordinatesOnAxis(this._labels[n].position), f = n + 1 >= this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[n + 1].position), u.fillRect(t.x, i.y1, Math.abs(f.x - t.x), Math.abs(i.y1 - i.y2)), r = !1) : r = !0);
            else if((this._position === "left" || this._position === "right") && this.interlacedColor)
                for(u.fillStyle = this.interlacedColor, n = 0; n < this._labels.length; n++) this._labels[n].stripLine || (r ? (f = this.getPixelCoordinatesOnAxis(this._labels[n].position), t = n + 1 >= this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[n + 1].position), u.fillRect(i.x1, t.y, Math.abs(i.x1 - i.x2), Math.abs(t.y - f.y)), r = !1) : r = !0);
            u.beginPath()
        };
        e.prototype.renderStripLinesOfThicknessType = function(n) {
            var r, i, t;
            if(this.stripLines && this.stripLines.length > 0 && n)
                for(r = this, i = 0, i = 0; i < this.stripLines.length; i++)(t = this.stripLines[i], t._thicknessType === n) && (n === "pixel" && (t.value < this.viewportMinimum || t.value > this.viewportMaximum) || (t.showOnTop ? this.chart.addEventListener("dataAnimationIterationEnd", t.render, t) : t.render()))
        };
        e.prototype.renderGrid = function() {
            var n, i, r, u, t, f;
            if(this.gridThickness && this.gridThickness > 0)
                if(n = this.chart.ctx, r = this.chart.plotArea, n.lineWidth = this.gridThickness, n.strokeStyle = this.gridColor, n.setLineDash && n.setLineDash(y(this.gridDashType, this.gridThickness)), this._position === "bottom" || this._position === "top")
                    for(t = 0; t < this._labels.length && !this._labels[t].stripLine; t++) this._labels[t].position < this.viewportMinimum || this._labels[t].position > this.viewportMaximum || (n.beginPath(), i = this.getPixelCoordinatesOnAxis(this._labels[t].position), u = n.lineWidth % 2 == 1 ? (i.x << 0) + .5 : i.x << 0, n.moveTo(u, r.y1 << 0), n.lineTo(u, r.y2 << 0), n.stroke());
                else if(this._position === "left" || this._position === "right")
                    for(t = 0; t < this._labels.length && !this._labels[t].stripLine; t++) t === 0 && this.type === "axisY" && this.chart.axisX && this.chart.axisX.lineThickness || this._labels[t].position < this.viewportMinimum || this._labels[t].position > this.viewportMaximum || (n.beginPath(), i = this.getPixelCoordinatesOnAxis(this._labels[t].position), f = n.lineWidth % 2 == 1 ? (i.y << 0) + .5 : i.y << 0, n.moveTo(r.x1 << 0, f), n.lineTo(r.x2 << 0, f), n.stroke())
        };
        e.prototype.renderAxisLine = function() {
            var n = this.chart.ctx,
                t, i;
            this._position === "bottom" || this._position === "top" ? this.lineThickness && (n.lineWidth = this.lineThickness, n.strokeStyle = this.lineColor ? this.lineColor : "black", n.setLineDash && n.setLineDash(y(this.lineDashType, this.lineThickness)), t = this.lineThickness % 2 == 1 ? (this.lineCoordinates.y1 << 0) + .5 : this.lineCoordinates.y1 << 0, n.beginPath(), n.moveTo(this.lineCoordinates.x1, t), n.lineTo(this.lineCoordinates.x2, t), n.stroke()) : (this._position === "left" || this._position === "right") && this.lineThickness && (n.lineWidth = this.lineThickness, n.strokeStyle = this.lineColor, n.setLineDash && n.setLineDash(y(this.lineDashType, this.lineThickness)), i = this.lineThickness % 2 == 1 ? (this.lineCoordinates.x1 << 0) + .5 : this.lineCoordinates.x1 << 0, n.beginPath(), n.moveTo(i, this.lineCoordinates.y1), n.lineTo(i, this.lineCoordinates.y2), n.stroke())
        };
        e.prototype.getPixelCoordinatesOnAxis = function(n) {
            var t = {},
                r = this.lineCoordinates.width,
                u = this.lineCoordinates.height,
                i;
            return(this._position === "bottom" || this._position === "top") && (i = this.conversionParameters.pixelPerUnit, t.x = this.conversionParameters.reference + i * (n - this.viewportMinimum), t.y = this.lineCoordinates.y1), (this._position === "left" || this._position === "right") && (i = -this.conversionParameters.pixelPerUnit, t.y = this.conversionParameters.reference - i * (n - this.viewportMinimum), t.x = this.lineCoordinates.x2), t
        };
        e.prototype.convertPixelToValue = function(n) {
            if(!n) return null;
            var t = this._position === "left" || this._position === "right" ? n.y : n.x;
            return this.conversionParameters.minimum + (t - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit
        };
        e.prototype.setViewPortRange = function(n, t) {
            this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(n, t);
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(n, t)
        };
        e.prototype.getXValueAt = function(n) {
            if(!n) return null;
            var t = null;
            return this._position === "left" ? t = (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - n.y) + this.chart.axisX.viewportMinimum : this._position === "bottom" && (t = (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.width * (n.x - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.viewportMinimum), t
        };
        e.prototype.calculateValueToPixelConversionParameters = function() {
            this.reversed = !1;
            var n = {
                    pixelPerUnit: null,
                    minimum: null,
                    reference: null
                },
                t = this.lineCoordinates.width,
                i = this.lineCoordinates.height;
            n.minimum = this.viewportMinimum;
            (this._position === "bottom" || this._position === "top") && (n.pixelPerUnit = (this.reversed ? -1 : 1) * t / Math.abs(this.viewportMaximum - this.viewportMinimum), n.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1);
            (this._position === "left" || this._position === "right") && (n.pixelPerUnit = (this.reversed ? 1 : -1) * i / Math.abs(this.viewportMaximum - this.viewportMinimum), n.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2);
            this.conversionParameters = n
        };
        e.prototype.calculateAxisParameters = function() {
            var h = this.chart.layoutManager.getFreeSpace(),
                l = !1,
                r, t, n, o, i, u, s, c;
            if(this._position === "bottom" || this._position === "top" ? (this.maxWidth = h.width, this.maxHeight = h.height) : (this.maxWidth = h.height, this.maxHeight = h.width), r = this.type === "axisX" ? this.maxWidth < 500 ? 8 : Math.max(6, Math.floor(this.maxWidth / 62)) : Math.max(Math.floor(this.maxWidth / 40), 2), u = 0, (this.viewportMinimum === null || isNaN(this.viewportMinimum)) && (this.viewportMinimum = this.minimum), (this.viewportMaximum === null || isNaN(this.viewportMaximum)) && (this.viewportMaximum = this.maximum), this.type === "axisX" ? (t = this.viewportMinimum !== null ? this.viewportMinimum : this.dataInfo.viewPortMin, n = this.viewportMaximum !== null ? this.viewportMaximum : this.dataInfo.viewPortMax, n - t == 0 && (u = typeof this._options.interval == "undefined" ? .4 : this._options.interval, n += u, t -= u), this.dataInfo.minDiff !== Infinity ? o = this.dataInfo.minDiff : n - t > 1 ? o = Math.abs(n - t) * .5 : (o = 1, this.chart.plotInfo.axisXValueType === "dateTime" && (l = !0))) : this.type === "axisY" && (t = this.viewportMinimum !== null ? this.viewportMinimum : this.dataInfo.viewPortMin, n = this.viewportMaximum !== null ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(t) || isFinite(n) ? isFinite(t) ? isFinite(n) || (n = t) : t = n : (n = typeof this._options.interval == "undefined" ? -Infinity : this._options.interval, t = 0), t === 0 && n === 0 ? (n += 9, t = 0) : n - t == 0 ? (u = Math.min(Math.abs(Math.abs(n) * .01), 5), n += u, t -= u) : t > n ? (u = Math.min(Math.abs(Math.abs(n - t) * .01), 5), n >= 0 ? t = n - u : n = t + u) : (u = Math.min(Math.abs(Math.abs(n - t) * .01), .05), n !== 0 && (n += u), t !== 0 && (t -= u)), o = this.dataInfo.minDiff !== Infinity ? this.dataInfo.minDiff : n - t > 1 ? Math.abs(n - t) * .5 : 1, this.includeZero && (this.viewportMinimum === null || isNaN(this.viewportMinimum)) && t > 0 && (t = 0), this.includeZero && (this.viewportMaximum === null || isNaN(this.viewportMaximum)) && n < 0 && (n = 0)), i = (isNaN(this.viewportMaximum) || this.viewportMaximum === null ? n : this.viewportMaximum) - (isNaN(this.viewportMinimum) || this.viewportMinimum === null ? t : this.viewportMinimum), this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime" ? (this.intervalType || (i / 1 <= r ? (this.interval = 1, this.intervalType = "millisecond") : i / 2 <= r ? (this.interval = 2, this.intervalType = "millisecond") : i / 5 <= r ? (this.interval = 5, this.intervalType = "millisecond") : i / 10 <= r ? (this.interval = 10, this.intervalType = "millisecond") : i / 20 <= r ? (this.interval = 20, this.intervalType = "millisecond") : i / 50 <= r ? (this.interval = 50, this.intervalType = "millisecond") : i / 100 <= r ? (this.interval = 100, this.intervalType = "millisecond") : i / 200 <= r ? (this.interval = 200, this.intervalType = "millisecond") : i / 250 <= r ? (this.interval = 250, this.intervalType = "millisecond") : i / 300 <= r ? (this.interval = 300, this.intervalType = "millisecond") : i / 400 <= r ? (this.interval = 400, this.intervalType = "millisecond") : i / 500 <= r ? (this.interval = 500, this.intervalType = "millisecond") : i / (f.secondDuration * 1) <= r ? (this.interval = 1, this.intervalType = "second") : i / (f.secondDuration * 2) <= r ? (this.interval = 2, this.intervalType = "second") : i / (f.secondDuration * 5) <= r ? (this.interval = 5, this.intervalType = "second") : i / (f.secondDuration * 10) <= r ? (this.interval = 10, this.intervalType = "second") : i / (f.secondDuration * 15) <= r ? (this.interval = 15, this.intervalType = "second") : i / (f.secondDuration * 20) <= r ? (this.interval = 20, this.intervalType = "second") : i / (f.secondDuration * 30) <= r ? (this.interval = 30, this.intervalType = "second") : i / (f.minuteDuration * 1) <= r ? (this.interval = 1, this.intervalType = "minute") : i / (f.minuteDuration * 2) <= r ? (this.interval = 2, this.intervalType = "minute") : i / (f.minuteDuration * 5) <= r ? (this.interval = 5, this.intervalType = "minute") : i / (f.minuteDuration * 10) <= r ? (this.interval = 10, this.intervalType = "minute") : i / (f.minuteDuration * 15) <= r ? (this.interval = 15, this.intervalType = "minute") : i / (f.minuteDuration * 20) <= r ? (this.interval = 20, this.intervalType = "minute") : i / (f.minuteDuration * 30) <= r ? (this.interval = 30, this.intervalType = "minute") : i / (f.hourDuration * 1) <= r ? (this.interval = 1, this.intervalType = "hour") : i / (f.hourDuration * 2) <= r ? (this.interval = 2, this.intervalType = "hour") : i / (f.hourDuration * 3) <= r ? (this.interval = 3, this.intervalType = "hour") : i / (f.hourDuration * 6) <= r ? (this.interval = 6, this.intervalType = "hour") : i / (f.dayDuration * 1) <= r ? (this.interval = 1, this.intervalType = "day") : i / (f.dayDuration * 2) <= r ? (this.interval = 2, this.intervalType = "day") : i / (f.dayDuration * 4) <= r ? (this.interval = 4, this.intervalType = "day") : i / (f.weekDuration * 1) <= r ? (this.interval = 1, this.intervalType = "week") : i / (f.weekDuration * 2) <= r ? (this.interval = 2, this.intervalType = "week") : i / (f.weekDuration * 3) <= r ? (this.interval = 3, this.intervalType = "week") : i / (f.monthDuration * 1) <= r ? (this.interval = 1, this.intervalType = "month") : i / (f.monthDuration * 2) <= r ? (this.interval = 2, this.intervalType = "month") : i / (f.monthDuration * 3) <= r ? (this.interval = 3, this.intervalType = "month") : i / (f.monthDuration * 6) <= r ? (this.interval = 6, this.intervalType = "month") : i / (f.yearDuration * 1) <= r ? (this.interval = 1, this.intervalType = "year") : i / (f.yearDuration * 2) <= r ? (this.interval = 2, this.intervalType = "year") : i / (f.yearDuration * 4) <= r ? (this.interval = 4, this.intervalType = "year") : (this.interval = Math.floor(e.getNiceNumber(i / (r - 1), !0) / f.yearDuration), this.intervalType = "year")), (this.viewportMinimum === null || isNaN(this.viewportMinimum)) && (this.viewportMinimum = t - o / 2), (this.viewportMaximum === null || isNaN(this.viewportMaximum)) && (this.viewportMaximum = n + o / 2), this.valueFormatString || (l ? this.valueFormatString = "MMM DD YYYY HH:mm" : this.intervalType === "year" ? this.valueFormatString = "YYYY" : this.intervalType === "month" ? this.valueFormatString = "MMM YYYY" : this.intervalType === "week" ? this.valueFormatString = "MMM DD YYYY" : this.intervalType === "day" ? this.valueFormatString = "MMM DD YYYY" : this.intervalType === "hour" ? this.valueFormatString = "hh:mm TT" : this.intervalType === "minute" ? this.valueFormatString = "hh:mm TT" : this.intervalType === "second" ? this.valueFormatString = "hh:mm:ss TT" : this.intervalType === "millisecond" && (this.valueFormatString = "fff'ms'"))) : (this.intervalType = "number", i = e.getNiceNumber(i, !1), this.interval = this._options && this._options.interval ? this._options.interval : e.getNiceNumber(i / (r - 1), !0), (this.viewportMinimum === null || isNaN(this.viewportMinimum)) && (this.viewportMinimum = this.type === "axisX" ? t - o / 2 : Math.floor(t / this.interval) * this.interval), (this.viewportMaximum === null || isNaN(this.viewportMaximum)) && (this.viewportMaximum = this.type === "axisX" ? n + o / 2 : Math.ceil(n / this.interval) * this.interval), this.viewportMaximum === 0 && this.viewportMinimum === 0 && (this._options.viewportMinimum === 0 ? this.viewportMaximum += 10 : this._options.viewportMaximum === 0 && (this.viewportMinimum -= 10), this._options && typeof this._options.interval == "undefined" && (this.interval = e.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (r - 1), !0)))), (this.minimum === null || this.maximum === null) && (this.type === "axisX" ? (t = this.minimum !== null ? this.minimum : this.dataInfo.min, n = this.maximum !== null ? this.maximum : this.dataInfo.max, n - t == 0 && (u = typeof this._options.interval == "undefined" ? .4 : this._options.interval, n += u, t -= u), o = this.dataInfo.minDiff !== Infinity ? this.dataInfo.minDiff : n - t > 1 ? Math.abs(n - t) * .5 : 1) : this.type === "axisY" && (t = this.minimum !== null ? this.minimum : this.dataInfo.min, n = this.maximum !== null ? this.maximum : this.dataInfo.max, isFinite(t) || isFinite(n) ? t === 0 && n === 0 ? (n += 9, t = 0) : n - t == 0 ? (u = Math.min(Math.abs(Math.abs(n) * .01), 5), n += u, t -= u) : t > n ? (u = Math.min(Math.abs(Math.abs(n - t) * .01), 5), n >= 0 ? t = n - u : n = t + u) : (u = Math.min(Math.abs(Math.abs(n - t) * .01), .05), n !== 0 && (n += u), t !== 0 && (t -= u)) : (n = typeof this._options.interval == "undefined" ? -Infinity : this._options.interval, t = 0), o = this.dataInfo.minDiff !== Infinity ? this.dataInfo.minDiff : n - t > 1 ? Math.abs(n - t) * .5 : 1, this.includeZero && (this.minimum === null || isNaN(this.minimum)) && t > 0 && (t = 0), this.includeZero && (this.maximum === null || isNaN(this.maximum)) && n < 0 && (n = 0)), i = n - t, this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime" ? ((this.minimum === null || isNaN(this.minimum)) && (this.minimum = t - o / 2), (this.maximum === null || isNaN(this.maximum)) && (this.maximum = n + o / 2)) : (this.intervalType = "number", this.minimum === null && (this.minimum = this.type === "axisX" ? t - o / 2 : Math.floor(t / this.interval) * this.interval, this.minimum = Math.min(this.minimum, this.sessionVariables.viewportMinimum === null || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), this.maximum === null && (this.maximum = this.type === "axisX" ? n + o / 2 : Math.ceil(n / this.interval) * this.interval, this.maximum = Math.max(this.maximum, this.sessionVariables.viewportMaximum === null || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), this.maximum === 0 && this.minimum === 0 && (this._options.minimum === 0 ? this.maximum += 10 : this._options.maximum === 0 && (this.minimum -= 10)))), this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum), this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum), this.intervalStartPosition = this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime" ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + this.interval * .2) / this.interval) * this.interval, !this.valueFormatString && (this.valueFormatString = "#,##0.##", i = Math.abs(this.viewportMaximum - this.viewportMinimum), i < 1 && (s = Math.floor(Math.abs(Math.log(i) / Math.LN10)) + 2, (isNaN(s) || !isFinite(s)) && (s = 2), s > 2)))
                for(c = 0; c < s - 2; c++) this.valueFormatString += "#"
        };
        e.getNiceNumber = function(n, t) {
            var r = Math.floor(Math.log(n) / Math.LN10),
                i = n / Math.pow(10, r),
                u;
            return u = t ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10, Number((u * Math.pow(10, r)).toFixed(20))
        };
        e.prototype.getLabelStartPoint = function() {
            var t = pi(this.interval, this.intervalType),
                i = Math.floor(this.viewportMinimum / t) * t,
                n = new Date(i);
            return this.intervalType === "millisecond" || (this.intervalType === "second" ? n.getMilliseconds() > 0 && (n.setSeconds(n.getSeconds() + 1), n.setMilliseconds(0)) : this.intervalType === "minute" ? (n.getSeconds() > 0 || n.getMilliseconds() > 0) && (n.setMinutes(n.getMinutes() + 1), n.setSeconds(0), n.setMilliseconds(0)) : this.intervalType === "hour" ? (n.getMinutes() > 0 || n.getSeconds() > 0 || n.getMilliseconds() > 0) && (n.setHours(n.getHours() + 1), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)) : this.intervalType === "day" ? (n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0 || n.getMilliseconds() > 0) && (n.setDate(n.getDate() + 1), n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)) : this.intervalType === "week" ? (n.getDay() > 0 || n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0 || n.getMilliseconds() > 0) && (n.setDate(n.getDate() + (7 - n.getDay())), n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)) : this.intervalType === "month" ? (n.getDate() > 1 || n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0 || n.getMilliseconds() > 0) && (n.setMonth(n.getMonth() + 1), n.setDate(1), n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)) : this.intervalType === "year" && (n.getMonth() > 0 || n.getDate() > 1 || n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0 || n.getMilliseconds() > 0) && (n.setFullYear(n.getFullYear() + 1), n.setMonth(0), n.setDate(1), n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0))), n
        };
        w(ti, h);
        ti.prototype.render = function() {
            var n = this.parent.getPixelCoordinatesOnAxis(this.value),
                t = Math.abs(this._thicknessType === "pixel" ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness),
                o, s, l, i, r, f, e, h, c;
            t > 0 && (o = this.opacity === null ? 1 : this.opacity, this.ctx.strokeStyle = this.color, this.ctx.beginPath(), s = this.ctx.globalAlpha, this.ctx.globalAlpha = o, l = u(this.id), this.ctx.lineWidth = t, this.ctx.setLineDash && this.ctx.setLineDash(y(this.lineDashType, t)), this.parent._position === "bottom" || this.parent._position === "top" ? (h = this.ctx.lineWidth % 2 == 1 ? (n.x << 0) + .5 : n.x << 0, i = r = h, f = this.chart.plotArea.y1, e = this.chart.plotArea.y2) : (this.parent._position === "left" || this.parent._position === "right") && (c = this.ctx.lineWidth % 2 == 1 ? (n.y << 0) + .5 : n.y << 0, f = e = c, i = this.chart.plotArea.x1, r = this.chart.plotArea.x2), this.ctx.moveTo(i, f), this.ctx.lineTo(r, e), this.ctx.stroke(), this.ctx.globalAlpha = s)
        };
        w(k, h);
        k.prototype._initialize = function() {
            if(this.enabled) {
                this.container = document.createElement("div");
                this.container.setAttribute("class", "canvasjs-chart-tooltip");
                this.container.style.position = "absolute";
                this.container.style.height = "auto";
                this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
                this.container.style.zIndex = "1000";
                this.container.style.display = "none";
                var t = '<div style=" width: auto;';
                t += "height: auto;";
                t += "min-width: 50px;";
                t += "line-height: auto;";
                t += "margin: 0px 0px 0px 0px;";
                t += "padding: 5px;";
                t += "font-family: Calibri, Arial, Georgia, serif;";
                t += "font-weight: normal;";
                t += "font-style: " + (n ? "italic;" : "normal;");
                t += "font-size: 14px;";
                t += "color: #000000;";
                t += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
                t += "text-align: left;";
                t += "border: 2px solid gray;";
                t += n ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
                t += "text-indent: 0px;";
                t += "white-space: nowrap;";
                t += "border-radius: 5px;";
                t += "-moz-user-select:none;";
                t += "-khtml-user-select: none;";
                t += "-webkit-user-select: none;";
                t += "-ms-user-select: none;";
                t += "user-select: none;";
                n || (t += "filter: alpha(opacity = 90);", t += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
                t += '} "> Sample Tooltip<\/div>';
                this.container.innerHTML = t;
                this.contentDiv = this.container.firstChild;
                this.container.style.borderRadius = this.contentDiv.style.borderRadius;
                this.chart._canvasJSContainer.appendChild(this.container)
            }
        };
        k.prototype.mouseMoveHandler = function(n, t) {
            this._lastUpdated && (new Date).getTime() - this._lastUpdated < 40 || (this._lastUpdated = (new Date).getTime(), this._updateToolTip(n, t))
        };
        k.prototype._updateToolTip = function(t, i) {
            var o, w, v, y, u, h, c, e, l, p;
            if(!this.chart.disableToolTip) {
                if(typeof t == "undefined" || typeof i == "undefined") {
                    if(isNaN(this._prevX) || isNaN(this._prevY)) return;
                    t = this._prevX;
                    i = this._prevY
                } else this._prevX = t, this._prevY = i;
                var a = null,
                    f = null,
                    r = [],
                    s, h = 0;
                if(this.shared && this.enabled && this.chart.plotInfo.axisPlacement !== "none") {
                    for(h = this.chart.plotInfo.axisPlacement === "xySwapped" ? (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - i) + this.chart.axisX.viewportMinimum : (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.width * (t - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.viewportMinimum, o = [], e = 0; e < this.chart.data.length; e++) u = this.chart.data[e].getDataPointAtX(h, !0), u && u.index >= 0 && (u.dataSeries = this.chart.data[e], u.dataPoint.y !== null && o.push(u));
                    if(o.length === 0) return;
                    for(o.sort(function(n, t) {
                        return n.distance - t.distance
                    }), w = o[0], e = 0; e < o.length; e++) o[e].dataPoint.x.valueOf() === w.dataPoint.x.valueOf() && r.push(o[e]);
                    o = null
                } else {
                    if(v = this.chart.getDataPointAtXY(t, i, !0), v) this.currentDataPointIndex = v.dataPointIndex, this.currentSeriesIndex = v.dataSeries.index;
                    else if(n)
                        if(y = hi(t, i, this.chart._eventManager.ghostCtx), y > 0 && typeof this.chart._eventManager.objectMap[y] != "undefined") {
                            if(eventObject = this.chart._eventManager.objectMap[y], eventObject.objectType === "legendItem") return;
                            this.currentSeriesIndex = eventObject.dataSeriesIndex;
                            this.currentDataPointIndex = eventObject.dataPointIndex >= 0 ? eventObject.dataPointIndex : -1
                        } else this.currentDataPointIndex = -1;
                    else this.currentDataPointIndex = -1;
                    if(this.currentSeriesIndex >= 0) {
                        if(f = this.chart.data[this.currentSeriesIndex], u = {}, this.currentDataPointIndex >= 0) a = f.dataPoints[this.currentDataPointIndex], u.dataSeries = f, u.dataPoint = a, u.index = this.currentDataPointIndex, u.distance = Math.abs(a.x - h);
                        else if(this.enabled && (f.type === "line" || f.type === "stepLine" || f.type === "spline" || f.type === "area" || f.type === "stepArea" || f.type === "splineArea" || f.type === "stackedArea" || f.type === "stackedArea100" || f.type === "rangeArea" || f.type === "rangeSplineArea" || f.type === "candlestick" || f.type === "ohlc")) h = f.axisX.conversionParameters.minimum + (t - f.axisX.conversionParameters.reference) / f.axisX.conversionParameters.pixelPerUnit, u = f.getDataPointAtX(h, !0), u.dataSeries = f, this.currentDataPointIndex = u.index, a = u.dataPoint;
                        else return;
                        if(u.dataPoint.y !== null)
                            if(u.dataSeries.axisY)
                                if(u.dataPoint.y.length > 0) {
                                    for(c = 0, e = 0; e < u.dataPoint.y.length; e++) u.dataPoint.y[e] < u.dataSeries.axisY.viewportMinimum ? c-- : u.dataPoint.y[e] > u.dataSeries.axisY.viewportMaximum && c++;
                                    c < u.dataPoint.y.length && c > -u.dataPoint.y.length && r.push(u)
                                } else u.dataPoint.y >= u.dataSeries.axisY.viewportMinimum && u.dataPoint.y <= u.dataSeries.axisY.viewportMaximum && r.push(u);
                            else r.push(u)
                    }
                }
                if(r.length > 0 && (this.highlightObjects(r), this.enabled))
                    if(l = "", l = this.getToolTipInnerHTML({
                            entries: r
                        }), l !== null) {
                        this.contentDiv.innerHTML = l;
                        this.contentDiv.innerHTML = l;
                        p = !1;
                        this.container.style.display === "none" && (p = !0, this.container.style.display = "block");
                        try {
                            this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : n ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
                            this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.borderColor ? this.borderColor : r[0].dataPoint.color ? r[0].dataPoint.color : r[0].dataSeries.color ? r[0].dataSeries.color : r[0].dataSeries._colorSet[r[0].index % r[0].dataSeries._colorSet.length];
                            this.contentDiv.style.borderWidth = this.borderThickness || this.borderThickness === 0 ? this.borderThickness + "px" : "2px";
                            this.contentDiv.style.borderRadius = this.cornerRadius || this.cornerRadius === 0 ? this.cornerRadius + "px" : "5px";
                            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
                            this.contentDiv.style.fontSize = this.fontSize || this.fontSize === 0 ? this.fontSize + "px" : "14px";
                            this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000";
                            this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;";
                            this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal";
                            this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : n ? "italic" : "normal"
                        } catch(b) {}
                        toolTipLeft = r[0].dataSeries.type === "pie" || r[0].dataSeries.type === "doughnut" || r[0].dataSeries.type === "funnel" || r[0].dataSeries.type === "bar" || r[0].dataSeries.type === "rangeBar" || r[0].dataSeries.type === "stackedBar" || r[0].dataSeries.type === "stackedBar100" ? t - 10 - this.container.clientWidth : (r[0].dataSeries.axisX.conversionParameters.reference + r[0].dataSeries.axisX.conversionParameters.pixelPerUnit * (r[0].dataPoint.x - r[0].dataSeries.axisX.conversionParameters.minimum) - this.container.clientWidth << 0) - 10;
                        toolTipLeft < 0 && (toolTipLeft += this.container.clientWidth + 20);
                        toolTipLeft + this.container.clientWidth > this.chart._container.clientWidth && (toolTipLeft = Math.max(0, this.chart._container.clientWidth - this.container.clientWidth));
                        toolTipLeft += "px";
                        s = r.length !== 1 || this.shared || r[0].dataSeries.type !== "line" && r[0].dataSeries.type !== "stepLine" && r[0].dataSeries.type !== "spline" && r[0].dataSeries.type !== "area" && r[0].dataSeries.type !== "stepArea" && r[0].dataSeries.type !== "splineArea" && r[0].dataSeries.type !== "stackedArea" && r[0].dataSeries.type !== "stackedArea100" ? r[0].dataSeries.type === "bar" || r[0].dataSeries.type === "rangeBar" || r[0].dataSeries.type === "stackedBar" || r[0].dataSeries.type === "stackedBar100" ? r[0].dataSeries.axisX.conversionParameters.reference + r[0].dataSeries.axisX.conversionParameters.pixelPerUnit * (r[0].dataPoint.x - r[0].dataSeries.axisX.viewportMinimum) + .5 << 0 : i : r[0].dataSeries.axisY.conversionParameters.reference + r[0].dataSeries.axisY.conversionParameters.pixelPerUnit * (r[0].dataPoint.y - r[0].dataSeries.axisY.viewportMinimum) + .5 << 0;
                        s = -s + 10;
                        s + this.container.clientHeight + 5 > 0 && (s -= s + this.container.clientHeight + 5 - 0);
                        s += "px";
                        this.container.style.left = toolTipLeft;
                        this.container.style.bottom = s;
                        !this.animationEnabled || p ? this.disableAnimation() : this.enableAnimation()
                    } else this.hide(!1)
            }
        };
        k.prototype.highlightObjects = function(n) {
            var i = this.chart.overlaidCanvasCtx,
                e, f, s, h, t, u;
            for(this.chart.resetOverlayedCanvas(), i.clearRect(0, 0, this.chart.width, this.chart.height), i.save(), e = this.chart.plotArea, f = 0, i.rect(e.x1, e.y1, e.x2 - e.x1, e.y2 - e.y1), i.clip(), s = 0; s < n.length; s++)
                if(h = n[s], t = this.chart._eventManager.objectMap[h.dataSeries.dataPointIds[h.index]], t && t.objectType && t.objectType === "dataPoint") {
                    var r = this.chart.data[t.dataSeriesIndex],
                        l = r.dataPoints[t.dataPointIndex],
                        c = t.dataPointIndex;
                    l.highlightEnabled !== !1 && (r.highlightEnabled === !0 || l.highlightEnabled === !0) && (r.type === "line" || r.type === "stepLine" || r.type === "spline" || r.type === "scatter" || r.type === "area" || r.type === "stepArea" || r.type === "splineArea" || r.type === "stackedArea" || r.type === "stackedArea100" || r.type === "rangeArea" || r.type === "rangeSplineArea" ? (u = r.getMarkerProperties(c, t.x1, t.y1, this.chart.overlaidCanvasCtx), u.size = Math.max(u.size * 1.5 << 0, 10), u.borderColor = u.borderColor || "#FFFFFF", u.borderThickness = u.borderThickness || Math.ceil(u.size * .1), a.drawMarkers([u]), typeof t.y2 != "undefined" && (u = r.getMarkerProperties(c, t.x1, t.y2, this.chart.overlaidCanvasCtx), u.size = Math.max(u.size * 1.5 << 0, 10), u.borderColor = u.borderColor || "#FFFFFF", u.borderThickness = u.borderThickness || Math.ceil(u.size * .1), a.drawMarkers([u]))) : r.type === "bubble" ? (u = r.getMarkerProperties(c, t.x1, t.y1, this.chart.overlaidCanvasCtx), u.size = t.size, u.color = "white", u.borderColor = "white", i.globalAlpha = .3, a.drawMarkers([u]), i.globalAlpha = 1) : r.type === "column" || r.type === "stackedColumn" || r.type === "stackedColumn100" || r.type === "bar" || r.type === "rangeBar" || r.type === "stackedBar" || r.type === "stackedBar100" || r.type === "rangeColumn" ? o(i, t.x1, t.y1, t.x2, t.y2, "white", 0, null, !1, !1, !1, !1, .3) : r.type === "pie" || r.type === "doughnut" ? dt(i, t.center, t.radius, "white", r.type, t.startAngle, t.endAngle, .3, t.percentInnerRadius) : r.type === "candlestick" ? (i.globalAlpha = 1, i.strokeStyle = t.color, i.lineWidth = t.borderThickness * 2, f = i.lineWidth % 2 == 0 ? 0 : .5, i.beginPath(), i.moveTo(t.x3 - f, t.y2), i.lineTo(t.x3 - f, Math.min(t.y1, t.y4)), i.stroke(), i.beginPath(), i.moveTo(t.x3 - f, Math.max(t.y1, t.y4)), i.lineTo(t.x3 - f, t.y3), i.stroke(), o(i, t.x1, Math.min(t.y1, t.y4), t.x2, Math.max(t.y1, t.y4), "transparent", t.borderThickness * 2, t.color, !1, !1, !1, !1), i.globalAlpha = 1) : r.type === "ohlc" && (i.globalAlpha = 1, i.strokeStyle = t.color, i.lineWidth = t.borderThickness * 2, f = i.lineWidth % 2 == 0 ? 0 : .5, i.beginPath(), i.moveTo(t.x3 - f, t.y2), i.lineTo(t.x3 - f, t.y3), i.stroke(), i.beginPath(), i.moveTo(t.x3, t.y1), i.lineTo(t.x1, t.y1), i.stroke(), i.beginPath(), i.moveTo(t.x3, t.y4), i.lineTo(t.x2, t.y4), i.stroke(), i.globalAlpha = 1))
                }
            i.restore();
            i.globalAlpha = 1;
            i.beginPath();
            return
        };
        k.prototype.getToolTipInnerHTML = function(n) {
            for(var e = n.entries, r = null, t = null, i = null, o = 0, f = "", h = !0, c, s, u = 0; u < e.length; u++)
                if(e[u].dataSeries.toolTipContent || e[u].dataPoint.toolTipContent) {
                    h = !1;
                    break
                }
            if(h && (this.content && typeof this.content == "function" || this.contentFormatter)) c = {
                chart: this.chart,
                toolTip: this._options,
                entries: e
            }, r = this.contentFormatter ? this.contentFormatter(c) : this.content(c);
            else if(this.shared && this.chart.plotInfo.axisPlacement !== "none") {
                for(s = "", u = 0; u < e.length; u++)(t = e[u].dataSeries, i = e[u].dataPoint, o = e[u].index, f = "", u === 0 && h && !this.content && (s += typeof this.chart.axisX.labels[i.x] != "undefined" ? this.chart.axisX.labels[i.x] : "{x}", s += "<\/br>", s = this.chart.replaceKeywordsWithValue(s, i, t, o)), i.toolTipContent !== null && (typeof i.toolTipContent != "undefined" || t._options.toolTipContent !== null)) && (t.type === "line" || t.type === "stepLine" || t.type === "spline" || t.type === "area" || t.type === "stepArea" || t.type === "splineArea" || t.type === "column" || t.type === "bar" || t.type === "scatter" || t.type === "stackedColumn" || t.type === "stackedColumn100" || t.type === "stackedBar" || t.type === "stackedBar100" || t.type === "stackedArea" || t.type === "stackedArea100" ? f += i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && typeof this.content != "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:<\/span>&nbsp;&nbsp;{y}" : t.type === "bubble" ? f += i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && typeof this.content != "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:<\/span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : t.type === "pie" || t.type === "doughnut" || t.type === "funnel" ? f += i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && typeof this.content != "function" ? this.content : "&nbsp;&nbsp;{y}" : t.type === "rangeColumn" || t.type === "rangeBar" || t.type === "rangeArea" || t.type === "rangeSplineArea" ? f += i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && typeof this.content != "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:<\/span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}" : (t.type === "candlestick" || t.type === "ohlc") && (f += i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && typeof this.content != "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:<\/span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"), r === null && (r = ""), this.reversed === !0 ? (r = this.chart.replaceKeywordsWithValue(f, i, t, o) + r, u < e.length - 1 && (r = "<\/br>" + r)) : (r += this.chart.replaceKeywordsWithValue(f, i, t, o), u < e.length - 1 && (r += "<\/br>")));
                r !== null && (r = s + r)
            } else {
                if(t = e[0].dataSeries, i = e[0].dataPoint, o = e[0].index, i.toolTipContent === null || typeof i.toolTipContent == "undefined" && t._options.toolTipContent === null) return null;
                t.type === "line" || t.type === "stepLine" || t.type === "spline" || t.type === "area" || t.type === "stepArea" || t.type === "splineArea" || t.type === "column" || t.type === "bar" || t.type === "scatter" || t.type === "stackedColumn" || t.type === "stackedColumn100" || t.type === "stackedBar" || t.type === "stackedBar100" || t.type === "stackedArea" || t.type === "stackedArea100" ? f = i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && typeof this.content != "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (i.label ? "{label}" : "{x}") + " :<\/span>&nbsp;&nbsp;{y}" : t.type === "bubble" ? f = i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && typeof this.content != "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (i.label ? "{label}" : "{x}") + ":<\/span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : t.type === "pie" || t.type === "doughnut" || t.type === "funnel" ? f = i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && typeof this.content != "function" ? this.content : (i.name ? "{name}:&nbsp;&nbsp;" : i.label ? "{label}:&nbsp;&nbsp;" : "") + "{y}" : t.type === "rangeColumn" || t.type === "rangeBar" || t.type === "rangeArea" || t.type === "rangeSplineArea" ? f = i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && typeof this.content != "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (i.label ? "{label}" : "{x}") + " :<\/span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : (t.type === "candlestick" || t.type === "ohlc") && (f = i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && typeof this.content != "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (i.label ? "{label}" : "{x}") + "<\/span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}");
                r === null && (r = "");
                r += this.chart.replaceKeywordsWithValue(f, i, t, o)
            }
            return r
        };
        k.prototype.enableAnimation = function() {
            this.container.style.WebkitTransition || (this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.transition = "left .2s ease-out, bottom .2s ease-out")
        };
        k.prototype.disableAnimation = function() {
            this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
        };
        k.prototype.hide = function(n) {
            this.enabled && (n = typeof n == "undefined" ? !0 : n, this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevX = NaN, this._prevY = NaN, n && this.chart.resetOverlayedCanvas())
        };
        t.prototype.getPercentAndTotal = function(n, t) {
            var u = null,
                r = null,
                f = null;
            if(n.type.indexOf("stacked") >= 0) r = 0, u = t.x.getTime ? t.x.getTime() : t.x, u in n.plotUnit.yTotals && (r = n.plotUnit.yTotals[u], f = isNaN(t.y) ? 0 : r === 0 ? 0 : t.y / r * 100);
            else if(n.type === "pie" || n.type === "doughnut") {
                for(r = 0, i = 0; i < n.dataPoints.length; i++) isNaN(n.dataPoints[i].y) || (r += n.dataPoints[i].y);
                f = isNaN(t.y) ? 0 : t.y / r * 100
            }
            return {
                percent: f,
                total: r
            }
        };
        t.prototype.replaceKeywordsWithValue = function(n, t, i, r, u) {
            var f = this,
                e, o, l, a;
            if(u = typeof u == "undefined" ? 0 : u, (i.type.indexOf("stacked") >= 0 || i.type === "pie" || i.type === "doughnut") && (n.indexOf("#percent") >= 0 || n.indexOf("#total") >= 0)) {
                var s = "#percent",
                    c = "#total",
                    h = this.getPercentAndTotal(i, t);
                c = isNaN(h.total) ? c : h.total;
                s = isNaN(h.percent) ? s : h.percent;
                do {
                    if(e = "", i.percentFormatString) e = i.percentFormatString;
                    else
                        for(e = "#,##0.", o = Math.max(Math.ceil(Math.log(1 / Math.abs(s)) / Math.LN10), 2), (isNaN(o) || !isFinite(o)) && (o = 2), l = 0; l < o; l++) e += "#";
                    n = n.replace("#percent", it(s, e, f._cultureInfo));
                    n = n.replace("#total", it(c, i.yValueFormatString ? i.yValueFormatString : "#,##0.########"))
                } while (n.indexOf("#percent") >= 0 || n.indexOf("#total") >= 0)
            }
            return a = function(n) {
                var e, h, s, c, o;
                if(n[0] === '"' && n[n.length - 1] === '"' || n[0] === "'" && n[n.length - 1] === "'") return n.slice(1, n.length - 1);
                e = st(n.slice(1, n.length - 1));
                e = e.replace("#index", u);
                h = null;
                try {
                    s = e.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                    s && s.length > 0 && (h = st(s[2]), e = st(s[1]))
                } catch(l) {}
                if(c = null, e === "color") return t.color ? t.color : i.color ? i.color : i._colorSet[r % i._colorSet.length];
                if(t.hasOwnProperty(e)) c = t;
                else if(i.hasOwnProperty(e)) c = i;
                else return "";
                return o = c[e], h !== null && (o = o[h]), e === "x" ? f.axisX && f.plotInfo.axisXValueType === "dateTime" ? ii(o, t.xValueFormatString ? t.xValueFormatString : i.xValueFormatString ? i.xValueFormatString : f.axisX && f.axisX.valueFormatString ? f.axisX.valueFormatString : "DD MMM YY", f._cultureInfo) : it(o, t.xValueFormatString ? t.xValueFormatString : i.xValueFormatString ? i.xValueFormatString : "#,##0.########", f._cultureInfo) : e === "y" ? it(o, t.yValueFormatString ? t.yValueFormatString : i.yValueFormatString ? i.yValueFormatString : "#,##0.########", f._cultureInfo) : e === "z" ? it(o, t.zValueFormatString ? t.zValueFormatString : i.zValueFormatString ? i.zValueFormatString : "#,##0.########", f._cultureInfo) : o
            }, n.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, a)
        };
        lt.prototype.reset = function() {
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.eventObjects = [];
            n && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
        };
        lt.prototype.getNewObjectTrackingId = function() {
            return ++this.lastObjectId
        };
        lt.prototype.mouseEventHandler = function(n) {
            var t, r, o, h, c, i, l, f;
            if(n.type === "mousemove" || n.type === "click") {
                var u = [],
                    e = pt(n),
                    s = null;
                if(s = this.chart.getObjectAtXY(e.x, e.y, !1), s && typeof this.objectMap[s] != "undefined")
                    if(t = this.objectMap[s], t.objectType === "dataPoint") {
                        var r = this.chart.data[t.dataSeriesIndex],
                            o = r.dataPoints[t.dataPointIndex],
                            a = t.dataPointIndex;
                        t.eventParameter = {
                            x: e.x,
                            y: e.y,
                            dataPoint: o,
                            dataSeries: r._options,
                            dataPointIndex: a,
                            dataSeriesIndex: r.index,
                            chart: this.chart._publicChartReference
                        };
                        t.eventContext = {
                            context: o,
                            userContext: o,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        u.push(t);
                        t = this.objectMap[r.id];
                        t.eventParameter = {
                            x: e.x,
                            y: e.y,
                            dataPoint: o,
                            dataSeries: r._options,
                            dataPointIndex: a,
                            dataSeriesIndex: r.index,
                            chart: this.chart._publicChartReference
                        };
                        t.eventContext = {
                            context: r,
                            userContext: r._options,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        u.push(this.objectMap[r.id])
                    } else t.objectType === "legendItem" && (r = this.chart.data[t.dataSeriesIndex], o = t.dataPointIndex !== null ? r.dataPoints[t.dataPointIndex] : null, t.eventParameter = {
                        x: e.x,
                        y: e.y,
                        dataSeries: r._options,
                        dataPoint: o,
                        dataPointIndex: t.dataPointIndex,
                        dataSeriesIndex: t.dataSeriesIndex,
                        chart: this.chart._publicChartReference
                    }, t.eventContext = {
                        context: this.chart.legend,
                        userContext: this.chart.legend._options,
                        mouseover: "itemmouseover",
                        mousemove: "itemmousemove",
                        mouseout: "itemmouseout",
                        click: "itemclick"
                    }, u.push(t));
                for(h = [], i = 0; i < this.mouseoveredObjectMaps.length; i++) {
                    for(c = !0, f = 0; f < u.length; f++)
                        if(u[f].id === this.mouseoveredObjectMaps[i].id) {
                            c = !1;
                            break
                        }
                    c ? this.fireEvent(this.mouseoveredObjectMaps[i], "mouseout", n) : h.push(this.mouseoveredObjectMaps[i])
                }
                for(this.mouseoveredObjectMaps = h, i = 0; i < u.length; i++) {
                    for(l = !1, f = 0; f < this.mouseoveredObjectMaps.length; f++)
                        if(u[i].id === this.mouseoveredObjectMaps[f].id) {
                            l = !0;
                            break
                        }
                    l || (this.fireEvent(u[i], "mouseover", n), this.mouseoveredObjectMaps.push(u[i]));
                    n.type === "click" ? this.fireEvent(u[i], "click", n) : n.type === "mousemove" && this.fireEvent(u[i], "mousemove", n)
                }
            }
        };
        lt.prototype.fireEvent = function(n, t, i) {
            if(n && t) {
                var f = n.eventParameter,
                    u = n.eventContext,
                    r = n.eventContext.userContext;
                r && u && r[u[t]] && r[u[t]].call(r, f);
                t !== "mouseout" ? r.cursor && r.cursor !== i.target.style.cursor && (i.target.style.cursor = r.cursor) : (i.target.style.cursor = this.chart._defaultCursor, delete n.eventParameter, delete n.eventContext);
                t === "click" && n.objectType === "dataPoint" && this.chart.pieDoughnutClickHandler && this.chart.pieDoughnutClickHandler.call(this.chart.data[n.dataSeriesIndex], f)
            }
        };
        w(at, h);
        fi.prototype.animate = function(n, t, i, u, f) {
            var h = this,
                s;
            for(this.chart.isAnimating = !0, f = f || r.easing.linear, i && this.animations.push({
                startTime: (new Date).getTime() + (n ? n : 0),
                duration: t,
                animationCallback: i,
                onComplete: u
            }), s = []; this.animations.length > 0;) {
                var o = this.animations.shift(),
                    c = (new Date).getTime(),
                    e = 0;
                o.startTime <= c && (e = f(Math.min(c - o.startTime, o.duration), 0, 1, o.duration), e = Math.min(e, 1), (isNaN(e) || !isFinite(e)) && (e = 1));
                e < 1 && s.push(o);
                o.animationCallback(e);
                e >= 1 && o.onComplete && o.onComplete()
            }
            this.animations = s;
            this.animations.length > 0 ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
                h.animate.call(h)
            }) : this.chart.isAnimating = !1
        };
        fi.prototype.cancelAllAnimations = function() {
            this.animations = [];
            this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
            this.animationRequestId = null;
            this.chart.isAnimating = !1
        };
        var r = {
                yScaleAnimation: function(n, t) {
                    if(n !== 0) {
                        var i = t.dest,
                            r = t.source.canvas,
                            u = t.animationBase,
                            f = u - u * n;
                        i.drawImage(r, 0, 0, r.width, r.height, 0, f, i.canvas.width / l, n * i.canvas.height / l)
                    }
                },
                xScaleAnimation: function(n, t) {
                    if(n !== 0) {
                        var i = t.dest,
                            r = t.source.canvas,
                            u = t.animationBase,
                            f = u - u * n;
                        i.drawImage(r, 0, 0, r.width, r.height, f, 0, n * i.canvas.width / l, i.canvas.height / l)
                    }
                },
                xClipAnimation: function(n, t) {
                    if(n !== 0) {
                        var r = t.dest,
                            i = t.source.canvas;
                        r.save();
                        n > 0 && r.drawImage(i, 0, 0, i.width * n, i.height, 0, 0, i.width * n / l, i.height / l);
                        r.restore()
                    }
                },
                fadeInAnimation: function(n, t) {
                    if(n !== 0) {
                        var i = t.dest,
                            r = t.source.canvas;
                        i.save();
                        i.globalAlpha = n;
                        i.drawImage(r, 0, 0, r.width, r.height, 0, 0, i.canvas.width / l, i.canvas.height / l);
                        i.restore()
                    }
                },
                easing: {
                    linear: function(n, t, i, r) {
                        return i * n / r + t
                    },
                    easeOutQuad: function(n, t, i, r) {
                        return -i * (n /= r) * (n - 2) + t
                    },
                    easeOutQuart: function(n, t, i, r) {
                        return -i * ((n = n / r - 1) * n * n * n - 1) + t
                    },
                    easeInQuad: function(n, t, i, r) {
                        return i * (n /= r) * n + t
                    },
                    easeInQuart: function(n, t, i, r) {
                        return i * (n /= r) * n * n * n + t
                    }
                }
            },
            a = {
                drawMarker: function(n, t, i, r, u, f, e, o) {
                    if(i) {
                        var s = 1;
                        i.fillStyle = f ? f : "#000000";
                        i.strokeStyle = e ? e : "#000000";
                        i.lineWidth = o ? o : 0;
                        r === "circle" ? (i.moveTo(n, t), i.beginPath(), i.arc(n, t, u / 2, 0, Math.PI * 2, !1), f && i.fill(), o && (e ? i.stroke() : (s = i.globalAlpha, i.globalAlpha = .15, i.strokeStyle = "black", i.stroke(), i.globalAlpha = s))) : r === "square" ? (i.beginPath(), i.rect(n - u / 2, t - u / 2, u, u), f && i.fill(), o && (e ? i.stroke() : (s = i.globalAlpha, i.globalAlpha = .15, i.strokeStyle = "black", i.stroke(), i.globalAlpha = s))) : r === "triangle" ? (i.beginPath(), i.moveTo(n - u / 2, t + u / 2), i.lineTo(n + u / 2, t + u / 2), i.lineTo(n, t - u / 2), i.closePath(), f && i.fill(), o && (e ? i.stroke() : (s = i.globalAlpha, i.globalAlpha = .15, i.strokeStyle = "black", i.stroke(), i.globalAlpha = s)), i.beginPath()) : r === "cross" && (i.strokeStyle = f, o = u / 4, i.lineWidth = o, i.beginPath(), i.moveTo(n - u / 2, t - u / 2), i.lineTo(n + u / 2, t + u / 2), i.stroke(), i.moveTo(n + u / 2, t - u / 2), i.lineTo(n - u / 2, t + u / 2), i.stroke())
                    }
                },
                drawMarkers: function(n) {
                    for(var t, i = 0; i < n.length; i++) t = n[i], a.drawMarker(t.x, t.y, t.ctx, t.type, t.size, t.color, t.borderColor, t.borderThickness)
                }
            },
            vi = {
                Chart: function(n, i) {
                    var r = new t(n, i, this);
                    this.render = function() {
                        r.render(this.options)
                    };
                    this.options = r._options
                },
                addColorSet: function(n, t) {
                    tt[n] = t
                },
                addCultureInfo: function(n, t) {
                    ot[n] = t
                },
                formatNumber: function(n, t, i) {
                    if(i = i || "en", t = t || "#,##0.##", ot[i]) return it(n, t, new at(i));
                    throw "Unknown Culture Name";
                },
                formatDate: function(n, t, i) {
                    if(i = i || "en", t = t || "DD MMM YYYY", ot[i]) return ii(n, t, new at(i));
                    throw "Unknown Culture Name";
                }
            };
        vi.Chart.version = "v1.8.0 Beta 2";
        window.CanvasJS = vi
    }();
var mapStyle = [{
        stylers: [{
            gamma: .82
        }, {
            hue: "#00aaff"
        }, {
            saturation: -55
        }]
    }, {
        featureType: "landscape",
        stylers: [{
            hue: "#00aaff"
        }, {
            lightness: 43
        }, {
            saturation: -52
        }]
    }, {
        featureType: "water",
        stylers: [{
            saturation: -8
        }, {
            hue: "#00aaff"
        }]
    }],
    changeBackgroundImageFormat = function() {
        $(".background-image-change").each(function() {
            var n = getNewSrc($(this));
            $(this).css("background-image", "url(" + n + ")")
        })
    },
    setFloatingBoxesHeight = function() {
        $(".floating-boxes").each(function() {
            $(this).css("height", "auto");
            $(this).css("height", $(this).height())
        })
    },
    setPageMinHeight = function(n, t) {
        var i = n;
        $(".p-Home").length || (i -= $("header").outerHeight() + $("footer").outerHeight() + $(".page__top").outerHeight());
        $("main").css("min-height", 0);
        $("main").css("min-height", i);
        equalizeElements(n, t)
    },
    createMarker = function(n, t, i, r) {
        var u = {
            path: "M26.363 9.957c-.15-.54-.42-1.107-.63-1.602C23.223 2.213 17.747 0 13.316 0 7.396 0 .87 4.058 0 12.413v1.71c0 .065.026.704.057 1.027.488 3.98 3.568 8.213 5.866 12.197 2.475 4.26 5.044 8.47 7.587 12.653 1.57-2.73 3.13-5.514 4.66-8.18.417-.782.9-1.563 1.318-2.298.286-.504.815-.997 1.055-1.472C23.023 23.42 27 18.777 27 14.187v-1.882c0-.497-.606-2.242-.637-2.348zM13.42 18.523c-1.74 0-3.64-.885-4.584-3.34-.135-.388-.126-1.175-.126-1.246v-1.095c0-3.132 2.602-4.557 4.865-4.557 2.79 0 4.937 2.283 4.937 5.125 0 2.84-2.298 5.113-5.09 5.113z",
            fillColor: r,
            fillOpacity: 1,
            scale: 1,
            strokeColor: r,
            strokeWeight: 1,
            size: new google.maps.Size(30, 45),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(15, 45)
        };
        return new google.maps.Marker({
            position: n,
            icon: u,
            map: i
        })
    },
    showSubElems = function(n, t) {
        $(n).click(function() {
            var i = $(this).next(t),
                r = $(window).width(),
                u = $(window).height();
            $(t).each(function() {
                this !== i[0] && $(this).css("display") === "block" && ($(this).slideToggle({
                    step: function() {
                        equalizeElements(u, r)
                    }
                }), $(this).prev(n).toggleClass("open"))
            });
            i.slideToggle({
                step: function() {
                    equalizeElements(u, r)
                }
            });
            $(this).toggleClass("open")
        })
    },
    initRightSideMap = function() {
        $(".right-col__map").each(function() {
            function c(t) {
                for(var r = new google.maps.LatLngBounds, u = t.getPath().getArray(), i = 0; i < u.length; i++) r.extend(u[i]);
                n.fitBounds(r)
            }
            var i = {
                    zoom: 7,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: !1,
                    draggable: !0,
                    mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mapStyle"]
                    }
                },
                o = new google.maps.LatLng(48.60882, -70.56085),
                f = [],
                n, s, r, e, t, u, h;
            if(i.center = o, i.initialCenter = o, n = new google.maps.Map(this, i), s = new google.maps.StyledMapType(mapStyle, i), n.mapTypes.set("custom", s), n.setMapTypeId("custom"), $(".region__view-rivers").click(function() {
                    var u = $(this).closest(".region"),
                        e = $(this).attr("data-region"),
                        o = $(window).height(),
                        s = $(window).width(),
                        t, i, r;
                    for(u.toggleClass("active"), u.find(".region__rivers").slideToggle({
                        step: function() {
                            equalizeElements(o, s)
                        }
                    }), t = 0; t < f.length; t++) f[t].setMap(null);
                    for(i = 0; i < regionsPolylines[e].length; i++) r = new google.maps.Polygon({
                        path: regionsPolylines[e][i],
                        geodesic: !0,
                        strokeColor: "#65afd1",
                        strokeOpacity: 1,
                        strokeWeight: 2,
                        fillColor: "#8ac3cc"
                    }), r.setMap(n), f.push(r)
                }), $(".region__page").length)
                for(r = 0; r < regionPolylines.length; r++)
                    for(e = new google.maps.Polygon({
                        path: regionPolylines[r],
                        geodesic: !0,
                        strokeColor: "#65afd1",
                        strokeOpacity: 1,
                        strokeWeight: 2,
                        fillColor: "#8ac3cc"
                    }), e.setMap(n), c(e), t = 0; t < riversPolylines.length; t++)
                        for(u = 0; u < riversPolylines[t].length; u++) h = new google.maps.Polygon({
                            path: riversPolylines[t][u],
                            geodesic: !0,
                            strokeColor: "#65afd1",
                            strokeOpacity: 1,
                            strokeWeight: 2,
                            fillColor: "#8ac3cc"
                        }), h.setMap(n)
        })
    },
    showNavMobile = function() {
        $(".show-menu").click(function() {
            $(".top-header__hidden, .bottom-header").stop().toggle()
        });
        $(".main-nav__link").click(function(n) {
            var i = $(this),
                t = $(this).next(".main-nav__sub-nav");
            !Anzeixer.isDesktop() && t.length && (n.preventDefault(), $(this).toggleClass("open"), t.stop().slideToggle(), $(this).find(".main-nav__link__icon").css({
                transform: i.hasClass("open") ? "rotate(-180deg)" : "rotate(0)"
            }))
        })
    },
    showSubNavDesktop = function() {
        $(".main-nav__elem").hover(function() {
            Anzeixer.isDesktop() && ($(this).stop().find(".main-nav__sub-nav").stop().slideDown(200), $(this).find(".main-nav__link__icon").css({
                transform: "rotate(-90deg) translateY(-50%)"
            }))
        }, function() {
            Anzeixer.isDesktop() && ($(this).stop().find(".main-nav__sub-nav").stop().slideUp(200), $(this).find(".main-nav__link__icon").css({
                transform: "rotate(0) translateY(-50%)"
            }))
        })
    },
    stickMenu = function() {
        if(Anzeixer.isDesktop()) {
            var n = $(".top-header-wrapper").outerHeight(),
                t = $(window).scrollTop(),
                i = $(".bottom-header");
            t >= n ? (i.css({
                position: "fixed",
                top: 0,
                width: "100%",
                margin: 0
            }), $(".federation-label").fadeOut()) : $(".federation-label").fadeIn()
        }
    },
    initNewsletterSubscribeForm = function() {
        var t = $(".newsletter-form"),
            n = $(".form-messages");
        t.submit(function(t) {
            t.preventDefault();
            n.show();
            $.ajax({
                type: $(this).attr("method"),
                url: $(this).attr("action"),
                datatype: "json",
                data: $(this).serialize(),
                success: function(t) {
                    n.find(".form-message").replaceWith(t)
                }
            })
        })
    },
    changeNbColsFooterNav = function() {
        var n = $(".footer-nav");
        Anzeixer.isDesktop() ? n.data("col-nb", 3) : n.data("col-nb", 2)
    },
    moveTimer = function(n, t) {
        var i = $(".home-slider__nav__tab"),
            o = "active-slide",
            r, e, u, f;
        for(i.removeClass(o), r = i.eq(n), r.addClass(o), r.removeClass("no-transitions"), e = r.find(".tab__timer__track"), e.css("width", "0"), e.animate({
            width: "100%"
        }, t), $(".tab__timer__track").attr("data-color", n + 1), u = n + 1; u <= i.length; u++) i.eq(u).find(".tab__timer__track").stop().css("width", 0);
        for(f = n - 1; f >= 0; f--) i.eq(f).find(".tab__timer__track").stop().css("width", "100%")
    },
    initHomeSlider = function() {
        var n = 5e3,
            t = 500;
        $(".home-slider__slides").on("init", function() {
            moveTimer(0, n + t)
        }).on("beforeChange", function(i, r, u, f) {
            moveTimer(f, n + t)
        }).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            fade: !0,
            asNavFor: ".home-slider__nav",
            autoplay: !0,
            autoplaySpeed: n,
            speed: t,
            cssEase: "linear"
        });
        $(".home-slider__nav").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: ".home-slider__slides",
            dots: !1,
            arrows: !1,
            centerMode: !1,
            focusOnSelect: !0
        })
    },
    changeHomeSlidesImageFormat = function() {
        $(".home-slider__slide__image").each(function() {
            var n = getNewSrc($(this));
            $(this).attr("src", n);
            $(this).closest(".home-slider__slide").css("background-image", "url(" + n + ")")
        })
    },
    highlightRegion = function() {
        var n = $(".home__rivers__highlight");
        $(".home__river__link").hover(function() {
            var t = $(this).attr("data-map");
            n.css("background-image", "url(" + t + ")")
        }, function() {
            n.css("background-image", "none")
        })
    },
    filterGlossary = function() {
        $(".filter-button").click(function() {
            var n = $(this).data("group");
            $(".filter-button").removeClass("active");
            $(this).addClass("active");
            $('[class^="word-group--"]').hide();
            $(".word-group--" + n).show()
        })
    },
    filterAsideListing = function() {
        $(".category-select").change(function() {
            var n = $(this).val(),
                t = $(this).attr("data-parent-id"),
                i = $(this).attr("data-current-id");
            $.ajax({
                type: "post",
                url: "/app/asidelisting",
                datatype: "json",
                data: {
                    id: n,
                    parentId: t,
                    currentId: i
                },
                success: function(n) {
                    $(".aside__listing").html(n)
                }
            })
        })
    },
    changePage = function(n) {
        var t = ".left-col";
        $.ajax({
            type: "get",
            url: n,
            success: function(i) {
                $(t).html($(i).find(t).html());
                history.pushState({
                    path: i.path
                }, "", n);
                startPage()
            }
        })
    },
    loadElemList = function() {
        var n = $(".plan-trip__results"),
            i = $('[class^="page__tab--"]:first'),
            t;
        n.length && (n.html().length || (t = i.attr("href"), changePage(t)), $(".results__action").click(function(n) {
            n.preventDefault();
            var t = $(this).attr("href");
            changePage(t)
        }))
    },
    addFisherman = function() {
        $(".add-elem__add__block").click(function() {
            var n = $(".elem__add__block:first").clone();
            $(this).before(n).addClass("new-block");
            $(".new-block input, .new-block select").val("");
            $(".new-block").removeClass("new-block")
        })
    },
    initLodgeSlider = function() {
        $(".elem__details__slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            autoplay: !1,
            speed: 300,
            prevArrow: ".elem__details__slider__arrow--prev",
            nextArrow: ".elem__details__slider__arrow--next",
            cssEase: "linear"
        })
    },
    toggleFilters = function() {
        $(".toggle-filters").click(function() {
            var n = $(window).height(),
                t = $(window).width();
            $(this).toggleClass("active");
            $(".plan-trip__filters").slideToggle({
                step: function() {
                    equalizeElements(n, t)
                }
            });
            $(".plan-help").css("display") !== "none" && ($(".plan-help").slideToggle({
                step: function() {
                    equalizeElements(n, t)
                }
            }), $(".toggle-help").toggleClass("active"))
        })
    },
    toggleHelp = function() {
        $(".toggle-help").click(function() {
            $(this).toggleClass("active");
            $(".plan-help").slideToggle();
            $(".plan-trip__filters").css("display") !== "none" && ($(".plan-trip__filters").slideToggle(), $(".toggle-filters").toggleClass("active"))
        })
    },
    initProvincesLists = function() {
        $(".provinces-list").each(function() {
            var n = $(this),
                t = n.attr("data-depends-on");
            $(t).on("change", function() {
                n.empty();
                $.ajax({
                    type: "GET",
                    url: "/app/basicdata/provinces",
                    datatype: "json",
                    data: {
                        countryCode: $(this).val()
                    },
                    success: function(t) {
                        n.append($("<option><\/option>"));
                        $.each(t, function(t, i) {
                            n.append($("<option><\/option>").attr("value", i.Id).text(i.Name))
                        })
                    }
                })
            })
        })
    },
    initMap = function() {
        $(".gmap").each(function() {
            var n = {
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: !1,
                    draggable: !0,
                    mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mapStyle"]
                    }
                },
                u = parseFloat($(this).attr("data-lat")),
                f = parseFloat($(this).attr("data-long")),
                t = new google.maps.LatLng(u, f),
                r;
            n.center = t;
            n.initialCenter = t;
            var i = new google.maps.Map(this, n),
                e = new google.maps.StyledMapType(mapStyle, n),
                o = new google.maps.Geocoder,
                s = $(this).attr("data-google-link");
            i.mapTypes.set("custom", e);
            i.setMapTypeId("custom");
            r = createMarker(t, o, i, "#d5b765");
            google.maps.event.addListener(r, "click", function() {
                window.open(s)
            })
        })
    },
    initContactForm = function() {
        var n = $(".contact-form"),
            t = $(".form-messages");
        n.submit(function(i) {
            i.preventDefault();
            t.animate({
                opacity: 1
            }, 300);
            $.ajax({
                type: $(this).attr("method"),
                url: $(this).attr("action"),
                datatype: "json",
                data: n.serialize(),
                success: function(n) {
                    t.html(n)
                }
            })
        })
    },
    openLifeCycleSections = function() {
        showSubElems(".species__life-cycle__section__title", ".species__life-cycle__items");
        showSubElems(".species__life-cycle__item__title", ".species__life-cycle__item__rte")
    },
    showAsideNav = function() {
        $(".show-aside-nav").click(function() {
            $(".aside__nav").slideToggle()
        })
    },
    showRecommendedRivers = function() {
        showSubElems(".recommended-rivers__region__title", ".recommended-rivers__region__rivers")
    },
    initLocationsMap = function() {
        $(".micro__locations__map").each(function() {
            var r = {
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: !1,
                    draggable: !0,
                    mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mapStyle"]
                    }
                },
                n = new google.maps.Map(this, r),
                o = new google.maps.StyledMapType(mapStyle, r),
                i = new google.maps.LatLngBounds,
                s = new google.maps.Geocoder,
                u = riverPolylines[0][0].lat,
                f = riverPolylines[0][0].lng,
                t, e;
            for(n.mapTypes.set("custom", o), n.setMapTypeId("custom"), t = 0; t < riverPolylines.length; t++) e = new google.maps.Polyline({
                path: riverPolylines[t],
                geodesic: !0,
                strokeColor: "#65afd1",
                strokeOpacity: 1,
                strokeWeight: 2
            }), e.setMap(n);
            $(".micro__location").each(function() {
                var r = $(this),
                    e = $(this).attr("data-lat") ? parseFloat($(this).attr("data-lat")) : u,
                    o = $(this).attr("data-long") ? parseFloat($(this).attr("data-long")) : f,
                    t = new google.maps.LatLng(e, o),
                    h = createMarker(t, s, n, "#65afd1");
                i.extend(t);
                google.maps.event.addListener(h, "click", function() {
                    $(".micro__location").fadeOut();
                    r.fadeIn()
                })
            });
            $(".micro__location").length || i.extend(new google.maps.LatLng(u, f));
            n.fitBounds(i);
            google.maps.event.addListenerOnce(n, "bounds_changed", function() {
                this.setZoom(11)
            })
        })
    },
    showWeatherForecast = function() {
        var u = $(".micro__location"),
            n = $(".river__environment"),
            t = $(".weather"),
            i = u.attr("data-lat"),
            r = u.attr("data-long");
        t.length && (i && r || (i = riverPolylines[0][0].lat, r = riverPolylines[0][0].lng), $.simpleWeather({
            woeid: "",
            location: i + "," + r,
            unit: "c",
            success: function(i) {
                for(var r = "", f, u = 0; u < i.forecast.length && u < 4; u++) f = i.forecast[u].code, r += '<div class="weather__day clear">', r += setWeatherIcon(f), r += '<div class="weather__day__info"><h3 class="weather__day__title">' + t.attr("data-" + f) + "<\/h3>", r += '<span class="weather__day__date">' + t.attr("data-" + i.forecast[u].day) + " | " + i.forecast[u].date + "<\/span>", r += "<\/div><\/div>";
                r = replaceAll("Jan", n.attr("data-0"), r);
                r = replaceAll("Feb", n.attr("data-1"), r);
                r = replaceAll("Mar", n.attr("data-2"), r);
                r = replaceAll("Apr", n.attr("data-3"), r);
                r = replaceAll("May", n.attr("data-4"), r);
                r = replaceAll("Jun", n.attr("data-5"), r);
                r = replaceAll("Jul", n.attr("data-6"), r);
                r = replaceAll("Aug", n.attr("data-7"), r);
                r = replaceAll("Sep", n.attr("data-8"), r);
                r = replaceAll("Oct", n.attr("data-9"), r);
                r = replaceAll("Nov", n.attr("data-10"), r);
                r = replaceAll("Dec", n.attr("data-11"), r);
                t.html(r)
            },
            error: function(n) {
                t.html("<p>" + n + "<\/p>")
            }
        }))
    },
    showMoonPhases = function() {
        var f = $(".moon-phases"),
            l = $(".river__environment"),
            e = new Date,
            a = (new Date).setTime(e.getTime() + 26784e5),
            i = e,
            o = !1,
            s = !1,
            h = !1,
            c = !1,
            r = {},
            t = "",
            n, u;
        if(f.length) {
            while(i.getTime() < a) n = SunCalc.getMoonIllumination(i.setHours(17)).phase, u = (new Date).setTime(i.getTime()), (n >= .98 || n <= .02 && !o) && (r["moon-alt-new"] = u, o = !0), n >= .23 && n <= .27 && !s && (r["moon-alt-first-quarter"] = u, s = !0), n >= .48 && n <= .52 && !h && (r["moon-alt-full"] = u, h = !0), n >= .73 && n <= .77 && !c && (r["moon-alt-third-quarter"] = u, c = !0), i.setTime(i.getTime() + 864e5);
            _.map(r, function(n, i) {
                var r = new Date(n);
                t += '<div class="weather__day clear">';
                t += '<i class="wi wi-' + i + '"><\/i>';
                t += '<div class="weather__day__info"><h3 class="weather__day__title">' + f.attr("data-" + i) + "<\/h3>";
                t += '<span class="weather__day__date">' + r.getDate() + " " + l.attr("data-" + r.getMonth()) + " " + r.getFullYear() + "<\/span>";
                t += "<\/div><\/div>"
            });
            f.html(t)
        }
    },
    changeFrontedGalleryImage = function(n) {
        var t = $(".micro__gallery__fronted"),
            i = n.find("img").attr("src");
        $(".micro__gallery__thumb").removeClass("active");
        n.addClass("active");
        t.css("background-image", "url(" + i + ")");
        t.find("img").attr("src", i)
    },
    resetActiveThumbInterval = function(n) {
        return setInterval(function() {
            n = n.next(".micro__gallery__thumb");
            n.length || (n = $(".micro__gallery__thumb:first"));
            changeFrontedGalleryImage(n)
        }, 5e3)
    },
    initMicrositeGallery = function() {
        var n = $(".micro__gallery__thumb.active"),
            t = resetActiveThumbInterval(n);
        $(".micro__gallery__thumb").click(function() {
            n = $(this);
            changeFrontedGalleryImage(n);
            clearInterval(t);
            t = resetActiveThumbInterval(n)
        })
    },
    initRecommendedFliesSlider = function() {
        var n = $(".recommended-flies__list"),
            t = Anzeixer.isPhone() ? 1 : 3;
        n.hasClass("slick-initialized") && n.slick("unslick");
        n.slick({
            slidesToShow: t,
            slidesToScroll: 1,
            arrows: !0,
            autoplay: !1,
            speed: 300,
            prevArrow: ".recommended-flies__nav__arrow--prev",
            nextArrow: ".recommended-flies__nav__arrow--next",
            cssEase: "linear"
        })
    },
    initFancybox = function() {
        $(".photo-gallery__item__link").fancybox({
            openEffect: "none",
            closeEffect: "none"
        })
    },
    switchContestRulesTab = function() {
        $(".rules-tab__toggle__button").click(function() {
            var n = $(this).attr("data-tab");
            $(".rules-tab__toggle__button").removeClass("active");
            $(this).addClass("active");
            $(".rules-tab__content").each(function() {
                $(this).attr("data-tab") === n ? $(this).addClass("active") : $(this).removeClass("active")
            });
            equalizeElements($(window).height(), $(window).width())
        })
    },
    showRSubSectors = function() {
        showSubElems(".sectors-list__item__title", ".subsectors-list");
        showSubElems(".subsectors-list__item__title", ".sector-cols")
    },
    showAnswer = function() {
        showSubElems(".question__title", ".answer")
    },
    changeClientHistoryTab = function() {
        $(".history-table-toggle").click(function() {
            var n = $("." + $(this).attr("data-tab"));
            $(".history-table-toggle").removeClass("active");
            $(this).addClass("active");
            $(".client-history-table").hide();
            n.show();
            equalizeElements($(window).height(), $(window).width())
        })
    },
    changeDrawsTab = function() {
        $(".draws-table-toggle").click(function() {
            var n = $("." + $(this).attr("data-tab"));
            $(".draws-table-toggle").removeClass("active");
            $(this).addClass("active");
            $(".draws-table").hide();
            n.show();
            equalizeElements($(window).height(), $(window).width())
        })
    },
    changeRegionRiver = function() {
        $(".region-select").change(function() {
            $(this).closest("form").submit()
        })
    };
(function(n, t, i, r) {
    "use strict";

    function e(t, i) {
        this.element = t;
        this.settings = n.extend({}, f, i);
        this.remaining = r.duration(n(t).data("remaining"));
        this._defaults = f;
        this._name = u;
        this.init()
    }
    var u = "auctionTimer",
        f = {
            format: "{d}:{h}:{m}:{s}"
        };
    n.extend(e.prototype, {
        init: function() {
            this.end = r.utc(this.settings.end);
            this.refresh(this.end, this.element);
            this.start()
        },
        start: function() {
            var n = this;
            setTimeout(function() {
                n.refresh();
                n.remaining = n.remaining.subtract(1, "s");
                n.start()
            }, 1e3)
        },
        refresh: function() {
            var t = this.remaining,
                i, r;
            if(t.asSeconds() < 60) {
                i = t.seconds() > 0 ? this.settings.messages.nearClosed : this.settings.messages.closed;
                n(this.element).html(i);
                return
            }
            r = this.settings.format.replace("{d}", Math.floor(t.asDays())).replace("{h}", t.hours()).replace("{m}", t.minutes()).replace("{s}", t.seconds());
            n(this.element).html(r)
        },
        update: function(n) {
            this.remaining = r.duration(n)
        }
    });
    n.fn[u] = function(t) {
        return this.each(function() {
            n.data(this, "plugin_" + u) || n.data(this, "plugin_" + u, new e(this, t))
        })
    }
})(jQuery, window, document, moment),
    function(n) {
        n.fn.auction = function(t) {
            function p(t) {
                n.each(t, function(t, i) {
                    n.each(i, function(n, t) {
                        console.error(t)
                    })
                })
            }

            function s(i, r) {
                f.empty();
                var u = n("<div><\/div>");
                u.addClass("form-message");
                u.addClass(r + "-message");
                u.html(t.messages[i]);
                f.append(u);
                f.addClass("show-messages")
            }
            var o = this.find(".auction__status"),
                c = this.find(".auction__current-bid"),
                l = this.find(".auction__next-min-bid"),
                a = this.find(".auction__bid-button"),
                v = this.find(".auction__bid-amount"),
                i = this.find(".auction__recent-bids-left"),
                r = this.find(".auction__recent-bids-right"),
                f = this.find(".form-messages"),
                y = this.find(".auction__remaining-time").data("plugin_auctionTimer"),
                e = n.connection.auctionHub,
                u = e.client,
                h = e.server;
            e.state = {
                Culture: t.culture
            };
            u.error = function(n) {
                p(n.Messages);
                s(n.ResultCode, "error")
            };
            u.auctionJoined = function() {
                o.empty();
                o.html(t.messages.connected)
            };
            u.bidPlaced = function() {
                s("bidPlaced", "success")
            };
            u.updateAuctionInfos = function(u) {
                var f;
                for(c.html(u.CurrentBidFormatted), l.html(u.NextMinimumBidFormatted), y.update(u.RemainingMilliseconds), i.empty(), r.empty(), f = 0; f < u.LastBids.length; f++) {
                    var e = f <= 4 ? i : r,
                        o = f === 0 ? t.lastBidTemplate : t.bidTemplate,
                        s = n(o.replace("{0}", u.LastBids[f].ClientName).replace("{1}", u.LastBids[f].AmountFormatted));
                    e.append(s)
                }
                u.LastBids.length > 0 ? (n(".auction__no-bid").hide(), i.show()) : i.hide();
                u.LastBids.length > 4 ? r.show() : r.hide()
            };
            a.click(function() {
                confirm(t.messages.confirmBid) && h.placeBid(t.auctionId, v.val()).fail(function(n) {
                    console.error("Error: " + n)
                })
            });
            n.connection.hub.start().done(function() {
                h.joinAuction(t.auctionId).fail(function(n) {
                    console.error("Error: " + n)
                })
            })
        }
    }(jQuery);
$(document).ready(function() {
    startPage()
})
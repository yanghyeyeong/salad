$(function () {
    //헤더부분
    $(".nav>li").on("mouseenter", function () {
        $(this).addClass("on");
        $(this).children(".submenu").show();
    });
    $(".nav>li").on("mouseleave", function () {
        $(".nav>li").addClass("on");
        $(".nav>li").children(".submenu").hide();
    });

    $(".hideMenu").on("click", function () {
        $(this).toggleClass("active");
    });
    //헤더 메뉴 부분
    $(function () {
        $(".nav li").on("mouseenter", function () {
            $(this).children(".bar1").stop().animate({ width: "100%" });
        });
    });

    $(function () {
        $(".nav li").on("mouseleave", function () {
            $(this).children(".bar1").stop().animate({ width: "0" });
        });
    });

    //헤더 히든 메뉴 부분
    $(".hideMenu").on("click", function () {
        $(".nav4").slideToggle();
    });
    // $(".hideMenu").on("click", function () {
    //   $(".nav4").hide();
    // });

    //비주얼 이미지 슬라이드
    $(function () {
        let total = $(".panel li").length;
        //   console.log(total);
        // total = 4 이미지개수 4 -1 = 3 eq(3)

        let i = 0; //이미지 순번
        start();

        function fade() {
            $(".panel li").stop().fadeOut();
            $(".panel li").eq(i).stop().fadeIn();
            $(".navi li").removeClass("on");
            $(".navi li").eq(i).addClass("on");
        }

        function start() {
            timer = setInterval(function () {
                if (i == total - 1) {
                    i = 0;
                } else {
                    i++;
                }
                fade();
            }, 2000);
        }

        $(".next").on("click", function () {
            clearInterval(timer);
            if (i == total - 1) {
                i = 0;
            } else {
                i++;
            }
            fade();
            start();
        });

        $(".prev").on("click", function () {
            clearInterval(timer);
            if (i == 0) {
                i = total - 1;
            } else {
                i--;
            }
            fade();
            start();
        });

        $(".navi li").on("click", function () {
            clearInterval(timer);
            i = $(this).index();
            fade();
            start();
        });
    });

    //con2 ScrollTrigger
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con1",
            start: "top 30%",
            end: "20% 100%",
            scrub: 2,
            // markers: true,
        },
    })

        .to(".con2 .a", { y: "-30px", duration: 1, ease: "elastic" }, 0.4)
        .to(".con2 .b", { y: "-30px", duration: 3, ease: "elastic" }, 0.6)
        .to(".con2 .c", { y: "-30px", duratuin: 5, ease: "elastic" }, 0.8)
        .to(".con2 .d", { y: "-30px", duratuin: 7, ease: "elastic" }, 1.0)
        .to(".con2 .e", { y: "-30px", duratuin: 9, ease: "elastic" }, 1.2)
        .to(".con2 .f", { y: "-30px", duratuin: 11, ease: "elastic" }, 1.4);
    //con3 ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".con3_content2").forEach(function (con3_content2) {
        gsap.timeline({
            scrollTrigger: {
                trigger: con3_content2,
                start: "50% 100%",
                end: "bottom top",
                toggleClass: { targets: con3_content2, className: "active" },
                scrub: 1,
                // markers: true,
            },
        });
    });

    //con4 slide
    setInterval(function () {
        $(".con4Panel li:first-child()")
            .stop()
            .animate({ "margin-left": "-320px" }, function () {
                $(".con4Panel li:first-child()")
                    .appendTo(".con4Panel")
                    .css("left", "100%");
                $(".con4Panel li").css({ "margin-left": "0px" });
            });
    }, 1500);

    //con5 slide
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".con5Deliver").forEach(function (con5Deliver) {
        gsap.timeline({
            scrollTrigger: {
                trigger: con5Deliver,
                start: "50% 100%",
                end: "bottom top",
                toggleClass: { targets: con5Deliver, className: "active" },
                scrub: 1,
                // markers: true,
            },
        });
    });
});

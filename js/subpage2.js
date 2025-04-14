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
        // start();

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
});

$(() => {
    // height = visible window
    let viewportHeight = window.innerHeight;
    let sectionContentHeight = viewportHeight / 1.3;

    $(".vh").css({
        height: viewportHeight,
    });

    $(".sch").css({
        "max-height": sectionContentHeight,
        height: sectionContentHeight,
    });

    $.scrollify({
        section: ".fixed-scroll",
        sectionName: "section-name",
        easing: "easeOutExpo",
        interstitialSection: ".footer",
        scrollSpeed: 150,
        offset: 0,
        scrollbars: false,
        standardScrollElements: ".normal-scroll",
        setHeights: true,
        overflowScroll: false,
        updateHash: true,
        touchScroll: true,
        before: function () {},
        after: function () {},
        afterResize: function () {},
        afterRender: function () {},
    });

    // let curvedText = document.querySelector(".decoration.curved-text p");
    // new CircleType(curvedText);
    // anime({
    //     targets: curvedText,
    //     rotate: 360,
    //     duration: 5000,
    //     loop: true,
    //     easing: "linear"
    // });

    // anime({
    //     targets: ".decoration.scroll-down",
    //     translateY: 10,
    //     opacity: ["100%", "0%"],
    //     endDelay: 200,
    //     duration: 1500,
    //     loop: true,
    //     easing: "linear"
    // });
});

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
        section: ".sticky-scroll",
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
});

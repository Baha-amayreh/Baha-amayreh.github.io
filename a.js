$(function () {
    function increaseCircleSize() {
        let w = parseInt($('.circle').css('width')) + 10 + 'px';
        $('.circle').css({
            'width': w,
            'height': w
        });
        console.log(w, ',' + w);
    }
    let timer1 = setInterval(increaseCircleSize, 250);
    $('.circle').click(function () {
        $('.circle').hide();
        clearInterval(timer1);
    })

    $('#start').click(function () {
        let w, g, gr, newsize = 0;
        function increaseCircleSize2() {
            w = parseInt($('#width').val());
            g = parseInt($('#growth').val());
            newsize = parseInt(newsize) + w + g + 'px';
            gr = parseInt($('#growthRate').val());
            $('.circle').css({
                'width': newsize,
                'height': newsize
            });
            $('.circle').show();
            console.log(w, g, gr);
        }
        let timer2 = setInterval(increaseCircleSize2, this.gr);

    });
})
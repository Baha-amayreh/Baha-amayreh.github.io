$(function () {
    let timer1, timer2;
    function increaseCircleSize() {
        let w = parseInt($('.circle').css('width')) + 10 + 'px';
        $('.circle').css({
            'width': w,
            'height': w
        });
        console.log(w, ',' + w);
    }
    timer1 = setInterval(increaseCircleSize, 250);
    $('#start').click(function () {
        let w, g, newsize = 0;
        function increaseCircleSize2() {
            w = parseInt($('#width').val());
            g = parseInt($('#growth').val());
            newsize = parseInt(newsize) + w + g + 'px';
            $('.circle').css({
                'width': newsize,
                'height': newsize
            });
            if (parseInt(newsize) === (w + g)) {
                const newCircle = $('<div class="circle"></div>');
                $('body').append(newCircle);
            }
        }
        timer2 = setInterval(increaseCircleSize2, parseInt($('#growthRate').val()));
    });
    $('.circle').click(function () {
        $('.circle').remove();
        clearInterval(timer1);
        clearInterval(timer2);
    });
    $(document).on('click', '.circle', function () {
        $(this).remove();
    });
})
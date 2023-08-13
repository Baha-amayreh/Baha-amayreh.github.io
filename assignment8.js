$(function () {
    $('#start').click(function () {
        console.log('game is starting!');
        $('#status > span').text('');
        $('.boundary').removeClass('youlose');
        $('.boundary').mouseover(function () {
            $('.boundary').addClass('youlose');
        });
    });

    $('#end').click(function () {
        let newElement;
        if ($('.boundary').hasClass("youlose")) {
            alert('you lose!');
            newElement = $('<span> [You lose]</span>');
        } else {
            alert('you win!');
            newElement = $('<span> [You win]</span>');

        }
        $('#status').append(newElement);
        console.log('game ended!');
    });
});
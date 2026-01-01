$(function () {

    $('.image-switch button').on('click', function () {
        const index = $(this).data('index');
        const $images = $(this).closest('.character-visual').find('img');

        $images.removeClass('active');
        $images.eq(index).addClass('active');
    });

});

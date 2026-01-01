$(function () {

    const MAX_VISIBLE = 4;
    const $newsList = $('#news-list');
    const $newsItems = $newsList.find('li');
    const $toggleBtn = $('#news-toggle');

    // 4件以下なら何もしない
    if ($newsItems.length <= MAX_VISIBLE) {
        return;
    }

    // 初期状態：4件以降を非表示
    $newsItems.slice(MAX_VISIBLE).hide();
    $toggleBtn.show().text('もっと見る');

    let isOpen = false;

    $toggleBtn.on('click', function () {

        if (!isOpen) {
            // 開く
            $newsItems.show();
            $(this).text('閉じる');
            isOpen = true;

        } else {
            // 閉じる
            $newsItems.slice(MAX_VISIBLE).hide();
            $(this).text('もっと見る');
            isOpen = false;

            // 見出し位置まで戻す（自然な挙動）
            $('html, body').animate({
                scrollTop: $newsList.offset().top - 40
            }, 300);
        }

    });

});

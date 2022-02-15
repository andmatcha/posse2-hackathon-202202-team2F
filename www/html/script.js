//loading画面
const wait = (sec) => {
    return new Promise((resolve) => {
        setTimeout(resolve, sec * 1000);
    });
};

async function hideLoading() {
    await wait(1.5); //2秒まつ
    document.getElementById('loading').classList.add('hide-loading'); //loading画面を隠す
    await wait(1); //1秒まつ
    document.getElementById('loading').style.display = 'none'; //裏で動いているloading画面を消す
}

hideLoading();


// レスポンシブ ヘッダーの切り替え
const headerBtns = document.getElementById('header_btns')
const headerMenu = document.getElementById('header_menu');
const sideMenu = document.getElementById('side_menu');
const sideMenuWrapper = document.getElementById('side_menu_wrapper');
const hamburger = document.getElementById('hamburger');

function responsive() {
    if (document.body.offsetWidth <= 800 && headerMenu.childElementCount !== 0) {
        sideMenu.appendChild(headerBtns);

        //ハンバーガーメニュー表示
        hamburger.style.display = 'block';

    } else if (document.body.offsetWidth > 800 && sideMenu.childElementCount !== 0) {
        headerMenu.appendChild(headerBtns);

        //ハンバーガーメニュー非表示
        hamburger.style.display = 'none';

    }
}

window.addEventListener('resize', responsive);
window.onload = responsive();


// ハンバーガーボタン動作
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');

    sideMenuWrapper.classList.toggle('side-menu-open');
});




//コピペ 記事タイトルアニメーション
// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime() {

    // 背景色が伸びて出現（右から左）
    $('.bgRLextendTrigger').each(function () { //bgRLextendTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgRLextend');// 画面内に入ったらbgRLextendというクラス名を追記
        } else {
            $(this).removeClass('bgRLextend');// 画面外に出たらbgRLextendというクラス名を外す
        }
    });
    // 文字列を囲う子要素
    $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
        } else {
            $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
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
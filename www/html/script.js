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



// Quote Generator


let firstQuoteArray =[
	'公的成功',
	'公的成功',
	'終わりを思い描くことから始める',
	'Win-Winを考える',
	'Win-Winを考える',
	'Win-Winを考える',
]

let secondQuoteArray =[
	'人の言葉を信じるにはどうすればいい…？',
	'誰にどこまで自分を開示できる…？',
	'自分優先思考はだめ…？',
	'Win-Winって本当に実現可能？理想論では？',
	'「優しさ」や「強さ」ってなんだろう？',
	'No-Dealって本当に関係悪化する？',
]

const firstText = document.getElementById("first-topic");
const secondText = document.getElementById("second-topic");
const tweetButton = document.getElementById("tweet");




function getNewQuote(){


	// ランダムの数字を取得　０からテキストの数
	var randomNumber = Math.floor(Math.random() * (firstQuoteArray.length));

	// 配列内容それぞれ挿入
	document.getElementById('first-quote').innerHTML = firstQuoteArray[randomNumber]
	document.getElementById('second-quote').innerHTML = secondQuoteArray[randomNumber]

	//ツイートする
	tweetButton.href = "https://twitter.com/intent/tweet?text=";
}
getNewQuote();


	// カウントダウンタイマー by Lisa

	const daysElm = document.getElementById('days');
	
	// ここに好きな日時を記述する
	// 西暦 月　日
	const target = '2022 6 1';
	
	function countDown() {
		const targetDate = new Date(target);
		const currentDate = new Date();
	
		const totalSeconds = (targetDate - currentDate) / 1000;
	
		const days = Math.floor(totalSeconds / 3600 / 24);
	
		daysElm.innerHTML = days;
		// hoursElm.innerHTML = formatTime(hours);
		// minsElm.innerHTML = formatTime(mins);
	}
	
	function formatTime(time) {
		return time < 10 ? `0${time}` : time;
	}
	
	setInterval(countDown, 1000);

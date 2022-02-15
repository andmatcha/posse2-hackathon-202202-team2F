//loading画面
const wait = (sec) => {
    return new Promise((resolve) => {
        setTimeout(resolve, sec * 1000);
    });
};

async function hideLoading() {
    await wait(2); //2秒まつ
    document.getElementById('loading').classList.add('hide-loading'); //loading画面を隠す
    await wait(1); //1秒まつ
    document.getElementById('loading').style.display = 'none'; //裏で動いているloading画面を消す
}

hideLoading();
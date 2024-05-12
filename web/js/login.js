var temp = 0;

function openBarrage() {
    // 跳转到发送弹幕的页面
    window.location.href = "must.html";
}

function openLogin() {
    // 打开登录框
    temp = 1 - temp;
    if (temp == 0) {
        document.getElementById("loginModal").style.display = "block";
    } else {
        document.getElementById("loginModal").style.display = "none";
    }
}

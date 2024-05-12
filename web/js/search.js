var suggestions = {
    '澳门': ['澳门', '澳门科技大学', '澳门大学'],
    '香港': ['香港','香港大学', '香港理工大学','香港中文大学'],
    '广州': ['广州','中山大学', '华南理工大学', '暨南大学'],
    '深圳': ['深圳','深圳大学', '南方科技大学'],
    '珠海': ['珠海','北京师范大学珠海校区', '北京理工大学珠海学院']
};

function suggest() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();//得到searchinput元素的值
    var suggestionsList = document.getElementById('suggestions');//获取id为suggestions的元素
    suggestionsList.innerHTML = '';
    for (var key in suggestions) {
        if (searchInput === key) {
            suggestions[key].forEach(function(suggestion) {//如果搜索关键词匹配成功，
                //就遍历该关键词对应的搜索建议数组。对于每个搜索建议，创建一个 div 元素，
                //设置其文本内容为搜索建议，然后为该元素添加一个点击事件监听器，当用户点击搜索建议时，
                //会将搜索建议填充到搜索框中，并调用 search() 函数执行搜索操作。
                var suggestionItem = document.createElement('div');
                suggestionItem.textContent = suggestion;
                suggestionItem.addEventListener('click', function()//当用户点击搜索建议时，会将搜索建议填充到搜索框中
                {
                    document.getElementById('searchInput').value = suggestion;//将searchinput设置为建议元素
                    search();
                });
                suggestionsList.appendChild(suggestionItem);
            });
        }
    }
}

function search() {
    var searchContent = document.getElementById('searchInput').value.toLowerCase();//小写变量储存在searchInput里
    var pageMap = {
        '澳门': 'macau.html',
        '澳门科技大学': 'must.html',
        '澳门大学': 'macau.html',
        '香港': 'hongkong.html',
        '香港大学': 'hongkong.html',
        '香港理工大学': 'hongkong.html',
        '香港中文大学': 'hongkong.html',
        '广州':'guangzhou.html',
        '中山大学':'guangzhou.html',
        '华南理工大学':'guangzhou.html',
        '暨南大学':'guangzhou.html',
        '深圳':'shenzhen.html',
        '深圳大学':'shenzhen.html',
        '南方科技大学':'shenzhen.html',
        '珠海':'zhuhai.html',
        '北京师范大学珠海校区':'zhuhai.html',
        '北京理工大学珠海学院':'zhuhai.html'
      


    };
    if (pageMap.hasOwnProperty(searchContent)) {//判断pageMap对象是否匹配
        window.location.href = pageMap[searchContent];//这行是匹配成功就直接跳转到 对应路径
    } else {
        alert('未找到相关页面');
    }
}
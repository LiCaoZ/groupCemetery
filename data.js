console.log("这是一个毛坯房，它并没有完全建成。各位大佬可以引用 ./data.json 的数据来自实现前端页面。")

// 读取来自 /data.json 的数据

xhr = new XMLHttpRequest();
xhr.open('get', 'https://licaoz.github.io/groupCemetery/data.json', true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        var dataLength = data.length;
        // 解析并渲染数据
        detailDOM = document.getElementsByClassName("detail");

        for (var i = 0; i < dataLength; i++) {
            // 拼接 HTML
            var avatar = data[i].avatar;
            if (avatar == null) {
                avatar = "chrome://theme/current-channel-logo@1x";
            }
            var Name = data[i].name;
            var Age = data[i].age;
            var date = data[i].date;
            var suicide_note_url = data[i].suicide_note_url;
            var html = '<div class="mdui-card mdui-col-xs-12 mdui-col-sm-4"> <div class="mdui-card-header"> <img class="mdui-card-header-avatar" src=' + avatar + ' /> <div class="mdui-card-header-title">' + Name + '</div> <div class="mdui-card-header-subtitle">' + Age + '</div> </div> <div class="mdui-card-content"> <p class="date">在 <span class="date">' + date + '</span> 永远离开了我们</p> </div> <div class="mdui-card-actions"> <a class="mdui-btn mdui-ripple suicide-note" href=" '+ suicide_note_url + '">查阅遗书</a> <button class="mdui-btn mdui-ripple">上一柱香</button> <button class="mdui-btn mdui-float-right">更多</button> </div> </div>';
            // Remove mdui-progress
            document.querySelector(".mdui-progress").remove();
            // 插入 HTML
            detailDOM.append(html);
            if (suicide_note_url == null) {
                // 禁用 .suicide-note
                document.getElementsByClassName('suicide-note').setAttribute('disabled')
            }
        }
    }
}

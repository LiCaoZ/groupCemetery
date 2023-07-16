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
        detailDOM = document.querySelector(".detail");

        for (var i = 0; i < dataLength; i++) {
            // 拼接 HTML
            var avatar = data[i].avatar;
            if (avatar == null) {
                avatar = '<svg t="1689484052527" class="icon" viewBox="0 0 1024 1024" version = "1.1" xmlns = "http://www.w3.org/2000/svg" p - id="1442" width = "32" height = "32" ><path d="M592 192c-154.4 0-280 125.6-280 280v520h464v24h96V472c0-154.4-125.6-280-280-280z" fill="#B2B5B7" p-id="1443"></path><path d="M432 192c-154.4 0-280 125.6-280 280v520h560V472c0-154.4-125.6-280-280-280z" fill="#FFFFFF" p-id="1444"></path><path d="M336 376m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#B2B5B7" p-id="1445"></path><path d="M576 520m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#B2B5B7" p-id="1446"></path><path d="M792 840m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#FFFFFF" p-id="1447"></path><path d="M336 896m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#B2B5B7" p-id="1448"></path><path d="M352 800c-7.2 0-15.2-3.2-19.2-10.4L296 739.2V776c0 13.6-10.4 24-24 24s-24-10.4-24-24V616c0-13.6 10.4-24 24-24h40c35.2 0 64 28.8 64 64v24c0 20.8-10.4 40-26.4 52l21.6 30.4c8 10.4 5.6 25.6-5.6 33.6-4 2.4-8.8 4-13.6 4z m-56-160v40.8c0 8.8 6.4 16 15.2 15.2 8.8 0 16.8-7.2 16.8-16v-24c0-8.8-7.2-16-16-16h-16zM512 800c-13.6 0-24-10.4-24-24V616c0-13.6 10.4-24 24-24h40c35.2 0 64 28.8 64 64v24c0 35.2-28.8 64-64 64h-16v32c0 13.6-10.4 24-24 24z m24-104h16c8.8 0 16-7.2 16-16v-24c0-8.8-7.2-16-16-16h-16v56zM432 800c-13.6 0-24-10.4-24-24V616c0-13.6 10.4-24 24-24s24 10.4 24 24v160c0 13.6-10.4 24-24 24z" fill="#444B54" p-id="1449"></path><path d="M990.4 968H904c-4.8 0-8-3.2-8-8V472c0-168-136-304-304-304H432c-168 0-304 136-304 304v488c0 4.8-3.2 8-8 8H40.8c-12 0-22.4 8-24.8 19.2-2.4 15.2 8.8 28.8 24 28.8h734.4c12.8 0 24.8-9.6 25.6-22.4 0.8-13.6-10.4-25.6-24-25.6h-32c-4.8 0-8-3.2-8-8V472c0-79.2-30.4-153.6-84.8-210.4-8.8-9.6-24-11.2-33.6-3.2-11.2 9.6-11.2 26.4-0.8 36 48.8 44.8 71.2 112 71.2 178.4V960c0 4.8-3.2 8-8 8H184c-4.8 0-8-3.2-8-8V472c0-141.6 114.4-256 256-256h160c141.6 0 256 114.4 256 256v520c0 13.6 10.4 24 24 24h120c13.6 0 24.8-11.2 24-25.6-0.8-12.8-12-22.4-25.6-22.4z" fill="#444B54" p-id="1450"></path></svg > ';
            }
            var Name = data[i].name;
            var Age = data[i].age;
            var date = data[i].date;
            var suicide_note_url = data[i].suicide_note_url;
            var html = '<div class="mdui-card mdui-col-xs-12 mdui-col-sm-4"> <div class="mdui-card-header"> <img class="mdui-card-header-avatar" src=' + avatar + ' /> <div class="mdui-card-header-title">' + Name + '</div> <div class="mdui-card-header-subtitle">' + Age + '</div> </div> <div class="mdui-card-content"> <p class="date">在 <span class="date">' + date + '</span> 永远离开了我们</p> </div> <div class="mdui-card-actions"> <a class="mdui-btn mdui-ripple suicide-note" href=" ' + suicide_note_url + '">查阅遗书</a> <button class="mdui-btn mdui-ripple">上一柱香</button> <button class="mdui-btn mdui-float-right">更多</button> </div> </div>';
            // Remove mdui-progress
            document.querySelector(".mdui-progress").remove();
            // 插入 HTML
            detailDOM.insertAdjacentHTML('beforeend', html);
            if (suicide_note_url == null) {
                // 禁用 .suicide-note
                document.getElementsByClassName('suicide-note')[i].setAttribute("disabled", "true")
            }
        }
    }
}

$(".menu_item").hover(function () {
    $(this).css("background", "#000000");
    $(this).find(".menu_item_sub_container").toggle();
}, function () {
    $(this).css("background", "#2d2d2d");
    $(this).find(".menu_item_sub_container").toggle();
});
$("#btn_search").focus(function () {
    $(this).attr("value", "");
    $(this).css("background-color", "#cccccc");
}).blur(function () {
    $(this).attr("value", "输入关键字,按Enter键搜索");
    $(this).css("background-color", "#777777");
});
function MsgDialog(id) {
    id = "#" + id;
    $(id).dialog({
        buttons: [
            {
                text: "确定",
                click: function () { $(this).dialog("close"); }
            }], modal: true, draggable: false, resizable: false, title: "提示"
    });
}
function ContactMe() {
    var html = "Email:&nbsp;anycleliu@gmail.com";
    $("#dialog").html(html);
    $("#dialog").dialog({
        buttons: [
            {
                text: "确定",
                click: function () { $(this).dialog("close"); }
            }], modal: true, draggable: false, resizable: false, title: "联系我", minWidth: 400
    });
}
function About() {
    $("#dialog").html("");
    $("#dialog").dialog({ modal: true, title: "关于", minWidth: 500 });
}
$("#btn_search").keydown(function (event) {
    if (event.keyCode === 13) {
        Search(this.value);
    }
});  

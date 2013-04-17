$(".menu_item").hover(function(){
	$(this).css("background","#000000");
	$(this).find(".menu_item_sub_container").toggle();
},function(){
	$(this).css("background","#2d2d2d");	
	$(this).find(".menu_item_sub_container").toggle();
});
$("#btn_search").focus(function(){
	$(this).attr("value","");
	$(this).css("background-color","#cccccc");
}).blur(function(){
	$(this).attr("value","输入关键字,按Enter键搜索");
	$(this).css("background-color","#777777");
});
function MsgDialog(id)
{
	id="#"+id;
	$(id).dialog({ buttons: [
		{
			text: "确定",
			click: function() { $(this).dialog("close"); }
		}],modal:true,draggable:false,resizable:false,title:"提示"
	});
}
function ContactMe()
{
	var html="如果大家对本站有任何意见，可以给我发邮件，我会尽力帮大家解决，谢谢!<br/>Email:&nbsp;AnycleLiu@gmail.com";
	$("#dialog").html(html);
	$("#dialog").dialog({ buttons: [
		{
			text: "确定",
			click: function() { $(this).dialog("close"); }
		}],modal:true,draggable:false,resizable:false,title:"联系我",minWidth:400
	});
}
function About()
{
	var html="本人喜欢看小说，一直以来有个问题让我比较恼火。好的小说网站都要收费，一般的网站上面的"
	html=html+"资源又比较混乱，有时候想找一个好的小说花了好长时间也不见得找的到。于是我建立了这个网站，为那些想看小说，又不想在找小说上浪费时间的人提供一点便利。因为所有的资源都是我在网上找的，所以资源不是很多，"
	html=html+"不过我会努力，多多收集好书，大家也可以把好书发到我的邮箱，我再发布出来供广大书友下载。。。。";
	$("#dialog").html(html);
	$("#dialog").dialog({modal:true,title:"关于",minWidth:500});
}
$("#btn_search").keydown(function(event){  
     if(event.keyCode==13){  
         Search(this.value); 
     }  
 });  

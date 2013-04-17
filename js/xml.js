/*操作保存书本信息的xml文档*/
/*
从指定的xml文档里面，加载书本信息到class为“content_left”的div
type=xuanhuan、mofa、kexuan、wuxia、xianxia、xiuzhen
*/
function Search(keyword)
{
	$("h3.nofind").remove();
	$("div.content_item").remove();
	
	var books=new Array();
	books[0]="db/db_xuanhuan.xml";
	books[1]="db/db_mofa.xml";
	books[2]="db/db_wuxia.xml";
	books[3]="db/db_xiuzhen.xml";
	books[4]="db/db_kehuan.xml";
	books[5]="db/db_xianxia.xml";
	var f=0;
	for(i=0;i<6;i++)
	{
		$.get(books[i],function(data){
			$(data).find("book").each(function(){
			var book="";
			var id=$(this).find("id").text();//书本id
			if(id=="" ||typeof(id)=="undefined") return;
			var name=$(this).find("name").text();//书名
			var author=$(this).find("author").text();//作者
			var date=$(this).find("date").text();//添加日期
			var href=$(this).find("href").text();//下载链接
			var uri=$(this).find("uri").text();//图片链接
			var description=$(this).find("description").text();//描述
			if(keyword!=""&&(name.indexOf(keyword)!=-1||author.indexOf(keyword)!=-1))
			{
				f=1;
				book='<div class="content_item">'
				book=book+'	<table border="0px" cellpadding="0px" cellspacing="0px" style="width:100%">'
				book=book+'			<tr>'
				book=book+'        	<td style="width:160px"><h3>'+name+'</h3></td>'
				book=book+'            <td style="width:200px">作者：'+author+'</td>'
				book=book+'            <td style="width:120px">日期:'+date+'</td>'
				book=book+'            <td style="text-align:right"><a style="text-decoration:none" href="'+href+'">下载</a></td>'
				book=book+'        </tr>'
				book=book+'        <tr>'
				book=book+'        	<td><img src="'+uri+'" alt="'+name+'"/></td>'
				book=book+'            <td colspan="3" style="text-align:left">'
				book=book+description
				book=book+'            </td>  '
				book=book+'        </tr>'
				book=book+'   </table>'
        		book=book+'</div>'
				$("div.content_left").append(book);
			}
		   });
		});
	}
	if(f==0)	$("div.content_left").append('<h3 class="nofind">抱歉，没有找到任何记录!</h3>');
}
function LoadData(type){
	var db;
	switch(type){
		case "xuanhuan":
			db="db_xuanhuan.xml";
			break;
		case "mofa":
			db="db_mofa.xml";
			break;
		case "wuxia":
			db="db_wuxia.xml";
			break;
		case "xiuzhen":
			db="db_xiuzhen.xml";
			break;
		case "kehuan":
			db="db_kehuan.xml";
			break;
		case "xianxia":
			db="db_xianxia.xml";
			break;
		default:
			alert("参数错误");
			return false;
	}
	db="db/"+db;
	$("h3.nofind").remove();
	$("div.content_item").remove();
	
	$.get(db,function(data){
		$(data).find("book").each(function(){
			var book="";
			var id=$(this).find("id").text();//书本id
			if(id=="" ||typeof(id)=="undefined") return;
			var name=$(this).find("name").text();//书名
			var author=$(this).find("author").text();//作者
			var date=$(this).find("date").text();//添加日期
			var href=$(this).find("href").text();//下载链接
			var uri=$(this).find("uri").text();//图片链接
			var description=$(this).find("description").text();//描述
			book='<div class="content_item">'
        	book=book+'	<table border="0px" cellpadding="0px" cellspacing="0px" style="width:100%">'
			book=book+'			<tr>'
            book=book+'        	<td style="width:160px"><h3>'+name+'</h3></td>'
            book=book+'            <td style="width:200px">作者：'+author+'</td>'
            book=book+'            <td style="width:120px">日期:'+date+'</td>'
            book=book+'            <td style="text-align:right"><a style="text-decoration:none" href="'+href+'">下载</a></td>'
            book=book+'        </tr>'
            book=book+'        <tr>'
            book=book+'        	<td><img src="'+uri+'" alt="'+name+'"/></td>'
            book=book+'            <td colspan="3" style="text-align:left">'
            book=book+description
            book=book+'            </td>  '
            book=book+'        </tr>'
            book=book+'   </table>'
        book=book+'</div>'
		$("div.content_left").append(book);
		}).error(function(){alert("error")});
	});
}
/**
 * @file content组件
 * @author lyc
 * @time 2016.12.9
 */

$(function(){
	// 限制正文字数
var c = $(".content").html();
var b = 600;
var inTag = false,
    ii = 0,
    jj = 0;
for(;jj < b;ii ++){
	tmp = c.charAt(ii);
	if(tmp == '<' && !inTag){
		inTag = true;
		continue;
	}else if(tmp == '>' && inTag){
		inTag = false;
		continue;
	}else if(inTag){
		continue;
	}
	jj++;
}
   b=ii;

   // 正文查看更多
if(c != undefined && c.length > b){
	$(".content").after('<style>.more{text-align:center;height:30px;width:94px;margin:auto;line-height:30px;margin-bottom:10px;cursor:pointer;display:block;}.more em{display:inline-block;height:20px;width:20px;background:#3c91c7;border-radius:50px;margin-right:5px;float:left;margin-top:6px;}.more span{display:inline-block;float:left;font-size:17px;color:#2184c4;}</style><div class="more"><em><code class="fx"></code></em><span>阅读全文</span></div>');
	$(".content").html(c.substring(0,b) + " ..........");
	$(document).on("click",".more",function(){
		if($(this).find("code").hasClass("fx")){
			$(".content").html(c);
			$(this).remove();
		}
	})
}

// 隐藏页码
if($(".pages li").length){
	$(".hao_page").css("display","none");
}

// 查看更多热门栏目
$(".dow").click(function(){
	if($(this).find("i").hasClass("classify_i")){
		$(this).find("i").removeClass("classify_i").addClass("i");
		$(this).find("span").text("收起");
		$(".neilian").find("li:nth-child(n+19)").fadeIn(1000);
	}else{
		$(this).find("i").removeClass("i").addClass("classify_i");
		$(this).find("span").text("查看更多");
		$(".neilian").find("li:nth-child(n+19)").hide();
	}
});

// 返回顶部按钮出现与隐藏
var a = 100;
$(window).scroll(function(){
	if($(this).scrollTop() > a){
		$(".backtop").fadeIn(500);
	}else{
		$(".backtop").fadeOut(500);
	}
});

// 返回顶部
$(".backtop").click(function(){
	$("body,html").animate({scrollTop:"0"},400);
});
});
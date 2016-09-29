$(function(){

	var all = parseInt($.cookie("goods"))
	var conter = parseInt($("#numbertyui").val());
	if($("#numbertyui").val() == "" || $("#numbertyui").val() == "0"){
		conter = 0;
	}
	if($.cookie("goods") == null)
	{
		all = 0;
		$.cookie("goods","0");
	}
	else{
		$("#shoppingcar_P").html("");
		var str = "<img id='overst' src='http://i.usashopcn.com/p/16/08/31/61720688-b855-4aa1-bdc8-6b5bda9c42b8-l.jpg'><span id='dasyu'>ASOS女士时尚印花装饰短款夹克</span><h6 id='num'></h6><h6 id='coat'></h6><button id='dhsad'>立即结算</button>";
		$("#shoppingcar_P").append(str);
	}
	$("#font_numbero").html(all);
	var tot = 1100*all;
	$("#num").html("商品数量："+ all +"件");
	$("#coat").html("商品总价：" + tot +".00")

	$("#buy_shopping").click(function(){
		var conter = parseInt($("#numbertyui").val());
			if($.cookie("goods")!= 0){
				conter2 =parseInt($.cookie("goods")) +  conter;
			}else{
				conter2 = conter;

			}
			$("#shoppingcar_P").html("");
		var str = "<img id='overst' src='http://i.usashopcn.com/p/16/08/31/61720688-b855-4aa1-bdc8-6b5bda9c42b8-l.jpg'><span id='dasyu'>ASOS女士时尚印花装饰短款夹克</span><h6 id='num'>商品数量:"+ conter2 +"件</h6><h6 id='coat'>合计总价：" + conter2*1100
		+".00</h6><button id='dhsad'>立即结算</button>";
		$("#shoppingcar_P").append(str);
			$.cookie("goods",conter2,{expires:300});		
			$.cookie("goods",conter2,{expires:300,path: '/'});
			if($("#font_numbero")){
				$("#font_numbero").html(conter2);
			}else{
				$("#font_numbero").html("0");
			}
			
			})

})



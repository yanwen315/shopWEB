	$(function(){
			
		var cookr = $.cookie("goods");
		
	if(cookr){
		$("#font_numbero").html(cookr);
	}else{
		$("#font_numbero").html("0");
	}

		ajax("get","index.json","",function(data){

//这里开始为nav的json下拉菜单
			var arr = JSON.parse(data)._listData01;
			var div1 = $("<div></div>")
			for(var i = 0; i < arr.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr[i].title);
				div1.append(sa);
				$("#main").append(div1);
			};

			var arr2 = JSON.parse(data)._listData02;
			var div2 = $("<div></div>")
			for(var i = 0; i < arr2.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr2[i].title);
				div2.append(sa);
				$("#main").append(div2);
			};
		
			var arr3 = JSON.parse(data)._listData03;
			var div3 = $("<div></div>")
			for(var i = 0; i < arr3.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr3[i].title);
				div3.append(sa);
				$("#main").append(div3);
			};

			var arr4 = JSON.parse(data)._listData04;
			var div4 = $("<div></div>")
			for(var i = 0; i < arr4.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr4[i].title);
				div4.append(sa);
				$("#main").append(div4);
			};

			var arr5 = JSON.parse(data)._listData05;
			var div5 = $("<div></div>")
			for(var i = 0; i < arr5.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr5[i].title);
				div5.append(sa);
				$("#main").append(div5);
			};

			var arr6 = JSON.parse(data)._listData06;
			var div6 = $("<div></div>")
			for(var i = 0; i < arr6.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr6[i].title);
				div6.append(sa);
				$("#main").append(div6);
			};


			var arr7 = JSON.parse(data)._listData07;
			var div7 = $("<div></div>")
			for(var i = 0; i < arr7.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr7[i].title);
				div7.append(sa);
				$("#main").append(div7);
			};


			var arr8 = JSON.parse(data)._listData08;
			var div8 = $("<div></div>")
			for(var i = 0; i < arr8.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr8[i].title);
				div8.append(sa);
				$("#main").append(div8);
			};

			var arr9 = JSON.parse(data)._listData09;
			var div9 = $("<div></div>")
			for(var i = 0; i < arr9.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr9[i].title);
				div9.append(sa);
				$("#main").append(div9);
			};

			var arr10 = JSON.parse(data)._listData10;
			var div10 = $("<div></div>")
			for(var i = 0; i < arr10.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr10[i].title);
				div10.append(sa);
				$("#main").append(div10);
			};

			var arr11 = JSON.parse(data)._listData11;
			var div11 = $("<div></div>")
			for(var i = 0; i < arr11.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr11[i].title);
				div11.append(sa);
				$("#main").append(div11);
			};

			var arr12 = JSON.parse(data)._listData12;
			var div12 = $("<div></div>")
			for(var i = 0; i < arr12.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr12[i].title);
				div12.append(sa);
				$("#main").append(div12);
			};

			var arr13 = JSON.parse(data)._listData13;
			var div13 = $("<div></div>")
			for(var i = 0; i < arr13.length; i++){
				var sa = $('<a href="#"></a>');
				sa.html(arr13[i].title);
				div13.append(sa);
				$("#main").append(div13);
			};

			var arr14 = JSON.parse(data).right_images;
			for(var i = 0; i < arr14.length; i++){
				var rightImg = $('<img src=""/>');
				rightImg.attr("src",arr14[i].imgUrl);
				$("#right").append(rightImg);
			}
			var arr15 = JSON.parse(data).right_images2;
			for(var i = 0; i < arr15.length; i++){
				var rightImg = $('<img src=""/>');
				rightImg.attr("src",arr15[i].imgUrl);
				$("#right").append(rightImg);
			}

//这里开始是banner图
			var bli = $("<ul id='bli'></ul>");
			var arr16 = JSON.parse(data)._banner;
			for(var i = 0; i < arr16.length; i++){
				var lig = $("<li><a href=''><img src ='"+ arr16[i].imgUrl +"'/></a></li>");
				bli.append(lig);
				bli.prependTo($("#banner"));
				var more = $("<li><a href=''><img src ='"+ arr16[0].imgUrl +"'/></a></li>");

			}
			bli.append(more);

			var oli = $("#banner_ol").find("li");
			var tli = $("#bli").find("li");
			var iNow = 0;
			var timer = null;
			oli.click(function(){
				iNow = $(this).index();
				tab();
			});
			timer = setInterval(timerInner, 2000);
			$("#bli").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			});
			function tab(){
				//当点击的时候,将所有的按钮class都清空
				oli.attr("class", "");
				oli.eq(iNow).attr("class", "active");
				if(iNow == tli.size() - 1){
					oli.eq(0).attr("class", "active");
				}
				$("#bli").animate({left: -1920 * iNow}, function(){
					if(iNow == tli.size() - 1){
						iNow = 0;
						$("#bli").css("left", 0);
					}
				});
				}
				function timerInner(){
					iNow++;
					tab();
				};

//团购第一部分
			var iul = $("<ul id='tul'></ul>");
			var arr17 = JSON.parse(data)._buying1;
			for(var i = 0; i < arr17.length; i++){
			var tdiv1 = $("<div class='tdiv1'><img src='"+ arr17[i].imgUrl +"'/></div>");
			var tbutton = $('<button class="tbutton">'+ '立即团购' +'</button>');
			var ili = $("<li class='common'></li>");
			var ts = $('<s>'+ arr17[i].cost +'</s>');
			var tspan = $("<span class='tspan'>"+ arr17[i].sale +"</span>")
			var ta = $('<a href="'+arr17[i].href+'">'+ arr17[i].title +'</a>');
			ili.append(tdiv1);
			ili.append(ta);
			ili.append(ts)
			ili.append(tbutton);
			ili.append(tspan);
			iul.append(ili);

			}
			$("#list_01_1").append(iul);
			

			var rdiv = $("<ul id='rdiv'></ul>");
			var h2 = $("<h2 id='rh2'><span>"+ "折扣播报" +"</span><a href='#'>"+"更多＞" +"</a></h2>")
			rdiv.append(h2);
			var arr18 = JSON.parse(data)._report;
			for(var i = 0; i < arr18.length; i++){
				var rli = $("<li><a href='#'>"+ arr18[i].title +"</a></li>");
				rdiv.append(rli);
			}
			$("#list_01_1").append(rdiv);

//团购的第二个部分
			var tul_2 = $("<ul id='tul_2'></ul>");
			var arr19 = JSON.parse(data)._buying2
			for(var i = 0; i < arr19.length; i++){
				var tdiv2 = $("<div class='tdiv1'><img src='"+ arr19[i].imgUrl +"'/></div>");
				var tbutton2 = $('<button class="tbutton">'+ '立即团购' +'</button>');
				var ili2 = $("<li class='common'></li>");
				var ts2 = $('<s>'+ arr19[i].cost +'</s>');
				var tspan2 = $("<span class='tspan'>"+ arr19[i].sale +"</span>")
				var ta2 = $('<a href="#">'+ arr19[i].title +'</a>');
				ili2.append(tdiv2);
				ili2.append(ta2);
				ili2.append(ts2)
				ili2.append(tbutton2);
				ili2.append(tspan2);
				tul_2.append(ili2);
			}
			$("#list_01_2").append(tul_2);

//banner2
			var xdiv = $("<div class='xdiv'></div>");
			xdiv.append(xul);
			var xul = $("<ul class='xul'></ul>");
			var xall = $("<li class='xall'></li>");
			var show1 = JSON.parse(data)._banner2_1;
			for(var i = 0; i < show1.length; i++){
				var xli = $("<li class='xli'><a href='#'><img src='"+ show1[i].imgUrl +"'></a></li>");	
				xall.append(xli);
			}
			xul.append(xall)
			xdiv.append(xul);

			var show2 = JSON.parse(data)._banner2_2;
			var xall = $("<li class='xall'></li>");
			for(var i = 0; i < show2.length; i++){
				var xli = $("<li class='xli'><a href='#'><img src='"+ show2[i].imgUrl +"'></a></li>");
				xall.append(xli);
			}
			xul.append(xall)
			xdiv.append(xul);

			var show3 = JSON.parse(data)._banner2_3;
			var xall = $("<li class='xall'></li>");
			for(var i = 0; i < show3.length; i++){
				var xli = $("<li class='xli'><a href='#'><img src='"+ show3[i].imgUrl +"'></a></li>");
				xall.append(xli);
			}
			xul.append(xall)
			xdiv.append(xul);

			var show4 = JSON.parse(data)._banner2_4;
			var xall = $("<li class='xall'></li>");
			for(var i = 0; i < show4.length; i++){
				var xli = $("<li class='xli'><a href='#'><img src='"+ show4[i].imgUrl +"'></a></li>");
				xall.append(xli);
			}
			xul.append(xall)
			xdiv.append(xul);
		
			var xall = $("<li class='xall'></li>");
			var show1 = JSON.parse(data)._banner2_1;
			for(var i = 0; i < show1.length; i++){
				var xli = $("<li class='xli'><a href='#'><img src='"+ show1[i].imgUrl +"'></a></li>");	
				xall.append(xli);
			}
			xul.append(xall)
			xdiv.append(xul);
			$("#list_02_1").append(xdiv);


			var xol = $("#xol").find("li");
			var ig = 0;
			var thisTIME = null;
			xol.click(function(){
				ig = $(this).index();
				tap();
			});
			thisTIME = setInterval(thisTIMEInner, 2000);
			$(".xul").hover(function(){
				clearInterval(thisTIME);
			}, function(){
				thisTIME = setInterval(thisTIMEInner, 2000);
			});
			function tap(){
				//当点击的时候,将所有的按钮class都清空
				xol.attr("class", "");
				xol.eq(ig).attr("class", "active");
				if(ig == 4){
					xol.eq(0).attr("class", "active");
				}
				
				$(".xul").animate({left: -1190 * ig}, function(){
					if(ig == 4){
						ig = 0;
						$(".xul").css("left", 0);
					}
					
				});

				}
				function thisTIMEInner(){
					ig++;
					tap();
				};

//list03的大图
			var list3Div = $("<div class='bigimg'></div>")
			var arr20 = JSON.parse(data)._big1;
			for(var i = 0; i < arr20.length; i++){
				var timg = $("<a href='#'><img src='"+ arr20[i].imgUrl +"'></a>")
			}
			list3Div.append(timg);
			list3Div.prependTo($("#list_03_all"));

//list03的ul
			var zdiv = $("<ul class='ulg'></ul>")
			var arr21 = JSON.parse(data)._list03;
			for(var i = 0; i < arr21.length;i++){
				var gli = $("<li class='gli'></li>")
				var ga = $("<a class='ga' href='#'><img src='"+ arr21[i].imgUrl +"'></a>");
				var gtitle = $("<a class='gtitle'>"+ arr21[i].title +"</a>");
				var gpric = $("<span class='gpric'>"+ arr21[i].sale +"</span>");
				var gs = $("<s class='gs'>"+ arr21[i].cost +"</s>");
				var gbutton = $('<button class="gbutton">'+ '立即购买' +'</button>');
				gli.append(ga);
				gli.append(gtitle);
				gli.append(gpric);
				gli.append(gs);
				gli.append(gbutton);
				zdiv.append(gli);
			}
			
			$("#list_3_Div").append(zdiv)
//list04的小图
			var zdiv = $("<ul class='ulg'></ul>")
			var arr22 = JSON.parse(data)._list04;
			for(var i = 0; i < arr22.length;i++){
				var gli = $("<li class='gli'></li>")
				var ga = $("<a class='ga' href='#'><img src='"+ arr22[i].imgUrl +"'></a>");
				var gtitle = $("<a class='gtitle'>"+ arr22[i].title +"</a>");
				var gpric = $("<span class='gpric'>"+ arr22[i].sale +"</span>");
				var gs = $("<s class='gs'>"+ arr22[i].cost +"</s>");
				var gbutton = $('<button class="gbutton">'+ '立即购买' +'</button>');
				gli.append(ga);
				gli.append(gtitle);
				gli.append(gpric);
				gli.append(gs);
				gli.append(gbutton);
				zdiv.append(gli);
			}
			
			$("#list_4_Div").append(zdiv)


//list04的大图
			var list3Div = $("<div class='bigimg'></div>")
			var arr23 = JSON.parse(data)._big2;
			for(var i = 0; i < arr23.length; i++){
				var timg = $("<a href='#'><img src='"+ arr23[i].imgUrl +"'></a>")
			}
			list3Div.append(timg);
			$("#list04_all").append(list3Div);
//list05大图
			var list3Div = $("<div class='bigimg'></div>")
			var arr24 = JSON.parse(data)._big3;
			for(var i = 0; i < arr24.length; i++){
				var timg = $("<a href='#'><img src='"+ arr24[i].imgUrl +"'></a>")
			}
			list3Div.append(timg);
			list3Div.prependTo($("#list05_all"));


		
//list05的ul
		var zdiv = $("<ul class='ulg'></ul>")
			var arr25 = JSON.parse(data)._list05;
			for(var i = 0; i < arr25.length;i++){
				var gli = $("<li class='gli'></li>")
				var ga = $("<a class='ga' href='#'><img src='"+ arr25[i].imgUrl +"'></a>");
				var gtitle = $("<a class='gtitle'>"+ arr25[i].title +"</a>");
				var gpric = $("<span class='gpric'>"+ arr25[i].sale +"</span>");
				var gs = $("<s class='gs'>"+ arr25[i].cost +"</s>");
				var gbutton = $('<button class="gbutton">'+ '立即购买' +'</button>');
				gli.append(ga);
				gli.append(gtitle);
				gli.append(gpric);
				gli.append(gs);
				gli.append(gbutton);
				zdiv.append(gli);
			}
			
			$("#list_5_Div").append(zdiv)

//list06的ul
			var zdiv = $("<ul class='ulg'></ul>")
			var arr26 = JSON.parse(data)._list06;
			for(var i = 0; i < arr26.length;i++){
				var gli = $("<li class='gli'></li>")
				var ga = $("<a class='ga' href='#'><img src='"+ arr26[i].imgUrl +"'></a>");
				var gtitle = $("<a class='gtitle'>"+ arr26[i].title +"</a>");
				var gpric = $("<span class='gpric'>"+ arr26[i].sale +"</span>");
				var gs = $("<s class='gs'>"+ arr26[i].cost +"</s>");
				var gbutton = $('<button class="gbutton">'+ '立即购买' +'</button>');
				gli.append(ga);
				gli.append(gtitle);
				gli.append(gpric);
				gli.append(gs);
				gli.append(gbutton);
				zdiv.append(gli);
			}
			
			$("#list_6_Div").append(zdiv);

//list06的大图
			var list3Div = $("<div class='bigimg'></div>")
			var arr26 = JSON.parse(data)._big4;
			for(var i = 0; i < arr26.length; i++){
				var timg = $("<a href='#'><img src='"+ arr26[i].imgUrl +"'></a>")
			}
			list3Div.append(timg);
			$("#list06_all").append(list3Div);
			})
//我的美购下拉菜单

		$(".one").on("mouseover",function(){
			$("#header_list").css("display","block")
		});

		$(".one").on("mouseout",function(){
			$("#header_list").css("display","none")
		});

//购物车

		$("#shopping_cart").on("mouseover",function(){
			$("#shopping").css("display","block")
		});

		$("#shopping_cart").on("mouseout",function(){
			$("#shopping").css("display","none")
		});

//所有商品下拉菜单
		$("#allshop").on("mouseover",function(){
			$("#big_list").css("display","block")
		});
		$("#allshop").on("mouseout",function(){
			$("#big_list").css("display","none")
		});




//阻止我的美购，a标签的默认跳转
	    $("#this_onea").on("click",function(){
	    	return false;
	    });
//右边的fixed
	

		$("#right_but").on("click",function(){
			$("#right2").css("display","none")
		})
	
//左边的fixed
		$("#left2-1").on("mouseover",function(){
			$("#left2_img1").css("display","none");
			$("#leftDiv1").css("display","block");
		})
		$("#left2-1").on("mouseout",function(){
			$("#left2_img1").css("display","inline-block");
			$("#leftDiv1").css("display","none");
		})


		$("#left2-2").on("mouseover",function(){
			$("#left2_img2").css("display","none");
			$("#leftDiv2").css("display","block");
		})
		$("#left2-2").on("mouseout",function(){
			$("#left2_img2").css("display","inline-block");
			$("#leftDiv2").css("display","none");
		})

		$("#left2-3").on("mouseover",function(){
			$("#left2_img3").css("display","none");
			$("#leftDiv3").css("display","block");
		})
		$("#left2-3").on("mouseout",function(){
			$("#left2_img3").css("display","inline-block");
			$("#leftDiv3").css("display","none");
		})


		$("#left2-4").on("mouseover",function(){
			$("#left2_img4").css("display","none");
			$("#leftDiv4").css("display","block");
		})
		$("#left2-4").on("mouseout",function(){
			$("#left2_img4").css("display","inline-block");
			$("#leftDiv4").css("display","none");
		})


		$("#left2-5").on("mouseover",function(){
			$("#left2_img5").css("display","none");
			$("#leftDiv5").css("display","block");
		})
		$("#left2-5").on("mouseout",function(){
			$("#left2_img5").css("display","inline-block");
			$("#leftDiv5").css("display","none");
		})


		$("#left2-6").on("mouseover",function(){
			$("#left2_img6").css("display","none");
			$("#leftDiv6").css("display","block");
		})
		$("#left2-6").on("mouseout",function(){
			$("#left2_img6").css("display","inline-block");
			$("#leftDiv6").css("display","none");
		})


		$("#left2-7").on("mouseover",function(){
			$("#left2_img7").css("display","none");
			$("#leftDiv7").css("display","block");
		})
		$("#left2-7").on("mouseout",function(){
			$("#left2_img7").css("display","inline-block");
			$("#leftDiv7").css("display","none");
		})



		$("#left2-8").on("mouseover",function(){
			$("#left2_img8").css("display","none");
			$("#leftDiv8").css("display","block");
		})
		$("#left2-8").on("mouseout",function(){
			$("#left2_img8").css("display","inline-block");
			$("#leftDiv8").css("display","none");
		})

	})
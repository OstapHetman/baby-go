jQuery(function(){jQuery(".showSingle").click(function(){$(".activeted").removeClass("activeted"),jQuery($(this).addClass("activeted")),jQuery(".target").slideUp(),jQuery(".target").hide(),jQuery("#div"+$(this).attr("target")).css("display","flex")}),jQuery(".showSingle1").click(function(){$(".activeted1").removeClass("activeted1"),jQuery($(this).addClass("activeted1")),jQuery(".target1").slideUp(),jQuery(".target1").hide(),jQuery("#div"+$(this).attr("target")).css("display","flex")}),jQuery(".showSingle4").click(function(){$(".activeted4").removeClass("activeted4"),jQuery($(this).addClass("activeted4")),jQuery(".target4").slideUp(),jQuery(".target4").hide(),jQuery("#div"+$(this).attr("target")).css("display","flex")})});for(var element=document.getElementsByClassName("get"),input=document.getElementById("hidden-input"),i=0,len=element.length;i<len;i++)element[i].onclick=function(){var e=this.getAttribute("data-value");input.value=e};
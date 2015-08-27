$(document).ready(function(){
	var v = false;
	$fishmenu = ""; //массив для хранения меню, которо(ы)е  содержат рыбу
	$meatToTofu = ""; //массив для хранения елементов меню с классом meat
	$("button#vegOn").click(function(){
		if(v == false){
			v = true;
			$fishmenu = $(".fish").parents().filter("li").detach();//скрывает меню, которо(ы)е  содержат рыбу
			$meatToTofu = $(".meat").replaceWith("<li class='tofu'>тофу</li>"); //заменяет все элементы с классом meat на элементы с классом tofu и содержанием "тофу"
			$(".hamburger").replaceWith("<li class='giant_mashroom'>гигантский гриб</li>"); //аналогично
			//console.log(v);
			/*$brown = $(".brown").detach();
			$green = $(".green");*/
			//$(".green").replaceWith("<li class='red'>красный</div>");
			//$list = $(".menu_list").children().not(".as");
			//console.log($list);

		}
	});

	$("button#restoreMe").click(function(){
		if(v == true){
			v = false;
			//console.log(v);
			//$(".red").replaceWith("<li class='green'>зеленый</div>");
			//$(".first").before("<li>нулевой</li>");
			//$(".menu_list3").children().eq(2).before("<li>first</first>");
			$(".tofu").each(function(i){
				$(this).after($meatToTofu[i]);
				$(this).remove();
			}); //перебирает все элементы с классом tofu и заменяет их на элементы из массива meatToTofu

			$(".giant_mashroom").replaceWith("<li class='hamburger'>рубленый бифштекс</li>")

			$(".left_col").first().before($fishmenu);//вставляет содержимое массива fishmenu перед первым элементом внутри элемента с классом left_col
		}
	});


});


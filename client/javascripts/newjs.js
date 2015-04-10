var main = function () {
"use strict";

var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
"tags=dogs&format=json&jsoncallback=?";
var imgcomment;

var $photo;
$.getJSON(url, function (flickrResponse) {
flickrResponse.items.forEach(function (photo) {
var $img = $("<img>").hide();
$img.attr("src", photo.media.m);

$img.on("click", function () { 

	$("img").fadeOut();
	$img.fadeIn(1000);
	
	imgcomment=$img.attr("src");	

});


$("main").append($img);
$img.fadeIn();

});
});



$(".tabs a:nth-child(1)").on("click", function () 
	{
       Tab(1);
       return false;

	});

		$(".tabs a:nth-child(2)").on("click", function () 
		{
	       Tab(2);
	       return false;
		});

			$(".tabs a:nth-child(3)").on("click", function () 
			{
				Tab(3);	
				return false;
			});

   var Tab = function (tabnumber) 
   {	

 	$(".tabs span").removeClass("active");
    // делаем активной первую вкладку
    $(".tabs a:nth-child("+tabnumber+") span").addClass("active");
    // очищаем основное содержание, чтобы переопределить его
    $("main .content").empty();
    // возвращается false, так как мы не переходим по ссылке

    
		if(tabnumber===1)
		{
		
		}
			else if (tabnumber===2)
				{
				toDos.forEach(function (element) 
					{
  					$("main .content").append($("<p>").text(element));

					});
		 
				}

   };


   $(".comment-input input").on("keypress", function (event) {
if (event.keyCode === 13) 
	{
addCommentFromInputBox();
	}
});
 $(".comment-input button").on("click", function (event) {
    addCommentFromInputBox();
  });


   var addCommentFromInputBox = function () 
   {
   	 	
 	if ($(".comment-input input").val() !== "") {
 		var $new_comment = $("<p>");
	    $new_comment.text($(".comment-input input").val());
	    $new_comment.hide;
	    $(".comments").append($new_comment);
	    $new_comment.fadeIn(1500);
	    var commentInput=$(".comment-input input").val();
	    var jsonString1 = {
		  id : imgcomment,
		  Comment : commentInput
		};

	    var jsonString2 = JSON.stringify(jsonString1);
	    //console.log(jsonString2);

	};


if (event.keyCode === 13) 
	{
	    $new_comment.text($(".comment-input input").val());
	    $new_comment.hide();
	    $(".comments").append($new_comment);
	    $new_comment.fadeIn(2000);	
	    $(".comment-input input").val("");
	};




};
};
$(document).ready(main);

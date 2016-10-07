// good luck !

function recupColors(){
	var inputs = $(".color");
	var len = inputs.length;
	for (var i=0; i<len; i++){
		var color = $(inputs[i]).data('color');
		console.log(color);
		$(inputs[i]).css("background-color", color);
	}
}
recupColors();

$('input.color').on('click', function(){
	var fond = $(this).data('color');
	var appel = checked();
	if(appel){
		$(".main").css('color',fond)
	} else {
	$('body').css("background-color", fond);
		
	}	
});

function checked(){
return $('#modify-texte').is(':checked');
}

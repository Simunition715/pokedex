var pokedata ;

$(document).ready(function(){

	for(var i = 1 ; i < 152; i++){
		var img = '<img id='+i+' src=\'http://pokeapi.co/media/img/'+i+".png'>"
		$('#pmon').append(img)
		console.log(img)
	}

	$('img').on("click",(function(){
		console.log("working")
		var name = $(this).att("id");
		

		$.get('http://pokeapi.co/api/v2/pokemon/'+ name, function(res) {
		
		




		 },'json')


	})


})
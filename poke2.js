$(document).ready(function(){
	for(var i =1 ; i < 152; i++){
		var img = '<img id='+i+' src=\'http://pokeapi.co/media/img/'+i+".png'>";
		$('#pmon').append(img)
	}

	$('img').on('click', function(){
		var id = $(this).attr('id');
		$.get('http://pokeapi.co/api/v2/pokemon/'+ id, function(response){
			console.log(response)
		var	information = '<h1>'+ response.name +'</h1>'
			information += '<img src=\'http://pokeapi.co/media/img/'+id+".png'>";
			information += '<h2> Type </h2>';
			information += '<h5>' + response.types[0].type.name + '</h5>';
			information += '<h4>Height</h4>';
			information += '<h5>'+ response.height +'</h5>';
			information += '<h4>Weight</h4>'
			information += '<h5>'+ response.weight +'</h5>'
			$('#info').html(information)
			console.log(response.types[0].type.name);



		})
	})


})
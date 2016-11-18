
$( document ).ready(function() {
  $( "#accionar" ).on("click", function() {
	  	var cambiar = $('input:text[name=usuarios]').val();
		$.getJSON( "https://randomuser.me/api/?results="+ cambiar, function( json ) {
			var datos = json.results;
			
			$("#resultados > div").empty();
			
			$.each(datos, function(i, valor) {
				var elem = $( "#plantilla" ).clone(); 
				
				var urlimagen = datos[i].picture.large;
				var nombrecompleto = datos[i].name.first +' '+ datos[i].name.last;
				var email = datos[i].email + '<br>';
				var telefono = datos[i].phone;
				
				$(elem).prop('id','plantilla'+i+1);
				$(elem).find("img").attr("src",urlimagen);
				$(elem).find("#nombre").text(nombrecompleto);
				$(elem).find("#email").html(email);
				$(elem).append(telefono);
				
				
				$(elem).appendTo( "#resultados > div" ).show();
	        });
			
		});
		 
		 
	});
  
  
});
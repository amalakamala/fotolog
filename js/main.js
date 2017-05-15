function agregaPosteo() {
	var containerPosteos = document.getElementById("contenedor-posteos");
	var nombreFF =document.getElementById("nombre").value;	
	var contenidoFF = document.getElementById("cajaposteos").value;

	//Div nuevo post
	var nuevoPost = document.createElement("div");

	//Guarda valores
	var contenedorNombre = document.createElement("strong");
	var contenedorPost = document.createElement("p");
	var separacion = document.createElement("hr");	


	var parrafCorazon = document.createElement("p");
	var i = document.createElement("i");	
	parrafCorazon.appendChild(i);

	parrafCorazon.setAttribute("class","corazon"); 
	i.setAttribute("class","fa fa-heart"); 
	i.setAttribute("arial-hidden", "true");

	var nodoNombre = document.createTextNode(nombreFF + " escribio: ");
	var nodoPosteo = document.createTextNode(contenidoFF);

	contenedorNombre.appendChild(nodoNombre);
	contenedorPost.appendChild(nodoPosteo);	

	nuevoPost.appendChild(contenedorNombre);
	nuevoPost.appendChild(contenedorPost);
	nuevoPost.appendChild(parrafCorazon);	
	nuevoPost.appendChild(separacion);	

	//Function click para corazon
	i.addEventListener("click", function(){
		i.classList.toggle("rojo");
	});
	

	nuevoPost.setAttribute("class","posteo"); 
	containerPosteos.appendChild(nuevoPost);

	document.getElementById("nombre").value = "";
	document.getElementById("cajaposteos").value = "";		
}


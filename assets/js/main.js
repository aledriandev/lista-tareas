function Tarea (userId,id,title,completed){
	this.userId = userId;
	this.id = id;
	this.title = title;
	this.completed = completed;
}

function Lista(){	
	this.tareasPendientes = tareasJSON;
  this.tareasRealizadas = [];
	this.id = 0;
	this.tarea = document.getElementById("newTarea");
	this.agregar = function(){
		this.tareaNueva = new Tarea (2017, this.id+=1, this.tarea.value, false);
		this.tareasPendientes.push(this.tareaNueva);
		document.getElementById("newTarea").value = "";	
    //this.mostrarLista();
	};
	this.mostrarLista = function(){
		var lista = ""
		for (var i = 0; i < this.tareasPendientes.length; i++) {
        var tareaPendiente = this.tareasPendientes[i]
        if (tareaPendiente.completed)
				lista += "<li id="+"tarea"+i+"><input type='checkbox' class='toDo' " + "value='"  + i + "' checked><del>"+tareaPendiente.title+"</del></li>"
        else
        lista += "<li id="+"tarea"+i+"><input type='checkbox' class='toDo' " + "value='"  + i + "''>"+tareaPendiente.title+"</li>"
        		
    }   
		document.getElementById("listaTareas").innerHTML = lista;
	};
//  this.redirect= function(e){
//    console.log (e.target.value);
//  }	
		
}

var tareasJSON =[];
var muchasTareas = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
]
for (var i = 0; i < 10; i++){
  var diezTareas = new Tarea(muchasTareas[i].userId,muchasTareas[i].id,muchasTareas[i].title,muchasTareas[i].completed)
  tareasJSON.push( diezTareas );
}
var listaDeTareas = new Lista();
listaDeTareas.mostrarLista();

var agregarTarea = document.getElementById("agregarTarea");
agregarTarea.onclick = function(){
	listaDeTareas.agregar();
  listaDeTareas.mostrarLista();
}


var checkTareas = document.getElementsByClassName("toDo");
for (var i = 0; i< checkTareas.length; i++){
   checkTareas[i].onclick = function (event) {
      redirect (event);
   };
}

function redirect (e) {


  var posLista = listaDeTareas.tareasPendientes[e.target.value];
  
  if (posLista.completed)
    posLista.completed = false;
  else
    posLista.completed = true;

  listaDeTareas.mostrarLista();

  //console.log (e.target.value);
 
}







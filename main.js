let flash = document.querySelector('.body');

let imagenlist = [ 
	'assets/jg.jpeg',
	'assets/mega.jpeg',
	'assets/goku.jpg',	
	'assets/ja.jpeg'
]

let counter = 0;


let before = document.createElement('h1')
let beforeText = document.createTextNode('<')
before.appendChild(beforeText);


let imagen = document.createElement('img');
imagen.setAttribute('src' , imagenlist[counter]);

let next = document.createElement('h1')
let nextText = document.createTextNode('>')
next.appendChild(nextText);


function init(){
	console.log(before, next);
	flash.appendChild(before);
	flash.appendChild(imagen);
	flash.appendChild(next);

}

before.addEventListener('click', function(){
	if (counter > 0){
		counter = counter - 1;
	}
	imagen.setAttribute('src', imagenlist[counter]);

})

next.addEventListener('click', function(){
	if (counter < 3){
		counter = counter + 1;
	}
	imagen.setAttribute('src', imagenlist[counter]);

})

init();

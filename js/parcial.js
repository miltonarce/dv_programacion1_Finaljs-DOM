/*Parcial Programacion 1 Milton Arce*/
var d = document; 
var divgrillaL = d.getElementById('grilla-l');
var ulgrilla = d.createElement('ul');
divgrillaL.appendChild(ulgrilla);
var li;
var divgrilla = d.getElementById('grilla'); //Creo Ul para meter li con links de productos

//Creo los Li dentro del Ul llamando al a funcion que recorre los arrays y crea los li
recorrerProductos(remeras);
recorrerProductos(zapatillas);
recorrerProductos(shorts);

function recorrerProductos(item){

	for(var i in item)
	{
		console.log('i:' +i+ '- item[i] ' + item[i]);
		li = d.createElement('li');
		li2 = d.createElement('li');
		a = d.createElement('a');
		a.href = '#';
		a.innerHTML = i;
		a.onclick = crearTabla;
		ulgrilla.appendChild(li2);
		li.appendChild(a);
		ulgrilla.appendChild(li);
	}
}

// funcion llamada por el evento onclick en la funcion recorrerproductos y genera 
//la tabla correspondiente a cada producto
function crearTabla(){
	divgrilla.innerHTML= '';
	var titulo = d.createElement('h3');
	titulo.innerHTML = this.innerHTML; //nombre de producto
	divgrilla.appendChild(titulo);

	var tabla = d.createElement('table');
	grilla.appendChild(tabla);
	var trTitulo = d.createElement('tr');
	tabla.appendChild(trTitulo);
	var vTitulo = ['Imagen', 'Marca', 'Modelo','Precio'];
	var th;

	for(var i = 0; i <vTitulo.length; i++)
	{
		th = d.createElement('th');
		trTitulo.appendChild(th);
	}

	var tr, td0, td1, td2, td3, td4, imag, btn;	
//pregunto que producto hice click si es igual le asign oese nombre a la variable item
	if(this.innerHTML == "Remeras Basketball" || this.innerHTML == "Remeras Geek" || this.innerHTML == "Remeras Moda" ) {
		item = remeras[this.innerHTML];
	}

	if(this.innerHTML == "Zapatillas Basketball" || this.innerHTML == "Running Geek" || this.innerHTML == "Zapatillas Moda" ) {
		item = zapatillas[this.innerHTML];
	}

	if(this.innerHTML == "Shorts Basketball" || this.innerHTML == "Shorts Geek" || this.innerHTML == "Shorts Moda" ) {
		item = shorts[this.innerHTML];
	}
//ya que el nombre del producto es = al indice del array del producto  lo recorro y genero el producto con sus items y props.
	for(var i=0; i < item.length; i++)
		{
			tr = d.createElement('tr');
			tabla.appendChild(tr);
			td0 = d.createElement('td');
			tr.appendChild(td0);
			imag = d.createElement('img');
			td0.appendChild(imag);
			var imagensrc = item[i].imagen1;
			imag.src= 'img/productos/remeras/'+ imagensrc;

			td1 = d.createElement('td');
			if(item[i].marca == 'Adidas'){
				imgTD = d.createElement('img');
				imgTD.alt ='Logo Marca';
				imgTD.src = 'img/ico/adidas_min.jpg';
				td1.appendChild(imgTD);
			}else if(item[i].marca == 'Nike'){
					imgTD = d.createElement('img');
				imgTD.alt ='Logo Marca';
				imgTD.src = 'img/ico/nike_min.jpg';
				td1.appendChild(imgTD);
				}
				else{
					td1.innerHTML = item[i].marca;
				}
			tr.appendChild(td1);

			td2 = d.createElement('td');
			td2.innerHTML = item[i].descripcion;
			tr.appendChild(td2);

			td3 = d.createElement('td');
			td3.innerHTML = '$ '+item[i].precio;
			tr.appendChild(td3);

			td4 = d.createElement('td');
			btn = d.createElement('input');
			btn.type = 'button';
			btn.value = 'Ver';
			btn.id = item[i].id;
			btn.onclick = genMod;
			td4.appendChild(btn);
			tr.appendChild(td4);

		}
	}
	
		function genMod(){
	divP = d.getElementById('principal');
	divM = d.createElement('div');
	divMC = d.createElement('div');
	divM.className = 'div-m';
	divMC.className = 'div-mc';
	div1 = d.createElement('div');
	div2 = d.createElement('div');
	div3 = d.createElement('div');
	div1.className = 'div-1';
	div2.className = 'div-2';
	div3.className = 'div-3';
	spanC = d.createElement('span');
	spanC.onclick = cerrarM;
	spanC.innerHTML = '&times;';
	spanC.className = 'spanC';
	h3M = d.createElement('h3');
	h3M.className = 'h3M';
	div2_ul = d.createElement('ul');
	div2_ul.className = 'ul-img-item'
	div2_ul_li1 = d.createElement('li');
	div2_ul_li2 = d.createElement('li');
	div2_ul_li3 = d.createElement('li');
	div2_ul_li4 = d.createElement('li');
	div2_ul_li_img = d.createElement('img');
	
	/*Recorrer arrays hasta encontrar el id del objeto y traer todos los datos del mismo para modal*/
	if(this.id >= 1 && this.id <= 4){
			for(var i=0; i < remeras["Remeras Basketball"].length; i++){
					if(remeras["Remeras Basketball"][i].id == 1/*CAMBIAR ESTE VALOR TIENE QUE SE AUTOMATICO*/){
						h3M.innerHTML = 'Remera # '+remeras["Remeras Basketball"][i].id;
						div2_ul_li_img.src = "img/productos/remeras/"+remeras["Remeras Basketball"][i].imagen1;
					}
			}
		}
	divP.appendChild(divM);
	divM.appendChild(divMC);
	divMC.appendChild(div1);
	divMC.appendChild(div2);
	divMC.appendChild(div3);
	div1.appendChild(spanC);
	div1.appendChild(h3M);
	div2.appendChild(div2_ul);
	div2_ul.appendChild(div2_ul_li1);
	div2_ul.appendChild(div2_ul_li_img);
}
/* Funcion que cierra el modal del producto*/
function cerrarM(){
	divP.removeChild(divM);
}






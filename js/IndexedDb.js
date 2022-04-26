const indexedDb = window.indexedDB;

let db;

const conexion = indexedDb.open('HojasdeVida',1);

//No presenta fallos
conexion.onsuccess = () =>{
    db= conexion.result
    console.log('data base open', db)
}

//actualizar la base de datos
conexion.onupgradeneeded = (e) =>{
    db = e.target.result
    console.log('data base created', db)
    const colexionObjetos = db.createObjectStore('Usuarios',{
        keyPath: 'id'
    })
}
//arroje el error
conexion.onerror = (error) =>{
    console.log('Error', error)
}




//db.transaction(['nombreTabla'],'readwrite')
const eliminar = (id) =>{
    const trasaccion = db.transaction(['Usuarios'],'readwrite')
    const coleccionObjetos = trasaccion.objectStore('Usuarios')
    const conexion = coleccionObjetos.delete(id)

    conexion.onsuccess = ()=>{
        consultar()
    }
}

const consultar = () =>{
    const trasaccion = db.transaction(['Usuarios'],'readonly')
    const coleccionObjetos = trasaccion.objectStore('Usuarios')
    const conexion = coleccionObjetos.openCursor()



    conexion.onsuccess = (e)=>{
        const cursor = e.target.result
        if (cursor) {
            console.log(cursor.value)
            cursor.continue()
        }else{
            console.log('No hay Tareas en la lista')
        }
    }

}

var base64String = "";
function Uploaded() {
	var file = document.querySelector(
		'input[type=file]')['files'][0];
	var reader = new FileReader();
	reader.onload = function () {
		base64String = reader.result.replace("data:", "")
			.replace(/^.+,/, "");
		imageBase64Stringsep = base64String;
	}
	reader.readAsDataURL(file);
	console.log(base64String)
}

const Capturar = () =>{

    var vid = document.getElementById("id").value;
    var vname = document.getElementById("name").value;
    var vlname = document.getElementById("lname").value;
    var vfNaci = document.getElementById("fNacimiento").value;
    var vlNaci = document.getElementById("lugarNacimiento").value;
    var vemail = document.getElementById("email").value;
    var vtelefono = document.getElementById("telefono").value;
    var vcelular = document.getElementById("celular").value;
    var vbachi = document.getElementById("bachillerato").value;
    var vestudiosadd = document.getElementById("estudiosAdd").value;


    const trasaccion = db.transaction(['Usuarios'],'readwrite')
    const coleccionObjetos = trasaccion.objectStore('Usuarios')
    const conexion = coleccionObjetos.add(
        {
            id: vid,
            name: vname,
            lname: vlname,
            fNacimiento: vfNaci,
            lugarNacimiento: vlNaci,
            email: vemail,
            telefono: vtelefono,
            celular: vcelular,
            bachillerato: vbachi,
            estudiosAdd: vestudiosadd,
 
        }
    )
    consultar()
}

const traer = () =>{
    var vid = document.getElementById("prueba").value;

    const trasaccion = db.transaction(['Usuarios'],'readonly')
    const coleccionObjetos = trasaccion.objectStore('Usuarios')
    const conexion = coleccionObjetos.get(vid)
    
    conexion.onsuccess = (e)=>{
        document.getElementById("mm").innerHTML=conexion.result.id;
        document.getElementById("pp").innerHTML=conexion.result.name;
        document.getElementById("mm").innerHTML=conexion.result.lname;
        document.getElementById("mm").innerHTML=conexion.result.fNacimiento;
        document.getElementById("mm").innerHTML=conexion.result.lugarNacimiento;
        document.getElementById("mm").innerHTML=conexion.result.email;
        document.getElementById("mm").innerHTML=conexion.result.telefono;
        document.getElementById("mm").innerHTML=conexion.result.celular;
        document.getElementById("mm").innerHTML=conexion.result.bachillerato;
        document.getElementById("mm").innerHTML=conexion.result.estudiosAdd;
        console.log(conexion.result.email)
    }
}

const insertar = () =>{
    var vid = document.getElementById("prueba").value;

    const trasaccion = db.transaction(['Usuarios'],'readonly')
    const coleccionObjetos = trasaccion.objectStore('Usuarios')
    const conexion = coleccionObjetos.get(vid)
    
    conexion.onsuccess = (e)=>{
        document.getElementById("id").value=conexion.result.id;
        document.getElementById("name").value=conexion.result.name;
        document.getElementById("lname").value=conexion.result.lname;
        document.getElementById("fNacimiento").value=conexion.result.fNacimiento;
        document.getElementById("lugarNacimiento").value=conexion.result.lugarNacimiento;
        document.getElementById("email").value=conexion.result.email;
        document.getElementById("telefono").value=conexion.result.telefono;
        document.getElementById("celular").value=conexion.result.celular;
        document.getElementById("bachillerato").value=conexion.result.bachillerato;
        document.getElementById("estudiosAdd").value=conexion.result.estudiosAdd;
        console.log(conexion.result.email)
    }
}

const editar = () =>{

    var vid = document.getElementById("id").value;
    var vname = document.getElementById("name").value;
    var vlname = document.getElementById("lname").value;
    var vfNaci = document.getElementById("fNacimiento").value;
    var vlNaci = document.getElementById("lugarNacimiento").value;
    var vemail = document.getElementById("email").value;
    var vtelefono = document.getElementById("telefono").value;
    var vcelular = document.getElementById("celular").value;
    var vbachi = document.getElementById("bachillerato").value;
    var vestudiosadd = document.getElementById("estudiosAdd").value;


    const trasaccion = db.transaction(['Usuarios'],'readwrite')
    const coleccionObjetos = trasaccion.objectStore('Usuarios')
    const conexion = coleccionObjetos.put(
        {
            id: vid,
            name: vname,
            lname: vlname,
            fNacimiento: vfNaci,
            lugarNacimiento: vlNaci,
            email: vemail,
            telefono: vtelefono,
            celular: vcelular,
            bachillerato: vbachi,
            estudiosAdd: vestudiosadd,
 
        }
    )
    consultar()
}

const eliminardata = () =>{
    var vid = document.getElementById("id").value;
    console.log(vid)
    const trasaccion = db.transaction(['Usuarios'],'readwrite')
    const coleccionObjetos = trasaccion.objectStore('Usuarios')
    const conexion = coleccionObjetos.delete(vid)

    conexion.onsuccess = ()=>{
        console.log(vid)
        consultar()
        
    }
}
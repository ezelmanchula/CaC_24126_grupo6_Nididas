/* DOMContentLoaded */
/* evento DOMContentLoaded para asegurar que el script se ejecute después de que el DOM se haya cargado completamente. */

document.addEventListener("DOMContentLoaded", ()=>{

    const bodyTablaArticulos = document.querySelector ("#body-tabla-articulos")
    const formCrearArticulos = document.querySelector("#form-crear-articulos")
    
    /* FUNCION PARA OBTENER LOS DATOS DE NUESTRA API USANDO AXIOS */
    const fetchArticulos = async ()=>{
    try {
        const respuesta = await axios.get (`http://localhost:3030/articulos/`)
          console.log(respuesta);
        const articulos = respuesta.data
       //limpiar la tabla antes de agregar nuevos datos
       bodyTablaArticulos.innerHTML="";
    
    /*    iterar sobre los datos y agregar los nuevos */
    articulos.forEach (articulo=>{
    //crear una nueva fila
    const fila = document.createElement("tr")
    //crear las celdas para el titulo , contenido y acciones.
    const celdaNombre = document.createElement("td")
    const celdaDetalles = document.createElement("td")
    const celdaTalle = document.createElement("td")
    const celdaStock = document.createElement("td")
    const celdaPrecio = document.createElement("td")
    const celdaAcciones = document.createElement("td")
    
    // asignar el contenido a las celdas
    celdaNombre.textContent = articulo.nombre
    celdaDetalles.textContent = articulo.detalles
    celdaTalle.textContent = articulo.talle
    celdaStock.textContent = articulo.stock 
    celdaPrecio.textContent = articulo.precio
    
    
    // crear boton de eliminar
    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"
    botonEliminar.addEventListener("click",()=>{borrarArticulo(articulo.id)}) 
    // crear el boton de editar
    const botonEditar = document.createElement("button")
    botonEditar.textContent = "Editar"
    botonEditar.addEventListener("click", ()=>{
      /*   redirigir a la pagina de edicion con el id de los articulos en la URL */
    window.location.href = `articulosEdit.html?id=${articulo.id}`
    })
    // agregar los botones a la celda de acciones
    celdaAcciones.appendChild(botonEliminar)
    celdaAcciones.appendChild(botonEditar)
    
    // agregar las celdas a la fila
    fila.appendChild(celdaNombre)
    fila.appendChild(celdaDetalles)
    fila.appendChild(celdaTalle)
    fila.appendChild(celdaStock)
    fila.appendChild(celdaPrecio)
    fila.appendChild(celdaAcciones)
    
    //agregar la fila al cuerpo de la tabla
    bodyTablaArticulos.appendChild(fila)
    
    })
    } catch (error) {
        console.error("Error al obtener los Articulos",error)
    }
    }
    
    // la funcion para eliminar un articulo
    const borrarArticulo = async(id)=>{
    await axios.delete (`http://localhost:3030/articulos/${id}`)
    //recargamos la lista de posteos despues de eliminar
    fetchArticulos()
    }
    
    //funcion para crear un nuevo articulo
    formCrearArticulos.addEventListener("submit",async function (event){
      event.preventDefault();
      const nuevoArticulo = {
        nombre:document.querySelector("#nuevo-nombre").value ,
        detalles:document.querySelector("#nuevo-detalles").value ,
        talle:document.querySelector("#nuevo-talle").value ,
        stock:document.querySelector("#nuevo-stock").value ,
        precio:document.querySelector("#nuevo-precio").value ,
      };
      try {
        await axios.post(`http://localhost:3030/articulos/`,nuevoArticulo)
        //limpiar el formulario
        formCrearArticulos.reset()
        //recargamos la lista de Productos despues de crear uno nuevo
        fetchArticulos()
      } catch (error) {
        console.error("Error al Articulos",error)
      }
    })
    
    //llamar a la funcion para obtener y mostrar los Productos al cargar la pagina
    fetchArticulos()
    })
    
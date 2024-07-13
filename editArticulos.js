
document.addEventListener("DOMContentLoaded",()=>{
    //obtener el formulario de edicion
    const formulario = document.querySelector("#formEditarArticulos")
    // obtenemos los parametros de la URL

    const parametrosURL = new URLSearchParams(window.location.search)
    const IdArticulos = parametrosURL.get("id")


    // funcnion parta obtener los datos de los Productos x ID

    const fetchArticulos = async (id) =>{
        try {
            const respuesta = await axios.get (`http://localhost:3030/articulos/${id}`)
                console.log(respuesta);
            const articulos = respuesta.data
            // asignar los valores obtenidos a los campos del formulario
            document.querySelector("#nuevo-nombre").value = articulos.nombre,
            document.querySelector("#nuevo-detalles").value = articulos.detalles,
            document.querySelector("#nuevo-talle").value = articulos.talle,
            document.querySelector("#nuevo-stock").value = articulos.stock,
            document.querySelector("#nuevo-precio").value = articulos.precio
        } catch (error) {
            console.error('Error al obtener el post:', error);
        }
    }

    //llamar a la funcion para obtener los Productos
if (IdArticulos){
    fetchArticulos(IdArticulos)
}

formulario.addEventListener("submit" , async function (evento){
    evento.preventDefault()

    const actualizarArticulos = {
        nombre:document.querySelector("#nuevo-nombre").value,
        detalles:document.querySelector("#nuevo-detalles").value,
        talle:document.querySelector("#nuevo-talle").value,
        stock:document.querySelector("#nuevo-stock").value,
        precio:document.querySelector("#nuevo-precio").value
    }
    try{
        await axios.put(`http://localhost:3030/articulos/${IdArticulos}`,actualizarArticulos)
        alert(`Articulo ${IdArticulos} Actualizado`)
        window.location.href ="articulos.html"

    }catch(error){
        console.error('Error al actualizar el Articulo : ', error )
        
    }
})





})
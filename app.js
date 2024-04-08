const solicitarAPI = async() =>{
    try {
        const respuesta= await fetch('https://api.themoviedb.org/3/movie/550?api_key=5fd736d812ceaa867904a64947dd846e');
        console.log(respuesta);
        const datos= await respuesta.json;
        console.log(datos);
    }catch(error){
        console.log(error);
    }
}
solicitarAPI();
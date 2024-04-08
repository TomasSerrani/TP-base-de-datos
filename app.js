const solicitarAPI = async() =>{
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "5d5e97c9a9a65b2a8c73afbc83740841");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    try {
        const respuesta= await fetch("https://v3.football.api-sports.io/leagues", requestOptions);
        console.log(respuesta);
        const datos= await respuesta.json;
        console.log(datos);
    }catch(error){
        console.log(error);
    }
}
solicitarAPI();
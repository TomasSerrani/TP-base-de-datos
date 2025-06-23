const solicitarAPI = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-apisports-key", "74b2e353eafe98d4647e88577a1285fd");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    try {
        const statusResponse = await fetch("https://v3.football.api-sports.io/status", requestOptions);
        const statusData = await statusResponse.json();
        console.log("Status:", statusData);

        const standingsResponse = await fetch("https://v3.football.api-sports.io/standings?league=39&season=2024", requestOptions);
        const standingsData = await standingsResponse.json();
        
        let content = "";
        standingsData.response[0].league.standings[0].forEach((team, index) => {
            content += `
             <tr>
                <td>${index + 1}</td>
                <td><img src="${team.team.logo}" alt="${team.team.name}" style="width: 50px;"> ${team.team.name}</td>
                <td>${team.all.played}</td>
                <td>${team.all.win}</td>
                <td>${team.all.draw}</td>
                <td>${team.all.lose}</td>
                <td>${team.all.goals.for}</td>
                <td>${team.all.goals.against}</td>
                <td>${team.all.goals.for- team.all.goals.against}</td>
                <td>${team.points}</td>
             </tr>`;
        });
        const tableBody_standings = document.getElementById("tableBody_standings");
        tableBody_standings.innerHTML = content;
        $(document).ready(function () {
    const table = $('#datatable_standings').DataTable();

    $('#searchInput').on('keyup', function () {
        table.search(this.value).draw();
    });
});
    } catch (error) {
        console.log(error);
    }
}
window.addEventListener("load", async () => {
    await solicitarAPI();
});
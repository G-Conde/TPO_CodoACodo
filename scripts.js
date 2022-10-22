function getPlayers(done){

	const results = fetch ("https://free-nba.p.rapidapi.com/players?page=0");
		
	results
	.then(response => response.json())
	.then(data=>{
		done(data)
	});
}

getPlayers(data => {

	data.results.forEach(jugador => {
		const article = document.createRange().createContextualFragment(`
		<article>
        
			<div class="containerJugadores">
                <img src="${jugador.image} alt="jugador">
            </div>

            <h2>${jugador.first_name}</h2>
            <span>${jugador.last_name}</span>

        </article>
		`);

		const main = document.querySelector("main");
		main.append (article);

	});
	
});
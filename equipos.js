let page = 1;

async function get_items(){

	const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6ffe7ac72cmsh071e27eaaa43135p15a59bjsn31132671906d',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
    };
    
    const conn = await fetch('https://free-nba.p.rapidapi.com/teams?page=0', options);
			
	const response = await conn.json();
    console.log(response);

	response.data.forEach( item => {
        let div_item = `
        
        
		<article>
                <div class="containerJugadores"> 
				    <div> 🏀Abreviatura: ${item.abbreviation}</div>
                    <div> 🏀 Nombre: ${item.full_name}</div>
					<div> 🏀 Ciudad: ${item.city}</div>					
			    </div>           
         </article>   
	    `;
        
        document.querySelector('#items').insertAdjacentHTML('beforeend', div_item);
    });

    page ++;
}

get_items();

		/*<article>
        
			<div class="containerJugadores">
                <img src="${jugador.image} alt="jugador">
            </div>

            <h2>${jugador.first_name}</h2>
            <span>${jugador.last_name}</span>

        </article>*/



		
/*let page = 1;

async function get_items() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6ffe7ac72cmsh071e27eaaa43135p15a59bjsn31132671906d',
			'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
		}
	};
	
    // Connect to the API
    // const conn = await fetch('https://ecuaguia.com/iceland/api-get-items?page=' + page);
    const conn = await fetch(`https://free-nba.p.rapidapi.com/players?page=${page}&per_page=25`, options);
    
    // Get the data from the API
    const response = await conn.json();
    console.log(response);

    // const item =  { "id" : 10, "name" : "Fluff" }
    response.data.forEach( item => {
        let price = item.price;
        let vat = 24.5 / 100;
        let final_price = price + (price * vat);

        let div_item = `
            <div class="item">
                <div class="item__info"> 
                    <div class="">${item.id}</div>
                    <div>${item.first_name}</div>
                </div>           
            </div>
        `;
        
        document.querySelector('#items').insertAdjacentHTML('beforeend', div_item);
    });

    page ++;
}

get_items();*/
console.log("API.JS laddad");


async function hamtaAktieData(ticker) {


    try {


        const url = 
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`;



        const response = await fetch(url);


        const data = await response.json();



        console.log("API svar:", data);



        const quote = data["Global Quote"];



        if (!quote || !quote["05. price"]) {


            console.log("Ingen kursdata hittades");

            return null;

        }



        return {


            price: Number(quote["05. price"]).toFixed(2),

            currency: "USD",

            change: quote["10. change percent"],

            updated: quote["07. latest trading day"]


        };



    } catch (error) {


        console.log("API fel:", error);


        return null;


    }


}
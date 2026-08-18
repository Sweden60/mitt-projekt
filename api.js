console.log("API.JS laddad");



async function hamtaAktieData(ticker) {


    try {


        const url =
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`;



        const response = await fetch(url);

        const data = await response.json();



        console.log("Kursdata:", data);



        const quote = data["Global Quote"];



        if (!quote || !quote["05. price"]) {

            return null;

        }



        return {


            price: Number(quote["05. price"]).toFixed(2),

            currency: "USD",

            change: quote["10. change percent"],

            updated: quote["07. latest trading day"]


        };



    } catch(error) {


        console.log("Kursfel:", error);

        return null;

    }


}








async function hamtaForetagsData(ticker) {


    try {


        const url =
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${API_KEY}`;



        const response = await fetch(url);


        const data = await response.json();



        console.log("Företagsdata:", data);



        return {


            namn: data.Name,

            sektor: data.Sector,

            bransch: data.Industry,

            borvarde: data.MarketCapitalization,

            pe: data.PERatio,

            vinstmarginal: data.ProfitMargin,

            omsattning: data.RevenueTTM


        };



    } catch(error) {


        console.log("Företagsfel:", error);

        return null;


    }


}
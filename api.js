console.log("API.JS laddad");





async function hamtaAktieData(ticker) {


    try {


        const url =
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`;



        const response =
        await fetch(url);



        const data =
        await response.json();



        const quote =
        data["Global Quote"];




        if (!quote) {


            return {

                price:"Ej tillgänglig",

                currency:"USD",

                change:"Ej tillgänglig",

                updated:""

            };

        }




        return {


            price:
            quote["05. price"],


            currency:"USD",


            change:
            quote["10. change percent"],


            updated:
            quote["07. latest trading day"]


        };



    }


    catch(error) {


        console.log(error);


        return {};

    }


}









async function hamtaHistoriskaPriser(ticker) {


    try {


        let symbol =
        ticker.toLowerCase();



        const url =
        `https://stooq.com/q/d/l/?s=${symbol}.us&i=d`;



        const response =
        await fetch(url);



        const text =
        await response.text();



        console.log("Stooq svar:", text);



        let rader =
        text.split("\n");



        let priser = [];




        for(let i = 1; i < rader.length; i++) {


            let delar =
            rader[i].split(",");



            if(delar.length >= 5) {


                priser.push({


                    datum:
                    delar[0],


                    pris:
                    Number(delar[4])


                });


            }


        }





        return priser;



    }


    catch(error) {


        console.log(error);


        return [];

    }


}
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

                price: "Ej tillgänglig",

                currency: "USD",

                change: "Ej tillgänglig",

                updated: "Ingen data"

            };


        }




        return {


            price:
            quote["05. price"],


            currency:
            "USD",


            change:
            quote["10. change percent"],


            updated:
            quote["07. latest trading day"]


        };



    }


    catch(error) {


        console.log(error);


        return {

            price:"Fel",

            currency:"",

            change:"",

            updated:""

        };


    }


}









async function hamtaHistoriskaPriser(ticker) {


    try {


        const url =

        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${API_KEY}`;




        const response =
        await fetch(url);



        const data =
        await response.json();





        const serie =
        data["Time Series (Daily)"];





        if (!serie) {

            return [];

        }






        let priser = [];






        Object.entries(serie)

        .reverse()

        .forEach(([datum, dag]) => {



            priser.push({

                datum: datum,


                pris:
                Number(
                dag["4. close"]
                )


            });


        });





        return priser;



    }


    catch(error) {


        console.log(error);

        return [];


    }


}
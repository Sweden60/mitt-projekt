async function hamtaAktieData(ticker) {


    try {


        // Här kommer riktig API-koppling senare

        let testData = {


            AAPL: {

                price: 225,

                currency: "USD",

                updated: "testdata"

            },


            NVDA: {

                price: 180,

                currency: "USD",

                updated: "testdata"

            },


            TSLA: {

                price: 350,

                currency: "USD",

                updated: "testdata"

            }


        };



        return testData[ticker];



    } catch (error) {


        console.log("Fel vid hämtning av aktiedata:", error);

        return null;


    }


}
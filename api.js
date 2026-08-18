async function hamtaAktieData(ticker) {


    console.log("Hämtar data för:", ticker);



    // Testdata tills vi kopplar riktig API

    let data = {


        AAPL: {

            price: 225,

            change: "+1.2%"

        },


        NVDA: {

            price: 180,

            change: "+2.5%"

        },


        TSLA: {

            price: 350,

            change: "-0.8%"

        }


    };



    return data[ticker];

}
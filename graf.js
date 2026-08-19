function skapaTrendData(priser) {


    let start = priser[0];

    let slut = priser[priser.length - 1];



    let hogsta = Math.max(...priser);

    let lagsta = Math.min(...priser);




    let förändring =
        ((slut - start) / start) * 100;





    let trend;



    if (förändring >= 20) {


        trend = "📈 Stark uppgång";


    }
    else if (förändring > 0) {


        trend = "📈 Positiv trend";


    }
    else if (förändring === 0) {


        trend = "➡️ Sidledes";


    }
    else {


        trend = "📉 Nedgång";


    }





    return {


        start: start,


        slut: slut,


        förändring:
        förändring.toFixed(2) + "%",


        hogsta: hogsta,


        lagsta: lagsta,


        trend: trend


    };


}
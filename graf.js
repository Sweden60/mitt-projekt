function skapaTrendData(priser) {


    let start = priser[0];

    let slut = priser[priser.length - 1];



    let förändring =
        ((slut - start) / start) * 100;



    let trend;



    if (förändring > 20) {

        trend = "📈 Stark uppgång";

    }

    else if (förändring > 0) {

        trend = "📈 Positiv trend";

    }

    else {

        trend = "📉 Negativ trend";

    }





    return {


        start:

        start,


        slut:

        slut,


        förändring:

        förändring.toFixed(2) + "%",


        trend:

        trend


    };


}
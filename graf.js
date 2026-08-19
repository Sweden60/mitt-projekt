let aktieGraf = null;





function skapaTrendData(data) {


    let priser =
    data.map(
        punkt => punkt.pris
    );



    let start =
    priser[0];


    let slut =
    priser[priser.length - 1];



    let hogsta =
    Math.max(...priser);



    let lagsta =
    Math.min(...priser);





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


        start:start,

        slut:slut,

        förändring:
        förändring.toFixed(2) + "%",


        hogsta:hogsta,

        lagsta:lagsta,


        trend:trend


    };


}








function skapaGraf(data, namn) {


    let canvas =
    document.getElementById("kursGraf");



    if (!canvas) {

        return;

    }




    if (aktieGraf) {

        aktieGraf.destroy();

    }






    let datum =
    data.map(
        punkt => punkt.datum
    );



    let priser =
    data.map(
        punkt => punkt.pris
    );






    aktieGraf = new Chart(
        canvas,
        {


        type:"line",



        data:{


            labels:datum,



            datasets:[{


                label:
                namn,


                data:priser,


                tension:0.3


            }]


        },




        options:{


            responsive:true,



            plugins:{


                title:{


                    display:true,


                    text:
                    "Historisk kursutveckling"


                }


            },



            scales:{


                y:{


                    title:{


                        display:true,


                        text:"USD"


                    }


                }


            }


        }



        }


    );



}
function skapaAnalys(aktie) {


    let poang = 50;


    let tillvaxt = 50;
    let risk = 50;
    let kvalitet = 50;



    if (aktie.pe < 30) {

        kvalitet += 15;

    } else {

        kvalitet -= 5;

    }



    if (aktie.tillvaxt === "Hög") {

        tillvaxt += 20;

    }



    if (aktie.risk === "Låg") {

        risk += 20;

    }



    let total = Math.round(
        (tillvaxt + kvalitet + risk) / 3
    );



    return {


        poang: total,

        tillvaxt: tillvaxt,

        kvalitet: kvalitet,

        risk: risk,


        text:
        total >= 80
        ? "Starkt bolag med bra grunddata."
        : "Blandad bild med både styrkor och risker."


    };


}
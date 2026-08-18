function skapaAnalys(aktie) {


    let tillvaxt = 50;
    let kvalitet = 50;
    let risk = 50;



    // Tillväxt
    if (aktie.tillvaxt === "Mycket hög") {

        tillvaxt += 35;

    } 
    else if (aktie.tillvaxt === "Hög") {

        tillvaxt += 25;

    }
    else {

        tillvaxt += 10;

    }




    // Kvalitet
    if (aktie.lonsamhet === "Extremt hög") {

        kvalitet += 35;

    }
    else if (aktie.lonsamhet === "Mycket hög") {

        kvalitet += 25;

    }
    else {

        kvalitet += 10;

    }




    // Risk
    if (aktie.risk === "Låg") {

        risk += 25;

    }
    else if (aktie.risk === "Medel") {

        risk += 10;

    }
    else {

        risk -= 10;

    }





    // Begränsa värden
    tillvaxt = Math.min(tillvaxt, 100);

    kvalitet = Math.min(kvalitet, 100);

    risk = Math.max(Math.min(risk, 100), 0);





    let total = Math.round(

        (tillvaxt * 0.4) +
        (kvalitet * 0.35) +
        (risk * 0.25)

    );





    let text;



    if (total >= 85) {


        text =
        "Starkt bolag med hög kvalitet, bra tillväxt och attraktiv riskprofil.";


    }
    else if (total >= 70) {


        text =
        "Bra bolag med tydliga styrkor men vissa risker finns.";


    }
    else {


        text =
        "Blandad bild med både möjligheter och risker.";


    }





    return {


        poang: total,

        tillvaxt: tillvaxt,

        kvalitet: kvalitet,

        risk: risk,

        text: text


    };


}
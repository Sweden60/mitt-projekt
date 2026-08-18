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




    // Lönsamhet
    if (aktie.lonsamhet === "Extremt hög") {

        kvalitet += 35;

    }
    else if (aktie.lonsamhet === "Mycket hög") {

        kvalitet += 25;

    }
    else {

        kvalitet += 15;

    }




    // AI-styrka
    kvalitet += aktie.aiStyrka * 0.15;



    // Konkurrensfördel
    kvalitet += aktie.konkurrens * 0.15;




    // Risk
    if (aktie.risk === "Låg") {

        risk += 30;

    }
    else if (aktie.risk === "Medel") {

        risk += 10;

    }
    else {

        risk -= 15;

    }





    // Värdering
    if (aktie.vardering === "Hög") {

        risk -= 10;

    }





    // Begränsa
    tillvaxt = Math.min(Math.round(tillvaxt), 100);

    kvalitet = Math.min(Math.round(kvalitet), 100);

    risk = Math.max(Math.min(Math.round(risk), 100), 0);





    let total = Math.round(

        (tillvaxt * 0.35) +
        (kvalitet * 0.45) +
        (risk * 0.20)

    );





    let text;



    if (total >= 85) {


        text =
        "Mycket starkt bolag med hög kvalitet, tillväxt och konkurrensfördel.";


    } 
    else if (total >= 70) {


        text =
        "Starkt bolag men vissa risker eller värderingsfrågor finns.";


    } 
    else {


        text =
        "Blandad bild. Bolaget har möjligheter men även tydliga risker.";


    }




    return {


        poang: total,

        tillvaxt: tillvaxt,

        kvalitet: kvalitet,

        risk: risk,

        text: text


    };


}
function jamforAktier(aktie1, aktie2) {


    let analys1 = skapaAnalys(aktie1);

    let analys2 = skapaAnalys(aktie2);



    let vinnare;



    if (analys1.poang > analys2.poang) {


        vinnare = aktie1.namn;


    } 
    else if (analys2.poang > analys1.poang) {


        vinnare = aktie2.namn;


    } 
    else {


        vinnare = "Oavgjort";


    }




    return {


        aktie1: {

            namn: aktie1.namn,

            poang: analys1.poang

        },


        aktie2: {

            namn: aktie2.namn,

            poang: analys2.poang

        },


        vinnare: vinnare


    };


}
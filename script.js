let valtBolag = null;






async function analyseraAktie() {


    let namn =
    document.getElementById("aktieInput")
    .value
    .trim()
    .toLowerCase();




    let resultat =
    document.getElementById("resultat");



    let aktie =
    stocks[namn];




    if (!aktie) {


        resultat.innerHTML = `

        <div class="project-card">

        <h3>
        ❌ Ingen aktie hittades
        </h3>

        </div>

        `;


        return;


    }





    valtBolag = aktie;



    let data =
    await hamtaAktieData(aktie.ticker);



    let analys =
    skapaAnalys(aktie);





    resultat.innerHTML = `


    <div class="project-card">


    <h3>
    📈 ${aktie.namn}
    </h3>



    <h2>
    ⭐ AI-poäng:
    ${analys.poang}/100
    </h2>



    <p>
    💵 Kurs:
    ${data.price} ${data.currency}
    </p>



    <p>
    📊 Förändring:
    ${data.change}
    </p>



    <p>
    🔄 Uppdaterad:
    ${data.updated}
    </p>



    <hr>



    <p>
    📈 Tillväxt:
    ${analys.tillvaxt}/100
    </p>



    <p>
    💎 Kvalitet:
    ${analys.kvalitet}/100
    </p>



    <p>
    ⚠️ Risk:
    ${analys.risk}/100
    </p>



    <p>
    🤖 ${analys.text}
    </p>



    </div>


    `;



}









async function visaTrend() {


    let resultat =
    document.getElementById("trendResultat");




    if (!valtBolag) {


        resultat.innerHTML = `

        <div class="project-card">

        <h3>
        ❌ Analysera ett bolag först
        </h3>

        </div>

        `;


        return;


    }






    let priser =

    await hamtaHistoriskaPriser(
        valtBolag.ticker
    );







    if (priser.length === 0) {


        resultat.innerHTML = `

        <div class="project-card">

        <h3>
        ❌ Ingen historisk data hittades
        </h3>


        <p>
        ${valtBolag.ticker}
        </p>

        </div>

        `;


        return;


    }







    let trend =
    skapaTrendData(priser);







    resultat.innerHTML = `


    <div class="project-card">


    <h2>
    📈 Trend för ${valtBolag.namn}
    </h2>



    <p>
    Start:
    ${trend.start}
    </p>



    <p>
    Slut:
    ${trend.slut}
    </p>



    <p>
    Förändring:
    ${trend.förändring}
    </p>



    <p>
    🔼 Högsta:
    ${trend.hogsta}
    </p>



    <p>
    🔽 Lägsta:
    ${trend.lagsta}
    </p>



    <h3>
    ${trend.trend}
    </h3>



    </div>


    `;



}









function jamfor() {


    let namn1 =
    document.getElementById("aktie1")
    .value
    .trim()
    .toLowerCase();




    let namn2 =
    document.getElementById("aktie2")
    .value
    .trim()
    .toLowerCase();





    let aktie1 =
    stocks[namn1];


    let aktie2 =
    stocks[namn2];





    let resultat =
    document.getElementById("jamforelseResultat");





    if (!aktie1 || !aktie2) {


        resultat.innerHTML =
        "❌ Kunde inte hitta båda aktierna";


        return;


    }






    let analys1 =
    skapaAnalys(aktie1);



    let analys2 =
    skapaAnalys(aktie2);






    let vinnare;



    if (analys1.poang > analys2.poang) {


        vinnare = aktie1.namn;


    }
    else {


        vinnare = aktie2.namn;


    }





    resultat.innerHTML = `


    <div class="project-card">


    <h2>
    📊 ${aktie1.namn} vs ${aktie2.namn}
    </h2>



    <p>
    ${aktie1.namn}: ${analys1.poang}/100
    </p>



    <p>
    ${aktie2.namn}: ${analys2.poang}/100
    </p>



    <h2>
    🏆 Vinnare: ${vinnare}
    </h2>



    </div>


    `;


}
async function analyseraAktie() {


    let namn = document
        .getElementById("aktieInput")
        .value
        .trim()
        .toLowerCase();



    let resultat = document.getElementById("resultat");



    let aktie = stocks[namn];



    if (!aktie) {

        resultat.innerHTML = `
        <div class="project-card">
        <h3>❌ Ingen aktie hittades</h3>
        </div>
        `;

        return;

    }



    let data = await hamtaAktieData(aktie.ticker);



    let analys = skapaAnalys(aktie);




    resultat.innerHTML = `

    <div class="project-card">


    <h3>
    📈 ${aktie.namn}
    </h3>


    <h2>
    ⭐ AI-poäng: ${analys.poang}/100
    </h2>


    <p>
    💵 Aktiekurs:
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









function jamfor() {


    let namn1 = document
        .getElementById("aktie1")
        .value
        .trim()
        .toLowerCase();



    let namn2 = document
        .getElementById("aktie2")
        .value
        .trim()
        .toLowerCase();




    let aktie1 = stocks[namn1];

    let aktie2 = stocks[namn2];



    let resultat =
    document.getElementById("jamforelseResultat");




    if (!aktie1 || !aktie2) {


        resultat.innerHTML = `

        <div class="project-card">

        <h3>
        ❌ Hittade inte båda aktierna
        </h3>

        </div>

        `;

        return;

    }




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





    resultat.innerHTML = `


    <div class="project-card">


    <h2>
    📊 ${aktie1.namn} vs ${aktie2.namn}
    </h2>



    <h3>
    ${aktie1.namn}: ${analys1.poang}/100
    </h3>


    <div style="width:100%;background:#ddd">

        <div style="
        width:${analys1.poang}%;
        background:#2563eb;
        height:20px;">
        </div>

    </div>




    <h3>
    ${aktie2.namn}: ${analys2.poang}/100
    </h3>


    <div style="width:100%;background:#ddd">

        <div style="
        width:${analys2.poang}%;
        background:#16a34a;
        height:20px;">
        </div>

    </div>





    <h1>
    🏆 Vinnare: ${vinnare}
    </h1>




    <p>
    🤖 AI-analys:
    ${vinnare} har högst totalpoäng baserat på
    tillväxt, kvalitet och risk.
    </p>



    </div>



    `;



}
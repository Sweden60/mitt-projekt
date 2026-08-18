async function analyseraAktie() {


    let aktie = document
        .getElementById("aktieInput")
        .value
        .trim()
        .toLowerCase();



    let resultat = document.getElementById("resultat");



    let valdAktie = stocks[aktie];



    if (!valdAktie) {


        resultat.innerHTML = `

        <div class="project-card">

        <h3>❌ Ingen aktie hittades</h3>

        </div>

        `;

        return;

    }





    let marknadsData = await hamtaAktieData(valdAktie.ticker);



    let analysResultat = skapaAnalys(valdAktie);





    resultat.innerHTML = `


    <div class="project-card">


    <h3>
    📈 ${valdAktie.namn}
    </h3>



    <h2>
    ⭐ AI-poäng:
    ${analysResultat.poang}/100
    </h2>



    <p>
    💵 Kurs:
    ${marknadsData.price} ${marknadsData.currency}
    </p>



    <p>
    📊 Förändring:
    ${marknadsData.change}
    </p>



    <p>
    🔄 Uppdaterad:
    ${marknadsData.updated}
    </p>



    <hr>



    <p>
    📈 Tillväxt:
    ${analysResultat.tillvaxt}/100
    </p>



    <p>
    💎 Kvalitet:
    ${analysResultat.kvalitet}/100
    </p>



    <p>
    ⚠️ Risk:
    ${analysResultat.risk}/100
    </p>



    <p>
    🤖 ${analysResultat.text}
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



    let resultat = document.getElementById("jamforelseResultat");



    if (!aktie1 || !aktie2) {


        resultat.innerHTML = `

        <div class="project-card">

        <h3>
        ❌ Kunde inte hitta båda aktierna
        </h3>

        </div>

        `;


        return;

    }





    let jamforelse = jamforAktier(
        aktie1,
        aktie2
    );






    resultat.innerHTML = `


    <div class="project-card">


    <h3>
    📊 Jämförelse
    </h3>



    <p>
    ${jamforelse.aktie1.namn}:
    ${jamforelse.aktie1.poang}/100
    </p>



    <p>
    ${jamforelse.aktie2.namn}:
    ${jamforelse.aktie2.poang}/100
    </p>



    <h2>
    🏆 Vinnare:
    ${jamforelse.vinnare}
    </h2>



    </div>



    `;



}
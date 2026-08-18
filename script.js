async function analyseraAktie() {


    let aktie = document
        .getElementById("aktieInput")
        .value
        .trim()
        .toLowerCase();



    let resultat = document.getElementById("resultat");



    if (!aktie) {

        alert("Skriv ett bolagsnamn");

        return;

    }



    let valdAktie = stocks[aktie];



    if (!valdAktie) {


        resultat.innerHTML = `

        <div class="project-card">

            <h3>❌ Ingen aktie hittades</h3>

            <p>
            Testa Nvidia, Apple eller Tesla.
            </p>

        </div>

        `;

        return;

    }



    let marknadsData = await hamtaAktieData(valdAktie.ticker);



    let analysResultat = skapaAnalys(valdAktie);




    if (!marknadsData) {


        resultat.innerHTML = `

        <div class="project-card">

        <h3>⚠️ Kunde inte hämta kursdata</h3>

        </div>

        `;

        return;

    }




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
        🔎 Ticker:
        ${valdAktie.ticker}
        </p>



        <p>
        💵 Aktiekurs:
        ${marknadsData.price}
        ${marknadsData.currency}
        </p>



        <p>
        📊 Förändring idag:
        ${marknadsData.change}
        </p>



        <p>
        🔄 Senast uppdaterad:
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
        🤖 AI-bedömning:
        ${analysResultat.text}
        </p>



    </div>


    `;



}
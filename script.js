async function analyseraAktie() {


    let aktie = document
        .getElementById("aktieInput")
        .value
        .trim()
        .toLowerCase();



    let resultat = document.getElementById("resultat");



    if (aktie === "") {

        alert("Skriv in en aktie först!");

        return;

    }




    let valdAktie = stocks[aktie];



    if (!valdAktie) {


        resultat.innerHTML = `

        <div class="project-card">

            <h3>
                ❌ Ingen aktie hittades
            </h3>

            <p>
                Testa Nvidia, Apple eller Tesla.
            </p>

        </div>

        `;


        return;

    }




    let marknadsData = await hamtaAktieData(valdAktie.ticker);


    let foretagsData = await hamtaForetagsData(valdAktie.ticker);



    let analysResultat = skapaAnalys(valdAktie);





    if (!marknadsData || !foretagsData) {


        resultat.innerHTML = `

        <div class="project-card">

            <h3>
                ⚠️ Kunde inte hämta all data
            </h3>

        </div>

        `;


        return;

    }







    resultat.innerHTML = `


    <div class="project-card">


        <h3>
            📈 ${foretagsData.namn}
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
            ${marknadsData.price} ${marknadsData.currency}
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
            🏢 Sektor:
            ${foretagsData.sektor}
        </p>




        <p>
            🏭 Bransch:
            ${foretagsData.bransch}
        </p>




        <p>
            💰 Börsvärde:
            ${foretagsData.borvarde}
        </p>




        <p>
            📊 P/E-tal:
            ${foretagsData.pe}
        </p>




        <p>
            💎 Vinstmarginal:
            ${foretagsData.vinstmarginal}
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
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




    if (!marknadsData) {


        resultat.innerHTML = `

        <div class="project-card">

            <h3>
                ⚠️ Ingen marknadsdata
            </h3>

            <p>
                Kunde inte hämta aktuell aktiedata.
            </p>

        </div>

        `;


        return;


    }







    resultat.innerHTML = `


    <div class="project-card">


        <h3>
            📈 ${valdAktie.namn}
        </h3>



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




        <p>
            🏢 Börsvärde:
            ${valdAktie.borvarde}
        </p>




        <p>
            📊 P/E-tal:
            ${valdAktie.pe}
        </p>




        <p>
            🤖 AI-analys:
            Bolaget analyseras baserat på finansiell data, risk och tillväxt.
        </p>



    </div>


    `;



}
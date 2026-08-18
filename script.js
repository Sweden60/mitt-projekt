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
                Testa till exempel Nvidia, Apple eller Tesla.
            </p>

        </div>

        `;

        return;

    }



    let marknadsData = await hamtaAktieData(valdAktie.ticker);




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
            🔄 Uppdaterad:
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
            Data hämtad via analysmotorn.
        </p>



    </div>


    `;


}
function analyseraAktie() {


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
                ❌ Ingen data hittades
            </h3>

            <p>
                Vi har ännu ingen analys för ${aktie}.
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
            ${valdAktie.kurs}
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
            Data hämtad från aktiedatabasen.
        </p>


    </div>


    `;


}
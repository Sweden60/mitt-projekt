function analyseraAktie() {

    let aktie = document.getElementById("aktieInput").value;


    if (aktie === "") {

        alert("Skriv in en aktie först!");

        return;

    }



    let resultat = document.getElementById("resultat");



    resultat.innerHTML = `

        <div class="project-card">

            <h3>
                📈 ${aktie}
            </h3>


            <p>
                ⭐ Aktiepoäng: 85/100
            </p>


            <p>
                📊 Tillväxt: Stark
            </p>


            <p>
                💰 Lönsamhet: Hög
            </p>


            <p>
                ⚠️ Risk: Medel
            </p>


            <p>
                🤖 AI-bedömning:
                Ett kvalitetsbolag med stark historik.
            </p>


        </div>

    `;

}
function analyseraAktie() {


    let aktie = document.getElementById("aktieInput").value.toLowerCase();


    let resultat = document.getElementById("resultat");



    if (aktie === "") {

        alert("Skriv in en aktie först!");

        return;

    }



    let analys = {

        apple: {

            namn: "Apple",

            poang: 86,

            tillvaxt: "Stark",

            kvalitet: "Mycket hög",

            risk: "Låg"

        },


        nvidia: {

            namn: "Nvidia",

            poang: 91,

            tillvaxt: "Extrem",

            kvalitet: "Mycket hög",

            risk: "Medel"

        },


        tesla: {

            namn: "Tesla",

            poang: 74,

            tillvaxt: "Hög",

            kvalitet: "Medel",

            risk: "Hög"

        }

    };



    let valdAktie = analys[aktie];



    if (!valdAktie) {


        valdAktie = {

            namn: aktie.toUpperCase(),

            poang: 70,

            tillvaxt: "Okänd",

            kvalitet: "Ej analyserad",

            risk: "Okänd"

        };


    }





    resultat.innerHTML = `


    <div class="project-card">


        <h3>
            📈 ${valdAktie.namn}
        </h3>


        <p>
            ⭐ Aktiepoäng: ${valdAktie.poang}/100
        </p>


        <p>
            📊 Tillväxt: ${valdAktie.tillvaxt}
        </p>


        <p>
            💎 Kvalitet: ${valdAktie.kvalitet}
        </p>


        <p>
            ⚠️ Risk: ${valdAktie.risk}
        </p>


        <p>
            🤖 AI-bedömning:
            Analysen bygger på bolagets kvalitet, tillväxt och riskprofil.
        </p>


    </div>


    `;


}
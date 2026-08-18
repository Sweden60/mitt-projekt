function analyseraAktie() {


    let aktie = document.getElementById("aktieInput").value.trim().toLowerCase();

    let resultat = document.getElementById("resultat");



    if (aktie === "") {

        alert("Skriv in en aktie först!");

        return;

    }




    let analys = {


        apple: {

            namn: "Apple",

            total: 86,

            kvalitet: 92,

            tillvaxt: 78,

            risk: 85,

            sammanfattning:
            "Starkt kvalitetsbolag med hög lönsamhet och stabil historik."

        },



        nvidia: {

            namn: "Nvidia",

            total: 91,

            kvalitet: 95,

            tillvaxt: 98,

            risk: 70,

            sammanfattning:
            "Extrem tillväxt inom AI och stark marknadsposition, men värderingen är hög."

        },



        tesla: {

            namn: "Tesla",

            total: 74,

            kvalitet: 65,

            tillvaxt: 90,

            risk: 45,

            sammanfattning:
            "Hög tillväxtpotential men större risk på grund av konkurrens och värdering."

        }


    };





    let valdAktie = analys[aktie];





    if (!valdAktie) {


        valdAktie = {

            namn: aktie.toUpperCase(),

            total: 50,

            kvalitet: 50,

            tillvaxt: 50,

            risk: 50,

            sammanfattning:
            "Ingen detaljerad analys finns ännu för detta bolag."

        };


    }







    resultat.innerHTML = `


    <div class="project-card">


        <h3>
            📈 ${valdAktie.namn}
        </h3>


        <h2>
            ⭐ ${valdAktie.total}/100
        </h2>


        <p>
            💎 Kvalitet:
            ${valdAktie.kvalitet}%
        </p>


        <p>
            📊 Tillväxt:
            ${valdAktie.tillvaxt}%
        </p>


        <p>
            ⚠️ Risk:
            ${valdAktie.risk}%
        </p>


        <p>
            🤖 AI-analys:
            ${valdAktie.sammanfattning}
        </p>


    </div>


    `;


}
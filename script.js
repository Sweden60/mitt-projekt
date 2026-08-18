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

            kurs: "$225",

            marknadsvarde: "3.4 biljoner USD",

            pe: "34",

            total: 86,

            tillvaxt: 78,

            lonssamhet: "Mycket hög",

            risk: "Låg",

            sammanfattning:
            "Starkt kvalitetsbolag med stabil vinst och starkt varumärke."

        },



        nvidia: {

            namn: "Nvidia",

            kurs: "$180",

            marknadsvarde: "4.4 biljoner USD",

            pe: "55",

            total: 91,

            tillvaxt: 98,

            lonssamhet: "Extremt hög",

            risk: "Medel",

            sammanfattning:
            "Ledande inom AI och datacenter. Hög tillväxt men hög värdering."

        },



        tesla: {

            namn: "Tesla",

            kurs: "$350",

            marknadsvarde: "1 biljon USD",

            pe: "180",

            total: 74,

            tillvaxt: 90,

            lonssamhet: "Medel",

            risk: "Hög",

            sammanfattning:
            "Stor tillväxtpotential men hög värdering och konkurrens."

        }


    };




    let valdAktie = analys[aktie];




    if (!valdAktie) {


        valdAktie = {

            namn: aktie.toUpperCase(),

            kurs: "Ej tillgänglig",

            marknadsvarde: "Ej tillgängligt",

            pe: "Ej tillgängligt",

            total: 50,

            tillvaxt: 50,

            lonssamhet: "Okänd",

            risk: "Okänd",

            sammanfattning:
            "Ingen analys finns ännu för detta bolag."

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
            💵 Aktiekurs: ${valdAktie.kurs}
        </p>


        <p>
            🏢 Börsvärde: ${valdAktie.marknadsvarde}
        </p>


        <p>
            📊 P/E-tal: ${valdAktie.pe}
        </p>


        <p>
            📈 Tillväxt: ${valdAktie.tillvaxt}%
        </p>


        <p>
            💰 Lönsamhet: ${valdAktie.lonssamhet}
        </p>


        <p>
            ⚠️ Risk: ${valdAktie.risk}
        </p>


        <p>
            🤖 AI-analys:
            ${valdAktie.sammanfattning}
        </p>


    </div>


    `;


}
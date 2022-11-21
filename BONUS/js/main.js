// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const team = [

    {
        "name" : "Wayne Barnett",
        "ruolo" : "Founder e CEO",
        "foto" : "img/Wayne-Barnett-founder-ceo.jpg"
    } ,

    {
        "name" : "Angela Carol",
        "ruolo" : "Chief editor",
        "foto" : "img/angela-caroll-chief-editor.jpg"
    },

    {
        "name" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" : "img/Walter-Gordon-office-manager.jpg"
    },

    {
        "name" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" : "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "name" : "Scott Extrada",
        "ruolo" : "Developer",
        "foto" : "img/scott-estrada-developer.jpg"
    },

    {
        "name" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "img/barbara-ramos-graphic-designer.jpg"
    },
]

console.log(team);


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// for(let i = 0; i < team.length; i++){
//     let teamIesimo = team[i]

//     console.log(teamIesimo)
// }


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
for(let i = 0; i <= team.length; i++){
    let teamIesimo = team[i]

    console.log(teamIesimo)

    // dichiaro le variabili
    // let container = document.getElementById("team")
    let container = document.querySelector(".row")

    // creo l'elemento div
    let element = document.createElement("div")


    // stampo nel dom la stringa e le foto correlate
    element.innerHTML = `<img src="${teamIesimo.foto}" alt=""> <br> <strong>${teamIesimo.name}</strong> <br> ${teamIesimo.ruolo} `
    element.classList.add("col-4")
    element.classList.add("text-center")
    element.classList.add("pt-5")



    // inserisco nel dom il div creato con la stringa
    container.append(element)
}

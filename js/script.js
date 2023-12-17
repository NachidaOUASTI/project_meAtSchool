// script.js
console.log("c'est ok")
document.addEventListener('DOMContentLoaded', function () {
    const section = document.getElementById('cardSection');

    const cards = [
        {
            nom: "Alice",
            question: "Qui est le plus rigolo?",
        },
        {
            nom: "Bob",
            question: "Qui est le plus sérieux?",
        },
        {
            nom: "Charlie",
            question: "Qui est la plus gourmande?"
        },
        {
            nom: "Nachida",
            question: "Qui est ma mon meilleur ami?",
        },
        {
            nom: "Chachou",
            question: "Qui est le plus généreux?",
        },
        {
            nom: "yupi",
            question: "QUi est le plus discret?",
        },
        
        


        // Ajoutez autant d'objets que nécessaire
    ];

    for (const card of cards) {

        const newCard = document.createElement('div');
        newCard.classList.add('card');

        newCard.innerHTML = `
        <div class="cardContainer">
    
        <div class=" card">

            <div  class="cardTitle">

                <div>
                    <h2>${card.question} </h2>
                </div>
                <div class="plusIcon">➕</div>
            </div>

            <div>
                <input class="input" type="text" name="name" placeholder="Nom de la carte" hidden>
            </div>

            <div class="labelContainer">

                <div class="label">
                    <div class="name">${card.nom}</div>
                    <div class="icons">
                        <span>✏️ </span>
                        <span>🗑️ </span>
                    </div>
                </div>

            </div>

        </div>

    </div>
        `;

        section.appendChild(newCard);
    }
});

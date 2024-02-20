let TOTAL1 = 0
let TOTAL2 = 0
let TOTAL3 = 0

//fonction pour calculer les sous-prix du premier sac//

const moins = document.querySelector(".moins")
moins.addEventListener("click", () => {
    let quantité = document.querySelector(".zéro")
    if (parseInt(quantité.innerText) >= 1) {
        let quantite = parseInt(quantité.innerText)
        let incrémenter = quantite - 1
        quantité.innerHTML = incrémenter

        let totalPrice1 = document.querySelector(".totalPrice1")
        let price = document.querySelector(".price")
        totalPrice1.innerHTML = 10000 * incrémenter
        TOTAL1 = 10000 * incrémenter
        updateTotal();
    }
})
const plus =document.querySelector(".plus")
plus.addEventListener("click", () => {
    let quantité = document.querySelector(".zéro")
    let quantite = parseInt(quantité.innerText)
    let incrémenter = quantite + 1
    quantité.innerHTML = incrémenter

    let totalPrice1 = document.querySelector(".totalPrice1")
    let price = document.querySelector(".price")
    totalPrice1.innerHTML = 10000 * incrémenter
    TOTAL1 = 10000 * incrémenter
    updateTotal();
})

//fonction pour calculer les sous-prix du deuxiéme sac//

const MOINS = document.querySelector(".MOINS")
MOINS.addEventListener("click", () => {
    let quantité = document.querySelector(".ZERO")
    if (parseInt(quantité.innerText)) {
        let quantite = parseInt(quantité.innerText)
        let incrémenter = quantite - 1
        quantité.innerHTML = incrémenter

        let totalPrice2 = document.querySelector(".totalPrice2")
        let price = document.querySelector(".price")
        totalPrice2.innerHTML = 12000 * incrémenter
        TOTAL2 = 12000 * incrémenter
        updateTotal();
    }
})
const PLUS = document.querySelector(".PLUS")
PLUS.addEventListener("click", () => {
    let quantité =document.querySelector(".ZERO")
    let quantite = parseInt(quantité.innerText)
    let incrémenter = quantite + 1
    quantité.innerHTML = incrémenter

    let totalPrice2 = document.querySelector(".totalPrice2")
    let price = document.querySelector(".price")
    totalPrice2.innerHTML = 12000 * incrémenter
    TOTAL2 = 12000 * incrémenter
    updateTotal();
})

//fonction pour calcuelr les sous-prix du troisiéme sac//

const sub = document.querySelector(".sub")
sub.addEventListener("click", () => {
    let quantité = document.querySelector(".zero")
    if (parseInt(quantité.innerText)) {
        let quantite = parseInt(quantité.innerText)
        let incrémenter = quantite - 1
        quantité.innerHTML = incrémenter

        let totalPrice3 = document.querySelector(".totalPrice3")
        let price = document.querySelector(".price")
        totalPrice3.innerHTML = 15000 * incrémenter
        TOTAL3 = 15000 * incrémenter
        updateTotal();
    }
})
const add= document.querySelector(".add")
add.addEventListener("click", () => {
    let quantité = document.querySelector(".zero")
    let quantite = parseInt(quantité.innerText)
    let incrémenter = quantite + 1
    quantité.innerHTML = incrémenter

    let totalPrice3 = document.querySelector(".totalPrice3")
    let price = document.querySelector(".price")
    totalPrice3.innerHTML = 15000 * incrémenter
    TOTAL3 = 15000 * incrémenter
    updateTotal();
})


//fonction pour calculer le prix total des sacs//
function updateTotal() {
    
    const total = document.querySelector(".total");
    total.innerHTML = TOTAL1 + TOTAL2 + TOTAL3;
} 

//fonction pour like et dislike un sac//

var btn = document.getElementById('likeBtn1');
function toggle1() {
    if (likeBtn1.classList.contains("far")) {
        likeBtn1.classList.remove("far");
        likeBtn1.classList.add("fas");
    } else {
        likeBtn1.classList.remove("fas");
        likeBtn1.classList.add("far");
    }
}
var btn = document.getElementById('likeBtn2');
function toggle2() {
    if (likeBtn2.classList.contains("far")) {
        likeBtn2.classList.remove("far");
        likeBtn2.classList.add("fas");
    } else {
        likeBtn2.classList.remove("fas");
        likeBtn2.classList.add("far");
    }
}

var btn = document.getElementById('likeBtn3');
function toggle3() {
    if (likeBtn3.classList.contains("far")) {
        likeBtn3.classList.remove("far");
        likeBtn3.classList.add("fas");
    } else {
        likeBtn3.classList.remove("fas");
        likeBtn3.classList.add("far");
    }
}

//fonction pour supprimer un sac//
function deletearticle1() {
    var deletearticle = document.getElementById("flex1");
    deletearticle.remove()
    TOTAL1=0;
    updateTotal();
}

function deletearticle2() {
    var deletearticle = document.getElementById("flex2");
    deletearticle.remove()
    TOTAL2=0;
    updateTotal();
}

function deletearticle3() {
    var deletearticle = document.getElementById("flex3");
    deletearticle.remove()
    TOTAL3=0;
    updateTotal();
}

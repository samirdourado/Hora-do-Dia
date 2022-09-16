const horas = new Date().toLocaleTimeString()
console.log(horas)
const holder = document.getElementById("holder")
const mostraHora = document.createElement("p")
const imgHolder = document.createElement("figure")
const imgRef = document.createElement("img")


function renderizarDados() {
    mostraHora.innerText = `São exatamente ${horas}`

    if (parseInt(horas) >= 0) {
        imgRef.src = "/img/madrugada.png"
    }

    else if (parseInt(horas) >= 6) {
        imgRef.src = "./img/dia.jpg"
    }

    else if (parseInt(horas) >= 12) {
        imgRef.src = "./img/tarde.jpg"
    }

    else {
        imgRef.src = "./img/noite.jpg"
    }

    imgHolder.appendChild(imgRef)
    holder.append(mostraHora, imgHolder)
}
renderizarDados()




























// const dateHours = new Date().toLocaleString()
// console.log(dateHours)

// const date = new Date().toLocaleDateString()
// console.log(date)

//Captura e criação de Elementos necessarios
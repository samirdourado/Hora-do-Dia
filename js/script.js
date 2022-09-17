// const horas = new Date().toLocaleTimeString()
const body = document.getElementById("body")
const holder = document.getElementById("holder")
const mostraHora = document.createElement("p")
const imgHolder = document.createElement("figure")
const imgRef = document.createElement("img")

function renderizarDados() {
    const horas = new Date().toLocaleTimeString()
    mostraHora.innerText = `São exatamente ${horas}`
    // let today = new Date()
    // let h = today.getHours()
    // let m = today.getMinutes()
    // let s = today.getSeconds()
    // mostraHora.innerText = `São exatamente ${h+":"+m+":"+s}`
    setTimeout(renderizarDados, 1000)

    if (parseInt(horas) >= 0) {
        imgRef.src = "/img/madrugada.png"
        body.classList.add("madrugada")
    }

    if (parseInt(horas) >= 6) {
        imgRef.src = "./img/dia.jpg"
        body.classList.add("manha")
    }

    if (parseInt(horas) >= 12) {
        imgRef.src = "./img/tarde.jpg"
        body.classList.add("tarde")
    }

    if (parseInt(horas) >= 18) {
        imgRef.src = "./img/noite.jpg"
        body.classList.add("noite")
    }

    imgHolder.appendChild(imgRef)
    holder.append(mostraHora, imgHolder)
}
renderizarDados()
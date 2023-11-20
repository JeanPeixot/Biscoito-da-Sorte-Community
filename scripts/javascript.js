const CookieMessages = [
    "Hoje você está sem sorte mesmo",
    "Que o amanhã seja melhor que o hoje",
    "Você deixou de ser a minha prioridade",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."

]

function OpenCookie() {

    let containermain = document.getElementById("containerid")
    containermain.style.height = "564px"

    let cookieclose = document.getElementById("cookieopen").classList.remove("cookiehidden")

    let cookieopen = document.getElementById("cookieclose").classList.add("cookiehidden")

    let maintitle = document.getElementById("maintitle")
    maintitle.innerText = "Aqui está a sua sorte de hoje:"
    
    let subtitle = document.getElementById("subtitle").classList.add("cookiehidden")

    let message = document.getElementById("message")
    let randommessage = CookieMessages[Math.floor(Math.random() * (CookieMessages.length -1))]
    message.innerText = randommessage
    message.classList.add("fortunecookiemessage")

    let newcookie = document.getElementById("newcookie")
    newcookie.style.display = "flex"

    
}

function CloseCookie() {

    let containermain = document.getElementById("containerid")
    containermain.style.height = "424px"

    let maintitle = document.getElementById("maintitle")
    maintitle.innerText = "Qual é a sua sorte de hoje?"

    let message = document.getElementById("message").classList.remove("fortunecookiemessage")

    let newcookie = document.getElementById("newcookie")
    newcookie.style.display = "none"

    let cookieclose = document.getElementById("cookieopen").classList.add("cookiehidden")
    let cookieopen = document.getElementById("cookieclose").classList.remove("cookiehidden")

    let subtitle = document.getElementById("subtitle").classList.remove("cookiehidden")





}
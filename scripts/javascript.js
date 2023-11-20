const CookieMessages = [
    "Não importa que você vá devagar, contanto que você não pare.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu",
    "Não importa que você vá devagar, contanto que você não pare.",
    "Não importa que você vá devagar, contanto que você não pare.",
    "Toda vez que você se sentir inseguro, relembre as situações em que você se subestimou.",
    "Não existem limites para quem acredita que impossível é apenas uma palavra",
    "A gente não aprende a andar seguindo regras. Aprendemos a andar caindo e levantando sozinhos.",
    "É melhor ser um otimista que fica desapontado do que um pessimista que não tem esperança.",
    "O arrependimento pode ser mais assustador do que o próprio ato de uma grande mudança. Arrisque!",
    "Sabe aonde ela está?",
    "Viva sem desculpas. Ame sem arrependimentos.",
    "Dias difíceis são necessários para aproveitarmos com mais entusiasmo os dias de alegria.",





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
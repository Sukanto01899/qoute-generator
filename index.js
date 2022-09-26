function getQuote(){
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(quote => showQuote(quote))

    setColor()
}
let quoteText = document.getElementById('quote-text');
function showQuote(quote){
    quoteText.textContent = quote.quote
}
function tweet(){
    let tweet = `https://twitter.com/intent/tweet?text=${quoteText.innerText}`
    window.open(tweet)
}


function setColor(){
    const red = Math.floor(Math.random()* 255 +1)
const blue = Math.floor(Math.random()* 255 +1)
const green = Math.floor(Math.random()* 255 +1)

let color = `rgb(${red}, ${blue}, ${green})`
quoteText.style.color = color
}
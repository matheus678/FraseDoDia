const citação = (quote) => {
    const div = document.querySelector("div");
    div.insertAdjacentHTML("beforebegin", `<p>"${quote.quote.quoteText}"</p>`);
    div.insertAdjacentHTML("afterbegin", `<p id="autor"> ${quote.quote.quoteAuthor}</p>`);
}

const iniciar = async () => {
    try {
        const response = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random");
        if (response.ok) {
            const result = await response.json(); 
            citação(result);
        } else {
            throw new error(`Erro ao acessar a URL: ${response.statusText}`);
        }
    } catch (error) { 
        console.log(`Erro: ${error.message}`);
    }
}

document.addEventListener("DOMContentLoaded", iniciar);

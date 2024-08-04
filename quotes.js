document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "Get busy living or get busy dying. - Stephen King",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
        "Believe you can and you're halfway there. - Theodore Roosevelt"
	"I'm gon be forever stepping forwards"
    ];

    const quoteElement = document.createElement('div');
    quoteElement.classList.add('quote');
    document.body.appendChild(quoteElement);

    function displayQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    displayQuote();
    setInterval(displayQuote, 10000); // Change quote every 10 seconds
});

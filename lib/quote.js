var kQuote1 = "I am Warhol. I am the No. 1 most impactful artist of our generation. I am Shakespeare in the flesh. - Kanye West";
var kQuote2 = "Man, I\'m the No. 1 living and breathing rock star. I am Axl Rose; I am Jim Morrison; I am Jimi Hendrix. - Kanye West";
var kQuote3 = "I would never want a book's autograph. I am a proud non-reader of books. - Kanye West";
var kanyeQuotes = [ kQuote1, kQuote2, kQuote3 ];

module.exports.kanyeQuotes = kanyeQuotes;
module.exports.randomNum = Math.floor(Math.random() * kanyeQuotes.length);

var jokes = [
{ setup: "The past, present and future walk into a bar",
punchline: "It was tense"},
{ setup: "What do you call two crows on a branch",
punchline: "Attempted murder."},
{ setup: "Did you hear about the motherboard who ran away to join the circuits?",
punchline: ""}
]
module.exports.jokes = jokes;
module.exports.randomNum = Math.floor(Math.random() * jokes.length);
//Finally got module exports working right!

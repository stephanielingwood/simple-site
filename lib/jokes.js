module.exports = function() {

 var jokes = [
 { setup: "Why was the ocean embarrassed?",
  punchline: "‘Cause all the fish could see its bottom!" },
 { setup: "How many tickles does it take to tickle an octopus?",
 punchline: "TEN-TICKLES!" },
 { setup: "How many hipsters does it take to screw in a lightbulb?",
 punchline: "It’s a really obscure number, you’ve probably never heard of it." },
 { setup: "Why did the tomato blush?",
 punchline: "Because it saw the salad dressing!" },
 { setup: "What do you call a boomerang that doesn’t come back?",
 punchline: "A stick!" },
 { setup: "Did you hear about the guy who lost the entire left side of his body in an accident?",
 punchline: "Don't worry, he's all right now." } ];

 var randomIndex = Math.floor(Math.random() * jokes.length);
 return jokes[randomIndex];
};

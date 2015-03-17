module.exports = function() {

 var translator = [
 { English: "Monday",
 Spanish: "Lunes" },
 { English: "Tuesday",
 Spanish: "Martes" },
 { English: "Wednesday",
 Spanish: "Miércoles" },
 { English: "Thursday",
 Spanish: "Jueves" },
 { English: "Friday",
 Spanish: "Viernes" },
 { English: "Saturday",
 Spanish: "Sábado" },
 { English: "Sunday",
 Spanish: "Domingo" }
 ];

 var randomIndex = Math.floor(Math.random() * translator.length);
 return translator[randomIndex];
};

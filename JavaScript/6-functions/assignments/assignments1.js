const language = {
    fi: "Moikka",
    en: "Hello",
    fr: "Bonjour"
};

function hello(congratulations) {
    return language[congratulations];
}
console.log(hello("fi"));
console.log(hello("en"));
console.log(hello("fr"));

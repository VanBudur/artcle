function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const names = [
        "budur",
        "Bader",
        "Salim",
        "Moza",
        "Asia"
    ];

    if (names.includes(inputText)) {
        return "Welcome, Captain!";
    } else {
        return "Not a captain";
    }
}

export { checkForName };

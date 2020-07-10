function exe() {
    var arr = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var names in arr) {
        if (arr[names].toLowerCase().charAt(0) == 'j')
            document.write("Good Bye " + arr[names] + "| |");
        else
            document.write("Hello " + arr[names] + "| |");
    }
}

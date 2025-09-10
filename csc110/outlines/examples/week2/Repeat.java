void main() {
    // var input creates a new variable named "input"
    // IO.readln(...) prints a message and returns whatever the user types
    // the = stores the result of readln in the input variable
    var input = IO.readln("Type something: ");
    IO.print("You typed: ");
    // printing the variable retrieves whatever was stored in it and prints that
    // this will repeat whatever the user typed earlier
    IO.println(input);
}

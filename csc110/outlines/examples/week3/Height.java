// Height.java
void main() {
    // Input
    int totalInches = Integer.parseInt(IO.readln("How tall are you in inches?"));

    // Calculations
    int feet = totalInches / 12;
    int inches = totalInches % 12;

    // Output
    IO.println("Your height is " + feet + "'" + inches + "\".");
}

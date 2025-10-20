// For.java
void main() {
    // original counting loop pattern with while
    int sumWhile = 0;
    int count = 1;
    while (count <= 1000) {
        sumWhile += count;

        count += 1;
    }
    IO.println("WHILE");
    IO.println("The numbers 1 to 1000 sum to " + sumWhile + ".");

    // for gives up a more compact counting loop
    int sumFor = 0;
    for (int i = 1; i <= 1000; i++) {
        sumFor += i;
    }
    IO.println("FOR");
    IO.println("The numbers 1 to 1000 sum to " + sumFor + ".");

    // some fibonacci numbers
    int[] fib = new int[] { 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 };

    // iterate over array with while loop
    int index = 0;
    IO.println("WHILE");
    IO.print("fib = { ");
    while (index < fib.length) {
        IO.print(fib[index] + " ");

        index++;
    }
    IO.println("}");

    // iterate over array with normal for loop
    IO.println("FOR");
    IO.print("fib = { ");
    for (int i = 0; i < fib.length; i++) {
        IO.print(fib[i] + " ");
    }
    IO.println("}");

    // iterate over array with enhanced for loop
    IO.println("ENHANCED FOR");
    IO.print("fib = { ");
    for (int n : fib) {
        IO.print(n + " ");
    }
    IO.println("}");
}

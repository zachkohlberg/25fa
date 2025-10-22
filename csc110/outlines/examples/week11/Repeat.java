public class Repeat {
    public static void main(String[] args) {
        java.util.Scanner input = new java.util.Scanner(System.in);

        System.out.print("Enter some text: ");
        String s = input.nextLine();
        System.out.println("You typed: " + s);

        input.close();
    }
}

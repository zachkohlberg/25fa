// PointDemo.java
void main() {
    Point a = new Point(5, 10);
    Point b = new Point(0, 0);

    double distance = a.distanceTo(b);
    a.printMe("a");
    b.printMe("b");
    IO.println("Distance from a to b: " + distance + ".");
}

// declare class
class Point {
    // declare instance variables
    double x;
    double y;

    // constructor
    Point(double initX, double initY) {
        // initialize instance variables
        this.x = initX;
        this.y = initY;
    }

    // method to calculate distance to a second point
    double distanceTo(Point other) {
        double dx = this.x - other.x;
        double dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    void printMe(String label) {
        IO.println(String.format("%s(%.3f, %.3f)", label, this.x, this.y));
    }
}

export function tests() {
    // should work:
    // operate(1, "+", 1, "=");
    // operate(1, "+", 1, "+", 1, "=");
    // operate(1.1111111111111111111, "+", 1.1111111111111111111, "=");
    // operate(1, "+", 1, "=", 1); //check if display clears and only shows the 1
    // operate(1, "="); //doesn't do anything
    // operate(1, "/", 0);
    // operate(1, "+", 1, "/", 0, "+", 1);
    // should not work:
    // operate("a", "+", "1");
    // operate("1", "+", "b");
    // operate("a", "+", "1sdfc");
    // operate("1", "+", "-");
    // operate("1", "+", "=");
}

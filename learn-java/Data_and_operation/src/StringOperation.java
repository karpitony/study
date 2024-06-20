public class StringOperation {
    public static void main(String[] args) {

        System.out.println("Hello World");  // String
        System.out.println('H');    // Character - 한 글자를 표현하는 데이터타입
        System.out.println("H");    // String

        System.out.println("Hello " +
                "World");

        // new line
        System.out.println("Hello \nWorld");

        // escape
        System.out.println("Hello \"World\"");  //Hello "World"


        System.out.println("Hello World".length()); // 11
        System.out.println("Hello, [[[name]]] ... bye. ".replace("[[[name]]]", "egoing"));

    }
}

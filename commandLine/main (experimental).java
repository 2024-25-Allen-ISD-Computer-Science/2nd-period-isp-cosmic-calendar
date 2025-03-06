import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in); 
    System.out.println("Enter a number for the month (1 for January, 2 for February, etc.):");

    int monthNumber = myObj.nextInt();  
    String[] months = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};

    if (monthNumber >= 1 && monthNumber <= 12) {
      String monthName = months[monthNumber - 1]; 
      System.out.println("The month is: " + monthName);

      Scanner myObj2 = new Scanner(System.in);
      System.out.println("What day is it?");
      int want2 = myObj2.nextInt();

      Scanner myObj3 = new Scanner(System.in);
      System.out.println("What year is it?");
      int want3 = myObj3.nextInt();
      var daysPassed = ((want3 - 1955)* 365) + 101 - (monthNumber * 30) - want2;

      System.out.println("The date is: " + monthName + " " + want2 + " " + want3);
      
      Scanner planet = new Scanner(System.in);
      System.out.println("What celestial body do you want to convert?");
      String body = planet.nextLine();

      if (body.equalsIgnoreCase("Mars")) {
        if ((want3 & 1) == 0) {
          int want2i = want2 + 365;
          int marsYear = daysPassed/687 + 1955;
          System.out.println("The day on Mars is Sol " + want2i + ", " + marsYear);
        } else {
          int marsYear = daysPassed/687 + 1955;
          System.out.println("The day on Mars is Sol " + want2 + ", " + marsYear);
        }
      }
      else if (body.equalsIgnoreCase("Mercury")) {
        double want2m = want2 + (30 * monthNumber);
        double want2mi = want2m * (1 / 58.6);
        System.out.println("The day on Mercury is Solar Day " + want2mi);
      }
      else if (body.equalsIgnoreCase("Venus")) {
        double want2v = want2 + (30 * monthNumber);
        double want2vi = want2v * (1 / 243);
        System.out.println("The day on Venus is Solar Day " + want2vi);
      }
      else if (body.equalsIgnoreCase("Jupiter")) {
        double want2j = want2 + (30 * monthNumber);
        double want2ji = want2j * (1 / 0.4135);
        System.out.println("The day on Jupiter is Solar Day " + want2ji);
      }
      else if (body.equalsIgnoreCase("Saturn")) {
        double want2s = want2 + (30 * monthNumber);
        double want2si = want2s * (1 / 0.444);
        System.out.println("The day on Saturn is Solar Day " + want2si);
      }
      else if (body.equalsIgnoreCase("Uranus")) {
        double want2u = want2 + (30 * monthNumber);
        double want2ui = want2u * (1 / 0.718);
        System.out.println("The day on Uranus is Solar Day " + want2ui);
      }
      else if (body.equalsIgnoreCase("Neptune")) {
        double want2n = want2 + (30 * monthNumber);
        double want2ni = want2n * (1 / 0.671);
        System.out.println("The day on Neptune is Solar Day " + want2ni);
      }
      else if (body.equalsIgnoreCase("Earth")) {
        System.out.println("The day on Earth is " + want2 + " " + monthName + " " + want3);
      }
      else {
        System.out.println("Please enter a valid planet");
      }

    } else {
      System.out.println("Invalid month number. Please enter a number between 1 and 12.");
    }
  }
}

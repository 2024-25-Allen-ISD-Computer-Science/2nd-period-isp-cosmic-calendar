import java.util.Arrays;
import java.util.List;
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

      System.out.println("The date is: " + monthName + " " + want2 + " " + want3);
      
      

      
      Scanner planet = new Scanner(System.in);
      System.out.println("What celestial body do you want to convert?");
      String body = planet.nextLine();

      if (body.contains("Mars"))
      {
      if ((want3 & 1) == 0) {
        int want2i = want2 + 365;
        System.out.println("The day is Sol " + want2i);
      } if ((want3&1)!= 0) {
        System.out.println("The day is Sol " + want2);
      }
      }
      if (body.contains("Mercury"))
      {
          double want2m = want2 + (30*monthNumber);
          double want2mi = want2m*(1/58.6);
          System.out.println("The day is Solar Day " + want2mi);
      }

    else {
      System.out.println("Invalid month number. Please enter a number between 1 and 12.");
    }
    }
  }
}

import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in); 
    System.out.println("What month is it?");

    String want = myObj.nextLine();  
    String[] months = {"January", "February",  "March","April","May","June","July","August","September","October","November","December"};
     Scanner myObj2 = new Scanner (System.in);
     System.out.println("What day is it?");
     String want2 = myObj2.nextLine();
     Scanner myObj3 = new Scanner (System.in);
     System.out.println("What year is it?");
     String want3 = myObj3.nextLine();
     System.out.println("The date is: " + want + " "+ want2+ " "+want3);
     
}
}

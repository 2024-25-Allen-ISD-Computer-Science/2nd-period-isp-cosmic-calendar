import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in); 
    System.out.println("What month is it?");

    String want = myObj.nextLine();  
    String[] months = {"January", "February", "March","April","May","June","July","August","September","October","November","December"};
  if(Arrays.asList(months).contains(want)){
     Scanner myObj2 = new Scanner (System.in);
     System.out.println("What day is it?");
     int want2 = myObj2.nextInt();
     Scanner myObj3 = new Scanner (System.in);
     System.out.println("What year is it?");
     int want3 = myObj3.nextInt();
     System.out.println("The date is: " + want + " "+ want2+ " "+want3);
        Scanner planet = new Scanner(System.in);
     System.out.println("What celestial body do you want to convert?");
     String body = planet.nextLine();
     if ((want3 & 1)==0){
         int want2i = want2+365;
         System.out.println("The day is Sol " + want2i);
     }
     else{
         System.out.println("The day is Sol " +want2);
     }
  }
 
  else {
      System.out.println("Not a valid month.");
  }
}

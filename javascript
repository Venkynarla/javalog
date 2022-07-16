import java.util.Scanner;
public class BATM {

public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    String username;
    String password;

    System.out.println("Log in:");
    System.out.println("Indtast username: ");
    username = input.nextLine();

    System.out.println("Indtast password: ");
    password = input.nextLine();

    users check = new users(username, password);

    if(check.auth()) 
        System.out.println("You are logged in");



}

}
-- users ---

public class users {
private String username;
private String password;
private String[][] accounts = {{"jesper", "abc123"},{"christian", "abc123"}};

public users(String user, String pass){
    username = user;
    password = pass;
}

public boolean auth(){
    if((username.equals(accounts[0][0])) && (password.equals(accounts[0][1])))
        return true;
    else
        return false;
}

}
        

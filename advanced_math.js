var operation = prompt("Which operation? (p)ower or (s)quare_root: " );

if (operation == "s") {
  var first_number = prompt("Enter first number: ");
  var sqrt_number_of_a = Math.sqrt(Math.abs(first_number));
  alert ("Sqaure root of " + first_number + " is: " + sqrt_number_of_a);
} else {
  var first_number = prompt("Enter first number: ");
  var second_number = prompt("Enter second number: ");
  var power_of_b = Math.pow(first_number, second_number);
  alert ("Power of " + second_number + " of base " + first_number + " is: " + power_of_b);
}




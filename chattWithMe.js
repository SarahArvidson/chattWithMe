//Personalized greeting
let userName = "Parth and Sarah";
userName ? console.log(`Hey, ${userName}! Do you have 4-5 hours to spend together on a date in Chattanooga?`) : console.log("Hello! Do you have 4-5 hours to spend together on a date in Chattanooga?");

// Restaurant randomizer
let randomRestaurant = Math.floor(Math.random() * 14);
console.log(randomRestaurant);

switch (randomRestaurant) {
  case 0:
    restaurant = "Share a main course at Il Primo, and don't skip dessert.";
    break;
  case 1:
    restaurant = "Wear something nice to visit Calliope on MLK Jr.";
    break;
  case 2:
    restaurant =
      "Y'all gonna be munching on fried chicken at Champy's tonight!";
    break;
  case 3:
    restaurant = "Go spend some time at SideTrack.";
    break;
  case 4:
    restaurant = "Head downstairs to Two Ten Jack for dinner.";
    break;
  case 5:
    restaurant = "Check Main Street Meats for the pork coppa!";
    break;
  case 6:
    restaurant =
      "Get some small plates at Little Coyote and grab some ice cream at Clumpy's.";
    break;
  case 7:
    restaurant = "See if you can get a table at 2nd!";
    break;
  case 8:
    restaurant = "Wooden City is calling your names.";
    break;
  case 9:
    restaurant = "It's a Pizza Bros' slice and pint night!";
    break;
  case 10:
    restaurant = "Share Korean barbecue at Hanmi.";
    break;
  case 11:
    restaurant =
      "Say hi to Junior at Mezcla and get one of those great margaritas.";
    break;
  case 12:
    restaurant = "Go explore Mayan Kitchen's menu.";
    break;
  case 13:
    restaurant = "Think you're pretty smart? Go sit down for a meal at Clever.";
    break;
  case 14:
    restaurant = "Go eat in the bottom floor of Bitter Alibi!";
    break;
}

console.log(restaurant);

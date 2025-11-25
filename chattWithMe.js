//Personalized greeting
let userName = "Parth and Sarah";
userName
  ? console.log(`Hey, ${userName}! Here's what you'll do tonight:`)
  : console.log(
      "Hello! Do you have 4-5 hours to spend together on a date in Chattanooga?"
    );

// Restaurant randomizer
let randomRestaurant = Math.floor(Math.random() * 14);

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

// Activity randomizer
let randomActivity = Math.floor(Math.random() * 14);

switch (randomActivity) {
  case 0:
    activity = "play a round of Dominion.";
    break;
  case 1:
    activity = "play What's Wrong With You?";
    break;
  case 2:
    activity = "draw portraits of each other while blind-folded.";
    break;
  case 3:
    activity =
      "take Augie to Play, Wash, Pint. If they're not open or the weather's bad, take him to pick out a new toy.";
    break;
  case 4:
    activity = "go bowling!";
    break;
  case 5:
    activity = "go play at the arcade in the Choo-Choo.";
    break;
  case 6:
    activity =
      "ride bikes unless the weather's bad; in that case, you're going to go ride around in one of those horse carriages. For real.";
    break;
  case 7:
    activity = "lift weights at the YMCA!";
    break;
  case 8:
    activity =
      "see a movie in a movie theater like people did in the 1950's and such.";
    break;
  case 9:
    activity = "choose each other's outfit for the night.";
    break;
  case 10:
    activity = "go to Synergy or High Point to do some climbing.";
    break;
  case 11:
    activity = "do a puzzle together.";
    break;
  case 12:
    activity = "plan the next murder mystery party you'll host.";
    break;
  case 13:
    activity = "bake cookies together.";
    break;
  case 14:
    activity = "give each other a positive performance review";
    break;
}

// Challenge randomizer
let randomChallenge = Math.floor(Math.random() * 11);

switch (randomChallenge) {
  case 0:
    challenge =
      "ask a stranger who does NOT have a dog if you may pet their dog";
    break;
  case 1:
    challenge = "you may only eat food and drink left-handed";
    break;
  case 2:
    challenge =
      "the only food and drink you may consume must begin with the letter 'R'";
    break;
  case 3:
    challenge =
      "Ask a third party in the restaurant to order your food for you. You cannot sway their opinion or offer guidance (except to avoid food allergies)";
    break;
  case 4:
    challenge =
      "call a friend you haven't spoken to in over a week and tell them that you want to wish them sweet dreams";
    break;
  case 5:
    challenge =
      "choose something you'd like to get rid off, like an old dog toy or sweater, and then sell it to a stranger for any amount. Take that amount and put it in VTSAX";
    break;
  case 6:
    challenge =
      "You may only use 1-syllable words during dinner. If one of you slips up, you must both say 'meow'";
    break;
  case 7:
    challenge =
      "make frequent mention of pot bellied pigs, but pretend that it's a normal thing to mention";
    break;
  case 8:
    challenge = "your shirts must be worn backwards";
    break;
  case 9:
    challenge = "you may not wear shoes that match";
    break;
  case 10:
    challenge = "tell a stranger 3 things you love about your partner";
    break;
}

//Mixed Messages Generator
console.log(
  `${restaurant} You're also going to ${activity} That sounds great! However, there is a challenge:  ${challenge}. If you fail this challenge, you'll probably like, have to get divorced or something.`
);

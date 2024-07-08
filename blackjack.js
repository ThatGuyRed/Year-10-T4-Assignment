var Deck = [
  { name: "Two of Clubs", weight: 2, suit: "c", num: 2, url: "cards/2c.gif" },
  { name: "Two of Diamonds", weight: 2, suit: "d", num: 2, url: "cards/2d.gif" },
  { name: "Two of Hearts", weight: 2, suit: "h", num: 2, url: "cards/2h.gif" },
  { name: "Two of Spades", weight: 2, suit: "s", num: 2, url: "cards/2s.gif" },
  { name: "Three of Clubs", weight: 3, suit: "c", num: 3, url: "cards/3c.gif" },
  { name: "Three of Diamonds", weight: 3, suit: "d", num: 3,url: "cards/3d.gif" },
  { name: "Three of Hearts", weight: 3, suit: "h", num: 3,url: "cards/3h.gif" },
  { name: "Three of Spades", weight: 3, suit: "s", num: 3,url: "cards/3s.gif" },
  { name: "Four of Clubs", weight: 4, suit: "c", num: 4, url: "cards/4c.gif" },
  { name: "Four of Diamonds", weight: 4, suit: "d", num: 4,  url: "cards/4d.gif" },
  { name: "Four of Hearts", weight: 4, suit: "h", num: 4,  url: "cards/4h.gif" },
  { name: "Four of Spades", weight: 4, suit: "s", num: 4,  url: "cards/4s.gif" },
  { name: "Five of Clubs", weight: 5, suit: "c", num: 5, url: "cards/5c.gif" },
  { name: "Five of Diamonds", weight: 5, suit: "d", num: 5,  url: "cards/5d.gif" },
  { name: "Five of Hearts", weight: 5, suit: "h", num: 5,  url: "cards/5h.gif" },
  { name: "Five of Spades", weight: 5, suit: "s", num: 5,  url: "cards/5s.gif" },
  { name: "Six of Clubs", weight: 6, suit: "c", num: 6, url: "cards/6c.gif" },
  { name: "Six of Diamonds", weight: 6, suit: "d", num: 6, url: "cards/6d.gif" },
  { name: "Six of Hearts", weight: 6, suit: "h", num: 6,  url: "cards/6h.gif" },
  { name: "Six of Spades", weight: 6, suit: "s", num: 6,  url: "cards/6s.gif" },
  { name: "Seven of Clubs", weight: 7, suit: "c", num: 7,  url: "cards/7c.gif" },
  { name: "Seven of Diamonds", weight: 7, suit: "d", num: 7, url: "cards/7d.gif" },
  { name: "Seven of Hearts", weight: 7, suit: "h", num: 7, url: "cards/7h.gif" },
  { name: "Seven of Spades", weight: 7, suit: "s", num: 7, url: "cards/7s.gif" },
  { name: "Eight of Clubs", weight: 8, suit: "c", num: 8, url: "cards/8c.gif" },
  { name: "Eight of Diamonds", weight: 8, suit: "d", num: 8, url: "cards/8d.gif" },
  { name: "Eight of Hearts", weight: 8, suit: "h", num: 8, url: "cards/8h.gif" },
  { name: "Eight of Spades", weight: 8,  suit: "s", num: 8, url: "cards/8s.gif" },
  { name: "Nine of Clubs", weight: 9, suit: "c", num: 9, url: "cards/9c.gif" },
  { name: "Nine of Diamonds", weight: 9, suit: "d", num: 9, url: "cards/9d.gif" },
  { name: "Nine of Hearts", weight: 9, suit: "h", num: 9, url: "cards/9h.gif" },
  { name: "Nine of Spades", weight: 9, suit: "s", num: 9, url: "cards/9s.gif" },
  { name: "Ten of Clubs", weight: 10, suit: "c", num: 10, url: "cards/tc.gif" },
  { name: "Ten of Diamonds", weight: 10, suit: "d", num: 10, url: "cards/td.gif" },
  { name: "Ten of Hearts", weight: 10, suit: "h", num: 10, url: "cards/th.gif" },
  { name: "Ten of Spades", weight: 10, suit: "s", num: 10, url: "cards/ts.gif" },
  { name: "Jack of Clubs", weight: 10, suit: "c", num: 11, url: "cards/jc.gif" },
  { name: "Jack of Diamonds", weight: 10, suit: "d", num: 11, url: "cards/jd.gif" },
  { name: "Jack of Hearts", weight: 10, suit: "h", num: 11, url: "cards/jh.gif" },
  { name: "Jack of Spades", weight: 10, suit: "s", num: 11, url: "cards/js.gif" },
  { name: "Queen of Clubs", weight: 10, suit: "c", num: 12, url: "cards/qc.gif" },
  { name: "Queen of Diamonds", weight: 10, suit: "d", num: 12, url: "cards/qd.gif" },
  { name: "Queen of Hearts", weight: 10, suit: "h", num: 12, url: "cards/qh.gif" },
  { name: "Queen of Spades", weight: 10, suit: "s", num: 12, url: "cards/qs.gif" },    
  { name: "King of Clubs", weight: 10, suit: "c", num: 13, url: "cards/kc.gif" },
  { name: "King of Diamonds", weight: 10, suit: "d", num: 13, url: "cards/kd.gif" },
  { name: "King of Hearts", weight: 10, suit: "h", num: 13, url: "cards/kh.gif" },
  { name: "King of Spades", weight: 10, suit: "s", num: 13, url: "cards/ks.gif" },    
  { name: "Ace of Clubs", weight: 11, suit: "c", num: 14, url: "cards/ac.gif" },
  { name: "Ace of Diamonds", weight: 11, suit: "d", num: 14, url: "cards/ad.gif" },
  { name: "Ace of Hearts", weight: 11, suit: "h", num: 14, url: "cards/ah.gif" },
  { name: "Ace of Spades", weight: 11, suit: "s", num: 14, url: "cards/as.gif" }    
];

//Defines all the variables and arrays
var cardback = "cards/bgcolor.gif";
var cardback1 = "cards/cardback.gif";
var sum = 0;
var sum1 = "";
var sum2 = "";
var cardcount = 1;
const arr3 = [];
gencard = true;
const arr2 = [];
sitcheck = false;
aidecisioncheck = false;
bustcheck = false;
const arr4 = [];
const arr1 = [];
const arr5 = [];

function gen(){
	//Creates an array of 52 numbers, and then sorts them randomly. This ensures that the 5 random numbers generated will all be unique. (I spent way too much time on this part of the script)
		
		arr2.length = 0;
		arr3.length = 0;
		for (let i = 0; i < 52; i++) {
			arr1.push(i); 
		}
		arr1.sort(function(){return 0.5 - Math.random()});
		//more array gore 
		for (let i = 0; i < 7; i++) {
			arr2.push(arr1[i]); 
		}
		gencard = false;
}
gen();
function flip(){
	//executes code block below if player haven't busted or sat
		if ((bustcheck == true) || (sitcheck == true))
		{}
		else {
		
		switch(cardcount)
			{
			case(1):
				random_card1 = Deck[arr2[0]];
				cardcount = 2;
				arr3.push(random_card1.weight);
				arr4.push(random_card1.num);
				document.getElementById("card1").src = random_card1.url;
				tally();
				aigen();
				aiflip();
				break;
			case(2):
				random_card2 = Deck[arr2[1]];
				cardcount = 3;
				arr3.push(random_card2.weight);
				arr4.push(random_card2.num);
				document.getElementById("card2").src = random_card2.url;
				tally();
				break;
			case(3):
				random_card3 = Deck[arr2[2]];
				cardcount = 4;
				arr3.push(random_card3.weight);
				arr4.push(random_card3.num);
				document.getElementById("card3").src = random_card3.url;
				tally();
				break;
			case(4):
				random_card4 = Deck[arr2[3]];
				cardcount = 5;
				arr3.push(random_card4.weight);
				arr4.push(random_card4.num);
				document.getElementById("card4").src = random_card4.url;
				tally();
				break;
			case(5):
				random_card5 = Deck[arr2[4]];
				cardcount = 6;
				arr3.push(random_card5.weight);
				arr4.push(random_card5.num);
				document.getElementById("card5").src = random_card5.url;
				tally();
				break;
			case(6):
				random_card6 = Deck[arr2[5]];
				cardcount = 7;
				arr3.push(random_card6.weight);
				arr4.push(random_card6.num);
				document.getElementById("card6").src = random_card6.url;
				tally();
				break;
			case(7):
				random_card7 = Deck[arr2[6]];
				cardcount = 8;
				arr3.push(random_card7.weight);
				arr4.push(random_card7.num);
				document.getElementById("card7").src = random_card7.url;
				tally();
				break;
			case(8):
				break;
			}
		}
	
	
}

function resetdeck(){
//resets the entire thing
	gencard = true;
	gen();
	result = "NIL";
	sum = 0;
	sum1 = 0;
	cardcount = 1;
	sitcheck = false;
	aidecisioncheck = false;
	bustcheck = false;
	accumulator = 0;
	value = 0;
	
	tally();
	document.getElementById("card1").src = cardback;
	document.getElementById("card2").src = cardback;
	document.getElementById("card3").src = cardback;
	document.getElementById("card4").src = cardback;
	document.getElementById("card5").src = cardback;
	document.getElementById("card6").src = cardback;
	document.getElementById("card7").src = cardback;
	document.getElementById("count").innerHTML = 0;
	document.getElementById("result").innerHTML = "NIL";
	
	airesult = "NIL";
	aisum = 0;
	aisum1 = 0;
	aisum2 = 0;
	aicardcount = 1;
	aiarr3.length = 0;
	arr4.length = 0;
	aiarr4.length = 0;
	accumulator = 0;
	value = 0;
	
	aitally();
	document.getElementById("aicard1").src = cardback;
	document.getElementById("aicard2").src = cardback;
	document.getElementById("aicard3").src = cardback;
	document.getElementById("aicard4").src = cardback;
	document.getElementById("aicard5").src = cardback;
	document.getElementById("aicard6").src = cardback;
	document.getElementById("aicard7").src = cardback;
	document.getElementById("aicount").innerHTML = 0;
	document.getElementById("airesult").innerHTML = "NIL";
	console.log(aisum);
	console.log(aisum2);
	console.log(aiarr3);
}

result = "NIL";

function tally(){
//adds all the values of arr3 together
const initialValue = 0;
sum1 = arr3.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

switch(true) 
{
	//If value is over 21 and doesn't include an ace
	case((sum1 > 21) && !(arr3.includes(11))):
	result = "Bust";
	bustcheck = true;
	sum2 = sum1;
	zefinalfunction();
	break;
	//If value is over 21 and includes an ace
	case((sum1 > 21) && (arr3.includes(11))):
	sum2 = (sum1 - 10);
		if (sum2 > 21) 
		{ 
			result = "Bust"; 
			bustcheck = true;
		}
	console.log(arr3);
	break;
	//If player gets a blackjack
	case((arr3.includes(11)) && (arr3.includes(10))):
	result = "Blackjack"
	sum2 = sum1;
	sitcheck = true;
	sit();
	break;
	
	default:
	sum2 = sum1;
	break;
	
}

		if (arr3.includes(11))
		{
		document.getElementById("count").innerHTML = "Soft " + sum2;
		}
		else
		{
			document.getElementById("count").innerHTML = sum2;
		}
		document.getElementById("result").innerHTML = result;
}

function sit()
{
	//sits and executes ai code if player haven't busted
		if (result != "Bust")
		{
			aioverlord();
			sitcheck = true;
		}
		else {}
}

//Defines all the variables and arrays for the ai
aisum = 0;
aisum1 = 0;
aisum2 = 0;
aicardcount = 1;
const aiarr3 = [];
const aiarr4 = [];
airesult = "NIL";


function aioverlord()
{
if (aidecisioncheck == false)
	{
	aiflip();
	aidecision();
	}
else {}
}

//discards the first 7 values in arr2 to prevent overlap with player cards
function aigen()
{
arr5.length = 0;
for (let i = 8; i < 15; i++) {
			arr5.push(arr1[i]); 
		}
}

//AI decision making
function aidecision()
{
//stops drawing if ai scores a blackjack
if ((airesult == "Blackjack"))
	{
	aidecisioncheck = true;
	aitally();
	zefinalfunction();
	}
//Draws a card if the value is below 17
if ((aisum2 <= 17) && (aisum2 < sum2))
	{
	aioverlord();
	}
//Draws a card if sum is over 17 but player value is over the ai value
if ((aisum2 >= 17) && (sum2 > aisum2))
	{
	aioverlord();
	}
else
	{
	aidecisioncheck = true;
	aitally();
	zefinalfunction();
	}
}
function aiflip()
{
	//boring stuff
	switch(aicardcount)
			{
			case(1):
				airandom_card1 = Deck[arr5[0]];
				aicardcount = 2;
				aiarr3.push(airandom_card1.weight);
				aiarr4.push(airandom_card1.num);
				document.getElementById("aicard1").src = airandom_card1.url;
				aitally();
				break;
			case(2):
				airandom_card2 = Deck[arr5[1]];
				aicardcount = 3;
				aiarr3.push(airandom_card2.weight);
				aiarr4.push(airandom_card1.num);
				document.getElementById("aicard2").src = airandom_card2.url;
				aitally();
				break;
			case(3):
				airandom_card3 = Deck[arr5[2]];
				aicardcount = 4;
				aiarr3.push(airandom_card3.weight);
				aiarr4.push(airandom_card1.num);
				document.getElementById("aicard3").src = airandom_card3.url;
				aitally();
				break;
			case(4):
				airandom_card4 = Deck[arr5[3]];
				aicardcount = 5;
				aiarr3.push(airandom_card4.weight);
				aiarr4.push(airandom_card1.num);
				document.getElementById("aicard4").src = airandom_card4.url;
				aitally();
				break;
			case(5):
				airandom_card5 = Deck[arr5[4]];
				aicardcount = 6;
				aiarr3.push(airandom_card5.weight);
				aiarr4.push(airandom_card1.num);
				document.getElementById("aicard5").src = airandom_card5.url;
				aitally();
				break;
			case(6):
				airandom_card6 = Deck[arr5[5]];
				aicardcount = 7;
				aiarr3.push(airandom_card6.weight);
				aiarr4.push(airandom_card1.num);
				document.getElementById("aicard6").src = airandom_card6.url;
				aitally();
				break;
			case(7):
				airandom_card7 = Deck[arr5[6]];
				aicardcount = 8;
				aiarr3.push(airandom_card7.weight);
				aiarr4.push(airandom_card1.num);
				document.getElementById("aicard7").src = airandom_card7.url;
				aitally();
				break;
			case(8):
				break;
			}
}

function aitally(){
//same as tally()
const initialValue = 0;
aisum1 = aiarr3.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

switch(true) 
{
	case((aisum1 > 21) && !(aiarr3.includes(11))):
	airesult = "Bust";
	aisum2 = aisum1;
	break;
	case((aisum1 > 21) && (aiarr3.includes(11))):
	aisum2 = (aisum1 - 10);
		if (aisum2 > 21) {airesult = "Bust";}
	break;
	default:
	aisum2 = aisum1;
	break;
	case((aiarr3.includes(11)) && (aiarr3.includes(10))):
	airesult = "Blackjack"
	sitcheck = true;
	aisum2 = aisum1;
	break;
}
if (aiarr3.includes(11))
		{
		document.getElementById("aicount").innerHTML = "Soft " + aisum2;
		}
		else
		{
			document.getElementById("aicount").innerHTML = aisum2;
		}
		document.getElementById("airesult").innerHTML = airesult;
}

function zefinalfunction()
{
	//DEBUG CODE
	//Player: A,K House: A,Q
	/*
	resetdeck();
	sum2 = 21;
	aisum2 = 21;
	document.getElementById("aicount").innerHTML = "Soft " + aisum2;
	document.getElementById("count").innerHTML = "Soft " + sum2;
	
	//weight: 48-51=Ace, 44-47=King 40-43=Queen
	//num: 14=Ace, 13=King, 12=Queen
	arr3.push(11);
	random_card1 = Deck[48];
	document.getElementById("card1").src = random_card1.url;
	arr3.push(10);
	random_card2 = Deck[46];
	document.getElementById("card2").src = random_card2.url;
	arr4.push(14);
	arr4.push(13);
	
	
	aiarr3.push(11);
	airandom_card1 = Deck[49];
	document.getElementById("aicard1").src = airandom_card1.url;
	aiarr3.push(10);
	airandom_card2 = Deck[43];
	document.getElementById("aicard2").src = airandom_card2.url;
	aiarr4.push(14);
	aiarr4.push(12);
	*/
	//Player: A,Q House: A,K
	/*
	resetdeck();
	sum2 = 21;
	aisum2 = 21;
	document.getElementById("aicount").innerHTML = "Soft " + aisum2;
	document.getElementById("count").innerHTML = "Soft " + sum2;
	
	//weight: 48-51=Ace, 44-47=King 40-43=Queen
	//num: 14=Ace, 13=King, 12=Queen
	arr3.push(11);
	random_card1 = Deck[48];
	document.getElementById("card1").src = random_card1.url;
	arr3.push(10);
	random_card2 = Deck[43];
	document.getElementById("card2").src = random_card2.url;
	arr4.push(14);
	arr4.push(12);
	
	
	aiarr3.push(11);
	airandom_card1 = Deck[49];
	document.getElementById("aicard1").src = airandom_card1.url;
	aiarr3.push(10);
	airandom_card2 = Deck[46];
	document.getElementById("aicard2").src = airandom_card2.url;
	aiarr4.push(14);
	aiarr4.push(13);
	*/
		//BLACKJACK DEBUG CODE House
		/*
		arr3.push(11);
		random_card1 = Deck[48];
		document.getElementById("card1").src = random_card1.url;
		arr3.push(2);
		random_card2 = Deck[1];
		document.getElementById("card2").src = random_card2.url;
		arr4.push(14);
		arr4.push(2);
		
		
		aiarr3.push(11);
		airandom_card1 = Deck[49];
		document.getElementById("aicard1").src = airandom_card1.url;
		aiarr3.push(10);
		airandom_card2 = Deck[46];
		document.getElementById("aicard2").src = airandom_card2.url;
		aiarr4.push(14);
		aiarr4.push(13);
		
		//BLACKJACK DEBUG CODE Player
		arr3.push(11);
		random_card1 = Deck[48];
		document.getElementById("card1").src = random_card1.url;
		arr3.push(10);
		random_card2 = Deck[46];
		document.getElementById("card2").src = random_card2.url;
		arr4.push(14);
		arr4.push(13);
		
		
		aiarr3.push(11);
		airandom_card1 = Deck[49];
		document.getElementById("aicard1").src = airandom_card1.url;
		aiarr3.push(2);
		airandom_card2 = Deck[1];
		document.getElementById("aicard2").src = airandom_card2.url;
		aiarr4.push(14);
		aiarr4.push(2);
		
	tally();
	aitally();
	*/
if (result != "Bust")
	{
		switch(true)
		{
		//if both player and house have the same values
		case(sum2 == aisum2): 
			//checks the ids (num) of house and player
			const initialValue = 0;
			sum4 = arr4.reduce((accumulator, value) => {
			return accumulator + value;
			}, 0);
			accumlator = 0;
			value = 0;
			aisum4 = aiarr4.reduce((accumulator, value) => {
			return accumulator + value;
			}, 0);
			console.log(sum4)
			console.log(aisum4)
			switch(true)
			{	
				//if player gets blackjack and a better hand
				case((sum4 > aisum4) && (result == "Blackjack")):
				result1 = "Blackjack, You Win!";
				airesult1 = "Player Wins";
				document.getElementById("result").innerHTML = result1;
				document.getElementById("airesult").innerHTML = airesult1;
				break;
				//if house gets blackjack and a better hand
				case((sum4 < aisum4) && (result == "Blackjack")):
				result1 = "Blackjack, House Wins!";
				airesult1 = "Blackjack";
				document.getElementById("result").innerHTML = result1;
				document.getElementById("airesult").innerHTML = airesult1;
				break;
				//if player has the better hand
				case(sum4 > aisum4):
				result1 = "You Win!";
				airesult1 = "Player Wins";
				document.getElementById("result").innerHTML = result1;
				document.getElementById("airesult").innerHTML = airesult1;
				break;
				//if house has the better hand
				case(sum4 < aisum4):
				result1 = "House Wins!";
				airesult1 = "House Wins!";
				document.getElementById("result").innerHTML = result1;
				document.getElementById("airesult").innerHTML = airesult1;
				break;
				//if both ties
				case(sum4 == aisum4):
				result1 = "Tie";
				airesult1 = "Tie";
				document.getElementById("result").innerHTML = result1;
				document.getElementById("airesult").innerHTML = airesult1;
				break;
			}
			break;
		//if player gets blackjack
		case(result == "Blackjack"):
			result1 = "Blackjack, You Win!"
			airesult1 = "Player Wins"
			document.getElementById("result").innerHTML = result1;
			document.getElementById("airesult").innerHTML = airesult1;
			break;
		//if house gets blackjack
		case(airesult == "Blackjack"):
			result1 = "Blackjack, House Wins!"
			airesult1 = "Blackjack"
			document.getElementById("result").innerHTML = result1;
			document.getElementById("airesult").innerHTML = airesult1;
			break;
		//if player has the better hand
		case(sum2 > aisum2): 
			result1 = "You Win!";
			airesult1 = "Player Wins";
			document.getElementById("result").innerHTML = result1;
			document.getElementById("airesult").innerHTML = airesult1;
			break;
		//if house busts
		case(airesult == "Bust"):
			result1 = "House Busts, You Win!";
			airesult1 = "Bust";
			document.getElementById("result").innerHTML = result1;
			document.getElementById("airesult").innerHTML = airesult1;
			break;
		//if house doesn't bust and has the better hand
		case((aisum2 > sum2) && (airesult !== "Bust")):
			result1 = "House Wins!";
			airesult1 = "House Wins!";
			document.getElementById("result").innerHTML = result1;
			document.getElementById("airesult").innerHTML = airesult1;
			break;
		}
		
		
	}
}


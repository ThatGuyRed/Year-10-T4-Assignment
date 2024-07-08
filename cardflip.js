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

var tally = 0;

function flip(){
    //Creates an array of 52 numbers, and then sorts them randomly. This ensures that the 5 random numbers generated will all be unique. (I spent way too much time on this part of the script)
	const arr1 = [];
	for (let i = 0; i < 52; i++) {
		arr1.push(i); 
		console.log(arr1)
	}
	arr1.sort(function(){return 0.5 - Math.random()});
	//Sorts cards by weight
	const arr2 = [];
	for (let i = 0; i < 5; i++) {
		arr2.push(arr1[i]); 
		console.log(arr2)
	}
	arr2.sort(function(a, b){return a - b});
	
	const arr3 = [];
	
	//assigns sorted cards to random_cards
	
    random_card1 = Deck[arr2[0]];
	random_card2 = Deck[arr2[1]];
	random_card3 = Deck[arr2[2]];
	random_card4 = Deck[arr2[3]];
	random_card5 = Deck[arr2[4]];
	
	ranking = "NIL";
	
	/* //Royal Flush debug code
	random_card1 = Deck[35];
	random_card2 = Deck[39];
	random_card3 = Deck[43];
	random_card4 = Deck[47];
	random_card5 = Deck[51];
	*/
	
	
	/* //Straight Flush debug code
	random_card1 = Deck[0];
	random_card2 = Deck[4];
	random_card3 = Deck[8];
	random_card4 = Deck[12];
	random_card5 = Deck[16];
	*/
	
	/*//Flush debug code
	random_card1 = Deck[0];
	random_card2 = Deck[4];
	random_card3 = Deck[8];
	random_card4 = Deck[12];
	random_card5 = Deck[20];
	*/
	
	/*//Straight debug code
	random_card1 = Deck[1];
	random_card2 = Deck[4];
	random_card3 = Deck[8];
	random_card4 = Deck[12];
	random_card5 = Deck[16];
	*/

	/*//Four of A Kind debug code
	random_card1 = Deck[0];
	random_card2 = Deck[4];
	random_card3 = Deck[5];
	random_card4 = Deck[6];
	random_card5 = Deck[7];
	*/
	
	/*//Three of A Kind debug code
	random_card1 = Deck[0];
	random_card2 = Deck[4];
	random_card3 = Deck[5];
	random_card4 = Deck[6];
	random_card5 = Deck[12];
	*/
	
	/*//Two Pairs debug code
	random_card1 = Deck[0];
	random_card2 = Deck[1];
	random_card3 = Deck[5];
	random_card4 = Deck[6];
	random_card5 = Deck[12];
	*/
	
	/*//Pair debug code
	random_card1 = Deck[0];
	random_card2 = Deck[1];
	random_card3 = Deck[5];
	random_card4 = Deck[10];
	random_card5 = Deck[15];
	*/
	
	/*//Full House debug code
	random_card1 = Deck[0];
	random_card2 = Deck[1];
	random_card3 = Deck[5];
	random_card4 = Deck[6];
	random_card5 = Deck[7];
	*/
	
	//pushes the card id (num) into an array for counting purposes
	arr3.push(random_card1.num);
	arr3.push(random_card2.num);
	arr3.push(random_card3.num);
	arr3.push(random_card4.num);
	arr3.push(random_card5.num);
	console.log(arr3)
	
	//counts amount of duplicates and sorts them into an array
	const count = [];

	arr3.forEach(element => {count[element] = (count[element] || 0) + 1;});
	console.log(count);
	
	//counting duplicates of duplicates 
	const count2 = [];
	count.forEach(element => {count2[element] = (count2[element] || 0) + 1;});
	console.log(count2);
	//tally
	tally = (random_card1.weight + random_card2.weight + random_card3.weight + random_card4.weight + random_card5.weight);
	
	//card rankings 
	switch (true){
		case ((tally == 51) && (random_card1.suit == random_card2.suit && random_card1.suit == random_card3.suit && random_card1.suit == random_card4.suit && random_card1.suit == random_card5.suit)):
			ranking = "Royal Flush";
			break;
		case ((random_card2.num == random_card1.num + 1 && random_card3.num == random_card2.num + 1 && random_card4.num == random_card3.num + 1 && random_card5.num == random_card4.num + 1) && (random_card1.suit == random_card2.suit && random_card1.suit == random_card3.suit && random_card1.suit == random_card4.suit && random_card1.suit == random_card5.suit)):
			ranking = "Straight Flush";
			break;
		case ((random_card1.suit == random_card2.suit && random_card1.suit == random_card3.suit && random_card1.suit == random_card4.suit && random_card1.suit == random_card5.suit)):
			ranking = "Flush";
			break;
		case((random_card2.num == random_card1.num + 1 && random_card3.num == random_card2.num + 1 && random_card4.num == random_card3.num + 1 && random_card5.num == random_card4.num + 1)):
			ranking = "Straight";
			break;
		case (count.includes(4)):
			ranking = "Four of A Kind";
			break;
		case (count.includes(3)):
			ranking = "Three of A Kind";
			break;
		case (count.includes(2) && count.includes(3)):
			ranking = "Full House";
			break;
		case (count.includes(2) && count.includes(3)):
			ranking = "Full House";
			break;
		case (count2.includes(2)):
			ranking = "Two Pairs";
		case (count.includes(2)):
			ranking = "Pair";
		case (count.includes(2)):
			if (count2.includes(2))
			{
			ranking = "Two Pairs";	
			}
			else 
			{
			ranking = "Pair";
			}
			break;
		default:
			ranking = "High Card";
			break;
	}
	
    
		document.getElementById("card1").src = random_card1.url;
		document.getElementById("card2").src = random_card2.url;
		document.getElementById("card3").src = random_card3.url;
		document.getElementById("card4").src = random_card4.url;
		document.getElementById("card5").src = random_card5.url;
		document.getElementById("count").innerHTML = tally;
		document.getElementById("rank").innerHTML = ranking;
}
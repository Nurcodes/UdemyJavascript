// simple  function

/**
function add(fruitone, fruittwo)
{
	console.log(fruitone, fruittwo)
	let juice = console.log(`Juice with ${fruitone} fruit and ${fruittwo} fruit`);
	return juice;
}
const f1 = "pomegranete";
const f2 = "pinnapple";
add(f1, f);

---------------------------------------

// function declaration
function age(dob)
{
	let result = 2022 - dob;
	return result;
}


const age1 = age(1842);
// function expression
console.log(age1);
const calage2 = function (dob)
{
	return 2022 - dob;
}

const age2 = calage2(1842);
console.log(age2);

-----------------------------------------

//creating two functions 1 for age
//and 1 for years until retirnment
//finally calling those two functions in retiresinfunction

const currentAge = (age) =>
{
	return 2037 - age;
}



// Arrow function
const retiresin = (dob, name) => 
{
	const age = currentAge(dob);
	const retirment = 65 - age;
	return `${name} is ${age} years old and retires in ${retirment} years`;
}
let name = "Bob Sanders";
const test = retiresin(1998, name);
console.log(test);
----------------------------------------------
*/


const calcAverage = (one, two, three) => (one + two + three) / 3;

let koalas = calcAverage(23, 34, 27);
let dolphins = calcAverage(85, 54, 41);

const checkWinner = function (avgDolphins, avgKoalas)
{
	if (avgDolphins > 2*avgKoalas)
	{
		console.log(`Dolphins win (${avgDolphins}, ${avgKoalas})`);
	} else if (avgKoalas > 2*avgDolphins)
	{
		console.log(`Koalas win (${avgKoalas}, ${avgDolphins})`);
	}else
		console.log("No winner");
}
checkWinner(dolphins, koalas);















































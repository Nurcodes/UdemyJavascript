// Objects //
const abdi = {
		firstname: 'Abdifatah',
		middlename: 'Aden',
		lastname: 'Nur',
		dob: 2000,
		height: '193cm',
		weight: '85kg',
		loco: 'Nairobi, Kenya',
		friends: ['none'],
		job: 'student',
		hadLicense: true,

		calcAgee: function ()
		{
				this.age = 2037 - this.dob;
				return this.age;
		},
		getSummary: function ()
		{
				return `${this.firstname} is a ${this.calcAgee()}-yearold ${this.job} and he has ${this.hadLicense ? 'a' : 'no'} drivers license`;
		}
};

//GETTING PROPERTY FROM OBJECT - DOT NOTATION
//console.log(abdi.height); // HAS TO BE EXACT PROPERTY KEY
//GETTING PROPERTY FROM OBJECT - BRACKET NOTATION
const nameKey = 'name'
//console.log(abdi['first' + nameKey]); // Bracket NOTATION IS CAN TAKE
//console.log(abdi['middle' + nameKey]);// COMPUTED EXPRESSION
//console.log(abdi['last' + nameKey]);

//ADDING NEW PROPERTY
abdi.github = 'Nurcodes';
abdi['twitter'] = '@Nurcodes';
//console.log(abdi);
// challenge
//console.log(`${abdi.firstname} has ${abdi.friends.length} friends and his weight is ${abdi['weight']}`);
//console.log(abdi.age);
//GET SUMMARY METHOD CHALLENGE "name is a 46-yearold teacher.  and he has a driverslices"
//abdi.calcAgee();
/**
const Mark = {

	fullname: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBmi: function()
	{
		this.Bmi = this.mass / (this.height) ** 2;
		return this.Bmi;
	}
};
const John = {
	fullname: "John Smith",
	mass: 192,
	height: 1.95,
	calcBmi: function()
	{
		this.Bmi = this.mass / (this.height) ** 2;
	}
};
Mark.calcBmi();
John.calcBmi();
console.log(Mark.Bmi, John.Bmi);

if (Mark.Bmi > John.Bmi)
{
	console.log(`Marks Bmi is higher at ${Mark.Bmi}`);
} else if (John.Bmi > Mark.Bmi)
{
	console.log(`Johns Bmi is higher at ${John.Bmi}`);
}
---------------------------------------------------------------
*

//FOR LOOP

const types = [2000, "2009", 495, "654", "1982", 890];
const ages = [];

for (let i = 0; i < types.length; i++)
{
	ages.push(types[i]);
}
for (let i = 0; i < ages.length; i++)
{
	if (typeof ages[i] != 'number') break;
	console.log(ages[i]);
}

*/

const calcTip = function (bill)
{
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++)
{
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(tip + bills[i]);
	console.log(`Total for bill price (${bills[i]}) is ${totals[i]} with its tip being ${tips[i]}`);


}


































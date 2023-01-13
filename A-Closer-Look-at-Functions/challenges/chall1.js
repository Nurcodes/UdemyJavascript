const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //display a prompt window for the user to input
    //the number of the selected option
    const question = Number(
      prompt(`${this.question}\n${this.options.join('\n')}`)
    );
    //Better way
    0 < question < this.options.length &&
      typeof question == 'number' &&
      this.answers[question]++;

    //Bad and confusing way
    // if (+question < this.options.length) {
    //   this.answers[question] += 1;
    // } else {
    //   // console.log(this.question);
    // }

    //will call the method with default of 'array'
    console.log('=====================From Inside the Object==============');
    this.displayResults();
    //will call the method with type == 'string'
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

//Method runs when ever user clicks on the poll button
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//BONUS TEST DATA 1: [5, 2, 3]
//BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// This works because we substitute the this keyword with that
// of the object, with no arguements the if block runs
// then we call this.answers which gets the answers
// when we provide a string type is not default anymore
// it is now equal to the passed in word string
console.log('====================Outside the object calls================');
const bonus = { answers: [1, 5, 3, 9, 6, 1] };
poll.displayResults.call(bonus, 'string');
poll.displayResults.call({ answers: [5, 2, 3] });

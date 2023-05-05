'use strict';

// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 900) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// console.log(createBooking('FH123', 2));
// console.log(createBooking('FH123', 2, 1900));

// const flight = 'LH123';
// const Yared = {
//   name: 'Yared Yilma',
//   passportNum: 1234657784,
// };

// const chekcIn = function (flightNum, passanger) {
//   flightNum = 'LH122';
//   passanger.name = 'Mr.' + passanger.name;
//   if (passanger.passportNum === 1234657784) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// chekcIn(flight, Yared);

// const flightNum = flight;
// const passanger = Yared;

// const newPassport = function (person) {
//   person.passportNum = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(Yared);
// chekcIn(flight, Yared);
// console.log(flight);
// console.log(Yared);
// const str = 'Yared Yilma';
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function

// const transformer = function (str, fn) {
//   console.log(`original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// console.log(transformer('My name is Yared Yilma', upperFirstWord));
// console.log(transformer('My name is Yared Yilma', oneWord));

// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);
// function that returns other function

// const greating = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greating('Hey');
// greeterHey('Yared');

// const etAirline = {
//   airline: 'Ethiopian Airline',
//   iataCode: 'ET',
//   bookings: [],
//   book(flighNum, name) {
//     console.log(
//       `${name} booked  sit on ${this.airline} flight ${this.iataCode}${flighNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flighNum}`, name });
//   },
// };

// console.log(etAirline.book('342', 'Yared Yilma'));
// console.log(etAirline);

// const adAirline = {
//   airline: 'Adama Airline',
//   iataCode: 'AD',
//   bookings: [],
// };

// // the call method
// const book = etAirline.book;
// book.call(adAirline, 23, 'Abrham Yilma');
// console.log(adAirline);

// //the binding method
// const bookAd = book.bind(adAirline, 23, 'Sintayehu Yilma');
// bookAd();

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  // Method to resgistor new answers
  registorNewAnswers: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n Write option number`
      )
    );
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;
    this.displayResults('string');
  },
  //Method to display results
  displayResults: function (type) {
    if (type === 'Array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

poll.registorNewAnswers();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registorNewAnswers.bind(poll));

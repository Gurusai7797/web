//ex: if you want to select from ID use getElemenById or for any other thing use qs(for one)/qsa(for all)

const container = document.querySelector('.container'); //qs method is used to select anything(only the first one) we wont from the dom p,ul,id,class
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); // qsa is grabs all of them and put them into a node lists(ex array)
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI(); //calling a function

let ticketPrice = +movieSelect.value; // + to convert string to number
// console.log(ticketPrice); //typeof - to see the type of the variable

// function to save selected movie & price

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// update total &  count

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected'); // will give the nodelist of the selected seats
  // console.log(selectedSeats);
  // we con't save nodelist so we need to convert it into array
  //steps to save the data in local
  // copy selected seats into anarray
  // map throungh array
  // return a new array
  // ... ->spread operator ***IMP example arr1=[1,2,3] \n arr2=[..arr1,4,5] then arr2=[1,2,3,4,5]
  // map = high order array method (similar to forEach) example arr3 = arr2.map(function(item){ return item*2;}) then arr3=[2,4,6,8,10]
  const seatsIndex = [...selectedSeats].map(function (seat) {
    //or (seat) => (arrow function) & remove return keyword .map(seat => [...seats].indexOf(seat));
    return [...seats].indexOf(seat);
  });
  // console.log(seatsIndex);
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex)); // seatsIndex is a array so used JSON.stringify

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//get data frm local storage and populate UI

function populateUI() {
  //pull out the selected seats from local storage
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  // console.log(e.target.selectedIndex, e.target.value);
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  // console.log(e.target);
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    //above if conition is to select only the seats
    // console.log(e.target);
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

//Initial count & total set

updateSelectedCount();

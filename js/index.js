const titleMontYear = document.getElementById('title_mont_year');


const currentDate = new Date();
titleMontYear.textContent = `${currentDate
  .toDateString()
  .substring(4, 7)} ${currentDate.getFullYear()}`;

const yearInput = document.getElementById('year');
yearInput.setAttribute('value', currentDate.getFullYear());

const monthInput = document.getElementById('month');

//const findMont = monthInput.options.find((option) => option.value === 4);

const dayInput = document.getElementById('day');
dayInput.setAttribute('value', currentDate.getDate());

const currentMonth = Array.prototype.find.call(
  monthInput.options,
  (option) => option.value == currentDate.getMonth(),
);

monthInput.selectedIndex = currentMonth.value;

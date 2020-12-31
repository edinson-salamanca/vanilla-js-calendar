const titleMontYear = document.getElementById('title_mont_year');
const searchButton = document.getElementById('search-button');
const calenderDays = document.getElementById('calenderDays');

const currentDate = new Date();
createCalendarTitle(currentDate);

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
const dayNames = [...document.getElementsByClassName('day-name')];

searchButton.onclick = function () {
  let dayNumbers = [...document.getElementsByClassName('day-number')];
  dayNumbers.forEach((day) => day.remove());

  let newDayNumbers = '';

  let chosenDate = new Date(yearInput.value, monthInput.value);
  createCalendarTitle(chosenDate);

  for (let i = 1; i <= 31; i++) {
    let day = new Date(yearInput.value, monthInput.value, i);
    if (day.getMonth() == monthInput.value) {
      newDayNumbers += `<li
                          class='day-number'
                          ${
                            i === 1
                              ? day.getDay() === 0
                                ? 'style=grid-column:7'
                                : 'style=grid-column:' + day.getDay()
                              : ''
                          }
                        >${day.getDate()}</li>`;
    }
  }

  dayNames[6].insertAdjacentHTML('afterend', newDayNumbers);
};

function createCalendarTitle(chosenDate) {
  titleMontYear.textContent = `${chosenDate
    .toDateString()
    .substring(4, 7)} ${chosenDate.getFullYear()}`;
}

const titleMontYear = document.getElementById('title_mont_year');
const searchButton = document.getElementById('search-button');
const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const dayNames = [...document.getElementsByClassName('day-name')];

displayCurrentCalendar();

searchButton.addEventListener('click', searchButtonHandle);

function searchButtonHandle() {
  let chosenDate = new Date(yearInput.value, monthInput.value);

  displayCalendar(chosenDate);
}

function displayCurrentCalendar() {
  let currenDate = new Date();
  yearInput.setAttribute('value', currenDate.getFullYear());

  const currentMonth = Array.prototype.find.call(
    monthInput.options,
    (option) => option.value == currenDate.getMonth(),
  );
  monthInput.selectedIndex = currentMonth.value;

  displayCalendar(currenDate);
}

function displayCalendar(chosenDate) {
  let dayNumbers = [...document.getElementsByClassName('day-number')];
  dayNumbers.forEach((day) => day.remove());

  createCalendarTitle(chosenDate);

  let daysGenerated = generateCalendarDays();

  dayNames[6].insertAdjacentHTML('afterend', daysGenerated);
}

function createCalendarTitle(chosenDate) {
  titleMontYear.textContent = `${chosenDate
    .toDateString()
    .substring(4, 7)} ${chosenDate.getFullYear()}`;
}

function generateCalendarDays() {
  let days = '';
  for (let i = 1; i <= 31; i++) {
    let day = new Date(yearInput.value, monthInput.value, i);

    if (day.getMonth() == monthInput.value) {
      days += `<li
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
  return days;
}

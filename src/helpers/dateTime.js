const todayBookingDeadline = 17; // max hour to book a table today;
const monthsOfTheYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const bookingStartDate = () => {
  return new Date().getHours() >= todayBookingDeadline
    ? tomorrowDate()
    : new Date();
};

const monthToString = (monthIndex, short = false) => {
  return !short
    ? monthsOfTheYear[monthIndex]
    : monthsOfTheYear[monthIndex].slice(0, 3);
};

const stringToDate = (str) => {
  let [month, day] = str.split(" ");
  monthsOfTheYear.forEach((m, i) => {
    if (month === m.slice(0, 3)) month = i + 1;
  });
  const year = new Date().getFullYear();
  const date = `${year}-${String(month).padStart(2, "0")}-${day}`;
  return new Date(date);
};

const dateToString = (date, short = false) => {
  let dateObj;
  switch (date) {
    case "today":
      dateObj = new Date();
      break;
    case "tomorrow":
      dateObj = tomorrowDate();
      break;
    default:
      if (!(date instanceof Date)) {
        throw new Error(
          "`date` param must be either `today`, `tomorrow` or a Date object."
        );
      }
      dateObj = date;
  }
  const month = monthToString(dateObj.getMonth(), short);
  const day = dateObj.getDate();
  return `${month} ${day}`;
};

const nextMonthDays = () => {
  // Check if is earlie than 7pm
  let startDate = bookingStartDate();

  let endDate = new Date();
  endDate = endDate.setMonth(endDate.getMonth() + 1);
  // Get 30 following days
  const days = [];
  while (startDate < endDate) {
    days.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }
  return days;
};

const tomorrowDate = () => {
  const ts = new Date().setDate(new Date().getDate() + 1);
  return new Date(ts);
};

export {
  bookingStartDate,
  stringToDate,
  dateToString,
  monthToString,
  nextMonthDays,
};

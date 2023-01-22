const todayBookingDeadline = 17; // max hour to book a table today;

const bookingStartDate = () => {
  return new Date().getHours() >= todayBookingDeadline
    ? tomorrowDate()
    : new Date();
};

const dayToString = (date, short = false) => {
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

const monthToString = (monthIndex, short = false) => {
  const months = [
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
  return !short ? months[monthIndex] : months[monthIndex].slice(0, 3);
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

export { bookingStartDate, dayToString, monthToString, nextMonthDays };

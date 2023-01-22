const dayToString = (dateObj, short = false) => {
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
  const today = new Date();
  let nextMonth = new Date();
  nextMonth = nextMonth.setMonth(nextMonth.getMonth() + 1);
  // Get 30 next days
  const days = [];
  while (today < nextMonth) {
    days.push(new Date(today));
    today.setDate(today.getDate() + 1);
  }
  return days;
};

export { dayToString, monthToString, nextMonthDays };

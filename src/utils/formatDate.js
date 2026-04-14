const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function formatDate(date) {
  let newDate = new Date(date);

  return [newDate.getDate(), months[newDate.getMonth()]];
}

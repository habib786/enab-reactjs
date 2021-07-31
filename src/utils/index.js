export const getDateOfLastMonth = () => {
  var date = new Date();
  date.setDate(date.getDate() - 30);
  return date.toISOString().split("T")[0];
};

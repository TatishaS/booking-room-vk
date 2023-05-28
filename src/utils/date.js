export const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const formatDate = (date) => {
  const formatedDate = new Date(date);
  return formatedDate.toLocaleDateString("ru-RU", options);
};

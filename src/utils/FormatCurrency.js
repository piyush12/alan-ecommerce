const formatter = Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (number) => {
  if (!number) return "";
  return formatter.format(number);
};

export default formatCurrency;

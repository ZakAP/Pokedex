export const formatPokemonNumber = (number) => {
  let formatedNumber = number.toString().split("");
  if (formatedNumber.length === 1) {
    formatedNumber.splice(0, 0, "00").toString();
    return formatedNumber;
  }
  if (formatedNumber.length === 2) {
    formatedNumber.splice(0, 0, "0").toString();
    return formatedNumber;
  }
  return formatedNumber;
};

export const formatPokemonValue = (number) => {
  let formatedNumber = number.toString().split("");
  if (formatedNumber.length === 1) {
    formatedNumber.splice(0, 0, "0");
  }
  formatedNumber.splice(-1, 0, ".").toString();
  return formatedNumber;
};

export { capitalize };

function capitalize(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) =>
      word.length > 1 ? word[0].toUpperCase() + word.substr(1) : word
    )
    .join(" ");
}

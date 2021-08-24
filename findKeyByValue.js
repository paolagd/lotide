const findKeyByValue = (TVShows, value) => {
  for (const key in TVShows) {
    if (value === TVShows[key])
      return key;
  }
}

module.exports = findKeyByValue;
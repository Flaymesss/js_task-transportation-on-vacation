/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = 0;

  if (days >= 3 && days <= 6) {
    result = result - 20;
  }

  if (days >= 7) {
    result = result - 50;
  }

  for (let i = 0; i < days; i++) {
    result += 40;
  }

  return result;
}

module.exports = calculateRentalCost;

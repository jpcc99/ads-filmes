/**
 * @param {[string]} mustHave
 * @param {Object} mustHave
*/
async function getMissingFields(mustHave, target) {
  const missingFields = [];

  for (const field of mustHave) {
    if (!(field in target)) {
      missingFields.push(field);
    }
  }
  return missingFields;
}

module.exports = getMissingFields;

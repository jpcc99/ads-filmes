/**
 * Checa se está faltando campos num dado objeto
* @param {string[]} fields
* @param {Object} target
* @returns {{ error: boolean, message: string } | {error: boolean}}
*/
function checkMissingFieldsFor(fields, target = {}) {
  if (!target) {
    return {
      error: true,
      message: "O parâmetro target é inválido"
    }
  }

  const missingFields = [];

  for (const field of fields) {
    if (!(field in target)) {
      missingFields.push(field);
    }
  }

  if (missingFields.length > 0) {
    return {
      error: true,
      message: `Campos faltando: ${missingFields}`
    };
  }

  return { error: false }
}

module.exports = checkMissingFieldsFor;

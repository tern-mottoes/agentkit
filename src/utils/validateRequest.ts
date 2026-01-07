// src/utils/validateRequest.ts

/**
 * Validates that required fields are present in the request body.
 * Returns an array of missing fields or an empty array if all required fields are present.
 *
 * @param {Object} body - The request body to check.
 * @param {Array<string>} requiredFields - An array of required field names.
 * @returns {Array<string>} - An array of missing field names.
 */
function validateRequestBody(body: any, requiredFields: string[]): string[] {
  const missingFields = requiredFields.filter(field => !(field in body));
  return missingFields;
}

export default validateRequestBody;

const { codes } = require('./statusCodes');

/**
 * Helps in handling the json response
 * @param {any} data The data to be returned
 * @param {number} statusCode The status code for the response
 * @returns Formatted json response
 */
const handleResponse = (data, statusCode) => {
  return {
    code: statusCode,
    message: codes[statusCode],
    data: data,
  };
};

module.exports = {
  handleResponse,
};

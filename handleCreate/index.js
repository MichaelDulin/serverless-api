const dynamoose = require("dynamoose");

const countrySchema = new dynamoose.Schema({
  name: String,
  population: Number,
  language: String,
  id: String,
});

const CountryModel = dynamoose.model("Country", countrySchema);

exports.handler = async (event) => {
  console.log("CREATE COUNTRY EVENT OBJECT: ", event);

  const response = {
    statusCode: 500,
    body: JSON.stringify('Create Country Error'),
  };

  if (event.body) {
    response.body = JSON.stringify('Adding Country record');
  } else {
    response.body = JSON.stringify('Missing request body');
  }
  return response;
};

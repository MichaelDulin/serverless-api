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

  /* FOR READ
  let parameters = event.pathParameters;
  let responseBody = null;

  if (parameters) {
    console.log("REQUEST PATH PARAMS:", parameters);
    responseBody = await PokemonModel.scan("id").eq(parameters["id"]).exec();
  } else {
    responseBody = await PokemonModel.scan().exec();
  }
  console.log("COUNTRY FROM OUR TABLE: ", responseBody);
  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };
*/

  return response;
};

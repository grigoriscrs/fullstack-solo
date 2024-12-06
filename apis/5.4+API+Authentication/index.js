import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "gregorian13";
const yourPassword = "erdas";
const yourAPIKey = "3ce7837f-e35b-4cd1-93e2-251ceb61929f";
const yourBearerToken = "6e379ebf-90fb-4022-81c1-45edb8b649f0";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.redirect("/");
  }
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.redirect("/");
  }
});

app.get("/apiKey", async (req, res) => {

  try {
    const result = await axios.get(API_URL + `/filter?score=5&apiKey=${yourAPIKey}`);
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.redirect("/");
  }
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

const config = {
  headers: {
    Authorization: `Bearer ${yourBearerToken}`,
  },
};

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  try {
    const result = await axios.get(API_URL + "/secrets/42", config);
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

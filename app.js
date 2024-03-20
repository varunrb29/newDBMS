const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const usermodel = require("./model/usermodel");

const register_ROUTE = require("./routes/register_ROUTE");

const app = express();

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(register_ROUTE);


// USER-REDIRECTING-ROUTES

// /PRAYAAS/REGISTER FOR THE INDIVIDUAL
app.get("/prayaas/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "register.html"));
});

// /PRAYAAS/REGISTERER FOR THE ORGANISATION
app.get("/prayaas/registerOrg", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "registerOrg.html"));
});

// PRAYAAS/LOGIN FOR THE BOTH INDIVIDUAL AND ORGANISATION
app.get("/prayaas/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

///PRAYAAS/HOME FOR THE WEBSITE HOMEPAGE
app.get("/prayaas/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ngo.html"));
});

// /PRAYAAS/OTPAUTH FOR THE INDIVIDUAL
app.get("/prayaas/otpauth", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "otp_window.html"));
});

// PRAYAAS/OTPAUTH FOR THE ORGANISATION
app.get("/prayaas/otpauthOrg", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "otp_window _org.html"));
});

const connection = async () => {
  try {
    await app.listen(8000, () =>
      console.log("Sever is listening on Sever : 8000")
    );
  } catch (error) {
    console.log(error);
  }
}
connection();
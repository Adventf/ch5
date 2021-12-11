const express = require('express');
const router = express.Router();
let signup = require('./db/signup.json');
const users = require("./db/login.json");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//menggunakan ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/signup', (req, res) => {
    res.render('signup');
  })

app.get('/login', (req, res) => {
    res.render('login');
  })

app.get('/play', (req, res) => {
    res.render('play');
  })

app.get('/api/signup', (req, res) => {
  res.status(200).json(signup);
});

app.get('/api/signup/:id', (req, res) => {
  const akun = signup.find(i => i.id === + req.params.id);
  res.status(200).json(akun);
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.get("/iniError", (req, res) => {
  iniError;
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
      status: "fail",
      errors: err.message
  });
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  let gender = req.body.gender;

  const user = users.find(
    (item) =>
      item.username === username &&
      item.password === password &&
      item.gender === gender
  );
  if (user) {
    res.status(200).redirect("/play");
  } 
});

app.use((req, res) => {
  res.status(404).json({
  status: 'fail',
  errors: 'Are you lost?'
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
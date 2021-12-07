const express = require('express');
const router = express.Router();
let login = require('./db/login.json');
const app = express();
const port = 3000;
const users =[];

// app.use(router);
// app.use(express.json());
// app.use(express.urlencoded({ extended: false}));


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

app.get('/api/login', (req, res) => {
  res.status(200).json(login);
});

app.get('/api/login/:id', (req, res) => {
  const akun = login.find(i => i.id === + req.params.id);
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

app.get("/jumlah", (req, res) => {
  res.send(`Jumlah user ${users.length}`);
})

app.get("/login", (req, res) => {
  res.render("login")
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  users.push({ email, password });
  res.redirect('/jumlah');
})

app.use((req, res) => {
  res.status(404).json({
  status: 'fail',
  errors: 'Are you lost?'
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
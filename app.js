const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const nav = [
    { link: '/books', name: 'Books' },
    { link: '/authors', name: 'Authors' },
    { link: '/', name: 'Logout' }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRouter')(nav);
const loginRouter = require('./src/routes/loginRouter')(nav);
const homeRouter = require('./src/routes/homeRouter')(nav);

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/home', homeRouter);


app.get('/', function (req, res) {
    res.render("index", {
        nav: [
            { link: '/login', name: 'Login/Signup' }
        ],
        title: 'Library'
    });
});

app.listen(port, () => {
    console.log("Server ready at" + port)
});
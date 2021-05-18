const express = require('express');
const app = express();
const session = require('express-session');
const port = process.env.PORT || 3000;

const sessTime= 2*60*60*1000;
const {
    PORT=8080,
    NODE_ENV = 'development',
    SESS_NAME='sid',
    SESS_SECRET= 'ssh!quiet,it\'asecret!',
    SESS_LIFETIME= sessTime
} = process.env;

const IN_PROD = NODE_ENV ==='production';

const nav = [
    { link: '/books', name: 'Books' },
    { link: '/authors', name: 'Authors' },
    { link: '/admin', name: 'Add Book' },
    { link: '/', name: 'Logout' }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRouter')(nav);
const loginRouter = require('./src/routes/loginRouter')(nav);
const homeRouter = require('./src/routes/homeRouter')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie:{
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}));

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/home', homeRouter);
app.use('/admin', adminRouter);


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
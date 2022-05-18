const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');


const req = require('express/lib/request');
const { render } = require('express/lib/response');


// express app
const app = express();

// connect to mongodb
const dbURI = "mongodb://mongo:27017/node";
mongoose.Promise = global.Promise;
mongoose.connect(dbURI,{ useNewUrlParser: true })
.then((result)=> app.listen(3000)) 
.catch((err)=>console.log(err))

//register view engine
// in /views
app.set('view engine','ejs')

//listening for request
// app.listen(3000);

//Middleware & static file
app.use(express.static('./public')); //add static file,which can be accessable in /
app.use(express.urlencoded({extended:true})); //can use object in request
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title: 'new blog2',
//         snippet: 'about my new blog2',
//         body: 'more about my new blog2'
//     });

//     blog.save()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// })

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })

// app.get('/single-blog',(req,res)=>{
//     Blog.findById('62713b9c1d824a2d68104b54')
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })
// app.use((req,res, next)=>{
//     console.log('new request made: ');
//     console.log('host: ',req.hostname);
//     console.log('path: ',req.path);
//     console.log('method: ', req.method);
//     next();
// });


app.get('/',(req,res)=>{
    // const blogs = [
    //     {title: 'blog1', snippet: 'This is blog1 content'},
    //     {title: 'blog2', snippet: 'This is blog2 content'},
    //     {title: 'blog3', snippet: 'This is blog3 content'},
    // ];
    // res.render('index',{title: 'Home', blogs });
    res.redirect('/blogs')
});


app.get('/about',(req,res)=>{
    res.render('about',{title: 'About' })
});

// //redirects
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// });
//blog routes
app.use('/blogs',blogRoutes);

//404 page should be put on the final buttom
// If req url doesn't match above
app.use((req,res)=>{
    res.status(404).render('404',{title: '404' });
});


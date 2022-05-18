# Node.js Learning Note

## Basic node.js 
- see server.js
```
node server.js
//or
nodemon server.js
```
## Express.js
- see app.js
```
nodemon app.js
```

## ejs
- normal use <% normal javascript %>
- output dynamic varables <%= $Var %> 
- include ejs use <%- include('$path') %> 用=會有sring的特殊符號影響

## Middleware
- Anything between request and response

## Request Type
- GET: requests to get resource
- POST: requests to create new data(e.g. a new blog)
- DELETE: requests to delete data(e.g. delete a blog)
- PUT: requests to update data(e.g. update a blog)

- localhost:3000/blogs             GET
- localhost:3000/blogs/create      GET
- localhost:3000/blogs             POST
- localhost:3000/blogs/:id         GET
- localhost:3000/blogs/:id         DELETE 

## MVC Basics
- Stands for Model,View,Controller
- MVC is a way of structuring our code & files
- Keeps code more modular,reusable & easier to read

## Install
- Nodejs 14
- nodemon 
- express
- ejs  for dynamic html context (view engine)
- morgan (middleware to show some connect information)
- mongoose (East to query mongodb)
- docker
```
docker container run -it -p 3000:3000 -d --name node14 -v C:\Users\wuyoushin\Desktop\VideoHome:/videoHome node:14
```
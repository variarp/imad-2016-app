var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':{
    article:"Article-One.Pradeep Mohan",
    title:"Article One",
    date:"29th September 2016",
    content:`
            <p>
                This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.
            </p>
            <p>
                This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.
            </p>
            <p>
                This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.
            </p>
            <p>
                This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.This is a paragraph with some meaningless texts.
            </p>`
},
'article-two':{
    article:"Article-Two.Pradeep Mohan",
    title:"Article Two",
    date:"30th September 2016",
    content:`
            <p>
                This is a paragraph with some meaningless texts.This is my second Article.
            </p>
            <p>
                This is a paragraph with some meaningless texts.This is my second Article.
            </p>
            <p>
                This is a paragraph with some meaningless texts.This is my second Article.
            </p>
            <p>
                This is a paragraph with some meaningless texts.This is my second Article.
            </p>`    
    
},
'article-three':{
    article:"Article-Three.Pradeep Mohan",
    title:"Article Three",
    date:"1st October 2016",
    content:`
            <p>
                This is a paragraph with some meaningless texts.This is my Third Article.
            </p>
            <p>
                This is a paragraph with some meaningless texts.This is my Third Article.
            </p>`    
}
};

function createTemplate(data){
    
    var article=data.article;
    var title=data.title;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=
        `<head>
            <title>
                ${article}
            </title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
    
        <div class="container" id='main-text'>
            <div>
                <a href="/">Home</a>
            </div>
            <h3>
                ${title}
            </h3>
            <hr/>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </html>`
    
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

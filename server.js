var express = require('express');
var app = express();
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('loginData',['loginData','inboxData']);
var bodyParser = require('body-parser');

// app.get('/',function(req,res){
// 	console.log("Hai there");
// 	res.send("yoyo");
// });
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
var mongoose = require('mongoose');
var schema = require('./public/models/signupdata.js');
mongoose.connect('mongodb://localhost:27017/loginData');
var User = mongoose.model('User', schema, 'loginData');



app.post('/logindata',function(req,res){
    var user = req.body;
    db.loginData.findOne(
    {
        email: user.email,
        password: user.password
    }, function(err, docs) 
    {
        if (err) 
        {
            console.log("error");
            return next(err);
        }
        res.json(docs);
    });
});



//posting the signup data into database
app.post('/signupData', function(req, res) 
{
    var custData = req.body;
    var user = new User({
    firstname: custData.fname,
    lastname: custData.lname,
    about: custData.about,
    email: custData.email,
    password : custData.password
    });
    user.save(function(error) 
    {
        if (error) 
        {
            console.log(error);
            process.exit(1);
        }

    });    
        res.json(user);
});


app.get('/emailVerification', function(req, res, next) 
{
    db.loginData.find(
        function(err, doc) {
            if (err) {
                console.log("err");
                return next();
            }
            if (doc) 
            {   
                
              res.json(doc);
            }
        });

});


app.post('/sendmsg',function(req,res,next){
    var emailCheck = req.body.emailTo;
    db.loginData.findOne(
    {
        email: req.body.emailTo
    }, function(err, docs) 
    {
        if (err) 
        {
            console.log("error");
            return next(err);
        }
        if(docs==null)
        {   

            res.json("noemail");
            return next(err);
        }
        else
        {
            db.inboxData.insert(req.body,function(err,doc)
            {
                res.json(doc);
            });
        }
        
    });

});

app.post('/welcomemsg', function(req, res) 
{
    db.inboxData.insert(req.body,function(err,doc){
        res.json(doc);
    });
    


});

app.get('/myInbox/:myEmail', function(req, res) 
{
    var id = req.params.myEmail;
    db.inboxData.find(
    {
        emailTo : id
    }, function(err, docs) 
    {
        res.json(docs);
    });
});

app.get('/mysentBox/:myEmails', function(req, res) 
{
    var id = req.params.myEmails;
    db.inboxData.find(
    {
        senderEmail : id
    }, function(err, docs) 
    {
        res.json(docs);
    });
});

app.get('/myMessage/:id', function(req, res) 
{
    var id = req.params.id;
    db.inboxData.findOne(
    {
        _id: mongojs.ObjectId(id)
    }, function(err, docs) 
    {
        if (err) 
        {
            console.log("error");
            return next(err);
        }
        res.json(docs);    
    });
});

app.get('/editedData/:id',function(req,res)
{
    var whitelist= ['count'];
    var edit= req.params.id;
    db.inboxData.findAndModify({
        query: { _id: mongojs.ObjectId(edit) },
        update: { $inc: { count: 1 } }
    }, function(err, docs) 
    {
        if (err) 
        {
            console.log("error");
            return next(err);
        }
        res.json(docs);    
    });
    
});

app.get('/mysentMessage/:id', function(req, res) 
{
    var id = req.params.id;
    db.inboxData.findOne(
    {
        _id: mongojs.ObjectId(id)
    }, function(err, docs) 
    {
        if (err) 
        {
            console.log("error");
            return next(err);
        }
        res.json(docs);    
    });
});

app.post('/sendForwardEmail',function(req,res,next){
    console.log("inside sforward server");
    console.log(req.body);
    var emailCheck = req.body.emailTo;
    db.loginData.findOne(
    {
        email: req.body.emailTo
    }, function(err, docs) 
    {
        if (err) 
        {
            console.log("error");
            return next(err);
        }
        if(docs==null)
        {   

            res.json("noemail");
            return next(err);
        }
        else
        {
            console.log("unique");
            db.inboxData.insert(req.body,function(err,doc)
            {   console.log(doc);
                res.json(doc);
            });
        }
        
    });
});


console.log("server running");
app.listen(3000);

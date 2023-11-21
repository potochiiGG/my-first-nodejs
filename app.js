const express =require('express');

const debug = require('debug')('app');
const morgan = require('morgan');

const path = require('path');

const productRouter = express.Router();

const app= express();
const PORT = process.env.PORT || 4000;

//app.use(express.static(path.join(__dirname,"/public/")));

//app.set("views","./src/views");
//app.set("view emgine","ejs");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs")

productRouter.route("/").get((req, res)=> {
  
  res.send('Hello sawasdekaaaaa');

});

productRouter.route("/2").get((req, res)=> {
  
  res.send('Hello sawasdekaaaaa22222');

});



app.use("/products", productRouter)

app.get("/",(req,res) =>{ 


//res.render('index',{username:'potochii'});
//res.send('Hello sawasdekaaaaa');
res.render('index',{username:'potochii',customer:["eiei","koko","riri"]});




})




app.listen(PORT,() =>{

    import('chalk').then(module => {
    const chalk = module.default || module;
    
    
    
    //console.log("you coming start on port : "+chalk.blue(port));

    debug("you coming start on port : "+chalk.blue(PORT));

    //console.log(chalk.red.bold('This is a bold red text.'));
  })
  .catch(error => {
    console.error('Error importing chalk:', error);
  });



  
})
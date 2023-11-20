const express =require('express');

const debug = require('debug')('app');
const morgan = require('morgan');

const path = require('path');

const app= express();
const port = 3000;

//app.use(express.static(path.join(__dirname,"/public/")));

//app.set("views","./src/views");
//app.set("view emgine","ejs");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/",(req,res) =>{ 



//res.send('Hello sawasdekaaaaa');
res.render('index',{username:'potochii',customer:["eiei","koko","riri"]});

})




app.listen(port,() =>{

    import('chalk').then(module => {
    const chalk = module.default || module;
    
    
    
    //console.log("you coming start on port : "+chalk.blue(port));

    debug("you coming start on port : "+chalk.blue(port));

    //console.log(chalk.red.bold('This is a bold red text.'));
  })
  .catch(error => {
    console.error('Error importing chalk:', error);
  });



  
})
const express =require('express');

const debug = require('debug')('app');
const morgan = require('morgan');

const app= express();
const port = 3000;

app.use(morgan('combined'));


app.get("/",(req,res) =>{ 



res.send('Hello sawasdekaaaaa');


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
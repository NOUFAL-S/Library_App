const express = require("express");
const authorsRouter = express.Router();




function router(nav){
    var authors=[
        {
            title:`“If you're happy in a dream, does that count?”`,
            link:"https://en.wikipedia.org/wiki/Arundhati_Roy",
            img:"Arundhati_Roy.jpg",
            name:"Arundhati Roy",
        },
        {
            title:`"If I were asked for a one-sentence sound bite on religion, I would say I was against it.`,
            link:"https://en.wikipedia.org/wiki/Salman_Rushdie",
            img:"Salman-Rushdie.jpg",
            name:"Salman Rushdie",
        },
        {
            title:`“Jealousy is a rather enjoyable emotion to watch.”`,
            link:"https://en.wikipedia.org/wiki/Chetan_Bhagat",
            img:"Chetan_Bhagat.jpg",
            name:"Chetan Bhagat"
        },
       
    ]
    
    
    
    
    
     authorsRouter.get("/",(req,res)=>{
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
            
        });
    
     });
    
    authorsRouter.get('/:i',function(req,res){
        const i =req.params.i;
        res.render('book',
        {
            nav,            title:'Library',
            authors : authors[i]
        });
    });
    
  return authorsRouter;  
}




module.exports = router;

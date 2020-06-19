const express = require("express");
const booksRouter = express.Router();

function router(nav){
   
    
    
    
    
    
     booksRouter.get("/",(req,res)=>{
        res.render("books",
        {
            nav,
            title:'Library',
            books
            
        });
    
     });
    
    booksRouter.get('/:i',function(req,res){
        const i =req.params.i;
        res.render('book',
        {
            nav,            title:'Library',
            book : books[i]
        });
    });
    
  return booksRouter;  
}




module.exports = router;


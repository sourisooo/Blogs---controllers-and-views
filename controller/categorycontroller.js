


const categorycontroller ={


    rendercategory(req,res,next){

        const {category} = req.params;

  

        res.render('category', {category});



    },




 };

 module.exports = categorycontroller;
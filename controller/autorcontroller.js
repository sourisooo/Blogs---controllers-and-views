


const autorcontroller ={


    renderautor(req,res,next){

        const {autor} = req.params;

  

        res.render('autor', {autor});



    },




 };

 module.exports = autorcontroller;
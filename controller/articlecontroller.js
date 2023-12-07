


const articlecontroller ={


    renderarticle(req,res,next){

        const {article} = req.params;

        console.log(article-1);

        res.render('article', {article:article-1});



    },




 };

 module.exports = articlecontroller;

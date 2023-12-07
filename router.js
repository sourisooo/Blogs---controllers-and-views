

const { Router } = require('express');
const indexcontroller = require('./controller/indexcontroller');
const articlecontroller = require('./controller/articlecontroller');
const categorycontroller = require('./controller/categorycontroller');
const autorcontroller = require('./controller/autorcontroller');


const router = Router();


router.get('/', indexcontroller.renderhome);

router.get('/article/:article', articlecontroller.renderarticle);

router.get('/category/:category', categorycontroller.rendercategory);

router.get('/autor/:autor', autorcontroller.renderautor);


module.exports = router;

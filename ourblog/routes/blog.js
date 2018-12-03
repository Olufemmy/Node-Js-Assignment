var express = require('express');
var router = express.Router();

let blog = []
let id = 1

/* GET users listing. */
router.get('/read/:id', function(req, res, next) {
	let blogId = req.params.id;
	let output = blog.find(item => item.id == blogId);
  	res.send(output);
});


router.post('/create', function(req, res, next) {
	let body = req.body
	body.id = id
	id = id + 1
	blog.push(body);
	res.send(blog);  	
});


// router.put('/update/:id', function(req, res, next) {
// 	let blogId = req.params.id;
// 	let blogItem = blog.find(item =>item.id == blogId)
// 	blogItem = req.body
// 	res.send(blog);
// }); 

router.put('/update/:id', function(req, res, next) {
	let blogId = req.params.id;
	blog[blogId - 1] = req.body;
	res.send(blog);
});

router.delete('/delete/:id', function(req, res, next) {
	let blogId = req.params.id;
	let blogItem = blog.find(item =>item.id == blogId)
	let index = blog.indexOf(blogItem);
	blog.splice(index, 1);
	res.send(blog);
});

router.get('/all', function(req, res, next) {

  res.send(blog);
});

module.exports = router;


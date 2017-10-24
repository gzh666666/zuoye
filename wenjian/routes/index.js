var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

    var data=fs.readFileSync("public/wenjian.txt","utf-8");
    data=data.split(":");
    data=data[1];
    data++;
    fs.writeFile("public/wenjian.txt","打开页面的次数为:"+data,function(err){
        res.render("index",{ming:data})
    })
});

module.exports = router;



















var express = require("express");
var app = express.Router();
const userController = require("../controller/user");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var multer = require('multer');

const storage = multer.diskStorage({
   destination: function(req, file, cb){
       cb(null, './uploads');
   },
   filename: function(req, file, cb){
       cb(null, new Date().getTime()+'-' + file.originalname)
   }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
      cb(null, true);
  } else{
      cb(null, false);
  }
}
var upload = multer({
  storage,
  limits: {
      fileSize: 1024 * 1024 * 5,
      fileFilter   
  } 
})

app.post("/submit", upload.single('project'), userController.form);

module.exports = app;

var express = require("express");
var router = express.Router();
const { userModel } = require("../model/userModel");
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

module.exports = {
  /**
   * userController.form()
   */
  form: async (req, res) => {
    console.log("req.body",req.body)
    if (!req.body) {
      return res.status(200).json({
        status: false,
      });
    } else {
      userModel.addForm(req, (results) => {
        if (results.affectedRows > 0) {
          return res.status(200).json({
            status: true,
            response: "Form submitted successfully",
          });
        } else {
          return res.status(200).json({
            status: false,
            message: "Form not submit",
          });
        }
      });
    }
  },
};

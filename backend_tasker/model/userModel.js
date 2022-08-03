const { connection } = require("../config/conn");

module.exports.userModel = {
  addForm: function (req, res) {
    userData =
      "INSERT INTO form.user (due_date,project_date_filter,created_by,client,project,task,status,assignee,send_email,task_type,priority, notes,email_notes) VALUES ('" +
      (req.body.due_date + "','" + req.body.project_date_filter  + "','" + req.body.created_by + "','" + req.body.client+ "','" + req.body.project+ "','" + req.body.task+ "','" + req.body.status+ "','" + req.body.assignee+ "','" + req.body.send_email+ "','" + req.body.task_type+ "','" + req.body.priority+ "','" + req.body.notes+ "','" + req.body.email_notes) +
      "')";

    var query = connection.query(userData, (err, result) => {
      if (err) {
        console.log("err", err);
        res(err, null);
      } else {
        res(result, null);
      }
    });
  },
};

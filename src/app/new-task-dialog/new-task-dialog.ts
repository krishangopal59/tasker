import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'new-task-dialog',
  templateUrl: 'new-task-dialog.html',
})
export class NewTaskDialog {
  newTaskForm!: FormGroup;
  minDate: Date = new Date();
  client = client;
  status = status;
  assignee = assignee;
  taskType = taskType;
  priority = priority;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private _snackBar: MatSnackBar) {
    this.minDate = new Date();
    this.newTaskForm = this.formBuilder.group({
      due_date: ["", [Validators.required]],
      project_date_filter: [""],
      created_by: ["", [Validators.required]],
      client: ["", [Validators.required]],
      project: ["", [Validators.required]],
      task: ["", [Validators.required]],
      status: ["", [Validators.required]],
      assignee: ["", [Validators.required]],
      send_email: [""],
      task_type: ["", [Validators.required]],
      priority: ["1", [Validators.required]],
      notes: ["", [Validators.required]],
      email_notes : ["", [Validators.required]]
    });
  }
  onSubmitForm () {
    console.log('data', this.newTaskForm, this.newTaskForm.valid);
    if (this.newTaskForm.valid) {
      const data = this.newTaskForm.value;
      this.http.post(environment.apiPath, data).subscribe((res: any) => {
        if (res && res.status) {
          // do some action on save task
        }
        this._snackBar.open(res.response, '', {duration: 1500});
      });
    }
  }
}
const client = [
  {display: 'John', uid: '1' },
  {display: 'Stark', uid: '2' },
  {display: 'Tony', uid: '3' },
  {display: 'Thor', uid: '4' },
  {display: 'Hulk', uid: '5' },
]
const status = [
  {display: 'Active', value: '1' },
  {display: 'Inactive', value: '2' },
  {display: 'Deleted', value: '3' },
]
const assignee = [
  {display: 'John', uid: '1' },
  {display: 'Stark', uid: '2' },
  {display: 'Tony', uid: '3' },
  {display: 'Thor', uid: '4' },
  {display: 'Hulk', uid: '5' },
]
const taskType = [
  {display: 'Advertising', id: '1' },
  {display: 'Development', id: '2' },
  {display: 'Marketing Content', id: '3' },
  {display: 'Sales', id: '4' }
]

const priority = [
  {display: 'Important', id: '1' },
  {display: 'High', id: '2' },
  {display: 'Medium', id: '3' },
  {display: 'Low', id: '4' }
]

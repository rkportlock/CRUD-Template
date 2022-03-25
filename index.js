let app = new function() {
  this.el = document.getElementById('workouts');

  this.workouts = [];

  
  //read
  this.FetchAll = function() {
    let data = '';

    if (this.workouts.length > 0) {
      for (i = 0; i < this.workouts.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.workouts[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.workouts.length);
    return this.el.innerHTML = data;
  };
  //create
  this.Add = function () {
    el = document.getElementById('add-workout');
    // Get the value
    var workout = el.value;

    if (workout) {
      // Add the new value
      this.workouts.push(workout.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  //update
  this.Edit = function (item) {
    var el = document.getElementById('edit-workout');
    // Display value in the field
    el.value = this.workouts[item];
    // Display fields
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      // Get value
      var workout = el.value;

      if (workout) {
        // Edit value
        self.workouts.splice(item, 1, workout.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  //delete
  this.Delete = function (item) {
    // Delete the current row
    this.workouts.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'Workouts';

    if (data) {
        if(data == 1){
            name = 'Workout'
        }
      el.innerHTML = data + ' ' + name;
    } 
    else {
      el.innerHTML = 'No ' + name;
    }
  };
  
}
//call updates the list
app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}

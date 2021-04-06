var app = new function() {
    this.el= document.getElementById('workouts');
    this.workouts = []

    this.FetchAll = function() {
        var data= '';
        if(this.workouts.length>0) {
            for(i=0 ; i <this.workouts.length; i++) {
                data+='<tr>';
                data+='<td>' + (i + 1) + '. '+ this.workouts[i]+ '</td>';
                data+='<td><button onclick="app.Edit('+i+')" class="btn btn-warning"> Edit </button></td>';
                data+='<td><button onclick="app.Delete('+i+')" class="btn btn-danger"> Delete </button></td>';
                data+='</tr>'
            }
        }
        this.Count(this.workouts.length);
        return this.el.innerHTML = data;
    };

    this.Add = function() {
        el= document.getElementById('add-done');
        var workouts = el.value;
        if(workouts) {
            this.workouts.push(workouts.trim());
            el.value='';
            this.FetchAll();
            el.value='';
            this.FetchAll();
        }
    };

    this.Edit = function(item){
        el = document.getElementById('edit-todo');
        el.value = this.workouts[item];
        document.getElementById('edit-box').style.display = 'block';
        self = this;
        document.getElementById('save-edit').onsubmit = function () {
            var workouts = el.value;
            if(workouts) {
                self.workouts.splice(item, 1, task.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };

    this.Delete = function (item){
        this.workouts.splice(item,1)
        this.FetchAll();
    };

    this.Count = function (data){
        var el = document.getElementById('counter');
        var name = 'Workouts';
        if(data){
            if(data == 1) {
                name = 'Task';
            }
            el.innerHTML = data+' '+ name;
        } else {
            el.innerHTML = "No "+ name;
        }
    };

}

app.FetchAll();

function CloseInput() {
    document.getElementById('edit-box'). style.display = 'none';
}
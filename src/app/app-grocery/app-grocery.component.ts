import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../assets/bootstrap-3.4.1-dist/css/bootstrap.min.css',
  
]
 
})
export class AppGroceryComponent {
 tasks: any[] =[];
 task = {
  name: '',
  id: 0
 };
  onClick(){
    if(this.task.id == 0){
      this.tasks.push({id: (new Date()).getTime(),name: this.task.name, strike : false})};
    
    // if(this.task.id ==0){
    //   this.tasks.push({id: (new Date()).getTime(),name: this.task.name});
    // }
    
    this.task = {
     name: '',
      id: 0
    };
  }

  onEdit(item:any) {
   
    this.task = item;
   console.log(item)
  }

  onDelete(item : any){
    for(var i = 0;i < this.tasks.length; i++){
      if(item.id == this.tasks[i].id){
        this.tasks.splice(i,1);
        break;

  }

  
}
}


onStrike(item :any ){
  for(var i = 0;i < this.tasks.length; i++){
    if(item.id == this.tasks[i].id){
      if(this.tasks[i].strike){
        this.tasks[i].strike = false;
      }
      else{
        this.tasks[i].strike = true;
      }
      break;
    }
  }
}
}
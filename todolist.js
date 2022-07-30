let input = prompt("What would you like to do?");

const todos = ['assigment 1', 'assignment 2', 'assignment 3'];

while (input !== 'exit' && input !== 'q'){
    if(input === 'list'){
        console.log('************')
        
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
            
        }
        console.log('************')
    }
    else if(input === 'new'){
        const newTodo = prompt('OKAY.....What is the new you like add to do?');
        todos.push(newTodo);
        console.log(`${newTodo} is added to list sucessfully.`);
    }
    else if(input === 'delete'){
        const deleteIndex = parseInt(prompt('OKAY.....at Which index you want to delete from to do?'));

        if(!Number.isNaN(deleteIndex)){
            const deletedItem = todos.splice(deleteIndex, 1);
            console.log(`${deletedItem} is deleted`);
        }
        else{
            console.log('Invalid index');
        }
        
    }
    input = prompt("What would you like to do?");
}

console.log("OK YOU ARE EXIT THE APP!!!")



function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<todos.length; y++)
   {
     e += "ToDoList Item No. " + y + " => " + todos[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}


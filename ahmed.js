
let btm=document.getElementById("btm");
let table=document.getElementById("table");
let task=document.getElementById("task");
let date=document.getElementById("date");
btm.addEventListener("click",my_fun);

function my_fun()
{
    let task_name=task.value;
    let new_date=date.value;
    if(task.value=="" || date.value=="")
        {
            alert("enter task name and date");
        }else
        {
            let element=document.createElement("tr");
            let element2=document.createElement("td");
            element2.innerText=task_name;
            element.appendChild(element2);
            table.appendChild(element);
            let element3=document.createElement("td");
            element3.innerText=new_date;
            element.appendChild(element3);
            table.appendChild(element);
            task.value="";
            date.value="";
        }
        
    

}

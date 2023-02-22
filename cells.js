
firstDay = new Date(currentyear, currentmonth, 1).getDay();
lastdate = new Date(currentyear, currentmonth,0).getDate();

function calgridgen() {

    let cols = 7;
    let rows = 6;

for(let i = 0;i<rows;i++){
    let createdivpar = document.createElement("div");
    createdivpar.setAttribute("class","weeknumber");
    createdivpar.setAttribute("data-weekid",i);

    for(let j = 0;j<cols;j++){
        let createdivchild = document.createElement("div");
        createdivchild.setAttribute("class","caldate");
        // createdivchild.setAttribute("cell-id",i);
        createdivchild.innerText = i;
        // date = date+1;
        createdivpar.appendChild(createdivchild);
    }

    document.querySelector(".cell-grid").appendChild(createdivpar);
}

}



calgridgen();

caldatetext(firstDay,lastdate);

function caldatetext(firstDay,lastdate){

    let caldateselector = document.querySelectorAll(".caldate");

    for (let i = 0; i < firstDay ;i++) {
        caldateselector[i].innerText = " ";
    }

    for (let i = firstDay; i < lastdate+firstDay ;i++) {
        caldateselector[i].innerText = i-firstDay+1;
    }


    
    for (let i = lastdate+firstDay; i < 35 ;i++) {
        caldateselector[i].innerText = " ";
    }

}


function finalmake(currentmonth,currentyear,firstDay,lastdate){

    caldatetext(firstDay,lastdate);
}


// finalmake();

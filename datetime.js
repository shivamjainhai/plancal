let dateobj = new Date();

let currentdate = dateobj.getDate();
let currentmonth = dateobj.getMonth()+1;
let currentyear = dateobj.getFullYear();



// currentdatestringgenerator(currentdate,currentmonth,currentyear);

function currentdatestringgenerator(currentdate,currentmonth,currentyear) {
    let currentdatestring = ''.concat(currentdate," ",monthnameconverter(currentmonth)," ",currentyear);
    return currentdatestring;
}


function monthnameconverter(month) {
    switch (month) {
        case 1: return "January";
                break;
        
        case 2: return "February";
                break;
        
        case 3: return "March";
                break;

        case 4: return "April";
                break;

        case 5: return "May";
                break;

        case 6: return "June";
                break;

        case 7: return "July";
                 break;
        
        case 8: return "August";
                break;

        case 9: return "September";
                break;
        
        case 10: return "October";
                break;
            
        case 11: return "November";
                 break;

        case 12: return "December";
                 break;
    }
}

function current_date_bar_update(){
    
    let currentdatestring = currentdatestringgenerator(currentdate,currentmonth,currentyear);
    document.querySelector(".current-date-bar").innerHTML = currentdatestring;
}



// current_date_bar_update();







// RIGHT SECTION things


function month_holder_update(currentmonth){
    let monthtext = monthnameconverter(currentmonth);
    document.querySelector(".month-holder").innerHTML = monthtext;
}

let leftarrow = document.querySelector(".left-arrow");
let rightarrow = document.querySelector(".right-arrow");


let firstDay = new Date(currentyear, currentmonth, 1).getDay();
let lastdate = new Date(currentyear, currentmonth,0).getDate();


leftarrow.addEventListener("click",function(){
    if(currentmonth == 1) currentmonth = 12;
    else currentmonth--;
    month_holder_update(currentmonth);

    firstDay = new Date(currentyear, currentmonth, 1).getDay();
    lastdate = new Date(currentyear, currentmonth,0).getDate();

    caldatetext(firstDay,lastdate);
});

rightarrow.addEventListener("click",function(){
    if(currentmonth == 12) currentmonth = 1;
    else currentmonth++;
    
    firstDay = new Date(currentyear, currentmonth-1, 1).getDay();
    lastdate = new Date(currentyear, currentmonth,0).getDate();
    
    

    month_holder_update(currentmonth);
    caldatetext(firstDay,lastdate);
});


current_date_bar_update();
month_holder_update(currentmonth);


let weekarr = ["S","M","T","W","T","F","S"] ;
let weekholder = document.querySelector(".week-bar");
function weekbarmaker(){
    for(let i = 0; i < 7; i++){
        let daybar = document.createElement("div");
        daybar.setAttribute("class","day-bar-style");
        daybar.innerHTML = weekarr[i];
        weekholder.appendChild(daybar);
    }
}

weekbarmaker();


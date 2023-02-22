# left sec

## CURRENT-DATE-BAR

-Will give you a glance at today's date


- shared variables : **`currentdate,currentmonth,currentyear`**

- We will be implementing this by using `innerText` function and placing it with "`currentdatestring`" , which
will be generated using **`currentdatestringgenerator()`** function 

- **currentdatestring** format will be `currentdate:currentmonth:currentyear`

## TASK-HOLDER-VIEW

- Holds all the task in small bite sized blocks to 
help you go through all the tasks of the day in a glance

- Task holder view includes mini task holder named as `taskstrip`

> ### **taskstrip**

- taskstrip shows task title in glance present in task holder view

- Will be **clickable**

- OnClick -> **`showTaskReviseModal()`** will be called


### showTaskReviseModal() 

- Overlay modal for seeing task info in one shot , the **overlay** will take place in `calgrid` view

- **shared variables**: **`task.title`, `task.priority` , `task.description` , `task.timer`**

- 









# Right section

## month-bar

- Shows month and 2 arrows which helps navigating previous month and next month

- **shared variables** : 

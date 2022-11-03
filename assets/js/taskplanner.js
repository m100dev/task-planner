
$(document).ready(function(){
    
    // Variable to store user input
    let taskVal = "";

    // RegEXP that will test the patter of 2 or more whitespace chars
    let whiteSpaces = /\s{2,}/;

    $('#addTaskBtn').click(addTask);
    $('#clearTaskBtn').click(clearTaskList);

    function addTask(){
        taskVal = $('#userInput').val();
        
        // Checks wether the input is valid
        if(taskVal == '' || whiteSpaces.test(taskVal) || taskVal.indexOf(" ") == 0) {
            alert('Please enter a valid task item');
        } else {

            //Creates the list item and buttons to be wrapped in an li tag
            let listItemOutput = 
            `<li>${taskVal} 
                <div id="listButtons">
                    <button class="completeTaskBtn">DONE</button>
                    <button class="removeTaskBtn">X</button>
                </div>
            </li>`;

            //Append output to the list
            $("#taskList").append(listItemOutput);

            //Reset User Input
            $('#userInput').val('');

            // After adding a task, if the clear btn is disabled, remove the disabled attribute
            if($('#clearTaskBtn').is(":disabled") === true){
                $('#clearTaskBtn').removeAttr("disabled");
            };

            //Style the list items in with zebra stripe pattern
            $("li:odd").css("background-color","#d1d7db");
            $("li:even").css("background-color","#e4ebf0");

        };
        
        //Adds the functionality for the done and x button
        $('.completeTaskBtn').click(completeTask);
        $('.removeTaskBtn').click(removeTask);
    };

    function removeTask(){

        //Removes parent elements and all children
        this.parentElement.parentElement.remove(); 

        //resets the available list items in with zebra stripe pattern
        $("li:odd").css("background-color","#d1d7db");
        $("li:even").css("background-color","#e4ebf0");
    };

    // cross out the task description and change the text color to green
    function completeTask(){
        this.parentElement.parentElement.style.transition = ".5s";
        this.parentElement.parentElement.style.color = "#27ae60";
        this.parentElement.parentElement.style.textDecoration = "line-through";
    };

    //reset the innerHTML of the ordered list
    function clearTaskList(){
        $('#taskList').html('');
    }
    
});
$(document).ready(function() {
    // Event handlers
    $('#addItem').on('click', addItem);
    $('#todos').on('change', '.completeItem', completeItem);
    $('#todos').on('click', '.todoText', startEditing);
    $('#todos').on('click', '.saveItem', stopEditing);
    $('#newTodo').on('keypress', function(event) {
        if(event.which === 13){
            addItem();
            event.preventDefault(); //https://api.jquery.com/event.preventdefault/
        }
    });

    function startEditing(event) {
        var taskLi = $(this).parent();
        taskLi.find('.todoText');
        var currentText = $(this).parent().find('.todoText').text();
        taskLi.find(".editText").val(currentText);
        taskLi.find(".editText").show();
        taskLi.find(".saveItem").show();
        taskLi.find(".todoText").hide();
    }

    function stopEditing(event) {
        var taskLi = $(this).parent();
        $(this).hide();
        var newValue = $(this).parent().find(".editText").val();
        taskLi.find(".editText").hide();
        taskLi.find('.todoText').text(newValue);
        taskLi.find(".todoText").show();


    }


    function addItem (){
        var newTodoText = $('#newTodo').val();
        $();
        $('#todos').append
            ('<li><input class="completeItem" type="checkbox"> <span class="todoText">' + newTodoText + '</span><input type="text" class="editText"><button class = "btn btn-success saveItem">save</button><span class="glyphicon glyphicon-trash deleteItem"></span></li>' );
        $('#newTodo').val("");

    }

    function deleteItem() {
        taskLi.remove();
    }

    function completeItem (){
        taskLi.toggleClass("done");
    }
});
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

        $(this).parent().find('.todoText');

        var currentText = $(this).parent().find('.todoText').text();
        $(this).parent().find(".editText").val(currentText);
        $(this).parent().find(".editText").show();
        $(this).parent().find(".saveItem").show();
        $(this).parent().find(".todoText").hide();
    }

    function stopEditing(event) {
        // hide the edit text box
        // take value from edit text box and place it in our span
        // show our span
        $(this).hide();
        var newValue = $(this).parent().find(".editText").val();
        $(this).parent().find(".editText").hide();
        $(this).parent().find('.todoText').text(newValue);
        $(this).parent().find(".todoText").show();


    }


    function addItem (){
        var newTodoText = $('#newTodo').val();
        $();
        $('#todos').append
            ('<li><input class="completeItem" type="checkbox"> <span class="todoText">' + newTodoText + '</span><input type="text" class="editText"><button class = "btn btn-success saveItem">save</button><span class="glyphicon glyphicon-trash deleteItem"></span></li>' );
        $('#newTodo').val("");

    }

    function deleteItem() {
        $(this).parent().remove();
    }

    function completeItem (){
        $(this).parent().toggleClass("done");
    }
});
$(function () {

function actions(){
//---------remove task--------------
    $(".fa-trash").on("click", function() {
        var txt;
        var r =  confirm("are you sure you want to remove?");
         if (r == true) {
                $(this).parents(".input-group").remove();
          } else{
                txt = "You pressed Cancel!";
                alert(txt);
          }
    });    


    $(".fa-pencil").on("click", function() {
    var title = $('#storytitle').val();
    var comment = $('#firstComment').val();
    var accountName = $('#accountName').val();
    var Description = $('#description').val();
    var priority = $('#amount').val();
    var date = $('#datepicker').val();
    var todos = $('.scrum-board').html();
         $(".dialog1").dialog('open');


    });
//-------------move to TO-DO----------
    $(".button-backlog").on("click", function() {
        if (!($(this).closest(".backlog").length > 0)) {
        $(this).parents(".input-group").appendTo(".backlog").css({
            "background-color": "",
            "border": ""
        });
        }
    });
//---------move to in-progress------------
    $(".button-progress").on("click", function() {
        if (!($(this).closest(".in-progress").length > 0)) {
        $(this).parents(".input-group").appendTo(".in-progress").css({
            "background-color": "#ffdfbc",
            "border": "none"
        });
        }
    });
//---------move to done----------
    $(".button-done").on("click", function() {
        if (!($(this).closest(".done").length > 0)) {
        $(this).parents(".input-group").appendTo(".done").css({
            "background-color": "#cfffd0",
            "border": "none"
        });
        }
    });
}
//-------sortable lists-----------
$( ".scrum-board" ).sortable({
        connectWith: "ul"
        });
$( ".scrum-board" ).disableSelection();

//---------open dialog------------
$(".fa-plus").click(function() {
    $(".dialog1").dialog('open');
});
//-------check fields----
function checkfields(){
if($('#storytitle').val()|| $('#description').val() == ""){
    alert("fill up the fields bish");
}else{
    createNote()
    actions();
    localajre()
    $('.dialog1').dialog("close");
}

}
//----------Dialog----------------
$('.dialog1').dialog({
    autoOpen: false,
    modal: false,
    draggable: false,
    show: 'slide',
    hide: 'slide',
    width: 570,
    height: 500,
    buttons: {
        Add: function () {
            createNote()
            actions();
            localajre()
            $('.dialog1').dialog("close");

          //  checkfields();
        },
        Cancel: function () {
            $(this).dialog("close");
        }
        },
        open: function (event, ui) {
            $("#tabs").tabs();
            $('#storytitle').val('');
            $('#description').val('');
            $('#firstComment').val('');
            $('#accountName').val('');
            $('#newComment').val('');
        }
});
//-------createNote function-----------------
function createNote(){
    var taskDiv = document.createElement("li");
    var taskSpan = document.createElement("span");
    var buttonsDiv = document.createElement("div");
    var buttonBacklog = document.createElement("button");
    var buttonProgress = document.createElement("button");
    var buttonDone = document.createElement("button");
    var buttonDelete = document.createElement("button");
    var iconholder = document.createElement("i")
    var editBtn = document.createElement("i")
    var dragthis = document.createElement("a")
    var taskDivAtt = document.createAttribute("class");
    var dragthisAtt = document.createAttribute("class");
    var iconholderAtt = document.createAttribute("class");
    var editBtnAtt = document.createAttribute("class");
    var buttonsDivAtt = document.createAttribute("class");
    var buttonBacklogAtt = document.createAttribute("class");
    var buttonProgressAtt = document.createAttribute("class");
    var buttonDoneAtt = document.createAttribute("class");
    var taskDivAttVal = taskDivAtt.value = "input-group overflow";
    var iconholderAttVal = iconholderAtt.value = "fa fa-trash";
    var editBtnAttVal = editBtnAtt.value = "fa fa-pencil";
    var dragthisAttVal = dragthisAtt.value = "drag";
    var buttonsDivAttVal = buttonsDivAtt.value = "margin-top-10";
    var buttonBacklogAttVal = buttonBacklogAtt.value = "button button-backlog";
    var buttonProgressAttVal = buttonProgressAtt.value = "button button-progress";
    var buttonDoneAttVal = buttonDoneAtt.value = "button button-done";
    taskDiv.setAttributeNode(taskDivAtt);
    buttonsDiv.setAttributeNode(buttonsDivAtt);
    buttonBacklog.setAttributeNode(buttonBacklogAtt);
    iconholder.setAttributeNode(iconholderAtt);
    editBtn.setAttributeNode(editBtnAtt);
    buttonProgress.setAttributeNode(buttonProgressAtt);
    buttonDone.setAttributeNode(buttonDoneAtt);
    dragthis.setAttributeNode(dragthisAtt);
    var anyaaak = $('#description').val();
    var taskText = document.createTextNode(anyaaak);
    var buttonBacklogText = document.createTextNode("TO-DO");
    var buttonProgressText = document.createTextNode("In Progress");
    var buttonDoneText = document.createTextNode("Done");
    taskSpan.appendChild(taskText);
    taskDiv.appendChild(taskSpan);
    //taskDiv.appendChild(buttonsDiv);
    taskDiv.appendChild(iconholder);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(dragthis);
    buttonBacklog.appendChild(buttonBacklogText);
    buttonProgress.appendChild(buttonProgressText);
    buttonDone.appendChild(buttonDoneText);
    buttonsDiv.appendChild(buttonBacklog);
    buttonsDiv.appendChild(buttonProgress);
    buttonsDiv.appendChild(buttonDone);
    $('.backlog').append(taskDiv);
}
//-----------Add comments..------
  $('#addcmntbtn').click(function(){
      var commentarea = $('#newComment').val()
      if(commentarea == ''){
          alert('please write a comment')
      }else{
      var text = commentarea;
       $("<li>" + text + "</li>").appendTo(".comments");
       $('#newComment').val('');
    }
  })
//-------Dialog Slider------------------
$("#slider-range-max").slider({
    range: "max",
    min: 1,
    max: 5,
    value: 2,
    slide: function (event, ui) {
        $("#amount").val(ui.value);
}
});
$("#amount").val($("#slider-range-max").slider("value"));

//------------Local Storage-----------------
function localstorage() {
    var saveForm = {
        title : $('#storytitle').val(),
        comment: $('#firstComment').val(),
        accountName : $('#accountName').val(),
        Description :$('#description').val(),
        priority : $('#amount').val(),
        date : $('#datepicker').val()
    }
    localStorage.setItem('todos', saveForm);
    return false;
};

});

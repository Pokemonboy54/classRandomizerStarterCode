$(document).ready(function(){
    
    var group = ["Sammy", "Joel", "luis", "julio", "threeshar",];
    
    var ScriptEducators = ["Julia", "Alyxe""Aaron", "Justin", "Zach",];
    
    $("#studentButton").click(function() {
       
        var students = Math.floor(Math.random()*group.length);
       
        $("#studentDisplay").append(group[students]);

    });

$("#teacherButton").click(function() {
    
    var teachers = Math.floor(Math.random()*ScriptEducators.length);
  
    $("#teacherDisplay").append(ScriptEducators[teachers]);
});
    
});
$(document).ready(function(){
  
  function display(){
    var searchTerm = $("#searchTerm").val();
    var url= "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";    
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data){
        $("#output").html("");
        for(var i = 0; i < data[1].length; i++){
          // <li><a href=data[3][i] target="_blank">data[1][i]</a><p>data[2][i]</p></li>
          $("#output").append("<li><a href=" + data[3][i] + " target='_blank'>" +data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
        }
        $("#searchTerm").val("");
      },
      error:function(errorMessage){
        alert("Error");
      }
    });
  }
  
  $("#search").on("click", function(){
    display();
  });
  
  $("#searchTerm").keydown(function(e){
    if(e.keyCode == 13){
      display();
    }
  });
 
});
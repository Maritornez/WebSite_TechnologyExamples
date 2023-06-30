$(document).ready(function(){

    //1, 2
    $("#buttonList").click(function(){ 
        let mode = document.querySelector('input[name="mode"]:checked').value;
        let text = $('#textList')[0].value;
        console.log(text);

        //$("#textList")

        if (mode == "begin") {
            $('#list').prepend('<li>' + text + '</li>');
        }
        else {
            $('#list').append('<li>' + text + '</li>');

        }
    
    });

    //3
    $("#buttonP").click(function(){ 
        let par = $('#par').html();
        $('article').append('<p>'+par+'</p>');
    });

    //4
    $("#buttonReduce").click(function(){ 
        let height = $('#image').css('height');
        height = height.slice(0, -2);
        height -= Number(height*0.1);
        height = String(height + 'px');
        $('#image').css('height', height);
    });

    $("#buttonDelete").click(function(){ 
        $('#image').remove();
    });

    //5
    $("#anim").click(function(){
        $("div").animate({left: '250px'});
    });

    
    
});


//6
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = $("#myInput");
    filter = input[0].value.toUpperCase();
    table = $("#myTable");
    tr = $("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}

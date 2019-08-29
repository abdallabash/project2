
        $(document).ready(function(){
          $('#ok').click(function(){
            var dt=$('#form').serialize();
            $.post('data.php',dt,function(data){
            })
           });
        });
  
  
        function submitnow() {
            $('#form').submit();
    }
 
  

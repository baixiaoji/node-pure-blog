


setTimeout(function(){
    $.ajax({
        url:'/user.action',
        method:'get',
        success:function(data){
            $("#root").html(data)
        },
        error:function(err){
            console.log(err)
        }
    })
},1000)
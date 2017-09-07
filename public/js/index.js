


setTimeout(function(){
    $.ajax({
        url:'/user.action',
        method:'get',
        success:function(arr){
            var liStr = arr.map(function(ele){
                            return "<li>"+ele+"</li>"
                        }).join("")

            $("#root").html(liStr)
        },
        error:function(err){
            console.log(err)
        }
    })
    // 模拟post
    $.ajax({
        url:'/list.action',
        method:'post',
        headers:{
            "content-type":"application/json"
        },
        data:JSON.stringify([
            "china","zouzou"
        ]),
        success:function(arr){
            var liStr = arr.map(function(ele){
                            return "<li>"+ele+"</li>"
                        }).join("")

            $("#shop").html(liStr)
        },
        error:function(err){
            console.log(err)
        }
    })
},1000)
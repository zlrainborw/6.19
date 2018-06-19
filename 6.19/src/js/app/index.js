require(['jquery','render'],function($,render){
    // alert(1)
    $.ajax({
        url:"/api/list",
        dataType:"json",
        success:function(res){
            console.log(res);
            render(res,$('#tit_tpl'),$('.title'))
            render(res,$('#list_tpl'),$('.list'))
        },
        error:function(err){
            console.log(err)
        }
    })
})
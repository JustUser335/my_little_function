document.addEventListener('DOMContentLoaded',function()
{
    controller.transmitter();
});
var controller =
{
    transmitter: function()
    {
        this.slideAnchorLinks();
        this.trimString();      

    },
    slideAnchorLinks: function()
    {
        $("header").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top-70}, 1500);
        });
    },
    
    trimString: function (str,limitSimbol)
    {
        if(str.length > limitSimbol)
        {
            str = str.substr(0,limitSimbol);
            str = `${str}...`;
        }
        return str;
    }
}



function depth(arr){// arr[1,0], arr.splice(0,1, arr) собрать
    if(arr.length >= 1){
        arr[1] = arr[1]+1;
        depth(arr);
    }else{
        return "конец";
    } 
}

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
    },
    
    relevatClassEl: function (el,targetClassName,depth = 100){
        let correntParrent,currentClassName, tagNameEl,counter = 0;
        l1: do{
            counter ++;
            if(correntParrent){correntParrent = $(correntParrent).parent();}else{correntParrent = $(el).parent();}
            currentClassName = correntParrent.hasClass(targetClassName);

            tagNameEl =  $(correntParrent).prop("tagName").toLowerCase();
            if(tagNameEl == 'body')break l1;
            if(depth == counter || depth == false)break l1;
            if(currentClassName)break l1;

        }while(true);
        return correntParrent;
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

function che(){
    var res = [];
    var answer;
    
    if(document.getElementById(display.value).includes("+")){
    res = document.getElementById(display.value).split('+');
    return parseInt(res[0]) + parseInt(res[1]);
    }
    
    else if(document.getElementById(display.value).includes("-")){
    res = document.getElementById(display.value).split('-');
    return parseInt(res[0]) - parseInt(res[1]);
    }
    
    else if(document.getElementById(display.value).includes("/")){
    res = document.getElementById(display.value).split('/');
    return parseInt(res[0]) / parseInt(res[1]);
    }
    
    else{
    res = document.getElementById(display.value).split('*');
    return answer= parseInt(res[0]) * parseInt(res[1]);
    }
}
    
function button1(){	
var a = che()
document.getElementById(display.value) = a; 
}

function buttonclear()
{
    document.getElementById('ans').value=" ";	
}
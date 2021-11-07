
function trimString(str,limitSimbol){
    if(str.length > limitSimbol){
        str = str.substr(0,limitSimbol);
        str = `${str}...`;
    }
    return str;
}

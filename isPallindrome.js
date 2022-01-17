function isPallindrome(str, first, last){
    if(first > last )
    return true;
    if(str.charAt(first)==str.charAt(last))
    {
        return true && isPallindrome(str, first+1,last-1);
    }
    return false
}

console.log(isPallindrome('malayalam',0,8));
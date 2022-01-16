function add(a,n)
{   
    if(n==1)
    return a;
    else
    return a+ add(a,n-1);    
    
}

console.log(add(3,9))
function ntopowerkmodn(n,k,d)
{  
    if(k==0){
    return 1;
    }
    if (k<0){
    return -1;
    }
    let ans;
    if(k%2==0) 
    {
        ans= ntopowerkmodn(n,k/2,d)%d;
        
        ans= ((ans%d)* (ans%d))%d;
        
    }
    else
    {
        ans= ((n%d)*ntopowerkmodn(n,k-1,d)%d)%d;
    }
    return parseInt((ans+k)%k);

}

console.log(ntopowerkmodn(1,5,3));
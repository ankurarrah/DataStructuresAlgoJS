function make_permutation(str,ans){
    if (str.length==0)
    console.log(ans);
    for(let i=0;i<str.length;i++){
        let firstchar = str.charAt(i);
        let remainning= str.substr(0,i)+str.substr(i+1,str.length)  
        make_permutation(remainning,firstchar+ans);
    }
}

make_permutation("abc","");
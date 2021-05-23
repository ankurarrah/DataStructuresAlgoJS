//https://www.geeksforgeeks.org/selection-sort/

var array = [1,4,2,3];
selectionSort = function(arr)
{
  var i=0;
  var size = arr.length;
  var min = -Number.MAX_NUMBER;
  var swap=-1;
  
  for(i=0;i<size;i++)
  {   
      min= arr[i];
      var boo=false;
      for(j=i+1;j<size;j++)
      {
          if(arr[j]<=min)
          {
              min =arr[j];
              swap=j;
              boo=true;
          }
      }
      if(boo){
      [arr[i],arr[swap]]= [arr[swap],arr[i]];
      }
  }

  console.log(arr);
}

selectionSort(array);
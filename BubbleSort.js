//https://www.geeksforgeeks.org/bubble-sort/

var array = [1,1,2,3];
bubbleSort = function(arr)
{
  var i=0;
  var size = arr.length;
  for(i=0;i<size;i++)
  {   var swap =false; 
      for(j=i+1;j<size;j++)
      {   
         if(arr[j]<arr[i])
         {   swap=true;
            [arr[i], arr[j]] = [arr[j], arr[i]];
         }
         if(!swap)
         break;
      }
  }

  console.log(arr);
}

bubbleSort(array);
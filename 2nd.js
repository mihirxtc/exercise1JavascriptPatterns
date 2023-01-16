let x = prompt("Enter number:");
let y = "";
for(let i=0; i<x; i++)
{
     for(let j=0; j<x; j++)
     {
          if(  i==j || x-i-1==j)
          {
               y += "*";
          }
          else{
               y += " ";
          }
     }
     y += "\n";

}
console.log(y);
          
          
          
          
     
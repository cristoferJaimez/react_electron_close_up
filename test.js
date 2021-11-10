const arr1 = [
    {id:"1", nom:"cris"},
    {id:"2", nom:"cristoffer"},
  ]
  
  const arr3 =[]
  
  const arr2 = [
    {id:"1", ape:"jaimez"},
    {id:"2", ape:"lopez"},
  ]
  
      arr1.map((val,i,arr)=>{
          
        arr2.map((val2,i2,arr2)=>{
          if(val.id === val2.id ){
                arr1[i]['ape'] = val2.ape
          }
          })
        
      })

  console.log(arr1);  
  
  let monbre = "Cristofer jaimez";
  let res = monbre.split(" ").sort().join("");
  console.log(res.sort());
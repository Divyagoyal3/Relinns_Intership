function KgToLBS (weight : number | string):number{
    if(typeof weight ==="number"){
        return weight*2;
    }
    else{
        return parseInt(weight)*3;
    }
}
  const print2 =KgToLBS(10);
  console.log(print2);
KgToLBS('10kgs');
function Hanoi(disk, source = 'A', dest='C', temp ='B', counter = 0){
 
  if(disk === 1)
  {
    console.log(`${source} -> ${dest}`);
    return;
  }
  Hanoi(disk - 1, source, temp, dest,++counter);
  Hanoi(disk - 1 , source,dest, temp,++counter);
  Hanoi(disk - 1 ,temp,dest,source,++counter);

  

}

Hanoi(3);
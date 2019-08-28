function Hanoi(disk, source = 'A', dest='C', temp ='B',){
  if(disk === 1){
    console.log(`${source} -> ${dest}`);
    return;
  }
  Hanoi(--disk,source,temp,dest);
  Hanoi(1,source,dest,temp);
  Hanoi(disk,temp,dest,source);


  

}

Hanoi(4);
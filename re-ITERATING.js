
function countingSheep(numb){//O(n)
  while(numb > 0){
    console.log(numb, 'Another Sheep Jumps over the fence');
    numb--;
  }
  console.log('U Outta Sheep My friend');
}
function powerMan(base, exp){
  console.log(base ** exp);// O(1)
  return base ** exp;
}
function reverse(str){
  console.log(str.split('').reverse().join('')); //O(n)

}
function triangle(n){
  console.log(n * (n +1) /2);//O(1)
}
function split(str,delimiter){//O(n)
  let result = '';
  for(let x = 0; x < str.length;x++)
  {
    if(str[x] !== delimiter)
      result += str[x];
  }
  console.log(result);
  return result;
}
function fib(n){ //O(n)
  let fib = [];
  for(let x = 0; x < n+1; x++){
    if(x === 0 || x === 1 )
      fib[x] = 1;
    else{
      fib[x] = fib[x-1] + fib[x-2];
    }}
    
  console.log(fib[n]);
  return fib[n];

}
function factorial(n){ // O(n)
  let res = n;
  while(n > 1)
  {
    res *= n-1; 
    n--;
  }
  console.log(res);
  return res;
}


function reIterate(){
  countingSheep(5);
  powerMan(10, 11);
  reverse('reverse');
  triangle(5);
  split('hello,world',',');
  fib(15);
  factorial(5);
}
reIterate();
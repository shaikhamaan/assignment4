var arr = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var names in arr){
    if(arr[names].toLowerCase().charAt(0)=='j')
        console.log('Good Bye ' + arr[names]);
    else
        console.log('Hello ' + arr[names]);
}
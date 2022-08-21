let arr= new Array();
arr[0]="john";
arr[1]="marcos";
arr[2]="Jimmy";
arr[3]="peter";
arr[4]="vincenzo";
for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if(ele.charAt(0)=="j" || ele.charAt(0)=="J"){
        console.log("Goodbye "+ele);
    }
    else{
        console.log("Hello "+ele);
    }

    
}

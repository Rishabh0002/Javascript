function dis(a){
    document.getElementById("screen").value += a;
}
function solve(){
    let x = document.getElementById("screen").value;
    clear1();
    // document.getElementById("screen").value;
    try{
        document.getElementById("screen").value = eval(x).toFixed(2);
    }
    catch{
        document.getElementById("screen").value = "ERORR";
    }
}
function clear1(){
    document.getElementById("screen").value = "";
}
function clear2(){
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0,-1);
}
const type = ['3','+','4'];
let ans = 0;
function Calculate(type){
    for(let i=1;i<type.length;i += 2){
        switch(type[i]){
            case '+': ans += parseInt(type[i-1]) + parseInt(type[i+1]);
            break;
            case '-': ans += parseInt(type[i-1]) - parseInt(type[i+1]);
            break;
            case '*': ans += parseInt(type[i-1]) * parseInt(type[i+1]);
            break;
            case '/': ans += parseInt(type[i-1]) / parseInt(type[i+1]);
            break;
            default: document.write("Invalid");
            break;
        }
    }
    return ans;
}
// var words = "i'm a fighter"
 (function (str){
    var words = str.toLowerCase().split(" ");
    for(var i=0;i<words.length;i++){
    words[i]=words[i][0].toUpperCase()+words[i].slice(1);
    }
    console.log(words.join(" "))

    
})("i'm a fighter");


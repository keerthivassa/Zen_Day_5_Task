var titleCase = function(str){
    var words = str.toLowerCase().split(" ");
    for(var i=0;i<words.length;i++){
    words[i]=words[i][0].toUpperCase()+words[i].slice(1);
    }
    return words.join(" ")
    
}
    console.log(titleCase("i'm a great person"));

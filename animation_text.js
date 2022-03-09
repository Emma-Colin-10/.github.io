const text = document.getElementById("text");
const sentence_table= ["En recherche d'emploi","En recherche d'emploi"]
let sentence = sentence_table[0]
let index_sentence= 1;
let i=1;
let check = true;
setInterval(function(){   
     if(i==0){
         check=true;
         sentence= sentence_table[index_sentence]
        if(index_sentence==sentence_table.length-1){
            index_sentence=0;
        }
        else{
            index_sentence++;
        }
    }
    if(i==sentence.length){
        check=false;
    }
    if(check){
        text.innerHTML = sentence.substring(0,i)+'|';
        i++;
    }
    else{
        text.innerHTML = sentence.substring(0,i+1)+'|';;
        i--;
    }   
},200);
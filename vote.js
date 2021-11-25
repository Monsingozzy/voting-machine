var j=0;
var b=0;
var c=0;

function bjpfun(){
  b=b+1
  document.getElementById("rbjp").innerHTML=b;
  
}

function cngfun(){
    c=c+1;
    document.getElementById("rcng").innerHTML=c;
}

function jdsfun(){
    j=j+1;
    document.getElementById("rjds").innerHTML=j;
}

function resultt(){
    var title="BJP jai modi"
    if(b>j && b>c){
        document.getElementById("winner").innerHTML=title;
    }
    else{
        if(c>b&&c>j){
            var title="CNG jai pappu"
            document.getElementById("winner").innerHTML=title;

        }
        else{
            if(j>b&& j>c){
            var title2="JDS jai kswamy layout"
            document.getElementById("winner").innerHTML=title2;
            }
            else{
                var title4="election was tie lets super over"
                document.getElementById("winner").innerHTML=title4;
            }

        }
    }
 
   


    
}


//counting votes for BJP
// document.getElementById("bjp").addEventListener('click', function(){
//     b = b+1;
//     if(b){
//     document.getElementById("bpp1").innerHTML = b;
//     }
// });


// document.getElementById("cng").addEventListener('click', function(){
//     c = c+1;
//     if(c){
//     document.getElementById("bjpVote").innerHTML = c;
// });


// document.getElementById("jds").addEventListener('click', function(){
//     j = j+1;
//     document.getElementById("bjpVote").innerHTML = j;
// });
// console.log(`${b}`)
// window.onload=function(){
// var bjpCount = 0;
// var aapCount = 0;
// var congressCount = 0;
// //counting votes for BJP
// document.getElementById("bjp").addEventListener('click', function(){
//     bjpCount = bjpCount+1;
//     document.getElementById("bjpVote").innerHTML = bjpCount;
// });

// //counting votes for AAP
// document.getElementById("aap").addEventListener('click', function(){
//     aapCount = aapCount+1;
//     document.getElementById("aapVote").innerHTML = aapCount;
// });

// //counting votes for CONGRESS
// document.getElementById("congress").addEventListener('click', function(){
//     congressCount = congressCount+1;
//     document.getElementById("congressVote").innerHTML = congressCount;
// });

// //handling submit
// document.getElementById("submit").addEventListener("click",function(){
// document.getElementById("total").innerHTML = `BJP vote: ${bjpCount}      
// AAP vote: ${aapCount}        
// CONGRESS vote: ${congressCount}`
// });
// }
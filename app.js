
 let C;
 let F;

 let checkbox1 = document.getElementById('toC')
 let checkbox2 = document.getElementById('toF')
 


  
 





document.getElementById('submit').onclick = function calculate() {

    let temp = document.getElementById('temp').value 

    C = Math.round((temp - 32) * 5/9)
    F = Math.round((temp * 9/5 ) + 32)

    

    

if (checkbox1.checked == true) {

    

    document.getElementById('result').innerHTML = C + ' °C'


}else if( checkbox2.checked == true) {

    

    document.getElementById('result').innerHTML = F + ' °F'

}




}
 
  



  

  


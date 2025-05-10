
document.querySelector("#calculatorForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const a = document.querySelector("#a").value;
    const b = document.querySelector("#b").value;
    console.log(a);
    console.log(b)
});
function calculate(x){
    let a= parseFloat(document.querySelector("#a").value);
    let b= parseFloat(document.querySelector("#b").value);
    let resultado=0;
    switch(x){
        case "sum":
            resultado=a+b
            console.log(resultado);
            break;    
        case "res":
            resultado=a-b
            console.log(resultado);
            break; 
        case "div":
            resultado=a/b
            if(a===0 || b===0){
                alert("No se puede dividir");
                resultado=NaN
            console.log(resultado);
        }   
            break;    
        case "mul":
            resultado=a*b
            console.log(resultado);
            break; 
        case "EcuLin":
            if(a===0){
                if(b===0){
                    alert("Infinitas soluciones.")
                }
                else{
                    alert("Sin solucion.")
                }
            }
            x = -b/a;
            resultado = x
        case ""
    }
    document.querySelector("#result1").value=resultado;     
}
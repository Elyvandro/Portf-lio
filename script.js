function calc(){
    let altura=document.getElementById("altura").value/100;
    let peso=document.getElementById("peso").value;
    let imc=peso/altura**2
    let text=tarea

    if(imc<18.5)
    {text="Você está abaixo do peso ideal!"}
    else if(imc<24.9)
    {text="Você está com o peso normal!"}
    else if(imc<29.9)
    {text="Você está com sobrepeso!"}
    else if(imc<39.9)
    {text="Você está com obesidade!"}
    else if(imc>40)
    {text="Você está com obesidade mórbida!"}


    document.getElementById("tarea").innerText=text}

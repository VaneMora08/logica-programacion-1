function ordenarNumeros() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);

    let mayor, medio, menor;

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        medio = (num2 >= num3) ? num2 : num3;
        menor = (num2 <= num3) ? num2 : num3;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        medio = (num1 >= num3) ? num1 : num3;
        menor = (num1 <= num3) ? num1 : num3;
    } else {
        mayor = num3;
        medio = (num1 >= num2) ? num1 : num2;
        menor = (num1 <= num2) ? num1 : num2;
    }

    let resultado = "Los números ordenados de mayor a menor son: " + mayor + ", " + medio + ", " + menor + "<br>";
    resultado += "Los números ordenados de menor a mayor son: " + menor + ", " + medio + ", " + mayor + "<br>";

    if (num1 === num2 && num2 === num3) {
        resultado += "Los números son iguales.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

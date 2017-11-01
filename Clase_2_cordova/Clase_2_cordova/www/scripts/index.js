function grafico_triagulo() {
    var a = document.getElementById("angu_a").value;
    var b = document.getElementById("angu_b").value;

    // Conecion a las figuras
    var Trian = document.getElementById("triang");
    var cateto_a = document.getElementById("cate_a");
    var cateto_b = document.getElementById("cate_b");
    var hipotenu = document.getElementById("hipote");

    // Codigo de actualizacion
    // Triangulo
    var points_Trian = " ";

    points_Trian += ' 0,0';
    points_Trian += ' ' + '0' + ',' + a;
    points_Trian += ' ' + b + ',' + '0';
    Trian.setAttribute('points', points_Trian);

    // cateto_a
    var points_cateto_a = " ";

    points_cateto_a += ' 0,0';
    points_cateto_a += ' ' + '0' + ',' + a;
    points_cateto_a += ' ' + -a + ',' + a;
    points_cateto_a += ' ' + -a + ',' + '0';
    cateto_a.setAttribute('points', points_cateto_a);

    // cateto_b
    var points_cateto_b = " ";

    points_cateto_b += ' 0,0';
    points_cateto_b += ' ' + b + ',' + '0';
    points_cateto_b += ' ' + b + ',' + -b;
    points_cateto_b += ' ' + '0' + ',' + -b;
    cateto_b.setAttribute('points', points_cateto_b);

    // hipotenu
    var points_hipotenu = " ";

    points_hipotenu += ' ' + '0' + ',' + a;
    points_hipotenu += ' ' + b + ',' + '0';
    points_hipotenu += ' ' + 2 * b + ',' + a;
    points_hipotenu += ' ' + b + ',' + 2 * a;
    hipotenu.setAttribute('points', points_hipotenu);
}

function grafico_ecuacion() {
    var a = document.getElementById("const_a").value;
    var b = document.getElementById("const_b").value;
    var c = document.getElementById("const_c").value;
    var polyline = document.getElementById("cuadra");
    var points = " ";
    var x_real = 0;
    var y = 0;
    var y_real = 0;

    for (var x = -300; x <= 300; x = x + 5) {
        x_real = x / 30;
        y = a * (x_real ** 2) + b * x_real + c / 30;
        y_real = 200 - y;
        points += x + 100 + "," + y_real + " ";
    }
    polyline.setAttribute('points', points);
}

function Triangulo() {
    var a = document.getElementById("angu_a").value;
    var b = document.getElementById("angu_b").value;

    var lado_a = a ** 2;
    var lado_b = b ** 2;
    var suma = lado_a + lado_b;

    document.getElementById("lado").innerHTML = " Resultado Hipotenusa:  " + suma ** (1 / 2);
}

function Ecuacion() {
    var a = document.getElementById("const_a").value;
    var b = document.getElementById("const_b").value;
    var c = document.getElementById("const_c").value;
    if (a == 0) {
        if (b == 0) {
            if (c == 0) { // a=0 b=0 c=0
                document.getElementById("demo").innerHTML = "0";
            }
            else { // a=0 b=0 c!=0
                document.getElementById("demo").innerHTML = c;
            }
        }
        else {
            if (c == 0) { // a=0 b!=0 c=0
                if (b == 1) {
                    document.getElementById("demo").innerHTML = "x";
                }
                else {
                    document.getElementById("demo").innerHTML = b + "x";
                }

            }
            else { // a=0 b!=0 c!=0
                if (b == 1) {
                    document.getElementById("demo").innerHTML = "x + " + c;
                }
                else {
                    document.getElementById("demo").innerHTML = b + "x + " + c;
                }
            }
        }
    }
    else {
        if (b == 0) {
            if (c == 0) { // a!=0 b=0 c=0
                if (a == 1) {
                    document.getElementById("demo").innerHTML = "x**2";
                }
                else {
                    document.getElementById("demo").innerHTML = a + "x**2";
                }

            }
            else { // a!=0 b=0 c!=0
                if (a == 1) {
                    document.getElementById("demo").innerHTML = "x**2 + " + c;
                }
                else {
                    document.getElementById("demo").innerHTML = a + "x**2 + " + c;
                }
            }
        }
        else {
            if (c == 0) { // a!=0 b!=0 c=0
                if (a == 1) {
                    if (b == 1) {
                        document.getElementById("demo").innerHTML = "x**2 + " + "x";
                    }
                    else {
                        document.getElementById("demo").innerHTML = "x**2 + " + b + "x";
                    }
                }
                else {
                    if (b == 1) {
                        document.getElementById("demo").innerHTML = a + "x**2 + " + "x";
                    }
                    else {
                        document.getElementById("demo").innerHTML = a + "x**2 + " + b + "x";
                    }
                }

            }
            else { // a!=0 b!=0 c!=0
                if (a == 1) {
                    if (b == 1) {
                        document.getElementById("demo").innerHTML = "x**2 + " + "x +" + c;
                    }
                    else {
                        document.getElementById("demo").innerHTML = "x**2 + " + b + "x +" + c;
                    }
                }
                else {
                    if (b == 1) {
                        document.getElementById("demo").innerHTML = a + "x**2 + " + "x +" + c;
                    }
                    else {
                        document.getElementById("demo").innerHTML = a + "x**2 + " + b + "x + " + c;
                    }
                }
            }
        }
    }
}




function Resolver() {
    var a = document.getElementById("const_a").value;
    var b = document.getElementById("const_b").value;
    var c = document.getElementById("const_c").value;
    if (a == 0) {  // Ecuacion simple
        if (b == 0) {
            if (c == 0) { // b=0 c=0
                document.getElementById("valores").innerHTML = "No hay ecuacion ";
            }
            else { // b!0 c=0
                document.getElementById("valores").innerHTML = "Ecuacion constante ,no tiene solución";
            }
        }
        else { // Ecuacion lineal
            if (c == 0) {
                document.getElementById("valores").innerHTML = "Resultado " + "0";
            }
            else {
                document.getElementById("valores").innerHTML = "Resultado " + -c / b;
            }

        }

    }
    else { // Ecuacion cuadratica
        var determinante = (b ** 2) - (4 * a * c);

        if (determinante == 0) { // Un solo resultado
            var resultado = -b / (2 * a);
            document.getElementById("valores").innerHTML = "Resultado " + resultado;

        }
        else {  // Dos resultados
            if (determinante > 0) { // Reales
                var sqt_deter = (determinante ** (1 / 2)) / (2 * a);
                var pre_resu = -b / (2 * a);
                var x1 = pre_resu + sqt_deter;
                var x2 = pre_resu - sqt_deter;

                document.getElementById("valores").innerHTML = "Resultado " + x1 + " y " + x2;
            }
            else { //Imaginarios
                var sqt_deter = ((-determinante) ** (1 / 2)) / (2 * a);
                var pre_resu = -b / (2 * a);


                // para que no salgan resultados sin reducir 0 + 1i ==> i
                if (pre_resu == 0) {
                    if (sqt_deter == 1) {		// pre_resu=0 sqt_deter=1 
                        var x1 = "+ i";
                        var x2 = "- i";
                    }
                    else {					// pre_resu=0 sqt_deter!=1 
                        var x1 = "+ " + sqt_deter + "i";
                        var x2 = "- " + sqt_deter + "i";
                    }
                }
                else {
                    if (sqt_deter == 1) {		// pre_resu!=0 sqt_deter=1 
                        var x1 = pre_resu + " + i";
                        var x2 = pre_resu + " - i";
                    }
                    else {					// pre_resu!=0 sqt_deter!=1 
                        var x1 = pre_resu + " + " + sqt_deter + "i";
                        var x2 = pre_resu + " - " + sqt_deter + "i";
                    }
                }

                document.getElementById("valores").innerHTML = "Resultado " + x1 + " y " + x2;

            }
        }
    }
}
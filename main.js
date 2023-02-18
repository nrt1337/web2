const variant = +prompt('Выберите задачу от 1 до 7', '');

switch(variant){
    case 1:

    console.log('Выбрана задача 1');
    function convertSpeed(speed, dir){
        speed = +prompt("Введите скорость", '')
        dir = +prompt("Во что перевести: 1 - в м/с; 2 - в км/ч", '')

        if (dir === 1){
            dir = 'toMS';
            return console.log(`convertSpeed(${speed},${dir}) -> '${speed = speed/3.6} м/с'`)
        }
        else {
            dir = 'toKMH';
            return console.log(`convertSpeed(${speed},${dir}) -> '${speed*3.6} км/ч'`)
        }
    }
    convertSpeed();

       break;
        
    case 2:
        console.log('Выбрана задача 2');
        let a = 3;
        let b = 4;
        let c = 5;  

        if (a+b>c && a+c>b && b+c>a){
                    console.log("Треугольник существует")
                    let p = (a+b+c)/2;
                    console.log(`Периметр равен ${p*2}`);
                    console.log(`Площадь равна ${Math.sqrt(p*(p-a)*(p-b)*(p-c))}`)
                    console.log(`Соотношение равно ${(p*2)/Math.sqrt(+p*(p-a)*(p-b)*(p-c))}`)
        }
        else console.log("Треугольник не существует")

        break;

    case 3:
        console.log('Выбрана задача 3');
        let numb = +prompt("Введите число",'');
        if (!isNaN(numb)){
        for (let i = 0; i<(numb)+1; i++){

            if (i%5==0 && i!==0){
                console.log(`${i} fizz buzz`)
            }

            else if (i%2==0){
                console.log(`${i} buzz`)
            }

            else if (i%2!==0){
                console.log(`${i} fizz`)
            }
        }
    }
        break;
    
    case 4:
        console.log('Выбрана задача 4');
        let str = '';

        for(i = 1; i <= 18; i++)
        {
            if(i % 2 != 0)
            {
                str += '\n' + '*'.repeat(i);
            }else {
                str += '\n' + '#'.repeat(i);
            }
        }
        str += '\n||';
        console.log('Выбрана задача 4');
        console.log(str);
        break;
    
    case 5:
        console.log("Выбрана задача 5")
        let h = 3;
        let ans = +prompt("Введите число",'');

        if(isNaN(ans)){
            console.log("Вы ввели не число, повезет в след раз");
            break;
        }

        while (ans!==h) {

            if (ans>h){
                console.log("ваше число больше");
            }
            else if (ans<h){
                console.log("ваше число меньше");
            }

            ans = +prompt("Введите число",'');
        }  
        console.log("угадано");

        break;

    case 6:
        console.log('Выбрана задача 6');
        let n = +prompt("Введите число", '');
        let x = 2;
        let y = 6;

        if (n%x===0 && n%y===0){
            console.log(`n = ${n}, x = ${x}, y = ${y} => true`)
        }
        else {
            console.log(`n = ${n}, x = ${x}, y = ${y} => false`)
        }
        break;

    case 7:
        console.log('Выбрана задача 7');
        let month = prompt("Введите число", '')

        if (month<=3){
            console.log(`месяц ${month} => 1 квартал`)
        }
        if (month>3 && month<=6){
            console.log(`месяц ${month} => 2 квартал`)
        }
        if (month>6 && month<=9){
            console.log(`месяц ${month} => 3 квартал`)
        }
        if (month>9 && month<=12){
            console.log(`месяц ${month} => 4 квартал`)
        }
        break;
}
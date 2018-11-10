function task1() {
    var name = prompt('Введите свое имя', '');
    var str = "Привет, " + name;
    alert(str);
}


function task2() {
    const currentYear = 2018;
    function computeAge() {
        return currentYear - year;
    }


    var year = prompt('Введите Ваш год рождения (в формате XXXX )', '');

    var userAge = "Ваш возраст: " + computeAge();

    alert(userAge);
}


function task3() {
    var a = prompt('Введите длину стороны квадрата', '');

    function computePerimeter() {
        return 4 * a;
    }

    var p = computePerimeter();

    alert('Периметр квадрата = ' + p);
}


function task4() {
    var r = prompt('Введите радиус окружности', '');

    function computeSquare() {
        return Math.PI * Math.pow(r, 2);
    }

    var s = computeSquare();

    alert('Площадь окружности = ' + s.toFixed(2));
}


function task5() {
    var s = prompt('Введите расстояние в км между двумя городами', '');
    var t = prompt('За сколько часов нужно проехать данный путь', '');

    function computeSpeed() {
        return s / t;
    }

    var v = computeSpeed();

    alert('Скорость с которой нужно ехать = ' + v + ' км/ч');
}


function task6() {
    const euro = 0.88;

    var dollar = prompt('Введите кол-во долларов', '');

    var result = dollar * euro;

    alert(dollar + ' $ = ' + result + ' €');
}


function task7() {
    const sizeFile = 820;

    function computeQuantityFile() {
        return Math.floor((sizeFlash * 1024) / 820);
    }

    var sizeFlash = prompt('Укажите объем флешки (в Гб)', '');


    var quantityFile = computeQuantityFile();

    alert(
        'Кол-во файлов (которые поместятся на флешке): '
        + quantityFile
        + ' шт');
}


function task8() {
    function computeAmount() {
        return Math.floor(amountMoney / chocolatePrice);
    }
    function computeChange() {
        return amountMoney -
            (amountChocolate * chocolatePrice);
    }
    
    var amountMoney = prompt('Введите сумму денег в кошельке', '');
    var chocolatePrice = prompt('Введите цену шоколадки', '');
    
    var amountChocolate = computeAmount();
    var change = computeChange();
    
    alert('Вы можете купить: ' + amountChocolate + ' шоколадок.\n'
        + 'Ваша сдача: ' + change);
}


function task9() {
    function computeReverseNumber(n) {
        let reverse = '';
        
        do {
            reverse += (n % 10).toString();
            n = Math.floor(n / 10);
        } while (n != 0);
     
        return reverse;
    }
    
    var number = prompt('Введите трехзначное число', '');
    
    var reverseNumber = computeReverseNumber(number);
    
    alert('Ваше число задом наперед: ' + reverseNumber);
}


function task10() {
    function computeParity(n) {
        return n % 2 == 0 ? 'четное' : 'нечетное';
    }
    
    var number = prompt('Введите целое число', '');
    
    alert('Ваше число - ' + computeParity(number));
}
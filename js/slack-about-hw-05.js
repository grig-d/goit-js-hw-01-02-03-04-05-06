////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Ребят помогите разобраться. Почему у меня price: undefined и говорит что я гет и сет неправильно поставила
class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed} , isOn: ${car.isOn}, distance: ${car.distance} , price: ${car.price}`;
  }
  constructor({
    maxSpeed = 0,
    speed = 0,
    price = 0,
    isOn = false,
    distance = 0,
  }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.price = price;
    this.isOn = isOn;
    this.distance = distance;
  }
  get price() {
    return this._price;
  }
​
  set price(value) {
    return this._value;
  }
  turnOn() {
    this.isOn = true;
  }
​
  turnOff() {
    this.isOn = true;
    this.speed = 0;
  }
​
  accelerate(value) {
    this.speed =
      this.speed + value <= this.maxSpeed ? this.speed + value : this.maxSpeed;
    
  }
  decelerate(value) {
    this.speed = this.speed - value >= 0 ? this.speed - value : 0;
  }
  drive(hours) {
    if (this.isOn) {
    }
    return (this.distance += hours * this.speed);
  }
}
​
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
​
console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
​
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
​
console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
​
// console.log(mustang.price); // 2000
mustang.price = 4000;
// console.log(mustang.price); // 4000

Yevhenii Ivanov:bulb:  18 days ago
У тебя set неверен синтаксически
:thinking_face:
1

Yevhenii Ivanov:bulb:  18 days ago
Проверь

Olga Konopleva  18 days ago
в конструкторе price, а геттере и сеттере _price
:raised_hands:
1

Nastya Boiko:face_with_raised_eyebrow:  18 days ago
по условию так написано :white_frowning_face:

Nastya Boiko:face_with_raised_eyebrow:  18 days ago
я должна сначлаа сказать что  this._price = this.price?

Olga Konopleva  18 days ago
да

Yevhenii Ivanov:bulb:  18 days ago
Просто price

Olga Konopleva  18 days ago
this._price = price;

Yevhenii Ivanov:bulb:  18 days ago
Но сетер неверен :grin:

Nastya Boiko:face_with_raised_eyebrow:  18 days ago
get price() {
    this._price = price;
       return this._price;
  }
  set price(value) {
     this._value = value
  }

Nastya Boiko:face_with_raised_eyebrow:  18 days ago
так вообще не комплирует
потому что прайс это ж не переменная, и с this тоже не хочет :thinking_face:

Yevhenii Ivanov:bulb:  18 days ago
Нет

Yevhenii Ivanov:bulb:  18 days ago
Не так

Yevhenii Ivanov:bulb:  18 days ago
Сделай как на скриншоте
:raised_hands:
1


Nastya Boiko:face_with_raised_eyebrow:  18 days ago
get price() {
   return this._price;
 }
  set price(value) {
     this._value = value
  }

Yevhenii Ivanov:bulb:  18 days ago
А где у тебя в конструкторе this._value?

Yevhenii Ivanov:bulb:  18 days ago
Посмотри внимательно на то как выглядит сетер на скриншоте и сравни

Yevhenii Ivanov:bulb:  18 days ago
)
:+1:
1


Nastya Boiko:face_with_raised_eyebrow:  18 days ago
таак, сет теперь видит, а гет нет
у нас же тут нет value?
Yevhenii Ivanov:bulb:  18 days ago
Нету

Yevhenii Ivanov:bulb:  18 days ago
Уточните свежую инфу что ее получается

Nastya Boiko:face_with_raised_eyebrow:  18 days ago
static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed} , isOn: ${car.isOn}, distance: ${car.distance} , price: ${car.price}`; вот тут что то не так не пойму что

Nastya Boiko:face_with_raised_eyebrow:  18 days ago
Статический метод 'static getSpecs' должен возвращать строку со свойствами и значениями объекта согласно спецификации.

Nastya Boiko:face_with_raised_eyebrow:  18 days ago
maxSpeed: 200, speed: 50 , isOn: true, distance: 100 , price: 2000
'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000' (edited) 

Nastya Boiko:face_with_raised_eyebrow:  18 days ago
одно и тоже

Nastya Boiko:face_with_raised_eyebrow:  18 days ago
заведенность не совпадает :white_frowning_face:

Alexander Serzhenko  18 days ago
​
  turnOff() {
    this.isOn = true;
    this.speed = 0;
  }
Когда выключаешь, isOn должен false быть. Потому что это состояние выкл
А true это состояние вкл для свойства 'это включено' (isOn) (edited) 
:+1:
1


Nastya Boiko:face_with_raised_eyebrow:  18 days ago
спасибо, уже решила :crying_cat_face:

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Nastya Boiko:face_with_raised_eyebrow:  2:58 PM
Кому не сложно обьясните пожалуйста зачем мы здесь
 drive(hours) {
    if (!this.isOn) {
      return;
    }
    this.distance += hours * this.speed;
ставим !, если по условию нам нужно когда машина заведена делать всякие манипуляции с ней :thinking_face:

Yevhenii Ivanov:bulb:  18 days ago
Если машина будет выключена мы выходим из функции
:raised_hands:
1


Yevhenii Ivanov:bulb:  18 days ago
И ничего не делаем
:+1:
1


Nastya Boiko:face_with_raised_eyebrow:  18 days ago
спасибо

olga nesterenko  18 days ago
Написала этот кусок как:
drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Iryna Zotovych Dec 5th at 8:15 PM
привет! нужен свежий взгляд... код в комментах
7 replies

Iryna Zotovych  17 days ago
class Car {
 // Write code under this line
  static getSpecs(car){
    return `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this._price}`}
  constructor(car){
  this.speed = 0;
  this._price = car.price;
  this.maxSpeed = car.maxSpeed;
  this.isOn = false;
  this.distance = 0;}
  get price() {return this._price}
  set price(value) {this._price = value}
  turnOn() {this.isOn = true;}
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
 accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      this.speed += value;
    }
  }
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed = this.speed - value;
    }
  }
  drive(hours) {
    if ((this.isOn)) {
      this.distance += hours * this.speed;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
 console.log(mustang.price); // 2000
mustang.price = 4000;
 console.log(mustang.price); // 4000

Alexandra Gubar  17 days ago
В конструкторе вместо car объект с полным набором свойств

Alexandra Gubar  17 days ago
constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
        this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
        this._price = price;
    }

Olga Konopleva  17 days ago
В статическом методе есть ошибка.

Alexandra Gubar  17 days ago
И в акселерейт и деселер не достает условий если if не выполнится (edited) 

Alexandra Gubar  17 days ago
В статике не действует this

Iryna Zotovych  17 days ago
Всем спасибо! :slightly_smiling_face: Все исправила, работает!

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Alexandra Markova Dec 6th at 5:15 PM
Нужна помощь в 5 задачке! код в комментах
29 replies

Alexandra Markova  16 days ago
class Car {
  // Write code under this line
  static getSpecs(car) {
    return car;
  }
  constructor({maxSpeed, price}) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }
  get price() {
    return this._price;
   }
  set price(value) {
    this._price = value;
  }
  turnOn() {
   this.isOn = true; 
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.speed + value < this.maxSpeed) { 
      this.speed += value;
    } 
  }
  decelerate(value) {
    if (this.speed - value > 0) { 
     this.speed -= value; 
    }
  }
  drive(hours) {
    if (this.turnOn) { 
      this.distance += hours * this.speed;
    }
  }
}




Alexandra Markova  16 days ago
в вс коде все отрабатывает, только не пойму что хотят от меня в условии про статические методы

Alexandra Markova  16 days ago
подскажите, что не так делаю. Спасибо!)
Screenshot_2.png 
Screenshot_2.png



Alexander Serzhenko  16 days ago
this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;  тут зачем _ ?

Alexandra Markova  16 days ago
уже кинула в параметры) еще что не так?)

Alexander Serzhenko  16 days ago
Собственно в задаче все сказано, но я напомню
static getSpecs(car) {
    return car;
  }
разве делает то, что требуется в задании?

Alexandra Markova  16 days ago
статический не могу понять `maxSpeed: ${сar.maxSpeed}, speed: $сar.speed}, isOn: ${сar.isOn}, distance: ${сar.distance}, price: ${сar._price}`
так не хочет принимать

Alexander Serzhenko  16 days ago
$сar.speed} тут все верно? Или что-то забыла?

Alexandra Markova  16 days ago
это тут писать = 0??? или это в конструктор в параметры?

Alexandra Markova  16 days ago
а, черт , скобка?????

Alexander Serzhenko  16 days ago
Просто { нет там где должна быть. И конструктор должен принимать объект со всеми свойствами.

Alexander Serzhenko  16 days ago
constructor({maxSpeed = 0, speed = 0, price = 0, isOn = false, distance = 0})
можно так пробовать :smiley:

Alexandra Markova  16 days ago
конструктор я уже исправила, а статик не хочет принимать(

Alexander Serzhenko  16 days ago
accelerate(value) {
    if (this.speed + value < this.maxSpeed) { 
      this.speed += value;
    } 
  }
а если равно maxSpeed или больше что будет?

Alexander Serzhenko  16 days ago
decelerate(value) {
    if (this.speed - value > 0) { 
     this.speed -= value; 
    }
  }
Тоже самое, если ровно 0? а еслименьше ноля что будет? (edited) 

Alexandra Markova  16 days ago
я так поняла, без елс не прокатит)

Alexander Serzhenko  16 days ago
Конечно, ведь если попытаешься поднять скорость больше предела, функция не знает что делать, но ты же знаешь что больше предельной скорости быть не может, а значит...

Alexander Serzhenko  16 days ago
drive(hours) {
    if (this.turnOn) { 
      this.distance += hours * this.speed;
    }
  }
а тут что-то не понятное, догадаешься что?

Alexandra Markova  16 days ago
я уже запуталась!(

Alexander Serzhenko  16 days ago
if (this.turnOn) разве это выражение проверки заведена ли машина???

Alexandra Markova  16 days ago
drive(hours) {
    if (this.isOn) { 
      this.distance += hours * this.speed;
    }
  } так?
:+1:
1


Alexandra Markova  16 days ago
все, нихрена не понимаю:skull:

Alexander Serzhenko  16 days ago
Думай, читай.

Alexander Serzhenko  16 days ago
Что у тебя не выходит?

Alexandra Markova  16 days ago
пытаюсь с элсами разобраться, но мозги вообще не хотят думать, видимо перерыв нужен

Alexander Serzhenko  16 days ago
возможно

Alexander Serzhenko  16 days ago
там все просто

Alexandra Markova  16 days ago
сейчас мне уже так не кажется:sweat_smile:

Alexandra Markova  16 days ago
фух, добила!!! всем спасибо!

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Аня Оленчук Dec 7th at 1:01 AM
Помогите, я сдаюсь:dizzy_face:
class Car {
     static getSpecs(car){
        return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, 
        distance: ${car.distance}, price: ${car._price}`;
     }
     constructor(speed = 0, price, maxSpeed, isOn = false, distance = 0) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
     }
     get price() {return this._price;}
     set price(value) {this._price = value;}
     turnOn() {this.isOn = true;}
     turnOff() {
         this.isOn = false;
         this.speed = 0;
     }
     accelerate(value) {
         if((this.speed + value) < this.maxSpeed) {
            this.speed += value;
         } else {this.speed = 0;}
     }
     decelerate(value) {
         if((this.speed + value) > 0) {
             this.speed -= value;
         } else {this.speed = 0;}
     }
     drive(hours) {
         if(this.isOn) {this.distance += this.speed * hours;}
     }
   }
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   console.log(mustang.price); // 2000
   mustang.price = 4000;
   // console.log(mustang.price); // 4000
4 replies

Elena Piripilitsa  16 days ago
В accelerate  в  else  this.speed нужно поправить, там не 0

Elena Piripilitsa  16 days ago
Этот метод должен добавлять к свойству `speed` полученное значение, при условии, что результирующая скорость не больше чем значение свойства `maxSpeed`

Elena Piripilitsa  16 days ago
А так еще поправить  if  в decelerate
Этот метод должен отнимать от свойства `speed` полученное значение (edited) 




Bondar Volodymyr  16 days ago
Ну и в конструкторе фигурные скобки упустила


*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

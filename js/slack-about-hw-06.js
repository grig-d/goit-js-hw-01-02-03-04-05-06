/*
indexOf 
december 7 video

Т.е. пишите (({prop})) => prop 
вместо (e => e.prop) (edited) 

Gennadiy  17 days ago
Что-то еще не понятно - пишите

Gennadiy  17 days ago
Кргуглые скобки вокруг ({}) для деструктурирующего присваивания  нужны по синаксису. Вроде все

(({что нужно деструктуризировать}) => что нужно вернуть)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
2-44
Привет! Запутался в синтаксисе.....help
image.png 
image.png


11 replies

Maksim Dema  8 days ago
закрывающую скобку поставь после условия в if

Inna Misko  8 days ago
и после намбер =>

Inna Misko  8 days ago
и ты при помощи форич создал новый итерируемый элемент "numbers",  а продолжаешь использовать numbers[i]

Kriukov Vladimir  8 days ago
пока холодно
image.png 
image.png



Inna Misko  8 days ago
numbers.forEach((el) => { if () {}
})

Inna Misko  8 days ago
структура такая

Inna Misko  8 days ago
ненужно убирать везде фигурные скобки

Inna Misko  8 days ago
и пушиш ты не понятно что)) а должен свой итерируемый элемент, то что у тебя стоит в скобках сразу после обьявления forEch

Inna Misko  8 days ago
Там дальше как раз задачки будут на понимание стрелочных функций, нужно только еще парочку решить, станет проще)

Inna Misko  8 days ago
чтобы не путаться: если у тебя в основной функции параметр называется numbers, то при вызове метода название элемента пиши "number" в единственном лице. Так проще потом понять что от куда
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
13-44
const getUserNames = (users) => {
  return users.map((user) => user.name);
};
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
18-44
Olya Verbetska  13 days ago
Не нужно вводить переменную. Нужно сравнить значение ключа с  color

Olya Verbetska  13 days ago
Эта переменная EYE_COLOR - ее функция никак не видит

Аня Оленчук  13 days ago
так тоже не работает

Mitya  13 days ago
Тут Ань у тебя две проблемки
Проблема в синтаксисе стрелочных функций.
Ты используешь не входящий параметр, а его отдельное значение.
По первому моменту - нужно повторить явный и неявный возврат. В данном случае можно использовать два варианта:
const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);
const getUsersWithEyeColor = (users, color) => {
  return users.filter(({ eyeColor }) => eyeColor === color);
};
Рекомендую посмотреть первых 5 минут вебинара по стрелкам, и сразу станет понятно https://youtu.be/MM5u5YgTZd0?list=WL
По второму моменту - нам приходит параметр color, который мы уже и сравниваем с eyeColor. 
В параметре color может быть всё что угодно, по этому мы не привязываемся к EYE_COLOR в твоём решении. Выше в коде думаю суть поймёшь.
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
33-44
users.reduce((acc, { friends }) => (acc += friends.length), 0);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
42-44
Inna Misko Dec 21st at 12:33 AM
Друзья, подскажите что он от меня хочет?) цепочка методов есть, но видимо она ему не нравится:see_no_evil: Как удалось решить эту задачу?
image.png 
image.png

3 replies

Iliya Miroshnychenko  6 days ago
попробуй сначала флетмеп, затем сорт

Inna Misko  6 days ago
Если наоборот то не из чего делать сорт. Мап омтавляет только массив имен, а в условии нужна сортировка имен по количеству друзей
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
43

Yevhenii Ivanov:bulb: Dec 14th at 5:48 PM
@Gennadiy Вопрос такой
Почему в 6 модуле задача 43 оно не принимает решение если использовать набор reduce filter sort а принимает набор flatMap  filter sort хотя результат идентичен
10 replies

Yevhenii Ivanov:bulb:  12 days ago
// const getSortedFriends = (users) => {
// 	return users
// 		.flatMap((user) => user.friends)
// 		.filter((friend, index, users) => users.indexOf(friend) === index)
// 		.sort();
// };

Yevhenii Ivanov:bulb:  12 days ago
Это рабочий

Yevhenii Ivanov:bulb:  12 days ago
const getSortedFriends = (users) => {
	return users
		.reduce((acc, user) => {
			acc = acc.concat(user.friends);
			return acc;
		}, [])
		.filter((friend, index, users) => users.indexOf(friend) === index)
		.sort();
};

Yevhenii Ivanov:bulb:  12 days ago
а это нерабочий

Alexander Repeta  12 days ago
потому что флетмеп быстрее чем редюс :wink: (edited) 

Yevhenii Ivanov:bulb:  12 days ago
Просто тогда наверное ошибка не верно сформулирована :slightly_smiling_face:
http://joxi.ru/52a5NP3iEYqxe2
Joxi – удобная программа для скриншотов и обмена файлами по сетиJoxi – удобная программа для скриншотов и обмена файлами по сети
1607961353798 (109 kb) закачан 14 декабря 2020 г. Joxi
сделан при помощи Joxi.net (112 kB)
http://dl4.joxi.net/drive/2020/12/14/0014/1787/952059/59/cf15ae6d62.jpg

Alexander Repeta  12 days ago
Там просто реально не надо проверять как делается, лишь бы работало. Но проблема в том что проверяется буквально порядок и что цепочка методов есть, а это сложнее.

Yevhenii Ivanov:bulb:  12 days ago
Понял, спасибо )

Gennadiy  12 days ago
Теперь можно и с reduce делать,
спасибо за сообщение.
Хотя это и не оптимально, но законно :slightly_smiling_face:

Yevhenii Ivanov:bulb:  12 days ago
Мы ж просто не ищем простых путей, сразу что то потяжелее :slightly_smiling_face:
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
3

MarinaKryuchko Dec 13th at 12:01 PM
Ребята, подскажите в чем ошибка?

Maksim Dema  14 days ago
в filter неправильно записана деструктуризация

MarinaKryuchko  14 days ago
именно это я и не могу понять! у меня  фильтрация возвращает пустой массив, как бы я его не изменяла...

MarinaKryuchko  14 days ago
метод фильтр принимает элемент массива - user и сравнивает свойство {gender} из этого элемента с параметром функции gender.
Если сравнение true, то вернется весь это элемент.
я правильно понимаю? (edited) 

Denis Akimov  14 days ago
"элемент массива", а у тебя там весь user.

MarinaKryuchko  14 days ago
весь массив это userS

Maksim Dema  14 days ago
)))

MarinaKryuchko  14 days ago
его элемент это объект user

Maksim Dema  14 days ago
теперь из этого юзера обратись к свойству gender

MarinaKryuchko  14 days ago
array.filter(({ gender }) => gender === gender)
так?

Maksim Dema  14 days ago
можно без деструктуризации

MarinaKryuchko  14 days ago
ааа, в задании деструктуризацию нужно применить только к name?

Maksim Dema  14 days ago
ну у меня бот принял

Maksim Dema  14 days ago
да и в задании написано - только к name

MarinaKryuchko  14 days ago
array.filter((user) => user.gender=== gender)
? (edited) 

Maksim Dema  14 days ago
пробуй)

MarinaKryuchko  14 days ago
вух, спасибо, ребята! ))
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
6
Alexander Serzhenko  14 days ago
тебе необходимо составить функцию в filter так, что бы она возвращала буль при обозначенных в задаче условиях. По значению буля и будет фильтроваться массив.
Затем в map прописать функцию так, что бы метод вернул массив согласно условию задачи.
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
6
Zinaida Dec 13th at 1:07 PM
Приветы, помогите разобраться с 6 задачей.
Чтобы понять, я сделала вначале обычную функцию, потом сделала стрелочную.
В консоле получается результат: три массива с именами и email тех кому от 20 до 30.
// const getUsersWithAge = (array, min, max) =>
//   array
//     .filter((users) => users.age >= min && users.age <= max)
//     .map((users) => [users.name, users.email]);
console.log(getUsersWithAge(users, 20, 30));
Помогите сделать из нее то, что нужно боту.
Я делаю вот так:
const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => {
      age >= min && age <= max;
    })
    .map(({ name, email }) => [(name, email)]);
Но очевидно, что это не правильно, так как результат в консоле - один пустой массив. (edited) 
6 replies

Olga Konopleva  14 days ago
map сам по себе возвращает массив
Исходный и новый массив всегда имеют одинаковую длину.
map перебирает исходный массив, и тебе нужно, чтобы на каждой итерации он вернул измененный объект с двумя полями.
Ты пишешь в map, чтобы он вернул тебе на каждой итеррации массив. (edited) 
:heavy_plus_sign:
2

Olga Konopleva  14 days ago
в самой задачке есть подсказка https://prnt.sc/w1nsjc
LightshotLightshot
Screenshot
Captured with Lightshot (33 kB)
https://image.prntscr.com/image/4hF53sccSo_oOuiueVh4Rg.png
:heavy_plus_sign:
2

Olga Konopleva  14 days ago
И в итоге в консоле должен получится массив с 3 объектами,
а не три массива.

Olga Konopleva  14 days ago
https://prnt.sc/w1ntnx
LightshotLightshot
Screenshot
Captured with Lightshot (42 kB)
https://image.prntscr.com/image/dnogso2CRiyllwNnw28Z_Q.png

Maxim Right:squirrel:  14 days ago
@Zinaida
И в твоем случае не забудь убрать фигурные скобочки в теле функции фильтра :raised_hands:
:heavy_plus_sign:
2

Zinaida  14 days ago
@Olga Konopleva @Maxim Right
Друзья, огромное спасибо.  Получилось наконец-то!  Надо быть внимательней со скобочками. :blush:
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
6
MarinaKryuchko Dec 13th at 5:21 PM
Ребята, задача 6-9! Может кто-нибудь подсказать, почему в vscode undefined? а бот принял!
const getNamesSortedByFriendsCount = (array) => {
  [...array]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(({ name }) => name);
};
console.log(getNamesSortedByFriendsCount(users)); (edited) 
3 replies

Zinaida  13 days ago
Видимо бот проигнорировал твои наружные скобки {   [...array]    }
А без них в консоле всё ок.

MarinaKryuchko  13 days ago
действительно, теперь работает и в консоли. Спасибо)
:raised_hands::skin-tone-2:
1

Alexander Serzhenko  13 days ago
Хм. Интересненько в return всунуть новый массив без объявления. Надо запомнить.
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
9
Чтото не вяжеться у меня с деструктуризацией. Тут ведь уже name деструктурировано....что не так?)
13 replies

Ivetta Dashkova:nerd_face:  16 days ago
меня смущает твоя верхняя запись map user => user, ты так сделал копию массива, как я понимаю, а массив ссылочный тип

Valeriy Mashura  16 days ago
ну, map делает новый ведь массив?

Valeriy Mashura  16 days ago
если без этого то оно мутирует исходный

Valeriy Mashura  16 days ago
и новые красные строки в результате)

Ivetta Dashkova:nerd_face:  16 days ago
попробуй так

Ivetta Dashkova:nerd_face:  16 days ago
array
.slice() вместо map(user=>user)

Olga Konopleva  16 days ago
map не мутирует исходный массив, конспект :eyes:

Valeriy Mashura  16 days ago
Ну правильно, если юзануть сразу sort то все, поломан исходник. Поэтому пользовался map. Но, тут нужен таки старый добрый slice(). Спасибо, все решилось.

Valeriy Mashura  16 days ago
хотя, оно и с map работало на ура, просто бот не принимал ))

Mitya  16 days ago
Можно и сорт в начале, но тогда придётся распылять. И без слайса. (edited) 

Gennadiy  16 days ago
Думаю это я не предусмотрел двух map
Обычно чтобы избежать мутирования пишут оператор ...
const foo = arr => [...arr].sort()
Поправлю сегодня.

Gennadiy  16 days ago
Готово, можно и map и slice и ... для копирования
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
10
DenysT Dec 15th at 12:26 AM
Друзі, підкажіть чи є ще інші способи рішення 10 задачі?const getSortedUniqueSkills = (array) => array.reduce(function(allSkills,{skills}){
return [...allSkills,...skills] },[])
.sort()
.filter(function(el, index, arr){
return el !== arr[index + 1];
});
console.log(getSortedUniqueSkills(users));
3 replies

Ivetta Dashkova:nerd_face:  12 days ago
есть)

Ivetta Dashkova:nerd_face:  12 days ago
скинула в личку) чтобы не облегчать жизнь другим)

Gennadiy  11 days ago
Как минимум filter стоит делать перед sort.
Например у вас штук 100 книг  и вам нужно выбрать книги только в твердом переплете и затем отсортировать по алфавиту названия.
Что было бы быстрее для вас - осортировать все книги, а потом убрать книги в мягком переплете или сперва убрать ненужное, и только затем сортировать?
*/
# homeWorkItK01-08p2
Doing homework from the IT-KAMASUTRA 'js с нуля, ваще с нуля' 01-08 часть 2

Помните нашу форму логина?
 



Задание 1. Давайте её сверстаем.

Хочу чтобы форма была отцентрирована по середине. Вот подсказка, как это сделать: оборачиваем ВСЕ теги в div. Задаём для этого div стили:

Давайте добавим JS-логики

Вот пользователь что-то ввёл… Поставил галочку и нажимает на кнопку Log In.
Необходимо вывести с помощью window.alert следующее сообщение:

login: blablabl; password: blablabla; remember me: true

Для этого нужно сделать то, что вы уже умеете: найти каждый элемент и  прочитать значения его атрибутов.

Чтобы это всё выполнялось при нажатии на кнопку, свой код напишите внутри следующей конструкции:

// не забудьте установить для кнопки в html-е значение атрибута id='login'
var loginButton = document.getElementById('login');
loginButton.onclick = function() {

   // вот здесь ваш код.

};

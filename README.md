1. Расскажите, чем, на ваш взгляд, отличается хорошее клиентское приложение от плохого с точки зрения 
    
    • пользователя: 
        хорошее приложение должно быть интуитивно понятным пользователю, на привычном месте навигация, удобное расположение виджетов.  		Все должно корректно работать, либо выдавать пользователю информацию об ошибке . Также приложение должно быть приятным по 		дизайну, желательно, чтобы дизайн соответствовал современным веяниям. Приложение должно быстро загружаться и быстро работать. 
    
    • менеджера проекта:
        для менеджера скорее важно, чтобы приложение в дальнейшем можно было легко дорабатывать и масштабировать. Чтобы оперативно можно 	было вносить правки и изменения по просьбе клиента с минимальными трудозатратами. 
    
    • дизайнера: 
        для дизайнера возможно важна «свобода» реализации его идей, чтобы все его идеи были реализованы в проекте. 
    
    • верстальщика: 
        хорошее приложение содержит переиспользуемые компоненты,  четкие инструкции, как все должно выглядеть и работать.
    
    • серверного программиста: 
        я думаю, что для него важно, чтобы была удачно разработана архитектура серверной логики , также, чтобы приложение было быстрое, 	отказоустойчивое.

2. Опишите основные особенности разработки крупных многостраничных сайтов, функциональность которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте работы над подобными сайтами: какие подходы, инструменты и технологии вы применяли на практике, с какими проблемами сталкивались и как их решали:        
	Я думаю,что для таких сайтов лучше писать style guide, писать комментарии в коде. Также необходимо покрывать код тестами, для 		того, чтобы при масштабировании или рефакторинге, можно было проверять не «ломается» ли функционал. Также лучше не использовать 	библиотеки, плагины, новые подходы и методологии без согласования с командой. Желательно всем пользоваться одними сборщиками, 		препроцессорами, шаблонизаторами, т.е. использовать один стек технологий . К сожалению, на данный момент опыта участия в крупных 	 проектах у меня нет.

3. При разработке интерфейсов с использованием компонентной архитектуры часто используются термины Presentational Сomponents и Сontainer Сomponents. Что означают данные термины? Зачем нужно такое разделение, какие у него есть плюсы и минусы?:        
	Чаще всего такое разделение используется, когда пишутся приложения с использованием Redux. Сontainer – это компоненты, в которых 	 работают с данными, они определяют, как и по какой логике будет работать часть интерфейса, они могут принимать состояние и 		поведение, обрабатывать их и отправлять уже в Presentational компонент. Также они имеют связь со store, в отличие от 			Presentational. 
        Presentational – это компонент, который отрисовывает часть интерфейса с поступившими к нему данными, как правило, в таких 		компонентах хранится только разметка и стили.   
        Из плюсов можно отметить хорошее разделение на логику и представление в приложении, это удобно при масштабировании или правках. 	Часто изменяется в приложении  визуальная часть, а логика остается прежней, можно спокойно править Presentational Сomponents и 		не переживать, что «поломается» логика. Также удобно переиспользовать Presentational Сomponents с другой логикой в другой части 	приложения.
        Из минусов: иногда возникает сложность разделения.

4. Как устроено наследование в JS? Расскажите о своем опыте реализации JSнаследования без использования фреймворков:      
       В js существует несколько способов наследования: функциональное и прототипное.
       В современном js(от ES2015) для прототипного наследования применяется более удобный синтаксис, основанный на классах. 
       Это удобно, когда есть множество объектов, которых объединяет какая-то часть функционала или состояний, соответственно, чтобы не        создавать их все отдельно и не повторять код, можно использовать наследование. Создание новых классов на основе существующих 	        pеализовать удобнее, чем переписывать один и тот же код в разных объектах. 

5. Какие библиотеки можно использовать для написания тестов end-to-end во фронтенде? Расскажите о своем опыте тестирования веб-приложений:
        Опыта в тестировании приложений у меня пока нет, с этим предстоит разобраться. На данный момент я постаралась разобраться с 	         основами модульного тестирования для решения тестового задания, с интеграционным и end-to-end я пока не знакома.  

6. Вам нужно реализовать форму для отправки данных на сервер, состоящую из нескольких шагов. В вашем распоряжении дизайн формы и статичная верстка, в которой не показано, как форма должна работать в динамике. Подробного описания, как должны вести себя различные поля в зависимости от действий пользователя, в требованиях к проекту нет. Ваши действия?
        В таком случае, лучше уточнить у дизайнера, либо менеджера по поводу дальнейших действий. Так как можно потратить слишком много 	времени на реализацию валидации формы, анимацию, верстку сообщений с предупреждением о неверно введенных данных. Но может 		оказаться, что дизайнер видел по-другому, либо же валидация выполнена с лишним функционалом. Если по какой-либо причине 		невозможно ни у кого уточнить данный вопрос, то постараюсь сделать наиболее логичный функционал(проверка на заполненность полей 	формы, элементарные анимации), чтобы можно было с наименьшими усилиями переделать либо дополнить.

7. Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.
        Шаблонизатор( например Pug) очень удобен при написании больших сайтов, можно использовать шаблоны, чтобы удобно вставлять 		переиспользуемые части приложения, к тому же их очень удобно редактировать и поправлять, достаточно изменить в одном месте и на 	всех страницах, к которым подключен данный шаблон также происходят изменения, препроцессор(например SASS) увеличивает скорость 		написания css ,  IDE (например vs code) поправляет опечатки, подсвечивает синтаксис, всплывают подсказки.

8. Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
	webformyself, habr, tproger, toster, medium, learn.javascript(для повторения основ js) также прохожу периодически курсы на 		udacity. Решаю несложные алгоритмические задачи на checkio на js. React и Redux изучала по документации. Я также изучаю 		английский язык.

9. Расскажите нам немного о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
        Я стремлюсь развиваться в направлении front-end разработки.  Я постоянно нахожусь в процессе изучения, прохожу курсы, решаю 		задачи, активно изучаю React, Redux. Я хочу улучшить и расширить навыки разработки на JavaScript, React. Ищу дальнейшую 		возможность профессионального роста в веб-разработке. Я работала на фрилансе в течение 4 месяцев, также проходила стажировку в 		течение месяца.  На данный момент у меня есть несколько завершенных проектов, пример моего кода, вы можете увидеть 			https://github.com/LizaKalyuzhnaya/resurs 

Инструкция для запуска проекта:
	Тестовое задание я реализовала на стеке React-Redux, для запуска проекта # npm start
       	Ранее у меня не было опыта в тестировании приложения, поэтому постаралась разобрать основы  Jest, Enzyme. Для их запуска # npm 		test

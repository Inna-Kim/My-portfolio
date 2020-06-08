$(document).ready(function(){
    //  PAGE NAV

    $("#page-nav").onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollSpeed: 750,
        scrollIhreshold: 0.5,
        filter: "",
        easing: "swing",
        begin: function(){},
        end: function(){},
        scrollChange: function ($currentListItem){}
    });
    
    // 1. получить кнопку по которой будет клик
    // 2. получить мобильное меню
    // 3. прослушать клик по кнопке и по клику то добавлять, то удалять класс active у мобил.меню
        // 4.то добавлять, то удалять класс active у кнопки, по которой кликаем
    // 5. получить оверлей
    // 6.при клике по кнопке, то добавлять, то удалять класс active

    // 1.прослушать событие резайз у окна
    // 2. у всех дивов убрать класс active

    let mobileMenuToggle = document.querySelector('.toggle-menu');
    let mobMenu = document.querySelector(".header-menu");
    let overlay = document.querySelector("#overlay");

    mobileMenuToggle.addEventListener("click",function(){
        mobMenu.classList.toggle("active");
        this.classList.toggle("active");
        overlay.classList.toggle("active");
    });
    window.addEventListener("resize",function(){
        mobMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overlay.classList.remove('active');
    });

    //  // фильтрация проектов
    //  let containerE1 = document.querySelector("#portfolio-projects");

    //  let mixer = mixitup(containerE1, {
    //      classNames: {
    //          block: ""
    //      }
    //  });

    //  let filterToggles = document.querySelectorAll(".portfolio-works-toggle button");
    //  let portfolioBigCards = document.querySelectorAll(".portfolio-card");
 
    //  for (let i = 0; i < filterToggles.length; i++) {
    //      filterToggles[i].addEventListener("click", function (){
    //          if (i ==0) {
    //              for (let j = 0; j < 2; j++){
    //                  portfolioBigCards[j].classList.add("portfolio-card--big")
    //              }
    //          } else {
    //              for (let j = 0; j < 2; j++){
    //                  portfolioBigCards[j].classList.remove("portfolio-card--big")
    //              }
    //          }
    //     });
    




    // fake-placeholder

    const formInputs = document.querySelectorAll(".form-field");

    for (let item of formInputs) {
        const inputPlaceholder = item.nextElementSibling;

        item.addEventListener("focus", function () {
            inputPlaceholder.classList.add("active");
        });

        item.addEventListener("blur", function(){
            if(this.value == ""){
                inputPlaceholder.classList.remove("active");
            }
        })
    };

    // FORM VALIDATE
    $("#contacts-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            theme: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Введите Ваш email",
                email: "Отсутствует символ @"
            },
            theme: {
                required: "Введите тему сообщения"
            },
            message: {
                required: "Введите текст сообщения"
            }
        }, 
        submitHandler: function (form) {
            ajaxFormSubmit();
        }
    });

    // Функция AJAX запроса на сервер
    function ajaxFormSubmit() {
        let string = $("#contacts-form").serialize();  // Сохраняем  данные, введенные в форму в строку.

    // Формируем ajax запрос
        $.ajax({
            type: "POST",    // тип запроса - POST
            url: "php/mail.php",  // куда отправляем запрос
            data: string,  // Какие данные отправляем, в данном случае отправляем переменную string

            // Функция, если все прошло успешно
            success: function (html) {
                $("#contacts-form").slideUp(800);
                $("#answer").html(html);
            }

        });

        // Чтобы по submit больше ничего не выполнялось- делаем возврат false,  чтобы прервать цепочку срабатывания остальных функций
        return false;
    }
    
    //  Иконка Вверх top button
    $("#backTop").hide();
    $(window).scroll( function (){

        if($(this).scrollTop() > 200){
            $("#backTop").fadeIn();
        }
        else{
             $("#backTop").fadeOut();
        }
    })

})



 
 


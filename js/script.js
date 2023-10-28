// jQuery независимые вкладки
//$(document).ready(function() {
   // $('.accordion-item_trigger-jq').click(function() {
        //$(this).parent('.accordion-item-jq').toggleClass('accordion-item--active-jq'); /*через добавление класса*/
        // $(this).next('.accordion-item_content-jq').slideToggle(200); /*переключением*/
  //  });
//});

// jQuery одна активная вкладка
// $(document).ready(function() {
//    $('.accordion-item_trigger-jq').click(function() {
//        const parent = $(this).parent();

//        if (parent.hasClass('accordion-item--active-jq')) {
//            parent.removeClass('accordion-item--active-jq');
//        } else {
//            $('.accordion-item-jq').removeClass('accordion-item--active-jq');
//            parent.addClass('accordion-item--active-jq');
//        }
//    });
// });

// js независимые вкладки
// document.querySelectorAll('.accordion-item_trigger-jq').forEach((item) =>
//     item.addEventListener('click', () => {
//         item.parentNode.classList.toggle('accordion-item--active-jq');
//     })
// )

// js одна активная вкладка
document.querySelectorAll('.accordion-item_trigger-jq').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion-item--active-jq')) {
            parent.classList.remove('accordion-item--active-jq');
        } else {
           document
       .querySelectorAll('.accordion-item-jq')
       .forEach((child) => child.classList.remove('accordion-item--active-jq'));

                parent.classList.add('accordion-item--active-jq');
        }
        
    })
)

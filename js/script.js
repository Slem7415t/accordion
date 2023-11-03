// jQuery независимые вкладки
$(document).ready(function() {
   $('.accordion-item_trigger-jq').click(function() {
        $(this).parent('.accordion-item-jq').toggleClass('accordion-item--active-jq'); /*через добавление класса*/
       /* $(this).next('.accordion-item_content-jq').slideToggle(200);*/ /*переключением*/
   });
});

// jQuery одна активная вкладка
$(document).ready(function() {
   $('.accordion-item_trigger-jq2').click(function() {
       const parent = $(this).parent();

       if (parent.hasClass('accordion-item--active-jq2')) {
           parent.removeClass('accordion-item--active-jq2');
       } else {
           $('.accordion-item-jq2').removeClass('accordion-item--active-jq2');
           parent.addClass('accordion-item--active-jq2');
       }
   });
});

// js независимые вкладки
document.querySelectorAll('.accordion-item_trigger-js').forEach((item) =>
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('accordion-item--active-js');
    })
)

// js одна активная вкладка
document.querySelectorAll('.accordion-item_trigger-js2').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion-item--active-js2')) {
            parent.classList.remove('accordion-item--active-js2');
        } else {
           document
       .querySelectorAll('.accordion-item-js2')
       .forEach((child) => child.classList.remove('accordion-item--active-js2'));

                parent.classList.add('accordion-item--active-js2');
        }
        
    })
)

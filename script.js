//2.JQuery has two parts 1. select an element 2. Act on it
jQuery(document).ready(function(){
        jQuery(".ui-close").fadeOut();

});

// 3.But we want to hide this box. Lets do event Handling
jQuery(document).ready(function(){
    jQuery(".ui-close").click(function(){
        jQuery(".ui-message").hide();
    });
});

//4.Okay we understand event handling but that closed all the boxes!
//We want to traverse the DOM tree to find the specific box/div we should close
jQuery(document).ready(function(){
    jQuery(".ui-close").click(function(){
        jQuery(this).parents(".ui-message").fadeOut(); //"this" refers to object that were running method on and says go to that parent
    });
});

//5. Nice! Now let's manipulate the DOM. We manually added the 'X' that's why
//it's only on the first. Dynamically add the button to all
//**move span from html to here**
jQuery(document).ready(function(){
  jQuery(".ui-message").append('<span class="ui-close"> X</span>');
    jQuery(".ui-close").click(function(){
        jQuery(this).parents(".ui-message").fadeOut(); //"this" refers to object that were running method on and says go to that parent
    });
});

jQuery(document).ready(function(){
    jQuery(".ui-message").append('<span class="ui-close"> X</span>');
      jQuery(".ui-close").click(function(){
          jQuery(this).parents(".ui-message").fadeOut(); //"this" refers to object that were running method on and says go to that parent
      });

      //Dynamically load about content
      jQuery("#about").click(function(){
          jQuery(".about-placeholder").load("about.html .body-text");
          return false;
      });
  });

jQuery(document).ready(function ($) {
  // Contact form.
  $('form.contactForm').submit(function () {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i,
      phoneExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

    // Run all inputs.
    f.children('input').each(function () { // 'children' means get tag names.
      var i = $(this); // Current input.
      var rule = i.attr('data-rule'); // Get input with 'data-rule' attribute.

      if (rule !== undefined) {
        var ierror = false; // Error flag for current input.
        var pos = rule.indexOf(':', 0); // Get index position of ':'.

        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length); // Get string from ':' position + 1 to 'rule' length position.
          rule = rule.substr(0, pos); // Get string from zero position to 'pos'.
        } else {
          rule = rule.substr(pos + 1, rule.length); // Get string from ':' position + 1 to rule length position.
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              // Empty required input.
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              // 'minlen' attribute smaller than required.
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              // E-mail form not provided.
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.attr('checked')) {
              // Input checked.
              ferror = ierror = true;
            }
            break;

          case 'tel':
            if (!phoneExp.test(i.val())) {
              // Phone not provided.
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'Niepoprawne dane') : '')).show('blind');
      }
    });

    // Run all inputs.
    f.children('textarea').each(function () { // 'children' means get tag names.
      var i = $(this); // Current input.
      var rule = i.attr('data-rule'); // Get input with 'data-rule' attribute.

      if (rule !== undefined) {
        var ierror = false; // Error flag for current input.
        var pos = rule.indexOf(':', 0); // Get index position of ':'.

        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length); // Get string from ':' position + 1 to 'rule' length position.
          rule = rule.substr(0, pos); // Get string from zero position to 'pos'.
        } else {
          rule = rule.substr(pos + 1, rule.length); // Get string from ':' position + 1 to 'rule' length position.
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              // Empty required input.
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              // 'minlen' attribute smaller than required.
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'Niepoprawne dane') : '')).show('blind');
      }
    });

    if (ferror) return false;
    else var str = $(this).serialize(); // Return serialized form names with values.
    $.ajax({
      type: 'POST',
      url: 'php/contact-form.php',
      data: str,
      success: function (msg) {
        alert(msg);
        if (msg === 'OK') {
          $('#sendmessage').addClass('show');
          $('#errormessage').removeClass('show');
        } else {
          $('#sendmessage').removeClass('show');
          $('#errormessage').addClass('show');
          $('#errormessage').html(msg);
        }
      }
    });
    return false;
  });
});
/**
 * Created with JetBrains PhpStorm.
 * User: d1ma
 * Date: 19.10.12
 * Time: 19:45
 * To change this template use File | Settings | File Templates.
 */
(function ($) {
  Drupal.behaviors.hr_preboarding_states = {
    attach:function (context, settings) {

      if (context == window.document || $(context).attr('id') == 'quinn-ob-hr-preboarding-checklist') {
        var i = 1;

        $('#edit-submit').show();
        for (i; i < 7; i++) {
          if (!($('input[name="completed_' + i + '"]:checked').length ||
                $('input[name="not_required_' + i + '"]:checked').length)) {
            $('#edit-submit').hide();
          }
        }
      }
      else {
        return;
      }
    }
  }

  Drupal.behaviors.supervisor_preboarding_states = {
    attach:function (context, settings) {

      if (context == window.document || $(context).attr('id') == 'quinn-ob-supervisor-preboarding-checklist') {
        var i = 1;

        $('#edit-submit').show();
        for (i; i < 21; i++) {
          if (i == 13 || i == 18) {
            continue;
          } else {
            if (!($('input[name="completed_' + i + '"]:checked').length || $('input[name="not_required_' + i + '"]:checked').length)) {
              $('#edit-submit').hide();
            }
          }
        }
      }
      else {
        return;
      }
    }
  }

  Drupal.behaviors.supervisor_onboarding_states = {
    attach:function (context, settings) {

      if (context == window.document || $(context).attr('id') == 'quinn-ob-supervisor-onboarding-checklist') {
        var i = 1;

        $('#edit-submit').show();
        $('table.onboarding-process tbody tr').each(
            function(e){
              if (!($('input[name="completed_' + i + '"]:checked').length ||
                    $('input[name="not_required_' + i + '"]:checked').length)) {
                $('#edit-submit').hide();
              }
              i++;
            }
        );
      }
      else {
        return;
      }
    }
  }

})(jQuery);
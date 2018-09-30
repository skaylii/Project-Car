function form() {
    const $form = $("#mainContactForm");
    const $inputs = $form.find("input:required, textarea:required");

    $form.attr('novalidate', true);

    $inputs.on("input", function() {
        if (!$(this).get(0).checkValidity()) {
            $(this).addClass('field-error');
        } else {
            $(this).removeClass('field-error');
        }
    })

    $form.on("submit", function(e) {
        e.preventDefault();

        let canSubmit = true;
        $inputs.each(function() {
            if (!$(this).get(0).checkValidity()) {
                $(this).addClass('field-error');
                canSubmit = false;
            } else {
                $(this).removeClass('field-error');
            }
        });

        if (canSubmit) {
            $form.find(':submit').addClass('loading');
            $form.find(':submit').prop("disabled", true);

            $.ajax({
                url : $form.attr('action'),
                method : "POST",
                dataType : "json",
                data : {
                    name :    $('#formName').val(),
                    email :   $('#formEmail').val(),
                    message : $('#formMessage').val(),
                    cars : $('#formCars').val()
                }
            })
            .done(result => {
                $inputs.val("");
                $form.find(".form-message").remove();
                $form.find(':submit').after(`
                    <div class="form-message">Wiadomość została wysłana</div>
                `);
                setTimeout(() => {
                    $form.find(".form-message").fadeOut();
                }, 2000)
            })
            .always(result => {
                $form.find(':submit').removeClass('loading');
                $form.find(':submit').prop("disabled", false);
            })

        } else {
            console.log('NIE MOZNA')
        }

    })
}

export default form;
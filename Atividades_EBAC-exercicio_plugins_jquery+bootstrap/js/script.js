$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#zipcode').mask('00000-000');
    $('#cpf').mask('000.000.000-00');
/*
    $('form').validate({
        rules: {
            nome: {
                minlength: 3,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                minlength: 10,
                maxlength: 11,
                required: true,
                digits: true
            },
            cpf: {
                maxlength: 11,
                minlength: 11,
                required: true,
                digits: true
            },
            zipcode: {
                maxlength: 8,
                minlength: 8,
                required: true,
                digits: true
            }
        },
        messages: {
            nome: {
                required:'Este campo é obrigatório',
                minlength: 'O nome precisa conter ao menos 3 caracteres'
                },
            email: {
                required:'Este campo é obrigatório',
                },
            telefone: { 
                required:'Este campo é obrigatório',
                minlength: 'O número de telefone precisa conter ao menos 10 digitos',
                maxlength: 'O número de telefone precisa conter no máximo 11 digitos'
            },
            cpf: {
                required:'Este campo é obrigatório',
                maxlength: 'O CPF precisa conter 11 digitos',
                minlength: 'O CPF precisa conter 11 digitos'
            },
            zipcode: {
                required:'Este campo é obrigatório',
                maxlength: 'O CEP precisa conter 8 digitos',
                minlength: 'O CEP precisa conter 8 digitos'
            },
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            alert(`Existem ${camposIncorretos} campos inválidos no formulário.`);
        }
    });
*/
});
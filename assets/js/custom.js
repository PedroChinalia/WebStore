//Função para validar campos
function validate( elem ){
    if( elem.val() == '') {

       console.log('o campo de '+ elem.attr('id') + ' é obrigatório')

       elem.parent().find('.text-muted').show()

       elem.addClass('invalid')

       return false
    } else {
       elem.parent().find('.text-muted').hide()
       elem.removeClass('invalid')
    }
}

//Função para validar o campo de email
function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            this.classList.remove('invalid');
            this.parentNode.classList.remove('invalid');
        } else {
            this.classList.add('invalid');
            this.parentNode.classList.add('invalid');
            return false;
        }

    });
}

let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

//Campos que passam pela validação
$('body').on('blur', '#login_email', function(){
    validate($(this))
})

$('body').on('blur', '#login_senha', function(){
    validate($(this))
})

$('body').on('blur', '#cadastro_email', function(){
    validate($(this))
})

$('body').on('blur', '#cadastro_senha', function(){
    validate($(this))
})

$('body').on('blur', '#cadastro_nome', function(){
    validate($(this))
})

$('body').on('blur', '#cadastro_telefone', function(){
    validate($(this))
    $(this).mask('(00)00000-0000');
})

$('body').on('blur', '#novidades_email', function(){
    validate($(this))
})

//Alterando css on hover
$(".card-categoria").hover(function(){
    $(this).css("box-shadow", "0 7px 21px 0 rgba(0, 0, 0, 0.30)");
    }, function(){
    $(this).css("box-shadow", "0px 6px 20px 0px rgba(0, 0, 0, 0.19)");
});

$("#btn-novidades").hover(function(){
    $(this).css("box-shadow", "0px 5px 10px 0px rgba(255, 255, 255, 0.19)");
    }, function(){
    $(this).css("box-shadow", "0 0px 0px 0 rgba(0, 0, 0, 0.19)");
});

//função para exibir alerta
function alertaCarrinho(){
    alert("Seu carrinho está vazio!");
}  
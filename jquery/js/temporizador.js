(function ($) {
    $.fn.temporizador = function (options) {
        const defaultOptions = $.extend({
            mensagem: 'Em breve!',
            harario: '23:59:59'
        },options)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="digito">').html(':')
        const separadorMinuto = $('<span class="digito">').html(':')
        const mensagem = $('<div class="mensagem">').html(defaultOptions.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, 
            separadorMinuto, segundoDezena, segundoUnidade, mensagem)

        return this
    }
})(JQuery)

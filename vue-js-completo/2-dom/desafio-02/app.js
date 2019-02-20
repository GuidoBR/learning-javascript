new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Clicado');
        },
        salvarValor(event) {
            this.valor = event.target.value;
        },
    }
})
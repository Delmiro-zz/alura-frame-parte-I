class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }


    adiciona(event){
        event.preventDefault();
        
        let data = new Date(...
            this._inputData.value.split('-').
            map(function(data, posicao){
                if(posicao == 1){
                    return data - 1;
                }
                return data;
            })
        );

        let negociacao = new Negociacao(
            data,
            this._inputData.value,
            this._inputValor.value
        );
        console.log(data);
        console.log(negociacao);
    }

}
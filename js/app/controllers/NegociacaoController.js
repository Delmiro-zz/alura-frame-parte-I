class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }


    adiciona(event){
        event.preventDefault();     
       
        let negociacao = new Negociacao(
            DateHelper.textParseData(this._inputData.value),
            this._inputData.value,
            this._inputValor.value
            );     

        console.log(negociacao);
        console.log(DateHelper.dataParseText(negociacao.data));    
    }

}
class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }


    adiciona(event){
        event.preventDefault();
        let helper = new DateHelper();
        let data = helper.textParseData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            this._inputData.value,
            this._inputValor.value
            );     

        console.log(negociacao);
        console.log(helper.dataParseText(negociacao.data));    
    }

}
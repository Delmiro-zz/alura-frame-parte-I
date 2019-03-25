class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new ListaNegociacoes();
    }


    adiciona(event){
        event.preventDefault();     
        this._negociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        console.log(this._negociacoes.getNegociacoes);    
    }
    
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;
        
        this._inputData.focus();
    }
    
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textParseData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );     
    }

}
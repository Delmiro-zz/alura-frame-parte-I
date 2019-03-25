class ListaNegociacoes{

    constructor(){
        this._negociacoes = [];
    }   

    adiciona(negociacao){
        
        this._negociacoes.push(negociacao);
    }

    get getNegociacoes(){
        
        return this._negociacoes;
    }

}
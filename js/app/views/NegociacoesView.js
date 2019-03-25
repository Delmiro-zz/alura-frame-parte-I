class NegociacoesView{
    
    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
         return `
         <table class="table table-hover table-bordered">
         <thead>
             <tr>
                 <th>DATA</th>
                 <th>QUANTIDADE</th>
                 <th>VALOR</th>
                 <th>VOLUME</th>
             </tr>
         </thead>
         <tbody>
            ${model.getNegociacoes.map(n =>{
                return `
                    <tr>
                        <td>${DateHelper.dataParseText(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                `
            }).join('')}
         </tbody>
         <tfoot>
            <td colspan="3"></td>
            <td>${model.getNegociacoes.reduce(function(total, n){
                        return total + n.volume;
                    }, 0.0)
                }
            </td>
         </tfoot>
        </table>`;
    }

    _update(model){
        this._elemento.innerHTML = this._template(model);
    }
}

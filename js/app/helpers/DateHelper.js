class DateHelper{

    textParseData(text){
        return new Date(...text.split('-').map(function(data, posicao){
                if(posicao == 1){
                    return data - 1;
                }
                return data;
            })
        );
    }

    dataParseText(data){
        return data.getDate() + '/' + (data.getMonth + 1) + '/' + data.getFullYear;
    }
}
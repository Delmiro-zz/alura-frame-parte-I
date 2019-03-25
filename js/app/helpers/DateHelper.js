class DateHelper{

    static textParseData(text){
        return new Date(...text.split('-').map((data, posicao) => data - posicao % 2));
    }

    static dataParseText(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;       
    }

}
function add(a,b){
    return a+b;
}

function put(color,x,y,ary){

    if (color != 1 && color != 2){
        throw 'parameter error : color';
    }

    if ( x<0 || y<0 || x > 5 || y > 5){
        throw 'parameter error : x or y';

    }

    if ( ary[x][y] != 0){
        throw 'not vacancy';
    }

    ary[x][y]=color;

 
    return ary;



}

function flipWidth(color,hight,width,ary){

    flipWidthRight(color,hight,width,ary[hight]);
    flipWidthLeft(color,hight,width,ary[hight]);

    return ary;

}
function flipHight(color,hight,width,ary){

    //引き渡し用の配列作成
    var paramArray=new Array();
    var i = 0;
    while(i<ary.length){
        paramArray[i]=ary[i][width];
        i++;
    }
    flipWidthLeft(color,hight,width,paramArray);
    flipWidthRight(color,hight,width,paramArray);

    //aryにとりあえず戻す
    var j =0;
    while(j<ary.length){
        ary[j][width]=paramArray[j];
        j++;
    }
    return ary;

}
function flipWidthRight(color,hight,width,ary){
    var start = width+1;//あとで上限ごえ
    var end =width;
    if(ary[start] == color && ary[start] == 0 ){
        return ary;
    }
    end = ary.indexOf(color,start);
 
    var i = width;

    while(i<end){
        ary[i]=color;
        i++;
    }


    return ary;

}

function flipWidthLeft(color,hight,width,ary){
    var start = width-1;//あとで直す。下限
    var pos;

    if(ary[start] == color && ary[start] == 0 ){
        return ary;
    }

    pos = ary.lastIndexOf(color,start);

    //なかった時はそのままリターン
    if(pos<0){
        return ary;
    }

    var i = pos;//本当は最初の代入は不要

    while(i<width){
        ary[i]=color;
        i++;
    }
    return ary;

}
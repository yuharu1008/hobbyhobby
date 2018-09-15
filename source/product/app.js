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
    var start = width+1;//あとで上限ごえ
    var end =width;
    if(ary[hight][start] != color && ary[hight][start] != 0 ){
        end = ary[hight].indexOf(color,start);
    }


    var i = width;

    while(i<end){
        ary[hight][i]=color;
        i++;
    }

    //パラメタそのまま引き渡す
    flipWidthLeft(color,hight,width,ary);

    return ary;

}

function flipWidthLeft(color,hight,width,ary){
    var start = width-1;//あとで直す。下限
    var end =width;

    if(ary[hight][start] != color && ary[hight][start] != 0 ){
        end = ary[hight].lastIndexOf(color,start);
    }

    //なかった時はそのままリターン
    if(end<0){
        return ary;
    }

    var i = width;//本当は最初の代入は不要

    while(i>end){
        ary[hight][i]=color;
        i--;
    }
    return ary;

}
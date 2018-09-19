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
exports.put = put;

function flipWidth(color,hight,width,ary){
    var ret = new Array();

    ret = (flipWidthRight(color,hight,width,ary[hight])).concat(flipWidthLeft(color,hight,width,ary[hight]));

    var i =0;
    while(i<ret.length){
        var flipPos = ret [i];
        ary[hight][flipPos]=color;
        i++;
    }
    return ary;

}
exports.flipWidth = flipWidth;

function flipHight(color,hight,width,ary){

    //引き渡し用の配列作成
    var paramArray=new Array();
    var i = 0;
    while(i<ary.length){
        paramArray[i]=ary[i][width];
        i++;
    }
    var ret = new Array();

    ret = (flipWidthRight(color,hight,width,paramArray)).concat(flipWidthLeft(color,hight,width,paramArray));

    //ary置き換え
    var i =0;
    while(i<ret.length){
        var flipPos = ret [i];
        ary[flipPos][width]=color;
        i++;
    }
    return ary;

}
exports.flipHight = flipHight;

function flipWidthRight(color,hight,width,ary){
    var start = width+1;//あとで上限ごえ
    var flipPos = new Array();

    if(ary[start] == color && ary[start] == 0 ){
        return flipPos;
    }

    var i = start;
    var j = 0;
    var isFind = false;

    while(i<ary.length){
        if(ary[i]==color){
            isFind = true;
            break;
        }
        flipPos[j] = i;
        i++;
        j++;

    }
    if(isFind){
        return flipPos;
    }
    return new Array();

}
exports.flipWidthRight = flipWidthRight;

function flipWidthLeft(color,hight,width,ary){
    var start = width-1;//あとで上限ごえ
    var flipPos = new Array();

    if(ary[start] == color && ary[start] == 0 ){
        return flipPos;
    }

    var i = start;
    var j = 0;
    var isFind = false;

    while(i>=0){
        if(ary[i]==color){
            isFind = true;
            break;
        }
        flipPos[j] = i;
        i--;
        j++;

    }

    if(isFind){
        return flipPos;
    }
    return new Array();

}
exports.flipWidthLeft = flipWidthLeft;





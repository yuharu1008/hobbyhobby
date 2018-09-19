var source = require('../product/app.js');
var put = source.put;
var flipWidth = source.flipWidth;
var flipHight = source.flipHight;
var flipWidthLeft = source.flipWidthLeft;
var flipWidthRight = source.flipWidthRight;


describe('putのテスト',function(){

    var arraytest;

   beforeEach(function(){
        arraytest = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
   });

    it('1を,0,0に設定できる',function(){
        var ret = put(1,0,0,arraytest)
        expect(ret[0]).toEqual([1,0,0,0,0,0]);
    });

   it('2を,0,5に設定',function(){
        var ret = put(2,0,5,arraytest)
        expect(ret[0]).toEqual([0,0,0,0,0,2]);
    }); 
    
    it('1を,5,0に設定できる',function(){
        var ret = put(1,5,0,arraytest)
        expect(ret[5]).toEqual([1,0,0,0,0,0]);
    });

   it('2を,5,5に設定',function(){
    var ret = put(2,5,5,arraytest)
    expect(ret[5]).toEqual([0,0,0,0,0,2]);
    }); 

it('2を,0,0に設定',function(){
    var ret = put(2,0,0,arraytest)
    expect(ret[0]).toEqual([2,0,0,0,0,0]);
});

/*
    色のパラメタチェック
*/
it('0を,0,0に設定したら例外',function(){
    expect(function(){
        put(0,0,0,arraytest);
    }).toThrow();
});

it('3を,0,0に設定したら例外',function(){
    expect(function(){
        put(3,0,0,arraytest);
    }).toThrow();
});
   
/* 
    番地の下限チェック
*/
it('1を,-1,0に設定したら例外',function(){
    expect(function(){
        put(1,-1,0,arraytest);
    }).toThrow();
});
it('1を,0,-1に設定したら例外',function(){
    expect(function(){
        put(1,0,-1,arraytest);
    }).toThrow();

});

/*
    番地の上限チェック
*/
it('2を,6,0に設定したら例外',function(){
    expect(function(){
        put(2,6,0,arraytest);
    }).toThrow();
});

it('2を,0,6に設定したら例外',function(){
    expect(function(){
        put(2,0,6,arraytest);
    }).toThrow();
});
/*
    オセロ盤のサイズチェック
    あとで入れる
*/
/*
    盤の置き場所状態チェック
*/
it('置いてある所に、置こうとすると例外',function(){
    arraytest[0][0] = 1;
    expect(function(){
        put(2,0,0,arraytest);
    }).toThrow();
});


});

describe('flipWidthのテスト',function(){
    var othellotable;
    beforeEach(function(){
        othellotable = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
   });
    it('ひっくり返す（右方向１つ）',function(){
        othellotable = [
            [1,2,1,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidth(1,0,0,othellotable);
        expect(ret[0]).toEqual([1,1,1,0,0,0]);

    });
    it('ひっくり返す（右方向複数）',function(){
        othellotable = [
            [1,2,2,2,1,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidth(1,0,0,othellotable);
        expect(ret[0]).toEqual([1,1,1,1,1,0]);

    });
    it('ひっくり返す（右方向対象なし）',function(){
        othellotable = [
            [1,1,2,1,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidth(1,0,0,othellotable);
        expect(ret[0]).toEqual([1,1,2,1,0,0]);

    });
    it('ひっくり返す（右方向開始位置途中）',function(){
        othellotable = [
            [0,0,1,2,2,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidth(1,0,2,othellotable);
        expect(ret[0]).toEqual([0,0,1,1,1,1]);

    });
    it('ひっくり返す（右方向開始位置右端）',function(){
        othellotable = [
            [0,0,0,0,0,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidth(1,0,5,othellotable);
        expect(ret[0]).toEqual([0,0,0,0,0,1]);

    });
    it('ひっくり返す（左方向１つ）',function(){
        othellotable = [
            [0,0,0,1,2,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidth(1,0,5,othellotable);
        expect(ret[0]).toEqual([0,0,0,1,1,1]);

    });
    it('ひっくり返す（左方向複数）',function(){
        othellotable = [
            [1,2,2,2,2,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidth(1,0,5,othellotable);
        expect(ret[0]).toEqual([1,1,1,1,1,1]);

    });
    it('ひっくり返す（左方向対象なし）',function(){
        othellotable = [
            [1,2,2,2,1,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidth(1,0,5,othellotable);
        expect(ret[0]).toEqual([1,2,2,2,1,1]);
    });

    it('ひっくり返す（左右両方複数）',function(){
        othellotable = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [1,2,2,1,2,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidth(1,2,3,othellotable);
        expect(ret[2]).toEqual([1,1,1,1,1,1]);
    });

    it('ひっくり返す（上方向複数）',function(){
        othellotable = [
            [0,1,0,0,0,0],
            [0,2,0,0,0,0],
            [0,2,2,1,2,1],
            [0,1,0,0,0,0],
            [0,1,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipHight(1,3,1,othellotable);
        expect(ret[0]).toEqual([0,1,0,0,0,0]);
        expect(ret[1]).toEqual([0,1,0,0,0,0]);
        expect(ret[2]).toEqual([0,1,2,1,2,1]);
        expect(ret[3]).toEqual([0,1,0,0,0,0]);
        expect(ret[4]).toEqual([0,1,0,0,0,0]);
        expect(ret[5]).toEqual([0,0,0,0,0,0]);
    });

    it('ひっくり返す（下方向複数）',function(){
        othellotable = [
            [0,1,0,0,0,0],
            [0,2,0,0,0,0],
            [0,2,2,1,2,1],
            [0,2,0,0,0,0],
            [0,2,0,0,0,0],
            [0,1,0,0,0,0]
        ];
        var ret = flipHight(1,0,1,othellotable);
        expect(ret[0]).toEqual([0,1,0,0,0,0]);
        expect(ret[1]).toEqual([0,1,0,0,0,0]);
        expect(ret[2]).toEqual([0,1,2,1,2,1]);
        expect(ret[3]).toEqual([0,1,0,0,0,0]);
        expect(ret[4]).toEqual([0,1,0,0,0,0]);
        expect(ret[5]).toEqual([0,1,0,0,0,0]);
    });

    it('ひっくり返す（上下方向複数）',function(){
        othellotable = [
            [0,1,0,0,0,0],
            [0,2,0,0,0,0],
            [0,1,2,1,2,1],
            [0,2,0,0,0,0],
            [0,2,0,0,0,0],
            [0,1,0,0,0,0]
        ];
        var ret = flipHight(1,2,1,othellotable);
        expect(ret[0]).toEqual([0,1,0,0,0,0]);
        expect(ret[1]).toEqual([0,1,0,0,0,0]);
        expect(ret[2]).toEqual([0,1,2,1,2,1]);
        expect(ret[3]).toEqual([0,1,0,0,0,0]);
        expect(ret[4]).toEqual([0,1,0,0,0,0]);
        expect(ret[5]).toEqual([0,1,0,0,0,0]);
    });
});

describe('flipWidthRightのテスト',function(){
    var othellotable;
    beforeEach(function(){
        othellotable = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
   });
    it('ひっくり返す（右方向１つ）',function(){
        othellotable = [
            [1,2,1,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidthRight(1,0,0,othellotable[0]);
        expect(ret).toEqual([1]);

    });
    it('ひっくり返す（右方向複数）',function(){
        othellotable = [
            [1,2,2,2,2,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidthRight(1,0,0,othellotable[0]);
        expect(ret).toEqual([1,2,3,4]);

    });
    it('ひっくり返す（右方向対象なし）',function(){
        othellotable = [
            [1,1,1,1,1,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidthRight(1,0,5,othellotable[0]);
        expect(ret).toEqual([]);

    });

    describe('flipWidthLeftのテスト',function(){
        var othellotable;
        beforeEach(function(){
            othellotable = [
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0]
            ];
       });
    it('ひっくり返す（左方向１つ）',function(){
        othellotable = [
            [0,0,0,1,2,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidthLeft(1,0,5,othellotable[0]);
        expect(ret).toEqual([4]);

      });
    });
    it('ひっくり返す（左方向複数）',function(){
        othellotable = [
            [1,2,2,2,2,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidthLeft(1,0,5,othellotable[0]);
        expect(ret).toEqual([4,3,2,1]);

      });
      it('ひっくり返す（左方向対象なし）',function(){
        othellotable = [
            [2,2,2,2,2,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        var ret = flipWidthLeft(1,0,5,othellotable[0]);
        expect(ret).toEqual([]);

      });

    });

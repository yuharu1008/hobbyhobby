var source = require('../product/app.js');
var put = source.put;
var flipWidth = source.flipWidth;
var flipHight = source.flipHight;


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
});
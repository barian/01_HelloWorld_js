//myScene.js
var ThirdLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var size = cc.director.getWinSize();
        /*
                var sprite = cc.Sprite.create(res.HelloWorld_png);
                sprite.setPosition(size.width / 2, size.height / 2);
                sprite.setScale(0.8);
                this.addChild(sprite, 0);
        */
        var label = cc.LabelTTF.create("G a m e  o v e r !!", "Arial", 40);
        label.setPosition(size.width / 2, size.height * 4 / 5);
        this.addChild(label, 4);
        this.dropSpriteArray = new Array();

        // タップイベントリスナーを登録する
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);

        return true;
    },

    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
        // 次のシーンに切り替える
        cc.director.runScene(new MyScene());
    },
});

var closLayer = cc.Layer.extend({
  sprite: null,
  // ブロックを保持しておく配列
  dropSpriteArray: null,
  // 配列の宣言　ブロックの名前を指定
  dropArray: [res.drop01_png, res.drop02_png, res.drop03_png, res.drop04_png, res.drop05_png],
    ctor: function() {
        this._super();

        var size = cc.director.getWinSize();
        /*
                var sprite = cc.Sprite.create(res.HelloWorld_png);
                sprite.setPosition(size.width / 2, size.height / 2);
                sprite.setScale(0.8);
                this.addChild(sprite, 0);
        */
        this.dropSpriteArray = new Array();

        for(var i = 0;i < 42 ;i++){
          for(var j = 0;j < 5;j++){
            var rnd = Math.floor(Math.random() * 5);
            this.sprite = new cc.Sprite(this.dropArray[rnd]);
            cc.log(j);
            cc.log(this.dropArray[j]);
            this.sprite.attr({
                x: size.width - (j*60)-40,
                y: size.height - (i*60)-150,
                scale: 1.0,
                rotation: 0
            });
            this.dropSpriteArray.push(this.sprite);
          }
          this.dropSpriteArray.push(this.sprite);
          // this.addChild(this.sprite);
          this.addChild(this.dropSpriteArray[i], 0);
        }
    }
});


var ThirdScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new ThirdLayer();
        this.addChild(layer);
        var layer4 = new closLayer();
        this.addChild(layer4);
    }
});

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Keys {
    camera;
    keyD = new Image();
    keyW = new Image();
    keySpace = new Image();
    keyShift = new Image();
    keyS = new Image();
    keyL = new Image();
    warnLava = new Image();
    warnGrey = new Image();
    redFlag = new Image();
    hookDisabled = new Image();
    hookEnabled = new Image();
    leftClick = new Image()

    constructor(cam, root){
        this.camera = cam
        this.keyD.src = 'other/images/keys/D_Key_Dark.png';
        this.keyW.src = 'other/images/keys/W_Key_Dark.png';
        this.keyS.src = 'other/images/keys/S_Key_Dark.png';
        this.keyL.src = 'other/images/keys/L_Key_Dark.png'; //
        this.leftClick.src = 'other/images/keys/Mouse_Left_Key_Dark.png';
        this.keySpace.src = 'other/images/keys/Space_Key_Dark.png';
        this.warnLava.src = 'other/images/warn.png';
        this.warnGrey.src = 'other/images/warnGrey.png';
        this.redFlag.src = 'other/images/redFlag.png';
        this.hookDisabled.src = 'other/images/hookDisabled.png';
        this.hookEnabled.src = 'other/images/hookEnabled.png';
        this.game = root
    }
    drawKeys() {

        if(this.game.debug.shortsMap) {} else {
            this.drawMisc()
            this.jump(4480, 245)
            this.jump(3850, -410)
            this.jump(2273, 642)
            this.hookTip(5704,-200,0)
            this.hookTip(13093,-4439,0)
            this.hookTip(13946,-3594,0)
            
        }

    } // 6851 -130
 

    jump(x, y) {
        ctx.drawImage(this.keyW, x + this.camera.x, y + this.camera.y)
        ctx.drawImage(this.keySpace, x + this.camera.x, (y + 50) + this.camera.y)
    }

    hookTip(x, y, type){
        ctx.drawImage(this.leftClick, x + this.camera.x, y + this.camera.y)
        ctx.drawImage(this.hookEnabled, x+100 + this.camera.x, y + this.camera.y)
    }

    drawMisc(){
        ctx.drawImage(this.keyD, 388 + this.camera.x, 600 + this.camera.y)
        ctx.drawImage(this.redFlag, 1544 + this.camera.x, 67 + this.camera.y, 100, 100)
        ctx.drawImage(this.keyS, 13530 + this.camera.x, -4937 + this.camera.y)
        ctx.drawImage(this.keyW, 14496 + this.camera.x, -4253 + this.camera.y)
    }
    
}

/*


*/
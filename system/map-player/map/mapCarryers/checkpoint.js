'use strict';

import { Hitbox } from "../../Hitbox.js";

export class Checkpoint {

    // fields
    hitboxes = new Array();

    constructor() {
        this.#createHitboxes();
    }
    
    #createHitboxes() {
        this.hitboxes[this.hitboxes.length] = new Hitbox(5246,395,393,438 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(9850,-718,612,138 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(14023,-2172,600,166 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(16704,-5017,96,622 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(11223,-2390,274,17 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(3025,-3239,89,323 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(688,-2574 - 300,59,202 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-3533,-5767,46,749 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-10340,-6208,46,573 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(-14153,-6187,332,576 ) // 10
        this.hitboxes[this.hitboxes.length] = new Hitbox(1287,7149,284,51 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4362,9222,253,33 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(7613,8817,69,25 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(6934,7157,90,33 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(8493,3457,279,87 )
        this.hitboxes[this.hitboxes.length] = new Hitbox(4214,-7017,157,64 )
 
 
 
 
        
        /*
        this.hitboxes[6] = new Hitbox(7824.600652535286,-594.7523150074721,370.9999875076246,473.92704492161954 )
        this.hitboxes[3] = new Hitbox(6554.600640036759,-3115.8253071301892,394.02956252528475,226.461460671424 )
        this.hitboxes[4] = new Hitbox(6075.685039221042,-4782.825799599384,394.91572690753037,358.78818618766945 )
        this.hitboxes[5] = new Hitbox(6923.599944741716,-4797.825306210291,124.00069428279312,320.0006331007362 )
        
        this.hitboxes[6] = new Hitbox(10275.695525955325,-4300.286376317476,557.842769887031,472.77008544527234 )
        this.hitboxes[7] = new Hitbox(13067.538295509174,-5566.379948488491,155.9999999744432,512.0000000008877 )
        this.hitboxes[8] = new Hitbox(16189.539096611536,-7859.379947940197,137.99919899070846,176.00472183250167 )
        this.hitboxes[9] = new Hitbox(14805.538295619685,-10088.379898503495,227.00012839220835,226.05810475716498 )
        /*/
    }

    draw(cameraX, cameraY, color = "rgba(0, 255, 50, .3)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].draw(cameraX, cameraY, color);
        }

    }

    nDraw(camera, color = "rgba(0, 255, 50, .3)") {
        
        for (let i = 0; i < this.hitboxes.length; i++) {
            this.hitboxes[i].nDraw(camera, color);
        }

    }
}

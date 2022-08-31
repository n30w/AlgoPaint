import P5 from "p5"
import Settings from "./settings";

export default class ComplexConstruct {
    _p5: P5;
    _settings: Settings;
    
    constructor(p5: P5, settings: Settings) {
        this._p5 = p5;
        this._settings = settings;
    }

    createSphere(sphereAmount: number, renderColor: boolean, rotX: boolean, rotY: boolean): void {
        const p5 = this._p5;
        const s = this._settings;

        if (rotX) p5.rotateY(p5.frameCount/s.speedControl*2);
        if (rotY) p5.rotateX(p5.frameCount/s.speedControl);

        if (renderColor) {
            let c = p5.color((p5.frameCount % 255), 203, 200);
            p5.fill(c);
        } else {
            let c = p5.color(255, 255, 255);
            p5.fill(c);
        }

        for (let i = 0; i < sphereAmount; i++) {
            p5.rotateZ(p5.tan(p5.frameCount/s.speedControl**s.intensityMod) + s.startField);
            p5.translate(0, p5.height/sphereAmount*2);
            p5.box(p5.height/sphereAmount, s.detailX, s.detailY);
        }
    }

    createConstruct(): void {
        const p5 = this._p5
        const s = this._settings;
        if (s.renderSmear) {
            if(p5.frameCount % 255 == 0) {
                // background(bkgColor);
            }
        } else {
            // background(bkgColor);
        }

        for (let i = 0; i < s.constructMultiplier; i++) {
            this.createSphere(s.sphereAmount, s.renderColor, true, true);
        }

        p5.translate(0, 0, -2000);
    }

}
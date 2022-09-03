import P5 from "p5";
import ComplexConstruct from "./construct";
import Settings from "./settings"

export const sketch = (p5: P5) => {

    let cc: ComplexConstruct;

    let s: Settings = {
        sphereAmount: 20,
        speedControl: 200,
        constructMultiplier: 15,
        detailX: 20,
        detailY: 100,
        startField: 22,
        intensityMod: 2,
        backgroundColor: 0,
        renderColor: false,
        renderSmear: false
    };

    p5.setup = () => {
        const canvas = p5.createCanvas(1000, 1000, "webgl");
        canvas.parent("p5Canvas");
        p5.background(s.backgroundColor);
        p5.colorMode(p5.HSL, 255);
        cc = new ComplexConstruct(p5, s);
    };

    p5.draw = () => {
        cc.createConstruct();        
    };
};
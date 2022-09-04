import P5 from "p5";
import ComplexConstruct from "./construct";
import Settings from "./settings"

export const sketch = (p5: P5) => {

    let cc: ComplexConstruct;

    // Built-in presets! Map makes it easier to select :)
    let presets = new Map<string, Settings>([
        [
            "twist_chain", 
            {   // Cool Twisty Chain Thing
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
            }
        ],

        [
            "twist_chain_2", 
            {
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
            }
        ],

        [
            "curvy_stairs", 
            {
                sphereAmount: 10,
                speedControl: 200,
                constructMultiplier: 2,
                detailX: 10,
                detailY: 2,
                startField: 0,
                intensityMod: 2,
                backgroundColor: 0,
                renderColor: false,
                renderSmear: false
            }
        ], 

        [
            "wonderful_rect", 
            {
                sphereAmount: 90,
                speedControl: 200,
                constructMultiplier: 23,
                detailX: 1,
                detailY: 2,
                startField: 0,
                intensityMod: 2,
                backgroundColor: 0,
                renderColor: false,
                renderSmear: false
            }
        ], 
    ]);

    p5.setup = () => {
        const canvas = p5.createCanvas(1000, 1000, "webgl");
        canvas.parent("p5Canvas");
        p5.background(0);
        p5.colorMode(p5.HSL, 255);
        cc = new ComplexConstruct(p5, presets.get("wonderful_rect"));
    };

    p5.draw = () => {
        // Perhaps I can add some kind of light somewhere?
        // Create a save frame function, viewer can take a picture of their painting
        cc.createConstruct();        
    };
};
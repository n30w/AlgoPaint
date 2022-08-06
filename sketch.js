/**
 * Neo Alabastro - Render 2022
 * Rendering program that should create complex shapes based off of trigonometric functions. 
 * TODO:
 * - Preset support for addition, subtraction
 * - Efficiency adjustments
 * - Render complex texture upon complex shape
 * - Constructed shape as an object and not just strung together construct
 * - Use radians for rotation calculations. Much more mathematically accurate.
 */

const RGB_VAL_MAX = 255;

let sphereAmount = 20; // Amount of each spheres in each construct
let speedControl = 200; // Set how fast spheres rotate - higher value is slower
let renderSmear = false; // Smear rendering on or off
let constructMultiplier = 15; // Amount of constructs to render
let detailX = 20;
let detailY = 100;
let startField = 22; // Rotational modifier. Interesting effects.
let intensityMod = 2; // Drastically changes "Chaotic-ness" of the movement. However this variable should be explored more. What happens if its negative? Or perhaps a fraction?
let bkgColor = 255;
let renderColor = true;

/**
 * I define a complex construct as something that has 
 */
class complexConstruct {

  constructor(
    canvasRelX, 
    canvasRelY, 
    canvasRelZ, 
    constructAmount,
    ) {
    
    //Positons of construct on a cavnas

    this.canvasRelX = canvasRelX; 
    this.canvasRelX = canvasRelY;
    this.canvasRelZ = canvasRelZ;
    this.constructAmount = constructAmount;

  }

  createSpheres(sphereAmount, renderColor, rotY, rotX) {
  
    if (rotY) rotateY(frameCount/speedControl*2);
    if (rotX) rotateX(frameCount/speedControl);
  
    if (renderColor) {
      let c = color((frameCount % 255), 203, 200);
      fill(c);
    } else {
      let c = color(255, 255, 255);
      fill(c);
    }

    // Generate sphere based on sphere amount
    // Also governs sphere's movement in 3D space
    for (let i = 0; i < sphereAmount; i++) {
      rotateZ(tan(frameCount/speedControl**intensityMod) + startField);
      translate(0, height/sphereAmount*2); // Coefficient sets distance of each sphere apart
      box(height/sphereAmount, detailX, detailY);
    }
  }

  createConstruct() {
    // Do you want to render the smearing effect?
    if (renderSmear) {
      if (frameCount % 255 == 0) {
        background(bkgColor);
      }
    } else {
      background(bkgColor);
    }

    // Actually render the spheres
    for (let i = 0; i < constructMultiplier; i++) {
      this.createSpheres(sphereAmount, renderColor, true, true);
    }
  
    // Size of construct on canvas in relation to viewer
    translate(0, 0, -2000);
    
  }
}

let newComplexConstruct = new complexConstruct();

function setup() {
  createCanvas(3840, 2560, WEBGL);
  background(bkgColor);
  colorMode(HSL, 255);
}

function draw() {
  //background(2);
  frameCount %= 2000; // Should reset by the time sin wave completes several full rotations until reset. Need to figure out expression for this concept.
  newComplexConstruct.createConstruct();
}
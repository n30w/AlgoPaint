// Settings interface. Can be used to create preset objects.

export default interface Settings {
    sphereAmount: number, // Amount of each spheres in each construct
    speedControl: number, // Set how fast spheres rotate - higher value is slower
    constructMultiplier: number, // Number of constructs to render
    detailX: number, // detailX for p5.box
    detailY: number, // detailY for p5.box
    startField: number, // Rotational modifier. Interesting effects
    intensityMod: number, // Drastically changes chaotic-ness of the movement. However, this variable should be explored more. What happens if it is negative? Or perhaps a decimal?
    backgroundColor: number, // Color of background
    renderColor: boolean, // Should there be color or just black and white?
    renderSmear: boolean, // Render a primitive smearing effect
}

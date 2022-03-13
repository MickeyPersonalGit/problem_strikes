export default class Dashboard {
    geometryControlWindow() {
       return cy.get('[data-testid=geometry-picker]')
    }

    geometrySelector() {
        return cy.get('[data-testid=geometry-selector]')
     }

     cubeSliderWidth(){
        return cy.get('[data-testid=cube-width]')
     }

     cubeSliderHeight(){
        return cy.get('[data-testid=cube-height]')
     }

     colorPicker(){
        return cy.get('.colorpicker')
     }

     sphereSliderRadius(){
        return cy.get('[data-testid=sphere-radius]')
     }

     sphereSliderWidth(){
        return cy.get('[data-testid=sphere-width]')
     }

     sphereSliderHeight(){
        return cy.get('[data-testid=sphere-height]')
     }

     cylindeSliderRadiusTop(){
        return cy.get('[data-testid=cylinder-radius-top]')
     }

     cylindeSliderRadiusBottom(){
        return cy.get('[data-testid=cylinder-radius-bottom]')
     }
     cylindeSliderHeight(){
        return cy.get('[data-testid=cylinder-height]')
     }

     coneSliderRadius(){
        return cy.get('[data-testid=cone-radius]')
     }

     coneSliderHeight(){
        return cy.get('[data-testid=cone-height]')
     }

     coneSliderThetaStart(){
        return cy.get('[data-testid=cone-theta-start]')
     }

     coneSliderThetaLength(){
        return cy.get('[data-testid=cone-theta-length]')
     }

     checkboxOpenEnded(){
         return cy.get('[data-testid=chk-open-closed]')
     }

     sliderMark(shape, slider, index){
         return cy.get(`span[data-testid=${shape}-${slider}]>span[data-index=${index}][class^=MuiSlider-mark]`)
     }

     sliderTrack(shape, slider){
         return cy.get(`span[data-testid=${shape}-${slider}]>span[class^=MuiSlider-track]`)
     }

     sliderThumb(shape, slider){
         return  cy.get(`span[data-testid=${shape}-${slider}]>span[class^=MuiSlider-thumbColorPrimary]`)
     }

     colorPickerInput(){
        return cy.get('[data-testid=colour-input]')
     }
} 
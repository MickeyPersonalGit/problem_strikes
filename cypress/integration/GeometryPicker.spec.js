/// <reference types="cypress" />
import Dashboard from '../pages/dashboard'
import '@testing-library/cypress/add-commands'
const dashboard = new Dashboard()
const radiusSlider = 'radius'
const heightSlider = 'height'
const widthSlider = 'width'
const thetaStartSlider = 'theta-start'
const thetaLengthSlider = 'theta-length'
let sliderVal = ''
describe('geometry app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  const browser = Cypress.browser.name

  it('displays the geometry picker', () => {
    dashboard.geometryControlWindow().should('be.visible')
    cy.contains(`Select desired geometry to change it's configuration`)
  })

  it('should allow user to select geometry from dropdown list', () => {
    // Select Cube
    dashboard.geometrySelector().click()
    cy.findByText('Cube').click()
    dashboard.cubeSliderWidth().should('be.visible')
    dashboard.cubeSliderHeight().should('be.visible')
    dashboard.colorPicker().should('be.visible')
    cy.contains('Cube configuration')
    dashboard.checkboxOpenEnded().should('not.exist')
    cy.get("canvas").toMatchImageSnapshot({name: `${Cypress.currentTest.title}_cube-selected_${browser}`});
    //Select Sphere
    dashboard.geometrySelector().click()
    cy.findByText('Sphere').click()
    dashboard.sphereSliderWidth().should('be.visible')
    dashboard.sphereSliderHeight().should('be.visible')
    dashboard.sphereSliderRadius().should('be.visible')
    dashboard.colorPicker().should('be.visible')
    cy.contains('Sphere configuration')
    dashboard.checkboxOpenEnded().should('not.exist')
    cy.get("canvas").toMatchImageSnapshot({name: `${Cypress.currentTest.title}_sphere-selected_${browser}`});
    // Select Cylinder
    dashboard.geometrySelector().click()
    cy.findByText('Cylinder').click()
    dashboard.cylindeSliderRadiusTop().should('be.visible')
    dashboard.cylindeSliderRadiusBottom().should('be.visible')
    dashboard.cylindeSliderHeight().should('be.visible')
    dashboard.colorPicker().should('not.exist')
    cy.contains('Cylinder configuration')
    dashboard.checkboxOpenEnded().should('be.visible')
    cy.get("canvas").toMatchImageSnapshot({name: `${Cypress.currentTest.title}_cylinder-selected_${browser}`});
    // Select Cone
    dashboard.geometrySelector().click()
    cy.findByText('Cone').click()
    dashboard.coneSliderRadius().should('be.visible')
    dashboard.coneSliderHeight().should('be.visible')
    dashboard.coneSliderThetaStart().should('be.visible')
    dashboard.coneSliderThetaLength().should('be.visible')
    dashboard.colorPicker().should('not.exist')
    dashboard.checkboxOpenEnded().should('be.visible')
    cy.contains('Cone configuration')
    cy.get("canvas").toMatchImageSnapshot({name: `${Cypress.currentTest.title}_cone-selected_${browser}`});
  })

  it('should allow user to use cone slider controls', () => {
    dashboard.geometrySelector().click()
    const shape = 'cone'
    cy.findByText('Cone').click()
    cy.get('span[data-testid=cone-radius]>span[data-index=0]')
    for(let i = 0; i< 14; i++){
      dashboard.sliderMark(shape, radiusSlider, i).click()
      dashboard.sliderThumb(shape, radiusSlider).invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, radiusSlider).invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=1
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${radiusSlider}_${browser}`});

    for(let i = 0; i< 14; i++){
      dashboard.sliderMark(shape, heightSlider, i).click()
      dashboard.sliderThumb(shape, heightSlider).invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, heightSlider).invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=1
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${heightSlider}_${browser}`});

    for(let i = 17; i> 0; i--){
      dashboard.sliderMark(shape, thetaStartSlider, i).click()
      dashboard.sliderThumb(shape, thetaStartSlider).invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, thetaStartSlider).invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i-=1
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${thetaStartSlider}_${browser}`});
    
    for(let i = 0; i < 20; i++){
      dashboard.sliderMark(shape, thetaLengthSlider, i).click()
      dashboard.sliderThumb(shape, thetaLengthSlider).invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, thetaLengthSlider).invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=1
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ ${shape}_ ${thetaLengthSlider}_${browser}`});
  })
  
  it('should allow user to use cube slider controls', () => {
    dashboard.geometrySelector().click()
    const shape = 'cube'
    cy.findByText('Cube').click()
    for(let i = 0; i< 14; i++){
      dashboard.sliderMark(shape, widthSlider, i).click()
      dashboard.sliderThumb(shape, widthSlider).invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, widthSlider).invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=1
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${widthSlider}_${browser}`});

    for(let i = 0; i< 14; i++){
      dashboard.sliderMark(shape, heightSlider, i).click()
      dashboard.sliderThumb(shape, heightSlider).invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, heightSlider).invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=1
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${heightSlider}_${browser}`});
  })

  it('should allow user to use sphere slider controls', () => {
    dashboard.geometrySelector().click()
    const shape = 'sphere'
    cy.findByText('Sphere').click()
    for(let i = 0; i< 30; i++){
      dashboard.sliderMark(shape, widthSlider, i).click()
      dashboard.sliderThumb(shape, widthSlider).invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, widthSlider).invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=2
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${widthSlider}_${browser}`});

    for(let i = 0; i < 25; i++){
      dashboard.sliderMark(shape, heightSlider, i).click()
      dashboard.sliderThumb(shape, heightSlider).invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, heightSlider).invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=3
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${heightSlider}_${browser}`});

    for(let i = 0; i < 10; i++){
      dashboard.sliderMark(shape, radiusSlider, i).click()
      dashboard.sliderThumb(shape, radiusSlider).invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, radiusSlider).invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=1
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${radiusSlider}_${browser}`});
  })

  it('should allow user to use cylinder slider controls', () => {
    dashboard.geometrySelector().click()
    const shape = 'cylinder'
    cy.findByText('Cylinder').click()
    for(let i = 0; i< 14; i++){
      dashboard.sliderMark(shape, radiusSlider +'-bottom', i).click()
      dashboard.sliderThumb(shape, radiusSlider +'-bottom').invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, radiusSlider +'-bottom').invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=1
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${radiusSlider +'-bottom'}_${browser}`});

    for(let i = 0; i < 20; i++){
      dashboard.sliderMark(shape, heightSlider, i).click()
      dashboard.sliderThumb(shape, heightSlider).invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, heightSlider).invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=2
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${heightSlider}_${browser}`});

    for(let i = 0; i < 14; i++){
      dashboard.sliderMark(shape, radiusSlider +'-top', i).click()
      dashboard.sliderThumb(shape, radiusSlider +'-top').invoke('attr', 'style').then(width => {
        sliderVal = width.split(':')[1]
        dashboard.sliderTrack(shape, radiusSlider +'-top').invoke('attr', 'style')
        .should('contain', `width:${width.split(':')[1]}`)
      })
      i+=1
    }
    cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${radiusSlider +'-top'}_${browser}`});
  })

  it('should allow user to change the geometric shape (CUBE) colour', () => {
    dashboard.geometrySelector().click()
    const shape = 'cube'
    cy.findByText('Cube').click()
    cy.get('[aria-label=Color]')
    let y = 61
    let x = 33;
    cy.get('[aria-label=Color]').trigger('mousedown', x, y)
    CaptureImageAndMatch()
    colourSelector(x, y)
    dashboard.colorPickerInput().clear()
    dashboard.colorPickerInput().type(`{ctrl}000000`)
    CaptureImageAndMatch()
    colourSelector(x, y)
    dashboard.colorPickerInput().clear()
    dashboard.colorPickerInput().type(`{ctrl}FFFFFF`)
    CaptureImageAndMatch()
    colourSelector(x, y)
    dashboard.colorPickerInput().clear()
    dashboard.colorPickerInput().type(`{ctrl}00FF00`)
    CaptureImageAndMatch()
    colourSelector(x, y)
    dashboard.colorPickerInput().clear()
    dashboard.colorPickerInput().type(`{ctrl}800080`)
    CaptureImageAndMatch()
    colourSelector(x, y)
  })

  it('should allow user to change the geometric shape (SPHERE) colour', () => {
    dashboard.geometrySelector().click()
    const shape = 'sphere'
    cy.findByText('Sphere').click()
    cy.get('[aria-label=Color]')
    let y = 61
    let x = 33;
    cy.get('[aria-label=Color]').trigger('mousedown', x, y)
    CaptureImageAndMatch()
    colourSelector(x, y)
    dashboard.colorPickerInput().clear()
    dashboard.colorPickerInput().type(`{ctrl}000000`)
    CaptureImageAndMatch()
    colourSelector(x, y)
    dashboard.colorPickerInput().clear()
    dashboard.colorPickerInput().type(`{ctrl}FFFFFF`)
    CaptureImageAndMatch()
    colourSelector(x, y)
    dashboard.colorPickerInput().clear()
    dashboard.colorPickerInput().type(`{ctrl}00FF00`)
    CaptureImageAndMatch()
    colourSelector(x, y)
    dashboard.colorPickerInput().clear()
    dashboard.colorPickerInput().type(`{ctrl}800080`)
    CaptureImageAndMatch()
    colourSelector(x, y)
  })

  function colourSelector(x, y) {
    for(let i = 1; i < 245; i++) {
      x = (i + x)
      if( x < 270)
      {
        cy.get('[aria-label=Color]').trigger('mousedown', x, y)
        i+=10
      }
    }
  }

  function CaptureImageAndMatch(){
    dashboard.colorPickerInput().invoke('attr', 'value').then(colourCode => {
        cy.get("canvas").toMatchImageSnapshot({name:`${Cypress.currentTest.title}_ at ${colourCode}_${browser}`});
    })
  }
})

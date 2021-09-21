/// <reference types="Cypress" />

describe('google maps scenarions', ()=>{

    before(()=>{
        cy.clearCookies();
        cy.clearLocalStorage();

    })


    it('google map test', ()=>{

        cy.visit('/');
        validateImage('document');

        cy.get('#pane>div>div.Yr7JMd-pane-ornU0b-LgbsSe-haAclf>button>img').click();
        validateImage('body');

        cy.get('div.widget-scene').type('{upArrow}');
        validateImage('body');

        cy.get('div.widget-expand-button-pegman-icon').click();
        validateImage('body');
        

    })

    function validateImage(objSelector){

        cy.wait(2000);

        if(objSelector.trim()==='document'){
            cy.document().toMatchImageSnapshot();
        }else{
            cy.get(objSelector.trim()).toMatchImageSnapshot();
        }

    }

})
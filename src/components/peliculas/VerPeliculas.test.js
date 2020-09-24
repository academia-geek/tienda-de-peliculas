import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import VerPelicula from './VerPelicula'
import { describe } from 'mocha'
import sinon from 'sinon'
	
describe('/src/components/peliculas/VerPelicula.jsx', () =>  {
	describe('carga del componente de peliculas',  () => {
        var siSaluda = false
        let wrapper;
        var spy;
        
        beforeEach(() => {
            spy = sinon.spy()
            
            wrapper = shallow(<VerPelicula
                saludar = {spy}
            />)
        })
        
        it("validar existencia de tabla de peliculas", () => {
            expect(wrapper.find('.tabla-peliculas').length).to.equal(1)
        })
        
        it('valir onclick de boton saludar', () => {
            const botonSaludar = wrapper.find("#btn_saludar").at(0)
            //botonSaludar.simulate('click')
            expect(spy.called).to.equal(true)
        })
    });
})
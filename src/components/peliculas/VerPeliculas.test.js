import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import VerPelicula from './VerPelicula'
import { describe } from 'mocha'
	
describe('/src/components/peliculas/VerPelicula.jsx', () =>  {
    var siSaluda = false
	const wrapper = shallow(<VerPelicula
        saludar = {() => siSaluda = true}
    />)
    
    it("validar existencia de tabla de peliculas", () => {
        expect(wrapper.find('.tabla-peliculas').length).to.equal(1)
    })
    
    it('valir onclick de boton saludar', () => {
        const botonSaludar = wrapper.find("#btn_saludar").at(0)
        botonSaludar.simulate('click')
        expect(siSaluda).to.equal(true)
    })
})
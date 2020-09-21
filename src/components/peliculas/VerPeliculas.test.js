import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import VerPelicula from './VerPelicula'
import { describe } from 'mocha'
	
describe('/src/components/peliculas/VerPelicula.jsx', () =>  {
    it("validar existencia de tabla de peliculas", () => {
        const wrapper = shallow(<VerPelicula/>)
        expect(wrapper.find('.tabla-peliculas').length).to.equal(1)
    })
    
    it('valir onclick de boton saludar', () => {
        let siSaluda = false
        const wrapper = shallow(<VerPelicula
            saludar = {() => siSaluda = true}
        />)
        const botonSaludar = wrapper.find("#btn_saludar").at(0)
        botonSaludar.simulate('click')
        console.log("==============")
        console.log(botonSaludar.instance().value)
        console.log("==============")
        expect(botonSaludar.instance().value).equal(true)
    })
})
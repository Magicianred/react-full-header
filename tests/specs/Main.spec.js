import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

describe('<FullHeader />', () => {
    it('Should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('Should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });
    
        it('Should not have h1 tag when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });
    
        it('Should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('Should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="What is tested may never break." />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('Should not have h2 tag when subtitle is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });
    
        it('Should have h2 tag with the subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="What is tested may never break." />);
            expect(wrapper.find('h2').props().children).to.be.equal('What is tested may never break.');
        });
    });
});

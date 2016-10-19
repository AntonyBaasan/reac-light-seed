import expect from 'expect';
import React from 'react';
//mount: renders child components too
//shallow: renders only one component (no child components)
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';
import TestUtils from 'react-addons-test-utils';


function setup(saving){
	const props = {
		course: {},
		saving: saving,
		errors: {},
		onSave: ()=>{},
		onChange: ()=>{}
	};

	console.log(shallow);
	return shallow(<CourseForm {...props}/>);
}

describe("CourseForm ", ()=>{

	it('renders form and h1', ()=>{
		const wrapper = setup(false);
		expect(wrapper.find('form').length).toBe(1);
		expect(wrapper.find('h1').text()).toEqual('Manage Course');
	});
	it('save button is labeled "Save" when not saving', ()=>{
		const wrapper = setup(false);
		expect(wrapper.find('input').props().value).toBe('Save');
	});
	it('save button is labeled "Saving" when saving', ()=>{
		const wrapper = setup(true);
		expect(wrapper.find('input').props().value).toBe('Saving...');
	});
});


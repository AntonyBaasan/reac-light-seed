import expect from 'expect';
import {authorsFormatterForDropdown} from './selector';

describe("authorsFormatterForDropdown  ", ()=>{

	it('should return author data formatted for use in a dropdown', ()=>{
		const authors=[
			{id: "cory", firstName: "aaaa", lastName: "bbbb"},
			{id: "cory2", firstName: "cccc", lastName: "dddd"}
		];
		const expected=[
			{value: "cory", text: "aaaa bbbb"},
			{value: "cory2", text: "cccc dddd"}
		];

		expect(authorsFormatterForDropdown(authors)).toEqual(expected);
	});
});


import Enzyme, { mount, shallow } from 'enzyme';
import HPCConsole from '.';
import Adapter from 'enzyme-adapter-react-16';
import { waitFor } from '@testing-library/react';
import { Helmet } from 'react-helmet';

Enzyme.configure({ adapter: new Adapter() });

describe('Component TITLE', () => {
    it('Should have text', () => {
        const hpConsole = shallow(<HPCConsole />)

        expect(hpConsole.find('button').text()).toContain('GK');
    });
});
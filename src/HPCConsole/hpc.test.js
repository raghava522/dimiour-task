import Enzyme, { mount, shallow } from 'enzyme';
import HPCConsole from '.';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Component TITLE', () => {
    it('Should have text', () => {
        const hpConsole = shallow(<HPCConsole />)

        expect(hpConsole.find('button').text()).toContain('GK');
    });
});

describe('Component TITLE', () => {
    it('Should have text', () => {
        const hpConsole = shallow(<HPCConsole />)

        expect(hpConsole.find('.view-more-cls').text()).toContain('View More');
    });
});
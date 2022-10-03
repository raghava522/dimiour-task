import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PanelVoting from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Component TITLE', () => {
    it('Should have text', () => {
        const hpConsole = shallow(<PanelVoting />)

        expect(hpConsole.find('#votingList').text()).toContain('Voting List');
    });
});

describe('Component TITLE', () => {
    it('Should have text', () => {
        const hpConsole = shallow(<PanelVoting />)

        expect(hpConsole.find('#login-btn').text()).toContain('Login');
    });
});
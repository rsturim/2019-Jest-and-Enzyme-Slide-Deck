import { mount } from 'enzyme';
import sinon from 'sinon';
import Foo from './Foo';

describe('<Foo />', () => {
    it('calls componentDidMount', () => {
        sinon.spy(Foo.prototype, 'componentDidMount');
        const wrapper = mount(<Foo />);
        expect(Foo.prototype.componentDidMount).to.have.property(
            'callCount',
            1,
        );
    });

    it('allows us to set props', () => {
        const wrapper = mount(<Foo bar="baz" />);
        expect(wrapper.props().bar).to.equal('baz');
        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).to.equal('foo');
    });

    it('simulates click events', () => {
        const onButtonClick = sinon.spy();
        const wrapper = mount(<Foo onButtonClick={onButtonClick} />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });
});

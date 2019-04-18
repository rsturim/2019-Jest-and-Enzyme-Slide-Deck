const wrapper = mount(<MyComponent />);

// element
wrapper.find('h1')

// css class
wrapper.find('.btn')

// id
wrapper.find('#section-one')

// attribute syntax
wrapper.find('[input='text']')

// attribute syntax
wrapper.find('[href='www.dealer.com']')

// combined attribute syntax
wrapper.find('a[href='www.dealer.com']')
function MyComponent() {
    return <div />;
}

MyComponent.displayName = 'My Component';

// find instances of MyComponent
const myComponents = wrapper.find('My Component');

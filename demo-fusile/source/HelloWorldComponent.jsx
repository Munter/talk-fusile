const React = require('react');

module.exports = React.createClass({
  displayName: 'HelloWorldComponent',

  render() {
    let world = 'Front-Trends';

    return <h1 className="hello-world-component" aria-role="main">Hello {world}</h1>;
  }
});

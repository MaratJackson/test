import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import App from '../imports/App.jsx';



//import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(
  <App />,
  document.getElementById('render-target'));

});
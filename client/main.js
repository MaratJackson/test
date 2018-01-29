import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

//import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(
      <div>

        <div class="panel panel-default pageHead">
    <img src="avatar.png" class="img-circle avatar" alt="Cinque Terre" width="304" height="236"/>
          <ul class="nav nav-tabs ul">
            <li class=""><a href="#A" data-toggle="tab">Раздел 1</a></li>
            <li class=""><a href="#B" data-toggle="tab">Раздел 2</a></li>
            <li class=""><a href="#C" data-toggle="tab">Раздел 3</a></li>
          </ul>
          <div class="panel-body"></div>
        </div>


        <div class="panel panel-default vertMenu">
         <div class="panel-heading heading">
           Панель с заголовком
         </div>
          <div class="panel-heading myTasks">
              Панель с заголовком
          </div>
          <div class="panel-body"></div>
        </div>

    </div>,
  document.getElementById('render-target'));


});
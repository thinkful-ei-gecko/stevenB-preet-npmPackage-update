/* global shoppingList, store, api */

import './index.css'
import $ from 'jquery';
import store from './store';
import api from './api';
import shoppingList from './shoppingList';

$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});


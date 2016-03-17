/// <reference path="../typings/tsd.d.ts" />

import angular = require('angular');
import itemsService = require('./service/itemsService');
import HeaderController = require('./controller/HeaderController');
import ItemsController = require('./controller/ItemsController');
import FooterController = require('./controller/FooterController');
import 'angular-ui-router';

var app = angular.module('ngPoznanMeetup21', ['ui.router']);

app.service(itemsService.name, itemsService.service);
app.controller(HeaderController.name, HeaderController.controller);
app.controller(ItemsController.name, ItemsController.controller);
app.controller(FooterController.name, FooterController.controller);

import {default as config} from "./config";
app.config(config);

(<any>window).app = app;
app.constant('VERSION', require('../package.json').version);

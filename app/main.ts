/// <reference path="../typings/tsd.d.ts" />

import angular = require('angular');
import 'angular-ui-router';

var app = angular.module('ngPoznanMeetup21', ['ui.router']);

import HeaderController = require( './controller/HeaderController');
app.controller(HeaderController.name, HeaderController.controller);

import ItemsController = require( './controller/ItemsController');
app.controller(ItemsController.name, ItemsController.controller);

import FooterController = require( './controller/FooterController');
app.controller(FooterController.name, FooterController.controller);

import {default as config} from "./config";
app.config(config);

(<any>window).app = app;
app.constant('VERSION', require('../package.json').version);

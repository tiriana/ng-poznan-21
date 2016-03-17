/// <reference path="../typings/tsd.d.ts" />

import angular = require('angular');
import 'angular-ui-router';

var app = angular.module('ngPoznanMeetup21', ['ui.router']);

import HeaderController = require( './controller/HeaderController');
app.controller(HeaderController.name, HeaderController.controller);

app.controller('ItemsController', function($scope) {
    console.log('ItemsController');
});

app.controller('FooterController', function($scope, VERSION) {
    $scope.VERSION = VERSION;
});

import {default as config} from "./config";
app.config(config);

(<any>window).app = app;
app.constant('VERSION', require('../package.json').version);

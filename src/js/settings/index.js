import angular from 'angular';

let settingsModule = angular.module('app.settings', []);

// Config
import SettingsConfig from './settings.config'
settingsModule.config(SettingsConfig);


// Controllers
import SettingsCtrl from './settings.controller';
settingsModule.controller('SettingsCtrl', SettingsCtrl);


export default settingsModule;

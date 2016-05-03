import angular from 'angular';

// Create the module where our functionality can attach to
let editorModule = angular.module('app.editor', []);

// Include our UI-Router config settings
import EditorConfig from './editor.config';
editorModule.config(EditorConfig);


// Controllers
import EditorCtrl from './editor.controller';
editorModule.controller('EditorCtrl', EditorCtrl);


export default editorModule;

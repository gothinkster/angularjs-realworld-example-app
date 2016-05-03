import angular from 'angular';

// Create the module where our functionality can attach to
let articleModule = angular.module('app.article', []);

// Include our UI-Router config settings
import ArticleConfig from './article.config';
articleModule.config(ArticleConfig);


// Controllers
import ArticleCtrl from './article.controller';
articleModule.controller('ArticleCtrl', ArticleCtrl);

import ArticleActions from './article-actions.component';
articleModule.component('articleActions', ArticleActions);

import Comment from './comment.component';
articleModule.component('comment', Comment);


export default articleModule;

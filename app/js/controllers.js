'use strict';

/* Controllers */

var guideAchatApp = angular.module('guideAchatApp', []);

guideAchatApp.controller('SectionListCtrl', function ($scope) {
	    $scope.sections = [
     	    {
          	    'id' : 'fournisseurs',
          	    'name' : 'Recherche par fournisseur',
               'imageUrl' : 'img/accueil/fournisseur.png'
          },
          {
          	    'id' : 'univers',
               'name' : 'Recherche par univers',
               'imageUrl' : 'img/accueil/univers.png'
          },
          {
          	    'id' : 'article',
               'name' : 'Recherche par article',
               'imageUrl' : 'img/accueil/article.png'
          }               
     ];   
});
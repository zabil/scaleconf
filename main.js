'use strict';
angular.module('Books', []).controller('BookController', function ($scope) {
    $scope.books = [
        {author: "Douglas Adams", title: "Hitchhikers guide to the galaxy", image: "hitchikers.jpg"} ,
        {author: "JRR Tolkien", title: "Lord of the rings", image: "fellowship.jpg"},
        {author: "Douglas Richard Hofstadter", title: " Gödel, Escher, Bach: an Eternal Golden Braid", image:"godel.jpg"},

    ];
});
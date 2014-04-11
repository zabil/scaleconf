'use strict';
angular.module('Books', []).controller('BookController', function ($scope) {
    $scope.list = true;
    $scope.grid = false;

    $scope.showList = function () {
        $scope.list = true;
        $scope.grid = false;
    };

    $scope.showGrid = function () {
        $scope.list = false;
        $scope.grid = true;
    };

    $scope.books = [
        {author: "Douglas Adams", title: "Hitchhikers guide to the galaxy", cover: "hitchikers.jpg"} ,
        {author: "JRR Tolkien", title: "Lord of the rings", cover: "fellowship.jpg"},
        {author: "Douglas Richard Hofstadter", title: " Gödel, Escher, Bach: an Eternal Golden Braid", cover: "godel.jpg"},
        {author: "Brian and Dennis", title: "The C Programming language", cover: "c.jpg"},
        {author: "Kent Beck", title: "Test Driven Development", cover: "tdd.jpg"},
        {author: "Various", title: "Thoughtworks anthology", cover: "twa2.jpg"}
    ];
});
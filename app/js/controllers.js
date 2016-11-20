/**
 * Created by iakoupov on 2016-11-19.
 */

var controllers = angular.module('controllers',[]);

controllers.controller('juiceController',['juiceService', function (juiceService) {
    var vm = this;
    
    vm.title = 'This is a Juice';
    
    vm.juices = juiceService.getJuices();
}])

/**
 * Created by iakoupov on 2016-11-19.
 */

var services = angular.module('services',[]);

services.factory('juiceService',[function () {
    
    function getJuices() {
        return [
            {
                title: 'Orange',
                make: 'tropicana',
                cost: 4.99
            },
            {
                title: 'Apple',
                make: 'tropicana',
                cost: 2.99
            }
        ]
    }
    
    return {
        getJuices: getJuices
    }
}])

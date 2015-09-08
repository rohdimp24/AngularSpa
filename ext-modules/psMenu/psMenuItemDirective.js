/**
 * Created by rohitagarwal on 9/8/15.
 */
(function(){

    angular.module("psMenu").directive("psMenuItem",function(){

        return {

            //use the parent controller
            require:'^psMenu',
            templateUrl:"ext-modules/psMenu/psMenuItemTemplate.html",

            scope:{
                label:'@'
            },
            //in the link functon we can also pass a controller object
            link:function(scope,elem,attr,ctrl){

            }
        }


    });




}())
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
                label:'@',
                icon:'@',
                route:'@'
            },
            //in the link functon we can also pass a controller object
            link:function(scope,elem,attr,ctrl){
                //handle the click of the menu item
                elem.on('click',function(evt){
                    evt.stopPropagation();
                    evt.preventDefault;

                    //now we want to use the controller to handle the logic. this is the psmenucontroller of the parent
                    //aslo since we are using teh jquery and want to use the angular controller we need to tell the angular that
                    //the scope might have changed. this we will do using the appy
                    //I guess we cannot use scope.setActiveElement as this scope is an isoloated scope which means it is not
                    //same as the scope of the controller that we are passing
                    scope.$apply(function(){
                        //call tyhe controller function
                        ctrl.setActiveElement(elem);
                        ctrl.setRoute(scope.route);
                    })



                });


                //check if this is the active element that was set earlier
                scope.isActive=function(){
                    return elem===ctrl.getActiveElement();


                }


            }
        }


    });




}())
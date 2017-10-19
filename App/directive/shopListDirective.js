/**
 * Created by Enter on 2017-10-18.
 */
app.directive('shopList', function () {
    return {
        templateUrl:'App/view/_temp/_shopList.html',
        scope:{
            item:'=item',
            index:'@index'
        },
        link:function(scope){
            scope.deleteItem = function(item){
                scope.$emit('deleteItem',item);
            };
            scope.yesNo = function(index){
                scope.$emit('yesNo',index);
            };
            scope.reduceAdd = function(nums,index){
                scope.$emit('changeNums',nums,index);
            };
        }
    }
});
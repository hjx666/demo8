/**
 * Created by Enter on 2017-10-18.
 */
app.controller('shopController', function ($scope) {
    $scope.data = [
        {
            'name':'商品1',
            'nums':1,
            'yesNo':false,
            'money':100
        },
        {
            'name':'商品2',
            'nums':1,
            'yesNo':true,
            'money':100
        },
        {
            'name':'商品3',
            'nums':100000,
            'yesNo':false,
            'money':100
        },
        {
            'name':'商品4',
            'nums':1,
            'yesNo':false,
            'money':100
        },
        {
            'name':'商品5',
            'nums':1,
            'yesNo':false,
            'money':100
        }
    ];
    $scope.checked = false;
    $scope.$on('deleteItem', function (event, delItem) {
        $scope.data.splice(delItem, 1);
        allFun();
    });
    $scope.$on('yesNo',function(event,index){
        $scope.data[index].yesNo = !$scope.data[index].yesNo;
        allFun();
    });
    $scope.$on('changeNums',function(event,count,index){
        if(count=='+'){
            $scope.data[index].nums+=1;
        }else{
            if($scope.data[index].nums<1){
                return;
            }
            $scope.data[index].nums-=1;
        }
        allFun();
    });
    allFun();
    function allFun(){
        $scope.nums = 0;
        $scope.moneys = 0;
        for(var i=0; i<$scope.data.length; i++){
            if($scope.data[i].yesNo) {
                $scope.nums += $scope.data[i].nums;
                $scope.moneys += $scope.data[i].money*$scope.data[i].nums;
            }
        }
    }
    $scope.allchecked = function(){
        $scope.checked = !$scope.checked;
        for(var i=0; i<$scope.data.length; i++){
            $scope.data[i].yesNo = $scope.checked;
        }
        allFun();
    }
});
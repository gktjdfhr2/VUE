let app = angular.module("app", []);

app.controller("myController", function($scope){
    $scope.myTitle= "오늘 할일";

    $scope.ScheduleList = [
    ];

    $scope.remove = function(no){
        if( !no ) return;

        let num = -1;
        for(let i=0; i <$scope.ScheduleList.length; i++){

            if( $scope.ScheduleList[i].no === no ) {
                num = i;
                break;
            }
        }

        if(num === -1 ) return;
        $scope.ScheduleList.splice(num, 1);
    }
    $scope.update = function(no){
        if( !no ) return;

        let num = -1;
        for(let i=0; i <$scope.boardList.length; i++){
            console.log($scope.boardListForm.title);
            console.log($scope.boardListForm.writer);
            if( $scope.boardList[i].no === no ) {
                $scope.boardList[i].title = $scope.boardListForm.title
                break;
            };
        }

        $scope.boardListForm.title ="";
        $scope.boardListForm.writer ="";
    }
    $scope.boardListForm = {};





    $scope.addSchedule = function (){
        let newNo = ! $scope.ScheduleList.length ?
            1 : $scope.ScheduleList[$scope.ScheduleList.length-1].no + 1;

        let newItem={
            no: newNo,
            title: $scope.ScheduleListForm.title,
            time : $scope.ScheduleListForm.time,
        };
        console.log(newNo);
        console.log(newItem);

        $scope.ScheduleList.push(newItem);

        $scope.ScheduleListForm.title="";
        $scope.ScheduleListForm.time=""


    }
});


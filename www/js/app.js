// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic-datepicker'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  // >> Controller >> main >>
  .controller('mainCtrl', function ($scope ) {

    var weekDaysList = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    var monthList = ["Январь", "Февраль", "Март", "Апрель", "Май", "Иннь", "Июль", "Август", "Сентябрь", "Октяборь", "Ноябрь", "Декабрь"];
    var disabledDates = [];
    var d0 = new Date(2015, 9, 31)
      , d1 = new Date(2015, 10, 10)
      , d2 = new Date(2015, 10, 11)
      , d3 = new Date(2015, 10, 12)
      , d4 = new Date(2015, 10, 15)
      , d5 = new Date(2015, 11, 1);
    var selectedDates = [d1, d2, d3, d4, d0, d5];
    $scope.selectedDates = [];
    $scope.selectedDates.push(d0);
    $scope.selectedDates.push(d1);
    $scope.selectedDates.push(d2);
    $scope.selectedDates.push(d3);
    $scope.selectedDates.push(d4);
    $scope.selectedDates.push(d5);

    $scope.datepickerObject = {
      titleLabel: '',  //Optional
      viewTitle: false,
      //viewMonthSelector: false,
      //viewYearSelector: false,

      isNativeButtons: false,

      okLabel: 'OK',  //Optional
      okButtonType : 'button-clear cal-green',  //Optional
      closeLabel: 'ЗАКРЫТЬ',
      closeButtonType : 'button-clear button-dark',  //Optional

      selectedDates: $scope.selectedDates,  //Optional
      //viewMonth: $scope.selectedDates, //

      mondayFirst: true,  //Optional
      //disabledDates: disabledDates, //Optional
      weekDaysList: weekDaysList, //Optional
      monthList: monthList, //Optional

      templateType: 'popup', //Optional

      modalHeaderColor: 'bar-positive', //Optional
      modalFooterColor: 'bar-positive', //Optional

      dateFormat: 'dd-MM-yyyy', //Optional

      callback: function (dates) {  //Mandatory
        retSelectedDates(dates);
      }
    };

    var retSelectedDates = function (dates) {
      $scope.selectedDates.length = 0;
      for (var i = 0; i < dates.length; i++) {
        $scope.selectedDates.push(angular.copy(dates[i]));
      }
    };


  })
    // << Controller << main <<

;

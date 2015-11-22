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
    var s0 = new Date(2015, 9, 31)
      , s1 = new Date(2015, 10, 10)
      , s2 = new Date(2015, 10, 11)
      , s3 = new Date(2015, 10, 12)
      , s4 = new Date(2015, 10, 17)
      , s5 = new Date(2015, 11, 1);
    var selectedDates = [s1, s2, s3, s4, s0, s5];
    var h0 = new Date(2015, 10, 11)
      , h1 = new Date(2015, 10, 9)
      , h2 = new Date(2015, 10, 3)
      , h3 = new Date(2015, 10, 10)
      , h4 = new Date(2015, 9, 31)
      , h5 = new Date(2015, 10, 16);
    var holidays = [h0, h1, h2, h3, h4, h5];
    var d0 = new Date(2015, 10, 16)
      , d1 = new Date(2015, 10, 17)
      , d2 = new Date(2015, 10, 17)
      , d3 = new Date(2015, 9, 30)
      , d4 = new Date(2015, 11, 1);
    var disabledDates = [d0, d1, d2, d3, d4];
    $scope.selectedDates = [];
    $scope.selectedDates.push(s0);
    $scope.selectedDates.push(s1);
    $scope.selectedDates.push(s2);
    $scope.selectedDates.push(s3);
    $scope.selectedDates.push(s4);
    $scope.selectedDates.push(s4);
    $scope.selectedDates.push(s5);

    $scope.datepickerObject = {
      templateType: 'POPUP', // POPUP | MODAL < TODO

      header: 'Select date',
      headerClass: 'royal-bg light',

      btnsIsNative: false,

      btnOk: 'OK',
      btnOkClass: 'button-clear cal-green',

      btnCancel: 'ЗАКРЫТЬ',
      btnCancelClass: 'button-clear button-dark',

      btnTodayShow: false,
      btnToday: 'Сегодня',
      btnTodayClass: 'button-positive',

      btnClearShow: false,
      btnClear: 'Очистить',
      btnClearClass: 'button-royal',

      selectType: 'PERIOD', // SINGLE | PERIOD | MULTI
      accessType: 'WRITE', // READ | WRITE
      //errorLanguage: 'RU', // EN | RU

      selectedDates: $scope.selectedDates,
      //viewMonth: $scope.selectedDates, //
      disabledDates: disabledDates,
      holidays: holidays,
      conflictSelectedDisabled: 'DISABLED', // SELECTED | DISABLED

      closeOnSelect: false,

      mondayFirst: true,
      weekDaysList: weekDaysList,
      monthList: monthList,

      modalHeaderColor: 'bar-positive',
      modalFooterColor: 'bar-positive',

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

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic-multi-date-picker'])

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

    var h0 = new Date(2015, 11, 11)
      , h1 = new Date(2015, 11, 9)
      , h2 = new Date(2015, 11, 3)
      , h3 = new Date(2015, 11, 10)
      , h4 = new Date(2015, 10, 30)
      , h5 = new Date(2015, 11, 16)
      , holidays = [h0, h1, h2, h3, h4, h5];

    var c0 = new Date(2015, 11, 11)
      , c1 = new Date(2015, 11, 9)
      , c2 = new Date(2015, 12, 3)
      , c3 = new Date(2015, 11, 10)
      , calendar = [c0, c1, c2, c3];

    var d0 = new Date(2015, 11, 16)
      , d1 = new Date(2015, 11, 17)
      , d2 = new Date(2015, 11, 17)
      , d3 = new Date(2015, 10, 30)
      , d4 = new Date(2015, 12, 1)
      , disabledDates = [d0, d1, d2, d3, d4];

    var s0 = new Date(2015, 10, 31)  // preview month
      , s1 = new Date(2015, 11, 10) // holiday
      , s2 = new Date(2015, 11, 11) // holiday
      , s3 = new Date(2015, 11, 12) //
      , s4 = new Date(2015, 11, 12) // clone
      , s5 = new Date(2015, 11, 17) // conflict with disabled
      , s6 = new Date(2015, 12, 1); // conflict with disabled, next month
    $scope.selectedDates = [s1, s2, s3, s4, s0, s5, s6];

    $scope.datepickerObject = {
      templateType: 'MODAL', // POPUP | MODAL

      //header: 'Select Date',
      headerClass: 'royal-bg light',

      btnsIsNative: false,

      btnOk: 'OK',
      btnOkClass: 'button-clear cal-green',

      btnCancel: 'ЗАКРЫТЬ',
      btnCancelClass: 'button-clear button-dark',

      //btnTodayShow: true,
      btnToday: 'Today',
      btnTodayClass: 'button-clear button-dark',

      //btnClearShow: true,
      btnClear: 'Clear',
      btnClearClass: 'button-clear button-dark',

      selectType: 'PERIOD', // SINGLE | PERIOD | MULTI

      tglSelectByWeekShow: true, // true | false (default)
      isSelectByWeek: true, // true (default) | false
      tglSelectByWeekClass: 'toggle-positive',
      titleSelectByWeekClass: 'positive positive-border',

      accessType: 'WRITE', // READ | WRITE
      //errorLanguage: 'RU', // EN | RU

      selectedDates: $scope.selectedDates,
      //viewMonth: $scope.selectedDates, //
      disabledDates: disabledDates,

      holidays: holidays,

      calendar1: holidays,
      calendar1Class: '',

      calendar2: calendar,
      calendar2Class: '',

      calendar3: calendar,
      calendar3Class: '',

      calendar4: calendar,
      calendar4Class: 'cal-color-black',

      calendar5: calendar,
      calendar5Class: '',

      calendar6: calendar,
      calendar6Class: '',

      calendar7: calendar,
      calendar7Class: '',

      conflictSelectedDisabled: 'DISABLED', // SELECTED | DISABLED

      closeOnSelect: false,

      mondayFirst: true,
      weekDaysList: weekDaysList,
      monthList: monthList,

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

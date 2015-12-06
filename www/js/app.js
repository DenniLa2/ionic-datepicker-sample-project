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
      , h6 = new Date(2015, 11, 6)
      , holidays = [h0, h1, h2, h3, h4, h5, h6];

    var c0 = new Date(2015, 11, 11)
      , c1 = new Date(2015, 11, 9)
      , c2 = new Date(2015, 12, 3)
      , c3 = new Date(2015, 11, 10)
      , c4 = new Date(2015, 11, 12)
      , c5 = new Date(2015, 11, 16)
      , c6 = new Date(2015, 11, 18)
      , c7 = new Date(2015, 11, 19)
      , c8 = new Date(2015, 11, 22)
      , c9 = new Date(2015, 11, 27)
      , c10 = new Date(2015, 11, 25)
      , c11 = new Date(2015, 11, 6)
      , calendar1 = [c0, c1]
      , calendar2 = [c2, c3]
      , calendar3 = [c4]
      , calendar4 = [c2, c5, c11]
      , calendar5 = [c4, c10]
      , calendar6 = [c6, c7, c8, c9]
      , calendar7 = [c5, c6, c11];

    var d0 = new Date(2015, 11, 16)
      , d1 = new Date(2015, 11, 17)
      , d2 = new Date(2015, 11, 17)
      , d3 = new Date(2015, 10, 30)
      , d4 = new Date(2015, 12, 1)
      , disabledDates = [d0, d1, d2, d3, d4];

    var s0 = new Date(2015, 10, 31)  // preview month
      , s1 = new Date(2015, 11, 10) // holiday
      , s2 = new Date(2015, 11, 11) // holiday
      , s7 = new Date(2015, 11, 6) //
      , s3 = new Date(2015, 11, 12) //
      , s4 = new Date(2015, 11, 12) // clone
      , s5 = new Date(2015, 11, 17) // conflict with disabled
      , s6 = new Date(2015, 12, 1); // conflict with disabled, next month
    $scope.selectedDates = [s1, s2, s3, s4, s0, s5, s6, s7];

    $scope.datepickerObject = {
      templateType: 'POPUP', // POPUP | MODAL
      modalFooterClass: 'bar-light',
      //header: 'multi-date-picker',
      headerClass: 'royal-bg light',

      btnsIsNative: false,

      btnOk: 'OK',
      btnOkClass: 'button-clear cal-green',

      btnCancel: 'Close',
      btnCancelClass: 'button-clear button-dark',

      //btnTodayShow: true,
      btnToday: 'Today',
      btnTodayClass: 'button-clear button-dark',

      //btnClearShow: true,
      btnClear: 'Clear',
      btnClearClass: 'button-clear button-dark',

      selectType: 'PERIOD', // SINGLE | PERIOD | MULTI

      tglSelectByWeekShow: true, // true | false (default)
      tglSelectByWeek: 'By week',
      isSelectByWeek: true, // true (default) | false
      selectByWeekMode: 'NORMAL', // INVERSION (default), NORMAL
      tglSelectByWeekClass: 'toggle-positive',
      titleSelectByWeekClass: 'positive positive-border',

      accessType: 'WRITE', // READ | WRITE
      //showErrors: true, // true (default), false
      //errorLanguage: 'RU', // EN | RU

      //fromDate: new Date(2015, 9),
      //toDate: new Date(2016, 1),

      selectedDates: $scope.selectedDates,
      //viewMonth: $scope.selectedDates, //
      disabledDates: disabledDates,

      holidays: holidays,
      holidaysClass: '',
      holidaysName: 'holidays',

      calendar1: calendar1,
      //calendar1Class: '',
      calendar1Name: 'same days',

      calendar2: calendar2,
      calendar2Class: '',
      //calendar2Name: 'calendar 2',

      calendar3: calendar3,
      calendar3Class: '',
      calendar3Name: 'birthdays',

      calendar4: calendar4,
      calendar4Class: 'cal-color-black',
      calendar4Name: 'date-picker',

      calendar5: calendar5,
      calendar5Class: '',
      calendar5Name: 'vacation',

      calendar6: calendar6,
      calendar6Class: '',
      calendar6Name: 'red days',

      calendar7: calendar7,
      calendar7Class: '',
      calendar7Name: 'same dates',

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

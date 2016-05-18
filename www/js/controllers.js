angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ClassOneCtrl', function($scope){

  $scope.name = "Nicolas";
  $scope.lastname = "Molina";
  console.log( $scope.name );
  console.log( $scope.lastname );

  $scope.numberA = 0;
  $scope.numberB = 0;

  $scope.showAlert = showAlert;

  $scope.nameGirl = "";
  $scope.middleNameGirl = "";

  $scope.today = new Date();

  function showAlert(){
    alert("Hi, girls!! =)");
  }

  $scope.girls = [
    {
      name: "Monica",
      middlename: "Irene",
      age: 31,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Diana",
      middlename: "Paola",
      age: 21,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Danna",
      middlename: "Paola",
      age: 24,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Alejandra",
      middlename: "",
      age: 20,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Maria",
      middlename: "Camila",
      age: 22,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Monica",
      middlename: "Irene",
      age: 31,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Diana",
      middlename: "Paola",
      age: 21,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Danna",
      middlename: "Paola",
      age: 24,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Alejandra",
      middlename: "",
      age: 20,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Maria",
      middlename: "Camila",
      age: 22,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Monica",
      middlename: "Irene",
      age: 31,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Diana",
      middlename: "Paola",
      age: 21,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Danna",
      middlename: "Paola",
      age: 24,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Alejandra",
      middlename: "",
      age: 20,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Maria",
      middlename: "Camila",
      age: 22,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Monica",
      middlename: "Irene",
      age: 31,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Diana",
      middlename: "Paola",
      age: 21,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Danna",
      middlename: "Paola",
      age: 24,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Alejandra",
      middlename: "",
      age: 20,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
    {
      name: "Maria",
      middlename: "Camila",
      age: 22,
      photo: 'http://40.media.tumblr.com/tumblr_m91xf5TEp11qcmkeso1_500.jpg'
    },
  ];

})

.controller('CakeCtrl', function($scope, $ionicPopup, $ionicLoading, $ionicActionSheet){

  /*
  $ionicLoading.show();

  setTimeout(function(){
    $ionicLoading.hide();
  }, 5000);
  */

  $scope.showAlert = showAlert;
  $scope.saveIdea = saveIdea;
  $scope.showActionSheet = showActionSheet;


  $scope.idea = {
    effect: "",
    money: false,
    idea: false,
    types: [
      {
        name: "Tech",
        check: false
      },
      {
        name: "Sport",
        check: false
      },
      {
        name: "Economic",
        check: false
      },
      {
        name: "Cultural",
        check: false
      },
    ]
  };

  function showAlert(){
    //alert("Hello!");
    $ionicPopup.alert({
      title: "Hello",
      subTitle: "kjsdksdf",
      template: "bla bla bla bla",
      okText: "Aceptar",
      okType: "button-dark"
    });
  }

  function saveIdea(){
    console.log( "Name", $scope.idea.name );
    console.log( "Text", $scope.idea.text );
    console.log( "Effect", $scope.idea.effect );
    console.log( "Money", $scope.idea.money );
    console.log( "Idea", $scope.idea.idea );
    console.log( "Idea", $scope.idea.types.filter( item => item.check ).map(item => item.name) );
  }

  function showActionSheet(){
    $ionicActionSheet.show({
      titleText: "Options",
      cancelText: "Cancelar",
      buttons: [
        { text: '<i class="icon ion-plus"></i>  Share' },
        { text: '<i class="icon ion-ios-telephone"></i> Call' }
      ]
    });
  }

});
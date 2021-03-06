angular.module('MyApp', ['ngMaterial'])
  .controller('myController', ["$scope", "$timeout", "$http", "requestService", function ($scope, $timeout, $http, requestService) {
    var status = 0;
    var vm = this;
    vm.list = [];
    vm.products = ["Jumbo Chicken Wrap", "Vegetarian Lasagne", "Chicken Rice Feast", "Grilled Chicken Breast", "Warm Fruit Bowl", "Tomato Toast With Macadamia Ricotta"]

    initLoadData();

    function initLoadData() {
      requestService.initLoadData(response, failure);
    }

    function response(data) {
      console.log(data.data);
      vm.list = data.data;
    }

    function failure() {
      console.log("data not found");
    }

    vm.confirmOrder = function (cName, pName, quantity) {
      requestService.confirmOrder({
        cName: cName,
        pName: pName,
        quantity: quantity
      }, response, failure);
      document.getElementById("placeOrder").reset();
      vm.pName = '';
      vm.quantity = '';
      vm.cName = ''

    }

    vm.predictedValue = function (value, dishName) {
      requestService.predictedValue({
        dishName: dishName,
        predictedValue: value
      }, response, failure);
      document.getElementById("predictedValue").value = '';
      vm.dishName = '';
    }

    vm.orderServed = function (value) {
      requestService.orderServed({
        pName: value
      }, response, failure);
    }
    vm.downloadReports = function () {
      var table = []
      for (var i = 0; i < vm.list.length; i++) {
        table.push({
          DishName: vm.list[i].productName,
          Produed: vm.list[i].quantity,
          predicted: vm.list[i].predicted
        })
      }

      JSONToCSVConvertor(table, "Kitchen Display Report", true);
    }

    function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
      //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
      var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

      var CSV = '';
      //Set Report title in first row or line

      CSV += ReportTitle + '\r\n\n';

      //This condition will generate the Label/Header
      if (ShowLabel) {
        var row = "";

        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {

          //Now convert each value to string and comma-seprated
          row += index + ',';
        }
        row = row.slice(0, -1);

        //append Label row with line break
        CSV += row + '\r\n';
      }

      //1st loop is to extract each row
      for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
          row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
      }

      if (CSV == '') {
        alert("Invalid data");
        return;
      }

      //Generate a file name
      var fileName = "MyReport_";
      //this will remove the blank-spaces from the title and replace it with an underscore
      fileName += ReportTitle.replace(/ /g, "_");

      //Initialize file format you want csv or xls
      var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
      //this trick will generate a temp <a /> tag
      var link = document.createElement("a");
      link.href = uri;

      //set the visibility hidden so it will not effect on your web-layout
      link.style = "visibility:hidden";
      link.download = fileName + ".csv";

      //this part will append the anchor tag and remove it after automatic click
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

  }]);
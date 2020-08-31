/*global QUnit*/

sap.ui.define([
	"MS_EXCEL_FILE_UPLOAD/MS_EXCEL_FILE_UPLOAD/controller/fileUpLoad.controller"
], function (Controller) {
	"use strict";

	QUnit.module("fileUpLoad Controller");

	QUnit.test("I should test the fileUpLoad controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"MS_EXCEL_FILE_UPLOAD/MS_EXCEL_FILE_UPLOAD/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
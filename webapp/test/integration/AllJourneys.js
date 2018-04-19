/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"git/app/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"git/app/test/integration/pages/Worklist",
	"git/app/test/integration/pages/Object",
	"git/app/test/integration/pages/NotFound",
	"git/app/test/integration/pages/Browser",
	"git/app/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "git.app.view."
	});

	sap.ui.require([
		"git/app/test/integration/WorklistJourney",
		"git/app/test/integration/ObjectJourney",
		"git/app/test/integration/NavigationJourney",
		"git/app/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
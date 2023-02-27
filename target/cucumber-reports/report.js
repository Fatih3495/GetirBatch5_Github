$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Getir basket verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open the getir app and enters \"hello@getir.com\" and \"hello\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userOpenTheGetirAppAndEntersAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.user_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks basket button",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userClicksBasketButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify that basket is empty and able to see \"There is no result\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userVerifyThatBasketIsEmptyAndAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see all menu list in console and verify that size is 12",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userAbleToSeeAllMenuListInConsoleAndVerifyThatSizeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks second category which is \"Atıştırmalık\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userClicksSecondCategoryWhichIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User adds two different items",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userAddsTwoDifferentItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User scroll down to \"Ürün 14\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userScrollDownTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User adds two different items",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userAddsTwoDifferentItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks basket button",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userClicksBasketButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify that \"Total Amount : 84 ₺\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userVerifyThat(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
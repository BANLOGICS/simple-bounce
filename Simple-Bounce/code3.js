gdjs.HowToPlayCode = {};
gdjs.HowToPlayCode.GDtextObjects1= [];
gdjs.HowToPlayCode.GDtextObjects2= [];
gdjs.HowToPlayCode.GDGoBackObjects1= [];
gdjs.HowToPlayCode.GDGoBackObjects2= [];
gdjs.HowToPlayCode.GDinfoObjects1= [];
gdjs.HowToPlayCode.GDinfoObjects2= [];

gdjs.HowToPlayCode.conditionTrue_0 = {val:false};
gdjs.HowToPlayCode.condition0IsTrue_0 = {val:false};
gdjs.HowToPlayCode.condition1IsTrue_0 = {val:false};
gdjs.HowToPlayCode.condition2IsTrue_0 = {val:false};


gdjs.HowToPlayCode.mapOfGDgdjs_46HowToPlayCode_46GDGoBackObjects1Objects = Hashtable.newFrom({"GoBack": gdjs.HowToPlayCode.GDGoBackObjects1});
gdjs.HowToPlayCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GoBack"), gdjs.HowToPlayCode.GDGoBackObjects1);

gdjs.HowToPlayCode.condition0IsTrue_0.val = false;
gdjs.HowToPlayCode.condition1IsTrue_0.val = false;
{
gdjs.HowToPlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HowToPlayCode.mapOfGDgdjs_46HowToPlayCode_46GDGoBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.HowToPlayCode.condition0IsTrue_0.val ) {
{
gdjs.HowToPlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.HowToPlayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


};

gdjs.HowToPlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HowToPlayCode.GDtextObjects1.length = 0;
gdjs.HowToPlayCode.GDtextObjects2.length = 0;
gdjs.HowToPlayCode.GDGoBackObjects1.length = 0;
gdjs.HowToPlayCode.GDGoBackObjects2.length = 0;
gdjs.HowToPlayCode.GDinfoObjects1.length = 0;
gdjs.HowToPlayCode.GDinfoObjects2.length = 0;

gdjs.HowToPlayCode.eventsList0(runtimeScene);
return;

}

gdjs['HowToPlayCode'] = gdjs.HowToPlayCode;

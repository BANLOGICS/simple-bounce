gdjs.StartCode = {};
gdjs.StartCode.GDStartGameObjects1= [];
gdjs.StartCode.GDStartGameObjects2= [];
gdjs.StartCode.GDStartGameObjects3= [];
gdjs.StartCode.GDHowToPlayObjects1= [];
gdjs.StartCode.GDHowToPlayObjects2= [];
gdjs.StartCode.GDHowToPlayObjects3= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartGameObjects2Objects = Hashtable.newFrom({"StartGame": gdjs.StartCode.GDStartGameObjects2});
gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDHowToPlayObjects1Objects = Hashtable.newFrom({"HowToPlay": gdjs.StartCode.GDHowToPlayObjects1});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.StartCode.GDStartGameObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartGameObjects2Objects, runtimeScene, true, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HowToPlay"), gdjs.StartCode.GDHowToPlayObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDHowToPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HowToPlay", false);
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDStartGameObjects1.length = 0;
gdjs.StartCode.GDStartGameObjects2.length = 0;
gdjs.StartCode.GDStartGameObjects3.length = 0;
gdjs.StartCode.GDHowToPlayObjects1.length = 0;
gdjs.StartCode.GDHowToPlayObjects2.length = 0;
gdjs.StartCode.GDHowToPlayObjects3.length = 0;

gdjs.StartCode.eventsList1(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;

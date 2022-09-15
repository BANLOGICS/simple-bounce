gdjs.GameOverCode = {};
gdjs.GameOverCode.GDGAMEOVERObjects1= [];
gdjs.GameOverCode.GDGAMEOVERObjects2= [];
gdjs.GameOverCode.GDTryAgainObjects1= [];
gdjs.GameOverCode.GDTryAgainObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDTryAgainObjects1Objects = Hashtable.newFrom({"TryAgain": gdjs.GameOverCode.GDTryAgainObjects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.GameOverCode.GDTryAgainObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDTryAgainObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("chx").setNumber(0);
}{runtimeScene.getGame().getVariables().get("chy").setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("chx").setNumber(0);
}{runtimeScene.getGame().getVariables().get("chy").setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGAMEOVERObjects1.length = 0;
gdjs.GameOverCode.GDGAMEOVERObjects2.length = 0;
gdjs.GameOverCode.GDTryAgainObjects1.length = 0;
gdjs.GameOverCode.GDTryAgainObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;

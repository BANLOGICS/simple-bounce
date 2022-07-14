gdjs.MainGameCode = {};
gdjs.MainGameCode.GDbaseObjects1= [];
gdjs.MainGameCode.GDbaseObjects2= [];
gdjs.MainGameCode.GDbaseObjects3= [];
gdjs.MainGameCode.GDplayerObjects1= [];
gdjs.MainGameCode.GDplayerObjects2= [];
gdjs.MainGameCode.GDplayerObjects3= [];
gdjs.MainGameCode.GDdeadlineObjects1= [];
gdjs.MainGameCode.GDdeadlineObjects2= [];
gdjs.MainGameCode.GDdeadlineObjects3= [];
gdjs.MainGameCode.GDjumpthroughObjects1= [];
gdjs.MainGameCode.GDjumpthroughObjects2= [];
gdjs.MainGameCode.GDjumpthroughObjects3= [];
gdjs.MainGameCode.GDEnemyObjects1= [];
gdjs.MainGameCode.GDEnemyObjects2= [];
gdjs.MainGameCode.GDEnemyObjects3= [];
gdjs.MainGameCode.GDchObjects1= [];
gdjs.MainGameCode.GDchObjects2= [];
gdjs.MainGameCode.GDchObjects3= [];
gdjs.MainGameCode.GDtheendObjects1= [];
gdjs.MainGameCode.GDtheendObjects2= [];
gdjs.MainGameCode.GDtheendObjects3= [];
gdjs.MainGameCode.GDhealerObjects1= [];
gdjs.MainGameCode.GDhealerObjects2= [];
gdjs.MainGameCode.GDhealerObjects3= [];
gdjs.MainGameCode.GDlifebarObjects1= [];
gdjs.MainGameCode.GDlifebarObjects2= [];
gdjs.MainGameCode.GDlifebarObjects3= [];
gdjs.MainGameCode.GDjumpObjects1= [];
gdjs.MainGameCode.GDjumpObjects2= [];
gdjs.MainGameCode.GDjumpObjects3= [];
gdjs.MainGameCode.GDleftObjects1= [];
gdjs.MainGameCode.GDleftObjects2= [];
gdjs.MainGameCode.GDleftObjects3= [];
gdjs.MainGameCode.GDrightObjects1= [];
gdjs.MainGameCode.GDrightObjects2= [];
gdjs.MainGameCode.GDrightObjects3= [];

gdjs.MainGameCode.conditionTrue_0 = {val:false};
gdjs.MainGameCode.condition0IsTrue_0 = {val:false};
gdjs.MainGameCode.condition1IsTrue_0 = {val:false};


gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.MainGameCode.GDplayerObjects1});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.MainGameCode.GDEnemyObjects1});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.MainGameCode.GDplayerObjects1});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDdeadlineObjects1Objects = Hashtable.newFrom({"deadline": gdjs.MainGameCode.GDdeadlineObjects1});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.MainGameCode.GDplayerObjects1});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDhealerObjects1Objects = Hashtable.newFrom({"healer": gdjs.MainGameCode.GDhealerObjects1});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.MainGameCode.GDplayerObjects1});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDchObjects1Objects = Hashtable.newFrom({"ch": gdjs.MainGameCode.GDchObjects1});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDjumpObjects2Objects = Hashtable.newFrom({"jump": gdjs.MainGameCode.GDjumpObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDleftObjects2Objects = Hashtable.newFrom({"left": gdjs.MainGameCode.GDleftObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.MainGameCode.GDrightObjects1});
gdjs.MainGameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.MainGameCode.GDjumpObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDjumpObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDjumpObjects2 */
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainGameCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDplayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.MainGameCode.GDjumpObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDjumpObjects2[i].getBehavior("Tween").addObjectOpacityTween("press", 50, "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.MainGameCode.GDleftObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDleftObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDleftObjects2 */
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainGameCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDplayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.MainGameCode.GDleftObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDleftObjects2[i].getBehavior("Tween").addObjectOpacityTween("press", 50, "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.MainGameCode.GDrightObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDrightObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainGameCode.GDplayerObjects1);
/* Reuse gdjs.MainGameCode.GDrightObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.MainGameCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDrightObjects1[i].getBehavior("Tween").addObjectOpacityTween("press", 50, "linear", 100, false);
}
}}

}


};gdjs.MainGameCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("lifebar"), gdjs.MainGameCode.GDlifebarObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainGameCode.GDplayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MainGameCode.GDplayerObjects1.length !== 0 ? gdjs.MainGameCode.GDplayerObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.MainGameCode.GDlifebarObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDlifebarObjects1[i].setAnimation((( gdjs.MainGameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDplayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.MainGameCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainGameCode.GDplayerObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDplayerObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDplayerObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainGameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDplayerObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("chx")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("chy")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("deadline"), gdjs.MainGameCode.GDdeadlineObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainGameCode.GDplayerObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDplayerObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDdeadlineObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDplayerObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainGameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDplayerObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("chx")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("chy")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("healer"), gdjs.MainGameCode.GDhealerObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainGameCode.GDplayerObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDplayerObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDhealerObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDhealerObjects1 */
/* Reuse gdjs.MainGameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDplayerObjects1[i].getBehavior("Health").Heal(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainGameCode.GDhealerObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDhealerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ch"), gdjs.MainGameCode.GDchObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainGameCode.GDplayerObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDplayerObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDchObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDchObjects1 */
{runtimeScene.getGame().getVariables().get("chx").setNumber((( gdjs.MainGameCode.GDchObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDchObjects1[0].getPointX("")));
}{runtimeScene.getGame().getVariables().get("chy").setNumber((( gdjs.MainGameCode.GDchObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDchObjects1[0].getPointY("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainGameCode.GDplayerObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDplayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDplayerObjects1[k] = gdjs.MainGameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDplayerObjects1.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.MainGameCode.GDjumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.MainGameCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.MainGameCode.GDrightObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDleftObjects1[i].getBehavior("Tween").addObjectOpacityTween("press", 500, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDrightObjects1[i].getBehavior("Tween").addObjectOpacityTween("press", 500, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDjumpObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDjumpObjects1[i].getBehavior("Tween").addObjectOpacityTween("press", 500, "linear", 100, false);
}
}}

}


};

gdjs.MainGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainGameCode.GDbaseObjects1.length = 0;
gdjs.MainGameCode.GDbaseObjects2.length = 0;
gdjs.MainGameCode.GDbaseObjects3.length = 0;
gdjs.MainGameCode.GDplayerObjects1.length = 0;
gdjs.MainGameCode.GDplayerObjects2.length = 0;
gdjs.MainGameCode.GDplayerObjects3.length = 0;
gdjs.MainGameCode.GDdeadlineObjects1.length = 0;
gdjs.MainGameCode.GDdeadlineObjects2.length = 0;
gdjs.MainGameCode.GDdeadlineObjects3.length = 0;
gdjs.MainGameCode.GDjumpthroughObjects1.length = 0;
gdjs.MainGameCode.GDjumpthroughObjects2.length = 0;
gdjs.MainGameCode.GDjumpthroughObjects3.length = 0;
gdjs.MainGameCode.GDEnemyObjects1.length = 0;
gdjs.MainGameCode.GDEnemyObjects2.length = 0;
gdjs.MainGameCode.GDEnemyObjects3.length = 0;
gdjs.MainGameCode.GDchObjects1.length = 0;
gdjs.MainGameCode.GDchObjects2.length = 0;
gdjs.MainGameCode.GDchObjects3.length = 0;
gdjs.MainGameCode.GDtheendObjects1.length = 0;
gdjs.MainGameCode.GDtheendObjects2.length = 0;
gdjs.MainGameCode.GDtheendObjects3.length = 0;
gdjs.MainGameCode.GDhealerObjects1.length = 0;
gdjs.MainGameCode.GDhealerObjects2.length = 0;
gdjs.MainGameCode.GDhealerObjects3.length = 0;
gdjs.MainGameCode.GDlifebarObjects1.length = 0;
gdjs.MainGameCode.GDlifebarObjects2.length = 0;
gdjs.MainGameCode.GDlifebarObjects3.length = 0;
gdjs.MainGameCode.GDjumpObjects1.length = 0;
gdjs.MainGameCode.GDjumpObjects2.length = 0;
gdjs.MainGameCode.GDjumpObjects3.length = 0;
gdjs.MainGameCode.GDleftObjects1.length = 0;
gdjs.MainGameCode.GDleftObjects2.length = 0;
gdjs.MainGameCode.GDleftObjects3.length = 0;
gdjs.MainGameCode.GDrightObjects1.length = 0;
gdjs.MainGameCode.GDrightObjects2.length = 0;
gdjs.MainGameCode.GDrightObjects3.length = 0;

gdjs.MainGameCode.eventsList1(runtimeScene);
return;

}

gdjs['MainGameCode'] = gdjs.MainGameCode;

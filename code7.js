gdjs.Help_32PageCode = {};
gdjs.Help_32PageCode.GDDisplayAmmoObjects1= [];
gdjs.Help_32PageCode.GDDisplayAmmoObjects2= [];
gdjs.Help_32PageCode.GDPlayerObjects1= [];
gdjs.Help_32PageCode.GDPlayerObjects2= [];
gdjs.Help_32PageCode.GDArrowObjects1= [];
gdjs.Help_32PageCode.GDArrowObjects2= [];
gdjs.Help_32PageCode.GDDoorObjects1= [];
gdjs.Help_32PageCode.GDDoorObjects2= [];
gdjs.Help_32PageCode.GDSkullObjects1= [];
gdjs.Help_32PageCode.GDSkullObjects2= [];
gdjs.Help_32PageCode.GDWallBarrierObjects1= [];
gdjs.Help_32PageCode.GDWallBarrierObjects2= [];
gdjs.Help_32PageCode.GDGameOverObjects1= [];
gdjs.Help_32PageCode.GDGameOverObjects2= [];
gdjs.Help_32PageCode.GDRestartTextObjects1= [];
gdjs.Help_32PageCode.GDRestartTextObjects2= [];
gdjs.Help_32PageCode.GDMiddleFloorObjects1= [];
gdjs.Help_32PageCode.GDMiddleFloorObjects2= [];
gdjs.Help_32PageCode.GDTopWallObjects1= [];
gdjs.Help_32PageCode.GDTopWallObjects2= [];
gdjs.Help_32PageCode.GDLeftWallObjects1= [];
gdjs.Help_32PageCode.GDLeftWallObjects2= [];
gdjs.Help_32PageCode.GDTopLeftWallObjects1= [];
gdjs.Help_32PageCode.GDTopLeftWallObjects2= [];
gdjs.Help_32PageCode.GDInnerWallVertObjects1= [];
gdjs.Help_32PageCode.GDInnerWallVertObjects2= [];
gdjs.Help_32PageCode.GDInnerWallHorizObjects1= [];
gdjs.Help_32PageCode.GDInnerWallHorizObjects2= [];
gdjs.Help_32PageCode.GDBottomLeftWallObjects1= [];
gdjs.Help_32PageCode.GDBottomLeftWallObjects2= [];
gdjs.Help_32PageCode.GDBottomWallObjects1= [];
gdjs.Help_32PageCode.GDBottomWallObjects2= [];
gdjs.Help_32PageCode.GDBottomRightWallObjects1= [];
gdjs.Help_32PageCode.GDBottomRightWallObjects2= [];
gdjs.Help_32PageCode.GDRightWallObjects1= [];
gdjs.Help_32PageCode.GDRightWallObjects2= [];
gdjs.Help_32PageCode.GDTopRightWallObjects1= [];
gdjs.Help_32PageCode.GDTopRightWallObjects2= [];
gdjs.Help_32PageCode.GDHeart1Objects1= [];
gdjs.Help_32PageCode.GDHeart1Objects2= [];
gdjs.Help_32PageCode.GDHeart2Objects1= [];
gdjs.Help_32PageCode.GDHeart2Objects2= [];
gdjs.Help_32PageCode.GDHeart3Objects1= [];
gdjs.Help_32PageCode.GDHeart3Objects2= [];
gdjs.Help_32PageCode.GDHealthPotionObjects1= [];
gdjs.Help_32PageCode.GDHealthPotionObjects2= [];
gdjs.Help_32PageCode.GDBlueGemObjects1= [];
gdjs.Help_32PageCode.GDBlueGemObjects2= [];
gdjs.Help_32PageCode.GDDisplayGemsObjects1= [];
gdjs.Help_32PageCode.GDDisplayGemsObjects2= [];
gdjs.Help_32PageCode.GDRedKeyUIObjects1= [];
gdjs.Help_32PageCode.GDRedKeyUIObjects2= [];
gdjs.Help_32PageCode.GDPortalObjects1= [];
gdjs.Help_32PageCode.GDPortalObjects2= [];
gdjs.Help_32PageCode.GDTextBackgroundObjects1= [];
gdjs.Help_32PageCode.GDTextBackgroundObjects2= [];
gdjs.Help_32PageCode.GDTextDoorObjects1= [];
gdjs.Help_32PageCode.GDTextDoorObjects2= [];
gdjs.Help_32PageCode.GDSpeechTextObjects1= [];
gdjs.Help_32PageCode.GDSpeechTextObjects2= [];
gdjs.Help_32PageCode.GDClickToContinueObjects1= [];
gdjs.Help_32PageCode.GDClickToContinueObjects2= [];
gdjs.Help_32PageCode.GDMerchantObjects1= [];
gdjs.Help_32PageCode.GDMerchantObjects2= [];
gdjs.Help_32PageCode.GDAmmoBarObjects1= [];
gdjs.Help_32PageCode.GDAmmoBarObjects2= [];
gdjs.Help_32PageCode.GDAdminTextObjects1= [];
gdjs.Help_32PageCode.GDAdminTextObjects2= [];
gdjs.Help_32PageCode.GDBackgroundObjects1= [];
gdjs.Help_32PageCode.GDBackgroundObjects2= [];
gdjs.Help_32PageCode.GDHelpTextObjects1= [];
gdjs.Help_32PageCode.GDHelpTextObjects2= [];
gdjs.Help_32PageCode.GDTitleObjects1= [];
gdjs.Help_32PageCode.GDTitleObjects2= [];
gdjs.Help_32PageCode.GDBackButtonObjects1= [];
gdjs.Help_32PageCode.GDBackButtonObjects2= [];
gdjs.Help_32PageCode.GDBackButtonTextObjects1= [];
gdjs.Help_32PageCode.GDBackButtonTextObjects2= [];

gdjs.Help_32PageCode.conditionTrue_0 = {val:false};
gdjs.Help_32PageCode.condition0IsTrue_0 = {val:false};
gdjs.Help_32PageCode.condition1IsTrue_0 = {val:false};
gdjs.Help_32PageCode.condition2IsTrue_0 = {val:false};


gdjs.Help_32PageCode.mapOfGDgdjs_46Help_9532PageCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Help_32PageCode.GDBackButtonObjects1});gdjs.Help_32PageCode.eventsList0xb2a48 = function(runtimeScene) {

{

gdjs.Help_32PageCode.GDBackButtonObjects1.createFrom(runtimeScene.getObjects("BackButton"));

gdjs.Help_32PageCode.condition0IsTrue_0.val = false;
gdjs.Help_32PageCode.condition1IsTrue_0.val = false;
{
gdjs.Help_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Help_32PageCode.mapOfGDgdjs_46Help_9532PageCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Help_32PageCode.condition0IsTrue_0.val ) {
{
gdjs.Help_32PageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Help_32PageCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Page", false);
}}

}


{

gdjs.Help_32PageCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Help_32PageCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Help_32PageCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Help_32PageCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.Help_32PageCode.condition0IsTrue_0.val = true;
        gdjs.Help_32PageCode.GDPlayerObjects1[k] = gdjs.Help_32PageCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Help_32PageCode.GDPlayerObjects1.length = k;}if (gdjs.Help_32PageCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Help_32PageCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Help_32PageCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Help_32PageCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{


gdjs.Help_32PageCode.condition0IsTrue_0.val = false;
{
gdjs.Help_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Help_32PageCode.condition0IsTrue_0.val) {
gdjs.Help_32PageCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Help_32PageCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Help_32PageCode.GDPlayerObjects1[i].setAnimationName("Walking Right");
}
}}

}


{


gdjs.Help_32PageCode.condition0IsTrue_0.val = false;
{
gdjs.Help_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Help_32PageCode.condition0IsTrue_0.val) {
gdjs.Help_32PageCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Help_32PageCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Help_32PageCode.GDPlayerObjects1[i].setAnimationName("Walking Left");
}
}}

}


{


gdjs.Help_32PageCode.condition0IsTrue_0.val = false;
{
gdjs.Help_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Help_32PageCode.condition0IsTrue_0.val) {
gdjs.Help_32PageCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Help_32PageCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Help_32PageCode.GDPlayerObjects1[i].setAnimationName("Walking Up");
}
}}

}


{


gdjs.Help_32PageCode.condition0IsTrue_0.val = false;
{
gdjs.Help_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Help_32PageCode.condition0IsTrue_0.val) {
gdjs.Help_32PageCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Help_32PageCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Help_32PageCode.GDPlayerObjects1[i].setAnimationName("Walking Down");
}
}}

}


{


{
}

}


}; //End of gdjs.Help_32PageCode.eventsList0xb2a48


gdjs.Help_32PageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Help_32PageCode.GDDisplayAmmoObjects1.length = 0;
gdjs.Help_32PageCode.GDDisplayAmmoObjects2.length = 0;
gdjs.Help_32PageCode.GDPlayerObjects1.length = 0;
gdjs.Help_32PageCode.GDPlayerObjects2.length = 0;
gdjs.Help_32PageCode.GDArrowObjects1.length = 0;
gdjs.Help_32PageCode.GDArrowObjects2.length = 0;
gdjs.Help_32PageCode.GDDoorObjects1.length = 0;
gdjs.Help_32PageCode.GDDoorObjects2.length = 0;
gdjs.Help_32PageCode.GDSkullObjects1.length = 0;
gdjs.Help_32PageCode.GDSkullObjects2.length = 0;
gdjs.Help_32PageCode.GDWallBarrierObjects1.length = 0;
gdjs.Help_32PageCode.GDWallBarrierObjects2.length = 0;
gdjs.Help_32PageCode.GDGameOverObjects1.length = 0;
gdjs.Help_32PageCode.GDGameOverObjects2.length = 0;
gdjs.Help_32PageCode.GDRestartTextObjects1.length = 0;
gdjs.Help_32PageCode.GDRestartTextObjects2.length = 0;
gdjs.Help_32PageCode.GDMiddleFloorObjects1.length = 0;
gdjs.Help_32PageCode.GDMiddleFloorObjects2.length = 0;
gdjs.Help_32PageCode.GDTopWallObjects1.length = 0;
gdjs.Help_32PageCode.GDTopWallObjects2.length = 0;
gdjs.Help_32PageCode.GDLeftWallObjects1.length = 0;
gdjs.Help_32PageCode.GDLeftWallObjects2.length = 0;
gdjs.Help_32PageCode.GDTopLeftWallObjects1.length = 0;
gdjs.Help_32PageCode.GDTopLeftWallObjects2.length = 0;
gdjs.Help_32PageCode.GDInnerWallVertObjects1.length = 0;
gdjs.Help_32PageCode.GDInnerWallVertObjects2.length = 0;
gdjs.Help_32PageCode.GDInnerWallHorizObjects1.length = 0;
gdjs.Help_32PageCode.GDInnerWallHorizObjects2.length = 0;
gdjs.Help_32PageCode.GDBottomLeftWallObjects1.length = 0;
gdjs.Help_32PageCode.GDBottomLeftWallObjects2.length = 0;
gdjs.Help_32PageCode.GDBottomWallObjects1.length = 0;
gdjs.Help_32PageCode.GDBottomWallObjects2.length = 0;
gdjs.Help_32PageCode.GDBottomRightWallObjects1.length = 0;
gdjs.Help_32PageCode.GDBottomRightWallObjects2.length = 0;
gdjs.Help_32PageCode.GDRightWallObjects1.length = 0;
gdjs.Help_32PageCode.GDRightWallObjects2.length = 0;
gdjs.Help_32PageCode.GDTopRightWallObjects1.length = 0;
gdjs.Help_32PageCode.GDTopRightWallObjects2.length = 0;
gdjs.Help_32PageCode.GDHeart1Objects1.length = 0;
gdjs.Help_32PageCode.GDHeart1Objects2.length = 0;
gdjs.Help_32PageCode.GDHeart2Objects1.length = 0;
gdjs.Help_32PageCode.GDHeart2Objects2.length = 0;
gdjs.Help_32PageCode.GDHeart3Objects1.length = 0;
gdjs.Help_32PageCode.GDHeart3Objects2.length = 0;
gdjs.Help_32PageCode.GDHealthPotionObjects1.length = 0;
gdjs.Help_32PageCode.GDHealthPotionObjects2.length = 0;
gdjs.Help_32PageCode.GDBlueGemObjects1.length = 0;
gdjs.Help_32PageCode.GDBlueGemObjects2.length = 0;
gdjs.Help_32PageCode.GDDisplayGemsObjects1.length = 0;
gdjs.Help_32PageCode.GDDisplayGemsObjects2.length = 0;
gdjs.Help_32PageCode.GDRedKeyUIObjects1.length = 0;
gdjs.Help_32PageCode.GDRedKeyUIObjects2.length = 0;
gdjs.Help_32PageCode.GDPortalObjects1.length = 0;
gdjs.Help_32PageCode.GDPortalObjects2.length = 0;
gdjs.Help_32PageCode.GDTextBackgroundObjects1.length = 0;
gdjs.Help_32PageCode.GDTextBackgroundObjects2.length = 0;
gdjs.Help_32PageCode.GDTextDoorObjects1.length = 0;
gdjs.Help_32PageCode.GDTextDoorObjects2.length = 0;
gdjs.Help_32PageCode.GDSpeechTextObjects1.length = 0;
gdjs.Help_32PageCode.GDSpeechTextObjects2.length = 0;
gdjs.Help_32PageCode.GDClickToContinueObjects1.length = 0;
gdjs.Help_32PageCode.GDClickToContinueObjects2.length = 0;
gdjs.Help_32PageCode.GDMerchantObjects1.length = 0;
gdjs.Help_32PageCode.GDMerchantObjects2.length = 0;
gdjs.Help_32PageCode.GDAmmoBarObjects1.length = 0;
gdjs.Help_32PageCode.GDAmmoBarObjects2.length = 0;
gdjs.Help_32PageCode.GDAdminTextObjects1.length = 0;
gdjs.Help_32PageCode.GDAdminTextObjects2.length = 0;
gdjs.Help_32PageCode.GDBackgroundObjects1.length = 0;
gdjs.Help_32PageCode.GDBackgroundObjects2.length = 0;
gdjs.Help_32PageCode.GDHelpTextObjects1.length = 0;
gdjs.Help_32PageCode.GDHelpTextObjects2.length = 0;
gdjs.Help_32PageCode.GDTitleObjects1.length = 0;
gdjs.Help_32PageCode.GDTitleObjects2.length = 0;
gdjs.Help_32PageCode.GDBackButtonObjects1.length = 0;
gdjs.Help_32PageCode.GDBackButtonObjects2.length = 0;
gdjs.Help_32PageCode.GDBackButtonTextObjects1.length = 0;
gdjs.Help_32PageCode.GDBackButtonTextObjects2.length = 0;

gdjs.Help_32PageCode.eventsList0xb2a48(runtimeScene);
return;
}
gdjs['Help_32PageCode'] = gdjs.Help_32PageCode;
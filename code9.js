gdjs.About_32PageCode = {};
gdjs.About_32PageCode.GDDisplayAmmoObjects1= [];
gdjs.About_32PageCode.GDDisplayAmmoObjects2= [];
gdjs.About_32PageCode.GDPlayerObjects1= [];
gdjs.About_32PageCode.GDPlayerObjects2= [];
gdjs.About_32PageCode.GDArrowObjects1= [];
gdjs.About_32PageCode.GDArrowObjects2= [];
gdjs.About_32PageCode.GDDoorObjects1= [];
gdjs.About_32PageCode.GDDoorObjects2= [];
gdjs.About_32PageCode.GDSkullObjects1= [];
gdjs.About_32PageCode.GDSkullObjects2= [];
gdjs.About_32PageCode.GDWallBarrierObjects1= [];
gdjs.About_32PageCode.GDWallBarrierObjects2= [];
gdjs.About_32PageCode.GDGameOverObjects1= [];
gdjs.About_32PageCode.GDGameOverObjects2= [];
gdjs.About_32PageCode.GDRestartTextObjects1= [];
gdjs.About_32PageCode.GDRestartTextObjects2= [];
gdjs.About_32PageCode.GDMiddleFloorObjects1= [];
gdjs.About_32PageCode.GDMiddleFloorObjects2= [];
gdjs.About_32PageCode.GDTopWallObjects1= [];
gdjs.About_32PageCode.GDTopWallObjects2= [];
gdjs.About_32PageCode.GDLeftWallObjects1= [];
gdjs.About_32PageCode.GDLeftWallObjects2= [];
gdjs.About_32PageCode.GDTopLeftWallObjects1= [];
gdjs.About_32PageCode.GDTopLeftWallObjects2= [];
gdjs.About_32PageCode.GDInnerWallVertObjects1= [];
gdjs.About_32PageCode.GDInnerWallVertObjects2= [];
gdjs.About_32PageCode.GDInnerWallHorizObjects1= [];
gdjs.About_32PageCode.GDInnerWallHorizObjects2= [];
gdjs.About_32PageCode.GDBottomLeftWallObjects1= [];
gdjs.About_32PageCode.GDBottomLeftWallObjects2= [];
gdjs.About_32PageCode.GDBottomWallObjects1= [];
gdjs.About_32PageCode.GDBottomWallObjects2= [];
gdjs.About_32PageCode.GDBottomRightWallObjects1= [];
gdjs.About_32PageCode.GDBottomRightWallObjects2= [];
gdjs.About_32PageCode.GDRightWallObjects1= [];
gdjs.About_32PageCode.GDRightWallObjects2= [];
gdjs.About_32PageCode.GDTopRightWallObjects1= [];
gdjs.About_32PageCode.GDTopRightWallObjects2= [];
gdjs.About_32PageCode.GDHeart1Objects1= [];
gdjs.About_32PageCode.GDHeart1Objects2= [];
gdjs.About_32PageCode.GDHeart2Objects1= [];
gdjs.About_32PageCode.GDHeart2Objects2= [];
gdjs.About_32PageCode.GDHeart3Objects1= [];
gdjs.About_32PageCode.GDHeart3Objects2= [];
gdjs.About_32PageCode.GDHealthPotionObjects1= [];
gdjs.About_32PageCode.GDHealthPotionObjects2= [];
gdjs.About_32PageCode.GDBlueGemObjects1= [];
gdjs.About_32PageCode.GDBlueGemObjects2= [];
gdjs.About_32PageCode.GDDisplayGemsObjects1= [];
gdjs.About_32PageCode.GDDisplayGemsObjects2= [];
gdjs.About_32PageCode.GDRedKeyUIObjects1= [];
gdjs.About_32PageCode.GDRedKeyUIObjects2= [];
gdjs.About_32PageCode.GDPortalObjects1= [];
gdjs.About_32PageCode.GDPortalObjects2= [];
gdjs.About_32PageCode.GDTextBackgroundObjects1= [];
gdjs.About_32PageCode.GDTextBackgroundObjects2= [];
gdjs.About_32PageCode.GDTextDoorObjects1= [];
gdjs.About_32PageCode.GDTextDoorObjects2= [];
gdjs.About_32PageCode.GDSpeechTextObjects1= [];
gdjs.About_32PageCode.GDSpeechTextObjects2= [];
gdjs.About_32PageCode.GDClickToContinueObjects1= [];
gdjs.About_32PageCode.GDClickToContinueObjects2= [];
gdjs.About_32PageCode.GDMerchantObjects1= [];
gdjs.About_32PageCode.GDMerchantObjects2= [];
gdjs.About_32PageCode.GDAmmoBarObjects1= [];
gdjs.About_32PageCode.GDAmmoBarObjects2= [];
gdjs.About_32PageCode.GDBackgroundObjects1= [];
gdjs.About_32PageCode.GDBackgroundObjects2= [];
gdjs.About_32PageCode.GDHelpTextObjects1= [];
gdjs.About_32PageCode.GDHelpTextObjects2= [];
gdjs.About_32PageCode.GDTitleObjects1= [];
gdjs.About_32PageCode.GDTitleObjects2= [];
gdjs.About_32PageCode.GDBackButtonObjects1= [];
gdjs.About_32PageCode.GDBackButtonObjects2= [];
gdjs.About_32PageCode.GDBackButtonTextObjects1= [];
gdjs.About_32PageCode.GDBackButtonTextObjects2= [];

gdjs.About_32PageCode.conditionTrue_0 = {val:false};
gdjs.About_32PageCode.condition0IsTrue_0 = {val:false};
gdjs.About_32PageCode.condition1IsTrue_0 = {val:false};
gdjs.About_32PageCode.condition2IsTrue_0 = {val:false};


gdjs.About_32PageCode.mapOfGDgdjs_46About_9532PageCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.About_32PageCode.GDBackButtonObjects1});gdjs.About_32PageCode.eventsList0xb2a48 = function(runtimeScene) {

{

gdjs.About_32PageCode.GDBackButtonObjects1.createFrom(runtimeScene.getObjects("BackButton"));

gdjs.About_32PageCode.condition0IsTrue_0.val = false;
gdjs.About_32PageCode.condition1IsTrue_0.val = false;
{
gdjs.About_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.About_32PageCode.mapOfGDgdjs_46About_9532PageCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.About_32PageCode.condition0IsTrue_0.val ) {
{
gdjs.About_32PageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.About_32PageCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Page", false);
}}

}


{


{
}

}


}; //End of gdjs.About_32PageCode.eventsList0xb2a48


gdjs.About_32PageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.About_32PageCode.GDDisplayAmmoObjects1.length = 0;
gdjs.About_32PageCode.GDDisplayAmmoObjects2.length = 0;
gdjs.About_32PageCode.GDPlayerObjects1.length = 0;
gdjs.About_32PageCode.GDPlayerObjects2.length = 0;
gdjs.About_32PageCode.GDArrowObjects1.length = 0;
gdjs.About_32PageCode.GDArrowObjects2.length = 0;
gdjs.About_32PageCode.GDDoorObjects1.length = 0;
gdjs.About_32PageCode.GDDoorObjects2.length = 0;
gdjs.About_32PageCode.GDSkullObjects1.length = 0;
gdjs.About_32PageCode.GDSkullObjects2.length = 0;
gdjs.About_32PageCode.GDWallBarrierObjects1.length = 0;
gdjs.About_32PageCode.GDWallBarrierObjects2.length = 0;
gdjs.About_32PageCode.GDGameOverObjects1.length = 0;
gdjs.About_32PageCode.GDGameOverObjects2.length = 0;
gdjs.About_32PageCode.GDRestartTextObjects1.length = 0;
gdjs.About_32PageCode.GDRestartTextObjects2.length = 0;
gdjs.About_32PageCode.GDMiddleFloorObjects1.length = 0;
gdjs.About_32PageCode.GDMiddleFloorObjects2.length = 0;
gdjs.About_32PageCode.GDTopWallObjects1.length = 0;
gdjs.About_32PageCode.GDTopWallObjects2.length = 0;
gdjs.About_32PageCode.GDLeftWallObjects1.length = 0;
gdjs.About_32PageCode.GDLeftWallObjects2.length = 0;
gdjs.About_32PageCode.GDTopLeftWallObjects1.length = 0;
gdjs.About_32PageCode.GDTopLeftWallObjects2.length = 0;
gdjs.About_32PageCode.GDInnerWallVertObjects1.length = 0;
gdjs.About_32PageCode.GDInnerWallVertObjects2.length = 0;
gdjs.About_32PageCode.GDInnerWallHorizObjects1.length = 0;
gdjs.About_32PageCode.GDInnerWallHorizObjects2.length = 0;
gdjs.About_32PageCode.GDBottomLeftWallObjects1.length = 0;
gdjs.About_32PageCode.GDBottomLeftWallObjects2.length = 0;
gdjs.About_32PageCode.GDBottomWallObjects1.length = 0;
gdjs.About_32PageCode.GDBottomWallObjects2.length = 0;
gdjs.About_32PageCode.GDBottomRightWallObjects1.length = 0;
gdjs.About_32PageCode.GDBottomRightWallObjects2.length = 0;
gdjs.About_32PageCode.GDRightWallObjects1.length = 0;
gdjs.About_32PageCode.GDRightWallObjects2.length = 0;
gdjs.About_32PageCode.GDTopRightWallObjects1.length = 0;
gdjs.About_32PageCode.GDTopRightWallObjects2.length = 0;
gdjs.About_32PageCode.GDHeart1Objects1.length = 0;
gdjs.About_32PageCode.GDHeart1Objects2.length = 0;
gdjs.About_32PageCode.GDHeart2Objects1.length = 0;
gdjs.About_32PageCode.GDHeart2Objects2.length = 0;
gdjs.About_32PageCode.GDHeart3Objects1.length = 0;
gdjs.About_32PageCode.GDHeart3Objects2.length = 0;
gdjs.About_32PageCode.GDHealthPotionObjects1.length = 0;
gdjs.About_32PageCode.GDHealthPotionObjects2.length = 0;
gdjs.About_32PageCode.GDBlueGemObjects1.length = 0;
gdjs.About_32PageCode.GDBlueGemObjects2.length = 0;
gdjs.About_32PageCode.GDDisplayGemsObjects1.length = 0;
gdjs.About_32PageCode.GDDisplayGemsObjects2.length = 0;
gdjs.About_32PageCode.GDRedKeyUIObjects1.length = 0;
gdjs.About_32PageCode.GDRedKeyUIObjects2.length = 0;
gdjs.About_32PageCode.GDPortalObjects1.length = 0;
gdjs.About_32PageCode.GDPortalObjects2.length = 0;
gdjs.About_32PageCode.GDTextBackgroundObjects1.length = 0;
gdjs.About_32PageCode.GDTextBackgroundObjects2.length = 0;
gdjs.About_32PageCode.GDTextDoorObjects1.length = 0;
gdjs.About_32PageCode.GDTextDoorObjects2.length = 0;
gdjs.About_32PageCode.GDSpeechTextObjects1.length = 0;
gdjs.About_32PageCode.GDSpeechTextObjects2.length = 0;
gdjs.About_32PageCode.GDClickToContinueObjects1.length = 0;
gdjs.About_32PageCode.GDClickToContinueObjects2.length = 0;
gdjs.About_32PageCode.GDMerchantObjects1.length = 0;
gdjs.About_32PageCode.GDMerchantObjects2.length = 0;
gdjs.About_32PageCode.GDAmmoBarObjects1.length = 0;
gdjs.About_32PageCode.GDAmmoBarObjects2.length = 0;
gdjs.About_32PageCode.GDBackgroundObjects1.length = 0;
gdjs.About_32PageCode.GDBackgroundObjects2.length = 0;
gdjs.About_32PageCode.GDHelpTextObjects1.length = 0;
gdjs.About_32PageCode.GDHelpTextObjects2.length = 0;
gdjs.About_32PageCode.GDTitleObjects1.length = 0;
gdjs.About_32PageCode.GDTitleObjects2.length = 0;
gdjs.About_32PageCode.GDBackButtonObjects1.length = 0;
gdjs.About_32PageCode.GDBackButtonObjects2.length = 0;
gdjs.About_32PageCode.GDBackButtonTextObjects1.length = 0;
gdjs.About_32PageCode.GDBackButtonTextObjects2.length = 0;

gdjs.About_32PageCode.eventsList0xb2a48(runtimeScene);
return;
}
gdjs['About_32PageCode'] = gdjs.About_32PageCode;

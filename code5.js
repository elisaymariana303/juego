gdjs.GameoverCode = {};
gdjs.GameoverCode.localVariables = [];
gdjs.GameoverCode.idToCallbackMap = new Map();
gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects1= [];
gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects2= [];
gdjs.GameoverCode.GDgameoverObjects1= [];
gdjs.GameoverCode.GDgameoverObjects2= [];


gdjs.GameoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithMetalFrame"), gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects1.length;i<l;++i) {
    if ( gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects1[k] = gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects1[i];
        ++k;
    }
}
gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "513984__danlucaz__sad-loop-1 (1).wav", true, 50, 1);
}
}

}


};

gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.GameoverCode.GDgameoverObjects1.length = 0;
gdjs.GameoverCode.GDgameoverObjects2.length = 0;

gdjs.GameoverCode.eventsList0(runtimeScene);
gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.GameoverCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.GameoverCode.GDgameoverObjects1.length = 0;
gdjs.GameoverCode.GDgameoverObjects2.length = 0;


return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;

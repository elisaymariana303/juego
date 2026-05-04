gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.MenuCode.GDfondomenuObjects1= [];
gdjs.MenuCode.GDfondomenuObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame"), gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects1[k] = gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel1", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "851532__robinhood76__13944-overdrive-vintage-logo.wav", false, 50, 1);
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.MenuCode.GDfondomenuObjects1.length = 0;
gdjs.MenuCode.GDfondomenuObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.MenuCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.MenuCode.GDfondomenuObjects1.length = 0;
gdjs.MenuCode.GDfondomenuObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;

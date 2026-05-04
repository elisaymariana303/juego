gdjs.VictoriaCode = {};
gdjs.VictoriaCode.localVariables = [];
gdjs.VictoriaCode.idToCallbackMap = new Map();
gdjs.VictoriaCode.GDBlackDecoratedButtonObjects1= [];
gdjs.VictoriaCode.GDBlackDecoratedButtonObjects2= [];
gdjs.VictoriaCode.GDvictoriaObjects1= [];
gdjs.VictoriaCode.GDvictoriaObjects2= [];


gdjs.VictoriaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "843046__silverillusionist__victory-fanfare-8-bit-thunder-4.wav", true, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.VictoriaCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VictoriaCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.VictoriaCode.GDBlackDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.VictoriaCode.GDBlackDecoratedButtonObjects1[k] = gdjs.VictoriaCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.VictoriaCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


};

gdjs.VictoriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoriaCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.VictoriaCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.VictoriaCode.GDvictoriaObjects1.length = 0;
gdjs.VictoriaCode.GDvictoriaObjects2.length = 0;

gdjs.VictoriaCode.eventsList0(runtimeScene);
gdjs.VictoriaCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.VictoriaCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.VictoriaCode.GDvictoriaObjects1.length = 0;
gdjs.VictoriaCode.GDvictoriaObjects2.length = 0;


return;

}

gdjs['VictoriaCode'] = gdjs.VictoriaCode;

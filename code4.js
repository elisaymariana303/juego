gdjs.BonusCode = {};
gdjs.BonusCode.localVariables = [];
gdjs.BonusCode.idToCallbackMap = new Map();


gdjs.BonusCode.eventsList0 = function(runtimeScene) {

};

gdjs.BonusCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.BonusCode.eventsList0(runtimeScene);


return;

}

gdjs['BonusCode'] = gdjs.BonusCode;

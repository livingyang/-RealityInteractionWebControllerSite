"use strict";(self["webpackChunkreality_interaction_web_controller"]=self["webpackChunkreality_interaction_web_controller"]||[]).push([[327],{6327:(n,e,t)=>{t.r(e),t.d(e,{default:()=>R});var a=t(3673);function i(n,e,t,i,l,r){const o=(0,a.up)("q-btn"),s=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(s,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{color:"primary",label:"点击进入场景",onClick:n.onEnterClick},null,8,["onClick"])])),_:1})}t(2100);let l={};const r=l;l["RIGameMode.lua"]='local RIGameMode = {}\n\nfunction RIGameMode:ReceiveBeginPlay()\n    self.Super:ReceiveBeginPlay()\n    print("RIGameMode:ReceiveBeginPlay")\nend\n\nreturn RIGameMode\n',l["RIMainUI.lua"]='local RIMainUI = {}\n\nlocal GameplayStatics = import("GameplayStatics")\nlocal KismetSystemLibrary = import("KismetSystemLibrary")\nlocal DatasmithRuntimeLibrary = import("DatasmithRuntimeLibrary")\n\nfunction RIMainUI:Initialize() \nend\n\nfunction RIMainUI:OnDestroy()\nend\n\nfunction RIMainUI:ReceiveBeginPlay()\n    self.Super:ReceiveBeginPlay()\n    print("RIMainUI:ReceiveBeginPlay")\nend\n\nfunction RIMainUI:OnWebCall(method, param)\n    print(\'RIMainUI:OnWebCall\', method, param)\n\n    -- 直接查找自己是否有websocket消息处理函数\n    if self[method] then\n        self[method](self, param)\n    else\n        print(\'Error: RIMainUI:OnWebCall, no method\', method)\n    end\nend\n\nfunction RIMainUI:OpenLevel(levelName)\n    GameplayStatics.OpenLevel(self, levelName, true, "");\nend\n\nfunction RIMainUI:SetSolarTime(time)\n    print(\'RIMainUI:SetSolarTime:\', time)\n    local sunskyClass = slua.loadClass("/SunPosition/SunSky.SunSky")\n    local sunsky = GameplayStatics.GetActorOfClass(self, sunskyClass);\n    if sunsky ~= nil then\n        sunsky.SolarTime = time\n    end\nend\n\nfunction RIMainUI:openDatasmith()\n    print(\'RIMainUI:openDatasmith\')\n    local actor = self:GetDatasmithRuntimeActor()\n    if actor ~= nil then\n        DatasmithRuntimeLibrary.LoadFileFromExplorer(actor, KismetSystemLibrary.GetProjectDirectory())\n    else\n        print("self:GetDatasmithRuntimeActor() is nil")\n    end\nend\n\nreturn RIMainUI\n',l["RIPlayerController.lua"]='local RIPlayerController = {\n  bCanEverTick = true,\n}\n\nfunction RIPlayerController:ReceiveBeginPlay()\n    self.Super:ReceiveBeginPlay()\n    print("RIPlayerController:ReceiveBeginPlay")\nend\n\nreturn RIPlayerController\n';const o=(0,a.aZ)({data(){return{scripts:{a:"a",b:"b"}}},mounted(){console.log("mounted luascripts:",r),ue4("SaveLuaScripts",JSON.stringify(r))},methods:{onEnterClick:()=>{console.log("onEnter"),ue4("OpenLevel","Exterior")}}});var s=t(4260),c=t(4379),m=t(1828),u=t(7518),I=t.n(u);const y=(0,s.Z)(o,[["render",i]]),R=y;I()(o,"components",{QPage:c.Z,QBtn:m.Z})}}]);
'use strict';
CONFIG.set("relativeImportPath", "js/packages/");
CONFIG.set("componentsBasePath", "templates/components/");
CONFIG.set("delayForReady", 1);
CONFIG.set("preserveComponentBodyTag", false);
CONFIG.set("useConfigService", false);
CONFIG.set("routingWay","pathname");
CONFIG.set("useSDK",true);
CONFIG.set("useLocalSDK",false);

Import("com.mycompany.mypackage");

Ready(function() {
});

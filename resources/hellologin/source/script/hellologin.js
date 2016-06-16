(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"hellologin.Application","qx.revision":"","qx.theme":"custom","qx.version":"5.0.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"hellologin":{"resourceUri":"../source/resource","sourceUri":"../source/class"},"qx":{"resourceUri":"../../../../../../opt/qooxdoo-5.0.1-sdk/framework/source/resource","sourceUri":"../../../../../../opt/qooxdoo-5.0.1-sdk/framework/source/class","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};
qx.$$g = {}

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:hellologin.2206c2c8f00b.js","qx:qx/Bootstrap.js","qx:qx/util/OOUtil.js","qx:qx/core/Environment.js","qx:qx/bom/client/EcmaScript.js","qx:qx/lang/normalize/Function.js","qx:qx/lang/normalize/Array.js","qx:qx/Mixin.js","qx:qx/core/Aspect.js","qx:qx/lang/normalize/String.js","qx:qx/lang/normalize/Object.js","qx:qx/Interface.js","qx:qx/lang/normalize/Error.js","qx:qx/lang/normalize/Date.js","qx:qx/core/Property.js","qx:qx/Class.js","qx:qx/data/MBinding.js","qx:qx/data/SingleValueBinding.js","qx:qx/lang/Type.js","qx:qx/core/Assert.js","qx:qx/type/BaseError.js","qx:qx/core/AssertionError.js","qx:qx/dev/StackTrace.js","qx:qx/lang/Array.js","qx:qx/bom/client/Engine.js","qx:qx/lang/Function.js","qx:qx/event/GlobalError.js","qx:qx/core/WindowError.js","qx:qx/core/GlobalError.js","qx:qx/core/ObjectRegistry.js","qx:qx/lang/Json.js","qx:qx/lang/String.js","qx:qx/data/IListData.js","qx:qx/core/ValidationError.js","qx:qx/util/RingBuffer.js","qx:qx/log/appender/RingBuffer.js","qx:qx/log/Logger.js","qx:qx/core/MLogging.js","qx:qx/dom/Node.js","qx:qx/bom/Event.js","qx:qx/bom/Style.js","qx:qx/bom/client/OperatingSystem.js","qx:qx/bom/client/Browser.js","qx:qx/bom/client/CssTransition.js","qx:qx/event/Manager.js","qx:qx/event/IEventHandler.js","qx:qx/event/Registration.js","qx:qx/core/MEvent.js","qx:qx/event/IEventDispatcher.js","qx:qx/core/MProperty.js","qx:qx/core/MAssert.js","qx:qx/core/Object.js","qx:qx/util/DisposeUtil.js","qx:qx/event/type/Event.js","qx:qx/util/ObjectPool.js","qx:qx/event/Pool.js","qx:qx/event/dispatch/Direct.js","qx:qx/event/handler/Object.js","qx:qx/event/type/Data.js","qx:qx/locale/MTranslation.js","qx:qx/application/IApplication.js","qx:qx/core/BaseInit.js","qx:qx/event/type/Native.js","qx:qx/event/handler/Window.js","qx:qx/event/handler/Application.js","qx:qx/core/Init.js","qx:qx/application/Mobile.js","qx:qx/application/Routing.js","qx:qx/event/Messaging.js","qx:qx/lang/Object.js","qx:qx/bom/client/Event.js","qx:qx/bom/History.js","qx:qx/bom/HashHistory.js","qx:qx/event/handler/Iframe.js","qx:qx/bom/Iframe.js","qx:qx/dom/Element.js","qx:qx/bom/client/Html.js","qx:qx/bom/element/Attribute.js","qx:qx/dom/Hierarchy.js","qx:qx/bom/client/Transport.js","qx:qx/util/LibraryManager.js","qx:qx/util/ResourceManager.js","qx:qx/event/Timer.js","qx:qx/event/Idle.js","qx:qx/bom/IframeHistory.js","qx:qx/bom/NativeHistory.js","qx:qx/ui/mobile/core/MLayoutHandling.js","qx:qx/ui/mobile/core/MChildrenHandling.js","qx:qx/bom/Lifecycle.js","qx:qx/ui/mobile/core/Widget.js","qx:qx/event/handler/PointerCore.js","qx:qx/event/Emitter.js","qx:qx/event/type/dom/Custom.js","qx:qx/event/type/dom/Pointer.js","qx:qx/bom/Viewport.js","qx:qx/bom/Document.js","qx:qx/bom/client/Device.js","qx:qx/event/dispatch/AbstractBubbling.js","qx:qx/event/dispatch/DomBubbling.js","qx:qx/event/type/Dom.js","qx:qx/event/type/Mouse.js","qx:qx/event/type/Pointer.js","qx:qx/event/handler/Pointer.js","qx:qx/event/handler/TouchCore.js","qx:qx/bom/element/BoxSizing.js","qx:qx/bom/element/Cursor.js","qx:qx/bom/element/Opacity.js","qx:qx/bom/element/Clip.js","qx:qx/bom/client/Css.js","qx:qx/bom/element/Style.js","qx:qx/event/type/Tap.js","qx:qx/event/type/Swipe.js","qx:qx/event/type/Rotate.js","qx:qx/event/type/Pinch.js","qx:qx/event/handler/Orientation.js","qx:qx/event/type/Orientation.js","qx:qx/event/type/Track.js","qx:qx/event/handler/UserAction.js","qx:qx/event/handler/Touch.js","qx:qx/event/type/Touch.js","qx:qx/ui/mobile/core/EventHandler.js","qx:qx/bom/element/Class.js","qx:qx/event/handler/GestureCore.js","qx:qx/type/BaseArray.js","qx:qxWeb.js","qx:qx/bom/Selector.js","qx:qx/bom/AnimationFrame.js","qx:qx/bom/Stylesheet.js","qx:qx/util/Uri.js","qx:qx/bom/client/Stylesheet.js","qx:qx/bom/client/CssAnimation.js","qx:qx/util/Wheel.js","qx:qx/event/handler/Appear.js","qx:qx/ui/mobile/core/DomUpdatedHandler.js","qx:qx/ui/mobile/layout/Abstract.js","qx:qx/bom/client/CssTransform.js","qx:qx/ui/mobile/container/Composite.js","qx:qx/ui/mobile/core/Root.js","qx:qx/ui/mobile/layout/AbstractBox.js","qx:qx/ui/mobile/layout/VBox.js","qx:qx/bom/element/Dimension.js","qx:qx/bom/client/Scroll.js","qx:qx/bom/element/Scroll.js","qx:qx/bom/element/Location.js","hellologin:hellologin/Application.js","qx:qx/log/appender/Util.js","qx:qx/log/appender/Native.js","qx:qx/event/type/Roll.js","qx:qx/event/handler/Gesture.js","qx:qx/event/handler/Keyboard.js","qx:qx/event/type/KeyInput.js","qx:qx/event/type/KeySequence.js","qx:qx/event/util/Keyboard.js","qx:qx/event/handler/Focus.js","qx:qx/bom/Selection.js","qx:qx/bom/Range.js","qx:qx/util/StringSplit.js","qx:qx/event/type/Focus.js","qx:qx/log/appender/Console.js","qx:qx/ui/mobile/page/Manager.js","qx:qx/ui/mobile/container/Drawer.js","qx:qx/event/handler/Element.js","qx:qx/event/handler/Mouse.js","qx:qx/event/type/MouseWheel.js","qx:qx/event/handler/Input.js","qx:qx/event/handler/Offline.js","qx:qx/bom/Element.js","qx:qx/event/dispatch/MouseCapture.js","qx:qx/event/handler/Capture.js","qx:qx/bom/client/Plugin.js","qx:qx/xml/Document.js","qx:qx/bom/client/Xml.js","qx:qx/ui/mobile/layout/HBox.js","qx:qx/ui/mobile/basic/Atom.js","qx:qx/ui/mobile/basic/Image.js","qx:qx/io/ImageLoader.js","qx:qx/ui/mobile/basic/Label.js","qx:qx/type/BaseString.js","qx:qx/locale/LocalizedString.js","qx:qx/locale/Manager.js","qx:qx/bom/client/Locale.js","qx:qx/ui/mobile/form/Button.js","qx:qx/ui/mobile/navigationbar/Button.js","qx:qx/ui/mobile/container/Navigation.js","qx:qx/ui/mobile/container/INavigation.js","qx:qx/ui/mobile/layout/Card.js","qx:qx/event/handler/Transition.js","qx:qx/ui/mobile/layout/CardAnimation.js","qx:qx/util/Animation.js","qx:qx/ui/mobile/core/MResize.js","qx:qx/bom/element/Animation.js","qx:qx/bom/element/AnimationCss.js","qx:qx/bom/element/AnimationHandle.js","qx:qx/bom/element/AnimationJs.js","qx:qx/bom/element/Transform.js","qx:qx/util/ColorUtil.js","qx:qx/ui/mobile/navigationbar/NavigationBar.js","qx:qx/bom/client/PhoneGap.js","qx:qx/ui/mobile/page/Page.js","qx:qx/ui/mobile/page/NavigationPage.js","qx:qx/ui/mobile/navigationbar/Title.js","qx:qx/ui/mobile/navigationbar/BackButton.js","qx:qx/ui/mobile/container/MIScroll.js","qx:qx/bom/request/Script.js","qx:qx/module/Css.js","qx:qx/module/Environment.js","qx:qx/module/Polyfill.js","qx:qx/module/Event.js","qx:qx/module/event/PointerHandler.js","qx:qx/module/Animation.js","qx:qx/module/Manipulating.js","qx:qx/bom/Html.js","qx:qx/ui/mobile/container/MNativeScroll.js","qx:qx/ui/mobile/container/Scroll.js","hellologin:hellologin/page/Login.js","qx:qx/ui/form/IStringForm.js","qx:qx/ui/mobile/form/MText.js","qx:qx/ui/mobile/form/MValue.js","qx:qx/ui/mobile/form/MState.js","qx:qx/ui/mobile/container/MScrollHandling.js","qx:qx/ui/form/MForm.js","qx:qx/ui/form/MModelProperty.js","qx:qx/ui/form/IForm.js","qx:qx/ui/form/IModel.js","qx:qx/ui/mobile/form/Input.js","qx:qx/ui/mobile/form/TextField.js","qx:qx/ui/mobile/form/NumberField.js","qx:qx/ui/mobile/form/PasswordField.js","qx:qx/ui/form/Form.js","qx:qx/ui/form/validation/Manager.js","qx:qx/ui/form/validation/AsyncValidator.js","qx:qx/ui/core/ISingleSelection.js","qx:qx/ui/form/Resetter.js","qx:qx/data/controller/ISelection.js","qx:qx/ui/form/IBooleanForm.js","qx:qx/ui/form/IColorForm.js","qx:qx/ui/form/IDateForm.js","qx:qx/ui/form/INumberForm.js","qx:qx/ui/mobile/form/Form.js","qx:qx/ui/mobile/form/Resetter.js","qx:qx/ui/form/renderer/IFormRenderer.js","qx:qx/ui/mobile/form/renderer/AbstractRenderer.js","qx:qx/ui/mobile/form/ToggleButton.js","qx:qx/ui/mobile/form/CheckBox.js","qx:qx/ui/mobile/form/RadioButton.js","qx:qx/ui/mobile/form/SelectBox.js","qx:qx/ui/mobile/dialog/Popup.js","qx:qx/util/placement/Placement.js","qx:qx/util/placement/AbstractAxis.js","qx:qx/util/placement/DirectAxis.js","qx:qx/util/placement/KeepAlignAxis.js","qx:qx/util/placement/BestFitAxis.js","qx:qx/ui/mobile/core/Blocker.js","qx:qx/ui/mobile/dialog/Menu.js","qx:qx/ui/mobile/list/List.js","qx:qx/ui/mobile/list/provider/Provider.js","qx:qx/util/Delegate.js","qx:qx/ui/mobile/list/renderer/group/Abstract.js","qx:qx/ui/mobile/list/renderer/group/Default.js","qx:qx/ui/mobile/list/renderer/Abstract.js","qx:qx/ui/mobile/list/renderer/Default.js","qx:qx/ui/mobile/form/renderer/Single.js","qx:qx/ui/mobile/form/TextArea.js","qx:qx/ui/mobile/form/Row.js","qx:qx/ui/mobile/form/Label.js","hellologin:hellologin/page/Overview.js"]}},
  urisBefore : [],
  cssBefore : ["./resource/hellologin/css/custom.css"],
  boot : "boot",
  closureParts : {},
  bootIsInline : false,
  addNoCacheParam : false,

  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;
  }
};

var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  if (isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type = "text/css";
  elem.href = uri;
  elem.onload = onLoadCss();
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function onLoadCss() {
  cssFilesToLoad = cssFilesToLoad - 1;
  if(cssFilesToLoad == 0) {
    setTimeout(initScripts,0);
  }
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isLoadParallel = 'async' in document.createElement('script');

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }

  var item;

  if (isLoadParallel) {
    while (list.length) {
      item = list.shift();
      if (list.length) {
        loadScript(item);
      } else {
        loadScript(item, callback);
      }
    }
  } else {
    item = list.shift();
    loadScript(item,  function() {
      if (isWebkit) {
        // force async, else Safari fails with a "maximum recursion depth exceeded"
        window.setTimeout(function() {
          loadScriptList(list, callback);
        }, 0);
      } else {
        loadScriptList(list, callback);
      }
    });
  }
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function ()
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true;
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}


// Load all stuff

var cssFilesToLoad = 0;

qx.$$loader.init = function() {
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {

    cssFilesToLoad = l.cssBefore.length;

    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  } else {
    initScripts();
  }
}

// Init scripts...
function initScripts() {
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();



qx.$$loader.init();


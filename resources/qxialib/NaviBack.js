/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * A clone of qooxdoo's starter "Overview" page with its hack to 
 * make the Back button respond to mouse clicks (and "tap"s?)
 */
qx.Class.define("WHATS.MY.PATH?.NaviBack",
{
  extend : qx.ui.mobile.page.NavigationPage,

  construct : function()
  {
    this.base(arguments);
    this.setTitle("Untitled");
  },


  members :
  {
    // overridden
    _initialize : function()
    {
      this.base(arguments);
    },


    // This is the hack we wish to capture...
    _back : function(triggeredByKeyEvent)
    {
      qx.core.Init.getApplication().getRouting().back();
    }
  }
});

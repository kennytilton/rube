/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * TODO: needs documentation
 */
qx.Class.define("identica.NaviBack",
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

      this.getContent().add(new qx.ui.mobile.basic.Label("Your first app."));
    },


    // overridden
    _back : function(triggeredByKeyEvent)
    {
      qx.core.Init.getApplication().getRouting().back();
    }
  }
});

/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "identica"
 *
 * @asset(identica/*)
 * @ignore(tiltontec.*)
 */
qx.Class.define("identica.Application",
{
  extend : qx.application.Mobile,


  members :
  {

    /**
     * This method contains the initial application code and gets called
     * during startup of the application
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console.
        // Trigger a "longtap" event on the navigation bar for opening it.
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
        Remove or edit the following code to create your application.
      -------------------------------------------------------------------------
      */
      identica.Bingo;

	    console.log('hi mom');
	    tiltontec.qxia.core.booya('mom');

      var manager = new qx.ui.mobile.page.Manager(false);
	    tiltontec.qxia.core.appinit(this, manager, this._show);
      //bingo = new identica.Bingo();
      //var login = new identica.page.Login();
      //var overview = new identica.page.Overview();

      // Add the pages to the page manager.
      //manager.addDetail([bingo]);

      // Initialize the application routing
      console.log('routing in app.js is '+this.getRouting());
      //this.getRouting().onGet("/", this._show, bingo);
      //this.getRouting().onGet("/overview", this._show, overview);

      this.getRouting().init();
    },


    /**
     * Default behaviour when a route matches. Displays the corresponding page on screen.
     * @param data {Map} the animation properties
     */
    _show : function(data) {
      this.show(data.customData);
    }
  }
});

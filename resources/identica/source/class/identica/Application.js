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
 * @ignore(hello_mobile.core.appinit)
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

      /* -- begin non-boilerplate ---------------------------

      We start by simply mentioning the QX classes we want to "new" on the fly
      so generate.py will include them. Otherwise you will see "<class> unknown"
      or some such at run time.

      n.b. After modifying this list, we need to re-generate.py source and build
      before using them. (Just build if that's the way you roll.)

      */
      qx.ui.mobile.page.Manager;
      // qx.ui.mobile.page.NavigationPage;
      identica.NaviBack; // above back button does not work
      qx.ui.mobile.dialog.Popup;
      qx.ui.mobile.dialog.Menu;
      qx.ui.mobile.dialog.BusyIndicator;
      qx.ui.mobile.form.Button;
      qx.ui.mobile.form.NumberField;
      qx.ui.mobile.form.TextField;
      qx.ui.mobile.form.PasswordField;
      qx.ui.mobile.form.Form;
      qx.ui.mobile.form.CheckBox;
      qx.ui.mobile.form.SelectBox;
      qx.ui.mobile.form.Slider;
      qx.ui.mobile.form.Group;
      qx.ui.mobile.form.TextArea;
      qx.ui.mobile.form.Title;
      qx.ui.mobile.form.ToggleButton;
      qx.ui.mobile.form.Row;
      qx.ui.mobile.form.RadioGroup;
      qx.ui.mobile.form.RadioButton;
      qx.ui.mobile.embed.Html;
      qx.ui.mobile.embed.Canvas;

      qx.ui.mobile.form.renderer.Single;
      qx.ui.mobile.container.Carousel;
      qx.ui.mobile.container.Drawer;
      qx.ui.mobile.container.Collapsible;
      qx.ui.mobile.container.Scroll;
      qx.ui.mobile.control.Picker;

      hello_mobile.core.appinit
        (this // , new qx.ui.mobile.page.Manager(false)
         , this._show);

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

/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */


qx.Class.define("identica.Bingo",
{
  extend : qx.ui.mobile.page.NavigationPage,

  construct : function()
  {
    this.base(arguments);
    this.setTitle("Bingo Title");
  },


  members :
  {
    __form: null,


    // overridden
    _initialize: function() {
      this.base(arguments);

      // Username
      var user = new qx.ui.mobile.form.TextField();
      user.setRequired(true);


      // Login Button
      var loginButton = new qx.ui.mobile.form.Button("Bingo2");
      loginButton.addListener("tap", this._onButtonTap, this);

      var loginForm = this.__form = new qx.ui.mobile.form.Form();
      loginForm.add(user, "Username");


      // Use form renderer
      console.log('bingo content ' + this.getContent());

      this.getContent().add(new qx.ui.mobile.form.renderer.Single(loginForm));
      this.getContent().add(loginButton);
    },

    _onButtonTap: function() {
        qx.core.Init.getApplication().getRouting().executeGet("/overview");
    }
  }

});

define('UABookStores.CCTDropdown.Dropdown.View'
, [
    'CustomContentType.Base.View'
  , 'uabookstores_cctdropdown_dropdown.tpl'
  ]
, function
  (
    CustomContentTypeBaseView
  , dropdown_tpl
  )
{
  'use strict';

  return CustomContentTypeBaseView.extend({

    template: dropdown_tpl

  , initialize: function initialize(options) 
    {
      if (options)
      {
        this.container = options.container;
      }
      this._initialize()
   }

  , install: function (settings, context_data) 
    {
      this._install(settings, context_data);
      var promise = jQuery.Deferred();
      return promise.resolve();
    }

  , contextDataRequest: ['item']

  , validateContextDataRequest: function validateContextDataRequest()
    {
      return true;
    }

  , getContext: function getContext ()
    {
      return {
        id: Date.now().toString()
      , header_text: this.settings.custrecord_cctdrop_header
      , content_text: this.settings.custrecord_cctdrop_content
      };
    }
  });
});

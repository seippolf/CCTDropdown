define('UABookStores.CCTDropdown.Dropdown.View'
, [
    'CustomContentType.Base.View'
  , 'uabookstores_cctdropdown_dropdown.tpl'
  ]
, function
  (
    CustomContentTypeBaseView
  , uabookstores_cctdropdown_dropdown_tpl
  )
{
  'use strict';

  return CustomContentTypeBaseView.extend({

    template: uabookstores_cctdropdown_dropdown_tpl

  , install: function install (settings, context_data)
    {
      return this._install(settings, context_data);
    }

  , contextDataRequest: ['item']

  , getContext: function getContext ()
    {
      return {
        id: Date.now().toString()
      , header_text: this.settings.custrecord_cctdrop_header
      , content_text: this.settings.custrecord_cctdrop_content
      }
    }
    
  });
});

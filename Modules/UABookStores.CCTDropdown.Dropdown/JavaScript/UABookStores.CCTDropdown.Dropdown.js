define('UABookStores.CCTDropdown.Dropdown'
, [
    'UABookStores.CCTDropdown.Dropdown.View'
  ]
, function
  (
    DropdownView
  )
{
  'use strict'

  return {
    mountToApp: function mountToApp (application)
    {
      DropdownView.prototype.application = application;

      application.getComponent('CMS').registerCustomContentType({
        id: 'cct_uabookstores_cctdropdown'
      , view: DropdownView
      });
    }
  }
});
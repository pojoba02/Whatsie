import $ from './expr';

export default {
  label: 'Theme',
  submenu: ['Default', 'Grey', 'Pure', 'Dark'].map(theme => {
    return {
      type: 'radio',
      label: theme,
      theme: theme.toLowerCase(),
      click: $.all(
        $.sendToWebContents('apply-theme', $.key('theme')),
        $.setPref('theme', $.key('theme'))
      ),
      parse: $.setLocal('checked', $.eq($.pref('theme', $.val('default')), $.key('theme')))
    };
  })
};
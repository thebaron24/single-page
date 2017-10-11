import styles from 'styles';
import * as mdc from 'material-components-web';
import Template from './templates/template.handlebars';
import config from './api/config.json';

var app;

var AppComponent = () => {
  app = document.createElement('div');
  app.id = "app";
  app.className = "mdc-typography mdc-toolbar-fixed-adjust";
  app.innerHTML = Template(config);
  document.body.className = "";
  document.body.appendChild(app);

  //material functions logged
  console.log("MDC: ", mdc);


  let drawerEl = document.querySelector('.mdc-temporary-drawer');
  let drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);
  let menu = document.querySelector('.menu');
  menu.addEventListener('click', () => drawer.open = !drawer.open);

  //event hooks
  drawerEl.addEventListener('MDCTemporaryDrawer:open', () => console.log('Received MDCPersistentDrawer:open'));
  drawerEl.addEventListener('MDCTemporaryDrawer:close', () => console.log('Received MDCPersistentDrawer:close'));

  var pollId = 0;
  pollId = setInterval(function() {
    var pos = getComputedStyle(document.querySelector('.mdc-toolbar')).position;
    if (pos === 'fixed' || pos === 'relative') {
      init();
      clearInterval(pollId);
    }
  }, 250);

  function init() {
    var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
    toolbar.listen('MDCToolbar:change', function(evt) {
      var flexibleExpansionRatio = evt.detail.flexibleExpansionRatio;
    });
    toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
  }
  
}

AppComponent();
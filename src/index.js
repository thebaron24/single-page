import styles from 'styles';
import {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util} from '@material/drawer';
import Template from './templates/template.handlebars';
var app;

const config = {};

var AppComponent = () => {
	app = document.createElement('div');
	app.id = "app";
	app.className = "mdc-typography";
	app.innerHTML = Template(config);
	document.body.className = "";
	document.body.appendChild(app);

    let drawerEl = document.querySelector('.mdc-temporary-drawer');
    let drawer = new MDCTemporaryDrawer(drawerEl);
    let menu = document.querySelector('.menu');
    menu.addEventListener('click', () => drawer.open = !drawer.open);

    //event hooks
    drawerEl.addEventListener('MDCTemporaryDrawer:open', () => console.log('Received MDCPersistentDrawer:open'));
    drawerEl.addEventListener('MDCTemporaryDrawer:close', () => console.log('Received MDCPersistentDrawer:close'));
}

AppComponent();
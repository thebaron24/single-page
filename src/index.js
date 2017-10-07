import styles from 'styles';
import {MDCPersistentDrawer, MDCPersistentDrawerFoundation, util} from '@material/drawer';
var Template = require("./templates/template.handlebars");
var app;

const config = {
	nav: [
		{
			linkName: "link 1",
			linkUrl: "#section-1",
			linkSlug: "section-1",
			sectionTitle: "Section 1",
			sectionHeight: "100vh",
			sectionBackground: "#fff",
			content: [
				{ paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
			]
		},
		{
			linkName: "link 2",
			linkUrl: "#section-2",
			linkSlug: "section-2",
			sectionTitle: "Section 2",
			sectionHeight: "100vh",
			sectionBackground: "#ccc",
			content: [
				{ paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
			]
		},
		{
			linkName: "link 3",
			linkUrl: "#section-3",
			linkSlug: "section-3",
			sectionTitle: "Section 3",
			sectionHeight: "100vh",
			sectionBackground: "#888",
			content: [
				{ paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
			]
		},
		{
			linkName: "link 4",
			linkUrl: "#section-4",
			linkSlug: "section-4",
			sectionTitle: "Section 4",
			sectionHeight: "100vh",
			sectionBackground: "#777",
			content: [
				{ paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
			]
		},
		{
			linkName: "link 5",
			linkUrl: "#section-5",
			linkSlug: "section-5",
			sectionTitle: "Section 5",
			sectionHeight: "100vh",
			sectionBackground: "#666",
			content: [
				{ paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
			]
		},
		{
			linkName: "link 6",
			linkUrl: "#section-6",
			linkSlug: "section-6",
			sectionTitle: "Section 6",
			sectionHeight: "100vh",
			sectionBackground: "#555",
			content: [
				{ paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
			]
		},
		{
			linkName: "link 7",
			linkUrl: "#section-7",
			linkSlug: "section-7",
			sectionTitle: "Section 7",
			sectionHeight: "100vh",
			sectionBackground: "#444",
			content: [
				{ paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
			]
		}
	]
};

function AppComponent() {
	app = document.createElement('div');
	app.id = "app";
	app.className = "mdc-typography";
	app.innerHTML = Template(config);
	document.body.className = "";
	document.body.appendChild(app);

    let drawerEl = document.querySelector('.mdc-persistent-drawer');
    let menu = document.querySelector('.menu');
    const drawer = new MDCPersistentDrawer(drawerEl);

    // var drawerEl = document.querySelector('.mdc-persistent-drawer');

    // let drawer = new mdc.drawer.MDCPersistentDrawer(drawerEl);
    menu.addEventListener('click', () => drawer.open = !drawer.open);

    //event hooks
    drawerEl.addEventListener('MDCPersistentDrawer:open', function() {
    	console.log('Received MDCPersistentDrawer:open');
    });
    drawerEl.addEventListener('MDCPersistentDrawer:close', function() {
    	console.log('Received MDCPersistentDrawer:close');
    });
}

AppComponent();
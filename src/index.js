import styles from 'styles';
var componentHandler = require('exports-loader?componentHandler!material-design-lite/material.js')
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
	app.innerHTML = Template(config);
	document.body.appendChild(app);
	componentHandler.upgradeDom();
}

AppComponent();
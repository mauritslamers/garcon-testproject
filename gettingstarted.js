//var g = require('../garcon');
var g = require('garcon');

var server = g.Server.create({
  //loadSCTests: true,
  //REPL: true,
  // proxies: [{ prefix: '/',
  //   host: '192.168.178.29',
  //   port: 8080,
  //   proxyPrefix: '/'
  // }]
});

var stdHtmlBody	= [
		  '<div id="loading">',
		    '<p id="loading">',
			    'Loading…',
			  '</p>',
		  '</div>'
		].join('\n');

var todosOne = g.App.create({
  name: 'todos_one',
  theme: 'ace',
  htmlBody: stdHtmlBody,
  htmlHead: '<title>Todos One</title>',
  //urlPrefix: '/',
  hasSC: true,
  configSC: {
    //nodifyScripts: true
  },  
  frameworks: [
    //{ path: 'frameworks/sproutcore/themes/empty_theme'},
    //{ path: 'frameworks/sproutcore/themes/standard_theme'},
    { path: 'frameworks/sproutcore/themes/ace', combineStylesheets: true },
    { path: 'frameworks/sproutcore/frameworks/yuireset', combineStylesheets: true },    
  	{ path: 'getting-started/apps/todos_one'}
  ]
});

var todosTwo = g.App.create({
  name: 'todos_two',
  theme: 'ace',
  htmlBody: stdHtmlBody,
  htmlHead: '<title>Todos Two</title>',
  //urlPrefix: '/',
  hasSC: true,
  configSC: {
    //nodifyScripts: true
  },  
  frameworks: [
    //{ path: 'frameworks/sproutcore/themes/empty_theme'},
    //{ path: 'frameworks/sproutcore/themes/standard_theme'},
    { path: 'frameworks/sproutcore/themes/ace', combineStylesheets: true },
    { path: 'frameworks/sproutcore/frameworks/yuireset', combineStylesheets: true },    
  	{ path: 'getting-started/apps/todos_two'}
  ]
});

var todosThree = g.App.create({
  name: 'todos_three',
  theme: 'ace',
  htmlBody: stdHtmlBody,
  htmlHead: '<title>Todos Three</title>',
  //urlPrefix: '/',
  hasSC: true,
  configSC: {
    //nodifyScripts: true
  },  
  frameworks: [
    { path: 'frameworks/sproutcore/themes/empty_theme'},
    { path: 'frameworks/sproutcore/themes/ace', combineStylesheets: true },
    //{ path: 'frameworks/sproutcore/themes/standard_theme'},
    { path: 'frameworks/sproutcore/frameworks/debug', combineStylesheets: true },
    { path: 'frameworks/sproutcore/frameworks/testing', combineStylesheets: true },
    { path: 'frameworks/sproutcore/frameworks/yuireset', combineStylesheets: true },
  	{ path: 'getting-started/apps/todos_three'}
  ]
});

var showcase = g.App.create({
  name: 'showcase',
  theme: 'ace',
  htmlBody: stdHtmlBody,
  htmlHead: '<title>Sproutcore Showcase</title>',
  hasSC: true,
  urlPrefix: "/",
  configSC: {
    //version: "1.9.1"
  },
  frameworks: [
    { path: 'frameworks/sproutcore/themes/empty_theme'},
    { path: 'frameworks/sproutcore/themes/ace', combineStylesheets: true },
    { path: 'frameworks/sproutcore/frameworks/debug', combineStylesheets: true },
    { path: 'frameworks/sproutcore/frameworks/testing', combineStylesheets: true },
    { path: 'frameworks/sproutcore/frameworks/yuireset', combineStylesheets: true },
    { path: 'showcase'}
  ]
});

server.addApp(todosOne);
server.addApp(todosTwo);
server.addApp(todosThree);
server.addApp(showcase);
server.run();

var g = require('garcon');

var server = g.Server.create({
  //loadSCTests: true,
  //REPL: true,
  proxies: [{ prefix: '/',
    host: '192.168.178.29',
    port: 8080,
    proxyPrefix: '/'
  }]
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
  htmlHead: '<title>todos</title>',
  //urlPrefix: '/',
  hasSC: true,
  configSC: {
    //nodifyScripts: true
  },  
  frameworks: [
    //{ path: 'frameworks/sproutcore/themes/empty_theme'},
    //{ path: 'frameworks/sproutcore/themes/standard_theme'},
    { path: 'frameworks/sproutcore/themes/ace', combineStylesheets: true },
  	{ path: 'getting-started/apps/todos_one'}
  ]
});

var todosThree = g.App.create({
  name: 'todos_three',
  theme: 'ace',
  htmlBody: stdHtmlBody,
  htmlHead: '<title>todos 3</title>',
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

server.addApp(todosOne);
server.addApp(todosThree);
server.run();

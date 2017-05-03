
var tools = require('../index.js');

tools.uglifyjs({
  'input'   : ['js/a.js',
    'js/b.js'],
  'licence'   : 'The MIT Licence. https://github.com/lichangwei/webtools.git',
  'initScript': '"I am initScript."',
  'output'  : 'js/main.js',
  'operation' : 'uglify' //default
}).less({
  'input'   : ['css/style.less'],
  'output'  : 'css/style.css',
  'compress'  : true // default
});
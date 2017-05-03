var fs = require('fs');
var stdin = process.stdin;
var stdout = process.stdout;

var curDir = process.cwd();
function getDirectoryData(dir){
	fs.readdir(dir,function(err,files){
		console.log("");
		if(!files.length){
			return console.log('	\0333[31m No files to show! \033[39m\n');
		}
		console.log('	Select which file or directory you want to see! \n');
		
		function file(i){
			var filename = files[i];

			var statFile = fs.statSync(__dirname + '/' + filename);
			if(statFile.isDirectory()){
				console.log('	'+ ++i + '	\033[31m' + filename + '/\033[39m');
			}else{
				console.log('	'+  ++i + '	\033[90m' + filename + '\033[39m');
			}

			if( i == files.length){
				read();
			}else{
				file(i);
			}
		}

		file(0);
		function read(){
			console.log('');
			stdout.write(' \033[33m Enter your choice:　\033[39m');
			stdin.resume();
			stdin.setEncoding('utf8');
			stdin.on('data',option);
		}
		function option(data){
			var filename = files[Number(data)-1];
			if(fs.statSync(__dirname + '/' + filename).isDirectory()){
				stdin.pause();
				fs.readdir(__dirname + '/' +filename,function(err,files){
					console.log('');
					console.log('	(' + files.length + '  files)');
					files.forEach(function(file){
						console.log('	--  ' + file);
					});
					console.log('');
				})
			}else{
				stdin.pause();
				fs.readFile(__dirname + '/' +filename,'utf8',function(err,data){
					console.log('');
					console.log('\033[90m' + data.replace(/(.*)/g,'	$1') + '\033[39m');
				});
			}
		}
	});
}
getDirectoryData(curDir);

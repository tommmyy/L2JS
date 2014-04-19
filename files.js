l2jsFiles = {
	"src" : [ "src/l2js.js", 
	          "src/core.js", 
	          "src/core/deferred.js",
	          "src/utils.js",
	          "src/compiler.js",
	          "src/compiler/env.js",
	          "src/compiler/env/alphabet.js",
	          "src/compiler/env/sublsystem.js",
	          "src/compiler/env/lsystem.js",
	          "src/compiler/env/lscript.js",
	          "src/compiler/env/sublscript.js",
	          "src/compiler/lnodes.js",
	          "src/compiler/lparser.js",
	          "src/compiler/astcompiler.js",
	          "src/compiler/compiler.js",
	          "src/interpret.js",
	          "src/interpret/turtle2dbuilder.js",
	          "src/interpret/interpret.js",
	          "src/facade.js"
	          ],
	"parsers": ["src/compiler/lparser.js"],
/*
 
 	"test" : ["dist/l2js-v*.js", 
	          "test/*.js", 
	          "test/core/*.js", 
	          "test/compiler/*.js", 
	          "test/compiler/env/*.js",
	          "test/interpret/*.js"]
 */
	
	"test" : [
	          "test/*.js", 
	          "test/core/*.js", 
	          "test/compiler/*.js", 
	          "test/compiler/env/*.js",
	          "test/interpret/*.js"]
}
l2jsFiles.test = l2jsFiles.src.concat(l2jsFiles.test);
if (exports) {
	exports.files = l2jsFiles;
}
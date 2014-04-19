/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
window.l2js && function(l2js) {
l2js.compiler.Lparser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"program_entries":4,"EOF":5,"stmts":6,"stmt":7,";":8,"var":9,"=":10,"e":11,"symbol":12,"text":13,"LSCRIPT":14,"id":15,"{":16,"}":17,"LSYSTEM":18,"(":19,"axiom":20,")":21,"USING":22,",":23,"number":24,"ALPHABET":25,"symbols":26,"ancestor":27,"RULE_OP":28,"successors":29,"H_RULE_OP":30,"main_call":31,"sublsystem":32,"call":33,"DERIVE":34,"SUBLSYSTEM":35,"CALL":36,"MAIN":37,"string":38,"iterations":39,"params":40,"successor":41,"|":42,":":43,"module":44,"arguments":45,"param":46,"ID":47,"VAR":48,"+":49,"term":50,"-":51,"*":52,"factor":53,"/":54,"FUNC":55,"E":56,"PI":57,"TEXT":58,"NUMBER":59,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:";",10:"=",14:"LSCRIPT",16:"{",17:"}",18:"LSYSTEM",19:"(",21:")",22:"USING",23:",",25:"ALPHABET",28:"RULE_OP",30:"H_RULE_OP",34:"DERIVE",35:"SUBLSYSTEM",36:"CALL",37:"MAIN",42:"|",43:":",47:"ID",48:"VAR",49:"+",51:"-",52:"*",54:"/",55:"FUNC",56:"E",57:"PI",58:"TEXT",59:"NUMBER"},
productions_: [0,[3,2],[4,1],[6,3],[6,1],[6,0],[7,3],[7,3],[7,1],[7,5],[7,10],[7,12],[7,5],[7,3],[7,3],[7,1],[7,1],[7,1],[7,2],[32,5],[32,7],[32,6],[32,4],[33,5],[33,7],[33,6],[33,4],[31,2],[20,1],[39,1],[27,4],[27,1],[29,3],[29,1],[41,3],[41,1],[38,2],[38,1],[44,4],[44,1],[44,1],[44,1],[45,3],[45,2],[45,1],[45,0],[40,3],[40,2],[40,1],[40,0],[46,1],[26,3],[26,1],[26,0],[12,1],[9,1],[15,1],[11,3],[11,3],[11,1],[50,3],[50,3],[50,1],[53,4],[53,1],[53,1],[53,1],[53,1],[53,3],[13,1],[24,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: 
        	// TODO: add restrictions only to valid statements
            /*var i;
			for(i = 0; i < $stmts.length; i++) {
				var errMsg,stmt = $stmts[i];
				if( stmt instanceof yy.ASTRule) {
					errMsg = 'Main program should not contain rule declaration.';
				} else if(stmt instanceof yy.ASTCall && !stmt.isMain) {
					errMsg = 'In global scope use only main call.';
				} 
				
				if(typeof errMsg !== 'undefined') {
					throw new yy.ParseError('Parse error on ' + this._$.first_line + ':' + this._$.last_column + '. ' + errMsg );
				}
			}*/
			
        	var block = new yy.ASTBlock(); 
        	block.isRoot = true;
        	block.entries = $$[$0-1]; 
        	return block; 
        
break;
case 2:this.$ = $$[$0];
break;
case 3:this.$ = $$[$0]; this.$.unshift($$[$0-2]);
break;
case 4:this.$ = [$$[$0]];
break;
case 5:this.$ = [];
break;
case 6:this.$ = $$[$0-2]; this.$.e = $$[$0];
break;
case 7:this.$ = $$[$0-2];this.$.e = $$[$0];
break;
case 8:this.$ = $$[$0];
break;
case 9:
			// TODO: add restrictions only to valid statements
			var block = new yy.ASTBlock();
			block.entries = $$[$0-1];
			
			this.$ = new yy.ASTLScript($$[$0-3], block); 
		
break;
case 10:
			var block = new yy.ASTBlock(); 
			block.entries = $$[$0-1];
			this.$ = new yy.ASTLSystem($$[$0-8], $$[$0-3], $$[$0-6], undefined , block);
		
break;
case 11:
			if($$[$0-6] % 1 !== 0) {
				var errMsg = "Number of iterations should be integer.";
				throw new yy.ParseError('Parse error on ' + this._$.first_line + ':' + this._$.last_column + '. ' + errMsg );
			}
			var block = new yy.ASTBlock(); 
			block.entries = $$[$0-1];
			this.$ = new yy.ASTLSystem($$[$0-10], $$[$0-3], $$[$0-8], $$[$0-6], block);
		
break;
case 12:
			$$[$0-3].type='alphabet';
			this.$ = new yy.ASTAlphabet($$[$0-3], $$[$0-1]);
		
break;
case 13:this.$ = new yy.ASTRule($$[$0-2], $$[$0]);
break;
case 14:this.$ = new yy.ASTRule($$[$0-2], $$[$0], 'h');
break;
case 15:this.$ = $$[$0];
break;
case 16:this.$ = $$[$0];
break;
case 17:this.$ = $$[$0];
break;
case 18:this.$ = new yy.ASTDerive($$[$0]);
break;
case 19:$$[$0-3].type="lsystem"; this.$ = new yy.ASTSubLSystem($$[$0-3], $$[$0-1]);
break;
case 20:
			$$[$0-5].type="lsystem"; this.$ = new yy.ASTSubLSystem($$[$0-5], $$[$0-3], $$[$0-1]);
		
break;
case 21:
		
			$$[$0-4].type="lsystem"; this.$ = new yy.ASTSubLSystem($$[$0-4], undefined, $$[$0-1]);
		
break;
case 22:$$[$0-2].type="lsystem"; this.$ = new yy.ASTSubLSystem($$[$0-2]);
break;
case 23:$$[$0-3].type="lsystem"; this.$ = new yy.ASTCall($$[$0-3], $$[$0-1]);
break;
case 24:
			$$[$0-5].type="lsystem"; this.$ = new yy.ASTCall($$[$0-5], $$[$0-3], $$[$0-1]);
		
break;
case 25:
			$$[$0-4].type="lsystem"; this.$ = new yy.ASTCall($$[$0-4], undefined, $$[$0-1]);
		
break;
case 26:$$[$0-2].type="lsystem"; this.$ = new yy.ASTCall($$[$0-2]);
break;
case 27:this.$ = $$[$0]; this.$.isMain = true;
break;
case 28:this.$ = $$[$0]
break;
case 29:
			if($$[$0] % 1 !== 0) {
				var errMsg = "Number of iterations should be integer.";
				throw new yy.ParseError('Parse error on ' + this._$.first_line + ':' + this._$.last_column + '. ' + errMsg );
			}
			this.$ = $$[$0];
		
break;
case 30:this.$ = new yy.ASTAncestor($$[$0-3], $$[$0-1]);
break;
case 31:this.$ = new yy.ASTAncestor($$[$0]);
break;
case 32:this.$ = $$[$0]; this.$.unshift($$[$0-2]);
break;
case 33:this.$ = [$$[$0]];
break;
case 34:this.$ = new yy.ASTSuccessor($$[$0-2], $$[$0]);
break;
case 35:this.$ = new yy.ASTSuccessor($$[$0]);
break;
case 36:this.$ = $$[$0]; this.$.unshift($$[$0-1]);
break;
case 37:this.$ = [$$[$0]];
break;
case 38:$$[$0-3].type="symbol"; this.$ = new yy.ASTModule($$[$0-3], $$[$0-1]);
break;
case 39:$$[$0].type="symbol"; this.$ =  new yy.ASTModule($$[$0]);
break;
case 40:this.$ = $$[$0];
break;
case 41:this.$ = $$[$0];
break;
case 42:this.$ = $$[$0]; this.$.unshift($$[$0-2]);
break;
case 43:this.$ = $$[$0]; this.$.unshift(undefined);
break;
case 44:this.$ = [$$[$0]];
break;
case 45:this.$ = [];
break;
case 46:this.$ = $$[$0]; this.$.unshift($$[$0-2]);
break;
case 47:this.$ = $$[$0]; this.$.unshift(undefined);
break;
case 48:this.$ = [$$[$0]];
break;
case 49:this.$ = [];
break;
case 50: this.$ = new yy.ASTId($$[$0], 'param');
break;
case 51:this.$ = $$[$0]; this.$.unshift($$[$0-2]);
break;
case 52:this.$ = [$$[$0]];
break;
case 53:this.$ = [];
break;
case 54: this.$ = $$[$0]; this.$.type='symbol';
break;
case 55: this.$ = new yy.ASTId($$[$0], 'var'); 
break;
case 56: this.$ = new yy.ASTId($$[$0]); 
break;
case 57:this.$ = new yy.ASTOperation($$[$0-1], $$[$0-2], $$[$0]);
break;
case 58:this.$ = new yy.ASTOperation($$[$0-1], $$[$0-2], $$[$0]);
break;
case 59:this.$ = $$[$0];
break;
case 60:this.$ = new yy.ASTOperation($$[$0-1], $$[$0-2], $$[$0]);
break;
case 61:this.$ = new yy.ASTOperation($$[$0-1], $$[$0-2], $$[$0]);
break;
case 62:this.$ = $$[$0];
break;
case 63:this.$ = new yy.ASTFunc($$[$0-3], $$[$0-1]);
break;
case 64:this.$ = $$[$0];
break;
case 65:this.$ = Math.E;
break;
case 66:this.$ = Math.PI;
break;
case 67:this.$ = $$[$0];
break;
case 68:this.$ = new yy.ASTBrackets($$[$0-1]);
break;
case 69:this.$ = String(yytext);
break;
case 70:this.$ =  Number(yytext);
break;
}
},
table: [{3:1,4:2,5:[2,5],6:3,7:4,9:5,11:7,12:6,14:[1,8],15:17,18:[1,9],19:[1,28],24:25,25:[1,10],27:11,31:12,32:13,33:14,34:[1,15],35:[1,20],36:[1,21],37:[1,19],47:[1,22],48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{1:[3]},{5:[1,30]},{5:[2,2]},{5:[2,4],8:[1,31],17:[2,4]},{5:[2,67],8:[2,67],10:[1,32],17:[2,67],49:[2,67],51:[2,67],52:[2,67],54:[2,67]},{10:[1,33],19:[1,34],28:[2,31],30:[2,31]},{5:[2,8],8:[2,8],17:[2,8],49:[1,35],51:[1,36]},{15:37,47:[1,22]},{15:38,47:[1,22]},{15:39,47:[1,22]},{28:[1,40],30:[1,41]},{5:[2,15],8:[2,15],17:[2,15]},{5:[2,16],8:[2,16],17:[2,16]},{5:[2,17],8:[2,17],17:[2,17]},{15:42,47:[1,22]},{5:[2,55],8:[2,55],10:[2,55],17:[2,55],21:[2,55],23:[2,55],49:[2,55],51:[2,55],52:[2,55],54:[2,55]},{10:[2,54],17:[2,54],19:[2,54],23:[2,54],28:[2,54],30:[2,54]},{5:[2,59],8:[2,59],17:[2,59],21:[2,59],23:[2,59],49:[2,59],51:[2,59],52:[1,43],54:[1,44]},{33:45,36:[1,21]},{15:46,47:[1,22]},{15:47,47:[1,22]},{5:[2,56],8:[2,56],10:[2,56],16:[2,56],17:[2,56],19:[2,56],21:[2,56],23:[2,56],28:[2,56],30:[2,56],35:[2,56],36:[2,56],42:[2,56],43:[2,56],47:[2,56]},{5:[2,62],8:[2,62],17:[2,62],21:[2,62],23:[2,62],49:[2,62],51:[2,62],52:[2,62],54:[2,62]},{19:[1,48]},{5:[2,64],8:[2,64],17:[2,64],21:[2,64],23:[2,64],49:[2,64],51:[2,64],52:[2,64],54:[2,64]},{5:[2,65],8:[2,65],17:[2,65],21:[2,65],23:[2,65],49:[2,65],51:[2,65],52:[2,65],54:[2,65]},{5:[2,66],8:[2,66],17:[2,66],21:[2,66],23:[2,66],49:[2,66],51:[2,66],52:[2,66],54:[2,66]},{9:50,11:49,19:[1,28],24:25,48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{5:[2,70],8:[2,70],17:[2,70],21:[2,70],23:[2,70],42:[2,70],49:[2,70],51:[2,70],52:[2,70],54:[2,70]},{1:[2,1]},{5:[2,5],6:51,7:4,9:5,11:7,12:6,14:[1,8],15:17,17:[2,5],18:[1,9],19:[1,28],24:25,25:[1,10],27:11,31:12,32:13,33:14,34:[1,15],35:[1,20],36:[1,21],37:[1,19],47:[1,22],48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{9:50,11:52,19:[1,28],24:25,48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{13:53,58:[1,54]},{21:[2,49],23:[1,57],40:55,46:56,47:[1,58]},{9:50,19:[1,28],24:25,48:[1,16],50:59,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{9:50,19:[1,28],24:25,48:[1,16],50:60,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{16:[1,61]},{19:[1,62]},{16:[1,63]},{15:68,29:64,32:70,33:69,35:[1,20],36:[1,21],38:66,41:65,44:67,47:[1,22]},{15:68,29:71,32:70,33:69,35:[1,20],36:[1,21],38:66,41:65,44:67,47:[1,22]},{5:[2,18],8:[2,18],17:[2,18]},{9:50,19:[1,28],24:25,48:[1,16],53:72,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{9:50,19:[1,28],24:25,48:[1,16],53:73,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{5:[2,27],8:[2,27],17:[2,27]},{19:[1,74]},{19:[1,75]},{9:50,11:77,19:[1,28],21:[2,45],23:[1,78],24:25,45:76,48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{21:[1,79],49:[1,35],51:[1,36]},{5:[2,67],8:[2,67],17:[2,67],21:[2,67],23:[2,67],49:[2,67],51:[2,67],52:[2,67],54:[2,67]},{5:[2,3],17:[2,3]},{5:[2,6],8:[2,6],17:[2,6],49:[1,35],51:[1,36]},{5:[2,7],8:[2,7],17:[2,7]},{5:[2,69],8:[2,69],17:[2,69]},{21:[1,80]},{21:[2,48],23:[1,81]},{21:[2,49],23:[1,57],40:82,46:56,47:[1,58]},{21:[2,50],23:[2,50]},{5:[2,57],8:[2,57],17:[2,57],21:[2,57],23:[2,57],49:[2,57],51:[2,57],52:[1,43],54:[1,44]},{5:[2,58],8:[2,58],17:[2,58],21:[2,58],23:[2,58],49:[2,58],51:[2,58],52:[1,43],54:[1,44]},{6:83,7:4,9:5,11:7,12:6,14:[1,8],15:17,17:[2,5],18:[1,9],19:[1,28],24:25,25:[1,10],27:11,31:12,32:13,33:14,34:[1,15],35:[1,20],36:[1,21],37:[1,19],47:[1,22],48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{15:68,20:84,32:70,33:69,35:[1,20],36:[1,21],38:85,44:67,47:[1,22]},{12:87,15:17,17:[2,53],26:86,47:[1,22]},{5:[2,13],8:[2,13],17:[2,13]},{5:[2,33],8:[2,33],17:[2,33],42:[1,88]},{5:[2,35],8:[2,35],17:[2,35],42:[2,35],43:[1,89]},{5:[2,37],8:[2,37],15:68,17:[2,37],21:[2,37],23:[2,37],32:70,33:69,35:[1,20],36:[1,21],38:90,42:[2,37],43:[2,37],44:67,47:[1,22]},{5:[2,39],8:[2,39],17:[2,39],19:[1,91],21:[2,39],23:[2,39],35:[2,39],36:[2,39],42:[2,39],43:[2,39],47:[2,39]},{5:[2,40],8:[2,40],17:[2,40],21:[2,40],23:[2,40],35:[2,40],36:[2,40],42:[2,40],43:[2,40],47:[2,40]},{5:[2,41],8:[2,41],17:[2,41],21:[2,41],23:[2,41],35:[2,41],36:[2,41],42:[2,41],43:[2,41],47:[2,41]},{5:[2,14],8:[2,14],17:[2,14]},{5:[2,60],8:[2,60],17:[2,60],21:[2,60],23:[2,60],49:[2,60],51:[2,60],52:[2,60],54:[2,60]},{5:[2,61],8:[2,61],17:[2,61],21:[2,61],23:[2,61],49:[2,61],51:[2,61],52:[2,61],54:[2,61]},{15:68,20:92,21:[1,94],23:[1,93],32:70,33:69,35:[1,20],36:[1,21],38:85,44:67,47:[1,22]},{15:68,20:95,21:[1,97],23:[1,96],32:70,33:69,35:[1,20],36:[1,21],38:85,44:67,47:[1,22]},{21:[1,98]},{21:[2,44],23:[1,99],49:[1,35],51:[1,36]},{9:50,11:77,19:[1,28],21:[2,45],23:[1,78],24:25,45:100,48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{5:[2,68],8:[2,68],17:[2,68],21:[2,68],23:[2,68],49:[2,68],51:[2,68],52:[2,68],54:[2,68]},{28:[2,30],30:[2,30]},{21:[2,49],23:[1,57],40:101,46:56,47:[1,58]},{21:[2,47]},{17:[1,102]},{21:[1,103],23:[1,104]},{21:[2,28],23:[2,28]},{17:[1,105]},{17:[2,52],23:[1,106]},{15:68,29:107,32:70,33:69,35:[1,20],36:[1,21],38:66,41:65,44:67,47:[1,22]},{24:108,59:[1,29]},{5:[2,36],8:[2,36],17:[2,36],21:[2,36],23:[2,36],42:[2,36],43:[2,36]},{9:50,11:77,19:[1,28],21:[2,45],23:[1,78],24:25,45:109,48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{21:[1,110],23:[1,111]},{9:50,11:112,19:[1,28],24:25,48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{5:[2,22],8:[2,22],17:[2,22],21:[2,22],23:[2,22],35:[2,22],36:[2,22],42:[2,22],43:[2,22],47:[2,22]},{21:[1,113],23:[1,114]},{9:50,11:115,19:[1,28],24:25,48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{5:[2,26],8:[2,26],17:[2,26],21:[2,26],23:[2,26],35:[2,26],36:[2,26],42:[2,26],43:[2,26],47:[2,26]},{5:[2,63],8:[2,63],17:[2,63],21:[2,63],23:[2,63],49:[2,63],51:[2,63],52:[2,63],54:[2,63]},{9:50,11:77,19:[1,28],21:[2,45],23:[1,78],24:25,45:116,48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{21:[2,43]},{21:[2,46]},{5:[2,9],8:[2,9],17:[2,9]},{22:[1,117]},{24:118,59:[1,29]},{5:[2,12],8:[2,12],17:[2,12]},{12:87,15:17,17:[2,53],26:119,47:[1,22]},{5:[2,32],8:[2,32],17:[2,32]},{5:[2,34],8:[2,34],17:[2,34],42:[2,34]},{21:[1,120]},{5:[2,19],8:[2,19],17:[2,19],21:[2,19],23:[2,19],35:[2,19],36:[2,19],42:[2,19],43:[2,19],47:[2,19]},{9:50,11:121,19:[1,28],24:25,48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{21:[1,122],49:[1,35],51:[1,36]},{5:[2,23],8:[2,23],17:[2,23],21:[2,23],23:[2,23],35:[2,23],36:[2,23],42:[2,23],43:[2,23],47:[2,23]},{9:50,11:123,19:[1,28],24:25,48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{21:[1,124],49:[1,35],51:[1,36]},{21:[2,42]},{15:125,47:[1,22]},{21:[1,126]},{17:[2,51]},{5:[2,38],8:[2,38],17:[2,38],21:[2,38],23:[2,38],35:[2,38],36:[2,38],42:[2,38],43:[2,38],47:[2,38]},{21:[1,127],49:[1,35],51:[1,36]},{5:[2,21],8:[2,21],17:[2,21],21:[2,21],23:[2,21],35:[2,21],36:[2,21],42:[2,21],43:[2,21],47:[2,21]},{21:[1,128],49:[1,35],51:[1,36]},{5:[2,25],8:[2,25],17:[2,25],21:[2,25],23:[2,25],35:[2,25],36:[2,25],42:[2,25],43:[2,25],47:[2,25]},{16:[1,129]},{22:[1,130]},{5:[2,20],8:[2,20],17:[2,20],21:[2,20],23:[2,20],35:[2,20],36:[2,20],42:[2,20],43:[2,20],47:[2,20]},{5:[2,24],8:[2,24],17:[2,24],21:[2,24],23:[2,24],35:[2,24],36:[2,24],42:[2,24],43:[2,24],47:[2,24]},{6:131,7:4,9:5,11:7,12:6,14:[1,8],15:17,17:[2,5],18:[1,9],19:[1,28],24:25,25:[1,10],27:11,31:12,32:13,33:14,34:[1,15],35:[1,20],36:[1,21],37:[1,19],47:[1,22],48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{15:132,47:[1,22]},{17:[1,133]},{16:[1,134]},{5:[2,10],8:[2,10],17:[2,10]},{6:135,7:4,9:5,11:7,12:6,14:[1,8],15:17,17:[2,5],18:[1,9],19:[1,28],24:25,25:[1,10],27:11,31:12,32:13,33:14,34:[1,15],35:[1,20],36:[1,21],37:[1,19],47:[1,22],48:[1,16],50:18,53:23,55:[1,24],56:[1,26],57:[1,27],59:[1,29]},{17:[1,136]},{5:[2,11],8:[2,11],17:[2,11]}],
defaultActions: {3:[2,2],30:[2,1],82:[2,47],100:[2,43],101:[2,46],116:[2,42],119:[2,51]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comment */
break;
case 1:/* skip whitespace */
break;
case 2:return 59
break;
case 3: /* 'text' */
									yy_.yytext = this.matches[1];
									return 58;
								
break;
case 4: /* "text" */
									yy_.yytext = this.matches[1];
									return 58;
								
break;
case 5:return 14
break;
case 6:return 18
break;
case 7:return 25
break;
case 8:return 22
break;
case 9:return 34
break;
case 10:return 36
break;
case 11:return 35
break;
case 12:return 37
break;
case 13:return 28
break;
case 14:return 30
break;
case 15:return 56
break;
case 16:return 57
break;
case 17:return 55
break;
case 18:return 48
break;
case 19:return 47
break;
case 20:return 52
break;
case 21:return 54
break;
case 22:return 51
break;
case 23:return 49
break;
case 24:return 19
break;
case 25:return 21
break;
case 26:return 16
break;
case 27:return 17
break;
case 28:return 23
break;
case 29:return 8
break;
case 30:return 43
break;
case 31:return 42
break;
case 32:return '.'
break;
case 33:return 10
break;
case 34:return 5
break;
}
},
rules: [/^(?:\/\/[^\n]*)/,/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:'(.*?)')/,/^(?:"(.*?)")/,/^(?:lscript\b)/,/^(?:lsystem\b)/,/^(?:alphabet\b)/,/^(?:using\b)/,/^(?:derive\b)/,/^(?:call\b)/,/^(?:sublsystem\b)/,/^(?:main\b)/,/^(?:-->)/,/^(?:-h>)/,/^(?:E\b)/,/^(?:PI\b)/,/^(?:__([A-Za-z_][A-Za-z_0-9_]*))/,/^(?:\$([A-Za-z_][A-Za-z_0-9_]*))/,/^(?:([A-Za-z_][A-Za-z_0-9_]*))/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:,)/,/^(?:;)/,/^(?::)/,/^(?:\|)/,/^(?:\.)/,/^(?:=)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
}(window.l2js);
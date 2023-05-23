// @ts-nocheck
// Generated from src/esql/antlr/esql_parser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { esql_parserListener } from "./esql_parserListener";

export class esql_parser extends Parser {
	public static readonly DISSECT = 1;
	public static readonly GROK = 2;
	public static readonly EVAL = 3;
	public static readonly EXPLAIN = 4;
	public static readonly FROM = 5;
	public static readonly ROW = 6;
	public static readonly STATS = 7;
	public static readonly WHERE = 8;
	public static readonly SORT = 9;
	public static readonly LIMIT = 10;
	public static readonly PROJECT = 11;
	public static readonly DROP = 12;
	public static readonly RENAME = 13;
	public static readonly SHOW = 14;
	public static readonly LINE_COMMENT = 15;
	public static readonly MULTILINE_COMMENT = 16;
	public static readonly WS = 17;
	public static readonly EXPLAIN_WS = 18;
	public static readonly EXPLAIN_LINE_COMMENT = 19;
	public static readonly EXPLAIN_MULTILINE_COMMENT = 20;
	public static readonly PIPE = 21;
	public static readonly STRING = 22;
	public static readonly INTEGER_LITERAL = 23;
	public static readonly DECIMAL_LITERAL = 24;
	public static readonly BY = 25;
	public static readonly DATE_LITERAL = 26;
	public static readonly AND = 27;
	public static readonly ASSIGN = 28;
	public static readonly COMMA = 29;
	public static readonly DOT = 30;
	public static readonly LP = 31;
	public static readonly OPENING_BRACKET = 32;
	public static readonly CLOSING_BRACKET = 33;
	public static readonly NOT = 34;
	public static readonly LIKE = 35;
	public static readonly RLIKE = 36;
	public static readonly IN = 37;
	public static readonly NULL = 38;
	public static readonly OR = 39;
	public static readonly RP = 40;
	public static readonly UNDERSCORE = 41;
	public static readonly INFO = 42;
	public static readonly FUNCTIONS = 43;
	public static readonly BOOLEAN_VALUE = 44;
	public static readonly COMPARISON_OPERATOR = 45;
	public static readonly PLUS = 46;
	public static readonly MINUS = 47;
	public static readonly ASTERISK = 48;
	public static readonly SLASH = 49;
	public static readonly PERCENT = 50;
	public static readonly ORDERING = 51;
	public static readonly NULLS_ORDERING = 52;
	public static readonly NULLS_ORDERING_DIRECTION = 53;
	public static readonly MATH_FUNCTION = 54;
	public static readonly UNARY_FUNCTION = 55;
	public static readonly WHERE_FUNCTIONS = 56;
	public static readonly UNQUOTED_IDENTIFIER = 57;
	public static readonly QUOTED_IDENTIFIER = 58;
	public static readonly EXPR_LINE_COMMENT = 59;
	public static readonly EXPR_MULTILINE_COMMENT = 60;
	public static readonly EXPR_WS = 61;
	public static readonly SRC_UNQUOTED_IDENTIFIER = 62;
	public static readonly SRC_QUOTED_IDENTIFIER = 63;
	public static readonly SRC_LINE_COMMENT = 64;
	public static readonly SRC_MULTILINE_COMMENT = 65;
	public static readonly SRC_WS = 66;
	public static readonly EXPLAIN_PIPE = 67;
	public static readonly RULE_singleStatement = 0;
	public static readonly RULE_query = 1;
	public static readonly RULE_sourceCommand = 2;
	public static readonly RULE_processingCommand = 3;
	public static readonly RULE_whereCommand = 4;
	public static readonly RULE_whereBooleanExpression = 5;
	public static readonly RULE_booleanExpression = 6;
	public static readonly RULE_regexBooleanExpression = 7;
	public static readonly RULE_valueExpression = 8;
	public static readonly RULE_comparison = 9;
	public static readonly RULE_mathFn = 10;
	public static readonly RULE_mathEvalFn = 11;
	public static readonly RULE_operatorExpression = 12;
	public static readonly RULE_primaryExpression = 13;
	public static readonly RULE_rowCommand = 14;
	public static readonly RULE_fields = 15;
	public static readonly RULE_field = 16;
	public static readonly RULE_userVariable = 17;
	public static readonly RULE_fromCommand = 18;
	public static readonly RULE_evalCommand = 19;
	public static readonly RULE_statsCommand = 20;
	public static readonly RULE_sourceIdentifier = 21;
	public static readonly RULE_functionExpressionArgument = 22;
	public static readonly RULE_mathFunctionExpressionArgument = 23;
	public static readonly RULE_qualifiedName = 24;
	public static readonly RULE_qualifiedNames = 25;
	public static readonly RULE_identifier = 26;
	public static readonly RULE_mathFunctionIdentifier = 27;
	public static readonly RULE_functionIdentifier = 28;
	public static readonly RULE_constant = 29;
	public static readonly RULE_numericValue = 30;
	public static readonly RULE_limitCommand = 31;
	public static readonly RULE_sortCommand = 32;
	public static readonly RULE_orderExpression = 33;
	public static readonly RULE_projectCommand = 34;
	public static readonly RULE_dropCommand = 35;
	public static readonly RULE_renameVariable = 36;
	public static readonly RULE_renameCommand = 37;
	public static readonly RULE_renameClause = 38;
	public static readonly RULE_dissectCommand = 39;
	public static readonly RULE_grokCommand = 40;
	public static readonly RULE_commandOptions = 41;
	public static readonly RULE_commandOption = 42;
	public static readonly RULE_booleanValue = 43;
	public static readonly RULE_number = 44;
	public static readonly RULE_decimalValue = 45;
	public static readonly RULE_integerValue = 46;
	public static readonly RULE_string = 47;
	public static readonly RULE_comparisonOperator = 48;
	public static readonly RULE_explainCommand = 49;
	public static readonly RULE_subqueryExpression = 50;
	public static readonly RULE_showCommand = 51;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"singleStatement", "query", "sourceCommand", "processingCommand", "whereCommand", 
		"whereBooleanExpression", "booleanExpression", "regexBooleanExpression", 
		"valueExpression", "comparison", "mathFn", "mathEvalFn", "operatorExpression", 
		"primaryExpression", "rowCommand", "fields", "field", "userVariable", 
		"fromCommand", "evalCommand", "statsCommand", "sourceIdentifier", "functionExpressionArgument", 
		"mathFunctionExpressionArgument", "qualifiedName", "qualifiedNames", "identifier", 
		"mathFunctionIdentifier", "functionIdentifier", "constant", "numericValue", 
		"limitCommand", "sortCommand", "orderExpression", "projectCommand", "dropCommand", 
		"renameVariable", "renameCommand", "renameClause", "dissectCommand", "grokCommand", 
		"commandOptions", "commandOption", "booleanValue", "number", "decimalValue", 
		"integerValue", "string", "comparisonOperator", "explainCommand", "subqueryExpression", 
		"showCommand",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'by'", undefined, "'and'", 
		undefined, undefined, "'.'", "'('", undefined, "']'", "'not'", undefined, 
		undefined, undefined, "'null'", "'or'", "')'", "'_'", "'info'", "'functions'", 
		undefined, undefined, "'+'", "'-'", "'*'", "'/'", "'%'", undefined, "'nulls'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DISSECT", "GROK", "EVAL", "EXPLAIN", "FROM", "ROW", "STATS", 
		"WHERE", "SORT", "LIMIT", "PROJECT", "DROP", "RENAME", "SHOW", "LINE_COMMENT", 
		"MULTILINE_COMMENT", "WS", "EXPLAIN_WS", "EXPLAIN_LINE_COMMENT", "EXPLAIN_MULTILINE_COMMENT", 
		"PIPE", "STRING", "INTEGER_LITERAL", "DECIMAL_LITERAL", "BY", "DATE_LITERAL", 
		"AND", "ASSIGN", "COMMA", "DOT", "LP", "OPENING_BRACKET", "CLOSING_BRACKET", 
		"NOT", "LIKE", "RLIKE", "IN", "NULL", "OR", "RP", "UNDERSCORE", "INFO", 
		"FUNCTIONS", "BOOLEAN_VALUE", "COMPARISON_OPERATOR", "PLUS", "MINUS", 
		"ASTERISK", "SLASH", "PERCENT", "ORDERING", "NULLS_ORDERING", "NULLS_ORDERING_DIRECTION", 
		"MATH_FUNCTION", "UNARY_FUNCTION", "WHERE_FUNCTIONS", "UNQUOTED_IDENTIFIER", 
		"QUOTED_IDENTIFIER", "EXPR_LINE_COMMENT", "EXPR_MULTILINE_COMMENT", "EXPR_WS", 
		"SRC_UNQUOTED_IDENTIFIER", "SRC_QUOTED_IDENTIFIER", "SRC_LINE_COMMENT", 
		"SRC_MULTILINE_COMMENT", "SRC_WS", "EXPLAIN_PIPE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(esql_parser._LITERAL_NAMES, esql_parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return esql_parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "esql_parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return esql_parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return esql_parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(esql_parser._ATN, this);
	}
	// @RuleVersion(0)
	public singleStatement(): SingleStatementContext {
		let _localctx: SingleStatementContext = new SingleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, esql_parser.RULE_singleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.query(0);
			this.state = 105;
			this.match(esql_parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public query(): QueryContext;
	public query(_p: number): QueryContext;
	// @RuleVersion(0)
	public query(_p?: number): QueryContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: QueryContext = new QueryContext(this._ctx, _parentState);
		let _prevctx: QueryContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, esql_parser.RULE_query, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new SingleCommandQueryContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 108;
			this.sourceCommand();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 115;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new CompositeQueryContext(new QueryContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, esql_parser.RULE_query);
					this.state = 110;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 111;
					this.match(esql_parser.PIPE);
					this.state = 112;
					this.processingCommand();
					}
					}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceCommand(): SourceCommandContext {
		let _localctx: SourceCommandContext = new SourceCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, esql_parser.RULE_sourceCommand);
		try {
			this.state = 122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.EXPLAIN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 118;
				this.explainCommand();
				}
				break;
			case esql_parser.FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 119;
				this.fromCommand();
				}
				break;
			case esql_parser.ROW:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 120;
				this.rowCommand();
				}
				break;
			case esql_parser.SHOW:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 121;
				this.showCommand();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processingCommand(): ProcessingCommandContext {
		let _localctx: ProcessingCommandContext = new ProcessingCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, esql_parser.RULE_processingCommand);
		try {
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.EVAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.evalCommand();
				}
				break;
			case esql_parser.LIMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.limitCommand();
				}
				break;
			case esql_parser.PROJECT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this.projectCommand();
				}
				break;
			case esql_parser.RENAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 127;
				this.renameCommand();
				}
				break;
			case esql_parser.DROP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 128;
				this.dropCommand();
				}
				break;
			case esql_parser.DISSECT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 129;
				this.dissectCommand();
				}
				break;
			case esql_parser.GROK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 130;
				this.grokCommand();
				}
				break;
			case esql_parser.SORT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 131;
				this.sortCommand();
				}
				break;
			case esql_parser.STATS:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 132;
				this.statsCommand();
				}
				break;
			case esql_parser.WHERE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 133;
				this.whereCommand();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereCommand(): WhereCommandContext {
		let _localctx: WhereCommandContext = new WhereCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, esql_parser.RULE_whereCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(esql_parser.WHERE);
			this.state = 137;
			this.whereBooleanExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereBooleanExpression(): WhereBooleanExpressionContext {
		let _localctx: WhereBooleanExpressionContext = new WhereBooleanExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, esql_parser.RULE_whereBooleanExpression);
		let _la: number;
		try {
			this.state = 181;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 139;
				this.match(esql_parser.NOT);
				this.state = 140;
				this.booleanExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 141;
				this.valueExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 142;
				this.regexBooleanExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 143;
				_localctx._left = this.booleanExpression(0);
				this.state = 144;
				_localctx._operator = this.match(esql_parser.AND);
				this.state = 145;
				_localctx._right = this.booleanExpression(0);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 147;
				_localctx._left = this.booleanExpression(0);
				this.state = 148;
				_localctx._operator = this.match(esql_parser.OR);
				this.state = 149;
				_localctx._right = this.booleanExpression(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 151;
				this.valueExpression();
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === esql_parser.NOT) {
					{
					this.state = 152;
					this.match(esql_parser.NOT);
					}
				}

				this.state = 155;
				this.match(esql_parser.IN);
				this.state = 156;
				this.match(esql_parser.LP);
				this.state = 157;
				this.valueExpression();
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === esql_parser.COMMA) {
					{
					{
					this.state = 158;
					this.match(esql_parser.COMMA);
					this.state = 159;
					this.valueExpression();
					}
					}
					this.state = 164;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 165;
				this.match(esql_parser.RP);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 167;
				this.match(esql_parser.WHERE_FUNCTIONS);
				this.state = 168;
				this.match(esql_parser.LP);
				this.state = 169;
				this.qualifiedName();
				this.state = 177;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 174;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === esql_parser.COMMA) {
						{
						{
						this.state = 170;
						this.match(esql_parser.COMMA);
						this.state = 171;
						this.functionExpressionArgument();
						}
						}
						this.state = 176;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				this.state = 179;
				this.match(esql_parser.RP);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, esql_parser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.NOT:
				{
				this.state = 184;
				this.match(esql_parser.NOT);
				this.state = 185;
				this.booleanExpression(4);
				}
				break;
			case esql_parser.STRING:
			case esql_parser.INTEGER_LITERAL:
			case esql_parser.DECIMAL_LITERAL:
			case esql_parser.LP:
			case esql_parser.OPENING_BRACKET:
			case esql_parser.NULL:
			case esql_parser.BOOLEAN_VALUE:
			case esql_parser.PLUS:
			case esql_parser.MINUS:
			case esql_parser.MATH_FUNCTION:
			case esql_parser.UNARY_FUNCTION:
			case esql_parser.UNQUOTED_IDENTIFIER:
			case esql_parser.QUOTED_IDENTIFIER:
				{
				this.state = 186;
				this.valueExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 197;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 195;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new BooleanExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, esql_parser.RULE_booleanExpression);
						this.state = 189;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 190;
						_localctx._operator = this.match(esql_parser.AND);
						this.state = 191;
						_localctx._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new BooleanExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, esql_parser.RULE_booleanExpression);
						this.state = 192;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 193;
						_localctx._operator = this.match(esql_parser.OR);
						this.state = 194;
						_localctx._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public regexBooleanExpression(): RegexBooleanExpressionContext {
		let _localctx: RegexBooleanExpressionContext = new RegexBooleanExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, esql_parser.RULE_regexBooleanExpression);
		let _la: number;
		try {
			this.state = 214;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 200;
				this.valueExpression();
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === esql_parser.NOT) {
					{
					this.state = 201;
					this.match(esql_parser.NOT);
					}
				}

				this.state = 204;
				_localctx._kind = this.match(esql_parser.LIKE);
				this.state = 205;
				_localctx._pattern = this.string();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 207;
				this.valueExpression();
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === esql_parser.NOT) {
					{
					this.state = 208;
					this.match(esql_parser.NOT);
					}
				}

				this.state = 211;
				_localctx._kind = this.match(esql_parser.RLIKE);
				this.state = 212;
				_localctx._pattern = this.string();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueExpression(): ValueExpressionContext {
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, esql_parser.RULE_valueExpression);
		try {
			this.state = 218;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 216;
				this.operatorExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.comparison();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, esql_parser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			_localctx._left = this.operatorExpression(0);
			this.state = 221;
			this.comparisonOperator();
			this.state = 222;
			_localctx._right = this.operatorExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathFn(): MathFnContext {
		let _localctx: MathFnContext = new MathFnContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, esql_parser.RULE_mathFn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.functionIdentifier();
			this.state = 225;
			this.match(esql_parser.LP);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === esql_parser.STRING || _la === esql_parser.UNQUOTED_IDENTIFIER || _la === esql_parser.QUOTED_IDENTIFIER) {
				{
				this.state = 226;
				this.functionExpressionArgument();
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === esql_parser.COMMA) {
					{
					{
					this.state = 227;
					this.match(esql_parser.COMMA);
					this.state = 228;
					this.functionExpressionArgument();
					}
					}
					this.state = 233;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 236;
			this.match(esql_parser.RP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathEvalFn(): MathEvalFnContext {
		let _localctx: MathEvalFnContext = new MathEvalFnContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, esql_parser.RULE_mathEvalFn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.mathFunctionIdentifier();
			this.state = 239;
			this.match(esql_parser.LP);
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << esql_parser.STRING) | (1 << esql_parser.INTEGER_LITERAL) | (1 << esql_parser.DECIMAL_LITERAL) | (1 << esql_parser.LP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (esql_parser.OPENING_BRACKET - 32)) | (1 << (esql_parser.NULL - 32)) | (1 << (esql_parser.BOOLEAN_VALUE - 32)) | (1 << (esql_parser.PLUS - 32)) | (1 << (esql_parser.MINUS - 32)) | (1 << (esql_parser.MATH_FUNCTION - 32)) | (1 << (esql_parser.UNARY_FUNCTION - 32)) | (1 << (esql_parser.UNQUOTED_IDENTIFIER - 32)) | (1 << (esql_parser.QUOTED_IDENTIFIER - 32)))) !== 0)) {
				{
				this.state = 240;
				this.mathFunctionExpressionArgument();
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === esql_parser.COMMA) {
					{
					{
					this.state = 241;
					this.match(esql_parser.COMMA);
					this.state = 242;
					this.mathFunctionExpressionArgument();
					}
					}
					this.state = 247;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 250;
			this.match(esql_parser.RP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public operatorExpression(): OperatorExpressionContext;
	public operatorExpression(_p: number): OperatorExpressionContext;
	// @RuleVersion(0)
	public operatorExpression(_p?: number): OperatorExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: OperatorExpressionContext = new OperatorExpressionContext(this._ctx, _parentState);
		let _prevctx: OperatorExpressionContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, esql_parser.RULE_operatorExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.STRING:
			case esql_parser.INTEGER_LITERAL:
			case esql_parser.DECIMAL_LITERAL:
			case esql_parser.LP:
			case esql_parser.OPENING_BRACKET:
			case esql_parser.NULL:
			case esql_parser.BOOLEAN_VALUE:
			case esql_parser.UNQUOTED_IDENTIFIER:
			case esql_parser.QUOTED_IDENTIFIER:
				{
				this.state = 253;
				this.primaryExpression();
				}
				break;
			case esql_parser.UNARY_FUNCTION:
				{
				this.state = 254;
				this.mathFn();
				}
				break;
			case esql_parser.MATH_FUNCTION:
				{
				this.state = 255;
				this.mathEvalFn();
				}
				break;
			case esql_parser.PLUS:
			case esql_parser.MINUS:
				{
				this.state = 256;
				_localctx._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === esql_parser.PLUS || _la === esql_parser.MINUS)) {
					_localctx._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 257;
				this.operatorExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 268;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 266;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
					case 1:
						{
						_localctx = new OperatorExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, esql_parser.RULE_operatorExpression);
						this.state = 260;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 261;
						_localctx._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (esql_parser.ASTERISK - 48)) | (1 << (esql_parser.SLASH - 48)) | (1 << (esql_parser.PERCENT - 48)))) !== 0))) {
							_localctx._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 262;
						_localctx._right = this.operatorExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new OperatorExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, esql_parser.RULE_operatorExpression);
						this.state = 263;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 264;
						_localctx._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === esql_parser.PLUS || _la === esql_parser.MINUS)) {
							_localctx._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 265;
						_localctx._right = this.operatorExpression(2);
						}
						break;
					}
					}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, esql_parser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 271;
				this.constant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 272;
				this.qualifiedName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 273;
				this.match(esql_parser.LP);
				this.state = 274;
				this.booleanExpression(0);
				this.state = 275;
				this.match(esql_parser.RP);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 277;
				this.identifier();
				this.state = 278;
				this.match(esql_parser.LP);
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << esql_parser.STRING) | (1 << esql_parser.INTEGER_LITERAL) | (1 << esql_parser.DECIMAL_LITERAL) | (1 << esql_parser.LP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (esql_parser.OPENING_BRACKET - 32)) | (1 << (esql_parser.NOT - 32)) | (1 << (esql_parser.NULL - 32)) | (1 << (esql_parser.BOOLEAN_VALUE - 32)) | (1 << (esql_parser.PLUS - 32)) | (1 << (esql_parser.MINUS - 32)) | (1 << (esql_parser.MATH_FUNCTION - 32)) | (1 << (esql_parser.UNARY_FUNCTION - 32)) | (1 << (esql_parser.UNQUOTED_IDENTIFIER - 32)) | (1 << (esql_parser.QUOTED_IDENTIFIER - 32)))) !== 0)) {
					{
					this.state = 279;
					this.booleanExpression(0);
					this.state = 284;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === esql_parser.COMMA) {
						{
						{
						this.state = 280;
						this.match(esql_parser.COMMA);
						this.state = 281;
						this.booleanExpression(0);
						}
						}
						this.state = 286;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 289;
				this.match(esql_parser.RP);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rowCommand(): RowCommandContext {
		let _localctx: RowCommandContext = new RowCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, esql_parser.RULE_rowCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(esql_parser.ROW);
			this.state = 294;
			this.fields();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fields(): FieldsContext {
		let _localctx: FieldsContext = new FieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, esql_parser.RULE_fields);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.field();
			this.state = 301;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 297;
					this.match(esql_parser.COMMA);
					this.state = 298;
					this.field();
					}
					}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, esql_parser.RULE_field);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 304;
				this.booleanExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 305;
				this.userVariable();
				this.state = 306;
				this.match(esql_parser.ASSIGN);
				this.state = 307;
				this.booleanExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userVariable(): UserVariableContext {
		let _localctx: UserVariableContext = new UserVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, esql_parser.RULE_userVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromCommand(): FromCommandContext {
		let _localctx: FromCommandContext = new FromCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, esql_parser.RULE_fromCommand);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(esql_parser.FROM);
			this.state = 314;
			this.sourceIdentifier();
			this.state = 319;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 315;
					this.match(esql_parser.COMMA);
					this.state = 316;
					this.sourceIdentifier();
					}
					}
				}
				this.state = 321;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public evalCommand(): EvalCommandContext {
		let _localctx: EvalCommandContext = new EvalCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, esql_parser.RULE_evalCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.match(esql_parser.EVAL);
			this.state = 323;
			this.fields();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statsCommand(): StatsCommandContext {
		let _localctx: StatsCommandContext = new StatsCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, esql_parser.RULE_statsCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(esql_parser.STATS);
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 326;
				this.fields();
				}
				break;
			}
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 329;
				this.match(esql_parser.BY);
				this.state = 330;
				this.qualifiedNames();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceIdentifier(): SourceIdentifierContext {
		let _localctx: SourceIdentifierContext = new SourceIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, esql_parser.RULE_sourceIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			_la = this._input.LA(1);
			if (!(_la === esql_parser.SRC_UNQUOTED_IDENTIFIER || _la === esql_parser.SRC_QUOTED_IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpressionArgument(): FunctionExpressionArgumentContext {
		let _localctx: FunctionExpressionArgumentContext = new FunctionExpressionArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, esql_parser.RULE_functionExpressionArgument);
		try {
			this.state = 337;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.UNQUOTED_IDENTIFIER:
			case esql_parser.QUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 335;
				this.qualifiedName();
				}
				break;
			case esql_parser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 336;
				this.string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathFunctionExpressionArgument(): MathFunctionExpressionArgumentContext {
		let _localctx: MathFunctionExpressionArgumentContext = new MathFunctionExpressionArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, esql_parser.RULE_mathFunctionExpressionArgument);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 339;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 340;
				this.string();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 341;
				this.number();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 342;
				this.operatorExpression(0);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 343;
				this.number();
				{
				this.state = 344;
				this.match(esql_parser.DATE_LITERAL);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 346;
				this.comparison();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, esql_parser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.identifier();
			this.state = 354;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 350;
					this.match(esql_parser.DOT);
					this.state = 351;
					this.identifier();
					}
					}
				}
				this.state = 356;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNames(): QualifiedNamesContext {
		let _localctx: QualifiedNamesContext = new QualifiedNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, esql_parser.RULE_qualifiedNames);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.qualifiedName();
			this.state = 362;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 358;
					this.match(esql_parser.COMMA);
					this.state = 359;
					this.qualifiedName();
					}
					}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, esql_parser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			_la = this._input.LA(1);
			if (!(_la === esql_parser.UNQUOTED_IDENTIFIER || _la === esql_parser.QUOTED_IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathFunctionIdentifier(): MathFunctionIdentifierContext {
		let _localctx: MathFunctionIdentifierContext = new MathFunctionIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, esql_parser.RULE_mathFunctionIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.match(esql_parser.MATH_FUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionIdentifier(): FunctionIdentifierContext {
		let _localctx: FunctionIdentifierContext = new FunctionIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, esql_parser.RULE_functionIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(esql_parser.UNARY_FUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, esql_parser.RULE_constant);
		let _la: number;
		try {
			this.state = 408;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 371;
				this.match(esql_parser.NULL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 372;
				this.numericValue();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 373;
				this.booleanValue();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 374;
				this.string();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 375;
				this.match(esql_parser.OPENING_BRACKET);
				this.state = 376;
				this.numericValue();
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === esql_parser.COMMA) {
					{
					{
					this.state = 377;
					this.match(esql_parser.COMMA);
					this.state = 378;
					this.numericValue();
					}
					}
					this.state = 383;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 384;
				this.match(esql_parser.CLOSING_BRACKET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 386;
				this.match(esql_parser.OPENING_BRACKET);
				this.state = 387;
				this.booleanValue();
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === esql_parser.COMMA) {
					{
					{
					this.state = 388;
					this.match(esql_parser.COMMA);
					this.state = 389;
					this.booleanValue();
					}
					}
					this.state = 394;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 395;
				this.match(esql_parser.CLOSING_BRACKET);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 397;
				this.match(esql_parser.OPENING_BRACKET);
				this.state = 398;
				this.string();
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === esql_parser.COMMA) {
					{
					{
					this.state = 399;
					this.match(esql_parser.COMMA);
					this.state = 400;
					this.string();
					}
					}
					this.state = 405;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 406;
				this.match(esql_parser.CLOSING_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericValue(): NumericValueContext {
		let _localctx: NumericValueContext = new NumericValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, esql_parser.RULE_numericValue);
		try {
			this.state = 412;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.DECIMAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 410;
				this.decimalValue();
				}
				break;
			case esql_parser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 411;
				this.integerValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitCommand(): LimitCommandContext {
		let _localctx: LimitCommandContext = new LimitCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, esql_parser.RULE_limitCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(esql_parser.LIMIT);
			this.state = 415;
			this.match(esql_parser.INTEGER_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortCommand(): SortCommandContext {
		let _localctx: SortCommandContext = new SortCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, esql_parser.RULE_sortCommand);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(esql_parser.SORT);
			this.state = 418;
			this.orderExpression();
			this.state = 423;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 419;
					this.match(esql_parser.COMMA);
					this.state = 420;
					this.orderExpression();
					}
					}
				}
				this.state = 425;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderExpression(): OrderExpressionContext {
		let _localctx: OrderExpressionContext = new OrderExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, esql_parser.RULE_orderExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.booleanExpression(0);
			this.state = 428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 427;
				this.match(esql_parser.ORDERING);
				}
				break;
			}
			this.state = 432;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 430;
				this.match(esql_parser.NULLS_ORDERING);
				{
				this.state = 431;
				this.match(esql_parser.NULLS_ORDERING_DIRECTION);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public projectCommand(): ProjectCommandContext {
		let _localctx: ProjectCommandContext = new ProjectCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, esql_parser.RULE_projectCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.match(esql_parser.PROJECT);
			this.state = 435;
			this.qualifiedNames();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropCommand(): DropCommandContext {
		let _localctx: DropCommandContext = new DropCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, esql_parser.RULE_dropCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.match(esql_parser.DROP);
			this.state = 438;
			this.qualifiedNames();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameVariable(): RenameVariableContext {
		let _localctx: RenameVariableContext = new RenameVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, esql_parser.RULE_renameVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameCommand(): RenameCommandContext {
		let _localctx: RenameCommandContext = new RenameCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, esql_parser.RULE_renameCommand);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.match(esql_parser.RENAME);
			this.state = 443;
			this.renameClause();
			this.state = 448;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 444;
					this.match(esql_parser.COMMA);
					this.state = 445;
					this.renameClause();
					}
					}
				}
				this.state = 450;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameClause(): RenameClauseContext {
		let _localctx: RenameClauseContext = new RenameClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, esql_parser.RULE_renameClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.renameVariable();
			this.state = 452;
			this.match(esql_parser.ASSIGN);
			this.state = 453;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dissectCommand(): DissectCommandContext {
		let _localctx: DissectCommandContext = new DissectCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, esql_parser.RULE_dissectCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.match(esql_parser.DISSECT);
			this.state = 456;
			this.qualifiedNames();
			this.state = 457;
			this.string();
			this.state = 459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 458;
				this.commandOptions();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public grokCommand(): GrokCommandContext {
		let _localctx: GrokCommandContext = new GrokCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, esql_parser.RULE_grokCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(esql_parser.GROK);
			this.state = 462;
			this.qualifiedNames();
			this.state = 463;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandOptions(): CommandOptionsContext {
		let _localctx: CommandOptionsContext = new CommandOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, esql_parser.RULE_commandOptions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.commandOption();
			this.state = 470;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 466;
					this.match(esql_parser.COMMA);
					this.state = 467;
					this.commandOption();
					}
					}
				}
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandOption(): CommandOptionContext {
		let _localctx: CommandOptionContext = new CommandOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, esql_parser.RULE_commandOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.identifier();
			this.state = 474;
			this.match(esql_parser.ASSIGN);
			this.state = 475;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, esql_parser.RULE_booleanValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(esql_parser.BOOLEAN_VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, esql_parser.RULE_number);
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.DECIMAL_LITERAL:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 479;
				this.match(esql_parser.DECIMAL_LITERAL);
				}
				break;
			case esql_parser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 480;
				this.match(esql_parser.INTEGER_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decimalValue(): DecimalValueContext {
		let _localctx: DecimalValueContext = new DecimalValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, esql_parser.RULE_decimalValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(esql_parser.DECIMAL_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerValue(): IntegerValueContext {
		let _localctx: IntegerValueContext = new IntegerValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, esql_parser.RULE_integerValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.match(esql_parser.INTEGER_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, esql_parser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(esql_parser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, esql_parser.RULE_comparisonOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(esql_parser.COMPARISON_OPERATOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainCommand(): ExplainCommandContext {
		let _localctx: ExplainCommandContext = new ExplainCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, esql_parser.RULE_explainCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(esql_parser.EXPLAIN);
			this.state = 492;
			this.subqueryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subqueryExpression(): SubqueryExpressionContext {
		let _localctx: SubqueryExpressionContext = new SubqueryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, esql_parser.RULE_subqueryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.match(esql_parser.OPENING_BRACKET);
			this.state = 495;
			this.query(0);
			this.state = 496;
			this.match(esql_parser.CLOSING_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showCommand(): ShowCommandContext {
		let _localctx: ShowCommandContext = new ShowCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, esql_parser.RULE_showCommand);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 498;
				this.match(esql_parser.SHOW);
				this.state = 499;
				this.match(esql_parser.INFO);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 500;
				this.match(esql_parser.SHOW);
				this.state = 501;
				this.match(esql_parser.FUNCTIONS);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.query_sempred(_localctx as QueryContext, predIndex);

		case 6:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 12:
			return this.operatorExpression_sempred(_localctx as OperatorExpressionContext, predIndex);
		}
		return true;
	}
	private query_sempred(_localctx: QueryContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private operatorExpression_sempred(_localctx: OperatorExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u01FB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03t\n\x03\f\x03\x0E\x03w\v\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04}\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x89\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x9C\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xA3\n\x07\f\x07\x0E\x07\xA6\v" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xAF" +
		"\n\x07\f\x07\x0E\x07\xB2\v\x07\x05\x07\xB4\n\x07\x03\x07\x03\x07\x05\x07" +
		"\xB8\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\xBE\n\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x07\b\xC6\n\b\f\b\x0E\b\xC9\v\b\x03\t\x03\t\x05\t\xCD\n" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xD4\n\t\x03\t\x03\t\x03\t\x05\t" +
		"\xD9\n\t\x03\n\x03\n\x05\n\xDD\n\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x07\f\xE8\n\f\f\f\x0E\f\xEB\v\f\x05\f\xED\n\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xF6\n\r\f\r\x0E\r\xF9\v\r\x05" +
		"\r\xFB\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u0105\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07" +
		"\x0E\u010D\n\x0E\f\x0E\x0E\x0E\u0110\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u011D" +
		"\n\x0F\f\x0F\x0E\x0F\u0120\v\x0F\x05\x0F\u0122\n\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u0126\n\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u012E\n\x11\f\x11\x0E\x11\u0131\v\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\u0138\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x07\x14\u0140\n\x14\f\x14\x0E\x14\u0143\v\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x05\x16\u014A\n\x16\x03\x16\x03\x16\x05\x16\u014E" +
		"\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0154\n\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u015E\n\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0163\n\x1A\f\x1A\x0E\x1A\u0166\v\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u016B\n\x1B\f\x1B\x0E\x1B\u016E\v\x1B" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u017E\n\x1F\f\x1F\x0E" +
		"\x1F\u0181\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F" +
		"\u0189\n\x1F\f\x1F\x0E\x1F\u018C\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x07\x1F\u0194\n\x1F\f\x1F\x0E\x1F\u0197\v\x1F\x03\x1F" +
		"\x03\x1F\x05\x1F\u019B\n\x1F\x03 \x03 \x05 \u019F\n \x03!\x03!\x03!\x03" +
		"\"\x03\"\x03\"\x03\"\x07\"\u01A8\n\"\f\"\x0E\"\u01AB\v\"\x03#\x03#\x05" +
		"#\u01AF\n#\x03#\x03#\x05#\u01B3\n#\x03$\x03$\x03$\x03%\x03%\x03%\x03&" +
		"\x03&\x03\'\x03\'\x03\'\x03\'\x07\'\u01C1\n\'\f\'\x0E\'\u01C4\v\'\x03" +
		"(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x05)\u01CE\n)\x03*\x03*\x03*\x03" +
		"*\x03+\x03+\x03+\x07+\u01D7\n+\f+\x0E+\u01DA\v+\x03,\x03,\x03,\x03,\x03" +
		"-\x03-\x03.\x03.\x05.\u01E4\n.\x03/\x03/\x030\x030\x031\x031\x032\x03" +
		"2\x033\x033\x033\x034\x034\x034\x034\x035\x035\x035\x035\x055\u01F9\n" +
		"5\x035\x02\x02\x05\x04\x0E\x1A6\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
		"V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02\x02\x06\x03\x0201" +
		"\x03\x0224\x03\x02@A\x03\x02;<\x02\u0211\x02j\x03\x02\x02\x02\x04m\x03" +
		"\x02\x02\x02\x06|\x03\x02\x02\x02\b\x88\x03\x02\x02\x02\n\x8A\x03\x02" +
		"\x02\x02\f\xB7\x03\x02\x02\x02\x0E\xBD\x03\x02\x02\x02\x10\xD8\x03\x02" +
		"\x02\x02\x12\xDC\x03\x02\x02\x02\x14\xDE\x03\x02\x02\x02\x16\xE2\x03\x02" +
		"\x02\x02\x18\xF0\x03\x02\x02\x02\x1A\u0104\x03\x02\x02\x02\x1C\u0125\x03" +
		"\x02\x02\x02\x1E\u0127\x03\x02\x02\x02 \u012A\x03\x02\x02\x02\"\u0137" +
		"\x03\x02\x02\x02$\u0139\x03\x02\x02\x02&\u013B\x03\x02\x02\x02(\u0144" +
		"\x03\x02\x02\x02*\u0147\x03\x02\x02\x02,\u014F\x03\x02\x02\x02.\u0153" +
		"\x03\x02\x02\x020\u015D\x03\x02\x02\x022\u015F\x03\x02\x02\x024\u0167" +
		"\x03\x02\x02\x026\u016F\x03\x02\x02\x028\u0171\x03\x02\x02\x02:\u0173" +
		"\x03\x02\x02\x02<\u019A\x03\x02\x02\x02>\u019E\x03\x02\x02\x02@\u01A0" +
		"\x03\x02\x02\x02B\u01A3\x03\x02\x02\x02D\u01AC\x03\x02\x02\x02F\u01B4" +
		"\x03\x02\x02\x02H\u01B7\x03\x02\x02\x02J\u01BA\x03\x02\x02\x02L\u01BC" +
		"\x03\x02\x02\x02N\u01C5\x03\x02\x02\x02P\u01C9\x03\x02\x02\x02R\u01CF" +
		"\x03\x02\x02\x02T\u01D3\x03\x02\x02\x02V\u01DB\x03\x02\x02\x02X\u01DF" +
		"\x03\x02\x02\x02Z\u01E3\x03\x02\x02\x02\\\u01E5\x03\x02\x02\x02^\u01E7" +
		"\x03\x02\x02\x02`\u01E9\x03\x02\x02\x02b\u01EB\x03\x02\x02\x02d\u01ED" +
		"\x03\x02\x02\x02f\u01F0\x03\x02\x02\x02h\u01F8\x03\x02\x02\x02jk\x05\x04" +
		"\x03\x02kl\x07\x02\x02\x03l\x03\x03\x02\x02\x02mn\b\x03\x01\x02no\x05" +
		"\x06\x04\x02ou\x03\x02\x02\x02pq\f\x03\x02\x02qr\x07\x17\x02\x02rt\x05" +
		"\b\x05\x02sp\x03\x02\x02\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03" +
		"\x02\x02\x02v\x05\x03\x02\x02\x02wu\x03\x02\x02\x02x}\x05d3\x02y}\x05" +
		"&\x14\x02z}\x05\x1E\x10\x02{}\x05h5\x02|x\x03\x02\x02\x02|y\x03\x02\x02" +
		"\x02|z\x03\x02\x02\x02|{\x03\x02\x02\x02}\x07\x03\x02\x02\x02~\x89\x05" +
		"(\x15\x02\x7F\x89\x05@!\x02\x80\x89\x05F$\x02\x81\x89\x05L\'\x02\x82\x89" +
		"\x05H%\x02\x83\x89\x05P)\x02\x84\x89\x05R*\x02\x85\x89\x05B\"\x02\x86" +
		"\x89\x05*\x16\x02\x87\x89\x05\n\x06\x02\x88~\x03\x02\x02\x02\x88\x7F\x03" +
		"\x02\x02\x02\x88\x80\x03\x02\x02\x02\x88\x81\x03\x02\x02\x02\x88\x82\x03" +
		"\x02\x02\x02\x88\x83\x03\x02\x02\x02\x88\x84\x03\x02\x02\x02\x88\x85\x03" +
		"\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x87\x03\x02\x02\x02\x89\t\x03" +
		"\x02\x02\x02\x8A\x8B\x07\n\x02\x02\x8B\x8C\x05\f\x07\x02\x8C\v\x03\x02" +
		"\x02\x02\x8D\x8E\x07$\x02\x02\x8E\xB8\x05\x0E\b\x02\x8F\xB8\x05\x12\n" +
		"\x02\x90\xB8\x05\x10\t\x02\x91\x92\x05\x0E\b\x02\x92\x93\x07\x1D\x02\x02" +
		"\x93\x94\x05\x0E\b\x02\x94\xB8\x03\x02\x02\x02\x95\x96\x05\x0E\b\x02\x96" +
		"\x97\x07)\x02\x02\x97\x98\x05\x0E\b\x02\x98\xB8\x03\x02\x02\x02\x99\x9B" +
		"\x05\x12\n\x02\x9A\x9C\x07$\x02\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03" +
		"\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x07\'\x02\x02\x9E\x9F\x07" +
		"!\x02\x02\x9F\xA4\x05\x12\n\x02\xA0\xA1\x07\x1F\x02\x02\xA1\xA3\x05\x12" +
		"\n\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02" +
		"\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA4\x03\x02" +
		"\x02\x02\xA7\xA8\x07*\x02\x02\xA8\xB8\x03\x02\x02\x02\xA9\xAA\x07:\x02" +
		"\x02\xAA\xAB\x07!\x02\x02\xAB\xB3\x052\x1A\x02\xAC\xAD\x07\x1F\x02\x02" +
		"\xAD\xAF\x05.\x18\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02" +
		"\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02" +
		"\xB2\xB0\x03\x02\x02\x02\xB3\xB0\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02" +
		"\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x07*\x02\x02\xB6\xB8\x03\x02\x02\x02" +
		"\xB7\x8D\x03\x02\x02\x02\xB7\x8F\x03\x02\x02\x02\xB7\x90\x03\x02\x02\x02" +
		"\xB7\x91\x03\x02\x02\x02\xB7\x95\x03\x02\x02\x02\xB7\x99\x03\x02\x02\x02" +
		"\xB7\xA9\x03\x02\x02\x02\xB8\r\x03\x02\x02\x02\xB9\xBA\b\b\x01\x02\xBA" +
		"\xBB\x07$\x02\x02\xBB\xBE\x05\x0E\b\x06\xBC\xBE\x05\x12\n\x02\xBD\xB9" +
		"\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC7\x03\x02\x02\x02\xBF\xC0" +
		"\f\x04\x02\x02\xC0\xC1\x07\x1D\x02\x02\xC1\xC6\x05\x0E\b\x05\xC2\xC3\f" +
		"\x03\x02\x02\xC3\xC4\x07)\x02\x02\xC4\xC6\x05\x0E\b\x04\xC5\xBF\x03\x02" +
		"\x02\x02\xC5\xC2\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02" +
		"\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\x0F\x03\x02\x02\x02\xC9\xC7\x03\x02" +
		"\x02\x02\xCA\xCC\x05\x12\n\x02\xCB\xCD\x07$\x02\x02\xCC\xCB\x03\x02\x02" +
		"\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x07%\x02" +
		"\x02\xCF\xD0\x05`1\x02\xD0\xD9\x03\x02\x02\x02\xD1\xD3\x05\x12\n\x02\xD2" +
		"\xD4\x07$\x02\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4" +
		"\xD5\x03\x02\x02\x02\xD5\xD6\x07&\x02\x02\xD6\xD7\x05`1\x02\xD7\xD9\x03" +
		"\x02\x02\x02\xD8\xCA\x03\x02\x02\x02\xD8\xD1\x03\x02\x02\x02\xD9\x11\x03" +
		"\x02\x02\x02\xDA\xDD\x05\x1A\x0E\x02\xDB\xDD\x05\x14\v\x02\xDC\xDA\x03" +
		"\x02\x02\x02\xDC\xDB\x03\x02\x02\x02\xDD\x13\x03\x02\x02\x02\xDE\xDF\x05" +
		"\x1A\x0E\x02\xDF\xE0\x05b2\x02\xE0\xE1\x05\x1A\x0E\x02\xE1\x15\x03\x02" +
		"\x02\x02\xE2\xE3\x05:\x1E\x02\xE3\xEC\x07!\x02\x02\xE4\xE9\x05.\x18\x02" +
		"\xE5\xE6\x07\x1F\x02\x02\xE6\xE8\x05.\x18\x02\xE7\xE5\x03\x02\x02\x02" +
		"\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02" +
		"\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xE4\x03\x02\x02\x02" +
		"\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x07*\x02\x02" +
		"\xEF\x17\x03\x02\x02\x02\xF0\xF1\x058\x1D\x02\xF1\xFA\x07!\x02\x02\xF2" +
		"\xF7\x050\x19\x02\xF3\xF4\x07\x1F\x02\x02\xF4\xF6\x050\x19\x02\xF5\xF3" +
		"\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8" +
		"\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xF2" +
		"\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD" +
		"\x07*\x02\x02\xFD\x19\x03\x02\x02\x02\xFE\xFF\b\x0E\x01\x02\xFF\u0105" +
		"\x05\x1C\x0F\x02\u0100\u0105\x05\x16\f\x02\u0101\u0105\x05\x18\r\x02\u0102" +
		"\u0103\t\x02\x02\x02\u0103\u0105\x05\x1A\x0E\x05\u0104\xFE\x03\x02\x02" +
		"\x02\u0104\u0100\x03\x02\x02\x02\u0104\u0101\x03\x02\x02\x02\u0104\u0102" +
		"\x03\x02\x02\x02\u0105\u010E\x03\x02\x02\x02\u0106\u0107\f\x04\x02\x02" +
		"\u0107\u0108\t\x03\x02\x02\u0108\u010D\x05\x1A\x0E\x05\u0109\u010A\f\x03" +
		"\x02\x02\u010A\u010B\t\x02\x02\x02\u010B\u010D\x05\x1A\x0E\x04\u010C\u0106" +
		"\x03\x02\x02\x02\u010C\u0109\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02" +
		"\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\x1B\x03" +
		"\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0126\x05<\x1F\x02\u0112" +
		"\u0126\x052\x1A\x02\u0113\u0114\x07!\x02\x02\u0114\u0115\x05\x0E\b\x02" +
		"\u0115\u0116\x07*\x02\x02\u0116\u0126\x03\x02\x02\x02\u0117\u0118\x05" +
		"6\x1C\x02\u0118\u0121\x07!\x02\x02\u0119\u011E\x05\x0E\b\x02\u011A\u011B" +
		"\x07\x1F\x02\x02\u011B\u011D\x05\x0E\b\x02\u011C\u011A\x03\x02\x02\x02" +
		"\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011F\x03" +
		"\x02\x02\x02\u011F\u0122\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121" +
		"\u0119\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x03\x02" +
		"\x02\x02\u0123\u0124\x07*\x02\x02\u0124\u0126\x03\x02\x02\x02\u0125\u0111" +
		"\x03\x02\x02\x02\u0125\u0112\x03\x02\x02\x02\u0125\u0113\x03\x02\x02\x02" +
		"\u0125\u0117\x03\x02\x02\x02\u0126\x1D\x03\x02\x02\x02\u0127\u0128\x07" +
		"\b\x02\x02\u0128\u0129\x05 \x11\x02\u0129\x1F\x03\x02\x02\x02\u012A\u012F" +
		"\x05\"\x12\x02\u012B\u012C\x07\x1F\x02\x02\u012C\u012E\x05\"\x12\x02\u012D" +
		"\u012B\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u012D\x03\x02" +
		"\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130!\x03\x02\x02\x02\u0131\u012F" +
		"\x03\x02\x02\x02\u0132\u0138\x05\x0E\b\x02\u0133\u0134\x05$\x13\x02\u0134" +
		"\u0135\x07\x1E\x02\x02\u0135\u0136\x05\x0E\b\x02\u0136\u0138\x03\x02\x02" +
		"\x02\u0137\u0132\x03\x02\x02\x02\u0137\u0133\x03\x02\x02\x02\u0138#\x03" +
		"\x02\x02\x02\u0139\u013A\x056\x1C\x02\u013A%\x03\x02\x02\x02\u013B\u013C" +
		"\x07\x07\x02\x02\u013C\u0141\x05,\x17\x02\u013D\u013E\x07\x1F\x02\x02" +
		"\u013E\u0140\x05,\x17\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0143\x03" +
		"\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142" +
		"\'\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0144\u0145\x07\x05\x02" +
		"\x02\u0145\u0146\x05 \x11\x02\u0146)\x03\x02\x02\x02\u0147\u0149\x07\t" +
		"\x02\x02\u0148\u014A\x05 \x11\x02\u0149\u0148\x03\x02\x02\x02\u0149\u014A" +
		"\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B\u014C\x07\x1B\x02\x02" +
		"\u014C\u014E\x054\x1B\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03" +
		"\x02\x02\x02\u014E+\x03\x02\x02\x02\u014F\u0150\t\x04\x02\x02\u0150-\x03" +
		"\x02\x02\x02\u0151\u0154\x052\x1A\x02\u0152\u0154\x05`1\x02\u0153\u0151" +
		"\x03\x02\x02\x02\u0153\u0152\x03\x02\x02\x02\u0154/\x03\x02\x02\x02\u0155" +
		"\u015E\x052\x1A\x02\u0156\u015E\x05`1\x02\u0157\u015E\x05Z.\x02\u0158" +
		"\u015E\x05\x1A\x0E\x02\u0159\u015A\x05Z.\x02\u015A\u015B\x07\x1C\x02\x02" +
		"\u015B\u015E\x03\x02\x02\x02\u015C\u015E\x05\x14\v\x02\u015D\u0155\x03" +
		"\x02\x02\x02\u015D\u0156\x03\x02\x02\x02\u015D\u0157\x03\x02\x02\x02\u015D" +
		"\u0158\x03\x02\x02\x02\u015D\u0159\x03\x02\x02\x02\u015D\u015C\x03\x02" +
		"\x02\x02\u015E1\x03\x02\x02\x02\u015F\u0164\x056\x1C\x02\u0160\u0161\x07" +
		" \x02\x02\u0161\u0163\x056\x1C\x02\u0162\u0160\x03\x02\x02\x02\u0163\u0166" +
		"\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02" +
		"\u01653\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0167\u016C\x052\x1A" +
		"\x02\u0168\u0169\x07\x1F\x02\x02\u0169\u016B\x052\x1A\x02\u016A\u0168" +
		"\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02" +
		"\u016C\u016D\x03\x02\x02\x02\u016D5\x03\x02\x02\x02\u016E\u016C\x03\x02" +
		"\x02\x02\u016F\u0170\t\x05\x02\x02\u01707\x03\x02\x02\x02\u0171\u0172" +
		"\x078\x02\x02\u01729\x03\x02\x02\x02\u0173\u0174\x079\x02\x02\u0174;\x03" +
		"\x02\x02\x02\u0175\u019B\x07(\x02\x02\u0176\u019B\x05> \x02\u0177\u019B" +
		"\x05X-\x02\u0178\u019B\x05`1\x02\u0179\u017A\x07\"\x02\x02\u017A\u017F" +
		"\x05> \x02\u017B\u017C\x07\x1F\x02\x02\u017C\u017E\x05> \x02\u017D\u017B" +
		"\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02" +
		"\u017F\u0180\x03\x02\x02\x02\u0180\u0182\x03\x02\x02\x02\u0181\u017F\x03" +
		"\x02\x02\x02\u0182\u0183\x07#\x02\x02\u0183\u019B\x03\x02\x02\x02\u0184" +
		"\u0185\x07\"\x02\x02\u0185\u018A\x05X-\x02\u0186\u0187\x07\x1F\x02\x02" +
		"\u0187\u0189\x05X-\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018C\x03\x02" +
		"\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
		"\u018D\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D\u018E\x07#\x02" +
		"\x02\u018E\u019B\x03\x02\x02\x02\u018F\u0190\x07\"\x02\x02\u0190\u0195" +
		"\x05`1\x02\u0191\u0192\x07\x1F\x02\x02\u0192\u0194\x05`1\x02\u0193\u0191" +
		"\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02" +
		"\u0195\u0196\x03\x02\x02\x02\u0196\u0198\x03\x02\x02\x02\u0197\u0195\x03" +
		"\x02\x02\x02\u0198\u0199\x07#\x02\x02\u0199\u019B\x03\x02\x02\x02\u019A" +
		"\u0175\x03\x02\x02\x02\u019A\u0176\x03\x02\x02\x02\u019A\u0177\x03\x02" +
		"\x02\x02\u019A\u0178\x03\x02\x02\x02\u019A\u0179\x03\x02\x02\x02\u019A" +
		"\u0184\x03\x02\x02\x02\u019A\u018F\x03\x02\x02\x02\u019B=\x03\x02\x02" +
		"\x02\u019C\u019F\x05\\/\x02\u019D\u019F\x05^0\x02\u019E\u019C\x03\x02" +
		"\x02\x02\u019E\u019D\x03\x02\x02\x02\u019F?\x03\x02\x02\x02\u01A0\u01A1" +
		"\x07\f\x02\x02\u01A1\u01A2\x07\x19\x02\x02\u01A2A\x03\x02\x02\x02\u01A3" +
		"\u01A4\x07\v\x02\x02\u01A4\u01A9\x05D#\x02\u01A5\u01A6\x07\x1F\x02\x02" +
		"\u01A6\u01A8\x05D#\x02\u01A7\u01A5\x03\x02\x02\x02\u01A8\u01AB\x03\x02" +
		"\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA" +
		"C\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01AE\x05\x0E\b\x02" +
		"\u01AD\u01AF\x075\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03" +
		"\x02\x02\x02\u01AF\u01B2\x03\x02\x02\x02\u01B0\u01B1\x076\x02\x02\u01B1" +
		"\u01B3\x077\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02" +
		"\x02\u01B3E\x03\x02\x02\x02\u01B4\u01B5\x07\r\x02\x02\u01B5\u01B6\x05" +
		"4\x1B\x02\u01B6G\x03\x02\x02\x02\u01B7\u01B8\x07\x0E\x02\x02\u01B8\u01B9" +
		"\x054\x1B\x02\u01B9I\x03\x02\x02\x02\u01BA\u01BB\x056\x1C\x02\u01BBK\x03" +
		"\x02\x02\x02\u01BC\u01BD\x07\x0F\x02\x02\u01BD\u01C2\x05N(\x02\u01BE\u01BF" +
		"\x07\x1F\x02\x02\u01BF\u01C1\x05N(\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1" +
		"\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02" +
		"\x02\x02\u01C3M\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C6" +
		"\x05J&\x02\u01C6\u01C7\x07\x1E\x02\x02\u01C7\u01C8\x052\x1A\x02\u01C8" +
		"O\x03\x02\x02\x02\u01C9\u01CA\x07\x03\x02\x02\u01CA\u01CB\x054\x1B\x02" +
		"\u01CB\u01CD\x05`1\x02\u01CC\u01CE\x05T+\x02\u01CD\u01CC\x03\x02\x02\x02" +
		"\u01CD\u01CE\x03\x02\x02\x02\u01CEQ\x03\x02\x02\x02\u01CF\u01D0\x07\x04" +
		"\x02\x02\u01D0\u01D1\x054\x1B\x02\u01D1\u01D2\x05`1\x02\u01D2S\x03\x02" +
		"\x02\x02\u01D3\u01D8\x05V,\x02\u01D4\u01D5\x07\x1F\x02\x02\u01D5\u01D7" +
		"\x05V,\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8" +
		"\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9U\x03\x02\x02" +
		"\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DC\x056\x1C\x02\u01DC\u01DD" +
		"\x07\x1E\x02\x02\u01DD\u01DE\x05<\x1F\x02\u01DEW\x03\x02\x02\x02\u01DF" +
		"\u01E0\x07.\x02\x02\u01E0Y\x03\x02\x02\x02\u01E1\u01E4\x07\x1A\x02\x02" +
		"\u01E2\u01E4\x07\x19\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E2\x03" +
		"\x02\x02\x02\u01E4[\x03\x02\x02\x02\u01E5\u01E6\x07\x1A\x02\x02\u01E6" +
		"]\x03\x02\x02\x02\u01E7\u01E8\x07\x19\x02\x02\u01E8_\x03\x02\x02\x02\u01E9" +
		"\u01EA\x07\x18\x02\x02\u01EAa\x03\x02\x02\x02\u01EB\u01EC\x07/\x02\x02" +
		"\u01ECc\x03\x02\x02\x02\u01ED\u01EE\x07\x06\x02\x02\u01EE\u01EF\x05f4" +
		"\x02\u01EFe\x03\x02\x02\x02\u01F0\u01F1\x07\"\x02\x02\u01F1\u01F2\x05" +
		"\x04\x03\x02\u01F2\u01F3\x07#\x02\x02\u01F3g\x03\x02\x02\x02\u01F4\u01F5" +
		"\x07\x10\x02\x02\u01F5\u01F9\x07,\x02\x02\u01F6\u01F7\x07\x10\x02\x02" +
		"\u01F7\u01F9\x07-\x02\x02\u01F8\u01F4\x03\x02\x02\x02\u01F8\u01F6\x03" +
		"\x02\x02\x02\u01F9i\x03\x02\x02\x021u|\x88\x9B\xA4\xB0\xB3\xB7\xBD\xC5" +
		"\xC7\xCC\xD3\xD8\xDC\xE9\xEC\xF7\xFA\u0104\u010C\u010E\u011E\u0121\u0125" +
		"\u012F\u0137\u0141\u0149\u014D\u0153\u015D\u0164\u016C\u017F\u018A\u0195" +
		"\u019A\u019E\u01A9\u01AE\u01B2\u01C2\u01CD\u01D8\u01E3\u01F8";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!esql_parser.__ATN) {
			esql_parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(esql_parser._serializedATN));
		}

		return esql_parser.__ATN;
	}

}

export class SingleStatementContext extends ParserRuleContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public EOF(): TerminalNode { return this.getToken(esql_parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_singleStatement; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSingleStatement) {
			listener.enterSingleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSingleStatement) {
			listener.exitSingleStatement(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_query; }
	public copyFrom(ctx: QueryContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleCommandQueryContext extends QueryContext {
	public sourceCommand(): SourceCommandContext {
		return this.getRuleContext(0, SourceCommandContext);
	}
	constructor(ctx: QueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSingleCommandQuery) {
			listener.enterSingleCommandQuery(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSingleCommandQuery) {
			listener.exitSingleCommandQuery(this);
		}
	}
}
export class CompositeQueryContext extends QueryContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public PIPE(): TerminalNode { return this.getToken(esql_parser.PIPE, 0); }
	public processingCommand(): ProcessingCommandContext {
		return this.getRuleContext(0, ProcessingCommandContext);
	}
	constructor(ctx: QueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterCompositeQuery) {
			listener.enterCompositeQuery(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitCompositeQuery) {
			listener.exitCompositeQuery(this);
		}
	}
}


export class SourceCommandContext extends ParserRuleContext {
	public explainCommand(): ExplainCommandContext | undefined {
		return this.tryGetRuleContext(0, ExplainCommandContext);
	}
	public fromCommand(): FromCommandContext | undefined {
		return this.tryGetRuleContext(0, FromCommandContext);
	}
	public rowCommand(): RowCommandContext | undefined {
		return this.tryGetRuleContext(0, RowCommandContext);
	}
	public showCommand(): ShowCommandContext | undefined {
		return this.tryGetRuleContext(0, ShowCommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_sourceCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSourceCommand) {
			listener.enterSourceCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSourceCommand) {
			listener.exitSourceCommand(this);
		}
	}
}


export class ProcessingCommandContext extends ParserRuleContext {
	public evalCommand(): EvalCommandContext | undefined {
		return this.tryGetRuleContext(0, EvalCommandContext);
	}
	public limitCommand(): LimitCommandContext | undefined {
		return this.tryGetRuleContext(0, LimitCommandContext);
	}
	public projectCommand(): ProjectCommandContext | undefined {
		return this.tryGetRuleContext(0, ProjectCommandContext);
	}
	public renameCommand(): RenameCommandContext | undefined {
		return this.tryGetRuleContext(0, RenameCommandContext);
	}
	public dropCommand(): DropCommandContext | undefined {
		return this.tryGetRuleContext(0, DropCommandContext);
	}
	public dissectCommand(): DissectCommandContext | undefined {
		return this.tryGetRuleContext(0, DissectCommandContext);
	}
	public grokCommand(): GrokCommandContext | undefined {
		return this.tryGetRuleContext(0, GrokCommandContext);
	}
	public sortCommand(): SortCommandContext | undefined {
		return this.tryGetRuleContext(0, SortCommandContext);
	}
	public statsCommand(): StatsCommandContext | undefined {
		return this.tryGetRuleContext(0, StatsCommandContext);
	}
	public whereCommand(): WhereCommandContext | undefined {
		return this.tryGetRuleContext(0, WhereCommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_processingCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterProcessingCommand) {
			listener.enterProcessingCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitProcessingCommand) {
			listener.exitProcessingCommand(this);
		}
	}
}


export class WhereCommandContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(esql_parser.WHERE, 0); }
	public whereBooleanExpression(): WhereBooleanExpressionContext {
		return this.getRuleContext(0, WhereBooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_whereCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterWhereCommand) {
			listener.enterWhereCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitWhereCommand) {
			listener.exitWhereCommand(this);
		}
	}
}


export class WhereBooleanExpressionContext extends ParserRuleContext {
	public _left: BooleanExpressionContext;
	public _operator: Token;
	public _right: BooleanExpressionContext;
	public NOT(): TerminalNode | undefined { return this.tryGetToken(esql_parser.NOT, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public regexBooleanExpression(): RegexBooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, RegexBooleanExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(esql_parser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(esql_parser.OR, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(esql_parser.IN, 0); }
	public LP(): TerminalNode | undefined { return this.tryGetToken(esql_parser.LP, 0); }
	public RP(): TerminalNode | undefined { return this.tryGetToken(esql_parser.RP, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	public WHERE_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(esql_parser.WHERE_FUNCTIONS, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public functionExpressionArgument(): FunctionExpressionArgumentContext[];
	public functionExpressionArgument(i: number): FunctionExpressionArgumentContext;
	public functionExpressionArgument(i?: number): FunctionExpressionArgumentContext | FunctionExpressionArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionExpressionArgumentContext);
		} else {
			return this.getRuleContext(i, FunctionExpressionArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_whereBooleanExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterWhereBooleanExpression) {
			listener.enterWhereBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitWhereBooleanExpression) {
			listener.exitWhereBooleanExpression(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	public _left: BooleanExpressionContext;
	public _operator: Token;
	public _right: BooleanExpressionContext;
	public NOT(): TerminalNode | undefined { return this.tryGetToken(esql_parser.NOT, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public valueExpression(): ValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, ValueExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(esql_parser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(esql_parser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_booleanExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterBooleanExpression) {
			listener.enterBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitBooleanExpression) {
			listener.exitBooleanExpression(this);
		}
	}
}


export class RegexBooleanExpressionContext extends ParserRuleContext {
	public _kind: Token;
	public _pattern: StringContext;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(esql_parser.LIKE, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(esql_parser.NOT, 0); }
	public RLIKE(): TerminalNode | undefined { return this.tryGetToken(esql_parser.RLIKE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_regexBooleanExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterRegexBooleanExpression) {
			listener.enterRegexBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitRegexBooleanExpression) {
			listener.exitRegexBooleanExpression(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	public operatorExpression(): OperatorExpressionContext | undefined {
		return this.tryGetRuleContext(0, OperatorExpressionContext);
	}
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_valueExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterValueExpression) {
			listener.enterValueExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitValueExpression) {
			listener.exitValueExpression(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public _left: OperatorExpressionContext;
	public _right: OperatorExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public operatorExpression(): OperatorExpressionContext[];
	public operatorExpression(i: number): OperatorExpressionContext;
	public operatorExpression(i?: number): OperatorExpressionContext | OperatorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorExpressionContext);
		} else {
			return this.getRuleContext(i, OperatorExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_comparison; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
}


export class MathFnContext extends ParserRuleContext {
	public functionIdentifier(): FunctionIdentifierContext {
		return this.getRuleContext(0, FunctionIdentifierContext);
	}
	public LP(): TerminalNode { return this.getToken(esql_parser.LP, 0); }
	public RP(): TerminalNode { return this.getToken(esql_parser.RP, 0); }
	public functionExpressionArgument(): FunctionExpressionArgumentContext[];
	public functionExpressionArgument(i: number): FunctionExpressionArgumentContext;
	public functionExpressionArgument(i?: number): FunctionExpressionArgumentContext | FunctionExpressionArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionExpressionArgumentContext);
		} else {
			return this.getRuleContext(i, FunctionExpressionArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_mathFn; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterMathFn) {
			listener.enterMathFn(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitMathFn) {
			listener.exitMathFn(this);
		}
	}
}


export class MathEvalFnContext extends ParserRuleContext {
	public mathFunctionIdentifier(): MathFunctionIdentifierContext {
		return this.getRuleContext(0, MathFunctionIdentifierContext);
	}
	public LP(): TerminalNode { return this.getToken(esql_parser.LP, 0); }
	public RP(): TerminalNode { return this.getToken(esql_parser.RP, 0); }
	public mathFunctionExpressionArgument(): MathFunctionExpressionArgumentContext[];
	public mathFunctionExpressionArgument(i: number): MathFunctionExpressionArgumentContext;
	public mathFunctionExpressionArgument(i?: number): MathFunctionExpressionArgumentContext | MathFunctionExpressionArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MathFunctionExpressionArgumentContext);
		} else {
			return this.getRuleContext(i, MathFunctionExpressionArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_mathEvalFn; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterMathEvalFn) {
			listener.enterMathEvalFn(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitMathEvalFn) {
			listener.exitMathEvalFn(this);
		}
	}
}


export class OperatorExpressionContext extends ParserRuleContext {
	public _left: OperatorExpressionContext;
	public _operator: Token;
	public _right: OperatorExpressionContext;
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public mathFn(): MathFnContext | undefined {
		return this.tryGetRuleContext(0, MathFnContext);
	}
	public mathEvalFn(): MathEvalFnContext | undefined {
		return this.tryGetRuleContext(0, MathEvalFnContext);
	}
	public operatorExpression(): OperatorExpressionContext[];
	public operatorExpression(i: number): OperatorExpressionContext;
	public operatorExpression(i?: number): OperatorExpressionContext | OperatorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorExpressionContext);
		} else {
			return this.getRuleContext(i, OperatorExpressionContext);
		}
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(esql_parser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(esql_parser.PLUS, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(esql_parser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(esql_parser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(esql_parser.PERCENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_operatorExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterOperatorExpression) {
			listener.enterOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitOperatorExpression) {
			listener.exitOperatorExpression(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public LP(): TerminalNode | undefined { return this.tryGetToken(esql_parser.LP, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public RP(): TerminalNode | undefined { return this.tryGetToken(esql_parser.RP, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
}


export class RowCommandContext extends ParserRuleContext {
	public ROW(): TerminalNode { return this.getToken(esql_parser.ROW, 0); }
	public fields(): FieldsContext {
		return this.getRuleContext(0, FieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_rowCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterRowCommand) {
			listener.enterRowCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitRowCommand) {
			listener.exitRowCommand(this);
		}
	}
}


export class FieldsContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_fields; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterFields) {
			listener.enterFields(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitFields) {
			listener.exitFields(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public userVariable(): UserVariableContext | undefined {
		return this.tryGetRuleContext(0, UserVariableContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(esql_parser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_field; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


export class UserVariableContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_userVariable; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterUserVariable) {
			listener.enterUserVariable(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitUserVariable) {
			listener.exitUserVariable(this);
		}
	}
}


export class FromCommandContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(esql_parser.FROM, 0); }
	public sourceIdentifier(): SourceIdentifierContext[];
	public sourceIdentifier(i: number): SourceIdentifierContext;
	public sourceIdentifier(i?: number): SourceIdentifierContext | SourceIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceIdentifierContext);
		} else {
			return this.getRuleContext(i, SourceIdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_fromCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterFromCommand) {
			listener.enterFromCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitFromCommand) {
			listener.exitFromCommand(this);
		}
	}
}


export class EvalCommandContext extends ParserRuleContext {
	public EVAL(): TerminalNode { return this.getToken(esql_parser.EVAL, 0); }
	public fields(): FieldsContext {
		return this.getRuleContext(0, FieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_evalCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterEvalCommand) {
			listener.enterEvalCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitEvalCommand) {
			listener.exitEvalCommand(this);
		}
	}
}


export class StatsCommandContext extends ParserRuleContext {
	public STATS(): TerminalNode { return this.getToken(esql_parser.STATS, 0); }
	public fields(): FieldsContext | undefined {
		return this.tryGetRuleContext(0, FieldsContext);
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(esql_parser.BY, 0); }
	public qualifiedNames(): QualifiedNamesContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNamesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_statsCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterStatsCommand) {
			listener.enterStatsCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitStatsCommand) {
			listener.exitStatsCommand(this);
		}
	}
}


export class SourceIdentifierContext extends ParserRuleContext {
	public SRC_UNQUOTED_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(esql_parser.SRC_UNQUOTED_IDENTIFIER, 0); }
	public SRC_QUOTED_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(esql_parser.SRC_QUOTED_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_sourceIdentifier; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSourceIdentifier) {
			listener.enterSourceIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSourceIdentifier) {
			listener.exitSourceIdentifier(this);
		}
	}
}


export class FunctionExpressionArgumentContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_functionExpressionArgument; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterFunctionExpressionArgument) {
			listener.enterFunctionExpressionArgument(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitFunctionExpressionArgument) {
			listener.exitFunctionExpressionArgument(this);
		}
	}
}


export class MathFunctionExpressionArgumentContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public operatorExpression(): OperatorExpressionContext | undefined {
		return this.tryGetRuleContext(0, OperatorExpressionContext);
	}
	public DATE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(esql_parser.DATE_LITERAL, 0); }
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_mathFunctionExpressionArgument; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterMathFunctionExpressionArgument) {
			listener.enterMathFunctionExpressionArgument(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitMathFunctionExpressionArgument) {
			listener.exitMathFunctionExpressionArgument(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.DOT);
		} else {
			return this.getToken(esql_parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
}


export class QualifiedNamesContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_qualifiedNames; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterQualifiedNames) {
			listener.enterQualifiedNames(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitQualifiedNames) {
			listener.exitQualifiedNames(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public UNQUOTED_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(esql_parser.UNQUOTED_IDENTIFIER, 0); }
	public QUOTED_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(esql_parser.QUOTED_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_identifier; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


export class MathFunctionIdentifierContext extends ParserRuleContext {
	public MATH_FUNCTION(): TerminalNode { return this.getToken(esql_parser.MATH_FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_mathFunctionIdentifier; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterMathFunctionIdentifier) {
			listener.enterMathFunctionIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitMathFunctionIdentifier) {
			listener.exitMathFunctionIdentifier(this);
		}
	}
}


export class FunctionIdentifierContext extends ParserRuleContext {
	public UNARY_FUNCTION(): TerminalNode { return this.getToken(esql_parser.UNARY_FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_functionIdentifier; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterFunctionIdentifier) {
			listener.enterFunctionIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitFunctionIdentifier) {
			listener.exitFunctionIdentifier(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public NULL(): TerminalNode | undefined { return this.tryGetToken(esql_parser.NULL, 0); }
	public numericValue(): NumericValueContext[];
	public numericValue(i: number): NumericValueContext;
	public numericValue(i?: number): NumericValueContext | NumericValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericValueContext);
		} else {
			return this.getRuleContext(i, NumericValueContext);
		}
	}
	public booleanValue(): BooleanValueContext[];
	public booleanValue(i: number): BooleanValueContext;
	public booleanValue(i?: number): BooleanValueContext | BooleanValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanValueContext);
		} else {
			return this.getRuleContext(i, BooleanValueContext);
		}
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public OPENING_BRACKET(): TerminalNode | undefined { return this.tryGetToken(esql_parser.OPENING_BRACKET, 0); }
	public CLOSING_BRACKET(): TerminalNode | undefined { return this.tryGetToken(esql_parser.CLOSING_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_constant; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


export class NumericValueContext extends ParserRuleContext {
	public decimalValue(): DecimalValueContext | undefined {
		return this.tryGetRuleContext(0, DecimalValueContext);
	}
	public integerValue(): IntegerValueContext | undefined {
		return this.tryGetRuleContext(0, IntegerValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_numericValue; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterNumericValue) {
			listener.enterNumericValue(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitNumericValue) {
			listener.exitNumericValue(this);
		}
	}
}


export class LimitCommandContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(esql_parser.LIMIT, 0); }
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(esql_parser.INTEGER_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_limitCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterLimitCommand) {
			listener.enterLimitCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitLimitCommand) {
			listener.exitLimitCommand(this);
		}
	}
}


export class SortCommandContext extends ParserRuleContext {
	public SORT(): TerminalNode { return this.getToken(esql_parser.SORT, 0); }
	public orderExpression(): OrderExpressionContext[];
	public orderExpression(i: number): OrderExpressionContext;
	public orderExpression(i?: number): OrderExpressionContext | OrderExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderExpressionContext);
		} else {
			return this.getRuleContext(i, OrderExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_sortCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSortCommand) {
			listener.enterSortCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSortCommand) {
			listener.exitSortCommand(this);
		}
	}
}


export class OrderExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public ORDERING(): TerminalNode | undefined { return this.tryGetToken(esql_parser.ORDERING, 0); }
	public NULLS_ORDERING(): TerminalNode | undefined { return this.tryGetToken(esql_parser.NULLS_ORDERING, 0); }
	public NULLS_ORDERING_DIRECTION(): TerminalNode | undefined { return this.tryGetToken(esql_parser.NULLS_ORDERING_DIRECTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_orderExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterOrderExpression) {
			listener.enterOrderExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitOrderExpression) {
			listener.exitOrderExpression(this);
		}
	}
}


export class ProjectCommandContext extends ParserRuleContext {
	public PROJECT(): TerminalNode { return this.getToken(esql_parser.PROJECT, 0); }
	public qualifiedNames(): QualifiedNamesContext {
		return this.getRuleContext(0, QualifiedNamesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_projectCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterProjectCommand) {
			listener.enterProjectCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitProjectCommand) {
			listener.exitProjectCommand(this);
		}
	}
}


export class DropCommandContext extends ParserRuleContext {
	public DROP(): TerminalNode { return this.getToken(esql_parser.DROP, 0); }
	public qualifiedNames(): QualifiedNamesContext {
		return this.getRuleContext(0, QualifiedNamesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_dropCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterDropCommand) {
			listener.enterDropCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitDropCommand) {
			listener.exitDropCommand(this);
		}
	}
}


export class RenameVariableContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_renameVariable; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterRenameVariable) {
			listener.enterRenameVariable(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitRenameVariable) {
			listener.exitRenameVariable(this);
		}
	}
}


export class RenameCommandContext extends ParserRuleContext {
	public RENAME(): TerminalNode { return this.getToken(esql_parser.RENAME, 0); }
	public renameClause(): RenameClauseContext[];
	public renameClause(i: number): RenameClauseContext;
	public renameClause(i?: number): RenameClauseContext | RenameClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RenameClauseContext);
		} else {
			return this.getRuleContext(i, RenameClauseContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_renameCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterRenameCommand) {
			listener.enterRenameCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitRenameCommand) {
			listener.exitRenameCommand(this);
		}
	}
}


export class RenameClauseContext extends ParserRuleContext {
	public renameVariable(): RenameVariableContext {
		return this.getRuleContext(0, RenameVariableContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(esql_parser.ASSIGN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_renameClause; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterRenameClause) {
			listener.enterRenameClause(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitRenameClause) {
			listener.exitRenameClause(this);
		}
	}
}


export class DissectCommandContext extends ParserRuleContext {
	public DISSECT(): TerminalNode { return this.getToken(esql_parser.DISSECT, 0); }
	public qualifiedNames(): QualifiedNamesContext {
		return this.getRuleContext(0, QualifiedNamesContext);
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public commandOptions(): CommandOptionsContext | undefined {
		return this.tryGetRuleContext(0, CommandOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_dissectCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterDissectCommand) {
			listener.enterDissectCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitDissectCommand) {
			listener.exitDissectCommand(this);
		}
	}
}


export class GrokCommandContext extends ParserRuleContext {
	public GROK(): TerminalNode { return this.getToken(esql_parser.GROK, 0); }
	public qualifiedNames(): QualifiedNamesContext {
		return this.getRuleContext(0, QualifiedNamesContext);
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_grokCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterGrokCommand) {
			listener.enterGrokCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitGrokCommand) {
			listener.exitGrokCommand(this);
		}
	}
}


export class CommandOptionsContext extends ParserRuleContext {
	public commandOption(): CommandOptionContext[];
	public commandOption(i: number): CommandOptionContext;
	public commandOption(i?: number): CommandOptionContext | CommandOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandOptionContext);
		} else {
			return this.getRuleContext(i, CommandOptionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_commandOptions; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterCommandOptions) {
			listener.enterCommandOptions(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitCommandOptions) {
			listener.exitCommandOptions(this);
		}
	}
}


export class CommandOptionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(esql_parser.ASSIGN, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_commandOption; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterCommandOption) {
			listener.enterCommandOption(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitCommandOption) {
			listener.exitCommandOption(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public BOOLEAN_VALUE(): TerminalNode { return this.getToken(esql_parser.BOOLEAN_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_LITERAL(): TerminalNode { return this.getToken(esql_parser.DECIMAL_LITERAL, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(esql_parser.INTEGER_LITERAL, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
}


export class DecimalValueContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode { return this.getToken(esql_parser.DECIMAL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_decimalValue; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterDecimalValue) {
			listener.enterDecimalValue(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitDecimalValue) {
			listener.exitDecimalValue(this);
		}
	}
}


export class IntegerValueContext extends ParserRuleContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(esql_parser.INTEGER_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_integerValue; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterIntegerValue) {
			listener.enterIntegerValue(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitIntegerValue) {
			listener.exitIntegerValue(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(esql_parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_string; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public COMPARISON_OPERATOR(): TerminalNode { return this.getToken(esql_parser.COMPARISON_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
}


export class ExplainCommandContext extends ParserRuleContext {
	public EXPLAIN(): TerminalNode { return this.getToken(esql_parser.EXPLAIN, 0); }
	public subqueryExpression(): SubqueryExpressionContext {
		return this.getRuleContext(0, SubqueryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_explainCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterExplainCommand) {
			listener.enterExplainCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitExplainCommand) {
			listener.exitExplainCommand(this);
		}
	}
}


export class SubqueryExpressionContext extends ParserRuleContext {
	public OPENING_BRACKET(): TerminalNode { return this.getToken(esql_parser.OPENING_BRACKET, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public CLOSING_BRACKET(): TerminalNode { return this.getToken(esql_parser.CLOSING_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_subqueryExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSubqueryExpression) {
			listener.exitSubqueryExpression(this);
		}
	}
}


export class ShowCommandContext extends ParserRuleContext {
	public SHOW(): TerminalNode { return this.getToken(esql_parser.SHOW, 0); }
	public INFO(): TerminalNode | undefined { return this.tryGetToken(esql_parser.INFO, 0); }
	public FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(esql_parser.FUNCTIONS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_showCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterShowCommand) {
			listener.enterShowCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitShowCommand) {
			listener.exitShowCommand(this);
		}
	}
}



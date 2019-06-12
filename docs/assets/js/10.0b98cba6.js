(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{220:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("br"),a("br")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://www.npmjs.com/package/trilogy"}},[a("img",{attrs:{src:"https://flat.badgen.net/npm/v/trilogy",alt:"Version"}})]),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/trilogy"}},[a("img",{attrs:{src:"https://flat.badgen.net/npm/license/trilogy",alt:"License"}})]),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/citycide/trilogy"}},[a("img",{attrs:{src:"https://flat.badgen.net/travis/citycide/trilogy",alt:"Travis CI"}})]),t._v(" "),a("a",{attrs:{href:"http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"}},[a("img",{attrs:{src:"https://flat.badgen.net/badge/written%20in/TypeScript/294E80",alt:"Written in TypeScript"}})]),t._v(" "),a("a",{attrs:{href:"https://standardjs.com"}},[a("img",{attrs:{src:"https://flat.badgen.net/badge/code%20style/standard/green",alt:"JavaScript Standard Style"}})]),t._v(" "),a("a",{attrs:{href:"https://gitter.im/citycide/trilogy"}},[a("img",{attrs:{src:"https://flat.badgen.net/badge/chat/on%20gitter/green",alt:"Gitter"}})])]),t._v(" "),a("p",[a("br"),a("br")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("trilogy")])]),t._v(" is a simple Promise-based wrapper for SQLite databases.\nIt supports both the native C++ "),a("a",{attrs:{href:"https://github.com/mapbox/sqlite3",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("sqlite3")]),a("OutboundLink")],1),t._v(" driver and the pure\nJavaScript "),a("a",{attrs:{href:"https://github.com/kripken/sql.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("sql.js")]),a("OutboundLink")],1),t._v(" backend — compile natively for speed\nwhen you need it, or use "),a("code",[t._v("sql.js")]),t._v(" headache-free in cross-platform environments\nand "),a("a",{attrs:{href:"https://github.com/electron/electron",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron"),a("OutboundLink")],1),t._v(" apps.")]),t._v(" "),a("p",[t._v("It's not an ORM and isn't intended to be one — it doesn't have any\nrelationship features. Instead it focuses on providing a simple, clear API\nthat's influenced more by "),a("a",{attrs:{href:"https://mongoosejs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mongoose"),a("OutboundLink")],1),t._v(" than by SQL.")]),t._v(" "),a("hr"),t._v(" "),a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"#features"}},[t._v("features")]),t._v("\n  ⋅\n  "),a("a",{attrs:{href:"#quick-start"}},[t._v("quick start")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[t._v("#")]),t._v(" features")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("🔗 "),a("strong",[t._v("automatically casts data between JavaScript & SQLite types")])]),t._v(" "),a("p",[t._v("Define schemas with types like "),a("code",[t._v("String")]),t._v(", "),a("code",[t._v("Date")]),t._v(", or "),a("code",[t._v("'increments'")]),t._v(" —\ntrilogy will handle all the type-casting involved to map accurately\nbetween JavaScript and the underlying SQLite database.")])]),t._v(" "),a("li",[a("p",[t._v("🔋 "),a("strong",[t._v("powered by the "),a("a",{attrs:{href:"https://github.com/tgriesser/knex",target:"_blank",rel:"noopener noreferrer"}},[t._v("knex"),a("OutboundLink")],1),t._v(" query builder")])]),t._v(" "),a("p",[t._v("trilogy uses knex internally to build its queries, but it's also exposed so\nyou can use it to build your own. No need to mess with ridiculous multi-line\nstrings.")])]),t._v(" "),a("li",[a("p",[t._v("🔩 "),a("strong",[t._v("supports multiple swappable backends ( "),a("em",[t._v("plus in-memory storage")]),t._v(" )")])]),t._v(" "),a("p",[t._v("Both the native "),a("a",{attrs:{href:"https://github.com/mapbox/sqlite3",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("sqlite3")]),a("OutboundLink")],1),t._v(" module "),a("em",[t._v("and")]),t._v(" "),a("a",{attrs:{href:"https://github.com/kripken/sql.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("sql.js")]),a("OutboundLink")],1),t._v(" (pure\nJavaScript!) are supported. There is also memory-only storage for fast,\nunpersisted data handling, which is great for tests and performance critical\nsituations.")]),t._v(" "),a("p",[t._v("You can even swap the backend after you've started, with no changes to the\nrest of your code!")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/reference/backends.html"}},[a("em",[a("strong",[t._v("learn more")])])])],1)]),t._v(" "),a("li",[a("p",[t._v("👮 "),a("strong",[t._v("written in "),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("trilogy is written in and provides a first-class experience for TypeScript.")])]),t._v(" "),a("li",[a("p",[t._v("🔌 "),a("strong",[t._v("lifecycle hooks")])]),t._v(" "),a("p",[t._v("Any number of hooks (aka subscribers or listeners) can be attached at several\npoints in the lifecycle — for example "),a("code",[t._v("onQuery")]),t._v(", "),a("code",[t._v("beforeCreate")]),t._v(", "),a("code",[t._v("afterUpdate")]),t._v(".\nThese are useful for debugging and extensibility.")])]),t._v(" "),a("li",[a("p",[t._v("💞 "),a("strong",[t._v("perfect for "),a("a",{attrs:{href:"https://github.com/electron/electron",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron"),a("OutboundLink")],1),t._v(" & "),a("a",{attrs:{href:"https://github.com/nwjs/nw.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("NW.js"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Compiling the "),a("code",[t._v("sqlite3")]),t._v(" module for all the platforms you target with Electron\nor NW.js isn't always easy, so you can easily use trilogy with the "),a("code",[t._v("sql.js")]),t._v("\nbackend, which doesn't need to be compiled at all!")])])]),t._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[t._v("#")]),t._v(" quick start")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("yarn add trilogy sqlite3 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or sql.js")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" connect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trilogy'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':memory:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" games "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'games'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    genre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type shorthand")]),t._v("\n    released"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    awards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'increments'")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// special type, primary key")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" games"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Overwatch'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    genre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FPS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    released"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'May 23, 2016'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    awards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Game of the Year'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Best Multiplayer Game'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Best ESports Game'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" overwatch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" games"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Overwatch'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("overwatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("awards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 'Best Multiplayer Game'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Looking for a more "),a("router-link",{attrs:{to:"/guide/"}},[t._v("thorough guide")]),t._v("?")],1)])},[],!1,null,null,null);s.default=n.exports}}]);
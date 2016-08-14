/*! Browser bundle of nunjucks 2.4.2 (slim, only works with precompiled templates) */

define("datamanager",["exports"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();t.DataManager=function(){function t(){e(this,t)}return r(t,null,[{key:"getData",value:function(){var t=new Promise(function(t,e){var r=new XMLHttpRequest;r.open("GET","https://pb-api.herokuapp.com/bars"),r.onload=function(){if(200==r.status)try{var n=JSON.parse(r.responseText);t(n)}catch(i){e(Error("Invalid JSON"))}else e(Error(r.statusText))},r.send(null)});return t}}]),t}()});var nunjucks=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";var n=r(1),i=r(2),o=r(11),s=r(3),a=r(3);t.exports={},t.exports.Environment=i.Environment,t.exports.Template=i.Template,t.exports.Loader=o,t.exports.FileSystemLoader=s.FileSystemLoader,t.exports.PrecompiledLoader=s.PrecompiledLoader,t.exports.WebLoader=s.WebLoader,t.exports.compiler=r(3),t.exports.parser=r(3),t.exports.lexer=r(3),t.exports.runtime=r(8),t.exports.lib=n,t.exports.nodes=r(3),t.exports.installJinjaCompat=r(12);var u;t.exports.configure=function(t,e){e=e||{},n.isObject(t)&&(e=t,t=null);var r;return s.FileSystemLoader?r=new s.FileSystemLoader(t,{watch:e.watch,noCache:e.noCache}):s.WebLoader&&(r=new s.WebLoader(t,{useCache:e.web&&e.web.useCache,async:e.web&&e.web.async})),u=new i.Environment(r,e),e&&e.express&&u.express(e.express),u},t.exports.compile=function(e,r,n,i){return u||t.exports.configure(),new t.exports.Template(e,r,n,i)},t.exports.render=function(e,r,n){return u||t.exports.configure(),u.render(e,r,n)},t.exports.renderString=function(e,r,n){return u||t.exports.configure(),u.renderString(e,r,n)},a&&(t.exports.precompile=a.precompile,t.exports.precompileString=a.precompileString)},function(t,e){"use strict";var r=Array.prototype,n=Object.prototype,i={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},o=/[&"'<>]/g,s=function(t){return i[t]},e=t.exports={};e.prettifyError=function(t,r,n){if(n.Update||(n=new e.TemplateError(n)),n.Update(t),!r){var i=n;n=new Error(i.message),n.name=i.name}return n},e.TemplateError=function(t,e,r){var n=this;if(t instanceof Error){n=t,t=t.name+": "+t.message;try{n.name=""}catch(i){n=this}}else Error.captureStackTrace&&Error.captureStackTrace(n);return n.name="Template render error",n.message=t,n.lineno=e,n.colno=r,n.firstUpdate=!0,n.Update=function(t){var e="("+(t||"unknown path")+")";return this.firstUpdate&&(this.lineno&&this.colno?e+=" [Line "+this.lineno+", Column "+this.colno+"]":this.lineno&&(e+=" [Line "+this.lineno+"]")),e+="\n ",this.firstUpdate&&(e+=" "),this.message=e+(this.message||""),this.firstUpdate=!1,this},n},e.TemplateError.prototype=Error.prototype,e.escape=function(t){return t.replace(o,s)},e.isFunction=function(t){return"[object Function]"===n.toString.call(t)},e.isArray=Array.isArray||function(t){return"[object Array]"===n.toString.call(t)},e.isString=function(t){return"[object String]"===n.toString.call(t)},e.isObject=function(t){return"[object Object]"===n.toString.call(t)},e.groupBy=function(t,r){for(var n={},i=e.isFunction(r)?r:function(t){return t[r]},o=0;o<t.length;o++){var s=t[o],a=i(s,o);(n[a]||(n[a]=[])).push(s)}return n},e.toArray=function(t){return Array.prototype.slice.call(t)},e.without=function(t){var r=[];if(!t)return r;for(var n=-1,i=t.length,o=e.toArray(arguments).slice(1);++n<i;)-1===e.indexOf(o,t[n])&&r.push(t[n]);return r},e.extend=function(t,e){for(var r in e)t[r]=e[r];return t},e.repeat=function(t,e){for(var r="",n=0;e>n;n++)r+=t;return r},e.each=function(t,e,n){if(null!=t)if(r.each&&t.each===r.each)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,o=t.length;o>i;i++)e.call(n,t[i],i,t)},e.map=function(t,e){var n=[];if(null==t)return n;if(r.map&&t.map===r.map)return t.map(e);for(var i=0;i<t.length;i++)n[n.length]=e(t[i],i);return t.length===+t.length&&(n.length=t.length),n},e.asyncIter=function(t,e,r){function n(){i++,i<t.length?e(t[i],i,n,r):r()}var i=-1;n()},e.asyncFor=function(t,r,n){function i(){a++;var e=o[a];s>a?r(e,t[e],a,s,i):n()}var o=e.keys(t),s=o.length,a=-1;i()},e.indexOf=Array.prototype.indexOf?function(t,e,r){return Array.prototype.indexOf.call(t,e,r)}:function(t,e,r){var n=this.length>>>0;for(r=+r||0,Math.abs(r)===1/0&&(r=0),0>r&&(r+=n,0>r&&(r=0));n>r;r++)if(t[r]===e)return r;return-1},Array.prototype.map||(Array.prototype.map=function(){throw new Error("map is unimplemented for this js engine")}),e.keys=function(t){if(Object.prototype.keys)return t.keys();var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e},e.inOperator=function(t,r){if(e.isArray(r))return-1!==e.indexOf(r,t);if(e.isObject(r))return t in r;if(e.isString(r))return-1!==r.indexOf(t);throw new Error('Cannot use "in" operator to search for "'+t+'" in unexpected types.')}},function(t,e,r){"use strict";function n(t,e,r){s(function(){t(e,r)})}var i,o=r(3),s=r(4),a=r(1),u=r(6),c=r(3),l=r(7),f=r(3),h=r(8),p=r(9),v=h.Frame;f.PrecompiledLoader=r(10);var d=u.extend({init:function(t,e){e=this.opts=e||{},this.opts.dev=!!e.dev,this.opts.autoescape=null!=e.autoescape?e.autoescape:!0,this.opts.throwOnUndefined=!!e.throwOnUndefined,this.opts.trimBlocks=!!e.trimBlocks,this.opts.lstripBlocks=!!e.lstripBlocks,this.loaders=[],t?this.loaders=a.isArray(t)?t:[t]:f.FileSystemLoader?this.loaders=[new f.FileSystemLoader("views")]:f.WebLoader&&(this.loaders=[new f.WebLoader("/views")]),window.nunjucksPrecompiled&&this.loaders.unshift(new f.PrecompiledLoader(window.nunjucksPrecompiled)),this.initCache(),this.globals=p(),this.filters={},this.asyncFilters=[],this.extensions={},this.extensionsList=[];for(var r in l)this.addFilter(r,l[r])},initCache:function(){a.each(this.loaders,function(t){t.cache={},"function"==typeof t.on&&t.on("update",function(e){t.cache[e]=null})})},addExtension:function(t,e){return e._name=t,this.extensions[t]=e,this.extensionsList.push(e),this},removeExtension:function(t){var e=this.getExtension(t);e&&(this.extensionsList=a.without(this.extensionsList,e),delete this.extensions[t])},getExtension:function(t){return this.extensions[t]},hasExtension:function(t){return!!this.extensions[t]},addGlobal:function(t,e){return this.globals[t]=e,this},getGlobal:function(t){if("undefined"==typeof this.globals[t])throw new Error("global not found: "+t);return this.globals[t]},addFilter:function(t,e,r){var n=e;return r&&this.asyncFilters.push(t),this.filters[t]=n,this},getFilter:function(t){if(!this.filters[t])throw new Error("filter not found: "+t);return this.filters[t]},resolveTemplate:function(t,e,r){var n=t.isRelative&&e?t.isRelative(r):!1;return n&&t.resolve?t.resolve(e,r):r},getTemplate:function(t,e,r,n,o){var s=this,u=null;if(t&&t.raw&&(t=t.raw),a.isFunction(r)&&(o=r,r=null,e=e||!1),a.isFunction(e)&&(o=e,e=!1),t instanceof i)u=t;else{if("string"!=typeof t)throw new Error("template names must be a string: "+t);for(var c=0;c<this.loaders.length;c++){var l=this.resolveTemplate(this.loaders[c],r,t);if(u=this.loaders[c].cache[l])break}}if(!u){var f,h=this,p=function(r,s){if(s||r||n||(r=new Error("template not found: "+t)),r){if(!o)throw r;o(r)}else{var a;s?(a=new i(s.src,h,s.path,e),s.noCache||(s.loader.cache[t]=a)):a=new i("",h,"",e),o?o(null,a):f=a}};return a.asyncIter(this.loaders,function(e,n,i,o){function a(t,r){t?o(t):r?(r.loader=e,o(null,r)):i()}t=s.resolveTemplate(e,r,t),e.async?e.getSource(t,a):a(null,e.getSource(t))},p),f}return e&&u.compile(),o?void o(null,u):u},express:function(t){function e(t,e){if(this.name=t,this.path=t,this.defaultEngine=e.defaultEngine,this.ext=o.extname(t),!this.ext&&!this.defaultEngine)throw new Error("No default engine was specified and no extension was provided.");this.ext||(this.name+=this.ext=("."!==this.defaultEngine[0]?".":"")+this.defaultEngine)}var r=this;return e.prototype.render=function(t,e){r.render(this.name,t,e)},t.set("view",e),this},render:function(t,e,r){a.isFunction(e)&&(r=e,e=null);var i=null;return this.getTemplate(t,function(t,o){if(t&&r)n(r,t);else{if(t)throw t;i=o.render(e,r)}}),i},renderString:function(t,e,r,n){a.isFunction(r)&&(n=r,r={}),r=r||{};var o=new i(t,this,r.path);return o.render(e,n)}}),g=u.extend({init:function(t,e,r){this.env=r||new d,this.ctx={};for(var n in t)t.hasOwnProperty(n)&&(this.ctx[n]=t[n]);this.blocks={},this.exported=[];for(var i in e)this.addBlock(i,e[i])},lookup:function(t){return t in this.env.globals&&!(t in this.ctx)?this.env.globals[t]:this.ctx[t]},setVariable:function(t,e){this.ctx[t]=e},getVariables:function(){return this.ctx},addBlock:function(t,e){return this.blocks[t]=this.blocks[t]||[],this.blocks[t].push(e),this},getBlock:function(t){if(!this.blocks[t])throw new Error('unknown block "'+t+'"');return this.blocks[t][0]},getSuper:function(t,e,r,n,i,o){var s=a.indexOf(this.blocks[e]||[],r),u=this.blocks[e][s+1],c=this;if(-1===s||!u)throw new Error('no super block available for "'+e+'"');u(t,c,n,i,o)},addExport:function(t){this.exported.push(t)},getExported:function(){for(var t={},e=0;e<this.exported.length;e++){var r=this.exported[e];t[r]=this.ctx[r]}return t}});i=u.extend({init:function(t,e,r,n){if(this.env=e||new d,a.isObject(t))switch(t.type){case"code":this.tmplProps=t.obj;break;case"string":this.tmplStr=t.obj}else{if(!a.isString(t))throw new Error("src must be a string or an object describing the source");this.tmplStr=t}if(this.path=r,n){var i=this;try{i._compile()}catch(o){throw a.prettifyError(this.path,this.env.opts.dev,o)}}else this.compiled=!1},render:function(t,e,r){"function"==typeof t?(r=t,t={}):"function"==typeof e&&(r=e,e=null);var i=!0;e&&(i=!1);var o=this;try{o.compile()}catch(s){var u=a.prettifyError(this.path,this.env.opts.dev,s);if(r)return n(r,u);throw u}var c=new g(t||{},o.blocks,o.env),l=e?e.push(!0):new v;l.topLevel=!0;var f=null;return o.rootRenderFunc(o.env,c,l||new v,h,function(t,e){if(t&&(t=a.prettifyError(o.path,o.env.opts.dev,t)),r)i?n(r,t,e):r(t,e);else{if(t)throw t;f=e}}),f},getExported:function(t,e,r){"function"==typeof t&&(r=t,t={}),"function"==typeof e&&(r=e,e=null);try{this.compile()}catch(n){if(r)return r(n);throw n}var i=e?e.push():new v;i.topLevel=!0;var o=new g(t||{},this.blocks,this.env);this.rootRenderFunc(this.env,o,i,h,function(t){t?r(t,null):r(null,o.getExported())})},compile:function(){this.compiled||this._compile()},_compile:function(){var t;if(this.tmplProps)t=this.tmplProps;else{var e=c.compile(this.tmplStr,this.env.asyncFilters,this.env.extensionsList,this.path,this.env.opts),r=new Function(e);t=r()}this.blocks=this._getBlocks(t),this.rootRenderFunc=t.root,this.compiled=!0},_getBlocks:function(t){var e={};for(var r in t)"b_"===r.slice(0,2)&&(e[r.slice(2)]=t[r]);return e}}),t.exports={Environment:d,Template:i}},function(t,e){},function(t,e,r){"use strict";function n(){if(u.length)throw u.shift()}function i(t){var e;e=a.length?a.pop():new o,e.task=t,s(e)}function o(){this.task=null}var s=r(5),a=[],u=[],c=s.makeRequestCallFromTimer(n);t.exports=i,o.prototype.call=function(){try{this.task.call()}catch(t){i.onerror?i.onerror(t):(u.push(t),c())}finally{this.task=null,a[a.length]=this}}},function(t,e){(function(e){"use strict";function r(t){a.length||(s(),u=!0),a[a.length]=t}function n(){for(;c<a.length;){var t=c;if(c+=1,a[t].call(),c>l){for(var e=0,r=a.length-c;r>e;e++)a[e]=a[e+c];a.length-=c,c=0}}a.length=0,c=0,u=!1}function i(t){var e=1,r=new f(t),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){e=-e,n.data=e}}function o(t){return function(){function e(){clearTimeout(r),clearInterval(n),t()}var r=setTimeout(e,0),n=setInterval(e,50)}}t.exports=r;var s,a=[],u=!1,c=0,l=1024,f=e.MutationObserver||e.WebKitMutationObserver;s="function"==typeof f?i(n):o(n),r.requestFlush=s,r.makeRequestCallFromTimer=o}).call(e,function(){return this}())},function(t,e){"use strict";function r(t,e,n){var i=function(){};i.prototype=t.prototype;var o=new i,s=/xyz/.test(function(){xyz})?/\bparent\b/:/.*/;n=n||{};for(var a in n){var u=n[a],c=o[a];"function"==typeof c&&"function"==typeof u&&s.test(u)?o[a]=function(t,e){return function(){var r=this.parent;this.parent=e;var n=t.apply(this,arguments);return this.parent=r,n}}(u,c):o[a]=u}o.typename=e;var l=function(){o.init&&o.init.apply(this,arguments)};return l.prototype=o,l.prototype.constructor=l,l.extend=function(t,e){return"object"==typeof t&&(e=t,t="anonymous"),r(l,t,e)},l}t.exports=r(Object,"Object",{})},function(t,e,r){"use strict";function n(t,e){return null===t||void 0===t||t===!1?e:t}var i=r(1),o=r(8),s={abs:function(t){return Math.abs(t)},batch:function(t,e,r){var n,i=[],o=[];for(n=0;n<t.length;n++)n%e===0&&o.length&&(i.push(o),o=[]),o.push(t[n]);if(o.length){if(r)for(n=o.length;e>n;n++)o.push(r);i.push(o)}return i},capitalize:function(t){t=n(t,"");var e=t.toLowerCase();return o.copySafeness(t,e.charAt(0).toUpperCase()+e.slice(1))},center:function(t,e){if(t=n(t,""),e=e||80,t.length>=e)return t;var r=e-t.length,s=i.repeat(" ",r/2-r%2),a=i.repeat(" ",r/2);return o.copySafeness(t,s+t+a)},"default":function(t,e,r){return r?t?t:e:void 0!==t?t:e},dictsort:function(t,e,r){if(!i.isObject(t))throw new i.TemplateError("dictsort filter: val must be an object");var n=[];for(var o in t)n.push([o,t[o]]);var s;if(void 0===r||"key"===r)s=0;else{if("value"!==r)throw new i.TemplateError("dictsort filter: You can only sort by either key or value");s=1}return n.sort(function(t,r){var n=t[s],o=r[s];return e||(i.isString(n)&&(n=n.toUpperCase()),i.isString(o)&&(o=o.toUpperCase())),n>o?1:n===o?0:-1}),n},dump:function(t){return JSON.stringify(t)},escape:function(t){return"string"==typeof t?o.markSafe(i.escape(t)):t},safe:function(t){return o.markSafe(t)},first:function(t){return t[0]},groupby:function(t,e){return i.groupBy(t,e)},indent:function(t,e,r){if(t=n(t,""),""===t)return"";e=e||4;for(var s="",a=t.split("\n"),u=i.repeat(" ",e),c=0;c<a.length;c++)s+=0!==c||r?u+a[c]+"\n":a[c]+"\n";return o.copySafeness(t,s)},join:function(t,e,r){return e=e||"",r&&(t=i.map(t,function(t){return t[r]})),t.join(e)},last:function(t){return t[t.length-1]},length:function(t){var e=n(t,"");return void 0!==e?"function"==typeof Map&&e instanceof Map||"function"==typeof Set&&e instanceof Set?e.size:e.length:0},list:function(t){if(i.isString(t))return t.split("");if(i.isObject(t)){var e=[];if(Object.keys)e=Object.keys(t);else for(var r in t)e.push(r);return i.map(e,function(e){return{key:e,value:t[e]}})}if(i.isArray(t))return t;throw new i.TemplateError("list filter: type not iterable")},lower:function(t){return t=n(t,""),t.toLowerCase()},random:function(t){return t[Math.floor(Math.random()*t.length)]},rejectattr:function(t,e){return t.filter(function(t){return!t[e]})},selectattr:function(t,e){return t.filter(function(t){return!!t[e]})},replace:function(t,e,r,n){var i=t;if(e instanceof RegExp)return t.replace(e,r);"undefined"==typeof n&&(n=-1);var s="";if("number"==typeof e)e+="";else if("string"!=typeof e)return t;if("number"==typeof t&&(t+=""),"string"!=typeof t&&!(t instanceof o.SafeString))return t;if(""===e)return s=r+t.split("").join(r)+r,o.copySafeness(t,s);var a=t.indexOf(e);if(0===n||-1===a)return t;for(var u=0,c=0;a>-1&&(-1===n||n>c);)s+=t.substring(u,a)+r,u=a+e.length,c++,a=t.indexOf(e,u);return u<t.length&&(s+=t.substring(u)),o.copySafeness(i,s)},reverse:function(t){var e;return e=i.isString(t)?s.list(t):i.map(t,function(t){return t}),e.reverse(),i.isString(t)?o.copySafeness(t,e.join("")):e},round:function(t,e,r){e=e||0;var n,i=Math.pow(10,e);return n="ceil"===r?Math.ceil:"floor"===r?Math.floor:Math.round,n(t*i)/i},slice:function(t,e,r){for(var n=Math.floor(t.length/e),i=t.length%e,o=0,s=[],a=0;e>a;a++){var u=o+a*n;i>a&&o++;var c=o+(a+1)*n,l=t.slice(u,c);r&&a>=i&&l.push(r),s.push(l)}return s},sum:function(t,e,r){var n=0;"number"==typeof r&&(n+=r),e&&(t=i.map(t,function(t){return t[e]}));for(var o=0;o<t.length;o++)n+=t[o];return n},sort:o.makeMacro(["value","reverse","case_sensitive","attribute"],[],function(t,e,r,n){return t=i.map(t,function(t){return t}),t.sort(function(t,o){var s,a;return n?(s=t[n],a=o[n]):(s=t,a=o),!r&&i.isString(s)&&i.isString(a)&&(s=s.toLowerCase(),a=a.toLowerCase()),a>s?e?1:-1:s>a?e?-1:1:0}),t}),string:function(t){return o.copySafeness(t,t)},striptags:function(t,e){t=n(t,""),e=e||!1;var r=/<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi,i=s.trim(t.replace(r,"")),a="";return a=e?i.replace(/^ +| +$/gm,"").replace(/ +/g," ").replace(/(\r\n)/g,"\n").replace(/\n\n\n+/g,"\n\n"):i.replace(/\s+/gi," "),o.copySafeness(t,a)},title:function(t){t=n(t,"");for(var e=t.split(" "),r=0;r<e.length;r++)e[r]=s.capitalize(e[r]);return o.copySafeness(t,e.join(" "))},trim:function(t){return o.copySafeness(t,t.replace(/^\s*|\s*$/g,""))},truncate:function(t,e,r,i){var s=t;if(t=n(t,""),e=e||255,t.length<=e)return t;if(r)t=t.substring(0,e);else{var a=t.lastIndexOf(" ",e);-1===a&&(a=e),t=t.substring(0,a)}return t+=void 0!==i&&null!==i?i:"...",o.copySafeness(s,t)},upper:function(t){return t=n(t,""),t.toUpperCase()},urlencode:function(t){var e=encodeURIComponent;if(i.isString(t))return e(t);var r;if(i.isArray(t))r=t.map(function(t){return e(t[0])+"="+e(t[1])});else{r=[];for(var n in t)t.hasOwnProperty(n)&&r.push(e(n)+"="+e(t[n]))}return r.join("&")},urlize:function(t,e,r){isNaN(e)&&(e=1/0);var n=r===!0?' rel="nofollow"':"",i=/^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,o=/^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,s=/^https?:\/\/.*$/,a=/^www\./,u=/\.(?:org|net|com)(?:\:|\/|$)/,c=t.split(/(\s+)/).filter(function(t){return t&&t.length}).map(function(t){var r=t.match(i),c=r&&r[1]||t;return s.test(c)?'<a href="'+c+'"'+n+">"+c.substr(0,e)+"</a>":a.test(c)?'<a href="http://'+c+'"'+n+">"+c.substr(0,e)+"</a>":o.test(c)?'<a href="mailto:'+c+'">'+c+"</a>":u.test(c)?'<a href="http://'+c+'"'+n+">"+c.substr(0,e)+"</a>":t});return c.join("")},wordcount:function(t){t=n(t,"");var e=t?t.match(/\w+/g):null;return e?e.length:null},"float":function(t,e){var r=parseFloat(t);return isNaN(r)?e:r},"int":function(t,e){var r=parseInt(t,10);return isNaN(r)?e:r}};s.d=s["default"],s.e=s.escape,t.exports=s},function(t,e,r){"use strict";function n(t,e,r){return function(){var n,i,a=s(arguments),u=o(arguments);if(a>t.length){n=Array.prototype.slice.call(arguments,0,t.length);var c=Array.prototype.slice.call(arguments,n.length,a);for(i=0;i<c.length;i++)i<e.length&&(u[e[i]]=c[i]);n.push(u)}else if(a<t.length){for(n=Array.prototype.slice.call(arguments,0,a),i=a;i<t.length;i++){var l=t[i];n.push(u[l]),delete u[l]}n.push(u)}else n=arguments;return r.apply(this,n)}}function i(t){return t.__keywords=!0,t}function o(t){var e=t.length;if(e){var r=t[e-1];if(r&&r.hasOwnProperty("__keywords"))return r}return{}}function s(t){var e=t.length;if(0===e)return 0;var r=t[e-1];return r&&r.hasOwnProperty("__keywords")?e-1:e}function a(t){return"string"!=typeof t?t:(this.val=t,void(this.length=t.length))}function u(t,e){return t instanceof a?new a(e):e.toString()}function c(t){var e=typeof t;return"string"===e?new a(t):"function"!==e?t:function(){var e=t.apply(this,arguments);return"string"==typeof e?new a(e):e}}function l(t,e){return t=void 0!==t&&null!==t?t:"",e&&"string"==typeof t&&(t=m.escape(t)),t}function f(t,e,r){if(null===t||void 0===t)throw new m.TemplateError("attempted to output null or undefined value",e+1,r+1);return t}function h(t,e){return t=t||{},"function"==typeof t[e]?function(){return t[e].apply(t,arguments)}:t[e]}function p(t,e,r,n){if(!t)throw new Error("Unable to call `"+e+"`, which is undefined or falsey");if("function"!=typeof t)throw new Error("Unable to call `"+e+"`, which is not a function");return t.apply(r,n)}function v(t,e,r){var n=e.lookup(r);return void 0!==n&&null!==n?n:t.lookup(r)}function d(t,e,r){return t.lineno?t:new m.TemplateError(t,e,r)}function g(t,e,r,n){if(m.isArray(t)){var i=t.length;m.asyncIter(t,function(t,n,o){switch(e){case 1:r(t,n,i,o);break;case 2:r(t[0],t[1],n,i,o);break;case 3:r(t[0],t[1],t[2],n,i,o);break;default:t.push(n,o),r.apply(this,t)}},n)}else m.asyncFor(t,function(t,e,n,i,o){r(t,e,n,i,o)},n)}function y(t,e,r,n){function i(t,e){u++,a[t]=e,u===o&&n(null,a.join(""))}var o,s,a,u=0;if(m.isArray(t))if(o=t.length,a=new Array(o),0===o)n(null,"");else for(s=0;s<t.length;s++){var c=t[s];switch(e){case 1:r(c,s,o,i);break;case 2:r(c[0],c[1],s,o,i);break;case 3:r(c[0],c[1],c[2],s,o,i);break;default:c.push(s,i),r.apply(this,c)}}else{var l=m.keys(t);if(o=l.length,a=new Array(o),0===o)n(null,"");else for(s=0;s<l.length;s++){var f=l[s];r(f,t[f],s,o,i)}}}var m=r(1),w=r(6),b=w.extend({init:function(t,e){this.variables={},this.parent=t,this.topLevel=!1,this.isolateWrites=e},set:function(t,e,r){var n=t.split("."),i=this.variables,o=this;if(r&&(o=this.resolve(n[0],!0)))return void o.set(t,e);for(var s=0;s<n.length-1;s++){var a=n[s];i[a]||(i[a]={}),i=i[a]}i[n[n.length-1]]=e},get:function(t){var e=this.variables[t];return void 0!==e&&null!==e?e:null},lookup:function(t){var e=this.parent,r=this.variables[t];return void 0!==r&&null!==r?r:e&&e.lookup(t)},resolve:function(t,e){var r=e&&this.isolateWrites?void 0:this.parent,n=this.variables[t];return void 0!==n&&null!==n?this:r&&r.resolve(t)},push:function(t){return new b(this,t)},pop:function(){return this.parent}});a.prototype=Object.create(String.prototype,{length:{writable:!0,configurable:!0,value:0}}),a.prototype.valueOf=function(){return this.val},a.prototype.toString=function(){return this.val},t.exports={Frame:b,makeMacro:n,makeKeywordArgs:i,numArgs:s,suppressValue:l,ensureDefined:f,memberLookup:h,contextOrFrameLookup:v,callWrap:p,handleError:d,isArray:m.isArray,keys:m.keys,SafeString:a,copySafeness:u,markSafe:c,asyncEach:g,asyncAll:y,inOperator:m.inOperator}},function(t,e){"use strict";function r(t){var e=-1;return{current:null,reset:function(){e=-1,this.current=null},next:function(){return e++,e>=t.length&&(e=0),this.current=t[e],this.current}}}function n(t){t=t||",";var e=!0;return function(){var r=e?"":t;return e=!1,r}}function i(){return{range:function(t,e,r){"undefined"==typeof e?(e=t,t=0,r=1):r||(r=1);var n,i=[];if(r>0)for(n=t;e>n;n+=r)i.push(n);else for(n=t;n>e;n+=r)i.push(n);return i},cycler:function(){return r(Array.prototype.slice.call(arguments))},joiner:function(t){return n(t)}}}t.exports=i},function(t,e,r){"use strict";var n=r(11),i=n.extend({init:function(t){this.precompiled=t||{}},getSource:function(t){return this.precompiled[t]?{src:{type:"code",obj:this.precompiled[t]},path:t}:null}});t.exports=i},function(t,e,r){"use strict";var n=r(3),i=r(6),o=r(1),s=i.extend({on:function(t,e){this.listeners=this.listeners||{},this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(e)},emit:function(t){var e=Array.prototype.slice.call(arguments,1);this.listeners&&this.listeners[t]&&o.each(this.listeners[t],function(t){t.apply(null,e)})},resolve:function(t,e){return n.resolve(n.dirname(t),e)},isRelative:function(t){return 0===t.indexOf("./")||0===t.indexOf("../")}});t.exports=s},function(t,e){function r(){"use strict";var t=this.runtime,e=this.lib,r=t.contextOrFrameLookup;t.contextOrFrameLookup=function(t,e,n){var i=r.apply(this,arguments);if(void 0===i)switch(n){case"True":return!0;case"False":return!1;case"None":return null}return i};var n=t.memberLookup,i={pop:function(t){if(void 0===t)return this.pop();if(t>=this.length||0>t)throw new Error("KeyError");return this.splice(t,1)},remove:function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return this.splice(e,1);throw new Error("ValueError")},count:function(t){for(var e=0,r=0;r<this.length;r++)this[r]===t&&e++;return e},index:function(t){var e;if(-1===(e=this.indexOf(t)))throw new Error("ValueError");return e},find:function(t){return this.indexOf(t)},insert:function(t,e){return this.splice(t,0,e)}},o={items:function(){var t=[];for(var e in this)t.push([e,this[e]]);return t},values:function(){var t=[];for(var e in this)t.push(this[e]);return t},keys:function(){var t=[];for(var e in this)t.push(e);return t},get:function(t,e){var r=this[t];return void 0===r&&(r=e),r},has_key:function(t){return this.hasOwnProperty(t)},pop:function(t,e){var r=this[t];if(void 0===r&&void 0!==e)r=e;else{if(void 0===r)throw new Error("KeyError");delete this[t]}return r},popitem:function(){for(var t in this){var e=this[t];return delete this[t],[t,e]}throw new Error("KeyError")},setdefault:function(t,e){return t in this?this[t]:(void 0===e&&(e=null),this[t]=e)},update:function(t){for(var e in t)this[e]=t[e];return null}};o.iteritems=o.items,o.itervalues=o.values,o.iterkeys=o.keys,t.memberLookup=function(t,r,s){return t=t||{},e.isArray(t)&&i.hasOwnProperty(r)?function(){return i[r].apply(t,arguments)}:e.isObject(t)&&o.hasOwnProperty(r)?function(){return o[r].apply(t,arguments)}:n.apply(this,arguments)}}t.exports=r}]);define("nunjucks",function(t){return function(){var e;return e||t.nunjucks}}(this)),define("progressbar",["exports","nunjucks"],function(t,e){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.ProgressBar=t.Bar=void 0;var i=r(e),o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t.Bar=function(){function t(e,r,i){n(this,t),this.id=e,this.limit=i,this.$el=document.createElement("li"),this.$el.setAttribute("id",this.id),this.$el.setAttribute("class","bar"),this.setCurrentValue(r)}return o(t,[{key:"getCurrentValue",value:function(){return this.currentvalue}},{key:"setCurrentValue",value:function(t){this.currentvalue=Math.max(0,t);var e=this.getProgressPercentage();this.$el.setAttribute("data-currentvalue",this.currentvalue),this.$el.setAttribute("data-percentage",e+"%"),this.updateBar(e)}},{key:"addPercentageValue",value:function(t){var e=this.getProgressPercentage(),r=Math.max(0,e+t);this.currentvalue=Math.floor(r*this.limit/100),this.getProgressPercentage()!=r&&(this.currentvalue=Math.ceil(r*this.limit/100)),this.$el.setAttribute("data-currentvalue",this.currentvalue),this.$el.setAttribute("data-percentage",r+"%"),this.updateBar(r)}},{key:"updateBar",value:function(t){var e=this.$el.querySelector("div");e&&(e.style.width=Math.min(100,Math.max(0,t))+"%",t>100?this.$el.classList.add("overflow"):this.$el.classList.remove("overflow"))}},{key:"getProgressPercentage",value:function(){var t=arguments.length<=0||void 0===arguments[0]?!1:arguments[0],e=Math.floor(100*this.currentvalue/this.limit);return t&&(e=Math.min(e,100)),e}},{key:"render",value:function(){return this.$el.innerHTML='<div style="width:'+this.getProgressPercentage(!0)+'%"></div>',this.$el}}]),t}();t.ProgressBar=function(){function t(e,r){var i=this;n(this,t),this.el=e,this.config=r,this.bars=this.config.bars.map(function(t,e){return new s("progress-"+(e+1),t,i.config.limit)}),this.render()}return o(t,[{key:"render",value:function(){var t=document.querySelector(this.el);t.innerHTML=i.render("app.html",this.config),this.bars.forEach(function(e){t.querySelector(".bars").appendChild(e.render())});for(var e=t.querySelectorAll(".btn"),r=0;r<e.length;r++)e[r].addEventListener("click",this.updateProgressBar.bind(this))}},{key:"updateProgressBar",value:function(t){var e=document.querySelector(this.el),r=e.querySelector(".currentbar").value,n=parseInt(t.currentTarget.value),i=this.bars[r];i.addPercentageValue(n)}}]),t}()}),define("app",["datamanager","progressbar"],function(t,e){"use strict";t.DataManager.getData().then(function(t){new e.ProgressBar("#progressbar-app",t)})});
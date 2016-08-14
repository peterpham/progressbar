(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<ul class=\"bars\"></ul>\n<div class=\"controls\">\n\t<select class=\"currentbar\">\n\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "bars");
if(t_3) {var t_1;
if(runtime.isArray(t_3)) {
var t_2 = t_3.length;
for(t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1][0]
frame.set("bar", t_3[t_1][0]);
var t_5 = t_3[t_1][1]
frame.set("i", t_3[t_1][1]);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t<option value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0"), env.opts.autoescape);
output += "\">Bar ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "</option>\n\t\t";
;
}
} else {
t_1 = -1;
var t_2 = runtime.keys(t_3).length;
for(var t_6 in t_3) {
t_1++;
var t_7 = t_3[t_6];
frame.set("bar", t_6);
frame.set("i", t_7);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t<option value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0"), env.opts.autoescape);
output += "\">Bar ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "</option>\n\t\t";
;
}
}
}
frame = frame.pop();
output += "\n\t</select>\n\t<div class=\"buttons\">\n\t";
frame = frame.push();
var t_10 = runtime.contextOrFrameLookup(context, frame, "buttons");
if(t_10) {var t_9 = t_10.length;
for(var t_8=0; t_8 < t_10.length; t_8++) {
var t_11 = t_10[t_8];
frame.set("button", t_11);
frame.set("loop.index", t_8 + 1);
frame.set("loop.index0", t_8);
frame.set("loop.revindex", t_9 - t_8);
frame.set("loop.revindex0", t_9 - t_8 - 1);
frame.set("loop.first", t_8 === 0);
frame.set("loop.last", t_8 === t_9 - 1);
frame.set("loop.length", t_9);
output += "\n\t<button type=\"button\" value=\"";
output += runtime.suppressValue(t_11, env.opts.autoescape);
output += "\" class=\"btn\">";
output += runtime.suppressValue(t_11, env.opts.autoescape);
output += "</button>\n\t";
;
}
}
frame = frame.pop();
output += "\n\t</div>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

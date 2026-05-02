var pathsuffix = context.getVariable("proxy.pathsuffix");

var externalMemberId = context.getVariable("virginpulse.externalMemberId");
context.setVariable("target.copy.pathsuffix", "false");

if(pathsuffix.startsWith("/virginpulse")){
    pathsuffix = pathsuffix.substr(0,pathsuffix.indexOf("/", 1))
}
    
var pathMap = {
    rewards: "",
    virginpulse: "/dev-api/v1/rewards/sponsors/24058/members/"+externalMemberId+"/games"
}

var cleanPxppth = pathsuffix.substring(1);
if (pathMap.hasOwnProperty(cleanPxppth)) {
	context.setVariable("mytarget.path",  pathMap[cleanPxppth]);
} else {
	print ("INVALID PATH SUFFIX: " + pathsuffix);
}
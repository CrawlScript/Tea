

importPackage(java.net);
function urlencode(str){
	return URLEncoder.encode(str);
}

function urldecode(str){
	return URLDecoder.decode(str);
}

urllib={
		
		urlopen:function(url, httpconfig) {
			importPackage(org.teaplugin.httpclient);
			
			if(httpconfig!=undefined){
				if(httpconfig.params!=undefined)
					url=url+"?"+urllib.param_encode(httpconfig.params);				
			}
			
			httppage=new HttpPage();	
			return httppage.getHtmlAuto(url,null,null,null);
		},
		
		param_encode:function(params){
			var result="";
			var i=0;
			for(param in params){
				result+=param+"="+urlencode(params[param])+"&";
				i++;
			}
			if(i>0)
				result=result.substring(0,result.length-1);
			return result;			
		}
		
		
		
		
}



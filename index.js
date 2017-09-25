//var rec=[{msg:'登陆成功',userid:'1',type:'2',name:'湖南省湘江水电站集团',orgname:'湖南省湘江水电站集团',session:'320170810155542'}]
function checkusename(){
	 var usename = document.getElementById("usename").value;
     if(usename==null||usename==""){
    alert("登陆账号不能为空"); 
	return false; 
    }
    var password=document.getElementById("password").value;
    if(password==null||password==""){
    alert("密码不能为空"); 
	return false; 
    }
	 $.ajax( { 
		 type : "post",
         url : "http://172.20.241.51:8080/Hydropower/login.do",
         data : {employeecode:usename,password:password},
         dataType: "json",
        success : function(data) {
//      if(rec[0].msg=="登陆成功"){
//      	alert("userid=="+rec[0].userid);
//      }
//      else{
//      	alert(rec[0].msg);
//      	document.getElementById("usename").value="";
//      	document.getElementById("usename").value="";
//      }
        if(data.msg == "登陆成功"){
        	var us_id=data.userid;
        	var us_name=data.name;
        	var us_type=data.type;
        	var us_session=data.session;
        	document.cookie="session="+us_session+";type="+us_type+";name="+us_name; 
        	//alert("success");
        	window.location.href="main.html";
			}else{			
				alert(data.msg);
				document.getElementById("usename").value="";
				document.getElementById("password").value="";
			}
    }
       });
	
}


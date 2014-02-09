$(document).ready(function() {
	var bc = $.url().param('blog-code');
	var plaf = $.url().param('platform');
	if( plaf == "kakaotalk" ){
		kakao.link("talk").send({
            msg : "지금 엄마에게 문자로 데이트 신청하세요. 엄마와 함께 혼수침구도 고르고 웨딩준비 선물을 받는 행운까지 누리세요!",
            url : "http://event3.evezary.co.kr/"+bc,
            appid : "event3.evezary.co.kr",
            appver : "1.0",
            appname : "엄마와 특별한데이트",
            type : "link"
        });
	}else if( plaf == "kakaostory" ){
        kakao.link("story").send({
            post : "지금 엄마에게 문자로 데이트 신청하세요. 엄마와 함께 혼수침구도 고르고 웨딩준비 선물을 받는 행운까지 누리세요. http://event3.evezary.co.kr/"+bc,
            appid : "http://event3.evezary.co.kr/"+bc,
            appver : "1.0",
            appname : "엄마와 특별한데이트",
            urlinfo : JSON.stringify({
                title:"엄마와 특별한데이트", 
                desc:"지금 엄마에게 문자로 데이트 신청하세요. 엄마와 함께 혼수침구도 고르고 웨딩준비 선물을 받는 행운까지 누리세요!", 
                imageurl:["http://i.imgur.com/Mmjnq8n.jpg"], 
                type:"article"
            })
        });
	}else if( plaf == "facebook" ){
		window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fevent3.evezary.co.kr/"+bc,"_blank");
	}
	
    $('#location').click(function(e){
        e.preventDefault;
        var myPhone_1 = $("#myPhone_1").val();
        var myPhone_2 = $("#myPhone_2").val();
        var myPhone_3 = $("#myPhone_3").val();
        var momPhone_1 = $("#momPhone_1").val();
        var momPhone_2 = $("#momPhone_2").val();
        var momPhone_3 = $("#momPhone_3").val();
        var ta = $("#ta").val();
        var cache = "mobile_search_stores?myPhone_1="+myPhone_1+"&myPhone_2="+myPhone_2+"&myPhone_3="+myPhone_3;
        var cache = cache + "&momPhone_1="+momPhone_1+"&momPhone_2="+momPhone_2+"&momPhone_3="+momPhone_3+"&ta="+ta;
        console.log(cache);
        location.href = cache;
    });
    
    $('#mobile_k').click(function(){
        _gaq.push('send', 'event', 'button', 'click', '카톡 모바일 1551');
        loadJsFile("http://i51.icast-ad.com/track?ccd=1251&mcd=01040601&pcd=1551");
		if( plaf != "" && blog != "" ){
       	 kakao.link("talk").send({
            msg : "지금 엄마에게 문자로 데이트 신청하세요. 엄마와 함께 혼수침구도 고르고 웨딩준비 선물을 받는 행운까지 누리세요!",
            url : "http://event3.evezary.co.kr/"+bc,
            appid : "event3.evezary.co.kr",
            appver : "1.0",
            appname : "엄마와 특별한데이트",
            type : "link"
       	 });
	 	} else {
	 		location.href = "mobile_buzz/users/new?platform=kakaotalk";
	 	}
    });
    $('#mobile_ks').click(function(){
        _gaq.push('send', 'event', 'button', 'click', '카스 모바일 1552');
        loadJsFile("http://i51.icast-ad.com/track?ccd=1251&mcd=01040601&pcd=1552");
		if( plaf != "" && blog != "" ){
       	 kakao.link("story").send({
            post : "지금 엄마에게 문자로 데이트 신청하세요. 엄마와 함께 혼수침구도 고르고 웨딩준비 선물을 받는 행운까지 누리세요. http://event3.evezary.co.kr/"+bc,
            appid : "event3.evezary.co.kr",
            appver : "1.0",
            appname : "엄마와 특별한데이트",
            urlinfo : JSON.stringify({
                title:"엄마와 특별한데이트", 
                desc:"지금 엄마에게 문자로 데이트 신청하세요. 엄마와 함께 혼수침구도 고르고 웨딩준비 선물을 받는 행운까지 누리세요!", 
                imageurl:["http://i.imgur.com/Mmjnq8n.jpg"], 
                type:"article"
            })
      	  });
	  	} else {
	  		location.href = "mobile_buzz/users/new?platform=kakaostory";
	  	}
    });
    $('#mobile_f').click(function(){
        _gaq.push('send', 'event', 'button', 'click', '페북버튼 모바일 1553');
        loadJsFile("http://i51.icast-ad.com/track?ccd=1251&mcd=01040601&pcd=1553");
		if( plaf != "" && blog != "" ){
			window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fevent3.evezary.co.kr/"+bc,"_blank");
		} else {
			location.href = "mobile_buzz/users/new?platform=facebook";
		}
    });
    $('#location').click(function(){
        _gaq.push('send', 'event', 'button', 'click', '위치 모바일');
    });
    $('#m1_sendButton').click(function(){
        _gaq.push('send', 'event', 'button', 'click', '첫번째 페이지 끝 모바일 1549');
        loadJsFile("http://i51.icast-ad.com/track?ccd=1251&mcd=01040601&pcd=1549");
        if( $('#myPhone_1').val() == "" || $('#myPhone_2').val() == "" || $('#myPhone_3').val() == "" || $('#momPhone_1').val() == "" || $('#momPhone_2').val() == "" || $('#momPhone_3').val() == "" || $('#ta').val() == "" )
        {
            alert("내용을 모두 입력해주세요.");
        }
        else
        {
            location.href = "mobile_apply_2";
        }
    });
    $('#m2_personButton').click(function(){
        _gaq.push('send', 'event', 'button', 'click', '약관 모바일');
    });
    $('#m2_endButton').click(function(e){
        e.preventDefault();
        _gaq.push('send', 'event', 'button', 'click', '두번째 페이지 끝 모바일 1550');
        loadJsFile("http://i51.icast-ad.com/track?ccd=1251&mcd=01040601&pcd=1550");
        if( $('#m2_name').val() == "" || $('#m2_phone_1').val() == "" || $('#m2_phone_2').val() == "" || $('#m2_phone_3').val() == "" || $('#m2_email').val() == "" )
        {
            alert("내용을 모두 입력해주세요.");
        }
        else
        {
            if($(':radio[name="agree"]:checked').val() == "d")
            {
                alert("개인정보 동의를 하셔야 진행하실 수 있습니다.");
            }
            else
            {
                location.href = "mobile_apply_3";
            }
        }
    });
    
    $('#mobile_apply').click(function(){
        _gaq.push('send', 'event', 'button', 'click', '모바일 goto apply_1 1548');
        loadJsFile("http://i51.icast-ad.com/track?ccd=1251&mcd=01040601&pcd=1548");
        location.href = "mobile_apply_1";
    });
});

function loadJsFile(filename){
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
    if(typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }

}

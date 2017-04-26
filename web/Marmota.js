function inicializa(){
    createCookieRandon()
}
function createCookieRandon(){
    var alturaJanela = window.innerHeight;
    var larguraJanela = window.innerWidth;
    var topCookie = 0;
    var leftCookie = 0;
    topCookie = getRandomInt(50, alturaJanela - 100);
    leftCookie = getRandomInt(50, larguraJanela - 150);
    
    rndID = getRandomInt(50, 100);
    
    var cookie = document.createElement("div");
    var cookieId = document.createAttribute("id");
    var cookieClass = document.createAttribute('class');
    
    
    cookieId.value = rndID;
    cookieClass.value = 'cookie';
    
    cookie.setAttributeNode(cookieId);
    cookie.setAttributeNode(cookieClass);
    
    cookie.setAttribute("style","width:50px;height:50px;background:green;top:"+topCookie+"px;left:"+leftCookie+"px;position:absolute");
    
    
    document.body.appendChild(cookie);
    
}

/*no metodo de clique é so colocar 
 *  var pontuacao = 0;
 *  pontuacao +=1;
         $('#pontuacao').html("Pontos: "+pontuacao); 
 */
function getQuote() {
    var sayings = [
      { text : "Hay", by : " -Daryl Dixon"},
      { text : "arrrGGGRRrrr", by : " -Zombie"},,
      { text : "Hey you... dumbass... yeah, you in the tank. Cozy in there?", by : " -Glenn Rhee"},
      { text : "I'm Korean", by : " - Glenn Rhee"},
      { text : "Ain't gonna have your first drink be no damn Peach Schnapps.", by : " -Daryl Dixon"},
      { text : "Just look at the flowers, Lizzie", by : " -Carol"},
      { text : "I can't stop you. But you can't stop me from helping you.", by : " -Michonne"},
      { text : "I had a three-year-old son and he happened to find me extremely funny.", by : " -Michonne"},
      { text : "After I save the world, I still have to live with myself.", by : " -Eugene"},
      { text : "I'm the one black guy. You realize how precarious that makes my situation?", by : " -T-Dogg"},
      { text : "You don't have to like what I did, just accept it.", by : " -Carol"},
      { text : "Anger makes you stupid. Stupid gets you killed.", by : " -Michonne"},
      { text : "We’ve all lost someone.", by : " -Rick Grimes"},
      { text : "We're friends with the chick with the sword and the kid in the hat.", by : " -Carol"},
      { text : "Nowadays people are just as dangerous as the dead.", by : " -Gabriel"},
      { text : "If you’re safe enough to be bored, you’re lucky.", by : " -Beth Greene"},
      { text : "Turn it off...", by : " -Tyreese"},
      { text : "You want to know what I was before all this? I was nobody. Nothing.", by : " -Daryl Dixon"},
      { text : "Oh, sunshine, you don't get both.", by : " -Carol"},
    
    ];
    
    var index = Math.floor(Math.random() * (sayings.length));
    var show = sayings[index];
    
    document.getElementById("quote").innerHTML = '"'+ show.text + '"';
    document.getElementById("by").innerHTML = show.by;
      
     
      var link = document.createElement("a");
      link.setAttribute("target", "_blank");
      link.setAttribute("id", "twitter");
      var newImg = document.createElement("img");
      newImg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png");
      newImg.setAttribute("id", "twitter-image");
      link.appendChild(newImg);
      var parentNode = document.getElementById("button2");
      parentNode.appendChild(link);
      
      document.getElementById("twitter").href = "https://twitter.com/home/?status=" + '"' + show.text + '"' + show.by + " https://codepen.io/cilavery/full/MKYvJp/" + " via @_meowzers_ " + "%23TWD";
      
    };
      
       
    document.getElementById("button1").addEventListener("click", getQuote);
    
    
    document.getElementById("button1").addEventListener("click", linkRemove);
    
     function linkRemove() {
       var parentNode = document.getElementById("button2");
       var childNode = parentNode.childNodes[2];
       parentNode.removeChild(childNode);
     };
     
    
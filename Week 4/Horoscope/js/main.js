function zodiacChoose() {
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;




    if (month>12 || day>31){
       alert("Nice try, but no.");
    }
    else if (month == 1 && day >= 20 || month == 2 && day <= 18) {

        document.getElementById("signChar").innerHTML="You got Momo! - Aquarius";
        document.getElementById("pic").innerHTML="<img src=img/momo.png>";
        document.getElementById("description").innerHTML="Aquarius is the 'friendship' sign. You are very Loyal, and everyone wants to be friends with you! You never abandon a friend in need, and it seems like you have some pretty big ears!";
    }
    else if (month == 2 && day == 29){
        document.getElementById("signChar").innerHTML="You got Cabbage Man";
        document.getElementById("pic").innerHTML="<img src=img/cabbage.jpg>";
        document.getElementById("description").innerHTML="You keep getting your cabbages destroyed. Very unlucky of you.";
    }
    else if (month == 2 && day > 29){
      alert ("Nice try, but no.");
    }

    else if (month == 2&& day >= 19 || month == 3 && day <= 20) {

       document.getElementById("signChar").innerHTML="You got Katara! - Pisces";
       document.getElementById("pic").innerHTML="<img src=img/katara.png>";
       document.getElementById("description").innerHTML="Like the twin fishes, you are an amazing contradiction of sweet and fierce. You are quick to adapt to your surroundings, and when someone is in need, you're quick to help.";
    }

   else if (month == 3&& day >= 21 || month == 4 && day <= 19) {

       document.getElementById("signChar").innerHTML="You got Azula - Aries";
      document.getElementById("pic").innerHTML="<img src=img/azula.png>";
      document.getElementById("description").innerHTML="Born lucky, instead of lucky to be born. Your fire burns the hottest. You're a natural at everything you do. Whether your ability is because your a prodigy or because of your natural ambition, that's still up to debate!";
   }

    else if (month == 4&& day >= 20|| month == 5 && day <= 20) {

        document.getElementById("signChar").innerHTML="You got Toph! - Taurus";
       document.getElementById("pic").innerHTML="<img src=img/toph.png>";
       document.getElementById("description").innerHTML="You're headstrong and tough as a rock! No one can stop you once you have an idea in your head, and the thing you want the most is your freedom. You're the best at everything, and nothing can knock you down.";
    }

    else if (month == 5&& day >= 21 || month == 6 && day <= 20) {

        document.getElementById("signChar").innerHTML="You got Appa! - Gemini";
       document.getElementById("pic").innerHTML="<img src=img/appa.png>";
       document.getElementById("description").innerHTML="Your heart is almost as big as your appetite. You are the element that guides change- appropriately so, because you never abandon a friend if they're going through a big change- even if that change is waking up 100 years later. Sometimes you feel like you carry everyone on your back, but at the end of the day, if you have your friends with you, you know you'll be fine.";
    }

    else if (month == 6&& day >= 21 || month == 7&& day <= 22) {

        document.getElementById("signChar").innerHTML="You got Yue! - Cancer";
       document.getElementById("pic").innerHTML="<img src=img/yue.png>";
       document.getElementById("description").innerHTML="Ruled by the moon, you are a kind soul. Although emotional, you can go through tough decisions, because you understand where you're needed. You're always working behind the scenes and watching over your friends- even if they don't know it.";
    }

    else if (month == 7&& day >= 23 || month == 8 && day <= 22) {

        document.getElementById("signChar").innerHTML="You got Zuko! - Leo"
       document.getElementById("pic").innerHTML="<img src=img/zuko.png>";
       document.getElementById("description").innerHTML="Represented by the king himself, you are naturally royalty. Full of honor and a fire in your heart, you never give up on your objectives. Brave and loyal, you're ruled by the sun, and no one burn brighter than you in the end.";
    }

    else if (month == 8 && day >= 23 || month == 9 && day <= 22) {

        document.getElementById("signChar").innerHTML="You got Suki! - Virgo"
       document.getElementById("pic").innerHTML="<img src=img/suki.png>";
       document.getElementById("description").innerHTML="Above all, you really want to healp. Gentle, but a fighter, you never forget your ideals and hwy you are who you are. You're extremely compassionate, brave and resourceful.";
    }

    else if (month == 9&& day >= 23 || month == 10&& day <= 22) {

      document.getElementById("signChar").innerHTML="You got Aang! - Libra"
       document.getElementById("pic").innerHTML="<img src=img/aang.jpg>";
       document.getElementById("description").innerHTML="Kind and high spirited, you always put anyone in need before you. You always want to make things fair, and you never want to hurt anyone. You try to stay true to yourself and your value your freedom and everyone else's over everything else.";
     }

    else if (month == 10 && day >= 23|| month == 11 && day <= 21) {

       document.getElementById("signChar").innerHTML="You got Sokka! - Scorpio"
       document.getElementById("pic").innerHTML="<img src=img/sokka.png>";
       document.getElementById("description").innerHTML="Your passion, wit and independence are strong. If there's someone who can figure theselves out in a pinch, it's you. As a natural born leader that follows their instinct, your friends look up to you whenever they need guidance- or maybe just a few laughs.";
    }

    else if (month == 11 && day >= 22 || month == 12 && day <= 21) {
        document.getElementById("signChar").innerHTML="You got Iroh! - Sagittarius";
       document.getElementById("pic").innerHTML="<img src=img/iroh.png>";
       document.getElementById("description").innerHTML="Generous and wise, everyone instantly trusts you- and with good reason. You always seem to know what to say in hard times. This isn't testimony that you're foolish though. You're always aware of your surroundings and aware of the people around you, always on your search for knowledge and for people and ways to help.";
    }

    else if (month == 12 && day >= 22 || month == 1 && day <= 19) {
      document.getElementById("signChar").innerHTML="You got Bumi! - Capricorn"
     document.getElementById("pic").innerHTML="<img src=img/bumi.jpg>";
     document.getElementById("description").innerHTML="A mad genius, your intellect and strength are to be envied by any. You always think outside the box- and that comes in handy when you want to cause trouble, all in good fun though. Always youthful, even in old age, you're always up for some fun!";
    }

}

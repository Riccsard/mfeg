var canvas = document.getElementById("mc")
var ctx = canvas.getContext("2d")
ctx.font = "30px Montserrat"

var valosMegoldas = false

var ha, hb, hc

function ine(){
    ha = document.getElementById("a").value
    hb = document.getElementById("b").value
    hc = document.getElementById("c").value
    masodfokuEgyenlet(ha, hb, hc)
}

//megoldas
function masodfokuEgyenlet(a, b, c) {
    diszkriminans = b*b-4*a*c

    if (diszkriminans > 0) {
        gyok1 = (-b+Math.sqrt(diszkriminans))/(2*a)
        gyok2 = (-b-Math.sqrt(diszkriminans))/(2*a)
        valosMegoldas = true

        // pm1 -> b
        pm1 = "-"
        pm2 = "+"
        if(b < 0) {
            pm1 = ""
        }

        // alap
        ctx.fillText(a + "x²" + pm1 + b + "x" + "+" + c, 30, 30)

        // behelyettesites
        vonalLen = ((a.toString()+b.toString()+c.toString()).length)+10
        var vonal = new Array(vonalLen + 1).join("_");
        ctx.fillText(pm1 + Math.abs(b) + "±" + "√(" + b + "²" + "-" + "4x" + a + "x" + c + ")", 30, 90)
        ctx.fillText(vonal, 30, 100)
        ctx.fillText("2x" + a, 100, 130)

        // eredmeny
        ctx.fillText("1. gyök: " + gyok1, 30, 180)
        ctx.fillText("2. gyök: " + gyok2, 30, 210)

        // diszkrimináns
        ctx.fillText("√"+ b + "²" + "-4x" + a + "x" + c, 30, 270)
        ctx.fillText("↓", 30, 300)
        ctx.fillText("√"+ Math.pow(b, 2) + "-4x" + a + "x" + c, 30, 330)
        ctx.fillText("↓", 30, 360)
        if (4*a*c < 0) {
            pm2 = "-"
        }
        ctx.fillText("√"+ Math.pow(b, 2) + pm2 + Math.abs(4*a*c), 30, 390)
        ctx.fillText("↓", 30, 420)
        ctx.fillText("√"+ diszkriminans, 30, 450)
        ctx.fillText("↓", 30, 480)
        ctx.fillText(Math.sqrt(diszkriminans), 30, 510)

        // pluszminusz
        ctx.fillText(pm1 + Math.abs(b) + "±" + "√(" + diszkriminans + ")", 500, 270)
        ctx.fillText("_________", 500, 280)
        ctx.fillText("2x" + a, 550, 310)

        ctx.fillText(pm1 + Math.abs(b) + "±" + Math.sqrt(diszkriminans), 500, 350)
        ctx.fillText("_____", 500, 360)
        ctx.fillText("2x" + a, 500, 390)

    

    } else if (diszkriminans == 0) {
        ctx.fillText("Egy valós gyöke van", 20, 30)
    } else {
        ctx.fillText("Nincs valós gyöke", 20, 30)
    }
}
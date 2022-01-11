var i = 1;
var x1 = 0;
var x2 = 0;
var op=0;
var d1=0;
var d2=0;
var ops="+";
function num(x) {
    if (x == 10) {
        i = 2;
        document.getElementById("tb").innerHTML = x1+"+";
        op=1;
        ops="+";
    }
    else if(x==12)
    {
        i = 2;
        document.getElementById("tb").innerHTML = x1+"-";
        op=2;
        ops="-";
    }
    else if(x==13)
    {
        i = 2;
        document.getElementById("tb").innerHTML = x1+"*";
        op=3;
        ops="*";
    }
    else if(x==14)
    {
        i = 2;
        document.getElementById("tb").innerHTML = x1+"/";
        op=4;
        ops="/";
    }
    else if (x == 11) {
        var y=0;
        if(op==1)
        {
            y = x1 + x2;
        }
        else if(op==2)
        {
            y = x1 - x2;
        }
        else if(op==3)
        {
            y = x1 * x2;
        }
        else if(op==4)
        {
            y = x1/x2;
        }
        document.getElementById("tb").innerHTML = y;
        x1=0;
        x2=0;
        i=1;
        d1=0;
        d2=0;
    }
    else if(x==15)
    {
        if(i==1)
        {
        d1=0.1;
        document.getElementById("tb").innerHTML = x1+".";
        }
        else{
            d2=0.1;
            document.getElementById("tb").innerHTML = x1+ops+x2+"."; 
        }
    }
    else {
        if (i == 1 && d1==0) {
            x1 = x1 * 10 + x;
            document.getElementById("tb").innerHTML = x1;
        }
        else if(i==1 && d1!=0)
        {
            x1=x1+x*d1;
            d1*=0.1;
            document.getElementById("tb").innerHTML = x1;
        }
        else if(op==1 && d2==0) {
            x2 = x2 * 10 + x;
            document.getElementById("tb").innerHTML = x1+"+"+x2;
        }
        else if(op==2 && d2==0){
            x2 = x2 * 10 + x;
            document.getElementById("tb").innerHTML = x1+"-"+x2;
        }
        else if(op==3 && d2==0){
            x2 = x2 * 10 + x;
            document.getElementById("tb").innerHTML = x1+"*"+x2;
        }
        else if(op==4 && d2==0){
            x2 = x2 * 10 + x;
            document.getElementById("tb").innerHTML = x1+"/"+x2;
        }
        else if(op==1 && d2!=0) {
            x2 = x2 + x*d2;
            d2*=0.1;
            document.getElementById("tb").innerHTML = x1+"+"+x2;
        }
        else if(op==2 && d2!=0){
            x2 = x2 + x*d2;
            d2*=0.1;
            document.getElementById("tb").innerHTML = x1+"-"+x2;
        }
        else if(op==3 && d2!=0){
            x2 = x2 + x*d2;
            d2*=0.1;
            document.getElementById("tb").innerHTML = x1+"*"+x2;
        }
        else if(op==4 && d2!=0){
            x2 = x2 + x*d2;
            d2*=0.1;
            document.getElementById("tb").innerHTML = x1+"/"+x2;
        }
    }
}
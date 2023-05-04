
var f=prompt("Enter The Fare Amount ")
var t = parseInt(prompt("Enter The Time "));
var refundAmount =calculateRefund(f, t); 
function calculateRefund(f,t){
    if (t<0){
        return -1;
    }
    else if(t<=30){
        return 0;
    }
    else if(t<=120){
        refund=f*0.1;
    }
    else if(t<=300){
        refund=f*0.2;
    }else{
        refund=f *0.5;
    }

  return refund;
}
if(refundAmount <=100)
{
    document.write("Amount is refund $" + refundAmount);
}
else
{
    document.write("The Refund Amount is Invalid....");
}





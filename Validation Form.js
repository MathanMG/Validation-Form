let Action=()=>
{
   let a=document.forms['cform'].sname.value;
   let b=document.forms['cform'].ename.value;
   let c=document.forms['cform'].tname.value;
   let d=document.forms['cform'].pass.value;

   let active=true;

   if(a.length<=0)
    {
        document.getElementById('ndetailes').innerHTML="Name should't empty";
        active=false;   
    }
    else if(!(/^[A-Za-z\s]+$/).test(a))
    {
        document.getElementById('ndetailes').innerHTML="Name should't use numerical numbers";
        active=false; 
    }
    if(b.length<=0)
    {
        document.getElementById('edetailes').innerHTML="Email should't empty";
        active=false;   
    }
    else if(!(/^[0-9a-z@.]+$/).test(b))
    {
        document.getElementById('ndetailes').innerHTML="Email id used by @ . symbols";
        active=false; 
    }
    if(c.length<=0)
    {
        document.getElementById('tdetailes').innerHTML="Phone No should't empty";
        active=false;   
    }
    else if(!(/^[0-9]+$/).test(c))
    {
        document.getElementById('tdetailes').innerHTML="Phone should't use Alphabatical Letters";
        active=false; 
    }
    if(d.length<=0)
    {
        document.getElementById('pdetailes').innerHTML="Password should't empty";
        active=false;   
    }
    else if(!(/^[0-9A_Za-z!@#$%^&*]{6,16}$/).test(d))
    {
        document.getElementById('pdetailes').innerHTML="Password must use special character and min6 max16 limits";
        active=false; 
    }
    return active;
}
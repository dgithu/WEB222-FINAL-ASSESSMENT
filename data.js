
////////////////////////////////ABOUT ME PART //////////////////////////////////////////////////////////////////

var lin=document.createElement("hr");
document.body.appendChild(lin);
lin.id="line1";

var main=document.getElementById("id3");
main.id="m1";
 var head=document.createElement("h2");
 head.id="about";
 head.innerHTML+="About Me and Academic Honesty";
 head.className="both1";

 var loyal= document.createElement("p");
 loyal.id="word";
 loyal.innerHTML+="I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students.";
 loyal.className="both1";


 var today = new Date();
var dattt = today.getDate()+'-'+(today.getMonth() + 1)+'-'+ today.getFullYear();
today=dattt;


 
 main.appendChild(head);
 main.appendChild(loyal);

 document.body.appendChild(main);

 document.write(today);
 var lin=document.createElement("hr");
 document.body.appendChild(lin);

 var mn=document.getElementById("id4");
 
 var no1=document.createElement("h2");
 no1.innerHTML+="Basic Information";
 no1.className="t1";

 var no2=document.createElement("tr");
 no2.innerText+="AGE-:";
 no2.innerText+="19 years";

 var no3=document.createElement("tr");
 no3.innerText+="EMAIL:- ";
 no3.innerText+="dpatel484@myseneca.ca";

 var no4=document.createElement("tr");
 no4.innerText+="LANGUAGE:- ";
 no4.innerText+="English";

 var no5=document.createElement("tr");
 no5.innerText+="CLASS SECTION:-  ";
 no5.innerText+="NCC";

 var no6=document.createElement("tr");
 no6.innerText+="STUDENT ID:- ";
 no6.innerText+="167437219";

 var no7=document.createElement("tr");
 no7.innerText+="INSTRUCTOR:- ";
 no7.innerText+="Muath Alzghool";


 mn.appendChild(no1);
 mn.appendChild(no2);
 mn.appendChild(no3);
 mn.appendChild(no4);
 mn.appendChild(no5);
 mn.appendChild(no6);
 mn.appendChild(no7);
 
 


 document.body.appendChild(mn);

 var lin=document.createElement("hr");
 document.body.appendChild(lin);

 /////////////////////////////////////////////////////////////////////////////
   
   var clicked=false;
   function radio()
   {
      if(clicked===false)
      {
      var r1= document.getElementById("rdiolink");
      var r2=document.createElement("input");
      r2.id="rr8.id";
      r2.setAttribute("type","text");
      r2.setAttribute("placeholder","Enter");
      r1.appendChild(r2);
      }
      clicked=true;

   }

   function hidden()
   {
      let r=document.getElementById("rr8.id");
      r.style.display="none;"
   }

   function validation() {
      let pstCheck =
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d$/;
      let postal = document.getElementById('pst').value;
      if (!pstCheck.test(postal)) {
        alert("Enter Postal Code in proper manner");
        return false;
      } else {
        return true;
      }
  };
/*
selection of subject :-choose one subject
 1)computer 
 2)biology
*/
/*
Note
nt=nepali theory
np=nepali pratical
et=english theory
ep=english pratical
mt=math theory or social theory
mp=math pratical or social theory
pt=physics theory 
pp=physics pratical
ct=chemistry theory
cp=chemistry pratical
bt=computer theory or biology theory
bp=computer pratical or biology theory

ccht=computer or biology cradit hour of theory
cchp=computer or biology cradit hour of pratical
*/
 var nt,np,et,ep,mt,mp,pt,pp,ct,cp,bt,bp;
 var ccht,cchp;

function subjectSelect() {
    var selectBox = document.getElementById("optional");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;
    switch (selectValue) {
        case "COMPUTER":
            ccht=document.getElementById("com_ch_thy").innerHTML=2.5;
            cchp=document.getElementById("com_ch_pra").innerHTML=2.5;
            break;
        case "BIOLOGY":
            ccht=document.getElementById("com_ch_thy").innerHTML=3.75;
            cchp=document.getElementById("com_ch_pra").innerHTML=1.25;
             break; 

        default:
            cchp = null;
            ccht = null;
    }
    return { ccht: ccht, cchp: cchp };
}
//nepali theory
function nepaliGradeTheory()
{  
    //nt= nepali theory grade point obtained
   var selectBox = document.getElementById("nepalitheory");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
       nt=document.getElementById("nep_gp_thy").innerHTML= 4;
        break;
    }
    case "A":
    {
        nt=document.getElementById("nep_gp_thy").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
       nt=document.getElementById("nep_gp_thy").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        nt=document.getElementById("nep_gp_thy").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        nt=document.getElementById("nep_gp_thy").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        nt=document.getElementById("nep_gp_thy").innerHTML= 2;  
        break;
    }
    case "D":
    {
        nt=document.getElementById("nep_gp_thy").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        nt=document.getElementById("nep_gp_thy").innerHTML= "NG";  
        break;
    }
    default:
        nt=null;
   } 
       return nt;
   }

//nepali pratical 
function nepaliGradePratical()
{  
    //np = nepali pratical grade point obtained
   var selectBox = document.getElementById("nepalipratical");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
        np=document.getElementById("nep_gp_pra").innerHTML= 4;
        break;
    }
    case "A":
    {
        np=document.getElementById("nep_gp_pra").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        np=document.getElementById("nep_gp_pra").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        np=document.getElementById("nep_gp_pra").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        np=document.getElementById("nep_gp_pra").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        np=document.getElementById("nep_gp_pra").innerHTML= 2;  
        break;
    }
    case "D":
    {
        np=document.getElementById("nep_gp_pra").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        np=document.getElementById("nep_gp_pra").innerHTML= "NG";  
        break;
    }
    default:
        np=null;
   }
       return np;
   }

//english theory
function englisgGradeTheory()
{  
    //et = english theory grade point obtained
   var selectBox = document.getElementById("englishtheory");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
        //resultParagraph.innerHTML ="A+";
        et=document.getElementById("eng_gp_thy").innerHTML= 4;
        break;
    }
    case "A":
    {
        et=document.getElementById("eng_gp_thy").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        et=document.getElementById("eng_gp_thy").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        et=document.getElementById("eng_gp_thy").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        et=document.getElementById("eng_gp_thy").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        et=document.getElementById("eng_gp_thy").innerHTML= 2;  
        break;
    }
    case "D":
    {
        et=document.getElementById("eng_gp_thy").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        et=document.getElementById("eng_gp_thy").innerHTML= "NG";  
        break;
    }
    default:
        et=null;
   }
       return et;
   }

//english pratical
function englishGradePratical()
{  
    //ep = english pratical grade point obtained
   var selectBox = document.getElementById("englishpratical");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
        ep=document.getElementById("eng_gp_pra").innerHTML= 4;
        break;
    }
    case "A":
    {
        ep=document.getElementById("eng_gp_pra").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        ep=document.getElementById("eng_gp_pra").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        ep=document.getElementById("eng_gp_pra").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        ep=document.getElementById("eng_gp_pra").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        ep=document.getElementById("eng_gp_pra").innerHTML= 2;  
        break;
    }
    case "D":
    {
        ep=document.getElementById("eng_gp_pra").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        ep=document.getElementById("eng_gp_pra").innerHTML= "NG";  
        break;
    }
    default:
        ep=null;
   }
       return ep;
   }

//math theory
function mathGradeTheory()
{  
    //mt = math theory grade point obtained
   var selectBox = document.getElementById("maththeory");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;
   var resultParagraph = document.getElementById("bib");

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
        mt=document.getElementById("math_gp_thy").innerHTML= 4;
        break;
    }
    case "A":
    {
        mt=document.getElementById("math_gp_thy").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        mt=document.getElementById("math_gp_thy").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        mt=document.getElementById("math_gp_thy").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        mt=document.getElementById("math_gp_thy").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        mt=document.getElementById("math_gp_thy").innerHTML= 2;  
        break;
    }
    case "D":
    {
        mt=document.getElementById("math_gp_thy").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        mt=document.getElementById("math_gp_thy").innerHTML= "NG";  
        break;
    }
    default:
        mt=null;
   }  
       return mt;
   }

//math pratical 
function mathGradePratical()
{  
    //mp = math pratical grade point obtained
   var selectBox = document.getElementById("mathpratical");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
        mp=document.getElementById("math_gp_pra").innerHTML= 4;
        break;
    }
    case "A":
    {
        mp=document.getElementById("math_gp_pra").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        mp=document.getElementById("math_gp_pra").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        mp=document.getElementById("math_gp_pra").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        mp=document.getElementById("math_gp_pra").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        mp=document.getElementById("math_gp_pra").innerHTML= 2;  
        break;
    }
    case "D":
    {
        mp=document.getElementById("math_gp_pra").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        mp=document.getElementById("math_gp_pra").innerHTML= "NG";  
        break;
    }
    default:
        mp=null;
   }  
       return mp;
   }

//physics theory
function physicsGradeTheory()
{  
    //pt = physics theory grade point obtained
   var selectBox = document.getElementById("physicstheory");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
        pt=document.getElementById("phy_gp_thy").innerHTML= 4;
        break;
    }
    case "A":
    {
        pt=document.getElementById("phy_gp_thy").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        pt=document.getElementById("phy_gp_thy").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        pt=document.getElementById("phy_gp_thy").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        pt=document.getElementById("phy_gp_thy").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        pt=document.getElementById("phy_gp_thy").innerHTML= 2;  
        break;
    }
    case "D":
    {
        pt=document.getElementById("phy_gp_thy").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        pt=document.getElementById("phy_gp_thy").innerHTML= "NG";  
        break;
    }
    default:
        pt=null;
   }  
       return pt;
   }

//physics pratical
function physicsGradePratical()
{  
    //pp = physics pratical grade point obtained
   var selectBox = document.getElementById("physicspratical");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
        pp=document.getElementById("phy_gp_pra").innerHTML= 4;
        break;
    }
    case "A":
    {
        pp=document.getElementById("phy_gp_pra").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        pp=document.getElementById("phy_gp_pra").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        pp=document.getElementById("phy_gp_pra").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        pp=document.getElementById("phy_gp_pra").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        pp=document.getElementById("phy_gp_pra").innerHTML= 2;  
        break;
    }
    case "D":
    {
        pp=document.getElementById("phy_gp_pra").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        pp=document.getElementById("phy_gp_pra").innerHTML= "NG";  
        break;
    }
    default:
        pp=null;
   } 
       return pp;
   }

//chemistry theory
function chemistryGradeTheory()
{  
    //ct = chemistry theory grade point obtained
   var selectBox = document.getElementById("chemistrytheory");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
        ct=document.getElementById("che_gp_thy").innerHTML= 4;
        break;
    }
    case "A":
    {
        ct=document.getElementById("che_gp_thy").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        ct=document.getElementById("che_gp_thy").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        ct=document.getElementById("che_gp_thy").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        ct=document.getElementById("che_gp_thy").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        ct=document.getElementById("che_gp_thy").innerHTML= 2;  
        break;
    }
    case "D":
    {
        ct=document.getElementById("che_gp_thy").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        ct=document.getElementById("che_gp_thy").innerHTML= "NG";  
        break;
    }
    default:
        ct=null;
   }
       return ct;
   }

//chemistry pratical
function chemistryGradePratical()
{  
    //cp = chemistry pratical grade point obtained
   var selectBox = document.getElementById("chemistrypratical");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
        cp=document.getElementById("che_gp_pra").innerHTML= 4;
        break;
    }
    case "A":
    {
        cp=document.getElementById("che_gp_pra").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        cp=document.getElementById("che_gp_pra").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        cp=document.getElementById("che_gp_pra").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        cp=document.getElementById("che_gp_pra").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        cp=document.getElementById("che_gp_pra").innerHTML= 2;  
        break;
    }
    case "D":
    {
        cp=document.getElementById("che_gp_pra").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        cp=document.getElementById("che_gp_pra").innerHTML= "NG";  
        break;
    }
    default:
        cp=null;
   }
       return cp;
   }

//computer or biology theory
function computerGradeTheory()
{  
    //bt = compurer or biology theory grade point obtained
   var selectBox = document.getElementById("computertheory");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
        bt=document.getElementById("com_gp_thy").innerHTML= 4;
        break;
    }
    case "A":
    {
        bt=document.getElementById("com_gp_thy").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        bt=document.getElementById("com_gp_thy").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        bt=document.getElementById("com_gp_thy").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        bt=document.getElementById("com_gp_thy").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        bt=document.getElementById("com_gp_thy").innerHTML= 2;  
        break;
    }
    case "D":
    {
        bt=document.getElementById("com_gp_thy").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        bt=document.getElementById("com_gp_thy").innerHTML= "NG";  
        break; 
    }
    default:
        bt=null;
   }
       return bt;
   }

//computer or biology pratical
function computerGradePratical()
{  
    //bp = n=computer and biology pratical grade point obtained
   var selectBox = document.getElementById("computerpratical");
   var selectValue = selectBox.options[selectBox.selectedIndex].value;

   switch(selectValue)
   {
    case "A+":
    {
       // resultParagraph.innerHTML ="A+";
        bp=document.getElementById("com_gp_pra").innerHTML= 4;
        break;
    }
    case "A":
    {
        bp=document.getElementById("com_gp_pra").innerHTML= 3.6; 
        break; 
    }
    case "B+":
    {
        bp=document.getElementById("com_gp_pra").innerHTML= 3.2; 
        break; 
    }
    case "B":
    {
        bp=document.getElementById("com_gp_pra").innerHTML= 2.8; 
        break; 
    }
    case "C+":
    {
        bp=document.getElementById("com_gp_pra").innerHTML= 2.4;  
        break;
    }
    case "C":
    {
        bp=document.getElementById("com_gp_pra").innerHTML= 2;  
        break;
    }
    case "D":
    {
        bp=document.getElementById("com_gp_pra").innerHTML= 1.6;  
        break;
    }
    case "NG":
    {
        bp=document.getElementById("com_gp_pra").innerHTML= "NG";  
        break;
    }
    default:
        bp=null;
   }
       return bp;
}       

function abc1() {
    //value of grade point of all subject
    var ntValue = nepaliGradeTheory();
    var npValue = nepaliGradePratical();
    var etValue = englisgGradeTheory();
    var epValue = englishGradePratical();
    var mtValue = mathGradeTheory();
    var mpValue = mathGradePratical();
    var ptValue = physicsGradeTheory();
    var ppValue = physicsGradePratical();
    var ctValue = chemistryGradeTheory();
    var cpValue = chemistryGradePratical();
    var btValue = computerGradeTheory();
    var bpValue = computerGradePratical();

    // cradit hour of computer or biology
    var result = subjectSelect();
    var cchtValue = result.ccht;
    var cchpValue = result.cchp;
    
    //calculate final grade point of all subject
   var nepali =(((2.25*ntValue)+(0.75*npValue))/3).toFixed(2);
   document.getElementById("nfgp").innerHTML=nepali;

   var english=(((3*etValue)+(1*epValue))/4).toFixed(2);
   document.getElementById("efgp").innerHTML=english;

   var math   = (((3.75*mtValue)+(1.25*mpValue))/5).toFixed(2);
   document.getElementById("mfgp").innerHTML=math;

   var physics= (((3.75*ptValue)+(1.25*ppValue))/5).toFixed(2);
   document.getElementById("pfgp").innerHTML=physics;

   var chemistry=(((3.75*ctValue)+(1.25*cpValue))/5).toFixed(2);
   document.getElementById("cfgp").innerHTML=chemistry;

   var computer =(((cchtValue*btValue)+(cchpValue*bpValue))/5).toFixed(2);
   document.getElementById("bfgp").innerHTML=computer;
    
   //nepali final grade
   if(nepali>3.6 || nepali==4)
   {
       document.getElementById("nfg").innerHTML = "A+";
   }
   else if(nepali>3.2 || nepali==3.6)
   {
       document.getElementById("nfg").innerHTML = "A";
   }
   else if(nepali>2.8 || nepali==3.2)
   {
       document.getElementById("nfg").innerHTML = "B+";
   }
   else if(nepali>2.4 || nepali==2.8)
   {
       document.getElementById("nfg").innerHTML = "B";
   }
   else if(nepali>2 || nepali==2.4)
   {
       document.getElementById("nfg").innerHTML = "C+";
   }
   else if(nepali>1.6 || nepali==2)
   {
       document.getElementById("nfg").innerHTML = "C";
   }
   else if(nepali>1.2 || nepali==1.6)
   {
       document.getElementById("nfg").innerHTML = "D";
   }
   else
   {
       document.getElementById("nfg").innerHTML = "NG";
   }

     //english final grade
     if(english>3.6 || english==4)
     {
         document.getElementById("efg").innerHTML = "A+";
     }
     else if(english>3.2 || english==3.6)
     {
         document.getElementById("efg").innerHTML = "A";
     }
     else if(english>2.8 || english==3.2)
     {
         document.getElementById("efg").innerHTML = "B+";
     }
     else if(english>2.4 || english==2.8)
     {
         document.getElementById("efg").innerHTML = "B";
     }
     else if(english>2   || english==2.4)
     {
         document.getElementById("efg").innerHTML = "C+";
     }
     else if(english>1.6 || english==2)
     {
         document.getElementById("efg").innerHTML = "C";
     }
     else if(english>1.2 || english==1.6)
     {
         document.getElementById("efg").innerHTML = "D";
     }
     else
     {
         document.getElementById("efg").innerHTML = "NG";
     }

    //english final grade
     if(english>3.6 || english==4)
     {
         document.getElementById("efg").innerHTML = "A+";
     }
     else if(english>3.2 || english==3.6)
     {
         document.getElementById("efg").innerHTML = "A";
     }
     else if(english>2.8 || english==3.2)
     {
         document.getElementById("efg").innerHTML = "B+";
     }
     else if(english>2.4 || english==2.8)
     {
         document.getElementById("efg").innerHTML = "B";
     }
     else if(english>2   || english==2.4)
     {
         document.getElementById("efg").innerHTML = "C+";
     }
     else if(english>1.6 || english==2)
     {
         document.getElementById("efg").innerHTML = "C";
     }
     else if(english>1.2 || english==1.6)
     {
         document.getElementById("efg").innerHTML = "D";
     }
     else
     {
         document.getElementById("efg").innerHTML = "NG";
     }

     //math final grade
     if(math>3.6 || math==4)
     {
         document.getElementById("mfg").innerHTML = "A+";
     }
     else if(math>3.2 || math==3.6)
     {
         document.getElementById("mfg").innerHTML = "A";
     }
     else if(math>2.8 || math==3.2)
     {
         document.getElementById("mfg").innerHTML = "B+";
     }
     else if(math>2.4 || math==2.8)
     {
         document.getElementById("mfg").innerHTML = "B";
     }
     else if(math>2   || math==2.4)
     {
         document.getElementById("mfg").innerHTML = "C+";
     }
     else if(math>1.6 || math==2)
     {
         document.getElementById("mfg").innerHTML = "C";
     }
     else if(math>1.2 || math==1.6)
     {
         document.getElementById("mfg").innerHTML = "D";
     }
     else
     {
         document.getElementById("mfg").innerHTML = "NG";
     }

     //physics final grade
     if(physics>3.6 || physics==4)
     {
         document.getElementById("pfg").innerHTML = "A+";
     }
     else if(physics>3.2 || physics==3.6)
     {
         document.getElementById("pfg").innerHTML = "A";
     }
     else if(physics>2.8 || physics==3.2)
     {
         document.getElementById("pfg").innerHTML = "B+";
     }
     else if(physics>2.4 || physics==2.8)
     {
         document.getElementById("pfg").innerHTML = "B";
     }
     else if(physics>2   || physics==2.4)
     {
         document.getElementById("pfg").innerHTML = "C+";
     }
     else if(physics>1.6 || physics==2)
     {
         document.getElementById("pfg").innerHTML = "C";
     }
     else if(physics>1.2 || physics==1.6)
     {
         document.getElementById("pfg").innerHTML = "D";
     }
     else
     {
         document.getElementById("pfg").innerHTML = "NG";
     }

     //chemistry final grade
     if(chemistry>3.6 || chemistry==4)
     {
         document.getElementById("cfg").innerHTML = "A+";
     }
     else if(chemistry>3.2 || chemistry==3.6)
     {
         document.getElementById("cfg").innerHTML = "A";
     }
     else if(chemistry>2.8 || chemistry==3.2)
     {
         document.getElementById("cfg").innerHTML = "B+";
     }
     else if(chemistry>2.4 || chemistry==2.8)
     {
         document.getElementById("cfg").innerHTML = "B";
     }
     else if(chemistry>2   || chemistry==2.4)
     {
         document.getElementById("cfg").innerHTML = "C+";
     }
     else if(chemistry>1.6 || chemistry==2)
     {
         document.getElementById("cfg").innerHTML = "C";
     }
     else if(chemistry>1.2 || chemistry==1.6)
     {
         document.getElementById("cfg").innerHTML = "D";
     }
     else
     {
         document.getElementById("cfg").innerHTML = "NG";
     }

     //computer final grade
     if(computer>3.6 || computer==4)
     {
         document.getElementById("bfg").innerHTML = "A+";
     }
     else if(computer>3.2 || computer==3.6)
     {
         document.getElementById("bfg").innerHTML = "A";
     }
     else if(computer>2.8 || computer==3.2)
     {
         document.getElementById("bfg").innerHTML = "B+";
     }
     else if(computer>2.4 || computer==2.8)
     {
         document.getElementById("bfg").innerHTML = "B";
     }
     else if(computer>2   || computer==2.4)
     {
         document.getElementById("bfg").innerHTML = "C+";
     }
     else if(computer>1.6 || computer==2)
     {
         document.getElementById("bfg").innerHTML = "C";
     }
     else if(computer>1.2 || computer==1.6)
     {
         document.getElementById("bfg").innerHTML = "D";
     }
     else
     {
         document.getElementById("bfg").innerHTML = "NG";
     }


//calculate cradit hour and final grade point
var nep,eng,mat,phy,che,com;
nep = nepali * 3;
eng = english * 4;
mat = math * 5;
phy = physics * 5;
che = chemistry * 5;
com = computer * 5;

var sum = (nep + eng + mat + phy + che + com);
var gpa=(sum/27).toFixed(2);
document.getElementById("gpa").innerHTML = gpa;


}
// Ensure your code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Call abc1 when the button is clicked
    document.getElementById("calculateButton").addEventListener("click", abc1);
});
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
$( "#generate_button" ).click(function() {
  // question a1
  var QGeneral_a1 = new Object();
  console.log("generating report");
  var radioValue = $("input[name='general_Qa1']:checked").val();
  QGeneral_a1.answer = radioValue;
  // console.log(QGeneral_a1.answer)
  if (QGeneral_a1.answer == "no"){
    var RCA = $("#RCA_general_Qa1").val();
    var AB = $("#AB_general_Qa1").val();
    QGeneral_a1.AB = AB
    QGeneral_a1.RCA = RCA
    QGeneral_a1.yes=""
    QGeneral_a1.no="no"
  }
  else if (radioValue =="yes"){
    QGeneral_a1.yes="yes"
    QGeneral_a1.no=""
  }
  
  // question a2
  var QGeneral_a2 = new Object();
  var radioValue = $("input[name='general_Qa2']:checked").val();
  QGeneral_a2.answer = radioValue;
  // console.log(QGeneral_a2.answer)
  if (QGeneral_a2.answer == "no"){
    var RCA = $("#RCA_general_Qa2").val();
    var AB = $("#AB_general_Qa2").val();
    QGeneral_a2.AB = AB
    QGeneral_a2.RCA = RCA
    QGeneral_a2.yes = ""
    QGeneral_a2.no = "no"
  }
  else if (radioValue =="yes"){
    QGeneral_a2.yes = "yes"
    QGeneral_a2.no = ""
  }
  console.log(QGeneral_a2)

  // question a3
  var QGeneral_a3 = new Object();
  var radioValue = $("input[name='general_Qa3']:checked").val();
  QGeneral_a3.answer = radioValue;
  // console.log(QGeneral_a3.answer)
  if (QGeneral_a3.answer == "no"){
    var RCA = $("#RCA_general_Qa3").val();
    var AB = $("#AB_general_Qa3").val();
    QGeneral_a3.AB = AB
    QGeneral_a3.RCA = RCA
    QGeneral_a3.yes = ""
    QGeneral_a3.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_a3.yes = "yes"
    QGeneral_a3.no = ""
}
  console.log(QGeneral_a3)

  // question a4
  var QGeneral_a4 = new Object();
  var radioValue = $("input[name='general_Qa4']:checked").val();
  QGeneral_a4.answer = radioValue;
  // console.log(QGeneral_a4.answer)
 if (QGeneral_a4.answer == "no"){
    var RCA = $("#RCA_general_Qa4").val();
    var AB = $("#AB_general_Qa4").val();
    QGeneral_a4.AB = AB
    QGeneral_a4.RCA = RCA
    QGeneral_a4.yes = ""
    QGeneral_a4.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_a4.yes = "yes"
    QGeneral_a4.no = ""
}
  console.log(QGeneral_a4)

    // question a5
  var QGeneral_a5 = new Object();
  var radioValue = $("input[name='general_Qa5']:checked").val();
  QGeneral_a5.answer = radioValue;
  // console.log(QGeneral_a5.answer)
  if (QGeneral_a5.answer == "no"){
    var RCA = $("#RCA_general_Qa5").val();
    var AB = $("#AB_general_Qa5").val();
    QGeneral_a5.AB = AB
    QGeneral_a5.RCA = RCA
    QGeneral_a5.yes = ""
    QGeneral_a5.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_a5.yes = "yes"
    QGeneral_a5.no = ""
}
  console.log(QGeneral_a5)

  // question a6
  var QGeneral_a6 = new Object();
  var radioValue = $("input[name='general_Qa6']:checked").val();
  QGeneral_a6.answer = radioValue;
  // console.log(QGeneral_a6.answer)
  if (QGeneral_a6.answer == "no"){
    var RCA = $("#RCA_general_Qa6").val();
    var AB = $("#AB_general_Qa6").val();
    QGeneral_a6.AB = AB
    QGeneral_a6.RCA = RCA
    QGeneral_a6.yes = ""
    QGeneral_a6.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_a6.yes = "yes"
    QGeneral_a6.no = ""
}
  console.log(QGeneral_a6)

  // question a7
  var QGeneral_a7 = new Object();
  var radioValue = $("input[name='general_Qa7']:checked").val();
  QGeneral_a7.answer = radioValue;
  // console.log(QGeneral_a7.answer)
  if (QGeneral_a7.answer == "no"){
    var RCA = $("#RCA_general_Qa7").val();
    var AB = $("#AB_general_Qa7").val();
    QGeneral_a7.AB = AB
    QGeneral_a7.RCA = RCA
    QGeneral_a7.yes = ""
    QGeneral_a7.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_a7.yes = "yes"
    QGeneral_a7.no = ""
}
  console.log(QGeneral_a7)

  // question a8
  var QGeneral_a8 = new Object();
  var radioValue = $("input[name='general_Qa8']:checked").val();
  QGeneral_a8.answer = radioValue;
  // console.log(QGeneral_a8.answer)
  if (QGeneral_a8.answer == "no"){
    var RCA = $("#RCA_general_Qa8").val();
    var AB = $("#AB_general_Qa8").val();
    QGeneral_a8.AB = AB
    QGeneral_a8.RCA = RCA
    QGeneral_a8.yes = ""
    QGeneral_a8.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_a8.yes = "yes"
    QGeneral_a8.no = ""
}
  console.log(QGeneral_a8)

  // question b
  var QGeneral_b = new Object();
  var radioValue = $("input[name='general_Qb']:checked").val();
  QGeneral_b.answer = radioValue;
  // console.log(QGeneral_b.answer)
  if (QGeneral_b.answer == "no"){
    var RCA = $("#RCA_general_Qb").val();
    var AB = $("#AB_general_Qb").val();
    QGeneral_b.AB = AB
    QGeneral_b.RCA = RCA
    QGeneral_b.yes = ""
    QGeneral_b.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_b.yes = "yes"
    QGeneral_b.no = ""
}
  console.log(QGeneral_b)

  // question c
  var QGeneral_c = new Object();
  var radioValue = $("input[name='general_Qc']:checked").val();
  QGeneral_c.answer = radioValue;
  // console.log(QGeneral_c.answer)
  if (QGeneral_c.answer == "no"){
    var RCA = $("#RCA_general_Qc").val();
    var AB = $("#AB_general_Qc").val();
    QGeneral_c.AB = AB
    QGeneral_c.RCA = RCA
    QGeneral_c.yes = ""
    QGeneral_c.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_c.yes = "yes"
    QGeneral_c.no = ""
}
  console.log(QGeneral_c)

  // question d
  var QGeneral_d = new Object();
  var radioValue = $("input[name='general_Qd']:checked").val();
  QGeneral_d.answer = radioValue;
  // console.log(QGeneral_d.answer)
  if (QGeneral_d.answer == "no"){
    var RCA = $("#RCA_general_Qd").val();
    var AB = $("#AB_general_Qd").val();
    QGeneral_d.AB = AB
    QGeneral_d.RCA = RCA
    QGeneral_d.yes = ""
    QGeneral_d.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_d.yes = "yes"
    QGeneral_d.no = ""
}
  console.log(QGeneral_d)
  
  // question e
  var QGeneral_e = new Object();
  var radioValue = $("input[name='general_Qe']:checked").val();
  QGeneral_e.answer = radioValue;
  // console.log(QGeneral_e.answer)
  if (QGeneral_e.answer == "no"){
    var RCA = $("#RCA_general_Qe").val();
    var AB = $("#AB_general_Qe").val();
    QGeneral_e.AB = AB
    QGeneral_e.RCA = RCA
    QGeneral_e.yes = ""
    QGeneral_e.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_e.yes = "yes"
    QGeneral_e.no = ""
}
  console.log(QGeneral_e)

  // question f1
  var QGeneral_f1 = new Object();
  var radioValue = $("input[name='general_Qf1']:checked").val();
  QGeneral_f1.answer = radioValue;
  // console.log(QGeneral_f1.answer)
  if (QGeneral_f1.answer == "no"){
    var RCA = $("#RCA_general_Qf1").val();
    var AB = $("#AB_general_Qf1").val();
    QGeneral_f1.AB = AB
    QGeneral_f1.RCA = RCA
    QGeneral_f1.yes = ""
    QGeneral_f1.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_f1.yes = "yes"
    QGeneral_f1.no = ""
}
  console.log(QGeneral_f1)
  
  // question f2
  var QGeneral_f2 = new Object();
  var radioValue = $("input[name='general_Qf2']:checked").val();
  QGeneral_f2.answer = radioValue;
  // console.log(QGeneral_f2.answer)
  if (QGeneral_f2.answer == "no"){
    var RCA = $("#RCA_general_Qf2").val();
    var AB = $("#AB_general_Qf2").val();
    QGeneral_f2.AB = AB
    QGeneral_f2.RCA = RCA
    QGeneral_f2.yes = ""
    QGeneral_f2.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_f2.yes = "yes"
    QGeneral_f2.no = ""
}
  console.log(QGeneral_f2)

  // question f3
  var QGeneral_f3 = new Object();
  var radioValue = $("input[name='general_Qf3']:checked").val();
  QGeneral_f3.answer = radioValue;
  // console.log(QGeneral_f3.answer)
  if (QGeneral_f3.answer == "no"){
    var RCA = $("#RCA_general_Qf3").val();
    var AB = $("#AB_general_Qf3").val();
    QGeneral_f3.AB = AB
    QGeneral_f3.RCA = RCA
    QGeneral_f3.yes = ""
    QGeneral_f3.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_f3.yes = "yes"
    QGeneral_f3.no = ""
}
  console.log(QGeneral_f3)

  // question g1
  var QGeneral_g1 = new Object();
  var radioValue = $("input[name='general_Qg1']:checked").val();
  QGeneral_g1.answer = radioValue;
  // console.log(QGeneral_g1.answer)
  if (QGeneral_g1.answer == "no"){
    var RCA = $("#RCA_general_Qg1").val();
    var AB = $("#AB_general_Qg1").val();
    QGeneral_g1.AB = AB
    QGeneral_g1.RCA = RCA
    QGeneral_g1.yes = ""
    QGeneral_g1.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_g1.yes = "yes"
    QGeneral_g1.no = ""
}
  console.log(QGeneral_g1)

  // question g2
  var QGeneral_g2 = new Object();
  var radioValue = $("input[name='general_Qg2']:checked").val();
  QGeneral_g2.answer = radioValue;
  // console.log(QGeneral_g2.answer)
 if (QGeneral_g2.answer == "no"){
    var RCA = $("#RCA_general_Qg2").val();
    var AB = $("#AB_general_Qg2").val();
    QGeneral_g2.AB = AB
    QGeneral_g2.RCA = RCA
    QGeneral_g2.yes = ""
    QGeneral_g2.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_g2.yes = "yes"
    QGeneral_g2.no = ""
}
  console.log(QGeneral_g2)

  // question i
  var QGeneral_i = new Object();
  var radioValue = $("input[name='general_Qi']:checked").val();
  QGeneral_i.answer = radioValue;
  // console.log(QGeneral_i.answer)
  if (QGeneral_i.answer == "no"){
    var RCA = $("#RCA_general_Qi").val();
    var AB = $("#AB_general_Qi").val();
    QGeneral_i.AB = AB
    QGeneral_i.RCA = RCA
    QGeneral_i.yes = ""
    QGeneral_i.no = "no"
}
else if (radioValue =="yes"){
    QGeneral_i.yes = "yes"
    QGeneral_i.no = ""
}
  console.log(QGeneral_i)

  // Accom
  // question a1
  var QAccom_a1 = new Object();
  var radioValue = $("input[name='accom_Qa1']:checked").val();
  QAccom_a1.answer = radioValue;
  // console.log(QGeneral_a1.answer)
  if (QAccom_a1.answer == "no"){
    var RCA = $("#RCA_accom_Qa1").val();
    var AB = $("#AB_accom_Qa1").val();
    QAccom_a1.AB = AB
    QAccom_a1.RCA = RCA
    QAccom_a1.yes = ""
    QAccom_a1.no = "no"
}
else if (radioValue =="yes"){
    QAccom_a1.yes = "yes"
    QAccom_a1.no = ""
}
  // question a2
  var QAccom_a2 = new Object();
  var radioValue = $("input[name='accom_Qa2']:checked").val();
  QAccom_a2.answer = radioValue;
  // console.log(QGeneral_a2.answer)
  if (QAccom_a2.answer == "no"){
    var RCA = $("#RCA_accom_Qa2").val();
    var AB = $("#AB_accom_Qa2").val();
    QAccom_a2.AB = AB
    QAccom_a2.RCA = RCA
    QAccom_a2.yes = ""
    QAccom_a2.no = "no"
}
else if (radioValue =="yes"){
    QAccom_a2.yes = "yes"
    QAccom_a2.no = ""
}
  // question a3
  var QAccom_a3 = new Object();
  var radioValue = $("input[name='accom_Qa3']:checked").val();
  QAccom_a3.answer = radioValue;
  // console.log(QGeneral_a3.answer)
  if (QAccom_a3.answer == "no"){
    var RCA = $("#RCA_accom_Qa3").val();
    var AB = $("#AB_accom_Qa3").val();
    QAccom_a3.AB = AB
    QAccom_a3.RCA = RCA
    QAccom_a3.yes = ""
    QAccom_a3.no = "no"
}
else if (radioValue =="yes"){
    QAccom_a3.yes = "yes"
    QAccom_a3.no = ""
}
  // question a4
  var QAccom_a4 = new Object();
  var radioValue = $("input[name='accom_Qa4']:checked").val();
  QAccom_a4.answer = radioValue;
  // console.log(QGeneral_a4.answer)
  if (QAccom_a4.answer == "no"){
    var RCA = $("#RCA_accom_Qa4").val();
    var AB = $("#AB_accom_Qa4").val();
    QAccom_a4.AB = AB
    QAccom_a4.RCA = RCA
    QAccom_a4.yes = ""
    QAccom_a4.no = "no"
}
else if (radioValue =="yes"){
    QAccom_a4.yes = "yes"
    QAccom_a4.no = ""
}
  // question a5
  var QAccom_a5 = new Object();
  var radioValue = $("input[name='accom_Qa5']:checked").val();
  QAccom_a5.answer = radioValue;
  // console.log(QGeneral_a5.answer)
  if (QAccom_a5.answer == "no"){
    var RCA = $("#RCA_accom_Qa5").val();
    var AB = $("#AB_accom_Qa5").val();
    QAccom_a5.AB = AB
    QAccom_a5.RCA = RCA
    QAccom_a5.yes = ""
    QAccom_a5.no = "no"
}
else if (radioValue =="yes"){
    QAccom_a5.yes = "yes"
    QAccom_a5.no = ""
}
  // question a6
  var QAccom_a6 = new Object();
  var radioValue = $("input[name='accom_Qa6']:checked").val();
  QAccom_a6.answer = radioValue;
  // console.log(QGeneral_a6.answer)
  if (QAccom_a6.answer == "no"){
    var RCA = $("#RCA_accom_Qa6").val();
    var AB = $("#AB_accom_Qa6").val();
    QAccom_a6.AB = AB
    QAccom_a6.RCA = RCA
    QAccom_a6.yes = ""
    QAccom_a6.no = "no"
}
else if (radioValue =="yes"){
    QAccom_a6.yes = "yes"
    QAccom_a6.no = ""
}
  // question a7
  var QAccom_a7 = new Object();
  var radioValue = $("input[name='accom_Qa7']:checked").val();
  QAccom_a7.answer = radioValue;
  // console.log(QGeneral_a7.answer)
  if (QAccom_a7.answer == "no"){
    var RCA = $("#RCA_accom_Qa7").val();
    var AB = $("#AB_accom_Qa7").val();
    QAccom_a7.AB = AB
    QAccom_a7.RCA = RCA
    QAccom_a7.yes = ""
    QAccom_a7.no = "no"
}
else if (radioValue =="yes"){
    QAccom_a7.yes = "yes"
    QAccom_a7.no = ""
}
  // question a8
  var QAccom_a8 = new Object();
  var radioValue = $("input[name='accom_Qa8']:checked").val();
  QAccom_a8.answer = radioValue;
  // console.log(QGeneral_a8.answer)
  if (QAccom_a8.answer == "no"){
    var RCA = $("#RCA_accom_Qa8").val();
    var AB = $("#AB_accom_Qa8").val();
    QAccom_a8.AB = AB
    QAccom_a8.RCA = RCA
    QAccom_a8.yes = ""
    QAccom_a8.no = "no"
}
else if (radioValue =="yes"){
    QAccom_a8.yes = "yes"
    QAccom_a8.no = ""
}
  // question b1
  var QAccom_b1 = new Object();
  var radioValue = $("input[name='accom_Qb1']:checked").val();
  QAccom_b1.answer = radioValue;
  // console.log(QGeneral_b1.answer)
  if (QAccom_b1.answer == "no"){
    var RCA = $("#RCA_accom_Qb1").val();
    var AB = $("#AB_accom_Qb1").val();
    QAccom_b1.AB = AB
    QAccom_b1.RCA = RCA
    QAccom_b1.yes = ""
    QAccom_b1.no = "no"
}
else if (radioValue =="yes"){
    QAccom_b1.yes = "yes"
    QAccom_b1.no = ""
}
  // question b2
  var QAccom_b2 = new Object();
  var radioValue = $("input[name='accom_Qb2']:checked").val();
  QAccom_b2.answer = radioValue;
  // console.log(QGeneral_b2.answer)
  if (QAccom_b2.answer == "no"){
    var RCA = $("#RCA_accom_Qb2").val();
    var AB = $("#AB_accom_Qb2").val();
    QAccom_b2.AB = AB
    QAccom_b2.RCA = RCA
    QAccom_b2.yes = ""
    QAccom_b2.no = "no"
}
else if (radioValue =="yes"){
    QAccom_b2.yes = "yes"
    QAccom_b2.no = ""
}
  // question c1
  var QAccom_c1 = new Object();
  var radioValue = $("input[name='accom_Qc1']:checked").val();
  QAccom_c1.answer = radioValue;
  // console.log(QGeneral_c1.answer)
  if (QAccom_c1.answer == "no"){
    var RCA = $("#RCA_accom_Qc1").val();
    var AB = $("#AB_accom_Qc1").val();
    QAccom_c1.AB = AB
    QAccom_c1.RCA = RCA
    QAccom_c1.yes = ""
    QAccom_c1.no = "no"
}
else if (radioValue =="yes"){
    QAccom_c1.yes = "yes"
    QAccom_c1.no = ""
}
  // question c2
  var QAccom_c2 = new Object();
  var radioValue = $("input[name='accom_Qc2']:checked").val();
  QAccom_c2.answer = radioValue;
  // console.log(QGeneral_c2.answer)
  if (QAccom_c2.answer == "no"){
    var RCA = $("#RCA_accom_Qc2").val();
    var AB = $("#AB_accom_Qc2").val();
    QAccom_c2.AB = AB
    QAccom_c2.RCA = RCA
    QAccom_c2.yes = ""
    QAccom_c2.no = "no"
}
else if (radioValue =="yes"){
    QAccom_c2.yes = "yes"
    QAccom_c2.no = ""
}
  // question c3
  var QAccom_c3 = new Object();
  var radioValue = $("input[name='accom_Qc3']:checked").val();
  QAccom_c3.answer = radioValue;
  // console.log(QGeneral_c3.answer)
  if (QAccom_c3.answer == "no"){
    var RCA = $("#RCA_accom_Qc3").val();
    var AB = $("#AB_accom_Qc3").val();
    QAccom_c3.AB = AB
    QAccom_c3.RCA = RCA
    QAccom_c3.yes = ""
    QAccom_c3.no = "no"
}
else if (radioValue =="yes"){
    QAccom_c3.yes = "yes"
    QAccom_c3.no = ""
}
  // question c4
  var QAccom_c4 = new Object();
  var radioValue = $("input[name='accom_Qc4']:checked").val();
  QAccom_c4.answer = radioValue;
  // console.log(QGeneral_c4.answer)
  if (QAccom_c4.answer == "no"){
    var RCA = $("#RCA_accom_Qc4").val();
    var AB = $("#AB_accom_Qc4").val();
    QAccom_c4.AB = AB
    QAccom_c4.RCA = RCA
    QAccom_c4.yes = ""
    QAccom_c4.no = "no"
}
else if (radioValue =="yes"){
    QAccom_c4.yes = "yes"
    QAccom_c4.no = ""
}
  // question d1
  var QAccom_d1 = new Object();
  var radioValue = $("input[name='accom_Qd1']:checked").val();
  QAccom_d1.answer = radioValue;
  // console.log(QGeneral_d1.answer)
  if (QAccom_d1.answer == "no"){
    var RCA = $("#RCA_accom_Qd1").val();
    var AB = $("#AB_accom_Qd1").val();
    QAccom_d1.AB = AB
    QAccom_d1.RCA = RCA
    QAccom_d1.yes = ""
    QAccom_d1.no = "no"
}
else if (radioValue =="yes"){
    QAccom_d1.yes = "yes"
    QAccom_d1.no = ""
}
  // question d2
  var QAccom_d2 = new Object();
  var radioValue = $("input[name='accom_Qd2']:checked").val();
  QAccom_d2.answer = radioValue;
  // console.log(QGeneral_d2.answer)
  if (QAccom_d2.answer == "no"){
    var RCA = $("#RCA_accom_Qd2").val();
    var AB = $("#AB_accom_Qd2").val();
    QAccom_d2.AB = AB
    QAccom_d2.RCA = RCA
    QAccom_d2.yes = ""
    QAccom_d2.no = "no"
}
else if (radioValue =="yes"){
    QAccom_d2.yes = "yes"
    QAccom_d2.no = ""
}
// question e1
var QAccom_e1 = new Object();
var radioValue = $("input[name='accom_Qe1']:checked").val();
QAccom_e1.answer = radioValue;
// console.log(QAccom_e1.answer)
if (QAccom_e1.answer == "no"){
    var RCA = $("#RCA_accom_Qe1").val();
    var AB = $("#AB_accom_Qe1").val();
    QAccom_e1.AB = AB
    QAccom_e1.RCA = RCA
    QAccom_e1.yes = ""
    QAccom_e1.no = "no"
}
else if (radioValue =="yes"){
    QAccom_e1.yes = "yes"
    QAccom_e1.no = ""
}
// question e2
var QAccom_e2 = new Object();
var radioValue = $("input[name='accom_Qe2']:checked").val();
QAccom_e2.answer = radioValue;
// console.log(QAccom_e2.answer)
if (QAccom_e2.answer == "no"){
    var RCA = $("#RCA_accom_Qe2").val();
    var AB = $("#AB_accom_Qe2").val();
    QAccom_e2.AB = AB
    QAccom_e2.RCA = RCA
    QAccom_e2.yes = ""
    QAccom_e2.no = "no"
}
else if (radioValue =="yes"){
    QAccom_e2.yes = "yes"
    QAccom_e2.no = ""
}
// question e3
var QAccom_e3 = new Object();
var radioValue = $("input[name='accom_Qe3']:checked").val();
QAccom_e3.answer = radioValue;
// console.log(QAccom_e3.answer)
if (QAccom_e3.answer == "no"){
    var RCA = $("#RCA_accom_Qe3").val();
    var AB = $("#AB_accom_Qe3").val();
    QAccom_e3.AB = AB
    QAccom_e3.RCA = RCA
    QAccom_e3.yes = ""
    QAccom_e3.no = "no"
}
else if (radioValue =="yes"){
    QAccom_e3.yes = "yes"
    QAccom_e3.no = ""
}
// question e4
var QAccom_e4 = new Object();
var radioValue = $("input[name='accom_Qe4']:checked").val();
QAccom_e4.answer = radioValue;
// console.log(QAccom_e4.answer)
if (QAccom_e4.answer == "no"){
    var RCA = $("#RCA_accom_Qe4").val();
    var AB = $("#AB_accom_Qe4").val();
    QAccom_e4.AB = AB
    QAccom_e4.RCA = RCA
    QAccom_e4.yes = ""
    QAccom_e4.no = "no"
}
else if (radioValue =="yes"){
    QAccom_e4.yes = "yes"
    QAccom_e4.no = ""
}
// question f1
var QAccom_f1 = new Object();
var radioValue = $("input[name='accom_Qf1']:checked").val();
QAccom_f1.answer = radioValue;
// console.log(QAccom_f1.answer)
if (QAccom_f1.answer == "no"){
    var RCA = $("#RCA_accom_Qf1").val();
    var AB = $("#AB_accom_Qf1").val();
    QAccom_f1.AB = AB
    QAccom_f1.RCA = RCA
    QAccom_f1.yes = ""
    QAccom_f1.no = "no"
}
else if (radioValue =="yes"){
    QAccom_f1.yes = "yes"
    QAccom_f1.no = ""
}
// question f2
var QAccom_f2 = new Object();
var radioValue = $("input[name='accom_Qf2']:checked").val();
QAccom_f2.answer = radioValue;
// console.log(QAccom_f2.answer)
if (QAccom_f2.answer == "no"){
    var RCA = $("#RCA_accom_Qf2").val();
    var AB = $("#AB_accom_Qf2").val();
    QAccom_f2.AB = AB
    QAccom_f2.RCA = RCA
    QAccom_f2.yes = ""
    QAccom_f2.no = "no"
}
else if (radioValue =="yes"){
    QAccom_f2.yes = "yes"
    QAccom_f2.no = ""
}
// question g1
var QAccom_g1 = new Object();
var radioValue = $("input[name='accom_Qg1']:checked").val();
QAccom_g1.answer = radioValue;
// console.log(QAccom_g1.answer)
if (QAccom_g1.answer == "no"){
    var RCA = $("#RCA_accom_Qg1").val();
    var AB = $("#AB_accom_Qg1").val();
    QAccom_g1.AB = AB
    QAccom_g1.RCA = RCA
    QAccom_g1.yes = ""
    QAccom_g1.no = "no"
}
else if (radioValue =="yes"){
    QAccom_g1.yes = "yes"
    QAccom_g1.no = ""
}
// question g2
var QAccom_g2 = new Object();
var radioValue = $("input[name='accom_Qg2']:checked").val();
QAccom_g2.answer = radioValue;
// console.log(QAccom_g2.answer)
if (QAccom_g2.answer == "no"){
    var RCA = $("#RCA_accom_Qg2").val();
    var AB = $("#AB_accom_Qg2").val();
    QAccom_g2.AB = AB
    QAccom_g2.RCA = RCA
    QAccom_g2.yes = ""
    QAccom_g2.no = "no"
}
else if (radioValue =="yes"){
    QAccom_g2.yes = "yes"
    QAccom_g2.no = ""
}
// question g3
var QAccom_g3 = new Object();
var radioValue = $("input[name='accom_Qg3']:checked").val();
QAccom_g3.answer = radioValue;
// console.log(QAccom_g3.answer)
if (QAccom_g3.answer == "no"){
    var RCA = $("#RCA_accom_Qg3").val();
    var AB = $("#AB_accom_Qg3").val();
    QAccom_g3.AB = AB
    QAccom_g3.RCA = RCA
    QAccom_g3.yes = ""
    QAccom_g3.no = "no"
}
else if (radioValue =="yes"){
    QAccom_g3.yes = "yes"
    QAccom_g3.no = ""
}
// question g4
var QAccom_g4 = new Object();
var radioValue = $("input[name='accom_Qg4']:checked").val();
QAccom_g4.answer = radioValue;
// console.log(QAccom_g4.answer)
if (QAccom_g4.answer == "no"){
    var RCA = $("#RCA_accom_Qg4").val();
    var AB = $("#AB_accom_Qg4").val();
    QAccom_g4.AB = AB
    QAccom_g4.RCA = RCA
    QAccom_g4.yes = ""
    QAccom_g4.no = "no"
}
else if (radioValue =="yes"){
    QAccom_g4.yes = "yes"
    QAccom_g4.no = ""
}
// question g5
var QAccom_g5 = new Object();
var radioValue = $("input[name='accom_Qg5']:checked").val();
QAccom_g5.answer = radioValue;
// console.log(QAccom_g5.answer)
if (QAccom_g5.answer == "no"){
    var RCA = $("#RCA_accom_Qg5").val();
    var AB = $("#AB_accom_Qg5").val();
    QAccom_g5.AB = AB
    QAccom_g5.RCA = RCA
    QAccom_g5.yes = ""
    QAccom_g5.no = "no"
}
else if (radioValue =="yes"){
    QAccom_g5.yes = "yes"
    QAccom_g5.no = ""
}
// question g6
var QAccom_g6 = new Object();
var radioValue = $("input[name='accom_Qg6']:checked").val();
QAccom_g6.answer = radioValue;
// console.log(QAccom_g6.answer)
if (QAccom_g6.answer == "no"){
    var RCA = $("#RCA_accom_Qg6").val();
    var AB = $("#AB_accom_Qg6").val();
    QAccom_g6.AB = AB
    QAccom_g6.RCA = RCA
    QAccom_g6.yes = ""
    QAccom_g6.no = "no"
}
else if (radioValue =="yes"){
    QAccom_g6.yes = "yes"
    QAccom_g6.no = ""
}
// question h1
var QAccom_h1 = new Object();
var radioValue = $("input[name='accom_Qh1']:checked").val();
QAccom_h1.answer = radioValue;
// console.log(QAccom_h1.answer)
if (QAccom_h1.answer == "no"){
    var RCA = $("#RCA_accom_Qh1").val();
    var AB = $("#AB_accom_Qh1").val();
    QAccom_h1.AB = AB
    QAccom_h1.RCA = RCA
    QAccom_h1.yes = ""
    QAccom_h1.no = "no"
}
else if (radioValue =="yes"){
    QAccom_h1.yes = "yes"
    QAccom_h1.no = ""
}
// question h2
var QAccom_h2 = new Object();
var radioValue = $("input[name='accom_Qh2']:checked").val();
QAccom_h2.answer = radioValue;
// console.log(QAccom_h2.answer)
if (QAccom_h2.answer == "no"){
    var RCA = $("#RCA_accom_Qh2").val();
    var AB = $("#AB_accom_Qh2").val();
    QAccom_h2.AB = AB
    QAccom_h2.RCA = RCA
    QAccom_h2.yes = ""
    QAccom_h2.no = "no"
}
else if (radioValue =="yes"){
    QAccom_h2.yes = "yes"
    QAccom_h2.no = ""
}
// question h3
var QAccom_h3 = new Object();
var radioValue = $("input[name='accom_Qh3']:checked").val();
QAccom_h3.answer = radioValue;
// console.log(QAccom_h3.answer)
if (QAccom_h3.answer == "no"){
    var RCA = $("#RCA_accom_Qh3").val();
    var AB = $("#AB_accom_Qh3").val();
    QAccom_h3.AB = AB
    QAccom_h3.RCA = RCA
    QAccom_h3.yes = ""
    QAccom_h3.no = "no"
}
else if (radioValue =="yes"){
    QAccom_h3.yes = "yes"
    QAccom_h3.no = ""
}
// question h4
var QAccom_h4 = new Object();
var radioValue = $("input[name='accom_Qh4']:checked").val();
QAccom_h4.answer = radioValue;
// console.log(QAccom_h4.answer)
if (QAccom_h4.answer == "no"){
    var RCA = $("#RCA_accom_Qh4").val();
    var AB = $("#AB_accom_Qh4").val();
    QAccom_h4.AB = AB
    QAccom_h4.RCA = RCA
    QAccom_h4.yes = ""
    QAccom_h4.no = "no"
}
else if (radioValue =="yes"){
    QAccom_h4.yes = "yes"
    QAccom_h4.no = ""
}
// office
// question a1
var QOffices_a1 = new Object();
var radioValue = $("input[name='offices_Qa1']:checked").val();
QOffices_a1.answer = radioValue;
// console.log(QOffices_a1.answer)
if (QOffices_a1.answer == "no"){
    var RCA = $("#RCA_offices_Qa1").val();
    var AB = $("#AB_offices_Qa1").val();
    QOffices_a1.AB = AB
    QOffices_a1.RCA = RCA
    QOffices_a1.yes = ""
    QOffices_a1.no = "no"
}
else if (radioValue =="yes"){
    QOffices_a1.yes = "yes"
    QOffices_a1.no = ""
}
// question a2
var QOffices_a2 = new Object();
var radioValue = $("input[name='offices_Qa2']:checked").val();
QOffices_a2.answer = radioValue;
// console.log(QOffices_a2.answer)
if (QOffices_a2.answer == "no"){
    var RCA = $("#RCA_offices_Qa2").val();
    var AB = $("#AB_offices_Qa2").val();
    QOffices_a2.AB = AB
    QOffices_a2.RCA = RCA
    QOffices_a2.yes = ""
    QOffices_a2.no = "no"
}
else if (radioValue =="yes"){
    QOffices_a2.yes = "yes"
    QOffices_a2.no = ""
}
// question a3
var QOffices_a3 = new Object();
var radioValue = $("input[name='offices_Qa3']:checked").val();
QOffices_a3.answer = radioValue;
// console.log(QOffices_a3.answer)
if (QOffices_a3.answer == "no"){
    var RCA = $("#RCA_offices_Qa3").val();
    var AB = $("#AB_offices_Qa3").val();
    QOffices_a3.AB = AB
    QOffices_a3.RCA = RCA
    QOffices_a3.yes = ""
    QOffices_a3.no = "no"
}
else if (radioValue =="yes"){
    QOffices_a3.yes = "yes"
    QOffices_a3.no = ""
}
// question a4
var QOffices_a4 = new Object();
var radioValue = $("input[name='offices_Qa4']:checked").val();
QOffices_a4.answer = radioValue;
// console.log(QOffices_a4.answer)
if (QOffices_a4.answer == "no"){
    var RCA = $("#RCA_offices_Qa4").val();
    var AB = $("#AB_offices_Qa4").val();
    QOffices_a4.AB = AB
    QOffices_a4.RCA = RCA
    QOffices_a4.yes = ""
    QOffices_a4.no = "no"
}
else if (radioValue =="yes"){
    QOffices_a4.yes = "yes"
    QOffices_a4.no = ""
}
// question a5
var QOffices_a5 = new Object();
var radioValue = $("input[name='offices_Qa5']:checked").val();
QOffices_a5.answer = radioValue;
// console.log(QOffices_a5.answer)
if (QOffices_a5.answer == "no"){
    var RCA = $("#RCA_offices_Qa5").val();
    var AB = $("#AB_offices_Qa5").val();
    QOffices_a5.AB = AB
    QOffices_a5.RCA = RCA
    QOffices_a5.yes = ""
    QOffices_a5.no = "no"
}
else if (radioValue =="yes"){
    QOffices_a5.yes = "yes"
    QOffices_a5.no = ""
}

// question a6
var QOffices_a6 = new Object();
var radioValue = $("input[name='offices_Qa6']:checked").val();
QOffices_a6.answer = radioValue;
// console.log(QOffices_a6.answer)
if (QOffices_a6.answer == "no"){
    var RCA = $("#RCA_offices_Qa6").val();
    var AB = $("#AB_offices_Qa6").val();
    QOffices_a6.AB = AB
    QOffices_a6.RCA = RCA
    QOffices_a6.yes = ""
    QOffices_a6.no = "no"
}
else if (radioValue =="yes"){
    QOffices_a6.yes = "yes"
    QOffices_a6.no = ""
}

// question b1
var QOffices_b1 = new Object();
var radioValue = $("input[name='offices_Qb1']:checked").val();
QOffices_b1.answer = radioValue;
// console.log(QOffices_b1.answer)
if (QOffices_b1.answer == "no"){
    var RCA = $("#RCA_offices_Qb1").val();
    var AB = $("#AB_offices_Qb1").val();
    QOffices_b1.AB = AB
    QOffices_b1.RCA = RCA
    QOffices_b1.yes = ""
    QOffices_b1.no = "no"
}
else if (radioValue =="yes"){
    QOffices_b1.yes = "yes"
    QOffices_b1.no = ""
}
// question b2
var QOffices_b2 = new Object();
var radioValue = $("input[name='offices_Qb2']:checked").val();
QOffices_b2.answer = radioValue;
// console.log(QOffices_b2.answer)
if (QOffices_b2.answer == "no"){
    var RCA = $("#RCA_offices_Qb2").val();
    var AB = $("#AB_offices_Qb2").val();
    QOffices_b2.AB = AB
    QOffices_b2.RCA = RCA
    QOffices_b2.yes = ""
    QOffices_b2.no = "no"
}
else if (radioValue =="yes"){
    QOffices_b2.yes = "yes"
    QOffices_b2.no = ""
}
// question c1
var QOffices_c1 = new Object();
var radioValue = $("input[name='offices_Qc1']:checked").val();
QOffices_c1.answer = radioValue;
// console.log(QOffices_c1.answer)
if (QOffices_c1.answer == "no"){
    var RCA = $("#RCA_offices_Qc1").val();
    var AB = $("#AB_offices_Qc1").val();
    QOffices_c1.AB = AB
    QOffices_c1.RCA = RCA
    QOffices_c1.yes = ""
    QOffices_c1.no = "no"
}
else if (radioValue =="yes"){
    QOffices_c1.yes = "yes"
    QOffices_c1.no = ""
}
// question c2
var QOffices_c2 = new Object();
var radioValue = $("input[name='offices_Qc2']:checked").val();
QOffices_c2.answer = radioValue;
// console.log(QOffices_c2.answer)
if (QOffices_c2.answer == "no"){
    var RCA = $("#RCA_offices_Qc2").val();
    var AB = $("#AB_offices_Qc2").val();
    QOffices_c2.AB = AB
    QOffices_c2.RCA = RCA
    QOffices_c2.yes = ""
    QOffices_c2.no = "no"
}
else if (radioValue =="yes"){
    QOffices_c2.yes = "yes"
    QOffices_c2.no = ""
}
// question c3
var QOffices_c3 = new Object();
var radioValue = $("input[name='offices_Qc3']:checked").val();
QOffices_c3.answer = radioValue;
// console.log(QOffices_c3.answer)
if (QOffices_c3.answer == "no"){
    var RCA = $("#RCA_offices_Qc3").val();
    var AB = $("#AB_offices_Qc3").val();
    QOffices_c3.AB = AB
    QOffices_c3.RCA = RCA
    QOffices_c3.yes = ""
    QOffices_c3.no = "no"
}
else if (radioValue =="yes"){
    QOffices_c3.yes = "yes"
    QOffices_c3.no = ""
}
// question c4
var QOffices_c4 = new Object();
var radioValue = $("input[name='offices_Qc4']:checked").val();
QOffices_c4.answer = radioValue;
// console.log(QOffices_c4.answer)
if (QOffices_c4.answer == "no"){
    var RCA = $("#RCA_offices_Qc4").val();
    var AB = $("#AB_offices_Qc4").val();
    QOffices_c4.AB = AB
    QOffices_c4.RCA = RCA
    QOffices_c4.yes = ""
    QOffices_c4.no = "no"
}
else if (radioValue =="yes"){
    QOffices_c4.yes = "yes"
    QOffices_c4.no = ""
}
// question d1
var QOffices_d1 = new Object();
var radioValue = $("input[name='offices_Qd1']:checked").val();
QOffices_d1.answer = radioValue;
// console.log(QOffices_d1.answer)
if (QOffices_d1.answer == "no"){
    var RCA = $("#RCA_offices_Qd1").val();
    var AB = $("#AB_offices_Qd1").val();
    QOffices_d1.AB = AB
    QOffices_d1.RCA = RCA
    QOffices_d1.yes = ""
    QOffices_d1.no = "no"
}
else if (radioValue =="yes"){
    QOffices_d1.yes = "yes"
    QOffices_d1.no = ""
}
// question d2
var QOffices_d2 = new Object();
var radioValue = $("input[name='offices_Qd2']:checked").val();
QOffices_d2.answer = radioValue;
// console.log(QOffices_d2.answer)
if (QOffices_d2.answer == "no"){
    var RCA = $("#RCA_offices_Qd2").val();
    var AB = $("#AB_offices_Qd2").val();
    QOffices_d2.AB = AB
    QOffices_d2.RCA = RCA
    QOffices_d2.yes = ""
    QOffices_d2.no = "no"
}
else if (radioValue =="yes"){
    QOffices_d2.yes = "yes"
    QOffices_d2.no = ""
}
// question e1
var QOffices_e1 = new Object();
var radioValue = $("input[name='offices_Qe1']:checked").val();
QOffices_e1.answer = radioValue;
// console.log(QOffices_e1.answer)
if (QOffices_e1.answer == "no"){
    var RCA = $("#RCA_offices_Qe1").val();
    var AB = $("#AB_offices_Qe1").val();
    QOffices_e1.AB = AB
    QOffices_e1.RCA = RCA
    QOffices_e1.yes = ""
    QOffices_e1.no = "no"
}
else if (radioValue =="yes"){
    QOffices_e1.yes = "yes"
    QOffices_e1.no = ""
}
// question e2
var QOffices_e2 = new Object();
var radioValue = $("input[name='offices_Qe2']:checked").val();
QOffices_e2.answer = radioValue;
// console.log(QOffices_e2.answer)
if (QOffices_e2.answer == "no"){
    var RCA = $("#RCA_offices_Qe2").val();
    var AB = $("#AB_offices_Qe2").val();
    QOffices_e2.AB = AB
    QOffices_e2.RCA = RCA
    QOffices_e2.yes = ""
    QOffices_e2.no = "no"
}
else if (radioValue =="yes"){
    QOffices_e2.yes = "yes"
    QOffices_e2.no = ""
}
// question e3
var QOffices_e3 = new Object();
var radioValue = $("input[name='offices_Qe3']:checked").val();
QOffices_e3.answer = radioValue;
// console.log(QOffices_e3.answer)
if (QOffices_e3.answer == "no"){
    var RCA = $("#RCA_offices_Qe3").val();
    var AB = $("#AB_offices_Qe3").val();
    QOffices_e3.AB = AB
    QOffices_e3.RCA = RCA
    QOffices_e3.yes = ""
    QOffices_e3.no = "no"
}
else if (radioValue =="yes"){
    QOffices_e3.yes = "yes"
    QOffices_e3.no = ""
}
// question e4
var QOffices_e4 = new Object();
var radioValue = $("input[name='offices_Qe4']:checked").val();
QOffices_e4.answer = radioValue;
// console.log(QOffices_e4.answer)
if (QOffices_e4.answer == "no"){
    var RCA = $("#RCA_offices_Qe4").val();
    var AB = $("#AB_offices_Qe4").val();
    QOffices_e4.AB = AB
    QOffices_e4.RCA = RCA
    QOffices_e4.yes = ""
    QOffices_e4.no = "no"
}
else if (radioValue =="yes"){
    QOffices_e4.yes = "yes"
    QOffices_e4.no = ""
}
// question f1
var QOffices_f1 = new Object();
var radioValue = $("input[name='offices_Qf1']:checked").val();
QOffices_f1.answer = radioValue;
// console.log(QOffices_f1.answer)
if (QOffices_f1.answer == "no"){
    var RCA = $("#RCA_offices_Qf1").val();
    var AB = $("#AB_offices_Qf1").val();
    QOffices_f1.AB = AB
    QOffices_f1.RCA = RCA
    QOffices_f1.yes = ""
    QOffices_f1.no = "no"
}
else if (radioValue =="yes"){
    QOffices_f1.yes = "yes"
    QOffices_f1.no = ""
}
// question f2
var QOffices_f2 = new Object();
var radioValue = $("input[name='offices_Qf2']:checked").val();
QOffices_f2.answer = radioValue;
// console.log(QOffices_f2.answer)
if (QOffices_f2.answer == "no"){
    var RCA = $("#RCA_offices_Qf2").val();
    var AB = $("#AB_offices_Qf2").val();
    QOffices_f2.AB = AB
    QOffices_f2.RCA = RCA
    QOffices_f2.yes = ""
    QOffices_f2.no = "no"
}
else if (radioValue =="yes"){
    QOffices_f2.yes = "yes"
    QOffices_f2.no = ""
}
// question g1
var QOffices_g1 = new Object();
var radioValue = $("input[name='offices_Qg1']:checked").val();
QOffices_g1.answer = radioValue;
// console.log(QOffices_g1.answer)
if (QOffices_g1.answer == "no"){
    var RCA = $("#RCA_offices_Qg1").val();
    var AB = $("#AB_offices_Qg1").val();
    QOffices_g1.AB = AB
    QOffices_g1.RCA = RCA
    QOffices_g1.yes = ""
    QOffices_g1.no = "no"
}
else if (radioValue =="yes"){
    QOffices_g1.yes = "yes"
    QOffices_g1.no = ""
}
// question g2
var QOffices_g2 = new Object();
var radioValue = $("input[name='offices_Qg2']:checked").val();
QOffices_g2.answer = radioValue;
// console.log(QOffices_g2.answer)
if (QOffices_g2.answer == "no"){
    var RCA = $("#RCA_offices_Qg2").val();
    var AB = $("#AB_offices_Qg2").val();
    QOffices_g2.AB = AB
    QOffices_g2.RCA = RCA
    QOffices_g2.yes = ""
    QOffices_g2.no = "no"
}
else if (radioValue =="yes"){
    QOffices_g2.yes = "yes"
    QOffices_g2.no = ""
}

// question h1
var QOffices_h1 = new Object();
var radioValue = $("input[name='offices_Qh1']:checked").val();
QOffices_h1.answer = radioValue;
// console.log(QOffices_h1.answer)
if (QOffices_h1.answer == "no"){
    var RCA = $("#RCA_offices_Qh1").val();
    var AB = $("#AB_offices_Qh1").val();
    QOffices_h1.AB = AB
    QOffices_h1.RCA = RCA
    QOffices_h1.yes = ""
    QOffices_h1.no = "no"
}
else if (radioValue =="yes"){
    QOffices_h1.yes = "yes"
    QOffices_h1.no = ""
}
// question h2
var QOffices_h2 = new Object();
var radioValue = $("input[name='offices_Qh2']:checked").val();
QOffices_h2.answer = radioValue;
// console.log(QOffices_h2.answer)
if (QOffices_h2.answer == "no"){
    var RCA = $("#RCA_offices_Qh2").val();
    var AB = $("#AB_offices_Qh2").val();
    QOffices_h2.AB = AB
    QOffices_h2.RCA = RCA
    QOffices_h2.yes = ""
    QOffices_h2.no = "no"
}
else if (radioValue =="yes"){
    QOffices_h2.yes = "yes"
    QOffices_h2.no = ""
}

// question h3
var QOffices_h3 = new Object();
var radioValue = $("input[name='offices_Qh3']:checked").val();
QOffices_h3.answer = radioValue;
// console.log(QOffices_h3.answer)
if (QOffices_h3.answer == "no"){
    var RCA = $("#RCA_offices_Qh3").val();
    var AB = $("#AB_offices_Qh3").val();
    QOffices_h3.AB = AB
    QOffices_h3.RCA = RCA
    QOffices_h3.yes = ""
    QOffices_h3.no = "no"
}
else if (radioValue =="yes"){
    QOffices_h3.yes = "yes"
    QOffices_h3.no = ""
}
// question h4
var QOffices_h4 = new Object();
var radioValue = $("input[name='offices_Qh4']:checked").val();
QOffices_h4.answer = radioValue;
// console.log(QOffices_h4.answer)
if (QOffices_h4.answer == "no"){
    var RCA = $("#RCA_offices_Qh4").val();
    var AB = $("#AB_offices_Qh4").val();
    QOffices_h4.AB = AB
    QOffices_h4.RCA = RCA
    QOffices_h4.yes = ""
    QOffices_h4.no = "no"
}
else if (radioValue =="yes"){
    QOffices_h4.yes = "yes"
    QOffices_h4.no = ""
}
// question h5
var QOffices_h5 = new Object();
var radioValue = $("input[name='offices_Qh5']:checked").val();
QOffices_h5.answer = radioValue;
// console.log(QOffices_h5.answer)
if (QOffices_h5.answer == "no"){
    var RCA = $("#RCA_offices_Qh5").val();
    var AB = $("#AB_offices_Qh5").val();
    QOffices_h5.AB = AB
    QOffices_h5.RCA = RCA
    QOffices_h5.yes = ""
    QOffices_h5.no = "no"
}
else if (radioValue =="yes"){
    QOffices_h5.yes = "yes"
    QOffices_h5.no = ""
}
// question h6
var QOffices_h6 = new Object();
var radioValue = $("input[name='offices_Qh6']:checked").val();
QOffices_h6.answer = radioValue;
// console.log(QOffices_h6.answer)
if (QOffices_h6.answer == "no"){
    var RCA = $("#RCA_offices_Qh6").val();
    var AB = $("#AB_offices_Qh6").val();
    QOffices_h6.AB = AB
    QOffices_h6.RCA = RCA
    QOffices_h6.yes = ""
    QOffices_h6.no = "no"
}
else if (radioValue =="yes"){
    QOffices_h6.yes = "yes"
    QOffices_h6.no = ""
}

// question h7
var QOffices_h7 = new Object();
var radioValue = $("input[name='offices_Qh7']:checked").val();
QOffices_h7.answer = radioValue;
// console.log(QOffices_h7.answer)
if (QOffices_h7.answer == "no"){
    var RCA = $("#RCA_offices_Qh7").val();
    var AB = $("#AB_offices_Qh7").val();
    QOffices_h7.AB = AB
    QOffices_h7.RCA = RCA
    QOffices_h7.yes = ""
    QOffices_h7.no = "no"
}
else if (radioValue =="yes"){
    QOffices_h7.yes = "yes"
    QOffices_h7.no = ""
}
// question h8
var QOffices_h8 = new Object();
var radioValue = $("input[name='offices_Qh8']:checked").val();
QOffices_h8.answer = radioValue;
// console.log(QOffices_h8.answer)
if (QOffices_h8.answer == "no"){
    var RCA = $("#RCA_offices_Qh8").val();
    var AB = $("#AB_offices_Qh8").val();
    QOffices_h8.AB = AB
    QOffices_h8.RCA = RCA
    QOffices_h8.yes = ""
    QOffices_h8.no = "no"
}
else if (radioValue =="yes"){
    QOffices_h8.yes = "yes"
    QOffices_h8.no = ""
}
// question i1
var QOffices_i1 = new Object();
var radioValue = $("input[name='offices_Qi1']:checked").val();
QOffices_i1.answer = radioValue;
// console.log(QOffices_i1.answer)
if (QOffices_i1.answer == "no"){
    var RCA = $("#RCA_offices_Qi1").val();
    var AB = $("#AB_offices_Qi1").val();
    QOffices_i1.AB = AB
    QOffices_i1.RCA = RCA
    QOffices_i1.yes = ""
    QOffices_i1.no = "no"
}
else if (radioValue =="yes"){
    QOffices_i1.yes = "yes"
    QOffices_i1.no = ""
}

// question i2
var QOffices_i2 = new Object();
var radioValue = $("input[name='offices_Qi2']:checked").val();
QOffices_i2.answer = radioValue;
// console.log(QOffices_i2.answer)
if (QOffices_i2.answer == "no"){
    var RCA = $("#RCA_offices_Qi2").val();
    var AB = $("#AB_offices_Qi2").val();
    QOffices_i2.AB = AB
    QOffices_i2.RCA = RCA
    QOffices_i2.yes = ""
    QOffices_i2.no = "no"
}
else if (radioValue =="yes"){
    QOffices_i2.yes = "yes"
    QOffices_i2.no = ""
}

// question i3
var QOffices_i3 = new Object();
var radioValue = $("input[name='offices_Qi3']:checked").val();
QOffices_i3.answer = radioValue;
// console.log(QOffices_i3.answer)
if (QOffices_i3.answer == "no"){
    var RCA = $("#RCA_offices_Qi3").val();
    var AB = $("#AB_offices_Qi3").val();
    QOffices_i3.AB = AB
    QOffices_i3.RCA = RCA
    QOffices_i3.yes = ""
    QOffices_i3.no = "no"
}
else if (radioValue =="yes"){
    QOffices_i3.yes = "yes"
    QOffices_i3.no = ""
}

// question i4
var QOffices_i4 = new Object();
var radioValue = $("input[name='offices_Qi4']:checked").val();
QOffices_i4.answer = radioValue;
// console.log(QOffices_i4.answer)
if (QOffices_i4.answer == "no"){
    var RCA = $("#RCA_offices_Qi4").val();
    var AB = $("#AB_offices_Qi4").val();
    QOffices_i4.AB = AB
    QOffices_i4.RCA = RCA
    QOffices_i4.yes = ""
    QOffices_i4.no = "no"
}
else if (radioValue =="yes"){
    QOffices_i4.yes = "yes"
    QOffices_i4.no = ""
}

// question i5
var QOffices_i5 = new Object();
var radioValue = $("input[name='offices_Qi5']:checked").val();
QOffices_i5.answer = radioValue;
// console.log(QOffices_i5.answer)
if (QOffices_i5.answer == "no"){
    var RCA = $("#RCA_offices_Qi5").val();
    var AB = $("#AB_offices_Qi5").val();
    QOffices_i5.AB = AB
    QOffices_i5.RCA = RCA
    QOffices_i5.yes = ""
    QOffices_i5.no = "no"
}
else if (radioValue =="yes"){
    QOffices_i5.yes = "yes"
    QOffices_i5.no = ""
}
// question i6
var QOffices_i6 = new Object();
var radioValue = $("input[name='offices_Qi6']:checked").val();
QOffices_i6.answer = radioValue;
// console.log(QOffices_i6.answer)
if (QOffices_i6.answer == "no"){
    var RCA = $("#RCA_offices_Qi6").val();
    var AB = $("#AB_offices_Qi6").val();
    QOffices_i6.AB = AB
    QOffices_i6.RCA = RCA
    QOffices_i6.yes = ""
    QOffices_i6.no = "no"
}
else if (radioValue =="yes"){
    QOffices_i6.yes = "yes"
    QOffices_i6.no = ""
}
// armskotes

// question a1
var QArmskotes_a1 = new Object();
var radioValue = $("input[name='armskotes_Qa1']:checked").val();
QArmskotes_a1.answer = radioValue;
// console.log(QArmskotes_a1.answer)
if (QArmskotes_a1.answer == "no"){
    var RCA = $("#RCA_armskotes_Qa1").val();
    var AB = $("#AB_armskotes_Qa1").val();
    QArmskotes_a1.AB = AB
    QArmskotes_a1.RCA = RCA
    QArmskotes_a1.yes = ""
    QArmskotes_a1.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_a1.yes = "yes"
    QArmskotes_a1.no = ""
}
// question a2
var QArmskotes_a2 = new Object();
var radioValue = $("input[name='armskotes_Qa2']:checked").val();
QArmskotes_a2.answer = radioValue;
// console.log(QArmskotes_a2.answer)
if (QArmskotes_a2.answer == "no"){
    var RCA = $("#RCA_armskotes_Qa2").val();
    var AB = $("#AB_armskotes_Qa2").val();
    QArmskotes_a2.AB = AB
    QArmskotes_a2.RCA = RCA
    QArmskotes_a2.yes = ""
    QArmskotes_a2.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_a2.yes = "yes"
    QArmskotes_a2.no = ""
}
// question a3
var QArmskotes_a3 = new Object();
var radioValue = $("input[name='armskotes_Qa3']:checked").val();
QArmskotes_a3.answer = radioValue;
// console.log(QArmskotes_a3.answer)
if (QArmskotes_a3.answer == "no"){
    var RCA = $("#RCA_armskotes_Qa3").val();
    var AB = $("#AB_armskotes_Qa3").val();
    QArmskotes_a3.AB = AB
    QArmskotes_a3.RCA = RCA
    QArmskotes_a3.yes = ""
    QArmskotes_a3.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_a3.yes = "yes"
    QArmskotes_a3.no = ""
}
// question a4
var QArmskotes_a4 = new Object();
var radioValue = $("input[name='armskotes_Qa4']:checked").val();
QArmskotes_a4.answer = radioValue;
// console.log(QArmskotes_a4.answer)
if (QArmskotes_a4.answer == "no"){
    var RCA = $("#RCA_armskotes_Qa4").val();
    var AB = $("#AB_armskotes_Qa4").val();
    QArmskotes_a4.AB = AB
    QArmskotes_a4.RCA = RCA
    QArmskotes_a4.yes = ""
    QArmskotes_a4.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_a4.yes = "yes"
    QArmskotes_a4.no = ""
}
// question a5
var QArmskotes_a5 = new Object();
var radioValue = $("input[name='armskotes_Qa5']:checked").val();
QArmskotes_a5.answer = radioValue;
// console.log(QArmskotes_a5.answer)
if (QArmskotes_a5.answer == "no"){
    var RCA = $("#RCA_armskotes_Qa5").val();
    var AB = $("#AB_armskotes_Qa5").val();
    QArmskotes_a5.AB = AB
    QArmskotes_a5.RCA = RCA
    QArmskotes_a5.yes = ""
    QArmskotes_a5.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_a5.yes = "yes"
    QArmskotes_a5.no = ""
}
// question a6
var QArmskotes_a6 = new Object();
var radioValue = $("input[name='armskotes_Qa6']:checked").val();
QArmskotes_a6.answer = radioValue;
// console.log(QArmskotes_a6.answer)
if (QArmskotes_a6.answer == "no"){
    var RCA = $("#RCA_armskotes_Qa6").val();
    var AB = $("#AB_armskotes_Qa6").val();
    QArmskotes_a6.AB = AB
    QArmskotes_a6.RCA = RCA
    QArmskotes_a6.yes = ""
    QArmskotes_a6.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_a6.yes = "yes"
    QArmskotes_a6.no = ""
}
// question b1
var QArmskotes_b1 = new Object();
var radioValue = $("input[name='armskotes_Qb1']:checked").val();
QArmskotes_b1.answer = radioValue;
// console.log(QArmskotes_b1.answer)
if (QArmskotes_b1.answer == "no"){
    var RCA = $("#RCA_armskotes_Qb1").val();
    var AB = $("#AB_armskotes_Qb1").val();
    QArmskotes_b1.AB = AB
    QArmskotes_b1.RCA = RCA
    QArmskotes_b1.yes = ""
    QArmskotes_b1.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_b1.yes = "yes"
    QArmskotes_b1.no = ""
}
// question b2
var QArmskotes_b2 = new Object();
var radioValue = $("input[name='armskotes_Qb2']:checked").val();
QArmskotes_b2.answer = radioValue;
// console.log(QArmskotes_b2.answer)
if (QArmskotes_b2.answer == "no"){
    var RCA = $("#RCA_armskotes_Qb2").val();
    var AB = $("#AB_armskotes_Qb2").val();
    QArmskotes_b2.AB = AB
    QArmskotes_b2.RCA = RCA
    QArmskotes_b2.yes = ""
    QArmskotes_b2.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_b2.yes = "yes"
    QArmskotes_b2.no = ""
}
// question b3
var QArmskotes_b3 = new Object();
var radioValue = $("input[name='armskotes_Qb3']:checked").val();
QArmskotes_b3.answer = radioValue;
// console.log(QArmskotes_b3.answer)
if (QArmskotes_b3.answer == "no"){
    var RCA = $("#RCA_armskotes_Qb3").val();
    var AB = $("#AB_armskotes_Qb3").val();
    QArmskotes_b3.AB = AB
    QArmskotes_b3.RCA = RCA
    QArmskotes_b3.yes = ""
    QArmskotes_b3.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_b3.yes = "yes"
    QArmskotes_b3.no = ""
}
// question b4
var QArmskotes_b4 = new Object();
var radioValue = $("input[name='armskotes_Qb4']:checked").val();
QArmskotes_b4.answer = radioValue;
// console.log(QArmskotes_b4.answer)
if (QArmskotes_b4.answer == "no"){
    var RCA = $("#RCA_armskotes_Qb4").val();
    var AB = $("#AB_armskotes_Qb4").val();
    QArmskotes_b4.AB = AB
    QArmskotes_b4.RCA = RCA
    QArmskotes_b4.yes = ""
    QArmskotes_b4.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_b4.yes = "yes"
    QArmskotes_b4.no = ""
}
// question c1
var QArmskotes_c1 = new Object();
var radioValue = $("input[name='armskotes_Qc1']:checked").val();
QArmskotes_c1.answer = radioValue;
// console.log(QArmskotes_c1.answer)
if (QArmskotes_c1.answer == "no"){
    var RCA = $("#RCA_armskotes_Qc1").val();
    var AB = $("#AB_armskotes_Qc1").val();
    QArmskotes_c1.AB = AB
    QArmskotes_c1.RCA = RCA
    QArmskotes_c1.yes = ""
    QArmskotes_c1.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_c1.yes = "yes"
    QArmskotes_c1.no = ""
}
// question c2
var QArmskotes_c2 = new Object();
var radioValue = $("input[name='armskotes_Qc2']:checked").val();
QArmskotes_c2.answer = radioValue;
// console.log(QArmskotes_c2.answer)
if (QArmskotes_c2.answer == "no"){
    var RCA = $("#RCA_armskotes_Qc2").val();
    var AB = $("#AB_armskotes_Qc2").val();
    QArmskotes_c2.AB = AB
    QArmskotes_c2.RCA = RCA
    QArmskotes_c2.yes = ""
    QArmskotes_c2.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_c2.yes = "yes"
    QArmskotes_c2.no = ""
}
// question d1
var QArmskotes_d1 = new Object();
var radioValue = $("input[name='armskotes_Qd1']:checked").val();
QArmskotes_d1.answer = radioValue;
// console.log(QArmskotes_d1.answer)
if (QArmskotes_d1.answer == "no"){
    var RCA = $("#RCA_armskotes_Qd1").val();
    var AB = $("#AB_armskotes_Qd1").val();
    QArmskotes_d1.AB = AB
    QArmskotes_d1.RCA = RCA
    QArmskotes_d1.yes = ""
    QArmskotes_d1.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_d1.yes = "yes"
    QArmskotes_d1.no = ""
}
// question d2
var QArmskotes_d2 = new Object();
var radioValue = $("input[name='armskotes_Qd2']:checked").val();
QArmskotes_d2.answer = radioValue;
// console.log(QArmskotes_d2.answer)
if (QArmskotes_d2.answer == "no"){
    var RCA = $("#RCA_armskotes_Qd2").val();
    var AB = $("#AB_armskotes_Qd2").val();
    QArmskotes_d2.AB = AB
    QArmskotes_d2.RCA = RCA
    QArmskotes_d2.yes = ""
    QArmskotes_d2.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_d2.yes = "yes"
    QArmskotes_d2.no = ""
}
// question e1
var QArmskotes_e1 = new Object();
var radioValue = $("input[name='armskotes_Qe1']:checked").val();
QArmskotes_e1.answer = radioValue;
// console.log(QArmskotes_e1.answer)
if (QArmskotes_e1.answer == "no"){
    var RCA = $("#RCA_armskotes_Qe1").val();
    var AB = $("#AB_armskotes_Qe1").val();
    QArmskotes_e1.AB = AB
    QArmskotes_e1.RCA = RCA
    QArmskotes_e1.yes = ""
    QArmskotes_e1.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_e1.yes = "yes"
    QArmskotes_e1.no = ""
}
// question e2
var QArmskotes_e2 = new Object();
var radioValue = $("input[name='armskotes_Qe2']:checked").val();
QArmskotes_e2.answer = radioValue;
// console.log(QArmskotes_e2.answer)
if (QArmskotes_e2.answer == "no"){
    var RCA = $("#RCA_armskotes_Qe2").val();
    var AB = $("#AB_armskotes_Qe2").val();
    QArmskotes_e2.AB = AB
    QArmskotes_e2.RCA = RCA
    QArmskotes_e2.yes = ""
    QArmskotes_e2.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_e2.yes = "yes"
    QArmskotes_e2.no = ""
}
// question e3
var QArmskotes_e3 = new Object();
var radioValue = $("input[name='armskotes_Qe3']:checked").val();
QArmskotes_e3.answer = radioValue;
// console.log(QArmskotes_e3.answer)
if (QArmskotes_e3.answer == "no"){
    var RCA = $("#RCA_armskotes_Qe3").val();
    var AB = $("#AB_armskotes_Qe3").val();
    QArmskotes_e3.AB = AB
    QArmskotes_e3.RCA = RCA
    QArmskotes_e3.yes = ""
    QArmskotes_e3.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_e3.yes = "yes"
    QArmskotes_e3.no = ""
}
// question f1
var QArmskotes_f1 = new Object();
var radioValue = $("input[name='armskotes_Qf1']:checked").val();
QArmskotes_f1.answer = radioValue;
// console.log(QArmskotes_f1.answer)
if (QArmskotes_f1.answer == "no"){
    var RCA = $("#RCA_armskotes_Qf1").val();
    var AB = $("#AB_armskotes_Qf1").val();
    QArmskotes_f1.AB = AB
    QArmskotes_f1.RCA = RCA
    QArmskotes_f1.yes = ""
    QArmskotes_f1.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_f1.yes = "yes"
    QArmskotes_f1.no = ""
}
// question f2
var QArmskotes_f2 = new Object();
var radioValue = $("input[name='armskotes_Qf2']:checked").val();
QArmskotes_f2.answer = radioValue;
// console.log(QArmskotes_f2.answer)
if (QArmskotes_f2.answer == "no"){
    var RCA = $("#RCA_armskotes_Qf2").val();
    var AB = $("#AB_armskotes_Qf2").val();
    QArmskotes_f2.AB = AB
    QArmskotes_f2.RCA = RCA
    QArmskotes_f2.yes = ""
    QArmskotes_f2.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_f2.yes = "yes"
    QArmskotes_f2.no = ""
}
// question f3
var QArmskotes_f3 = new Object();
var radioValue = $("input[name='armskotes_Qf3']:checked").val();
QArmskotes_f3.answer = radioValue;
// console.log(QArmskotes_f3.answer)
if (QArmskotes_f3.answer == "no"){
    var RCA = $("#RCA_armskotes_Qf3").val();
    var AB = $("#AB_armskotes_Qf3").val();
    QArmskotes_f3.AB = AB
    QArmskotes_f3.RCA = RCA
    QArmskotes_f3.yes = ""
    QArmskotes_f3.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_f3.yes = "yes"
    QArmskotes_f3.no = ""
}

// question f4
var QArmskotes_f4 = new Object();
var radioValue = $("input[name='armskotes_Qf4']:checked").val();
QArmskotes_f4.answer = radioValue;
// console.log(QArmskotes_f4.answer)
if (QArmskotes_f4.answer == "no"){
    var RCA = $("#RCA_armskotes_Qf4").val();
    var AB = $("#AB_armskotes_Qf4").val();
    QArmskotes_f4.AB = AB
    QArmskotes_f4.RCA = RCA
    QArmskotes_f4.yes = ""
    QArmskotes_f4.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_f4.yes = "yes"
    QArmskotes_f4.no = ""
}
// question f5
var QArmskotes_f5 = new Object();
var radioValue = $("input[name='armskotes_Qf5']:checked").val();
QArmskotes_f5.answer = radioValue;
// console.log(QArmskotes_f5.answer)
if (QArmskotes_f5.answer == "no"){
    var RCA = $("#RCA_armskotes_Qf5").val();
    var AB = $("#AB_armskotes_Qf5").val();
    QArmskotes_f5.AB = AB
    QArmskotes_f5.RCA = RCA
    QArmskotes_f5.yes = ""
    QArmskotes_f5.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_f5.yes = "yes"
    QArmskotes_f5.no = ""
}

// question f6
var QArmskotes_f6 = new Object();
var radioValue = $("input[name='armskotes_Qf6']:checked").val();
QArmskotes_f6.answer = radioValue;
// console.log(QArmskotes_f6.answer)
if (QArmskotes_f6.answer == "no"){
    var RCA = $("#RCA_armskotes_Qf6").val();
    var AB = $("#AB_armskotes_Qf6").val();
    QArmskotes_f6.AB = AB
    QArmskotes_f6.RCA = RCA
    QArmskotes_f6.yes = ""
    QArmskotes_f6.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_f6.yes = "yes"
    QArmskotes_f6.no = ""
}

// question g1
var QArmskotes_g1 = new Object();
var radioValue = $("input[name='armskotes_Qg1']:checked").val();
QArmskotes_g1.answer = radioValue;
// console.log(QArmskotes_g1.answer)
if (QArmskotes_g1.answer == "no"){
    var RCA = $("#RCA_armskotes_Qg1").val();
    var AB = $("#AB_armskotes_Qg1").val();
    QArmskotes_g1.AB = AB
    QArmskotes_g1.RCA = RCA
    QArmskotes_g1.yes = ""
    QArmskotes_g1.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_g1.yes = "yes"
    QArmskotes_g1.no = ""
}

// question g2
var QArmskotes_g2 = new Object();
var radioValue = $("input[name='armskotes_Qg2']:checked").val();
QArmskotes_g2.answer = radioValue;
// console.log(QArmskotes_g2.answer)
if (QArmskotes_g2.answer == "no"){
    var RCA = $("#RCA_armskotes_Qg2").val();
    var AB = $("#AB_armskotes_Qg2").val();
    QArmskotes_g2.AB = AB
    QArmskotes_g2.RCA = RCA
    QArmskotes_g2.yes = ""
    QArmskotes_g2.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_g2.yes = "yes"
    QArmskotes_g2.no = ""
}
// question g3
var QArmskotes_g3 = new Object();
var radioValue = $("input[name='armskotes_Qg3']:checked").val();
QArmskotes_g3.answer = radioValue;
// console.log(QArmskotes_g3.answer)
if (QArmskotes_g3.answer == "no"){
    var RCA = $("#RCA_armskotes_Qg3").val();
    var AB = $("#AB_armskotes_Qg3").val();
    QArmskotes_g3.AB = AB
    QArmskotes_g3.RCA = RCA
    QArmskotes_g3.yes = ""
    QArmskotes_g3.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_g3.yes = "yes"
    QArmskotes_g3.no = ""
}
// question g4
var QArmskotes_g4 = new Object();
var radioValue = $("input[name='armskotes_Qg4']:checked").val();
QArmskotes_g4.answer = radioValue;
// console.log(QArmskotes_g4.answer)
if (QArmskotes_g4.answer == "no"){
    var RCA = $("#RCA_armskotes_Qg4").val();
    var AB = $("#AB_armskotes_Qg4").val();
    QArmskotes_g4.AB = AB
    QArmskotes_g4.RCA = RCA
    QArmskotes_g4.yes = ""
    QArmskotes_g4.no = "no"
}
else if (radioValue =="yes"){
    QArmskotes_g4.yes = "yes"
    QArmskotes_g4.no = ""
}

// question a1
var QStoreroom_a1 = new Object();
var radioValue = $("input[name='storeroom_Qa1']:checked").val();
QStoreroom_a1.answer = radioValue;
// console.log(QStoreroom_a1.answer)
if (QStoreroom_a1.answer == "no"){
    var RCA = $("#RCA_storeroom_Qa1").val();
    var AB = $("#AB_storeroom_Qa1").val();
    QStoreroom_a1.AB = AB
    QStoreroom_a1.RCA = RCA
    QStoreroom_a1.yes = ""
    QStoreroom_a1.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_a1.yes = "yes"
    QStoreroom_a1.no = ""
}
// question a2
var QStoreroom_a2 = new Object();
var radioValue = $("input[name='storeroom_Qa2']:checked").val();
QStoreroom_a2.answer = radioValue;
// console.log(QStoreroom_a2.answer)
if (QStoreroom_a2.answer == "no"){
    var RCA = $("#RCA_storeroom_Qa2").val();
    var AB = $("#AB_storeroom_Qa2").val();
    QStoreroom_a2.AB = AB
    QStoreroom_a2.RCA = RCA
    QStoreroom_a2.yes = ""
    QStoreroom_a2.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_a2.yes = "yes"
    QStoreroom_a2.no = ""
}
// question a3
var QStoreroom_a3 = new Object();
var radioValue = $("input[name='storeroom_Qa3']:checked").val();
QStoreroom_a3.answer = radioValue;
// console.log(QStoreroom_a3.answer)
if (QStoreroom_a3.answer == "no"){
    var RCA = $("#RCA_storeroom_Qa3").val();
    var AB = $("#AB_storeroom_Qa3").val();
    QStoreroom_a3.AB = AB
    QStoreroom_a3.RCA = RCA
    QStoreroom_a3.yes = ""
    QStoreroom_a3.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_a3.yes = "yes"
    QStoreroom_a3.no = ""
}
// question a4
var QStoreroom_a4 = new Object();
var radioValue = $("input[name='storeroom_Qa4']:checked").val();
QStoreroom_a4.answer = radioValue;
// console.log(QStoreroom_a4.answer)
if (QStoreroom_a4.answer == "no"){
    var RCA = $("#RCA_storeroom_Qa4").val();
    var AB = $("#AB_storeroom_Qa4").val();
    QStoreroom_a4.AB = AB
    QStoreroom_a4.RCA = RCA
    QStoreroom_a4.yes = ""
    QStoreroom_a4.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_a4.yes = "yes"
    QStoreroom_a4.no = ""
}

// question a5
var QStoreroom_a5 = new Object();
var radioValue = $("input[name='storeroom_Qa5']:checked").val();
QStoreroom_a5.answer = radioValue;
// console.log(QStoreroom_a5.answer)
if (QStoreroom_a5.answer == "no"){
    var RCA = $("#RCA_storeroom_Qa5").val();
    var AB = $("#AB_storeroom_Qa5").val();
    QStoreroom_a5.AB = AB
    QStoreroom_a5.RCA = RCA
    QStoreroom_a5.yes = ""
    QStoreroom_a5.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_a5.yes = "yes"
    QStoreroom_a5.no = ""
}

// question a6
var QStoreroom_a6 = new Object();
var radioValue = $("input[name='storeroom_Qa6']:checked").val();
QStoreroom_a6.answer = radioValue;
// console.log(QStoreroom_a6.answer)
if (QStoreroom_a6.answer == "no"){
    var RCA = $("#RCA_storeroom_Qa6").val();
    var AB = $("#AB_storeroom_Qa6").val();
    QStoreroom_a6.AB = AB
    QStoreroom_a6.RCA = RCA
    QStoreroom_a6.yes = ""
    QStoreroom_a6.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_a6.yes = "yes"
    QStoreroom_a6.no = ""
}
// question b1
var QStoreroom_b1 = new Object();
var radioValue = $("input[name='storeroom_Qb1']:checked").val();
QStoreroom_b1.answer = radioValue;
// console.log(QStoreroom_b1.answer)
if (QStoreroom_b1.answer == "no"){
    var RCA = $("#RCA_storeroom_Qb1").val();
    var AB = $("#AB_storeroom_Qb1").val();
    QStoreroom_b1.AB = AB
    QStoreroom_b1.RCA = RCA
    QStoreroom_b1.yes = ""
    QStoreroom_b1.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_b1.yes = "yes"
    QStoreroom_b1.no = ""
}
// question b2
var QStoreroom_b2 = new Object();
var radioValue = $("input[name='storeroom_Qb2']:checked").val();
QStoreroom_b2.answer = radioValue;
// console.log(QStoreroom_b2.answer)
if (QStoreroom_b2.answer == "no"){
    var RCA = $("#RCA_storeroom_Qb2").val();
    var AB = $("#AB_storeroom_Qb2").val();
    QStoreroom_b2.AB = AB
    QStoreroom_b2.RCA = RCA
    QStoreroom_b2.yes = ""
    QStoreroom_b2.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_b2.yes = "yes"
    QStoreroom_b2.no = ""
}
// question b3
var QStoreroom_b3 = new Object();
var radioValue = $("input[name='storeroom_Qb3']:checked").val();
QStoreroom_b3.answer = radioValue;
// console.log(QStoreroom_b3.answer)
if (QStoreroom_b3.answer == "no"){
    var RCA = $("#RCA_storeroom_Qb3").val();
    var AB = $("#AB_storeroom_Qb3").val();
    QStoreroom_b3.AB = AB
    QStoreroom_b3.RCA = RCA
    QStoreroom_b3.yes = ""
    QStoreroom_b3.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_b3.yes = "yes"
    QStoreroom_b3.no = ""
}
// question c1
var QStoreroom_c1 = new Object();
var radioValue = $("input[name='storeroom_Qc1']:checked").val();
QStoreroom_c1.answer = radioValue;
// console.log(QStoreroom_c1.answer)
if (QStoreroom_c1.answer == "no"){
    var RCA = $("#RCA_storeroom_Qc1").val();
    var AB = $("#AB_storeroom_Qc1").val();
    QStoreroom_c1.AB = AB
    QStoreroom_c1.RCA = RCA
    QStoreroom_c1.yes = ""
    QStoreroom_c1.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_c1.yes = "yes"
    QStoreroom_c1.no = ""
}
// question c2
var QStoreroom_c2 = new Object();
var radioValue = $("input[name='storeroom_Qc2']:checked").val();
QStoreroom_c2.answer = radioValue;
// console.log(QStoreroom_c2.answer)
if (QStoreroom_c2.answer == "no"){
    var RCA = $("#RCA_storeroom_Qc2").val();
    var AB = $("#AB_storeroom_Qc2").val();
    QStoreroom_c2.AB = AB
    QStoreroom_c2.RCA = RCA
    QStoreroom_c2.yes = ""
    QStoreroom_c2.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_c2.yes = "yes"
    QStoreroom_c2.no = ""
}
// question d1
var QStoreroom_d1 = new Object();
var radioValue = $("input[name='storeroom_Qd1']:checked").val();
QStoreroom_d1.answer = radioValue;
// console.log(QStoreroom_d1.answer)
if (QStoreroom_d1.answer == "no"){
    var RCA = $("#RCA_storeroom_Qd1").val();
    var AB = $("#AB_storeroom_Qd1").val();
    QStoreroom_d1.AB = AB
    QStoreroom_d1.RCA = RCA
    QStoreroom_d1.yes = ""
    QStoreroom_d1.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_d1.yes = "yes"
    QStoreroom_d1.no = ""
}
// question d2
var QStoreroom_d2 = new Object();
var radioValue = $("input[name='storeroom_Qd2']:checked").val();
QStoreroom_d2.answer = radioValue;
// console.log(QStoreroom_d2.answer)
if (QStoreroom_d2.answer == "no"){
    var RCA = $("#RCA_storeroom_Qd2").val();
    var AB = $("#AB_storeroom_Qd2").val();
    QStoreroom_d2.AB = AB
    QStoreroom_d2.RCA = RCA
    QStoreroom_d2.yes = ""
    QStoreroom_d2.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_d2.yes = "yes"
    QStoreroom_d2.no = ""
}
// question d3
var QStoreroom_d3 = new Object();
var radioValue = $("input[name='storeroom_Qd3']:checked").val();
QStoreroom_d3.answer = radioValue;
// console.log(QStoreroom_d3.answer)
if (QStoreroom_d3.answer == "no"){
    var RCA = $("#RCA_storeroom_Qd3").val();
    var AB = $("#AB_storeroom_Qd3").val();
    QStoreroom_d3.AB = AB
    QStoreroom_d3.RCA = RCA
    QStoreroom_d3.yes = ""
    QStoreroom_d3.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_d3.yes = "yes"
    QStoreroom_d3.no = ""
}

// question e1
var QStoreroom_e1 = new Object();
var radioValue = $("input[name='storeroom_Qe1']:checked").val();
QStoreroom_e1.answer = radioValue;
// console.log(QStoreroom_e1.answer)
if (QStoreroom_e1.answer == "no"){
    var RCA = $("#RCA_storeroom_Qe1").val();
    var AB = $("#AB_storeroom_Qe1").val();
    QStoreroom_e1.AB = AB
    QStoreroom_e1.RCA = RCA
    QStoreroom_e1.yes = ""
    QStoreroom_e1.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_e1.yes = "yes"
    QStoreroom_e1.no = ""
}

// question e2
var QStoreroom_e2 = new Object();
var radioValue = $("input[name='storeroom_Qe2']:checked").val();
QStoreroom_e2.answer = radioValue;
// console.log(QStoreroom_e2.answer)
if (QStoreroom_e2.answer == "no"){
    var RCA = $("#RCA_storeroom_Qe2").val();
    var AB = $("#AB_storeroom_Qe2").val();
    QStoreroom_e2.AB = AB
    QStoreroom_e2.RCA = RCA
    QStoreroom_e2.yes = ""
    QStoreroom_e2.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_e2.yes = "yes"
    QStoreroom_e2.no = ""
}

// question e3
var QStoreroom_e3 = new Object();
var radioValue = $("input[name='storeroom_Qe3']:checked").val();
QStoreroom_e3.answer = radioValue;
// console.log(QStoreroom_e3.answer)
if (QStoreroom_e3.answer == "no"){
    var RCA = $("#RCA_storeroom_Qe3").val();
    var AB = $("#AB_storeroom_Qe3").val();
    QStoreroom_e3.AB = AB
    QStoreroom_e3.RCA = RCA
    QStoreroom_e3.yes = ""
    QStoreroom_e3.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_e3.yes = "yes"
    QStoreroom_e3.no = ""
}

// question e4
var QStoreroom_e4 = new Object();
var radioValue = $("input[name='storeroom_Qe4']:checked").val();
QStoreroom_e4.answer = radioValue;
// console.log(QStoreroom_e4.answer)
if (QStoreroom_e4.answer == "no"){
    var RCA = $("#RCA_storeroom_Qe4").val();
    var AB = $("#AB_storeroom_Qe4").val();
    QStoreroom_e4.AB = AB
    QStoreroom_e4.RCA = RCA
    QStoreroom_e4.yes = ""
    QStoreroom_e4.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_e4.yes = "yes"
    QStoreroom_e4.no = ""
}

// question e5
var QStoreroom_e5 = new Object();
var radioValue = $("input[name='storeroom_Qe5']:checked").val();
QStoreroom_e5.answer = radioValue;
// console.log(QStoreroom_e5.answer)
if (QStoreroom_e5.answer == "no"){
    var RCA = $("#RCA_storeroom_Qe5").val();
    var AB = $("#AB_storeroom_Qe5").val();
    QStoreroom_e5.AB = AB
    QStoreroom_e5.RCA = RCA
    QStoreroom_e5.yes = ""
    QStoreroom_e5.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_e5.yes = "yes"
    QStoreroom_e5.no = ""
}

// question e6
var QStoreroom_e6 = new Object();
var radioValue = $("input[name='storeroom_Qe6']:checked").val();
QStoreroom_e6.answer = radioValue;
// console.log(QStoreroom_e6.answer)
if (QStoreroom_e6.answer == "no"){
    var RCA = $("#RCA_storeroom_Qe6").val();
    var AB = $("#AB_storeroom_Qe6").val();
    QStoreroom_e6.AB = AB
    QStoreroom_e6.RCA = RCA
    QStoreroom_e6.yes = ""
    QStoreroom_e6.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_e6.yes = "yes"
    QStoreroom_e6.no = ""
}

// question f1
var QStoreroom_f1 = new Object();
var radioValue = $("input[name='storeroom_Qf1']:checked").val();
QStoreroom_f1.answer = radioValue;
// console.log(QStoreroom_f1.answer)
if (QStoreroom_f1.answer == "no"){
    var RCA = $("#RCA_storeroom_Qf1").val();
    var AB = $("#AB_storeroom_Qf1").val();
    QStoreroom_f1.AB = AB
    QStoreroom_f1.RCA = RCA
    QStoreroom_f1.yes = ""
    QStoreroom_f1.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_f1.yes = "yes"
    QStoreroom_f1.no = ""
}

// question f2
var QStoreroom_f2 = new Object();
var radioValue = $("input[name='storeroom_Qf2']:checked").val();
QStoreroom_f2.answer = radioValue;
// console.log(QStoreroom_f2.answer)
if (QStoreroom_f2.answer == "no"){
    var RCA = $("#RCA_storeroom_Qf2").val();
    var AB = $("#AB_storeroom_Qf2").val();
    QStoreroom_f2.AB = AB
    QStoreroom_f2.RCA = RCA
    QStoreroom_f2.yes = ""
    QStoreroom_f2.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_f2.yes = "yes"
    QStoreroom_f2.no = ""
}

// question f3
var QStoreroom_f3 = new Object();
var radioValue = $("input[name='storeroom_Qf3']:checked").val();
QStoreroom_f3.answer = radioValue;
// console.log(QStoreroom_f3.answer)
if (QStoreroom_f3.answer == "no"){
    var RCA = $("#RCA_storeroom_Qf3").val();
    var AB = $("#AB_storeroom_Qf3").val();
    QStoreroom_f3.AB = AB
    QStoreroom_f3.RCA = RCA
    QStoreroom_f3.yes = ""
    QStoreroom_f3.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_f3.yes = "yes"
    QStoreroom_f3.no = ""
}

// question f4
var QStoreroom_f4 = new Object();
var radioValue = $("input[name='storeroom_Qf4']:checked").val();
QStoreroom_f4.answer = radioValue;
// console.log(QStoreroom_f4.answer)
if (QStoreroom_f4.answer == "no"){
    var RCA = $("#RCA_storeroom_Qf4").val();
    var AB = $("#AB_storeroom_Qf4").val();
    QStoreroom_f4.AB = AB
    QStoreroom_f4.RCA = RCA
    QStoreroom_f4.yes = ""
    QStoreroom_f4.no = "no"
}
else if (radioValue =="yes"){
    QStoreroom_f4.yes = "yes"
    QStoreroom_f4.no = ""
}
// // question fill
// var QStoreroom_fill = new Object();
// var radioValue = $("input[name='storeroom_Qfill']:checked").val();
// QStoreroom_fill.answer = radioValue;
// // console.log(QStoreroom_fill.answer)
// if (QStoreroom_fill.answer == "no"){
//     var RCA = $("#RCA_storeroom_Qfill").val();
//     var AB = $("#AB_storeroom_Qfill").val();
//     QStoreroom_fill.AB = AB
//     QStoreroom_fill.RCA = RCA
//     QStoreroom_fill.yes = ""
//     QStoreroom_fill.no = "no"
// }
// else{
//     QStoreroom_fill.yes = "yes"
//     QStoreroom_fill.no = ""
// }

  var data = [
    ['','','YES','NO','Recommendation/corrective Actions','Action by'],
    ['1', 'GENERAL SURROUNDING AREA'],
    ['a', ''],
    ['a1','', QGeneral_a1.yes ,QGeneral_a1.no, QGeneral_a1.RCA,QGeneral_a1.AB],
    ['a2','', QGeneral_a2.yes,QGeneral_a2.no,QGeneral_a2.RCA,QGeneral_a2.AB],
    ['a3','', QGeneral_a3.yes,QGeneral_a3.no,QGeneral_a3.RCA,QGeneral_a3.AB],
    ['a4','', QGeneral_a4.yes,QGeneral_a4.no,QGeneral_a4.RCA,QGeneral_a4.AB],
    ['a5','', QGeneral_a5.yes,QGeneral_a5.no,QGeneral_a5.RCA,QGeneral_a5.AB],
    ['a6','', QGeneral_a6.yes,QGeneral_a6.no,QGeneral_a6.RCA,QGeneral_a6.AB],
    ['a7','', QGeneral_a7.yes,QGeneral_a7.no,QGeneral_a7.RCA,QGeneral_a7.AB],
    ['a8','', QGeneral_a8.yes,QGeneral_a8.no,QGeneral_a8.RCA,QGeneral_a8.AB],
    ['b','', QGeneral_b.yes,QGeneral_b.no,QGeneral_b.RCA,QGeneral_b.AB],
    ['c','', QGeneral_c.yes,QGeneral_c.no,QGeneral_c.RCA,QGeneral_c.AB],
    ['d','', QGeneral_d.yes, QGeneral_d.no,QGeneral_d.RCA,QGeneral_d.AB],
    ['e','', QGeneral_e.yes, QGeneral_e.no,QGeneral_e.RCA,QGeneral_e.AB],
    ['f', ''],
    ['f1','',QGeneral_f1.yes, QGeneral_f1.no,QGeneral_f1.RCA,QGeneral_f1.AB],
    ['f2','',QGeneral_f2.yes, QGeneral_f2.no,QGeneral_f2.RCA,QGeneral_f2.AB],
    ['f3','',QGeneral_f3.yes, QGeneral_f3.no,QGeneral_f3.RCA,QGeneral_f3.AB],
    ['g', ''],
    ['g1','',QGeneral_g1.yes, QGeneral_g1.no,QGeneral_g1.RCA,QGeneral_g1.AB],
    ['g2','',QGeneral_g2.yes, QGeneral_g2.no,QGeneral_g2.RCA,QGeneral_g2.AB],
    ['i','', QGeneral_i.yes,QGeneral_i.no,QGeneral_i.RCA,QGeneral_i.AB],
    ['2', 'ACCOMMODATIONS'],
    ['a', ''],
    ['a1','', QAccom_a1.yes ,QAccom_a1.no, QAccom_a1.RCA,QAccom_a1.AB],
    ['a2','', QAccom_a2.yes,QAccom_a2.no,QAccom_a2.RCA,QAccom_a2.AB],
    ['a3','', QAccom_a3.yes,QAccom_a3.no,QAccom_a3.RCA,QAccom_a3.AB],
    ['a4','', QAccom_a4.yes,QAccom_a4.no,QAccom_a4.RCA,QAccom_a4.AB],
    ['a5','', QAccom_a5.yes,QAccom_a5.no,QAccom_a5.RCA,QAccom_a5.AB],
    ['a6','', QAccom_a6.yes,QAccom_a6.no,QAccom_a6.RCA,QAccom_a6.AB],
    ['a7','', QAccom_a7.yes,QAccom_a7.no,QAccom_a7.RCA,QAccom_a7.AB],
    ['a8','', QAccom_a8.yes,QAccom_a8.no,QAccom_a8.RCA,QAccom_a8.AB],
    ['b', ''],
    ['b1','', QAccom_b1.yes ,QAccom_b1.no, QAccom_b1.RCA,QAccom_b1.AB],
    ['b2','', QAccom_b2.yes,QAccom_b2.no,QAccom_b2.RCA,QAccom_b2.AB],
    ['c', ''],
    ['c1','', QAccom_c1.yes ,QAccom_c1.no, QAccom_c1.RCA,QAccom_c1.AB],
    ['c2','', QAccom_c2.yes,QAccom_c2.no,QAccom_c2.RCA,QAccom_c2.AB],
    ['c3','', QAccom_c3.yes,QAccom_c3.no,QAccom_c3.RCA,QAccom_c3.AB],
    ['c4','', QAccom_c4.yes,QAccom_c4.no,QAccom_c4.RCA,QAccom_c4.AB],
    ['d', ''],
    ['d1','', QAccom_d1.yes ,QAccom_d1.no, QAccom_d1.RCA,QAccom_d1.AB],
    ['d2','', QAccom_d2.yes,QAccom_d2.no,QAccom_d2.RCA,QAccom_d2.AB],
    ['e', ''],
    ['e1','', QAccom_e1.yes ,QAccom_e1.no, QAccom_e1.RCA,QAccom_e1.AB],
    ['e2','', QAccom_e2.yes,QAccom_e2.no,QAccom_e2.RCA,QAccom_e2.AB],
    ['e3','', QAccom_e3.yes,QAccom_e3.no,QAccom_e3.RCA,QAccom_e3.AB],
    ['e4','', QAccom_e4.yes,QAccom_e4.no,QAccom_e4.RCA,QAccom_e4.AB],
    ['f', ''],
    ['f1','', QAccom_f1.yes ,QAccom_f1.no, QAccom_f1.RCA,QAccom_f1.AB],
    ['f2','', QAccom_f2.yes,QAccom_f2.no,QAccom_f2.RCA,QAccom_f2.AB],
    ['g', ''],
    ['g1','', QAccom_g1.yes ,QAccom_g1.no, QAccom_g1.RCA,QAccom_g1.AB],
    ['g2','', QAccom_g2.yes,QAccom_g2.no,QAccom_g2.RCA,QAccom_g2.AB],
    ['g3','', QAccom_g3.yes,QAccom_g3.no,QAccom_g3.RCA,QAccom_g3.AB],
    ['g4','', QAccom_g4.yes,QAccom_g4.no,QAccom_g4.RCA,QAccom_g4.AB],
    ['g5','', QAccom_g5.yes,QAccom_g5.no,QAccom_g5.RCA,QAccom_g5.AB],
    ['g6','', QAccom_g6.yes,QAccom_g6.no,QAccom_g6.RCA,QAccom_g6.AB],
    ['h', ''],
    ['h1','', QAccom_h1.yes ,QAccom_h1.no, QAccom_h1.RCA,QAccom_h1.AB],
    ['h2','', QAccom_h2.yes,QAccom_h2.no,QAccom_h2.RCA,QAccom_h2.AB],
    ['h3','', QAccom_h3.yes,QAccom_h3.no,QAccom_h3.RCA,QAccom_h3.AB],
    ['h4','', QAccom_h4.yes,QAccom_h4.no,QAccom_h4.RCA,QAccom_h4.AB],
    ['3', 'OFFICES'],
    ['a', ''],
    ['a1','', QOffices_a1.yes ,QOffices_a1.no, QOffices_a1.RCA,QOffices_a1.AB],
    ['a2','', QOffices_a2.yes,QOffices_a2.no,QOffices_a2.RCA,QOffices_a2.AB],
    ['a3','', QOffices_a3.yes,QOffices_a3.no,QOffices_a3.RCA,QOffices_a3.AB],
    ['a4','', QOffices_a4.yes,QOffices_a4.no,QOffices_a4.RCA,QOffices_a4.AB],
    ['a5','', QOffices_a5.yes,QOffices_a5.no,QOffices_a5.RCA,QOffices_a5.AB],
    ['a6','', QOffices_a6.yes,QOffices_a6.no,QOffices_a6.RCA,QOffices_a6.AB],
    ['b', ''],
    ['b1','', QOffices_b1.yes ,QOffices_b1.no, QOffices_b1.RCA,QOffices_b1.AB],
    ['b2','', QOffices_b2.yes,QOffices_b2.no,QOffices_b2.RCA,QOffices_b2.AB],
    ['c', ''],
    ['c1','', QOffices_c1.yes ,QOffices_c1.no, QOffices_c1.RCA,QOffices_c1.AB],
    ['c2','', QOffices_c2.yes,QOffices_c2.no,QOffices_c2.RCA,QOffices_c2.AB],
    ['c3','', QOffices_c3.yes,QOffices_c3.no,QOffices_c3.RCA,QOffices_c3.AB],
    ['c4','', QOffices_c4.yes,QOffices_c4.no,QOffices_c4.RCA,QOffices_c4.AB],
    ['d', ''],
    ['d1','', QOffices_d1.yes ,QOffices_d1.no, QOffices_d1.RCA,QOffices_d1.AB],
    ['d2','', QOffices_d2.yes,QOffices_d2.no,QOffices_d2.RCA,QOffices_d2.AB],
    ['e', ''],
    ['e1','', QOffices_e1.yes ,QOffices_e1.no, QOffices_e1.RCA,QOffices_e1.AB],
    ['e2','', QOffices_e2.yes,QOffices_e2.no,QOffices_e2.RCA,QOffices_e2.AB],
    ['e3','', QOffices_e3.yes,QOffices_e3.no,QOffices_e3.RCA,QOffices_e3.AB],
    ['e4','', QOffices_e4.yes,QOffices_e4.no,QOffices_e4.RCA,QOffices_e4.AB],
    ['f', ''],
    ['f1','', QOffices_f1.yes ,QOffices_f1.no, QOffices_f1.RCA,QOffices_f1.AB],
    ['f2','', QOffices_f2.yes,QOffices_f2.no,QOffices_f2.RCA,QOffices_f2.AB],
    ['g', ''],
    ['g1','', QOffices_g1.yes ,QOffices_g1.no, QOffices_g1.RCA,QOffices_g1.AB],
    ['g2','', QOffices_g2.yes,QOffices_g2.no,QOffices_g2.RCA,QOffices_g2.AB],
    ['h', ''],
    ['h1','', QOffices_h1.yes ,QOffices_h1.no, QOffices_h1.RCA,QOffices_h1.AB],
    ['h2','', QOffices_h2.yes,QOffices_h2.no,QOffices_h2.RCA,QOffices_h2.AB],
    ['h3','', QOffices_h3.yes,QOffices_h3.no,QOffices_h3.RCA,QOffices_h3.AB],
    ['h4','', QOffices_h4.yes,QOffices_h4.no,QOffices_h4.RCA,QOffices_h4.AB],
    ['h5','', QOffices_h5.yes,QOffices_h5.no,QOffices_h5.RCA,QOffices_h5.AB],
    ['h6','', QOffices_h6.yes,QOffices_h6.no,QOffices_h6.RCA,QOffices_h6.AB],
    ['h7','', QOffices_h7.yes,QOffices_h7.no,QOffices_h7.RCA,QOffices_h7.AB],
    ['h8','', QOffices_h8.yes,QOffices_h8.no,QOffices_h8.RCA,QOffices_h8.AB],
    ['i', ''],
    ['i1','', QOffices_i1.yes ,QOffices_i1.no, QOffices_i1.RCA,QOffices_i1.AB],
    ['i2','', QOffices_i2.yes,QOffices_i2.no,QOffices_i2.RCA,QOffices_i2.AB],
    ['i3','', QOffices_i3.yes,QOffices_i3.no,QOffices_i3.RCA,QOffices_i3.AB],
    ['i4','', QOffices_i4.yes,QOffices_i4.no,QOffices_i4.RCA,QOffices_i4.AB],
    ['i5','', QOffices_i5.yes,QOffices_i5.no,QOffices_i5.RCA,QOffices_i5.AB],
    ['i6','', QOffices_i6.yes,QOffices_i6.no,QOffices_i6.RCA,QOffices_i6.AB],
    ['4', 'ARMSKOTES'],
    ['a', ''],
    ['a1','', QArmskotes_a1.yes ,QArmskotes_a1.no, QArmskotes_a1.RCA,QArmskotes_a1.AB],
    ['a2','', QArmskotes_a2.yes,QArmskotes_a2.no,QArmskotes_a2.RCA,QArmskotes_a2.AB],
    ['a3','', QArmskotes_a3.yes,QArmskotes_a3.no,QArmskotes_a3.RCA,QArmskotes_a3.AB],
    ['a4','', QArmskotes_a4.yes,QArmskotes_a4.no,QArmskotes_a4.RCA,QArmskotes_a4.AB],
    ['a5','', QArmskotes_a5.yes,QArmskotes_a5.no,QArmskotes_a5.RCA,QArmskotes_a5.AB],
    ['a6','', QArmskotes_a6.yes,QArmskotes_a6.no,QArmskotes_a6.RCA,QArmskotes_a6.AB],
    ['b', ''],
    ['b1','', QArmskotes_b1.yes ,QArmskotes_b1.no, QArmskotes_b1.RCA,QArmskotes_b1.AB],
    ['b2','', QArmskotes_b2.yes,QArmskotes_b2.no,QArmskotes_b2.RCA,QArmskotes_b2.AB],
    ['b3','', QArmskotes_b3.yes,QArmskotes_b3.no,QArmskotes_b3.RCA,QArmskotes_b3.AB],
    ['b4','', QArmskotes_b4.yes,QArmskotes_b4.no,QArmskotes_b4.RCA,QArmskotes_b4.AB],
    ['c', ''],
    ['c1','', QArmskotes_c1.yes ,QArmskotes_c1.no, QArmskotes_c1.RCA,QArmskotes_c1.AB],
    ['c2','', QArmskotes_c2.yes,QArmskotes_c2.no,QArmskotes_c2.RCA,QArmskotes_c2.AB],
    ['d', ''],
    ['d1','', QArmskotes_d1.yes ,QArmskotes_d1.no, QArmskotes_d1.RCA,QArmskotes_d1.AB],
    ['d2','', QArmskotes_d2.yes,QArmskotes_d2.no,QArmskotes_d2.RCA,QArmskotes_d2.AB],
    ['e', ''],
    ['e1','', QArmskotes_e1.yes ,QArmskotes_e1.no, QArmskotes_e1.RCA,QArmskotes_e1.AB],
    ['e2','', QArmskotes_e2.yes,QArmskotes_e2.no,QArmskotes_e2.RCA,QArmskotes_e2.AB],
    ['e3','', QArmskotes_e3.yes,QArmskotes_e3.no,QArmskotes_e3.RCA,QArmskotes_e3.AB],
    ['f', ''],
    ['f1','', QArmskotes_f1.yes ,QArmskotes_f1.no, QArmskotes_f1.RCA,QArmskotes_f1.AB],
    ['f2','', QArmskotes_f2.yes,QArmskotes_f2.no,QArmskotes_f2.RCA,QArmskotes_f2.AB],
    ['f3','', QArmskotes_f3.yes,QArmskotes_f3.no,QArmskotes_f3.RCA,QArmskotes_f3.AB],
    ['f4','', QArmskotes_f4.yes,QArmskotes_f4.no,QArmskotes_f4.RCA,QArmskotes_f4.AB],
    ['f5','', QArmskotes_f5.yes,QArmskotes_f5.no,QArmskotes_f5.RCA,QArmskotes_f5.AB],
    ['f6','', QArmskotes_f6.yes,QArmskotes_f6.no,QArmskotes_f6.RCA,QArmskotes_f6.AB],
    ['g', ''],
    ['g1','', QArmskotes_g1.yes ,QArmskotes_g1.no, QArmskotes_g1.RCA,QArmskotes_g1.AB],
    ['g2','', QArmskotes_g2.yes,QArmskotes_g2.no,QArmskotes_g2.RCA,QArmskotes_g2.AB],
    ['g3','', QArmskotes_g3.yes,QArmskotes_g3.no,QArmskotes_g3.RCA,QArmskotes_g3.AB],
    ['g4','', QArmskotes_g4.yes,QArmskotes_g4.no,QArmskotes_g4.RCA,QArmskotes_g4.AB],
    ['5', 'STOREROOM'],
    ['a', ''],
    ['a1','', QStoreroom_a1.yes ,QStoreroom_a1.no, QStoreroom_a1.RCA,QStoreroom_a1.AB],
    ['a2','', QStoreroom_a2.yes,QStoreroom_a2.no,QStoreroom_a2.RCA,QStoreroom_a2.AB],
    ['a3','', QStoreroom_a3.yes,QStoreroom_a3.no,QStoreroom_a3.RCA,QStoreroom_a3.AB],
    ['a4','', QStoreroom_a4.yes,QStoreroom_a4.no,QStoreroom_a4.RCA,QStoreroom_a4.AB],
    ['a5','', QStoreroom_a5.yes,QStoreroom_a5.no,QStoreroom_a5.RCA,QStoreroom_a5.AB],
    ['a6','', QStoreroom_a6.yes,QStoreroom_a6.no,QStoreroom_a6.RCA,QStoreroom_a6.AB],
    ['b', ''],
    ['b1','', QStoreroom_b1.yes ,QStoreroom_b1.no, QStoreroom_b1.RCA,QStoreroom_b1.AB],
    ['b2','', QStoreroom_b2.yes,QStoreroom_b2.no,QStoreroom_b2.RCA,QStoreroom_b2.AB],
    ['b3','', QStoreroom_b3.yes,QStoreroom_b3.no,QStoreroom_b3.RCA,QStoreroom_b3.AB],
    ['c', ''],
    ['c1','', QStoreroom_c1.yes ,QStoreroom_c1.no, QStoreroom_c1.RCA,QStoreroom_c1.AB],
    ['c2','', QStoreroom_c2.yes,QStoreroom_c2.no,QStoreroom_c2.RCA,QStoreroom_c2.AB],
    ['d', ''],
    ['d1','', QStoreroom_d1.yes ,QStoreroom_d1.no, QStoreroom_d1.RCA,QStoreroom_d1.AB],
    ['d2','', QStoreroom_d2.yes,QStoreroom_d2.no,QStoreroom_d2.RCA,QStoreroom_d2.AB],
    ['d3','', QStoreroom_d3.yes,QStoreroom_d3.no,QStoreroom_d3.RCA,QStoreroom_d3.AB],
    ['e', ''],
    ['e1','', QStoreroom_e1.yes ,QStoreroom_e1.no, QStoreroom_e1.RCA,QStoreroom_e1.AB],
    ['e2','', QStoreroom_e2.yes,QStoreroom_e2.no,QStoreroom_e2.RCA,QStoreroom_e2.AB],
    ['e3','', QStoreroom_e3.yes,QStoreroom_e3.no,QStoreroom_e3.RCA,QStoreroom_e3.AB],
    ['e4','', QStoreroom_e4.yes,QStoreroom_e4.no,QStoreroom_e4.RCA,QStoreroom_e4.AB],
    ['e5','', QStoreroom_e5.yes,QStoreroom_e5.no,QStoreroom_e5.RCA,QStoreroom_e5.AB],
    ['e6','', QStoreroom_e6.yes,QStoreroom_e6.no,QStoreroom_e6.RCA,QStoreroom_e6.AB],
    ['f', ''],
    ['f1','', QStoreroom_f1.yfs ,QStoreroom_f1.no, QStoreroom_f1.RCA,QStoreroom_f1.AB],
    ['f2','', QStoreroom_f2.yfs,QStoreroom_f2.no,QStoreroom_f2.RCA,QStoreroom_f2.AB],
    ['f3','', QStoreroom_f3.yfs,QStoreroom_f3.no,QStoreroom_f3.RCA,QStoreroom_f3.AB],
    ['f4','', QStoreroom_f4.yfs,QStoreroom_f4.no,QStoreroom_f4.RCA,QStoreroom_f4.AB],
  ];
 var csv = '';
    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'report.csv';
  hiddenElement.click();

});
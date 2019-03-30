function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
console.log(xhr);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);


}
loadJson("dynamic.json",function(text)
{
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
 career(data.career);
 education(data.education);
 skills(data.skills);
})
var left=document.querySelector(".left");
function profile(p)
{
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);
  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);
  var h3=document.createElement("designation");
  h3.textContent=p.designation;
  left.append(h3);
  var h4=document.createElement("phone");
  h4.textContent=p.phone;
  left.append(h4);
}
var right=document.querySelector(".right");
function career(ca)
{
  var nn=document.createElement("h2");
  nn.textContent="career";
  right.append(nn);
  var hr=document.createElement("hr");
  right.append(hr);
  var p=document.createElement("p");
  p.textContent=ca.info;
  right.append(p);
}
  //edu
  function education(edu) {

    var nn=document.createElement("h2");
    nn.textContent="education details";
    right.append(nn);
    var hr=document.createElement("hr");
    right.append(hr);


  var table=document.createElement("table");
  //right.append(table);
  table.border="2";

  var  tr1="<tr><th>Qualification</th> <th>Institute</th> <th>percentage</th></tr>";
  var tr2="";
  for(var i=0;i<edu.length;i++)
  {
    tr2=tr2+"<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].percentage+"</td></tr>";
  }
  table.innerHTML=tr1+tr2;

  right.append(table);
}

function skills(s){
  var rr=document.createElement("h2");
  rr.textContent="skill set";
  right.append(rr);
  var ul=document.createElement("ul");
  for( var i in s){
    var li=document.createElement("li");
    li.innerHTML=s[i].name+":"+s[i].info;
    ul.append(li);
  }
  right.append(ul);


}

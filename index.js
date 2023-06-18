
  NL=()=>
  {

document.querySelector("body").textContent="Appointment will be fixed soon ";
  }



  var eps=[{
  name: 'Meshach',
  email:'meshach@gmail.com',
  phone:'0541478368',
  specialization:'Genetics',

},
{
  name: 'Meshach',
  email:'meshach@gmail.com',
  phone:'0541478368',
  specialization:'Midwifery',

}
,{
  name: 'Kwabena',
  email:'Kwabena@gmail.com',
  phone:'0541478368',
  specialization:'Dietician'

}
]

 
 personal_Meshach=()=>{
  alert("Dr. Meshach is well renowned genetician across the world \nEmail:"+eps[0].email+"\nPhone Number:"+eps[0].phone+"\nSpecializtion:"+eps[0].specialization);

 }
personal_Lina=()=>{
  alert("Lina is a nurse who is advanced and well built in midwifery.\nEmail:"+eps[1].email+"\nPhone Number:"+eps[1].phone+"\nSpecializtion:"+eps[1].specialization)
}
personal_Kwabena=()=>{
  alert("Kwabena is a nurse who is an extraordinary dietician .\nEmail:"+eps[2].email+"\nPhone Number:"+eps[2].phone+"\nSpecializtion:"+eps[2].specialization)
}
h_Meet=()=>{
  alert("Appointment will be fixed soon")
}


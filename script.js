// Simple client-side form handler: validates and opens mailto for demo
document.addEventListener('DOMContentLoaded',function(){
  const form=document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const message=document.getElementById('message').value.trim();
    if(!name||!email||!message){
      alert('Please complete all fields.');
      return;
    }
    const subject=encodeURIComponent('Contact from Teens for Good website');
    const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href=`mailto:teensforgood@example.org?subject=${subject}&body=${body}`;
  });
});

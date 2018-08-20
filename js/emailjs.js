(function(){
    emailjs.init("user_lqKZ5vejfBA034vAQhC0C");
 })();

 window.onload = function() {
    document.getElementById('hire-application').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('contact_service', 'hireus_template', this);
    });
    document.getElementById('job-application').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('contact_service', 'jobapply_template', this);
    });
    
}
function scrollToContact() {
    const contactSection = document.getElementById('kontakt');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
    
    // Validate form
    if (!name || !email || !message) {
        formMessage.textContent = 'Vänligen fyll i alla obligatoriska fält (markerade med *)';
        formMessage.className = 'error';
        return;
    }
    
    // Create email body
    const emailBody = `
Ny kontaktförfrågan från RATDOG hemsida:

Namn: ${name}
E-post: ${email}
Telefon: ${phone || 'Inte angivet'}

Meddelande:
${message}
    `;
    
    // Send email using mailto (fallback solution without backend)
    const mailtoLink = `mailto:dinemail@ratdog.se?subject=Ny kontaktförfrågan från ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}`;
    
    // Show success message
    formMessage.textContent = '✓ Tack! Vi har mottagit ditt meddelande och kontaktar dig snart.';
    formMessage.className = 'success';
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
}

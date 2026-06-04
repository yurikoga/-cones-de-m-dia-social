document.querySelectorAll('.icon-box').forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' de outros e adiciona ao clicado
        document.querySelectorAll('.icon-box').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Simula um clique de feedback
        console.log("Social icon clicked!");
    });
});

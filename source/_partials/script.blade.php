<script>
    const email = document.getElementById("email");
    email.onclick = function() {
        navigator.clipboard.writeText('{{ $page->social->email }}'.split('').reverse().join(''));
        email.textContent = "Copied ✔︎";
        setTimeout(() => {
            email.textContent = 'Email';
        }, 1500);
    }
</script>
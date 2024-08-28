document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const productList = document.getElementById('product-list');
    const productDetails = document.getElementById('product-details');
    const detailsContent = document.getElementById('details-content');
    const closeDetailsButton = document.getElementById('close-details');

    // Função para redirecionar com base no botão clicado
    function handleRedirect(e) {
        const buttonId = e.target.id;
        const redirectLinks = {
            'redirect-button1': 'https://w.app/mNfjRO',
            'redirect-button2': 'https://w.app/mNfjRO', // Troque pelos links apropriados
            'redirect-button3': 'https://w.app/mNfjRO',
            'redirect-button4': 'https://w.app/mNfjRO',
            'redirect-button5': 'https://w.app/mNfjRO',
            'redirect-button6': 'https://w.app/mNfjRO',
            'redirect-button7': 'https://w.app/mNfjRO',
            'redirect-button8': 'https://w.app/mNfjRO',
            'redirect-button9': 'https://w.app/mNfjRO',
            'redirect-button10': 'https://w.app/mNfjRO',
            'redirect-button11': 'https://w.app/mNfjRO',
            'redirect-button12': 'https://w.app/mNfjRO'
        };
        if (redirectLinks[buttonId]) {
            window.location.href = redirectLinks[buttonId];
        }
    }

    // Adiciona eventos de clique aos botões de redirecionamento
    productList.addEventListener('click', handleRedirect);

    closeDetailsButton.addEventListener('click', () => {
        productDetails.style.display = 'none';
    });
});
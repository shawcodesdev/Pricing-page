document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('input[type="checkbox"]');
    const price1 = document.getElementById('price1');
    const price2 = document.getElementById('price2');
    const price3 = document.getElementById('price3');

    const updatePrices = () => {
        if(toggleSwitch.checked){
            price1.textContent = '₹199.99';
            price2.textContent = '₹249.99';
            price3.textContent = '₹399.99';
        }else{
            price1.textContent = '₹1999.99';
            price2.textContent = '₹2499.99';
            price3.textContent = '₹3999.99';
        }
    };

    toggleSwitch.addEventListener('change', updatePrices);
});
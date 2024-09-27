import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const items = [
    { name: 'Common Pistol', rarity: 'common', color: 'grey' },
    { name: 'Uncommon Rifle', rarity: 'uncommon', color: 'green' },
    { name: 'Rare Sniper', rarity: 'rare', color: 'blue' },
    { name: 'Epic Knife', rarity: 'epic', color: 'purple' },
    { name: 'Legendary AK-47', rarity: 'legendary', color: 'gold' }
];

document.getElementById('open-case-btn').addEventListener('click', function() {
    const result = document.getElementById('result');
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
    
    result.textContent = `You got: ${selectedItem.name}`;
    result.style.color = selectedItem.color;
});

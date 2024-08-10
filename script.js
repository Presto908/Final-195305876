function getDate() {
    const dateInput = document.getElementById('birthday').value;
    return new Date(dateInput);
}

function start() {
    const targetDate = getDate();

    if (isNaN(targetDate.getTime()) || targetDate < new Date()) {
        alert("Date is expired or invalid");
        return;
    }

    // Clear any previous interval
    if (countdownInterval) clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        const now = new Date();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('demo').innerHTML = "EXPIRED";
            return;
        }

       
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const deciseconds = Math.floor((distance % 1000) / 100); // Tenths of a second

        
        document.getElementById('demo').innerHTML = `
            ${String(days).padStart(2, '0')} <sub>days</sub> 
            ${String(hours).padStart(2, '0')} <sub>hrs</sub> 
            ${String(minutes).padStart(2, '0')} <sub>mins</sub> 
            ${String(seconds).padStart(2, '0')} <sub>scnds</sub> 
            ${String(deciseconds).padStart(1, '0')} <sub>decscnd</sub>
        `;
    }, 100); 
}

let countdownInterval;

document.addEventListener('DOMContentLoaded', () => {
    const cardHTML = `<img src="world.jpg" alt="Profile image">`;
    document.getElementById('card').innerHTML += cardHTML;
});

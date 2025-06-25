// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active-page');

    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-primary');
        btn.classList.add('text-gray-400');
    });

    // Find the button that triggered this and highlight it
    const buttons = document.querySelectorAll('.nav-btn');
    for (let btn of buttons) {
        if (btn.onclick.toString().includes(pageId)) {
            btn.classList.remove('text-gray-400');
            btn.classList.add('text-primary');
        }
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Split Days Management
document.getElementById('split-days').addEventListener('change', function () {
    const daysCount = parseInt(this.value);
    const container = document.getElementById('days-container');

    // In a real app, we would dynamically adjust the number of day cards
    // For this demo, we'll just show/hide the existing ones
    const dayCards = container.querySelectorAll('.day-card');

    dayCards.forEach((card, index) => {
        if (index < daysCount) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Custom checkbox functionality
document.querySelectorAll('.custom-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const exerciseItem = this.closest('.bg-dark\\/50');
        if (this.checked) {
            exerciseItem.querySelector('.flex-1').classList.add('opacity-70');
        } else {
            exerciseItem.querySelector('.flex-1').classList.remove('opacity-70');
        }
    });
});
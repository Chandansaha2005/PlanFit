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

// Add Muscle Group Tag
function addMuscleTag(inputId, tagContainerId) {
    const input = document.getElementById(inputId);
    const value = input.value.trim();
    if (!value) return;

    const tag = document.createElement('span');
    tag.className = 'bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-full text-sm flex items-center';
    tag.innerHTML = `${value}
        <button type="button" onclick="this.parentElement.remove()" class="ml-2 text-red-500 font-bold">×</button>`;

    document.getElementById(tagContainerId).appendChild(tag);
    input.value = '';
    document.addEventListener('DOMContentLoaded', () => {
        enableDeleteForAllTags();
    });

}
// Function to attach delete buttons to all existing spans
function enableDeleteForAllTags() {
    const tagContainers = document.querySelectorAll('.flex.flex-wrap.gap-2');

    tagContainers.forEach(container => {
        container.querySelectorAll('span').forEach(tag => {
            if (!tag.querySelector('button')) {
                tag.classList.add('flex', 'items-center', 'justify-between', 'gap-2');

                const btn = document.createElement('button');
                btn.textContent = '×';
                btn.className = 'ml-2 text-red-500 font-bold text-sm';
                btn.type = 'button';
                btn.onclick = () => tag.remove();

                tag.appendChild(btn);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', enableDeleteForAllTags);



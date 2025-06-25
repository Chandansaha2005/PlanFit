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

// get the day number to spilt page to exercises 
document.getElementById('split-days').addEventListener('change', generateDayButtons);

// Initial call on load
window.addEventListener('DOMContentLoaded', generateDayButtons);

function generateDayButtons() {
    const dayCount = parseInt(document.getElementById('split-days').value);
    const navContainer = document.getElementById('day-nav');
    navContainer.innerHTML = ''; // Clear old buttons

    for (let i = 1; i <= dayCount; i++) {
        // Try to get the day name from input fields in card
        const input = document.querySelectorAll('.day-card input[type="text"]')[i - 1];
        const label = input ? input.value || `Day ${i}` : `Day ${i}`;

        const btn = document.createElement('button');
        btn.className =
            'px-4 py-2 bg-dark border border-gray-700 text-white font-medium rounded-xl whitespace-nowrap';
        btn.textContent = `Day ${i}: ${label}`;

        // Highlight first button by default
        if (i === 1) {
            btn.classList.remove('bg-dark', 'text-white');
            btn.classList.add('bg-primary', 'text-dark');
        }

        navContainer.appendChild(btn);
    }
}
//add exercise
function addExercise() {
    const name = document.getElementById('exerciseName').value.trim();
    const sets = document.getElementById('exerciseSets').value.trim();
    const reps = document.getElementById('exerciseReps').value.trim();
    const notes = document.getElementById('exerciseNotes').value.trim();

    if (!name || !sets || !reps) {
        alert('Please fill in Exercise Name, Sets, and Reps.');
        return;
    }

    const newExercise = {
        name,
        sets,
        reps,
        notes
    };

    // For now: log to console
    console.log('New Exercise Added:', newExercise);

    // Optionally: clear form fields
    document.getElementById('exerciseName').value = '';
    document.getElementById('exerciseSets').value = '';
    document.getElementById('exerciseReps').value = '';
    document.getElementById('exerciseNotes').value = '';
}


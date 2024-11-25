function loadFeatureContent(feature) {
    const contentArea = document.getElementById('content-area');
    let content = '';

    if (feature === 'modules') {
        content = `
            <h3>📚 Learning Modules</h3>
            <div class="sub-feature-grid">
                <button class="sub-feature-btn" onclick="loadSubContent('math')">🧮 Math</button>
                <button class="sub-feature-btn" onclick="loadSubContent('science')">🔬 Science</button>
                <button class="sub-feature-btn" onclick="loadSubContent('story')">📖 Story</button>
            </div>
        `;
    } else if (feature === 'classrooms') {
        content = `
            <h3>🏕️ Mobile Classrooms</h3>
            <p>Our mobile classrooms bring the magic of learning wherever children are!</p>
        `;
    } else if (feature === 'puzzles') {
        content = `
            <h3>🧩 Puzzle & Brain Games</h3>
            <div class="sub-feature-grid">
                <button class="sub-feature-btn" onclick="loadSubContent('word')">🔤 Word Search</button>
                <button class="sub-feature-btn" onclick="loadSubContent('memory')">🧠 Memory Match</button>
                <button class="sub-feature-btn" onclick="loadSubContent('logic')">🕵️ Logic Riddles</button>
            </div>
        `;
    }

    contentArea.innerHTML = content;
}

function loadSubContent(subFeature) {
    const contentArea = document.getElementById('content-area');
    let content = '';

    if (subFeature === 'math') {
        content = `<h3>🧮 Math</h3><p>Learn numbers and calculations in fun ways!</p>`;
    } else if (subFeature === 'science') {
        content = `<h3>🔬 Science</h3><p>Explore experiments and learn cool facts about nature!</p>`;
    } else if (subFeature === 'story') {
        content = `<h3>📖 Story</h3><p>Dive into exciting adventures through storytelling!</p>`;
    } else if (subFeature === 'word') {
        content = `<h3>🔤 Word Search</h3><p>Find hidden words in a grid to boost vocabulary!</p>`;
    } else if (subFeature === 'memory') {
        content = `<h3>🧠 Memory Match</h3><p>Improve memory skills by matching cards!</p>`;
    } else if (subFeature === 'logic') {
        content = `<h3>🕵️ Logic Riddles</h3><p>Challenge your brain with tricky riddles!</p>`;
    }

    contentArea.innerHTML = content;
}

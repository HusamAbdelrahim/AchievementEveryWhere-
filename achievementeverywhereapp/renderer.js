const content = document.querySelector('#categories');
const back = document.querySelector('#back');
const categories = document.querySelector('#categories');
const detail = document.querySelector('#detail');
const detailTitle = document.querySelector('#detail-title');
const searchBox = document.querySelector('#query');
const searchGroup = document.querySelector('.group');

const achievements = [
    {category: "reading", title: "Read Chapter 1", img: "book-01-I.png", desc: "Finish the first chapter"},
    {category: "reading", title: "Read Chapter 2", img: "book-02-II.png", desc: "Keep The Streak Goin'"},
    {category: "reading", title: "Read Chapter 3", img: "book-03-III.png", desc: "Valve can't count to Three"},
    {category: "reading", title: "Read Chapter 4", img: "book-04-IV.png", desc: "Finish chapter four"},
    {category: "reading", title: "Read Chapter 5", img: "book-05-V.png", desc: "Chapter 5 Here We aree"}
]

function renderDetail(category) {
    const list = document.querySelector('#achievement-list');
    const matches = achievements.filter(a => a.category === category);

    list.innerHTML = matches.map (a => `
        <div class = "achievement">
            <img src = "${a.img}" alt = "">
            <div class = "details">
                <h4>${a.title}</h4>
                <p>${a.desc}</p>
            </div>
        </div>
        `).join('');
}

content.addEventListener('click', (event) =>{
    const card = event.target.closest('.card');
    if (!card) return;

    renderDetail(card.dataset.category);

    categories.style.display = 'none';
    searchGroup.style.display = 'none';
    detail.style.display = 'flex';
    detailTitle.textContent = card.dataset.category;
});

back.addEventListener('click', () =>{
    detail.style.display = 'none';
    categories.style.display = 'flex';
    searchGroup.style.display = 'flex';
});

searchBox.addEventListener('input', () =>{
    const term = searchBox.value.toLowerCase();
    const card = document.querySelectorAll('#categories .card');

    card.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        card.style.display = title.includes(term) ? '' : 'none';


    });
});


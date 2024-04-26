document.getElementById('sidebarOpenBtn').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const openBtn = document.getElementById('sidebarOpenBtn');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        content.style.marginLeft = '0';
        openBtn.innerText = 'Open Sidebar';
    } else {
        sidebar.classList.add('active');
        content.style.marginLeft = '250px';
        openBtn.innerText = 'Close Sidebar';
    }
});

document.getElementById('generateBtn').addEventListener('click', function () {
    const randomContent = document.getElementById('generatedContent');
    const randomText = generateRandomText(); // Function to generate random text
    randomContent.innerText = randomText;
});

function generateRandomText() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-*/?#$&%';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 15; i++) { // Change 5 to the desired length of random text
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


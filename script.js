/*fetch("header_index.html")
    .then(response => response.text())
    .then(data => { document.getElementById("header_index").innerHTML = data; }
    );

fetch("header.html")
    .then(response => response.text())
    .then(data => { document.getElementById("header").innerHTML = data; }
    );

fetch("footer.html")
    .then(response => response.text())
    .then(data => { document.getElementById("footer").innerHTML = data; }
    );*/


fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        const menuToggle = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');

        if (menuToggle && navList) {
            menuToggle.addEventListener('click', () => {
                navList.classList.toggle('active');
            });
        }
    });

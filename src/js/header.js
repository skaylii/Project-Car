function header() {
    const header = document.querySelector('.page-header');

    window.addEventListener('scroll', function(e) {
        if (window.scrollY > 100) {
            header.classList.add('page-header-fixed');
        } else {
            header.classList.remove('page-header-fixed');
        }

    });

    const links = document.querySelectorAll('.page-nav-list a');
    for (const a of links) {
        a.addEventListener('click', function(e) {
            e.preventDefault();

            const href = this.getAttribute('href');
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: 'smooth'
            });

        });
    }
}

export default header;
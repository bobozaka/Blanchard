const galerySelect = () => {
    const element = document.querySelector('.section-galery__select');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
};

galerySelect();

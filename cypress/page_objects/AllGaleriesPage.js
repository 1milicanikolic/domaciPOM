class AllGalleriesPage {
    get allGalleriesBtn() {
        return cy.get('.nav-link').eq(1);
    }
    get searchInput() {
        return cy.get(':text');
    }

    get searchBtn() {
        return cy.get('.btn');
    }

    findGallery(galleryNameOrAuthor) {
        this.searchInput.type(galleryNameOrAuthor);
        this.searchBtn.click();
    }
}
export const allGalleriesPage = new AllGalleriesPage();

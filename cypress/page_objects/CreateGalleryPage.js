class CreateGalleryPage {
    get createGalleryBtn() {
        return cy.get('a[href="/create"]')
    }

    get titleInput() {
        return cy.get('#title')
    }
    
    get descInput() {
        return cy.get('#description')
    }

    get imageInput() {
        return cy.get(':url')
    }

    get submitBtn() {
        return cy.get(':submit')
    }

    createGallery(title, desc, url) {
        this.titleInput.type(title);
        this.descInput.type(desc);
        this.imageInput.type(url);
        this.submitBtn.click();
    }
}

export const createGalleryPage = new CreateGalleryPage();
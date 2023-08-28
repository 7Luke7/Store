export class FetchError extends Error {
    constructor(message = "Something went wrong while fetching data!") {
        super(message)
        this.name = "FetchError"
    }
}

export class ProductsNotFoundError extends Error {
    constructor(message = "There are no products to show on this page.") {
        super(message)
        this.name = "ProductsNotFoundError"
    }
}
/**
 * @author Soumit Mandal
 * ATM locator domain class
 */
export class AtmLocator {
    constructor(
        public street: string,
        public housenumber: string,
        public postalcode: string,
        public city: string) { }
}
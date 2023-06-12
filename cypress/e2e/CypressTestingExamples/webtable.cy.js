/// <reference types="cypress" />

describe('file download', () => {

    it('file download', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

        const map = new Map();
        const items = [];
        const prices = [];

        for (let i = 1; i <= 5; i++) {
            cy.get("table[class='table table-bordered']>tbody>tr:nth-child(" + i + ")>td:nth-child(1)").each(($itemsData) => {
                const item = $itemsData.text().trim();
                items.push(item);
            });
        }
        cy.then(() => {
            cy.log(items.join(','));
        });

        for (let i = 1; i <= 5; i++) {
            cy.get("table[class='table table-bordered']>tbody>tr:nth-child(" + i + ")>td:nth-child(2)").each(($itemsData) => {
                const price = $itemsData.text().trim();
                prices.push(price);
            });
        }
        cy.then(() => {
            cy.log(prices.join(','));
        });
        cy.then(() => {
            if (items.length == prices.length) {
                for (let i = 1; i < items.length; i++) {
                    map.set(items[i], prices[i]);
                }
            }
            const obj = Object.fromEntries(map.entries());
           
            cy.log(map.get('Potato'))
        })



    })
})

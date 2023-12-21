namespace sap.db;

using { cuid,Currency } from '@sap/cds/common';

entity books : cuid {
    title: String;
    ISBN: String;
    price: Decimal(8,2);
}
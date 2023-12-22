namespace sap.db.vt;

using { cuid,Currency } from '@sap/cds/common';
@cds.persistence.exists
entity books : cuid {
    title: String;
    ISBN: String;
    price: Decimal(8,2);
}
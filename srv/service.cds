namespace sap.srv;
using { sap.db as db } from '../db/schema';
using { sap.db.vt as vt } from '../db/schema_vt';
service MyService {
    @odata.draft.enabled
    entity books as projection on db.books;

    @odata.draft.enabled
    entity vt_books as projection on vt.books;
}
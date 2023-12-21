namespace sap.srv;
using { sap.db as db } from '../db/schema';
service MyService {
    @odata.draft.enabled
    entity books as projection on db.books;
}
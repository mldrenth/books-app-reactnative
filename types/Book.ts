export default interface IBook {
    publishers: string[];
    number_of_pages: number;
    isbn_10: string[];
    covers: number[];
    key: string;
    authors: Author[];
    ocaid: string;
    contributions: string[];
    languages: Author[];
    classifications: Classifications;
    source_records: string[];
    title: string;
    identifiers: Identifiers;
    isbn_13: string[];
    local_id: string[];
    publish_date: string;
    works: Author[];
    type: Author;
    first_sentence: Firstsentence;
    latest_revision: number;
    revision: number;
    created: Firstsentence;
    last_modified: Firstsentence;
}

interface Firstsentence {
    type: string;
    value: string;
}

interface Identifiers {
    goodreads: string[];
    librarything: string[];
}

interface Classifications {
}

interface Author {
    key: string;
}

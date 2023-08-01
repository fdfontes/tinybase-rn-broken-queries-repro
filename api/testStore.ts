import {CellId, CellIdsListener, CellListener, InvalidCellListener, MapBoolean, MapString, MediaCardCellCallback, MediaCardCellId, MediaCardRow, MediaCardRowCallback, MediaCardRowWhenSet, MediaCardTable, MediaCardTableCellCallback, MediaCardTableWhenSet, RowIdsListener, RowListener, SortedRowIdsListener, TableCallback, TableCellIdsListener, TableId, TableIdsListener, TableListener, Tables, TablesListener, TablesWhenSet, TestStore, TextCardCellCallback, TextCardCellId, TextCardRow, TextCardRowCallback, TextCardRowWhenSet, TextCardTable, TextCardTableCellCallback, TextCardTableWhenSet, TransactionListener, createTestStore as createTestStoreDecl} from './testStore.d';
import {DoRollback, Id, IdOrNull, Ids, Json, Store, TransactionChanges, Values, createStore} from 'tinybase';

export const createTestStore: typeof createTestStoreDecl = () => {
const MEDIACARD = 'mediaCard';

const USER = 'user';

const SOURCEICON = 'sourceIcon';

const SOURCENAME = 'sourceName';

const CATEGORY = 'category';

const IMGURI = 'imgUri';

const AVATARIMG = 'avatarImg';

const AVATARTEXT = 'avatarText';

const HANDLE = 'handle';

const CARDID = 'cardId';

const BOOKMARKED = 'bookmarked';

const FAVOURITED = 'favourited';

const TEXTCARD = 'textCard';

const HEADING = 'heading';

const SUBHEADING = 'subheading';

const TYPE = 'type';

const STRING = 'string';

const BOOLEAN = 'boolean';

const DEFAULT = 'default';

const store = createStore()
.setTablesSchema({
[MEDIACARD]: {
[USER]: {[TYPE]: STRING},
[SOURCEICON]: {[TYPE]: STRING},
[SOURCENAME]: {[TYPE]: STRING},
[CATEGORY]: {[TYPE]: STRING},
[IMGURI]: {[TYPE]: STRING},
[AVATARIMG]: {[TYPE]: STRING},
[AVATARTEXT]: {[TYPE]: STRING},
[HANDLE]: {[TYPE]: STRING},
[CARDID]: {[TYPE]: STRING},
[BOOKMARKED]: {[TYPE]: BOOLEAN, [DEFAULT]: false},
[FAVOURITED]: {[TYPE]: BOOLEAN, [DEFAULT]: false},
},
[TEXTCARD]: {
[USER]: {[TYPE]: STRING},
[SOURCEICON]: {[TYPE]: STRING},
[SOURCENAME]: {[TYPE]: STRING},
[CATEGORY]: {[TYPE]: STRING},
[HEADING]: {[TYPE]: STRING},
[SUBHEADING]: {[TYPE]: STRING},
[CARDID]: {[TYPE]: STRING},
[BOOKMARKED]: {[TYPE]: BOOLEAN, [DEFAULT]: false},
[FAVOURITED]: {[TYPE]: BOOLEAN, [DEFAULT]: false},
},
});

const fluent = (actions: () => Store) => {
actions();
return testStore;
};

const proxy = (listener: any) => (_: Store, ...params: any[]) => listener(testStore, ...params);

const testStore = {
getTables: (): Tables => store.getTables() as Tables,

hasTables: (): boolean => store.hasTables(),

setTables: (tables: TablesWhenSet): TestStore => fluent(() => store.setTables(tables)),

delTables: (): TestStore => fluent(() => store.delTables()),

getTableIds: (): TableId[] => store.getTableIds() as TableId[],

forEachTable: (tableCallback: TableCallback): void => store.forEachTable(tableCallback as any),

getMediaCardTable: (): MediaCardTable => store.getTable(MEDIACARD) as MediaCardTable,

hasMediaCardTable: (): boolean => store.hasTable(MEDIACARD),

setMediaCardTable: (table: MediaCardTableWhenSet): TestStore => fluent(() => store.setTable(MEDIACARD, table)),

delMediaCardTable: (): TestStore => fluent(() => store.delTable(MEDIACARD)),

getMediaCardTableCellIds: (): Ids => store.getTableCellIds(MEDIACARD) as Ids,

forEachMediaCardTableCell: (tableCellCallback: MediaCardTableCellCallback): void => store.forEachTableCell(MEDIACARD, tableCellCallback as any),

getMediaCardRowIds: (): Ids => store.getRowIds(MEDIACARD) as Ids,

getMediaCardSortedRowIds: (cellId?: MediaCardCellId, descending?: boolean, offset?: number, limit?: number): Ids => store.getSortedRowIds(MEDIACARD, cellId, descending, offset, limit) as Ids,

forEachMediaCardRow: (rowCallback: MediaCardRowCallback): void => store.forEachRow(MEDIACARD, rowCallback as any),

getMediaCardRow: (rowId: Id): MediaCardRow => store.getRow(MEDIACARD, rowId) as MediaCardRow,

hasMediaCardRow: (rowId: Id): boolean => store.hasRow(MEDIACARD, rowId),

setMediaCardRow: (rowId: Id, row: MediaCardRowWhenSet): TestStore => fluent(() => store.setRow(MEDIACARD, rowId, row)),

delMediaCardRow: (rowId: Id): TestStore => fluent(() => store.delRow(MEDIACARD, rowId)),

setMediaCardPartialRow: (rowId: Id, partialRow: MediaCardRowWhenSet): TestStore => fluent(() => store.setPartialRow(MEDIACARD, rowId, partialRow)),

addMediaCardRow: (row: MediaCardRowWhenSet, reuseIds?: boolean): Id | undefined => store.addRow(MEDIACARD, row, reuseIds),

getMediaCardCellIds: (rowId: Id): MediaCardCellId[] => store.getCellIds(MEDIACARD, rowId) as MediaCardCellId[],

forEachMediaCardCell: (rowId: Id, cellCallback: MediaCardCellCallback): void => store.forEachCell(MEDIACARD, rowId, cellCallback as any),

getMediaCardUserCell: (rowId: Id): string | undefined => store.getCell(MEDIACARD, rowId, USER) as string | undefined,

hasMediaCardUserCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, USER),

setMediaCardUserCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, USER, cell as any)),

delMediaCardUserCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, USER)),

hasMediaCardUserTableCell: (): boolean => store.hasTableCell(MEDIACARD, USER),

getMediaCardSourceIconCell: (rowId: Id): string | undefined => store.getCell(MEDIACARD, rowId, SOURCEICON) as string | undefined,

hasMediaCardSourceIconCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, SOURCEICON),

setMediaCardSourceIconCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, SOURCEICON, cell as any)),

delMediaCardSourceIconCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, SOURCEICON)),

hasMediaCardSourceIconTableCell: (): boolean => store.hasTableCell(MEDIACARD, SOURCEICON),

getMediaCardSourceNameCell: (rowId: Id): string | undefined => store.getCell(MEDIACARD, rowId, SOURCENAME) as string | undefined,

hasMediaCardSourceNameCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, SOURCENAME),

setMediaCardSourceNameCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, SOURCENAME, cell as any)),

delMediaCardSourceNameCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, SOURCENAME)),

hasMediaCardSourceNameTableCell: (): boolean => store.hasTableCell(MEDIACARD, SOURCENAME),

getMediaCardCategoryCell: (rowId: Id): string | undefined => store.getCell(MEDIACARD, rowId, CATEGORY) as string | undefined,

hasMediaCardCategoryCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, CATEGORY),

setMediaCardCategoryCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, CATEGORY, cell as any)),

delMediaCardCategoryCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, CATEGORY)),

hasMediaCardCategoryTableCell: (): boolean => store.hasTableCell(MEDIACARD, CATEGORY),

getMediaCardImgUriCell: (rowId: Id): string | undefined => store.getCell(MEDIACARD, rowId, IMGURI) as string | undefined,

hasMediaCardImgUriCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, IMGURI),

setMediaCardImgUriCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, IMGURI, cell as any)),

delMediaCardImgUriCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, IMGURI)),

hasMediaCardImgUriTableCell: (): boolean => store.hasTableCell(MEDIACARD, IMGURI),

getMediaCardAvatarImgCell: (rowId: Id): string | undefined => store.getCell(MEDIACARD, rowId, AVATARIMG) as string | undefined,

hasMediaCardAvatarImgCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, AVATARIMG),

setMediaCardAvatarImgCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, AVATARIMG, cell as any)),

delMediaCardAvatarImgCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, AVATARIMG)),

hasMediaCardAvatarImgTableCell: (): boolean => store.hasTableCell(MEDIACARD, AVATARIMG),

getMediaCardAvatarTextCell: (rowId: Id): string | undefined => store.getCell(MEDIACARD, rowId, AVATARTEXT) as string | undefined,

hasMediaCardAvatarTextCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, AVATARTEXT),

setMediaCardAvatarTextCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, AVATARTEXT, cell as any)),

delMediaCardAvatarTextCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, AVATARTEXT)),

hasMediaCardAvatarTextTableCell: (): boolean => store.hasTableCell(MEDIACARD, AVATARTEXT),

getMediaCardHandleCell: (rowId: Id): string | undefined => store.getCell(MEDIACARD, rowId, HANDLE) as string | undefined,

hasMediaCardHandleCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, HANDLE),

setMediaCardHandleCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, HANDLE, cell as any)),

delMediaCardHandleCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, HANDLE)),

hasMediaCardHandleTableCell: (): boolean => store.hasTableCell(MEDIACARD, HANDLE),

getMediaCardCardIdCell: (rowId: Id): string | undefined => store.getCell(MEDIACARD, rowId, CARDID) as string | undefined,

hasMediaCardCardIdCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, CARDID),

setMediaCardCardIdCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, CARDID, cell as any)),

delMediaCardCardIdCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, CARDID)),

hasMediaCardCardIdTableCell: (): boolean => store.hasTableCell(MEDIACARD, CARDID),

getMediaCardBookmarkedCell: (rowId: Id): boolean => store.getCell(MEDIACARD, rowId, BOOKMARKED) as boolean,

hasMediaCardBookmarkedCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, BOOKMARKED),

setMediaCardBookmarkedCell: (rowId: Id, cell: boolean | MapBoolean): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, BOOKMARKED, cell as any)),

delMediaCardBookmarkedCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, BOOKMARKED)),

hasMediaCardBookmarkedTableCell: (): boolean => store.hasTableCell(MEDIACARD, BOOKMARKED),

getMediaCardFavouritedCell: (rowId: Id): boolean => store.getCell(MEDIACARD, rowId, FAVOURITED) as boolean,

hasMediaCardFavouritedCell: (rowId: Id): boolean => store.hasCell(MEDIACARD, rowId, FAVOURITED),

setMediaCardFavouritedCell: (rowId: Id, cell: boolean | MapBoolean): TestStore => fluent(() => store.setCell(MEDIACARD, rowId, FAVOURITED, cell as any)),

delMediaCardFavouritedCell: (rowId: Id): TestStore => fluent(() => store.delCell(MEDIACARD, rowId, FAVOURITED)),

hasMediaCardFavouritedTableCell: (): boolean => store.hasTableCell(MEDIACARD, FAVOURITED),

getTextCardTable: (): TextCardTable => store.getTable(TEXTCARD) as TextCardTable,

hasTextCardTable: (): boolean => store.hasTable(TEXTCARD),

setTextCardTable: (table: TextCardTableWhenSet): TestStore => fluent(() => store.setTable(TEXTCARD, table)),

delTextCardTable: (): TestStore => fluent(() => store.delTable(TEXTCARD)),

getTextCardTableCellIds: (): Ids => store.getTableCellIds(TEXTCARD) as Ids,

forEachTextCardTableCell: (tableCellCallback: TextCardTableCellCallback): void => store.forEachTableCell(TEXTCARD, tableCellCallback as any),

getTextCardRowIds: (): Ids => store.getRowIds(TEXTCARD) as Ids,

getTextCardSortedRowIds: (cellId?: TextCardCellId, descending?: boolean, offset?: number, limit?: number): Ids => store.getSortedRowIds(TEXTCARD, cellId, descending, offset, limit) as Ids,

forEachTextCardRow: (rowCallback: TextCardRowCallback): void => store.forEachRow(TEXTCARD, rowCallback as any),

getTextCardRow: (rowId: Id): TextCardRow => store.getRow(TEXTCARD, rowId) as TextCardRow,

hasTextCardRow: (rowId: Id): boolean => store.hasRow(TEXTCARD, rowId),

setTextCardRow: (rowId: Id, row: TextCardRowWhenSet): TestStore => fluent(() => store.setRow(TEXTCARD, rowId, row)),

delTextCardRow: (rowId: Id): TestStore => fluent(() => store.delRow(TEXTCARD, rowId)),

setTextCardPartialRow: (rowId: Id, partialRow: TextCardRowWhenSet): TestStore => fluent(() => store.setPartialRow(TEXTCARD, rowId, partialRow)),

addTextCardRow: (row: TextCardRowWhenSet, reuseIds?: boolean): Id | undefined => store.addRow(TEXTCARD, row, reuseIds),

getTextCardCellIds: (rowId: Id): TextCardCellId[] => store.getCellIds(TEXTCARD, rowId) as TextCardCellId[],

forEachTextCardCell: (rowId: Id, cellCallback: TextCardCellCallback): void => store.forEachCell(TEXTCARD, rowId, cellCallback as any),

getTextCardUserCell: (rowId: Id): string | undefined => store.getCell(TEXTCARD, rowId, USER) as string | undefined,

hasTextCardUserCell: (rowId: Id): boolean => store.hasCell(TEXTCARD, rowId, USER),

setTextCardUserCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(TEXTCARD, rowId, USER, cell as any)),

delTextCardUserCell: (rowId: Id): TestStore => fluent(() => store.delCell(TEXTCARD, rowId, USER)),

hasTextCardUserTableCell: (): boolean => store.hasTableCell(TEXTCARD, USER),

getTextCardSourceIconCell: (rowId: Id): string | undefined => store.getCell(TEXTCARD, rowId, SOURCEICON) as string | undefined,

hasTextCardSourceIconCell: (rowId: Id): boolean => store.hasCell(TEXTCARD, rowId, SOURCEICON),

setTextCardSourceIconCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(TEXTCARD, rowId, SOURCEICON, cell as any)),

delTextCardSourceIconCell: (rowId: Id): TestStore => fluent(() => store.delCell(TEXTCARD, rowId, SOURCEICON)),

hasTextCardSourceIconTableCell: (): boolean => store.hasTableCell(TEXTCARD, SOURCEICON),

getTextCardSourceNameCell: (rowId: Id): string | undefined => store.getCell(TEXTCARD, rowId, SOURCENAME) as string | undefined,

hasTextCardSourceNameCell: (rowId: Id): boolean => store.hasCell(TEXTCARD, rowId, SOURCENAME),

setTextCardSourceNameCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(TEXTCARD, rowId, SOURCENAME, cell as any)),

delTextCardSourceNameCell: (rowId: Id): TestStore => fluent(() => store.delCell(TEXTCARD, rowId, SOURCENAME)),

hasTextCardSourceNameTableCell: (): boolean => store.hasTableCell(TEXTCARD, SOURCENAME),

getTextCardCategoryCell: (rowId: Id): string | undefined => store.getCell(TEXTCARD, rowId, CATEGORY) as string | undefined,

hasTextCardCategoryCell: (rowId: Id): boolean => store.hasCell(TEXTCARD, rowId, CATEGORY),

setTextCardCategoryCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(TEXTCARD, rowId, CATEGORY, cell as any)),

delTextCardCategoryCell: (rowId: Id): TestStore => fluent(() => store.delCell(TEXTCARD, rowId, CATEGORY)),

hasTextCardCategoryTableCell: (): boolean => store.hasTableCell(TEXTCARD, CATEGORY),

getTextCardHeadingCell: (rowId: Id): string | undefined => store.getCell(TEXTCARD, rowId, HEADING) as string | undefined,

hasTextCardHeadingCell: (rowId: Id): boolean => store.hasCell(TEXTCARD, rowId, HEADING),

setTextCardHeadingCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(TEXTCARD, rowId, HEADING, cell as any)),

delTextCardHeadingCell: (rowId: Id): TestStore => fluent(() => store.delCell(TEXTCARD, rowId, HEADING)),

hasTextCardHeadingTableCell: (): boolean => store.hasTableCell(TEXTCARD, HEADING),

getTextCardSubheadingCell: (rowId: Id): string | undefined => store.getCell(TEXTCARD, rowId, SUBHEADING) as string | undefined,

hasTextCardSubheadingCell: (rowId: Id): boolean => store.hasCell(TEXTCARD, rowId, SUBHEADING),

setTextCardSubheadingCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(TEXTCARD, rowId, SUBHEADING, cell as any)),

delTextCardSubheadingCell: (rowId: Id): TestStore => fluent(() => store.delCell(TEXTCARD, rowId, SUBHEADING)),

hasTextCardSubheadingTableCell: (): boolean => store.hasTableCell(TEXTCARD, SUBHEADING),

getTextCardCardIdCell: (rowId: Id): string | undefined => store.getCell(TEXTCARD, rowId, CARDID) as string | undefined,

hasTextCardCardIdCell: (rowId: Id): boolean => store.hasCell(TEXTCARD, rowId, CARDID),

setTextCardCardIdCell: (rowId: Id, cell: string | MapString): TestStore => fluent(() => store.setCell(TEXTCARD, rowId, CARDID, cell as any)),

delTextCardCardIdCell: (rowId: Id): TestStore => fluent(() => store.delCell(TEXTCARD, rowId, CARDID)),

hasTextCardCardIdTableCell: (): boolean => store.hasTableCell(TEXTCARD, CARDID),

getTextCardBookmarkedCell: (rowId: Id): boolean => store.getCell(TEXTCARD, rowId, BOOKMARKED) as boolean,

hasTextCardBookmarkedCell: (rowId: Id): boolean => store.hasCell(TEXTCARD, rowId, BOOKMARKED),

setTextCardBookmarkedCell: (rowId: Id, cell: boolean | MapBoolean): TestStore => fluent(() => store.setCell(TEXTCARD, rowId, BOOKMARKED, cell as any)),

delTextCardBookmarkedCell: (rowId: Id): TestStore => fluent(() => store.delCell(TEXTCARD, rowId, BOOKMARKED)),

hasTextCardBookmarkedTableCell: (): boolean => store.hasTableCell(TEXTCARD, BOOKMARKED),

getTextCardFavouritedCell: (rowId: Id): boolean => store.getCell(TEXTCARD, rowId, FAVOURITED) as boolean,

hasTextCardFavouritedCell: (rowId: Id): boolean => store.hasCell(TEXTCARD, rowId, FAVOURITED),

setTextCardFavouritedCell: (rowId: Id, cell: boolean | MapBoolean): TestStore => fluent(() => store.setCell(TEXTCARD, rowId, FAVOURITED, cell as any)),

delTextCardFavouritedCell: (rowId: Id): TestStore => fluent(() => store.delCell(TEXTCARD, rowId, FAVOURITED)),

hasTextCardFavouritedTableCell: (): boolean => store.hasTableCell(TEXTCARD, FAVOURITED),

getTablesJson: (): Json => store.getTablesJson() as Json,

setTablesJson: (tablesJson: Json): TestStore => fluent(() => store.setTablesJson(tablesJson)),

addTablesListener: (listener: TablesListener, mutator?: boolean): Id => store.addTablesListener(proxy(listener), mutator),

addTableIdsListener: (listener: TableIdsListener, mutator?: boolean): Id => store.addTableIdsListener(proxy(listener), mutator),

addTableListener: (tableId: TableId | null, listener: TableListener, mutator?: boolean): Id => store.addTableListener(tableId, proxy(listener), mutator),

addTableCellIdsListener: (tableId: TableId | null, listener: TableCellIdsListener, mutator?: boolean): Id => store.addTableCellIdsListener(tableId, proxy(listener), mutator),

addRowIdsListener: (tableId: TableId | null, listener: RowIdsListener, mutator?: boolean): Id => store.addRowIdsListener(tableId, proxy(listener), mutator),

addSortedRowIdsListener: <TId extends TableId>(tableId: TId, cellId: CellId<TId> | undefined, descending: boolean, offset: number, limit: number | undefined, listener: SortedRowIdsListener, mutator?: boolean): Id => store.addSortedRowIdsListener(tableId, cellId, descending, offset, limit, proxy(listener), mutator),

addRowListener: (tableId: TableId | null, rowId: IdOrNull, listener: RowListener, mutator?: boolean): Id => store.addRowListener(tableId, rowId, proxy(listener), mutator),

addCellIdsListener: (tableId: TableId | null, rowId: IdOrNull, listener: CellIdsListener, mutator?: boolean): Id => store.addCellIdsListener(tableId, rowId, proxy(listener), mutator),

addCellListener: (tableId: TableId | null, rowId: IdOrNull, cellId: MediaCardCellId | TextCardCellId | null, listener: CellListener, mutator?: boolean): Id => store.addCellListener(tableId, rowId, cellId, proxy(listener), mutator),

addInvalidCellListener: (tableId: IdOrNull, rowId: IdOrNull, cellId: IdOrNull, listener: InvalidCellListener, mutator?: boolean): Id => store.addInvalidCellListener(tableId, rowId, cellId, proxy(listener), mutator),

getContent: (): [Tables, Values] => store.getContent() as [Tables, Values],

setContent: ([tables, values]: [Tables, Values]): TestStore => fluent(() => store.setContent([tables, values])),

setTransactionChanges: (transactionChanges: TransactionChanges): TestStore => fluent(() => store.setTransactionChanges(transactionChanges)),

getJson: (): Json => store.getJson() as Json,

setJson: (tablesAndValuesJson: Json): TestStore => fluent(() => store.setJson(tablesAndValuesJson)),

transaction: <Return>(actions: () => Return, doRollback?: DoRollback): Return => store.transaction(actions, doRollback),

startTransaction: (): TestStore => fluent(() => store.startTransaction()),

finishTransaction: (doRollback?: DoRollback): TestStore => fluent(() => store.finishTransaction(doRollback)),

addStartTransactionListener: (listener: TransactionListener): Id => store.addStartTransactionListener(proxy(listener)),

addWillFinishTransactionListener: (listener: TransactionListener): Id => store.addWillFinishTransactionListener(proxy(listener)),

addDidFinishTransactionListener: (listener: TransactionListener): Id => store.addDidFinishTransactionListener(proxy(listener)),

callListener: (listenerId: Id): TestStore => fluent(() => store.callListener(listenerId)),

delListener: (listenerId: Id): TestStore => fluent(() => store.delListener(listenerId)),

getStore: (): Store => store,

};

return Object.freeze(testStore);
};
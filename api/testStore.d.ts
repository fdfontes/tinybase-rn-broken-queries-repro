import {
  CellChange,
  DoRollback,
  GetTransactionChanges,
  GetTransactionLog,
  Id,
  IdOrNull,
  Ids,
  Json,
  Store,
  TransactionChanges,
  Values,
} from "tinybase";

/**
 * Represents the tabular content of the Store.
 */
export type Tables = {
  mediaCard?: {
    [rowId: Id]: {
      user?: string;
      sourceIcon?: string;
      sourceName?: string;
      category?: string;
      imgUri?: string;
      avatarImg?: string;
      avatarText?: string;
      handle?: string;
      cardId?: string;
      bookmarked: boolean;
      favourited: boolean;
    };
  };
  textCard?: {
    [rowId: Id]: {
      user?: string;
      sourceIcon?: string;
      sourceName?: string;
      category?: string;
      heading?: string;
      subheading?: string;
      cardId?: string;
      bookmarked: boolean;
      favourited: boolean;
    };
  };
};

/**
 * Represents the tabular content of the Store when setting it.
 */
export type TablesWhenSet = {
  mediaCard?: {
    [rowId: Id]: {
      user?: string;
      sourceIcon?: string;
      sourceName?: string;
      category?: string;
      imgUri?: string;
      avatarImg?: string;
      avatarText?: string;
      handle?: string;
      cardId?: string;
      bookmarked?: boolean;
      favourited?: boolean;
    };
  };
  textCard?: {
    [rowId: Id]: {
      user?: string;
      sourceIcon?: string;
      sourceName?: string;
      category?: string;
      heading?: string;
      subheading?: string;
      cardId?: string;
      bookmarked?: boolean;
      favourited?: boolean;
    };
  };
};

/**
 * A Table Id in the Store.
 */
export type TableId = keyof Tables;

/**
 * A Table in the Store.
 */
export type Table<TId extends TableId> = NonNullable<Tables[TId]>;

/**
 * A Table in the Store when setting it.
 */
export type TableWhenSet<TId extends TableId> = NonNullable<TablesWhenSet[TId]>;

/**
 * A Row in a Table.
 */
export type Row<TId extends TableId> = Table<TId>[Id];

/**
 * A Row in a Table when setting it.
 */
export type RowWhenSet<TId extends TableId> = TableWhenSet<TId>[Id];

/**
 * A Cell Id in a Row.
 */
export type CellId<TId extends TableId> = Extract<keyof Row<TId>, Id>;

/**
 * A Cell in a Row.
 */
export type Cell<TId extends TableId, CId extends CellId<TId>> = NonNullable<
  Tables[TId]
>[Id][CId];

/**
 * Cell Ids and types in a Row.
 */
type CellIdCellArray<
  TId extends TableId,
  CId = CellId<TId>
> = CId extends CellId<TId> ? [cellId: CId, cell: Cell<TId, CId>] : never;

/**
 * A function that takes a Cell Id, and Cell.
 */
export type CellCallback<TId extends TableId> = (
  ...[cellId, cell]: CellIdCellArray<TId>
) => void;

/**
 * A function that takes a Row Id, and a Cell iterator.
 */
export type RowCallback<TId extends TableId> = (
  rowId: Id,
  forEachCell: (cellCallback: CellCallback<TId>) => void
) => void;

/**
 * A function that takes a Cell Id, and count of how many times it appears.
 */
export type TableCellCallback<TId extends TableId> = (
  cellId: CellId<TId>,
  count: number
) => void;

/**
 * Table Ids and callback types.
 */
type TableIdForEachRowArray<TId = TableId> = TId extends TableId
  ? [tableId: TId, forEachRow: (rowCallback: RowCallback<TId>) => void]
  : never;

/**
 * A function that takes a Table Id, and a Row iterator.
 */
export type TableCallback = (
  ...[tableId, forEachRow]: TableIdForEachRowArray
) => void;

/**
 * Ids for GetCellChange.
 */
type TableIdRowIdCellIdArray<TId = TableId> = TId extends TableId
  ? [tableId: TId, rowId: Id, cellId: CellId<TId>]
  : never;

/**
 * A function for returning information about any Cell's changes during a
 * transaction.
 */
export type GetCellChange = (
  ...[tableId, rowId, cellId]: TableIdRowIdCellIdArray
) => CellChange;

/**
 * A function for listening to changes to Tables in the Store.
 */
export type TablesListener = (
  testStore: TestStore,
  getCellChange: GetCellChange | undefined
) => void;

/**
 * A function for listening to changes to the Table Ids in the Store.
 */
export type TableIdsListener = (testStore: TestStore) => void;

/**
 * A function for listening to changes to a Table in the Store.
 */
export type TableListener = (
  testStore: TestStore,
  tableId: TableId,
  getCellChange: GetCellChange | undefined
) => void;

/**
 * A function for listening to changes to the Cell Ids anywhere in a Table.
 */
export type TableCellIdsListener = (
  testStore: TestStore,
  tableId: TableId
) => void;

/**
 * A function for listening to changes to the Row Ids in a Table.
 */
export type RowIdsListener = (testStore: TestStore, tableId: TableId) => void;

/**
 * A function for listening to changes to the sorted Row Ids in a Table.
 */
export type SortedRowIdsListener = (
  testStore: TestStore,
  tableId: TableId,
  cellId: Id | undefined,
  descending: boolean,
  offset: number,
  limit: number | undefined,
  sortedRowIds: Ids
) => void;

/**
 * A function for listening to changes to a Row in a Table.
 */
export type RowListener = (
  testStore: TestStore,
  tableId: TableId,
  rowId: Id,
  getCellChange: GetCellChange | undefined
) => void;

/**
 * A function for listening to changes to the Cell Ids in a Row.
 */
export type CellIdsListener = (
  testStore: TestStore,
  tableId: TableId,
  rowId: Id
) => void;

/**
 * Cell args for CellListener.
 */
type CellListenerArgsArrayInner<
  TId extends TableId,
  CId = CellId<TId>
> = CId extends CellId<TId>
  ? [
      testStore: TestStore,
      tableId: TId,
      rowId: Id,
      cellId: CId,
      newCell: Cell<TId, CId> | undefined,
      oldCell: Cell<TId, CId> | undefined,
      getCellChange: GetCellChange | undefined
    ]
  : never;

/**
 * Table args for CellListener.
 */
type CellListenerArgsArrayOuter<TId = TableId> = TId extends TableId
  ? CellListenerArgsArrayInner<TId>
  : never;

/**
 * A function for listening to changes to a Cell in a Row.
 */
export type CellListener = (
  ...[
    testStore,
    tableId,
    rowId,
    cellId,
    newCell,
    oldCell,
    getCellChange,
  ]: CellListenerArgsArrayOuter
) => void;

/**
 * A function for listening to changes to invalid Cell changes in the Store.
 */
export type InvalidCellListener = (
  testStore: TestStore,
  tableId: Id,
  rowId: Id,
  cellId: Id,
  invalidCells: any[]
) => void;

/**
 * Represents the 'mediaCard' Table.
 */
export type MediaCardTable = Table<"mediaCard">;

/**
 * Represents the 'mediaCard' Table when setting it.
 */
export type MediaCardTableWhenSet = TableWhenSet<"mediaCard">;

/**
 * Represents a Row when getting the content of the 'mediaCard' Table.
 */
export type MediaCardRow = Row<"mediaCard">;

/**
 * Represents a Row when setting the content of the 'mediaCard' Table.
 */
export type MediaCardRowWhenSet = RowWhenSet<"mediaCard">;

/**
 * A Cell Id for the 'mediaCard' Table.
 */
export type MediaCardCellId = CellId<"mediaCard">;

/**
 * A function that takes a Cell Id and value from a Row in the 'mediaCard'
 * Table.
 */
export type MediaCardCellCallback = CellCallback<"mediaCard">;

/**
 * A function that takes a Row Id from the 'mediaCard' Table, and a Cell
 * iterator.
 */
export type MediaCardRowCallback = RowCallback<"mediaCard">;

/**
 * A function that takes a Cell Id from anywhere in the 'mediaCard' Table, and a
 * count of how many times it appears.
 */
export type MediaCardTableCellCallback = TableCellCallback<"mediaCard">;

/**
 * Represents the 'textCard' Table.
 */
export type TextCardTable = Table<"textCard">;

/**
 * Represents the 'textCard' Table when setting it.
 */
export type TextCardTableWhenSet = TableWhenSet<"textCard">;

/**
 * Represents a Row when getting the content of the 'textCard' Table.
 */
export type TextCardRow = Row<"textCard">;

/**
 * Represents a Row when setting the content of the 'textCard' Table.
 */
export type TextCardRowWhenSet = RowWhenSet<"textCard">;

/**
 * A Cell Id for the 'textCard' Table.
 */
export type TextCardCellId = CellId<"textCard">;

/**
 * A function that takes a Cell Id and value from a Row in the 'textCard' Table.
 */
export type TextCardCellCallback = CellCallback<"textCard">;

/**
 * A function that takes a Row Id from the 'textCard' Table, and a Cell
 * iterator.
 */
export type TextCardRowCallback = RowCallback<"textCard">;

/**
 * A function that takes a Cell Id from anywhere in the 'textCard' Table, and a
 * count of how many times it appears.
 */
export type TextCardTableCellCallback = TableCellCallback<"textCard">;

/**
 * Takes a string Cell value and returns another.
 */
export type MapString = (cell: string | undefined) => string;

/**
 * Takes a boolean Cell value and returns another.
 */
export type MapBoolean = (cell: boolean | undefined) => boolean;

/**
 * A function for listening to the completion of a transaction.
 */
export type TransactionListener = (
  testStore: TestStore,
  getTransactionChanges: GetTransactionChanges,
  getTransactionLog: GetTransactionLog
) => void;

export interface TestStore {
  /**
   * Gets the tabular content of the Store.
   */
  getTables(): Tables;

  /**
   * Checks existence of the tabular content of the Store.
   */
  hasTables(): boolean;

  /**
   * Sets the tabular content of the Store.
   */
  setTables(tables: TablesWhenSet): TestStore;

  /**
   * Deletes the tabular content of the Store.
   */
  delTables(): TestStore;

  /**
   * Gets the Ids of the Tables in the Store.
   */
  getTableIds(): TableId[];

  /**
   * Calls a function for each Table in the Store.
   */
  forEachTable(tableCallback: TableCallback): void;

  /**
   * Gets the content of the 'mediaCard' Table.
   */
  getMediaCardTable(): MediaCardTable;

  /**
   * Checks existence of the content of the 'mediaCard' Table.
   */
  hasMediaCardTable(): boolean;

  /**
   * Sets the content of the 'mediaCard' Table.
   */
  setMediaCardTable(table: MediaCardTableWhenSet): TestStore;

  /**
   * Deletes the content of the 'mediaCard' Table.
   */
  delMediaCardTable(): TestStore;

  /**
   * Gets the Ids of the Cells in the whole of the 'mediaCard' Table.
   */
  getMediaCardTableCellIds(): Ids;

  /**
   * Calls a function for each TableCell in the whole of the 'mediaCard' Table.
   */
  forEachMediaCardTableCell(
    tableCellCallback: MediaCardTableCellCallback
  ): void;

  /**
   * Gets the Ids of the Rows in the 'mediaCard' Table.
   */
  getMediaCardRowIds(): Ids;

  /**
   * Gets sorted, paginated Ids of the Rows in the 'mediaCard' Table.
   */
  getMediaCardSortedRowIds(
    cellId?: MediaCardCellId,
    descending?: boolean,
    offset?: number,
    limit?: number
  ): Ids;

  /**
   * Calls a function for each Row in the 'mediaCard' Table.
   */
  forEachMediaCardRow(rowCallback: MediaCardRowCallback): void;

  /**
   * Gets the content of the specified Row in the 'mediaCard' Table.
   */
  getMediaCardRow(rowId: Id): MediaCardRow;

  /**
   * Checks existence of the content of the specified Row in the 'mediaCard'
   * Table.
   */
  hasMediaCardRow(rowId: Id): boolean;

  /**
   * Sets the content of the specified Row in the 'mediaCard' Table.
   */
  setMediaCardRow(rowId: Id, row: MediaCardRowWhenSet): TestStore;

  /**
   * Deletes the content of the specified Row in the 'mediaCard' Table.
   */
  delMediaCardRow(rowId: Id): TestStore;

  /**
   * Sets part of the content of the specified Row in the 'mediaCard' Table.
   */
  setMediaCardPartialRow(rowId: Id, partialRow: MediaCardRowWhenSet): TestStore;

  /**
   * Add a new Row to the 'mediaCard' Table.
   */
  addMediaCardRow(row: MediaCardRowWhenSet, reuseIds?: boolean): Id | undefined;

  /**
   * Gets the Ids of the Cells in the specified Row in the 'mediaCard' Table.
   */
  getMediaCardCellIds(rowId: Id): MediaCardCellId[];

  /**
   * Calls a function for each Cell in the specified Row in the 'mediaCard' Table.
   */
  forEachMediaCardCell(rowId: Id, cellCallback: MediaCardCellCallback): void;

  /**
   * Gets the 'user' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardUserCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'user' Cell for the specified Row in the 'mediaCard'
   * Table.
   */
  hasMediaCardUserCell(rowId: Id): boolean;

  /**
   * Sets the 'user' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardUserCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'user' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardUserCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'user' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardUserTableCell(): boolean;

  /**
   * Gets the 'sourceIcon' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardSourceIconCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'sourceIcon' Cell for the specified Row in the
   * 'mediaCard' Table.
   */
  hasMediaCardSourceIconCell(rowId: Id): boolean;

  /**
   * Sets the 'sourceIcon' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardSourceIconCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'sourceIcon' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardSourceIconCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'sourceIcon' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardSourceIconTableCell(): boolean;

  /**
   * Gets the 'sourceName' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardSourceNameCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'sourceName' Cell for the specified Row in the
   * 'mediaCard' Table.
   */
  hasMediaCardSourceNameCell(rowId: Id): boolean;

  /**
   * Sets the 'sourceName' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardSourceNameCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'sourceName' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardSourceNameCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'sourceName' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardSourceNameTableCell(): boolean;

  /**
   * Gets the 'category' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardCategoryCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'category' Cell for the specified Row in the
   * 'mediaCard' Table.
   */
  hasMediaCardCategoryCell(rowId: Id): boolean;

  /**
   * Sets the 'category' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardCategoryCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'category' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardCategoryCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'category' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardCategoryTableCell(): boolean;

  /**
   * Gets the 'imgUri' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardImgUriCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'imgUri' Cell for the specified Row in the
   * 'mediaCard' Table.
   */
  hasMediaCardImgUriCell(rowId: Id): boolean;

  /**
   * Sets the 'imgUri' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardImgUriCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'imgUri' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardImgUriCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'imgUri' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardImgUriTableCell(): boolean;

  /**
   * Gets the 'avatarImg' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardAvatarImgCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'avatarImg' Cell for the specified Row in the
   * 'mediaCard' Table.
   */
  hasMediaCardAvatarImgCell(rowId: Id): boolean;

  /**
   * Sets the 'avatarImg' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardAvatarImgCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'avatarImg' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardAvatarImgCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'avatarImg' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardAvatarImgTableCell(): boolean;

  /**
   * Gets the 'avatarText' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardAvatarTextCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'avatarText' Cell for the specified Row in the
   * 'mediaCard' Table.
   */
  hasMediaCardAvatarTextCell(rowId: Id): boolean;

  /**
   * Sets the 'avatarText' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardAvatarTextCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'avatarText' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardAvatarTextCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'avatarText' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardAvatarTextTableCell(): boolean;

  /**
   * Gets the 'handle' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardHandleCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'handle' Cell for the specified Row in the
   * 'mediaCard' Table.
   */
  hasMediaCardHandleCell(rowId: Id): boolean;

  /**
   * Sets the 'handle' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardHandleCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'handle' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardHandleCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'handle' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardHandleTableCell(): boolean;

  /**
   * Gets the 'cardId' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardCardIdCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'cardId' Cell for the specified Row in the
   * 'mediaCard' Table.
   */
  hasMediaCardCardIdCell(rowId: Id): boolean;

  /**
   * Sets the 'cardId' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardCardIdCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'cardId' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardCardIdCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'cardId' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardCardIdTableCell(): boolean;

  /**
   * Gets the 'bookmarked' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardBookmarkedCell(rowId: Id): boolean;

  /**
   * Checks existence of the 'bookmarked' Cell for the specified Row in the
   * 'mediaCard' Table.
   */
  hasMediaCardBookmarkedCell(rowId: Id): boolean;

  /**
   * Sets the 'bookmarked' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardBookmarkedCell(rowId: Id, cell: boolean | MapBoolean): TestStore;

  /**
   * Deletes the 'bookmarked' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardBookmarkedCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'bookmarked' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardBookmarkedTableCell(): boolean;

  /**
   * Gets the 'favourited' Cell for the specified Row in the 'mediaCard' Table.
   */
  getMediaCardFavouritedCell(rowId: Id): boolean;

  /**
   * Checks existence of the 'favourited' Cell for the specified Row in the
   * 'mediaCard' Table.
   */
  hasMediaCardFavouritedCell(rowId: Id): boolean;

  /**
   * Sets the 'favourited' Cell for the specified Row in the 'mediaCard' Table.
   */
  setMediaCardFavouritedCell(rowId: Id, cell: boolean | MapBoolean): TestStore;

  /**
   * Deletes the 'favourited' Cell for the specified Row in the 'mediaCard' Table.
   */
  delMediaCardFavouritedCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'favourited' Cell anywhere in the 'mediaCard' Table.
   */
  hasMediaCardFavouritedTableCell(): boolean;

  /**
   * Gets the content of the 'textCard' Table.
   */
  getTextCardTable(): TextCardTable;

  /**
   * Checks existence of the content of the 'textCard' Table.
   */
  hasTextCardTable(): boolean;

  /**
   * Sets the content of the 'textCard' Table.
   */
  setTextCardTable(table: TextCardTableWhenSet): TestStore;

  /**
   * Deletes the content of the 'textCard' Table.
   */
  delTextCardTable(): TestStore;

  /**
   * Gets the Ids of the Cells in the whole of the 'textCard' Table.
   */
  getTextCardTableCellIds(): Ids;

  /**
   * Calls a function for each TableCell in the whole of the 'textCard' Table.
   */
  forEachTextCardTableCell(tableCellCallback: TextCardTableCellCallback): void;

  /**
   * Gets the Ids of the Rows in the 'textCard' Table.
   */
  getTextCardRowIds(): Ids;

  /**
   * Gets sorted, paginated Ids of the Rows in the 'textCard' Table.
   */
  getTextCardSortedRowIds(
    cellId?: TextCardCellId,
    descending?: boolean,
    offset?: number,
    limit?: number
  ): Ids;

  /**
   * Calls a function for each Row in the 'textCard' Table.
   */
  forEachTextCardRow(rowCallback: TextCardRowCallback): void;

  /**
   * Gets the content of the specified Row in the 'textCard' Table.
   */
  getTextCardRow(rowId: Id): TextCardRow;

  /**
   * Checks existence of the content of the specified Row in the 'textCard' Table.
   */
  hasTextCardRow(rowId: Id): boolean;

  /**
   * Sets the content of the specified Row in the 'textCard' Table.
   */
  setTextCardRow(rowId: Id, row: TextCardRowWhenSet): TestStore;

  /**
   * Deletes the content of the specified Row in the 'textCard' Table.
   */
  delTextCardRow(rowId: Id): TestStore;

  /**
   * Sets part of the content of the specified Row in the 'textCard' Table.
   */
  setTextCardPartialRow(rowId: Id, partialRow: TextCardRowWhenSet): TestStore;

  /**
   * Add a new Row to the 'textCard' Table.
   */
  addTextCardRow(row: TextCardRowWhenSet, reuseIds?: boolean): Id | undefined;

  /**
   * Gets the Ids of the Cells in the specified Row in the 'textCard' Table.
   */
  getTextCardCellIds(rowId: Id): TextCardCellId[];

  /**
   * Calls a function for each Cell in the specified Row in the 'textCard' Table.
   */
  forEachTextCardCell(rowId: Id, cellCallback: TextCardCellCallback): void;

  /**
   * Gets the 'user' Cell for the specified Row in the 'textCard' Table.
   */
  getTextCardUserCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'user' Cell for the specified Row in the 'textCard'
   * Table.
   */
  hasTextCardUserCell(rowId: Id): boolean;

  /**
   * Sets the 'user' Cell for the specified Row in the 'textCard' Table.
   */
  setTextCardUserCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'user' Cell for the specified Row in the 'textCard' Table.
   */
  delTextCardUserCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'user' Cell anywhere in the 'textCard' Table.
   */
  hasTextCardUserTableCell(): boolean;

  /**
   * Gets the 'sourceIcon' Cell for the specified Row in the 'textCard' Table.
   */
  getTextCardSourceIconCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'sourceIcon' Cell for the specified Row in the
   * 'textCard' Table.
   */
  hasTextCardSourceIconCell(rowId: Id): boolean;

  /**
   * Sets the 'sourceIcon' Cell for the specified Row in the 'textCard' Table.
   */
  setTextCardSourceIconCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'sourceIcon' Cell for the specified Row in the 'textCard' Table.
   */
  delTextCardSourceIconCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'sourceIcon' Cell anywhere in the 'textCard' Table.
   */
  hasTextCardSourceIconTableCell(): boolean;

  /**
   * Gets the 'sourceName' Cell for the specified Row in the 'textCard' Table.
   */
  getTextCardSourceNameCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'sourceName' Cell for the specified Row in the
   * 'textCard' Table.
   */
  hasTextCardSourceNameCell(rowId: Id): boolean;

  /**
   * Sets the 'sourceName' Cell for the specified Row in the 'textCard' Table.
   */
  setTextCardSourceNameCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'sourceName' Cell for the specified Row in the 'textCard' Table.
   */
  delTextCardSourceNameCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'sourceName' Cell anywhere in the 'textCard' Table.
   */
  hasTextCardSourceNameTableCell(): boolean;

  /**
   * Gets the 'category' Cell for the specified Row in the 'textCard' Table.
   */
  getTextCardCategoryCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'category' Cell for the specified Row in the
   * 'textCard' Table.
   */
  hasTextCardCategoryCell(rowId: Id): boolean;

  /**
   * Sets the 'category' Cell for the specified Row in the 'textCard' Table.
   */
  setTextCardCategoryCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'category' Cell for the specified Row in the 'textCard' Table.
   */
  delTextCardCategoryCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'category' Cell anywhere in the 'textCard' Table.
   */
  hasTextCardCategoryTableCell(): boolean;

  /**
   * Gets the 'heading' Cell for the specified Row in the 'textCard' Table.
   */
  getTextCardHeadingCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'heading' Cell for the specified Row in the
   * 'textCard' Table.
   */
  hasTextCardHeadingCell(rowId: Id): boolean;

  /**
   * Sets the 'heading' Cell for the specified Row in the 'textCard' Table.
   */
  setTextCardHeadingCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'heading' Cell for the specified Row in the 'textCard' Table.
   */
  delTextCardHeadingCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'heading' Cell anywhere in the 'textCard' Table.
   */
  hasTextCardHeadingTableCell(): boolean;

  /**
   * Gets the 'subheading' Cell for the specified Row in the 'textCard' Table.
   */
  getTextCardSubheadingCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'subheading' Cell for the specified Row in the
   * 'textCard' Table.
   */
  hasTextCardSubheadingCell(rowId: Id): boolean;

  /**
   * Sets the 'subheading' Cell for the specified Row in the 'textCard' Table.
   */
  setTextCardSubheadingCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'subheading' Cell for the specified Row in the 'textCard' Table.
   */
  delTextCardSubheadingCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'subheading' Cell anywhere in the 'textCard' Table.
   */
  hasTextCardSubheadingTableCell(): boolean;

  /**
   * Gets the 'cardId' Cell for the specified Row in the 'textCard' Table.
   */
  getTextCardCardIdCell(rowId: Id): string | undefined;

  /**
   * Checks existence of the 'cardId' Cell for the specified Row in the 'textCard'
   * Table.
   */
  hasTextCardCardIdCell(rowId: Id): boolean;

  /**
   * Sets the 'cardId' Cell for the specified Row in the 'textCard' Table.
   */
  setTextCardCardIdCell(rowId: Id, cell: string | MapString): TestStore;

  /**
   * Deletes the 'cardId' Cell for the specified Row in the 'textCard' Table.
   */
  delTextCardCardIdCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'cardId' Cell anywhere in the 'textCard' Table.
   */
  hasTextCardCardIdTableCell(): boolean;

  /**
   * Gets the 'bookmarked' Cell for the specified Row in the 'textCard' Table.
   */
  getTextCardBookmarkedCell(rowId: Id): boolean;

  /**
   * Checks existence of the 'bookmarked' Cell for the specified Row in the
   * 'textCard' Table.
   */
  hasTextCardBookmarkedCell(rowId: Id): boolean;

  /**
   * Sets the 'bookmarked' Cell for the specified Row in the 'textCard' Table.
   */
  setTextCardBookmarkedCell(rowId: Id, cell: boolean | MapBoolean): TestStore;

  /**
   * Deletes the 'bookmarked' Cell for the specified Row in the 'textCard' Table.
   */
  delTextCardBookmarkedCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'bookmarked' Cell anywhere in the 'textCard' Table.
   */
  hasTextCardBookmarkedTableCell(): boolean;

  /**
   * Gets the 'favourited' Cell for the specified Row in the 'textCard' Table.
   */
  getTextCardFavouritedCell(rowId: Id): boolean;

  /**
   * Checks existence of the 'favourited' Cell for the specified Row in the
   * 'textCard' Table.
   */
  hasTextCardFavouritedCell(rowId: Id): boolean;

  /**
   * Sets the 'favourited' Cell for the specified Row in the 'textCard' Table.
   */
  setTextCardFavouritedCell(rowId: Id, cell: boolean | MapBoolean): TestStore;

  /**
   * Deletes the 'favourited' Cell for the specified Row in the 'textCard' Table.
   */
  delTextCardFavouritedCell(rowId: Id): TestStore;

  /**
   * Checks existence of the 'favourited' Cell anywhere in the 'textCard' Table.
   */
  hasTextCardFavouritedTableCell(): boolean;

  /**
   * Gets a string serialization of the tabular content of the Store.
   */
  getTablesJson(): Json;

  /**
   * Sets a string serialization of the tabular content of the Store.
   */
  setTablesJson(tablesJson: Json): TestStore;

  /**
   * Registers a listener that will be called whenever the tabular content of the
   * Store changes.
   */
  addTablesListener(listener: TablesListener, mutator?: boolean): Id;

  /**
   * Registers a listener that will be called whenever the Table Ids in the Store
   * change.
   */
  addTableIdsListener(listener: TableIdsListener, mutator?: boolean): Id;

  /**
   * Registers a listener that will be called whenever a Table in the Store
   * changes.
   */
  addTableListener(
    tableId: TableId | null,
    listener: TableListener,
    mutator?: boolean
  ): Id;

  /**
   * Registers a listener that will be called whenever the Cell Ids anywhere in a
   * Table change.
   */
  addTableCellIdsListener(
    tableId: TableId | null,
    listener: TableCellIdsListener,
    mutator?: boolean
  ): Id;

  /**
   * Registers a listener that will be called whenever the Row Ids in a Table
   * change.
   */
  addRowIdsListener(
    tableId: TableId | null,
    listener: RowIdsListener,
    mutator?: boolean
  ): Id;

  /**
   * Registers a listener that will be called whenever the sorted Row Ids in a
   * Table change.
   */
  addSortedRowIdsListener<TId extends TableId>(
    tableId: TId,
    cellId: CellId<TId> | undefined,
    descending: boolean,
    offset: number,
    limit: number | undefined,
    listener: SortedRowIdsListener,
    mutator?: boolean
  ): Id;

  /**
   * Registers a listener that will be called whenever a Row in a Table changes.
   */
  addRowListener(
    tableId: TableId | null,
    rowId: IdOrNull,
    listener: RowListener,
    mutator?: boolean
  ): Id;

  /**
   * Registers a listener that will be called whenever the Cell Ids in a Row
   * change.
   */
  addCellIdsListener(
    tableId: TableId | null,
    rowId: IdOrNull,
    listener: CellIdsListener,
    mutator?: boolean
  ): Id;

  /**
   * Registers a listener that will be called whenever a Cell in a Row changes.
   */
  addCellListener(
    tableId: TableId | null,
    rowId: IdOrNull,
    cellId: MediaCardCellId | TextCardCellId | null,
    listener: CellListener,
    mutator?: boolean
  ): Id;

  /**
   * Registers a listener that will be called whenever an invalid Cell change was
   * attempted.
   */
  addInvalidCellListener(
    tableId: IdOrNull,
    rowId: IdOrNull,
    cellId: IdOrNull,
    listener: InvalidCellListener,
    mutator?: boolean
  ): Id;

  /**
   * Gets the content of the Store.
   */
  getContent(): [Tables, Values];

  /**
   * Sets the content of the Store.
   */
  setContent([tables, values]: [Tables, Values]): TestStore;

  /**
   * Applies a set of TransactionChanges to the Store.
   */
  setTransactionChanges(transactionChanges: TransactionChanges): TestStore;

  /**
   * Gets a string serialization of the content of the Store.
   */
  getJson(): Json;

  /**
   * Sets a string serialization of the content of the Store.
   */
  setJson(tablesAndValuesJson: Json): TestStore;

  /**
   * Execute a transaction to make multiple mutations.
   */
  transaction<Return>(actions: () => Return, doRollback?: DoRollback): Return;

  /**
   * Explicitly starts a transaction.
   */
  startTransaction(): TestStore;

  /**
   * Explicitly finishes a transaction.
   */
  finishTransaction(doRollback?: DoRollback): TestStore;

  /**
   * Registers a listener that will be called just before the start of the
   * transaction.
   */
  addStartTransactionListener(listener: TransactionListener): Id;

  /**
   * Registers a listener that will be called just before the end of the
   * transaction.
   */
  addWillFinishTransactionListener(listener: TransactionListener): Id;

  /**
   * Registers a listener that will be called just after the end of the
   * transaction.
   */
  addDidFinishTransactionListener(listener: TransactionListener): Id;

  /**
   * Manually provoke a listener to be called.
   */
  callListener(listenerId: Id): TestStore;

  /**
   * Remove a listener that was previously added to the Store.
   */
  delListener(listenerId: Id): TestStore;

  /**
   * Gets the underlying Store object.
   */
  getStore(): Store;
}

/**
 * Creates a TestStore object.
 */
export function createTestStore(): TestStore;

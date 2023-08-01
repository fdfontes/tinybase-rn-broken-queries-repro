import {
  Callback,
  Id,
  IdOrNull,
  Ids,
  ParameterizedCallback,
  Store,
} from "tinybase";
import {
  CellIdsListener,
  CellListener,
  MapBoolean,
  MapString,
  MediaCardCellId,
  MediaCardRow,
  MediaCardRowWhenSet,
  MediaCardTable,
  MediaCardTableWhenSet,
  RowIdsListener,
  RowListener,
  SortedRowIdsListener,
  TableCellIdsListener,
  TableId,
  TableIdsListener,
  TableListener,
  Tables,
  TablesListener,
  TablesWhenSet,
  TestStore,
  TextCardCellId,
  TextCardRow,
  TextCardRowWhenSet,
  TextCardTable,
  TextCardTableWhenSet,
} from "./testStore.d";
import {
  CellProps,
  MediaCardAvatarImgCellView as MediaCardAvatarImgCellViewDecl,
  MediaCardAvatarTextCellView as MediaCardAvatarTextCellViewDecl,
  MediaCardBookmarkedCellView as MediaCardBookmarkedCellViewDecl,
  MediaCardCardIdCellView as MediaCardCardIdCellViewDecl,
  MediaCardCategoryCellView as MediaCardCategoryCellViewDecl,
  MediaCardFavouritedCellView as MediaCardFavouritedCellViewDecl,
  MediaCardHandleCellView as MediaCardHandleCellViewDecl,
  MediaCardImgUriCellView as MediaCardImgUriCellViewDecl,
  MediaCardRowView as MediaCardRowViewDecl,
  MediaCardSortedTableView as MediaCardSortedTableViewDecl,
  MediaCardSourceIconCellView as MediaCardSourceIconCellViewDecl,
  MediaCardSourceNameCellView as MediaCardSourceNameCellViewDecl,
  MediaCardTableView as MediaCardTableViewDecl,
  MediaCardUserCellView as MediaCardUserCellViewDecl,
  Provider as ProviderDecl,
  ProviderProps,
  RowProps,
  SortedTableProps,
  TableProps,
  TablesProps,
  TablesView as TablesViewDecl,
  TestStoreOrTestStoreId,
  TextCardBookmarkedCellView as TextCardBookmarkedCellViewDecl,
  TextCardCardIdCellView as TextCardCardIdCellViewDecl,
  TextCardCategoryCellView as TextCardCategoryCellViewDecl,
  TextCardFavouritedCellView as TextCardFavouritedCellViewDecl,
  TextCardHeadingCellView as TextCardHeadingCellViewDecl,
  TextCardRowView as TextCardRowViewDecl,
  TextCardSortedTableView as TextCardSortedTableViewDecl,
  TextCardSourceIconCellView as TextCardSourceIconCellViewDecl,
  TextCardSourceNameCellView as TextCardSourceNameCellViewDecl,
  TextCardSubheadingCellView as TextCardSubheadingCellViewDecl,
  TextCardTableView as TextCardTableViewDecl,
  TextCardUserCellView as TextCardUserCellViewDecl,
  useAddMediaCardRowCallback as useAddMediaCardRowCallbackDecl,
  useAddTextCardRowCallback as useAddTextCardRowCallbackDecl,
  useCellIdsListener as useCellIdsListenerDecl,
  useCellListener as useCellListenerDecl,
  use as useCreateTestStoreDecl,
  useDelMediaCardAvatarImgCellCallback as useDelMediaCardAvatarImgCellCallbackDecl,
  useDelMediaCardAvatarTextCellCallback as useDelMediaCardAvatarTextCellCallbackDecl,
  useDelMediaCardBookmarkedCellCallback as useDelMediaCardBookmarkedCellCallbackDecl,
  useDelMediaCardCardIdCellCallback as useDelMediaCardCardIdCellCallbackDecl,
  useDelMediaCardCategoryCellCallback as useDelMediaCardCategoryCellCallbackDecl,
  useDelMediaCardFavouritedCellCallback as useDelMediaCardFavouritedCellCallbackDecl,
  useDelMediaCardHandleCellCallback as useDelMediaCardHandleCellCallbackDecl,
  useDelMediaCardImgUriCellCallback as useDelMediaCardImgUriCellCallbackDecl,
  useDelMediaCardRowCallback as useDelMediaCardRowCallbackDecl,
  useDelMediaCardSourceIconCellCallback as useDelMediaCardSourceIconCellCallbackDecl,
  useDelMediaCardSourceNameCellCallback as useDelMediaCardSourceNameCellCallbackDecl,
  useDelMediaCardTableCallback as useDelMediaCardTableCallbackDecl,
  useDelMediaCardUserCellCallback as useDelMediaCardUserCellCallbackDecl,
  useDelTablesCallback as useDelTablesCallbackDecl,
  useDelTextCardBookmarkedCellCallback as useDelTextCardBookmarkedCellCallbackDecl,
  useDelTextCardCardIdCellCallback as useDelTextCardCardIdCellCallbackDecl,
  useDelTextCardCategoryCellCallback as useDelTextCardCategoryCellCallbackDecl,
  useDelTextCardFavouritedCellCallback as useDelTextCardFavouritedCellCallbackDecl,
  useDelTextCardHeadingCellCallback as useDelTextCardHeadingCellCallbackDecl,
  useDelTextCardRowCallback as useDelTextCardRowCallbackDecl,
  useDelTextCardSourceIconCellCallback as useDelTextCardSourceIconCellCallbackDecl,
  useDelTextCardSourceNameCellCallback as useDelTextCardSourceNameCellCallbackDecl,
  useDelTextCardSubheadingCellCallback as useDelTextCardSubheadingCellCallbackDecl,
  useDelTextCardTableCallback as useDelTextCardTableCallbackDecl,
  useDelTextCardUserCellCallback as useDelTextCardUserCellCallbackDecl,
  useMediaCardAvatarImgCell as useMediaCardAvatarImgCellDecl,
  useMediaCardAvatarTextCell as useMediaCardAvatarTextCellDecl,
  useMediaCardBookmarkedCell as useMediaCardBookmarkedCellDecl,
  useMediaCardCardIdCell as useMediaCardCardIdCellDecl,
  useMediaCardCategoryCell as useMediaCardCategoryCellDecl,
  useMediaCardCellIds as useMediaCardCellIdsDecl,
  useMediaCardFavouritedCell as useMediaCardFavouritedCellDecl,
  useMediaCardHandleCell as useMediaCardHandleCellDecl,
  useMediaCardImgUriCell as useMediaCardImgUriCellDecl,
  useMediaCardRow as useMediaCardRowDecl,
  useMediaCardRowIds as useMediaCardRowIdsDecl,
  useMediaCardSortedRowIds as useMediaCardSortedRowIdsDecl,
  useMediaCardSourceIconCell as useMediaCardSourceIconCellDecl,
  useMediaCardSourceNameCell as useMediaCardSourceNameCellDecl,
  useMediaCardTableCellIds as useMediaCardTableCellIdsDecl,
  useMediaCardTable as useMediaCardTableDecl,
  useMediaCardUserCell as useMediaCardUserCellDecl,
  useRowIdsListener as useRowIdsListenerDecl,
  useRowListener as useRowListenerDecl,
  useSetMediaCardAvatarImgCellCallback as useSetMediaCardAvatarImgCellCallbackDecl,
  useSetMediaCardAvatarTextCellCallback as useSetMediaCardAvatarTextCellCallbackDecl,
  useSetMediaCardBookmarkedCellCallback as useSetMediaCardBookmarkedCellCallbackDecl,
  useSetMediaCardCardIdCellCallback as useSetMediaCardCardIdCellCallbackDecl,
  useSetMediaCardCategoryCellCallback as useSetMediaCardCategoryCellCallbackDecl,
  useSetMediaCardFavouritedCellCallback as useSetMediaCardFavouritedCellCallbackDecl,
  useSetMediaCardHandleCellCallback as useSetMediaCardHandleCellCallbackDecl,
  useSetMediaCardImgUriCellCallback as useSetMediaCardImgUriCellCallbackDecl,
  useSetMediaCardPartialRowCallback as useSetMediaCardPartialRowCallbackDecl,
  useSetMediaCardRowCallback as useSetMediaCardRowCallbackDecl,
  useSetMediaCardSourceIconCellCallback as useSetMediaCardSourceIconCellCallbackDecl,
  useSetMediaCardSourceNameCellCallback as useSetMediaCardSourceNameCellCallbackDecl,
  useSetMediaCardTableCallback as useSetMediaCardTableCallbackDecl,
  useSetMediaCardUserCellCallback as useSetMediaCardUserCellCallbackDecl,
  useSetTablesCallback as useSetTablesCallbackDecl,
  useSetTextCardBookmarkedCellCallback as useSetTextCardBookmarkedCellCallbackDecl,
  useSetTextCardCardIdCellCallback as useSetTextCardCardIdCellCallbackDecl,
  useSetTextCardCategoryCellCallback as useSetTextCardCategoryCellCallbackDecl,
  useSetTextCardFavouritedCellCallback as useSetTextCardFavouritedCellCallbackDecl,
  useSetTextCardHeadingCellCallback as useSetTextCardHeadingCellCallbackDecl,
  useSetTextCardPartialRowCallback as useSetTextCardPartialRowCallbackDecl,
  useSetTextCardRowCallback as useSetTextCardRowCallbackDecl,
  useSetTextCardSourceIconCellCallback as useSetTextCardSourceIconCellCallbackDecl,
  useSetTextCardSourceNameCellCallback as useSetTextCardSourceNameCellCallbackDecl,
  useSetTextCardSubheadingCellCallback as useSetTextCardSubheadingCellCallbackDecl,
  useSetTextCardTableCallback as useSetTextCardTableCallbackDecl,
  useSetTextCardUserCellCallback as useSetTextCardUserCellCallbackDecl,
  useSortedRowIdsListener as useSortedRowIdsListenerDecl,
  useTableCellIdsListener as useTableCellIdsListenerDecl,
  useTableIds as useTableIdsDecl,
  useTableIdsListener as useTableIdsListenerDecl,
  useTableListener as useTableListenerDecl,
  useTables as useTablesDecl,
  useTablesListener as useTablesListenerDecl,
  useTestStore as useTestStoreDecl,
  useTextCardBookmarkedCell as useTextCardBookmarkedCellDecl,
  useTextCardCardIdCell as useTextCardCardIdCellDecl,
  useTextCardCategoryCell as useTextCardCategoryCellDecl,
  useTextCardCellIds as useTextCardCellIdsDecl,
  useTextCardFavouritedCell as useTextCardFavouritedCellDecl,
  useTextCardHeadingCell as useTextCardHeadingCellDecl,
  useTextCardRow as useTextCardRowDecl,
  useTextCardRowIds as useTextCardRowIdsDecl,
  useTextCardSortedRowIds as useTextCardSortedRowIdsDecl,
  useTextCardSourceIconCell as useTextCardSourceIconCellDecl,
  useTextCardSourceNameCell as useTextCardSourceNameCellDecl,
  useTextCardSubheadingCell as useTextCardSubheadingCellDecl,
  useTextCardTableCellIds as useTextCardTableCellIdsDecl,
  useTextCardTable as useTextCardTableDecl,
  useTextCardUserCell as useTextCardUserCellDecl,
} from "./testStore-ui-react.d";
import {
  ExtraProps,
  useAddRowCallback as useAddRowCallbackCore,
  useCell as useCellCore,
  useCellIds as useCellIdsCore,
  useCellIdsListener as useCellIdsListenerCore,
  useCellListener as useCellListenerCore,
  useDelCellCallback as useDelCellCallbackCore,
  useDelRowCallback as useDelRowCallbackCore,
  useDelTableCallback as useDelTableCallbackCore,
  useDelTablesCallback as useDelTablesCallbackCore,
  useRow as useRowCore,
  useRowIds as useRowIdsCore,
  useRowIdsListener as useRowIdsListenerCore,
  useRowListener as useRowListenerCore,
  useSetCellCallback as useSetCellCallbackCore,
  useSetPartialRowCallback as useSetPartialRowCallbackCore,
  useSetRowCallback as useSetRowCallbackCore,
  useSetTableCallback as useSetTableCallbackCore,
  useSetTablesCallback as useSetTablesCallbackCore,
  useSortedRowIds as useSortedRowIdsCore,
  useSortedRowIdsListener as useSortedRowIdsListenerCore,
  useTableCellIds as useTableCellIdsCore,
  useTableCellIdsListener as useTableCellIdsListenerCore,
  useTable as useTableCore,
  useTableIds as useTableIdsCore,
  useTableIdsListener as useTableIdsListenerCore,
  useTableListener as useTableListenerCore,
  useTables as useTablesCore,
  useTablesListener as useTablesListenerCore,
} from "tinybase/lib/ui-react";
import React from "react";

const { createContext, useContext, useMemo } = React;

const Context = createContext<[TestStore?, { [testStoreId: Id]: TestStore }?]>(
  []
);

const useHook = (
  testStoreOrTestStoreId: TestStoreOrTestStoreId | undefined,
  hook: (...params: any[]) => any,
  preParams: any[],
  postParams: any[] = []
) => {
  const testStore = useTestStore(testStoreOrTestStoreId as Id);
  return hook(
    ...preParams,
    (testStoreOrTestStoreId == null || typeof testStoreOrTestStoreId == "string"
      ? testStore
      : testStoreOrTestStoreId
    )?.getStore(),
    ...postParams
  );
};

const getProps = (getProps: ((id: any) => ExtraProps) | undefined, id: Id) =>
  getProps == null ? ({} as ExtraProps) : getProps(id);

const wrap = (
  children: any,
  separator?: any,
  encloseWithId?: boolean,
  id?: Id
) => {
  const separated =
    separator == null || !Array.isArray(children)
      ? children
      : children.map((child, c) => (c > 0 ? [separator, child] : child));
  return encloseWithId ? [id, ":{", separated, "}"] : separated;
};

const NullComponent = () => null;

const tableView = (
  { testStore, rowComponent, getRowComponentProps, separator, debugIds }: any,
  rowIds: Ids,
  tableId: Id,
  defaultRowComponent: React.ComponentType<any>
) => {
  const Row = rowComponent ?? defaultRowComponent;
  return wrap(
    rowIds.map((rowId) => (
      <Row
        {...getProps(getRowComponentProps, rowId)}
        key={rowId}
        tableId={tableId}
        rowId={rowId}
        testStore={testStore}
        debugIds={debugIds}
      />
    )),
    separator,
    debugIds,
    tableId
  );
};

const MEDIACARD = "mediaCard";

const TEXTCARD = "textCard";

const getDefaultTableComponent = (tableId: Id) =>
  tableId == MEDIACARD
    ? MediaCardTableView
    : tableId == TEXTCARD
    ? TextCardTableView
    : NullComponent;

const USER = "user";

const SOURCEICON = "sourceIcon";

const SOURCENAME = "sourceName";

const CATEGORY = "category";

const IMGURI = "imgUri";

const AVATARIMG = "avatarImg";

const AVATARTEXT = "avatarText";

const HANDLE = "handle";

const CARDID = "cardId";

const BOOKMARKED = "bookmarked";

const FAVOURITED = "favourited";

const HEADING = "heading";

const SUBHEADING = "subheading";

const getDefaultCellComponent = (tableId: Id, cellId: Id) =>
  tableId == MEDIACARD
    ? cellId == USER
      ? MediaCardUserCellView
      : cellId == SOURCEICON
      ? MediaCardSourceIconCellView
      : cellId == SOURCENAME
      ? MediaCardSourceNameCellView
      : cellId == CATEGORY
      ? MediaCardCategoryCellView
      : cellId == IMGURI
      ? MediaCardImgUriCellView
      : cellId == AVATARIMG
      ? MediaCardAvatarImgCellView
      : cellId == AVATARTEXT
      ? MediaCardAvatarTextCellView
      : cellId == HANDLE
      ? MediaCardHandleCellView
      : cellId == CARDID
      ? MediaCardCardIdCellView
      : cellId == BOOKMARKED
      ? MediaCardBookmarkedCellView
      : cellId == FAVOURITED
      ? MediaCardFavouritedCellView
      : NullComponent
    : tableId == TEXTCARD
    ? cellId == USER
      ? TextCardUserCellView
      : cellId == SOURCEICON
      ? TextCardSourceIconCellView
      : cellId == SOURCENAME
      ? TextCardSourceNameCellView
      : cellId == CATEGORY
      ? TextCardCategoryCellView
      : cellId == HEADING
      ? TextCardHeadingCellView
      : cellId == SUBHEADING
      ? TextCardSubheadingCellView
      : cellId == CARDID
      ? TextCardCardIdCellView
      : cellId == BOOKMARKED
      ? TextCardBookmarkedCellView
      : cellId == FAVOURITED
      ? TextCardFavouritedCellView
      : NullComponent
    : NullComponent;

export const useCreateTestStore: typeof useCreateTestStoreDecl = (
  create: () => TestStore,
  createDeps?: React.DependencyList
): TestStore =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(create, createDeps);

export const useTestStore: typeof useTestStoreDecl = (
  id?: Id
): TestStore | undefined => {
  const contextValue = useContext(Context);
  return id == null ? contextValue[0] : contextValue[1]?.[id];
};

export const useTables: typeof useTablesDecl = (
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Tables => useHook(testStoreOrTestStoreId, useTablesCore, []);

export const useTableIds: typeof useTableIdsDecl = (
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): TableId[] => useHook(testStoreOrTestStoreId, useTableIdsCore, []);

export const useSetTablesCallback: typeof useSetTablesCallbackDecl = <
  Parameter,
>(
  getTables: (parameter: Parameter, store: Store) => TablesWhenSet,
  getTablesDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, tables: TablesWhenSet) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter> =>
  useHook(
    testStoreOrTestStoreId,
    useSetTablesCallbackCore,
    [getTables, getTablesDeps],
    [then, thenDeps]
  );

export const useDelTablesCallback: typeof useDelTablesCallbackDecl = (
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback =>
  useHook(
    testStoreOrTestStoreId,
    useDelTablesCallbackCore,
    [],
    [then, thenDeps]
  );

export const TablesView: typeof TablesViewDecl = ({
  testStore,
  tableComponents,
  getTableComponentProps,
  separator,
  debugIds,
}: TablesProps): any =>
  wrap(
    useTableIds(testStore).map((tableId) => {
      const Table = (tableComponents?.[tableId] ??
        getDefaultTableComponent(tableId)) as React.ComponentType<
        TableProps<typeof tableId>
      >;
      return (
        <Table
          {...getProps(getTableComponentProps, tableId)}
          tableId={tableId}
          key={tableId}
          testStore={testStore}
          debugIds={debugIds}
        />
      );
    }),
    separator
  );

export const useMediaCardTable: typeof useMediaCardTableDecl = (
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): MediaCardTable => useHook(testStoreOrTestStoreId, useTableCore, [MEDIACARD]);

export const useMediaCardTableCellIds: typeof useMediaCardTableCellIdsDecl = (
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids => useHook(testStoreOrTestStoreId, useTableCellIdsCore, [MEDIACARD]);

export const useMediaCardRowIds: typeof useMediaCardRowIdsDecl = (
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids => useHook(testStoreOrTestStoreId, useRowIdsCore, [MEDIACARD]);

export const useMediaCardSortedRowIds: typeof useMediaCardSortedRowIdsDecl = (
  cellId?: MediaCardCellId,
  descending?: boolean,
  offset?: number,
  limit?: number,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids =>
  useHook(testStoreOrTestStoreId, useSortedRowIdsCore, [
    MEDIACARD,
    cellId,
    descending,
    offset,
    limit,
  ]);

export const useMediaCardRow: typeof useMediaCardRowDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): MediaCardRow =>
  useHook(testStoreOrTestStoreId, useRowCore, [MEDIACARD, rowId]);

export const useMediaCardCellIds: typeof useMediaCardCellIdsDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): MediaCardCellId[] =>
  useHook(testStoreOrTestStoreId, useCellIdsCore, [MEDIACARD, rowId]);

export const useSetMediaCardTableCallback: typeof useSetMediaCardTableCallbackDecl =
  <Parameter,>(
    getTable: (parameter: Parameter, store: Store) => MediaCardTableWhenSet,
    getTableDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, table: MediaCardTableWhenSet) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetTableCallbackCore,
      [MEDIACARD, getTable, getTableDeps],
      [then, thenDeps]
    );

export const useDelMediaCardTableCallback: typeof useDelMediaCardTableCallbackDecl =
  (
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelTableCallbackCore,
      [MEDIACARD],
      [then, thenDeps]
    );

export const useSetMediaCardRowCallback: typeof useSetMediaCardRowCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getRow: (parameter: Parameter, store: Store) => MediaCardRowWhenSet,
    getRowDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, row: MediaCardRowWhenSet) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetRowCallbackCore,
      [MEDIACARD, rowId, getRow, getRowDeps],
      [then, thenDeps]
    );

export const useAddMediaCardRowCallback: typeof useAddMediaCardRowCallbackDecl =
  <Parameter,>(
    getRow: (parameter: Parameter, store: Store) => MediaCardRowWhenSet,
    getRowDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (
      rowId: Id | undefined,
      store: Store,
      row: MediaCardRowWhenSet
    ) => void,
    thenDeps?: React.DependencyList,
    reuseRowIds?: boolean
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useAddRowCallbackCore,
      [MEDIACARD, getRow, getRowDeps],
      [then, thenDeps, reuseRowIds]
    );

export const useSetMediaCardPartialRowCallback: typeof useSetMediaCardPartialRowCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getPartialRow: (parameter: Parameter, store: Store) => MediaCardRowWhenSet,
    getPartialRowDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, partialRow: MediaCardRowWhenSet) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetPartialRowCallbackCore,
      [MEDIACARD, rowId, getPartialRow, getPartialRowDeps],
      [then, thenDeps]
    );

export const useDelMediaCardRowCallback: typeof useDelMediaCardRowCallbackDecl =
  (
    rowId: Id,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelRowCallbackCore,
      [MEDIACARD, rowId],
      [then, thenDeps]
    );

export const MediaCardRowView: typeof MediaCardRowViewDecl = ({
  rowId,
  testStore,
  cellComponents,
  getCellComponentProps,
  separator,
  debugIds,
}: RowProps<"mediaCard">): any =>
  wrap(
    useMediaCardCellIds(rowId, testStore).map((cellId) => {
      const Cell = (cellComponents?.[cellId] ??
        getDefaultCellComponent(MEDIACARD, cellId)) as React.ComponentType<
        CellProps<typeof MEDIACARD, typeof cellId>
      >;
      return (
        <Cell
          {...getProps(getCellComponentProps, cellId)}
          key={cellId}
          tableId={MEDIACARD}
          rowId={rowId}
          cellId={cellId}
          testStore={testStore}
          debugIds={debugIds}
        />
      );
    }),
    separator,
    debugIds,
    rowId
  );

export const MediaCardSortedTableView: typeof MediaCardSortedTableViewDecl = ({
  cellId,
  descending,
  offset,
  limit,
  ...props
}: SortedTableProps<"mediaCard">): any =>
  tableView(
    props,
    useMediaCardSortedRowIds(
      cellId,
      descending,
      offset,
      limit,
      props.testStore
    ),
    MEDIACARD,
    MediaCardRowView
  );

export const MediaCardTableView: typeof MediaCardTableViewDecl = (
  props: TableProps<"mediaCard">
): any =>
  tableView(
    props,
    useMediaCardRowIds(props.testStore),
    MEDIACARD,
    MediaCardRowView
  );

export const useMediaCardUserCell: typeof useMediaCardUserCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [MEDIACARD, rowId, USER]);

export const useSetMediaCardUserCellCallback: typeof useSetMediaCardUserCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, USER, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardUserCellCallback: typeof useDelMediaCardUserCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, USER, forceDel],
      [then, thenDeps]
    );

export const MediaCardUserCellView: typeof MediaCardUserCellViewDecl = ({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "user">): any =>
  wrap(
    "" + useMediaCardUserCell(rowId, testStore) ?? "",
    undefined,
    debugIds,
    USER
  );

export const useMediaCardSourceIconCell: typeof useMediaCardSourceIconCellDecl =
  (
    rowId: Id,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId
  ): string | undefined =>
    useHook(testStoreOrTestStoreId, useCellCore, [
      MEDIACARD,
      rowId,
      SOURCEICON,
    ]);

export const useSetMediaCardSourceIconCellCallback: typeof useSetMediaCardSourceIconCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, SOURCEICON, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardSourceIconCellCallback: typeof useDelMediaCardSourceIconCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, SOURCEICON, forceDel],
      [then, thenDeps]
    );

export const MediaCardSourceIconCellView: typeof MediaCardSourceIconCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"mediaCard", "sourceIcon">): any =>
    wrap(
      "" + useMediaCardSourceIconCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      SOURCEICON
    );

export const useMediaCardSourceNameCell: typeof useMediaCardSourceNameCellDecl =
  (
    rowId: Id,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId
  ): string | undefined =>
    useHook(testStoreOrTestStoreId, useCellCore, [
      MEDIACARD,
      rowId,
      SOURCENAME,
    ]);

export const useSetMediaCardSourceNameCellCallback: typeof useSetMediaCardSourceNameCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, SOURCENAME, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardSourceNameCellCallback: typeof useDelMediaCardSourceNameCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, SOURCENAME, forceDel],
      [then, thenDeps]
    );

export const MediaCardSourceNameCellView: typeof MediaCardSourceNameCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"mediaCard", "sourceName">): any =>
    wrap(
      "" + useMediaCardSourceNameCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      SOURCENAME
    );

export const useMediaCardCategoryCell: typeof useMediaCardCategoryCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [MEDIACARD, rowId, CATEGORY]);

export const useSetMediaCardCategoryCellCallback: typeof useSetMediaCardCategoryCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, CATEGORY, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardCategoryCellCallback: typeof useDelMediaCardCategoryCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, CATEGORY, forceDel],
      [then, thenDeps]
    );

export const MediaCardCategoryCellView: typeof MediaCardCategoryCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"mediaCard", "category">): any =>
    wrap(
      "" + useMediaCardCategoryCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      CATEGORY
    );

export const useMediaCardImgUriCell: typeof useMediaCardImgUriCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [MEDIACARD, rowId, IMGURI]);

export const useSetMediaCardImgUriCellCallback: typeof useSetMediaCardImgUriCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, IMGURI, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardImgUriCellCallback: typeof useDelMediaCardImgUriCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, IMGURI, forceDel],
      [then, thenDeps]
    );

export const MediaCardImgUriCellView: typeof MediaCardImgUriCellViewDecl = ({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "imgUri">): any =>
  wrap(
    "" + useMediaCardImgUriCell(rowId, testStore) ?? "",
    undefined,
    debugIds,
    IMGURI
  );

export const useMediaCardAvatarImgCell: typeof useMediaCardAvatarImgCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [MEDIACARD, rowId, AVATARIMG]);

export const useSetMediaCardAvatarImgCellCallback: typeof useSetMediaCardAvatarImgCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, AVATARIMG, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardAvatarImgCellCallback: typeof useDelMediaCardAvatarImgCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, AVATARIMG, forceDel],
      [then, thenDeps]
    );

export const MediaCardAvatarImgCellView: typeof MediaCardAvatarImgCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"mediaCard", "avatarImg">): any =>
    wrap(
      "" + useMediaCardAvatarImgCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      AVATARIMG
    );

export const useMediaCardAvatarTextCell: typeof useMediaCardAvatarTextCellDecl =
  (
    rowId: Id,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId
  ): string | undefined =>
    useHook(testStoreOrTestStoreId, useCellCore, [
      MEDIACARD,
      rowId,
      AVATARTEXT,
    ]);

export const useSetMediaCardAvatarTextCellCallback: typeof useSetMediaCardAvatarTextCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, AVATARTEXT, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardAvatarTextCellCallback: typeof useDelMediaCardAvatarTextCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, AVATARTEXT, forceDel],
      [then, thenDeps]
    );

export const MediaCardAvatarTextCellView: typeof MediaCardAvatarTextCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"mediaCard", "avatarText">): any =>
    wrap(
      "" + useMediaCardAvatarTextCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      AVATARTEXT
    );

export const useMediaCardHandleCell: typeof useMediaCardHandleCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [MEDIACARD, rowId, HANDLE]);

export const useSetMediaCardHandleCellCallback: typeof useSetMediaCardHandleCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, HANDLE, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardHandleCellCallback: typeof useDelMediaCardHandleCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, HANDLE, forceDel],
      [then, thenDeps]
    );

export const MediaCardHandleCellView: typeof MediaCardHandleCellViewDecl = ({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "handle">): any =>
  wrap(
    "" + useMediaCardHandleCell(rowId, testStore) ?? "",
    undefined,
    debugIds,
    HANDLE
  );

export const useMediaCardCardIdCell: typeof useMediaCardCardIdCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [MEDIACARD, rowId, CARDID]);

export const useSetMediaCardCardIdCellCallback: typeof useSetMediaCardCardIdCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, CARDID, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardCardIdCellCallback: typeof useDelMediaCardCardIdCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, CARDID, forceDel],
      [then, thenDeps]
    );

export const MediaCardCardIdCellView: typeof MediaCardCardIdCellViewDecl = ({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "cardId">): any =>
  wrap(
    "" + useMediaCardCardIdCell(rowId, testStore) ?? "",
    undefined,
    debugIds,
    CARDID
  );

export const useMediaCardBookmarkedCell: typeof useMediaCardBookmarkedCellDecl =
  (rowId: Id, testStoreOrTestStoreId?: TestStoreOrTestStoreId): boolean =>
    useHook(testStoreOrTestStoreId, useCellCore, [
      MEDIACARD,
      rowId,
      BOOKMARKED,
    ]);

export const useSetMediaCardBookmarkedCellCallback: typeof useSetMediaCardBookmarkedCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => boolean | MapBoolean,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: boolean | MapBoolean) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, BOOKMARKED, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardBookmarkedCellCallback: typeof useDelMediaCardBookmarkedCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, BOOKMARKED, forceDel],
      [then, thenDeps]
    );

export const MediaCardBookmarkedCellView: typeof MediaCardBookmarkedCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"mediaCard", "bookmarked">): any =>
    wrap(
      "" + useMediaCardBookmarkedCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      BOOKMARKED
    );

export const useMediaCardFavouritedCell: typeof useMediaCardFavouritedCellDecl =
  (rowId: Id, testStoreOrTestStoreId?: TestStoreOrTestStoreId): boolean =>
    useHook(testStoreOrTestStoreId, useCellCore, [
      MEDIACARD,
      rowId,
      FAVOURITED,
    ]);

export const useSetMediaCardFavouritedCellCallback: typeof useSetMediaCardFavouritedCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => boolean | MapBoolean,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: boolean | MapBoolean) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [MEDIACARD, rowId, FAVOURITED, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelMediaCardFavouritedCellCallback: typeof useDelMediaCardFavouritedCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [MEDIACARD, rowId, FAVOURITED, forceDel],
      [then, thenDeps]
    );

export const MediaCardFavouritedCellView: typeof MediaCardFavouritedCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"mediaCard", "favourited">): any =>
    wrap(
      "" + useMediaCardFavouritedCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      FAVOURITED
    );

export const useTextCardTable: typeof useTextCardTableDecl = (
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): TextCardTable => useHook(testStoreOrTestStoreId, useTableCore, [TEXTCARD]);

export const useTextCardTableCellIds: typeof useTextCardTableCellIdsDecl = (
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids => useHook(testStoreOrTestStoreId, useTableCellIdsCore, [TEXTCARD]);

export const useTextCardRowIds: typeof useTextCardRowIdsDecl = (
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids => useHook(testStoreOrTestStoreId, useRowIdsCore, [TEXTCARD]);

export const useTextCardSortedRowIds: typeof useTextCardSortedRowIdsDecl = (
  cellId?: TextCardCellId,
  descending?: boolean,
  offset?: number,
  limit?: number,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids =>
  useHook(testStoreOrTestStoreId, useSortedRowIdsCore, [
    TEXTCARD,
    cellId,
    descending,
    offset,
    limit,
  ]);

export const useTextCardRow: typeof useTextCardRowDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): TextCardRow =>
  useHook(testStoreOrTestStoreId, useRowCore, [TEXTCARD, rowId]);

export const useTextCardCellIds: typeof useTextCardCellIdsDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): TextCardCellId[] =>
  useHook(testStoreOrTestStoreId, useCellIdsCore, [TEXTCARD, rowId]);

export const useSetTextCardTableCallback: typeof useSetTextCardTableCallbackDecl =
  <Parameter,>(
    getTable: (parameter: Parameter, store: Store) => TextCardTableWhenSet,
    getTableDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, table: TextCardTableWhenSet) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetTableCallbackCore,
      [TEXTCARD, getTable, getTableDeps],
      [then, thenDeps]
    );

export const useDelTextCardTableCallback: typeof useDelTextCardTableCallbackDecl =
  (
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelTableCallbackCore,
      [TEXTCARD],
      [then, thenDeps]
    );

export const useSetTextCardRowCallback: typeof useSetTextCardRowCallbackDecl = <
  Parameter,
>(
  rowId: Id,
  getRow: (parameter: Parameter, store: Store) => TextCardRowWhenSet,
  getRowDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, row: TextCardRowWhenSet) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter> =>
  useHook(
    testStoreOrTestStoreId,
    useSetRowCallbackCore,
    [TEXTCARD, rowId, getRow, getRowDeps],
    [then, thenDeps]
  );

export const useAddTextCardRowCallback: typeof useAddTextCardRowCallbackDecl = <
  Parameter,
>(
  getRow: (parameter: Parameter, store: Store) => TextCardRowWhenSet,
  getRowDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (rowId: Id | undefined, store: Store, row: TextCardRowWhenSet) => void,
  thenDeps?: React.DependencyList,
  reuseRowIds?: boolean
): ParameterizedCallback<Parameter> =>
  useHook(
    testStoreOrTestStoreId,
    useAddRowCallbackCore,
    [TEXTCARD, getRow, getRowDeps],
    [then, thenDeps, reuseRowIds]
  );

export const useSetTextCardPartialRowCallback: typeof useSetTextCardPartialRowCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getPartialRow: (parameter: Parameter, store: Store) => TextCardRowWhenSet,
    getPartialRowDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, partialRow: TextCardRowWhenSet) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetPartialRowCallbackCore,
      [TEXTCARD, rowId, getPartialRow, getPartialRowDeps],
      [then, thenDeps]
    );

export const useDelTextCardRowCallback: typeof useDelTextCardRowCallbackDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback =>
  useHook(
    testStoreOrTestStoreId,
    useDelRowCallbackCore,
    [TEXTCARD, rowId],
    [then, thenDeps]
  );

export const TextCardRowView: typeof TextCardRowViewDecl = ({
  rowId,
  testStore,
  cellComponents,
  getCellComponentProps,
  separator,
  debugIds,
}: RowProps<"textCard">): any =>
  wrap(
    useTextCardCellIds(rowId, testStore).map((cellId) => {
      const Cell = (cellComponents?.[cellId] ??
        getDefaultCellComponent(TEXTCARD, cellId)) as React.ComponentType<
        CellProps<typeof TEXTCARD, typeof cellId>
      >;
      return (
        <Cell
          {...getProps(getCellComponentProps, cellId)}
          key={cellId}
          tableId={TEXTCARD}
          rowId={rowId}
          cellId={cellId}
          testStore={testStore}
          debugIds={debugIds}
        />
      );
    }),
    separator,
    debugIds,
    rowId
  );

export const TextCardSortedTableView: typeof TextCardSortedTableViewDecl = ({
  cellId,
  descending,
  offset,
  limit,
  ...props
}: SortedTableProps<"textCard">): any =>
  tableView(
    props,
    useTextCardSortedRowIds(cellId, descending, offset, limit, props.testStore),
    TEXTCARD,
    TextCardRowView
  );

export const TextCardTableView: typeof TextCardTableViewDecl = (
  props: TableProps<"textCard">
): any =>
  tableView(
    props,
    useTextCardRowIds(props.testStore),
    TEXTCARD,
    TextCardRowView
  );

export const useTextCardUserCell: typeof useTextCardUserCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [TEXTCARD, rowId, USER]);

export const useSetTextCardUserCellCallback: typeof useSetTextCardUserCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [TEXTCARD, rowId, USER, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelTextCardUserCellCallback: typeof useDelTextCardUserCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [TEXTCARD, rowId, USER, forceDel],
      [then, thenDeps]
    );

export const TextCardUserCellView: typeof TextCardUserCellViewDecl = ({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "user">): any =>
  wrap(
    "" + useTextCardUserCell(rowId, testStore) ?? "",
    undefined,
    debugIds,
    USER
  );

export const useTextCardSourceIconCell: typeof useTextCardSourceIconCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [TEXTCARD, rowId, SOURCEICON]);

export const useSetTextCardSourceIconCellCallback: typeof useSetTextCardSourceIconCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [TEXTCARD, rowId, SOURCEICON, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelTextCardSourceIconCellCallback: typeof useDelTextCardSourceIconCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [TEXTCARD, rowId, SOURCEICON, forceDel],
      [then, thenDeps]
    );

export const TextCardSourceIconCellView: typeof TextCardSourceIconCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"textCard", "sourceIcon">): any =>
    wrap(
      "" + useTextCardSourceIconCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      SOURCEICON
    );

export const useTextCardSourceNameCell: typeof useTextCardSourceNameCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [TEXTCARD, rowId, SOURCENAME]);

export const useSetTextCardSourceNameCellCallback: typeof useSetTextCardSourceNameCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [TEXTCARD, rowId, SOURCENAME, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelTextCardSourceNameCellCallback: typeof useDelTextCardSourceNameCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [TEXTCARD, rowId, SOURCENAME, forceDel],
      [then, thenDeps]
    );

export const TextCardSourceNameCellView: typeof TextCardSourceNameCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"textCard", "sourceName">): any =>
    wrap(
      "" + useTextCardSourceNameCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      SOURCENAME
    );

export const useTextCardCategoryCell: typeof useTextCardCategoryCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [TEXTCARD, rowId, CATEGORY]);

export const useSetTextCardCategoryCellCallback: typeof useSetTextCardCategoryCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [TEXTCARD, rowId, CATEGORY, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelTextCardCategoryCellCallback: typeof useDelTextCardCategoryCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [TEXTCARD, rowId, CATEGORY, forceDel],
      [then, thenDeps]
    );

export const TextCardCategoryCellView: typeof TextCardCategoryCellViewDecl = ({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "category">): any =>
  wrap(
    "" + useTextCardCategoryCell(rowId, testStore) ?? "",
    undefined,
    debugIds,
    CATEGORY
  );

export const useTextCardHeadingCell: typeof useTextCardHeadingCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [TEXTCARD, rowId, HEADING]);

export const useSetTextCardHeadingCellCallback: typeof useSetTextCardHeadingCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [TEXTCARD, rowId, HEADING, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelTextCardHeadingCellCallback: typeof useDelTextCardHeadingCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [TEXTCARD, rowId, HEADING, forceDel],
      [then, thenDeps]
    );

export const TextCardHeadingCellView: typeof TextCardHeadingCellViewDecl = ({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "heading">): any =>
  wrap(
    "" + useTextCardHeadingCell(rowId, testStore) ?? "",
    undefined,
    debugIds,
    HEADING
  );

export const useTextCardSubheadingCell: typeof useTextCardSubheadingCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [TEXTCARD, rowId, SUBHEADING]);

export const useSetTextCardSubheadingCellCallback: typeof useSetTextCardSubheadingCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [TEXTCARD, rowId, SUBHEADING, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelTextCardSubheadingCellCallback: typeof useDelTextCardSubheadingCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [TEXTCARD, rowId, SUBHEADING, forceDel],
      [then, thenDeps]
    );

export const TextCardSubheadingCellView: typeof TextCardSubheadingCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"textCard", "subheading">): any =>
    wrap(
      "" + useTextCardSubheadingCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      SUBHEADING
    );

export const useTextCardCardIdCell: typeof useTextCardCardIdCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined =>
  useHook(testStoreOrTestStoreId, useCellCore, [TEXTCARD, rowId, CARDID]);

export const useSetTextCardCardIdCellCallback: typeof useSetTextCardCardIdCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => string | MapString,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: string | MapString) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [TEXTCARD, rowId, CARDID, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelTextCardCardIdCellCallback: typeof useDelTextCardCardIdCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [TEXTCARD, rowId, CARDID, forceDel],
      [then, thenDeps]
    );

export const TextCardCardIdCellView: typeof TextCardCardIdCellViewDecl = ({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "cardId">): any =>
  wrap(
    "" + useTextCardCardIdCell(rowId, testStore) ?? "",
    undefined,
    debugIds,
    CARDID
  );

export const useTextCardBookmarkedCell: typeof useTextCardBookmarkedCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): boolean =>
  useHook(testStoreOrTestStoreId, useCellCore, [TEXTCARD, rowId, BOOKMARKED]);

export const useSetTextCardBookmarkedCellCallback: typeof useSetTextCardBookmarkedCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => boolean | MapBoolean,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: boolean | MapBoolean) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [TEXTCARD, rowId, BOOKMARKED, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelTextCardBookmarkedCellCallback: typeof useDelTextCardBookmarkedCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [TEXTCARD, rowId, BOOKMARKED, forceDel],
      [then, thenDeps]
    );

export const TextCardBookmarkedCellView: typeof TextCardBookmarkedCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"textCard", "bookmarked">): any =>
    wrap(
      "" + useTextCardBookmarkedCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      BOOKMARKED
    );

export const useTextCardFavouritedCell: typeof useTextCardFavouritedCellDecl = (
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): boolean =>
  useHook(testStoreOrTestStoreId, useCellCore, [TEXTCARD, rowId, FAVOURITED]);

export const useSetTextCardFavouritedCellCallback: typeof useSetTextCardFavouritedCellCallbackDecl =
  <Parameter,>(
    rowId: Id,
    getCell: (parameter: Parameter, store: Store) => boolean | MapBoolean,
    getCellDeps?: React.DependencyList,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store, cell: boolean | MapBoolean) => void,
    thenDeps?: React.DependencyList
  ): ParameterizedCallback<Parameter> =>
    useHook(
      testStoreOrTestStoreId,
      useSetCellCallbackCore,
      [TEXTCARD, rowId, FAVOURITED, getCell, getCellDeps],
      [then, thenDeps]
    );

export const useDelTextCardFavouritedCellCallback: typeof useDelTextCardFavouritedCellCallbackDecl =
  (
    rowId: Id,
    forceDel?: boolean,
    testStoreOrTestStoreId?: TestStoreOrTestStoreId,
    then?: (store: Store) => void,
    thenDeps?: React.DependencyList
  ): Callback =>
    useHook(
      testStoreOrTestStoreId,
      useDelCellCallbackCore,
      [TEXTCARD, rowId, FAVOURITED, forceDel],
      [then, thenDeps]
    );

export const TextCardFavouritedCellView: typeof TextCardFavouritedCellViewDecl =
  ({ rowId, testStore, debugIds }: CellProps<"textCard", "favourited">): any =>
    wrap(
      "" + useTextCardFavouritedCell(rowId, testStore) ?? "",
      undefined,
      debugIds,
      FAVOURITED
    );

export const useTablesListener: typeof useTablesListenerDecl = (
  listener: TablesListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void =>
  useHook(testStoreOrTestStoreId, useTablesListenerCore, [
    listener,
    listenerDeps,
    mutator,
  ]);

export const useTableIdsListener: typeof useTableIdsListenerDecl = (
  listener: TableIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void =>
  useHook(testStoreOrTestStoreId, useTableIdsListenerCore, [
    listener,
    listenerDeps,
    mutator,
  ]);

export const useTableListener: typeof useTableListenerDecl = (
  tableId: TableId | null,
  listener: TableListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void =>
  useHook(testStoreOrTestStoreId, useTableListenerCore, [
    tableId,
    listener,
    listenerDeps,
    mutator,
  ]);

export const useTableCellIdsListener: typeof useTableCellIdsListenerDecl = (
  tableId: TableId | null,
  listener: TableCellIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void =>
  useHook(testStoreOrTestStoreId, useTableCellIdsListenerCore, [
    tableId,
    listener,
    listenerDeps,
    mutator,
  ]);

export const useRowIdsListener: typeof useRowIdsListenerDecl = (
  tableId: TableId | null,
  listener: RowIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void =>
  useHook(testStoreOrTestStoreId, useRowIdsListenerCore, [
    tableId,
    listener,
    listenerDeps,
    mutator,
  ]);

export const useSortedRowIdsListener: typeof useSortedRowIdsListenerDecl = (
  tableId: TableId | null,
  cellId: MediaCardCellId | TextCardCellId | undefined,
  descending: boolean,
  offset: number,
  limit: number | undefined,
  listener: SortedRowIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void =>
  useHook(testStoreOrTestStoreId, useSortedRowIdsListenerCore, [
    tableId,
    cellId,
    descending,
    offset,
    limit,
    listener,
    listenerDeps,
    mutator,
  ]);

export const useRowListener: typeof useRowListenerDecl = (
  tableId: TableId | null,
  rowId: IdOrNull,
  listener: RowListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void =>
  useHook(testStoreOrTestStoreId, useRowListenerCore, [
    tableId,
    rowId,
    listener,
    listenerDeps,
    mutator,
  ]);

export const useCellIdsListener: typeof useCellIdsListenerDecl = (
  tableId: TableId | null,
  rowId: IdOrNull,
  listener: CellIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void =>
  useHook(testStoreOrTestStoreId, useCellIdsListenerCore, [
    tableId,
    rowId,
    listener,
    listenerDeps,
    mutator,
  ]);

export const useCellListener: typeof useCellListenerDecl = (
  tableId: TableId | null,
  rowId: IdOrNull,
  cellId: MediaCardCellId | TextCardCellId | null,
  listener: CellListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void =>
  useHook(testStoreOrTestStoreId, useCellListenerCore, [
    tableId,
    rowId,
    cellId,
    listener,
    listenerDeps,
    mutator,
  ]);

export const Provider: typeof ProviderDecl = ({
  testStore,
  testStoreById,
  children,
}: ProviderProps & { children: React.ReactNode }): any => {
  const contextValue = useContext(Context);
  return (
    <Context.Provider
      value={useMemo(
        () => [
          testStore ?? contextValue[0],
          { ...contextValue[1], ...testStoreById },
        ],
        [testStore, testStoreById, contextValue]
      )}
    >
      {children}
    </Context.Provider>
  );
};

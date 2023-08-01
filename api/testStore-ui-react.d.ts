import {
  Callback,
  Id,
  IdOrNull,
  Ids,
  ParameterizedCallback,
  Store,
} from "tinybase";
import {
  CellId,
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
import { ComponentReturnType, ExtraProps } from "tinybase/lib/ui-react";
import { ComponentType, ReactElement } from "react";

/**
 * Used when you need to refer to a TestStore in a React hook or component.
 */
export type TestStoreOrTestStoreId = TestStore | Id;

/**
 * Used with the Provider component, so that a TestStore can be passed into the
 * context of an application.
 */
export type ProviderProps = {
  readonly testStore?: TestStore;
  readonly testStoreById?: { [testStoreId: Id]: TestStore };
};

/**
 * The props passed to a component that renders a Cell.
 */
export type CellProps<TId extends TableId, CId extends CellId<TId>> = {
  readonly tableId?: TId;
  readonly rowId: Id;
  readonly cellId?: CId;
  readonly testStore?: TestStore;
  readonly debugIds?: boolean;
};

/**
 * The props passed to a component that renders a Row.
 */
export type RowProps<TId extends TableId> = {
  readonly tableId?: TId;
  readonly rowId: Id;
  readonly testStore?: TestStore;
  readonly cellComponents?: {
    readonly [CId in CellId<TId>]?: ComponentType<CellProps<TId, CId>>;
  };
  readonly getCellComponentProps?: (cellId: CellId<TId>) => ExtraProps;
  readonly separator?: ReactElement | string;
  readonly debugIds?: boolean;
};

/**
 * The props passed to a component that renders a Table.
 */
export type TableProps<TId extends TableId> = {
  readonly tableId?: TId;
  readonly testStore?: TestStore;
  readonly rowComponent?: ComponentType<RowProps<TId>>;
  readonly getRowComponentProps?: (rowId: Id) => ExtraProps;
  readonly separator?: ReactElement | string;
  readonly debugIds?: boolean;
};

/**
 * The props passed to a component that renders a sorted Table.
 */
export type SortedTableProps<TId extends TableId> = {
  readonly tableId?: TId;
  readonly cellId?: CellId<TId>;
  readonly descending?: boolean;
  readonly offset?: number;
  readonly limit?: number;
  readonly testStore?: TestStore;
  readonly rowComponent?: ComponentType<RowProps<TId>>;
  readonly getRowComponentProps?: (rowId: Id) => ExtraProps;
  readonly separator?: ReactElement | string;
  readonly debugIds?: boolean;
};

/**
 * The props passed to a component that renders the tabular content of the
 * Store.
 */
export type TablesProps = {
  readonly testStore?: TestStore;
  readonly tableComponents?: {
    readonly [TId in TableId]?: ComponentType<TableProps<TId>>;
  };
  readonly getTableComponentProps?: (tableId: TableId) => ExtraProps;
  readonly separator?: ReactElement | string;
  readonly debugIds?: boolean;
};

/**
 * Create a TestStore within a React application with convenient memoization.
 */
export function useCreateTestStore(
  create: () => TestStore,
  createDeps?: React.DependencyList
): TestStore;

/**
 * Get a reference to a TestStore from within a Provider component context.
 */
export function useTestStore(id?: Id): TestStore | undefined;

/**
 * Gets the tabular content of the Store, and registers a listener so that any
 * changes to that result will cause a re-render.
 */
export function useTables(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Tables;

/**
 * Gets the Ids of the Tables in the Store, and registers a listener so that any
 * changes to that result will cause a re-render.
 */
export function useTableIds(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): TableId[];

/**
 * Gets a callback that can set the tabular content of the Store, based on a
 * parameter.
 */
export function useSetTablesCallback<Parameter>(
  getTables: (parameter: Parameter, store: Store) => TablesWhenSet,
  getTablesDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, tables: TablesWhenSet) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the tabular content of the Store.
 */
export function useDelTablesCallback(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the tabular content of the Store, and registers a listener so that
 * any changes to that result will cause a re-render.
 */
export function TablesView({
  testStore,
  tableComponents,
  getTableComponentProps,
  separator,
  debugIds,
}: TablesProps): ComponentReturnType;

/**
 * Gets the content of the 'mediaCard' Table, and registers a listener so that
 * any changes to that result will cause a re-render.
 */
export function useMediaCardTable(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): MediaCardTable;

/**
 * Gets the Ids of the Cells in the whole of the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardTableCellIds(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids;

/**
 * Gets the Ids of the Rows in the 'mediaCard' Table, and registers a listener
 * so that any changes to that result will cause a re-render.
 */
export function useMediaCardRowIds(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids;

/**
 * Gets sorted, paginated Ids of the Rows in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardSortedRowIds(
  cellId?: MediaCardCellId,
  descending?: boolean,
  offset?: number,
  limit?: number,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids;

/**
 * Gets the content of the specified Row in the 'mediaCard' Table, and registers
 * a listener so that any changes to that result will cause a re-render.
 */
export function useMediaCardRow(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): MediaCardRow;

/**
 * Gets the Ids of the Cells in the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardCellIds(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): MediaCardCellId[];

/**
 * Gets a callback that can set the content of the 'mediaCard' Table, based on a
 * parameter.
 */
export function useSetMediaCardTableCallback<Parameter>(
  getTable: (parameter: Parameter, store: Store) => MediaCardTableWhenSet,
  getTableDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, table: MediaCardTableWhenSet) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the content of the 'mediaCard' Table.
 */
export function useDelMediaCardTableCallback(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Gets a callback that can set the content of the specified Row in the
 * 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardRowCallback<Parameter>(
  rowId: Id,
  getRow: (parameter: Parameter, store: Store) => MediaCardRowWhenSet,
  getRowDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, row: MediaCardRowWhenSet) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can add the content of the specified Row in the
 * 'mediaCard' Table, based on a parameter.
 */
export function useAddMediaCardRowCallback<Parameter>(
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
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can set part of the content of the specified Row in the
 * 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardPartialRowCallback<Parameter>(
  rowId: Id,
  getPartialRow: (parameter: Parameter, store: Store) => MediaCardRowWhenSet,
  getPartialRowDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, partialRow: MediaCardRowWhenSet) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the content of the specified Row in the
 * 'mediaCard' Table.
 */
export function useDelMediaCardRowCallback(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the content of the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardRowView({
  rowId,
  testStore,
  cellComponents,
  getCellComponentProps,
  separator,
  debugIds,
}: RowProps<"mediaCard">): ComponentReturnType;

/**
 * Renders the content of the 'mediaCard' Table, sorted, and registers a
 * listener so that any changes to that result will cause a re-render.
 */
export function MediaCardSortedTableView({
  cellId,
  descending,
  offset,
  limit,
  ...props
}: SortedTableProps<"mediaCard">): ComponentReturnType;

/**
 * Renders the content of the 'mediaCard' Table, and registers a listener so
 * that any changes to that result will cause a re-render.
 */
export function MediaCardTableView(
  props: TableProps<"mediaCard">
): ComponentReturnType;

/**
 * Gets the 'user' Cell for the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardUserCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'user' Cell for the specified Row in the
 * 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardUserCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'user' Cell for the specified Row in the
 * 'mediaCard' Table.
 */
export function useDelMediaCardUserCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'user' Cell for the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardUserCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "user">): ComponentReturnType;

/**
 * Gets the 'sourceIcon' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardSourceIconCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'sourceIcon' Cell for the specified Row in
 * the 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardSourceIconCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'sourceIcon' Cell for the specified Row
 * in the 'mediaCard' Table.
 */
export function useDelMediaCardSourceIconCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'sourceIcon' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardSourceIconCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "sourceIcon">): ComponentReturnType;

/**
 * Gets the 'sourceName' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardSourceNameCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'sourceName' Cell for the specified Row in
 * the 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardSourceNameCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'sourceName' Cell for the specified Row
 * in the 'mediaCard' Table.
 */
export function useDelMediaCardSourceNameCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'sourceName' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardSourceNameCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "sourceName">): ComponentReturnType;

/**
 * Gets the 'category' Cell for the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardCategoryCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'category' Cell for the specified Row in the
 * 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardCategoryCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'category' Cell for the specified Row in
 * the 'mediaCard' Table.
 */
export function useDelMediaCardCategoryCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'category' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardCategoryCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "category">): ComponentReturnType;

/**
 * Gets the 'imgUri' Cell for the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardImgUriCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'imgUri' Cell for the specified Row in the
 * 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardImgUriCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'imgUri' Cell for the specified Row in
 * the 'mediaCard' Table.
 */
export function useDelMediaCardImgUriCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'imgUri' Cell for the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardImgUriCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "imgUri">): ComponentReturnType;

/**
 * Gets the 'avatarImg' Cell for the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardAvatarImgCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'avatarImg' Cell for the specified Row in
 * the 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardAvatarImgCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'avatarImg' Cell for the specified Row in
 * the 'mediaCard' Table.
 */
export function useDelMediaCardAvatarImgCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'avatarImg' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardAvatarImgCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "avatarImg">): ComponentReturnType;

/**
 * Gets the 'avatarText' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardAvatarTextCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'avatarText' Cell for the specified Row in
 * the 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardAvatarTextCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'avatarText' Cell for the specified Row
 * in the 'mediaCard' Table.
 */
export function useDelMediaCardAvatarTextCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'avatarText' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardAvatarTextCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "avatarText">): ComponentReturnType;

/**
 * Gets the 'handle' Cell for the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardHandleCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'handle' Cell for the specified Row in the
 * 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardHandleCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'handle' Cell for the specified Row in
 * the 'mediaCard' Table.
 */
export function useDelMediaCardHandleCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'handle' Cell for the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardHandleCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "handle">): ComponentReturnType;

/**
 * Gets the 'cardId' Cell for the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardCardIdCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'cardId' Cell for the specified Row in the
 * 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardCardIdCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'cardId' Cell for the specified Row in
 * the 'mediaCard' Table.
 */
export function useDelMediaCardCardIdCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'cardId' Cell for the specified Row in the 'mediaCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardCardIdCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "cardId">): ComponentReturnType;

/**
 * Gets the 'bookmarked' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardBookmarkedCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): boolean;

/**
 * Gets a callback that can set the 'bookmarked' Cell for the specified Row in
 * the 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardBookmarkedCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => boolean | MapBoolean,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: boolean | MapBoolean) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'bookmarked' Cell for the specified Row
 * in the 'mediaCard' Table.
 */
export function useDelMediaCardBookmarkedCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'bookmarked' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardBookmarkedCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "bookmarked">): ComponentReturnType;

/**
 * Gets the 'favourited' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useMediaCardFavouritedCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): boolean;

/**
 * Gets a callback that can set the 'favourited' Cell for the specified Row in
 * the 'mediaCard' Table, based on a parameter.
 */
export function useSetMediaCardFavouritedCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => boolean | MapBoolean,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: boolean | MapBoolean) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'favourited' Cell for the specified Row
 * in the 'mediaCard' Table.
 */
export function useDelMediaCardFavouritedCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'favourited' Cell for the specified Row in the 'mediaCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function MediaCardFavouritedCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"mediaCard", "favourited">): ComponentReturnType;

/**
 * Gets the content of the 'textCard' Table, and registers a listener so that
 * any changes to that result will cause a re-render.
 */
export function useTextCardTable(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): TextCardTable;

/**
 * Gets the Ids of the Cells in the whole of the 'textCard' Table, and registers
 * a listener so that any changes to that result will cause a re-render.
 */
export function useTextCardTableCellIds(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids;

/**
 * Gets the Ids of the Rows in the 'textCard' Table, and registers a listener so
 * that any changes to that result will cause a re-render.
 */
export function useTextCardRowIds(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids;

/**
 * Gets sorted, paginated Ids of the Rows in the 'textCard' Table, and registers
 * a listener so that any changes to that result will cause a re-render.
 */
export function useTextCardSortedRowIds(
  cellId?: TextCardCellId,
  descending?: boolean,
  offset?: number,
  limit?: number,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): Ids;

/**
 * Gets the content of the specified Row in the 'textCard' Table, and registers
 * a listener so that any changes to that result will cause a re-render.
 */
export function useTextCardRow(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): TextCardRow;

/**
 * Gets the Ids of the Cells in the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useTextCardCellIds(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): TextCardCellId[];

/**
 * Gets a callback that can set the content of the 'textCard' Table, based on a
 * parameter.
 */
export function useSetTextCardTableCallback<Parameter>(
  getTable: (parameter: Parameter, store: Store) => TextCardTableWhenSet,
  getTableDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, table: TextCardTableWhenSet) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the content of the 'textCard' Table.
 */
export function useDelTextCardTableCallback(
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Gets a callback that can set the content of the specified Row in the
 * 'textCard' Table, based on a parameter.
 */
export function useSetTextCardRowCallback<Parameter>(
  rowId: Id,
  getRow: (parameter: Parameter, store: Store) => TextCardRowWhenSet,
  getRowDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, row: TextCardRowWhenSet) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can add the content of the specified Row in the
 * 'textCard' Table, based on a parameter.
 */
export function useAddTextCardRowCallback<Parameter>(
  getRow: (parameter: Parameter, store: Store) => TextCardRowWhenSet,
  getRowDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (rowId: Id | undefined, store: Store, row: TextCardRowWhenSet) => void,
  thenDeps?: React.DependencyList,
  reuseRowIds?: boolean
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can set part of the content of the specified Row in the
 * 'textCard' Table, based on a parameter.
 */
export function useSetTextCardPartialRowCallback<Parameter>(
  rowId: Id,
  getPartialRow: (parameter: Parameter, store: Store) => TextCardRowWhenSet,
  getPartialRowDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, partialRow: TextCardRowWhenSet) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the content of the specified Row in the
 * 'textCard' Table.
 */
export function useDelTextCardRowCallback(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the content of the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function TextCardRowView({
  rowId,
  testStore,
  cellComponents,
  getCellComponentProps,
  separator,
  debugIds,
}: RowProps<"textCard">): ComponentReturnType;

/**
 * Renders the content of the 'textCard' Table, sorted, and registers a listener
 * so that any changes to that result will cause a re-render.
 */
export function TextCardSortedTableView({
  cellId,
  descending,
  offset,
  limit,
  ...props
}: SortedTableProps<"textCard">): ComponentReturnType;

/**
 * Renders the content of the 'textCard' Table, and registers a listener so that
 * any changes to that result will cause a re-render.
 */
export function TextCardTableView(
  props: TableProps<"textCard">
): ComponentReturnType;

/**
 * Gets the 'user' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useTextCardUserCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'user' Cell for the specified Row in the
 * 'textCard' Table, based on a parameter.
 */
export function useSetTextCardUserCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'user' Cell for the specified Row in the
 * 'textCard' Table.
 */
export function useDelTextCardUserCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'user' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function TextCardUserCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "user">): ComponentReturnType;

/**
 * Gets the 'sourceIcon' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useTextCardSourceIconCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'sourceIcon' Cell for the specified Row in
 * the 'textCard' Table, based on a parameter.
 */
export function useSetTextCardSourceIconCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'sourceIcon' Cell for the specified Row
 * in the 'textCard' Table.
 */
export function useDelTextCardSourceIconCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'sourceIcon' Cell for the specified Row in the 'textCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function TextCardSourceIconCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "sourceIcon">): ComponentReturnType;

/**
 * Gets the 'sourceName' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useTextCardSourceNameCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'sourceName' Cell for the specified Row in
 * the 'textCard' Table, based on a parameter.
 */
export function useSetTextCardSourceNameCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'sourceName' Cell for the specified Row
 * in the 'textCard' Table.
 */
export function useDelTextCardSourceNameCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'sourceName' Cell for the specified Row in the 'textCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function TextCardSourceNameCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "sourceName">): ComponentReturnType;

/**
 * Gets the 'category' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useTextCardCategoryCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'category' Cell for the specified Row in the
 * 'textCard' Table, based on a parameter.
 */
export function useSetTextCardCategoryCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'category' Cell for the specified Row in
 * the 'textCard' Table.
 */
export function useDelTextCardCategoryCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'category' Cell for the specified Row in the 'textCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function TextCardCategoryCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "category">): ComponentReturnType;

/**
 * Gets the 'heading' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useTextCardHeadingCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'heading' Cell for the specified Row in the
 * 'textCard' Table, based on a parameter.
 */
export function useSetTextCardHeadingCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'heading' Cell for the specified Row in
 * the 'textCard' Table.
 */
export function useDelTextCardHeadingCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'heading' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function TextCardHeadingCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "heading">): ComponentReturnType;

/**
 * Gets the 'subheading' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useTextCardSubheadingCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'subheading' Cell for the specified Row in
 * the 'textCard' Table, based on a parameter.
 */
export function useSetTextCardSubheadingCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'subheading' Cell for the specified Row
 * in the 'textCard' Table.
 */
export function useDelTextCardSubheadingCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'subheading' Cell for the specified Row in the 'textCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function TextCardSubheadingCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "subheading">): ComponentReturnType;

/**
 * Gets the 'cardId' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useTextCardCardIdCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): string | undefined;

/**
 * Gets a callback that can set the 'cardId' Cell for the specified Row in the
 * 'textCard' Table, based on a parameter.
 */
export function useSetTextCardCardIdCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => string | MapString,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: string | MapString) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'cardId' Cell for the specified Row in
 * the 'textCard' Table.
 */
export function useDelTextCardCardIdCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'cardId' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function TextCardCardIdCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "cardId">): ComponentReturnType;

/**
 * Gets the 'bookmarked' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useTextCardBookmarkedCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): boolean;

/**
 * Gets a callback that can set the 'bookmarked' Cell for the specified Row in
 * the 'textCard' Table, based on a parameter.
 */
export function useSetTextCardBookmarkedCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => boolean | MapBoolean,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: boolean | MapBoolean) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'bookmarked' Cell for the specified Row
 * in the 'textCard' Table.
 */
export function useDelTextCardBookmarkedCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'bookmarked' Cell for the specified Row in the 'textCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function TextCardBookmarkedCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "bookmarked">): ComponentReturnType;

/**
 * Gets the 'favourited' Cell for the specified Row in the 'textCard' Table, and
 * registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function useTextCardFavouritedCell(
  rowId: Id,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): boolean;

/**
 * Gets a callback that can set the 'favourited' Cell for the specified Row in
 * the 'textCard' Table, based on a parameter.
 */
export function useSetTextCardFavouritedCellCallback<Parameter>(
  rowId: Id,
  getCell: (parameter: Parameter, store: Store) => boolean | MapBoolean,
  getCellDeps?: React.DependencyList,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store, cell: boolean | MapBoolean) => void,
  thenDeps?: React.DependencyList
): ParameterizedCallback<Parameter>;

/**
 * Gets a callback that can delete the 'favourited' Cell for the specified Row
 * in the 'textCard' Table.
 */
export function useDelTextCardFavouritedCellCallback(
  rowId: Id,
  forceDel?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId,
  then?: (store: Store) => void,
  thenDeps?: React.DependencyList
): Callback;

/**
 * Renders the 'favourited' Cell for the specified Row in the 'textCard' Table,
 * and registers a listener so that any changes to that result will cause a
 * re-render.
 */
export function TextCardFavouritedCellView({
  rowId,
  testStore,
  debugIds,
}: CellProps<"textCard", "favourited">): ComponentReturnType;

/**
 * Registers a listener that will be called whenever the tabular content of the
 * Store changes.
 */
export function useTablesListener(
  listener: TablesListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void;

/**
 * Registers a listener that will be called whenever the Table Ids in the Store
 * change.
 */
export function useTableIdsListener(
  listener: TableIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void;

/**
 * Registers a listener that will be called whenever a Table in the Store
 * changes.
 */
export function useTableListener(
  tableId: TableId | null,
  listener: TableListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void;

/**
 * Registers a listener that will be called whenever the Cell Ids anywhere in a
 * Table change.
 */
export function useTableCellIdsListener(
  tableId: TableId | null,
  listener: TableCellIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void;

/**
 * Registers a listener that will be called whenever the Row Ids in a Table
 * change.
 */
export function useRowIdsListener(
  tableId: TableId | null,
  listener: RowIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void;

/**
 * Registers a listener that will be called whenever the sorted Row Ids in a
 * Table change.
 */
export function useSortedRowIdsListener(
  tableId: TableId | null,
  cellId: MediaCardCellId | TextCardCellId | undefined,
  descending: boolean,
  offset: number,
  limit: number | undefined,
  listener: SortedRowIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void;

/**
 * Registers a listener that will be called whenever a Row in a Table changes.
 */
export function useRowListener(
  tableId: TableId | null,
  rowId: IdOrNull,
  listener: RowListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void;

/**
 * Registers a listener that will be called whenever the Cell Ids in a Row
 * change.
 */
export function useCellIdsListener(
  tableId: TableId | null,
  rowId: IdOrNull,
  listener: CellIdsListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void;

/**
 * Registers a listener that will be called whenever a Cell in a Row changes.
 */
export function useCellListener(
  tableId: TableId | null,
  rowId: IdOrNull,
  cellId: MediaCardCellId | TextCardCellId | null,
  listener: CellListener,
  listenerDeps?: React.DependencyList,
  mutator?: boolean,
  testStoreOrTestStoreId?: TestStoreOrTestStoreId
): void;

/**
 * Wraps part of an application in a context that provides default objects to be
 * used by hooks and components within.
 */
export function Provider({
  testStore,
  testStoreById,
  children,
}: ProviderProps & { children: React.ReactNode }): ComponentReturnType;

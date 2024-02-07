import { TablePagination, TableSortLabel } from '@mui/material'
import React, { Fragment, useEffect, useState } from "react";
import UuiTableContainer from "../Table/TableContainer";
import UuiTableHead from "../Table/TableHead";
import UuiTableRow from "../Table/TableRow";
import UuiTableBody from "../Table/TableBody";
import UuiTableCell from "../Table/TableCell";
import UuiTypography from '../typography';
import UuiTable from '../Table/Table';


export type ColumnRendererProps<U> = {
    value: U,
    row: any,
}

//Typing
export interface ColumnDefinition<T> {
    id: keyof T
    title?: string
    Component?: React.FunctionComponent<ColumnRendererProps<any>>,
    sortable?: boolean
}

export interface Schema<T> {
    title?: string
    columns: ColumnDefinition<T>[]
}

export interface SortInfo<T> {
    id?: keyof T,
    direction: 'asc' | 'desc' | undefined
}

export interface PageInfo {
    total?: number
    rows?: number
    page?: number
}

export interface TableUpdateRequest<T> {
    sort?: keyof T
    direction?: 'asc' | 'desc' | undefined
    page?: number
    rows?: number
    timestamp?: number
}

export interface ActionProps<T> {
    entry: T,
    refresh(): void
}

function nextSortSchema<T>(sortInfo: SortInfo<T>, schema: ColumnDefinition<T>): SortInfo<T> {
    if (schema.id !== sortInfo.id) {
        return {
            id: schema.id,
            direction: "asc"
        }
    }
    switch (sortInfo.direction) {
        case "asc":
            return { ...sortInfo, direction: 'desc' }
        case "desc":
            return { ...sortInfo, direction: 'asc' }
        default:
            return { ...sortInfo, direction: 'desc' }
    }
}


interface SortIconProps<T> {
    schema: ColumnDefinition<T>,
    sortSchema: SortInfo<T>,
}

export function SortIcon<T>({ sortSchema, schema }: SortIconProps<T>) {
    if (sortSchema.id !== schema.id) return null
    switch (sortSchema.id) {
        case "asc":
            return <Fragment>sorted ascending</Fragment>
        case "desc":
            return <Fragment>sorted descending</Fragment>
        default:
            return null
    }
}

interface TableHeaderCellProps<T> {
    schema: ColumnDefinition<T>,
    sortInfo: SortInfo<T>
    updateSortSchema(sortSchema: SortInfo<T>): void
}

export function TableHeaderCell<T>({ schema, sortInfo, updateSortSchema }: TableHeaderCellProps<T>) {
    return <UuiTableCell className='orgHierachy-lvlConfigList__tableCol1'>
        <TableSortLabel
            active={sortInfo.id === schema.id}
            direction={sortInfo.id === schema.id ? sortInfo.direction : undefined}
            onClick={() => {
                if (schema.sortable === false) return
                updateSortSchema(nextSortSchema(sortInfo, schema));
            }}
        >
            <UuiTypography variant='body1' className='Uui-txt-bold'>
                {schema.title}
            </UuiTypography>
            {(schema.sortable !== false) && <SortIcon schema={schema} sortSchema={sortInfo} />}
        </TableSortLabel>
    </UuiTableCell>;
}

interface DataRowProps<T> {
    row: T
    schema: Schema<T>
    Actions?: React.FunctionComponent<ActionProps<T>>
    refresh(): void
}

export function DataRow<T>({ row, schema, Actions, refresh }: DataRowProps<T>) {
    return <UuiTableRow className='userManagement-staffMngTable__tablerow Uui-table__row'>
        {schema.columns.map(column => {
            const Renderer = column.Component ?? (({ value }) => <Fragment>{value}</Fragment>)
            return <UuiTableCell><Renderer value={row[column.id]} row={row}/></UuiTableCell>;
        })}
        {!!Actions && <UuiTableCell style={{ width: 220, paddingRight:12 }}>
            <div className='orgHierachy-lvlConfigList__actionBtnHolder'>
                <Actions entry={row} refresh={refresh}/>
            </div>
        </UuiTableCell>}
    </UuiTableRow>;
}

interface UuiTableProps<T> {
    schema: Schema<T>
    sortInfo?: SortInfo<T>
    pageInfo?: PageInfo
    data: Array<T>
    update(e: TableUpdateRequest<T>): void
    Actions?: React.FunctionComponent<ActionProps<T>>
}

export function UuiBacisTable<T>({ schema, sortInfo, pageInfo, update, data, Actions }: UuiTableProps<T>) {

    let [request, setRequest] = useState<TableUpdateRequest<T>>({
        sort: sortInfo?.id ?? schema.columns[0]?.id,
        direction: sortInfo?.direction ?? 'asc',
        rows: pageInfo?.rows,
        page: pageInfo?.page
    });

    useEffect(() => {
        if (request) {
            update(request)
        }
    }, [request])

    return <Fragment>
        <UuiTableContainer className='tabelcontainer'>
            <UuiTable aria-label='simple table'>
            <UuiTableHead className='tabelcontainer__tableHead' >
            <UuiTableRow className='tabelcontainer__tableHead--tableRow'>
              <UuiTableCell  className='tableHeading'>Prospect Name</UuiTableCell>
              <UuiTableCell  className='tableHeading' >Class</UuiTableCell>
              <UuiTableCell className='tableHeading expected_value' >Expected GWP</UuiTableCell>
              <UuiTableCell  className='tableHeading' >Date</UuiTableCell>
              <UuiTableCell  className=' tableHeading statusHead ' >Status</UuiTableCell>
            </UuiTableRow>
          </UuiTableHead>
                <UuiTableBody className='tabelcontainer__tablebody'>
                    {data.map((row) => (
                        <DataRow row={row} schema={schema} Actions={Actions} refresh={() => { update({ ...request, timestamp: Date.now() }) }} />
                    ))}
                </UuiTableBody>
            </UuiTable>
        </UuiTableContainer>
        {pageInfo &&
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={pageInfo.total ?? 0}
                rowsPerPage={request.rows ?? 10}
                page={request.page ?? 0}
                onPageChange={(_, page) => setRequest(s => ({...s, page}))}
                onRowsPerPageChange={(e: any) => setRequest(s => ({...s, rows: e.target.value, page: 0}))}
            />
        }
    </Fragment>;
}

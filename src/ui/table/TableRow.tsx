import { formatString } from '../../features/formatStrings'

export const TableRow = ( { rowTitle, rowAmount } : { rowTitle: string, rowAmount: number } ) => {
    return(
        <div className='grid grid-cols-3 border-b py-2 last:border-0'>
            <p>{rowTitle}:</p>
            <p>{formatString({ number: rowAmount })}</p>
        </div>
    )
}
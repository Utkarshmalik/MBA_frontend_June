
import { Cell, Column, HeaderCell, Table } from "rsuite-table";


const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="70" />
  </Cell>
);



const MoviesTable = ({moviesList})=>{

    return  <div className="p-4">
         <h3 className="m-3">  Movies </h3>

         <Table bordered={true} autoHeight={true} rowHeight={100} data={moviesList}>

                <Column flexGrow={1}  sortable fixed resizable>
                <HeaderCell>ID</HeaderCell>
                <Cell dataKey="_id" />
                </Column>

                 <Column  flexGrow={1} height={200} resizable>
                <HeaderCell>Poster</HeaderCell>
                <ImageCell dataKey="posterUrl" />
                </Column>

                <Column flexGrow={1}  sortable resizable>
                <HeaderCell>Director</HeaderCell>
                <Cell dataKey="director" />
                </Column>

                <Column flexGrow={1}   sortable resizable>
                <HeaderCell>Release Date</HeaderCell>
                    <Cell dataKey="releaseDate" />
                </Column>

                <Column flexGrow={1}   sortable resizable>
                <HeaderCell>Release Status</HeaderCell>
                    <Cell dataKey="releaseStatus" />
                </Column>

  </Table>
     </div>

}


export default MoviesTable;
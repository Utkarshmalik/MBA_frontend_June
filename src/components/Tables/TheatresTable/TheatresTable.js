
import { Cell, Column, HeaderCell, Table, rowData, dataKey } from "rsuite-table";
import '../TheatresTable/TheatreTable.css';

const TheatresTable = ({theatresList})=>{


    return   <div className="p-4">
         <h3 className="m-3">  Theatres </h3>

         <Table autoHeight={true} rowHeight={80} data={theatresList}>

                <Column flexGrow={1}  sortable fixed resizable>
                <HeaderCell>ID</HeaderCell>
                <Cell dataKey="_id" />
                </Column>


                <Column flexGrow={1}  sortable resizable>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
                </Column>

                <Column flexGrow={1}   sortable resizable>
                <HeaderCell>Description</HeaderCell>
                    <Cell dataKey="description" />
                </Column>

                <Column flexGrow={1}   sortable resizable>
                <HeaderCell>PinCode</HeaderCell>
                    <Cell dataKey="pinCode" />
                </Column>

                <Column  flexGrow={1}  sortable resizable>
                <HeaderCell>City</HeaderCell>
                    <Cell dataKey="city" />
                </Column>


  </Table>
     </div>

}

export default TheatresTable;
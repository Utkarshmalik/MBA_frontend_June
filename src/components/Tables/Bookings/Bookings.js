
import { Cell, Column, HeaderCell, Table, rowData, dataKey } from "rsuite-table";

const BookingsTable = ({bookingsList})=>{


    return   <div className="p-4">
         <h3 className="m-3">  Bookings </h3>

         <Table autoHeight={true} rowHeight={80} data={bookingsList}>

                <Column flexGrow={1}  sortable fixed resizable>
                <HeaderCell>Booking Id</HeaderCell>
                <Cell dataKey="_id" />
                </Column>


                <Column flexGrow={1}  sortable resizable>
                <HeaderCell>User Name </HeaderCell>
                <Cell dataKey="userId.name" />
                </Column>

                <Column flexGrow={1}   sortable resizable>
                <HeaderCell>Movie Name </HeaderCell>
                    <Cell dataKey="movieId.name" />
                </Column>

                <Column flexGrow={1}   sortable resizable>
                <HeaderCell>Theatre Name</HeaderCell>
                    <Cell dataKey="theatreId.name" />
                </Column>

                <Column  flexGrow={1}  sortable resizable>
                <HeaderCell>Status</HeaderCell>
                    <Cell dataKey="status" />
                </Column>

                    <Column  flexGrow={1}  sortable resizable>
                <HeaderCell>Seats</HeaderCell>
                    <Cell dataKey="noOfSeats" />
                </Column>

                    <Column  flexGrow={1}  sortable resizable>
                <HeaderCell>Amount</HeaderCell>
                    <Cell dataKey="totalCost" />
                </Column>


  </Table>
     </div>

}

export default BookingsTable;
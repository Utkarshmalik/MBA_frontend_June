
import { Cell, Column, HeaderCell, Table, rowData, dataKey } from "rsuite-table";

const UsersTable = ({usersList})=>{


    return   <div className="p-2">
         <h3 className="m-3">  Users </h3>

         <Table autoHeight={true} rowHeight={80} data={usersList}>

                <Column flexGrow={1}  sortable fixed resizable>
                <HeaderCell>User Id</HeaderCell>
                <Cell dataKey="userId" />
                </Column>


                <Column flexGrow={1}  sortable resizable>
                <HeaderCell>User Name </HeaderCell>
                <Cell dataKey="name" />
                </Column>

                <Column flexGrow={1}   sortable resizable>
                <HeaderCell>Email </HeaderCell>
                    <Cell dataKey="email" />
                </Column>

                <Column flexGrow={1}   sortable resizable>
                <HeaderCell>User Type</HeaderCell>
                    <Cell dataKey="userTypes" />
                </Column>

                <Column  flexGrow={1}  sortable resizable>
                <HeaderCell>Status</HeaderCell>
                    <Cell dataKey="userStatus" />
                </Column>



  </Table>
     </div>

}

export default UsersTable;
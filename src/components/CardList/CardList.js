import { CWidgetStatsC } from "@coreui/react";


function CardList(props){

    const {counterInfo} = props;

    return  <div className="row text-white">

            <div className="col">
                <CWidgetStatsC
                            className="d-flex"
                            color="black"
                            progress={{value:counterInfo.theatres}}
                            icon= {<i style={{fontSize:"50px"}} className="bi bi-building text-white" /> }
                            text="Number of Theaters"
                            title="Theatres"
                            value={counterInfo.theatres}
                            inverse={true}

                />
            </div>


           
            <div className="col">
                <CWidgetStatsC
                            color="black"
                            progress={{value:counterInfo.movies}}
                            icon= {<i  style={{fontSize:"50px"}} className="bi bi-film text-white" /> }
                            text="Number of Movies"
                            title="Movies"
                            value={counterInfo.movies}
                            inverse={true}

                />
            </div>


            
            <div className="col">
                <CWidgetStatsC
                            color="black"
                            progress={{value:counterInfo.bookings}}
                            icon= {<i  style={{fontSize:"50px"}} className="bi bi-card-list text-white" /> }
                            text="Number of Bookings"
                            title="Bookings"
                            value={counterInfo.bookings}
                            inverse={true}
                />
            </div>

           
            <div className="col">
                <CWidgetStatsC
                           color="black"
                            progress={{value:counterInfo.users}}
                            icon= {<i style={{fontSize:"50px"}} className="bi bi-people text-white" /> }
                            text="Number of Users"
                            inverse={true}
                            title="Users"
                            value={counterInfo.users}
                />
            </div>

           

        </div>

}

export default CardList;
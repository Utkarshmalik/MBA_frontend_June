import { CWidgetStatsC } from "@coreui/react";
import CWidget from "../CWidget/CWidget";
import { keys } from "../../utils/constants";


function CardList(props){

    const {counterInfo} = props;

    return  <div className="row text-white">

               <div className="col">
                <CWidget id={keys.THEATRE}  value={counterInfo.theatres} icon="bi-building" text="Number of Theatres" title="Theatres" />
               </div>

                <div className="col">
                <CWidget id={keys.MOVIE} value={counterInfo.movies} icon="bi-film" text="Number of Movies" title="Movies" />
                </div>

                <div className="col">
                    <CWidget id={keys.BOOKING} value={counterInfo.bookings} icon="bi-card-list" text="Number of Bookings" title="Bookings" />
                </div>


              <div className="col">
                <CWidget id={keys.USER} value={counterInfo.users} icon="bi-people" text="Number of Users" title="Users" />
              </div>

        </div>

}

export default CardList;
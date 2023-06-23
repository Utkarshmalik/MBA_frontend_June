import { CWidgetStatsC } from "@coreui/react";
import { WidgetContext } from "../../pages/Admin/Admin";
import { useContext } from "react";


const CWidget = ({value , icon, title,text,id})=>{

    const {onWidgetClick,show} = useContext(WidgetContext);

    return     <CWidgetStatsC
                            onClick={()=>onWidgetClick(id)}
                            style={{cursor
                            :"pointer"}}
                            className=""
                            color={show[id] ? "success" : "black"}
                            progress={value}
                            icon= {<i style={{fontSize:"50px"}} className={`bi ${icon} text-white`} /> }
                            text= {text}
                            title= {title}
                            value={value}
                            inverse={true}
                />

}

export default CWidget;
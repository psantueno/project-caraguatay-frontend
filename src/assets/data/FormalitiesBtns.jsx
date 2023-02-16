import {CommerceEnable, DriveLicence, MacroClick, PrivateConstruction} from '../../components/Formalities'


export const FormalitiesBtns= [
    {
        title: "MACRO CLICK",
        icon: <i class="fas fa-map-marker-alt"></i>,
        url: <MacroClick/>,
        id:'#MacroClick'
       
    },
    {
        title: "LICENCIA DE CONDUCIR",
        icon: <i className="fas fa-id-card"></i>,
        url:<DriveLicence/>,
        id: '#Licencia_conducir',
      
    },
    
    {
        title: "HABILITACION COMERCIAL",
        icon: <i className="fas fa-store"></i>,
        url:<CommerceEnable/> ,
        id: '#Habilitacion_comercial'
   
    },
    
    {
        title: "OBRAS PARTICULARES",
        icon:<i className="fas fa-building"></i>,
        url: <PrivateConstruction/> ,
        id: '#Obras_particulares'
   
    },
    
];

//  default FormalitiesBtns;
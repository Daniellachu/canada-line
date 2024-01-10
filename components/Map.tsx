import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const iconPurple = L.icon({ iconUrl: "/images/marker-purple.png", iconSize: [25,27], iconAnchor:[12.5,30]})
const iconRed = L.icon({ iconUrl: "/images/marker-red.png", iconSize: [25,27], iconAnchor:[12.5,30]})

//Canada line
const polyline:[number,number][]=[
    [49.28521724846519, -123.11427241577576], // Waterfront Station
    [49.282488422457284, -123.11860170021221], //Vancouver City Centre
    [49.27471581863812, -123.12180069275846], //Yaletown-Roundhouse Station
    [49.26671492246441, -123.11557709949253],//Olympic Village Station
    [49.262970001835, -123.11449771577675],//Broadway-City Hall Station
    [49.249304610220904, -123.1158913941003],//King Edward Station
    [49.23333041461469, -123.11659918694166],//Oakridge-41st Avenue Station
    [49.22650148286079, -123.1160460099596],//Langara-49th Avenue Station
    [49.20978218006086, -123.11690064461528],//Marine Drive Station
    [49.195672992696466, -123.12600295810695],//Bridgeport Station

    [49.196821489440765, -123.14633473112455],//Templeton
    [49.19325633998968, -123.15789001485905],//Sea Island Center
    [49.19434879645001, -123.1783047887973],//YVR Airport

]

const multiPolyline:[number,number][][]=[
    [
        [49.195672992696466, -123.12600295810695],//Bridgeport Station
        [49.18412977626924, -123.13636310043472],//Aberdeen Station
        [49.17498303540079, -123.13634582927143],//Lansdowne Station
        [49.16822958543853, -123.13617068509032],//Richmond-Brighouse Station
    ]
]

const blueOptions = { color: '#8872E0'};
const redOptions = {color: '#F95B5B'};
// const fillBlueOptions = {color: 'blue'}

const Map = () => {
    return(
        <MapContainer
            style={{height: "100vh" }}
            center={ [49.23333041461469, -123.11659918694166]} zoom={13} scrollWheelZoom={false}
        >  
            <TileLayer
            attribution='&copy; <a href="https://github.com/Daniellachu/canada-line">By DaniellaChu</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[49.28521724846519, -123.11427241577576]} icon={iconPurple} >
                <Popup>
                    Waterfront Station
                </Popup>
            </Marker>
            <Marker position={[49.282488422457284, -123.11860170021221]} icon={iconPurple} >
                <Popup>
                    Vancouver City Centre
                </Popup>
            </Marker>
            <Marker position={[49.27471581863812, -123.12180069275846]} icon={iconPurple} >
                <Popup>
                    Yaletown-Roundhouse Station
                </Popup>
            </Marker>
            <Marker position={[49.26671492246441, -123.11557709949253]} icon={iconPurple} >
                <Popup>
                    Olympic Village Station
                </Popup>
            </Marker>
            <Marker position={[49.262970001835, -123.11449771577675]} icon={iconPurple} >
                <Popup>
                    Broadway-City Hall Station
                </Popup>
            </Marker>
            <Marker position={[49.249304610220904, -123.1158913941003]} icon={iconPurple} >
                <Popup>
                    King Edward Station
                </Popup>
            </Marker>
            <Marker position={[49.23333041461469, -123.11659918694166]} icon={iconPurple} >
                <Popup>
                    Oakridge-41st Avenue Station
                </Popup>
            </Marker>
            <Marker position={[49.22650148286079, -123.1160460099596]} icon={iconPurple} >
                <Popup>
                    Langara-49th Avenue Station
                </Popup>
            </Marker>
            <Marker position={[49.20978218006086, -123.11690064461528]} icon={iconPurple} >
                <Popup>
                    Marine Drive Station
                </Popup>
            </Marker>
            <Marker position={[49.195672992696466, -123.12600295810695]} icon={iconRed} >
                <Popup>
                    Bridgeport Station
                </Popup>
            </Marker>
            <Marker position={[49.196821489440765, -123.14633473112455]} icon={iconPurple} >
                <Popup>
                    Templeton
                </Popup>
            </Marker>
            <Marker position={[49.19325633998968, -123.15789001485905]} icon={iconPurple} >
                <Popup>
                    Sea Island Center
                </Popup>
            </Marker>
            <Marker position={[49.19434879645001, -123.1783047887973]} icon={iconPurple} >
                <Popup>
                    YVR Airport
                </Popup>
            </Marker>
            <Marker position={[49.18412977626924, -123.13636310043472]} icon={iconRed} >
                <Popup>
                    Aberdeen Station
                </Popup>
            </Marker>
            <Marker position={[49.195672992696466, -123.12600295810695]} icon={iconPurple} >
                <Popup>
                    Lansdowne Station
                </Popup>
            </Marker>
            <Marker position={[49.16822958543853, -123.13617068509032]} icon={iconRed} >
                <Popup>
                    Richmond-Brighouse Station
                </Popup>
            </Marker>
            
            <Polyline pathOptions={blueOptions} positions={polyline}/>
            <Polyline pathOptions={redOptions} positions={multiPolyline}/>
        </MapContainer>

    )
}

export default Map;


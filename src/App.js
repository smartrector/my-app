/*global kakao*/
import React, {useState, useEffect} from "react";
import "./assets/css/tStyle.scss";
import mapoRestaurants from "./utils/mapData";
import zIndex from "@mui/material/styles/zIndex";

function App() {
  const [map, setMap] = useState(null);
  const [userMarker, setUserMarker] = useState(null);
  const [circle, setCircle] = useState(null);

  const [nowMarker, setNowMarker] = useState([37.553645, 126.924552]);

  useEffect(() => {
    initializeMap(); // 페이지 로드 시 지도 초기화
  }, []);

  const initializeMap = async () => {
    const container = document.getElementById("map");
    const latlng = new kakao.maps.LatLng(nowMarker[0], nowMarker[1]);
    const options = {
      center: latlng,
      level: 6,
    };

    const newMap = new kakao.maps.Map(container, options);
    setMap(newMap);

    const markerPosition = new kakao.maps.LatLng(nowMarker[0], nowMarker[1]);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      draggable: true, // 마커를 드래그할 수 있도록 설정
    });
    marker.setMap(newMap);
    setUserMarker(marker);

    const initialCircle = createCircle(newMap, markerPosition);
    setCircle(initialCircle);

    kakao.maps.event.addListener(newMap, "dragend", function () {
      const currentCenter = newMap.getCenter(); // 현재 지도 중심 좌표
      marker.setPosition(currentCenter); // 마커 위치를 지도 중심으로 설정
      if (circle != null) {
        // 최초 실행시에는 circle이 없을테니 예외처리를 해줍니다.
        circle.setMap(null);
      }
      console.log(circle);
      // 새로운 원 생성
      const newCircle = createCircle(newMap, currentCenter);
      setCircle(newCircle);
    });

    mapoRestaurants.forEach((restaurant) => {
      const {latitude, longitude} = restaurant;
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);

      // 마커 생성
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(newMap);
    });
  };

  // 원 생성 함수
  const createCircle = (map, center) => {
    const newCircle = new kakao.maps.Circle({
      center: center,
      radius: 1000,
      strokeWeight: 2,
      strokeColor: "#FF00FF",
      strokeOpacity: 0.8,
      strokeStyle: "dashed",
      fillColor: "#D3D5BF",
      fillOpacity: 0.5,
    });
    newCircle.setMap(map); // 원을 지도에 표시
    return newCircle;
  };

  return (
    <div>
      <div id="map" style={{width: "400px", height: "600px"}}></div>
    </div>
  );
}
export default App;

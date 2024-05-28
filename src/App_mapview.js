/*global kakao*/
import React, {useState, useEffect} from "react";
import "./assets/css/tStyle.scss";
import mapoRestaurants from "./utils/mapData";
import zIndex from "@mui/material/styles/zIndex";

function App() {
  var x = 37.553645;
  var y = 126.924552;
  var radius = 2000; //마포갈비

  const [map, setMap] = useState(null);
  const [userMarker, setUserMarker] = useState(null);
  const [nowMarker, setNowMarker] = useState([37.553645, 126.924552]);
  const [lastMarker, setLastMarker] = useState(null);

  useEffect(() => {
    initializeMap(); // 페이지 로드 시 지도 초기화
  }, []);

  const circle = new kakao.maps.Circle({
    center: new kakao.maps.LatLng(nowMarker[0], nowMarker[1]),
    radius: radius,
    strokeWeight: 2,
    strokeColor: "#FF00FF",
    strokeOpacity: 0.8,
    strokeStyle: "dashed",
    fillColor: "#D3D5BF",
    fillOpacity: 0.5,
  });

  const initializeMap = async () => {
    const container = document.getElementById("map");
    const latlng = new kakao.maps.LatLng(nowMarker[0], nowMarker[1]);
    const options = {
      center: latlng,
      level: 6,
    };
    const newMap = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(nowMarker[0], nowMarker[1]);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      draggable: true, // 마커를 드래그할 수 있도록 설정
    });
    // marker.setMap(newMap);
    //setUserMarker(marker);

    // 마커가 드래그되었을 때 이벤트 리스너 추가
    kakao.maps.event.addListener(marker, "dragend", function () {
      const newCenter = marker.getPosition(); // 새로운 중심 좌표는 마커의 위치
      newMap.setCenter(newCenter); // 지도의 중심 좌표를 새로운 위치로 변경
      // console.log(newCenter.getLat(), newCenter.getLng()); // 새로운 중심 좌표 로그 출력
    });

    kakao.maps.event.addListener(newMap, "dragend", function () {
      const currentCenter = newMap.getCenter(); // 현재 지도 중심 좌표
      marker.setMap(newMap);
      marker.setPosition(currentCenter); // 마커 위치를 지도 중심으로 설정
      circle.setPosition(currentCenter);
    });

    mapoRestaurants.forEach((restaurant) => {
      const {latitude, longitude} = restaurant;
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);

      // 새로운 마커 생성
      const markerImage = new kakao.maps.MarkerImage(
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
        new kakao.maps.Size(64, 69),
        {offset: new kakao.maps.Point(27, 69)}
      );
      // 마커 생성
      const newMarker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });
      newMarker.setMap(newMap);
      circle.setPosition(markerPosition);
    });

    circle.setMap(newMap);
  };

  return (
    <div>
      <div id="map" style={{width: "400px", height: "600px"}}></div>
      <button
        onClick={() => {
          circle.setMap(null);
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;

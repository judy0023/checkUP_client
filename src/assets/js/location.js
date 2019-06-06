var city, price, something = 0;
var dataService;
var hosSearchResult;
var res_info;
var optionNames = new Array();

function onCheck() {
    if (city === undefined || price === undefined || something === undefined) {

    } else {
        document.getElementById("save").setAttribute('data-dismiss', 'modal');
        hosSearchResult = dataService.create_hos_info(city, price, something).then(hosSearchResult => this.hosSearchResult = Array.of(hosSearchResult));
        document.getElementById("section").click();
    }
}

function setOptionName(optionName) {

    if(optionNames.length > 2) {
        optionNames = new Array();
    }
    
    optionNames[optionNames.length] = optionName;
}

function getOptionName(id) {
    if (id == 1) {
        switch (something) {
            case 0:
                optionNames[2] = "전체";
                break;
            case 1:
                optionNames[2] = "일반";
                break;
            case 2:
                optionNames[2] = "구강";
                break;
            case 3:
                optionNames[2] = "암";
                break;
            case 5:
                optionNames[2] = "출장";
                break;
            case 6:
                optionNames[2] = "영유아";
                break;
        }
    }
    
    return optionNames;
}

function returnHosSearchResult() {
    return hosSearchResult;
}

function sendData(dataService, hosSearchResult, res_info) {
    this.dataService = dataService;
    this.hosSearchResult = hosSearchResult;
    this.res_info = res_info;
}

function save(a, b) {
    city = a;
    price = b;
}

function getSaveCity() {
    return city;
}

function getSavePrice() {
    return price;
}


var mapContainer;
var map;
var info;
var resInfo;
var h, n, i;


function hos_map(h, n, i, dataService, resInfo) {

    this.dataService = dataService;
    this.resInfo = resInfo;

    mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 6 // 지도의 확대 레벨
        };

    // 지도를 생성합니다    
    map = new daum.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new daum.maps.services.Geocoder();

    //**반복하기..?**

    var hospital = new Array();

    for (var k = 0; k < h.length; k++) {
        var hospitalInfo = new Object();
        hospitalInfo.hos_addr = h[k];
        hospitalInfo.hos_name = n[k];
        hospital.push(hospitalInfo);
    }

    var j = 0;

    for (var k = 0; k < hospital.length; k++) {
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(hospital[k].hos_addr, function (result, status) {
            // 정상적으로 검색이 완료됐으면 
            if (status === daum.maps.services.Status.OK) {

                var coords = new daum.maps.LatLng(result[0].y, result[0].x);
                //console.log(coords);

                //**병원 건물 이름이 다 있는지 확인하고 Buliding_name으로 받아오면 해결됨.**
                var Lat = result[0].y;
                var Lng = result[0].x;
                var address = result[0].address.address_name;
                // var BlidingName = result.building_name;
                var BlidingName = hospital[j].hos_name;
                var hospital_herf = "<div style=\"padding:5px;\">" + BlidingName + "<br><a href=\"" + "http://map.daum.net/link/to/" + address + "," + Lat + "," + Lng + "\"" + "style=\"color:blue\" target=\"_blank\"" + ">길찾기</a></div>'";

            }
            map2(coords, hospital[j].hos_name, hospital_herf, i[j]);
            j++;
        });//geocoder.addressSearch 닫기
    }
}

function sec_map(h, n, i, dataService, resInfo) {

    this.dataService = dataService;
    this.resInfo = resInfo;

    mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 6 // 지도의 확대 레벨
        };

    // 지도를 생성합니다    
    map = new daum.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new daum.maps.services.Geocoder();

    //**반복하기..?**

    var hospital = new Array();

    for (var k = 0; k < h.length; k++) {
        var hospitalInfo = new Object();
        hospitalInfo.hos_addr = h[k];
        hospitalInfo.hos_name = n[k];
        hospital.push(hospitalInfo);
    }

    var j = 0;

    for (var k = 0; k < hospital.length; k++) {
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(hospital[k].hos_addr, function (result, status) {
            // 정상적으로 검색이 완료됐으면 
            if (status === daum.maps.services.Status.OK) {

                var coords = new daum.maps.LatLng(result[0].y, result[0].x);
                //console.log(coords);

                //**병원 건물 이름이 다 있는지 확인하고 Buliding_name으로 받아오면 해결됨.**
                var Lat = result[0].y;
                var Lng = result[0].x;
                var address = result[0].address.address_name;
                // var BlidingName = result.building_name;
                var BlidingName = hospital[j].hos_name;
                var hospital_herf = "<div style=\"padding:5px;\">" + BlidingName + "<br><a href=\"" + "http://map.daum.net/link/to/" + address + "," + Lat + "," + Lng + "\"" + "style=\"color:blue\" target=\"_blank\"" + ">길찾기</a></div>'";

            }
            map2(coords, hospital[j].hos_name, hospital_herf, i[j]);
            j++;
        });//geocoder.addressSearch 닫기
    }
}


function map2(coords, name, hospital_herf, id) {

    // 결과값으로 받은 위치를 마커로 표시합니다
    var marker = new daum.maps.Marker({
        map: map,
        position: coords
    });

    var iwContent = hospital_herf;
    iwPosition = coords; //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new daum.maps.InfoWindow({
        position: iwPosition,
        content: '<div style="padding:5px;">'+ name + '</div>'
    });

    daum.maps.event.addListener(marker, 'click', function () {
        resInfo = dataService.create_info(name, id).then(resInfo => this.resInfo = Array.of(resInfo));
        document.getElementById("info").setAttribute('data-toggle', 'modal');
        document.getElementById("info").setAttribute('data-target', '#mapModal');
        document.getElementById("info").click();
    });
    daum.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    daum.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
    daum.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    map.setCenter(coords);
}

function dataTrans() {
    return resInfo;
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function () {
        infowindow.open(map, marker);
    };
}

function closeOverlay() {
    //infowindow.setMap(null);
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}


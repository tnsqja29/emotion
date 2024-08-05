$(function () {
    var $items = $("article");
    var $aside = $("aside");
    var $close = $aside.find("span");

    $items.each(function () {
        // .each() 반복작업 수행시 사용 
        // .each = 제이쿼리의 반복가능 객체 - 해당 요소를 하나씩 순회하면서 특정 작업 수행
        var $el = $(this); // this = article
        $el.on("mouseenter", function (e) {
            // 매개변수 사용 이유는 입력값을 전달하여 
            // 함수 동작 제어, 결과 맞춤시 사용
            // 정교한 이벤트 처리를 위함 
            // (e) => 이벤트 핸들러 함수의 매개변수임  
            // mouseenter = 마우스가 요소에 진입했을때 
            // e는, 이벤트가 일어난 객체를 가리키며, 
            // 이벤트가 등록된 요소를 의미 - 원하는 요소 작업 수행 의미 
            $(e.currentTarget).find("video")[0].play();
            // currentTarget = 현재 이벤트가 일어난 요소 
            // .play();  = 비디오 재생 메서드  
        });

        // 마우스 벗어났을때 일시정지 
        $el.on("mouseleave", function (e) {
            $(e.currentTarget).find("video")[0].pause();
        });
        // .pause();   - 비디오 일시정지

        // article 에 마우스 클릭했을때 실행 
        $el.on("click", function (e) {
            var $currentTarget = $(e.currentTarget);
            // 아티클
            var tit = $currentTarget.find("h2").text();
            // 클릭한 article 의 텍스트 h2 가져옴
            var txt = $currentTarget.find("p").text();
            // 클릭한 article 의 텍스트 p 가져옴
            var vidSrc = $currentTarget.find("video").attr("src");
            // 클릭한 article 의 비디오 소스 가져옴  

            // 가져오는 이유는, 
            // article의 제목과 내용을 aside의 제목과 네용으로 넣어줌 
            // .text() -> 텍스트 가져옴 + 텍스트 설정(세팅=집어넣음)
            // .attr() -> 속성 가져옴 + 속성 설정  
            $aside.find("h3").text(tit); // article의 h2 내용 넣어줌 
            $aside.find("p").text(txt); // article의 p 내용 넣어줌 
            $aside.find("video").attr("src", vidSrc)[0].play();
            // article의 비디오 설정후 재생  
            $aside.addClass("on"); // 투명도 100%, 위치값 왼쪽0의 속성 넣어줌
        });
    });

    // 닫기 버튼 클릭시 aside 닫기
    $close.on("click", function () {
        $aside.removeClass("on"); // on 클래스 제거 (숨겨짐)
        $aside.find("video")[0].pause(); // 비디오 일시정지 
    });
    // aside 클릭시 닫기
    $aside.on("click", function () {
        $aside.removeClass("on"); // on 클래스 제거 (숨겨짐)
        $aside.find("video")[0].pause(); // 비디오 일시정지 
    });

    // 검색 버튼 클릭시 검색창 보기
    $("#searchButton").on("click", function () {
        $("#searchContainer").toggle();
    });
    // .toggle : 보여져있으면 감춰주고 감춰져있으면 보여줌
    // 아무데나 눌렀을때 검색창 닫기
    // .closest() - 가장 가까운 조상
    $(document).on("click", function (event) {
        if (!$(event.target).closest('#searchContainer, #searchButton').length) {
            $('#searchContainer').hide();
        }
    });
    // !연산자 - 부정연산자 (조건이 거짓일때 참을 반환)
});

// .each (제이쿼리 반복문 메서드)
// 아티클, 어사이드, 닫기버튼 변수저장 
const removeSearchInput = () => {
    // 대상 node 선택
    let target = document.querySelector('main');

    // 감시자 인스턴스 만들기
    let observer = new MutationObserver((mutations) => {
        // node 변경 시 작업 수행
        document.querySelector('.search__input').value = "";
        document.querySelector('.search__input').blur(); // 포커스 해제
        document.querySelector('.pop__movielist__result').innerHTML = "";
    })

    // 감시자의 설정
    let option = {
        childList: true,	// 타겟의 하위 요소 추가 및 제거 감지
        characterData: true,	// 타겟의 데이터 변경 감지
        attributes: true, // 속성 감지
    };

    // 감시자 옵션 포함, 대상 노드에 전달
    observer.observe(target, option);
}

export default removeSearchInput;
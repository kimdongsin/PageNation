/*

페이지네이션을 구현하기 위한 설정값은 총 4개가 필요합니다

limit: 한 페이지 당 나타낼 데이터의 갯수
currentPage: 현재 페이지
totalCount: 총 데이터의 갯수
pageCount: 화면에 나타날 페이지 갯수

*/

// 초기값
let dataSet = {
    _limit : 10,
    _page : 1,
    total : '',
    pageCount : 10
}



$.ajax({
    url: 'http://localhost:3000/posts/',
    type: 'GET',
    data: dataSet,
    success : function(res, state, r) {
        console.log(res);
        console.log(r.getResponseHeader('X-Total-Count'));
        dataSet.total = r.getResponseHeader('X-Total-Count');
    },
    error : function(e) {
        console.log(e);
    }
});
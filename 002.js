//<최소 직사각형> https://programmers.co.kr/learn/courses/30/lessons/86491 

//내가 짠 코드
function solution(sizes) {
    var big = new Array();
    var small = new Array();
    var a = 0;
    var b = 0;
    var answer = 0;
    
    for (var i=0; i<sizes.length;i++)
        for(var j=0;j<sizes.length;j++)
        //a=[0,0] b=[0,1]을 넣고 비교 후 다시 for문 돌아서 a=[1,0] b=[1,1]을 비교..이런 식으로 짜고 싶은데 잘 모르겠다... 
            a>b ? big.push(a); small.push(b); : big.push(b); small.push(a); 
            //삼항 연산자 안에는 두 개의 구문?을 쓸 수가 없는 것 같다
    
    big.sort();//오름차순 정렬
    small.sort();
    answer = big[0]*small[0]
    return answer;
}

//도움받은 코드 

//이차원 배열의 인덱스 찾는 게 너무 어려움 ㅜㅜ 표를 그려도 헷갈린다

//최종 제출 코드
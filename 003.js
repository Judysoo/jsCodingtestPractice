//<폰켓몬> https://programmers.co.kr/learn/courses/30/lessons/1845#

//내가 짠 코드
/*
function solution(nums) {
    var answer = 0;
    var numsHalf = nums.length*0.5;
    var set = new Set(nums);
    var setnums = set.size;
    answer = numsHalf>=setnums ? setnums : numsHalf
    return answer;
}
*/

//도움받은 코드
//https://velog.io/@dolarge/Java-Script-Set-%EA%B3%BC-Map [JavaScript] 37. Set 과 Map
//https://hianna.tistory.com/422?category=764998 [Javascript] 배열 중복 제거하는 3가지 방법

//처음엔 forEach를 활용하려고 했으나 사용법이 복잡한 것 같아서 더 간결한 Set을 선택했다!
//하지만 무지하게 길어지고 복잡해지는 for문을 대체할 forEach... 꼭 학습해야겠당
//질문하기에 있는 다른 사람 코드 안베끼고 내가 풀었다! 뿌듯하다 ㅠㅠ

//최종 제출 코드
function solution(nums) {
    var answer = 0;
    var numsHalf = nums.length*0.5;
    var set = new Set(nums);
    var setnums = set.size;
    answer = numsHalf>=setnums ? setnums : numsHalf
    return answer;
}
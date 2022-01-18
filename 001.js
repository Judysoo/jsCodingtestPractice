//<부족한 금액 계산하기> https://programmers.co.kr/learn/courses/30/lessons/82612 

//내가 짠 코드
/*
function solution(price, money, count) {
    for (var i=1; i<=count;i++)
        var up = price*i;
        var k = money-up;
    var answer= -1;
    (k<=0) ? answer = k : answer = 0;
   
    return answer;
}
//up += price*i -> up = up+price*i 
//up은 '내가 지출한 돈의 합' 이므로 결과값을 계속 더해줘야 함~
*/

/*function solution(price, money, count) {
    var answer= -1;
    var up = 0;
    var k = 0;
    for (var i=1; i<=count;i++)
        up += price*i;
        k = money-up;
    (k<=0) ? answer = k : answer = 0;
   
    return answer;
}
//기댓값은 양수, 이 코드대로라면 answer은 음수 혹은 0을 리턴해서 안됨 ㅠㅠ
*/

//도움받은 코드 https://programmers.co.kr/questions/24719
/*
public long solution(int price, long money, int count) {
        long answer = -1;
        long pay = 0;
        for(int i=1; i<=count; i++){
            pay += price*i;
        }
        answer = (pay-money>0)?pay-money:0;       
        return answer;
    }
*/

//변수 선언은 맨 위에 모아서 한꺼번에 하자

//최종 제출 코드
function solution(price, money, count) {
    var answer= -1;
    var up=0;
    for (var i=1; i<=count;i++)
        up += price*i;
    answer = (up-money>0) ? up-money : 0;    
   
    return answer;
}

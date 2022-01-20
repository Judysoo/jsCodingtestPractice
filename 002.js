//<최소 직사각형> https://programmers.co.kr/learn/courses/30/lessons/86491 

//내가 짠 코드
/*
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
*/

//도움받은 코드 https://programmers.co.kr/questions/20801
/*
#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<int>> sizes) {
    int answer = 0;

    int len1 = sizes.size(); //sizes.length와 같은 기능인 듯. 

    int mostBig = 0;
    int mostSmall = 0;

    for(int i=0; i<len1; i++)
    {
        int big = 0;
        int small = 0;

        big = sizes[i][0];  //이것은 무엇인가????????? 배열명[i][0].....배열 인덱스 찝은건데... 아 배열 y값이 어차피 두개고 매번 같은 x축에 있는 값 두개만 비교하면 되니까 for문 하나 더 돌릴 필요 없이 x값으로만 for문을 돌리는구나
        small = sizes[i][1]; //각각의 값을 뽑아서 변수에 할당하고 그 값을 서로 비교하면 되는 것이었다

        if(big < small)     //대충 봤다간 헷갈릴 수 있어서 확실하게 정리
        {                   //big=1 small=0 이라고 하면, 
            int temp = big; //temp == 1 big == 1 small == 0 
            big = small;    //temp == 1 big == 0 small == 0
            small = temp;   //temp == 1 big == 0 small == 1  임시 변수 temp를 이용하여 big과 small의 위치 바꾸기. 

        if(big > mostBig)
            mostBig = big;      // if(big>small)을 거쳐 big에 할당된 값이 10, 20, 5, 1일 때, i==0...big==10 mostBig==10 / i==1...big==20 mostBig==20 / i==2...big==5 mostBig==20 / i==3...big==1 mostBig==20 

        if(small > mostSmall)   //새로 들어온 값 small과 기존에 할당된 값 mostSmall과 비교, 새로 들어온 값이 더 클 경우 mostSmall에 새로운 값 할당.
            mostSmall = small;
    }

    answer = mostSmall * mostBig;
    return answer;
}
*/

//이차원 배열의 인덱스 찾는 게 너무 어려움 ㅜㅜ 표를 그려도 헷갈린다
//큰 수와 작은 수를 각각 새로운 배열에 넣어서 제일 큰 수를 뽑아내는 것보다 각각 비교하고 조건을 만족하면 변수에 집어넣는 게 더 효율적으로 보인다... 하지만 새로운 배열을 만드는 것도 다른 문제에서 활용할 수 있을 것 같은데... 내 코드를 완성하려면 어떻게 수정해야 하는 걸까... 
//조건문을 사용할 때 실행문 중괄호를 다음 줄에 단독으로 배치하는 게 가독성이 너어무 편하다... 혼자 짤 때는 앞으로 이렇게 사용해야징

//최종 제출 코드

function solution(sizes) {
    var big = 0;
    var small = 0;
    var a = 0;
    var b = 0;
    var answer = 0;
    
    for (var i=0; i<sizes.length;i++)
    {
        a = sizes[i][0];
        b = sizes[i][1];
    
        if(a < b)
        {
            var temp = a;
            a = b;
            b = temp;
        }
    
        if(a > big)
            big = a;
        if(b > small)
            small = b;
    }
    
    answer = big*small;
    
    return answer;
}

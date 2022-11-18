package 프로그래머스;

public class rectangle {
    public int solution(int[][] dots) {
        int answer = 0;
        int x1 = -256;
        int y1 = -256;
        int x2 = 256;
        int y2 = 256;
        for (int i = 0; i < dots.length; i++) {
            x1 = x1 < dots[i][0] ? dots[i][0] : x1;
            x2 = x2 > dots[i][0] ? dots[i][0] : x2;
            y1 = y1 < dots[i][1] ? dots[i][1] : y1;
            y2 = y2 > dots[i][1] ? dots[i][1] : y2;
        }
        answer = (x1 - x2) * (y1 - y2);
        return answer;
    }
}

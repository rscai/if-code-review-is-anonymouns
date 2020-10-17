package io.github.rscai.codereview.meaningfulnames;

import java.util.ArrayList;
import java.util.List;

/**
 * 扫雷游戏 (Mine Sweeper Game)
 */
public class MSG {

  private int x;
  private int y;
  private List<int[]> theList;

  public MSG(int x, int y) {
    this.x = x;
    this.y = y;
    theList = new ArrayList<>(x * y);
  }

  public List<int[]> getThem() {
    List<int[]> list1 = new ArrayList<>();
    for (int[] x : theList) {
      if (x[0] == 4) {
        list1.add(x);
      }
    }
    return list1;
  }
}

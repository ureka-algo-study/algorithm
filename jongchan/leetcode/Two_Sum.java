import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        int[] result = new int[2];

        // [2, 7, 11, 15], target = 9
        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];

            if (map.containsKey(need)) {
                result = new int[] { map.get(need), i };
                break;
            }

            map.put(nums[i], i);
        }

        return result;
    }
}
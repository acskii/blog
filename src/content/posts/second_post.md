---
title: (1) Contains Duplicates
author: acskii
tags: ['neetcode', 'java', 'easy']
date: 18/4/2025
---

**Hey!**

This is the first ever post on this series of [NeetCode 150][1].
The style of these will be as follows:
- Problem + Examples
- Explanation of how *I* understood the problem and solved it
- Code solution in **mostly Java** and **Python**
- Other resources e.g. Video explanations

Now without further ado, here is the first problem!

....

...

..

.


## 217. Contains Duplicate
  **Difficulty**: *Easy*

**Description**: Given an integer array `nums`, return `true` if any value appears **more than once** in the array, otherwise return `false`.

**Example 1:**
```java
Input: nums = [1, 2, 3, 3]

Output: true
```

**Example 2:**
```java
Input: nums = [1, 2, 3, 4]

Output: false
```

....

...

..

.

### Approach
There are 2 approaches that I managed to figure out: **Brute Force** and **HashSet**.

#### 1] Brute Force
Using the brute force method, in essence, is iterating through all the numbers within the given input array and comparing each element with all the other elements in the array. This can be achieved by iterating **twice** through the array for each of its elements.

**Time Complexity**: **O(n^2)**

**Space Complexity**: **O(1)**

```java
// Brute Force Approach
class Solution {
    public boolean hasDuplicate(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
	      // Loop once for each element
            for (int j = 0; j < nums.length; j++) {
            // For each element, loop through the array again
                if (nums[i] == nums[j] && i != j) {
                // If two numbers compared are the same
                // AND not in the same index (same element)
                    return true;
                }
            }
        }
        return false;
    }
}
```

#### 2] HashSet
This method utilizes a property in the *HashSet* class, where you can in linear time check whether a number is already within a particular set.

To use this method, we will iterate through the array **once**, adding each element in the set if not present, and any element found to be already in the set indicates that it is a duplicate.

**Time Complexity**: **O(n)**

**Space Complexity**: **O(n)**

```java
// HashSet approach
class Solution {
    public boolean hasDuplicate(int[] nums) {
        // initialize an empty set
        Set<Integer> passed = new HashSet<>();
        for (int num: nums) {
            if (passed.contains(num)) {
                // Stop looping if an element is in the set
                return true;
            }
            // Add element into the set
            passed.add(num);
        }
        return false;
    }
}
```

#### Bonus
Now, using **Java**, there is another way to implement the HashSet approach with *less lines of code*.

**Time Complexity**: **O(n)**

**Space Complexity**: **O(n)**

```java
class Solution {
    public boolean hasDuplicate(int[] nums) {
        return Arrays.stream(nums).distinct().count() < nums.length;
    }
}
```

This create an Array stream that allows for the `distinct` method that filters any duplicate elements. Checking whether the length of the newly returned Array is the same as the original will determine if any element got filtered as a duplicate or not.

### Resources

Check out [this video][2] explaining the problem.

....

...

..

.


Now thus concludes the first problem in the series...

Don't think for a second that I only solved this problem, and decided to create an entire blog just for it, **NO**!

I have already solved a lot more, and still am. And this is a way for me to revise on previously used approaches and solutions as I continue in this journey.

Anyway, thanks for reading till the end, future me.

See you in the next problem!
**:)**

[1]: https://www.neetcode.io/roadmap
[2]: https://www.youtube.com/watch?v=3OamzN90kPg
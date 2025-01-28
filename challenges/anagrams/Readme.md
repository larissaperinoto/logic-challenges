### Anagrams

Anagram is a word, phrase, or name formed by rearranging the letters of another, such as 'spar', formed from 'rasp. Given an array of strings, return all groups of strings that are anagrams. Represent a group by a list of integers representing the index in the original list.
Look at the sample case for clarification.

**Note:** All inputs will be in lower-case.

#### Example

        Input : cat dog god tca atc odg
        Output : [[1, 4, 5], [2, 3, 6]]
        cat and tca are anagrams that correspond to index 1 and 4.
        dog and god are another set of anagrams that correspond to index 2 and 3.

The indices are 1 based (the first element has index 1 instead of index 0).

Ordering of the result: You should not change the relative ordering of the words/phrases within the group. Within a group containing A[i] and A[j], A[i] comes before A[j]

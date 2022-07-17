#include <iostream>
#include <bits/stdc++.h>
using namespace std;

vector < vector < int > > finalVec;

void printArray(int p[], int n)
{
	vector < int > vec;
    for (int i = 0; i < n; i++)
       vec.push_back(p[i]);
    finalVec.push_back(vec);
    return;
}
 
void printAllUniqueParts(int n)
{
    int p[n]; // An array to store a partition
    int k = 0;  // Index of last element in a partition
    p[k] = n;  // Initialize first partition as number itself
 
    // This loop first prints current partition, then generates next
    // partition. The loop stops when the current partition has all 1s
    while (true)
    {
        // print current partition
        printArray(p, k+1);
 
        // Generate next partition
 
        // Find the rightmost non-one value in p[]. Also, update the
        // rem_val so that we know how much value can be accommodated
        int rem_val = 0;
        while (k >= 0 && p[k] == 1)
        {
            rem_val += p[k];
            k--;
        }
 
        // if k < 0, all the values are 1 so there are no more partitions
        if (k < 0)  return;
 
        // Decrease the p[k] found above and adjust the rem_val
        p[k]--;
        rem_val++;
 
 
        // If rem_val is more, then the sorted order is violeted.  Divide
        // rem_val in differnt values of size p[k] and copy these values at
        // different positions after p[k]
        while (rem_val > p[k])
        {
            p[k+1] = p[k];
            rem_val = rem_val - p[k];
            k++;
        }
 
        // Copy rem_val to next position and increment position
        p[k+1] = rem_val;
        k++;
    }
}


int main() {
	// your code goes here
	int n; cin >> n;
	
	printAllUniqueParts(n);
	cout << "size : " << finalVec.size() << endl;
	multiset < int > :: iterator it;

	int ANS = 0;
	vector < int > ansVec;
	for (int i = 0; i < finalVec.size(); i++) {
		multiset < int > mySet;
		
		vector < int > temp = finalVec[i];
		
		for (int ii = 0; ii < temp.size(); ii++) {
			mySet.insert(temp[ii]);
		}
		
		int t = n + 4;
		int cnt = 0;
		while (t --) {
			multiset < int > newSet;
			newSet.insert(mySet.size());
			
			for (it = mySet.begin(); it != mySet.end(); it++) {
				if(*it > 1) {
					newSet.insert((*it) - 1);
				}
			}
			
			if(newSet == mySet) {
				if(cnt > ANS) {
				    ANS = cnt;
				    ansVec = temp;
				}
				break;
			}
			
			cnt++;
			mySet = newSet;
		}
	}
	
	cout << ANS << endl;
	for (int i = 0; i < ansVec.size(); i++) cout << ansVec[i] << ' ';
	cout << endl;
	
	return 0;
}

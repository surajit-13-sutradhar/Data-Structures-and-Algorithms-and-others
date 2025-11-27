#include <bits/stdc++.h>
using namespace std;
 
int main() {
    int t;
    cin >> t;
    
    while(t--) {
        int n;
        cin >> n;
        // Define a pair of n elements
        pair <int, int> ab[n]; 
        // Fill the pairs
        // First elements
        for (int i = 0; i < n; i++) {
            cin >> ab[i].first; //  
        }
        // Second elements
        for (int j = 0; j < n; j++) {
            cin >> ab[j].second; //  
        }
        
        // Now sort the pair according to the first elements
        sort(ab, ab + n);
        // Print the configurations that have the minimum inversions
        // First elements
        for (int i = 0; i < n; i++) {
            cout << ab[i].first << ' '; //  
        }
        cout << "\n";
        // Second elements
        for (int j = 0; j < n; j++) {
            cout << ab[j].second << ' '; //  
        }
        cout << "\n";
    }
}
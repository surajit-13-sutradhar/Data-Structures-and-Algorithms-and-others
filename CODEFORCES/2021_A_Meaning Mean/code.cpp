#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main () {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int t;
    cin >> t;
    
    while (t--) {
        int n;
        cin >> n;
        
        vector<ll> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        
        // In place sorting
        sort(arr.begin(), arr.end());
        int j = 0;
        while (arr.size() > 1) {
            ll mean = floor((arr[0] + arr[1]) / 2);  // Find mean from the first two elements
            arr.erase(arr.begin(), arr.begin() + 2); // Remove first two elements
            arr.insert(arr.begin(), mean); // Insert the mean at the front
        }
        
        cout << arr[0] << "\n";
    }
}
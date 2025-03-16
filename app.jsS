class Stack {
    constructor(n) {
        this.size = n;
        this.top = -1;
        this.a = new Array(this.size);
    }

    // Function to check if stack is empty
    isEmpty() {
        return this.top < 0;
    }

    // Function to push element in Stack
    push(x) {
        if (this.top >= this.size - 1) {
            console.log("Stack Overflow");
            return false;
        } else {
            this.a[++this.top] = x;
            return true;
        }
    }

    // Function to pop element from stack
    pop() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return null;
        } else {
            return this.a[this.top--];
        }
    }
}

// Function to reverse the string
function reverse(str) {
    let n = str.length;
    let stack = new Stack(n);

    // Push all characters to stack
    for (let i = 0; i < n; i++) {
        stack.push(str[i]);
    }

    // Pop all characters from stack and build reversed string
    let reversedStr = "";
    for (let i = 0; i < n; i++) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Driver Code
let s = "GeeksQuiz";

// Call reverse function
let reversed = reverse(s);

// Print the reversed string
console.log("Reversed string is:", reversed);


















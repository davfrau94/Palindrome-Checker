document.getElementById("check-btn").addEventListener("click", function() {
    const input = document.getElementById("text-input").value;
    const result = document.getElementById("result");

    if (input.trim() === "") {
        alert("Please input a value.");
        return;
    }

    const palindromeCheck = isPalindrome(input);
    result.textContent = `${input} is ${palindromeCheck ? "" : "not "} a palindrome.`;
});

function isPalindrome(str) {
    const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}
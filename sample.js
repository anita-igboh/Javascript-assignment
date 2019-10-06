
// (N.B: Please uncomment "document.write" where necessary to view in browser)

// Example 1. suming up numbers
function add(num1, num2, num3) {
    var total = num1 + num2 + num3;
    // document.write(total);
}
add(10, 20, 30);


// Example 2. Using break to discontinue a loop
var text = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    text += "The number is " + i + "<br>";
}
// document.write(text);


// Example 3. else...if statement
var num = prompt("Pick a number");
if (num < 10) {
    document.write("Small");
} else if (num < 100) {
    document.write("Medium");
} else {
    //     document.write("Large");
    // }

   
    // Example 4. Using switch cases
    var horoscope = prompt("What's your month of birth? Enter first letter as caps")
    switch (horoscope) {
        case "April":
            document.write("You're probably Aries.");
            break;
        case "May":
            document.write("I guess you're Taurus");
            break;
        case "June":
            document.write("You're probably Gemini");
            break;
        case "July":
            document.write("You could be Leo.");
            break;
        case "November":
            document.write("Sagittarus?");
            break;
        default:
            //         document.write("You gotta give me some time to think");
            // }

           
            // Example 5. Iterating through array items using For loop
            function greaterThanTen(arr) {
                let newArr = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > 10) {
                        newArr.push(arr[i]);
                    }
                }
                return newArr;
            }

            //   document.write(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

            
            //   Example 6. Removing items using splice method and reducing them
            var sumOfTen = function (arr) {
                arr.splice(1, 2);
                return arr.reduce(getTotal);
            }
            function getTotal(a, b) {
                return a + b
            }
            // document.write(sumOfTen([2, 5, 1, 5, 2, 1]));

            
            // Example 7. Using the slice method on an array of strings
            // document.write(["Fola", "Maria", "Ogechi", "Anita", "Tejiri"].slice(2, 4));

            
            // Example 8. Looping through an array of objects
            var cars = [
                {
                    make: "honda",
                    model: "civic",
                    year: 2014,
                    color: "blue"
                },
                {
                    make: "toyota",
                    model: "camry",
                    year: 2000,
                    color: "red"
                },
                {
                    make: "ford",
                    model: "mustang",
                    year: 2005,
                    color: "black"
                }
            ]
            for (i = 0; i < cars.length; i++) {
                if (cars[i].year < 2010) {
                    // document.write(cars[i].make + ", " + cars[i].model)
                }
            }



            // Example 9. String concactenation
            var first = "+234"
            var second = "8069745332"
            // document.write(first + second)

           
            // Example 10. Sorting using the reverse array method
            var nums = [10, 20, 30, 40, 50];
            nums.reverse();
            // document.write(nums)


// Variable names are case sensitive;“a” & “A” is different. 
fullname = "Vikas Pawar";
fullName = "Vikas Pawar";
FULLNAME = "Vikas Pawar";

console.log(fullname);
console.log(fullName);
console.log(FULLNAME);

// Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
fullName123 = "Hello";
full_Name ="1234";
_fullname$ = "namste";

console.log(fullName123);
console.log(full_Name);
console.log(_fullname$);

// Only a letter, underscore( _ ) or $ should be 1st character.
$fullName ="Tom And Jarry";

__Fullname = "Tom";

console.log($fullName);
console.log(__Fullname);
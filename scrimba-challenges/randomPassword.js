
/*Create a program that generates a random password with a length between 8 and 12 characters. The password should contain at least one uppercase letter,
 one lowercase letter, one number, and one special character (!, @, #, $, %, ^, &).*/

function generatePassword() {
    const length = Math.floor(Math.random() * 5) + 8; // Random password length between 8 and 12
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specials = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    let password = '';
  
    // Add at least one uppercase letter, lowercase letter, number, and special character
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specials[Math.floor(Math.random() * specials.length)];
  
    // Add remaining characters randomly
    for (let i = 4; i < length; i++) {
      const characters = uppercase + lowercase + numbers + specials;
      password += characters[Math.floor(Math.random() * characters.length)];
    }
  
    return password;
  }

  console.log(generatePassword())
  
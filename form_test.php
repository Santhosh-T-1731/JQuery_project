<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form JQuery</title>
    <link rel="stylesheet" href="./form_test.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="./form_test.js"></script>
</head>
<body>

    <div class="form-container">

        <h2 style="color: white;">Registration Form</h2>
        <form id="forms">
            <!-- <span class="error-msg">
                Not completed this form
            </span><br><br> -->
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" name="first_name" value=""><br>
            <span id="f_nameError" class="required">
                Please enter your first name
            </span>
            <br><br>

            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last_name" value="">
            <span id="l_nameError" class="required">
                Please enter your last name
            </span>
            <br><br>

            <label for="email">Email:</label>
            <input type="text" id="email" name="email" value="">
            <span id="emailError" class="required">
                Please enter your email address
            </span>
            <span id="emailInvalidError" class="required">
                Please enter valid email
            </span>
            <br><br>

            <label for="mobile">Mobile:</label>
            <input type="text" id="mobile" name="mobile" value="">
            <span id="contactError" class="required">
                Please enter your mobile number
            </span>
            <br><br>

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" max="<?php echo date("Y-m-d"); ?>" >
            <span id="DOBError" class="required">
                Please select your Date of Birth
            </span>
            <br><br>

            <label>Gender:</label>

            <input type="radio" id="male" name="gender" value="Male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female">
            <label for="female">Female</label><br>
            <span id="genderError"  class="required">
                Required this field
            </span><br><br>

            <label for="os">Working Operating System:</label>
            <span id="OSError"  class="required"><br>
                Required this field
            </span>
            <select id="os" name="os" >
                <option value="">select</option>
                <option value="Windows 10">Windows 10</option>
                <option value="Windows 11">Windows 11</option>
                <option value="Ubuntu">Ubuntu</option>
                <option value="MAC">MAC</option>
            </select><br><br>

            <label>Interested In (Select multiple options):</label><br>
            <span id="interestError"  class="required">
                Required this field
            </span><br>
            <input type="checkbox" id="php" name="interested" value="Php" class="interested_in">
            <label for="php">PHP</label><br>
            <input type="checkbox" id="jquery" name="interested" value="JQuery" class="interested_in">
            <label for="jquery">JQuery</label><br>
            <input type="checkbox" id="javascript" name="interested" value="JavaScript" class="interested_in">
            <label for="javascript">JavaScript</label><br><br>
            <!-- <input type="checkbox" id="python" name="interested_in" value="Python">
            <label for="python">Python</label><br><br> -->

            <label for="message">Message (Optional):</label><br>
            <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>

            <button type="submit" name="submit" id="submit">Submit</button>
        </form>
    </div>
</body>
</html>

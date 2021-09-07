var dob = '';
var gender = '';
var submitInput = document.getElementById ('submit');
        var userNameInput = document.getElementById('user-name');
function isDobValid(dob) {
    return true;
        }
function start() {
        var dobInput = document.getElementById('dob');
        var genderInput = document.getElementById('gender');
        var whenUserEntersDob = () => {
            var value = dobInput.value;
            if (isDobValid(value)) {
                dob = value;
            }
            checkAllTheValues();
        }
        var whenUserEntersGender = () => {
            var value = genderInput.value;
            gender = value;
            checkAllTheValues();
        }
        
        dobInput.addEventListener('input', whenUserEntersDob)
        genderInput.addEventListener('input', whenUserEntersGender)
}
function checkAllTheValues() {
    if (name.length > 2 && dob && gender) {
     
    }
}
function getDayOfTheWeekFromDob(dob) {
    var date = new Date(dob)
    return date.getDay();
}
function getName(dayOfWeek, gender) {
    if (gender == 'female') {
        var girlNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
        var name = girlNames[dayOfWeek]
        return name + " " + dayOfWeek;
    }
    var boyNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    var name = boyNames[dayOfWeek]
    return name + " " + dayOfWeek;
}
function whenSubmitButtonIsClicked() {
    var dayOfWeek = getDayOfTheWeekFromDob(dob)
    var name = getName(dayOfWeek, gender)
    userNameInput.innerText = name;
    console.log({ name, dayOfWeek })
}

submitInput.addEventListener('click', whenSubmitButtonIsClicked)
start();
console.log("hello");

// Variables For Datepicker

let datePicker = document.getElementById('datePicker');
let choseDate = document.getElementById('choseDate');

// Variables For Prinitng Values

let ageYear = document.getElementById('ageYear');
let ageMonth = document.getElementById('ageMonth');
let ageDays = document.getElementById('ageDays');
let ageHours = document.getElementById('ageHours');
let ageSeconds = document.getElementById('ageSeconds');
let ageMiliSeconds = document.getElementById('ageMiliSeconds');

datePicker.addEventListener('change',function(){

	let options = {year: 'numeric', month: 'long', day: 'numeric'};
	let selectedDate = new Date(this.value);
	let DOB = selectedDate.toLocaleDateString('en-US',options);

	
	choseDate.innerHTML = "DOB : " + " " + DOB;


	let miliSeconds_Btw_DOB = Date.parse(DOB);
	let miliSecond_Btw_Now = Date.now();

	let age_in_MiliSeconds = miliSecond_Btw_Now -  miliSeconds_Btw_DOB;

	// console.log(age_in_MiliSeconds);

	let miliSeconds = age_in_MiliSeconds;
	let second = 1000;
	let minute = second*60;
	let hour = minute*60;
	let day = hour*24;
	let month = day*30;
	let year = day*365;



	// NOW START THE CALCULATION

	let years = Math.round(miliSeconds/year);
	let months = years*12;
	let days = years*365;
	let hours = Math.round(miliSeconds/hour);
	let seconds = Math.round(miliSeconds/second);



	// Now it is time to print values in boxes

	ageYear.innerHTML = years
	ageMonth.innerHTML = months
	ageDays.innerHTML = days
	ageHours.innerHTML = hours
	ageSeconds.innerHTML = seconds
	ageMiliSeconds.innerHTML = miliSeconds;

	document.querySelector('.age-calc').classList.add('expand');
})
const appointments = [];
const waitList = [];
const bookedDate = [];
const bookedTime = [];
const defaultTime = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
let radioOption = document.getElementById("radioOptionGroup")
let appServices = document.getElementById("appointmentService")
let waitServices = document.getElementById("waitService")
let services = ["Adult Full Haircut", "Children's Haircut", "Beard Cut", "Shave"]


for (var i = 0; i < services.length; i++) {
	appServices.innerHTML += `<option value="${services[i]}">${services[i]}</option>`;
	waitServices.innerHTML += `<option value="${services[i]}">${services[i]}</option>`;

}


// Booking Appointment

	document.getElementById("appointmentDate").addEventListener("change", function(){
		const input = this.value;
	    console.log(input); //e.g. 2015-11-13
	    radioOption.innerHTML = ""


	    let availability = bookedDate.indexOf(input) == -1;
	    console.log(availability);

	    if (availability = true) {
	    	for (var i = 0; i < defaultTime.length; i++) {
	    		console.log(defaultTime[i]);
	    		radioOption.innerHTML += `<div class="form-check form-check-inline">
										  <input class="form-check-input" type="radio" name="availableTims" id="availableTime" value="${defaultTime[i]}">
										  <label class="form-check-label" for="inlineRadio1">${defaultTime[i]}</label>
										</div>`
				console.log(radioOption);
	    	}

	    }
	});

	document.getElementById("appButtonProceed").addEventListener("click", function() {
		let appFName = document.getElementById("appointmentFName").value;
		let appLName = document.getElementById("appointmentLName").value;
		let appEmail = document.getElementById("appointmentEmail").value;
		let appPhone = document.getElementById("appointmentPhone").value;
		let appService = document.getElementById("appointmentPhone").value;
		let appDate = document.getElementById("appointmentDate").value;
		let appNumber = appointments.length + 1;
		let appTime = document.querySelector('input[name="availableTims"]:checked').value;
		let form = document.getElementById("appointBookingForm")

		



		console.log(appTime);

		const appointmentBooking = { 
			first: appFName,
			last: appLName,
			email: appEmail,
			phone: appPhone,
			service: appService,
			dateAdded: appDate,
			appnum: appNumber,
			time: appTime }

		appointments.push(appointmentBooking); 

		function removeRow(row) {
			var i = row.parentNote.parentNote.rowIndex;
			document.getElementById("tbody").deleteRow(i)
		}


		function drawTable(tbody) {
			
			
			
			var tr, td, closeAppBtn; 
			closeAppBtn = document.createElement('input');
				closeAppBtn.type = "button";
				closeAppBtn.class = "closeBtn"
				closeAppBtn.value = "x"

			tbody = document.getElementById(tbody);
				tr = tbody.insertRow(tbody.rows.length);
				td = tr.insertCell(tr.cells.length); 
				td.innerHTML = "Appointment # " + appNumber;
				td = tr.insertCell(tr.cells.length);
				td.innerHTML = appTime;
				td = tr.insertCell(tr.cells.length);	
				td.appendChild(closeAppBtn);



		}

		drawTable("appointmentTable");


		form.reset();
		radioOption.innerHTML = ""


	});

// Adding to Waitlist

	document.getElementById("waitProceed").addEventListener("click", function() {
		let waitFName = document.getElementById("waitFirstName").value
		let waitLName = document.getElementById("waitLastName").value
		let waitEmail = document.getElementById("waitEmail").value
		let waitPhone = document.getElementById("waitPhone").value
		let waitService = document.getElementById("waitService").value
		let waitDate = new Date();
		let waitTime = waitDate.getHours() + ":" + (waitDate.getMinutes()<10?'0':'') + waitDate.getMinutes()
		let waitTimeWaiting
		

		const waitListAdd = {
			first: waitFName,
			last: waitLName,
			email: waitEmail,
			phone: waitPhone,
			service: waitService,
			dateAdded: waitDate,
			timeAdded: waitTime

		}

		waitList.push(waitListAdd);

		function drawTable(tbody) {
			var tr, td;
			tbody = document.getElementById(tbody);
			tr = tbody.insertRow(tbody.rows.length);
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = waitFName + " " + waitLName;
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = waitService;
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = waitTime;
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = "60 mins"
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = "X";


		}
		drawTable("waitListTable");
		console.log(waitTime);



	})


// Up Next Name


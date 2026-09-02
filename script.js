let selectedCarRate = 0;
// Function called when user clicks "Select Car"
function selectCar(carName,ratePerDay) {
    document.getElementById('carSelect').value = carName;
    selectedCarRate = ratePerDay;
    calculateTotal();

    // Scroll smoothly to form
    document.getElementById('rent').scrollIntoView({ behavior:'smooth'});
}
// Calculate rental price based on start and end date
function calculateTotal(){
    const rentDateVal = document.getElementById('rentDate').value;
    const returnDateVal = document.getElementById('returnDate').value;

    if (rentDateVal && returnDateVal && selectedCarRate > 0) {
        const start = new Date(rentDateVal);
        const end = new Date(returnDateVal);

        const diffTime = end - start;
        const diffDays = Math.ceil(diffTime / (1000*60*60*24));

        if (diffDays > 0){
            const total = diffDays * selectedCarRate;
            document.getElementById('totalPrice').value = total.toLocaleString() +"FCFA";
        } else {
            document.getElementById('totalPrice').value = "Invalid Date Range";
        }
    }
}
function toggleServiceType() {
    const serviceType = document.getElementById('serviceType').value;
    const dateSection = document.querySelector('.form-group.inline');
    if (serviceType ==='buy'){
        dataSection.style.display = 'none';
        if (selectedCarRate){
       }
    } else {
        dateSection.style.display = 'flex';
        calculateTotal();
    }
}
// Event Listeners for Date Changes
document.getElementById('rentDate').addEventListener('change',calculateTotal);
document.getElementById('returnDate').addEventListener('change',calculateTotal);

// Form Submission Handling
document.getElementById('rentalForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const customer = document.getElementById('customerName').value;
    const car = document.getElementById('carSelect').value;
    const price = document.getElementById('totalPrice').value;

    if (!car) {
        alert("Please select a car first!");
        return;
    }
    alert(`Thank you, ${customer}! Your request to rent the ${car} for ${price} has been submitted.`);
});
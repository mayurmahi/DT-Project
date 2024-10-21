// Simple client-side routing
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Placeholder for wallet connection
function connectWallet() {
    alert("Connect wallet functionality is not implemented yet.");
}

// Placeholder for creating campaigns
function createCampaign() {
    alert("Create campaign functionality is not implemented yet.");
}

// Contribute to a campaign (Mock Function)
function contributeToCampaign(event) {
    event.preventDefault();
    const amount = event.target.querySelector('input').value;
    alert(`You have successfully contributed ${amount} ETH!`);
    event.target.reset();
}
// Local storage for saving campaigns
let campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];

// Function to handle campaign submission
function submitCampaign(event) {
    event.preventDefault();

    // Get form data
    const campaignTitle = document.getElementById("campaignTitle").value;
    const campaignDescription = document.getElementById("campaignDescription").value;
    const requiredAmount = document.getElementById("requiredAmount").value;
    const campaignImage = document.getElementById("campaignImage").files[0];

    // Create a new campaign object
    const newCampaign = {
        title: campaignTitle,
        description: campaignDescription,
        requiredAmount: requiredAmount,
        imageUrl: URL.createObjectURL(campaignImage),
        id: campaigns.length + 1 // Generate a new ID based on the number of campaigns
    };

    // Save to local storage
    campaigns.push(newCampaign);
    localStorage.setItem("campaigns", JSON.stringify(campaigns));

    // Redirect to discover page
    window.location.href = "discover.html";
}

// Function to load campaigns on Discover page
function loadCampaigns() {
    const campaignList = document.getElementById("campaignList");

    // Clear existing campaign items
    campaignList.innerHTML = "";

    // Load campaigns from local storage
    campaigns.forEach(campaign => {
        const campaignItem = document.createElement("div");
        campaignItem.className = "campaign-item";
        
        campaignItem.innerHTML = `
            <img src="${campaign.imageUrl}" alt="Campaign Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px; margin-bottom: 10px;">
            <h3>${campaign.title}</h3>
            <p>${campaign.description}</p>
            <p><strong>Goal: ${campaign.requiredAmount} ETH</strong></p>
            <a href="campaign-details.html?id=${campaign.id}" class="cta-btn">View Campaign</a>
        `;

        campaignList.appendChild(campaignItem);
    });
}

// Call `loadCampaigns()` only on Discover page
if (window.location.pathname.includes("discover.html")) {
    loadCampaigns();
}
// Select the form element
const createCampaignForm = document.getElementById('createCampaignForm');

// Add an event listener to handle the form submission
createCampaignForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Show a success notification
    alert('You have successfully submitted the campaign!');

    // Here, you can add additional code to handle campaign data,
    // like saving it to local storage or sending it to a backend server.

    // Optionally, redirect the user back to the Discover Campaign page
    window.location.href = 'discover.html';
});



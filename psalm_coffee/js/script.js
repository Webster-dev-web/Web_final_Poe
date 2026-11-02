// FAQ Accordion

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(button => {
    button.addEventListener("click", () => {

        const accordionItem = button.parentElement;
        const isActive = accordionItem.classList.contains("active");

        // Close all accordion items
        document.querySelectorAll(".accordion-item").forEach(item => {
            item.classList.remove("active");
            item.querySelector(".accordion-button")
                .setAttribute("aria-expanded", "false");

            item.querySelector(".accordion-icon").textContent = "+";
        });

        // Open the selected item
        if (!isActive) {
            accordionItem.classList.add("active");
            button.setAttribute("aria-expanded", "true");
            button.querySelector(".accordion-icon").textContent = "−";
        }
    });
});

// MODAL FUNCTIONALITY

const modal = document.getElementById("coffeeModal");

const openModal = document.getElementById("openModal");

const closeModal = document.getElementById("closeModal");

// Open modal
if (openModal && modal) {

    openModal.addEventListener("click", function() {
        modal.style.display = "flex";
    });

}

// Close modal
if (closeModal && modal) {

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

}

// Close modal when clicking outside
if (modal) {

    window.addEventListener("click", function(event) {

        if (event.target === modal) {
            modal.style.display = "none";
        }

    });

}

// =================================
// FEATURE 6: SERVICE FILTERING
// =================================

const filterButtons = document.querySelectorAll(".filter-btn");

const serviceItems = document.querySelectorAll(
"#serviceItems li"
);

filterButtons.forEach(button => {

button.addEventListener("click", function() {  

    // Get selected category  
    const selectedCategory = this.dataset.category;  

    // Update active button  
    filterButtons.forEach(btn => {  
        btn.classList.remove("active");  
    });  

    this.classList.add("active");  

    // Filter services  
    serviceItems.forEach(item => {  

        const itemCategory = item.dataset.category;  

        if (  
            selectedCategory === "all" ||  
            selectedCategory === itemCategory  
        ) {  
            item.classList.remove("hidden");  
        } else {  
            item.classList.add("hidden");  
        }  

    });  

});

});


// =================================
// FEATURE 7: IMAGE GALLERY LIGHTBOX
// =================================

const galleryImages = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");

// Open enlarged image
galleryImages.forEach(image => {

    image.addEventListener("click", function() {

        lightbox.style.display = "flex";

        lightboxImage.src = this.src;

        lightboxImage.alt = this.alt;

    });

});

// Close using X button
closeLightbox.addEventListener("click", function() {

    lightbox.style.display = "none";

});

// Close when clicking outside the image
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// Close using Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        lightbox.style.display = "none";

    }

});


// ENQUIRY FORM
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("fullname").value.trim();
        const enquiryType = document.getElementById("enquiryType").value;
        const response = document.getElementById("responseMessage");

        response.textContent = "Thank you, " + name +
            "! Your " + enquiryType.toLowerCase() +
            " enquiry has been received. Psalm Coffee will contact you soon.";

        response.style.color = "#315b3a";

        enquiryForm.reset();
    });
}


// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        const subject = encodeURIComponent("Psalm Coffee - " + messageType);

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nPhone: " + phone +
            "\nMessage Type: " + messageType +
            "\n\nMessage:\n" + message
        );

        const emailLink = "mailto:odette.krige@gmail.com?subject=" +
            subject + "&body=" + body;

        document.getElementById("contactResponse").textContent =
            "Your email app will open with your message ready. Please review it and press Send.";

        window.location.href = emailLink;
    });
}
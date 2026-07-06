document.addEventListener("DOMContentLoaded", function () {
    const scrollSections = [
        {
            arrowParent: ".food_option_text",
            scrollBox: ".food_images"
        },
        {
            arrowParent: ".shop_instamart_text",
            scrollBox: ".instamart_photo"
        },
        {
            arrowParent: ".dineout_text",
            scrollBox: ".dineout_hotel_rating_banner"
        }
    ];

    scrollSections.forEach(section => {
        const parent = document.querySelector(section.arrowParent);
        const scrollContainer = document.querySelector(section.scrollBox);

        if (parent && scrollContainer) {
            const leftBtn = parent.querySelector(".lefta");
            const rightBtn = parent.querySelector(".righta");

            const scrollAmount = 400;

            rightBtn.addEventListener("click", () => {
                scrollContainer.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth"
                });
            });

            leftBtn.addEventListener("click", () => {
                scrollContainer.scrollBy({
                    left: -scrollAmount,
                    behavior: "smooth"
                });
            });

            leftBtn.style.cursor = "pointer";
            rightBtn.style.cursor = "pointer";
        }
    });
});
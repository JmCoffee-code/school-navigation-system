document.addEventListener("DOMContentLoaded", () => {
    const buildings = {
        main: {
            name: "Main Building",
            offices: ["Registrar's Office", "Finance Office", "OSA Office", "Research Office",
                "Library Office", "Saint Augustine Laboratory and Diagnostic Center"],
            rooms: ["Room 1", "Room 2", "Room 3", "Room 4", "Room 5"],
            photo: "images/GVCMainBuildingImage.jpg",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.9753858531258!2d124.85576823918616!3d6.490732725013607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f81890020505cf%3A0x2cfce49d7b4a72d6!2sGreen%20Valley%20College%20Foundation%20Inc.!5e1!3m2!1sen!2sph!4v1785368257961!5m2!1sen!2sph"
        },
        annex: {
            name: "Annex Building",
            offices: ["Computer Laboratory 1", "Computer Laboratory 2", "Faculty Office", "Dean's Office"],
            rooms: ["Engineering Room 1", "Engineering Room 2", "Engineering Room 3", "Engineering Room 4"],
            photo: "images/GVCAnnexBuildingImage.png",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.5198379418337!2d124.84320016711688!3d6.500760170164133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8190005b3984f%3A0x6a6ea4c8a3a11e27!2sJessa%20Queens!5e1!3m2!1sen!2sph!4v1785377735624!5m2!1sen!2sph"
        }
    };


    function updateBuildingInfo(buildingKey) {
        const building = buildings[buildingKey];
        document.getElementById("buildingName").textContent = building.name;


        const officesList = document.getElementById("buildingOffices");
        officesList.innerHTML = "";
        building.offices.forEach(office => {
            const li = document.createElement("li");
            li.textContent = "• " + office;
            officesList.appendChild(li);
        });

        const roomsList = document.getElementById("buildingRooms");
        roomsList.innerHTML = "";
        building.rooms.forEach(room => {
            const li = document.createElement("li");
            li.textContent = "• " + room;
            roomsList.appendChild(li);
        });

        // Update photo
        const photoElement = document.getElementById("buildingPhoto");
        photoElement.src = building.photo;

        // 🔑 Swap map iframe
        const mapContent = document.getElementById("mapContent");
        mapContent.innerHTML = `
    <iframe src="${building.mapEmbed}"
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
`;

    }

    document.getElementById("toolbars").addEventListener("click", (e) => {
        const button = e.target.closest("button");
        if (!button) return;

        const buildingButtons = document.querySelectorAll("#toolbars button");

        if (button.id === "mainBuildingBtn") {
            updateBuildingInfo("main");
        }
        if (button.id === "annexBuildingBtn") {
            updateBuildingInfo("annex");
        }

        // Reset highlight
        buildingButtons.forEach(btn => {
            btn.classList.remove("bg-green-700", "text-white");
            btn.classList.add("hover:bg-gray-100", "text-gray-600");
        });

        // Highlight clicked
        button.classList.add("bg-green-700", "text-white");
        button.classList.remove("hover:bg-gray-100", "text-gray-600");
    });
});

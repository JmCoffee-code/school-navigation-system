document.addEventListener("DOMContentLoaded", () => {
    const buildings = {
        main: {
            name: "Main Building",
            offices: ["Registrar's Office", "Finance Office", "OSA Office", "Research Office",
                "Library Office", "Saint Augustine Laboratory and Diagnostic Center"],
            rooms: []
        },
        annex: {
            name: "Annex Building",
            offices: ["Computer Laboratory 1", "Computer Laboratory 2", "Faculty Office", "Dean's Office"],
            rooms: ["Engineering Room 1", "Engineering Room 2", "Engineering Room 3", "Engineering Room 4"]
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
    }

    document.getElementById("toolbars").addEventListener("click", (e) => {
        const buildingButtons = document.querySelectorAll("#toolbars button");

        if (e.target.id === "mainBuildingBtn") {
            updateBuildingInfo("main");

            // Reset highlight
            buildingButtons.forEach(btn => {
                btn.classList.remove("bg-green-700", "text-white");
                btn.classList.add("hover:bg-gray-100", "text-gray-600");
            });

            // Highlight clicked
            e.target.classList.add("bg-green-700", "text-white");
            e.target.classList.remove("hover:bg-gray-100", "text-gray-600");
        }

        if (e.target.id === "annexBuildingBtn") {
            updateBuildingInfo("annex");

            // Reset highlight
            buildingButtons.forEach(btn => {
                btn.classList.remove("bg-green-700", "text-white");
                btn.classList.add("hover:bg-gray-100", "text-gray-600");
            });

            // Highlight clicked
            e.target.classList.add("bg-green-700", "text-white");
            e.target.classList.remove("hover:bg-gray-100", "text-gray-600");
        }
    });


});

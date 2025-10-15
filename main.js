const saveBtn = document.getElementById("saveBtn");
const passInput = document.getElementById("passInput");
const textArea = document.querySelectorAll("textarea");


const blobUrl = "https://jsonblob.com/api/jsonBlob/1428083794094776320";

function loadData() {
    fetch(blobUrl)
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch data");
            return response.json();
        })
        .then(dataObj => {
            textArea[0].value = dataObj.mainStory;
            textArea[1].value = dataObj.MCConnections;
            textArea[2].value = dataObj.detailsAndSuch;
        })
        .catch(err => {
            console.error("Error loading JSONBlob:", err);
        });
}

function saveData(data) {
    fetch(blobUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })
    .then(response => {
        if (!response.ok) throw new Error("Failed to save data");
        alert("Zapisano pomyślnie!");
    })
    .catch(error => {
        console.error("Error saving JSONBlob:", error);
        alert("Błąd przy zapisie danych!");
    });
}

document.addEventListener("DOMContentLoaded", loadData);

saveBtn.addEventListener("click", () => {
    let password = passInput.value;

    let data = JSON.stringify({
        mainStory: textArea[0].value,
        MCConnections: textArea[1].value,
        detailsAndSuch: textArea[2].value
    });

    if (password === "") {
        alert("Nie wpisałeś hasła!");
        return;
    }
    else if (password === "Erykskurczybyk") {
        saveData(data);
        passInput.value = "";
        return;
    }
    else {
        alert("Hasło nieprawidłowe!");
        return;
    }
});

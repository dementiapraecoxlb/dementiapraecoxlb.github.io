const saveBtn = document.getElementById("saveBtn");
const passInput = document.getElementById("passInput");
const textArea = document.querySelectorAll("textarea");

function loadData() {
    let data = localStorage.getItem("data");

    if (data === null) {
        alert("Brak danych w pamięci");
        return;
    }
    else {
        let dataObj = JSON.parse(data);
        textArea[0].value = dataObj.mainStory;
        textArea[1].value = dataObj.MCConnections;
        textArea[2].value = dataObj.detailsAndSuch;
    }
}

function saveData(data) {
    localStorage.setItem("data", data);
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
        alert("Zapisano pomyślnie!");
        return;
    }
    else {
        alert("Hasło nieprawidłowe!");
        return;
    }
});
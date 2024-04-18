const descriptionBtn = document.getElementById("companyDescription");
const executivesBtn = document.getElementById("keyExecutives");
const governanceBtn = document.getElementById("corporateGovernance");

const description = document.getElementById("description");
const executives = document.getElementById("executives");
const governance = document.getElementById("governance");

descriptionBtn.addEventListener("click", function () {
  {
    if (description.style.display === "block") {
      description.style.display = "none";
    } else {
      description.style.display = "block";
    }
  }
  executives.style.display = "none";
  governance.style.display = "none";
});

executivesBtn.addEventListener("click", function () {
  description.style.display = "none";
  {
    if (executives.style.display === "block") {
      executives.style.display = "none";
    } else {
      executives.style.display = "block";
    }
  }
  governance.style.display = "none";
});

governanceBtn.addEventListener("click", function () {
  description.style.display = "none";
  executives.style.display = "none";
  {
    if (governance.style.display === "block") {
      governance.style.display = "none";
    } else {
      governance.style.display = "block";
    }
  }
});

fetch(
  "https:www.alphavantage.co/query?function=OVERVIEW&symbol=UBS&apikey=AITPJ71HO14DD4IK",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
).then((response) => response.json())
.then((data) => {
    let weekHigh = data["52WeekHigh"];
    let weekHighCell = document.querySelector(".weekhighdata");
    weekHighCell.textContent = weekHigh;
    let weekLow = data["52WeekLow"];
    let weekLowCell = document.querySelector(".weeklowdata");
    weekLowCell.textContent = weekLow;
    let marketCap = data["MarketCapitalization"];
    let marketCapCell = document.querySelector(".marketcapdata");
    marketCapCell.textContent = marketCap;
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });


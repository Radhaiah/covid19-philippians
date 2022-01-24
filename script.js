document.body.innerHTML = `<div class="heading-container">
<h1>COVID-19 Philippines country LIST</h1>
<img src="https://www.who.int/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1024v.jpg?Culture=en&sfvrsn=4dba955c_6" alt="brew" class="icon" width="150px" height="100px" />
</div>
<div id="mainContainer" class="table table bordered table-striped "></div>
`;

const getData = async () => {
  try {
    const data = await fetch("https://api.covid19api.com/live/country/Philippines/status/confirmed/date/2020-03-21T13:13:30Z");
    const philippinescountries = await data.json();
    mainContainer.innerHTML = "";
    philippinescountries.forEach((covidcountries) => {
      displayData(covidcountries);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();
const displayData = (obj) => {
  mainContainer.innerHTML += `
  <div class="container">
  <h3 class="blue">ID NO:<span>${obj.ID}</span></h3>
  <td><h5 class="para blue">Country Name:<span>${obj.Country}</span></h5>
  <td><h5 class="para blue">Confirmed cases:<span>${obj.Confirmed}</span></h5>
  <td><h5 class="para blue">Deaths:<span>${obj.Deaths}</span></h5>
  <td><h5 class="para blue">Recovered:<span>${obj.Recovered}</span></h5>
  <td><h5 class="para blue">Active<span>${obj.Active}</span></h5>
  <td><h5 class="para blue">Date:<span>${obj.Date}</span></h5>
  </div>
  `;
};

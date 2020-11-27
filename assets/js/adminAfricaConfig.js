let instance;
// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.

var data = [
       ['ug', 0], //Uganda
       ['ng', 1], //Nigeria
    // ['st', 2],
       ['tz', 3], //Tanzania
       ['sl', 4], //Sierra Leone
       ['gw', 5], //Guinea-Bissau
    // ['cv', 6],
    // ['sc', 7],
    // ['tn', 8],
       ['mg', 9], //Madagascar
       ['ke', 10], //Kenya
       ['cd', 11], //Democratic Republic of Congo
    // ['fr', 12],
       ['mr', 13], //Mauritania
    // ['dz', 14],
    // ['er', 15],
    // ['gq', 16],
    // ['mu', 17],
       ['sn', 18], //Senegal
       ['km', 19], //Comoros
       ['et', 20], //Ethiopia
       ['ci', 21], //Côte d'Ivoire
       ['gh', 22], //Ghana
       ['zm', 23], //Zambia
       ['na', 24], //Namibia
       ['rw', 25], //Rwanda
    // ['sx', 26],
       ['so', 27], //Somalia
       ['cm', 28], //Cameroon
       ['cg', 29], //Congo
    // ['eh', 30],
       ['bj', 31], //Benin
       ['bf', 32], //Burkina Faso
       ['tg', 33], //Togo
       ['ne', 34], //Niger
    // ['ly', 35],
       ['lr', 36], //Liberia
       ['mw', 37], //Malawi
       ['gm', 38], //The Gambia
       ['td', 39], //Chad
       ['ga', 40], //Gabon
    // ['dj', 41],
       ['bi', 42], //Burundi
    // ['ao', 43],
       ['gn', 44], //Guinea
       ['zw', 45], //Zimbabwe
    // ['za', 46],
       ['mz', 47], //Mozambique
       ['sz', 48], //Eswatini/Swaziland
       ['ml', 49], //Mail
       ['bw', 50], //Botswana
       ['sd', 51], //Sudan
    // ['ma', 52],
    // ['eg', 53],
       ['ls', 54], //Lesotho
       ['ss', 55], //South Sudan
       ['cf', 56] //Central African Republic
];

// Create the chart
Highcharts.mapChart("container", {
  chart: {
    map: "custom/africa",
    events: {
      load: () => {
            instance = tippy('.highcharts-point[fill="#007E3B"]', {
                arrow: `<svg width="53" height="60" viewBox="0 0 53 60" transform="rotate(0)"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.861279 59.9631L0.861275 0.240383L52.5827 30.1018L0.861279 59.9631Z" fill="black" fill-opacity="0.76"/>
                </svg>`,
          allowHTML: true,
          content: ``,
          trigger: "click",
          maxWidth: "23.43vw",
          followCursor: "initial",
          interactive: true,
          appendTo: () => document.body,
          placement: "auto",
                hideOnClick: true,
        
                offset: [20, 50],
          onTrigger(instance, event) {
            //  console.log(event.target)
            // ...
        
          },
          onUntrigger(instance, event) {
        
          },
        });
      },
    },
  },

  colors: ["#007E3B"],

  title: {
    text: "",
  },

  subtitle: {
    // text:
    //   'Source map: <a href="http://code.highcharts.com/mapdata/custom/africa.js">Africa</a>',
  },

  tooltip: {
    enabled: false,
  },

  plotOptions: {
    series: {
      point: {
        events: {
          click: function (e) {
            country = this.name;
            console.log(country);
            instance.forEach((ins) =>
              ins.setContent(
                `<div class="popover-content">
                    <h1 class="country-title">${this.name}</h1>
                    <input class="pop-search" type="text" />
                    <div class="pop-scrollable admin">
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=1 ><span>Fortification</span> <span>Ongoing (SBN)</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Lagos, Nigeria</p>
                                <button class="pop-info-btn"  data-toggle="modal" data-target="#requestModal"></button>
                            </div>
                        </div>
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=2 ><span>Finacial Inclusion</span> <span>Completed</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Port Harcourt, Nigeria</p>
                                <button class="pop-info-btn" data-toggle="modal" data-target="#requestModal"></button>
                            </div>
                        </div>
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=1><span>Product Reformation</span> <span >Ongoing (GAIN)</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Benin, Nigeria</p>
                                <button class="pop-info-btn" data-toggle="modal" data-target="#requestModal"></button>
                            </div>
                        </div>
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=2 ><span>Tax Consultancy</span> <span>Completed</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Abuja, Nigeria</p>
                                <button class="pop-info-btn"></button>
                            </div>
                        </div>
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=3 ><span>Tax Consultancy</span> <span>Requested</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Abuja, Nigeria</p>
                                <button class="pop-info-btn"></button>
                            </div>
                        </div>
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=3 ><span>Tax Consultancy</span> <span>Requested</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Abuja, Nigeria</p>
                                <button class="pop-info-btn"></button>
                            </div>
                        </div>
                    </div>
                    <div class="pop-footer">Scroll to see more</div>
                </div>`
              )
            );
          },
        },
      },
    },
  },

  series: [
    {
      data: data,
      name: "Random data",
      states: {
        hover: {
          color: "#007E3B",
        },
      },
      dataLabels: {
        enabled: false,
        format: "{point.name}",
      },
    },
  ],

  legend: {
    enabled: false,
  },
});

function hideOnClickOutside(selector) {
  const outsideClickListener = (event) => {
    const $target = $(event.target);
    if (!$target.closest(selector).length && $(selector).is(":visible")) {
      console.log("shown");
      $(selector).hide();
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
    console.log("removed");
  };

  document.addEventListener("click", outsideClickListener);
  console.log("added");
}

console.log(instance);

// hideOnClickOutside(".popover");

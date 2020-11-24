let instance;
// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
  ["rw", 25 ],
  ["ke", 10],
  ["mz", 47],
  ["ng", 56],
];
var country = "";
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
          maxWidth: "440px",
          followCursor: "initial",
          interactive: true,
          appendTo: () => document.body,
          placement: "auto",
                hideOnClick: true,
        
                offset: [20, 50],
          onTrigger(instance, event) {
            //  console.log(event.target)
            // ...
            console.log(country);
          },
          onUntrigger(instance, event) {
            country = "destroyed";
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
                    <button class="pop-btn">REQUEST ASSISTANCE</button>
                    <div class="pop-scrollable">
                    <img class="pop-img" src='../../assets/img/OIP (2) 1.jpg' />
                    <p class="pop-article">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                     nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
                     enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                     nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                     nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit 
                     praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    </p>
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

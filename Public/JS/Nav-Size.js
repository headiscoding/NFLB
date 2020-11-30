let Sizing = {
  Large: {
    Nav_Restaurant: `<span>Restaurant Owner</span>`,
    Nav_Event: `<span>Event Organizer</span>`,
    Nav_Volunteer: `<span>Volunteer</span>`,
    Nav_Foodbank: `<span>Foodbanks/Homeless Shelters</span>`,
    Nav_Flowchart: `<span>Flowchart</span>`,
    Nav_Back: `<span>Back</span>`,
    Nav_hours: `<span>Track your volunteer hours!</span>`,
    Nav_Size: `<span>Size</span>`,
  },
  Small: {
    Nav_Restaurant: `<span class="material-icons">local_dining</span>`,
    Nav_Event: `<span class="material-icons">event</span>`,
    Nav_Volunteer: `<span class="material-icons">emoji_people</span>`,
    Nav_Foodbank: `<span class="material-icons">food_bank</span>`,
    Nav_Flowchart: `<span class="material-icons">insert_chart</span>`,
    Nav_Back: `<span class="material-icons">arrow_back</span>`,
    Nav_hours: `<span class="material-icons">schedule</span>`,
    Nav_Size: `<span class="material-icons">arrow_forward_ios</span>`,
  }
}
let Size = (set) => {
  let body = $('Body');
  if (set) {
    if (body.classList.contains("Large")) {
      Object.keys(Sizing.Large).forEach(E => {
        $(`.${E}`).innerHTML = Sizing.Large[E];
      })
    } else {
      Object.keys(Sizing.Small).forEach(E => {
        $(`.${E}`).innerHTML = Sizing.Small[E];
      })
    }
  } else {
    if (body.classList.contains("Large")) {
      body.classList.remove("Large");
      body.classList.add("Small");
      Object.keys(Sizing.Small).forEach(E => {
        $(`.${E}`).innerHTML = Sizing.Small[E];
      })
    } else {
      body.classList.add("Large");
      body.classList.remove("Small");
      Object.keys(Sizing.Large).forEach(E => {
        $(`.${E}`).innerHTML = Sizing.Large[E];
      })
    }
  }
}
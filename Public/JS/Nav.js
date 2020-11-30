let $=(ID,All)=>{
  return All?document.querySelectorAll(ID):document.querySelector(ID)
};
let Pages = {
  Main: `
  No Food Left Behind, also known as a NFLB, is a small food donation app, that doesn't want food to go to waste. The food that you have leftover, should never be wasted and should be donated for a good cause. Click the button that can classify your role in our society. If you are a volunteer that happens to be in high school, you can get credits from this! You can also track your volunteer hours by pressing the button above.
  `,
  Restaurant: `
  This is an endeavour to help the needy and hungry folks of the United States. We assure you that no food will go wasted and every morsel will find its way into a hungry stomach. To offer a hand of support, please register with your restaurant name.
  `,
  Event: `
  Being an event organizer you can post an advert through the app for leftovers or access food available for pick-up. The food must be packaged suitably for the volunteers to pick-up. The advert will send notifications to the registered volunteers, for an available pick-up, from the event location. The volunteers will accept the notification for pick-up with their contact details. If a volunteer isn't able to pick-up, they can nominate another volunteer to pick-up, who is next in line. The volunteer will come and pick-up the leftover packaged food and will deliver it to the local foodbanks or homeless shelters. And complete the food delivery process.
  `,
  Volunteer: `
  Being a volunteer, you are a connecting link between the food donators and the food banks and will facilitate the delivery of the leftover food to stop homeless people from sleeping hungry at night. If you are a high schooler, looking for volunteer hours, register here with your student ID, and then you are all set. We will connect you to the closest food donors (restaurants/event planners) and food banks.
  `,
  Foodbank:`
  The purpose of this app, is to feed the hungry and put the leftovers, and access food to good use. The foodbanks and homeless shelters will be benefited through this app by connecting the source of supply to the need. 
  `,
  Flow: `
  <img class="flow" src="Images/flowchart.jpg" width="460" height="345" />
  `
}
let CurrentPage = 'Main';
let Change_Page = (Self, Page) => {
  if (!['Back', 'Main'].includes(Self.id)) 
    return alert(`${Self.id} has no Page path`);
  if ($(`#${Page}`)) 
    $(`#${Page}`, true).forEach(E => E.style.display='block');
  if ($(`#${CurrentPage}`)) 
    $(`#${CurrentPage}`, true).forEach(E => E.style.display='none');
  CurrentPage = Page;
  $('.Body').innerHTML = Pages[Page];
  $('.Body').className = `Body Type_${Page}`;
  switch (Self.id) {
    case 'Back':
      $(`#Main`, true).forEach(E => E.style.display='block');
      $(`#${Self.id}`).style.display='none';
      break;
    case 'Main':
      $(`#${Self.id}`, true).forEach(E => E.style.display='none');
      $('#Back').style.display='block';
      $('.Nav_Size').style.display='block';
      break;
  }
}
let Load = () => {
  Change_Page({id: "Back"}, 'Main');
  Size(true);
}
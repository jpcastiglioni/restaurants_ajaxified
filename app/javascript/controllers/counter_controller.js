// counter_controller.js

import { Controller } from "stimulus";

// export default class extends Controller {
//   connect() {
//     console.log('Hello!');
//   }
// }

// export default class extends Controller {
//   static targets = [ 'count' ];

//   connect() {
//     console.log(this.countTarget);
//   }
// }

// export default class extends Controller {
//   static targets = [ 'count' ];

//   refresh(event) {
//     console.log(event);
//   }
// }

// export default class extends Controller {
//   static targets = [ 'count' ];

//   refresh() {
//     fetch('/restaurants', { headers: { accept: "application/json" } })
//       .then(response => response.json())
//       .then((data) => {
//         console.log(data);
//       });
//   }
// }

export default class extends Controller {
  static targets = [ 'count' ];

  connect() {
    setInterval(this.refresh, 5000);
  }

  refresh = () => {
    fetch('/restaurants', { headers: { accept: "application/json" }})
      .then(response => response.json())
      .then((data) => {
        debugger
        this.countTarget.innerText = data.restaurants.length;
      });
  }
}

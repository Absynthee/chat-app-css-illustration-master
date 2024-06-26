//easter egg

function happyDog() {
    const elements = document.querySelectorAll('.happydog');
          elements.forEach(element => {
              element.classList.add('show');
          });

          setTimeout(() => {
              elements.forEach(element => {
                  element.classList.remove('show');
              });
          }, 5000); // 5000 milliseconds = 5 seconds
      }

      function walkingDog() {
        const elements = document.querySelectorAll('.walkingdog');
              elements.forEach(element => {
                  element.classList.add('show');
              });
    
              setTimeout(() => {
                  elements.forEach(element => {
                      element.classList.remove('show');
                  });
              }, 5000); // 5000 milliseconds = 5 seconds
          }
    
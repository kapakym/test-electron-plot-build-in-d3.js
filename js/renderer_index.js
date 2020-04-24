const { remote } = require('electron')
const dialog = remote.dialog
 let WIN      = remote.getCurrentWindow()

WIN.on('close', (event) => {
//  let options = {}
 var choice = dialog.showMessageBoxSync(WIN,
  {
    type: 'question',
    buttons: ['Yes', 'No'],
    title: 'Confirm',
    message: 'Do you want exit?'
  });
  console.log(choice)
  if (choice==0)  WIN.destroy()

})


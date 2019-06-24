'use strict'

const Route = use('Route')

Route.group(() => {

    Route.get('/profiles', 'ProfileController.profileLists');
    Route.post('/save', 'ProfileController.saveProfile');
    Route.put('/update/:id', 'ProfileController.updateProfile');
    Route.get('/profile/:id', 'ProfileController.getProfile');
    Route.delete('/delete/:id', 'ProfileController.deleteProfile');

    Route.post('/schedule/', 'ScheduleController.saveSchedule');
    Route.get('/fetch/schedule/', 'ScheduleController.getSchedule');


    Route.post('/upload/', 'ScheduleController.uploadUsers').validator('UploadFileValidator');

    Route.get('/get-profile/:id', 'TestController.getProfile');

}).prefix('api')

Route.post('/bill/add-new', 'TestController.addBill');


Route.any('*', ({ view }) => view.render('welcome'))

//commenting some recommendation of validation

//active_url
//array
//bail
//boolean
//date
//digits:value
//digits_between:min,max
//dimensions => dimensions:min_width=100,min_height=200
//distinct
//'email' => 'email:rfc,dns'
//exists:table,column => this is better //'user_id' => 'exists:App\Models\User,id'
//file
//image
//integer
//



// Need to upgrade
// 1. While login if email is not verified than notify user_error
// 2. Verification Form state district village is not fully optimize

// phone validation :- regex:/^[0-9]{9}$/

//Table name
//1. Country
//2. State
//3. District
//4. Village
//5. Board
//6. Standard
//7. Subject
//8. Hobby
//9. Language
//10. Verification
//11. Contact
//12. Podcast

//Student Side
//1. UserInformation
//2. StudentSubjects => many to many => Subjects
//3. StudentHobbies =. many to many => Hobby
//4. UserInstitute => has one => User

//Teacher Side
//1. UserInformation
//2. UserInstitute
//3.

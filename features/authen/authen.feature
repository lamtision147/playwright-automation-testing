Feature: Authen
Scenario: As a user, I can go to Mission page by url successful
  Given go to url (https://space3.gg/)
  When I click on first mission in list
  Then I saw title as "Space3 Genesis Soul | Space3 Kids - Get Lost Together"
  And URL is https://space3.gg/missions/space3-genesis-soul-the-digiworlds-await

#Author: syntax team
@sprint3  @login
Feature: Login

Background:
Given I see OrangeHrm logo

@smoke
Scenario: Valid login
When I enter valid username and password
And I click login button
Then I successfully logged in


@regression 
Scenario: Invalid login
When I enter invalid username and password
And I click login button
Then I see error message is displayed

@regression 
Scenario: Error message Validation
When I enter invalid username and password I see errorMessage
|userName|Password|errorMessage       |
|Admin   |Admin123|Invalid Credentials|
|Admin1  |Admin124|Invalid Credentials|
|Admin2  |Admin134|Invalid Credentials|
 



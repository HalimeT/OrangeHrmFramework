#Author: your.email@your.domain.com
@addEmployee
Feature: Add Employee


Background:
Given I logged in into OrangeHrm
And I click on PIM link
And I click on add Employee link


@smoke 
Scenario Outline: Add Employee
When I provide Employee details "<firstName>" and "<midName>" and "<lastName>" and "<location>"

And I click on save button
Then I see employee is added succesfully "<firstName>" and "<lastName>"
Examples:
|firstName|midName|lastName|location    |
|Ramiz    |Yusuf  |Tem    |HQ          | 
|Mahir    |Efe    |Tem     |West Office |
|Mirza    |TT     |Aks     |HQ          | 
|Azra     |AA     |Aks     |North Office|

@regression @temp
Scenario: Add Employee and Create Login Details
    When I provide firstname,midname,lastname and location from excelFile
    And I click on create login details
    And I provide all mandatory fields
    And I click on save button
    Then I see employee is added successfully

@regression
  Scenario: Add Employee Labels Verification
    Then I see following labels
      | First Name  |
      | Middle Name |
      | Last Name   |
      | Employee Id |
      | Location    |

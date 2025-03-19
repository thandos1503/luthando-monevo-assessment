Feature: Application Form

  Background:
    Given I am on the homepage page
    And I enter the loan amount "1000"
    And I select the Loan "3 months"
    And I select the loan "Home improvements"
    And I enter my title "Mr"

  Scenario Outline: Scenario 1 - Verify that user phone number is Validation pass when a correct number is entered
    And I enter my <FirstName> and <LastName>
    And I provide my date of birth as <DOB>
    And I input my email address <Email>
    And I submit my contact number <PhoneNumber>
    Then The error message should not appear

    Examples:
  |Amount|FirstName|LastName|DOB         |Email                  |PhoneNumber  |
  |"1000 |"Phillip"|"Smith" |"18/04/1965"|"thandos1503@gmail.com"|"07500000000"|

  
  Scenario Outline: Scenario 2 - Verify that user phone number is Validation fails when an incorrect number is entered
    And I enter my <FirstName> and <LastName>
    And I provide my date of birth as <DOB>
    And I input my email address <Email>
    And I submit my contact number <PhoneNumber>
    Then The error message should appear

    Examples:
  |Amount|FirstName|LastName|DOB         |Email                  |PhoneNumber  |
  |"1000 |"harry"|"Kennedy" |"12/10/1960"|"thandos1503@gmail.com"|"310-323-258"|
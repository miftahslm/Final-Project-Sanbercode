Feature: Login Feature

    Scenario: Login with valid Credentials
        Given I visit the URL
        When I should see the homepage
        When I submit the username
        When I submit the password
        When I click the button login
        Then I verify login success

    Scenario: Login with invalid Credentials
        Given I visit the URL
        When I should see the homepage
        When I submit invalid username
        When I submit invalid password
        When I click the button
        Then I should see an error message for invalid credentials

    Scenario: Login with empty Fields
        Given I visit the URL
        When I should see the homepage
        When I click the button
        Then I should see a required message

    Scenario: Login with invalid Username
        Given I visit the URL
        When I should see the homepage
        When I submit invalid username
        When I submit the password
        When I click the button
        Then I should see an error message for invalid credentials

    Scenario: Login with invalid Password
        Given I visit the URL
        When I should see the homepage
        When I submit the username
        When I submit invalid password
        When I click the button
        Then I should see an error message for invalid credentials

    Scenario: Measure Login Process Time
        Given I visit the URL
        When I should see the homepage
        When I submit the username
        When I submit the password
        When I click the login button
        Then I should see the dashboard page
        And I measure the time taken for the login process

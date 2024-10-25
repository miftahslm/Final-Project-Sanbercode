Feature: Admin Feature
    Scenario: Visit admin page
        Given I visit the URL
        When I should see the homepage
        When I submit the username
        When I submit the password
        When I click the button login
        Then I verify login success
        When I click admin menu
        Then I should see the admin page

    Scenario: Search system users by username
        Given I visit the URL
        When I should see the homepage
        When I submit the username
        When I submit the password
        When I click the button login
        Then I verify login success
        When I click admin menu
        Then I should see the admin page
        When I enter "<username>" in the username field
        And I click the search button

    Scenario: Search system users by employeename
        Given I visit the URL
        When I should see the homepage
        When I submit the username
        When I submit the password
        When I click the button login
        Then I verify login success
        When I click admin menu
        Then I should see the admin page
        When I enter "<employeeName>" in the employee name field
        And I click the search button

    Scenario: Search system users by status
        Given I visit the URL
        When I should see the homepage
        When I submit the username
        When I submit the password
        When I click the button login
        Then I verify login success
        When I click admin menu
        Then I should see the admin page
        When I select the status
        And I click the search button

    Scenario: Search system users by user role
        Given I visit the URL
        When I should see the homepage
        When I submit the username
        When I submit the password
        When I click the button login
        Then I verify login success
        When I click admin menu
        Then I should see the admin page
        When I select the user role
        And I click the search button






Feature: Forgot Password Feature
    Scenario: Forgot Password
        Given I visit the URL
        When I should see the homepage
        When I click forgot password
        Then I should see the reset password page

    Scenario: Reset Password
        Given I visit the URL
        When I should see the homepage
        When I click forgot password
        Then I should see the reset password page
        When I submit the username
        And I click the button of reset password
        Then I should see the message reset password successful

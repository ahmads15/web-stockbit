Feature: Login page

Background: Open browser Stockbit.com

Given User open browser stockbit.com

@s1
Scenario: User input invalid email on login page
    When User input 'ahmadsutarji.com' as email
    And User input 'testing123' as password
    Then User can see alert error message

@s2
Scenario: User input invalid password on login page
    When User input 'ahmadsutarji15@gmail.com' as email
    And User input 'salahpasswordbung' as password
    Then User can see alert error message

@s3
Scenario: User success login with valid password and email
    When User input 'ahmadsutarji15@gmail.com' as email
    And User input 'testing123' as password
    Then User can see stream page stockbit

@s4
Scenario: User verify UI login page 
    Then User can verify UI login page


import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ApplicationPage } from '../pages/ApplicationPage';

let applicationPage: ApplicationPage;


Given('I am on the homepage page', async function () {
  applicationPage = new ApplicationPage(this.page);
  
  await applicationPage.navigateToHomePage();
});

When('I enter the loan amount {string}', async function (amount: string) {
  await applicationPage.inputLoanAmount(amount);
  await applicationPage.clickContinue();
});

When('I select the Loan {string}', async function (period: string) {
  await applicationPage.selectLoanPeriod(period);
});

When('I select the loan {string}', async function (loanUse: string) {
  await applicationPage.selectLoanUse(loanUse);
});

When('I enter my title {string}', async function (title: string) {
  await applicationPage.selectApplicantTitle(title);
  await applicationPage.clickContinue();
});

When('I enter my {string} and {string}', async function (firstName: string, lastName: string) {
  await applicationPage.inputApplicantFirstNameAndLastName(firstName, lastName);
  await applicationPage.clickContinue();
});

When('I provide my date of birth as {string}', async function (DOB: string) {
  await applicationPage.inputApplicantDOB(DOB);
  await applicationPage.clickContinue();
});

When('I input my email address {string}', async function (email: string) {
    await applicationPage.inputApplicantEmail(email);
    await applicationPage.clickContinue();
});

When('I submit my contact number {string}', async function (phone: string) {
  await applicationPage.inputApplicantPhone(phone);
  await applicationPage.clickContinue();
});

Then('The error message should not appear', async function () {
  await expect(this.page.locator('//div[text()="Enter a valid UK mobile phone number"]')).not.toBeVisible();
});

Then('The error message should appear', async function () {
  await expect(this.page.locator('//div[text()="Enter a valid UK mobile phone number"]')).toBeVisible();
});


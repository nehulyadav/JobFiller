import time
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import webbrowser

driver = webdriver.Chrome('/Users/nehulyadav/Downloads/chromedriver')
driver.get('https://miamioh.hiretouch.com/applicant-login')
driver.maximize_window()
username = driver.find_element_by_id('user_name')
username.send_keys("nehulyadav")
password = driver.find_element_by_id('password')
password.send_keys("Pandora132@")
login = driver.find_element_by_id('login')
login.click()
jobApp = driver.find_element_by_id('jobs-side-nav-title')
jobApp.click()
xOfApply = ".//*[@id='apply_to_job']"
apply = driver.find_element_by_xpath(xOfApply);
apply.click()
#start one app
xstart = ".//*[@id='forms_start']"
startButton = driver.find_element_by_xpath(xstart)
startButton.click()

firstName = findElement(By.id("first_name")).getAttribute("value");
target = open('write.txt', 'w')
target.write(firstName)

lastName = findElement(By.id("last_name")).getAttribute("value");
target.write(lastName)

street_1 = findElement(By.id("street_1")).getAttribute("value");
target.write(street_1)

municipality = findElement(By.id("municipality")).getAttribute("value");
target.write(municipality)

postal_code = findElement(By.id("postal_code")).getAttribute("value");
target.write(postal_code)

email = findElement(By.id("email")).getAttribute("value");
target.write(email)

id_number = findElement(By.id("id_number")).getAttribute("value");
target.write(id_number)

email = findElement(By.id("email")).getAttribute("value");
target.write(email)

if findElement(By.id("applicant_enterprise_question_id_16214_28815")).isSelected():
        radio = applicant_enterprise_question_id_16214_28815
radio = applicant_enterprise_question_id_16214_28816
target.write(radio)

select = Select(driver.find_element_by_id('applicant_enterprise_question_id_15798'));
target.write(select.getFirstSelectedOption().getText());

grad = findElement(By.id("applicant_enterprise_question_id_15797")).getAttribute("value");
target.write(grad)
